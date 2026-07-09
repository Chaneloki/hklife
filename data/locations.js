// data/locations.js
// 香港地區資料：每個地區都要答到三個問題——呢度可以做咩？呢度常遇到邊個？長期嚟呢度會形成咩人生方向？
//
// location schema:
// {
//   id, name, emoji, description, lifeFlavor,
//   availableStages: [stageId],
//   actionCategories: [category],        // 呢個地區主要支援嘅行動分類
//   uniqueActions: [actionId],           // 呢個地區先有嘅特色行動
//   commonCharacters: [characterId],     // 響呢度容易撞到邊個
//   possibleEncounters: [string],        // 簡短描述，俾 UI 顯示「呢度可能發生咩事」
//   locationResources: [string],         // 呢度可以攞到／學到嘅嘢
//   travelCost: number,                  // 由屋企（沙田）去呢度嘅額外 AP／隱藏成本概念，0 代表就腳
//   apModifier: number,                  // 響呢度做行動嘅 AP 增減（0 代表冇特別加減）
//   riskTags: [string],
//   goalInfluence: [ { directionId, weight } ],
//   unlockConditions: [condition]
// }

export const locations = [
  {
    id: "loc_shatin",
    name: "沙田",
    emoji: "🚲",
    description: "屋企同學校所在地，商場、屋苑平台、單車河都喺呢度。",
    lifeFlavor: "家庭日常、學校生活嘅根據地，最穩陣但都最少驚喜。",
    availableStages: ["stage_p1", "stage_p2", "stage_p3"],
    actionCategories: ["家庭", "學習", "朋友", "休息"],
    uniqueActions: ["action_mall_stationery_trip"],
    commonCharacters: ["char_mom", "char_dad", "char_classmate", "char_teacher"],
    possibleEncounters: ["喺商場撞到媽媽行街", "喺樓下平台同同學打波", "假日一齊踩單車河"],
    locationResources: ["文具", "屋企支援", "同學日常"],
    travelCost: 0,
    apModifier: 0,
    riskTags: [],
    goalInfluence: [{ directionId: "direction_family", weight: 2 }, { directionId: "direction_academic", weight: 1 }],
    unlockConditions: []
  },
  {
    id: "loc_causeway",
    name: "銅鑼灣",
    emoji: "🛍️",
    description: "潮流消費、興趣工作坊、演唱會氣氛嘅集中地。",
    lifeFlavor: "適合創意探索、社交、興趣路線，但消費誘惑大，荷包會跌得快。",
    availableStages: ["stage_p3"],
    actionCategories: ["興趣", "朋友", "支線"],
    uniqueActions: [],
    commonCharacters: ["char_best_friend"],
    possibleEncounters: ["撞到興趣班同學仔一齊睇櫥窗", "街頭表演令你手痕想試"],
    locationResources: ["潮流資訊", "興趣靈感"],
    travelCost: 1,
    apModifier: 0,
    riskTags: ["高消費"],
    goalInfluence: [{ directionId: "direction_creative", weight: 2 }, { directionId: "direction_social", weight: 1 }],
    unlockConditions: []
  },
  {
    id: "loc_mongkok",
    name: "旺角",
    emoji: "🏙️",
    description: "朋友聚會、補習社、遊戲店文具店、街頭熱鬧同奇怪傳聞嘅集中地。",
    lifeFlavor: "適合朋友中心、自由玩樂、探索，人來人往、機會同誘惑都多。",
    availableStages: ["stage_p1", "stage_p2", "stage_p3"],
    actionCategories: ["朋友", "學習", "支線"],
    uniqueActions: [],
    commonCharacters: ["char_classmate", "char_tutor"],
    possibleEncounters: ["聽到同學講神秘傳聞", "阿成請你食小點心", "補習 Miss 突然約你加堂"],
    locationResources: ["補習資源", "街頭小食", "文具同遊戲"],
    travelCost: 1,
    apModifier: 0,
    riskTags: ["人多手雜"],
    goalInfluence: [{ directionId: "direction_social", weight: 2 }, { directionId: "direction_freeplay", weight: 1 }],
    unlockConditions: []
  },
  {
    id: "loc_sspk",
    name: "深水埗",
    emoji: "🔧",
    description: "電子零件、二手物品，臥虎藏龍嘅地方。",
    lifeFlavor: "適合地區探索、實用技能、創意探索。",
    availableStages: ["stage_p1", "stage_p2", "stage_p3"],
    actionCategories: ["探索", "興趣", "支線"],
    uniqueActions: ["action_follow_area_clue"],
    commonCharacters: [],
    possibleEncounters: ["喺舖頭門口睇人修嘢", "街坊阿婆想搵人幫手搬嘢"],
    locationResources: ["二手電子零件", "修理技巧"],
    travelCost: 1,
    apModifier: 0,
    riskTags: ["舊區路窄", "容易蕩失路"],
    goalInfluence: [{ directionId: "direction_explore", weight: 3 }, { directionId: "direction_creative", weight: 1 }],
    unlockConditions: []
  },
  {
    id: "loc_central",
    name: "中環",
    emoji: "🏢",
    description: "城市節奏最快嘅地方，博物館、展覽、家長辦事嘅正式場合。",
    lifeFlavor: "小學階段唔會太職場化，主要係「見識城市」同「屋企人帶你去嘅場合」，適合訓練自信同見識。",
    availableStages: ["stage_p3"],
    actionCategories: ["探索", "家庭"],
    uniqueActions: ["action_museum_visit", "action_follow_parent_errand"],
    commonCharacters: ["char_mom", "char_dad"],
    possibleEncounters: ["同屋企人去辦重要嘅事", "喺展覽度見識到新奇嘢"],
    locationResources: ["見識同眼界", "自信"],
    travelCost: 2,
    apModifier: 0,
    riskTags: ["節奏快", "容易眼花繚亂"],
    goalInfluence: [{ directionId: "direction_family", weight: 1 }],
    unlockConditions: [{ type: "statAtLeast", stat: "自信", amount: 45 }]
  }
];

export function getLocationById(id) {
  return locations.find(l => l.id === id);
}

export function getLocationsForStage(stageId) {
  return locations.filter(l => l.availableStages.includes(stageId));
}
