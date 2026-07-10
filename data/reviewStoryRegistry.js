// data/reviewStoryRegistry.js
// 揀返「第 6 週應該顯示邊一條回顧」——只揀 eventHistory（state.storyEventLog）入面玩家真實發生過嘅
// choice 對應到嘅 authored review story branch。搵唔到就乜都唔顯示，唔會自動生成任何故事。
// Dev mode 先會 console.warn 缺漏，唔會顯示俾玩家。
//
// 注意：authored review story 檔（v0_3）同 authored event pool 檔（v5_1）嘅 variantId／storyMemoryTags
// 命名完全唔一致（例如 event 用 "gentleListener"，review story 用 "warm_listener"——呢啲唔係 camelCase/snake_case 轉換就搞得掂，
// 純粹係兩份 authored 檔用咗唔同嘅字），而且 storyMemoryTags（choice.memoryAdd vs
// triggerStoryMemoryTags）兩邊完全冇字串重疊。純粹靠 fuzzy 命名比對搵唔返呢啲對應。
//
// 所以 Week 1 用 data/openingWeek1ReviewBridge.js 呢個明確嘅 choiceId -> branch 對照表做權威來源
// （由內容整合時逐個比對兩份 authored 檔案「同一件事」嘅文字揾出嚟，唔係新創作故事）。
// 冇喺 bridge 入面嘅 choiceId（例如之後 W2–W6 有咗自己嘅 review story 檔），先落返用
// eventId+variantId（寬鬆正規化）+ storyMemoryTags 交集嘅舊邏輯做 fallback。

import { reviewStoryGroups } from "./reviewStories.js";
import { getOpeningEventById, getOpeningEventVariant } from "./openingEvents.js";
import { getCharacterById, getCharacterDisplayName } from "./characters.js";
import { openingWeek1ReviewBridge } from "./openingWeek1ReviewBridge.js";
import { openingS2W1ReviewBridge } from "./openingS2W1ReviewBridge.js";

const openingReviewBridge = {
  ...openingWeek1ReviewBridge,
  ...openingS2W1ReviewBridge
};

const isDev = typeof location !== "undefined" && (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.protocol === "file:");
function devWarn(msg) {
  if (isDev) console.warn(`[review story] ${msg}`);
}

function getReviewGroupById(id) {
  return reviewStoryGroups.find(g => g.id === id) || null;
}

function normalizeVariantId(id) {
  if (!id) return "";
  return id
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/[-\s]+/g, "_")
    .toLowerCase();
}

function variantIdsMatch(a, b) {
  const na = normalizeVariantId(a);
  const nb = normalizeVariantId(b);
  if (!na || !nb) return false;
  if (na === nb) return true;
  // 容許少量命名drift（例如 outgoing_invite vs outgoing_inviter）：其中一個係另一個嘅字首，
  // 而且共同字首夠長先當同一個 variant，避免亂咁 match 短字串
  const shorter = na.length < nb.length ? na : nb;
  const longer = na.length < nb.length ? nb : na;
  return shorter.length >= 6 && longer.startsWith(shorter.slice(0, -1));
}

// 舊邏輯：eventId+variantId（寬鬆正規化）+ storyMemoryTags 交集，做 bridge 搵唔到時嘅 fallback
function findBranchByTagIntersection(entry, groups) {
  const candidateGroups = groups.filter(g => g.eventId === entry.eventId && variantIdsMatch(g.variantId, entry.variantId));
  const tags = entry.storyMemoryTags || [];
  for (const group of candidateGroups) {
    const branch = (group.branches || []).find(b => (b.triggerStoryMemoryTags || []).some(t => tags.includes(t)));
    if (branch) return { group, branch };
  }
  return null;
}

// 喺一條 eventHistory 紀錄（storyEventLog entry）入面揾返 matched branch：
// 優先用明確 choiceId -> branch bridge（S1-W1 / S2-W1），搵唔到先 fallback 落舊邏輯
function findBranchForLogEntry(entry, groups) {
  const bridged = entry.choiceId ? openingReviewBridge[entry.choiceId] : null;
  if (bridged) {
    const group = getReviewGroupById(bridged.reviewGroupId);
    const branch = group ? (group.branches || []).find(b => b.id === bridged.branchId) : null;
    if (group && branch) return { group, branch };
    devWarn(`bridge 表引用嘅 ${bridged.reviewGroupId}/${bridged.branchId} 喺 reviewStoryGroups 度搵唔到，跌返落 tag 比對`);
  }
  return findBranchByTagIntersection(entry, groups);
}

function resolveNpcName(group, entry, s) {
  // 優先用返呢局遊戲實際生成、持久嘅角色名（例如玩家班主任隨機咗嘅姓氏），
  // 揾唔到先落返 authored variant 嘅 npcNameFallback
  const realCharacter = (entry.charactersInvolved || []).map(id => getCharacterById(id, s)).find(Boolean);
  if (realCharacter && realCharacter.name) return getCharacterDisplayName(realCharacter.id, s) || realCharacter.name;
  const variant = getOpeningEventVariant(entry.eventId, entry.variantId);
  if (variant && variant.npcNameFallback) return variant.npcNameFallback;
  devWarn(`揾唔到 ${entry.eventId}/${entry.variantId} 對應嘅 authored NPC 名，用通用代稱頂替`);
  return null;
}

const GENERIC_PRONOUNS = {
  peerName: "旁邊的同學",
  teacherName: "老師",
  familyName: "家人",
  seniorName: "師兄／師姐"
};

function interpolate(text, s, npcName) {
  if (!text) return text;
  return text.replace(/\{(\w+)\}/g, (whole, key) => {
    if (key === "playerName") return s.playerName || "你";
    if (npcName) return npcName;
    if (GENERIC_PRONOUNS[key]) return GENERIC_PRONOUNS[key];
    devWarn(`placeholder {${key}} 冇對應嘅代入值，留返原字`);
    return whole;
  });
}

function buildFreeInputReviewNarration(entry) {
  const review = entry.freeInputReview;
  if (!review || review.mode !== "api_adjustment_on_authored_context") return null;
  const parts = [];
  if (review.playerLinePreview) parts.push(`你當時用自己的方式回應：「${review.playerLinePreview}」`);
  if (review.resultText) parts.push(review.resultText);
  return parts.length ? parts.join("。") : null;
}

function buildFreeInputReviewEffect(entry) {
  const review = entry.freeInputReview;
  if (!review || review.mode !== "api_adjustment_on_authored_context") return null;
  const lines = [];
  if (review.resultDialogueText) lines.push(`自由回應留下的細節：${review.resultDialogueText}`);
  (review.effectLines || []).forEach(line => lines.push(line));
  return lines.length ? lines.join("；") : null;
}

function getVisibleReviewImpactList(branch) {
  if (!branch) return [];
  // 六週回顧 UI 會固定顯示「影響」，所以 authored impactList 需要轉成玩家可見摘要。
  // impactListVisibility 只代表它不是正文段落，不代表可以留空。
  return branch.impactList || [];
}

function buildReviewResultText(entry, fallbackText = "") {
  if (entry.freeInputReview?.resultText) return entry.freeInputReview.resultText;
  if (entry.resultSummary) return entry.resultSummary;
  return fallbackText || "這件小事被你記了下來，成為這六週裡其中一個清楚的片段。";
}

function buildAuthoredEventFreeInputScene(entry, s) {
  const review = entry.freeInputReview;
  if (!review || review.mode !== "api_adjustment_on_authored_context") return null;
  const event = getOpeningEventById(entry.eventId);
  const variant = getOpeningEventVariant(entry.eventId, entry.variantId);
  if (!event || !variant) return null;
  const anchorChoice = (variant.playerChoices || []).find(choice => choice.id === review.anchorChoiceId) || null;
  const npcName = resolveNpcName({ eventId: entry.eventId, variantId: entry.variantId }, entry, s);
  const openingLines = (variant.openingDialogue || []).map(line => `${line.speaker || npcName || "對方"}：${line.text}`).filter(Boolean);
  const anchorResult = anchorChoice?.resultText || anchorChoice?.resultDialogue?.text || "";
  const freeInputNarration = buildFreeInputReviewNarration(entry);
  const freeInputEffect = buildFreeInputReviewEffect(entry);
  return {
    id: `${entry.eventId}_${entry.variantId}_api_free_input_fragment`,
    title: event.title || "人生片段",
    sceneHeading: event.dateRange || "",
    charactersInvolved: npcName ? [npcName] : [],
    narration: [event.sceneIntro, ...openingLines, anchorResult, freeInputNarration].filter(Boolean),
    dialogueLines: [],
    result: buildReviewResultText(entry, anchorResult),
    effects: [freeInputEffect || "你的自由回應被記入這次六週回顧。"].filter(Boolean)
  };
}

// 由過去 6 週嘅 storyEventLog 揀一條可以回顧嘅 review story，冇就回傳 null（唔生成任何內容）
export function findSixWeekReviewStory(recentLogEntries, s) {
  const candidates = [];
  recentLogEntries.forEach(entry => {
    const hasChoiceBridge = entry.choiceId && openingReviewBridge[entry.choiceId];
    if (!hasChoiceBridge && (!entry.storyMemoryTags || !entry.storyMemoryTags.length) && !entry.freeInputReview) return;
    const match = findBranchForLogEntry(entry, reviewStoryGroups);
    if (match) candidates.push({ entry, ...match });
    else {
      const authoredFreeInputScene = buildAuthoredEventFreeInputScene(entry, s);
      if (authoredFreeInputScene) candidates.push({ entry, authoredFreeInputScene });
      else devWarn(`Missing review story branch for eventId=${entry.eventId} / variantId=${entry.variantId} / choiceId=${entry.choiceId} / storyMemoryTags=${(entry.storyMemoryTags || []).join(",")}`);
    }
  });
  if (!candidates.length) return null;

  // 用 priority（如果 branch/group 有）決定顯示邊一條；冇 priority 就揀最近一次發生嘅
  candidates.sort((a, b) => {
    const pa = a.branch?.priority ?? a.group?.priority ?? 0;
    const pb = b.branch?.priority ?? b.group?.priority ?? 0;
    if (pa !== pb) return pb - pa;
    return (b.entry.totalWeek ?? 0) - (a.entry.totalWeek ?? 0);
  });

  const { entry, group, branch } = candidates[0];
  if (candidates[0].authoredFreeInputScene) return candidates[0].authoredFreeInputScene;
  const npcName = resolveNpcName(group, entry, s);
  const freeInputNarration = buildFreeInputReviewNarration(entry);
  const freeInputEffect = buildFreeInputReviewEffect(entry);

  return {
    id: branch.id,
    title: interpolate(group.title, s, npcName),
    sceneHeading: `${group.timeText || ""}${group.timeText && group.placeText ? "・" : ""}${group.placeText || ""}`,
    charactersInvolved: npcName ? [npcName] : [],
    narration: [interpolate(group.sceneOpening, s, npcName), interpolate(branch.fullStoryText, s, npcName), freeInputNarration].filter(Boolean),
    dialogueLines: [],
    result: buildReviewResultText(entry),
    effects: [...getVisibleReviewImpactList(branch).map(t => interpolate(t, s, npcName)), freeInputEffect].filter(Boolean)
  };
}
