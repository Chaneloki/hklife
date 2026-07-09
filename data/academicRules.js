// data/academicRules.js
// 成績表計算規則：每 6 週生成一次，唔淨係睇學業數值，仲會睇最近 6 週嘅行動、壓力、老師關係
//
// subject schema:
// { id, name, statWeights: { statName: weight }, actionCategoryWeights: { category: weight } }

// actionCategoryWeights 要用返 data/actions.js 入面實際存在嘅 category 名
// （學習策略／朋友相處／家庭溝通／休息與情緒／體能玩樂／班務身份／社區探索），
// 之前用「學習／興趣／探索」呢啲名係打錯字，同 recentActionHistory 嘅
// category 永遠 match 唔到，實際上行動對分數完全冇作用。
export const academicSubjects = [
  {
    id: "chinese",
    name: "中文",
    statWeights: { 學業: 0.55, 創意: 0.2 },
    actionCategoryWeights: { 學習策略: 1 }
  },
  {
    id: "english",
    name: "英文",
    statWeights: { 學業: 0.6 },
    actionCategoryWeights: { 學習策略: 1 }
  },
  {
    id: "math",
    name: "數學",
    statWeights: { 學業: 0.65 },
    actionCategoryWeights: { 學習策略: 1 }
  },
  {
    id: "general",
    name: "常識／綜合",
    statWeights: { 學業: 0.3, 創意: 0.2 },
    actionCategoryWeights: { 社區探索: 2, 學習策略: 1 }
  }
];

// 每科分數轉做等級嘅門檻，由高到低排
export const gradeThresholds = [
  { min: 85, label: "優異" },
  { min: 70, label: "良好" },
  { min: 55, label: "合格" },
  { min: 0, label: "待改善" }
];

// 操行評語門檻（由 conduct 分數決定）
export const conductThresholds = [
  { min: 80, label: "甲", comment: "有禮貌、負責任，係老師好幫手。" },
  { min: 60, label: "乙", comment: "表現正常，間中需要提提。" },
  { min: 40, label: "丙", comment: "情緒或紀律有啲反覆，需要多啲留意。" },
  { min: 0, label: "丁", comment: "呢排狀態唔太穩定，老師都幾擔心。" }
];

// 老師評語樣本，由「總評級」＋「趨勢」揀
export const teacherCommentTemplates = {
  improved: [
    "呢期進步咗好多，繼續保持！",
    "睇得出你落咗心機，成績都反映到。",
    "有進步，希望你可以維持呢個節奏。"
  ],
  declined: [
    "呢期成績退步咗少少，要留意返狀態。",
    "睇得出你呢排比較忙，成績有啲受影響。",
    "希望你可以搵返適合自己嘅節奏。"
  ],
  steady: [
    "表現穩定，繼續加油。",
    "同上期差唔多，可以再挑戰下自己。",
    "整體都算平穩。"
  ]
};

// 家長反應樣本，由「總評級」揀
export const parentReactionTemplates = {
  優異: ["屋企人好開心，讚你叻仔／叻女。", "屋企人話會請你食嘢慶祝。"],
  良好: ["屋企人都幾滿意，叫你保持。", "屋企人話唔錯，可以再進步。"],
  合格: ["屋企人話可以，但都提提你唔好鬆懈。", "屋企人反應普通，叫你加把勁。"],
  待改善: ["屋企人有啲擔心，想同你傾傾點樣可以幫到你。", "屋企人話要開始留意返你嘅學習安排。"]
};

// 成績太低觸發強制補課嘅門檻（總平均分）
export const forcedTutoringThreshold = 50;
// 連續幾多次「總評級 = 待改善」先會觸發強制補課
export const forcedTutoringConsecutiveMisses = 1;

export function getGradeLabel(score) {
  const tier = gradeThresholds.find(t => score >= t.min);
  return tier ? tier.label : "待改善";
}

export function getConductTier(score) {
  return conductThresholds.find(t => score >= t.min) || conductThresholds[conductThresholds.length - 1];
}
