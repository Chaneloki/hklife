// data/actions.js
// 行動資料表：每個行動消耗 AP（課後時間／精力），全部資料驅動
//
// action schema:
// {
//   id, name, category, icon, description, apCost,
//   effects: [effect],
//   goalProgress: [statName],           // 呢個行動主要推進邊啲數值／目標（UI 顯示用）
//   relatedCharacterId: characterId | null, // 呢個行動主要影響邊個 NPC 嘅關係（UI 顯示「可能影響」用）
//   fromCharacterId: characterId | null,    // 如果呢個行動係由某個 NPC 邀請／解鎖，記低邊個（UI 顯示「來自邀請」）
//   conditions: [condition],            // 「地區要求」由 conditions 入面嘅 currentLocation 條件推導，唔使獨立欄位
//   conflicts: [actionId],              // 呢個行動同邊啲行動互斥（同一週唔可以一齊做）
//   limitedWeeks: [] | [weekNumber...], // 限時行動，淨係響指定週數先出現，留空代表成日有
//   possibleDialogueIds: [dialogueId],  // 有機會觸發嘅場景對話
//   possibleConsequences: [consequenceId], // 有機會排程嘅延遲後果
//   guideTip: string                    // 「行動指南」modal 用嘅使用提示
// }

export const actions = [
  {
    id: "action_study_hard",
    name: "認真溫習",
    category: "學習",
    icon: "📖",
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
    conditions: [],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: ["dlg_teacher_talent"],
    possibleConsequences: ["cons_study_streak_praise"],
    guideTip: "推進學業目標嘅主力行動，但壓力會慢慢累積，記得配合休息或家庭行動。"
  },
  {
    id: "action_recess_play",
    name: "和同學小息玩",
    category: "朋友",
    icon: "🤾",
    description: "小息同同學一齊喺操場玩，笑到見牙唔見眼。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "快樂", amount: 5 },
      { type: "statChange", stat: "社交", amount: 5 }
    ],
    goalProgress: ["社交"],
    relatedCharacterId: "char_classmate",
    fromCharacterId: null,
    conditions: [],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: ["dlg_recess_invite", "dlg_mysterious_stairs"],
    possibleConsequences: ["cons_recess_friend_group"],
    guideTip: "唔會推進學業，但係打好朋友關係嘅基礎行動，有機會帶嚟之後嘅小組合作機會。"
  },
  {
    id: "action_art_class",
    name: "參加畫畫班",
    category: "興趣",
    icon: "🎨",
    description: "去興趣班學畫畫，一筆一筆練習自己嘅風格。",
    apCost: 2,
    effects: [
      { type: "statChange", stat: "創意", amount: 8 },
      { type: "statChange", stat: "自信", amount: 2 },
      { type: "addMoney", amount: -20 }
    ],
    goalProgress: ["創意"],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: ["cons_hobby_showcase"],
    guideTip: "消耗金錢，但長遠可以完成一件作品，推進「完成一件作品」心願。"
  },
  {
    id: "action_help_family",
    name: "幫屋企人做事",
    category: "家庭",
    icon: "🏠",
    description: "幫手執屋、睇舖或者買嘢，成為屋企嘅好幫手。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "家庭關係", amount: 6 },
      { type: "statChange", stat: "自信", amount: 2 }
    ],
    goalProgress: ["家庭關係"],
    relatedCharacterId: "char_mom",
    fromCharacterId: null,
    conditions: [],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: ["dlg_soy_sauce_errand"],
    possibleConsequences: ["cons_help_family_support", "cons_soy_sauce_thanks"],
    guideTip: "提升家庭關係嘅可靠選擇，但佔用嘅時間可能令你錯過朋友嘅邀請。"
  },
  {
    id: "action_explore_area",
    name: "去附近探索",
    category: "探索",
    icon: "🧭",
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
    possibleDialogueIds: ["dlg_cha_chaan_teng_greeting", "dlg_mystery_neighbor"],
    possibleConsequences: ["cons_cha_chaan_snack", "cons_mystery_neighbor_repair", "cons_explore_flag"],
    guideTip: "結果不穩定嘅行動，有機會觸發地區支線，亦都推進「探索更多地方」心願。"
  },
  {
    id: "action_rest_week",
    name: "休息一週",
    category: "休息",
    icon: "😴",
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
    id: "action_reply_message",
    name: "回覆朋友訊息",
    category: "朋友",
    icon: "💬",
    description: "抽時間覆返啲未回覆嘅訊息，處理返呢排嘅人際後續。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "社交", amount: 3 }
    ],
    goalProgress: ["社交"],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "如果你有未讀訊息囤積，做呢個行動可以順手清一清，維持關係唔會轉淡。"
  },
  {
    id: "action_tidy_bag",
    name: "整理書包",
    category: "學習",
    icon: "🎒",
    description: "執好書包同功課，減少手忙腳亂嘅機會。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "壓力", amount: -2 },
      { type: "statChange", stat: "學業", amount: 2 }
    ],
    goalProgress: ["學業"],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: ["cons_tidy_bag_relief"],
    guideTip: "細細個行動，但可以降低下週忘記帶功課嘅風險，性價比高。"
  },
  {
    id: "action_ball_game",
    name: "落公園踢波",
    category: "興趣",
    icon: "⚽",
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
    id: "action_video_game",
    name: "打機",
    category: "興趣",
    icon: "🎮",
    description: "喺屋企打機，放鬆一下腦袋。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "快樂", amount: 6 },
      { type: "statChange", stat: "壓力", amount: -3 },
      { type: "statChange", stat: "學業", amount: -2 }
    ],
    goalProgress: [],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: ["cons_video_game_bond"],
    guideTip: "放鬆效果好，但會拖低少少學業，唔好連續太多週淨係打機。"
  },
  {
    id: "action_read_book",
    name: "睇課外書",
    category: "學習",
    icon: "📚",
    description: "揾本有興趣嘅書，靜靜哋喺角落度睇。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "創意", amount: 4 },
      { type: "statChange", stat: "學業", amount: 2 },
      { type: "statChange", stat: "體力", amount: -2 }
    ],
    goalProgress: ["學業", "創意"],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "低 AP 消耗，兼顧學業同創意，適合想平衡發展嘅玩家。"
  },
  {
    id: "action_tutorial_class",
    name: "去補習",
    category: "學習",
    icon: "✏️",
    description: "週末去補習社，補習 Miss 幫你操練。",
    apCost: 2,
    effects: [
      { type: "statChange", stat: "學業", amount: 6 },
      { type: "statChange", stat: "壓力", amount: 4 },
      { type: "addMoney", amount: -10 }
    ],
    goalProgress: ["學業"],
    relatedCharacterId: "char_tutor",
    fromCharacterId: null,
    conditions: [{ type: "statAtLeast", stat: "體力", amount: 20 }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: ["dlg_tutor_pressure"],
    possibleConsequences: [],
    guideTip: "需要一定體力先做得到，效果穩定，但都要留意壓力同開支。"
  },
  {
    id: "action_talk_to_mom",
    name: "同媽媽傾偈",
    category: "家庭",
    icon: "🗨️",
    description: "喺廚房同媽媽傾下今日發生咩事。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "家庭關係", amount: 4 },
      { type: "statChange", stat: "快樂", amount: 2 }
    ],
    goalProgress: ["家庭關係"],
    relatedCharacterId: "char_mom",
    fromCharacterId: null,
    conditions: [],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: ["dlg_new_term_talk", "dlg_family_dinner", "dlg_dad_quiet_support"],
    possibleConsequences: [],
    guideTip: "低成本嘅家庭行動，隨時可以做，慢慢累積家庭關係。"
  },
  {
    id: "action_visit_sspk",
    name: "去深水埗尋寶",
    category: "探索",
    icon: "🔧",
    description: "去深水埗鴨寮街周圍睇下有咩平嘢或者奇人異士。",
    apCost: 2,
    effects: [
      { type: "statChange", stat: "創意", amount: 4 },
      { type: "addMoney", amount: -5 }
    ],
    goalProgress: ["創意"],
    relatedCharacterId: "char_mystery_neighbor",
    fromCharacterId: null,
    conditions: [{ type: "currentLocation", locationId: "loc_sspk" }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: ["dlg_mystery_neighbor"],
    possibleConsequences: ["cons_mystery_neighbor_repair"],
    guideTip: "要身處深水埗先可以做，有機會遇到神秘街坊高手。"
  },
  {
    id: "action_practice_skill",
    name: "苦練拿手項目",
    category: "興趣",
    icon: "🏆",
    description: "揀返一樣自己叻嘅嘢，不斷練習磨練技巧。",
    apCost: 2,
    effects: [
      { type: "statChange", stat: "自信", amount: 5 },
      { type: "statChange", stat: "體力", amount: -4 }
    ],
    goalProgress: ["自信"],
    relatedCharacterId: null,
    fromCharacterId: null,
    routeSeedEffects: [{ seedId: "performanceSeed", amount: 1 }],
    conditions: [],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: ["cons_practice_skill_confidence"],
    guideTip: "持續練習可以提升自信，甚至引來同學仔請教你。"
  },
  {
    id: "action_night_snack",
    name: "同朋友宵夜",
    category: "朋友",
    icon: "🍜",
    description: "朋友夜晚忽然約你去食夜宵。",
    apCost: 2,
    effects: [
      { type: "statChange", stat: "社交", amount: 5 },
      { type: "statChange", stat: "快樂", amount: 5 },
      { type: "statChange", stat: "體力", amount: -5 }
    ],
    goalProgress: ["社交"],
    relatedCharacterId: "char_best_friend",
    fromCharacterId: null,
    conditions: [{ type: "statAtLeast", stat: "體力", amount: 15 }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: ["dlg_night_snack_invite"],
    possibleConsequences: ["cons_night_snack_closer"],
    guideTip: "深化友誼嘅好機會，但要有足夠體力先做得到。"
  },
  {
    id: "action_concert_ticket",
    name: "同朋友搶演唱會飛",
    category: "支線",
    icon: "🎫",
    description: "同朋友一齊喺電話度撳撳撳，希望可以搶到飛。",
    apCost: 2,
    effects: [
      { type: "statChange", stat: "快樂", amount: 8 },
      { type: "addMoney", amount: -15 }
    ],
    goalProgress: [],
    relatedCharacterId: "char_best_friend",
    fromCharacterId: null,
    routeSeedEffects: [{ seedId: "performanceSeed", amount: 1 }],
    conditions: [{ type: "currentLocation", locationId: "loc_causeway" }],
    conflicts: [],
    limitedWeeks: [10, 11, 12],
    possibleDialogueIds: ["dlg_concert_ticket_war"],
    possibleConsequences: ["cons_concert_ticket_hype"],
    guideTip: "限時支線，只有學期尾幾週先出現，要身處銅鑼灣先做到。"
  },
  {
    id: "action_mystery_stairs_investigate",
    name: "調查神秘樓梯",
    category: "支線",
    icon: "🪜",
    description: "同同學一齊去查傳說中嘅神秘樓梯。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "快樂", amount: 3 }
    ],
    goalProgress: [],
    relatedCharacterId: "char_classmate",
    fromCharacterId: null,
    conditions: [{ type: "notFlag", flag: "flag_explored_stairs" }],
    conflicts: [],
    limitedWeeks: [2, 3, 4],
    possibleDialogueIds: ["dlg_mysterious_stairs"],
    possibleConsequences: ["cons_stairs_investigate_curiosity"],
    guideTip: "限時搞笑支線，只喺開學初期出現，之後會解鎖音樂室相關後續。"
  },
  {
    id: "action_group_project",
    name: "小組合作",
    category: "朋友",
    icon: "🧑‍🤝‍🧑",
    description: "同同學一齊完成老師派嘅小組作業。",
    apCost: 2,
    effects: [
      { type: "statChange", stat: "學業", amount: 4 },
      { type: "statChange", stat: "社交", amount: 5 }
    ],
    goalProgress: ["社交", "學業"],
    relatedCharacterId: "char_classmate",
    fromCharacterId: "char_teacher",
    conditions: [{ type: "hasFlag", flag: "flag_group_unlocked" }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "要先透過老師嘅訊息解鎖，先可以做呢個同時推進學業同社交嘅行動。"
  },
  {
    id: "action_fix_game_console",
    name: "學修理舊遊戲機",
    category: "興趣",
    icon: "🕹️",
    description: "跟神秘街坊高手學下點樣修理舊式遊戲機。",
    apCost: 2,
    effects: [
      { type: "statChange", stat: "創意", amount: 6 },
      { type: "statChange", stat: "自信", amount: 3 }
    ],
    goalProgress: ["創意"],
    relatedCharacterId: "char_mystery_neighbor",
    fromCharacterId: "char_mystery_neighbor",
    conditions: [{ type: "hasFlag", flag: "flag_mystery_repair_unlocked" }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "要先響神秘街坊嗰度解鎖先出現，係一個獨特嘅創意技能路線。"
  },

  // ===== 地區特色行動（第三輪新增） =====
  {
    id: "action_mall_stationery",
    name: "去商場買文具",
    category: "學習",
    icon: "🛒",
    description: "去沙田商場買定啲文具，準備返學要用嘅嘢。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "學業", amount: 3 },
      { type: "addMoney", amount: -5 }
    ],
    goalProgress: ["學業"],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [{ type: "currentLocation", locationId: "loc_shatin" }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "沙田先有嘅日常行動，低成本補充學業進度。"
  },
  {
    id: "action_estate_playground",
    name: "屋苑平台探索",
    category: "探索",
    icon: "🏘️",
    description: "喺屋苑樓下平台周圍行下，睇下有咩街坊小朋友。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "快樂", amount: 3 },
      { type: "statChange", stat: "社交", amount: 2 }
    ],
    goalProgress: ["社交"],
    relatedCharacterId: "char_classmate",
    fromCharacterId: null,
    conditions: [{ type: "currentLocation", locationId: "loc_shatin" }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "沙田先有，容易撞到同班同學，適合朋友中心路線。"
  },
  {
    id: "action_cycle_track",
    name: "假日踩單車河",
    category: "興趣",
    icon: "🚲",
    description: "同屋企人一齊去沙田單車河踩單車，吹吹風。",
    apCost: 2,
    effects: [
      { type: "statChange", stat: "快樂", amount: 5 },
      { type: "statChange", stat: "家庭關係", amount: 3 },
      { type: "statChange", stat: "體力", amount: -3 }
    ],
    goalProgress: ["家庭關係"],
    relatedCharacterId: "char_mom",
    fromCharacterId: null,
    conditions: [{ type: "currentLocation", locationId: "loc_shatin" }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "沙田先有嘅家庭活動，快樂同家庭關係一齊提升。"
  },
  {
    id: "action_window_shopping",
    name: "睇櫥窗",
    category: "興趣",
    icon: "🪟",
    description: "喺銅鑼灣周圍睇下有咩潮流新品，吸收靈感。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "創意", amount: 2 },
      { type: "statChange", stat: "快樂", amount: 3 },
      { type: "addMoney", amount: -5 }
    ],
    goalProgress: ["創意"],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [{ type: "currentLocation", locationId: "loc_causeway" }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "銅鑼灣先有，低成本吸收創意靈感，但都要留意荷包。"
  },
  {
    id: "action_hobby_workshop",
    name: "參加興趣工作坊",
    category: "興趣",
    icon: "🖌️",
    description: "報名參加銅鑼灣嘅興趣工作坊，深入學一門手藝。",
    apCost: 2,
    effects: [
      { type: "statChange", stat: "創意", amount: 7 },
      { type: "statChange", stat: "自信", amount: 2 },
      { type: "addMoney", amount: -25 }
    ],
    goalProgress: ["創意"],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [{ type: "currentLocation", locationId: "loc_causeway" }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "銅鑼灣先有，創意收益高，但金錢消耗都唔細。"
  },
  {
    id: "action_street_performance",
    name: "街頭表演觀察",
    category: "探索",
    icon: "🎭",
    description: "喺銅鑼灣街頭睇表演，感受一下城市節奏。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "創意", amount: 3 },
      { type: "statChange", stat: "自信", amount: 2 }
    ],
    goalProgress: ["創意"],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [{ type: "currentLocation", locationId: "loc_causeway" }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "銅鑼灣先有，適合想累積自信同創意嘅玩家。"
  },
  {
    id: "action_stationery_shop",
    name: "放學逛文具店",
    category: "興趣",
    icon: "✏️",
    description: "放學經過旺角文具店，睇下有咩新奇文具同玩具。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "快樂", amount: 2 },
      { type: "statChange", stat: "創意", amount: 2 },
      { type: "addMoney", amount: -5 }
    ],
    goalProgress: ["創意"],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [{ type: "currentLocation", locationId: "loc_mongkok" }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "旺角先有嘅日常小確幸行動。"
  },
  {
    id: "action_street_snack",
    name: "同朋友食街頭小食",
    category: "朋友",
    icon: "🍡",
    description: "同同學喺旺角街頭一齊食小食、傾偈。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "快樂", amount: 4 },
      { type: "statChange", stat: "社交", amount: 2 },
      { type: "addMoney", amount: -5 }
    ],
    goalProgress: ["社交"],
    relatedCharacterId: "char_classmate",
    fromCharacterId: null,
    conditions: [{ type: "currentLocation", locationId: "loc_mongkok" }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "旺角先有，社交成本低、效果快，適合朋友中心路線。"
  },
  {
    id: "action_weird_rumor",
    name: "打聽奇怪傳聞",
    category: "支線",
    icon: "👂",
    description: "喺旺角街頭聽下最近有咩古靈精怪嘅傳聞。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "快樂", amount: 3 }
    ],
    goalProgress: [],
    relatedCharacterId: null,
    fromCharacterId: null,
    conditions: [{ type: "currentLocation", locationId: "loc_mongkok" }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: ["dlg_school_rumor", "dlg_mtr_lost"],
    possibleConsequences: [],
    guideTip: "旺角先有嘅搞笑支線入口，結果比較隨機。"
  },
  {
    id: "action_neighbor_favor",
    name: "幫街坊小忙",
    category: "探索",
    icon: "🤝",
    description: "喺深水埗幫街坊阿婆手抬吓嘢，順便同街坊熟落啲。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "人脈", amount: 4 },
      { type: "statChange", stat: "自信", amount: 2 }
    ],
    goalProgress: [],
    relatedCharacterId: "char_mystery_neighbor",
    fromCharacterId: null,
    conditions: [{ type: "currentLocation", locationId: "loc_sspk" }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "深水埗先有，累積街坊人脈，亦都係地區探索路線嘅代表行動。"
  },
  {
    id: "action_museum_visit",
    name: "參觀展覽",
    category: "探索",
    icon: "🖼️",
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
    conditions: [{ type: "currentLocation", locationId: "loc_central" }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "中環先有，見識同自信收益高，但成本都比較高。"
  },
  {
    id: "action_follow_parent_errand",
    name: "跟屋企人去辦事",
    category: "家庭",
    icon: "🧾",
    description: "跟媽媽或者爸爸去中環辦重要嘅事，觀察大人世界。",
    apCost: 1,
    effects: [
      { type: "statChange", stat: "家庭關係", amount: 4 },
      { type: "statChange", stat: "自信", amount: 2 }
    ],
    goalProgress: ["家庭關係"],
    relatedCharacterId: "char_mom",
    fromCharacterId: null,
    routeSeedEffects: [{ seedId: "sponsorSeed", amount: 1 }],
    conditions: [{ type: "currentLocation", locationId: "loc_central" }],
    conflicts: [],
    limitedWeeks: [],
    possibleDialogueIds: [],
    possibleConsequences: [],
    guideTip: "中環先有，家庭關係穩定收益，亦都係「見識城市」嘅入口。"
  }
];

export function getActionById(id) {
  return actions.find(a => a.id === id);
}

export const actionCategories = ["全部", "學習", "朋友", "家庭", "興趣", "探索", "休息", "支線"];
// 預設優先顯示嘅 tabs（推薦／限時／心願相關／最近關係／地區限定），其餘分類 tabs 排喺後面
export const actionTabs = [
  "推薦", "限時", "心願相關", "最近關係", "地區限定",
  "學習", "朋友", "家庭", "興趣", "探索", "休息", "特殊傾向", "已解鎖"
];
