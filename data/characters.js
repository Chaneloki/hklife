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

function pickRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

// identityType 對人生方向嘅通用影響（取代舊版逐個角色手寫嘅 lifeDirectionInfluence），
// 令 checkLifeDirection() 唔使改都照樣可以用生成角色嘅關係去計人生方向
const IDENTITY_LIFE_DIRECTION_INFLUENCE = {
  family_elder: [{ directionId: "direction_family", weight: 3 }],
  family_peer: [{ directionId: "direction_family", weight: 1 }],
  same_age_peer: [{ directionId: "direction_social", weight: 3 }],
  teacher: [{ directionId: "direction_academic", weight: 3 }],
  tutor: [{ directionId: "direction_academic", weight: 2 }],
  school_staff: [{ directionId: "direction_academic", weight: 1 }],
  community_adult: [{ directionId: "direction_explore", weight: 2 }],
  senior_student: [{ directionId: "direction_social", weight: 1 }]
};

const TEACHER_SURNAMES = ["陳", "黃", "林", "李", "張", "馬", "周", "何", "鄭", "梁"];
const PEER_NAME_POOL = ["家朗", "子晴", "浩然", "曉彤", "卓軒", "芷晴", "嘉穎", "俊熙", "海怡", "梓聰", "詠然", "希哲"];
const ADULT_GIVEN_POOL = ["國強", "美英", "志明", "淑芬", "偉強", "慧珊"];

// 角色位定義：id 係其他資料（goals/hobbies/opportunities/actions/encounters）用嚟 refer 嘅穩定 key，唔會變
export const characterSlots = [
  { id: "char_mom", identityTypeId: "family_elder", roleLabel: "媽媽", avatarEmoji: "👩", fixedName: "媽媽", startKnown: true },
  { id: "char_dad", identityTypeId: "family_elder", roleLabel: "爸爸", avatarEmoji: "👨", fixedName: "爸爸", startKnown: true },
  { id: "char_sibling", identityTypeId: "family_peer", roleLabel: "屋企同輩", avatarEmoji: "🧑‍🤝‍🧑", namePrefix: "", nameSuffix: "", startKnown: false },
  { id: "char_teacher", identityTypeId: "teacher", roleLabel: "班主任", avatarEmoji: "👩‍🏫", nameSuffix: "老師", startKnown: true },
  { id: "char_classmate", identityTypeId: "same_age_peer", roleLabel: "同班同學", avatarEmoji: "🧒", startKnown: true },
  { id: "char_best_friend", identityTypeId: "same_age_peer", roleLabel: "同班同學", avatarEmoji: "👧", startKnown: false },
  { id: "char_tutor", identityTypeId: "tutor", roleLabel: "補習導師", avatarEmoji: "📚", nameSuffix: "Miss/Sir", startKnown: false },
  { id: "char_librarian", identityTypeId: "school_staff", roleLabel: "圖書館職員", avatarEmoji: "📖", startKnown: false },
  { id: "char_mystery_neighbor", identityTypeId: "community_adult", roleLabel: "神秘街坊", avatarEmoji: "🧓", startKnown: false },
  { id: "char_cha_chaan_teng", identityTypeId: "community_adult", roleLabel: "茶餐廳店員", avatarEmoji: "🍳", startKnown: false },
  { id: "char_prefect", identityTypeId: "senior_student", roleLabel: "高年級風紀", avatarEmoji: "🎖️", startKnown: false }
];

function generateName(slot) {
  if (slot.fixedName) return slot.fixedName;
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
    const personality = pickRandom(pool);
    const dims = identity.relationshipDimensionsPriority;
    s.generatedCharacters[slot.id] = {
      id: slot.id,
      generatedFromIdentityType: slot.identityTypeId,
      personalityId: personality.id,
      reactionProfileId: personality.reactionProfileId,
      name: generateName(slot),
      role: slot.roleLabel,
      roleLabel: slot.roleLabel,
      ageGroup: identity.ageGroup,
      avatarEmoji: slot.avatarEmoji,
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
