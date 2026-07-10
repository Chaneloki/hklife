// data/characters.js
// 舊版：一開波就寫死媽媽、爸爸、李明、陳老師呢類固定角色同人格。
// 新版：淨係定義穩定嘅「角色位」（slot）—— 呢個位係邊種身份、大概會喺邊度撞到；
// 具體叫咩名、係邊種 personality、reactionProfile，一律喺新人生開始（generateCharacters）先隨機決定。
//
// 咁樣做嘅原因：goals.js / hobbies.js / opportunities.js / actions.js / encounters.js 全部都用緊
// char_mom、char_teacher 呢類固定 id 嚟表達「邊個人夠格畀呢個目標／興趣班／比賽」，
// 呢層邏輯（邊個位負責咩）唔應該變，會變嘅只係「呢個位依家係邊個人、乜性格」。

import { state } from "../js/state.js";
import { getIdentityTypeById } from "./identityTypes.js";
import { getPersonalitiesForIdentity } from "./identityPersonalities.js";
import { openingEvents } from "./openingEvents.js";

function pickRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

// identityType 對人生方向嘅通用影響（取代舊版逐個角色手寫嘅 lifeDirectionInfluence），
// 令 checkLifeDirection() 唔使改都照樣可以用生成角色嘅關係去計人生方向
const IDENTITY_LIFE_DIRECTION_INFLUENCE = {
  family_elder: [{ directionId: "direction_family", weight: 3 }],
  family_peer: [{ directionId: "direction_family", weight: 1 }],
  same_age_peer: [{ directionId: "direction_social", weight: 3 }],
  same_age_neighbor: [{ directionId: "direction_social", weight: 1 }],
  teacher: [{ directionId: "direction_academic", weight: 3 }],
  tutor: [{ directionId: "direction_academic", weight: 2 }],
  senior_student: [{ directionId: "direction_social", weight: 1 }]
};

export const relationshipTargets = {
  same_age_neighbor: ["neighbor_lokyin", "neighbor_wingching", "neighbor_holong", "neighbor_manhei"]
};

const TEACHER_SURNAMES = ["陳", "黃", "林", "李", "張", "馬", "周", "何", "鄭", "梁"];
const PEER_NAME_POOL = ["家朗", "子晴", "浩然", "曉彤", "卓軒", "芷晴", "嘉穎", "俊熙", "海怡", "梓聰", "詠然", "希哲"];
const ADULT_GIVEN_POOL = ["國強", "美英", "志明", "淑芬", "偉強", "慧珊"];

// 角色位定義：id 係其他資料（goals/hobbies/opportunities/actions/encounters）用嚟 refer 嘅穩定 key，唔會變
export const characterSlots = [
  { id: "char_mom", identityTypeId: "family_elder", roleLabel: "媽媽", fixedName: "媽媽", gender: "woman", startKnown: true },
  { id: "char_dad", identityTypeId: "family_elder", roleLabel: "爸爸", fixedName: "爸爸", gender: "man", startKnown: true },
  { id: "char_sibling", identityTypeId: "family_peer", roleLabel: "屋企同輩", namePrefix: "", nameSuffix: "", startKnown: false },
  { id: "char_teacher", identityTypeId: "teacher", roleLabel: "班主任", nameSuffix: "老師", startKnown: true },
  { id: "char_classmate", identityTypeId: "same_age_peer", roleLabel: "隔離位同學", startKnown: true },
  { id: "char_best_friend", identityTypeId: "same_age_peer", roleLabel: "同班同學", startKnown: false },
  { id: "char_tutor", identityTypeId: "tutor", roleLabel: "補習導師", nameSuffix: "Miss/Sir", startKnown: false },
  {
    id: "neighbor_lokyin",
    identityTypeId: "same_age_neighbor",
    roleLabel: "同座小朋友",
    fixedName: "樂言",
    displayNameUnknown: "同座小朋友",
    forcedPersonalityId: "pers_neighbor_quick_invite",
    explicitIconPath: "/assets/icons/characters/same_age_neighbor/icon_樂言.png",
    startKnown: false
  },
  {
    id: "neighbor_wingching",
    identityTypeId: "same_age_neighbor",
    roleLabel: "平台女孩",
    fixedName: "詠晴",
    displayNameUnknown: "平台女孩",
    forcedPersonalityId: "pers_neighbor_quiet_collect",
    explicitIconPath: "/assets/icons/characters/same_age_neighbor/icon_詠晴.png",
    startKnown: false
  },
  {
    id: "neighbor_holong",
    identityTypeId: "same_age_neighbor",
    roleLabel: "拿貼紙的小朋友",
    fixedName: "皓朗",
    displayNameUnknown: "拿貼紙的小朋友",
    forcedPersonalityId: "pers_neighbor_showy_toy",
    explicitIconPath: "/assets/icons/characters/same_age_neighbor/icon_皓朗.png",
    startKnown: false
  },
  {
    id: "neighbor_manhei",
    identityTypeId: "same_age_neighbor",
    roleLabel: "跟著家長的小朋友",
    fixedName: "敏希",
    displayNameUnknown: "跟著家長的小朋友",
    forcedPersonalityId: "pers_neighbor_adult_bridge",
    explicitIconPath: "/assets/icons/characters/same_age_neighbor/icon_敏希.png",
    startKnown: false
  },
  {
    id: "senior_friendly_girl_zhiyau",
    identityTypeId: "senior_student",
    roleLabel: "高年級學生",
    fixedName: "芷悠",
    displayNameUnknown: "高年級女生",
    primaryAddressLabel: "芷悠師姐",
    forcedPersonalityId: "pers_friendly_senior",
    gender: "girl",
    fixedLifeStage: "primary_upper",
    fixedCurrentAge: "9-11歲",
    fixedCurrentGrade: "小四／小五",
    startKnown: false
  },
  {
    id: "senior_strict_prefect_junlong",
    identityTypeId: "senior_student",
    roleLabel: "風紀／高年級學生",
    fixedName: "俊朗",
    displayNameUnknown: "風紀男生",
    primaryAddressLabel: "俊朗師兄",
    forcedPersonalityId: "pers_strict_prefect",
    gender: "boy",
    fixedLifeStage: "primary_upper",
    fixedCurrentAge: "10-12歲",
    fixedCurrentGrade: "小五／小六",
    startKnown: false
  },
  {
    id: "senior_aloof_baakjin",
    identityTypeId: "senior_student",
    roleLabel: "高年級學生",
    fixedName: "柏言",
    displayNameUnknown: "高年級男生",
    primaryAddressLabel: "柏言師兄",
    forcedPersonalityId: "pers_senior_aloof",
    gender: "boy",
    fixedLifeStage: "primary_upper",
    fixedCurrentAge: "10-12歲",
    fixedCurrentGrade: "小五／小六",
    startKnown: false
  },
  {
    id: "senior_captain_hoiching",
    identityTypeId: "senior_student",
    roleLabel: "校隊高年級學生",
    fixedName: "凱晴",
    displayNameUnknown: "校隊女生",
    primaryAddressLabel: "凱晴師姐",
    forcedPersonalityId: "pers_senior_competitive_captain",
    gender: "girl",
    fixedLifeStage: "primary_upper",
    fixedCurrentAge: "10-12歲",
    fixedCurrentGrade: "小五／小六",
    startKnown: false
  },
  {
    id: "senior_gentle_helper_gachang",
    identityTypeId: "senior_student",
    roleLabel: "圖書服務生／高年級學生",
    fixedName: "嘉澄",
    displayNameUnknown: "圖書服務生",
    primaryAddressLabel: "嘉澄師姐",
    forcedPersonalityId: "pers_senior_gentle_helper",
    gender: "girl",
    fixedLifeStage: "primary_upper",
    fixedCurrentAge: "9-11歲",
    fixedCurrentGrade: "小四／小五",
    startKnown: false
  }
];

// 部分 identity+personality 組合喺 authored opening event pool 度已經有固定嘅 npcNameFallback
// （例如同齡同學．外向邀請型固定叫「家朗」，因為呢個名已經寫死喺 authored 對話文本入面）。
// 呢度直接讀返 authored 資料建立 personalityId -> 固定名 對照表，唔喺呢個檔案重複打一次個名，
// 避免兩處資料唔同步。冇對應 authored 固定名嘅 personality，先落返用隨機 name pool。
function buildFixedNameByPersonality() {
  const map = {};
  openingEvents.forEach(e => {
    (e.variants || []).forEach(v => {
      if (v.npcNameFallback && v.personalityId) map[v.personalityId] = v.npcNameFallback;
    });
  });
  return map;
}
const FIXED_NAME_BY_PERSONALITY = buildFixedNameByPersonality();
const FIXED_NAME_BY_IDENTITY_PERSONALITY = {
  same_age_peer: {
    pers_outgoing_inviter: "家朗",
    pers_quiet_observer: "穎心",
    pers_competitive_peer: "梓軒",
    pers_mischief_maker: "柏宇"
  },
  senior_student: {
    pers_strict_prefect: "俊朗",
    pers_friendly_senior: "芷悠",
    pers_senior_aloof: "柏言",
    pers_senior_competitive_captain: "凱晴",
    pers_senior_gentle_helper: "嘉澄"
  }
};

function generateName(slot, personality) {
  if (slot.fixedName) return slot.fixedName;
  const identityFixedName = FIXED_NAME_BY_IDENTITY_PERSONALITY[slot.identityTypeId]?.[personality?.id];
  if (identityFixedName) return identityFixedName;
  if (personality && FIXED_NAME_BY_PERSONALITY[personality.id]) return FIXED_NAME_BY_PERSONALITY[personality.id];
  if (slot.identityTypeId === "teacher") return `${pickRandom(TEACHER_SURNAMES)}老師`;
  if (slot.identityTypeId === "same_age_peer" || slot.identityTypeId === "senior_student" || slot.identityTypeId === "family_peer") {
    return pickRandom(PEER_NAME_POOL);
  }
  return `${pickRandom(TEACHER_SURNAMES)}${pickRandom(ADULT_GIVEN_POOL)}`;
}

// 由 identityType.relationshipDimensionsPriority 生成一組通用嘅關係階段描述，唔使逐個角色手寫
function buildRelationshipStageRules(dims) {
  const primary = dims[0] || "closeness";
  return [
    { stageLabel: "已經好熟落", category: "reliable", conditions: [{ dimension: primary, min: 65 }] },
    { stageLabel: "開始熟落", category: "warming", conditions: [{ dimension: primary, min: 35 }] },
    { stageLabel: "有啲誤會", category: "misunderstood", conditions: [{ dimension: "misunderstanding", min: 50 }] },
    { stageLabel: "啱啱識", category: "acquainted", conditions: [{ dimension: primary, min: 0 }] }
  ];
}

// 新人生開始時，一次過生成所有角色位嘅具體人物（名、personality、reactionProfile……）
export function generateCharacters(s = state) {
  s.generatedCharacters = {};
  characterSlots.forEach(slot => {
    const identity = getIdentityTypeById(slot.identityTypeId);
    const pool = getPersonalitiesForIdentity(slot.identityTypeId);
    const personality = slot.forcedPersonalityId
      ? (pool.find(p => p.id === slot.forcedPersonalityId || (p.aliasIds || []).includes(slot.forcedPersonalityId)) || pickRandom(pool))
      : pickRandom(pool);
    const dims = identity.relationshipDimensionsPriority;
    const generatedName = generateName(slot, personality);
    s.generatedCharacters[slot.id] = {
      id: slot.id,
      generatedFromIdentityType: slot.identityTypeId,
      personalityId: personality.id,
      personalityKey: (personality.id || "").replace(/^pers_/, ""),
      reactionProfileId: personality.reactionProfileId,
      name: generatedName,
      baseName: generatedName,
      displayNameKnown: generatedName,
      displayNameUnknown: slot.displayNameUnknown || slot.roleLabel,
      primaryAddressLabel: slot.primaryAddressLabel || null,
      gender: slot.gender || null,
      role: slot.roleLabel,
      roleLabel: slot.roleLabel,
      ageGroup: identity.ageGroup,
      lifeStage: slot.fixedLifeStage || null,
      currentAge: slot.fixedCurrentAge || null,
      currentGrade: slot.fixedCurrentGrade || null,
      // icon 一律用 resolveCharacterIcon()（data/characterIconManifest.js）解，唔再用 emoji；
      // iconPath 一開始係 null，第一次 resolve 咗先會 cache 落嚟，之後成局用返同一張
      iconPath: null,
      iconSource: null,
      explicitIconPath: slot.explicitIconPath || null,
      explicitIconName: slot.explicitIconName || null,
      personalityTags: [personality.label],
      personalGoal: personality.description,
      values: personality.values,
      likes: personality.likesAttitudes,
      dislikes: personality.dislikesAttitudes,
      defaultTone: personality.label,
      relationshipDimensions: dims,
      relationshipStageRules: buildRelationshipStageRules(dims),
      preferredLocations: identity.allowedLocations,
      weeklyAvailability: identity.defaultAvailability,
      messageStyle: personality.toneLines,
      supportTypes: identity.commonSupportTypes,
      conflictTriggers: identity.commonConflictTypes,
      lifeDirectionInfluence: IDENTITY_LIFE_DIRECTION_INFLUENCE[slot.identityTypeId] || [],
      unlockConditions: [],
      knownStatus: slot.startKnown ? "known" : "unknown",
      sourceEventId: null
    };
  });
  return s.generatedCharacters;
}

export function getCharacterById(id, s = state) {
  return s.generatedCharacters ? s.generatedCharacters[id] : undefined;
}

export function getAllGeneratedCharacters(s = state) {
  return Object.values(s.generatedCharacters || {});
}

export function normalizeFixedNamedCharacters(s = state) {
  Object.values(s.generatedCharacters || {}).forEach(character => {
    const fixedName = FIXED_NAME_BY_IDENTITY_PERSONALITY[character.generatedFromIdentityType]?.[character.personalityId];
    if (!fixedName) return;
    character.name = fixedName;
    character.baseName = fixedName;
    character.displayNameKnown = fixedName;
    if (character.generatedFromIdentityType === "same_age_peer") {
      character.displayNameUnknown = character.roleLabel || "同學";
    }
    character.iconPath = null;
    character.iconSource = null;
  });
  return s.generatedCharacters;
}

// 玩家未識得個名之前，一律顯示呢個角色位嘅 roleLabel（例如「隔離位同學」「帶隊職員」），
// 唔顯示「神秘人」「同學」「老師」「家人」「職員」呢類 generic label；
// 一旦 s.knownCharacters 有呢個 id（即 engine.meetCharacter() 已經觸發過），先顯示返真名。
// 呢個係全局統一嘅顯示邏輯，UI 唔應該再直接讀 character.name。
export function getCharacterDisplayName(id, s = state) {
  const character = getCharacterById(id, s);
  if (!character) return null;
  const known = (s.knownCharacters || []).includes(id);
  const stageId = s.stageId || "";
  const isPrimary = ["stage_p1", "stage_p2", "stage_p3", "stage_p4", "stage_p5", "stage_p6"].includes(stageId);
  if (known && isPrimary && character.generatedFromIdentityType === "senior_student" && character.primaryAddressLabel) {
    return character.primaryAddressLabel;
  }
  return known ? (character.displayNameKnown || character.name) : (character.displayNameUnknown || character.roleLabel || character.name);
}

export function getCharacterAddressLabel(characterOrId, s = state) {
  const character = typeof characterOrId === "string" ? getCharacterById(characterOrId, s) : characterOrId;
  if (!character) return null;
  const stageId = s.stageId || "";
  const isPrimary = ["stage_p1", "stage_p2", "stage_p3", "stage_p4", "stage_p5", "stage_p6"].includes(stageId);
  if (isPrimary && character.generatedFromIdentityType === "senior_student" && character.primaryAddressLabel) {
    return character.primaryAddressLabel;
  }
  return character.displayNameKnown || character.name;
}
