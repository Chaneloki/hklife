// data/hobbies.js
// 長期興趣班系統：唔係一次性 action，玩家最多同時揀 3 個，每週固定影響資源／上限／比賽機會
//
// hobby schema:
// {
//   id, name, category, icon, description,
//   weeklyApCost,                        // 每週固定佔用幾多 AP（出席）
//   moneyCost,                           // 每週金錢開支
//   resourceEffects: [{ stat, amount }], // 出席一次即時影響（current 值，會受 cap 限制）
//   capGrowthEffects: [{ stat, amount, everyWeeks }], // 每隔幾多週，慢慢提升 cap（提升要慢）
//   routeSeedEffects: [{ seedId, amount }],
//   relatedCompetitions: [competitionId],
//   relatedNpcs: [characterId],
//   availableStages: [stageId],
//   commitmentWeeks,                     // 最少持續幾多週先可以放棄（太快放棄都得，但少於呢個數會有少少後果）
//   quitCooldownWeeks,                   // 放棄之後，幾多週內唔可以再揀返（規格要求 6 個月 = 24 週）
//   skillExpDelta,                       // 可選，每週出席自動累積落 state.skillExp 嘅對應技能（skillExp 現階段只可以由呢度增加）
//   personalityInfluence                 // 對人格傾向嘅輕微影響（tendencyId）
// }

export const hobbies = [
  {
    id: "hobby_drawing",
    name: "自由畫畫",
    category: "藝術",
    icon: "🎨",
    description: "每週喺畫室度學畫畫，慢慢培養自己嘅風格。",
    weeklyApCost: 1,
    moneyCost: 5,
    resourceEffects: [{ stat: "創意", amount: 4 }, { stat: "自信", amount: 1 }],
    skillExpDelta: { 繪畫: 2 },
    capGrowthEffects: [{ stat: "創意", amount: 3, everyWeeks: 6 }],
    routeSeedEffects: [{ seedId: "creativeSeed", amount: 2 }],
    relatedCompetitions: ["comp_school_art"],
    relatedNpcs: [],
    availableStages: ["stage_p1", "stage_p2", "stage_p3"],
    commitmentWeeks: 4,
    quitCooldownWeeks: 24,
    personalityInfluence: "observer"
  },
  {
    id: "hobby_piano",
    name: "練鋼琴",
    category: "音樂",
    icon: "🎹",
    description: "每週練琴，紀律要求高，屋企人都幾期待你嘅表現。",
    weeklyApCost: 1,
    moneyCost: 10,
    resourceEffects: [{ stat: "創意", amount: 2 }, { stat: "紀律", amount: 2 }, { stat: "壓力", amount: 1 }],
    skillExpDelta: { 鋼琴: 2 },
    capGrowthEffects: [{ stat: "創意", amount: 2, everyWeeks: 6 }],
    routeSeedEffects: [{ seedId: "performanceSeed", amount: 1 }],
    relatedCompetitions: ["comp_piano_recital"],
    relatedNpcs: ["char_mom"],
    availableStages: ["stage_p1", "stage_p2", "stage_p3"],
    commitmentWeeks: 6,
    quitCooldownWeeks: 24,
    personalityInfluence: "compliant"
  },
  {
    id: "hobby_football",
    name: "練足球",
    category: "體育",
    icon: "⚽",
    description: "每週練波，識到一班隊友，體力消耗都幾大。",
    weeklyApCost: 1,
    moneyCost: 0,
    resourceEffects: [{ stat: "體力", amount: -1 }, { stat: "社交", amount: 3 }, { stat: "自信", amount: 2 }],
    skillExpDelta: { 足球: 2 },
    capGrowthEffects: [{ stat: "體力", amount: 3, everyWeeks: 6 }],
    routeSeedEffects: [{ seedId: "friendshipSeed", amount: 1 }],
    relatedCompetitions: ["comp_football_tournament"],
    relatedNpcs: ["char_classmate"],
    availableStages: ["stage_p1", "stage_p2", "stage_p3"],
    commitmentWeeks: 4,
    quitCooldownWeeks: 24,
    personalityInfluence: "outgoing"
  },
  {
    id: "hobby_swimming",
    name: "游泳班",
    category: "體育",
    icon: "🏊",
    description: "每週游水，紓緩壓力，鍛鍊紀律。",
    weeklyApCost: 1,
    moneyCost: 8,
    resourceEffects: [{ stat: "體力", amount: 3 }, { stat: "壓力", amount: -3 }, { stat: "紀律", amount: 1 }],
    skillExpDelta: { 游泳: 2 },
    capGrowthEffects: [{ stat: "體力", amount: 3, everyWeeks: 6 }],
    routeSeedEffects: [],
    relatedCompetitions: [],
    relatedNpcs: [],
    availableStages: ["stage_p1", "stage_p2", "stage_p3"],
    commitmentWeeks: 4,
    quitCooldownWeeks: 24,
    personalityInfluence: "assertive"
  },
  {
    id: "hobby_coding",
    name: "編程班",
    category: "科創",
    icon: "🤖",
    description: "跟住教材砌小機械同寫簡單程式，慢慢培養邏輯思維。",
    weeklyApCost: 1,
    moneyCost: 12,
    resourceEffects: [{ stat: "學業", amount: 2 }, { stat: "創意", amount: 2 }],
    skillExpDelta: { 編程: 2 },
    capGrowthEffects: [{ stat: "學業", amount: 2, everyWeeks: 6 }],
    routeSeedEffects: [{ seedId: "explorationSeed", amount: 1 }, { seedId: "streetSeed", amount: 1 }],
    relatedCompetitions: ["comp_math_challenge"],
    relatedNpcs: [],
    availableStages: ["stage_p2", "stage_p3"],
    commitmentWeeks: 6,
    quitCooldownWeeks: 24,
    personalityInfluence: "observer"
  },
  {
    id: "hobby_drama",
    name: "練朗誦",
    category: "表演",
    icon: "🎭",
    description: "練習朗誦同小型話劇，訓練表達同台風。",
    weeklyApCost: 1,
    moneyCost: 6,
    resourceEffects: [{ stat: "自信", amount: 3 }, { stat: "社交", amount: 1 }],
    skillExpDelta: { 朗誦: 2 },
    capGrowthEffects: [{ stat: "自信", amount: 3, everyWeeks: 6 }],
    routeSeedEffects: [{ seedId: "performanceSeed", amount: 2 }],
    relatedCompetitions: ["comp_recitation"],
    relatedNpcs: ["char_teacher"],
    availableStages: ["stage_p1", "stage_p2", "stage_p3"],
    commitmentWeeks: 4,
    quitCooldownWeeks: 24,
    personalityInfluence: "outgoing"
  },
  {
    id: "hobby_reading",
    name: "讀書會",
    category: "閱讀",
    icon: "📚",
    description: "每週同一班書友一齊讀書、分享心得，慢慢培養閱讀習慣。",
    weeklyApCost: 1,
    moneyCost: 0,
    resourceEffects: [{ stat: "學業", amount: 2 }, { stat: "理智值", amount: 1 }],
    skillExpDelta: { 閱讀: 2 },
    capGrowthEffects: [{ stat: "理智值", amount: 3, everyWeeks: 6 }],
    routeSeedEffects: [{ seedId: "academicSeed", amount: 1 }],
    relatedCompetitions: [],
    relatedNpcs: ["char_teacher"],
    availableStages: ["stage_p1", "stage_p2", "stage_p3"],
    commitmentWeeks: 4,
    quitCooldownWeeks: 24,
    personalityInfluence: "observer"
  }
];

export function getHobbyById(id) {
  return hobbies.find(h => h.id === id);
}

export const MAX_ACTIVE_HOBBIES = 3;
