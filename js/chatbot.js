// js/chatbot.js
// Chatbot 係 bonus function：唔係 weekly action、唔係 event、唔係 hobby class、唔係 review story。
// 唔消耗 AP，唔可以解鎖未認識角色，唔可以生成新正式事件，唔可以取代 authored event。
// 合法 gameplay 效果：
// 1. 保底 closeness：淨係要成功傾到一句偈（唔理內容），就一定加 +1 closeness，每個角色每週封頂 +1，
//    唔經 LLM 判斷（避免 LLM 覺得內容太普通就唔加，令玩家覺得「傾咗都冇反應」）。
// 2. LLM 判斷嘅細幅調整：核心屬性／skillExp／closeness 以外嘅 relationship 維度（trust/respect/
//    dependency/misunderstanding），每次改動 -2~+2，同 opening event free-input 同一套 sanitize／
//    clamp 規則（engine.js 嘅 sanitizeChatDeltaEvaluation／applyChatDeltaEvaluation），每角色每週
//    最多套用一次。
//
// BYOK（bring your own key）模式：呢個遊戲唔用開發者自己嘅 API key。玩家要自己輸入自己嘅
// Gemini／DeepSeek API key，先可以用呢個功能。API key 一律唔存入 game state（即係唔會入 save
// data／chatHistory／eventHistory），淨係存喺瀏覽器嘅 sessionStorage（預設）或者 localStorage
// （玩家勾選「記住喺呢部裝置」先會用），backend relay 亦都唔會 log 或者保存呢條 key。

import { getKnownCharacters, getCharacterRelationship, applyRelationshipEffects, generateRelationshipSummary, sanitizeChatDeltaEvaluation, applyChatDeltaEvaluation } from "./engine.js";
import { getCharacterById } from "../data/characters.js";
import { getStageById } from "../data/stages.js";
import { getIdentityTypeById } from "../data/identityTypes.js";
import { getPersonalityByAnyId } from "../data/identityPersonalities.js";
import { statDescriptions, skillDescriptions, relationshipDimensionDescriptions, formatStatDefinitionLines } from "../data/statDefinitions.js";

const MAX_CHAT_HISTORY = 20;
const CHARACTER_CONTEXT_ERROR = "角色資料不足，暫時不能聊天。";
const IDENTITY_MISMATCH_ERROR = "角色回覆不符合人物設定，請再試一次。";

export const CHAT_PROVIDERS = [
  { id: "gemini", label: "Gemini" },
  { id: "deepseek", label: "DeepSeek" }
];

// ============================================================
// BYOK API key 管理：淨係喺瀏覽器 storage 度處理，永遠唔會入 state／save data
// ============================================================
const SESSION_KEY_PREFIX = "chatbot_apikey_session_";
const LOCAL_KEY_PREFIX = "chatbot_apikey_local_";
const PROVIDER_PREF_KEY = "chatbot_selected_provider";

export function getSelectedProvider() {
  try {
    const saved = localStorage.getItem(PROVIDER_PREF_KEY);
    if (CHAT_PROVIDERS.some(p => p.id === saved)) return saved;
  } catch { /* localStorage 唔可用（例如 private mode）就淨係用預設值 */ }
  return "gemini";
}

export function setSelectedProvider(providerId) {
  if (!CHAT_PROVIDERS.some(p => p.id === providerId)) return;
  try { localStorage.setItem(PROVIDER_PREF_KEY, providerId); } catch { /* 存唔到都唔緊要，只係下次要再揀 */ }
}

// 玩家自己嘅 key：session only（預設）淨係喺呢個分頁生命週期內有效；remember=true 先會存落 localStorage
export function getApiKey(providerId) {
  try {
    return sessionStorage.getItem(SESSION_KEY_PREFIX + providerId)
      || localStorage.getItem(LOCAL_KEY_PREFIX + providerId)
      || "";
  } catch {
    return "";
  }
}

export function setApiKey(providerId, apiKey, remember) {
  const trimmed = (apiKey || "").trim();
  clearApiKey(providerId);
  if (!trimmed) return;
  try {
    if (remember) {
      localStorage.setItem(LOCAL_KEY_PREFIX + providerId, trimmed);
    } else {
      sessionStorage.setItem(SESSION_KEY_PREFIX + providerId, trimmed);
    }
  } catch { /* storage 滿咗或者 private mode 拒絕寫入，key 就只會喺呢次 call 有效，唔會報錯畀玩家 */ }
}

export function clearApiKey(providerId) {
  try {
    sessionStorage.removeItem(SESSION_KEY_PREFIX + providerId);
    localStorage.removeItem(LOCAL_KEY_PREFIX + providerId);
  } catch { /* 冇嘢好清 */ }
}

export function maskApiKey(apiKey) {
  if (!apiKey) return "";
  if (apiKey.length <= 6) return "•".repeat(apiKey.length);
  return `${apiKey.slice(0, 3)}${"•".repeat(6)}${apiKey.slice(-4)}`;
}

// ============================================================
// Model 管理：provider 同 model 一定要分開存，唔可以兩個 provider 共用一個 model field default，
// 亦都唔可以硬寫死一個 model——presets 只係「建議預設值」，玩家隨時可以手動改
// ============================================================
const MODEL_PREF_PREFIX = "chatbot_selected_model_";

// Fallback presets：喺 /api/chatbot/defaults 攞唔到（例如 backend 冇跟埋呢個 endpoint）先會用呢份，
// 呢份唔係唯一真相，只係方便玩家有個起點
const FALLBACK_MODEL_PRESETS = {
  gemini: { presets: ["gemini-2.5-flash", "gemini-2.5-pro", "gemini-3.5-flash"], default: "gemini-2.5-flash" },
  deepseek: { presets: ["deepseek-v4-flash", "deepseek-v4-pro"], default: "deepseek-v4-flash" }
};

let cachedDefaults = null;

export async function getModelDefaults() {
  if (cachedDefaults) return cachedDefaults;
  try {
    const res = await fetch("/api/chatbot/defaults");
    if (res.ok) {
      cachedDefaults = await res.json();
      return cachedDefaults;
    }
  } catch { /* backend 攞唔到就用返 fallback，唔阻住玩家 */ }
  return FALLBACK_MODEL_PRESETS;
}

export function getSelectedModel(providerId, presetDefault) {
  try {
    const saved = localStorage.getItem(MODEL_PREF_PREFIX + providerId);
    if (saved) return saved;
  } catch { /* 用返 preset default */ }
  return presetDefault || FALLBACK_MODEL_PRESETS[providerId]?.default || "";
}

export function setSelectedModel(providerId, modelId) {
  const trimmed = (modelId || "").trim();
  try {
    if (trimmed) localStorage.setItem(MODEL_PREF_PREFIX + providerId, trimmed);
    else localStorage.removeItem(MODEL_PREF_PREFIX + providerId);
  } catch { /* 存唔到都唔緊要，下次要再揀 */ }
}

// 攞可用 model 清單（如果 provider 支援 list models）：攞唔到唔會阻住玩家，
// frontend 會繼續用返 preset 加手動輸入
export async function fetchAvailableModels(providerId, apiKey) {
  if (!apiKey) return { ok: false, models: [] };
  try {
    const res = await fetch("/api/chatbot/models", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ provider: providerId, apiKey })
    });
    const data = await res.json().catch(() => null);
    if (!data || !data.ok) return { ok: false, models: [] };
    return { ok: true, models: data.models || [] };
  } catch {
    return { ok: false, models: [] };
  }
}

function getRelayErrorMessage(errorType, status, bodyPreview) {
  if (status === 501) {
    return "BYOK relay 尚未實作或路由未接好。請用 python3 serve.py 8000 啟動本專案，不要用 Live Server 或 python3 -m http.server；否則 /api/chatbot/byok 不會存在。";
  }
  if (errorType === "non_json_response") {
    return `伺服器冇回傳合法 JSON（HTTP ${status}）。內容預覽：${bodyPreview || "（空白）"}`;
  }
  return `未知錯誤（HTTP ${status}）`;
}

async function fetchRelayJson(url, requestOptions, debugInfo) {
  let res;
  try {
    res = await fetch(url, requestOptions);
  } catch (err) {
    console.debug("[chatbot byok debug]", {
      requestedUrl: url,
      method: requestOptions.method || "GET",
      provider: debugInfo.provider,
      selectedModel: debugInfo.model,
      responseStatus: 0,
      responseContentType: "",
      responseTextPreview: err?.message || "Failed to fetch"
    });
    throw {
      errorType: "network_error",
      status: 0,
      message: err?.name === "AbortError"
        ? "已取消等待回覆。"
        : err instanceof TypeError
        ? "瀏覽器可能不能直接呼叫此 provider，請使用 BYOK relay 模式（請確認 server 有起緊）。"
        : `網絡錯誤：${err?.message || "連唔到 relay server"}`
    };
  }

  const contentType = res.headers.get("content-type") || "";
  const raw = await res.text();
  const bodyPreview = raw.slice(0, 300);

  console.debug("[chatbot byok debug]", {
    requestedUrl: url,
    method: requestOptions.method || "GET",
    provider: debugInfo.provider,
    selectedModel: debugInfo.model,
    responseStatus: res.status,
    responseContentType: contentType,
    responseTextPreview: bodyPreview
  });

  if (!contentType.includes("application/json")) {
    throw {
      errorType: "non_json_response",
      status: res.status,
      bodyPreview,
      message: getRelayErrorMessage("non_json_response", res.status, bodyPreview)
    };
  }

  try {
    return { res, data: JSON.parse(raw || "null") };
  } catch {
    throw {
      errorType: "non_json_response",
      status: res.status,
      bodyPreview,
      message: getRelayErrorMessage("non_json_response", res.status, bodyPreview)
    };
  }
}

function computePlayerLifeStage(stageId) {
  if (["stage_p1", "stage_p2", "stage_p3"].includes(stageId)) return "primary_lower";
  if (["stage_p4", "stage_p5", "stage_p6"].includes(stageId)) return "primary_upper";
  if (stageId && stageId.startsWith("stage_secondary")) return "secondary";
  if (stageId && (stageId.startsWith("stage_uni") || stageId.startsWith("stage_work"))) return "adult";
  return "primary_lower";
}

function normalizeIdentityForChat(identityTypeId, roleLabel = "") {
  if (identityTypeId === "family_elder") return "family_parent";
  if (identityTypeId === "family_peer") return "family_sibling";
  if (identityTypeId === "tutor") return "teacher";
  if (identityTypeId === "same_age_peer") return "same_age_peer";
  if (identityTypeId === "senior_student") return "senior_student";
  if (identityTypeId === "teacher") return "teacher";
  if (roleLabel.includes("爸爸") || roleLabel.includes("媽媽")) return "family_parent";
  return identityTypeId || "";
}

function relationshipToPlayerFor(identityTypeId, roleLabel = "") {
  if (roleLabel.includes("爸爸")) return "father";
  if (roleLabel.includes("媽媽")) return "mother";
  if (identityTypeId === "family_elder") return "guardian";
  if (identityTypeId === "family_peer") return "sibling";
  if (identityTypeId === "same_age_peer") return "classmate";
  if (identityTypeId === "senior_student") return "senior";
  if (identityTypeId === "teacher" || identityTypeId === "tutor") return "teacher";
  return identityTypeId || "known_character";
}

function computeCharacterLifeStage(character, playerLifeStage) {
  const identityTypeId = character.generatedFromIdentityType;
  const ageGroup = character.ageGroup || "";
  if (character.lifeStage) return character.lifeStage;
  if (ageGroup === "成人" || ["family_elder", "teacher", "tutor"].includes(identityTypeId)) {
    return "adult";
  }
  if (identityTypeId === "senior_student") {
    return playerLifeStage === "secondary" || playerLifeStage === "adult" ? "secondary" : "primary_upper";
  }
  if (identityTypeId === "same_age_peer" || identityTypeId === "family_peer") {
    return playerLifeStage;
  }
  return "";
}

function currentAgeForLifeStage(lifeStage, stage) {
  if (lifeStage === "adult") return "adult";
  if (lifeStage === "primary_upper") return "9-12歲";
  if (lifeStage === "secondary") return "12-18歲";
  return stage?.ageRange || null;
}

function currentGradeForCharacter(character, lifeStage, stage) {
  if (character.currentGrade) return character.currentGrade;
  if (lifeStage === "adult") return null;
  if (character.generatedFromIdentityType === "senior_student") return lifeStage === "secondary" ? "中學生" : "高小";
  return stage?.grade || null;
}

function lifeStageGuidance(lifeStage) {
  const map = {
    primary_lower: "初小：短句較多，關心小息、排隊、功課、老師、同學、玩樂。",
    primary_upper: "高小：表達較清楚，開始有自我意識，會在意活動、成績、朋友圈、被老師或同學點睇。",
    secondary: "中學：語氣更成熟，可以有壓力、目標、社交圈變化、疏離或重新靠近。",
    adult: "成人：符合家長、老師、職員或其他成人身份；不可把自己說成正在讀小學、要交功課、要默書、要小息排隊，除非明確是在回憶自己小時候。"
  };
  return map[lifeStage] || "按角色當前年齡和身份自然說話。";
}

function identityGuardText(identity) {
  const map = {
    family_parent: "family_parent / 家長：你是成人照顧者。可以談工作、放工、買餸、煮飯、家務、接送、看手冊、關心玩家學校、和另一位家長溝通。不可把自己說成正在讀小學、要交功課、要默書、要小息排隊、要去補習社做小學生功課。",
    same_age_peer: "same_age_peer / 同齡同學：你是玩家同年級或相近年級學生。可以談小息、課室、同學、老師、功課、活動、玩樂、測驗壓力。不可突然用成人職場語氣，不可知道家長內部安排，除非事件已經讓你知道。",
    senior_student: "senior_student / 高年級學生：你是高年級學生或風紀，比小一熟悉校園規則，但仍然是學生。不可像老師那樣全知，也不可像同齡小一那樣完全不熟學校。",
    teacher: "teacher / 老師或導師：你是成人教育者。可以談課堂、班規、觀察學生、提醒、鼓勵、安排活動。不可把自己說成學生，不可透露未公開劇情資訊。",
    family_sibling: "family_sibling / 家中兄弟姊妹：必須按 currentAge / lifeStage 判斷。如果你是學生，可以有學生生活；如果已成人，就不能用小學生生活內容。不要只因為 identity 是 family 就當成家長。"
  };
  return map[identity] || "按 selectedCharacter 的身份保持一致，不要改扮演對象。";
}

function buildSelectedCharacterContext(character, s) {
  const stage = getStageById(s.stageId);
  const rawIdentity = character.generatedFromIdentityType;
  const identityType = rawIdentity ? getIdentityTypeById(rawIdentity) : null;
  const identity = normalizeIdentityForChat(rawIdentity, character.roleLabel);
  const playerLifeStage = computePlayerLifeStage(s.stageId);
  const lifeStage = computeCharacterLifeStage(character, playerLifeStage);
  const personality = getPersonalityByAnyId(character.personalityId, rawIdentity);
  const summary = generateRelationshipSummary(character.id, s);
  const relationshipValue = getCharacterRelationship(character.id, s);
  const memories = (s.characterMemories[character.id] || []).slice(-8);
  const recentEvents = (s.storyEventLog || [])
    .filter(e => (e.charactersInvolved || []).includes(character.id))
    .slice(-5);
  const thread = getChatThread(character.id, s);

  if (!character.id || !identity || !character.roleLabel || !lifeStage || !identityType) return null;

  return {
    selectedCharacter: {
      characterId: character.id,
      displayName: character.name,
      identity,
      identityTypeId: rawIdentity,
      roleLabel: character.roleLabel,
      relationshipToPlayer: relationshipToPlayerFor(rawIdentity, character.roleLabel),
      currentAge: character.currentAge || currentAgeForLifeStage(lifeStage, stage),
      currentGrade: currentGradeForCharacter(character, lifeStage, stage),
      lifeStage,
      personalityId: character.personalityId,
      personalityDescription: personality?.description || character.personalGoal || "",
      speakingStyle: [personality?.label, ...(personality?.toneLines ? Object.values(personality.toneLines) : [])].filter(Boolean).join(" / "),
      knownByPlayer: (s.knownCharacters || []).includes(character.id),
      unlockedInCharacterList: getEligibleChatCharacters(s).some(c => c.id === character.id)
    },
    gameState: {
      currentWeek: s.currentWeek,
      playerAge: stage?.ageRange || null,
      playerGrade: stage?.grade || null,
      playerLifeStage,
      relationshipStage: summary?.stageLabel || "啱啱識",
      relationshipValue,
      knownMemories: memories,
      recentEvents,
      chatMemorySummary: thread?.smallChatMemorySummary || "",
      whatThisCharacterKnows: [
        "selectedCharacter 自己身份、性格、同玩家已發生的共同記憶",
        "已寫入 memories / recentEvents 的事件",
        "玩家剛剛直接對 selectedCharacter 說的內容"
      ],
      whatThisCharacterDoesNotKnow: [
        "未發生的劇情",
        "未解鎖角色的秘密",
        "玩家沒有告訴 selectedCharacter 的其他 NPC 內部安排",
        "系統數值、eventId、memoryTag、relationship point"
      ]
    },
    promptSummary: {
      selectedCharacterId: character.id,
      displayName: character.name,
      identity,
      roleLabel: character.roleLabel,
      relationshipToPlayer: relationshipToPlayerFor(rawIdentity, character.roleLabel),
      currentAge: character.currentAge || currentAgeForLifeStage(lifeStage, stage),
      currentGrade: currentGradeForCharacter(character, lifeStage, stage),
      lifeStage,
      personalityId: character.personalityId,
      relationshipStage: summary?.stageLabel || "啱啱識",
      memoryCount: memories.length,
      recentEventCount: recentEvents.length
    }
  };
}

// ---------- Chatbot 只可以顯示已經解鎖到 character list 嘅角色，同 action card 用返同一個判斷來源 ----------
export function getEligibleChatCharacters(s) {
  return getKnownCharacters(s).filter(c => c.isActive !== false);
}

function getOrCreateThread(characterId, s) {
  if (!s.chatbot) s.chatbot = { threads: {} };
  if (!s.chatbot.threads[characterId]) {
    s.chatbot.threads[characterId] = {
      chatHistory: [],
      smallChatMemorySummary: "",
      lastChattedWeek: null,
      chatDeltaAppliedThisWeek: null,
      chatClosenessGainedThisWeek: null
    };
  }
  return s.chatbot.threads[characterId];
}

export function getChatThread(characterId, s) {
  return s.chatbot?.threads?.[characterId] || null;
}

// 防止同一角色喺同一週用聊天狂刷數值：每角色每週最多套用一次 LLM 判斷嘅 delta
// （唔限制傾偈次數本身，淨係限制 statusDelta／skillExpDelta／relationshipDelta 套用次數）。
function canApplyChatDeltaThisWeek(thread, currentWeek) {
  return thread.chatDeltaAppliedThisWeek !== currentWeek;
}

function canGainClosenessThisWeek(thread, currentWeek) {
  return thread.chatClosenessGainedThisWeek !== currentWeek;
}

// closeness 由 LLM 判斷嘅 playerToneTowardNpc（positive／neutral／negative）決定方向，
// 但幅度固定 ±1，每個角色每週封頂一次改動（唔理係加定減）。
function applyChatClosenessFromTone(characterId, closenessDelta, s) {
  if (!closenessDelta) return { applied: false };
  const thread = getOrCreateThread(characterId, s);
  if (!canGainClosenessThisWeek(thread, s.currentWeek)) return { applied: false };

  applyRelationshipEffects([{ characterId, dimension: "closeness", amount: closenessDelta }], s);
  thread.chatClosenessGainedThisWeek = s.currentWeek;

  s.actionRelationshipHistory = s.actionRelationshipHistory || [];
  s.actionRelationshipHistory.push({
    type: "chatbot_relationship_gain",
    week: s.currentWeek,
    characterId,
    amount: closenessDelta,
    dimension: "closeness",
    reason: "player_chatted_with_unlocked_character"
  });
  if (s.actionRelationshipHistory.length > 100) s.actionRelationshipHistory = s.actionRelationshipHistory.slice(-100);
  return { applied: true, amount: closenessDelta };
}

function formatMemoryLines(memories) {
  return memories.length
    ? memories.map(m => `・第${m.week ?? "?"}週：${m.text}`).join("\n")
    : "（暫時未有特別共同記憶）";
}

function formatRecentEventLines(events) {
  return events.length
    ? events.map(e => `・第${e.week ?? "?"}週：${e.eventTitle || e.eventId || "事件"}：${e.resultSummary || ""}`).join("\n")
    : "（暫時未有同 selectedCharacter 直接相關嘅事件）";
}

export function getCharacterChatContext(character, s) {
  return buildSelectedCharacterContext(character, s);
}

// ---------- Prompt 組裝：唯一扮演對象係 selectedCharacter，playerMessage 只係話題 ----------
export function buildCharacterChatPrompt(character, s, playerMessage, options = {}) {
  const context = buildSelectedCharacterContext(character, s);
  if (!context) return null;
  const { selectedCharacter, gameState } = context;
  const rel = gameState.relationshipValue || {};
  const statKeys = Object.keys(s.stats || {});
  const skillKeys = Object.keys(s.skillExp || {});
  const extraReminder = options.identityReminder
    ? [
        ``,
        `【身份錯位修正提醒】`,
        `上一個回覆疑似把 selectedCharacter 身份講錯。重新回覆時，你必須只扮演 ${selectedCharacter.displayName}（${selectedCharacter.identity} / ${selectedCharacter.roleLabel} / ${selectedCharacter.lifeStage}），不可把自己講成玩家、其他 NPC、老師、家長或同學。`
      ].join("\n")
    : "";

  return [
    `【最高優先規則】`,
    `你正在扮演 selectedCharacter，不是玩家，不是旁白，不是系統。玩家是另一個人，正在和你說話。`,
    `ChatbotPanel 中玩家選中的 selectedCharacterId 是唯一扮演對象。playerMessage 只是玩家對 selectedCharacter 說的話，不可以用 playerMessage 重新判斷你應該扮演誰。`,
    `你不能根據玩家訊息裡出現「媽媽」「爸爸」「老師」「同學」等字眼改扮演對象。你不能用最近 event NPC、action target、relationship target 或 generic 小學生 prompt 代替 selectedCharacter。`,
    `你不能替玩家說話，不能把自己的身份和玩家身份混在一起。你只能根據 selectedCharacter 的 identity、currentAge、currentGrade、lifeStage、personality、relationship、memory 回答。`,
    `你不知道未發生的事件，也不知道未解鎖角色。你不能提到 AI、prompt、system、eventId、memoryTag、relationship point。`,
    ``,
    `【selectedCharacter】`,
    `characterId: ${selectedCharacter.characterId}`,
    `displayName: ${selectedCharacter.displayName}`,
    `identity: ${selectedCharacter.identity}`,
    `rawIdentityTypeId: ${selectedCharacter.identityTypeId}`,
    `roleLabel: ${selectedCharacter.roleLabel}`,
    `relationshipToPlayer: ${selectedCharacter.relationshipToPlayer}`,
    `currentAge: ${selectedCharacter.currentAge ?? "null"}`,
    `currentGrade: ${selectedCharacter.currentGrade ?? "null"}`,
    `lifeStage: ${selectedCharacter.lifeStage}`,
    `personalityId: ${selectedCharacter.personalityId}`,
    `personalityDescription: ${selectedCharacter.personalityDescription || "未特別註明"}`,
    `speakingStyle: ${selectedCharacter.speakingStyle || "自然、符合身份"}`,
    `knownByPlayer: ${selectedCharacter.knownByPlayer}`,
    `unlockedInCharacterList: ${selectedCharacter.unlockedInCharacterList}`,
    ``,
    `【gameState for this chat】`,
    `currentWeek: ${gameState.currentWeek}`,
    `playerAge: ${gameState.playerAge ?? "null"}`,
    `playerGrade: ${gameState.playerGrade ?? "null"}`,
    `playerLifeStage: ${gameState.playerLifeStage}`,
    `relationshipStage with this character: ${gameState.relationshipStage}`,
    `relationshipValue with this character: closeness=${rel.closeness ?? 0}, trust=${rel.trust ?? 0}, respect=${rel.respect ?? 0}, dependency=${rel.dependency ?? 0}, misunderstanding=${rel.misunderstanding ?? 0}`,
    `chatMemorySummary with this character: ${gameState.chatMemorySummary || "（暫時未有）"}`,
    `known memories involving this character:`,
    formatMemoryLines(gameState.knownMemories),
    `recent event history involving this character:`,
    formatRecentEventLines(gameState.recentEvents),
    `what this character knows: ${gameState.whatThisCharacterKnows.join("；")}`,
    `what this character does not know: ${gameState.whatThisCharacterDoesNotKnow.join("；")}`,
    ``,
    `【lifeStage 語氣規則】`,
    lifeStageGuidance(selectedCharacter.lifeStage),
    `角色長大後可以自然成熟，但不能重置 personality。外向的人長大後不一定永遠吵鬧，但仍可能習慣先開口；安靜觀察型長大後可能更會表達，但仍傾向先看清楚；愛比較型長大後可能不再直接問分數，但仍容易在意自己有沒有落後；古靈精怪型長大後可能不再亂講校園傳聞，但仍會把普通生活看成有趣線索。`,
    ``,
    `【identity consistency guard】`,
    identityGuardText(selectedCharacter.identity),
    ``,
    `【回答規則】`,
    `1. 你只可以以 selectedCharacter「${selectedCharacter.displayName}」身份直接回覆玩家。`,
    `2. 不要加「${selectedCharacter.displayName}:」或任何標籤。`,
    `3. 不要寫旁白，不要分析 prompt，不要講系統限制。`,
    `4. 回答要像自然聊天，2-4 句就夠。`,
    `5. 如果玩家問超出 selectedCharacter 認知範圍的事，用 selectedCharacter 的語氣表示不知道，不要亂作。`,
    extraReminder,
    ``,
    `【playerToneTowardNpc——每次都必須判斷，唔可以省略】`,
    `你要判斷「玩家呢句說話，如果由 ${selectedCharacter.displayName} 呢個角色嘅角度睇，係 positive／neutral／negative」。`,
    `positive：講開心事、關心佢、認同佢、認真傾偈。`,
    `neutral：普通打招呼、講日常、純粹玩笑／頑皮／攞你玩（唔係認真惡意、對方唔會真係嬲），呢啲一律當 neutral，唔算 negative。`,
    `negative：只有表面明顯睇得出係唔禮貌、侮辱、講對方嘅唔開心事、無視對方感受，先算 negative。有懷疑就揀 neutral，唔好亂揀 negative。`,
    ``,
    `【玩家屬性／技能——你可以根據呢次對話內容判斷係咪要小幅調整，但要合乎邏輯】`,
    `statusDelta／skillExpDelta 反映嘅係「玩家自己」嘅心理感受同經驗值，同「${selectedCharacter.displayName} 中唔中意呢句說話」係兩件獨立嘅事，唔可以將兩者掛鈎。`,
    `例如玩家講一啲 ${selectedCharacter.displayName} 唔中意嘅嘢（例如玩笑、頂嘴、講反話），可能純粹係玩家覺得好玩、覺得自己好醒先咁講，玩家自己嘅快樂／自信完全可以係上升，唔可以自動假設「NPC 唔中意 = 玩家會唔開心／冇自信／有壓力」。`,
    `反過嚟講，玩家講一啲 ${selectedCharacter.displayName} 中意聽嘅嘢，都唔一定代表玩家自己覺得開心（可能純粹敷衍）。`,
    `淨係喺對話內容本身有明確線索反映玩家自己嘅心理狀態時先改 statusDelta（例如玩家自己講開心事、分享興趣、認真討論功課、講自己嘅傷感或者尷尬），純粹打招呼、無意義嘅話唔應該有任何 statusDelta／skillExpDelta。`,
    `每個數值 amount 必須係整數，最少 -2，最多 +2，唔可以超過呢個範圍。`,
    `可用 core status keys 同意思：`,
    ...formatStatDefinitionLines(statKeys, statDescriptions),
    `可用 skillExp keys 同意思：`,
    ...formatStatDefinitionLines(skillKeys, skillDescriptions),
    ``,
    `【${selectedCharacter.displayName} 對玩家嘅 relationship——closeness 以外嘅維度，你可以判斷係咪要小幅調整】`,
    `relationshipDelta 只可以影響 selectedCharacter 呢個角色，唔可以影響其他角色。`,
    `closeness 唔使你直接判斷數值——由上面嘅 playerToneTowardNpc 自動決定方向，唔可以喺 relationshipDelta 出現 closeness。`,
    `可用 relationship dimension 同意思（closeness 除外）：`,
    ...formatStatDefinitionLines(Object.keys(relationshipDimensionDescriptions).filter(d => d !== "closeness"), relationshipDimensionDescriptions),
    ``,
    `【playerMessage】`,
    `玩家啱啱對 selectedCharacter 說：「${playerMessage}」`,
    ``,
    `只回傳合法 JSON，不要 markdown，不要額外文字：`,
    `{`,
    `  "reply": "以 ${selectedCharacter.displayName} 身份直接回覆玩家嘅說話內容",`,
    `  "playerToneTowardNpc": "positive",`,
    `  "statusDelta": { "快樂": 1 },`,
    `  "skillExpDelta": { "朗誦": 1 },`,
    `  "relationshipDelta": [ { "dimension": "trust", "amount": 1 } ],`,
    `  "reasonForDev": "只給 dev mode 看，不給玩家看"`,
    `}`,
    `playerToneTowardNpc 必須係 "positive"／"neutral"／"negative" 三選一，唔可以省略。`,
    `statusDelta／skillExpDelta／relationshipDelta 冇需要改動就用空物件／空陣列，唔可以省略呢啲 key。`
  ].join("\n");
}

export function appendPlayerMessage(characterId, text, s) {
  const thread = getOrCreateThread(characterId, s);
  thread.chatHistory.push({ role: "player", text, week: s.currentWeek });
  if (thread.chatHistory.length > MAX_CHAT_HISTORY) thread.chatHistory.shift();
}

export function appendCharacterReply(characterId, text, s) {
  const thread = getOrCreateThread(characterId, s);
  thread.chatHistory.push({ role: "character", text, week: s.currentWeek });
  if (thread.chatHistory.length > MAX_CHAT_HISTORY) thread.chatHistory.shift();
  thread.lastChattedWeek = s.currentWeek;
}

// 有效聊天 session 完成之後先 call 呢個：每個角色每週最多套用一次 LLM 判斷嘅 statusDelta／skillExpDelta／
// relationshipDelta（防止聊天狂刷數值），sanitize／clamp 邏輯同 opening event free-input 共用一套。
export function applyChatDeltaIfEligible(characterId, sanitized, s) {
  const thread = getOrCreateThread(characterId, s);
  const hasAnyDelta = Object.keys(sanitized.statusDelta || {}).length
    || Object.keys(sanitized.skillExpDelta || {}).length
    || (sanitized.relationshipDelta || []).length;
  if (!hasAnyDelta || !canApplyChatDeltaThisWeek(thread, s.currentWeek)) return { applied: false };

  const applied = applyChatDeltaEvaluation(characterId, sanitized, s);
  thread.chatDeltaAppliedThisWeek = s.currentWeek;

  s.actionRelationshipHistory = s.actionRelationshipHistory || [];
  applied.relationshipRecords.forEach(record => {
    s.actionRelationshipHistory.push({
      type: "chatbot_relationship_gain",
      week: s.currentWeek,
      characterId,
      amount: record.appliedAmount,
      dimension: record.dimension,
      reason: "player_chatted_with_unlocked_character"
    });
  });
  if (s.actionRelationshipHistory.length > 100) s.actionRelationshipHistory = s.actionRelationshipHistory.slice(-100);
  return { applied: true, ...applied };
}

function textHasAny(text, patterns) {
  return patterns.some(pattern => pattern.test(text));
}

export function detectIdentityMismatchResponse(text, context) {
  const selected = context?.selectedCharacter;
  if (!selected || !text) return false;
  const reply = String(text);
  const studentSelfPatterns = [
    /我(?:要|要去|今日要|聽日要|等陣要)?(?:做|交|補|改)(?:啲|份|張)?功課/,
    /我(?:要|要去|今日要|聽日要)?默書/,
    /我(?:小息| recess)/i,
    /老師(?:叫|要|罰)我(?:排隊|交功課|默書|留堂)/,
    /我(?:去|要去)補習社(?:做|交)?(?:啲|份)?功課/,
    /我(?:係|是)(?:小一|小二|小三|小四|小五|小六|同班同學|學生)/
  ];
  const adultSelfPatterns = [
    /我(?:今晚|今日|聽日|等陣)?(?:要)?加班/,
    /我(?:要|會|幫你)?簽(?:手冊|通告|回條)/,
    /我(?:要|會)?同你(?:個)?老師(?:傾|講|聯絡)/,
    /我(?:要|返|去)公司/,
    /我(?:放工|返工)/
  ];
  const teacherParentPatterns = [
    /我(?:係|是)(?:老師|班主任|你爸爸|你媽媽|家長)/,
    /我(?:會|要)?通知你(?:爸爸|媽媽|家長)/,
    /我(?:要|會)?同你(?:爸爸|媽媽|家長)(?:講|傾)/
  ];

  if (["adult", "family_parent", "teacher"].includes(selected.lifeStage)
    || ["family_parent", "teacher"].includes(selected.identity)) {
    return textHasAny(reply, studentSelfPatterns);
  }
  if (selected.identity === "same_age_peer") {
    return textHasAny(reply, adultSelfPatterns);
  }
  if (selected.identity === "senior_student") {
    return textHasAny(reply, teacherParentPatterns) || /我(?:係|是)(?:小一|同班同學)/.test(reply);
  }
  if (selected.identity === "teacher") {
    return textHasAny(reply, studentSelfPatterns);
  }
  return false;
}

export function getChatbotTypingText(character) {
  const displayName = character?.name || character?.roleLabel || "對方";
  const identity = normalizeIdentityForChat(character?.generatedFromIdentityType, character?.roleLabel);
  const pools = {
    family_parent: [
      `${displayName} 正在諗點答你`,
      `${displayName} 正在慢慢打字`,
      `${displayName} 好似停低諗咗一陣`
    ],
    same_age_peer: [
      `${displayName} 正在打字`,
      `${displayName} 好快咁覆緊你`,
      `${displayName} 諗緊點講`
    ],
    senior_student: [
      `${displayName} 正在回覆你`,
      `${displayName} 睇完訊息，正在打字`,
      `${displayName} 正在整理點講`
    ],
    teacher: [
      `${displayName} 正在回覆`,
      `${displayName} 看完訊息，正在打字`,
      `${displayName} 正在想一個合適回覆`
    ]
  };
  const list = pools[identity] || [`${displayName} 正在回覆`, `${displayName} 正在打字`, `${displayName} 正在諗點答你`];
  return list[Math.floor(Math.random() * list.length)];
}

function isDevModeForChatbot() {
  try {
    const params = new URLSearchParams(window.location.search);
    return params.get("dev") === "1" || localStorage.getItem("debugDevMode") === "true";
  } catch {
    return false;
  }
}

function debugPromptSummary(context, provider, model) {
  if (!isDevModeForChatbot()) return;
  console.debug("[chatbot prompt summary]", {
    ...context.promptSummary,
    provider,
    model
  });
}

// ---------- BYOK relay call：backend 唔會 log 或者保存 apiKey，淨係喺嗰次 request 度轉發 ----------
// mode: "test" | "chat"。錯誤要分得出係邊種（key／model／quota／rate limit／CORS／network／parse），
// 唔可以淨係話「暫時未能連接」。
async function callChatbotRelay(providerId, apiKey, model, prompt, mode, selectedCharacterId = null, signal = null) {
  const url = "/api/chatbot/byok";
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    signal,
    body: JSON.stringify({ provider: providerId, apiKey, model, mode, selectedCharacterId, payload: { prompt } })
  };
  let res;
  let data;
  try {
    ({ res, data } = await fetchRelayJson(url, requestOptions, { provider: providerId, model }));
  } catch (err) {
    return {
      ok: false,
      error: err?.message || getRelayErrorMessage(err?.errorType, err?.status, err?.bodyPreview)
    };
  }

  if (!res.ok || !data || !data.ok) {
    return {
      ok: false,
      error: data?.message
        || data?.error
        || getRelayErrorMessage(data?.errorType, res.status, data?.providerBodyPreview)
    };
  }
  return { ok: true, reply: data.text || data.reply };
}

// 測試連線：同時測 key／model／endpoint 三樣嘢，唔會更新任何 chat history／relationship
export async function testApiKeyConnection(providerId, apiKey, model) {
  const trimmedKey = (apiKey || "").trim();
  if (!trimmedKey) return { ok: false, error: "請先入 API key。" };
  const trimmedModel = (model || "").trim();
  if (!trimmedModel) return { ok: false, error: "請先揀或者輸入一個 model id。" };
  return callChatbotRelay(providerId, trimmedKey, trimmedModel, "Reply OK only.", "test");
}

function parseStrictJsonObject(text) {
  const raw = (text || "").trim().replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```$/i, "").trim();
  const start = raw.indexOf("{");
  const end = raw.lastIndexOf("}");
  if (start < 0 || end < start) return null;
  try {
    return JSON.parse(raw.slice(start, end + 1));
  } catch {
    return null;
  }
}

function buildActiveMessageEvaluationPrompt(character, activeMessage, playerFreeReply, s) {
  const identity = getIdentityTypeById(character.generatedFromIdentityType);
  const personality = getPersonalityByAnyId(character.personalityId, character.generatedFromIdentityType);
  const relationship = generateRelationshipSummary(character.id, s);
  return [
    "你係香港小學生活模擬器的 active message reply evaluator。",
    "你只可以評估玩家對一條已由作者撰寫的 NPC 主動訊息的第一句回覆。",
    "你不可以創作新 active message，不可以開新事件，不可以改 core property，不可以改 skillExp。",
    "你必須保持同一個 NPC 身份，不可以代替其他角色說話。",
    "relationshipDelta 只能是 -1、0、1。",
    "",
    `NPC: ${character.name}`,
    `identity: ${character.generatedFromIdentityType} (${identity?.label || ""})`,
    `personality: ${personality?.label || character.defaultTone || ""}`,
    `role: ${character.roleLabel || ""}`,
    `lifeStage: ${s.stageId}`,
    `relationship closeness: ${relationship?.dimensions?.find(d => d.dimension === "closeness")?.value ?? 0}`,
    "",
    "作者訊息：",
    `場景：${activeMessage.scene || ""}`,
    `NPC訊息：${activeMessage.messageText || ""}`,
    "",
    `玩家自由回覆：${playerFreeReply}`,
    "",
    "只回傳合法 JSON，不要 markdown，不要額外文字：",
    "{",
    '  "npcFollowUp": "角色自然回覆文字",',
    '  "relationshipDelta": -1,',
    '  "resultText": "玩家可見的結果小句",',
    '  "reasonForDev": "只給 dev mode 看，不給玩家看"',
    "}"
  ].join("\n");
}

export async function evaluateActiveMessageReplyWithApi(character, activeMessage, playerFreeReply, s, options = {}) {
  const trimmed = (playerFreeReply || "").trim();
  if (!trimmed) return { ok: false, error: "請先輸入一句回覆。" };
  const provider = getSelectedProvider();
  const apiKey = getApiKey(provider);
  if (!apiKey) return { ok: false, error: "請先設定 API key。" };
  const model = getSelectedModel(provider);
  if (!model) return { ok: false, error: "請先揀或者輸入一個 model id。" };

  const prompt = buildActiveMessageEvaluationPrompt(character, activeMessage, trimmed, s);
  const result = await callChatbotRelay(provider, apiKey, model, prompt, "chat", character.id, options.signal || null);
  if (!result.ok) return { ok: false, error: result.error };
  const parsed = parseStrictJsonObject(result.reply);
  if (!parsed || ![-1, 0, 1].includes(parsed.relationshipDelta) || !parsed.npcFollowUp || !parsed.resultText) {
    return { ok: false, error: "暫時未能理解這次回覆，請再試一次。" };
  }
  return {
    ok: true,
    evaluation: {
      npcFollowUp: String(parsed.npcFollowUp).slice(0, 220),
      relationshipDelta: parsed.relationshipDelta,
      resultText: String(parsed.resultText).slice(0, 180),
      reasonForDev: parsed.reasonForDev ? String(parsed.reasonForDev).slice(0, 220) : ""
    }
  };
}

function buildOpeningEventEvaluationPrompt(context, playerFreeReply, s) {
  const npc = context.npc;
  const identity = npc ? getIdentityTypeById(npc.generatedFromIdentityType) : null;
  const personality = npc ? getPersonalityByAnyId(npc.personalityId, npc.generatedFromIdentityType) : null;
  const statKeys = Object.keys(s.stats || {});
  const skillKeys = Object.keys(s.skillExp || {});
  return [
    "你係香港小學生活模擬器的 event free-input evaluator。",
    "你只可以評估玩家對目前 authored event 的一句自由輸入。",
    "你不可以創作新 event，不可以解鎖角色/地點/行動，不可以安排 follow-up event，不可以改 save 以外的資料。",
    "你可以根據玩家回覆決定 core status、skillExp、當前 NPC relationship 的小幅變化。",
    "每個數值 amount 必須是整數，最少 -2，最多 +2。不要超過這個範圍。",
    "relationshipDelta 只可以影響當前 NPC，不可以影響其他角色。",
    "",
    `eventId: ${context.event.id}`,
    `eventTitle: ${context.event.title || ""}`,
    `variantId: ${context.variant.variantId}`,
    `NPC: ${npc ? npc.name : context.npcDisplayName}`,
    `identity: ${npc ? `${npc.generatedFromIdentityType} (${identity?.label || ""})` : "none"}`,
    `personality: ${personality?.label || npc?.defaultTone || ""}`,
    "",
    "事件內容：",
    ...(context.lines || []).map(line => `- ${line}`),
    "",
    "既有固定選項參考，不是唯一答案；但你必須從中選一個最接近玩家自由輸入的 choice id，作為日後人生片段回顧的 authored story anchor：",
    ...(context.choices || []).map(choice => `- id=${choice.id}｜button=${choice.text}｜playerLine=${choice.playerLine || ""}`),
    "",
    `玩家自由輸入：${playerFreeReply}`,
    "",
    `可用 core status keys: ${statKeys.join(", ")}`,
    `可用 skillExp keys: ${skillKeys.join(", ")}`,
    "relationship dimension 可用：closeness, trust, respect, dependency, misunderstanding",
    "",
    "只回傳合法 JSON，不要 markdown，不要額外文字：",
    "{",
    '  "resultDialogue": { "speaker": "NPC名字或旁白", "text": "NPC或旁白自然回應" },',
    '  "resultText": "玩家可見的結果小句",',
    '  "reviewAnchorChoiceId": "必須係上面其中一個既有固定選項 id；只用作人生片段回顧 anchor，不代表玩家真的按了該按鈕",',
    '  "statusDelta": { "快樂": 1 },',
    '  "skillExpDelta": { "朗誦": 1 },',
    '  "relationshipDelta": [ { "dimension": "closeness", "amount": 1 } ],',
    '  "reasonForDev": "只給 dev mode 看，不給玩家看"',
    "}"
  ].join("\n");
}

export async function evaluateOpeningEventReplyWithApi(openingEventContext, playerFreeReply, s, options = {}) {
  const trimmed = (playerFreeReply || "").trim();
  if (!trimmed) return { ok: false, error: "請先輸入一句回覆。" };
  if (!openingEventContext) return { ok: false, error: "找不到正在處理的事件。" };
  const provider = getSelectedProvider();
  const apiKey = getApiKey(provider);
  if (!apiKey) return { ok: false, error: "請先設定 API key。" };
  const model = getSelectedModel(provider);
  if (!model) return { ok: false, error: "請先揀或者輸入一個 model id。" };

  const prompt = buildOpeningEventEvaluationPrompt(openingEventContext, trimmed, s);
  const selectedCharacterId = openingEventContext.npc?.id || null;
  const result = await callChatbotRelay(provider, apiKey, model, prompt, "chat", selectedCharacterId, options.signal || null);
  if (!result.ok) return { ok: false, error: result.error };
  const parsed = parseStrictJsonObject(result.reply);
  if (!parsed || !parsed.resultDialogue || !parsed.resultText) {
    return { ok: false, error: "暫時未能理解這次回覆，請再試一次。" };
  }
  return { ok: true, evaluation: parsed };
}

// 完整流程：組 prompt → BYOK relay（用玩家自己嘅 key + model）→ parse／sanitize 返嚟嘅 JSON
// （reply 文字 + statusDelta／skillExpDelta／relationshipDelta）→ 更新 chat history → 套用 delta。
// 冇 key／冇 model／API error／空訊息／JSON parse 失敗一律唔會改任何 relationship／memory／property。
export async function sendChatbotMessage(characterId, playerMessage, s, options = {}) {
  const trimmed = (playerMessage || "").trim();
  if (!trimmed) return { ok: false, error: "打啲嘢先啦。" };

  const character = getCharacterById(characterId, s);
  if (!character || !s.knownCharacters.includes(characterId)) {
    return { ok: false, error: "搵唔到呢個角色。" };
  }
  const context = buildSelectedCharacterContext(character, s);
  if (!context || !context.selectedCharacter.unlockedInCharacterList) {
    return { ok: false, error: CHARACTER_CONTEXT_ERROR };
  }

  const provider = getSelectedProvider();
  const apiKey = getApiKey(provider);
  if (!apiKey) return { ok: false, error: "請先設定 API key。" };
  const model = getSelectedModel(provider);
  if (!model) return { ok: false, error: "請先揀或者輸入一個 model id。" };

  options.onPending?.(trimmed, character, getChatbotTypingText(character));
  debugPromptSummary(context, provider, model);
  const prompt = buildCharacterChatPrompt(character, s, trimmed);
  if (!prompt) return { ok: false, error: CHARACTER_CONTEXT_ERROR };
  let result = await callChatbotRelay(provider, apiKey, model, prompt, "chat", character.id, options.signal || null);
  if (!result.ok) return { ok: false, error: result.error };

  let sanitized = sanitizeChatDeltaEvaluation(parseStrictJsonObject(result.reply), s);
  if (!sanitized) return { ok: false, error: "暫時未能理解呢次回覆，請再試一次。" };

  if (detectIdentityMismatchResponse(sanitized.reply, context)) {
    const retryPrompt = buildCharacterChatPrompt(character, s, trimmed, { identityReminder: true });
    result = await callChatbotRelay(provider, apiKey, model, retryPrompt, "chat", character.id, options.signal || null);
    if (!result.ok) return { ok: false, error: result.error };
    sanitized = sanitizeChatDeltaEvaluation(parseStrictJsonObject(result.reply), s);
    if (!sanitized) return { ok: false, error: "暫時未能理解呢次回覆，請再試一次。" };
    if (detectIdentityMismatchResponse(sanitized.reply, context)) {
      return { ok: false, error: IDENTITY_MISMATCH_ERROR, errorType: "identity_mismatch_response" };
    }
  }

  appendPlayerMessage(characterId, trimmed, s);
  appendCharacterReply(characterId, sanitized.reply, s);
  const closenessResult = applyChatClosenessFromTone(characterId, sanitized.closenessDelta, s);
  const deltaResult = applyChatDeltaIfEligible(characterId, sanitized, s);

  return { ok: true, reply: sanitized.reply, closenessApplied: closenessResult.applied, deltaApplied: deltaResult.applied };
}
