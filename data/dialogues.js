// data/dialogues.js
// 對話資料，遊戲主要內容以角色對話呈現，而唔係大段文字事件卡。
//
// 本檔案目前冇正式內容——所有對話由作者手動輸入，engine 唔會自動生成任何劇情、台詞或選項。
// 請參考 /data/contentSchemaExamples.js 嘅格式範例，或下面 SAMPLE_DIALOGUE（isSample: true，唔會載入遊戲）。
//
// dialogue schema:
// {
//   id, enabled, title, stage (可為 null 表示唔限), location (可為 null 表示唔限),
//   speakerId（用 characterSlots 嘅 slot id，例如 char_mom／char_teacher），
//   conditions: [condition],           // 觸發呢段對話所需條件
//   lines: [ "句子1", "句子2" ],        // 角色講嘅短句，會逐句顯示
//   choices: [
//     {
//       text, effects: [effect], setFlags: [flagName],
//       nextDialogueId: null | dialogueId,
//       endDialogue: true|false,
//       conditions: [condition]        // 可選，選項本身要符合先顯示
//     }
//   ]
// }

// 格式範例，isSample: true 一定唔會出現喺 authoredDialogues 度，所以唔會喺正式遊戲出現
const SAMPLE_DIALOGUE = {
  id: "sample_dialogue_do_not_use",
  enabled: false,
  isSample: true,
  title: "（範例）對話標題",
  stage: null,
  location: null,
  speakerId: "char_mom",
  conditions: [],
  lines: ["（呢度寫返角色實際問嘅問題）"],
  choices: [
    { text: "（回應 A，要直接答返上面問嘅問題）", effects: [], setFlags: [], endDialogue: true },
    { text: "（回應 B）", effects: [], setFlags: [], endDialogue: true }
  ]
};

// 正式內容——依家係空，等作者手動填。喺呢個陣列入面加入你自己寫嘅 dialogue（唔好加 SAMPLE_DIALOGUE 呢類 isSample 資料）。
const authoredDialogues = [];

export const dialogues = authoredDialogues.filter(d => d.enabled !== false && !d.isSample);

export function getDialogueById(id) {
  return dialogues.find(d => d.id === id);
}
