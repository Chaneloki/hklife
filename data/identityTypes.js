// data/identityTypes.js
// 身份類型：唔再一開波就寫死一個個固定 NPC（媽媽、陳老師、李明……），
// 而係先定義「呢種身份大概係點」，具體邊個人、乜人格，交俾 identityPersonalities.js + characters.js 嘅 generator 決定。
//
// identityType schema:
// {
//   id, label, description,
//   canBeRandomAtStart,        // 新人生開始時可唔可以隨機生成呢種身份嘅角色
//   canAppearInEvents,         // 事件觸發時可唔可以生成呢種身份嘅角色
//   relationshipDimensionsPriority: [dimension]，由重要至次要
//   defaultAvailability: "high"|"medium"|"low"
//   allowedLocations: [locationId]
//   commonSupportTypes: [string]
//   commonConflictTypes: [string]
//   possibleRoles: [string]     // 呢種身份可以擔任嘅具體角色名，例如「班主任」「圖書館老師」
//   ageGroup: "小學生"|"成人"|"長者"
//   messageFormality: "casual"|"neutral"|"formal"
//   authorityLevel: 0～3（幾大權威可以影響玩家安排）
//   canForceSchedule, canGiveAcademicGoal, canGiveCompetitionInfo, canUnlockHobby, canUnlockLocationEvent
// }

export const identityTypes = [
  {
    id: "family_elder",
    label: "家庭長輩",
    description: "同你同住或者好親近嘅長輩，例如媽媽、爸爸、嫲嫲、外婆、叔叔、姨姨。",
    canBeRandomAtStart: true,
    canAppearInEvents: true,
    relationshipDimensionsPriority: ["trust", "closeness", "dependency"],
    defaultAvailability: "high",
    allowedLocations: ["loc_shatin", "loc_tuenmun", "loc_causeway", "loc_mongkok"],
    commonSupportTypes: ["家庭支持", "興趣班費用", "情緒安撫"],
    commonConflictTypes: ["長期已讀不回", "多次逃避回答"],
    possibleRoles: ["媽媽", "爸爸", "嫲嫲", "外婆", "叔叔", "姨姨"],
    ageGroup: "成人",
    messageFormality: "casual",
    authorityLevel: 3,
    canForceSchedule: true,
    canGiveAcademicGoal: true,
    canGiveCompetitionInfo: true,
    canUnlockHobby: true,
    canUnlockLocationEvent: false
  },
  {
    id: "family_peer",
    label: "家庭同輩",
    description: "同你差唔多輩份嘅屋企人，例如哥哥、姐姐、表哥、表姐、堂兄弟姊妹。",
    canBeRandomAtStart: true,
    canAppearInEvents: true,
    relationshipDimensionsPriority: ["closeness", "trust"],
    defaultAvailability: "medium",
    allowedLocations: ["loc_shatin", "loc_tuenmun"],
    commonSupportTypes: ["情緒支援", "經驗分享"],
    commonConflictTypes: ["比較成績", "唔公平對待感"],
    possibleRoles: ["哥哥", "姐姐", "表哥", "表姐", "堂兄", "堂妹"],
    ageGroup: "小學生",
    messageFormality: "casual",
    authorityLevel: 1,
    canForceSchedule: false,
    canGiveAcademicGoal: false,
    canGiveCompetitionInfo: true,
    canUnlockHobby: true,
    canUnlockLocationEvent: false
  },
  {
    id: "same_age_peer",
    label: "同年人",
    description: "同班同學、鄰居小朋友、興趣班同學。",
    canBeRandomAtStart: true,
    canAppearInEvents: true,
    relationshipDimensionsPriority: ["closeness", "trust", "misunderstanding"],
    defaultAvailability: "high",
    allowedLocations: ["loc_shatin", "loc_tuenmun", "loc_causeway", "loc_mongkok", "loc_sspk"],
    commonSupportTypes: ["社交邀請", "小組活動", "共同回憶"],
    commonConflictTypes: ["連續拒絕邀請", "已讀不回"],
    possibleRoles: ["同班同學", "鄰居小朋友", "興趣班同學"],
    ageGroup: "小學生",
    messageFormality: "casual",
    authorityLevel: 0,
    canForceSchedule: false,
    canGiveAcademicGoal: false,
    canGiveCompetitionInfo: true,
    canUnlockHobby: true,
    canUnlockLocationEvent: false
  },
  {
    id: "same_age_neighbor",
    label: "同齡鄰居",
    shortLabel: "鄰居",
    description: "住在同座、隔籬座或同一屋苑附近的同年紀小朋友。不是同班同學，也未必同校，主要在假期、放學後、平台、升降機、商場、探親或新年場合出現。",
    defaultUnknownDisplayName: "同年鄰居",
    appearsIn: ["holiday", "family", "neighbor", "community", "festival", "popCulture"],
    canAppearInSchoolEvents: false,
    activeMessage: true,
    notes: "S2-W1-2 抽中的 1 位會加入人物與關係追蹤，並可在親近度 25/30/35/40/45 觸發校外鄰居 active message；未抽中的鄰居不進 UI、不觸發訊息。",
    canBeRandomAtStart: false,
    canAppearInEvents: true,
    relationshipDimensionsPriority: ["closeness", "trust", "misunderstanding"],
    defaultAvailability: "medium",
    allowedLocations: ["loc_shatin", "loc_tuenmun"],
    commonSupportTypes: ["社區生活", "假期共同話題", "校外同齡陪伴"],
    commonConflictTypes: ["玩具比較", "名字未熟", "大人禮貌界線"],
    possibleRoles: ["同座小朋友", "平台女孩", "拿貼紙的小朋友", "跟著家長的小朋友"],
    ageGroup: "小學生",
    messageFormality: "casual",
    authorityLevel: 0,
    canForceSchedule: false,
    canGiveAcademicGoal: false,
    canGiveCompetitionInfo: false,
    canUnlockHobby: false,
    canUnlockLocationEvent: false
  },
  {
    id: "teacher",
    label: "學校老師",
    description: "班主任、中文老師、英文老師、數學老師、圖書館老師、視藝老師。",
    canBeRandomAtStart: true,
    canAppearInEvents: true,
    relationshipDimensionsPriority: ["respect", "trust"],
    defaultAvailability: "medium",
    allowedLocations: ["loc_shatin", "loc_tuenmun", "loc_causeway", "loc_mongkok"],
    commonSupportTypes: ["學業建議", "活動推薦"],
    commonConflictTypes: ["長期唔交功課"],
    possibleRoles: ["班主任", "中文老師", "英文老師", "數學老師", "圖書館老師", "視藝老師"],
    ageGroup: "成人",
    messageFormality: "formal",
    authorityLevel: 2,
    canForceSchedule: true,
    canGiveAcademicGoal: true,
    canGiveCompetitionInfo: true,
    canUnlockHobby: false,
    canUnlockLocationEvent: false
  },
  {
    id: "tutor",
    label: "補習／興趣導師",
    description: "補習老師、畫畫老師、鋼琴老師、游泳教練。",
    canBeRandomAtStart: true,
    canAppearInEvents: true,
    relationshipDimensionsPriority: ["trust", "respect"],
    defaultAvailability: "medium",
    allowedLocations: ["loc_mongkok", "loc_causeway"],
    commonSupportTypes: ["學業建議", "加堂安排", "興趣技能"],
    commonConflictTypes: ["長期唔記得帶功課／用具"],
    possibleRoles: ["補習老師", "畫畫老師", "鋼琴老師", "游泳教練"],
    ageGroup: "成人",
    messageFormality: "neutral",
    authorityLevel: 2,
    canForceSchedule: true,
    canGiveAcademicGoal: false,
    canGiveCompetitionInfo: true,
    canUnlockHobby: true,
    canUnlockLocationEvent: false
  },
  {
    id: "senior_student",
    key: "senior_student",
    aliasIds: ["identity_senior_student"],
    label: "高年級學生",
    description: "風紀、圖書館服務生、校隊師兄師姐。",
    canBeRandomAtStart: false,
    canAppearInEvents: true,
    relationshipDimensionsPriority: ["respect", "closeness"],
    defaultAvailability: "low",
    allowedLocations: ["loc_shatin"],
    commonSupportTypes: ["校內指引", "活動經驗分享"],
    commonConflictTypes: ["對你嘅表現失望"],
    possibleRoles: ["風紀", "圖書館服務生", "校隊師兄", "校隊師姐"],
    ageGroup: "小學生",
    messageFormality: "neutral",
    authorityLevel: 1,
    canForceSchedule: false,
    canGiveAcademicGoal: false,
    canGiveCompetitionInfo: true,
    canUnlockHobby: false,
    canUnlockLocationEvent: false
  }
];

export function getIdentityTypeById(id) {
  const normalizedId = id ? id.replace(/^identity_/, "") : id;
  return identityTypes.find(t =>
    t.id === id ||
    t.id === normalizedId ||
    t.key === id ||
    (t.aliasIds || []).includes(id)
  );
}
