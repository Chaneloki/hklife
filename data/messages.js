// data/messages.js
// 訊息／對話資料（inbox 形式），同 data/dialogues.js 嘅場景對話分開處理
// urgent 訊息會擋住「進入下一週」，玩家一定要先回覆
//
// message schema:
// {
//   id, senderId, title, urgency: "normal" | "urgent",
//   triggerConditions: [condition],
//   lines: [string],
//   relationshipVariants: [               // 可選：根據關係／記憶揀唔同語氣嘅開場白，由上至下第一個符合條件就用，冇符合就用預設 lines
//     { conditions: [condition], lines: [string] }
//   ],
//   choices: [
//     {
//       text, tone, attitudeTag,           // attitudeTag 對應 data/attitudes.js，唔代表好壞，只代表取向
//       visibleToneLabel,                  // UI 顯示嘅簡短標籤，中性描述，唔暗示邊個最好
//       conditions: [condition],           // 可選，選項本身要符合先顯示（例如 relationshipAtLeast）
//       effects: [effect],                 // 通用效果（數值／解鎖／金錢……）
//       relationshipEffects: [ { characterId, dimension, amount } ],
//       addMemory: [ { characterId, text } ],
//       setFlags: [flag],
//       lockFlags: [flag],                 // 鎖住某啲未來選項（底層都係 flag）
//       restrictFutureChoices: [flag],     // 標記呢個回答形成咗某種模式（例如逃避型），影響之後對話
//       unlockLocationEvent: [ { locationId, eventId } ],
//       addReviewLog: { type, title, body, tags },
//       delayedConsequences: [consequenceId],
//       nextMessageId: null | messageId,
//       closeMessage: true
//     }
//   ]
// }
// 註：attitudeTag 帶嚟嘅額外 NPC 反應（respectsBoundaries／sensitiveToSilence／valuesHonesty……）
// 由 data/npcReactionRules.js 統一驅動，唔使逐個 choice 度重複寫。

export const messages = [
  // ===== 直接觸發（每週條件檢查） =====
  {
    id: "msg_mom_rest_reminder",
    senderId: "char_mom",
    title: "媽媽：你係咪太攰啊？",
    urgency: "urgent",
    triggerConditions: [{ type: "statAtLeast", stat: "壓力", amount: 60 }],
    lines: ["囡囡／仔仔，媽咪見你呢排成日皺埋眉頭噉，係咪讀書讀得好攰？", "不如今個週末唔好安排咁多嘢，休息一下？"],
    relationshipVariants: [
      { conditions: [{ type: "relationshipAtLeast", characterId: "char_mom", dimension: "trust", amount: 60 }], lines: ["我見你最近好努力，不過都要記得休息，你自己安排得到，我相信你。"] },
      { conditions: [{ type: "relationshipBelow", characterId: "char_mom", dimension: "trust", amount: 30 }], lines: ["你最近係咪又太夜瞓？唔好淨係話「知道」，我哋今晚傾一傾。"] }
    ],
    choices: [
      {
        text: "好呀，我今個週末休息一下。",
        tone: "跟隨安排",
        attitudeTag: "followAdult",
        visibleToneLabel: "答應，今個週末鬆一鬆",
        effects: [{ type: "statChange", stat: "壓力", amount: -6 }],
        relationshipEffects: [{ characterId: "char_mom", dimension: "trust", amount: 4 }, { characterId: "char_mom", dimension: "closeness", amount: 2 }],
        addMemory: [{ characterId: "char_mom", text: "你肯聽媽媽講，攞返啲時間休息" }],
        setFlags: [],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [],
        addReviewLog: { type: "家庭", title: "媽媽提醒你休息", body: "你聽咗媽媽建議，安排咗一個輕鬆嘅週末。", tags: ["壓力-6", "媽媽信任度+4"] },
        delayedConsequences: [],
        closeMessage: true
      },
      {
        text: "唔使喇，我仲有好多嘢要做。",
        tone: "避免糾纏",
        attitudeTag: "avoidConflict",
        visibleToneLabel: "帶過話題，繼續做自己嘅嘢",
        conditions: [],
        effects: [{ type: "statChange", stat: "壓力", amount: 2 }],
        relationshipEffects: [{ characterId: "char_mom", dimension: "trust", amount: -3 }],
        addMemory: [{ characterId: "char_mom", text: "你成日話唔使擔心，但睇落都幾攰" }],
        setFlags: [],
        lockFlags: [],
        restrictFutureChoices: ["flag_mom_avoidant_pattern"],
        unlockLocationEvent: [],
        addReviewLog: { type: "家庭", title: "你婉拒咗媽媽嘅關心", body: "你話自己仲有好多嘢做，媽媽有啲擔心。", tags: ["壓力+2", "媽媽信任度-3"] },
        delayedConsequences: [],
        closeMessage: true
      },
      {
        text: "我自己搞掂得㗎，唔使擔心。",
        tone: "堅持自己嚟",
        attitudeTag: "insistSelf",
        visibleToneLabel: "話畀媽媽知你有自己嘅節奏",
        conditions: [{ type: "relationshipAtLeast", characterId: "char_mom", dimension: "trust", amount: 40 }],
        effects: [{ type: "statChange", stat: "壓力", amount: -2 }],
        relationshipEffects: [{ characterId: "char_mom", dimension: "trust", amount: 3 }, { characterId: "char_mom", dimension: "dependency", amount: -2 }],
        addMemory: [{ characterId: "char_mom", text: "你開始識得自己安排時間，唔使媽媽成日提" }],
        setFlags: [],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [],
        addReviewLog: { type: "家庭", title: "你話自己搞得掂", body: "媽媽睇得出你有自己嘅安排，都算放心返少少。", tags: ["媽媽信任度+3"] },
        delayedConsequences: [],
        closeMessage: true
      },
      {
        text: "其實我真係有啲攰。",
        tone: "誠實說累",
        attitudeTag: "honestTired",
        visibleToneLabel: "老實講出自己嘅狀態",
        effects: [],
        relationshipEffects: [{ characterId: "char_mom", dimension: "trust", amount: 5 }, { characterId: "char_mom", dimension: "closeness", amount: 3 }],
        addMemory: [{ characterId: "char_mom", text: "你老實同媽媽講自己攰" }],
        setFlags: [],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [],
        addReviewLog: { type: "家庭", title: "你老實講出自己攰", body: "你冇實際解決到壓力，但媽媽感受到你嘅信任。", tags: ["媽媽信任度+5"] },
        delayedConsequences: [],
        closeMessage: true
      }
    ]
  },
  {
    id: "msg_classmate_park_invite",
    senderId: "char_classmate",
    title: "李明：放學去公園呀？",
    urgency: "urgent",
    triggerConditions: [{ type: "currentWeek", week: 3 }, { type: "currentTerm", termId: "term_p1_s1" }],
    lines: ["喂！聽日放學我哋去公園玩滑板車呀，一齊嚟啦！"],
    relationshipVariants: [
      { conditions: [{ type: "relationshipAtLeast", characterId: "char_classmate", dimension: "closeness", amount: 55 }], lines: ["喂，你今日放學得唔得閒？我哋諗住去公園玩陣，你嚟啦。"] },
      { conditions: [{ type: "relationshipAtLeast", characterId: "char_classmate", dimension: "misunderstanding", amount: 50 }], lines: ["算啦，你應該又唔得閒。我只是問一問。"] }
    ],
    choices: [
      {
        text: "好呀，一齊去！",
        tone: "熱情接受",
        attitudeTag: "acceptWarmly",
        visibleToneLabel: "爽快應承",
        effects: [{ type: "statChange", stat: "快樂", amount: 4 }, { type: "statChange", stat: "體力", amount: -2 }, { type: "statChange", stat: "學業", amount: -1 }],
        relationshipEffects: [{ characterId: "char_classmate", dimension: "closeness", amount: 6 }, { characterId: "char_classmate", dimension: "trust", amount: 2 }],
        addMemory: [{ characterId: "char_classmate", text: "你哋喺公園一齊玩過滑板車" }],
        setFlags: ["flag_park_playdate"],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [],
        addReviewLog: { type: "朋友", title: "你答應咗李明去公園", body: "你哋喺公園玩到滿頭大汗，好開心，但夜返屋企少咗溫習時間。", tags: ["李明親近度+6", "快樂+4", "體力-2"] },
        delayedConsequences: ["cons_park_playdate_bond"],
        closeMessage: true
      },
      {
        text: "唔喇，我想留喺屋企溫習。",
        tone: "禮貌拒絕",
        attitudeTag: "refusePolitely",
        visibleToneLabel: "婉拒，留時間做自己嘅嘢",
        effects: [{ type: "statChange", stat: "學業", amount: 2 }],
        relationshipEffects: [{ characterId: "char_classmate", dimension: "closeness", amount: -2 }],
        addMemory: [{ characterId: "char_classmate", text: "你揀咗溫習冇同佢去公園" }],
        setFlags: [],
        lockFlags: [],
        restrictFutureChoices: ["flag_park_invite_declined"],
        unlockLocationEvent: [],
        addReviewLog: { type: "決策", title: "你揀咗留喺屋企溫習", body: "你錯過咗同李明去公園嘅機會，但溫習咗一陣。李明冇嬲，不過呢個提議會少啲。", tags: ["學業+2", "李明親近度-2"] },
        delayedConsequences: [],
        closeMessage: true
      },
      {
        text: "夜啲先啦，我哋改日癲返轉！",
        tone: "開玩笑帶過",
        attitudeTag: "jokeAround",
        visibleToneLabel: "開玩笑噉問可唔可以下次",
        conditions: [{ type: "relationshipAtLeast", characterId: "char_classmate", dimension: "closeness", amount: 50 }],
        effects: [{ type: "statChange", stat: "快樂", amount: 2 }],
        relationshipEffects: [{ characterId: "char_classmate", dimension: "closeness", amount: 3 }],
        addMemory: [{ characterId: "char_classmate", text: "你哋約定咗改日一齊癲" }],
        setFlags: [],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [],
        addReviewLog: { type: "朋友", title: "你同李明開玩笑噉改期", body: "夠熟嘅朋友先可以咁講，李明笑住應承。", tags: ["李明親近度+3"] },
        delayedConsequences: [],
        closeMessage: true
      },
      {
        text: "我今日有啲攰，唔係唔想去。",
        tone: "誠實說累",
        attitudeTag: "honestTired",
        visibleToneLabel: "講出自己今日嘅狀態",
        effects: [{ type: "statChange", stat: "體力", amount: 2 }],
        relationshipEffects: [{ characterId: "char_classmate", dimension: "closeness", amount: 1 }, { characterId: "char_classmate", dimension: "trust", amount: 2 }],
        addMemory: [{ characterId: "char_classmate", text: "你老實話佢知自己攰" }],
        setFlags: [],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [],
        addReviewLog: { type: "朋友", title: "你老實講出自己嘅狀態", body: "李明理解噉點頭，冇再迫你去，反而覺得你老實。", tags: ["體力+2", "李明信任度+2"] },
        delayedConsequences: [],
        closeMessage: true
      }
    ]
  },
  {
    id: "msg_tutor_extra_class",
    senderId: "char_tutor",
    title: "補習 Miss：要唔要加堂？",
    urgency: "normal",
    triggerConditions: [{ type: "currentWeek", week: 6 }, { type: "currentTerm", termId: "term_p1_s1" }],
    lines: ["下學期就考試喇，我建議你加多一堂補習，會操練多啲題目。", "不過都要留意返，加堂會多啲功課同開支㗎。"],
    choices: [
      {
        text: "好呀，加堂啦！",
        tone: "跟隨安排",
        attitudeTag: "followAdult",
        visibleToneLabel: "答應加堂，操練多啲",
        effects: [{ type: "statChange", stat: "學業", amount: 6 }, { type: "statChange", stat: "壓力", amount: 5 }, { type: "addMoney", amount: -15 }],
        relationshipEffects: [{ characterId: "char_tutor", dimension: "trust", amount: 5 }],
        addMemory: [{ characterId: "char_tutor", text: "你肯加堂操練" }],
        setFlags: ["flag_extra_tutorial"],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [],
        addReviewLog: { type: "學習", title: "你決定加堂補習", body: "你加咗堂，學業有進步，但都幾攰。", tags: ["學業+6", "壓力+5", "金錢-15"] },
        delayedConsequences: [],
        closeMessage: true
      },
      {
        text: "暫時唔使喇，多謝 Miss。",
        tone: "禮貌拒絕",
        attitudeTag: "refusePolitely",
        visibleToneLabel: "婉拒，保持返目前節奏",
        effects: [{ type: "statChange", stat: "體力", amount: 3 }, { type: "statChange", stat: "壓力", amount: -2 }],
        relationshipEffects: [{ characterId: "char_tutor", dimension: "trust", amount: -2 }],
        addMemory: [{ characterId: "char_tutor", text: "你婉拒咗加堂建議" }],
        setFlags: [],
        lockFlags: [],
        restrictFutureChoices: ["flag_tutor_declined_once"],
        unlockLocationEvent: [],
        addReviewLog: { type: "決策", title: "你婉拒咗加堂", body: "你決定唔加堂，體力恢復咗唔少，之後或者可以搵到更啱自己嘅學習方式。", tags: ["體力+3", "壓力-2"] },
        delayedConsequences: [],
        closeMessage: true
      }
    ]
  },
  {
    id: "msg_group_project_deadline",
    senderId: "char_teacher",
    title: "陳老師：小組作業要交喇！",
    urgency: "urgent",
    triggerConditions: [{ type: "hasFlag", flag: "flag_group_deadline_pending" }],
    lines: ["提提你哋，小組合作嘅作業聽日就要交喇，準備好未？"],
    choices: [
      {
        text: "準備好晒喇！",
        tone: "堅持自己嚟",
        attitudeTag: "insistSelf",
        visibleToneLabel: "話畀老師知你哋已經搞掂",
        effects: [{ type: "statChange", stat: "學業", amount: 5 }, { type: "statChange", stat: "體力", amount: -3 }],
        relationshipEffects: [{ characterId: "char_teacher", dimension: "respect", amount: 4 }, { characterId: "char_classmate", dimension: "trust", amount: 3 }],
        addMemory: [{ characterId: "char_teacher", text: "小組作業準時完成" }, { characterId: "char_classmate", text: "你哋合力交咗小組作業" }],
        setFlags: ["flag_group_deadline_pending_off"],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [],
        addReviewLog: { type: "學習", title: "你準時交咗小組作業", body: "同組員合力完成咗作業，感覺好有成功感，但夜咗瞓。", tags: ["陳老師尊重度+4", "李明信任度+3", "體力-3"] },
        delayedConsequences: [],
        closeMessage: true
      },
      {
        text: "唔係幾夠時間準備……",
        tone: "誠實說累",
        attitudeTag: "honestTired",
        visibleToneLabel: "講出實際情況",
        effects: [{ type: "statChange", stat: "壓力", amount: 4 }],
        relationshipEffects: [{ characterId: "char_teacher", dimension: "respect", amount: -3 }, { characterId: "char_classmate", dimension: "trust", amount: -2 }],
        addMemory: [{ characterId: "char_teacher", text: "呢次小組作業趕唔切" }],
        setFlags: ["flag_group_deadline_pending_off"],
        lockFlags: [],
        restrictFutureChoices: ["flag_group_project_late"],
        unlockLocationEvent: [],
        addReviewLog: { type: "後續", title: "小組作業趕唔切", body: "你哋嘅作業唔夠完整，組員都有啲失望。", tags: ["壓力+4", "陳老師尊重度-3"] },
        delayedConsequences: [],
        closeMessage: true
      }
    ]
  },

  // ===== 由延遲後果觸發 =====
  {
    id: "msg_teacher_group_invite",
    senderId: "char_teacher",
    title: "陳老師：想唔想試吓小組合作？",
    urgency: "normal",
    triggerConditions: [],
    lines: ["我見你同同學相處得幾好喎，最近有個小組合作項目，有冇興趣試吓？"],
    choices: [
      {
        text: "好呀，我想試！",
        tone: "熱情接受",
        attitudeTag: "acceptWarmly",
        visibleToneLabel: "爽快加入",
        effects: [{ type: "statChange", stat: "體力", amount: -2 }],
        relationshipEffects: [{ characterId: "char_teacher", dimension: "respect", amount: 4 }, { characterId: "char_classmate", dimension: "closeness", amount: 3 }],
        addMemory: [{ characterId: "char_teacher", text: "肯主動加入小組合作" }],
        setFlags: ["flag_group_unlocked", "flag_group_deadline_pending"],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [],
        addReviewLog: { type: "後續", title: "你加入咗小組合作", body: "你之前同同學玩得好嘅緣份，帶嚟咗一個新機會，但都要多花啲心機時間。", tags: ["解鎖：小組合作", "來自第3週：小息一起玩"] },
        delayedConsequences: ["cons_group_deadline"],
        closeMessage: true
      },
      {
        text: "我想自己一個人做多啲。",
        tone: "禮貌拒絕",
        attitudeTag: "refusePolitely",
        visibleToneLabel: "話畀老師知你想點做",
        effects: [{ type: "statChange", stat: "自信", amount: 2 }],
        relationshipEffects: [{ characterId: "char_teacher", dimension: "respect", amount: 1 }],
        addMemory: [],
        setFlags: [],
        lockFlags: [],
        restrictFutureChoices: ["flag_teacher_group_declined"],
        unlockLocationEvent: [],
        addReviewLog: { type: "決策", title: "你婉拒咗小組合作邀請", body: "你決定專注自己嘅節奏，老師睇得出你清楚自己想點做。", tags: ["自信+2"] },
        delayedConsequences: [],
        closeMessage: true
      }
    ]
  },
  {
    id: "msg_cha_chaan_teng_snack",
    senderId: "char_cha_chaan_teng",
    title: "阿成：路過嚟食啲嘢啦！",
    urgency: "normal",
    triggerConditions: [],
    lines: ["喂！番學仔／女，聽講你上次幫手手腳好快喎，阿成請你食件蛋撻！"],
    relationshipVariants: [
      { conditions: [{ type: "relationshipAtLeast", characterId: "char_cha_chaan_teng", dimension: "closeness", amount: 50 }], lines: ["番學仔／女！照舊凍檸茶定係試下新出嘅菠蘿油？"] }
    ],
    choices: [
      {
        text: "多謝阿成！我鍾意凍檸茶。",
        tone: "熱情接受",
        attitudeTag: "acceptWarmly",
        visibleToneLabel: "開心收下",
        effects: [{ type: "statChange", stat: "快樂", amount: 3 }, { type: "statChange", stat: "學業", amount: -1 }],
        relationshipEffects: [{ characterId: "char_cha_chaan_teng", dimension: "closeness", amount: 5 }],
        addMemory: [{ characterId: "char_cha_chaan_teng", text: "鍾意飲凍檸茶" }],
        setFlags: ["flag_cha_chaan_teng_regular"],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [{ locationId: "loc_mongkok", eventId: "cha_chaan_regular" }],
        addReviewLog: { type: "支線", title: "阿成記得你", body: "你成為咗茶餐廳嘅熟客仔，街坊人脈慢慢建立緊，不過都傾偈傾咗一輪時間。", tags: ["阿成親近度+5", "來自：附近探索"] },
        delayedConsequences: [],
        closeMessage: true
      },
      {
        text: "唔使喇，多謝晒。",
        tone: "禮貌拒絕",
        attitudeTag: "refusePolitely",
        visibleToneLabel: "客氣咁婉拒",
        effects: [{ type: "statChange", stat: "自信", amount: 1 }],
        relationshipEffects: [{ characterId: "char_cha_chaan_teng", dimension: "closeness", amount: 1 }],
        addMemory: [],
        setFlags: [],
        lockFlags: [],
        restrictFutureChoices: ["flag_cha_chaan_polite_distance"],
        unlockLocationEvent: [],
        addReviewLog: { type: "支線", title: "你婉拒咗阿成嘅蛋撻", body: "你客氣咁拒絕咗，但阿成都仲係好熱情，你都幾滿意自己嘅界線。", tags: [] },
        delayedConsequences: [],
        closeMessage: true
      }
    ]
  },
  {
    id: "msg_cha_chaan_teng_remembers",
    senderId: "char_cha_chaan_teng",
    title: "阿成：老規矩？",
    urgency: "normal",
    triggerConditions: [{ type: "characterHasMemory", characterId: "char_cha_chaan_teng", keyword: "凍檸茶" }],
    lines: ["一見到你，阿成就講：「梗係老規矩啦，凍檸茶啱唔啱？」"],
    choices: [
      {
        text: "係呀，阿成你記性真好！",
        tone: "熱情接受",
        attitudeTag: "acceptWarmly",
        visibleToneLabel: "開心咁應承",
        effects: [{ type: "statChange", stat: "快樂", amount: 3 }],
        relationshipEffects: [{ characterId: "char_cha_chaan_teng", dimension: "closeness", amount: 4 }],
        addMemory: [{ characterId: "char_cha_chaan_teng", text: "阿成記得你嘅口味" }],
        setFlags: [],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [],
        addReviewLog: { type: "支線", title: "阿成記得你嘅老規矩", body: "街坊嘅人情味就係咁，一句「老規矩」已經好窩心。", tags: ["阿成親近度+4"] },
        delayedConsequences: [],
        closeMessage: true
      },
      {
        text: "今日想試下第樣嘢喎。",
        tone: "冒險試試",
        attitudeTag: "takeRisk",
        visibleToneLabel: "打破慣例試新嘢",
        effects: [{ type: "statChange", stat: "快樂", amount: 2 }],
        relationshipEffects: [{ characterId: "char_cha_chaan_teng", dimension: "closeness", amount: 2 }],
        addMemory: [{ characterId: "char_cha_chaan_teng", text: "你今次想試下第樣嘢" }],
        setFlags: [],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [],
        addReviewLog: { type: "支線", title: "你今次想試下第樣嘢", body: "阿成都幾意外，笑住幫你揀咗個新選擇。", tags: ["阿成親近度+2"] },
        delayedConsequences: [],
        closeMessage: true
      }
    ]
  },
  {
    id: "msg_mystery_neighbor_repair",
    senderId: "char_mystery_neighbor",
    title: "神秘街坊：仲想唔想學嘢？",
    urgency: "normal",
    triggerConditions: [],
    lines: ["後生仔，我間唔中都會執吓啲舊遊戲機，你想唔想學？"],
    choices: [
      {
        text: "想呀！教埋我啦！",
        tone: "熱情接受",
        attitudeTag: "acceptWarmly",
        visibleToneLabel: "即刻應承",
        effects: [{ type: "statChange", stat: "創意", amount: 3 }, { type: "statChange", stat: "體力", amount: -2 }],
        relationshipEffects: [{ characterId: "char_mystery_neighbor", dimension: "trust", amount: 4 }, { characterId: "char_mystery_neighbor", dimension: "respect", amount: 1 }],
        addMemory: [{ characterId: "char_mystery_neighbor", text: "你肯學嘢，幾有耐性" }],
        setFlags: ["flag_mystery_repair_unlocked"],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [{ locationId: "loc_sspk", eventId: "repair_entry" }],
        addReviewLog: { type: "支線", title: "神秘街坊願意教你修理", body: "你解鎖咗一個新嘅興趣技能：修理舊遊戲機，但學咗成個下晝都幾攰。", tags: ["解鎖：學修理舊遊戲機", "神秘街坊信任度+4"] },
        delayedConsequences: [],
        closeMessage: true
      },
      {
        text: "點解你會識整呢啲嘢㗎？",
        tone: "先觀察",
        attitudeTag: "observeFirst",
        visibleToneLabel: "先問清楚先算",
        effects: [],
        relationshipEffects: [{ characterId: "char_mystery_neighbor", dimension: "trust", amount: 3 }, { characterId: "char_mystery_neighbor", dimension: "respect", amount: 2 }],
        addMemory: [{ characterId: "char_mystery_neighbor", text: "你問咗好多問題先決定" }],
        setFlags: ["flag_mystery_repair_unlocked"],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [{ locationId: "loc_sspk", eventId: "repair_entry" }],
        addReviewLog: { type: "支線", title: "你好奇咁問清楚先", body: "神秘街坊反而幾欣賞你嘅好奇心，答應教多啲你。", tags: ["神秘街坊尊重度+2"] },
        delayedConsequences: [],
        closeMessage: true
      },
      {
        text: "得閒先啦，多謝伯伯。",
        tone: "禮貌拒絕",
        attitudeTag: "refusePolitely",
        visibleToneLabel: "婉拒，遲啲先算",
        effects: [{ type: "statChange", stat: "體力", amount: 2 }],
        relationshipEffects: [{ characterId: "char_mystery_neighbor", dimension: "trust", amount: -2 }],
        addMemory: [],
        setFlags: [],
        lockFlags: [],
        restrictFutureChoices: ["flag_mystery_neighbor_declined"],
        unlockLocationEvent: [],
        addReviewLog: { type: "支線", title: "你婉拒咗神秘街坊", body: "你暫時冇興趣學修理，但伯伯話隨時歡迎你，你都省返啲時間。", tags: ["體力+2"] },
        delayedConsequences: [],
        closeMessage: true
      }
    ]
  },
  {
    id: "msg_teacher_praise_mom_balance",
    senderId: "char_teacher",
    title: "陳老師：你嘅努力我都睇到㗎",
    urgency: "normal",
    triggerConditions: [],
    lines: ["呢排見你成績進步咗好多，好努力喎！", "不過都要留意返身體，唔好逼得自己太緊。"],
    choices: [
      {
        text: "多謝老師，我會注意嘅。",
        tone: "跟隨安排",
        attitudeTag: "followAdult",
        visibleToneLabel: "接受老師嘅提醒",
        effects: [{ type: "statChange", stat: "自信", amount: 5 }, { type: "statChange", stat: "壓力", amount: -3 }],
        relationshipEffects: [{ characterId: "char_teacher", dimension: "respect", amount: 3 }],
        addMemory: [{ characterId: "char_teacher", text: "你肯接受老師嘅提醒" }],
        setFlags: ["flag_balance_reminder"],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [],
        addReviewLog: { type: "學習", title: "老師稱讚咗你嘅努力", body: "老師肯定你嘅進步，同時提醒你要注意休息平衡。", tags: ["自信+5", "陳老師尊重度+3"] },
        delayedConsequences: [],
        closeMessage: true
      },
      {
        text: "（冇多講，只係微笑點頭）",
        tone: "沉默",
        attitudeTag: "staySilent",
        visibleToneLabel: "冇特別回應",
        effects: [{ type: "statChange", stat: "自信", amount: 2 }],
        relationshipEffects: [],
        addMemory: [],
        setFlags: [],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [],
        addReviewLog: { type: "學習", title: "你冇特別回應老師嘅稱讚", body: "你安靜咁收下呢句讚賞，冇多講咩。", tags: ["自信+2"] },
        delayedConsequences: [],
        closeMessage: true
      }
    ]
  },
  {
    id: "msg_family_support_fee",
    senderId: "char_mom",
    title: "媽媽：興趣班費用嘅事",
    urgency: "normal",
    triggerConditions: [],
    lines: ["見你成日幫手屋企事，媽咪都睇喺眼裡。", "如果你想報興趣班，同我講，屋企都會盡量支持你㗎。"],
    choices: [
      {
        text: "多謝媽媽！",
        tone: "熱情接受",
        attitudeTag: "acceptWarmly",
        visibleToneLabel: "開心收下",
        effects: [{ type: "addMoney", amount: 15 }],
        relationshipEffects: [{ characterId: "char_mom", dimension: "trust", amount: 3 }, { characterId: "char_mom", dimension: "dependency", amount: 2 }],
        addMemory: [{ characterId: "char_mom", text: "屋企人願意支持你嘅興趣班" }],
        setFlags: [],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [],
        addReviewLog: { type: "家庭", title: "屋企人願意支持你嘅興趣", body: "你平時嘅幫手冇白費，屋企人願意支持你嘅興趣班費用。", tags: ["金錢+15", "媽媽信任度+3", "來自：多次幫屋企人做事"] },
        delayedConsequences: [],
        closeMessage: true
      },
      {
        text: "唔使喇，我自己儲夠先。",
        tone: "堅持自己嚟",
        attitudeTag: "insistSelf",
        visibleToneLabel: "話想靠自己嚟",
        effects: [{ type: "statChange", stat: "自信", amount: 2 }],
        relationshipEffects: [{ characterId: "char_mom", dimension: "trust", amount: 2 }],
        addMemory: [{ characterId: "char_mom", text: "你想靠自己儲錢" }],
        setFlags: [],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [],
        addReviewLog: { type: "家庭", title: "你想自己儲夠先", body: "媽媽都尊重你嘅決定，覺得你懂事咗。", tags: ["自信+2", "媽媽信任度+2"] },
        delayedConsequences: [],
        closeMessage: true
      }
    ]
  },
  {
    id: "msg_friend_fading",
    senderId: "char_best_friend",
    title: "小美：好耐冇見你喇……",
    urgency: "urgent",
    triggerConditions: [],
    lines: ["最近你成日都好忙噉，我哋好似冇乜點傾偈喇……", "係咪你唔想再同我玩啊？"],
    choices: [
      {
        text: "唔係呀！我哋搵日一齊玩！",
        tone: "熱情接受",
        attitudeTag: "acceptWarmly",
        visibleToneLabel: "主動約返佢",
        effects: [{ type: "statChange", stat: "快樂", amount: 3 }, { type: "statChange", stat: "體力", amount: -1 }],
        relationshipEffects: [{ characterId: "char_best_friend", dimension: "closeness", amount: 6 }, { characterId: "char_best_friend", dimension: "trust", amount: 4 }, { characterId: "char_best_friend", dimension: "misunderstanding", amount: -10 }],
        addMemory: [{ characterId: "char_best_friend", text: "你主動約返小美一齊玩" }],
        setFlags: ["flag_friend_reconciled"],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [],
        addReviewLog: { type: "朋友", title: "你同小美重新拉近咗關係", body: "你哋約定咗搵日一齊玩，關係慢慢返返嚟。", tags: ["小美親近度+6", "誤會值-10"] },
        delayedConsequences: [],
        closeMessage: true
      },
      {
        text: "其實我最近有啲攰，唔係唔想搵你。",
        tone: "誠實說累",
        attitudeTag: "honestTired",
        visibleToneLabel: "講出真實狀態",
        effects: [{ type: "statChange", stat: "體力", amount: 1 }],
        relationshipEffects: [{ characterId: "char_best_friend", dimension: "trust", amount: 5 }, { characterId: "char_best_friend", dimension: "closeness", amount: 2 }, { characterId: "char_best_friend", dimension: "misunderstanding", amount: -6 }],
        addMemory: [{ characterId: "char_best_friend", text: "你老實話畀佢知自己攰" }],
        setFlags: [],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [],
        addReviewLog: { type: "朋友", title: "你老實講出自己嘅狀態", body: "小美理解你嘅忙碌，反而覺得你肯講出嚟係好事。", tags: ["小美信任度+5", "誤會值-6"] },
        delayedConsequences: [],
        closeMessage: true
      },
      {
        text: "最近真係好忙，遲啲先啦。",
        tone: "遲點再說",
        attitudeTag: "delayReply",
        visibleToneLabel: "拖後少少先答佢",
        effects: [],
        relationshipEffects: [{ characterId: "char_best_friend", dimension: "closeness", amount: -4 }, { characterId: "char_best_friend", dimension: "misunderstanding", amount: 8 }],
        addMemory: [{ characterId: "char_best_friend", text: "你話遲啲先，小美有啲失落" }],
        setFlags: ["flag_friend_distant"],
        lockFlags: [],
        restrictFutureChoices: ["flag_bestfriend_distant_pattern"],
        unlockLocationEvent: [],
        addReviewLog: { type: "後續", title: "你同小美嘅關係開始疏遠", body: "你哋之間嘅對話開始變得客套，某啲支線暫時未必再開到。", tags: ["小美親近度-4", "誤會值+8"] },
        delayedConsequences: [],
        closeMessage: true
      }
    ]
  },
  {
    id: "msg_mysterious_stairs_followup",
    senderId: "char_classmate",
    title: "李明：話你知一個秘密！",
    urgency: "normal",
    triggerConditions: [],
    lines: ["嗰道神秘樓梯呀，我哋今日先發現原來音樂室個老師好正，佢話可以教我哋夾歌！"],
    relationshipVariants: [
      { conditions: [{ type: "characterHasMemory", characterId: "char_classmate", keyword: "滑板車" }], lines: ["記唔記得我哋上次喺公園玩滑板車？呢次仲正，音樂室個老師話可以教我哋夾歌！"] }
    ],
    choices: [
      {
        text: "哇！我都想學！",
        tone: "熱情接受",
        attitudeTag: "acceptWarmly",
        visibleToneLabel: "即刻話想學",
        effects: [{ type: "statChange", stat: "創意", amount: 5 }, { type: "statChange", stat: "快樂", amount: 3 }, { type: "statChange", stat: "體力", amount: -2 }],
        relationshipEffects: [{ characterId: "char_classmate", dimension: "closeness", amount: 3 }],
        addMemory: [{ characterId: "char_classmate", text: "你哋一齊發現咗音樂室嘅秘密" }],
        setFlags: ["flag_music_room_unlocked"],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [],
        addReviewLog: { type: "支線", title: "神秘樓梯帶嚟嘅意外收穫", body: "由一段搞笑嘅探險，變成識到音樂室老師嘅契機，不過都幾攰。", tags: ["創意+5", "解鎖：音樂室", "來自：調查神秘樓梯"] },
        delayedConsequences: [],
        closeMessage: true
      },
      {
        text: "得閒先啦，我要返屋企。",
        tone: "禮貌拒絕",
        attitudeTag: "refusePolitely",
        visibleToneLabel: "話想返屋企先",
        effects: [{ type: "statChange", stat: "體力", amount: 2 }, { type: "statChange", stat: "壓力", amount: -1 }],
        relationshipEffects: [],
        addMemory: [],
        setFlags: [],
        lockFlags: [],
        restrictFutureChoices: ["flag_music_room_declined"],
        unlockLocationEvent: [],
        addReviewLog: { type: "支線", title: "你暫時冇興趣識音樂室老師", body: "呢個機會暫時擱置咗，你選擇早啲返屋企休息。", tags: ["體力+2"] },
        delayedConsequences: [],
        closeMessage: true
      }
    ]
  },
  {
    id: "msg_weekend_choice",
    senderId: "char_mom",
    title: "媽媽：週末想點過？",
    urgency: "normal",
    triggerConditions: [{ type: "currentWeek", week: 9 }, { type: "currentTerm", termId: "term_p1_s1" }],
    lines: ["就快考試喇，週末想點安排？補習定係去玩下？"],
    choices: [
      {
        text: "去補習，操練吓。",
        tone: "跟隨安排",
        attitudeTag: "followAdult",
        visibleToneLabel: "跟媽媽建議去補習",
        effects: [{ type: "statChange", stat: "學業", amount: 4 }, { type: "statChange", stat: "壓力", amount: 3 }],
        relationshipEffects: [{ characterId: "char_mom", dimension: "trust", amount: 1 }],
        addMemory: [],
        setFlags: [],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [],
        addReviewLog: { type: "學習", title: "你揀咗週末補習", body: "你決定用週末操練，希望考試表現穩定。", tags: ["學業+4", "壓力+3"] },
        delayedConsequences: [],
        closeMessage: true
      },
      {
        text: "去公園玩，放鬆吓。",
        tone: "開玩笑帶過",
        attitudeTag: "jokeAround",
        visibleToneLabel: "笑住話想去玩",
        effects: [{ type: "statChange", stat: "快樂", amount: 4 }, { type: "statChange", stat: "壓力", amount: -3 }],
        relationshipEffects: [],
        addMemory: [],
        setFlags: [],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [],
        addReviewLog: { type: "決策", title: "你揀咗週末去玩", body: "你決定放鬆一下，冇特別溫習。", tags: ["快樂+4", "壓力-3"] },
        delayedConsequences: [],
        closeMessage: true
      },
      {
        text: "我想自己安排，唔想跟時間表。",
        tone: "堅持自己嚟",
        attitudeTag: "insistSelf",
        visibleToneLabel: "話想自己決定點過",
        conditions: [{ type: "relationshipAtLeast", characterId: "char_mom", dimension: "trust", amount: 45 }],
        effects: [{ type: "statChange", stat: "自信", amount: 3 }, { type: "statChange", stat: "快樂", amount: 2 }],
        relationshipEffects: [{ characterId: "char_mom", dimension: "dependency", amount: -2 }],
        addMemory: [{ characterId: "char_mom", text: "你想自己安排週末" }],
        setFlags: [],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [],
        addReviewLog: { type: "決策", title: "你想自己安排週末", body: "媽媽都畀你自己決定，你覺得幾自在。", tags: ["自信+3"] },
        delayedConsequences: [],
        closeMessage: true
      }
    ]
  },
  {
    id: "msg_classmate_admire_skill",
    senderId: "char_classmate",
    title: "李明：你嗰招好勁喎！",
    urgency: "normal",
    triggerConditions: [],
    lines: ["喂，我見你練習嗰下真係好認真喎，可唔可以教埋我？"],
    choices: [
      {
        text: "好呀，我教你！",
        tone: "熱情接受",
        attitudeTag: "acceptWarmly",
        visibleToneLabel: "爽快教佢",
        effects: [{ type: "statChange", stat: "自信", amount: 2 }, { type: "statChange", stat: "體力", amount: -1 }],
        relationshipEffects: [{ characterId: "char_classmate", dimension: "respect", amount: 3 }, { characterId: "char_classmate", dimension: "closeness", amount: 2 }],
        addMemory: [{ characterId: "char_classmate", text: "你教過佢拿手項目" }],
        setFlags: [],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [],
        addReviewLog: { type: "朋友", title: "你教李明拿手項目", body: "苦練嘅成果吸引到同學仔嚟請教，感覺幾有滿足感，但都花咗啲時間精神。", tags: ["李明尊重度+3", "李明親近度+2"] },
        delayedConsequences: [],
        closeMessage: true
      },
      {
        text: "遲啲先啦，我想自己再練熟啲。",
        tone: "禮貌拒絕",
        attitudeTag: "refusePolitely",
        visibleToneLabel: "想自己先練熟",
        effects: [{ type: "statChange", stat: "自信", amount: 1 }, { type: "statChange", stat: "學業", amount: 1 }],
        relationshipEffects: [],
        addMemory: [],
        setFlags: [],
        lockFlags: [],
        restrictFutureChoices: ["flag_skill_share_declined"],
        unlockLocationEvent: [],
        addReviewLog: { type: "決策", title: "你想先自己練熟", body: "你決定再磨練一下先再教人，攞返啲時間專注自己。", tags: ["自信+1"] },
        delayedConsequences: [],
        closeMessage: true
      }
    ]
  },
  {
    id: "msg_teacher_recommend_activity",
    senderId: "char_teacher",
    title: "陳老師：想唔想試吓比賽？",
    urgency: "normal",
    triggerConditions: [{ type: "relationshipAtLeast", characterId: "char_teacher", dimension: "respect", amount: 60 }],
    lines: ["我一直有留意你，你嘅表現真係值得推薦，想唔想試吓校際比賽？"],
    choices: [
      {
        text: "想試！多謝老師推薦！",
        tone: "熱情接受",
        attitudeTag: "acceptWarmly",
        visibleToneLabel: "爽快接受挑戰",
        effects: [{ type: "statChange", stat: "自信", amount: 6 }, { type: "statChange", stat: "壓力", amount: 3 }],
        relationshipEffects: [{ characterId: "char_teacher", dimension: "respect", amount: 3 }],
        addMemory: [{ characterId: "char_teacher", text: "推薦咗你參加校際比賽" }],
        setFlags: ["flag_joined_competition"],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [],
        addReviewLog: { type: "後續", title: "老師推薦你參加比賽", body: "因為老師對你嘅尊重度夠高，先解鎖到呢個機會，不過都帶嚟少少壓力。", tags: ["解鎖：校際比賽", "自信+6", "壓力+3"] },
        delayedConsequences: [],
        closeMessage: true
      },
      {
        text: "我驚做得唔好，唔想試。",
        tone: "誠實說怕",
        attitudeTag: "honestTired",
        visibleToneLabel: "老實講出自己嘅擔心",
        effects: [{ type: "statChange", stat: "壓力", amount: -2 }],
        relationshipEffects: [],
        addMemory: [],
        setFlags: [],
        lockFlags: [],
        restrictFutureChoices: [],
        unlockLocationEvent: [],
        addReviewLog: { type: "決策", title: "你婉拒咗比賽邀請", body: "你決定唔試，老師都尊重你嘅決定，冇因此對你有意見。", tags: ["壓力-2"] },
        delayedConsequences: [],
        closeMessage: true
      }
    ]
  }
];

export function getMessageById(id) {
  return messages.find(m => m.id === id);
}
