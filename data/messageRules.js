// data/messageRules.js
// 訊息預算規則：避免第一學期被大量聊天淹沒
// engine.js 嘅 applyMessageBudget() 會讀呢份資料嚟決定本週仲派唔派得到普通訊息

export const messageRules = {
  maxMessagesPerWeek: 2,          // 每週最多自動彈出幾多個「普通」訊息
  maxUrgentMessagesPerTerm: 3,    // 每學期最多幾多個 urgent 訊息（唔計玩家自己觸發嘅例外）
  introWeeksLowDensity: 4,        // 頭幾週刻意減少訊息，俾玩家先熟悉系統
  introWeeksMaxMessages: 1,       // 頭幾週每週最多幾多個普通訊息
  messageCooldownWeeks: 1         // 同一個 NPC 兩個普通訊息之間至少相隔幾多週
};
