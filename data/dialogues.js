// data/dialogues.js
// 對話資料，遊戲主要內容以角色對話呈現，而唔係大段文字事件卡
//
// dialogue schema:
// {
//   id, title, stage (可為 null 表示唔限), location (可為 null 表示唔限),
//   speakerId,
//   conditions: [condition],           // 觸發呢段對話所需條件
//   lines: [ "句子1", "句子2" ],        // 角色講嘅短句，會逐句顯示
//   choices: [
//     {
//       text, effects: [effect], setFlags: [flagName],
//       nextDialogueId: null | dialogueId,
//       endDialogue: true|false,
//       conditions: [condition]        // 可選，選項本身要符合先顯示
//     }
//   ]
// }

export const dialogues = [
  // ===== 主線：開學／學業／家庭 系列 =====
  {
    id: "dlg_new_term_talk",
    title: "開學第一日",
    stage: "stage_p1",
    location: null,
    speakerId: "char_mom",
    conditions: [],
    lines: ["今日開學喇，緊唔緊張呀？", "呢個學年你想點樣度過呀？"],
    choices: [
      {
        text: "我想努力讀書，做個叻仔／叻女！",
        effects: [
          { type: "statChange", stat: "學業", amount: 4 },
          { type: "statChange", stat: "壓力", amount: 2 }
        ],
        setFlags: ["flag_focus_academic"],
        endDialogue: true
      },
      {
        text: "我想識多啲新朋友！",
        effects: [
          { type: "statChange", stat: "社交", amount: 4 },
          { type: "statChange", stat: "快樂", amount: 2 }
        ],
        setFlags: ["flag_focus_social"],
        endDialogue: true
      },
      {
        text: "開唔開心先，玩得幾多得幾多啦！",
        effects: [
          { type: "statChange", stat: "快樂", amount: 5 },
          { type: "statChange", stat: "紀律", amount: -2 }
        ],
        setFlags: ["flag_focus_happy"],
        endDialogue: true
      }
    ]
  },
  {
    id: "dlg_recess_invite",
    title: "小息邀請",
    stage: null,
    location: null,
    speakerId: "char_classmate",
    conditions: [],
    lines: ["喂！小息一齊去操場玩捉迷藏呀，快啲嚟啦！"],
    choices: [
      {
        text: "好呀！一齊去玩！",
        effects: [
          { type: "statChange", stat: "社交", amount: 4 },
          { type: "statChange", stat: "快樂", amount: 3 }
        ],
        setFlags: [],
        endDialogue: true
      },
      {
        text: "唔喇，我想留喺班房睇書。",
        effects: [
          { type: "statChange", stat: "學業", amount: 2 },
          { type: "statChange", stat: "社交", amount: -1 }
        ],
        setFlags: [],
        endDialogue: true
      }
    ]
  },
  {
    id: "dlg_teacher_talent",
    title: "老師發現天賦",
    stage: null,
    location: null,
    speakerId: "char_teacher",
    conditions: [{ type: "statAtLeast", stat: "學業", amount: 55 }],
    lines: ["我睇返你份功課，發現你原來幾有天分喎！", "有冇興趣參加校際比賽？"],
    choices: [
      {
        text: "好呀！我想試下！",
        effects: [
          { type: "statChange", stat: "自信", amount: 6 },
          { type: "statChange", stat: "壓力", amount: 3 }
        ],
        setFlags: ["flag_joined_competition"],
        endDialogue: true
      },
      {
        text: "我驚做得唔好，唔想試。",
        effects: [
          { type: "statChange", stat: "壓力", amount: -2 },
          { type: "statChange", stat: "自信", amount: -2 }
        ],
        setFlags: [],
        endDialogue: true
      }
    ]
  },
  {
    id: "dlg_weekend_choice",
    title: "週末點過好？",
    stage: null,
    location: null,
    speakerId: "char_mom",
    conditions: [],
    lines: ["聽日星期六，你想點過呀？", "去補習定係去玩下？由你揀。"],
    choices: [
      {
        text: "去補習，操練吓自己。",
        effects: [{ type: "statChange", stat: "學業", amount: 5 }, { type: "statChange", stat: "壓力", amount: 3 }],
        setFlags: [],
        endDialogue: true
      },
      {
        text: "去公園玩，放鬆吓。",
        effects: [{ type: "statChange", stat: "快樂", amount: 5 }, { type: "statChange", stat: "體力", amount: -2 }],
        setFlags: [],
        endDialogue: true
      },
      {
        text: "喺屋企打機耍廢。",
        effects: [{ type: "statChange", stat: "快樂", amount: 4 }, { type: "statChange", stat: "紀律", amount: -1 }],
        setFlags: [],
        endDialogue: true
      }
    ]
  },
  {
    id: "dlg_soy_sauce_errand",
    title: "幫手買豉油",
    stage: null,
    location: null,
    speakerId: "char_mom",
    conditions: [],
    lines: ["喂，同我落樓下士多買樽豉油返嚟啦，錢喺度。"],
    choices: [
      {
        text: "好呀，即刻去！",
        effects: [{ type: "statChange", stat: "家庭關係", amount: 4 }, { type: "statChange", stat: "紀律", amount: 2 }],
        setFlags: [],
        endDialogue: true
      },
      {
        text: "陣先啦，我做緊嘢。",
        effects: [{ type: "statChange", stat: "家庭關係", amount: -2 }],
        setFlags: [],
        endDialogue: true
      }
    ]
  },
  {
    id: "dlg_cha_chaan_teng_greeting",
    title: "茶餐廳嘅問候",
    stage: null,
    location: "loc_mongkok",
    speakerId: "char_cha_chaan_teng",
    conditions: [],
    lines: ["喲！你媽咪個仔／女呀？大個咗好多喎！", "嚟，請你飲杯凍檸茶！"],
    choices: [
      {
        text: "多謝肥叔！好好味呀！",
        effects: [{ type: "statChange", stat: "快樂", amount: 4 }, { type: "statChange", stat: "社交", amount: 2 }],
        setFlags: [],
        endDialogue: true
      },
      {
        text: "唔使喇，多謝晒。",
        effects: [{ type: "statChange", stat: "紀律", amount: 1 }],
        setFlags: [],
        endDialogue: true
      }
    ]
  },
  {
    id: "dlg_mystery_neighbor",
    title: "神秘街坊",
    stage: null,
    location: null,
    speakerId: "char_mystery_neighbor",
    conditions: [],
    lines: ["後生仔，過嚟過嚟，睇下呢招！", "我後生嗰陣可係樓下棋王㗎！"],
    choices: [
      {
        text: "哇！教埋我啦！",
        effects: [{ type: "statChange", stat: "創意", amount: 5 }, { type: "statChange", stat: "社交", amount: 2 }],
        setFlags: ["flag_met_mystery_neighbor"],
        endDialogue: true
      },
      {
        text: "得閒先啦，我要返屋企。",
        effects: [],
        setFlags: [],
        endDialogue: true
      }
    ]
  },
  {
    id: "dlg_night_snack_invite",
    title: "宵夜邀約",
    stage: null,
    location: null,
    speakerId: "char_best_friend",
    conditions: [],
    lines: ["喂喂喂！而家出嚟食車仔麵好唔好？", "我肚餓到爆炸呀！"],
    choices: [
      {
        text: "好呀！出發！",
        effects: [{ type: "statChange", stat: "快樂", amount: 5 }, { type: "statChange", stat: "社交", amount: 4 }, { type: "statChange", stat: "體力", amount: -3 }],
        setFlags: [],
        endDialogue: true
      },
      {
        text: "咁夜喇，聽日先啦。",
        effects: [{ type: "statChange", stat: "紀律", amount: 2 }],
        setFlags: [],
        endDialogue: true
      }
    ]
  },
  {
    id: "dlg_tutor_pressure",
    title: "補習社嘅壓力",
    stage: "stage_p2",
    location: null,
    speakerId: "char_tutor",
    conditions: [{ type: "statAtLeast", stat: "壓力", amount: 50 }],
    lines: ["我見你今日狀態唔係幾好喎，有咩心事？"],
    choices: [
      {
        text: "講出自己嘅壓力。",
        effects: [{ type: "statChange", stat: "壓力", amount: -6 }, { type: "statChange", stat: "家庭關係", amount: 2 }],
        setFlags: [],
        endDialogue: true
      },
      {
        text: "扮冇事，繼續操練。",
        effects: [{ type: "statChange", stat: "壓力", amount: 3 }, { type: "statChange", stat: "學業", amount: 3 }],
        setFlags: [],
        endDialogue: true
      }
    ]
  },
  {
    id: "dlg_dad_quiet_support",
    title: "爸爸嘅默默支持",
    stage: null,
    location: null,
    speakerId: "char_dad",
    conditions: [],
    lines: ["……", "（爸爸靜靜哋放咗個新文具盒喺你張枱度）"],
    choices: [
      {
        text: "多謝爸爸！",
        effects: [{ type: "statChange", stat: "家庭關係", amount: 5 }, { type: "statChange", stat: "快樂", amount: 2 }],
        setFlags: [],
        endDialogue: true
      }
    ]
  },
  {
    id: "dlg_best_friend_secret",
    title: "小美嘅心事",
    stage: null,
    location: null,
    speakerId: "char_best_friend",
    conditions: [{ type: "statAtLeast", stat: "社交", amount: 55 }],
    lines: ["其實……我最近心情唔係幾好，可以同你講吓心事咩？"],
    choices: [
      {
        text: "梗係得！我陪你傾。",
        effects: [{ type: "statChange", stat: "社交", amount: 5 }, { type: "statChange", stat: "快樂", amount: 3 }],
        setFlags: ["flag_trusted_friend"],
        endDialogue: true
      },
      {
        text: "我而家有啲忙……",
        effects: [{ type: "statChange", stat: "社交", amount: -2 }],
        setFlags: [],
        endDialogue: true
      }
    ]
  },
  {
    id: "dlg_talent_show",
    title: "才藝表演邀請",
    stage: "stage_p2",
    location: null,
    speakerId: "char_teacher",
    conditions: [{ type: "statAtLeast", stat: "創意", amount: 55 }],
    lines: ["下個月學校有才藝表演，你想唔想上台表演吓？"],
    choices: [
      {
        text: "想！我要試下自己！",
        effects: [{ type: "statChange", stat: "自信", amount: 6 }, { type: "statChange", stat: "壓力", amount: 3 }],
        setFlags: ["flag_talent_show"],
        endDialogue: true
      },
      {
        text: "我驚醜，唔想上台。",
        effects: [{ type: "statChange", stat: "壓力", amount: -2 }],
        setFlags: [],
        endDialogue: true
      }
    ]
  },
  {
    id: "dlg_family_dinner",
    title: "屋企人食飯傾偈",
    stage: null,
    location: null,
    speakerId: "char_mom",
    conditions: [],
    lines: ["食飯喇！今日喺學校開唔開心呀？"],
    choices: [
      {
        text: "開心呀，同同學玩得好開心！",
        effects: [{ type: "statChange", stat: "家庭關係", amount: 3 }, { type: "statChange", stat: "快樂", amount: 2 }],
        setFlags: [],
        endDialogue: true
      },
      {
        text: "有啲攰，功課好多。",
        effects: [{ type: "statChange", stat: "家庭關係", amount: 3 }, { type: "statChange", stat: "壓力", amount: -2 }],
        setFlags: [],
        endDialogue: true
      }
    ]
  },
  {
    id: "dlg_report_card",
    title: "成績表",
    stage: "stage_p2",
    location: null,
    speakerId: "char_mom",
    conditions: [{ type: "statBelow", stat: "學業", amount: 40 }],
    lines: ["呢次成績表……我哋傾吓好唔好？", "唔緊要，慢慢嚟，媽咪都陪住你。"],
    choices: [
      {
        text: "我會努力返嘅！",
        effects: [{ type: "statChange", stat: "學業", amount: 3 }, { type: "statChange", stat: "家庭關係", amount: 3 }],
        setFlags: [],
        endDialogue: true
      },
      {
        text: "（默默流淚）",
        effects: [{ type: "statChange", stat: "壓力", amount: 3 }, { type: "statChange", stat: "家庭關係", amount: 4 }],
        setFlags: [],
        endDialogue: true
      }
    ]
  },

  // ===== 支線：搞笑系列 =====
  {
    id: "dlg_mysterious_stairs",
    title: "神秘樓梯傳說",
    stage: null,
    location: null,
    speakerId: "char_classmate",
    conditions: [],
    lines: ["聽講學校三樓嗰道神秘樓梯，行落去會唔見咗個人㗎！", "夠唔夠膽同我去探險？"],
    choices: [
      {
        text: "有咩好驚，去睇下！",
        effects: [{ type: "statChange", stat: "快樂", amount: 4 }, { type: "statChange", stat: "自信", amount: 2 }],
        setFlags: ["flag_explored_stairs"],
        nextDialogueId: "dlg_mysterious_stairs_reveal",
        endDialogue: false
      },
      {
        text: "咪玩喇，聽落去好得人驚。",
        effects: [{ type: "statChange", stat: "壓力", amount: 1 }],
        setFlags: [],
        endDialogue: true
      }
    ]
  },
  {
    id: "dlg_mysterious_stairs_reveal",
    title: "原來只係音樂室",
    stage: null,
    location: null,
    speakerId: "char_classmate",
    conditions: [],
    lines: ["……原來呢度通去音樂室㗎咋。", "白行咗，我哋仲以為會見到鬼！"],
    choices: [
      {
        text: "哈哈哈，笑死！",
        effects: [{ type: "statChange", stat: "快樂", amount: 5 }, { type: "statChange", stat: "社交", amount: 2 }],
        setFlags: [],
        endDialogue: true
      }
    ]
  },
  {
    id: "dlg_mtr_lost",
    title: "港鐵迷路記",
    stage: null,
    location: null,
    speakerId: "char_best_friend",
    conditions: [],
    lines: ["喂……我哋係咪搭錯車呀？點解越搭越荒蕪㗎？"],
    choices: [
      {
        text: "冷靜啲，睇返路線圖。",
        effects: [{ type: "statChange", stat: "自信", amount: 3 }, { type: "statChange", stat: "壓力", amount: -1 }],
        setFlags: [],
        endDialogue: true
      },
      {
        text: "慌失失問路人。",
        effects: [{ type: "statChange", stat: "社交", amount: 3 }, { type: "statChange", stat: "快樂", amount: 2 }],
        setFlags: [],
        endDialogue: true
      }
    ]
  },
  {
    id: "dlg_tutorial_center_gossip",
    title: "補習社風波",
    stage: null,
    location: null,
    speakerId: "char_tutor",
    conditions: [],
    lines: ["聽講隔籬班嘅同學仔為咗爭座位打起嚟……", "你話係咪好誇張呀？"],
    choices: [
      {
        text: "都幾誇張，讀書啫使唔使咁緊張。",
        effects: [{ type: "statChange", stat: "快樂", amount: 2 } , { type: "statChange", stat: "社交", amount: 1 }],
        setFlags: [],
        endDialogue: true
      },
      {
        text: "座位真係好重要㗎嘛！",
        effects: [{ type: "statChange", stat: "學業", amount: 2 }],
        setFlags: [],
        endDialogue: true
      }
    ]
  },
  {
    id: "dlg_school_rumor",
    title: "學校奇怪傳聞",
    stage: null,
    location: null,
    speakerId: "char_classmate",
    conditions: [],
    lines: ["聽講校長個假髮其實係隻貓嚟㗎！", "係咪真㗎？我都唔知邊個up嘅。"],
    choices: [
      {
        text: "哈哈哈，一定係假嘅啦！",
        effects: [{ type: "statChange", stat: "快樂", amount: 4 }],
        setFlags: [],
        endDialogue: true
      },
      {
        text: "認真回應：唔好亂up嘢喇。",
        effects: [{ type: "statChange", stat: "紀律", amount: 2 }],
        setFlags: [],
        endDialogue: true
      }
    ]
  },
  {
    id: "dlg_concert_ticket_war",
    title: "搶演唱會飛大作戰",
    stage: "stage_p3",
    location: "loc_causeway",
    speakerId: "char_best_friend",
    conditions: [],
    lines: ["準備好未？十二點準時撳呀！", "三、二、一……撳！！！"],
    choices: [
      {
        text: "搶到喇！！！",
        effects: [{ type: "statChange", stat: "快樂", amount: 8 }, { type: "statChange", stat: "金錢", amount: -10 }],
        setFlags: ["flag_got_concert_ticket"],
        endDialogue: true
      },
      {
        text: "唉，網頁死咗機……",
        effects: [{ type: "statChange", stat: "壓力", amount: 3 }],
        setFlags: [],
        endDialogue: true
      }
    ]
  }
];

export function getDialogueById(id) {
  return dialogues.find(d => d.id === id);
}
