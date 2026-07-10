// data/openingEventRegistry.js
// 揀返「本週應該出現邊個 opening event」嘅邏輯——純粹讀 data/openingEvents.js 嘅 eventScheduling／variants，
// 唔喺呢度寫死任何 W1–W12 嘅 event id、文字或角色名。
//
// eventScheduling schema（嚟自 authored 檔案）：
//   { baseWeight, weekRange:[min,max], conditions:[string], exclusiveGroup, onceOnly, cooldownWeeks,
//     prerequisiteMemory:[string], sourceChannel, involvementRole }
//
// 每一週有獨立 event pool，唔可以將 W1–W12 全部 events 溝埋一齊做一個大 random pool 抽：
// resolveWeeklyPool(week) 只會揀返 weekSlot 啱啱好等於嗰一週嘅 event，Week 1 淨係揀到 w1_*，
// Week 2 淨係揀到 w2_*，如此類推。weekSlot 由 authored id 前綴（w1_/w2_/.../w12_）推導出嚟，
// 唔係喺呢個檔案手寫任何 event id——如果作者之後想改變某個 event 屬於邊一週，改authored 檔嘅 id
// 前綴或者 eventScheduling.weekRange 就會自動反映。weekRange 用嚟做 sanity check（要同 weekSlot
// 一致），唔再當成「呢個 event 喺呢幾週之間隨時可以出」嘅寬鬆範圍。
//
// Week 6 嘅 "w6_life_fragment_selector"（eventScheduling.involvementRole === "replay_selector"）
// 唔係普通隨機事件，而係「六週人生片段回顧」呢個 system step 專用，唔會入普通 weekly pool 俾人隨機抽中；
// 回顧流程由 engine.js 嘅 generateSixWeekStoryScene() 獨立處理。

import { openingEvents, selectedNeighborRule } from "./openingEvents.js";
import { personalityIdMatches } from "./identityPersonalities.js";

const isDev = typeof location !== "undefined" && (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.protocol === "file:");
function devWarn(msg) {
  if (isDev) console.warn(`[opening event] ${msg}`);
}

// authored 資料嘅 identityTypeId 有 "identity_" 前綴（例如 "identity_same_age_peer"），
// 但 generatedCharacters／identityTypes.js 用嘅內部 id 冇呢個前綴（"same_age_peer"）。
function normalizeIdentityTypeId(id) {
  return id ? id.replace(/^identity_/, "") : id;
}

// 由 event id 前綴推導 weekSlot（w1_xxx -> 1, w2_xxx -> 2……）。呢個先係決定「呢個 event 屬於邊一週」
// 嘅權威來源；weekRange 只用嚟做一致性 sanity check，唔再當成寬鬆嘅可用範圍。
export function getEventWeekSlot(event) {
  const m = /^(?:s2_)?w([1-9]|1[0-2])_/.exec(event.id || "");
  return m ? Number(m[1]) : null;
}

export function getEventTermSlot(event) {
  if (event.termId) return event.termId;
  if ((event.id || "").startsWith("s2_w")) return "term_p1_s2";
  return "term_p1_s1";
}

function isReplaySelector(event) {
  return event.eventScheduling?.involvementRole === "replay_selector";
}

// 只揀返「weekSlot 啱啱好等於 week」嘅 event，唔包括冇 weekSlot（id 前綴唔係 w1_~w12_）嘅 event，
// 亦都唔包括 Week 6 嘅 system replay selector（呢個由 generateSixWeekStoryScene() 專門處理）
export function resolveWeeklyPool(week, s = null) {
  return openingEvents.filter(e => {
    if (getEventWeekSlot(e) !== week || isReplaySelector(e)) return false;
    if (!s?.currentTermId) return true;
    return getEventTermSlot(e) === s.currentTermId;
  });
}

// conditions 喺 authored 資料入面係 string（例如 "can_fallback_to_no_fragment_dialogue"），
// 唔係 engine 現有嘅 {type,...} condition object，所以呢度用 flag 名做寬鬆檢查：
// 如果 state.flags 有同名（或 true）key 就當滿足；如果完全冇對應機制，就當通過但出 dev warning，
// 唔會阻住揀 event（避免因為未知 condition 令成個 pool 揀唔到嘢），但都唔會噏文字入去。
function checkStringConditions(conditions, s) {
  if (!conditions || !conditions.length) return true;
  return conditions.every(cond => {
    if (cond && typeof cond === "object") return checkStructuredCondition(cond, s);
    if (s.flags && Object.prototype.hasOwnProperty.call(s.flags, cond)) return !!s.flags[cond];
    devWarn(`condition "${cond}" 喺 state.flags 度搵唔到對應標記，暫時當通過`);
    return true;
  });
}

function checkStructuredCondition(condition, s) {
  switch (condition.type) {
    case "currentTerm":
      return s.currentTermId === condition.termId;
    default:
      devWarn(`structured condition "${condition.type}" 暫時未支援，當通過`);
      return true;
  }
}

function checkPrerequisiteMemory(prereq, s) {
  if (!prereq || !prereq.length) return true;
  const memories = s.memories || [];
  return prereq.every(req => {
    if (req.startsWith("any:")) {
      const tag = req.slice(4);
      return memories.some(m => m.includes(tag));
    }
    return memories.includes(req);
  });
}

// 呢個淨係揀「已經喺本週 pool 入面」嘅 event 仲有冇資格出（onceOnly／cooldown／exclusiveGroup／
// conditions／prerequisiteMemory），唔再負責「呢個 event 屬唔屬於本週」——嗰個判斷交咗俾
// resolveWeeklyPool() 用 weekSlot 決定，呢度唔會再掉返轉頭用 weekRange 當成寬鬆嘅可用範圍。
function isEligible(event, s) {
  const sched = event.eventScheduling;
  if (!sched) { devWarn(`事件 ${event.id} 冇 eventScheduling，跳過`); return false; }
  if (sched.onceOnly && s.usedOpeningEventIds.includes(event.id)) return false;
  const lastWeek = s.openingEventCooldowns[event.id];
  if (lastWeek !== undefined && (s.totalWeeksElapsed ?? 0) - lastWeek < (sched.cooldownWeeks ?? 0)) return false;
  if (sched.exclusiveGroup && s.openingExclusiveGroupUsedThisWeek[sched.exclusiveGroup]) return false;
  if (!checkStringConditions(sched.conditions, s)) return false;
  if (!checkPrerequisiteMemory(sched.prerequisiteMemory, s)) return false;
  return true;
}

function weightedPick(pool) {
  const totalWeight = pool.reduce((sum, e) => sum + (e.eventScheduling.baseWeight || 1), 0);
  let roll = Math.random() * totalWeight;
  for (const e of pool) {
    roll -= (e.eventScheduling.baseWeight || 1);
    if (roll <= 0) return e;
  }
  return pool[pool.length - 1];
}

function ensurePrimarySameAgeNeighbor(s) {
  if (s.primarySameAgeNeighborId && selectedNeighborRule.pool.includes(s.primarySameAgeNeighborId)) {
    return s.primarySameAgeNeighborId;
  }
  const pool = selectedNeighborRule.pool;
  const seed = `${s.saveSeed ?? 0}_${s.currentTermId ?? ""}_${selectedNeighborRule.selectAt}`;
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) | 0;
  const chosen = pool[Math.abs(hash) % pool.length];
  s.primarySameAgeNeighborId = chosen;
  s.primarySameAgeNeighborMet = false;
  s.primarySameAgeNeighborNameKnown = false;
  return chosen;
}

function pickRequiredEventIfNeeded(pool, s, week) {
  if (s.currentTermId !== "term_p1_s2" || week !== 1) return null;
  if (s.primarySameAgeNeighborId) return null;
  return pool.find(e => e.metadata?.selectedNeighborSourceEvent && e.eventScheduling?.requiredFirstNeighborEvent) || null;
}

// variant 揀法：優先揀返同玩家已生成角色（generatedCharacters）身份／性格相符嘅 variant，
// 令 NPC 個性同已存在嘅角色一致；揾唔到就隨機揀一個 variant（authored 內容本身冇規定必揀邊個），
// 並喺 dev mode 出 warning 提示冇personality match（唔係錯誤，只係話冇對應到已生成角色）。
function findMatchingCharacter(v, s) {
  if (v.npcIdHint && s.generatedCharacters?.[v.npcIdHint]) return s.generatedCharacters[v.npcIdHint];
  const wantedType = normalizeIdentityTypeId(v.identityTypeId);
  const generated = Object.values(s.generatedCharacters || {});
  return generated.find(c =>
    c.generatedFromIdentityType === wantedType &&
    personalityIdMatches(c.personalityId, v.personalityId, wantedType)
  ) || null;
}

function pickVariant(event, s) {
  const variants = event.variants || [];
  if (!variants.length) return null;
  if (event.metadata?.variantSelectionMode === "selectedNeighborOnly") {
    const selectedId = ensurePrimarySameAgeNeighbor(s);
    const selectedVariant = variants.find(v => v.neighborId === selectedId || v.npcIdHint === selectedId);
    if (selectedVariant) return selectedVariant;
    devWarn(`事件 ${event.id} 指定 selectedNeighborOnly，但搵唔到 ${selectedId} variant`);
  }
  const knownHintVariant = variants.find(v => v.npcIdHint && (s.knownCharacters || []).includes(v.npcIdHint));
  if (knownHintVariant) return knownHintVariant;
  const matched = variants.find(v => findMatchingCharacter(v, s));
  if (matched) return matched;
  devWarn(`事件 ${event.id} 揾唔到同已生成角色相符嘅 variant，隨機揀一個`);
  return variants[Math.floor(Math.random() * variants.length)];
}

// 揾返呢個 event/variant 應該用邊個已生成角色（characterSlots id）做 speaker/senderId，
// 等 UI 可以用 engine 現有嘅 getCharacterById／getCharacterDisplayName 顯示正確、持久嘅名，
// 唔會再出現冇對應角色記錄嘅 ad hoc npc id（會令 UI 冇 senderId 可以查，跌落「神秘人」fallback）。
export function resolveOpeningEventNpcId(event, variant, s) {
  if (variant?.usesSelectedNeighbor) {
    if (!s.primarySameAgeNeighborId) ensurePrimarySameAgeNeighbor(s);
    return s.primarySameAgeNeighborId || null;
  }
  const matched = findMatchingCharacter(variant, s);
  if (matched) return matched.id;
  // 冇 personality 完全對得上嘅已生成角色（呢個 identityType 嘅 pool 可能仲有未覆蓋 event 嘅 personality），
  // 退而求其次揀返「呢個身份類型」入面隨便一個已生成角色，好過完全冇 senderId、跌落「神秘人」
  const wantedType = normalizeIdentityTypeId(variant.identityTypeId);
  const generated = Object.values(s.generatedCharacters || {});
  const sameType = generated.find(c => c.generatedFromIdentityType === wantedType);
  if (sameType) {
    devWarn(`${event.id}/${variant.variantId} 冇 personality 完全相符嘅角色，改用同身份類型嘅 ${sameType.id}`);
    return sameType.id;
  }
  devWarn(`${event.id}/${variant.variantId} 揾唔到任何同身份類型嘅已生成角色，冇持久角色 id 可以用`);
  return null;
}

// 揀返最多一個 main opening event（唔會自動揀 light event，因為 authored 資料入面冇獨立標記
// 邊啲事件係 "light"——如果之後作者加返呢個欄位，呢度先擴充判斷）。
// candidatePool 一定係 resolveWeeklyPool(week)，即係嗰一週先揀得到嗰一週嘅 event，
// 唔會攞成個 W1–W12 openingEvents 陣列去 random（呢個係之前錯誤嘅寫法，已經修正）。
// week 參數預設用 s.currentWeek，但呼叫方可以指定用邊一週嘅 pool（例如「玩完 Week 1 撳下一週」
// 想睇返 Week 1 自己嘅 event，就要傳入 Week 1，而唔係 advanceWeek() 已經 +1 之後嘅 currentWeek）。
export function pickOpeningEventForWeek(s, week = s.currentWeek) {
  const weeklyPool = resolveWeeklyPool(week, s);
  const pool = weeklyPool.filter(e => isEligible(e, s));
  if (!pool.length) return null;
  const chosenEvent = pickRequiredEventIfNeeded(pool, s, week) || weightedPick(pool);
  const chosenVariant = pickVariant(chosenEvent, s);
  if (!chosenVariant) { devWarn(`事件 ${chosenEvent.id} 冇任何 variant，跳過`); return null; }

  const sched = chosenEvent.eventScheduling;
  s.usedOpeningEventIds.push(chosenEvent.id);
  s.openingEventCooldowns[chosenEvent.id] = s.totalWeeksElapsed ?? 0;
  if (sched.exclusiveGroup) s.openingExclusiveGroupUsedThisWeek[sched.exclusiveGroup] = true;

  return { event: chosenEvent, variant: chosenVariant };
}

// 每週開始（handleAdvanceWeek 之後）要清空「本週已經用過邊個 exclusiveGroup」
export function resetOpeningEventWeekState(s) {
  s.openingExclusiveGroupUsedThisWeek = {};
}

// ============================================================
// Week-pool purity 測試：證明 resolveWeeklyPool(N) 淨係含有 wN_ 開頭嘅 event，
// 冇任何跨週漏入（例如 Week 1 唔會抽到 w4_ 事件）。喺 contentValidation.js 同開發者手動測試都用呢個。
// ============================================================
export function testWeeklyPoolPurity() {
  const results = [];
  for (let week = 1; week <= 12; week++) {
    const pool = resolveWeeklyPool(week);
    const ids = pool.map(e => e.id);
    const expectedPrefix = `w${week}_`;
    const expectedS2Prefix = `s2_w${week}_`;
    const impure = ids.filter(id => !id.startsWith(expectedPrefix) && !id.startsWith(expectedS2Prefix));
    results.push({ week, ids, impure, pure: impure.length === 0 });
  }
  return results;
}
