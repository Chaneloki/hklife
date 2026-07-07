// data/consequences.js
// 延遲後果資料：玩家而家嘅選擇，可以喺幾週後、特定條件下先返嚟影響玩家
//
// consequence schema:
// {
//   id, source,                        // source 只作文件用途，記錄呢個後果由邊個 action/message 觸發
//   triggerAfterWeeks,                 // 由排程嗰刻計，過幾多週先觸發
//   triggerConditions: [condition],    // 觸發時仲要符合嘅額外條件（可為空）
//   resultMessageId: null | messageId, // 觸發時派送邊個訊息（可為 null，代表靜默套用效果）
//   effects: [effect],
//   addReviewLog: { type, title, body, tags } | null,
//   setFlags: [flag]
// }

export const consequences = [
  {
    id: "cons_recess_friend_group",
    source: "action_recess_play",
    triggerAfterWeeks: 3,
    triggerConditions: [],
    resultMessageId: "msg_teacher_group_invite",
    effects: [],
    addReviewLog: null,
    setFlags: []
  },
  {
    id: "cons_study_streak_praise",
    source: "action_study_hard",
    triggerAfterWeeks: 4,
    triggerConditions: [{ type: "statAtLeast", stat: "學業", amount: 68 }],
    resultMessageId: "msg_teacher_praise_mom_balance",
    effects: [],
    addReviewLog: null,
    setFlags: []
  },
  {
    id: "cons_help_family_support",
    source: "action_help_family",
    triggerAfterWeeks: 5,
    triggerConditions: [{ type: "statAtLeast", stat: "家庭關係", amount: 72 }],
    resultMessageId: "msg_family_support_fee",
    effects: [],
    addReviewLog: null,
    setFlags: []
  },
  {
    id: "cons_ignore_friend_fade",
    source: "passive_social_neglect",
    triggerAfterWeeks: 4,
    triggerConditions: [{ type: "statBelow", stat: "社交", amount: 45 }],
    resultMessageId: "msg_friend_fading",
    effects: [],
    addReviewLog: null,
    setFlags: []
  },
  {
    id: "cons_mysterious_stairs_music",
    source: "dlg_mysterious_stairs",
    triggerAfterWeeks: 2,
    triggerConditions: [],
    resultMessageId: "msg_mysterious_stairs_followup",
    effects: [],
    addReviewLog: null,
    setFlags: []
  },
  {
    id: "cons_cha_chaan_snack",
    source: "action_explore_area",
    triggerAfterWeeks: 2,
    triggerConditions: [{ type: "currentLocation", locationId: "loc_mongkok" }],
    resultMessageId: "msg_cha_chaan_teng_snack",
    effects: [],
    addReviewLog: null,
    setFlags: []
  },
  {
    id: "cons_mystery_neighbor_repair",
    source: "action_explore_area",
    triggerAfterWeeks: 3,
    triggerConditions: [{ type: "hasFlag", flag: "flag_met_mystery_neighbor" }],
    resultMessageId: "msg_mystery_neighbor_repair",
    effects: [],
    addReviewLog: null,
    setFlags: []
  },
  {
    id: "cons_group_deadline",
    source: "msg_teacher_group_invite",
    triggerAfterWeeks: 2,
    triggerConditions: [],
    resultMessageId: "msg_group_project_deadline",
    effects: [],
    addReviewLog: null,
    setFlags: []
  },
  {
    id: "cons_park_playdate_bond",
    source: "msg_classmate_park_invite",
    triggerAfterWeeks: 2,
    triggerConditions: [],
    resultMessageId: null,
    effects: [{ type: "statChange", stat: "社交", amount: 3 }],
    addReviewLog: { type: "後續", title: "同阿俊嘅友誼更加穩固", body: "上次公園玩滑板車之後，你哋見面都自然咗好多。", tags: ["社交+3", "來自第3週：公園邀請"] },
    setFlags: []
  },
  {
    id: "cons_night_snack_closer",
    source: "action_night_snack",
    triggerAfterWeeks: 2,
    triggerConditions: [],
    resultMessageId: null,
    effects: [{ type: "statChange", stat: "社交", amount: 3 }],
    addReviewLog: { type: "後續", title: "宵夜之後更加熟落", body: "同小美食完車仔麵之後，你哋成為更加要好嘅朋友。", tags: ["社交+3", "解鎖：真心朋友"] },
    setFlags: ["flag_trusted_friend"]
  },
  {
    id: "cons_hobby_showcase",
    source: "action_art_class",
    triggerAfterWeeks: 3,
    triggerConditions: [{ type: "statAtLeast", stat: "創意", amount: 60 }],
    resultMessageId: null,
    effects: [{ type: "statChange", stat: "自信", amount: 4 }],
    addReviewLog: { type: "興趣", title: "你完成咗一件像樣嘅作品", body: "經過幾個星期練習，你終於畫出咗一幅滿意嘅作品。", tags: ["自信+4", "解鎖：完成作品"] },
    setFlags: ["flag_finished_artwork"]
  },
  {
    id: "cons_explore_flag",
    source: "action_explore_area",
    triggerAfterWeeks: 1,
    triggerConditions: [],
    resultMessageId: null,
    effects: [],
    addReviewLog: null,
    setFlags: ["flag_explored_location"]
  },
  {
    id: "cons_rest_recovery_note",
    source: "action_rest_week",
    triggerAfterWeeks: 1,
    triggerConditions: [],
    resultMessageId: null,
    effects: [{ type: "statChange", stat: "快樂", amount: 2 }],
    addReviewLog: null,
    setFlags: []
  },
  {
    id: "cons_ball_game_friend",
    source: "action_ball_game",
    triggerAfterWeeks: 2,
    triggerConditions: [],
    resultMessageId: null,
    effects: [{ type: "statChange", stat: "社交", amount: 2 }],
    addReviewLog: { type: "朋友", title: "踢波識到嘅街坊仔", body: "你喺公園踢波識到多幾個街坊小朋友。", tags: ["社交+2"] },
    setFlags: []
  },
  {
    id: "cons_soy_sauce_thanks",
    source: "action_help_family",
    triggerAfterWeeks: 1,
    triggerConditions: [],
    resultMessageId: null,
    effects: [{ type: "statChange", stat: "家庭關係", amount: 2 }],
    addReviewLog: null,
    setFlags: []
  },
  {
    id: "cons_tidy_bag_relief",
    source: "action_tidy_bag",
    triggerAfterWeeks: 1,
    triggerConditions: [],
    resultMessageId: null,
    effects: [{ type: "statChange", stat: "壓力", amount: -1 }],
    addReviewLog: null,
    setFlags: []
  },
  {
    id: "cons_video_game_bond",
    source: "action_video_game",
    triggerAfterWeeks: 2,
    triggerConditions: [],
    resultMessageId: null,
    effects: [{ type: "statChange", stat: "社交", amount: 2 }],
    addReviewLog: { type: "朋友", title: "同同學傾機仔話題", body: "你同同學傾起打機話題，關係拉近咗少少。", tags: ["社交+2"] },
    setFlags: []
  },
  {
    id: "cons_practice_skill_confidence",
    source: "action_practice_skill",
    triggerAfterWeeks: 3,
    triggerConditions: [],
    resultMessageId: "msg_classmate_admire_skill",
    effects: [{ type: "statChange", stat: "自信", amount: 4 }],
    addReviewLog: { type: "興趣", title: "苦練終於見到成果", body: "反覆練習令你對自己拿手嘅項目更加有信心。", tags: ["自信+4"] },
    setFlags: []
  },
  {
    id: "cons_concert_ticket_hype",
    source: "action_concert_ticket",
    triggerAfterWeeks: 1,
    triggerConditions: [],
    resultMessageId: null,
    effects: [{ type: "statChange", stat: "快樂", amount: 2 }],
    addReviewLog: null,
    setFlags: []
  },
  {
    id: "cons_stairs_investigate_curiosity",
    source: "action_mystery_stairs_investigate",
    triggerAfterWeeks: 1,
    triggerConditions: [],
    resultMessageId: "msg_mysterious_stairs_followup",
    effects: [],
    addReviewLog: null,
    setFlags: []
  }
];

export function getConsequenceById(id) {
  return consequences.find(c => c.id === id);
}
