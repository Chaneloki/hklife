// data/storyScenes.js
// 「人生片段回顧」（每 6 週一次）嘅正式內容——呢個唔係 engine 自動生成嘅摘要，而係作者手寫嘅完整劇情場景。
// 每 6 週，系統會揀返過去 6 週入面「已經發生咗、而且有 storySceneId」嘅事件，
// 揾返對應嘅 story scene（by relatedEventIds），按 priority 高低（同符合 conditions）揀一個顯示。
// 如果過去 6 週冇任何已發生事件對應到 authored story scene，就唔會顯示故事，
// 只會顯示：「呢 6 週冇特別可以回顧嘅人生片段。」
//
// 本檔案目前冇正式內容。請參考下面 SAMPLE_STORY_SCENE（isSample: true，唔會載入遊戲）。
//
// story scene schema:
// {
//   id, enabled, title,
//   relatedEventIds: [eventId],        // 邊幾個 event（academicEvents／messageTemplates）觸發完成就可以揀呢個 scene
//   priority,                          // 同一時間有多個候選時，數值越高越優先揀
//   conditions: [condition],           // 可選，額外條件（例如某 relationship 要夠先啱做呢段故事）
//   timeText,                          // 例如 "第 5 週，放學後"
//   placeText,                         // 例如 "視藝室外的走廊"
//   characters: [characterId],         // 呢段故事出現嘅角色（characterSlots 嘅 slot id）
//   sceneText: [ "場景旁白第一句", "第二句" ],  // 完整場景描寫，唔係 summary
//   dialogue: [ { speaker, text } ],    // speaker 可以係角色名，或者 "你"
//   resultText,                        // 呢件事實際發生咗咩結果
//   impactList: [ "文字描述嘅影響" ],   // 顯示俾玩家睇嘅影響摘要（實際數值變化由 relationshipEffects 等處理）
//   memoryToAdd: [ { characterId, text } ],
//   routeSeedEffects: [ { seedId, amount } ],
//   relationshipEffects: [ { characterId, dimension, amount } ],
//   identityEffects: [ effect ],
//   scheduleEffects: [ effect ]
// }

// 格式範例，isSample: true 一定唔會出現喺 authoredStoryScenes 度，所以唔會喺正式遊戲出現
const SAMPLE_STORY_SCENE = {
  id: "sample_story_scene",
  enabled: false,
  isSample: true,
  title: "放學後的畫紙",
  relatedEventIds: ["sample_event_do_not_use"],
  priority: 1,
  conditions: [],
  timeText: "第 5 週，放學後",
  placeText: "視藝室外的走廊",
  characters: ["char_classmate"],
  sceneText: [
    "呢度放完整場景旁白，唔係 summary。要寫返實際發生緊咩事、氣氛係點。"
  ],
  dialogue: [
    { speaker: "子晴", text: "你覺得呢個顏色會唔會太奇怪？" },
    { speaker: "你", text: "如果呢度再淡少少，可能會似放學時候嘅天。" }
  ],
  resultText: "呢度寫返呢件事真正發生咗咩結果。",
  impactList: ["子晴親近度上升", "新增共同回憶：放學後的畫紙"],
  memoryToAdd: [{ characterId: "char_classmate", text: "放學後的畫紙" }],
  routeSeedEffects: [],
  relationshipEffects: [{ characterId: "char_classmate", dimension: "closeness", amount: 3 }],
  identityEffects: [],
  scheduleEffects: []
};

// 正式內容——依家係空，等作者手動填。喺呢個陣列入面加入你自己寫嘅 story scene（唔好加 SAMPLE_STORY_SCENE 呢類 isSample 資料）。
const authoredStoryScenes = [];

export const storyScenes = authoredStoryScenes.filter(sc => sc.enabled !== false && !sc.isSample);

export function getStorySceneById(id) {
  return storyScenes.find(sc => sc.id === id);
}

// 揾返同呢批 eventId 有關聯嘅 story scene（by relatedEventIds），俾 generateSixWeekStoryScene() 用
export function getStoryScenesForEvents(eventIds) {
  return storyScenes.filter(sc => (sc.relatedEventIds || []).some(id => eventIds.includes(id)));
}
