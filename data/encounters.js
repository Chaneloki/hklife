// data/encounters.js
// 隨機 encounter pool（地區「彈出」互動）：唔係「一定撞到邊個」，而係根據地區、週數、行動分類、權重隨機揀一個。
// 第一次撞到某個 NPC 會自動加入人物頁（透過 engine.meetCharacter），關係由「剛認識」開始。
//
// 本檔案目前冇正式內容——所有地區遭遇由作者手動輸入，engine 唔會自動生成任何劇情、台詞或選項。
// 請參考 /data/contentSchemaExamples.js 嘅格式範例，或下面 SAMPLE_ENCOUNTER（isSample: true，唔會載入遊戲）。
//
// encounter schema:
// {
//   id, enabled, locationId, possibleCharacters: [characterId（characterSlots 嘅 slot id）],
//   weight, conditions: [condition], weekRange: [min, max] | null,
//   stageRange: [stageId...] | null, relatedActionCategory: category | null,
//   title（popup 標題，可選）, introLines（彈出時嘅開場句，可選）,
//   choices: [choice]（可選——冇 choices 就淨係 silentLog，唔開對話）,
//   resultMessageId: messageId | null, resultDialogueId: dialogueId | null,
//   relationshipEffects: [{characterId, dimension, amount}],
//   locationFamiliarityEffects: number,
//   routeSeedEffects: [{seedId, amount}],
//   cooldownWeeks, onceOnly,
//   storySceneId（可選，對應 /data/storyScenes.js）,
//   silentLog: { type, title, body, tags } | null   // 唔一定要開對話，都可以淨係寫入記事簿
// }
//
// choice schema: { text, attitudeTag, effects, relationshipEffects, addMemory, setFlags,
//   routeSeedEffects, locationFamiliarityEffects, addReviewLog }

// 格式範例，isSample: true 一定唔會出現喺 authoredEncounters 度，所以唔會喺正式遊戲出現
const SAMPLE_ENCOUNTER = {
  id: "sample_encounter_do_not_use",
  enabled: false,
  isSample: true,
  locationId: "loc_shatin",
  possibleCharacters: ["char_classmate"],
  weight: 1,
  conditions: [],
  weekRange: null,
  relatedActionCategory: null,
  introLines: ["（呢度寫返撞到人嗰刻實際發生咩事／問咩問題）"],
  choices: [
    { text: "（回應 A，要對應返上面情境）", attitudeTag: "acceptWarmly", effects: [], relationshipEffects: [] },
    { text: "（回應 B）", attitudeTag: "refusePolitely", effects: [], relationshipEffects: [] }
  ],
  relationshipEffects: [],
  locationFamiliarityEffects: 1,
  routeSeedEffects: [],
  cooldownWeeks: 4,
  onceOnly: false,
  silentLog: null
};

// 正式內容——依家係空，等作者手動填。喺呢個陣列入面加入你自己寫嘅 encounter（唔好加 SAMPLE_ENCOUNTER 呢類 isSample 資料）。
const authoredEncounters = [];

export const encounters = authoredEncounters.filter(e => e.enabled !== false && !e.isSample);

export function getEncountersForLocation(locationId) {
  return encounters.filter(e => e.locationId === locationId);
}
