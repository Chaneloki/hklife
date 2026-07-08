// data/choiceSets.js
// 通用選項組：可以俾多個 event／message 共用，但呢個機制容易令問題同答案唔對題，所以官方建議：
// 重要事件請直接喺 event／template 度寫 `choices`（見 academicEvents.js／messageTemplates.js 頭部註解），
// 唔好淨係為咗方便而夾硬將一組唔啱嘅 choiceSet 套落去唔同情境嘅事件。
// choiceSet 只適合真係「情境完全一樣、只係邊個講唔同」嘅場合先用（例如同一句「你肯唔肯試下」，去到邊個 NPC 都啱用）。
//
// 本檔案目前冇正式內容。請參考 /data/contentSchemaExamples.js 嘅格式範例，
// 或下面 SAMPLE_CHOICE_SET（isSample: true，唔會載入遊戲）。
//
// choiceSet schema: { id, enabled, contextType, choices: [choice] }
// choice（同 engine message.choices 嘅形狀一樣，方便 messageBuilder 直接複製）：
// { id, text, tone, attitudeTag, visibleToneLabel, conditions, effects, relationshipEffects,
//   addMemory, setFlags, restrictFutureChoices, routeSeedEffects, addReviewLog, closeMessage }
// choice 入面嘅 characterId 可以用 "$sender" 做佔位符，由 messageBuilder.js 換成實際觸發嗰個生成角色 id。

// 格式範例，isSample: true 一定唔會出現喺 authoredChoiceSets 度，所以唔會喺正式遊戲出現
const SAMPLE_CHOICE_SET = {
  id: "sample_choice_set_do_not_use",
  enabled: true,
  isSample: true,
  contextType: "sample",
  choices: [
    {
      id: "sample_accept", text: "（回應 A，要對應返情境問題）", tone: "接受", attitudeTag: "acceptWarmly",
      visibleToneLabel: "接受", effects: [], relationshipEffects: [{ characterId: "$sender", dimension: "closeness", amount: 1 }],
      closeMessage: true
    },
    {
      id: "sample_decline", text: "（回應 B）", tone: "婉拒", attitudeTag: "refusePolitely",
      visibleToneLabel: "婉拒", effects: [], relationshipEffects: [], closeMessage: true
    }
  ]
};

// 正式內容——依家係空，等作者手動填。喺呢個陣列入面加入你自己寫嘅 choiceSet（唔好加 SAMPLE_CHOICE_SET 呢類 isSample 資料）。
const authoredChoiceSets = [];

export const choiceSets = authoredChoiceSets.filter(c => c.enabled !== false && !c.isSample);

export function getChoiceSetById(id) {
  return choiceSets.find(c => c.id === id);
}
