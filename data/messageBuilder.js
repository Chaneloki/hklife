// data/messageBuilder.js
// 共用嘅「靜態展開」工具：將 messageTemplates.js / academicEvents.js 嘅 template 資料，
// 喺模組載入嗰陣一次過展開做 engine.js 睇得明嘅 message 物件（{ id, senderId, title, lines, choices... }）。
//
// senderIdentityType 會揀返 characterSlots 入面第一個符合嗰種身份嘅角色位（例如 teacher -> char_teacher），
// 呢個係一個刻意嘅簡化：真正「邊個人講」由嗰個角色位喺新人生開始生成嘅具體 personality 決定，
// 只不過邊個位負責邊類訊息，喺呢一批內容係固定嘅（同 hobbies.js／opportunities.js 用固定 slot id 嘅做法一致）。
//
// choiceSet 入面嘅 choice 用 "$sender" 做 characterId 佔位符，呢度會換成實際 slot id。

import { characterSlots } from "./characters.js";
import { getChoiceSetById } from "./choiceSets.js";

function slotForIdentity(identityTypeId) {
  const slot = characterSlots.find(s => s.identityTypeId === identityTypeId);
  return slot ? slot.id : null;
}

// 呢個係「安全做法」：如果 template／event 直接寫咗 choices，就用返嗰組（保證問題同答案對題，唔會夾硬套用唔啱嘅 choiceSet）；
// 淨係喺冇寫 choices、但有寫 choiceSetId 嗰陣，先去 choiceSets.js 揾返一組通用嘅（要由作者自己揀啱先用）
function resolveChoices(source, senderId) {
  const rawChoices = source.choices || (source.choiceSetId ? getChoiceSetById(source.choiceSetId)?.choices : null);
  if (!rawChoices) return [];
  // 深拷貝 + 將 "$sender" 換成實際 senderId，避免唔同訊息共用緊同一份 choice 物件
  return JSON.parse(JSON.stringify(rawChoices)).map(choice => {
    (choice.relationshipEffects || []).forEach(r => { if (r.characterId === "$sender") r.characterId = senderId; });
    (choice.addMemory || []).forEach(m => { if (m.characterId === "$sender") m.characterId = senderId; });
    return choice;
  });
}

export function buildMessageFromTemplate(template) {
  const senderId = template.senderId || slotForIdentity(template.senderIdentityType);
  return {
    id: template.id,
    senderId,
    title: template.titleTemplate,
    urgency: template.urgency || "normal",
    triggerConditions: template.conditions || [],
    lines: template.lineTemplates,
    relationshipVariants: template.relationshipVariants || [],
    choices: resolveChoices(template, senderId),
    // 額外metadata，engine 唔會用到但保留俾 UI／未來擴展參考
    sourceIdentityType: template.senderIdentityType,
    eventContextTags: template.eventContextTags || [],
    storySceneId: template.storySceneId || null
  };
}

export function buildMessageFromEvent(event) {
  const senderId = event.senderId || slotForIdentity(event.sourceIdentityTypes?.[0]);
  const chainDoneFlag = `flag_event_${event.id}_done`;
  const choices = resolveChoices(event, senderId).map(choice => ({
    ...choice,
    setFlags: [...(choice.setFlags || []), chainDoneFlag]
  }));
  // chain 事件嘅前置條件：上一步必須已經完成（用返上一個事件自動打嘅 flag_event_<id>_done）
  const prereqConditions = (event.prerequisiteEvents || []).map(id => ({ type: "hasFlag", flag: `flag_event_${id}_done` }));
  const blockConditions = (event.blocksEvents || []).map(id => ({ type: "notFlag", flag: `flag_event_${id}_done` }));
  return {
    id: event.id,
    senderId,
    title: event.titleTemplate,
    urgency: event.urgency || "normal",
    triggerConditions: [...(event.triggerConditions || []), ...prereqConditions, ...blockConditions],
    lines: event.lineTemplates,
    relationshipVariants: event.relationshipVariants || [],
    choices,
    weight: event.weight ?? 1,
    // 額外 metadata：eventType／chain 資訊留低俾 event 引擎、journal、future UI 用
    eventType: event.eventType,
    chainId: event.chainId,
    chainStep: event.chainStep,
    canBecomeGoal: !!event.canBecomeGoal,
    canBecomeForcedSchedule: !!event.canBecomeForcedSchedule,
    canRevealOpportunity: !!event.canRevealOpportunity,
    // involvementRole／sourceChannel：玩家唔一定係主角，呢個 event 唔一定係老師直接搵你
    involvementRole: event.involvementRole || "mainParticipant",
    sourceChannel: event.sourceChannel || "teacherDirect",
    primaryCharacterIdentityType: event.primaryCharacterIdentityType || null,
    allowPlayerAsSupporter: !!event.allowPlayerAsSupporter,
    allowPlayerToJoinLater: !!event.allowPlayerToJoinLater,
    supporterRequirements: event.supporterRequirements || [],
    supportEffects: event.supportEffects || [],
    relationshipEffectsForSupport: event.relationshipEffectsForSupport || [],
    routeSeedForSupport: event.routeSeedForSupport || [],
    // 對應 /data/storyScenes.js 入面已經寫好嘅 story scene，六週回顧淨係會用呢個 id 去揾 authored 內容，唔會自動生成
    storySceneId: event.storySceneId || null,
    scheduleItemsToAdd: event.scheduleItemsToAdd || [],
    identitiesToAdd: event.identitiesToAdd || [],
    goalsToAdd: event.goalsToAdd || []
  };
}
