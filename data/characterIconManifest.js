// data/characterIconManifest.js
// 角色頭像系統：一律用返 icon 圖片，唔再用 emoji（avatarEmoji 已經停用）。
// 中文檔名直接喺 URL 度用可能有 encode／build 問題，所以呢度用 manifest（name -> path）
// 嚟做 lookup，唔喺 UI 度亂咁砌檔名路徑。
//
// Asset 嚟源：/Users/loki/Desktop/Loki/hklife/未命名資料夾/icon
//   p1-3_same_age/      → same_age_peer 固定命名角色
//   p1-3_senior_student/ → senior_student 固定命名角色
//   family_elder/       → 家庭角色 stable pool（man1-4／woman1-3）
//   teacher_tutor/       → 老師／補習老師 stable pool（man1-4／woman1-3）
// 已經複製到 assets/icons/characters/ 底下對應嘅資料夾，前端經 /assets/... 路徑載入。

const BASE = "/assets/icons/characters";

// ---------- same_age_peer：固定名字 -> icon，唔可以 random ----------
export const SAME_AGE_PEER_ICON_MANIFEST = {
  "家朗": `${BASE}/same_age_peer/icon_家朗.png`,
  "穎心": `${BASE}/same_age_peer/icon_穎心.png`,
  "梓軒": `${BASE}/same_age_peer/icon_梓軒.png`,
  "柏宇": `${BASE}/same_age_peer/icon_柏宇.jpg`
};

// ---------- same_age_neighbor：校外同齡鄰居，跟同班 same_age_peer 分開 ----------
export const SAME_AGE_NEIGHBOR_ICON_MANIFEST = {
  "樂言": `${BASE}/same_age_neighbor/icon_樂言.png`,
  "詠晴": `${BASE}/same_age_neighbor/icon_詠晴.png`,
  "皓朗": `${BASE}/same_age_neighbor/icon_皓朗.png`,
  "敏希": `${BASE}/same_age_neighbor/icon_敏希.png`
};

// ---------- senior_student：固定名字 -> icon，lookup key 一定要用真名（displayNameKnown／
// baseName），唔可以用 primaryAddressLabel（例如「芷悠師姐」），唔然搵唔到對應檔案 ----------
export const SENIOR_STUDENT_ICON_MANIFEST = {
  "芷悠": `${BASE}/senior_student/icon_芷悠.png`,
  "俊朗": `${BASE}/senior_student/icon_俊朗.png`,
  "柏言": `${BASE}/senior_student/icon_柏言.png`,
  "凱晴": `${BASE}/senior_student/icon_凱晴.png`,
  "嘉澄": `${BASE}/senior_student/icon_嘉澄.png`
};

// ---------- teacher / tutor / family：冇固定名，由對應 pool stable random（見 resolveCharacterIcon）----------
export const FAMILY_MALE_ICON_POOL = [
  `${BASE}/family/icon_man1.png`, `${BASE}/family/icon_man2.png`,
  `${BASE}/family/icon_man3.png`, `${BASE}/family/icon_man4.png`
];
export const FAMILY_FEMALE_ICON_POOL = [
  `${BASE}/family/icon_woman1.png`, `${BASE}/family/icon_woman2.png`, `${BASE}/family/icon_woman3.png`
];
export const TEACHER_TUTOR_MALE_ICON_POOL = [
  `${BASE}/teacher_tutor/icon_man1.png`, `${BASE}/teacher_tutor/icon_man2.png`,
  `${BASE}/teacher_tutor/icon_man3.png`, `${BASE}/teacher_tutor/icon_man4.png`
];
export const TEACHER_TUTOR_FEMALE_ICON_POOL = [
  `${BASE}/teacher_tutor/icon_woman1.png`, `${BASE}/teacher_tutor/icon_woman2.png`, `${BASE}/teacher_tutor/icon_woman3.png`
];

// ---------- Default silhouette（冇對應 asset 檔案，一律用 inline SVG，唔會 fallback 做 emoji）----------
function silhouetteSvg(bg, fg) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="${bg}"/><circle cx="24" cy="18" r="9" fill="${fg}"/><path d="M6 45c0-11 8-17 18-17s18 6 18 17" fill="${fg}"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
export const DEFAULT_CHILD_ICON = silhouetteSvg("#fff2d6", "#d8c39a");
export const DEFAULT_ADULT_ICON = silhouetteSvg("#eee3f5", "#b7a0cf");
export const DEFAULT_UNKNOWN_ICON = silhouetteSvg("#eaeaea", "#bdbdbd");

const CHILD_IDENTITIES = ["same_age_peer", "same_age_neighbor", "senior_student", "family_peer"];

const isDev = typeof location !== "undefined" &&
  (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.protocol === "file:");

function warnMissingFixedIcon(identity, name) {
  if (isDev) console.warn(`Missing fixed icon for ${identity}: ${name}`);
}

// 對一個字串做 deterministic hash，等 stable pool 揀 icon 唔會因為刷新頁面／再開人物頁而變
function stableHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function getPooledIconPools(identity) {
  if (identity === "family_elder") return { male: FAMILY_MALE_ICON_POOL, female: FAMILY_FEMALE_ICON_POOL };
  if (identity === "teacher" || identity === "tutor") return { male: TEACHER_TUTOR_MALE_ICON_POOL, female: TEACHER_TUTOR_FEMALE_ICON_POOL };
  return null;
}

// seed = saveSeed + characterId + identity + gender：同一局、同一個角色，揀嘅 pool icon 一定一樣，
// 唔會因為刷新頁面、開人物頁、開 Chatbot 而變
function pickStablePooledIcon(character, s) {
  const pools = getPooledIconPools(character.generatedFromIdentityType);
  if (!pools) return null;

  const seedBase = `${s?.saveSeed ?? 0}_${character.id}_${character.generatedFromIdentityType}`;
  let pool;
  if (character.gender === "man" || character.gender === "boy") pool = pools.male;
  else if (character.gender === "woman" || character.gender === "girl") pool = pools.female;
  else {
    // gender 未知：都要 deterministic 揀邊個 pool，唔可以每次刷新先揀，亦都唔可以永遠揀第一個
    pool = stableHash(`${seedBase}_genderpick`) % 2 === 0 ? pools.male : pools.female;
  }
  if (!pool || !pool.length) return null;
  return pool[stableHash(seedBase) % pool.length];
}

// 角色 icon resolution：
// 1. character.iconPath 已經 cache 咗就直接用
// 2. same_age_peer／same_age_neighbor／senior_student：用 baseName／displayNameKnown（真名，唔係 address label）
//    去 manifest 度搵固定 icon，搵唔到就 dev warning + default child icon
// 3. teacher／tutor／family_elder：由對應 pool 用 saveSeed 做 deterministic 揀選，一旦揀咗就
//    cache 落 character.iconPath，之後成局都用返同一張
// 4. 完全冇對應（未知 identity）：用 default icon，唔會 fallback 做 emoji
export function resolveCharacterIcon(character, s) {
  if (!character) return DEFAULT_UNKNOWN_ICON;
  if (character.iconPath) return character.iconPath;

  const identity = character.generatedFromIdentityType;
  const baseName = character.baseName || character.displayNameKnown || character.name;

  if (identity === "same_age_peer") {
    const fixed = SAME_AGE_PEER_ICON_MANIFEST[baseName];
    if (fixed) {
      character.iconPath = fixed;
      character.iconSource = "fixed_by_name";
      return fixed;
    }
    warnMissingFixedIcon("same_age_peer", baseName);
    return DEFAULT_CHILD_ICON;
  }

  if (identity === "same_age_neighbor") {
    const fixed = SAME_AGE_NEIGHBOR_ICON_MANIFEST[baseName];
    if (fixed) {
      character.iconPath = fixed;
      character.iconSource = "fixed_by_name";
      return fixed;
    }
    warnMissingFixedIcon("same_age_neighbor", baseName);
    return DEFAULT_CHILD_ICON;
  }

  if (identity === "senior_student") {
    const fixed = SENIOR_STUDENT_ICON_MANIFEST[baseName];
    if (fixed) {
      character.iconPath = fixed;
      character.iconSource = "fixed_by_name";
      return fixed;
    }
    warnMissingFixedIcon("senior_student", baseName);
    return DEFAULT_CHILD_ICON;
  }

  if (character.explicitIconPath) {
    character.iconPath = character.explicitIconPath;
    character.iconSource = "explicit_path";
    return character.explicitIconPath;
  }

  if (character.explicitIconName) {
    const explicit = `${BASE}/${character.explicitIconName}`;
    character.iconPath = explicit;
    character.iconSource = "explicit";
    return explicit;
  }

  const pooled = pickStablePooledIcon(character, s);
  if (pooled) {
    character.iconPath = pooled;
    character.iconSource = "stable_pool";
    return pooled;
  }

  return CHILD_IDENTITIES.includes(identity) ? DEFAULT_CHILD_ICON : DEFAULT_ADULT_ICON;
}
