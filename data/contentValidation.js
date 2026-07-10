// data/contentValidation.js
// 內容檢查工具：喺遊戲載入嗰陣行一次，用 console.warn 提示作者手動輸入嘅內容有咩缺漏。
// 唔會阻止遊戲運作，純粹係開發時嘅提示。

import { messages } from "./messages.js";
import { messageTemplates } from "./messageTemplates.js";
import { academicEvents } from "./academicEvents.js";
import { dialogues } from "./dialogues.js";
import { encounters } from "./encounters.js";
import { choiceSets } from "./choiceSets.js";
import { storyScenes, getStorySceneById } from "./storyScenes.js";
import { characterSlots } from "./characters.js";
import { openingEvents } from "./openingEvents.js";
import { reviewStoryGroups } from "./reviewStories.js";
import { locations } from "./locations.js";
import { getEventWeekSlot, getEventTermSlot, resolveWeeklyPool, testWeeklyPoolPurity } from "./openingEventRegistry.js";
import { openingWeek1ReviewBridge } from "./openingWeek1ReviewBridge.js";
import { openingS2W1ReviewBridge } from "./openingS2W1ReviewBridge.js";
import { actions, actionTabs, actionCategories } from "./actions.js";
import { hobbies } from "./hobbies.js";
import { createInitialState } from "../js/state.js";
import { getPersonalitiesForIdentity, getPersonalityByAnyId } from "./identityPersonalities.js";
import { getIdentityTypeById } from "./identityTypes.js";
import { SAME_AGE_PEER_ICON_MANIFEST, SENIOR_STUDENT_ICON_MANIFEST } from "./characterIconManifest.js";

const openingReviewBridge = {
  ...openingWeek1ReviewBridge,
  ...openingS2W1ReviewBridge
};

function warn(msg) {
  console.warn(`[內容檢查] ${msg}`);
}

function checkChoices(sourceLabel, id, choices) {
  const warnings = [];
  if (!choices || choices.length < 2) {
    warnings.push(`${sourceLabel} ${id} 少於 2 個可選選項`);
    return warnings;
  }
  choices.forEach((c, i) => {
    if (!c.text || !c.text.trim()) warnings.push(`${sourceLabel} ${id} 嘅第 ${i + 1} 個選項冇 text`);
    if (!c.resultText && !c.addReviewLog && !c.effects?.length && !c.relationshipEffects?.length) {
      warnings.push(`choice ${c.id || i} (${sourceLabel} ${id}) 缺少 resultText／effects，睇落冇任何後果`);
    }
  });
  return warnings;
}

export function validateContentData() {
  const warnings = [];

  // ---- messageTemplates ----
  messageTemplates.forEach(t => {
    if (!t.titleTemplate) warnings.push(`template ${t.id} 冇標題`);
    if (!t.lineTemplates || !t.lineTemplates.length) warnings.push(`template ${t.id} 冇 lineTemplates`);
    warnings.push(...checkChoices("template", t.id, t.choices || (t.choiceSetId ? getChoiceSetChoices(t.choiceSetId) : null)));
    if (!t.choices && !t.choiceSetId) warnings.push(`template ${t.id} 冇 choices 亦冇 choiceSetId`);
  });

  // ---- academicEvents ----
  academicEvents.forEach(e => {
    if (!e.titleTemplate) warnings.push(`事件 ${e.id} 冇標題`);
    if (!e.lineTemplates || !e.lineTemplates.length) warnings.push(`事件 ${e.id} 冇 lineTemplates`);
    const resolvedChoices = e.choices || (e.choiceSetId ? getChoiceSetChoices(e.choiceSetId) : null);
    if (e.choiceSetId && !e.choices) warnings.push(`事件 ${e.id} 使用咗 choiceSetId「${e.choiceSetId}」，請確認呢個 choiceSet 嘅情境真係啱呢個事件（建議直接寫 choices）`);
    warnings.push(...checkChoices("事件", e.id, resolvedChoices));
    if (e.canBecomeGoal && !e.storySceneId) {
      // 呢個唔一定係錯，但值得提提作者留意
    }
    if (!e.storySceneId) {
      const related = storyScenes.some(sc => (sc.relatedEventIds || []).includes(e.id));
      if (related) {
        // 有 story scene 引用咗呢個 event，但 event 本身冇填 storySceneId 都唔緊要，配對係由 storyScenes.js 嘅 relatedEventIds 決定
      }
    }
    if (!e.followUpEventIds && !e.reviewLogText) {
      warnings.push(`事件 ${e.id} 冇 followUpEventIds 亦冇 reviewLogText，可能睇落冇任何延續`);
    }
  });

  // ---- dialogues ----
  dialogues.forEach(d => {
    if (!d.title) warnings.push(`對話 ${d.id} 冇標題`);
    if (!d.lines || !d.lines.length) warnings.push(`對話 ${d.id} 冇 lines`);
    warnings.push(...checkChoices("對話", d.id, d.choices));
  });

  // ---- encounters ----
  encounters.forEach(enc => {
    if (enc.choices) warnings.push(...checkChoices("地區遭遇", enc.id, enc.choices));
    if (!enc.choices && !enc.silentLog) warnings.push(`地區遭遇 ${enc.id} 冇 choices 亦冇 silentLog`);
  });

  // ---- story scenes ----
  storyScenes.forEach(sc => {
    if (!sc.relatedEventIds || !sc.relatedEventIds.length) warnings.push(`story scene ${sc.id} 冇 relatedEventIds，永遠唔會被揀中`);
    if (!sc.dialogue || !sc.dialogue.length) warnings.push(`story scene ${sc.id} 冇 dialogue，人生片段回顧會缺少角色對話`);
    if (!sc.sceneText || !sc.sceneText.length) warnings.push(`story scene ${sc.id} 冇 sceneText`);
    if (!sc.resultText) warnings.push(`story scene ${sc.id} 冇 resultText`);
  });

  // ---- W1–W6 opening event pool ----
  const locationIds = locations.map(l => l.id);
  const reviewableTagToBranch = new Map();
  reviewStoryGroups.forEach(g => {
    (g.branches || []).forEach(b => {
      (b.triggerStoryMemoryTags || []).forEach(tag => reviewableTagToBranch.set(tag, { group: g, branch: b }));
    });
  });

  // weekSlot（由 id 前綴 w1_~w6_ 推導）係決定「呢個 event 屬於邊一週」嘅權威來源，
  // 每個 opening event 都必須有得到 weekSlot，而且要同 eventScheduling.weekRange 一致，
  // 否則 resolveWeeklyPool() 會攞唔到／攞錯呢個 event。
  openingEvents.forEach(e => {
    const weekSlot = getEventWeekSlot(e);
    if (weekSlot === null) {
      warnings.push(`opening event ${e.id} 冇 weekSlot（id 前綴唔係 w1_~w6_），resolveWeeklyPool() 永遠揀唔到呢個 event`);
    } else {
      const wr = e.eventScheduling?.weekRange;
      if (!wr || wr[0] !== weekSlot || wr[1] !== weekSlot) {
        warnings.push(`opening event ${e.id} 嘅 weekSlot（由 id 推導＝${weekSlot}）同 eventScheduling.weekRange（${wr ? `[${wr[0]},${wr[1]}]` : "冇"}）唔一致`);
      }
    }
  });

  // week-pool purity 測試：Week N 嘅 candidate pool 一定淨係 wN_ 開頭嘅 event，唔可以有其他週嘅漏入
  testWeeklyPoolPurity().forEach(({ week, ids, impure, pure }) => {
    if (!pure) {
      warnings.push(`resolveWeeklyPool(${week}) 混入咗唔屬於呢一週嘅 event：${impure.join("、")}`);
    }
  });

  openingEvents.forEach(e => {
    const sched = e.eventScheduling;
    if (!sched) { warnings.push(`opening event ${e.id} 冇 eventScheduling`); return; }
    if (sched.sourceChannel && locationIds.includes(sched.sourceChannel)) {
      warnings.push(`opening event ${e.id} 嘅 sourceChannel「${sched.sourceChannel}」睇落係地點 id，sourceChannel 唔應該係地點`);
    }
    (e.variants || []).forEach(v => {
      const choices = v.playerChoices || [];
      if (choices.length < 2) {
        warnings.push(`opening event ${e.id} / variant ${v.variantId} 少於 2 個 authored choices`);
      }
      choices.forEach(c => {
        if (!c.playerLine) warnings.push(`opening event ${e.id} / variant ${v.variantId} 嘅 choice ${c.id} 冇 playerLine`);
        if (!c.resultDialogue || !c.resultDialogue.text) warnings.push(`opening event ${e.id} / variant ${v.variantId} 嘅 choice ${c.id} 冇 resultText（resultDialogue.text）`);
        if (!c.memoryAdd || !c.memoryAdd.length) warnings.push(`opening event ${e.id} / variant ${v.variantId} 嘅 choice ${c.id} 冇 storyMemoryTags（memoryAdd）`);
      });
    });
    (e.fallbackChoices || []).forEach(c => {
      if (c.choiceSource !== "authored_event_specific") {
        // fallback 本身預期就係 emergency-only，呢度只係提提：如果 fallback 被當正常選項用會有問題
      }
    });
  });

  // ---- 六週回顧「錨點週」保證：findSixWeekReviewStory() 淨係需要 6 週入面有一週嘅 opening
  // event choices 100% resolve 到 review branch（bridge 或 storyMemoryTag fallback），唔要求
  // 6 週逐週都寫齊（呢個係 S1-W1-6／S2-W1-6／S1-W7-12 而家嘅共通做法，錨點分別係 W1／S2-W1／W9）。
  // 呢度用 termId + weekSlot 自動分 block（每 6 週一組），完全唔靠寫死邊個 stage/channel，
  // 之後加新 stage（例如 S1-W13-18、S3……）都會自動被呢個檢查覆蓋，唔使記得手動加白名單。
  function isChoiceResolved(c) {
    if (openingReviewBridge[c.id]) return true;
    return (c.memoryAdd || []).some(tag => reviewableTagToBranch.has(tag));
  }
  const blockMap = new Map(); // `${termId}#${blockStartWeek}` -> Map<week, {resolved, total}>
  openingEvents.forEach(e => {
    const weekSlot = getEventWeekSlot(e);
    if (weekSlot === null) return;
    const termId = getEventTermSlot(e);
    const blockStart = Math.floor((weekSlot - 1) / 6) * 6 + 1;
    const blockKey = `${termId}#${blockStart}`;
    if (!blockMap.has(blockKey)) blockMap.set(blockKey, new Map());
    const weekStats = blockMap.get(blockKey);
    if (!weekStats.has(weekSlot)) weekStats.set(weekSlot, { resolved: 0, total: 0 });
    const stat = weekStats.get(weekSlot);
    (e.variants || []).forEach(v => {
      (v.playerChoices || []).forEach(c => {
        stat.total += 1;
        if (isChoiceResolved(c)) stat.resolved += 1;
      });
    });
  });
  blockMap.forEach((weekStats, blockKey) => {
    const [termId, blockStartStr] = blockKey.split("#");
    const blockStart = Number(blockStartStr);
    const blockEnd = blockStart + 5;
    const weeksInBlock = Array.from(weekStats.keys());
    const hasFullyCoveredWeek = weeksInBlock.some(w => {
      const stat = weekStats.get(w);
      return stat.total > 0 && stat.resolved === stat.total;
    });
    if (!hasFullyCoveredWeek) {
      const detail = weeksInBlock.map(w => `W${w}(${weekStats.get(w).resolved}/${weekStats.get(w).total})`).join("、");
      warnings.push(`六週回顧缺少錨點週：${termId} 第 ${blockStart}-${blockEnd} 週入面，冇任何一週嘅 opening event choices 100% 有對應 review story branch（各週覆蓋率：${detail}），玩家喺呢 6 週完結時有機會完全睇唔到回顧故事`);
    }
  });

  // ---- review story branches ----
  reviewStoryGroups.forEach(g => {
    if (!g.branches || !g.branches.length) warnings.push(`review story group ${g.id} 冇 branches`);
    (g.branches || []).forEach(b => {
      if (!b.fullStoryText) warnings.push(`review story ${g.id}/${b.id} 冇 fullStoryText`);
      const hasHiddenImpactMetadata = b.impactListVisibility === "hidden" && (
        (b.memoryTags && b.memoryTags.length) ||
        (b.emotionalTags && b.emotionalTags.length) ||
        (b.relationshipHints && b.relationshipHints.length) ||
        (b.propertyHints && b.propertyHints.length) ||
        (b.reviewSummaryTags && b.reviewSummaryTags.length)
      );
      if ((!b.impactList || !b.impactList.length) && !hasHiddenImpactMetadata) warnings.push(`review story ${g.id}/${b.id} 冇 impactList`);
      if (!b.triggerStoryMemoryTags || !b.triggerStoryMemoryTags.length) warnings.push(`review story ${g.id}/${b.id} 冇 triggerStoryMemoryTags`);
    });
  });

  // ---- openingReviewBridge：確認每一條 bridge entry 都指向真實存在嘅 group/branch，
  // 同埋列出信心較低（confidence: "weak"）嘅配對俾作者覆核 ----
  const weakBridgeEntries = [];
  Object.entries(openingReviewBridge).forEach(([choiceId, b]) => {
    const group = reviewStoryGroups.find(g => g.id === b.reviewGroupId);
    if (!group) { warnings.push(`openingReviewBridge 嘅 ${choiceId} 引用不存在嘅 reviewGroupId「${b.reviewGroupId}」`); return; }
    if (!(group.branches || []).some(br => br.id === b.branchId)) {
      warnings.push(`openingReviewBridge 嘅 ${choiceId} 引用不存在嘅 branchId「${b.branchId}」（group ${b.reviewGroupId}）`);
    }
    if (b.confidence === "weak") weakBridgeEntries.push(choiceId);
  });
  if (weakBridgeEntries.length) {
    warnings.push(`openingReviewBridge 有 ${weakBridgeEntries.length} 條低信心配對（authored 檔案冇一模一樣嘅對應，用剩低嗰個配對），建議作者覆核：${weakBridgeEntries.join("、")}`);
  }

  // ---- Skill property 系統：skillExp 現階段只可以由 hobby class 週處理增加 ----
  const REMOVED_ACTION_TABS = ["推薦", "心願相關", "最近關係", "特殊傾向", "已解鎖", "限時機會", "興趣技能", "限時"];
  REMOVED_ACTION_TABS.forEach(tab => {
    if (actionTabs.includes(tab)) warnings.push(`actionTabs 唔應該再有「${tab}」呢個 tab，但依然存在`);
  });
  actions.forEach(a => {
    if (a.skillExpEffects) warnings.push(`action ${a.id} 唔應該有 skillExpEffects（weekly action 唔可以直接改 skillExp，現階段只可以由 hobby class 增加）`);
    if (a.category === "興趣技能") warnings.push(`action ${a.id} 嘅 category 唔應該係「興趣技能」（興趣一律經 Hobby Class 管理，已刪除呢個 action category）`);
    if (a.actionFamily === "hobby_skill") warnings.push(`action ${a.id} 唔應該用 actionFamily「hobby_skill」（已刪除，興趣一律經 Hobby Class 管理）`);
    if (a.category === "限時機會") warnings.push(`action ${a.id} 嘅 category 唔應該係「限時機會」（已刪除呢個 category 同底下所有 action）`);
    if (a.actionFamily === "limited_opportunity") warnings.push(`action ${a.id} 唔應該用 actionFamily「limited_opportunity」（已刪除）`);
    if (a.limitedWeeks && a.limitedWeeks.length) warnings.push(`action ${a.id} 唔應該再有 limitedWeeks（限時機會 category 已刪除）`);
  });
  if (actionCategories.includes("興趣技能")) warnings.push(`actionCategories 唔應該再有「興趣技能」，但依然存在`);
  if (actionCategories.includes("限時機會")) warnings.push(`actionCategories 唔應該再有「限時機會」呢個 filter chip，但依然存在`);

  // ---- Tier 進度：只有文件明確標示「初始開放／初期可開」嘅 action 先可以喺第 1 週冇條件顯示，
  // 其餘 tier1_side／tier2／tier2_side／tier3 一律要有解鎖條件，唔可以一開波就全部攤晒出嚟 ----
  const INITIALLY_OPEN_ACTIONS = [
    "action_study_hard", "action_stay_near_classmate", "action_talk_to_mom",
    "action_rest_week", "action_free_play", "action_ball_game", "action_explore_area"
  ];
  actions.forEach(a => {
    if (a.tier === "1") return; // tier1（非旁支）一律容許初始開放
    if (INITIALLY_OPEN_ACTIONS.includes(a.id)) return;
    if (!a.conditions || a.conditions.length === 0) {
      warnings.push(`action ${a.id}（${a.name}，tier=${a.tier}）冇解鎖條件，會喺第 1 週就同 tier1 一齊出晒，唔符合 progressive unlock 要求`);
    }
  });

  // ---- Related person：有 relatedCharacterId 嘅 action 一律要明確寫 relatedPersonMode，
  // 唔可以靠隱含 fallback（避免作者漏寫，UI 靜靜雞用錯 mode）；requires_unlocked 要有 candidate 來源 ----
  const VALID_PERSON_MODES = ["none", "optional_unlocked", "requires_unlocked"];
  actions.forEach(a => {
    if (a.relatedCharacterId && !a.relatedPersonMode) {
      warnings.push(`action ${a.id} 有 relatedCharacterId 但冇明確寫 relatedPersonMode，唔可以靠隱含 fallback`);
    }
    if (a.relatedPersonMode && !VALID_PERSON_MODES.includes(a.relatedPersonMode)) {
      warnings.push(`action ${a.id} 嘅 relatedPersonMode「${a.relatedPersonMode}」唔係合法值`);
    }
    if ((a.relatedPersonMode === "optional_unlocked" || a.relatedPersonMode === "requires_unlocked") &&
        !a.relatedCharacterId && !(a.eligibleIdentityTypes && a.eligibleIdentityTypes.length)) {
      warnings.push(`action ${a.id} 嘅 relatedPersonMode 需要角色，但冇 relatedCharacterId 亦冇 eligibleIdentityTypes，永遠 resolve 唔到 target`);
    }
    if (a.relationshipIfTargeted) {
      const { dimension, amount } = a.relationshipIfTargeted;
      if (!dimension || typeof amount !== "number") {
        warnings.push(`action ${a.id} 嘅 relationshipIfTargeted 格式錯誤，應該係 { dimension, amount }`);
      }
      if (a.relatedPersonMode !== "optional_unlocked" && a.relatedPersonMode !== "requires_unlocked") {
        warnings.push(`action ${a.id} 有 relationshipIfTargeted，但 relatedPersonMode 唔係 optional_unlocked／requires_unlocked，唔會有 target 可以加分`);
      }
    }
  });
  const knownSkillNames = Object.keys(createInitialState().skillExp);
  hobbies.forEach(h => {
    Object.keys(h.skillExpDelta || {}).forEach(skill => {
      if (!knownSkillNames.includes(skill)) warnings.push(`hobby ${h.id} 嘅 skillExpDelta 用咗未定義嘅 skill「${skill}」`);
    });
    if (h.quitCooldownWeeks !== 24) warnings.push(`hobby ${h.id} 嘅 quitCooldownWeeks 應該係 24（6 個月），但目前係 ${h.quitCooldownWeeks}`);
  });
  const initSkillExp = createInitialState().skillExp;
  if (Object.values(initSkillExp).some(v => v !== 0)) {
    warnings.push("createInitialState() 嘅 skillExp 應該全部為 0");
  }

  // ---- senior_student persona mapping：5 個 personality 一定要各自對應一個固定 named
  // character slot，唔可以有 generic「高年級學生」／隨機改名嘅 fallback slot ----
  const SENIOR_PERSONA_EXPECTED_NAME = {
    pers_strict_prefect: "俊朗",
    pers_friendly_senior: "芷悠",
    pers_senior_aloof: "柏言",
    pers_senior_competitive_captain: "凱晴",
    pers_senior_gentle_helper: "嘉澄"
  };
  if (!getIdentityTypeById("senior_student")) {
    warnings.push("identityTypes 搵唔到「senior_student」");
  }
  const seniorPersonalities = getPersonalitiesForIdentity("senior_student");
  const seniorSlots = characterSlots.filter(s => s.identityTypeId === "senior_student");
  Object.entries(SENIOR_PERSONA_EXPECTED_NAME).forEach(([personalityId, expectedName]) => {
    if (!seniorPersonalities.some(p => p.id === personalityId)) {
      warnings.push(`senior_student personality「${personalityId}」唔存在`);
      return;
    }
    const slot = seniorSlots.find(s => s.forcedPersonalityId === personalityId);
    if (!slot) {
      warnings.push(`senior_student personality「${personalityId}」冇對應嘅固定 named character slot（唔可以淨係靠隨機生成）`);
      return;
    }
    if (slot.fixedName !== expectedName) {
      warnings.push(`senior_student「${personalityId}」嘅 fixedName 應該係「${expectedName}」，但目前係「${slot.fixedName}」`);
    }
    if (/師兄|師姐/.test(slot.fixedName || "")) {
      warnings.push(`character slot ${slot.id} 嘅真名（fixedName）唔應該包含「師兄／師姐」`);
    }
    if (!slot.primaryAddressLabel) {
      warnings.push(`character slot ${slot.id} 缺少 primaryAddressLabel（小學階段稱呼）`);
    }
    if (slot.identityTypeId !== "senior_student") {
      warnings.push(`character slot ${slot.id} 應該係 identityTypeId "senior_student"`);
    }
  });
  // 唔可以有冇 forcedPersonalityId 嘅 generic senior_student slot（例如舊版 char_prefect），
  // 5 個 personality 已經覆蓋晒成個 pool，唔應該再有隨機／generic 嘅第 6 個
  seniorSlots.forEach(slot => {
    if (!slot.forcedPersonalityId) {
      warnings.push(`character slot ${slot.id} 係 senior_student 但冇 forcedPersonalityId，會隨機生成名同性格，唔符合「唔可以顯示成 generic 高年級學生」要求`);
    }
  });
  // alias collision：pers_gentle_support 唔可以同時屬於超過一個 senior_student personality
  const gentleSupportAliasOwners = seniorPersonalities.filter(p => (p.aliasIds || []).includes("pers_gentle_support"));
  if (gentleSupportAliasOwners.length > 1) {
    warnings.push(`alias「pers_gentle_support」同時出現喺 ${gentleSupportAliasOwners.map(p => p.id).join("、")}，會令 event 配對錯人`);
  }
  const resolvedGentleSupport = getPersonalityByAnyId("pers_gentle_support", "senior_student");
  if (resolvedGentleSupport && resolvedGentleSupport.id !== "pers_friendly_senior") {
    warnings.push(`alias「pers_gentle_support」而家 resolve 去「${resolvedGentleSupport.id}」，但 authored W1／W5 event 期望佢係「pers_friendly_senior」（芷悠）`);
  }

  // ---- 角色頭像：same_age_peer／senior_student 固定命名一定要喺 icon manifest 度搵到，
  // manifest key 一定要係真名，唔可以係 primaryAddressLabel（例如「芷悠師姐」）----
  const sameAgePeerFixedNames = ["家朗", "穎心", "梓軒", "柏宇"];
  sameAgePeerFixedNames.forEach(name => {
    if (!SAME_AGE_PEER_ICON_MANIFEST[name]) warnings.push(`same_age_peer 固定角色「${name}」喺 icon manifest 度搵唔到對應圖片`);
  });
  Object.entries(SENIOR_PERSONA_EXPECTED_NAME).forEach(([, expectedName]) => {
    if (!SENIOR_STUDENT_ICON_MANIFEST[expectedName]) warnings.push(`senior_student 固定角色「${expectedName}」喺 icon manifest 度搵唔到對應圖片`);
  });
  seniorSlots.forEach(slot => {
    if (slot.primaryAddressLabel && SENIOR_STUDENT_ICON_MANIFEST[slot.primaryAddressLabel]) {
      warnings.push(`icon manifest 唔應該用 primaryAddressLabel「${slot.primaryAddressLabel}」做 key，一定要用真名`);
    }
    if (slot.fixedName && !SENIOR_STUDENT_ICON_MANIFEST[slot.fixedName]) {
      warnings.push(`senior_student slot ${slot.id} 嘅 fixedName「${slot.fixedName}」喺 icon manifest 度搵唔到`);
    }
  });

  // ---- W1–W6 opening event pool：v7 markdown 已經刪走 W3-12 閱讀紀錄冊／W5-20 閱讀獎勵消息，
  // 呢兩個 event id 唔可以再出現喺任何 event pool／debug selector ----
  const DELETED_OPENING_EVENT_IDS = ["w3_reading_record_booklet", "w5_reading_reward_info"];
  DELETED_OPENING_EVENT_IDS.forEach(id => {
    if (openingEvents.some(e => e.id === id)) warnings.push(`opening event「${id}」應該已經刪除（v7 markdown 冇呢個 event），但依然存在`);
  });
  const w3Pool = resolveWeeklyPool(3);
  if (w3Pool.some(e => e.id === "w3_reading_record_booklet")) {
    warnings.push("W3 pool 唔應該抽到已刪除嘅 w3_reading_record_booklet");
  }
  const w5Pool = resolveWeeklyPool(5);
  if (w5Pool.some(e => e.id === "w5_reading_reward_info")) {
    warnings.push("W5 pool 唔應該抽到已刪除嘅 w5_reading_reward_info");
  }
  openingEvents.forEach(e => {
    (e.variants || []).forEach(v => {
      (v.selectorConfig?.sourceEventCandidates || []).forEach(c => {
        if (c.storySceneId === "story_reading_record_start") {
          warnings.push(`${e.id} 嘅 selectorConfig 仍然引用已刪除 event 相關嘅 story_reading_record_start`);
        }
      });
    });
  });

  // ---- Teacher personality 合併：活動推薦型老師／關顧型老師一定要 resolve 去同一個 canonical id，
  // 唔可以拆做兩個獨立 teacher NPC，亦都唔可以因為合併就刪走「關顧型老師」----
  const CANONICAL_CARING_TEACHER_ID = "pers_pastoral_care_teacher";
  if (!getPersonalitiesForIdentity("teacher").some(p => p.id === CANONICAL_CARING_TEACHER_ID)) {
    warnings.push(`「關顧型老師」（${CANONICAL_CARING_TEACHER_ID}）唔存在，唔可以因為合併活動推薦型老師就刪走佢`);
  }
  ["pers_activity_recommender", "pers_activity_connector"].forEach(alias => {
    const resolved = getPersonalityByAnyId(alias, "teacher");
    if (!resolved || resolved.id !== CANONICAL_CARING_TEACHER_ID) {
      warnings.push(`活動推薦型老師嘅 alias「${alias}」應該 resolve 去「${CANONICAL_CARING_TEACHER_ID}」（關顧型老師），但而家係「${resolved?.id || "搵唔到"}」`);
    }
  });
  const caringTeacherEntry = getPersonalitiesForIdentity("teacher").find(p => p.id === CANONICAL_CARING_TEACHER_ID);
  if (caringTeacherEntry && !(caringTeacherEntry.eventFacingLabels || []).includes("活動推薦型老師")) {
    warnings.push(`「${CANONICAL_CARING_TEACHER_ID}」嘅 eventFacingLabels 應該包含「活動推薦型老師」`);
  }
  if (caringTeacherEntry && !(caringTeacherEntry.eventFacingLabels || []).includes("關顧型老師")) {
    warnings.push(`「${CANONICAL_CARING_TEACHER_ID}」嘅 eventFacingLabels 應該包含「關顧型老師」`);
  }
  if (getPersonalitiesForIdentity("teacher").some(p => p.id === "pers_activity_connector")) {
    warnings.push("「pers_activity_connector」應該已經合併做關顧型老師嘅 alias，唔應該再係獨立 personality");
  }
  ["pers_strict_academic", "pers_encouraging_mentor", "pers_fair_observer"].forEach(id => {
    const p = getPersonalitiesForIdentity("teacher").find(t => t.id === id);
    if (!p) warnings.push(`teacher personality「${id}」唔見咗，唔應該因為合併活動推薦型老師而誤刪其他老師人格`);
  });

  if (!warnings.length) {
    console.info("[內容檢查] 冇發現明顯缺漏。");
    return warnings;
  }
  warnings.forEach(warn);
  return warnings;
}

function getChoiceSetChoices(id) {
  const set = choiceSets.find(c => c.id === id);
  return set ? set.choices : null;
}

// ============================================================
// Content Editor 用：檢查作者手打緊嘅單一草稿（未必已經加咗入正式 data 陣列）
// ============================================================
function characterExists(id) {
  return !id || characterSlots.some(c => c.id === id);
}

function eventExists(id) {
  if (!id) return true;
  return academicEvents.some(e => e.id === id) || messageTemplates.some(t => t.id === id) || encounters.some(e => e.id === id);
}

function checkGeneric(data, typeLabel) {
  const warnings = [];
  if (!data || typeof data !== "object") return [`${typeLabel} 資料唔係一個有效嘅 object`];
  if (!data.id) warnings.push(`${typeLabel} 缺少 id`);
  if (data.enabled !== undefined && typeof data.enabled !== "boolean") warnings.push(`${typeLabel} ${data.id || ""} 嘅 enabled 唔係 boolean`);
  if (data.isSample) warnings.push(`${typeLabel} ${data.id || ""} 標記咗 isSample:true，唔會進入正式遊戲，請確認呢個係咪你想要嘅`);
  return warnings;
}

const VALIDATORS = {
  character(data) {
    const warnings = checkGeneric(data, "角色");
    if (!data.name) warnings.push(`角色 ${data.id || ""} 缺少 name`);
    if (!data.identityType) warnings.push(`角色 ${data.id || ""} 缺少 identityType`);
    return warnings;
  },
  event(data) {
    const warnings = checkGeneric(data, "事件");
    if (!data.title) warnings.push(`事件 ${data.id || ""} 缺少 title`);
    if (!data.eventType) warnings.push(`事件 ${data.id || ""} 缺少 eventType`);
    if (!data.introText && !data.dialogueLines) warnings.push(`事件 ${data.id || ""} 冇 introText 亦冇 dialogueLines`);
    const isNoticeOnly = data.involvementRole === "infoOnly" || data.involvementRole === "bystander";
    if (!isNoticeOnly) {
      warnings.push(...checkChoices("事件", data.id || "", data.choices));
    } else if (data.choices && data.choices.length) {
      warnings.push(...checkChoices("事件", data.id || "", data.choices));
    }
    if (data.storySceneId && !getStorySceneById(data.storySceneId)) {
      warnings.push(`事件 ${data.id || ""} 引用不存在嘅 storySceneId「${data.storySceneId}」`);
    }
    if (data.canBecomeGoal && !(data.goalsToAdd && data.goalsToAdd.length)) {
      warnings.push(`事件 ${data.id || ""} 標記咗 canBecomeGoal，但冇提供 goalsToAdd`);
    }
    (data.scheduleItemsToAdd || []).forEach((item, i) => {
      if (item.checkWeek === undefined) warnings.push(`事件 ${data.id || ""} 嘅 scheduleItemsToAdd[${i}] 缺少 checkWeek`);
    });
    (data.charactersInvolved || []).forEach(id => {
      if (!characterExists(id)) warnings.push(`事件 ${data.id || ""} 引用不存在嘅 characterId「${id}」`);
    });
    return warnings;
  },
  choice(data) {
    const warnings = checkGeneric(data, "choice");
    if (!data.text || !data.text.trim()) warnings.push(`choice ${data.id || ""} 缺少 text`);
    if (!data.resultText) warnings.push(`choice ${data.id || ""} 缺少 resultText`);
    if (!data.attitudeTag && !data.choiceType) warnings.push(`choice ${data.id || ""} 冇 attitudeTag 亦冇 choiceType`);
    return warnings;
  },
  goal(data) {
    const warnings = checkGeneric(data, "goal");
    if (!data.title) warnings.push(`goal ${data.id || ""} 缺少 title`);
    if (!data.goalType) warnings.push(`goal ${data.id || ""} 缺少 goalType`);
    if (!data.requirements || !data.requirements.length) warnings.push(`goal ${data.id || ""} 冇 requirements`);
    if (!data.missText) warnings.push(`goal ${data.id || ""} 冇 missText（未完成結果），記得寫明「冇懲罰」`);
    return warnings;
  },
  scheduleItem(data) {
    const warnings = checkGeneric(data, "schedule item");
    if (!data.title) warnings.push(`schedule item ${data.id || ""} 缺少 title`);
    if (data.checkWeek === undefined) warnings.push(`schedule item ${data.id || ""} 缺少 checkWeek`);
    if (!data.requirements || !data.requirements.length) warnings.push(`schedule item ${data.id || ""} 冇 requirements`);
    if (!data.missText) warnings.push(`schedule item ${data.id || ""} 冇 missText`);
    if (data.relatedEventId && !eventExists(data.relatedEventId)) {
      warnings.push(`schedule item ${data.id || ""} 引用不存在嘅 relatedEventId「${data.relatedEventId}」`);
    }
    return warnings;
  },
  identity(data) {
    const warnings = checkGeneric(data, "identity");
    if (!data.name) warnings.push(`identity ${data.id || ""} 缺少 name`);
    if (!data.identityType) warnings.push(`identity ${data.id || ""} 缺少 identityType`);
    if (data.sourceEventId && !eventExists(data.sourceEventId)) {
      warnings.push(`identity ${data.id || ""} 引用不存在嘅 sourceEventId「${data.sourceEventId}」`);
    }
    if (data.givenByCharacterId && !characterExists(data.givenByCharacterId)) {
      warnings.push(`identity ${data.id || ""} 引用不存在嘅 givenByCharacterId「${data.givenByCharacterId}」`);
    }
    return warnings;
  },
  storyScene(data) {
    const warnings = checkGeneric(data, "story scene");
    if (!data.title) warnings.push(`story scene ${data.id || ""} 缺少 title`);
    if (!data.sceneText || !data.sceneText.length) warnings.push(`story scene ${data.id || ""} 冇 sceneText`);
    if (!data.allowNoDialogue && (!data.dialogue || data.dialogue.length < 2)) {
      warnings.push(`story scene ${data.id || ""} 少於 2 句 dialogue（如果真係唔需要對話，請標記 allowNoDialogue:true）`);
    }
    if (!data.resultText) warnings.push(`story scene ${data.id || ""} 缺少 resultText`);
    if (!data.relatedEventIds || !data.relatedEventIds.length) warnings.push(`story scene ${data.id || ""} 冇 relatedEventIds，永遠唔會被揀中`);
    (data.relatedEventIds || []).forEach(id => {
      if (!eventExists(id)) warnings.push(`story scene ${data.id || ""} 引用不存在嘅 relatedEventId「${id}」`);
    });
    (data.characters || []).forEach(id => {
      if (!characterExists(id)) warnings.push(`story scene ${data.id || ""} 引用不存在嘅 characterId「${id}」`);
    });
    return warnings;
  }
};

// type: "character" | "event" | "choice" | "goal" | "scheduleItem" | "identity" | "storyScene"
export function validateSingleEntry(type, data) {
  const validator = VALIDATORS[type];
  if (!validator) return [`未知嘅內容類型：${type}`];
  return validator(data);
}

export const CONTENT_TYPES = ["character", "event", "choice", "goal", "scheduleItem", "identity", "storyScene"];
