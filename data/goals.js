// data/goals.js
// 目標資料，分三層：term（本學期心願）、stage（階段目標）、direction（人生方向）
// 全部資料驅動，engine.js 唔會 hardcode 個別目標邏輯
//
// stageGoals schema（沿用第二輪）：
// {
//   id, name, description, type: "stage",
//   availableStages: [stageId],
//   requirements: [condition],
//   targetValue: number,
//   progressSources: [ { type: "stat" | "flag", ...} ],
//   rewards: [effect],
//   relatedStats: [statName], relatedFlags: [flagName],
//   reviewTextSuccess, reviewTextMiss
// }
//
// termGoals schema（第四輪重做：清楚嘅子目標進度，唔再係單一分數）：
// {
//   id, name, description, type: "term",
//   availableStages: [stageId],
//   deadlineWeek: number,               // 通常等於學期總週數
//   subGoals: [                         // 2～4 個子目標，全部由通用 type 驅動，唔使逐個心願寫邏輯
//     { key, label, type, target, ...params }
//   ],
//   // subGoal type 支援：
//   //   stat            { stat }                         現在數值 >= target
//   //   statBelow       { stat }                         現在數值 < target（風險類，維持喺線下先算完成）
//   //   actionCount     { category }                     s.categoryUsageCounts[category] >= target
//   //   actionCountAny  { categories: [category] }        任何一個分類總和 >= target
//   //   relationshipMax { dimension, characterIds }        呢幾個角色入面最高嘅維度值 >= target
//   //   memoryCount     { characterIds }                   呢幾個角色嘅記憶總數 >= target
//   //   flag            { flag }                           flag 已設 = 1，未設 = 0，target 通常係 1
//   //   locationFamiliarity { locationId }                  地區熟悉度 >= target
//   successRewards: [effect],           // 全部子目標達成
//   partialRewards: [effect],           // 部分達成（>=50%）
//   missResult: string,                 // 未完成嘅中性描述（唔係懲罰）
//   routeInfluence: [ { seedId, amount } ],  // 呢個心願本身對路線種子嘅貢獻
//   visibleHint: string,                // dashboard 心願卡嘅提示句
//   reviewTextSuccess, reviewTextPartial, reviewTextMiss
// }

// ---------- 本學期心願（短期目標，有清楚子目標進度） ----------
export const termGoals = [
  {
    id: "goal_stable_grades",
    name: "我想成績穩定",
    description: "呢個學期想學業維持喺一個穩定水平。",
    type: "term",
    availableStages: ["stage_p1", "stage_p2", "stage_p3"],
    deadlineWeek: 12,
    subGoals: [
      { key: "academic", label: "學業", type: "stat", stat: "學業", target: 70 },
      { key: "pressure", label: "壓力風險", type: "statBelow", stat: "壓力", target: 75 },
      { key: "studyActions", label: "學習行動次數", type: "actionCount", category: "學習策略", target: 4 }
    ],
    successRewards: [{ type: "statChange", stat: "自信", amount: 6 }],
    partialRewards: [{ type: "statChange", stat: "自信", amount: 2 }],
    missResult: "你冇將學業放喺最前，但你將時間投向咗其他地方。",
    routeInfluence: [{ seedId: "academicSeed", amount: 3 }],
    visibleHint: "呢個唔係一定要完成，但會影響你嘅學期回顧同人生方向。",
    reviewTextSuccess: "你呢個學期學業維持得幾穩定，老師都睇得出你嘅努力。",
    reviewTextPartial: "你學業有啲進步，但未去到完全穩定，仲有啲搖擺。",
    reviewTextMiss: "你冇完成成績目標，但呢個學期你仲有其他收穫，都算係另一種成長。"
  },
  {
    id: "goal_real_friend",
    name: "我想交到真正的朋友",
    description: "想搵到一個講心事都得嘅朋友。",
    type: "term",
    availableStages: ["stage_p1", "stage_p2", "stage_p3"],
    deadlineWeek: 12,
    subGoals: [
      { key: "closeness", label: "最高同學親近度", type: "relationshipMax", dimension: "closeness", characterIds: ["char_classmate", "char_best_friend"], target: 60 },
      { key: "memories", label: "共同回憶", type: "memoryCount", characterIds: ["char_classmate", "char_best_friend"], target: 2 },
      { key: "friendActions", label: "朋友互動次數", type: "actionCount", category: "朋友相處", target: 3 }
    ],
    successRewards: [{ type: "statChange", stat: "快樂", amount: 6 }],
    partialRewards: [{ type: "statChange", stat: "快樂", amount: 2 }],
    missResult: "你今個學期未特別追求友誼，反而喺其他方面累積咗經驗。",
    routeInfluence: [{ seedId: "friendshipSeed", amount: 3 }],
    visibleHint: "呢個唔係一定要完成，但會影響你嘅學期回顧同人生方向。",
    reviewTextSuccess: "你今個學期真係識到一個好朋友，得閒仲會互相分享心事。",
    reviewTextPartial: "你同某啲同學開始熟落，但仲未去到「真心朋友」嘅程度。",
    reviewTextMiss: "你今個學期未搵到特別要好嘅朋友，可能你依家比較享受自己嘅空間，呢個都係一種選擇。"
  },
  {
    id: "goal_finish_artwork",
    name: "我想完成一件作品",
    description: "想喺興趣班或者自己練習完成一件像樣嘅作品。",
    type: "term",
    availableStages: ["stage_p1", "stage_p2", "stage_p3"],
    deadlineWeek: 12,
    subGoals: [
      { key: "creative", label: "創意", type: "stat", stat: "創意", target: 60 },
      { key: "hobbyActions", label: "興趣班出席週數", type: "hobbyWeeksAny", target: 6 }
    ],
    successRewards: [{ type: "statChange", stat: "自信", amount: 8 }],
    partialRewards: [{ type: "statChange", stat: "自信", amount: 3 }],
    missResult: "作品未完成，你嘅諗法多過行動，但呢啲構思未必冇用。",
    routeInfluence: [{ seedId: "creativeSeed", amount: 3 }],
    visibleHint: "呢個唔係一定要完成，但會影響你嘅學期回顧同人生方向。",
    reviewTextSuccess: "你完成咗一件屬於自己嘅作品，好有成功感！",
    reviewTextPartial: "你有投入創作，但作品仲未真正完成。",
    reviewTextMiss: "作品未完成，但你嘅創意都有慢慢累積緊，可能係「諗得多、做得少」嘅一種傾向。"
  },
  {
    id: "goal_reassure_family",
    name: "我想讓屋企人放心",
    description: "想令屋企人覺得你係一個可靠嘅仔女。",
    type: "term",
    availableStages: ["stage_p1", "stage_p2", "stage_p3"],
    deadlineWeek: 12,
    subGoals: [
      { key: "familyRel", label: "家庭關係", type: "stat", stat: "家庭關係", target: 70 },
      { key: "familyActions", label: "家庭行動次數", type: "actionCount", category: "家庭溝通", target: 3 }
    ],
    successRewards: [{ type: "statChange", stat: "家庭關係", amount: 5 }, { type: "addMoney", amount: 15 }],
    partialRewards: [{ type: "addMoney", amount: 5 }],
    missResult: "屋企關係未去到最理想，但都冇特別嘅摩擦，只係你重心放咗喺其他地方。",
    routeInfluence: [{ seedId: "familySeed", amount: 3 }],
    visibleHint: "呢個唔係一定要完成，但會影響你嘅學期回顧同人生方向。",
    reviewTextSuccess: "屋企人今個學期真係好放心，仲讚你懂事咗好多。",
    reviewTextPartial: "屋企關係都算穩定，但未算特別親密。",
    reviewTextMiss: "屋企關係未去到最理想，但都冇特別嘅摩擦。"
  },
];

// ---------- 階段目標（累積型，橫跨多個學期） ----------
export const stageGoals = [
  {
    id: "goal_stage_academic",
    name: "小小學霸",
    description: "喺小學階段建立穩固嘅學業基礎。",
    type: "stage",
    availableStages: ["stage_p1", "stage_p2", "stage_p3"],
    requirements: [],
    targetValue: 75,
    progressSources: [{ type: "stat", stat: "學業" }],
    rewards: [{ type: "statChange", stat: "自信", amount: 10 }],
    relatedStats: ["學業"],
    relatedFlags: [],
    reviewTextSuccess: "你已經建立咗好穩固嘅學業基礎。",
    reviewTextMiss: "學業未到頂尖水平，但基本功都打得唔錯。"
  },
  {
    id: "goal_stage_social",
    name: "社交明星",
    description: "喺班上同社區建立廣闊嘅人脈。",
    type: "stage",
    availableStages: ["stage_p1", "stage_p2", "stage_p3"],
    requirements: [],
    targetValue: 75,
    progressSources: [{ type: "stat", stat: "社交" }],
    rewards: [{ type: "statChange", stat: "快樂", amount: 10 }],
    relatedStats: ["社交"],
    relatedFlags: [],
    reviewTextSuccess: "你已經成為班上人緣最好嘅同學之一。",
    reviewTextMiss: "社交圈未算好大，但你都有幾個穩定嘅朋友。"
  },
  {
    id: "goal_stage_creative",
    name: "創意小孩",
    description: "喺藝術同創作方面持續累積能力。",
    type: "stage",
    availableStages: ["stage_p1", "stage_p2", "stage_p3"],
    requirements: [],
    targetValue: 75,
    progressSources: [{ type: "stat", stat: "創意" }],
    rewards: [{ type: "statChange", stat: "自信", amount: 8 }],
    relatedStats: ["創意"],
    relatedFlags: [],
    reviewTextSuccess: "你嘅創意已經成為你最突出嘅一面。",
    reviewTextMiss: "創意方面仲有進步空間，但都已經有自己嘅風格。"
  },
  {
    id: "goal_stage_family",
    name: "家庭好幫手",
    description: "成為屋企人最信賴嘅小幫手。",
    type: "stage",
    availableStages: ["stage_p1", "stage_p2", "stage_p3"],
    requirements: [],
    targetValue: 80,
    progressSources: [{ type: "stat", stat: "家庭關係" }],
    rewards: [{ type: "addMoney", amount: 20 }],
    relatedStats: ["家庭關係"],
    relatedFlags: [],
    reviewTextSuccess: "屋企人已經好信賴你，覺得你好懂事。",
    reviewTextMiss: "家庭關係都算穩定，仲有空間可以再親密啲。"
  },
  {
    id: "goal_stage_happy_childhood",
    name: "快樂童年",
    description: "保持整體童年生活嘅快樂同輕鬆。",
    type: "stage",
    availableStages: ["stage_p1", "stage_p2", "stage_p3"],
    requirements: [],
    targetValue: 78,
    progressSources: [{ type: "stat", stat: "快樂" }],
    rewards: [{ type: "statChange", stat: "壓力", amount: -10 }],
    relatedStats: ["快樂"],
    relatedFlags: [],
    reviewTextSuccess: "你嘅童年充滿笑聲，係好珍貴嘅回憶。",
    reviewTextMiss: "童年生活有起有落，但都係屬於你嘅獨特經歷。"
  }
];

// ---------- 人生方向（自動判斷嘅目前傾向，唔係結局） ----------
// requiredCategories：用嚟同 recentActionHistory 嘅分類次數做比對
export const lifeDirections = [
  {
    id: "direction_academic",
    name: "穩定學業路線",
    description: "你將時間主要投放喺讀書同學業表現上。",
    type: "direction",
    requiredCategories: ["學習"],
    reasonTemplate: "你最近經常安排溫習同學習類行動，成績慢慢累積出穩定嘅基礎。"
  },
  {
    id: "direction_social",
    name: "朋友中心路線",
    description: "你重視同同學、朋友嘅關係，社交生活豐富。",
    type: "direction",
    requiredCategories: ["朋友"],
    reasonTemplate: "你最近經常回應同學邀請，亦都願意參加小組活動，人際圈子越嚟越闊。"
  },
  {
    id: "direction_creative",
    name: "創意探索路線",
    description: "你鍾意投入興趣、創作，發展自己獨特嘅一面。",
    type: "direction",
    requiredCategories: ["興趣"],
    reasonTemplate: "你最近成日參加興趣班同創作活動，慢慢摸索出自己嘅風格。"
  },
  {
    id: "direction_family",
    name: "家庭可靠路線",
    description: "你花好多心機喺屋企身上，成為屋企人信賴嘅存在。",
    type: "direction",
    requiredCategories: ["家庭"],
    reasonTemplate: "你最近經常主動幫手同屋企人相處，令佢哋越嚟越放心。"
  },
  {
    id: "direction_freeplay",
    name: "自由玩樂路線",
    description: "你比較重視當下嘅開心，唔想俾太多壓力困住自己。",
    type: "direction",
    requiredCategories: ["休息"],
    reasonTemplate: "你最近經常選擇休息或者輕鬆嘅活動，比較重視即時嘅心情。"
  },
  {
    id: "direction_explore",
    name: "地區探索路線",
    description: "你鍾意周圍去，對香港唔同角落充滿好奇心。",
    type: "direction",
    requiredCategories: ["探索"],
    reasonTemplate: "你最近成日去唔同地方探索，對身邊嘅香港越嚟越熟悉。"
  },
  {
    id: "direction_balanced",
    name: "平衡成長路線",
    description: "你冇特別偏重邊一樣，各方面發展都算平均。",
    type: "direction",
    requiredCategories: [],
    reasonTemplate: "你最近嘅選擇都幾平均，學業、朋友、家庭、興趣都有兼顧。"
  }
];

export function getGoalById(id) {
  return [...termGoals, ...stageGoals].find(g => g.id === id);
}

export function getDirectionById(id) {
  return lifeDirections.find(d => d.id === id);
}
