// data/academicEvents.js
// P1–P3 學術事件目錄：每個事件都有 eventType，部分屬於事件鏈（chainId／chainStep／prerequisiteEvents），
// 部分係一次性（isIsolated）。
//
// 本檔案目前冇正式內容——所有事件由作者手動輸入，engine 唔會自動生成任何劇情、對話或選項。
// 請參考 /data/contentSchemaExamples.js 嘅格式範例，或下面 SAMPLE_EVENT（isSample: true，唔會載入遊戲）。
//
// event schema:
// {
//   id, enabled, title（=舊 titleTemplate）, eventType, stageRange, weekRange, termRange,
//   isRecurring, isIsolated, chainId, chainStep, prerequisiteEvents, blocksEvents,
//   triggerConditions, weight,
//   sourceIdentityTypes,                 // 邊種身份可以做 sender（messageBuilder 會揀返對應生成角色）
//   sourceChannel,                       // teacherDirect / teacherGeneralNotice / classmateMention /
//                                        // familyMention / schoolNotice / hobbyTeacherMention /
//                                        // communityMention / discoveredByPlayer / notShownYet
//   involvementRole,                     // mainParticipant / candidate / observer / supporter /
//                                        // bystander / infoOnly / missedInfo / rivalParticipant / forcedParticipant
//   dialogueLines（=舊 lineTemplates）,
//   choiceSetId（可選）或 choices（建議：重要事件直接喺呢度寫 choice 陣列，確保問題同答案對應）,
//   effects, followUpEventIds,
//   scheduleItemsToAdd, identitiesToAdd, goalsToAdd,
//   storySceneId,                       // 對應 /data/storyScenes.js 入面某個 authored story scene
//   reviewLogText, notes,
//   canBecomeGoal, canBecomeForcedSchedule, canRevealOpportunity,
//   primaryCharacterIdentityType, allowPlayerAsSupporter, allowPlayerToJoinLater,
//   supporterRequirements, supportEffects, relationshipEffectsForSupport, routeSeedForSupport
// }
//
// choice schema: { id, text, attitudeTag, effects, relationshipEffects, setFlags, addMemory,
//   routeSeedEffects, addReviewLog, resultText, storyMemoryText, closeMessage }

function ev(partial) {
  return {
    enabled: true,
    stageRange: "P1-P3",
    isRecurring: false,
    isIsolated: true,
    chainId: null,
    chainStep: null,
    prerequisiteEvents: [],
    blocksEvents: [],
    weight: 1,
    canBecomeGoal: false,
    canBecomeForcedSchedule: false,
    canRevealOpportunity: false,
    urgency: "normal",
    involvementRole: "mainParticipant",
    sourceChannel: "teacherDirect",
    storySceneId: null,
    ...partial
  };
}

// 格式範例，isSample: true 一定唔會出現喺 authoredAcademicEvents 度，所以唔會喺正式遊戲出現
const SAMPLE_EVENT = ev({
  id: "sample_event_do_not_use",
  enabled: false,
  isSample: true,
  eventType: "class_service",
  sourceIdentityTypes: ["teacher"],
  titleTemplate: "（範例）老師：想邀請你做班務小幫手",
  lineTemplates: ["（呢度寫返事件實際問嘅問題，要同下面選項對題）"],
  choices: [
    { id: "sample_accept", text: "（回應 A，要直接回答返上面問嘅嘢）", attitudeTag: "acceptWarmly", effects: [], relationshipEffects: [], closeMessage: true },
    { id: "sample_decline", text: "（回應 B）", attitudeTag: "refusePolitely", effects: [], relationshipEffects: [], closeMessage: true }
  ],
  triggerConditions: [],
  storySceneId: "sample_story_scene"
});

// 正式內容——依家係空，等作者手動填。喺呢個陣列入面加入你自己寫嘅 event（用 ev({...}) 包住，唔好加 SAMPLE_EVENT 呢類 isSample 資料）。
const authoredAcademicEvents = [];

export const academicEvents = authoredAcademicEvents;
