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
