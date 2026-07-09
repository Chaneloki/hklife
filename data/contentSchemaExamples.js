// data/contentSchemaExamples.js
// 純參考檔案：集中列出每種內容資料嘅格式範例，方便你手動輸入內容時對照。
// 呢個檔案唔會被 engine／messages.js／main.js import，純粹係文件，唔會影響遊戲。
// 每種類型嘅完整格式說明，請睇返對應檔案頭部嘅註解：
//   角色 slot：data/characters.js（characterSlots）
//   角色身份類型：data/identityTypes.js
//   角色人格：data/identityPersonalities.js
//   訊息模板：data/messageTemplates.js
//   學術事件：data/academicEvents.js
//   對話：data/dialogues.js
//   地區遭遇：data/encounters.js
//   選項組：data/choiceSets.js
//   人生片段回顧：data/storyScenes.js

export const EXAMPLE_MESSAGE_TEMPLATE = {
  id: "template_example",
  enabled: true,
  senderIdentityType: "family_elder",
  eventContextTags: ["example"],
  titleTemplate: "屋企人：想同你傾一傾",
  lineTemplates: ["（角色講嘅句子，要同下面選項對題）"],
  choices: [
    { id: "choice_a", text: "（回應 A）", attitudeTag: "honestTired", effects: [], relationshipEffects: [], closeMessage: true },
    { id: "choice_b", text: "（回應 B）", attitudeTag: "refusePolitely", effects: [], relationshipEffects: [], closeMessage: true }
  ],
  urgency: "normal",
  conditions: []
};

export const EXAMPLE_ACADEMIC_EVENT = {
  id: "ev_example",
  enabled: true,
  eventType: "class_service",
  stageRange: "P1-P3",
  sourceIdentityTypes: ["teacher"],
  sourceChannel: "teacherDirect",
  involvementRole: "mainParticipant",
  titleTemplate: "老師：想邀請你做班務小幫手",
  lineTemplates: ["（事件實際問嘅問題，要同下面選項對題）"],
  choices: [
    { id: "accept", text: "（回應 A，要直接答返上面問嘅嘢）", attitudeTag: "acceptWarmly", effects: [], relationshipEffects: [], closeMessage: true },
    { id: "decline", text: "（回應 B）", attitudeTag: "refusePolitely", effects: [], relationshipEffects: [], closeMessage: true }
  ],
  triggerConditions: [],
  followUpEventIds: [],
  scheduleItemsToAdd: [],
  identitiesToAdd: [],
  goalsToAdd: [],
  storySceneId: null,
  reviewLogText: null
};

// ============================================================
// 下面 7 個 BLANK_* 係 Content Editor 用嘅空白模板（欄位名對應本輪 schema），
// 全部 enabled:false / isSample:true，唔會被任何正式陣列讀取。
// ============================================================

export const BLANK_CHARACTER_EXAMPLE = {
  id: "", enabled: false, isSample: true,
  name: "", identityType: "", roleLabel: "", personalityId: "", reactionProfileId: "",
  explicitIconName: "", introText: "", relationshipDimensions: [], initialRelationship: {},
  availableStages: [], notes: ""
};

export const BLANK_EVENT_EXAMPLE = {
  id: "", enabled: false, isSample: true,
  title: "", eventType: "", contextType: "", stageRange: "", weekRange: null,
  sourceChannel: "", involvementRole: "", locationId: "", charactersInvolved: [],
  conditions: [], introText: "", dialogueLines: [], choices: [],
  effects: [], followUpEventIds: [], scheduleItemsToAdd: [], identitiesToAdd: [], goalsToAdd: [],
  storySceneId: null, reviewLogText: "", notes: ""
};

export const BLANK_CHOICE_EXAMPLE = {
  id: "", text: "", attitudeTag: "", availability: "available", previewText: "",
  effects: [], relationshipEffects: [], goalEffects: [], scheduleEffects: [], identityEffects: [],
  followUpEventIds: [], resultText: "", storyMemoryText: ""
};

export const BLANK_GOAL_EXAMPLE = {
  id: "", enabled: false, isSample: true,
  title: "", goalType: "", source: "", deadlineWeek: null, requirements: [], rewards: [],
  missText: "", relatedActions: [], relatedCharacters: [], relatedLocations: [], canAbandon: true, notes: ""
};

export const BLANK_SCHEDULE_ITEM_EXAMPLE = {
  id: "", enabled: false, isSample: true,
  title: "", source: "", startWeek: null, checkWeek: null, requirements: [], apCost: 0,
  successText: "", missText: "", relatedGoalId: "", relatedEventId: "", relatedIdentityId: "",
  canNegotiate: false, notes: ""
};

export const BLANK_IDENTITY_EXAMPLE = {
  id: "", enabled: false, isSample: true,
  name: "", identityType: "", sourceEventId: "", givenByCharacterId: "", startWeek: null, endWeek: null,
  duties: [], benefits: [], costs: [], status: "active", notes: ""
};

export const BLANK_STORY_SCENE_EXAMPLE = {
  id: "", enabled: false, isSample: true,
  title: "", relatedEventIds: [], priority: 1, conditions: [], timeText: "", placeText: "",
  characters: [], sceneText: [], dialogue: [], resultText: "", impactList: [],
  memoryToAdd: [], routeSeedEffects: [], relationshipEffects: [], identityEffects: [], scheduleEffects: [],
  notes: ""
};

export const BLANK_TEMPLATES = {
  character: BLANK_CHARACTER_EXAMPLE,
  event: BLANK_EVENT_EXAMPLE,
  choice: BLANK_CHOICE_EXAMPLE,
  goal: BLANK_GOAL_EXAMPLE,
  scheduleItem: BLANK_SCHEDULE_ITEM_EXAMPLE,
  identity: BLANK_IDENTITY_EXAMPLE,
  storyScene: BLANK_STORY_SCENE_EXAMPLE
};

export const EXAMPLE_STORY_SCENE = {
  id: "story_example",
  enabled: true,
  title: "放學後的畫紙",
  relatedEventIds: ["ev_example"],
  priority: 1,
  conditions: [],
  timeText: "第 5 週，放學後",
  placeText: "視藝室外的走廊",
  characters: ["char_classmate"],
  sceneText: ["完整場景旁白，唔係 summary。"],
  dialogue: [
    { speaker: "子晴", text: "你覺得呢個顏色會唔會太奇怪？" },
    { speaker: "你", text: "如果呢度再淡少少，可能會似放學時候嘅天。" }
  ],
  resultText: "呢件事真正發生咗嘅結果。",
  impactList: ["子晴親近度上升", "新增共同回憶：放學後的畫紙"],
  memoryToAdd: [{ characterId: "char_classmate", text: "放學後的畫紙" }],
  routeSeedEffects: [],
  relationshipEffects: [{ characterId: "char_classmate", dimension: "closeness", amount: 3 }],
  identityEffects: [],
  scheduleEffects: []
};
