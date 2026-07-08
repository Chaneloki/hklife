// data/messageTemplates.js
// 通用訊息模板：唔再逐條 message 寫死邊個角色講，而係指定 senderIdentityType + choiceSetId（或直接寫 choices）+ 觸發條件，
// 由 messageBuilder.js 喺載入嗰陣展開做實際 message（senderId 會揀返呢種身份對應嗰個生成角色）。
//
// 本檔案目前冇正式內容——所有訊息劇情由作者手動輸入，engine 唔會自動生成任何對話。
// 請參考 /data/contentSchemaExamples.js 嘅格式範例，或下面 SAMPLE_TEMPLATE（isSample: true，唔會載入遊戲）。
//
// template schema:
// { id, enabled, senderIdentityType, eventContextTags, titleTemplate, lineTemplates,
//   choiceSetId（可選）或 choices（建議：直接喺呢度寫 choice 陣列，確保問題同答案對應）,
//   conditions, urgency, relationshipVariants（可選，格式同 message.relationshipVariants） }
//
// choice schema: { id, text, attitudeTag, effects, relationshipEffects, setFlags, addMemory,
//   nextMessageId, addReviewLog, closeMessage }

// 格式範例，isSample: true 一定唔會出現喺 authoredMessageTemplates 度，所以唔會喺正式遊戲出現
const SAMPLE_TEMPLATE = {
  id: "sample_template_do_not_use",
  enabled: false,
  isSample: true,
  senderIdentityType: "family_elder",
  eventContextTags: ["sample"],
  titleTemplate: "（範例）屋企人：想同你傾一傾",
  lineTemplates: ["（呢度寫返角色講嘅句子，要同下面嘅選項對題）"],
  choices: [
    { id: "sample_choice_a", text: "（回應 A，要對應返上面問題）", attitudeTag: "honestTired", effects: [], relationshipEffects: [], closeMessage: true },
    { id: "sample_choice_b", text: "（回應 B）", attitudeTag: "refusePolitely", effects: [], relationshipEffects: [], closeMessage: true }
  ],
  urgency: "normal",
  conditions: []
};

// 正式內容——依家係空，等作者手動填。喺呢個陣列入面加入你自己寫嘅 template（唔好加 SAMPLE_TEMPLATE 呢類 isSample 資料）。
const authoredMessageTemplates = [];

export const messageTemplates = authoredMessageTemplates;
