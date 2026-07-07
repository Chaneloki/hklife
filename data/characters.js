// data/characters.js
// NPC 資料：每個角色都有自己嘅人格、目標、喜好同關係維度，唔係得個名同頭像
//
// character schema:
// {
//   id, name, role, ageGroup, avatarEmoji,
//   personalityTags: [string],
//   personalGoal: string,               // NPC 自己想達成嘅嘢
//   values: [string],                   // NPC 睇重嘅嘢（文字描述）
//   likes: [string], dislikes: [string],
//   defaultTone: string,                // 呢個角色平時講嘢嘅語氣
//   relationshipDimensions: [dim],       // 呢個角色最睇重嘅關係維度（用嚟計人生方向權重同 UI 顯示次序）
//   relationshipStageRules: [ { stageLabel, conditions: [{dimension, min}] } ],  // 由上至下，第一個符合就用
//   preferredLocations: [locationId],   // 響邊啲地區容易撞到佢
//   weeklyAvailability: "high"|"medium"|"low",
//   messageStyle: { greeting, closenessHigh, closenessLow, misunderstandingHigh },
//   supportTypes: [string],             // 呢個角色可以提供咩支援（家庭支持、學業建議、興趣技能……）
//   conflictTriggers: [string],         // 咩行為會令佢誤會值上升
//   lifeDirectionInfluence: [ { directionId, weight } ],
//   unlockConditions: [condition]       // 幾時解鎖呢個角色（空陣列代表開局已解鎖）
// }

// 關係維度全部角色共用同一組核心維度，方便引擎統一運算：
// closeness 親近度 / trust 信任度 / respect 尊重度 / dependency 依賴度 / misunderstanding 誤會值
// 唔同角色只係「睇重」嘅維度組合唔同（relationshipDimensions 決定），達成差異化而唔使自創欄位。

export const characters = [
  {
    id: "char_mom",
    name: "媽媽",
    role: "家人",
    ageGroup: "成人",
    avatarEmoji: "👩",
    personalityTags: ["細心", "容易緊張", "刀子口豆腐心"],
    personalGoal: "希望你健康、穩定成長，唔使食咁多苦",
    values: ["家庭關係", "體力", "壓力"],
    likes: ["你主動講返學校事", "你肯聽意見"],
    dislikes: ["你成日話「知道喇」但唔理", "你唔出聲扮冧咗"],
    defaultTone: "關心",
    relationshipDimensions: ["trust", "closeness", "dependency"],
    relationshipStageRules: [
      { stageLabel: "好信任你", category: "reliable", conditions: [{ dimension: "trust", min: 70 }] },
      { stageLabel: "放心", category: "warming", conditions: [{ dimension: "trust", min: 45 }] },
      { stageLabel: "有啲擔心", category: "misunderstood", conditions: [{ dimension: "misunderstanding", min: 40 }] },
      { stageLabel: "日常相處", category: "acquainted", conditions: [{ dimension: "trust", min: 0 }] }
    ],
    preferredLocations: ["loc_shatin"],
    weeklyAvailability: "high",
    messageStyle: {
      greeting: "囡囡／仔仔，",
      closenessHigh: "我見你最近好努力，不過都要記得休息，你自己安排得到，我相信你。",
      closenessLow: "你最近係咪又太夜瞓？唔好淨係話「知道」，我哋今晚傾一傾。",
      misunderstandingHigh: "你係咪唔想同我講？我唔會鬧你，講出嚟啦。"
    },
    supportTypes: ["家庭支持", "興趣班費用", "情緒安撫"],
    conflictTriggers: ["長期已讀不回", "多次逃避回答"],
    lifeDirectionInfluence: [{ directionId: "direction_family", weight: 3 }],
    unlockConditions: []
  },
  {
    id: "char_dad",
    name: "爸爸",
    role: "家人",
    ageGroup: "成人",
    avatarEmoji: "👨",
    personalityTags: ["沉默寡言", "用行動表達關心"],
    personalGoal: "默默守護頭家，唔想俾太多壓力你",
    values: ["家庭關係", "紀律"],
    likes: ["你自動自覺", "簡單一句多謝"],
    dislikes: ["屋企人嘈交"],
    defaultTone: "簡短",
    relationshipDimensions: ["trust", "closeness"],
    relationshipStageRules: [
      { stageLabel: "父女／父子情深", category: "reliable", conditions: [{ dimension: "closeness", min: 60 }] },
      { stageLabel: "習慣咗你", category: "warming", conditions: [{ dimension: "closeness", min: 30 }] },
      { stageLabel: "各自忙各自嘅", category: "acquainted", conditions: [{ dimension: "closeness", min: 0 }] }
    ],
    preferredLocations: ["loc_shatin"],
    weeklyAvailability: "low",
    messageStyle: {
      greeting: "",
      closenessHigh: "今日都攰喇？坐坐啦。",
      closenessLow: "……",
      misunderstandingHigh: "有啲嘢，遲啲先講。"
    },
    supportTypes: ["家庭支持"],
    conflictTriggers: [],
    lifeDirectionInfluence: [{ directionId: "direction_family", weight: 1 }],
    unlockConditions: []
  },
  {
    id: "char_classmate",
    name: "李明",
    role: "同班同學",
    ageGroup: "小學生",
    avatarEmoji: "🧒",
    personalityTags: ["外向", "百厭", "重視義氣"],
    personalGoal: "想搵到一齊玩嘅好朋友，唔想自己一個",
    values: ["親近度", "共同回憶"],
    likes: ["你答應咗嘅嘢會做到", "一齊玩得開心"],
    dislikes: ["已讀不回", "成日拒絕"],
    defaultTone: "口語化",
    relationshipDimensions: ["closeness", "trust", "misunderstanding"],
    relationshipStageRules: [
      { stageLabel: "好朋友", category: "close", conditions: [{ dimension: "closeness", min: 65 }] },
      { stageLabel: "玩得嚟", category: "warming", conditions: [{ dimension: "closeness", min: 35 }] },
      { stageLabel: "有誤會", category: "misunderstood", conditions: [{ dimension: "misunderstanding", min: 50 }] },
      { stageLabel: "剛認識", category: "acquainted", conditions: [{ dimension: "closeness", min: 20 }] },
      { stageLabel: "同班同學", category: "stranger", conditions: [{ dimension: "closeness", min: 0 }] }
    ],
    preferredLocations: ["loc_shatin", "loc_mongkok"],
    weeklyAvailability: "high",
    messageStyle: {
      greeting: "喂，",
      closenessHigh: "你今日放學得唔得閒？我哋諗住去公園玩陣，你嚟啦。",
      closenessLow: "如果你得閒，可以一齊去公園。不過你忙就算啦。",
      misunderstandingHigh: "算啦，你應該又唔得閒。我只是問一問。"
    },
    supportTypes: ["社交邀請", "小組活動"],
    conflictTriggers: ["連續拒絕邀請", "已讀不回"],
    lifeDirectionInfluence: [{ directionId: "direction_social", weight: 3 }],
    unlockConditions: []
  },
  {
    id: "char_teacher",
    name: "陳老師",
    role: "班主任",
    ageGroup: "成人",
    avatarEmoji: "👩‍🏫",
    personalityTags: ["溫和", "有要求", "善於發掘長處"],
    personalGoal: "想發掘每個學生嘅長處，唔淨係睇成績",
    values: ["學業", "責任感", "自信"],
    likes: ["準時交功課", "肯嘗試新事物"],
    dislikes: ["長期唔交功課", "壓力爆煲仲唔出聲"],
    defaultTone: "清楚直接",
    relationshipDimensions: ["respect", "trust"],
    relationshipStageRules: [
      { stageLabel: "願意推薦你", category: "reliable", conditions: [{ dimension: "respect", min: 65 }] },
      { stageLabel: "開始留意你", category: "warming", conditions: [{ dimension: "respect", min: 35 }] },
      { stageLabel: "普通學生", category: "acquainted", conditions: [{ dimension: "respect", min: 0 }] }
    ],
    preferredLocations: ["loc_shatin"],
    weeklyAvailability: "medium",
    messageStyle: {
      greeting: "",
      closenessHigh: "你呢排嘅努力我睇到，不過都要留意身體，唔好逼得自己太緊。",
      closenessLow: "功課方面要跟返進度，有困難可以搵我。",
      misunderstandingHigh: "如果你有咩困難，可以同我講，唔使自己頂硬上。"
    },
    supportTypes: ["學業建議", "活動推薦"],
    conflictTriggers: ["長期唔交功課"],
    lifeDirectionInfluence: [{ directionId: "direction_academic", weight: 3 }],
    unlockConditions: []
  },
  {
    id: "char_tutor",
    name: "補習 Miss",
    role: "補習老師",
    ageGroup: "成人",
    avatarEmoji: "📚",
    personalityTags: ["實際", "有耐性但都幾嚴格"],
    personalGoal: "想幫你操高成績，交到成績表俾家長睇",
    values: ["學業成果"],
    likes: ["你肯做多啲練習"],
    dislikes: ["你成日唔記得帶功課"],
    defaultTone: "實務",
    relationshipDimensions: ["trust", "respect"],
    relationshipStageRules: [
      { stageLabel: "得力學生", category: "reliable", conditions: [{ dimension: "trust", min: 60 }] },
      { stageLabel: "跟得住進度", category: "warming", conditions: [{ dimension: "trust", min: 30 }] },
      { stageLabel: "普通學生", category: "acquainted", conditions: [{ dimension: "trust", min: 0 }] }
    ],
    preferredLocations: ["loc_mongkok"],
    weeklyAvailability: "medium",
    messageStyle: {
      greeting: "",
      closenessHigh: "你呢排進步咗好多，我哋可以試下加深啲題目。",
      closenessLow: "跟返進度做，唔明就問，唔好死頂。",
      misunderstandingHigh: "如果加堂令你太攰，可以同我講，唔一定要死頂。"
    },
    supportTypes: ["學業建議", "加堂安排"],
    conflictTriggers: ["長期唔交功課"],
    lifeDirectionInfluence: [{ directionId: "direction_academic", weight: 2 }],
    unlockConditions: []
  },
  {
    id: "char_cha_chaan_teng",
    name: "阿成",
    role: "茶餐廳店員",
    ageGroup: "成人",
    avatarEmoji: "🍳",
    personalityTags: ["熟絡", "搞笑", "重街坊情誼"],
    personalGoal: "想維持街坊關係，令返學嘅小朋友放學有個落腳地方",
    values: ["親近度", "街坊人脈"],
    likes: ["你肯幫手手腳快", "捧場"],
    dislikes: ["扮唔熟"],
    defaultTone: "街坊搞笑",
    relationshipDimensions: ["closeness"],
    relationshipStageRules: [
      { stageLabel: "老友記", category: "close", conditions: [{ dimension: "closeness", min: 60 }] },
      { stageLabel: "熟客仔", category: "warming", conditions: [{ dimension: "closeness", min: 30 }] },
      { stageLabel: "見過幾次", category: "acquainted", conditions: [{ dimension: "closeness", min: 0 }] }
    ],
    preferredLocations: ["loc_mongkok"],
    weeklyAvailability: "high",
    messageStyle: {
      greeting: "喂！",
      closenessHigh: "番學仔／女！照舊凍檸茶定係試下新出嘅菠蘿油？",
      closenessLow: "路過就入嚟坐吓啦，唔使客氣。",
      misunderstandingHigh: "耐冇見喎，咪咁客氣，入嚟坐啦。"
    },
    supportTypes: ["街坊人脈", "地區支線"],
    conflictTriggers: [],
    lifeDirectionInfluence: [{ directionId: "direction_explore", weight: 2 }],
    unlockConditions: []
  },
  {
    id: "char_mystery_neighbor",
    name: "神秘街坊高手",
    role: "隱世高手",
    ageGroup: "長者",
    avatarEmoji: "🧓",
    personalityTags: ["古怪", "深藏不露", "重視好奇心"],
    personalGoal: "想搵一個有好奇心、肯捱得嘅小朋友，傳授修理手藝",
    values: ["好奇心", "創意", "持續性"],
    likes: ["你肯反覆嘗試", "你記得佢教過嘅嘢"],
    dislikes: ["三分鐘熱度"],
    defaultTone: "古怪",
    relationshipDimensions: ["trust", "respect"],
    relationshipStageRules: [
      { stageLabel: "入室弟子", category: "reliable", conditions: [{ dimension: "trust", min: 65 }] },
      { stageLabel: "肯教你兩招", category: "warming", conditions: [{ dimension: "trust", min: 35 }] },
      { stageLabel: "得閒先傾", category: "acquainted", conditions: [{ dimension: "trust", min: 0 }] }
    ],
    preferredLocations: ["loc_sspk"],
    weeklyAvailability: "low",
    messageStyle: {
      greeting: "後生仔，",
      closenessHigh: "今次教你多一招，記住唔好心急。",
      closenessLow: "得閒先過嚟睇下啦。",
      misunderstandingHigh: "你都好耐冇嚟喇，仲有冇興趣學？"
    },
    supportTypes: ["實用技能", "創意路線"],
    conflictTriggers: ["長期唔去深水埗"],
    lifeDirectionInfluence: [{ directionId: "direction_explore", weight: 2 }, { directionId: "direction_creative", weight: 2 }],
    unlockConditions: []
  },
  {
    id: "char_best_friend",
    name: "小美",
    role: "好朋友",
    ageGroup: "小學生",
    avatarEmoji: "👧",
    personalityTags: ["貼心", "可靠", "細膩"],
    personalGoal: "想有一個講心事都得嘅朋友",
    values: ["親近度", "信任", "共同回憶"],
    likes: ["你肯聽佢講心事", "你主動關心佢"],
    dislikes: ["你成日已讀不回"],
    defaultTone: "溫柔",
    relationshipDimensions: ["closeness", "trust"],
    relationshipStageRules: [
      { stageLabel: "真心朋友", category: "reliable", conditions: [{ dimension: "trust", min: 60 }] },
      { stageLabel: "好朋友", category: "close", conditions: [{ dimension: "closeness", min: 40 }] },
      { stageLabel: "暫時疏遠", category: "distant", conditions: [{ dimension: "misunderstanding", min: 50 }] },
      { stageLabel: "剛認識", category: "acquainted", conditions: [{ dimension: "closeness", min: 20 }] },
      { stageLabel: "普通朋友", category: "stranger", conditions: [{ dimension: "closeness", min: 0 }] }
    ],
    preferredLocations: ["loc_shatin", "loc_causeway"],
    weeklyAvailability: "medium",
    messageStyle: {
      greeting: "",
      closenessHigh: "多得你一直都喺度，今日想同你講多啲心事。",
      closenessLow: "最近點呀？好耐冇傾偈喇。",
      misunderstandingHigh: "係咪你唔想再同我玩啊？"
    },
    supportTypes: ["情緒支援", "社交邀請"],
    conflictTriggers: ["長期已讀不回"],
    lifeDirectionInfluence: [{ directionId: "direction_social", weight: 2 }],
    unlockConditions: []
  }
];

export function getCharacterById(id) {
  return characters.find(c => c.id === id);
}
