// js/main.js
// 只負責初始化、事件綁定，實際邏輯交俾 engine.js，畫面交俾 ui.js

import { state, resetState } from "./state.js";
import { saveGame, loadGame, hasSavedGame, resetGame as clearSavedGame, hasStaleOldSave } from "./storage.js";
import {
  executeAction, chooseDialogueOption, triggerDialogue,
  chooseMessageOption, advanceWeek, selectTermGoal,
  setBackgroundTagsCache, captureTermStartSnapshot,
  incrementLocationFamiliarity, applyLocationRelationshipInfluence,
  checkLifeDirection, allowSkipMessageWithConsequence, resolvePopupChoice,
  generateStartingCaps, generateStartingPotentialReport, applyResourceChangeWithCap,
  joinHobby, quitHobby, joinOpportunity, declineOpportunity, negotiateForcedSchedule,
  getGoalsByCategory, getUrgentGoals, abandonGoal,
  checkOpportunityEntryRequirements, getOpportunityMissingRequirements, getOverqualifiedOpportunityReminders,
  cancelScheduleItem, negotiateScheduleItem,
  drawOpeningEventForWeek, resolveOpeningEventChoice
} from "./engine.js";
import * as UI from "./ui.js";
import { getAllBackgroundCategories, pickRandom } from "../data/backgrounds.js";
import { termGoals } from "../data/goals.js";
import { getMessageById } from "../data/messages.js";
import { hobbies } from "../data/hobbies.js";
import { getCompetitionById } from "../data/opportunities.js";
import { generateCharacters } from "../data/characters.js";
import {
  sendChatbotMessage, testApiKeyConnection,
  getSelectedProvider, setSelectedProvider, getApiKey, setApiKey, clearApiKey,
  getSelectedModel, setSelectedModel, fetchAvailableModels
} from "./chatbot.js";
import { validateContentData, validateSingleEntry, CONTENT_TYPES } from "../data/contentValidation.js";
import { BLANK_TEMPLATES } from "../data/contentSchemaExamples.js";

const RANDOM_NAMES = ["阿晴", "阿朗", "家豪", "曉澄", "子軒", "詠詩", "俊熙", "苡蓁"];

let selection = {
  playerName: "",
  familyMode: "random",
  family: null,
  regionMode: "random",
  region: null
};

const locationByRegion = {
  region_nt: "loc_tuenmun",
  region_hkisland: "loc_causeway",
  region_kowloon: "loc_mongkok"
};

// ---------- 開局設定 ----------
function refreshSetupScreen() {
  UI.renderSetupScreen(selection, (key, value) => {
    selection[key] = value;
    refreshSetupScreen();
  });
}

function randomizeSelectionAndBegin() {
  selection = { playerName: selection.playerName, familyMode: "random", family: null, regionMode: "random", region: null };
  applyBackgroundToState();
  UI.showScreen("screen-report");
  UI.renderStartingReport(state);
}

function applyBackgroundToState() {
  const categories = getAllBackgroundCategories();

  const familyOpt = selection.familyMode === "choose" && selection.family
    ? categories.family.find(o => o.id === selection.family)
    : pickRandom(categories.family);
  const regionOpt = selection.regionMode === "choose" && selection.region
    ? categories.region.find(o => o.id === selection.region)
    : pickRandom(categories.region);
  const personalityOpt = pickRandom(categories.personality);
  const talentOpt = pickRandom(categories.talent);
  const interestOpt = pickRandom(categories.interest);
  const chosen = [familyOpt, regionOpt, personalityOpt, talentOpt, interestOpt];

  resetState();
  state.playerName = selection.playerName?.trim() || pickRandom(RANDOM_NAMES);
  state.background = {
    familyId: familyOpt.id,
    regionId: regionOpt.id,
    personalityId: personalityOpt.id,
    talentId: talentOpt.id,
    interestId: interestOpt.id
  };

  // 生成呢一世嘅具體角色（媽媽、爸爸、班主任、同學……嘅名同人格），每次新人生都唔一樣
  generateCharacters(state);

  // 核心資源上限系統：先隨機決定總資源池同分配，再用家庭／地區背景做輕微調整（唔會完全決定命運）
  generateStartingCaps(state);
  chosen.forEach(opt => {
    Object.entries(opt.startingStats || {}).forEach(([stat, val]) => {
      if (state.stats[stat] === undefined) return;
      const nudge = (val - 50) * 0.3;
      applyResourceChangeWithCap(stat, nudge, state);
    });
  });
  generateStartingPotentialReport(state);

  const tags = chosen.flatMap(opt => opt.tags || []);
  setBackgroundTagsCache(state, tags);

  state.locationId = locationByRegion[regionOpt.id] || "loc_shatin";
  state.unlockedLocations = Array.from(new Set([state.locationId, "loc_shatin"]));

  captureTermStartSnapshot(state);
  state.logs.push(`你嘅人生喺${state.age}歲開始……`);
}

// ---------- 遊戲畫面渲染 ----------
function renderGame() {
  UI.renderAll(state, {
    onChooseAction: handleChooseAction,
    onSelectLocation: handleSelectLocation,
    onRefreshActions: refreshActionListOnly,
    urgentGoals: getUrgentGoals(state),
    onNegotiateForcedSchedule: handleNegotiateForcedSchedule
  });
  const detailedToggle = document.getElementById("toggle-detailed-numbers");
  if (detailedToggle) detailedToggle.checked = !!state.showDetailedNumbers;
}

function handleNegotiateForcedSchedule(forcedId) {
  const result = negotiateForcedSchedule(forcedId, state);
  if (!result.ok) {
    alert(result.reason || "暫時傾唔掂。");
    return;
  }
  renderGame();
  autosave();
}

function refreshActionListOnly() {
  UI.renderActionList(state, handleChooseAction);
}

function handleSelectLocation(locId) {
  state.locationId = locId;
  incrementLocationFamiliarity(locId, state);
  applyLocationRelationshipInfluence(locId, state);
  checkLifeDirection(state);
  renderGame();
}

function handleChooseAction(actionId, targetCharacterId = null) {
  const result = executeAction(actionId, state, targetCharacterId);
  if (!result.ok) {
    alert(result.reason === "AP 不足" ? "你今個星期嘅 AP 已經唔夠喇，等下星期再嚟啦！" : result.reason);
    return;
  }
  autosave();
  if (result.dialogue) {
    openDialogue(result.dialogue);
  } else if (result.encounterResult && result.encounterResult.popup) {
    openPopupEncounter(result.encounterResult.encounter, result.encounterResult.characterId);
  } else {
    renderGame();
  }
}

function openDialogue(dialogue) {
  triggerDialogue(dialogue.id, state);
  UI.showDialogue(dialogue, (choiceIndex) => {
    const nextDialogue = chooseDialogueOption(dialogue, choiceIndex, state);
    UI.hideDialogue();
    if (nextDialogue) {
      openDialogue(nextDialogue);
    } else {
      renderGame();
      autosave();
    }
  }, state);
}

// ---------- 互動 popup（encounter 帶 choices） ----------
function openPopupEncounter(encounter, characterId) {
  const popupObj = { senderId: characterId, lines: encounter.introLines || [encounter.silentLog?.body || encounter.title || "你遇到咗一件事。"], choices: encounter.choices };
  UI.showDialogue(popupObj, (choiceIndex) => {
    const result = resolvePopupChoice(encounter.id, characterId, choiceIndex, state);
    if (result.blocked) {
      alert(result.hintText);
      return;
    }
    UI.hideDialogue();
    UI.showOutcomeSummary(result.outcomeSummary, () => {
      renderGame();
      autosave();
    });
  }, state);
}

// ---------- 訊息 ----------
function openMessageFromList(messageId) {
  UI.hideMessageListOverlay();
  openMessage(messageId);
}

function openMessage(messageId) {
  const message = getMessageById(messageId);
  if (!message) return;
  UI.showDialogue(message, (choiceIndex) => {
    const result = chooseMessageOption(messageId, choiceIndex, state);
    if (result.blocked) {
      alert(result.hintText);
      return;
    }
    UI.hideDialogue();
    UI.showOutcomeSummary(result.outcomeSummary, () => {
      renderGame();
      autosave();
      if (result.next) openMessage(result.next.id);
    });
  }, state);
}

function handleSkipMessage(messageId) {
  allowSkipMessageWithConsequence(messageId, state);
  state.unreadMessages = state.unreadMessages.filter(id => id !== messageId);
  refreshMessageList();
  renderGame();
  autosave();
}

function refreshMessageList() {
  UI.renderMessageList(state, openMessageFromList, handleSkipMessage);
}

// ---------- 週推進 ----------
function handleAdvanceWeek() {
  const priorReportCardCount = state.reportCards.length;
  const priorStoryCount = state.sixWeekStoryHistory.length;
  // 玩家撳「下一週」代表「完成緊呢一週」，opening event 應該係呢一週自己嘅 event，
  // 所以要喺 advanceWeek() 將 currentWeek +1 之前，就攞低「玩家岩岩完成緊邊一週」
  const weekJustCompleted = state.currentWeek;
  const result = advanceWeek(state);
  if (result.blocked) {
    alert(result.reason);
    return;
  }
  autosave();

  const showNewStorySceneIfAny = (next) => {
    if (state.sixWeekStoryHistory.length > priorStoryCount) {
      UI.showStoryScene(state.sixWeekStoryHistory[state.sixWeekStoryHistory.length - 1], next);
    } else if (result.storyCheckDue) {
      alert("這 6 週沒有可回顧的人生片段。");
      next();
    } else {
      next();
    }
  };

  const showNewReportCardIfAny = (next) => {
    if (state.reportCards.length > priorReportCardCount) {
      UI.showReportCard(state.reportCards[state.reportCards.length - 1], () => showNewStorySceneIfAny(next));
    } else {
      showNewStorySceneIfAny(next);
    }
  };

  const continueAfterWeekEvents = () => {
    if (result.termEnded) {
      showNewReportCardIfAny(() => {
        UI.showTermReview(result.termReview, () => {
          renderGame();
          if (!result.finished) {
            openGoalSelect();
          } else {
            alert("你已經完成咗目前設計嘅所有學期，敬請期待未來更新！");
          }
        });
      });
    } else {
      showNewReportCardIfAny(() => renderGame());
    }
  };

  const openingPopup = drawOpeningEventForWeek(state, weekJustCompleted);
  if (openingPopup) {
    UI.showDialogue(openingPopup, (choiceIndex) => {
      const openingResult = resolveOpeningEventChoice(choiceIndex, state);
      UI.hideDialogue();
      autosave();
      UI.showOutcomeSummary(openingResult.outcomeSummary, continueAfterWeekEvents);
    });
  } else {
    continueAfterWeekEvents();
  }
}

function openGoalSelect() {
  UI.showGoalSelectOverlay(state, (goalId) => {
    selectTermGoal(goalId, state);
    UI.hideGoalSelectOverlay();
    renderGame();
    autosave();
  });
}

function autosave() {
  saveGame(state);
}

// ---------- 事件綁定 ----------
function bindStartScreen() {
  document.getElementById("btn-new-game").addEventListener("click", () => {
    selection = { playerName: "", familyMode: "random", family: null, regionMode: "random", region: null };
    refreshSetupScreen();
    UI.showScreen("screen-setup");
  });

  if (hasStaleOldSave()) {
    alert("資料版本已更新，舊存檔包含已移除的事件內容，請開始新人生。");
  }

  if (hasSavedGame()) {
    const btn = document.getElementById("btn-continue-game");
    btn.style.display = "block";
    btn.addEventListener("click", () => {
      const loaded = loadGame();
      if (loaded) {
        Object.assign(state, loaded);
        UI.showScreen("screen-game");
        renderGame();
      } else {
        alert("資料版本已更新，舊存檔包含已移除的事件內容，請開始新人生。");
      }
    });
  }
}

function bindSetupScreen() {
  document.getElementById("btn-random-life").addEventListener("click", randomizeSelectionAndBegin);
  document.getElementById("btn-confirm-setup").addEventListener("click", () => {
    applyBackgroundToState();
    UI.showScreen("screen-report");
    UI.renderStartingReport(state);
  });
}

function bindReportScreen() {
  document.getElementById("btn-reroll-life").addEventListener("click", () => {
    applyBackgroundToState();
    UI.renderStartingReport(state);
  });
  document.getElementById("btn-begin-life").addEventListener("click", beginGameFromReport);
}

function beginGameFromReport() {
  UI.showScreen("screen-game");
  renderGame();
  autosave();
  if (!state.seenIntros.includes("intro_no_perfect_life")) {
    state.seenIntros.push("intro_no_perfect_life");
    UI.showIntroOverlay(() => {
      autosave();
      openGoalSelect();
    });
  } else {
    openGoalSelect();
  }
}

function bindBottomNav() {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => UI.switchTab(btn.dataset.tab));
  });
}

// 浮動按鈕入口共用一個 overlay，用 tab 分開「訊息」（authored story message）同
// 「傾偈」（Chatbot bonus function）。撳浮動按鈕預設開返「訊息」tab；傾偈淨係喺呢個 overlay 入面先開到。
function bindMessageButton() {
  document.getElementById("btn-messages").addEventListener("click", () => {
    refreshMessageList();
    switchMessageChatbotTab("messages");
    UI.showMessageListOverlay();
  });
  document.getElementById("btn-close-message-list").addEventListener("click", () => UI.hideMessageListOverlay());
  document.getElementById("tab-btn-messages").addEventListener("click", () => switchMessageChatbotTab("messages"));
  document.getElementById("tab-btn-chatbot").addEventListener("click", () => switchMessageChatbotTab("chatbot"));
}

function switchMessageChatbotTab(tab) {
  document.getElementById("tab-btn-messages").classList.toggle("selected", tab === "messages");
  document.getElementById("tab-btn-chatbot").classList.toggle("selected", tab === "chatbot");
  document.getElementById("message-tab-body").classList.toggle("hidden", tab !== "messages");
  document.getElementById("chatbot-tab-body").classList.toggle("hidden", tab !== "chatbot");
  document.getElementById("message-chatbot-title").textContent = tab === "messages" ? "訊息" : "💬 傾偈";
  if (tab === "chatbot") {
    chatbotActiveCharacterId = null;
    UI.switchChatbotView("list");
    refreshChatbotModal();
  }
}

function bindGuideModal() {
  document.getElementById("btn-open-guide").addEventListener("click", () => UI.showGuideModal());
  document.getElementById("btn-close-guide").addEventListener("click", () => UI.hideGuideModal());
}

function bindWeekActions() {
  document.getElementById("btn-advance-week").addEventListener("click", handleAdvanceWeek);
}

function bindGoalsModal() {
  document.getElementById("btn-open-goals").addEventListener("click", () => {
    refreshGoalsModal();
    UI.showGoalsOverlay();
  });
  document.getElementById("btn-close-goals").addEventListener("click", () => UI.hideGoalsOverlay());
}

function refreshGoalsModal() {
  UI.showGoalsModal(state, getGoalsByCategory(state), {
    onAbandon: handleAbandonGoal,
    onCancelSchedule: (id) => {
      cancelScheduleItem(id, state);
      refreshGoalsModal();
      renderGame();
      autosave();
    },
    onNegotiateSchedule: (id) => {
      const result = negotiateScheduleItem(id, state);
      if (!result.ok) alert(result.reason);
      refreshGoalsModal();
      renderGame();
      autosave();
    }
  });
}

function handleAbandonGoal(category, goalId) {
  if (!confirm("確定要放棄呢個目標？放棄唔一定係壞事，但可能會影響相關關係或機會。")) return;
  abandonGoal(category, goalId, state);
  refreshGoalsModal();
  renderGame();
  autosave();
}

function bindHobbiesModal() {
  document.getElementById("btn-open-hobbies").addEventListener("click", () => {
    refreshHobbiesModal();
    UI.showHobbiesOverlay();
  });
  document.getElementById("btn-close-hobbies").addEventListener("click", () => UI.hideHobbiesOverlay());
}

function refreshHobbiesModal() {
  const knownComps = state.knownOpportunities.map(getCompetitionById).filter(Boolean);
  const qualification = {};
  knownComps.forEach(c => {
    qualification[c.id] = {
      qualified: checkOpportunityEntryRequirements(c.id, state),
      missing: getOpportunityMissingRequirements(c.id, state)
    };
  });
  const overqualifiedReminders = getOverqualifiedOpportunityReminders(state);
  UI.showHobbiesModal(state, hobbies, knownComps, {
    onJoin: (hobbyId) => {
      const result = joinHobby(hobbyId, state);
      if (!result.ok) alert(result.reason);
      refreshHobbiesModal();
      renderGame();
      autosave();
    },
    onQuit: (hobbyId) => {
      if (!confirm("確定要放棄呢個興趣班？")) return;
      quitHobby(hobbyId, state);
      refreshHobbiesModal();
      renderGame();
      autosave();
    },
    onOppJoin: (compId) => {
      const result = joinOpportunity(compId, state);
      if (!result.ok) alert(result.reason);
      refreshHobbiesModal();
      renderGame();
      autosave();
    },
    onOppDecline: (compId) => {
      declineOpportunity(compId, state);
      refreshHobbiesModal();
      autosave();
    }
  }, qualification, overqualifiedReminders);
}

// Chatbot bonus function：唔消耗 AP，唔係 action／event／hobby class，只可以對已解鎖角色加少少 relationship
let chatbotActiveCharacterId = null;
let pendingChatbotRequest = null;

// 開／關成個 overlay 已經由 bindMessageButton／switchMessageChatbotTab 處理（共用同一個浮動按鈕），
// 呢度淨係負責傾偈本身嘅內部控制（BYOK key 設定／返回名單／送出／Enter 送出）
function bindChatbotModal() {
  document.getElementById("btn-chatbot-back").addEventListener("click", () => {
    cancelPendingChatbotRequest();
    chatbotActiveCharacterId = null;
    UI.switchChatbotView("list");
  });
  document.getElementById("btn-chatbot-send").addEventListener("click", handleChatbotSend);
  document.getElementById("btn-chatbot-cancel").addEventListener("click", cancelPendingChatbotRequest);
  document.getElementById("chatbot-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleChatbotSend();
  });

  document.getElementById("btn-chatbot-save-key").addEventListener("click", () => {
    const keyInput = document.getElementById("chatbot-key-input");
    const remember = document.getElementById("chatbot-key-remember").checked;
    setApiKey(getSelectedProvider(), keyInput.value, remember);
    persistCurrentModelSelection();
    UI.renderChatbotKeyStatus();
  });
  document.getElementById("btn-chatbot-clear-key").addEventListener("click", () => {
    clearApiKey(getSelectedProvider());
    document.getElementById("chatbot-key-remember").checked = false;
    UI.renderChatbotKeyStatus();
  });
  document.getElementById("btn-chatbot-test-key").addEventListener("click", async () => {
    const provider = getSelectedProvider();
    const keyInput = document.getElementById("chatbot-key-input");
    // 玩家可能啱啱打咗 key 但未撳「儲存」，測試連線一律用返輸入框現時嘅值，冇就 fallback 用返已存嘅
    const apiKeyToTest = keyInput.value.trim() || getApiKey(provider);
    const model = getEffectiveModelFromInputs();
    const testBtn = document.getElementById("btn-chatbot-test-key");
    testBtn.disabled = true;
    const result = await testApiKeyConnection(provider, apiKeyToTest, model);
    testBtn.disabled = false;
    UI.showChatbotKeyTestResult(result.ok, result.ok ? "連線成功！" : result.error);
  });

  // Model 揀擇：dropdown 揀咗就即刻存，手動輸入有嘢就用手動嘅（優先於 dropdown）
  document.getElementById("chatbot-model-select").addEventListener("change", () => {
    document.getElementById("chatbot-model-manual-input").value = "";
    persistCurrentModelSelection();
  });
  document.getElementById("chatbot-model-manual-input").addEventListener("change", () => {
    persistCurrentModelSelection();
  });
  document.getElementById("btn-chatbot-fetch-models").addEventListener("click", async () => {
    const provider = getSelectedProvider();
    const keyInput = document.getElementById("chatbot-key-input");
    const apiKeyToUse = keyInput.value.trim() || getApiKey(provider);
    const fetchBtn = document.getElementById("btn-chatbot-fetch-models");
    fetchBtn.disabled = true;
    const result = await fetchAvailableModels(provider, apiKeyToUse);
    fetchBtn.disabled = false;
    if (!result.ok || !result.models.length) {
      UI.showChatbotKeyTestResult(false, "取得可用模型失敗，你可以繼續用 preset 或者手動輸入 model id。");
      return;
    }
    await UI.renderChatbotModelRow(result.models);
  });
}

// dropdown 冇手動輸入就用 dropdown 個值，手動輸入有嘢就用手動嗰個（優先）
function getEffectiveModelFromInputs() {
  const manual = document.getElementById("chatbot-model-manual-input").value.trim();
  if (manual) return manual;
  return document.getElementById("chatbot-model-select").value || "";
}

function persistCurrentModelSelection() {
  const model = getEffectiveModelFromInputs();
  if (model) setSelectedModel(getSelectedProvider(), model);
}

async function refreshChatbotModal() {
  UI.renderChatbotProviderRow((providerId) => {
    setSelectedProvider(providerId);
    refreshChatbotModal();
  });
  UI.renderChatbotKeyStatus();
  await UI.renderChatbotModelRow();
  UI.renderChatbotCharacterList(state, (characterId) => {
    cancelPendingChatbotRequest();
    chatbotActiveCharacterId = characterId;
    UI.switchChatbotView("thread");
    UI.renderChatbotThread(characterId, state);
  });
}

async function handleChatbotSend() {
  const input = document.getElementById("chatbot-input");
  const message = input.value;
  if (!message.trim() || !chatbotActiveCharacterId) return;
  beginChatbotSend(message);
}

function setChatbotSendingUi(isSending) {
  const input = document.getElementById("chatbot-input");
  const sendBtn = document.getElementById("btn-chatbot-send");
  const cancelBtn = document.getElementById("btn-chatbot-cancel");
  input.disabled = isSending;
  sendBtn.disabled = isSending;
  sendBtn.textContent = isSending ? "送出中" : "送出";
  cancelBtn.classList.toggle("hidden", !isSending);
}

function clearPendingChatbotTimers(request) {
  if (!request) return;
  if (request.intervalId) clearInterval(request.intervalId);
  if (request.timeoutId) clearTimeout(request.timeoutId);
  request.intervalId = null;
  request.timeoutId = null;
}

function getWaitingText(baseText, elapsedMs) {
  const name = baseText.split(" ")[0] || "對方";
  if (elapsedMs >= 10000) return "連接 AI 服務可能有少少慢，請再等等";
  if (elapsedMs >= 3000) return `${name} 仲諗緊點答你`;
  return baseText.replace(/[.…。]+$/g, "");
}

function renderPendingChatbotRequest(request) {
  if (!request || pendingChatbotRequest?.id !== request.id) return;
  const elapsedMs = Date.now() - request.startedAt;
  UI.renderChatbotThread(request.characterId, state, {
    pendingMessageId: request.id,
    pendingPlayerMessage: request.message,
    isTyping: true,
    typingText: getWaitingText(request.typingText, elapsedMs)
  });
}

function renderPendingChatbotError(request, message) {
  UI.renderChatbotThread(request.characterId, state, {
    pendingMessageId: request.id,
    pendingPlayerMessage: request.message,
    pendingError: {
      message,
      onRetry: () => beginChatbotSend(request.message, request.characterId),
      onCancel: () => {
        if (pendingChatbotRequest?.id === request.id) pendingChatbotRequest = null;
        UI.renderChatbotThread(request.characterId, state);
      }
    }
  });
}

function cancelPendingChatbotRequest() {
  const request = pendingChatbotRequest;
  if (!request) return;
  clearPendingChatbotTimers(request);
  request.controller?.abort();
  pendingChatbotRequest = null;
  setChatbotSendingUi(false);
  UI.renderChatbotThread(request.characterId, state);
}

async function beginChatbotSend(message, forcedCharacterId = null) {
  if (pendingChatbotRequest) return;
  const input = document.getElementById("chatbot-input");
  const activeCharacterAtSend = forcedCharacterId || chatbotActiveCharacterId;
  if (!activeCharacterAtSend) return;

  setChatbotSendingUi(true);
  input.value = "";

  const controller = new AbortController();
  let request = null;
  const result = await sendChatbotMessage(activeCharacterAtSend, message, state, {
    signal: controller.signal,
    onPending: (pendingMessage, _character, typingText) => {
      request = {
        id: `chatbot-pending-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        characterId: activeCharacterAtSend,
        message: pendingMessage,
        typingText,
        controller,
        startedAt: Date.now(),
        intervalId: null,
        timeoutId: null,
        timedOut: false
      };
      pendingChatbotRequest = request;
      renderPendingChatbotRequest(request);
      request.intervalId = setInterval(() => renderPendingChatbotRequest(request), 1000);
      request.timeoutId = setTimeout(() => {
        if (pendingChatbotRequest?.id !== request.id) return;
        request.timedOut = true;
        clearPendingChatbotTimers(request);
        controller.abort();
        pendingChatbotRequest = null;
        setChatbotSendingUi(false);
        renderPendingChatbotError(request, "暫時未收到回覆，可能是網絡或 API 服務太慢。");
      }, 30000);
    }
  });

  if (request && pendingChatbotRequest?.id !== request.id) return;
  if (request) {
    clearPendingChatbotTimers(request);
    pendingChatbotRequest = null;
  }
  setChatbotSendingUi(false);

  if (!result.ok) {
    if (request) {
      renderPendingChatbotError(request, result.error);
    } else {
      UI.renderChatbotThread(activeCharacterAtSend, state);
      UI.showChatbotError(result.error);
    }
    return;
  }
  UI.renderChatbotThread(activeCharacterAtSend, state);
  autosave();
}

function bindGoalSelectScreen() {
  document.getElementById("btn-random-goal").addEventListener("click", () => {
    const goal = pickRandom(termGoals);
    selectTermGoal(goal.id, state);
    UI.hideGoalSelectOverlay();
    renderGame();
    autosave();
  });
}

function bindSettingsScreen() {
  const detailedToggle = document.getElementById("toggle-detailed-numbers");
  detailedToggle.checked = !!state.showDetailedNumbers;
  detailedToggle.addEventListener("change", (e) => {
    state.showDetailedNumbers = e.target.checked;
    autosave();
  });
  document.getElementById("btn-reselect-goal").addEventListener("click", () => openGoalSelect());
  document.getElementById("btn-save").addEventListener("click", () => {
    saveGame(state);
    alert("已經儲存低你嘅人生喇！");
  });
  document.getElementById("btn-load").addEventListener("click", () => {
    const loaded = loadGame();
    if (loaded) {
      Object.assign(state, loaded);
      renderGame();
      alert("已經讀取返你嘅人生！");
    } else {
      alert("搵唔到存檔喎。");
    }
  });
  document.getElementById("btn-restart").addEventListener("click", () => {
    if (confirm("確定要重新開始人生？呢個動作會刪除現有存檔。")) {
      clearSavedGame();
      resetState();
      UI.showScreen("screen-start");
    }
  });
}

// ---------- 內容編輯器：純前端小工具，幫作者填模板、check 格式、複製資料，唔屬於遊戲存檔 ----------
const CONTENT_EDITOR_DRAFTS_KEY = "contentEditorDrafts";
let currentContentEditorType = CONTENT_TYPES[0];

function loadContentEditorDrafts() {
  try {
    return JSON.parse(localStorage.getItem(CONTENT_EDITOR_DRAFTS_KEY) || "{}");
  } catch (e) {
    return {};
  }
}

function saveContentEditorDraft(type, text) {
  const drafts = loadContentEditorDrafts();
  drafts[type] = text;
  localStorage.setItem(CONTENT_EDITOR_DRAFTS_KEY, JSON.stringify(drafts));
}

function refreshContentEditor() {
  UI.renderContentEditorTabs(CONTENT_TYPES, currentContentEditorType, (type) => {
    saveContentEditorDraft(currentContentEditorType, UI.getContentEditorText());
    currentContentEditorType = type;
    refreshContentEditor();
  });
  const drafts = loadContentEditorDrafts();
  const text = drafts[currentContentEditorType] || JSON.stringify(BLANK_TEMPLATES[currentContentEditorType], null, 2);
  UI.setContentEditorText(text);
  UI.renderContentEditorWarnings(null);
}

function bindContentEditor() {
  document.getElementById("btn-open-content-editor").addEventListener("click", () => {
    refreshContentEditor();
    UI.showContentEditorOverlay();
  });
  document.getElementById("btn-close-content-editor").addEventListener("click", () => {
    saveContentEditorDraft(currentContentEditorType, UI.getContentEditorText());
    UI.hideContentEditorOverlay();
  });
  document.getElementById("btn-content-editor-validate").addEventListener("click", () => {
    const text = UI.getContentEditorText();
    saveContentEditorDraft(currentContentEditorType, text);
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      UI.renderContentEditorWarnings([`JSON 格式錯誤，檢查唔到：${e.message}`]);
      return;
    }
    UI.renderContentEditorWarnings(validateSingleEntry(currentContentEditorType, data));
  });
  document.getElementById("btn-content-editor-copy").addEventListener("click", async () => {
    const text = UI.getContentEditorText();
    saveContentEditorDraft(currentContentEditorType, text);
    try {
      await navigator.clipboard.writeText(text);
      alert("已經複製到clipboard，可以貼入對應嘅 data 檔。");
    } catch (e) {
      alert("複製失敗，請手動選取文字複製。");
    }
  });
  document.getElementById("btn-content-editor-reset").addEventListener("click", () => {
    if (!confirm("確定要重置做空白模板？呢個 type 嘅草稿會被覆蓋。")) return;
    const text = JSON.stringify(BLANK_TEMPLATES[currentContentEditorType], null, 2);
    UI.setContentEditorText(text);
    saveContentEditorDraft(currentContentEditorType, text);
    UI.renderContentEditorWarnings(null);
  });
}

// Dev / author-only tool gate：內容編輯器唔係玩家功能，預設一定要 off。
// devMode===true 先會顯示個入口，可以用 localStorage.debugDevMode==="true" 或者 URL ?dev=1 開。
function isDevMode() {
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get("dev") === "1") return true;
    return localStorage.getItem("debugDevMode") === "true";
  } catch {
    return false;
  }
}

function init() {
  bindStartScreen();
  bindSetupScreen();
  bindReportScreen();
  bindBottomNav();
  bindMessageButton();
  bindGuideModal();
  bindWeekActions();
  bindGoalsModal();
  bindHobbiesModal();
  bindChatbotModal();
  bindGoalSelectScreen();
  bindSettingsScreen();
  if (isDevMode()) {
    document.getElementById("dev-tools-section").classList.remove("hidden");
    bindContentEditor();
  }
  validateContentData();
}

document.addEventListener("DOMContentLoaded", init);
