// data/actions.js
// 行動資料表：每個行動消耗 AP（課後時間／精力），全部資料驅動
//
// 本檔案根據 hk_primary_action_hierarchy_v1.docx 重構：action 唔係雜務清單，而係玩家
// 「呢一週想將人生推向邊個方向」嘅選擇。核心決定：刪除「學校準備」（整理書包／檢查手冊／
// 準備明天用品）呢類雜務，唔再係玩家主 action。Action 唔隨機，由 actionFamily + tier +
// conditions（解鎖條件）逐步展開；同一意圖嘅高 tier action 用 replaces 頂替低 tier，
// 唔同 trade-off 嘅 side branch 就 alongside 一齊顯示。
//
// action schema:
// {
//   id, name, category, icon, description, apCost,
//   actionFamily,          // 真正嘅成長線，例如 learning_habit、peer_relationship、rest_emotion（見下面 ACTION_FAMILIES）
//   tier,                  // 該 family 入面嘅成熟階段："1" | "1_side" | "2" | "2_side" | "2_concrete" | "3"
//   intent,                // 玩家意圖（一句話講呢個行動代表緊乜嘢選擇）
//   tradeOff,              // 呢個行動嘅取捨（俾 UI／作者睇，唔係數值本身）
//   replaces: [actionId],  // 呢個 action 解鎖之後，應該隱藏返邊啲低 tier action（同一 family 入面）
//   （注意：skillExp 現階段只可以由 hobby class 週處理增加，weekly action 唔可以再有 skillExpEffects）
//   effects: [effect],
//   goalProgress: [statName],
//   relatedCharacterId, fromCharacterId,
//   conditions: [condition],   // 解鎖條件；tier 1 通常冇 condition（baseline），tier 2/3 用
//                               // actionFamilyUsedAtLeast / relationshipAtLeast / hasFlag / skillExpAtLeast 等
//   conflicts: [actionId], limitedWeeks: [], possibleDialogueIds, possibleConsequences, guideTip
// }

// 7 條 actionFamily（真正嘅成長線，唔係 UI category）—— 對應 hk_primary_action_hierarchy_v1 第 4 節
// 已刪除 4.5 興趣技能（hobby_skill）：興趣一律經 Hobby Class（data/hobbies.js）管理。
// 已刪除 4.9 限時機會（limited_opportunity）：成個 category 連同底下嘅 action 一齊刪走。
export const ACTION_FAMILIES = [
  "learning_habit",       // 4.1 學習策略
  "peer_relationship",    // 4.2 朋友相處
  "family_bond",          // 4.3 家庭溝通
  "rest_emotion",         // 4.4 休息與情緒
  "physical_play",        // 4.6 體能玩樂
  "class_duty",           // 4.7 班務身份（不常駐，要 identity／老師事件解鎖）
  "community_explore"     // 4.8 社區探索
];

export const actions = [
  // ============================================================
  // 4.1 學習策略
  // ============================================================
  {
    id: "action_study_hard",
    name: "加碼溫習",
    category: "學習策略",
    icon: "📖",
    actionFamily: "learning_habit",
    tier: "1",
    intent: "我這週想把學業放前一點。",
    tradeOff: "學業升，但理智值或快樂可能下降。初始開放。",
    replaces: [],
    description: "坐定定溫書，操練返呢排學到嘅嘢。",
    apCost: 2,
    effects: [
      { type: "statChange", stat: "學業", amount: 8 },
      { type: "statChange", stat: "壓力", amount: 4 },
      { type: "statChange", stat: "體力", amount: -4 }
    ],
    goalProgress: ["學業"],
    relatedCharacterId: "char_teacher",
    fromCharacterId: null,
    relatedPersonMode: "optional_unlocked",
    relationshipIfTargeted: { dimension: "respect", amount: 1 },
    conditions: [],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: ["dlg_teacher_talent"],
    possibleConsequences: ["cons_study_streak_praise"],
    guideTip: "推進學業目標嘅主力行動，但壓力會慢慢累積，記得配合休息或家庭行動。"
  },
  {
    id: "action_study_smart",
    name: "有方法地溫習",
    category: "學習策略",
    icon: "🧠",
    actionFamily: "learning_habit",
    tier: "2",
    intent: "不是死讀，而是開始知道怎樣溫。",
    tradeOff: "學業效率更好，理智值扣少一點。解鎖：加碼溫習做滿一定次數。",
    replaces: ["action_study_hard"],
    description: "整理返自己嘅溫習節奏，唔再係盲目死頂。",
    apCost: 2,
    effects: [
      { type: "statChange", stat: "學業", amount: 9 },
      { type: "statChange", stat: "理智值", amount: -2 },
      { type: "statChange", stat: "體力", amount: -3 }
    ],
    goalProgress: ["學業"],
    relatedCharacterId: "char_teacher",
    fromCharacterId: null,
    relatedPersonMode: "optional_unlocked",
    relationshipIfTargeted: { dimension: "respect", amount: 1 },
    conditions: [{ type: "actionFamilyUsedAtLeast", family: "learning_habit", amount: 8 }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "比「加碼溫習」更有效率，解鎖之後會頂替返佢。"
  },
  {
    id: "action_ask_for_homework_help",
    name: "問人功課",
    category: "學習策略",
    icon: "🙋",
    actionFamily: "learning_habit",
    tier: "2_side",
    intent: "我不自己硬撐，選擇問家人、同學或老師。",
    tradeOff: "學業收益中等，但家庭關係／同學關係可能上升；受對方 personality 影響。解鎖：學習策略用過一次。",
    replaces: [],
    description: "揀一個信得過嘅人，問下唔識嘅功課。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "學業", amount: 5 },
      { type: "statChange", stat: "社交", amount: 2 }
    ],
    goalProgress: ["學業"],
    relatedCharacterId: "char_classmate",
    fromCharacterId: null,
    relatedPersonMode: "requires_unlocked",
    eligibleIdentityTypes: ["same_age_peer"],
    relationshipIfTargeted: { dimension: "closeness", amount: 1 },
    conditions: [{ type: "actionFamilyUsedAtLeast", family: "learning_habit", amount: 1 }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "低成本嘅學習側線，仲可以順便維持關係。"
  },
  {
    id: "action_read_book",
    name: "睇課外書",
    category: "學習策略",
    icon: "📚",
    actionFamily: "learning_habit",
    tier: "2_side",
    intent: "用比較安靜的方式成長。",
    tradeOff: "學業收益低一點，但創意、理智值較好。解鎖：學習策略用過一次。",
    replaces: [],
    description: "揾本有興趣嘅書，靜靜哋喺角落度睇。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "創意", amount: 4 },
      { type: "statChange", stat: "學業", amount: 2 },
      { type: "statChange", stat: "理智值", amount: 2 },
      { type: "statChange", stat: "體力", amount: -2 }
    ],
    goalProgress: ["學業", "創意"],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [{ type: "actionFamilyUsedAtLeast", family: "learning_habit", amount: 1 }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "低 AP 消耗，兼顧學業同創意，適合想平衡發展嘅玩家。"
  },
  {
    id: "action_own_study_method",
    name: "建立自己的學習方法",
    category: "學習策略",
    icon: "🗂️",
    actionFamily: "learning_habit",
    tier: "3",
    intent: "我開始有自己的讀書節奏。",
    tradeOff: "學業、自信、理智值較平衡；AP 可較高，屬成熟策略。解鎖：learning_habit 累積夠多次。",
    replaces: ["action_study_smart"],
    description: "唔再跟死板嘅溫書方式，摸索出屬於自己嘅節奏。",
    apCost: 2,
    effects: [
      { type: "statChange", stat: "學業", amount: 6 },
      { type: "statChange", stat: "自信", amount: 3 },
      { type: "statChange", stat: "理智值", amount: 2 }
    ],
    goalProgress: ["學業", "自信"],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [{ type: "actionFamilyUsedAtLeast", family: "learning_habit", amount: 6 }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "學習策略嘅成熟形態，學業、自信、理智值三方面都平衡。"
  },

  // ============================================================
  // 4.2 朋友相處
  // ============================================================
  {
    id: "action_stay_near_classmate",
    name: "待在同學附近",
    category: "朋友相處",
    icon: "🧍",
    actionFamily: "peer_relationship",
    tier: "1",
    intent: "我不一定很主動，但願意留在同學身邊。",
    tradeOff: "社交小幅上升，理智值壓力低；初始開放。",
    replaces: [],
    description: "唔一定要好主動，但都願意留喺同學附近。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "社交", amount: 3 },
      { type: "statChange", stat: "理智值", amount: 1 }
    ],
    goalProgress: ["社交"],
    relatedCharacterId: "char_classmate",
    fromCharacterId: null,
    relatedPersonMode: "optional_unlocked",
    eligibleIdentityTypes: ["same_age_peer"],
    relationshipIfTargeted: { dimension: "closeness", amount: 1 },
    conditions: [],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: ["dlg_recess_invite", "dlg_mysterious_stairs"],
    possibleConsequences: ["cons_recess_friend_group"],
    guideTip: "低壓力嘅社交起點，適合慢熱角色。"
  },
  {
    id: "action_recess_play",
    name: "小息一起玩",
    category: "朋友相處",
    icon: "🤾",
    actionFamily: "peer_relationship",
    tier: "1_side",
    intent: "我想用玩來接近同學。",
    tradeOff: "快樂、社交上升，但體力下降。解鎖：朋友相處用過一次。",
    replaces: [],
    description: "小息同同學一齊喺操場玩，笑到見牙唔見眼。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "快樂", amount: 5 },
      { type: "statChange", stat: "社交", amount: 5 },
      { type: "statChange", stat: "體力", amount: -2 }
    ],
    goalProgress: ["社交"],
    relatedCharacterId: "char_classmate",
    fromCharacterId: null,
    relatedPersonMode: "optional_unlocked",
    eligibleIdentityTypes: ["same_age_peer"],
    relationshipIfTargeted: { dimension: "closeness", amount: 1 },
    conditions: [{ type: "actionFamilyUsedAtLeast", family: "peer_relationship", amount: 1 }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: ["dlg_recess_invite", "dlg_mysterious_stairs"],
    possibleConsequences: ["cons_recess_friend_group"],
    guideTip: "唔會推進學業，但係打好朋友關係嘅基礎行動。"
  },
  {
    id: "action_invite_classmate",
    name: "主動約同學",
    category: "朋友相處",
    icon: "🙌",
    actionFamily: "peer_relationship",
    tier: "2",
    intent: "我不只是等別人找我，我開始主動。",
    tradeOff: "收益較高但有被拒／不合拍風險。解鎖：朋友 action 做滿一定次數，或某同學 relationship 達標。",
    replaces: ["action_stay_near_classmate"],
    description: "唔再淨係等人揾，自己開口約同學。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "社交", amount: 7 },
      { type: "statChange", stat: "自信", amount: 2 },
      { type: "statChange", stat: "快樂", amount: 3 }
    ],
    goalProgress: ["社交", "自信"],
    relatedCharacterId: "char_classmate",
    fromCharacterId: null,
    relatedPersonMode: "requires_unlocked",
    eligibleIdentityTypes: ["same_age_peer"],
    relationshipIfTargeted: { dimension: "closeness", amount: 2 },
    conditions: [{ type: "actionFamilyUsedAtLeast", family: "peer_relationship", amount: 8 }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "由被動變主動嘅社交進階，收益比 Tier 1 高。"
  },
  {
    id: "action_help_classmate_task",
    name: "陪同學處理小事",
    category: "朋友相處",
    icon: "🤲",
    actionFamily: "peer_relationship",
    tier: "2_side",
    intent: "我不是只想玩，我願意幫人。",
    tradeOff: "relationship、自信上升，但體力／理智值可能下降。",
    replaces: [],
    description: "同學有啲小事要處理，你願意搭把手。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "自信", amount: 2 },
      { type: "statChange", stat: "體力", amount: -3 },
      { type: "statChange", stat: "理智值", amount: -1 }
    ],
    goalProgress: ["社交"],
    relatedCharacterId: "char_classmate",
    fromCharacterId: null,
    relatedPersonMode: "requires_unlocked",
    eligibleIdentityTypes: ["same_age_peer"],
    relationshipIfTargeted: { dimension: "closeness", amount: 2 },
    conditions: [{ type: "actionFamilyUsedAtLeast", family: "peer_relationship", amount: 2 }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "由支援者角度建立關係，唔淨係一齊玩。"
  },
  {
    id: "action_fixed_companion",
    name: "和固定同學一起行動",
    category: "朋友相處",
    icon: "🧑‍🤝‍🧑",
    actionFamily: "peer_relationship",
    tier: "3",
    intent: "學校裡已經有一個我自然會走向的人。",
    tradeOff: "快樂、社交、理智值穩定，但可能與溫習／休息互斥。需要高 relationship。",
    replaces: ["action_invite_classmate"],
    description: "唔使刻意約，已經有個自然會行埋一齊嘅人。",
    apCost: 2,
    effects: [
      { type: "statChange", stat: "快樂", amount: 5 },
      { type: "statChange", stat: "社交", amount: 4 },
      { type: "statChange", stat: "理智值", amount: 3 }
    ],
    goalProgress: ["社交", "快樂"],
    relatedCharacterId: "char_classmate",
    fromCharacterId: null,
    relatedPersonMode: "requires_unlocked",
    eligibleIdentityTypes: ["same_age_peer"],
    relationshipIfTargeted: { dimension: "closeness", amount: 3 },
    conditions: [{ type: "relationshipAtLeast", characterId: "char_classmate", dimension: "closeness", amount: 65 }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "朋友相處嘅成熟形態，代表你哋已經有穩定嘅默契。"
  },

  // ============================================================
  // 4.3 家庭溝通
  // ============================================================
  {
    id: "action_talk_to_mom",
    name: "飯桌講學校",
    category: "家庭溝通",
    icon: "🗨️",
    actionFamily: "family_bond",
    tier: "1",
    intent: "我把學校發生的事講給家人聽。",
    tradeOff: "家庭關係、理智值上升；初始開放。",
    replaces: [],
    description: "喺廚房同媽媽傾下今日發生咩事。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "家庭關係", amount: 4 },
      { type: "statChange", stat: "快樂", amount: 2 },
      { type: "statChange", stat: "理智值", amount: 1 }
    ],
    goalProgress: ["家庭關係"],
    relatedCharacterId: "char_mom",
    fromCharacterId: null,
    relatedPersonMode: "optional_unlocked",
    relationshipIfTargeted: { dimension: "trust", amount: 1 },
    conditions: [],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: ["dlg_new_term_talk", "dlg_family_dinner", "dlg_dad_quiet_support"],
    possibleConsequences: [],
    guideTip: "低成本嘅家庭行動，隨時可以做，慢慢累積家庭關係。"
  },
  {
    id: "action_help_family",
    name: "幫屋企做小事",
    category: "家庭溝通",
    icon: "🏠",
    actionFamily: "family_bond",
    tier: "1_side",
    intent: "我用行動參與家庭生活。",
    tradeOff: "家庭關係、自信上升，但體力下降。解鎖：家庭溝通用過一次。",
    replaces: [],
    description: "幫手執屋、睇舖或者買嘢，成為屋企嘅好幫手。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "家庭關係", amount: 6 },
      { type: "statChange", stat: "自信", amount: 2 },
      { type: "statChange", stat: "體力", amount: -2 }
    ],
    goalProgress: ["家庭關係"],
    relatedCharacterId: "char_mom",
    fromCharacterId: null,
    relatedPersonMode: "optional_unlocked",
    relationshipIfTargeted: { dimension: "trust", amount: 1 },
    conditions: [{ type: "actionFamilyUsedAtLeast", family: "family_bond", amount: 1 }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: ["dlg_soy_sauce_errand"],
    possibleConsequences: ["cons_help_family_support", "cons_soy_sauce_thanks"],
    guideTip: "提升家庭關係嘅可靠選擇，但佔用嘅時間可能令你錯過朋友嘅邀請。"
  },
  {
    id: "action_plan_with_family",
    name: "和家人商量安排",
    category: "家庭溝通",
    icon: "🗓️",
    actionFamily: "family_bond",
    tier: "2",
    intent: "我開始參與自己的時間安排。",
    tradeOff: "可能減少家長強制安排。解鎖：飯桌講學校做滿一定次數，或家庭 trust 上升。",
    replaces: ["action_talk_to_mom"],
    description: "同屋企人一齊坐低，傾下呢排嘅時間點樣安排。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "家庭關係", amount: 6 },
      { type: "statChange", stat: "理智值", amount: 2 }
    ],
    goalProgress: ["家庭關係"],
    relatedCharacterId: "char_mom",
    fromCharacterId: null,
    relatedPersonMode: "optional_unlocked",
    relationshipIfTargeted: { dimension: "trust", amount: 2 },
    conditions: [{ type: "actionFamilyUsedAtLeast", family: "family_bond", amount: 8 }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "由單純傾偈進化成參與安排，可能減少之後嘅強制安排。"
  },
  {
    id: "action_ask_family_school_help",
    name: "問家人功課／學校事",
    category: "家庭溝通",
    icon: "❓",
    actionFamily: "family_bond",
    tier: "2_side",
    intent: "我把家人當作求助對象。",
    tradeOff: "學業小升、家庭關係上升，但家長 personality 可能影響結果。解鎖：家庭溝通用過一次。",
    replaces: [],
    description: "揀學校嘅事或者功課問題，問下屋企人嘅意見。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "學業", amount: 3 },
      { type: "statChange", stat: "家庭關係", amount: 3 }
    ],
    goalProgress: ["學業", "家庭關係"],
    relatedCharacterId: "char_mom",
    fromCharacterId: null,
    relatedPersonMode: "optional_unlocked",
    relationshipIfTargeted: { dimension: "trust", amount: 1 },
    conditions: [{ type: "actionFamilyUsedAtLeast", family: "family_bond", amount: 1 }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "同時兼顧學業同家庭嘅低成本選擇。"
  },
  {
    id: "action_propose_own_idea",
    name: "自己提出想試的事",
    category: "家庭溝通",
    icon: "💡",
    actionFamily: "family_bond",
    tier: "3",
    intent: "我開始說出自己想要什麼。",
    tradeOff: "可能解鎖興趣班／活動，也可能帶來家長期待。需要家庭 trust 較高。",
    replaces: ["action_plan_with_family"],
    description: "鼓起少少勇氣，同屋企人講出自己想試嘅嘢。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "自信", amount: 5 },
      { type: "statChange", stat: "家庭關係", amount: 3 }
    ],
    goalProgress: ["自信", "家庭關係"],
    relatedCharacterId: "char_mom",
    fromCharacterId: null,
    relatedPersonMode: "optional_unlocked",
    relationshipIfTargeted: { dimension: "trust", amount: 2 },
    routeSeedEffects: [{ seedId: "explorationSeed", amount: 1 }],
    conditions: [{ type: "relationshipAtLeast", characterId: "char_mom", dimension: "trust", amount: 55 }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "家庭溝通嘅成熟形態，玩家開始主動表達自己嘅想法。"
  },

  // ============================================================
  // 4.4 休息與情緒
  // ============================================================
  {
    id: "action_rest_week",
    name: "早點休息",
    category: "休息與情緒",
    icon: "😴",
    actionFamily: "rest_emotion",
    tier: "1",
    intent: "我這週先恢復身體。",
    tradeOff: "體力、理智值上升，但不推進其他目標；初始開放。",
    replaces: [],
    description: "咩都唔做，好好休息，回一回氣。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "體力", amount: 8 },
      { type: "statChange", stat: "壓力", amount: -6 }
    ],
    goalProgress: [],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: ["cons_rest_recovery_note"],
    guideTip: "唔會推進大部分目標，但係平衡壓力同體力嘅重要選擇。"
  },
  {
    id: "action_free_play",
    name: "自由玩一陣",
    category: "休息與情緒",
    icon: "🧸",
    actionFamily: "rest_emotion",
    tier: "1_side",
    intent: "我想做小朋友會做的事，不為任何目標。",
    tradeOff: "快樂上升，創意小升，學業不推進；初始開放。",
    replaces: [],
    description: "做返一陣小朋友會做嘅事，唔為任何目標。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "快樂", amount: 5 },
      { type: "statChange", stat: "創意", amount: 2 }
    ],
    goalProgress: [],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "唔為任何目標嘅純粹快樂，適合平衡角色成日太緊繃嘅節奏。"
  },
  {
    id: "action_quiet_decompress",
    name: "安靜放空一陣",
    category: "休息與情緒",
    icon: "🌙",
    actionFamily: "rest_emotion",
    tier: "2",
    intent: "我開始知道自己需要安靜。",
    tradeOff: "理智值收益比早睡更高。解鎖：休息 action 做過幾次，或理智值曾偏低。",
    replaces: ["action_rest_week"],
    description: "唔使做任何事，畀自己一段完全安靜嘅時間。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "理智值", amount: 8 },
      { type: "statChange", stat: "體力", amount: 3 }
    ],
    goalProgress: [],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [{ type: "actionFamilyUsedAtLeast", family: "rest_emotion", amount: 8 }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "休息嘅進階版，理智值恢復效果比「早點休息」更好。"
  },
  {
    id: "action_video_game",
    name: "看卡通／打機一陣",
    category: "休息與情緒",
    icon: "🎮",
    actionFamily: "rest_emotion",
    tier: "2_side",
    intent: "我用娛樂恢復快樂。",
    tradeOff: "快樂高，但連續使用可能觸發家長反應。解鎖：休息與情緒用過一次。",
    replaces: [],
    description: "喺屋企打機或者睇卡通，放鬆一下腦袋。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "快樂", amount: 6 },
      { type: "statChange", stat: "壓力", amount: -3 },
      { type: "statChange", stat: "學業", amount: -2 }
    ],
    goalProgress: [],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [{ type: "actionFamilyUsedAtLeast", family: "rest_emotion", amount: 1 }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: ["cons_video_game_bond"],
    guideTip: "放鬆效果好，但會拖低少少學業，唔好連續太多週淨係打機。"
  },
  {
    id: "action_own_corner",
    name: "整理自己的小角落",
    category: "休息與情緒",
    icon: "🛋️",
    actionFamily: "rest_emotion",
    tier: "3",
    intent: "我找到讓自己慢慢回來的方法。",
    tradeOff: "理智值、自信、創意小幅上升。解鎖：rest_emotion family 累積夠多次。",
    replaces: ["action_quiet_decompress"],
    description: "慢慢摸索出一套真正屬於自己嘅回氣方法。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "理智值", amount: 5 },
      { type: "statChange", stat: "自信", amount: 2 },
      { type: "statChange", stat: "創意", amount: 2 }
    ],
    goalProgress: [],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [{ type: "actionFamilyUsedAtLeast", family: "rest_emotion", amount: 6 }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "休息與情緒嘅成熟形態，代表你已經摸索到適合自己嘅方法。"
  },

  // 已刪除 4.5 興趣技能：興趣一律經 Hobby Class 管理，唔再係 action

  // ============================================================
  // 4.6 體能玩樂
  // ============================================================
  {
    id: "action_ball_game",
    name: "樓下／操場玩",
    category: "體能玩樂",
    icon: "⚽",
    actionFamily: "physical_play",
    tier: "1",
    intent: "我想出去跑跳一下。",
    tradeOff: "快樂上升，體力下降，可能增加社交機會；初期可開。",
    replaces: [],
    description: "同街坊小朋友一齊踢波、跑跑跳跳。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "快樂", amount: 5 },
      { type: "statChange", stat: "社交", amount: 3 },
      { type: "statChange", stat: "體力", amount: -2 }
    ],
    goalProgress: ["社交"],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: ["cons_ball_game_friend"],
    guideTip: "動態興趣行動，同時可以識到多幾個街坊朋友。"
  },
  {
    id: "action_fixed_sport",
    name: "固定玩一項體能活動",
    category: "體能玩樂",
    icon: "🏃",
    actionFamily: "physical_play",
    tier: "2",
    intent: "我不只是亂玩，我開始常常玩同一類活動。",
    tradeOff: "自信上升。解鎖：體能玩樂做過幾次。",
    replaces: ["action_ball_game"],
    description: "揀定一項運動，唔再周圍亂玩，開始固定練習。",
    apCost: 2,
    effects: [
      { type: "statChange", stat: "自信", amount: 4 },
      { type: "statChange", stat: "體力", amount: -3 }
    ],
    goalProgress: ["自信"],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [{ type: "actionFamilyUsedAtLeast", family: "physical_play", amount: 8 }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "由亂玩進化成固定練習一項運動。"
  },
  {
    id: "action_sport_with_classmate",
    name: "和同學一起運動",
    category: "體能玩樂",
    icon: "🤸",
    actionFamily: "physical_play",
    tier: "2_side",
    intent: "我用運動建立朋友關係。",
    tradeOff: "社交、快樂上升，但可能與學習 action 互斥。",
    replaces: [],
    description: "揾返幾個同學一齊運動，順便加深友誼。",
    apCost: 2,
    effects: [
      { type: "statChange", stat: "社交", amount: 5 },
      { type: "statChange", stat: "快樂", amount: 3 },
      { type: "statChange", stat: "體力", amount: -3 }
    ],
    goalProgress: ["社交"],
    relatedCharacterId: "char_classmate",
    fromCharacterId: null,
    relatedPersonMode: "requires_unlocked",
    eligibleIdentityTypes: ["same_age_peer"],
    relationshipIfTargeted: { dimension: "closeness", amount: 2 },
    conditions: [{ type: "actionFamilyUsedAtLeast", family: "physical_play", amount: 2 }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "體能同社交雙軌並行嘅選擇。"
  },
  {
    id: "action_join_sport_activity",
    name: "參加運動相關活動",
    category: "體能玩樂",
    icon: "🥇",
    actionFamily: "physical_play",
    tier: "3",
    intent: "運動變成一件正式活動。",
    tradeOff: "自信升幅高，體力消耗高。解鎖：physical_play 累積夠多次。",
    replaces: ["action_fixed_sport"],
    description: "報名參加正式嘅運動活動或者校隊訓練。",
    apCost: 2,
    effects: [
      { type: "statChange", stat: "自信", amount: 6 },
      { type: "statChange", stat: "體力", amount: -6 }
    ],
    goalProgress: ["自信"],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [{ type: "actionFamilyUsedAtLeast", family: "physical_play", amount: 5 }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "體能玩樂嘅成熟形態，運動由玩樂變成正式活動。"
  },

  // ============================================================
  // 4.7 班務身份（不常駐，必須由 identity 或老師事件解鎖 flag_class_duty_unlocked）
  // ============================================================
  {
    id: "action_help_teacher_small",
    name: "幫老師做小事",
    category: "班務身份",
    icon: "🧑‍🏫",
    actionFamily: "class_duty",
    tier: "1",
    intent: "我願意接住一件小責任。",
    tradeOff: "自信、老師 trust 上升，但體力／理智值可能下降。要由老師事件、班務邀請解鎖。",
    replaces: [],
    description: "老師需要人幫手，你舉手接咗呢件小事。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "自信", amount: 3 },
      { type: "statChange", stat: "體力", amount: -2 }
    ],
    goalProgress: ["自信"],
    relatedCharacterId: "char_teacher",
    fromCharacterId: "char_teacher",
    relatedPersonMode: "requires_unlocked",
    relationshipIfTargeted: { dimension: "respect", amount: 1 },
    conditions: [{ type: "hasFlag", flag: "flag_class_duty_unlocked" }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "唔常駐，要有班務身份或者老師邀請先會出現。"
  },
  {
    id: "action_stable_class_duty",
    name: "穩定做班務",
    category: "班務身份",
    icon: "📋",
    actionFamily: "class_duty",
    tier: "2",
    intent: "這不是一次幫忙，而是我在班上的角色。",
    tradeOff: "自信、老師 trust 上升。解鎖：有班務身份或做過幾次小事。",
    replaces: ["action_help_teacher_small"],
    description: "唔再係一次幫忙，而係你喺班度嘅固定角色。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "自信", amount: 3 }
    ],
    goalProgress: ["自信"],
    relatedCharacterId: "char_teacher",
    fromCharacterId: "char_teacher",
    relatedPersonMode: "requires_unlocked",
    relationshipIfTargeted: { dimension: "respect", amount: 2 },
    conditions: [
      { type: "hasFlag", flag: "flag_class_duty_unlocked" },
      { type: "actionFamilyUsedAtLeast", family: "class_duty", amount: 8 }
    ],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "由一次性幫手進化成穩定嘅班務角色。"
  },
  {
    id: "action_help_classmate_duty",
    name: "幫同學處理班務相關問題",
    category: "班務身份",
    icon: "🤝",
    actionFamily: "class_duty",
    tier: "2_side",
    intent: "我在責任和同學關係之間找平衡。",
    tradeOff: "社交和身份收益並存，但容易有小衝突。",
    replaces: [],
    description: "班務入面撞到同學嘅問題，你嘗試喺責任同關係之間搵平衡。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "社交", amount: 3 },
      { type: "statChange", stat: "自信", amount: 2 }
    ],
    goalProgress: ["社交"],
    relatedCharacterId: "char_classmate",
    fromCharacterId: null,
    relatedPersonMode: "optional_unlocked",
    eligibleIdentityTypes: ["same_age_peer"],
    relationshipIfTargeted: { dimension: "closeness", amount: 1 },
    conditions: [{ type: "hasFlag", flag: "flag_class_duty_unlocked" }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "班務身份同同學關係互相影響嘅選擇。"
  },
  {
    id: "action_trusted_duty",
    name: "被信任處理班務",
    category: "班務身份",
    icon: "🌟",
    actionFamily: "class_duty",
    tier: "3",
    intent: "老師開始把你當成可靠的人。",
    tradeOff: "自信與身份感高，但責任壓力增加。需要老師 trust 高。",
    replaces: ["action_stable_class_duty"],
    description: "老師已經好放心將重要嘅班務交俾你處理。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "自信", amount: 6 },
      { type: "statChange", stat: "理智值", amount: -2 }
    ],
    goalProgress: ["自信"],
    relatedCharacterId: "char_teacher",
    fromCharacterId: "char_teacher",
    relatedPersonMode: "requires_unlocked",
    relationshipIfTargeted: { dimension: "respect", amount: 3 },
    conditions: [
      { type: "hasFlag", flag: "flag_class_duty_unlocked" },
      { type: "relationshipAtLeast", characterId: "char_teacher", dimension: "trust", amount: 60 }
    ],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "班務身份嘅成熟形態，代表老師已經好信任你。"
  },

  // ============================================================
  // 4.8 社區探索
  // ============================================================
  {
    id: "action_explore_area",
    name: "附近走走",
    category: "社區探索",
    icon: "🧭",
    actionFamily: "community_explore",
    tier: "1",
    intent: "我想看看屋企附近有什麼。",
    tradeOff: "快樂、創意小升，可能遇到地區小事件；初期可開。",
    replaces: [],
    description: "喺屋企附近或者目前地區周圍行下，睇下有咩新奇事。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "快樂", amount: 3 },
      { type: "statChange", stat: "創意", amount: 3 }
    ],
    goalProgress: ["創意"],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: ["cons_explore_flag"],
    guideTip: "結果不穩定嘅行動，有機會觸發地區支線，亦都推進「探索更多地方」心願。"
  },
  {
    id: "action_follow_parent_errand",
    name: "跟家人出門辦事",
    category: "社區探索",
    icon: "🧾",
    actionFamily: "community_explore",
    tier: "1_side",
    intent: "我不是自己探索，而是跟著大人看城市。",
    tradeOff: "家庭關係、自信小升，地區見識上升，中環先有。",
    replaces: [],
    description: "跟媽媽或者爸爸去中環辦重要嘅事，觀察大人世界。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "家庭關係", amount: 4 },
      { type: "statChange", stat: "自信", amount: 2 }
    ],
    goalProgress: ["家庭關係"],
    relatedCharacterId: "char_mom",
    fromCharacterId: null,
    relatedPersonMode: "optional_unlocked",
    relationshipIfTargeted: { dimension: "trust", amount: 1 },
    routeSeedEffects: [{ seedId: "sponsorSeed", amount: 1 }],
    conditions: [{ type: "currentLocation", locationId: "loc_central" }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "中環先有，家庭關係穩定收益，亦都係「見識城市」嘅入口。"
  },
  {
    id: "action_purposeful_trip",
    name: "有目的地去一個地方",
    category: "社區探索",
    icon: "🎯",
    actionFamily: "community_explore",
    tier: "2",
    intent: "我想去圖書館、文具店、公園、社區中心等具體地方。",
    tradeOff: "效果更精準，但可能需要金錢、家人允許或地點條件。解鎖：探索累積夠多次。",
    replaces: ["action_explore_area"],
    description: "唔再係亂行，而係有明確目的地要去。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "快樂", amount: 4 },
      { type: "statChange", stat: "創意", amount: 3 }
    ],
    goalProgress: ["創意"],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [{ type: "actionFamilyUsedAtLeast", family: "community_explore", amount: 8 }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "由亂行進化成有目的地嘅探索，效果更精準。"
  },
  {
    id: "action_visit_library",
    name: "去圖書館",
    category: "社區探索",
    icon: "📖",
    actionFamily: "community_explore",
    tier: "2_concrete",
    intent: "我選擇一個具體地點：圖書館。",
    tradeOff: "學業、理智值上升，唔使錢，但要已經解鎖有目的地探索。",
    replaces: [],
    description: "去附近圖書館，揾本書慢慢睇。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "學業", amount: 3 },
      { type: "statChange", stat: "理智值", amount: 2 }
    ],
    goalProgress: ["學業"],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [{ type: "actionFamilyUsedAtLeast", family: "community_explore", amount: 8 }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "只喺已經解鎖「有目的地去一個地方」之後先顯示。"
  },
  {
    id: "action_mall_stationery_trip",
    name: "逛文具店",
    category: "社區探索",
    icon: "🛍️",
    actionFamily: "community_explore",
    tier: "2_concrete",
    intent: "我選擇一個具體地點：文具店。",
    tradeOff: "快樂、學業小升，消耗金錢，沙田先有。",
    replaces: [],
    description: "去沙田商場文具店行下，睇下有咩新文具。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "快樂", amount: 2 },
      { type: "statChange", stat: "學業", amount: 2 },
      { type: "addMoney", amount: -5 }
    ],
    goalProgress: ["學業"],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [
      { type: "currentLocation", locationId: "loc_shatin" },
      { type: "actionFamilyUsedAtLeast", family: "community_explore", amount: 8 }
    ],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "只喺已經解鎖「有目的地去一個地方」之後先顯示，沙田先有。"
  },
  {
    id: "action_visit_park",
    name: "去公園",
    category: "社區探索",
    icon: "🌳",
    actionFamily: "community_explore",
    tier: "2_concrete",
    intent: "我選擇一個具體地點：公園。",
    tradeOff: "快樂、體力小上升，唔使錢。",
    replaces: [],
    description: "去附近公園坐坐、行下，透透氣。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "快樂", amount: 4 },
      { type: "statChange", stat: "體力", amount: 2 }
    ],
    goalProgress: [],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [{ type: "actionFamilyUsedAtLeast", family: "community_explore", amount: 8 }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "只喺已經解鎖「有目的地去一個地方」之後先顯示。"
  },
  {
    id: "action_museum_visit",
    name: "參觀展覽",
    category: "社區探索",
    icon: "🖼️",
    actionFamily: "community_explore",
    tier: "2_concrete",
    intent: "我選擇一個具體地點：展覽／博物館。",
    tradeOff: "見識同自信收益高，但成本都比較高，中環先有。",
    replaces: [],
    description: "同屋企人去中環博物館或者展覽，開開眼界。",
    apCost: 2,
    effects: [
      { type: "statChange", stat: "自信", amount: 4 },
      { type: "statChange", stat: "創意", amount: 3 },
      { type: "addMoney", amount: -10 }
    ],
    goalProgress: ["自信"],
    relatedCharacterId: null,
    fromCharacterId: null,
    routeSeedEffects: [{ seedId: "sponsorSeed", amount: 1 }],
    conditions: [
      { type: "currentLocation", locationId: "loc_central" },
      { type: "actionFamilyUsedAtLeast", family: "community_explore", amount: 8 }
    ],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "只喺已經解鎖「有目的地去一個地方」之後先顯示，中環先有。"
  },
  {
    id: "action_follow_area_clue",
    name: "追蹤一條地區線索",
    category: "社區探索",
    icon: "🔍",
    actionFamily: "community_explore",
    tier: "3",
    intent: "我不是亂逛，而是想跟進某件事。",
    tradeOff: "可能解鎖支線，但不一定有直接數值收益。解鎖：社區探索累積夠多次。",
    replaces: [],
    description: "跟住之前聽到嘅線索，繼續追查落去。",
    apCost: 2,
    effects: [
      { type: "statChange", stat: "創意", amount: 5 },
      { type: "statChange", stat: "快樂", amount: 3 }
    ],
    goalProgress: ["創意"],
    relatedCharacterId: null,
    fromCharacterId: null,
    relatedPersonMode: "none",
    conditions: [{ type: "actionFamilyUsedAtLeast", family: "community_explore", amount: 6 }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "社區探索嘅成熟形態，需要之前累積咗地區線索先會出現。"
  },

  // 已刪除 4.9 限時機會成個 category：呢批 action 全部刪走
];

export function getActionById(id) {
  return actions.find(a => a.id === id);
}

export function getActionsByFamily(family) {
  return actions.filter(a => a.actionFamily === family);
}

// 已刪除「興趣技能」category：興趣一律經 Hobby Class 管理，唔再係 action category。
// 已刪除「限時機會」category：連同底下嘅 action 一齊刪走，UI 唔再出現呢個 tab／chip。
export const actionCategories = [
  "全部", "學習策略", "朋友相處", "家庭溝通", "休息與情緒",
  "體能玩樂", "班務身份", "社區探索"
];
// 已刪除：推薦／心願相關／最近關係／特殊傾向／已解鎖／限時機會／興趣技能／限時呢幾個 tab（唔顯示喺 action UI）。
// 「限時」tab 一齊刪走：而家冇任何 action 用 limitedWeeks，留低都會永遠得空 tab。
// 「全部」係將呢一刻已解鎖嘅 action（跨晒所有分類）一齊顯示，唔包括未解鎖／locked 嘅內容。
// 淨低分類 tabs 一律要有可用 action 先顯示（見 js/ui.js renderActionTabs）。
export const actionTabs = [
  "全部", "地區限定",
  "學習策略", "朋友相處", "家庭溝通", "休息與情緒", "體能玩樂",
  "班務身份", "社區探索"
];
