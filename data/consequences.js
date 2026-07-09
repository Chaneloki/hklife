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
  // cons_tidy_bag_relief（source: action_tidy_bag）已刪除：根據 hk_primary_action_hierarchy_v1
  // 文件核心決定，「整理書包」呢類學校準備雜務唔再係玩家主 action，成個 action 已經喺
  // data/actions.js 移除，呢條 consequence 冧一齊刪咗。
  {
    id: "cons_video_game_bond",
    source: "action_video_game",
    triggerAfterWeeks: 2,
    triggerConditions: [],
    resultMessageId: null,
    effects: [{ type: "statChange", stat: "社交", amount: 2 }],
    addReviewLog: { type: "朋友", title: "同同學傾機仔話題", body: "你同同學傾起打機話題，關係拉近咗少少。", tags: ["社交+2"] },
    setFlags: []
  }
];

export function getConsequenceById(id) {
  return consequences.find(c => c.id === id);
}
