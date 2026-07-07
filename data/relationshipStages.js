// data/relationshipStages.js
// 關係階段嘅共用詞彙／分類。每個 NPC 喺 characters.js 可以自訂顯示文字（例如媽媽唔叫「普通朋友」，
// 叫「放心」），但每個階段規則都會標一個 category，方便 UI 統一配色／icon，唔使逐個 NPC 寫死判斷。

export const relationshipStageCategories = [
  { key: "stranger", label: "陌生", icon: "❔", tone: "neutral" },
  { key: "acquainted", label: "剛認識", icon: "🙂", tone: "neutral" },
  { key: "casual", label: "普通", icon: "😊", tone: "positive" },
  { key: "warming", label: "正在變熟", icon: "🌱", tone: "positive" },
  { key: "close", label: "熟絡", icon: "✨", tone: "positive" },
  { key: "reliable", label: "可靠夥伴", icon: "🤝", tone: "positive" },
  { key: "misunderstood", label: "有誤會", icon: "😕", tone: "warning" },
  { key: "distant", label: "暫時疏遠", icon: "🌫️", tone: "warning" }
];

export function getStageCategoryMeta(categoryKey) {
  return relationshipStageCategories.find(c => c.key === categoryKey) || relationshipStageCategories[0];
}
