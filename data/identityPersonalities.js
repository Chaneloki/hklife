// data/identityPersonalities.js
// 每種身份類型至少 5 種 personality。新 NPC 生成時，先決定 identityTypeId，再從呢個 pool 隨機抽一個 personality，
// 唔使逐個角色手寫人格。personality 帶住 reactionProfileId，畀 npcReactionRules.js 用嚟決定佢對唔同態度嘅反應。
//
// personality schema:
// {
//   id, identityTypeId, label, description,
//   values: [string], likesAttitudes: [attitudeId], dislikesAttitudes: [attitudeId],
//   respectsBoundaries, sensitiveToSilence, valuesHonesty, valuesCuriosity, valuesReliability,
//   valuesAchievement, valuesIndependence, valuesGroupHarmony,
//   reactionProfileId,
//   toneLines: { greeting, closenessHigh, closenessLow, misunderstandingHigh },  // messageStyle 用
//   goalGivingStyle, conflictStyle, supportStyle,
//   eventWeightModifiers: { eventTag: multiplier }   // 事件抽選時，呢個 personality 會令邊類事件更／更唔常見
// }

export const identityPersonalities = [
  // ---------- family_elder（5） ----------
  {
    id: "pers_careful_planner", identityTypeId: "family_elder", label: "謹慎安排型",
    description: "重視成績、睡眠、規律，習慣提前安排好晒。",
    values: ["學業", "規律", "體力"], likesAttitudes: ["followAdult", "honestTired"], dislikesAttitudes: ["delayReply", "changeTopic"],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: true, valuesCuriosity: false, valuesReliability: true,
    valuesAchievement: true, valuesIndependence: false, valuesGroupHarmony: false,
    reactionProfileId: "reaction_strict_result",
    toneLines: {
      greeting: "囡囡／仔仔，",
      closenessHigh: "我見你最近安排得幾好，不過都要記得休息，你自己安排得到，我都放心。",
      closenessLow: "你今個禮拜嘅時間表點呀？我哋一齊睇下要唔要調整。",
      misunderstandingHigh: "你係咪唔想同我講返個安排？我唔會鬧你，講出嚟啦。"
    },
    goalGivingStyle: "會主動提出清楚嘅時間表要求", conflictStyle: "傾向直接指出問題", supportStyle: "提供結構同規劃",
    eventWeightModifiers: { academic_assessment: 1.3, homework_study: 1.2, parent_intervention: 1.3 }
  },
  {
    id: "pers_warm_listener", identityTypeId: "family_elder", label: "溫和聆聽型",
    description: "重視誠實、情緒、親近，唔急住教訓你。",
    values: ["快樂", "家庭關係"], likesAttitudes: ["honestTired", "askForHelp"], dislikesAttitudes: ["staySilent", "changeTopic"],
    respectsBoundaries: true, sensitiveToSilence: true, valuesHonesty: true, valuesCuriosity: false, valuesReliability: true,
    valuesAchievement: false, valuesIndependence: false, valuesGroupHarmony: true,
    reactionProfileId: "reaction_warm_honesty",
    toneLines: {
      greeting: "囡囡／仔仔，",
      closenessHigh: "我見你最近好努力，不過都要記得休息，有咩唔開心都可以講俾我知。",
      closenessLow: "你最近係咪有啲嘢喺心度？唔使急住講，我喺度聽。",
      misunderstandingHigh: "你係咪唔想同我講？我唔會鬧你，講出嚟啦。"
    },
    goalGivingStyle: "唔會強推，會問你想點", conflictStyle: "傾向了解感受先", supportStyle: "情緒安撫",
    eventWeightModifiers: { report_card_followup: 1.1, teacher_intervention: 0.8, parent_intervention: 0.8 }
  },
  {
    id: "pers_face_saver", identityTypeId: "family_elder", label: "面子期望型",
    description: "重視表現、比較、老師評價，成績表對佢好緊要。",
    values: ["學業", "社交名聲"], likesAttitudes: ["acceptWarmly", "followAdult"], dislikesAttitudes: ["refuseDirectly", "staySilent"],
    respectsBoundaries: false, sensitiveToSilence: true, valuesHonesty: false, valuesCuriosity: false, valuesReliability: true,
    valuesAchievement: true, valuesIndependence: false, valuesGroupHarmony: true,
    reactionProfileId: "reaction_face_sensitive",
    toneLines: {
      greeting: "",
      closenessHigh: "你呢期表現我都幾滿意，出去都有面俾我。",
      closenessLow: "你張成績表其他人問起，我唔知點答好。",
      misunderstandingHigh: "你係咪唔想我喺人前提起你？"
    },
    goalGivingStyle: "會用比較同期望施壓", conflictStyle: "容易因為當眾唔配合而不快", supportStyle: "物質獎勵、公開讚賞",
    eventWeightModifiers: { report_card_followup: 1.4, competition_opportunity: 1.2 }
  },
  {
    id: "pers_busy_practical", identityTypeId: "family_elder", label: "忙碌務實型",
    description: "重視效率、結果、少講多做，唔多得閒長篇大論。",
    values: ["家庭關係", "紀律"], likesAttitudes: ["acceptWarmly", "insistSelf"], dislikesAttitudes: ["delayReply"],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: false, valuesCuriosity: false, valuesReliability: true,
    valuesAchievement: false, valuesIndependence: true, valuesGroupHarmony: false,
    reactionProfileId: "reaction_practical_busy",
    toneLines: {
      greeting: "",
      closenessHigh: "今日都攰喇？坐坐啦，有需要就講。",
      closenessLow: "……",
      misunderstandingHigh: "有啲嘢，遲啲先講。"
    },
    goalGivingStyle: "簡短交代，唔多解釋原因", conflictStyle: "唔多正面衝突，用行動表達", supportStyle: "實際支援，唔多講嘢",
    eventWeightModifiers: { homework_study: 0.8, parent_intervention: 0.7 }
  },
  {
    id: "pers_loose_supporter", identityTypeId: "family_elder", label: "寬鬆支持型",
    description: "重視快樂、自主、少強迫，比較信得過你自己安排。",
    values: ["快樂", "自主"], likesAttitudes: ["insistSelf", "observeFirst"], dislikesAttitudes: [],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: false, valuesCuriosity: true, valuesReliability: false,
    valuesAchievement: false, valuesIndependence: true, valuesGroupHarmony: false,
    reactionProfileId: "reaction_boundary_respect",
    toneLines: {
      greeting: "",
      closenessHigh: "你自己安排得幾好，我都放心你自己嚟。",
      closenessLow: "你想點就點啦，有需要先講俾我知。",
      misunderstandingHigh: "係咪有啲嘢想自己諗清楚先？慢慢嚟都得。"
    },
    goalGivingStyle: "淨係俾建議，唔強迫", conflictStyle: "傾向由得你自己決定", supportStyle: "空間同信任",
    eventWeightModifiers: { parent_intervention: 0.6, homework_study: 0.8 }
  },

  // ---------- family_peer（5） ----------
  {
    id: "pers_sibling_protective", identityTypeId: "family_peer", label: "護短型",
    description: "會幫你頂住少少屋企壓力，重視你哋兩個嘅默契。",
    values: ["親近度"], likesAttitudes: ["honestTired", "askForHelp"], dislikesAttitudes: ["staySilent"],
    respectsBoundaries: true, sensitiveToSilence: true, valuesHonesty: true, valuesCuriosity: false, valuesReliability: true,
    valuesAchievement: false, valuesIndependence: false, valuesGroupHarmony: true,
    reactionProfileId: "reaction_warm_honesty",
    toneLines: { greeting: "喂，", closenessHigh: "有咩事講埋俾我知，我哋一齊諗辦法。", closenessLow: "得閒傾吓偈啦。", misunderstandingHigh: "你係咪唔想同我講？" },
    goalGivingStyle: "唔會俾正式目標，但會提提你", conflictStyle: "傾向私底下傾", supportStyle: "情緒同實際小幫忙",
    eventWeightModifiers: { peer_academic: 1.1 }
  },
  {
    id: "pers_sibling_competitive", identityTypeId: "family_peer", label: "比較型",
    description: "成日不自覺攞你同自己比較，但唔一定係惡意。",
    values: ["學業", "排名"], likesAttitudes: ["insistSelf", "takeRisk"], dislikesAttitudes: ["acceptReluctantly"],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: false, valuesCuriosity: false, valuesReliability: false,
    valuesAchievement: true, valuesIndependence: true, valuesGroupHarmony: false,
    reactionProfileId: "reaction_peer_competitive",
    toneLines: { greeting: "喂，", closenessHigh: "你呢排唔錯喎，我都要加把勁至得。", closenessLow: "你張成績表點呀？", misunderstandingHigh: "你係咪覺得我成日同你比？" },
    goalGivingStyle: "用比較刺激你", conflictStyle: "口頭上會較勁", supportStyle: "偶爾分享讀書心得",
    eventWeightModifiers: { peer_academic: 1.3, academic_assessment: 1.1 }
  },
  {
    id: "pers_sibling_busy", identityTypeId: "family_peer", label: "各自忙型",
    description: "大家各有自己嘅生活，唔多主動搵你。",
    values: ["自主"], likesAttitudes: ["observeFirst"], dislikesAttitudes: [],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: false, valuesCuriosity: false, valuesReliability: false,
    valuesAchievement: false, valuesIndependence: true, valuesGroupHarmony: false,
    reactionProfileId: "reaction_practical_busy",
    toneLines: { greeting: "", closenessHigh: "得閒可以一齊出街。", closenessLow: "……得閒先講。", misunderstandingHigh: "都幾耐冇傾偈喎。" },
    goalGivingStyle: "幾乎唔俾目標", conflictStyle: "傾向唔理", supportStyle: "有需要先出現",
    eventWeightModifiers: { peer_academic: 0.6 }
  },
  {
    id: "pers_sibling_playful", identityTypeId: "family_peer", label: "搞笑型",
    description: "成日搞你，但都幾錫你。",
    values: ["快樂"], likesAttitudes: ["jokeAround", "acceptWarmly"], dislikesAttitudes: ["staySilent"],
    respectsBoundaries: false, sensitiveToSilence: true, valuesHonesty: false, valuesCuriosity: false, valuesReliability: false,
    valuesAchievement: false, valuesIndependence: false, valuesGroupHarmony: true,
    reactionProfileId: "reaction_peer_fun",
    toneLines: { greeting: "喂喂，", closenessHigh: "笑到肚痛，記得同我玩多啲！", closenessLow: "得閒陪我玩啦。", misunderstandingHigh: "你唔理我咩？" },
    goalGivingStyle: "冇乜正經目標", conflictStyle: "用玩笑化解", supportStyle: "陪玩、逗你開心",
    eventWeightModifiers: { peer_academic: 0.7 }
  },
  {
    id: "pers_sibling_mentor", identityTypeId: "family_peer", label: "小導師型",
    description: "鍾意教你嘢，有少少大哥大姐感覺。",
    values: ["學業", "經驗分享"], likesAttitudes: ["askForHelp", "honestTired"], dislikesAttitudes: ["insistSelf"],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: true, valuesCuriosity: true, valuesReliability: true,
    valuesAchievement: true, valuesIndependence: false, valuesGroupHarmony: false,
    reactionProfileId: "reaction_encouraging_mentor",
    toneLines: { greeting: "細佬／細妹，", closenessHigh: "唔明就問我，我教你。", closenessLow: "有問題可以搵我。", misunderstandingHigh: "你係咪唔想搵我幫手？" },
    goalGivingStyle: "會分享溫習方法", conflictStyle: "傾向講道理", supportStyle: "經驗傳授",
    eventWeightModifiers: { homework_study: 1.2 }
  },

  // ---------- same_age_peer（5） ----------
  {
    id: "pers_outgoing_inviter", identityTypeId: "same_age_peer", label: "外向邀請型",
    description: "常約人玩，重視共同回憶。",
    values: ["親近度", "共同回憶"], likesAttitudes: ["acceptWarmly", "jokeAround"], dislikesAttitudes: ["staySilent", "changeTopic"],
    respectsBoundaries: false, sensitiveToSilence: true, valuesHonesty: false, valuesCuriosity: false, valuesReliability: false,
    valuesAchievement: false, valuesIndependence: false, valuesGroupHarmony: true,
    reactionProfileId: "reaction_peer_fun",
    toneLines: { greeting: "喂，", closenessHigh: "你今日放學得唔得閒？我哋一齊去玩啦！", closenessLow: "得閒可以一齊玩，唔得閒都唔緊要。", misunderstandingHigh: "算啦，你應該又唔得閒。" },
    goalGivingStyle: "會不停約你參加活動", conflictStyle: "唔太上心，好快釋懷", supportStyle: "社交邀請",
    eventWeightModifiers: { school_activity: 1.2, class_service: 0.9 }
  },
  {
    id: "pers_quiet_observer", identityTypeId: "same_age_peer", label: "安靜觀察型",
    description: "不常主動，但記得小事。",
    values: ["細心"], likesAttitudes: ["observeFirst", "askForHelp"], dislikesAttitudes: ["acceptReluctantly"],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: true, valuesCuriosity: true, valuesReliability: true,
    valuesAchievement: false, valuesIndependence: false, valuesGroupHarmony: false,
    reactionProfileId: "reaction_curiosity_based",
    toneLines: { greeting: "", closenessHigh: "我記得你上次講過嘅嘢。", closenessLow: "……如果你想傾偈都可以搵我。", misunderstandingHigh: "係咪我做錯咗啲乜？" },
    goalGivingStyle: "唔會主動提出", conflictStyle: "退縮但記仇", supportStyle: "細心留意你嘅狀態",
    eventWeightModifiers: { peer_academic: 1.1 }
  },
  {
    id: "pers_competitive_peer", identityTypeId: "same_age_peer", label: "競爭同學型",
    description: "重視成績、比賽、排名。",
    values: ["學業", "排名"], likesAttitudes: ["insistSelf", "takeRisk"], dislikesAttitudes: ["acceptReluctantly"],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: false, valuesCuriosity: false, valuesReliability: false,
    valuesAchievement: true, valuesIndependence: true, valuesGroupHarmony: false,
    reactionProfileId: "reaction_peer_competitive",
    toneLines: { greeting: "喂，", closenessHigh: "呢次測驗你考得幾好喎，我要追返！", closenessLow: "你今次考幾多分？", misunderstandingHigh: "你係咪唔想同我比？" },
    goalGivingStyle: "用比賽／分數挑機", conflictStyle: "直接較勁", supportStyle: "一齊温書、比賽夥伴",
    eventWeightModifiers: { academic_assessment: 1.3, competition_opportunity: 1.3 }
  },
  {
    id: "pers_loyal_sidekick", identityTypeId: "same_age_peer", label: "義氣朋友型",
    description: "重視承諾和站隊，答應咗嘅嘢會記得。",
    values: ["信任", "承諾"], likesAttitudes: ["honestTired", "askForHelp"], dislikesAttitudes: ["staySilent", "delayReply"],
    respectsBoundaries: true, sensitiveToSilence: true, valuesHonesty: true, valuesCuriosity: false, valuesReliability: true,
    valuesAchievement: false, valuesIndependence: false, valuesGroupHarmony: true,
    reactionProfileId: "reaction_warm_honesty",
    toneLines: { greeting: "", closenessHigh: "多得你一直都喺度，有咩事搵我。", closenessLow: "最近點呀？好耐冇傾偈喇。", misunderstandingHigh: "係咪你唔想再同我玩啊？" },
    goalGivingStyle: "會提你之前答應嘅事", conflictStyle: "重視被兌現嘅承諾", supportStyle: "情緒支援、社交邀請",
    eventWeightModifiers: { class_service: 1.1 }
  },
  {
    id: "pers_mischief_maker", identityTypeId: "same_age_peer", label: "搞事好奇型",
    description: "容易帶出支線和小麻煩。",
    values: ["好奇心", "刺激"], likesAttitudes: ["takeRisk", "jokeAround"], dislikesAttitudes: ["followAdult"],
    respectsBoundaries: false, sensitiveToSilence: false, valuesHonesty: false, valuesCuriosity: true, valuesReliability: false,
    valuesAchievement: false, valuesIndependence: true, valuesGroupHarmony: false,
    reactionProfileId: "reaction_curiosity_based",
    toneLines: { greeting: "喂喂，", closenessHigh: "不如試下呢樣嘢？肯定好玩！", closenessLow: "你就係咁乖，唔玩吓？", misunderstandingHigh: "你悶親咗呀？" },
    goalGivingStyle: "會引誘你試新嘢", conflictStyle: "唔太理後果", supportStyle: "帶你發現新事物",
    eventWeightModifiers: { school_activity: 1.1, class_service: 0.8 }
  },

  // ---------- teacher（5） ----------
  {
    id: "pers_strict_academic", identityTypeId: "teacher", label: "嚴格學業型",
    description: "重視功課、測驗、進步。",
    values: ["學業", "責任感"], likesAttitudes: ["followAdult", "honestTired"], dislikesAttitudes: ["avoidConflict", "delayReply"],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: true, valuesCuriosity: false, valuesReliability: true,
    valuesAchievement: true, valuesIndependence: false, valuesGroupHarmony: false,
    reactionProfileId: "reaction_strict_result",
    toneLines: {
      greeting: "",
      closenessHigh: "你呢排嘅努力我睇到，不過測驗都要跟緊進度。",
      closenessLow: "功課同溫習要跟返進度，有困難可以搵我。",
      misunderstandingHigh: "如果你有咩困難，可以同我講，唔使自己頂硬上。"
    },
    goalGivingStyle: "會清楚指出要達到嘅標準", conflictStyle: "直接指出問題", supportStyle: "學業建議",
    eventWeightModifiers: { academic_assessment: 1.4, teacher_intervention: 1.3, homework_study: 1.2 }
  },
  {
    id: "pers_encouraging_mentor", identityTypeId: "teacher", label: "鼓勵型",
    description: "重視學生長處和自信。",
    values: ["自信", "長處"], likesAttitudes: ["takeRisk", "honestTired"], dislikesAttitudes: [],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: true, valuesCuriosity: true, valuesReliability: false,
    valuesAchievement: false, valuesIndependence: true, valuesGroupHarmony: false,
    reactionProfileId: "reaction_encouraging_mentor",
    toneLines: {
      greeting: "",
      closenessHigh: "你嘅長處我睇得出，繼續試下唔同嘅嘢。",
      closenessLow: "你有咩想試但唔敢試嘅，都可以講俾我知。",
      misunderstandingHigh: "唔使驚，講出嚟，我會支持你。"
    },
    goalGivingStyle: "鼓勵你自己揀方向", conflictStyle: "傾向正面鼓勵", supportStyle: "活動推薦、鼓勵",
    eventWeightModifiers: { competition_opportunity: 1.4, school_activity: 1.2, teacher_intervention: 0.7 }
  },
  {
    id: "pers_fair_observer", identityTypeId: "teacher", label: "公平觀察型",
    description: "重視責任感和持續表現。",
    values: ["責任感", "公平"], likesAttitudes: ["followAdult", "insistSelf"], dislikesAttitudes: ["avoidConflict"],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: true, valuesCuriosity: false, valuesReliability: true,
    valuesAchievement: false, valuesIndependence: false, valuesGroupHarmony: true,
    reactionProfileId: "reaction_boundary_respect",
    toneLines: {
      greeting: "",
      closenessHigh: "你呢排嘅表現都幾持續穩定。",
      closenessLow: "留意返自己嘅責任，有事可以講。",
      misunderstandingHigh: "我想公平咁了解件事，你可以講你嗰邊嘅睇法。"
    },
    goalGivingStyle: "睇重持續表現多過一次性成績", conflictStyle: "先了解各方講法", supportStyle: "公平嘅意見",
    eventWeightModifiers: { class_service: 1.3, report_card_followup: 1.1 }
  },
  {
    id: "pers_activity_connector", identityTypeId: "teacher", label: "活動推薦型",
    description: "重視比賽、服務、校內活動。",
    values: ["活動參與"], likesAttitudes: ["takeRisk", "acceptWarmly"], dislikesAttitudes: ["acceptReluctantly"],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: false, valuesCuriosity: true, valuesReliability: false,
    valuesAchievement: true, valuesIndependence: false, valuesGroupHarmony: true,
    reactionProfileId: "reaction_encouraging_mentor",
    toneLines: {
      greeting: "",
      closenessHigh: "你其實可以試下參加多啲校內活動。",
      closenessLow: "有興趣可以留意下校內嘅比賽同活動。",
      misunderstandingHigh: "如果唔想參加都可以話俾我知，唔勉強。"
    },
    goalGivingStyle: "會主動推薦比賽／活動", conflictStyle: "唔太執著單一分數", supportStyle: "活動推薦",
    eventWeightModifiers: { competition_opportunity: 1.5, school_activity: 1.3 }
  },
  {
    id: "pers_pastoral_care_teacher", identityTypeId: "teacher", label: "關顧型",
    description: "重視壓力、情緒、家庭狀態。",
    values: ["情緒", "家庭狀態"], likesAttitudes: ["honestTired", "askForHelp"], dislikesAttitudes: ["staySilent"],
    respectsBoundaries: true, sensitiveToSilence: true, valuesHonesty: true, valuesCuriosity: false, valuesReliability: false,
    valuesAchievement: false, valuesIndependence: false, valuesGroupHarmony: true,
    reactionProfileId: "reaction_pastoral_care",
    toneLines: {
      greeting: "",
      closenessHigh: "見你呢排辛苦咗，記得同屋企人或者我講。",
      closenessLow: "如果壓力太大，可以搵我傾傾。",
      misunderstandingHigh: "你係咪唔想我知你唔開心？"
    },
    goalGivingStyle: "會關心多過催谷", conflictStyle: "傾向了解背後原因", supportStyle: "情緒支援、彈性安排",
    eventWeightModifiers: { report_card_followup: 0.8, parent_intervention: 0.8, teacher_intervention: 1.2 }
  },

  // ---------- tutor（5） ----------
  {
    id: "pers_tutor_drill", identityTypeId: "tutor", label: "操練型",
    description: "相信勤加練習，重視完成率。",
    values: ["學業成果"], likesAttitudes: ["followAdult", "acceptWarmly"], dislikesAttitudes: ["refuseDirectly", "delayReply"],
    respectsBoundaries: false, sensitiveToSilence: false, valuesHonesty: false, valuesCuriosity: false, valuesReliability: true,
    valuesAchievement: true, valuesIndependence: false, valuesGroupHarmony: false,
    reactionProfileId: "reaction_strict_result",
    toneLines: { greeting: "", closenessHigh: "你呢排進步咗好多，我哋可以試下加深啲題目。", closenessLow: "跟返進度做，唔明就問。", misunderstandingHigh: "如果加堂令你太攰，可以同我講。" },
    goalGivingStyle: "清楚指定練習份量", conflictStyle: "直接指出未完成部分", supportStyle: "加堂、額外練習",
    eventWeightModifiers: { homework_study: 1.3, academic_assessment: 1.2 }
  },
  {
    id: "pers_tutor_patient", identityTypeId: "tutor", label: "耐心型",
    description: "唔急，重視理解過程多過速度。",
    values: ["理解"], likesAttitudes: ["askForHelp", "honestTired"], dislikesAttitudes: [],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: true, valuesCuriosity: true, valuesReliability: false,
    valuesAchievement: false, valuesIndependence: false, valuesGroupHarmony: false,
    reactionProfileId: "reaction_pastoral_care",
    toneLines: { greeting: "", closenessHigh: "唔明就問，我哋慢慢嚟。", closenessLow: "有唔明嘅地方唔使唔好意思講。", misunderstandingHigh: "你係咪唔敢話唔明？" },
    goalGivingStyle: "彈性調整進度", conflictStyle: "唔太責怪", supportStyle: "耐心解釋",
    eventWeightModifiers: { homework_study: 1.1 }
  },
  {
    id: "pers_tutor_business", identityTypeId: "tutor", label: "生意務實型",
    description: "重視結果同家長滿意度。",
    values: ["學業成果", "家長反應"], likesAttitudes: ["acceptWarmly", "followAdult"], dislikesAttitudes: ["insistSelf"],
    respectsBoundaries: false, sensitiveToSilence: false, valuesHonesty: false, valuesCuriosity: false, valuesReliability: true,
    valuesAchievement: true, valuesIndependence: false, valuesGroupHarmony: false,
    reactionProfileId: "reaction_practical_busy",
    toneLines: { greeting: "", closenessHigh: "你嘅進度我會同屋企人講返。", closenessLow: "跟返堂上進度做。", misunderstandingHigh: "有咩問題可以直接講。" },
    goalGivingStyle: "以家長期望為主", conflictStyle: "務實處理", supportStyle: "加堂安排",
    eventWeightModifiers: { parent_intervention: 1.2 }
  },
  {
    id: "pers_tutor_creative", identityTypeId: "tutor", label: "啟發創意型",
    description: "鼓勵探索多過死記硬背。",
    values: ["創意", "興趣"], likesAttitudes: ["takeRisk", "observeFirst"], dislikesAttitudes: ["acceptReluctantly"],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: false, valuesCuriosity: true, valuesReliability: false,
    valuesAchievement: false, valuesIndependence: true, valuesGroupHarmony: false,
    reactionProfileId: "reaction_curiosity_based",
    toneLines: { greeting: "", closenessHigh: "試下用你自己嘅方法做，我覺得幾得。", closenessLow: "唔一定要跟晒教材，可以試吓自己諗法。", misunderstandingHigh: "你有冇自己嘅諗法？" },
    goalGivingStyle: "俾空間自由發揮", conflictStyle: "唔太計較對錯", supportStyle: "興趣技能啟發",
    eventWeightModifiers: { competition_opportunity: 1.2 }
  },
  {
    id: "pers_tutor_strict_coach", identityTypeId: "tutor", label: "嚴格教練型",
    description: "多見於體藝類導師，重視紀律同持續訓練。",
    values: ["紀律", "堅持"], likesAttitudes: ["followAdult", "insistSelf"], dislikesAttitudes: ["delayReply"],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: false, valuesCuriosity: false, valuesReliability: true,
    valuesAchievement: true, valuesIndependence: false, valuesGroupHarmony: false,
    reactionProfileId: "reaction_peer_competitive",
    toneLines: { greeting: "", closenessHigh: "你嘅堅持我睇到，繼續操落去。", closenessLow: "紀律要跟緊，唔好半途而廢。", misunderstandingHigh: "你係咪想放棄？傾吓先。" },
    goalGivingStyle: "設定明確訓練目標", conflictStyle: "重視堅持", supportStyle: "訓練指導",
    eventWeightModifiers: { competition_opportunity: 1.3 }
  },

  // ---------- school_staff（5） ----------
  {
    id: "pers_staff_gentle", identityTypeId: "school_staff", label: "溫和型",
    description: "對小朋友有耐性，樂意幫手。",
    values: ["關懷"], likesAttitudes: ["askForHelp", "acceptWarmly"], dislikesAttitudes: [],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: false, valuesCuriosity: false, valuesReliability: false,
    valuesAchievement: false, valuesIndependence: false, valuesGroupHarmony: true,
    reactionProfileId: "reaction_pastoral_care",
    toneLines: { greeting: "", closenessHigh: "早晨呀，今日都要努力喇。", closenessLow: "有需要幫手可以搵我。", misunderstandingHigh: "係咪唔記得咗啲乜？" },
    goalGivingStyle: "唔太俾正式目標", conflictStyle: "溫和提醒", supportStyle: "校內小支援",
    eventWeightModifiers: { class_service: 1.1 }
  },
  {
    id: "pers_staff_strict_order", identityTypeId: "school_staff", label: "重規矩型",
    description: "重視守規矩、排隊、秩序。",
    values: ["秩序"], likesAttitudes: ["followAdult"], dislikesAttitudes: ["insistSelf", "takeRisk"],
    respectsBoundaries: false, sensitiveToSilence: false, valuesHonesty: false, valuesCuriosity: false, valuesReliability: true,
    valuesAchievement: false, valuesIndependence: false, valuesGroupHarmony: true,
    reactionProfileId: "reaction_strict_result",
    toneLines: { greeting: "", closenessHigh: "你排隊都幾守規矩，好嘢。", closenessLow: "記得排返好隊。", misunderstandingHigh: "你係咪唔想守規矩？" },
    goalGivingStyle: "強調規則", conflictStyle: "直接指出違規", supportStyle: "秩序維持",
    eventWeightModifiers: { class_service: 1.2 }
  },
  {
    id: "pers_staff_chatty", identityTypeId: "school_staff", label: "健談型",
    description: "鍾意同小朋友吹水，記得好多校園趣事。",
    values: ["人情味"], likesAttitudes: ["jokeAround", "acceptWarmly"], dislikesAttitudes: [],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: false, valuesCuriosity: true, valuesReliability: false,
    valuesAchievement: false, valuesIndependence: false, valuesGroupHarmony: true,
    reactionProfileId: "reaction_peer_fun",
    toneLines: { greeting: "喂，", closenessHigh: "今日又有咩趣事呀？", closenessLow: "得閒過嚟傾偈啦。", misunderstandingHigh: "你唔多同我講嘢喎。" },
    goalGivingStyle: "冇乜正式目標", conflictStyle: "用傾偈化解", supportStyle: "陪伴、閒聊",
    eventWeightModifiers: { class_service: 0.9 }
  },
  {
    id: "pers_staff_quiet_efficient", identityTypeId: "school_staff", label: "沉默高效型",
    description: "唔多講嘢，但做嘢好快好準。",
    values: ["效率"], likesAttitudes: ["followAdult", "insistSelf"], dislikesAttitudes: ["delayReply"],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: false, valuesCuriosity: false, valuesReliability: true,
    valuesAchievement: false, valuesIndependence: true, valuesGroupHarmony: false,
    reactionProfileId: "reaction_practical_busy",
    toneLines: { greeting: "", closenessHigh: "做得幾好，繼續。", closenessLow: "……", misunderstandingHigh: "有事直接講。" },
    goalGivingStyle: "簡短指令", conflictStyle: "唔多解釋", supportStyle: "實際幫手",
    eventWeightModifiers: { class_service: 1.0 }
  },
  {
    id: "pers_staff_encouraging", identityTypeId: "school_staff", label: "鼓勵型",
    description: "鍾意讚小朋友，覺得肯定好重要。",
    values: ["肯定"], likesAttitudes: ["takeRisk", "acceptWarmly"], dislikesAttitudes: [],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: false, valuesCuriosity: true, valuesReliability: false,
    valuesAchievement: false, valuesIndependence: false, valuesGroupHarmony: true,
    reactionProfileId: "reaction_encouraging_mentor",
    toneLines: { greeting: "", closenessHigh: "你做得好好呀，畀個掌聲自己！", closenessLow: "做得幾好喎，繼續加油。", misunderstandingHigh: "唔使唔開心，你已經做得好好。" },
    goalGivingStyle: "多鼓勵少要求", conflictStyle: "正面肯定", supportStyle: "讚賞、鼓勵",
    eventWeightModifiers: { class_service: 1.2 }
  },

  // ---------- community_adult（5） ----------
  {
    id: "pers_community_friendly", identityTypeId: "community_adult", label: "熟絡搞笑型",
    description: "重街坊情誼，見到你會打招呼吹兩句水。",
    values: ["親近度", "街坊人脈"], likesAttitudes: ["acceptWarmly", "jokeAround"], dislikesAttitudes: [],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: false, valuesCuriosity: false, valuesReliability: false,
    valuesAchievement: false, valuesIndependence: false, valuesGroupHarmony: true,
    reactionProfileId: "reaction_peer_fun",
    toneLines: { greeting: "喂！", closenessHigh: "番學仔／女！照舊嗰杯定係試下新出嘅？", closenessLow: "路過就入嚟坐吓啦，唔使客氣。", misunderstandingHigh: "耐冇見喎，咪咁客氣。" },
    goalGivingStyle: "冇乜正式目標", conflictStyle: "用打趣化解", supportStyle: "街坊人脈、地區支線",
    eventWeightModifiers: { school_activity: 0.9 }
  },
  {
    id: "pers_community_mysterious", identityTypeId: "community_adult", label: "古怪深藏型",
    description: "深藏不露，重視好奇心同耐性。",
    values: ["好奇心", "創意", "持續性"], likesAttitudes: ["observeFirst", "askForHelp", "takeRisk"], dislikesAttitudes: ["acceptReluctantly"],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: false, valuesCuriosity: true, valuesReliability: false,
    valuesAchievement: false, valuesIndependence: true, valuesGroupHarmony: false,
    reactionProfileId: "reaction_curiosity_based",
    toneLines: { greeting: "後生仔，", closenessHigh: "今次教你多一招，記住唔好心急。", closenessLow: "得閒先過嚟睇下啦。", misunderstandingHigh: "你都好耐冇嚟喇，仲有冇興趣學？" },
    goalGivingStyle: "考驗耐性先教嘢", conflictStyle: "唔多解釋，靠你自己體會", supportStyle: "實用技能、創意路線",
    eventWeightModifiers: { school_activity: 1.1 }
  },
  {
    id: "pers_community_strict_shopkeeper", identityTypeId: "community_adult", label: "嚴肅老闆型",
    description: "做生意有原則，講一不二。",
    values: ["誠信"], likesAttitudes: ["honestTired", "followAdult"], dislikesAttitudes: ["staySilent"],
    respectsBoundaries: true, sensitiveToSilence: true, valuesHonesty: true, valuesCuriosity: false, valuesReliability: true,
    valuesAchievement: false, valuesIndependence: false, valuesGroupHarmony: false,
    reactionProfileId: "reaction_boundary_respect",
    toneLines: { greeting: "", closenessHigh: "你都算老實，我信得過你。", closenessLow: "買嘢俾錢，簡單直接。", misunderstandingHigh: "你想講咩就直接講。" },
    goalGivingStyle: "唔多俾目標", conflictStyle: "直接講清楚", supportStyle: "小額支援",
    eventWeightModifiers: {}
  },
  {
    id: "pers_community_worried_guard", identityTypeId: "community_adult", label: "操心保安型",
    description: "成日提醒你小心，有少少嘮叨。",
    values: ["安全"], likesAttitudes: ["followAdult", "honestTired"], dislikesAttitudes: ["takeRisk"],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: true, valuesCuriosity: false, valuesReliability: true,
    valuesAchievement: false, valuesIndependence: false, valuesGroupHarmony: true,
    reactionProfileId: "reaction_strict_result",
    toneLines: { greeting: "", closenessHigh: "番屋企小心啲，早啲返去。", closenessLow: "出入小心啲呀。", misunderstandingHigh: "你係咪唔聽我講？" },
    goalGivingStyle: "提醒多過建議", conflictStyle: "傾向擔心", supportStyle: "安全提示",
    eventWeightModifiers: {}
  },
  {
    id: "pers_community_curious_helper", identityTypeId: "community_adult", label: "好奇幫手型",
    description: "對街坊小朋友嘅興趣好有興趣，樂意分享知識。",
    values: ["好奇心", "分享"], likesAttitudes: ["askForHelp", "observeFirst"], dislikesAttitudes: [],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: false, valuesCuriosity: true, valuesReliability: false,
    valuesAchievement: false, valuesIndependence: false, valuesGroupHarmony: true,
    reactionProfileId: "reaction_curiosity_based",
    toneLines: { greeting: "", closenessHigh: "你嗰個興趣幾特別喎，講埋俾我聽。", closenessLow: "得閒同我講下你鍾意咩。", misunderstandingHigh: "你係咪唔想講？" },
    goalGivingStyle: "分享地區小知識", conflictStyle: "唔多起衝突", supportStyle: "實用技能、地區支線",
    eventWeightModifiers: { school_activity: 1.1 }
  },

  // ---------- senior_student（5） ----------
  {
    id: "pers_senior_strict_prefect", identityTypeId: "senior_student", label: "嚴格風紀型",
    description: "認真執行規矩，對後輩要求高。",
    values: ["秩序", "責任感"], likesAttitudes: ["followAdult", "insistSelf"], dislikesAttitudes: ["takeRisk"],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: false, valuesCuriosity: false, valuesReliability: true,
    valuesAchievement: true, valuesIndependence: false, valuesGroupHarmony: false,
    reactionProfileId: "reaction_strict_result",
    toneLines: { greeting: "", closenessHigh: "你守規矩守得幾好，繼續。", closenessLow: "記得守返規矩。", misunderstandingHigh: "你係咪覺得我針對你？" },
    goalGivingStyle: "以規矩為先", conflictStyle: "直接指正", supportStyle: "校內指引",
    eventWeightModifiers: { class_service: 1.2 }
  },
  {
    id: "pers_senior_friendly_mentor", identityTypeId: "senior_student", label: "友善師兄姐型",
    description: "樂意分享經驗，唔太擺款。",
    values: ["經驗分享"], likesAttitudes: ["askForHelp", "honestTired"], dislikesAttitudes: [],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: true, valuesCuriosity: true, valuesReliability: false,
    valuesAchievement: false, valuesIndependence: false, valuesGroupHarmony: true,
    reactionProfileId: "reaction_encouraging_mentor",
    toneLines: { greeting: "", closenessHigh: "有咩唔識可以問我，我以前都試過。", closenessLow: "有問題可以搵我幫手。", misunderstandingHigh: "你係咪唔敢問我？" },
    goalGivingStyle: "分享校隊／活動經驗", conflictStyle: "溫和提點", supportStyle: "活動經驗分享",
    eventWeightModifiers: { competition_opportunity: 1.2 }
  },
  {
    id: "pers_senior_aloof", identityTypeId: "senior_student", label: "高冷型",
    description: "唔多理後輩，做好自己份內事。",
    values: ["自主"], likesAttitudes: ["observeFirst"], dislikesAttitudes: ["jokeAround"],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: false, valuesCuriosity: false, valuesReliability: false,
    valuesAchievement: true, valuesIndependence: true, valuesGroupHarmony: false,
    reactionProfileId: "reaction_practical_busy",
    toneLines: { greeting: "", closenessHigh: "做好你份內事就得。", closenessLow: "……", misunderstandingHigh: "有事講重點。" },
    goalGivingStyle: "幾乎唔俾目標", conflictStyle: "唔太理", supportStyle: "極少",
    eventWeightModifiers: { class_service: 0.7 }
  },
  {
    id: "pers_senior_competitive_captain", identityTypeId: "senior_student", label: "隊長型",
    description: "校隊師兄師姐，重視團隊表現。",
    values: ["團隊", "表現"], likesAttitudes: ["insistSelf", "takeRisk"], dislikesAttitudes: ["acceptReluctantly"],
    respectsBoundaries: true, sensitiveToSilence: false, valuesHonesty: false, valuesCuriosity: false, valuesReliability: true,
    valuesAchievement: true, valuesIndependence: false, valuesGroupHarmony: true,
    reactionProfileId: "reaction_peer_competitive",
    toneLines: { greeting: "", closenessHigh: "跟住個隊落力操，我哋一齊嚟。", closenessLow: "落場就要盡力。", misunderstandingHigh: "你係咪想退隊？" },
    goalGivingStyle: "以團隊目標為主", conflictStyle: "直接要求表現", supportStyle: "訓練帶領",
    eventWeightModifiers: { competition_opportunity: 1.3 }
  },
  {
    id: "pers_senior_gentle_helper", identityTypeId: "senior_student", label: "溫柔服務型",
    description: "圖書服務生一類，安靜但可靠。",
    values: ["可靠"], likesAttitudes: ["honestTired", "followAdult"], dislikesAttitudes: ["staySilent"],
    respectsBoundaries: true, sensitiveToSilence: true, valuesHonesty: true, valuesCuriosity: false, valuesReliability: true,
    valuesAchievement: false, valuesIndependence: false, valuesGroupHarmony: true,
    reactionProfileId: "reaction_warm_honesty",
    toneLines: { greeting: "", closenessHigh: "你幫手幫得幾好，多謝你。", closenessLow: "有需要幫手隨時講。", misunderstandingHigh: "係咪我做錯咗啲乜？" },
    goalGivingStyle: "邀請你一齊做服務", conflictStyle: "溫和處理", supportStyle: "校內服務機會",
    eventWeightModifiers: { class_service: 1.3 }
  }
];

export function getPersonalitiesForIdentity(identityTypeId) {
  return identityPersonalities.filter(p => p.identityTypeId === identityTypeId);
}
export function getPersonalityById(id) {
  return identityPersonalities.find(p => p.id === id);
}
