// js/main.js
// 只負責初始化、事件綁定，實際邏輯交俾 engine.js，畫面交俾 ui.js

import { state, resetState, clampStat } from "./state.js";
import { saveGame, loadGame, hasSavedGame, resetGame as clearSavedGame } from "./storage.js";
import {
  executeAction, chooseDialogueOption, triggerDialogue,
  chooseMessageOption, advanceWeek, selectTermGoal,
  setBackgroundTagsCache, captureTermStartSnapshot,
  incrementLocationFamiliarity, applyLocationRelationshipInfluence,
  checkLifeDirection, allowSkipMessageWithConsequence, resolvePopupChoice
} from "./engine.js";
import * as UI from "./ui.js";
import { getAllBackgroundCategories, pickRandom } from "../data/backgrounds.js";
import { termGoals } from "../data/goals.js";
import { getMessageById } from "../data/messages.js";

let selection = {
  playerName: "",
  family: null,
  region: null,
  personality: null,
  talent: null,
  interest: null
};

const locationByRegion = {
  region_nt: "loc_tuenmun",
  region_hkisland: "loc_causeway",
  region_kowloon: "loc_mongkok"
};

// ---------- 開局設定 ----------
function refreshSetupScreen() {
  UI.renderSetupScreen(selection, (key, value) => {
    if (key === "playerName") {
      selection.playerName = value;
    } else {
      selection[key] = value;
      refreshSetupScreen();
    }
  });
}

function randomizeSelection() {
  const categories = getAllBackgroundCategories();
  selection = {
    playerName: selection.playerName || "阿仔",
    family: pickRandom(categories.family).id,
    region: pickRandom(categories.region).id,
    personality: pickRandom(categories.personality).id,
    talent: pickRandom(categories.talent).id,
    interest: pickRandom(categories.interest).id
  };
  refreshSetupScreen();
}

function applyBackgroundToState() {
  const categories = getAllBackgroundCategories();
  const chosen = [];
  Object.entries(categories).forEach(([key, list]) => {
    const found = list.find(o => o.id === selection[key]);
    if (found) chosen.push(found);
  });

  resetState();
  state.playerName = selection.playerName || "無名氏";
  state.background = {
    familyId: selection.family,
    regionId: selection.region,
    personalityId: selection.personality,
    talentId: selection.talent,
    interestId: selection.interest
  };

  const statSums = {};
  const statCounts = {};
  chosen.forEach(opt => {
    Object.entries(opt.startingStats || {}).forEach(([stat, val]) => {
      statSums[stat] = (statSums[stat] || 0) + val;
      statCounts[stat] = (statCounts[stat] || 0) + 1;
    });
  });
  Object.keys(statSums).forEach(stat => {
    state.stats[stat] = clampStat(Math.round(statSums[stat] / statCounts[stat]));
  });

  const tags = chosen.flatMap(opt => opt.tags || []);
  setBackgroundTagsCache(state, tags);

  state.locationId = locationByRegion[selection.region] || "loc_shatin";
  state.unlockedLocations = Array.from(new Set([state.locationId, "loc_shatin"]));

  captureTermStartSnapshot(state);
  state.logs.push(`你嘅人生喺${state.age}歲開始……`);
}

// ---------- 遊戲畫面渲染 ----------
function renderGame() {
  UI.renderAll(state, {
    onChooseAction: handleChooseAction,
    onSelectLocation: handleSelectLocation,
    onRefreshActions: refreshActionListOnly
  });
  const detailedToggle = document.getElementById("toggle-detailed-numbers");
  if (detailedToggle) detailedToggle.checked = !!state.showDetailedNumbers;
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

function handleChooseAction(actionId) {
  const result = executeAction(actionId, state);
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
  const result = advanceWeek(state);
  if (result.blocked) {
    alert(result.reason);
    return;
  }
  autosave();
  if (result.termEnded) {
    UI.showTermReview(result.termReview, () => {
      renderGame();
      if (!result.finished) {
        openGoalSelect();
      } else {
        alert("你已經完成咗目前設計嘅所有學期，敬請期待未來更新！");
      }
    });
  } else {
    renderGame();
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
    selection = { playerName: "", family: null, region: null, personality: null, talent: null, interest: null };
    refreshSetupScreen();
    UI.showScreen("screen-setup");
  });

  if (hasSavedGame()) {
    const btn = document.getElementById("btn-continue-game");
    btn.style.display = "block";
    btn.addEventListener("click", () => {
      const loaded = loadGame();
      if (loaded) {
        Object.assign(state, loaded);
        UI.showScreen("screen-game");
        renderGame();
      }
    });
  }
}

function bindSetupScreen() {
  document.getElementById("btn-random-life").addEventListener("click", randomizeSelection);
  document.getElementById("btn-confirm-setup").addEventListener("click", () => {
    if (!selection.family || !selection.region || !selection.personality || !selection.talent || !selection.interest) {
      alert("請揀晒所有選項，或者撳「隨機抽人生」啦！");
      return;
    }
    applyBackgroundToState();
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
  });
}

function bindBottomNav() {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => UI.switchTab(btn.dataset.tab));
  });
}

function bindMessageButton() {
  document.getElementById("btn-messages").addEventListener("click", () => {
    refreshMessageList();
    UI.showMessageListOverlay();
  });
  document.getElementById("btn-close-message-list").addEventListener("click", () => UI.hideMessageListOverlay());
}

function bindGuideModal() {
  document.getElementById("btn-open-guide").addEventListener("click", () => UI.showGuideModal());
  document.getElementById("btn-close-guide").addEventListener("click", () => UI.hideGuideModal());
}

function bindWeekActions() {
  document.getElementById("btn-advance-week").addEventListener("click", handleAdvanceWeek);
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

function init() {
  bindStartScreen();
  bindSetupScreen();
  bindBottomNav();
  bindMessageButton();
  bindGuideModal();
  bindWeekActions();
  bindGoalSelectScreen();
  bindSettingsScreen();
}

document.addEventListener("DOMContentLoaded", init);
