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
import { getCharacterById, getAllGeneratedCharacters } from "../data/characters.js";
import { getPersonalityById } from "../data/identityPersonalities.js";
import { resolveGrowthTendency } from "../data/endings.js";
import { routeSeeds, getRouteSeedById, actionCategorySeedMap, characterRouteSeedMap } from "../data/routeSeeds.js";
import { encounters, getEncountersForLocation } from "../data/encounters.js";
import { messageRules } from "../data/messageRules.js";
import { stageRules, isRouteSeedRestricted } from "../data/stageRules.js";
import { getAttitudeById } from "../data/attitudes.js";
import { personalityTendencies, getTendencyById, getTendencyForAttitude } from "../data/personalityTendencies.js";
import { getNpcReactionRule } from "../data/npcReactionRules.js";
import {
  academicSubjects, gradeThresholds, conductThresholds, teacherCommentTemplates,
  parentReactionTemplates, forcedTutoringThreshold, getGradeLabel, getConductTier
} from "../data/academicRules.js";
import { hobbies, getHobbyById, MAX_ACTIVE_HOBBIES } from "../data/hobbies.js";
import { competitions, getCompetitionById } from "../data/opportunities.js";
import { getStoryScenesForEvents } from "../data/storyScenes.js";

const CAPPED_STATS = ["學業", "社交", "創意", "體力", "自信", "快樂", "理智值", "家庭關係"];
// 開局 cap 一律係 100（唔會隨機出 35、45 呢啲低上限），真正隨機嘅係「開局分配落 current 值嘅總點數池」
const RESOURCE_CAP_DEFAULT = 100;
// 長期訓練／興趣／比賽可以慢慢將 cap 推高過 100，但要有個合理上限，避免無限膨脹
const TRAINED_CAP_MAX = 160;
// 每個 current 值嘅保底，避免開局隨機到完全唔能夠玩嘅角色
const STARTING_CURRENT_MIN = 10;

const RELATIONSHIP_DIMENSIONS = ["closeness", "trust", "respect", "dependency", "misunderstanding"];
const DIMENSION_LABELS = { closeness: "親近度", trust: "信任度", respect: "尊重度", dependency: "依賴度", misunderstanding: "誤會值" };
const DEFAULT_RELATIONSHIP = { closeness: 20, trust: 20, respect: 20, dependency: 10, misunderstanding: 0 };

// ============================================================
// 核心資源上限系統（current／cap）
// ============================================================

// 隨機決定呢一生早期嘅「起始總點數池」（200～500），呢個池會分配落 8 個核心資源嘅 current 值，
// 唔係分配落 cap —— 所有核心資源開局 cap 一律係 100，cap 要留返俾長期訓練慢慢推高
// 注意：8 項核心資源 × 100 = 滿分池 800，所以起始池上限用 500（62.5%），確保開局唔會接近全滿
export function generateStartingResourcePool(s = state) {
  s.startingTotalPoints = Math.floor(200 + Math.random() * 300); // 200～500
  s.totalCap = s.startingTotalPoints; // 保留舊欄位名做向下相容（部分舊碼／存檔可能仲用緊呢個名）
}

export function allocateStartingResourcePoints(s = state) {
  CAPPED_STATS.forEach(stat => { s.statCaps[stat] = RESOURCE_CAP_DEFAULT; });
  const weights = CAPPED_STATS.map(() => 0.5 + Math.random());
  const weightSum = weights.reduce((a, b) => a + b, 0);
  CAPPED_STATS.forEach((stat, i) => {
    const raw = (weights[i] / weightSum) * s.startingTotalPoints;
    s.stats[stat] = Math.max(STARTING_CURRENT_MIN, Math.min(RESOURCE_CAP_DEFAULT, Math.round(raw)));
  });
}

// 保留舊函式名做入口（開局流程只需要 call 呢個），內部改用新嘅池／分配邏輯
export function generateStartingCaps(s = state) {
  generateStartingResourcePool(s);
  allocateStartingResourcePoints(s);
}

// 沿用舊名，但依家淨係將 current 值攞返出嚟（唔再重新隨機一次，避免同 allocateStartingResourcePoints 重複）
export function generateStartingCurrentValues(s = state) {
  CAPPED_STATS.forEach(stat => {
    if (s.stats[stat] === undefined) s.stats[stat] = Math.round(RESOURCE_CAP_DEFAULT * 0.5);
  });
}

export function getResourceCurrent(stat, s = state) { return s.stats[stat] ?? 0; }
export function getResourceCap(stat, s = state) { return s.statCaps[stat] ?? RESOURCE_CAP_DEFAULT; }

// 所有 statChange 效果最終都會行呢個函式：有 cap 嘅資源用 cap 做上限，冇 cap 嘅（金錢／紀律／人脈／壓力）維持 0～100
// 玩家見到嘅所有核心資源一律要係整數，所以呢度寫入 s.stats 之前就四捨五入，唔會留低 57.5 呢類小數俾之後任何一個畫面
export function applyResourceChangeWithCap(stat, amount, s = state) {
  const cap = s.statCaps[stat];
  const ceiling = cap ?? 100;
  const current = s.stats[stat] ?? 0;
  s.stats[stat] = Math.round(Math.max(0, Math.min(ceiling, current + amount)));
}

// 長期訓練（興趣班／比賽）先可以慢慢提升 cap，唔會經一般 statChange 效果觸發
export function increaseCapByTraining(stat, amount, s = state) {
  if (!CAPPED_STATS.includes(stat)) return;
  const current = s.statCaps[stat] ?? RESOURCE_CAP_DEFAULT;
  s.statCaps[stat] = Math.min(TRAINED_CAP_MAX, current + amount);
}

export function getResourceProgressText(stat, s = state) {
  const cap = s.statCaps[stat];
  if (!cap) return `${s.stats[stat] ?? 0}`;
  return `${s.stats[stat] ?? 0} / ${cap}`;
}

// 開局「人生起點報告」：整理呢一生嘅初始命運，俾玩家睇一次
export function generateStartingPotentialReport(s = state) {
  const capEntries = CAPPED_STATS.map(stat => ({ stat, cap: s.statCaps[stat], current: s.stats[stat] }));
  const sorted = [...capEntries].sort((a, b) => b.current - a.current);
  const strongest = sorted[0];
  const weakest = sorted[sorted.length - 1];
  s.startingPotentialReport = {
    totalPoints: s.startingTotalPoints,
    totalCap: s.startingTotalPoints, // 向下相容欄位
    capEntries,
    strongestStat: strongest.stat,
    weakestStat: weakest.stat,
    // 短版天生偏向句，卡片直接顯示；詳細解釋交俾 UI 嘅「查看說明」摺疊區，唔好兩者都塞喺同一段
    summary: `本次開局：${strongest.stat}較突出，${weakest.stat}較保守。`
  };
  return s.startingPotentialReport;
}

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

// 呢個選項係咪同玩家目前嘅人格傾向一致？唔一致唔會硬鎖（人格傾向永遠唔可以令玩家完全冇路可行），
// 只會令個選項變得「唔自然」（strained）：要付出少少代價（壓力／自信變化、消耗 willingnessToChange），
// 但玩家一定揀得到 —— 呢個保證任何 popup／message／dialogue 都唔會因為 personality 而卡死
export function calculateChoiceAvailability(choice, s = state) {
  if (!choice.attitudeTag) return { available: true, natural: true, strained: false, hintText: null };
  const tendency = getTendencyForAttitude(choice.attitudeTag);
  const dominant = getDominantTendency(s);
  const natural = !dominant || !tendency || dominant.id === tendency.id;
  if (natural) return { available: true, natural: true, strained: false, hintText: null };

  const canAffordEasily = s.willingnessToChange >= UNNATURAL_WILLINGNESS_COST;
  const hintText = canAffordEasily
    ? "你平時好少咁講，需要鼓起少少勇氣，但依家都做得到。"
    : "你一時間開唔到口，需要更大勇氣先講得出，但你依然可以選擇試一試。";
  return { available: true, natural: false, strained: true, hintText };
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
    case "characterPersonalityIs":
      return getCharacterById(condition.characterId, s)?.personalityId === condition.personalityId;
    case "characterIdentityTypeIs":
      return getCharacterById(condition.characterId, s)?.generatedFromIdentityType === condition.identityTypeId;
    case "hobbyProgressAtLeast":
      return ((s.hobbyProgress[condition.hobbyId] || {}).weeksAttended || 0) >= condition.amount;
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
      applyResourceChangeWithCap(effect.stat, effect.amount, s);
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

  recordStoryEvent({
    eventId: encounter.id,
    eventTitle: encounter.title || encounter.silentLog?.title || "地區遭遇",
    week: s.currentWeek,
    totalWeek: s.totalWeeksElapsed ?? 0,
    location: s.locationId,
    charactersInvolved: characterId ? [characterId] : [],
    playerChoiceText: choice.text,
    playerAttitudeTag: choice.attitudeTag || null,
    resultSummary: outcomeSummary.join("；"),
    relationshipChanges: choice.relationshipEffects || [],
    identityChanges: [],
    scheduleChanges: [],
    goalChanges: [],
    routeSeedChanges: choice.routeSeedEffects || [],
    followUpEventIds: [],
    storyThreadId: encounter.id
  }, s);

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
  checkOpportunityProgressOnAction(action, s);

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
  // 學術事件（academicEvents.js 展開嘅 message）記低事件歷史／事件鏈進度，俾之後步驟同 stage review 參考
  if (message.eventType) {
    if (!s.academicEventHistory.includes(messageId)) s.academicEventHistory.push(messageId);
    if (message.chainId) {
      s.eventChainProgress[message.chainId] = { lastStep: message.chainStep, lastEventId: messageId };
    }
  }
}

export function getAvailableMessages(s = state) {
  return messages.filter(m => !s.deliveredMessageIds.includes(m.id) && checkConditions(m.triggerConditions, s));
}

// 訊息預算：每週自動派送嘅「普通」訊息有上限，頭幾週仲會再收緊，避免玩家一開波就俾訊息追住走
// 學術事件／訊息可以帶 weight（預設 1），呢度用加咗隨機噪音嘅 weight 排序，
// 令權重高嘅候選（例如某 NPC personality 對某類事件有 bias）更大機會排喺前面攞到本週有限嘅名額，
// 但唔會完全蓋過其他候選（保留隨機性，唔係「權重最高一定出現」）
// NPC personality 對邊類 eventType 有偏好（identityPersonalities.js 嘅 eventWeightModifiers），
// 令同一個 event 喺唔同 personality 嘅 NPC 身上出現機會唔同（例如活動型老師更常派活動邀請、
// 嚴格型老師更常關注成績低嘅學生）——呢個要喺運行時（有生成角色之後）先計得到，唔可以喺 messages.js 靜態展開嗰陣算
function personalityWeightModifier(message, s) {
  if (!message.eventType || !message.senderId) return 1;
  const character = getCharacterById(message.senderId, s);
  if (!character) return 1;
  const personality = getPersonalityById(character.personalityId);
  return personality?.eventWeightModifiers?.[message.eventType] ?? 1;
}

function effectiveWeight(m, s) {
  return (m.weight ?? 1) * personalityWeightModifier(m, s);
}

function sortByWeight(candidates, s) {
  return [...candidates].sort((a, b) => (effectiveWeight(b, s) * Math.random()) - (effectiveWeight(a, s) * Math.random()));
}

export function applyMessageBudget(candidates, s = state) {
  const introPhase = s.currentWeek <= messageRules.introWeeksLowDensity;
  const capNormal = introPhase ? messageRules.introWeeksMaxMessages : messageRules.maxMessagesPerWeek;
  let normalCount = 0;
  const allowed = [];
  sortByWeight(candidates, s).forEach(m => {
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
// 保底：如果條件篩走晒所有選項，寧願全部選項都畀返出嚟，都唔可以令玩家完全冇選項可以揀（會卡死）
export function getAvailableChoicesByRelationship(dialogueOrMessage, s = state) {
  const all = dialogueOrMessage.choices || [];
  const filtered = all.filter(c => !c.conditions || checkConditions(c.conditions, s));
  return filtered.length ? filtered : all;
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
  (choice.routeSeedEffects || []).forEach(rs => addRouteSeed(rs.seedId, rs.amount, s));
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

  recordStoryEvent({
    eventId: message.id,
    eventTitle: message.title,
    week: s.currentWeek,
    totalWeek: s.totalWeeksElapsed ?? 0,
    location: s.locationId,
    charactersInvolved: message.senderId ? [message.senderId] : [],
    playerChoiceText: choice.text,
    playerAttitudeTag: choice.attitudeTag || null,
    resultSummary: outcomeSummary.join("；"),
    relationshipChanges: choice.relationshipEffects || [],
    identityChanges: [],
    scheduleChanges: [],
    goalChanges: [],
    routeSeedChanges: choice.routeSeedEffects || [],
    followUpEventIds: choice.nextMessageId ? [choice.nextMessageId] : [],
    storyThreadId: message.chainId || message.id
  }, s);

  return { next, outcomeSummary };
}

// 記低一條結構化事件紀錄，俾 generateSixWeekStoryScene() 揀故事線用（唔係淨係得數值變化，
// 而係包含地點、角色、玩家講咗乜、結果係乜，先夠料組成一段有情境嘅故事）
function recordStoryEvent(entry, s = state) {
  s.storyEventLog.push(entry);
  if (s.storyEventLog.length > 200) s.storyEventLog.shift();
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
    case "hobbyProgress":
      current = (s.hobbyProgress[subGoal.hobbyId] || {}).weeksAttended || 0;
      break;
    case "reportGrade": {
      const latestCard = s.reportCards[s.reportCards.length - 1];
      const subj = latestCard?.subjectScores.find(sc => sc.id === subGoal.subjectId);
      current = subj ? subj.score : 0;
      break;
    }
    case "attitudeUsed":
      current = s.attitudeHistory.filter(a => a.attitudeId === subGoal.attitudeId).length;
      break;
    case "routeSeed":
      current = s.routeSeeds[subGoal.seedId] || 0;
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

// 同 getGoalSubProgress 一樣嘅資料，改個名俾 UI／spec 用嚟表達「checklist 進度」
export function getGoalRequirementProgress(goalId, s = state) { return getGoalSubProgress(goalId, s); }
export function checkGoalRequirements(goalId, s = state) {
  const detail = calculateGoalProgressDetail(goalId, s);
  return detail ? detail.doneCount === detail.total : false;
}

// 目標顯示狀態：未開始 / 進行中 / 可完成 / 已完成 / 錯過
export function getGoalStatus(goalId, s = state) {
  if (s.completedGoals.includes(goalId)) return "已完成";
  if (s.missedGoals.includes(goalId)) return "錯過";
  const detail = calculateGoalProgressDetail(goalId, s);
  if (!detail) return "進行中";
  if (detail.doneCount === detail.total) return "可完成";
  if (detail.subGoals.every(sg => sg.current === 0)) return "未開始";
  return "進行中";
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
    s.urgentMessagesSentThisTerm = 0;
    s.messageBudgetThisWeek = 0;
    if (nextTerm.stageId !== s.stageId) {
      s.stageId = nextTerm.stageId;
      s.age += 1;
    }
    s.selectedTermGoalId = null;
    captureTermStartSnapshot(s);
    const resetResult = applyWeeklyReset(s);

    return { blocked: false, termEnded: true, finished: false, termReview, nextTerm, storyCheckDue: resetResult.storyCheckDue };
  }

  s.currentWeek += 1;
  const resetResult = applyWeeklyReset(s);
  return { blocked: false, termEnded: false, storyCheckDue: resetResult.storyCheckDue };
}

// 每週重置 AP 之後嘅固定處理：補課／興趣班扣 AP、比賽資訊、比賽截止結算、成績表
function applyWeeklyReset(s = state) {
  s.ap = s.maxAp;
  applyForcedScheduleWeekly(s);
  applyHobbyWeeklyEffects(s);
  checkOpportunityInfo(s);
  resolveOpportunityDeadlines(s);
  checkScheduleDueThisWeek(s);
  checkIdentityExpiry(s);
  if ((s.totalWeeksElapsed ?? 0) - (s.lastReportCardWeek ?? 0) >= 6) {
    generateReportCard(s);
  }
  let storyCheckDue = false;
  if ((s.totalWeeksElapsed ?? 0) - (s.lastStoryReviewWeek ?? 0) >= 6) {
    storyCheckDue = true;
    generateSixWeekStoryScene(s);
  }
  return { storyCheckDue };
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

// ============================================================
// 人生片段回顧（每 6 週一次）—— 只顯示作者喺 storyScenes.js 寫好嘅 authored 內容，
// engine 唔會自動生成任何劇情、對話或結果。如果過去 6 週冇任何已發生事件對應到 authored story scene，
// 就唔會顯示故事（回傳 null，UI 會顯示「呢 6 週冇特別可以回顧嘅人生片段」）。
// ============================================================
export function generateSixWeekStoryScene(s = state) {
  const sinceWeek = (s.totalWeeksElapsed ?? 0) - 6;
  const recentEventIds = s.storyEventLog
    .filter(e => (e.totalWeek ?? 0) > sinceWeek)
    .map(e => e.eventId);
  s.lastStoryReviewWeek = s.totalWeeksElapsed ?? 0;
  if (!recentEventIds.length) return null;

  const candidates = getStoryScenesForEvents(recentEventIds).filter(sc => checkConditions(sc.conditions || [], s));
  if (!candidates.length) return null;

  const maxPriority = Math.max(...candidates.map(sc => sc.priority ?? 0));
  const topPicks = candidates.filter(sc => (sc.priority ?? 0) === maxPriority);
  const chosen = topPicks[Math.floor(Math.random() * topPicks.length)];

  const scene = {
    id: chosen.id,
    title: chosen.title,
    sceneHeading: `${chosen.timeText || ""}${chosen.timeText && chosen.placeText ? "・" : ""}${chosen.placeText || ""}`,
    charactersInvolved: (chosen.characters || []).map(id => getCharacterById(id, s)?.name || id),
    narration: chosen.sceneText || [],
    dialogueLines: chosen.dialogue || [],
    result: chosen.resultText || "",
    effects: chosen.impactList || []
  };

  applyRelationshipEffects(chosen.relationshipEffects || [], s);
  (chosen.routeSeedEffects || []).forEach(rs => addRouteSeed(rs.seedId, rs.amount, s));
  (chosen.memoryToAdd || []).forEach(m => addCharacterMemory(m.characterId, m.text, s));
  applyEffects(chosen.identityEffects || [], s);
  applyEffects(chosen.scheduleEffects || [], s);

  s.sixWeekStoryHistory.push(scene);
  return scene;
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
// 成績表（每 6 週一次）
// ============================================================
function pickRandomFrom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function computeSubjectScore(subject, s = state) {
  let statPart = 0;
  const totalWeight = Object.values(subject.statWeights).reduce((a, b) => a + b, 0) || 1;
  Object.entries(subject.statWeights).forEach(([stat, weight]) => {
    const cap = s.statCaps[stat] ?? 100;
    const normalized = ((s.stats[stat] ?? 0) / cap) * 100;
    statPart += normalized * weight;
  });
  const recent = s.recentActionHistory.slice(-18);
  let actionPart = 0;
  Object.entries(subject.actionCategoryWeights).forEach(([category, weight]) => {
    const count = recent.filter(h => h.category === category).length;
    actionPart += Math.min(count, 6) * weight;
  });
  const score = (statPart / totalWeight) * 0.6 + actionPart * 3;
  return Math.max(0, Math.min(100, Math.round(score)));
}

function computeConductScore(s = state) {
  const familyNorm = ((s.stats.家庭關係 ?? 0) / (s.statCaps.家庭關係 ?? 100)) * 100;
  const teacherRespect = getCharacterRelationship("char_teacher", s).respect ?? 0;
  const recentAvoidant = s.attitudeHistory.slice(-12).filter(a => {
    const t = getTendencyForAttitude(a.attitudeId);
    return t && t.id === "avoidant";
  }).length;
  const avoidantPenalty = Math.min(30, recentAvoidant * 5);
  const score = familyNorm * 0.35 + teacherRespect * 0.45 + (100 - avoidantPenalty) * 0.2;
  return Math.max(0, Math.min(100, Math.round(score)));
}

export function generateReportCard(s = state) {
  const subjectScores = academicSubjects.map(subj => ({ id: subj.id, name: subj.name, score: computeSubjectScore(subj, s) }));
  const conductScore = computeConductScore(s);
  const conductTier = getConductTier(conductScore);
  const overallAverage = Math.round(subjectScores.reduce((sum, sc) => sum + sc.score, 0) / subjectScores.length);
  const overallLabel = getGradeLabel(overallAverage);

  const prevCard = s.reportCards[s.reportCards.length - 1];
  let trend = "steady";
  if (prevCard) {
    if (overallAverage - prevCard.overallAverage >= 5) trend = "improved";
    else if (overallAverage - prevCard.overallAverage <= -5) trend = "declined";
  }

  const teacherComment = pickRandomFrom(teacherCommentTemplates[trend]);
  const parentReaction = pickRandomFrom(parentReactionTemplates[overallLabel] || parentReactionTemplates.合格);

  const card = {
    week: s.currentWeek, totalWeek: s.totalWeeksElapsed, termId: s.currentTermId,
    subjectScores, conductScore, conductLabel: conductTier.label, conductComment: conductTier.comment,
    overallAverage, overallLabel, trend, teacherComment, parentReaction
  };
  s.reportCards.push(card);
  s.lastReportCardWeek = s.totalWeeksElapsed;

  generateReviewLog({
    type: "學習",
    title: `成績表：${overallLabel}`,
    body: `${teacherComment} ${parentReaction}`,
    tags: subjectScores.map(sc => `${sc.name}${sc.score}`)
  }, s);

  if (overallAverage < forcedTutoringThreshold) {
    triggerForcedTutoring(card, s);
  } else {
    s.academicConcern = Math.max(0, s.academicConcern - 1);
  }

  return card;
}

// ============================================================
// 強制補課（forced schedule）
// ============================================================
export function triggerForcedTutoring(reportCard, s = state) {
  const isPrimarySchool = ["stage_p1", "stage_p2", "stage_p3"].includes(s.stageId);
  const momTrust = getCharacterRelationship("char_mom", s).trust;
  const teacherRespect = getCharacterRelationship("char_teacher", s).respect;
  const forcedByCharacterId = momTrust >= teacherRespect ? "char_mom" : "char_teacher";

  if (isPrimarySchool) {
    const weeks = 2 + Math.floor(Math.random() * 3); // 2～4
    const entry = {
      id: `forced_${s.totalWeeksElapsed}_${Math.floor(Math.random() * 10000)}`,
      apCost: 1,
      weeksRemaining: weeks,
      forcedByCharacterId,
      reason: "成績未達標，屋企人／老師安排咗補課",
      canNegotiate: true,
      negotiationConditions: [{ type: "relationshipAtLeast", characterId: forcedByCharacterId, dimension: "trust", amount: 45 }]
    };
    s.forcedSchedule.push(entry);
    addSchoolGoal({
      id: `goal_forced_${entry.id}`,
      name: "補課安排",
      source: getCharacterById(forcedByCharacterId)?.name || "屋企人",
      description: `接下來 ${weeks} 週，每週 1 AP 會被補課佔用。`,
      deadlineWeeks: weeks,
      canAbandon: false
    }, s);
    generateReviewLog({
      type: "後續", title: "屋企人安排咗補課",
      body: `接下來 ${weeks} 週，每週 1 AP 會被補課佔用。呢個唔係失敗，只係呢段人生俾大人介入咗。`,
      tags: ["強制補課"]
    }, s);
    addIdentity({
      id: `identity_tutoring_${entry.id}`,
      name: "補課學生",
      type: "forcedRole",
      givenByCharacterId: forcedByCharacterId,
      durationWeeks: weeks,
      duties: ["準時上堂", "完成補課練習"],
      benefits: ["學業支援"],
      costs: [`每週 1 AP`],
      relatedScheduleIds: [],
      relatedGoals: [`goal_forced_${entry.id}`],
      reviewText: "呢段時間你多咗一個身份：補課學生。"
    }, s);
  } else {
    s.academicConcern += 10;
    generateReviewLog({
      type: "後續", title: "成績未達標",
      body: "升上中學之後，屋企人唔會再硬性安排晒你嘅時間，但都表達咗擔心。",
      tags: ["學業關注+10"]
    }, s);
  }
}

export function negotiateForcedSchedule(forcedId, s = state) {
  const entry = s.forcedSchedule.find(f => f.id === forcedId);
  if (!entry || !entry.canNegotiate) return { ok: false, reason: "呢個安排暫時冇得再商量。" };
  if (!checkConditions(entry.negotiationConditions, s)) return { ok: false, reason: "信任度未夠，暫時傾唔掂。" };
  entry.weeksRemaining = Math.max(1, Math.ceil(entry.weeksRemaining / 2));
  entry.canNegotiate = false;
  generateReviewLog({ type: "家庭", title: "你同屋企人商量咗補課安排", body: "對方願意減少返補課嘅週數。", tags: ["補課週數減少"] }, s);
  return { ok: true };
}

function applyForcedScheduleWeekly(s = state) {
  s.forcedSchedule.forEach(entry => {
    s.ap = Math.max(0, s.ap - entry.apCost);
    entry.weeksRemaining -= 1;
  });
  const finished = s.forcedSchedule.filter(f => f.weeksRemaining <= 0);
  finished.forEach(f => removeSchoolGoal(`goal_forced_${f.id}`, s));
  s.forcedSchedule = s.forcedSchedule.filter(f => f.weeksRemaining > 0);
}

// ============================================================
// 長期興趣班
// ============================================================
export function joinHobby(hobbyId, s = state) {
  const hobby = getHobbyById(hobbyId);
  if (!hobby) return { ok: false, reason: "興趣班唔存在" };
  if (s.activeHobbies.includes(hobbyId)) return { ok: false, reason: "已經參加緊" };
  if (s.activeHobbies.length >= MAX_ACTIVE_HOBBIES) return { ok: false, reason: `最多同時得 ${MAX_ACTIVE_HOBBIES} 個興趣班` };
  const cooldown = s.quitHobbyCooldowns[hobbyId];
  if (cooldown && (s.totalWeeksElapsed ?? 0) < cooldown) return { ok: false, reason: "呢個興趣你啱啱放棄過，仲未可以再揀返" };
  if (!hobby.availableStages.includes(s.stageId)) return { ok: false, reason: "呢個階段仲未開放呢個興趣班" };

  s.activeHobbies.push(hobbyId);
  s.hobbyProgress[hobbyId] = { weeksAttended: 0 };
  s.hobbyHistory.push({ hobbyId, joinedWeek: s.totalWeeksElapsed, quitWeek: null });
  applyEffect({ type: "setFlag", flag: `flag_hobby_${hobbyId}_joined` }, s);
  addHobbyGoal(hobby, s);
  generateReviewLog({ type: "興趣", title: `你加入咗${hobby.name}`, body: hobby.description, tags: [`每週 ${hobby.weeklyApCost} AP`] }, s);
  addIdentity({
    id: `identity_hobby_${hobbyId}`,
    name: `${hobby.name}學生`,
    type: "hobbyRole",
    givenByCharacterId: null,
    durationWeeks: null,
    duties: [`每週出席${hobby.name}`],
    benefits: hobby.relatedCompetitions?.length ? ["可能解鎖相關比賽資訊"] : [],
    costs: [`每週 ${hobby.weeklyApCost} AP`, hobby.moneyCost ? `每週 $${hobby.moneyCost}` : ""].filter(Boolean),
    relatedGoals: [`goal_hobby_${hobbyId}`],
    reviewText: `你成為咗${hobby.name}嘅學生。`
  }, s);
  return { ok: true };
}

export function quitHobby(hobbyId, s = state) {
  const hobby = getHobbyById(hobbyId);
  if (!hobby || !s.activeHobbies.includes(hobbyId)) return { ok: false };
  expireIdentity(`identity_hobby_${hobbyId}`, "expired", s);
  s.activeHobbies = s.activeHobbies.filter(id => id !== hobbyId);
  const historyEntry = [...s.hobbyHistory].reverse().find(h => h.hobbyId === hobbyId && h.quitWeek === null);
  if (historyEntry) historyEntry.quitWeek = s.totalWeeksElapsed;
  s.quitHobbyCooldowns[hobbyId] = (s.totalWeeksElapsed ?? 0) + hobby.quitCooldownWeeks;
  removeHobbyGoal(hobby.id, s);
  generateReviewLog({
    type: "興趣", title: `你放棄咗${hobby.name}`,
    body: "放棄唔一定係壞事，可能你想將時間放喺其他地方，但相關比賽機會可能會變難完成。",
    tags: ["AP 釋放"]
  }, s);
  return { ok: true };
}

function applyHobbyWeeklyEffects(s = state) {
  s.activeHobbies.forEach(hobbyId => {
    const hobby = getHobbyById(hobbyId);
    if (!hobby) return;
    s.ap = Math.max(0, s.ap - hobby.weeklyApCost);
    if (hobby.moneyCost) applyEffect({ type: "addMoney", amount: -hobby.moneyCost }, s);
    applyEffects(hobby.resourceEffects || [], s);
    (hobby.routeSeedEffects || []).forEach(rs => addRouteSeed(rs.seedId, rs.amount, s));

    const progress = s.hobbyProgress[hobbyId] || (s.hobbyProgress[hobbyId] = { weeksAttended: 0 });
    progress.weeksAttended += 1;
    (hobby.capGrowthEffects || []).forEach(cg => {
      if (progress.weeksAttended % cg.everyWeeks === 0) {
        increaseCapByTraining(cg.stat, cg.amount, s);
      }
    });
  });
}

// ============================================================
// 比賽／機會
// ============================================================
export function checkOpportunityInfo(s = state) {
  competitions.forEach(comp => {
    if (s.knownOpportunities.includes(comp.id)) return;
    if (!comp.availableStages.includes(s.stageId)) return;
    if (!checkConditions(comp.infoTriggerConditions, s)) return;
    s.knownOpportunities.push(comp.id);
    const sourceChar = comp.sourceCharacters[0] ? getCharacterById(comp.sourceCharacters[0]) : null;
    generateReviewLog({
      type: "後續", title: `你聽聞到「${comp.name}」`,
      body: `${sourceChar ? sourceChar.name : "有人"}話俾你知呢個機會。你可以揀要唔要準備參加。`,
      tags: ["新機會"]
    }, s);
  });
}

// 將單一 condition 轉做人睇得明嘅一句話，俾「尚未符合資格」清單用
function describeCondition(condition, s = state) {
  switch (condition.type) {
    case "statAtLeast":
      return `${condition.stat} 要 ≥ ${condition.amount}（目前 ${Math.round(s.stats[condition.stat] ?? 0)}）`;
    case "statBelow":
      return `${condition.stat} 要 < ${condition.amount}（目前 ${Math.round(s.stats[condition.stat] ?? 0)}）`;
    case "actionCategoryUsedAtLeast":
      return `${condition.category}行動要 ≥ ${condition.amount} 次（目前 ${s.categoryUsageCounts[condition.category] || 0}）`;
    case "locationVisitedAtLeast": {
      const loc = getLocationById(condition.locationId);
      return `${loc ? loc.name : condition.locationId}熟悉度要 ≥ ${condition.amount}（目前 ${s.locationFamiliarity[condition.locationId] || 0}）`;
    }
    case "relationshipAtLeast": {
      const char = getCharacterById(condition.characterId);
      return `${char ? char.name : condition.characterId}${DIMENSION_LABELS[condition.dimension] || condition.dimension}要 ≥ ${condition.amount}`;
    }
    case "hasFlag":
      return "需要先完成相關前置事件";
    default:
      return "有未達到嘅條件";
  }
}

// 呢個機會嘅「參加資格」是否已經符合（唔符合就淨係顯示資訊，唔可以加入目標）
export function checkOpportunityEntryRequirements(compId, s = state) {
  const comp = getCompetitionById(compId);
  if (!comp) return false;
  return checkConditions(comp.entryRequirements, s);
}

// 未符合資格時，列出仲缺咩（俾 UI 顯示「尚未符合資格」清單）
export function getOpportunityMissingRequirements(compId, s = state) {
  const comp = getCompetitionById(compId);
  if (!comp) return [];
  return (comp.entryRequirements || []).filter(c => !checkCondition(c, s)).map(c => describeCondition(c, s));
}

// 已知但已經明顯超過報名門檻（例如超出 40%）嘅機會，NPC 可以主動提醒玩家去參加
export function getOverqualifiedOpportunityReminders(s = state) {
  return s.knownOpportunities
    .filter(compId => !s.opportunityProgress[compId] || s.opportunityProgress[compId].status !== "active")
    .map(compId => getCompetitionById(compId))
    .filter(Boolean)
    .filter(comp => {
      const statReqs = (comp.entryRequirements || []).filter(c => c.type === "statAtLeast");
      if (!statReqs.length) return false;
      return statReqs.every(c => (s.stats[c.stat] ?? 0) >= c.amount * 1.4) && checkOpportunityEntryRequirements(comp.id, s);
    })
    .map(comp => {
      const sourceChar = comp.sourceCharacters[0] ? getCharacterById(comp.sourceCharacters[0]) : null;
      return {
        competitionId: comp.id,
        name: comp.name,
        reminderText: `${sourceChar ? sourceChar.name : "有人"}提醒你：「你其實可以試試參加${comp.name}。」`
      };
    });
}

export function joinOpportunity(compId, s = state) {
  const comp = getCompetitionById(compId);
  if (!comp) return { ok: false };
  if (!checkConditions(comp.entryRequirements, s)) {
    return { ok: false, reason: "尚未符合資格：" + getOpportunityMissingRequirements(compId, s).join("、") };
  }
  s.opportunityProgress[compId] = { prepCount: 0, joined: true, status: "active", deadlineAt: (s.totalWeeksElapsed ?? 0) + comp.deadlineWeeks };
  addOpportunityGoal(comp, s);
  generateReviewLog({ type: "後續", title: `你決定準備「${comp.name}」`, body: comp.description, tags: ["加入目標"] }, s);

  // 同步加入時間表：第幾週前要完成幾多次準備，達成／未達成都喺 resolveOpportunityDeadlines() 度早就會處理獎勵，
  // 呢度嘅 schedule item 淨係俾玩家喺「時間表」頁清楚睇到檢查條件，唔重複派獎勵（onSuccessEffects 留空）
  addScheduleItem({
    id: `schedule_opp_${compId}`,
    name: `「${comp.name}」準備`,
    source: comp.sourceCharacters[0] ? (getCharacterById(comp.sourceCharacters[0])?.name || "自己") : "自己",
    sourceCharacterId: comp.sourceCharacters[0] || null,
    checkWeek: (s.totalWeeksElapsed ?? 0) + comp.deadlineWeeks,
    checkConditions: [{ type: "actionCategoryUsedAtLeast", category: comp.preparationRequirements.category, amount: comp.preparationRequirements.count }],
    progressText: `截止前完成 ${comp.preparationRequirements.count} 次${comp.preparationRequirements.category}準備`,
    onSuccessEffects: [],
    onSuccessReview: "",
    missResultText: comp.failResult || "沒有懲罰，只是錯過咗呢次機會。",
    canAbandon: true,
    relatedCharacterIds: comp.sourceCharacters,
    relatedLocationIds: comp.sourceLocations,
    relatedGoalId: `goal_opportunity_${compId}`
  }, s);

  addIdentity({
    id: `identity_opp_${compId}`,
    name: `${comp.name}參加者`,
    type: "competitionRole",
    givenByCharacterId: comp.sourceCharacters[0] || null,
    durationWeeks: comp.deadlineWeeks,
    duties: [`完成 ${comp.preparationRequirements.count} 次${comp.preparationRequirements.category}準備`],
    benefits: ["比賽經驗", "相關 NPC 關係提升機會"],
    costs: [],
    relatedScheduleIds: [`schedule_opp_${compId}`],
    relatedGoals: [`goal_opportunity_${compId}`],
    reviewText: `你成為咗${comp.name}嘅參加者。`
  }, s);

  return { ok: true };
}

// spec 要求嘅函式名，同 joinOpportunity 係同一份邏輯（明確表達「加入之後會變成 active goal」）
export function joinOpportunityAsGoal(compId, s = state) { return joinOpportunity(compId, s); }

export function declineOpportunity(compId, s = state) {
  s.knownOpportunities = s.knownOpportunities.filter(id => id !== compId);
  s.declinedOpportunities = s.declinedOpportunities || [];
  if (!s.declinedOpportunities.includes(compId)) s.declinedOpportunities.push(compId);
}

// 目前已經「知道資訊」嘅機會清單（比賽唔會一開始全部見晒，要達到 infoTriggerConditions 先出現）
export function getOpportunityInfoVisibility(s = state) {
  return s.knownOpportunities.map(getCompetitionById).filter(Boolean);
}

function checkOpportunityProgressOnAction(action, s = state) {
  Object.entries(s.opportunityProgress).forEach(([compId, progress]) => {
    if (progress.status !== "active") return;
    const comp = getCompetitionById(compId);
    if (!comp || comp.preparationRequirements.category !== action.category) return;
    progress.prepCount += 1;
    updateGoalProgress(`goal_opportunity_${compId}`, progress.prepCount, s);
  });
}

function resolveOpportunityDeadlines(s = state) {
  Object.entries(s.opportunityProgress).forEach(([compId, progress]) => {
    if (progress.status !== "active") return;
    if ((s.totalWeeksElapsed ?? 0) < progress.deadlineAt) return;
    const comp = getCompetitionById(compId);
    if (!comp) return;
    const required = comp.preparationRequirements.count;
    let outcome;
    if (progress.prepCount >= required) outcome = "success";
    else if (progress.prepCount > 0) outcome = "partial";
    else outcome = "miss";

    if (outcome === "success") {
      applyEffects(comp.successRewards || [], s);
      (comp.routeSeedRewards || []).forEach(rs => addRouteSeed(rs.seedId, rs.amount, s));
      applyRelationshipEffects(comp.relationshipRewards || [], s);
    } else if (outcome === "partial") {
      applyEffects(comp.partialRewards || [], s);
    }
    generateReviewLog({
      type: "後續", title: `「${comp.name}」結果`, body: comp.reviewText[outcome],
      tags: [outcome === "success" ? "比賽成功" : outcome === "partial" ? "比賽部分完成" : "比賽未完成"]
    }, s);
    progress.status = outcome;
    removeOpportunityGoal(compId, s);
    expireIdentity(`identity_opp_${compId}`, outcome === "miss" ? "expired" : "completed", s);
  });
}

// ============================================================
// 時間表（schedule list）：已答應／被安排／參與中，未來某週會檢查條件嘅事情
// ============================================================
export function addScheduleItem(itemData, s = state) {
  const item = {
    id: itemData.id,
    name: itemData.name,
    source: itemData.source || "自己",
    sourceCharacterId: itemData.sourceCharacterId || null,
    identityId: itemData.identityId || null,
    checkWeek: itemData.checkWeek,
    checkConditions: itemData.checkConditions || [],
    progressText: itemData.progressText || "",
    apCostPerWeek: itemData.apCostPerWeek || 0,
    onSuccessEffects: itemData.onSuccessEffects || [],
    onSuccessReview: itemData.onSuccessReview || "",
    missResultText: itemData.missResultText || "沒有懲罰，只是錯過咗呢次機會。",
    canAbandon: itemData.canAbandon !== false,
    canNegotiate: !!itemData.canNegotiate,
    negotiationConditions: itemData.negotiationConditions || [],
    relatedCharacterIds: itemData.relatedCharacterIds || [],
    relatedLocationIds: itemData.relatedLocationIds || [],
    relatedGoalId: itemData.relatedGoalId || null,
    relatedChainId: itemData.relatedChainId || null,
    status: "active"
  };
  s.scheduledCommitments.push(item);
  return item;
}

export function updateScheduleProgress(id, progressText, s = state) {
  const item = s.scheduledCommitments.find(i => i.id === id);
  if (item) item.progressText = progressText;
}

export function getScheduleItemsByWeek(week, s = state) {
  return s.scheduledCommitments.filter(i => i.status === "active" && i.checkWeek === week);
}

// 每週推進時 call：檢查有冇時間表項目到咗檢查週，達成就攞獎勵，未達成都冇懲罰，只記錄結果
export function checkScheduleDueThisWeek(s = state) {
  const due = s.scheduledCommitments.filter(item => item.status === "active" && (s.totalWeeksElapsed ?? 0) >= item.checkWeek);
  due.forEach(item => resolveScheduleCheck(item, s));
}

export function resolveScheduleCheck(item, s = state) {
  const met = checkConditions(item.checkConditions, s);
  if (met) {
    applyEffects(item.onSuccessEffects, s);
    item.status = "completed";
    s.completedSchedules.push(item.id);
    generateReviewLog({ type: "後續", title: `完成：${item.name}`, body: item.onSuccessReview || `你完成咗「${item.name}」嘅檢查。`, tags: ["時間表達成"] }, s);
  } else {
    item.status = "missed";
    s.missedSchedules.push(item.id);
    generateReviewLog({ type: "後續", title: `未達成：${item.name}`, body: item.missResultText, tags: ["時間表未達成"] }, s);
  }
  s.scheduledCommitments = s.scheduledCommitments.filter(i => i.id !== item.id);
}

export function cancelScheduleItem(id, s = state) {
  const item = s.scheduledCommitments.find(i => i.id === id);
  if (!item || !item.canAbandon) return { ok: false, reason: "呢個安排暫時唔可以放棄" };
  item.status = "abandoned";
  s.scheduledCommitments = s.scheduledCommitments.filter(i => i.id !== id);
  generateReviewLog({ type: "後續", title: `放棄：${item.name}`, body: "你決定放棄呢個安排，冇懲罰，只係將時間留返俾其他事。", tags: ["放棄安排"] }, s);
  return { ok: true };
}

export function negotiateScheduleItem(id, s = state) {
  const item = s.scheduledCommitments.find(i => i.id === id);
  if (!item || !item.canNegotiate) return { ok: false, reason: "呢個安排暫時唔可以協商" };
  if (!checkConditions(item.negotiationConditions, s)) return { ok: false, reason: "關係／條件未夠，暫時傾唔掂" };
  item.checkWeek = Math.max((s.totalWeeksElapsed ?? 0) + 1, item.checkWeek - 2);
  item.canNegotiate = false;
  generateReviewLog({ type: "後續", title: `協商：${item.name}`, body: "你哋傾掂咗，安排調整咗少少。", tags: ["協商成功"] }, s);
  return { ok: true };
}

// ============================================================
// 身份列表（identity list）：唔係永久稱號，好多得幾週
// ============================================================
export function addIdentity(identityData, s = state) {
  const identity = {
    id: identityData.id,
    name: identityData.name,
    type: identityData.type,
    sourceEventId: identityData.sourceEventId || null,
    givenByCharacterId: identityData.givenByCharacterId || null,
    startWeek: s.totalWeeksElapsed ?? 0,
    endWeek: identityData.durationWeeks ? (s.totalWeeksElapsed ?? 0) + identityData.durationWeeks : null,
    duties: identityData.duties || [],
    benefits: identityData.benefits || [],
    costs: identityData.costs || [],
    relatedScheduleIds: identityData.relatedScheduleIds || [],
    relatedGoals: identityData.relatedGoals || [],
    relatedRelationships: identityData.relatedRelationships || [],
    status: "active",
    identityEffects: identityData.identityEffects || [],
    reviewText: identityData.reviewText || ""
  };
  s.identities.push(identity);
  applyEffects(identity.identityEffects, s);
  generateReviewLog({ type: "身份", title: `新身份：${identity.name}`, body: identity.reviewText || `你獲得咗「${identity.name}」呢個身份。`, tags: ["新身份"] }, s);
  return identity;
}

export function getActiveIdentities(s = state) { return s.identities.filter(i => i.status === "active"); }
export function getPastIdentities(s = state) { return s.identities.filter(i => i.status !== "active"); }

export function expireIdentity(id, outcome = "completed", s = state) {
  const identity = s.identities.find(i => i.id === id);
  if (!identity) return;
  identity.status = outcome;
}

// 每週推進時 call：身份夠鐘（endWeek 到咗）就自動轉做 completed，記錄一句回顧
export function checkIdentityExpiry(s = state) {
  getActiveIdentities(s).forEach(identity => {
    if (identity.endWeek !== null && (s.totalWeeksElapsed ?? 0) >= identity.endWeek) {
      identity.status = "completed";
      generateReviewLog({ type: "身份", title: `身份完結：${identity.name}`, body: `你「${identity.name}」呢段時期完結咗。`, tags: ["身份完結"] }, s);
    }
  });
}

// ============================================================
// 多目標系統
// ============================================================
export function addSchoolGoal(goal, s = state) { s.goalsByCategory.schoolGoals.push(goal); }
function removeSchoolGoal(id, s = state) { s.goalsByCategory.schoolGoals = s.goalsByCategory.schoolGoals.filter(g => g.id !== id); }

function addHobbyGoal(hobby, s = state) {
  s.goalsByCategory.hobbyGoals.push({
    id: `goal_hobby_${hobby.id}`, name: hobby.name, source: "自己選擇",
    description: `每週 ${hobby.weeklyApCost} AP 嘅長期承諾`, category: hobby.category, canAbandon: true
  });
}
function removeHobbyGoal(hobbyId, s = state) {
  s.goalsByCategory.hobbyGoals = s.goalsByCategory.hobbyGoals.filter(g => g.id !== `goal_hobby_${hobbyId}`);
}

function addOpportunityGoal(comp, s = state) {
  s.goalsByCategory.opportunityGoals.push({
    id: `goal_opportunity_${comp.id}`,
    name: comp.name,
    source: comp.sourceCharacters[0] ? (getCharacterById(comp.sourceCharacters[0])?.name || "") : "",
    description: comp.description,
    deadlineAt: (s.totalWeeksElapsed ?? 0) + comp.deadlineWeeks,
    target: comp.preparationRequirements.count,
    canAbandon: true
  });
}
function removeOpportunityGoal(compId, s = state) {
  s.goalsByCategory.opportunityGoals = s.goalsByCategory.opportunityGoals.filter(g => g.id !== `goal_opportunity_${compId}`);
}

export function addGoal(category, goalData, s = state) {
  if (!s.goalsByCategory[category]) return;
  s.goalsByCategory[category].push(goalData);
}

export function abandonGoal(category, goalId, s = state) {
  if (!s.goalsByCategory[category]) return;
  if (category === "hobbyGoals") {
    const hobbyId = goalId.replace("goal_hobby_", "");
    quitHobby(hobbyId, s);
    return;
  }
  if (category === "opportunityGoals") {
    const compId = goalId.replace("goal_opportunity_", "");
    s.scheduledCommitments = s.scheduledCommitments.filter(i => i.id !== `schedule_opp_${compId}`);
    delete s.opportunityProgress[compId];
  }
  s.goalsByCategory[category] = s.goalsByCategory[category].filter(g => g.id !== goalId);
  s.abandonedGoals.push(goalId);
}

export function updateGoalProgress(goalId, value, s = state) {
  s.goalProgressMap[goalId] = value;
}

export function getGoalsByCategory(s = state) {
  return {
    termGoal: s.selectedTermGoalId ? getGoalById(s.selectedTermGoalId) : null,
    schoolGoals: s.goalsByCategory.schoolGoals,
    hobbyGoals: s.goalsByCategory.hobbyGoals,
    opportunityGoals: s.goalsByCategory.opportunityGoals.map(g => ({
      ...g,
      progress: s.opportunityProgress[g.id.replace("goal_opportunity_", "")]?.prepCount || 0
    })),
    relationshipGoals: s.goalsByCategory.relationshipGoals,
    routeGoals: calculateDirectionLevels(s).filter(d => d.level >= 1).slice(0, 3).map(d => ({
      id: `goal_route_${d.seedId}`, name: d.name, description: d.flavor, level: d.level
    }))
  };
}

export function getUrgentGoals(s = state, limit = 3) {
  const urgent = [];
  if (s.selectedTermGoalId) {
    const goal = getGoalById(s.selectedTermGoalId);
    if (goal) urgent.push({ id: goal.id, name: goal.name, category: "本學期心願" });
  }
  s.forcedSchedule.forEach(f => urgent.push({ id: f.id, name: "補課安排", category: "學校任務", weeksRemaining: f.weeksRemaining }));
  [...s.goalsByCategory.opportunityGoals]
    .sort((a, b) => a.deadlineAt - b.deadlineAt)
    .forEach(g => urgent.push({ id: g.id, name: g.name, category: "比賽／機會", deadlineAt: g.deadlineAt }));
  s.goalsByCategory.hobbyGoals.forEach(g => urgent.push({ id: g.id, name: g.name, category: "興趣承諾" }));
  return urgent.slice(0, limit);
}

// spec 要求嘅函式名，dashboard 淨係顯示最重要嘅幾個目標（同 getUrgentGoals 係同一份邏輯）
export function getDashboardPriorityGoals(s = state, limit = 3) { return getUrgentGoals(s, limit); }

export function getActionsForGoal(goalId, s = state) {
  if (goalId.startsWith("goal_opportunity_")) {
    const compId = goalId.replace("goal_opportunity_", "");
    const comp = getCompetitionById(compId);
    return comp ? actions.filter(a => a.category === comp.preparationRequirements.category) : [];
  }
  return [];
}

export function resolveGoalDeadline(goalId, s = state) {
  resolveOpportunityDeadlines(s);
}

export function generateGoalReview(s = state) {
  return {
    completedOpportunities: Object.values(s.opportunityProgress).filter(p => p.status === "success").length,
    activeHobbies: s.activeHobbies.length,
    forcedScheduleActive: s.forcedSchedule.length
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
export function getKnownCharacters(s = state) { return getAllGeneratedCharacters(s).filter(c => s.knownCharacters.includes(c.id)); }
export function getUnreadMessageObjects(s = state) { return s.unreadMessages.map(getMessageById).filter(Boolean); }
export function setBackgroundTagsCache(s, tags) { s._cachedBackgroundTags = tags; }
export function getAllActionsData() { return actions; }
export function getAllTermGoals() { return termGoals; }
export function getAllStageGoals() { return stageGoals; }
export function getActionTabs() { return actionTabs; }
export function getStageRules() { return stageRules; }
export function isSeedRestrictedForCurrentStage(seedId) { return isRouteSeedRestricted(seedId, state.stageId); }
