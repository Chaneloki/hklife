// js/engine.js
// 通用遊戲引擎：條件檢查、效果套用、AP 行動、NPC 關係、訊息、延遲後果、週／學期推進、目標與人生方向判斷
// 呢個檔案唔應該出現「if (id === 'xxx')」呢種寫死個別內容嘅判斷，一切由 data/ 資料表驅動

import { state, clampStat } from "./state.js";
import { actions, getActionById, actionTabs } from "../data/actions.js";
import { getDialogueById } from "../data/dialogues.js";
import { messages, getMessageById } from "../data/messages.js";
import { getConsequenceById } from "../data/consequences.js";
import { getStageById } from "../data/stages.js";
import { locations, getLocationById } from "../data/locations.js";
import { getTermById, getNextTerm } from "../data/schedule.js";
import { termGoals, stageGoals, lifeDirections, getGoalById, getDirectionById } from "../data/goals.js";
import { characters, getCharacterById } from "../data/characters.js";
import { resolveGrowthTendency } from "../data/endings.js";
import { routeSeeds, getRouteSeedById, actionCategorySeedMap, characterRouteSeedMap } from "../data/routeSeeds.js";
import { encounters, getEncountersForLocation } from "../data/encounters.js";
import { messageRules } from "../data/messageRules.js";
import { stageRules, isRouteSeedRestricted } from "../data/stageRules.js";
import { getAttitudeById } from "../data/attitudes.js";
import { personalityTendencies, getTendencyById, getTendencyForAttitude } from "../data/personalityTendencies.js";
import { getNpcReactionRule } from "../data/npcReactionRules.js";

const RELATIONSHIP_DIMENSIONS = ["closeness", "trust", "respect", "dependency", "misunderstanding"];
const DIMENSION_LABELS = { closeness: "親近度", trust: "信任度", respect: "尊重度", dependency: "依賴度", misunderstanding: "誤會值" };
const DEFAULT_RELATIONSHIP = { closeness: 20, trust: 20, respect: 20, dependency: 10, misunderstanding: 0 };

// ============================================================
// NPC 關係系統
// ============================================================
export function getCharacterRelationship(characterId, s = state) {
  if (!s.relationships[characterId]) {
    s.relationships[characterId] = { ...DEFAULT_RELATIONSHIP };
  }
  return s.relationships[characterId];
}

export function applyRelationshipEffects(effects = [], s = state) {
  effects.forEach(({ characterId, dimension, amount }) => {
    const rel = getCharacterRelationship(characterId, s);
    rel[dimension] = clampStat((rel[dimension] ?? 0) + amount);
  });
}

export function addCharacterMemory(characterId, text, s = state) {
  if (!s.characterMemories[characterId]) s.characterMemories[characterId] = [];
  s.characterMemories[characterId].push({ text, week: s.currentWeek, termId: s.currentTermId });
  if (s.characterMemories[characterId].length > 20) s.characterMemories[characterId].shift();
}

// popup／event 本身嘅記憶（同角色記憶分開，方便追蹤「呢件事發生過」）
export function addInteractionMemory(interactionId, text, s = state) {
  if (!s.interactionMemories[interactionId]) s.interactionMemories[interactionId] = [];
  s.interactionMemories[interactionId].push({ text, week: s.currentWeek, termId: s.currentTermId });
}

function markInteraction(characterId, s = state) {
  if (!characterId) return;
  s.lastInteractionWeek[characterId] = s.totalWeeksElapsed ?? 0;
}

export function addKnownCharacter(characterId, s = state) {
  if (!s.knownCharacters.includes(characterId)) s.knownCharacters.push(characterId);
}

// 玩家第一次撞到／識到某個 NPC：加入人物頁，關係由「剛認識」開始，唔會即刻變好友
export function meetCharacter(characterId, source, s = state) {
  const alreadyKnown = s.knownCharacters.includes(characterId);
  addKnownCharacter(characterId, s);
  markInteraction(characterId, s);
  if (!alreadyKnown) {
    const character = getCharacterById(characterId);
    generateReviewLog({
      type: "支線",
      title: `你認識咗${character ? character.name : "一個新朋友"}`,
      body: source || "你哋喺一次日常入面遇見咗對方。",
      tags: ["新認識"]
    }, s);
    applyWillingnessToChange(3, s); // 識新人會令你更願意試唔同嘅相處方式
  }
  return !alreadyKnown;
}

// 每週檢查：長期冇互動嘅已知角色，關係會慢慢變淡／誤會值上升（唔會硬性懲罰，只係自然疏遠）
export function decayOrMaintainRelationships(s = state) {
  getKnownCharacters(s).forEach(character => {
    const ignored = checkCondition({ type: "recentlyIgnoredCharacter", characterId: character.id, weeks: 4 }, s);
    if (!ignored) return;
    const rel = getCharacterRelationship(character.id, s);
    if (rel.closeness <= 10 && rel.misunderstanding >= 40) return; // 已經跌到底，唔再跌
    applyRelationshipEffects([
      { characterId: character.id, dimension: "closeness", amount: -2 },
      { characterId: character.id, dimension: "misunderstanding", amount: 1 }
    ], s);
  });
}

export function getRelationshipStageDetail(characterId, s = state) {
  const character = getCharacterById(characterId);
  if (!character) return { label: "陌生", category: "stranger" };
  const rel = getCharacterRelationship(characterId, s);
  for (const rule of character.relationshipStageRules) {
    const ok = rule.conditions.every(c => (rel[c.dimension] ?? 0) >= c.min);
    if (ok) return { label: rule.stageLabel, category: rule.category || "acquainted" };
  }
  return { label: "陌生", category: "stranger" };
}

export function getRelationshipStage(characterId, s = state) {
  return getRelationshipStageDetail(characterId, s).label;
}

export function generateRelationshipSummary(characterId, s = state) {
  const character = getCharacterById(characterId);
  if (!character) return null;
  const rel = getCharacterRelationship(characterId, s);
  const memories = (s.characterMemories[characterId] || []).slice(-3);
  const stageDetail = getRelationshipStageDetail(characterId, s);
  return {
    character,
    stageLabel: stageDetail.label,
    stageCategory: stageDetail.category,
    dimensions: RELATIONSHIP_DIMENSIONS.map(d => ({ dimension: d, label: DIMENSION_LABELS[d], value: rel[d] ?? 0 })),
    recentMemories: memories,
    attitudeText: buildAttitudeText(character, rel)
  };
}

function buildAttitudeText(character, rel) {
  if ((rel.misunderstanding ?? 0) >= 50) return character.messageStyle.misunderstandingHigh || "佢對你有啲誤會。";
  const primaryDim = character.relationshipDimensions[0] || "closeness";
  if ((rel[primaryDim] ?? 0) >= 55) return character.messageStyle.closenessHigh || "佢對你都幾好感。";
  return character.messageStyle.closenessLow || "佢對你嘅認識仲淺。";
}

// 選項預覽：唔顯示完整數字，淨係話你「可能影響邊個／邊樣嘢」
export function getChoicePreview(choice, s = state) {
  const affectedCharacters = [...new Set((choice.relationshipEffects || []).map(r => r.characterId))]
    .map(id => getCharacterById(id)?.name || id);
  const affectedStats = [...new Set((choice.effects || []).filter(e => e.type === "statChange").map(e => e.stat))];
  const attitude = choice.attitudeTag ? getAttitudeById(choice.attitudeTag) : null;
  const tendency = choice.attitudeTag ? getTendencyForAttitude(choice.attitudeTag) : null;
  const availability = calculateChoiceAvailability(choice, s);

  const riskNotes = [];
  if ((choice.relationshipEffects || []).some(r => r.dimension === "misunderstanding" && r.amount > 0)) {
    riskNotes.push("可能引起少少誤會");
  }
  if ((choice.effects || []).some(e => e.type === "statChange" && ["壓力", "體力"].includes(e.stat) && e.amount !== 0)) {
    riskNotes.push("可能影響你嘅體力或壓力");
  }
  if (choice.delayedConsequences && choice.delayedConsequences.length) {
    riskNotes.push("可能喺之後幾週帶嚟後續");
  }

  return {
    affectedCharacters,
    affectedStats,
    toneLabel: choice.visibleToneLabel || attitude?.label || choice.tone || null,
    tendencyLabel: tendency ? tendency.name : null,
    riskNotes,
    natural: availability.natural,
    hintText: availability.hintText
  };
}

export function generateChoiceOutcomeSummary(choice, s = state) {
  const lines = [];
  const detailed = !!s.showDetailedNumbers;
  (choice.relationshipEffects || []).forEach(r => {
    const char = getCharacterById(r.characterId);
    const name = char ? char.name : r.characterId;
    const dim = DIMENSION_LABELS[r.dimension] || r.dimension;
    if (detailed) {
      lines.push(`${name}${dim} ${r.amount >= 0 ? "+" : ""}${r.amount}`);
    } else {
      lines.push(`${name}${r.amount >= 0 ? "對你嘅" + dim + "有咗變化" : "似乎有啲在意呢件事"}`);
    }
  });
  (choice.effects || []).filter(e => e.type === "statChange").forEach(e => {
    if (detailed) {
      lines.push(`${e.stat} ${e.amount >= 0 ? "+" : ""}${e.amount}`);
    } else {
      lines.push(`你嘅${e.stat}${e.amount >= 0 ? "提升咗少少" : "跌咗少少"}`);
    }
  });
  if (choice.delayedConsequences && choice.delayedConsequences.length) {
    lines.push("⏳ 呢個選擇可能會喺之後幾週帶嚟後續");
  }
  if ((choice.restrictFutureChoices && choice.restrictFutureChoices.length) || (choice.lockFlags && choice.lockFlags.length)) {
    lines.push("💭 呢個回答可能會影響之後嘅對話走向");
  }
  if (choice.addReviewLog) {
    lines.push(`📔 已加入記事簿：${choice.addReviewLog.title}`);
  }
  return lines;
}

// ============================================================
// 態度／人格傾向／改變意願系統
// ============================================================
const UNNATURAL_WILLINGNESS_COST = 15;

export function getDominantTendency(s = state) {
  let bestId = null;
  let bestScore = 0;
  Object.entries(s.personalityTendencies).forEach(([id, score]) => {
    if (score > bestScore) { bestScore = score; bestId = id; }
  });
  return bestScore >= 3 ? getTendencyById(bestId) : null; // 要累積夠先算「明顯傾向」
}

// 呢個選項係咪同玩家目前嘅人格傾向一致？唔一致唔會硬鎖，但要消耗 willingnessToChange
export function calculateChoiceAvailability(choice, s = state) {
  if (!choice.attitudeTag) return { available: true, natural: true, hintText: null };
  const tendency = getTendencyForAttitude(choice.attitudeTag);
  const dominant = getDominantTendency(s);
  const natural = !dominant || !tendency || dominant.id === tendency.id;
  if (natural) return { available: true, natural: true, hintText: null };

  const canAfford = s.willingnessToChange >= UNNATURAL_WILLINGNESS_COST;
  const hintText = canAfford
    ? "你平時好少咁講，需要鼓起少少勇氣，但依家做得到。"
    : "你想咁講，但一時間開唔到口。多啲試吓新嘢，之後呢類回答會變得更自然。";
  return { available: canAfford, natural: false, hintText };
}

export function applyWillingnessToChange(amount, s = state) {
  s.willingnessToChange = clampStat((s.willingnessToChange ?? 30) + amount);
}

export function updatePersonalityTendencies(attitudeId, characterId, s = state) {
  if (!attitudeId) return;
  s.attitudeHistory.push({ attitudeId, characterId: characterId || null, week: s.currentWeek, termId: s.currentTermId });
  if (s.attitudeHistory.length > 80) s.attitudeHistory.shift();
  const tendency = getTendencyForAttitude(attitudeId);
  if (tendency) {
    s.personalityTendencies[tendency.id] = (s.personalityTendencies[tendency.id] || 0) + 1;
  }
}

// NPC 對唔同態度嘅額外反應（唔使逐個 message 寫死，由 npcReactionRules.js 驅動）
export function applyNpcReactionRules(characterId, attitudeId, s = state) {
  if (!characterId || !attitudeId) return [];
  const rule = getNpcReactionRule(characterId);
  if (!rule) return [];
  const bonus = [];
  const push = (dimension, amount) => bonus.push({ characterId, dimension, amount });

  if (rule.npcLikesAttitudes.includes(attitudeId)) { push("closeness", 2); push("misunderstanding", -1); }
  if (rule.npcDislikesAttitudes.includes(attitudeId)) { push("closeness", -2); push("misunderstanding", 2); }
  if (rule.npcRespectsBoundaries && ["refusePolitely", "refuseDirectly", "honestTired", "insistSelf"].includes(attitudeId)) {
    push("respect", 1);
  }
  if (rule.npcSensitiveToSilence && ["staySilent", "changeTopic", "delayReply", "avoidConflict"].includes(attitudeId)) {
    push("misunderstanding", 2);
  }
  if (rule.npcValuesHonesty && attitudeId === "honestTired") push("trust", 2);
  if (rule.npcValuesCuriosity && ["observeFirst", "takeRisk"].includes(attitudeId)) push("respect", 2);
  if (rule.npcValuesReliability && ["acceptWarmly", "followAdult"].includes(attitudeId)) push("trust", 2);
  if (rule.npcValuesReliability && ["staySilent", "changeTopic", "delayReply"].includes(attitudeId)) push("trust", -2);

  applyRelationshipEffects(bonus, s);
  return bonus;
}

// 統一嘅選項處理入口：message／dialogue／popup 嘅 choice 都可以用呢個，套用態度、NPC 反應、傾向、改變意願
function applyChoiceCommonEffects(choice, characterId, s = state) {
  const availability = calculateChoiceAvailability(choice, s);
  if (!availability.natural) {
    applyWillingnessToChange(-UNNATURAL_WILLINGNESS_COST, s);
    applyEffect({ type: "statChange", stat: "壓力", amount: 2 }, s);
    applyEffect({ type: "statChange", stat: "自信", amount: 2 }, s);
  }
  if (choice.attitudeTag) {
    updatePersonalityTendencies(choice.attitudeTag, characterId, s);
    if (characterId) applyNpcReactionRules(characterId, choice.attitudeTag, s);
  }
}

// 對外公開嘅版本，俾 UI／未來擴展直接用（同 applyChoiceCommonEffects 係同一套邏輯）
export function applyAttitudeEffects(choice, characterId, s = state) {
  return applyChoiceCommonEffects(choice, characterId, s);
}

export function calculateChoiceRisk(choice, s = state) {
  return getChoicePreview(choice, s).riskNotes;
}

// 延後嘅 popup 後續，例如「你今次冇即刻反應，但呢件事之後會再搵返你」
export function scheduleInteractionFollowUp(interactionId, dueWeek, s = state) {
  s.pendingPopupFollowUps.push({ interactionId, dueWeek });
}

export function processPopupFollowUps(s = state) {
  const due = s.pendingPopupFollowUps.filter(f => (s.totalWeeksElapsed ?? 0) >= f.dueWeek);
  due.forEach(f => {
    generateReviewLog({
      type: "後續",
      title: "早前嘅事有咗後續",
      body: `你之前喺「${f.interactionId}」入面嘅選擇，依家有咗新發展。`,
      tags: ["延遲後續"]
    }, s);
  });
  s.pendingPopupFollowUps = s.pendingPopupFollowUps.filter(f => (s.totalWeeksElapsed ?? 0) < f.dueWeek);
}

// urgent 訊息如果有 timeoutChoice，逾期未回可以自動套用（第一版暫時未有訊息強制逾期，函式留俾未來擴展）
export function resolveTimeoutChoice(interaction, s = state) {
  if (!interaction || !interaction.timeoutChoice) return null;
  const choice = interaction.timeoutChoice;
  applyEffects(choice.effects || [], s);
  applyRelationshipEffects(choice.relationshipEffects || [], s);
  if (choice.addReviewLog) generateReviewLog(choice.addReviewLog, s);
  return generateChoiceOutcomeSummary(choice, s);
}

// 統一入口：message／dialogue／popup 都可以經呢個函式處理，內部按類型分派到相應嘅 resolver
export function resolveInteractionChoice(interactionType, payload, choiceIndex, s = state) {
  switch (interactionType) {
    case "message":
      return chooseMessageOption(payload, choiceIndex, s);
    case "npcDialogue":
      return { outcomeSummary: [], next: chooseDialogueOption(payload, choiceIndex, s) };
    case "popupEvent":
    case "locationEncounter":
      return resolvePopupChoice(payload.encounterId, payload.characterId, choiceIndex, s);
    default:
      console.warn("未知 interaction 類型：", interactionType);
      return { outcomeSummary: [] };
  }
}

// ============================================================
// 條件檢查
// ============================================================
export function checkCondition(condition, s = state) {
  switch (condition.type) {
    case "statAtLeast":
      return (s.stats[condition.stat] ?? 0) >= condition.amount;
    case "statBelow":
      return (s.stats[condition.stat] ?? 0) < condition.amount;
    case "hasFlag":
      return !!s.flags[condition.flag ?? condition.flagName];
    case "notFlag":
      return !s.flags[condition.flag ?? condition.flagName];
    case "currentStage":
      return s.stageId === condition.stageId;
    case "currentLocation":
      return s.locationId === condition.locationId;
    case "currentWeek":
      return s.currentWeek === condition.week;
    case "currentTerm":
      return s.currentTermId === condition.termId;
    case "backgroundTag":
      return (s._cachedBackgroundTags || []).includes(condition.tag);
    case "hasMemory":
      return s.memories.some(m => m.includes(condition.keyword));
    case "lifeDirection":
      return s.currentLifeDirection === condition.directionId;
    case "relationshipAtLeast":
      return (getCharacterRelationship(condition.characterId, s)[condition.dimension] ?? 0) >= condition.amount;
    case "relationshipBelow":
      return (getCharacterRelationship(condition.characterId, s)[condition.dimension] ?? 0) < condition.amount;
    case "characterHasMemory":
      return (s.characterMemories[condition.characterId] || []).some(m => m.text.includes(condition.keyword));
    case "characterLacksMemory":
      return !(s.characterMemories[condition.characterId] || []).some(m => m.text.includes(condition.keyword));
    case "locationVisitedAtLeast":
      return (s.locationFamiliarity[condition.locationId] || 0) >= condition.amount;
    case "hasMetCharacter":
      return s.knownCharacters.includes(condition.characterId);
    case "notMetCharacter":
      return !s.knownCharacters.includes(condition.characterId);
    case "goalSelected":
      return s.selectedTermGoalId === condition.goalId;
    case "actionCategoryUsedAtLeast":
      return (s.categoryUsageCounts[condition.category] || 0) >= condition.amount;
    case "recentlyIgnoredCharacter": {
      const last = s.lastInteractionWeek[condition.characterId];
      const weeks = condition.weeks ?? 4;
      if (last === undefined) return true;
      return (s.totalWeeksElapsed ?? 0) - last >= weeks;
    }
    default:
      console.warn("未知條件類型：", condition.type);
      return true;
  }
}

export function checkConditions(conditions = [], s = state) {
  return conditions.every(c => checkCondition(c, s));
}

// ============================================================
// 效果套用
// ============================================================
export function applyEffect(effect, s = state) {
  switch (effect.type) {
    case "statChange":
      s.stats[effect.stat] = clampStat((s.stats[effect.stat] ?? 0) + effect.amount);
      break;
    case "setFlag":
      s.flags[effect.flag] = true;
      bumpGoalProgressForFlag(effect.flag, s);
      break;
    case "unlockCharacter":
      if (!s.knownCharacters.includes(effect.characterId)) s.knownCharacters.push(effect.characterId);
      break;
    case "unlockLocation":
      if (!s.unlockedLocations.includes(effect.locationId)) s.unlockedLocations.push(effect.locationId);
      break;
    case "unlockAction":
      if (!s.unlockedActions.includes(effect.actionId)) s.unlockedActions.push(effect.actionId);
      break;
    case "addMoney":
      s.stats.金錢 = clampStat((s.stats.金錢 ?? 0) + effect.amount);
      break;
    case "addLog":
      s.logs.push(effect.text);
      break;
    case "addMessage":
      deliverMessage(effect.messageId, s);
      break;
    case "addPendingConsequence":
      schedulePendingConsequence(effect.consequenceId, s);
      break;
    case "progressGoal":
      s.goalProgress[effect.goalId] = (s.goalProgress[effect.goalId] || 0) + (effect.amount ?? 1);
      break;
    case "addMemory":
      s.memories.push(effect.text);
      break;
    case "relationshipChange":
      applyRelationshipEffects([{ characterId: effect.characterId, dimension: effect.dimension, amount: effect.amount }], s);
      break;
    case "addCharacterMemory":
      addCharacterMemory(effect.characterId, effect.text, s);
      break;
    case "setCharacterAttitude":
      s.characterAttitudeOverrides = s.characterAttitudeOverrides || {};
      s.characterAttitudeOverrides[effect.characterId] = effect.attitude;
      break;
    case "unlockCharacterMessage":
      deliverMessage(effect.messageId, s);
      break;
    case "unlockLocationEvent":
      s.unlockedLocationEvents = s.unlockedLocationEvents || [];
      s.unlockedLocationEvents.push({ locationId: effect.locationId, eventId: effect.eventId });
      break;
    case "addLocationFamiliarity":
      incrementLocationFamiliarity(effect.locationId, s, effect.amount ?? 1);
      break;
    case "changeNpcGoalProgress":
      s.npcGoalProgress = s.npcGoalProgress || {};
      s.npcGoalProgress[effect.characterId] = (s.npcGoalProgress[effect.characterId] || 0) + (effect.amount ?? 1);
      break;
    case "restrictFutureChoice":
      s.flags[effect.flag] = true;
      break;
    case "addChoiceCooldown":
      if (!s.choiceCooldowns[effect.characterId]) s.choiceCooldowns[effect.characterId] = {};
      s.choiceCooldowns[effect.characterId][effect.choiceKey] = (s.currentWeek ?? 0) + (effect.cooldownWeeks ?? 4);
      break;
    default:
      console.warn("未知效果類型：", effect.type);
  }
}

export function applyEffects(effects = [], s = state) {
  effects.forEach(e => applyEffect(e, s));
}

function bumpGoalProgressForFlag(flag, s) {
  [...termGoals, ...stageGoals].forEach(goal => {
    const hasFlagSource = (goal.progressSources || []).some(src => src.type === "flag" && src.flag === flag);
    if (hasFlagSource) {
      s.goalProgress[goal.id] = (s.goalProgress[goal.id] || 0) + 1;
    }
  });
}

export function incrementLocationFamiliarity(locationId, s = state, amount = 1) {
  s.locationFamiliarity[locationId] = (s.locationFamiliarity[locationId] || 0) + amount;
}

// 響某個地區逗留時，順便對嗰度嘅相關角色產生少少關係加成（代表「响佢哋嘅地頭撞到」）
export function applyLocationRelationshipInfluence(locationId, s = state) {
  const location = getLocationById(locationId);
  if (!location) return;
  (location.relationshipInfluence || []).forEach(inf => {
    if (!s.knownCharacters.includes(inf.characterId)) return;
    applyRelationshipEffects([{ characterId: inf.characterId, dimension: inf.dimension, amount: inf.weight }], s);
  });
}

// ============================================================
// 行動：篩選、AP、執行、分類、推薦
// ============================================================
export function getAvailableActions(s = state) {
  const doneThisWeek = s.recentActionHistory
    .filter(h => h.week === s.currentWeek && h.termId === s.currentTermId)
    .map(h => h.actionId);

  return actions.filter(a => {
    if (a.limitedWeeks && a.limitedWeeks.length && !a.limitedWeeks.includes(s.currentWeek)) return false;
    if (a.conflicts && a.conflicts.some(id => doneThisWeek.includes(id))) return false;
    return checkConditions(a.conditions, s);
  });
}

function getActiveTermGoal(s = state) {
  return s.selectedTermGoalId ? getGoalById(s.selectedTermGoalId) : null;
}

// 心願相關嘅分類／角色，由 subGoals 反推（唔使逐個心願寫死邏輯）
function getGoalRelatedCategories(goal) {
  if (!goal || !goal.subGoals) return [];
  const cats = new Set();
  goal.subGoals.forEach(sg => {
    if (sg.type === "actionCount") cats.add(sg.category);
    if (sg.type === "actionCountAny") (sg.categories || []).forEach(c => cats.add(c));
  });
  return [...cats];
}
function getGoalRelatedCharacters(goal) {
  if (!goal || !goal.subGoals) return [];
  const ids = new Set();
  goal.subGoals.forEach(sg => {
    if (sg.type === "relationshipMax" || sg.type === "memoryCount") (sg.characterIds || []).forEach(id => ids.add(id));
  });
  return [...ids];
}

export function getAvailableActionsByCategory(category, s = state) {
  const available = getAvailableActions(s);
  const termGoal = getActiveTermGoal(s);

  if (category === "全部") return available;
  if (category === "限時") return available.filter(a => a.limitedWeeks && a.limitedWeeks.length);
  if (category === "已解鎖") return available.filter(a => (a.conditions || []).some(c => c.type === "hasFlag") || a.fromCharacterId);
  if (category === "特殊傾向") return available.filter(a => (a.routeSeedEffects && a.routeSeedEffects.length) || (a.relatedCharacterId && characterRouteSeedMap[a.relatedCharacterId]));
  if (category === "地區限定") return available.filter(a => (a.conditions || []).some(c => c.type === "currentLocation"));
  if (category === "最近關係") return available.filter(a => a.relatedCharacterId && s.knownCharacters.includes(a.relatedCharacterId));
  if (category === "心願相關") {
    const cats = getGoalRelatedCategories(termGoal);
    const charIds = getGoalRelatedCharacters(termGoal);
    return available.filter(a => cats.includes(a.category) || charIds.includes(a.relatedCharacterId));
  }
  return available.filter(a => a.category === category);
}

export function getRecommendedActions(s = state, limit = 5) {
  const available = getAvailableActions(s);
  if (!available.length) return [];

  const termGoal = getActiveTermGoal(s);
  const goalCategories = getGoalRelatedCategories(termGoal);
  const goalCharacters = getGoalRelatedCharacters(termGoal);
  const direction = s.currentLifeDirection ? getDirectionById(s.currentLifeDirection) : null;

  const scored = available.map(action => {
    let score = 0;
    if (goalCategories.includes(action.category)) score += 5;
    if (goalCharacters.includes(action.relatedCharacterId)) score += 4;
    if (s.stats.體力 < 25) score += action.category === "休息" ? 6 : -3;
    if (s.stats.壓力 > 65) score += (action.category === "休息" || action.relatedCharacterId === "char_mom") ? 4 : 0;
    if (direction && direction.requiredCategories[0] === action.category) score += 2;
    if (action.relatedCharacterId && checkCondition({ type: "recentlyIgnoredCharacter", characterId: action.relatedCharacterId, weeks: 3 }, s)) score += 3;
    if (s.urgentMessageIds.length > 0 && action.id === "action_reply_message") score += 8;
    score += Math.max(0, 3 - action.apCost); // 傾向優先推薦低成本行動
    return { action, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map(s2 => s2.action);
}

export function getLocationAvailableActions(locationId, s = state) {
  const location = getLocationById(locationId);
  if (!location) return [];
  return getAvailableActions(s).filter(a =>
    location.uniqueActions.includes(a.id) || !(a.conditions || []).some(c => c.type === "currentLocation")
  );
}

export function getLocationEncounters(locationId, s = state) {
  const location = getLocationById(locationId);
  if (!location) return null;
  return {
    location,
    commonCharacters: location.commonCharacters.map(getCharacterById).filter(Boolean),
    possibleEncounters: location.possibleEncounters,
    familiarity: s.locationFamiliarity[locationId] || 0
  };
}

// 資料驅動嘅隨機 encounter：唔係每次去同一地區都撞到同一個人，權重＋條件揀一個
// 冷卻中或者條件唔啱嘅 encounter 會被篩走；onceOnly 嘅 encounter 淨係會觸發一次
export function generateRandomEncounter(locationId, actionCategory, s = state) {
  const pool = getEncountersForLocation(locationId).filter(enc => {
    if (enc.onceOnly && s.flags[`flag_encounter_done_${enc.id}`]) return false;
    const lastWeek = s.lastInteractionWeek[`enc_${enc.id}`];
    if (lastWeek !== undefined && (s.totalWeeksElapsed ?? 0) - lastWeek < (enc.cooldownWeeks ?? 0)) return false;
    if (enc.relatedActionCategory && enc.relatedActionCategory !== actionCategory) return false;
    if (enc.weekRange && (s.currentWeek < enc.weekRange[0] || s.currentWeek > enc.weekRange[1])) return false;
    return checkConditions(enc.conditions || [], s);
  });
  if (!pool.length) return null;

  // 30% 機率完全冇事發生，唔係逢做行動都撞到人
  if (Math.random() > 0.3) return null;

  const totalWeight = pool.reduce((sum, e) => sum + (e.weight || 1), 0);
  let roll = Math.random() * totalWeight;
  let chosen = pool[0];
  for (const enc of pool) {
    roll -= (enc.weight || 1);
    if (roll <= 0) { chosen = enc; break; }
  }

  const characterId = chosen.possibleCharacters[Math.floor(Math.random() * chosen.possibleCharacters.length)];
  s.lastInteractionWeek[`enc_${chosen.id}`] = s.totalWeeksElapsed ?? 0;
  if (chosen.onceOnly) s.flags[`flag_encounter_done_${chosen.id}`] = true;

  const isNewMeeting = !s.knownCharacters.includes(characterId);
  addKnownCharacter(characterId, s);
  markInteraction(characterId, s);

  if (isNewMeeting) {
    const character = getCharacterById(characterId);
    generateReviewLog({
      type: "支線",
      title: `你認識咗${character ? character.name : "一個新朋友"}`,
      body: "你哋喺一次日常入面遇見咗對方。",
      tags: ["新認識"]
    }, s);
  }

  // 如果呢個 encounter 有 choices，變成互動 popup，交返俾玩家揀，效果留到 resolvePopupChoice 先套用
  if (chosen.choices && chosen.choices.length) {
    return { encounter: chosen, characterId, isNewMeeting, popup: true };
  }

  applyRelationshipEffects((chosen.relationshipEffects || []).map(r => ({ ...r, characterId: r.characterId || characterId })), s);
  incrementLocationFamiliarity(locationId, s, chosen.locationFamiliarityEffects || 0);
  (chosen.routeSeedEffects || []).forEach(rs => addRouteSeed(rs.seedId, rs.amount, s));

  if (chosen.silentLog) {
    generateReviewLog(chosen.silentLog, s);
  }
  if (chosen.resultMessageId) deliverMessage(chosen.resultMessageId, s);

  return { encounter: chosen, characterId, isNewMeeting, popup: false };
}

// 互動 popup（encounter 帶 choices）嘅選項處理：同 message/dialogue 用同一套後果系統
export function resolvePopupChoice(encounterId, characterId, choiceIndex, s = state) {
  const encounter = encounters.find(e => e.id === encounterId);
  if (!encounter) return { outcomeSummary: [] };
  const choice = encounter.choices[choiceIndex];
  if (!choice) return { outcomeSummary: [] };

  const availability = calculateChoiceAvailability(choice, s);
  if (!availability.available) {
    return { outcomeSummary: [], blocked: true, hintText: availability.hintText };
  }

  applyEffects(choice.effects || [], s);
  applyRelationshipEffects((choice.relationshipEffects || []).map(r => ({ ...r, characterId: r.characterId || characterId })), s);
  (choice.addMemory || []).forEach(m => addCharacterMemory(m.characterId || characterId, m.text, s));
  (choice.setFlags || []).forEach(flag => applyEffect({ type: "setFlag", flag }, s));
  (choice.routeSeedEffects || []).forEach(rs => addRouteSeed(rs.seedId, rs.amount, s));
  if (choice.locationFamiliarityEffects) incrementLocationFamiliarity(s.locationId, s, choice.locationFamiliarityEffects);
  applyChoiceCommonEffects(choice, characterId, s);

  addInteractionMemory(encounterId, choice.addReviewLog?.body || choice.text, s);

  const outcomeSummary = generateChoiceOutcomeSummary(choice, s);
  if (choice.addReviewLog) generateReviewLog(choice.addReviewLog, s);
  (choice.delayedConsequences || []).forEach(consId => schedulePendingConsequence(consId, s));

  checkGoalProgress(s);
  checkLifeDirection(s);

  return { outcomeSummary };
}

export function spendAP(action, s = state) {
  return s.ap >= action.apCost;
}

export function executeAction(actionId, s = state) {
  const action = getActionById(actionId);
  if (!action) return { ok: false, reason: "行動唔存在" };
  if (!spendAP(action, s)) return { ok: false, reason: "AP 不足" };

  s.ap -= action.apCost;
  applyEffects(action.effects, s);

  s.recentActionHistory.push({ actionId: action.id, category: action.category, week: s.currentWeek, termId: s.currentTermId });
  if (s.recentActionHistory.length > 40) s.recentActionHistory.shift();

  s.categoryUsageCounts[action.category] = (s.categoryUsageCounts[action.category] || 0) + 1;
  if (!s.locationFamiliarity[s.locationId]) applyWillingnessToChange(3, s); // 第一次去呢個地區，會令你更願意試新嘢
  incrementLocationFamiliarity(s.locationId, s);
  if (action.relatedCharacterId) markInteraction(action.relatedCharacterId, s);

  (actionCategorySeedMap[action.category] || []).forEach(seedId => addRouteSeed(seedId, 1, s));
  if (action.relatedCharacterId && characterRouteSeedMap[action.relatedCharacterId]) {
    characterRouteSeedMap[action.relatedCharacterId].forEach(seedId => addRouteSeed(seedId, 1, s));
  }
  (action.routeSeedEffects || []).forEach(rs => addRouteSeed(rs.seedId, rs.amount, s));

  generateReviewLog({
    type: action.category,
    title: `你選擇咗：${action.name}`,
    body: action.description,
    tags: effectsToTags(action.effects)
  }, s);

  (action.possibleConsequences || []).forEach(consId => schedulePendingConsequence(consId, s));

  let dialogue = null;
  if (action.possibleDialogueIds && action.possibleDialogueIds.length) {
    const candidates = action.possibleDialogueIds
      .map(getDialogueById)
      .filter(d => d && !s.triggeredDialogues.includes(d.id) && checkConditions(d.conditions, s) &&
        (d.stage === null || d.stage === s.stageId) &&
        (d.location === null || d.location === s.locationId));
    if (candidates.length) dialogue = candidates[Math.floor(Math.random() * candidates.length)];
  }

  let encounterResult = null;
  if (!dialogue) {
    encounterResult = generateRandomEncounter(s.locationId, action.category, s);
  }

  checkGoalProgress(s);
  checkLifeDirection(s);

  return { ok: true, action, dialogue, encounterResult };
}

function effectsToTags(effects = []) {
  return effects
    .filter(e => e.type === "statChange" || e.type === "addMoney")
    .map(e => {
      const name = e.type === "addMoney" ? "金錢" : e.stat;
      const amount = e.amount;
      return `${name}${amount >= 0 ? "+" : ""}${amount}`;
    });
}

// ============================================================
// 對話（場景短句，沿用第一版機制）
// ============================================================
export function triggerDialogue(dialogueId, s = state) {
  const dialogue = getDialogueById(dialogueId);
  if (!dialogue) return null;
  if (!s.triggeredDialogues.includes(dialogueId)) s.triggeredDialogues.push(dialogueId);
  return dialogue;
}

export function chooseDialogueOption(dialogue, choiceIndex, s = state) {
  const choice = dialogue.choices[choiceIndex];
  if (!choice) return null;
  applyEffects(choice.effects || [], s);
  applyRelationshipEffects(choice.relationshipEffects || [], s);
  (choice.addMemory || []).forEach(m => addCharacterMemory(m.characterId, m.text, s));
  (choice.setFlags || []).forEach(flag => applyEffect({ type: "setFlag", flag }, s));
  applyChoiceCommonEffects(choice, dialogue.speakerId, s);
  if (dialogue.speakerId) markInteraction(dialogue.speakerId, s);
  if (choice.nextDialogueId) return triggerDialogue(choice.nextDialogueId, s);
  return null;
}

// ============================================================
// 訊息（inbox）
// ============================================================
export function deliverMessage(messageId, s = state) {
  if (s.deliveredMessageIds.includes(messageId)) return;
  const message = getMessageById(messageId);
  if (!message) return;
  if (message.senderId && !s.knownCharacters.includes(message.senderId)) {
    meetCharacter(message.senderId, "你哋透過訊息開始有咗交流。", s);
  }
  s.deliveredMessageIds.push(messageId);
  s.unreadMessages.push(messageId);
  if (message.urgency === "urgent") {
    s.urgentMessageIds.push(messageId);
    s.urgentMessagesSentThisTerm = (s.urgentMessagesSentThisTerm || 0) + 1;
  }
}

export function getAvailableMessages(s = state) {
  return messages.filter(m => !s.deliveredMessageIds.includes(m.id) && checkConditions(m.triggerConditions, s));
}

// 訊息預算：每週自動派送嘅「普通」訊息有上限，頭幾週仲會再收緊，避免玩家一開波就俾訊息追住走
export function applyMessageBudget(candidates, s = state) {
  const introPhase = s.currentWeek <= messageRules.introWeeksLowDensity;
  const capNormal = introPhase ? messageRules.introWeeksMaxMessages : messageRules.maxMessagesPerWeek;
  let normalCount = 0;
  const allowed = [];
  candidates.forEach(m => {
    if (m.urgency === "urgent") {
      if ((s.urgentMessagesSentThisTerm || 0) >= messageRules.maxUrgentMessagesPerTerm) return;
      allowed.push(m);
    } else {
      if (normalCount >= capNormal) return;
      normalCount += 1;
      allowed.push(m);
    }
  });
  return allowed;
}

function scanWeeklyMessageTriggers(s = state) {
  const candidates = getAvailableMessages(s);
  applyMessageBudget(candidates, s).forEach(m => deliverMessage(m.id, s));
}

export function triggerMessage(messageId, s = state) {
  return getMessageById(messageId);
}

// 玩家揀「暫時不回」：訊息留喺 inbox（唔會強制擋週），但會記錄呢個選擇本身嘅後果
export function allowSkipMessageWithConsequence(messageId, s = state) {
  const message = getMessageById(messageId);
  if (!message) return;
  if (!s.optionalUnreadMessages.includes(messageId)) s.optionalUnreadMessages.push(messageId);
  if (!s.ignoredMessages.includes(messageId)) s.ignoredMessages.push(messageId);
  // 特登唔更新 lastInteractionWeek，等呢次「未回覆」都計入之後嘅自然疏遠判斷
  generateReviewLog({
    type: "後續",
    title: `你暫時未回覆：${message.title}`,
    body: "你揀咗遲啲先處理呢件事，對方可能會再搵你，或者呢個機會會慢慢過去。",
    tags: ["暫時不回"]
  }, s);
}

// 根據關係／記憶揀返呢個訊息應該用邊組開場白
export function getMessageVariantByRelationship(message, s = state) {
  const variants = message.relationshipVariants || [];
  for (const variant of variants) {
    if (checkConditions(variant.conditions || [], s)) return variant.lines;
  }
  return message.lines;
}

// 根據關係／flag 篩走唔符合條件嘅選項（訊息、對話通用）
export function getAvailableChoicesByRelationship(dialogueOrMessage, s = state) {
  return (dialogueOrMessage.choices || []).filter(c => !c.conditions || checkConditions(c.conditions, s));
}

export function chooseMessageOption(messageId, choiceIndex, s = state) {
  const message = getMessageById(messageId);
  if (!message) return { next: null, outcomeSummary: [] };
  const visibleChoices = getAvailableChoicesByRelationship(message, s);
  const choice = visibleChoices[choiceIndex];
  if (!choice) return { next: null, outcomeSummary: [] };

  const availability = calculateChoiceAvailability(choice, s);
  if (!availability.available) {
    return { next: null, outcomeSummary: [], blocked: true, hintText: availability.hintText };
  }

  markInteraction(message.senderId, s);

  applyEffects(choice.effects || [], s);
  applyRelationshipEffects(choice.relationshipEffects || [], s);
  (choice.addMemory || []).forEach(m => addCharacterMemory(m.characterId, m.text, s));
  (choice.setFlags || []).forEach(flag => applyEffect({ type: "setFlag", flag }, s));
  (choice.lockFlags || []).forEach(flag => applyEffect({ type: "setFlag", flag }, s));
  (choice.restrictFutureChoices || []).forEach(flag => applyEffect({ type: "setFlag", flag }, s));
  (choice.unlockLocationEvent || []).forEach(e => applyEffect({ type: "unlockLocationEvent", locationId: e.locationId, eventId: e.eventId }, s));
  applyChoiceCommonEffects(choice, message.senderId, s);

  const outcomeSummary = generateChoiceOutcomeSummary(choice, s);

  if (choice.addReviewLog) {
    generateReviewLog({
      type: choice.addReviewLog.type,
      title: choice.addReviewLog.title,
      body: choice.addReviewLog.body,
      tags: choice.addReviewLog.tags || []
    }, s);
  }

  (choice.delayedConsequences || []).forEach(consId => schedulePendingConsequence(consId, s));

  s.unreadMessages = s.unreadMessages.filter(id => id !== messageId);
  s.urgentMessageIds = s.urgentMessageIds.filter(id => id !== messageId);

  checkGoalProgress(s);
  checkLifeDirection(s);

  let next = null;
  if (choice.nextMessageId) {
    const nextMessage = getMessageById(choice.nextMessageId);
    if (nextMessage) {
      s.deliveredMessageIds = s.deliveredMessageIds.filter(id => id !== nextMessage.id);
      deliverMessage(nextMessage.id, s);
      next = nextMessage;
    }
  }
  return { next, outcomeSummary };
}

// ============================================================
// 延遲後果
// ============================================================
export function schedulePendingConsequence(consequenceId, s = state) {
  const consequence = getConsequenceById(consequenceId);
  if (!consequence) return;
  s.pendingConsequences.push({
    id: `pc_${consequenceId}_${s.totalWeeksElapsed}_${Math.floor(Math.random() * 100000)}`,
    consequenceId,
    triggerAtTotalWeek: (s.totalWeeksElapsed ?? 0) + consequence.triggerAfterWeeks,
    resolved: false
  });
}

export function processDelayedConsequences(s = state) {
  const due = s.pendingConsequences.filter(pc => !pc.resolved && (s.totalWeeksElapsed ?? 0) >= pc.triggerAtTotalWeek);

  due.forEach(pc => {
    const consequence = getConsequenceById(pc.consequenceId);
    pc.resolved = true;
    if (!consequence) return;
    if (!checkConditions(consequence.triggerConditions, s)) return;

    applyEffects(consequence.effects || [], s);
    (consequence.setFlags || []).forEach(flag => applyEffect({ type: "setFlag", flag }, s));

    if (consequence.addReviewLog) {
      generateReviewLog(consequence.addReviewLog, s);
    }
    if (consequence.resultMessageId) {
      deliverMessage(consequence.resultMessageId, s);
    }
  });

  s.pendingConsequences = s.pendingConsequences.filter(pc => !pc.resolved);
}

// ============================================================
// 目標系統
// ============================================================

// ---- 階段目標（stageGoals）沿用舊嘅單一分數 progressSources／targetValue ----
function computeStageGoalProgressValue(goal, s = state) {
  let best = 0;
  (goal.progressSources || []).forEach(src => {
    if (src.type === "stat") {
      best = Math.max(best, s.stats[src.stat] ?? 0);
    } else if (src.type === "flag") {
      best = Math.max(best, (s.goalProgress[goal.id] || 0) * 25);
    } else if (src.type === "statBelowBonus") {
      best = Math.max(best, clampStat(100 - (s.stats[src.stat] ?? 0)));
    }
  });
  return best;
}

// ---- 本學期心願（termGoals）用新嘅 subGoals 逐項計算 ----
function evaluateSubGoal(subGoal, s = state) {
  let current = 0;
  const target = subGoal.target;
  switch (subGoal.type) {
    case "stat":
      current = s.stats[subGoal.stat] ?? 0;
      break;
    case "statBelow":
      current = s.stats[subGoal.stat] ?? 0;
      break;
    case "actionCount":
      current = s.categoryUsageCounts[subGoal.category] || 0;
      break;
    case "actionCountAny":
      current = (subGoal.categories || []).reduce((sum, c) => sum + (s.categoryUsageCounts[c] || 0), 0);
      break;
    case "relationshipMax":
      current = Math.max(0, ...(subGoal.characterIds || []).map(id => getCharacterRelationship(id, s)[subGoal.dimension] ?? 0));
      break;
    case "memoryCount":
      current = (subGoal.characterIds || []).reduce((sum, id) => sum + ((s.characterMemories[id] || []).length), 0);
      break;
    case "flag":
      current = s.flags[subGoal.flag] ? 1 : 0;
      break;
    case "locationFamiliarity":
      current = s.locationFamiliarity[subGoal.locationId] || 0;
      break;
    default:
      current = 0;
  }

  const done = subGoal.type === "statBelow" ? current < target : current >= target;
  let ratio;
  if (subGoal.type === "statBelow") {
    ratio = done ? 1 : Math.max(0, 1 - (current - target) / Math.max(target, 1));
  } else {
    ratio = target > 0 ? Math.min(1, current / target) : (done ? 1 : 0);
  }

  return { key: subGoal.key, label: subGoal.label, type: subGoal.type, current, target, done, ratio };
}

export function calculateGoalProgressDetail(goalId, s = state) {
  const goal = getGoalById(goalId);
  if (!goal || !goal.subGoals) return null;
  const subGoals = goal.subGoals.map(sg => evaluateSubGoal(sg, s));
  const doneCount = subGoals.filter(sg => sg.done).length;
  const overallRatio = subGoals.reduce((sum, sg) => sum + sg.ratio, 0) / subGoals.length;
  const status = doneCount === subGoals.length ? "success" : (overallRatio >= 0.5 ? "partial" : "miss");
  return { goalId, name: goal.name, subGoals, doneCount, total: subGoals.length, overallRatio, status };
}

export function getGoalSubProgress(goalId, s = state) {
  const detail = calculateGoalProgressDetail(goalId, s);
  return detail ? detail.subGoals : [];
}

export function checkGoalProgress(s = state) {
  if (s.selectedTermGoalId && !s.completedGoals.includes(s.selectedTermGoalId)) {
    const goal = getGoalById(s.selectedTermGoalId);
    const detail = calculateGoalProgressDetail(s.selectedTermGoalId, s);
    if (goal && detail && detail.status === "success") {
      s.completedGoals.push(goal.id);
      applyEffects(goal.successRewards || [], s);
      (goal.routeInfluence || []).forEach(ri => addRouteSeed(ri.seedId, ri.amount, s));
      generateReviewLog({
        type: "決策",
        title: `達成心願：${goal.name}`,
        body: goal.reviewTextSuccess,
        tags: ["心願達成"]
      }, s);
    }
  }

  stageGoals
    .filter(g => g.availableStages.includes(s.stageId))
    .forEach(goal => {
      if (s.completedGoals.includes(goal.id)) return;
      const value = computeStageGoalProgressValue(goal, s);
      if (value >= goal.targetValue) {
        s.completedGoals.push(goal.id);
        applyEffects(goal.rewards || [], s);
        generateReviewLog({
          type: "決策",
          title: `達成目標：${goal.name}`,
          body: goal.reviewTextSuccess,
          tags: ["目標達成"]
        }, s);
      }
    });
}

export function getGoalProgressPercent(goalId, s = state) {
  const goal = getGoalById(goalId);
  if (!goal) return 0;
  if (goal.subGoals) {
    const detail = calculateGoalProgressDetail(goalId, s);
    return Math.round((detail?.overallRatio ?? 0) * 100);
  }
  const value = computeStageGoalProgressValue(goal, s);
  return Math.min(100, Math.round((value / goal.targetValue) * 100));
}

// ============================================================
// 路線種子（中三前只會安全、輕微咁累積，唔即刻變成成人／高風險內容）
// ============================================================
export function addRouteSeed(seedId, amount, s = state) {
  if (!getRouteSeedById(seedId)) return;
  s.routeSeeds[seedId] = (s.routeSeeds[seedId] || 0) + amount;
}

// 方向狀態：唔淨係睇單一「目前傾向」，而係將所有路線種子換算做 Lv.幾，畀學期結算完整展示
// Lv 計法：每 10 點種子 = 1 級，最少 Lv.0（未累積過都會列出，等於話「暫時未有明顯傾向」）
export function calculateDirectionLevels(s = state) {
  return routeSeeds.map(seed => {
    const value = s.routeSeeds[seed.id] || 0;
    const level = Math.floor(value / 10);
    return { seedId: seed.id, name: seed.name, icon: seed.icon, value, level, flavor: seed.safeStageFlavor };
  }).sort((a, b) => b.value - a.value);
}

// ============================================================
// 人生方向自動判斷（結合行動分類 + NPC 關係 + 地區熟悉度）
// ============================================================
export function checkLifeDirection(s = state) {
  const scores = {};
  lifeDirections.forEach(d => (scores[d.id] = 0));

  const recent = s.recentActionHistory.slice(-8);
  const catCounts = {};
  recent.forEach(h => { catCounts[h.category] = (catCounts[h.category] || 0) + 1; });
  lifeDirections.forEach(d => {
    const cat = d.requiredCategories[0];
    if (cat && catCounts[cat]) scores[d.id] += catCounts[cat] * 2;
  });

  let topCharacter = null;
  let topCharacterScore = -Infinity;
  getKnownCharacters(s).forEach(c => {
    const dims = c.relationshipDimensions || [];
    if (!dims.length) return;
    const rel = getCharacterRelationship(c.id, s);
    const avg = dims.reduce((sum, d) => sum + (rel[d] ?? 0), 0) / dims.length;
    (c.lifeDirectionInfluence || []).forEach(inf => {
      const contribution = (avg / 100) * inf.weight * 4;
      scores[inf.directionId] = (scores[inf.directionId] || 0) + contribution;
      if (contribution > topCharacterScore) {
        topCharacterScore = contribution;
        topCharacter = c;
      }
    });
  });

  getUnlockedLocations(s).forEach(loc => {
    const fam = s.locationFamiliarity[loc.id] || 0;
    if (!fam) return;
    (loc.goalInfluence || []).forEach(inf => {
      scores[inf.directionId] = (scores[inf.directionId] || 0) + Math.min(fam, 6) * inf.weight;
    });
  });

  let bestId = null;
  let bestScore = -Infinity;
  Object.entries(scores).forEach(([id, score]) => {
    if (score > bestScore) { bestScore = score; bestId = id; }
  });

  const direction = bestScore >= 4 ? getDirectionById(bestId) : getDirectionById("direction_balanced");
  const reason = buildDirectionReason(direction, topCharacter, s);

  if (s.currentLifeDirection !== direction.id) {
    s.currentLifeDirection = direction.id;
    s.lifeDirectionReason = reason;
    generateReviewLog({
      type: "決策",
      title: `你目前嘅人生方向：${direction.name}`,
      body: reason,
      tags: ["人生方向"]
    }, s);
  } else {
    s.lifeDirectionReason = reason;
  }
}

function buildDirectionReason(direction, topCharacter, s) {
  let reason = direction.reasonTemplate;
  if (topCharacter && direction.id !== "direction_balanced") {
    const stage = getRelationshipStage(topCharacter.id, s);
    reason += `${topCharacter.name}而家對你嘅態度係「${stage}」，都反映到呢個傾向。`;
  }
  return reason;
}

// ============================================================
// 週／學期推進
// ============================================================
export function checkTermEnd(s = state) {
  const term = getTermById(s.currentTermId);
  return term ? s.currentWeek >= term.totalWeeks : false;
}

export function advanceWeek(s = state) {
  if (s.urgentMessageIds.length > 0) {
    return { blocked: true, reason: "你還有重要訊息未回覆，先看看大家找你有什麼事吧。" };
  }

  s.totalWeeksElapsed = (s.totalWeeksElapsed ?? 0) + 1;
  processDelayedConsequences(s);
  processPopupFollowUps(s);
  decayOrMaintainRelationships(s);
  scanWeeklyMessageTriggers(s);
  applyWillingnessToChange(2, s); // 每週自然回復少少改變意願
  checkGoalProgress(s);
  checkLifeDirection(s);

  if (checkTermEnd(s)) {
    const termReview = generateStageReview(s);
    s.termHistory.push(termReview);
    s.stageReviewHistory.push(termReview);

    const nextTerm = getNextTerm(s.currentTermId);
    if (!nextTerm) {
      return { blocked: false, termEnded: true, finished: true, termReview };
    }

    s.currentTermId = nextTerm.id;
    s.currentYear = nextTerm.year;
    s.currentWeek = 1;
    s.ap = s.maxAp;
    s.urgentMessagesSentThisTerm = 0;
    s.messageBudgetThisWeek = 0;
    if (nextTerm.stageId !== s.stageId) {
      s.stageId = nextTerm.stageId;
      s.age += 1;
    }
    s.selectedTermGoalId = null;
    captureTermStartSnapshot(s);

    return { blocked: false, termEnded: true, finished: false, termReview, nextTerm };
  }

  s.currentWeek += 1;
  s.ap = s.maxAp;
  return { blocked: false, termEnded: false };
}

export function captureTermStartSnapshot(s = state) {
  s.termStartSnapshot = {
    stats: { ...s.stats },
    unlockedActions: [...s.unlockedActions],
    knownCharacters: [...s.knownCharacters],
    unlockedLocations: [...s.unlockedLocations],
    relationships: JSON.parse(JSON.stringify(s.relationships))
  };
}

export function selectTermGoal(goalId, s = state) {
  s.selectedTermGoalId = goalId;
  generateReviewLog({
    type: "決策",
    title: `你許下咗新嘅心願：${getGoalById(goalId)?.name || ""}`,
    body: getGoalById(goalId)?.description || "",
    tags: ["本學期心願"]
  }, s);
}

// ============================================================
// 成長記事簿（Review Log）
// ============================================================
export function generateReviewLog(entry, s = state) {
  const term = getTermById(s.currentTermId);
  s.reviewLogs.push({
    week: s.currentWeek,
    termId: s.currentTermId,
    termLabel: term ? `${term.name} 第${s.currentWeek}週` : "",
    type: entry.type || "決策",
    title: entry.title,
    body: entry.body || "",
    tags: entry.tags || []
  });
  if (s.reviewLogs.length > 200) s.reviewLogs.shift();
}

const CORE_STAT_KEYS_FOR_REVIEW = ["學業", "社交", "創意", "家庭關係", "快樂", "壓力", "體力", "自信"];

// 學期／階段結算：唔淨係話完成咗咩，仲要展示晒所有方向嘅狀態，等玩家知道自己養緊邊種人
// 學期結算：分析玩家呢個學期嘅「回應方式」，唔評分高低，只係話你依家點樣同人相處
export function generateAttitudeReview(s = state) {
  const termAttitudes = s.attitudeHistory.filter(a => a.termId === s.currentTermId);
  const counts = {};
  termAttitudes.forEach(a => { counts[a.attitudeId] = (counts[a.attitudeId] || 0) + 1; });

  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const mostUsed = sorted[0] ? getAttitudeById(sorted[0][0]) : null;
  const leastUsed = attitudesUsedRarely(counts);

  const dominant = getDominantTendency(s);
  const changeAttempts = termAttitudes.filter(a => {
    const tendency = getTendencyForAttitude(a.attitudeId);
    return tendency && dominant && tendency.id !== dominant.id;
  });

  const influencingCharacters = [...new Set(termAttitudes.map(a => a.characterId).filter(Boolean))]
    .map(id => getCharacterById(id)?.name)
    .filter(Boolean);

  let narrative = "呢個學期你嘅回應方式都幾平均，未有特別明顯嘅習慣。";
  if (mostUsed) {
    narrative = `你呢個學期常常選擇「${mostUsed.label}」，${dominant ? `令你嘅「${dominant.name}」傾向更加明顯。` : "呢個習慣開始慢慢形成。"}`;
  }
  if (changeAttempts.length) {
    narrative += `唔止噉，你都試過幾次同平時唔一樣嘅回答方式，呢啲就係你「改變意願」轉化成嘅新經驗。`;
  }

  return {
    mostUsedAttitude: mostUsed ? mostUsed.label : null,
    leastUsedAttitude: leastUsed ? leastUsed.label : null,
    dominantTendencyName: dominant ? dominant.name : "未有明顯傾向",
    willingnessToChange: s.willingnessToChange,
    changeAttemptCount: changeAttempts.length,
    influencingCharacters,
    narrative
  };
}

function attitudesUsedRarely(counts) {
  const all = personalityTendencies.flatMap(t => t.attitudeIds);
  const unused = all.filter(id => !counts[id]);
  return unused.length ? getAttitudeById(unused[0]) : null;
}

export function generateStageReview(s = state) {
  const term = getTermById(s.currentTermId);
  const termGoal = s.selectedTermGoalId ? getGoalById(s.selectedTermGoalId) : null;
  const goalDetail = termGoal ? calculateGoalProgressDetail(termGoal.id, s) : null;
  const goalStatus = goalDetail ? goalDetail.status : "none";
  if (termGoal && goalStatus !== "success") {
    s.missedGoals.push(termGoal.id);
    if (goalStatus === "partial") applyEffects(termGoal.partialRewards || [], s);
    (termGoal.routeInfluence || []).forEach(ri => addRouteSeed(ri.seedId, Math.ceil(ri.amount / 2), s));
  }

  const goalReviewText = !termGoal
    ? "呢個學期你未揀特別嘅心願。"
    : goalStatus === "success" ? termGoal.reviewTextSuccess
    : goalStatus === "partial" ? termGoal.reviewTextPartial
    : termGoal.reviewTextMiss;

  const missedOpportunities = actions
    .filter(a => a.limitedWeeks && a.limitedWeeks.length)
    .filter(a => !s.recentActionHistory.some(h => h.actionId === a.id && h.termId === s.currentTermId))
    .map(a => `錯過咗限時行動：${a.name}`);

  const snapshot = s.termStartSnapshot || { stats: {}, unlockedActions: [], knownCharacters: [], unlockedLocations: [], relationships: {} };
  const relationshipChanges = getKnownCharacters(s)
    .map(c => {
      const before = (snapshot.relationships && snapshot.relationships[c.id]) || DEFAULT_RELATIONSHIP;
      const after = getCharacterRelationship(c.id, s);
      const primaryDim = c.relationshipDimensions[0] || "closeness";
      const diff = (after[primaryDim] ?? 0) - (before[primaryDim] ?? 0);
      return { characterId: c.id, name: c.name, dimension: DIMENSION_LABELS[primaryDim], diff, stageLabel: getRelationshipStage(c.id, s) };
    })
    .filter(r => Math.abs(r.diff) >= 3);

  const newUnlockedActions = s.unlockedActions.filter(id => !snapshot.unlockedActions.includes(id));
  const newUnlockedCharacters = s.knownCharacters.filter(id => !snapshot.knownCharacters.includes(id));
  const newUnlockedLocations = s.unlockedLocations.filter(id => !snapshot.unlockedLocations.includes(id));

  const direction = s.currentLifeDirection ? getDirectionById(s.currentLifeDirection) : null;

  const statChanges = CORE_STAT_KEYS_FOR_REVIEW.map(stat => ({
    stat,
    before: snapshot.stats[stat] ?? s.stats[stat] ?? 0,
    after: s.stats[stat] ?? 0
  })).filter(c => Math.abs(c.after - c.before) >= 2);

  const locationFamiliaritySnapshot = getUnlockedLocations(s).map(loc => ({
    locationId: loc.id, name: loc.name, value: s.locationFamiliarity[loc.id] || 0
  }));

  const directionLevels = calculateDirectionLevels(s);
  const topSeed = directionLevels[0];
  const shortComment = topSeed && topSeed.value > 0
    ? `你呢段時間比較常累積「${topSeed.name}」，${topSeed.flavor}`
    : "你呢段時間嘅選擇都幾平均，未有特別明顯嘅傾向。";

  return {
    termId: s.currentTermId,
    termName: term ? term.name : "",
    goalName: termGoal ? termGoal.name : null,
    goalStatus,
    goalSubProgress: goalDetail ? goalDetail.subGoals : [],
    goalReviewText,
    statChanges,
    missedOpportunities,
    relationshipChanges,
    directionName: direction ? direction.name : "平衡成長路線",
    directionReason: s.lifeDirectionReason || "你嘅選擇都幾平均，未有特別偏向邊一方面。",
    directionLevels,
    locationFamiliarity: locationFamiliaritySnapshot,
    newUnlockedActions,
    newUnlockedCharacters,
    newUnlockedLocations,
    shortComment,
    attitudeReview: generateAttitudeReview(s),
    recentLogs: s.reviewLogs.filter(l => l.termId === s.currentTermId).slice(-8)
  };
}

// ============================================================
// 成長傾向（沿用第一版，做學期回顧嘅輔助文字）
// ============================================================
export function checkEndings(s = state) {
  return resolveGrowthTendency(s.stats);
}

// ============================================================
// 輔助 getter
// ============================================================
export function getCurrentStage(s = state) { return getStageById(s.stageId); }
export function getCurrentTerm(s = state) { return getTermById(s.currentTermId); }
export function getCurrentLocation(s = state) { return getLocationById(s.locationId); }
export function getUnlockedLocations(s = state) { return locations.filter(l => s.unlockedLocations.includes(l.id)); }
export function getKnownCharacters(s = state) { return characters.filter(c => s.knownCharacters.includes(c.id)); }
export function getUnreadMessageObjects(s = state) { return s.unreadMessages.map(getMessageById).filter(Boolean); }
export function setBackgroundTagsCache(s, tags) { s._cachedBackgroundTags = tags; }
export function getAllActionsData() { return actions; }
export function getAllTermGoals() { return termGoals; }
export function getAllStageGoals() { return stageGoals; }
export function getActionTabs() { return actionTabs; }
export function getStageRules() { return stageRules; }
export function isSeedRestrictedForCurrentStage(seedId) { return isRouteSeedRestricted(seedId, state.stageId); }
