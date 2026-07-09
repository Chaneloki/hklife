// js/ui.js
// 專門負責 render，唔應該喺呢度處理遊戲邏輯（邏輯全部由 engine.js 提供）

import { getAllBackgroundCategories } from "../data/backgrounds.js";
import { getCharacterById, getCharacterDisplayName } from "../data/characters.js";
import { resolveCharacterIcon, DEFAULT_UNKNOWN_ICON, DEFAULT_CHILD_ICON } from "../data/characterIconManifest.js";
import { getActionById, actionCategories } from "../data/actions.js";
import { getLocationById } from "../data/locations.js";
import { getStageCategoryMeta } from "../data/relationshipStages.js";
import { termGoals, getGoalById, getDirectionById } from "../data/goals.js";
import { getCompetitionById } from "../data/opportunities.js";
import { MAX_ACTIVE_HOBBIES } from "../data/hobbies.js";
import {
  CHAT_PROVIDERS, getEligibleChatCharacters, getChatThread,
  getSelectedProvider, getApiKey, maskApiKey, getSelectedModel, getModelDefaults
} from "./chatbot.js";
import {
  getCurrentStage, getCurrentTerm,
  getKnownCharacters,
  getUnreadMessageObjects, getGoalProgressPercent, getGoalSubProgress, getAllActionsData,
  getActionTabs, getAvailableActionsByCategory, resolveActionRelatedPerson,
  getMessageVariantByRelationship, getAvailableChoicesByRelationship,
  generateRelationshipSummary, getChoicePreview, getGoalStatus, getVisibleActiveMessageObjects
} from "./engine.js";

const GOAL_CATEGORY_LABELS = {
  termGoal: "本學期心願", schoolGoals: "學校任務", hobbyGoals: "興趣承諾",
  opportunityGoals: "比賽／機會", relationshipGoals: "關係事件", routeGoals: "特殊傾向"
};

const statMeta = {
  快樂: { emoji: "😊" },
  壓力: { emoji: "😰" },
  體力: { emoji: "⚡" },
  自信: { emoji: "🌟" },
  學業: { emoji: "📘" },
  創意: { emoji: "🎨" },
  社交: { emoji: "🗣️" },
  紀律: { emoji: "📏" },
  金錢: { emoji: "💰" },
  家庭關係: { emoji: "🏠" },
  人脈: { emoji: "🤝" },
  理智值: { emoji: "🧘" }
};

const CORE_STAT_KEYS = ["快樂", "理智值", "體力", "學業", "社交", "創意", "家庭關係", "自信"];

// 所有玩家可見數字（核心資源、進度、獎勵、需求值）render 之前一律經呢個 helper，確保唔會出現 57.5 呢類小數
function formatNumber(value) {
  return Math.round(value ?? 0);
}
// 「58/100」格式（冇空格，慳位、唔會斷行），資源列、checklist、獎勵 tag 全部用呢個
function formatStat(current, target) {
  return `${formatNumber(current)}/${formatNumber(target)}`;
}

// gender 現階段淨係 player profile field："male"/"female" 先有顯示文字，null（舊存檔未補選）就乜都唔顯示
function genderLabel(gender) {
  if (gender === "male") return "男生";
  if (gender === "female") return "女生";
  return "";
}

const backgroundLabelLookup = buildBackgroundLabelLookup();
function buildBackgroundLabelLookup() {
  const categories = getAllBackgroundCategories();
  const lookup = {};
  Object.values(categories).forEach(list => list.forEach(opt => { lookup[opt.id] = opt.name; }));
  return lookup;
}

export function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active-screen"));
  document.getElementById(screenId).classList.add("active-screen");
}

export function switchTab(tabName) {
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active-tab"));
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active-nav"));
  document.getElementById(`tab-${tabName}`).classList.add("active-tab");
  document.querySelector(`.nav-btn[data-tab="${tabName}"]`).classList.add("active-nav");
}

// ---------- 開局設定畫面 ----------
// 開局淨係俾玩家揀名同「家庭／地區想唔想自己揀」，性格／天賦／興趣／核心資源上限一律由命運（隨機）決定
export function renderSetupScreen(selection, onSelect) {
  const categories = getAllBackgroundCategories();
  const groupLabels = { family: "家庭背景", region: "成長地區" };

  const container = document.getElementById("setup-body");
  container.innerHTML = "";

  const nameGroup = document.createElement("div");
  nameGroup.className = "setup-group";
  nameGroup.innerHTML = `
    <h4>你嘅名字</h4>
    <input id="input-player-name" class="name-input" type="text" placeholder="輸入你嘅名 / 花名，留空會用隨機名" value="${selection.playerName || ""}" />
  `;
  container.appendChild(nameGroup);

  const genderGroup = document.createElement("div");
  genderGroup.className = "setup-group";
  genderGroup.innerHTML = `
    <h4>性別</h4>
    <div class="option-row" id="gender-row">
      <div class="option-chip ${selection.gender === "male" ? "selected" : ""}" data-gender="male">男生</div>
      <div class="option-chip ${selection.gender === "female" ? "selected" : ""}" data-gender="female">女生</div>
    </div>
  `;
  container.appendChild(genderGroup);
  genderGroup.querySelectorAll("#gender-row .option-chip").forEach(btn => {
    btn.addEventListener("click", () => onSelect("gender", btn.dataset.gender));
  });

  ["family", "region"].forEach(key => {
    const list = categories[key];
    const group = document.createElement("div");
    group.className = "setup-group";
    const modeRowId = `mode-row-${key}`;
    const rowId = `option-row-${key}`;
    group.innerHTML = `
      <h4>${groupLabels[key]}</h4>
      <div class="option-row" id="${modeRowId}">
        <div class="option-chip ${selection[`${key}Mode`] === "random" ? "selected" : ""}" data-mode="random">隨機</div>
        <div class="option-chip ${selection[`${key}Mode`] === "choose" ? "selected" : ""}" data-mode="choose">自己揀</div>
      </div>
      <div class="option-row ${selection[`${key}Mode`] === "choose" ? "" : "hidden"}" id="${rowId}"></div>
    `;
    container.appendChild(group);

    group.querySelectorAll(`#${modeRowId} .option-chip`).forEach(btn => {
      btn.addEventListener("click", () => onSelect(`${key}Mode`, btn.dataset.mode));
    });

    if (selection[`${key}Mode`] === "choose") {
      const row = group.querySelector(`#${rowId}`);
      list.forEach(opt => {
        const chip = document.createElement("div");
        chip.className = "option-chip" + (selection[key] === opt.id ? " selected" : "");
        chip.innerHTML = `${opt.name}<small>${opt.description}</small>`;
        chip.addEventListener("click", () => onSelect(key, opt.id));
        row.appendChild(chip);
      });
    }
  });

  const hintGroup = document.createElement("p");
  hintGroup.className = "modal-sub";
  hintGroup.textContent = "性格、天賦、興趣傾向同核心資源上限會由系統隨機決定，你會喺下一步睇到「人生起點報告」。";
  container.appendChild(hintGroup);

  // 姓名輸入唔可以每打一個字就觸發成個 setup 畫面重建（會令 input 失焦）。
  // 呢度淨係直接寫入 selection.playerName（同一個物件參照），唔會叫 onSelect／重新 render。
  // 中文輸入法揀字期間（compositionstart～compositionend）唔當佢係「已完成輸入」，避免揀字被打斷。
  const nameInput = document.getElementById("input-player-name");
  let isComposing = false;
  nameInput.addEventListener("compositionstart", () => { isComposing = true; });
  nameInput.addEventListener("compositionend", (e) => {
    isComposing = false;
    selection.playerName = e.target.value;
  });
  nameInput.addEventListener("input", (e) => {
    selection.playerName = e.target.value;
  });
  nameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !isComposing) {
      e.preventDefault();
      document.getElementById("btn-confirm-setup").click();
    }
  });
}

// ---------- 人生起點報告 ----------
export function renderStartingReport(state) {
  const el = document.getElementById("report-body");
  const report = state.startingPotentialReport;
  const bg = state.background;

  const capRows = report.capEntries.map(entry => `
    <div class="subgoal-row">
      <span class="subgoal-label">${statMeta[entry.stat]?.emoji || ""} ${entry.stat}</span>
      <div class="stat-bar"><div class="stat-bar-fill" style="width:${Math.min(100, (formatNumber(entry.current) / formatNumber(entry.cap)) * 100)}%"></div></div>
      <span class="subgoal-value">${formatStat(entry.current, entry.cap)}</span>
    </div>
  `).join("");

  el.innerHTML = `
    <div class="card character-card">
      <div class="character-card-row">
        <img class="character-avatar" src="${DEFAULT_CHILD_ICON}" alt="" />
        <div>
          <div class="character-name">${state.playerName || "無名氏"}</div>
          <div class="character-sub">${backgroundLabelLookup[bg.regionId] || "香港"}成長 ・ ${backgroundLabelLookup[bg.familyId] || ""}</div>
        </div>
      </div>
      <div class="character-tags">
        <span>性格：${backgroundLabelLookup[bg.personalityId] || "待發掘"}</span>
        <span>天賦：${backgroundLabelLookup[bg.talentId] || "待發掘"}</span>
        <span>興趣傾向：${backgroundLabelLookup[bg.interestId] || "待發掘"}</span>
      </div>
    </div>
    <div class="card">
      <h4>🎲 起始總點數池：${formatNumber(report.totalPoints ?? report.totalCap)} 點</h4>
      <p class="direction-reason">${report.summary}</p>
      <details class="report-explain-toggle">
        <summary>查看說明</summary>
        <p class="report-explain-text">呢啲點數已經分配到各項目前值；所有核心資源初始上限都係 100。日後可以透過長期訓練、興趣班、比賽同事件慢慢突破上限。</p>
      </details>
      <div class="subgoal-list">${capRows}</div>
    </div>
  `;
}

// ---------- 頂部 dashboard ----------
export function renderTopDashboard(state) {
  const stage = getCurrentStage(state);
  const term = getCurrentTerm(state);
  const direction = state.currentLifeDirection ? getDirectionById(state.currentLifeDirection) : null;
  const el = document.getElementById("top-dashboard");
  const weeksLeft = term ? Math.max(0, term.totalWeeks - state.currentWeek) : 0;

  el.innerHTML = `
    <div class="dashboard-top-row">
      <span class="dashboard-stage-badge">${stage.name} · 第${state.currentYear}年</span>
      <span class="dashboard-direction-badge">${direction ? direction.name : "未有明顯傾向"}</span>
    </div>
    <div class="dashboard-headline">${term ? term.name : ""} · 第${state.currentWeek}週</div>
    <div class="dashboard-sub">距離學期結束：${weeksLeft} 週</div>
  `;
}

// ---------- 狀態頁：角色卡 ----------
export function renderCharacterCard(state) {
  const el = document.getElementById("character-card");
  const stage = getCurrentStage(state);
  const goal = state.selectedTermGoalId ? getGoalById(state.selectedTermGoalId) : null;
  const bg = state.background;

  el.innerHTML = `
    <div class="character-card-row">
      <img class="character-avatar" src="${DEFAULT_CHILD_ICON}" alt="" />
      <div>
        <div class="character-name">${state.playerName || "無名氏"}　<span class="character-grade">${stage.grade}</span></div>
        <div class="character-sub">${state.age} 歲${genderLabel(state.gender) ? ` ・ ${genderLabel(state.gender)}` : ""} ・ ${backgroundLabelLookup[bg.regionId] || "香港"}成長</div>
      </div>
    </div>
    <div class="character-tags">
      <span>${backgroundLabelLookup[bg.familyId] || ""}</span>
      <span>天賦：${backgroundLabelLookup[bg.talentId] || ""}</span>
      <span>興趣：${backgroundLabelLookup[bg.interestId] || ""}</span>
    </div>
    <div class="character-goal">本學期心願：${goal ? goal.name : "未揀選"}</div>
  `;
}

export function renderGoalProgressCard(state) {
  const el = document.getElementById("goal-progress-card");
  const direction = state.currentLifeDirection ? getDirectionById(state.currentLifeDirection) : null;
  const goal = state.selectedTermGoalId ? getGoalById(state.selectedTermGoalId) : null;
  const term = getCurrentTerm(state);
  const weeksLeft = term ? Math.max(0, term.totalWeeks - state.currentWeek) : 0;

  let goalBlock = `<p class="muted-text">未揀本學期心願，去「設定」頁重新揀選。</p>`;
  if (goal) {
    const overallPercent = getGoalProgressPercent(goal.id, state);
    const subProgress = getGoalSubProgress(goal.id, state);
    const subRows = subProgress.map(sg => `
      <div class="subgoal-row">
        <span class="subgoal-label">${sg.label}</span>
        <div class="stat-bar"><div class="stat-bar-fill" style="width:${Math.round(sg.ratio * 100)}%"></div></div>
        <span class="subgoal-value">${formatSubGoalValue(sg)}</span>
      </div>
    `).join("");
    goalBlock = `
      <div class="goal-progress-row">
        <span>${goal.name}</span>
        <span>${overallPercent}%</span>
      </div>
      <div class="stat-bar"><div class="stat-bar-fill" style="width:${overallPercent}%"></div></div>
      <div class="subgoal-list">${subRows}</div>
      <p class="goal-hint-text">距離結算：${weeksLeft} 週 ・ ${goal.visibleHint || "呢個唔係一定要完成，但會影響你嘅學期回顧。"}</p>
    `;
  }

  el.innerHTML = `
    <h4>🎯 本學期心願進度</h4>
    ${goalBlock}
    <h4 style="margin-top:14px;">🧭 目前人生方向</h4>
    <div class="direction-name">${direction ? direction.name : "平衡成長路線"}</div>
    <p class="direction-reason">形成原因：${state.lifeDirectionReason || "你嘅選擇都幾平均，未有特別偏向邊一方面。"}</p>
  `;
}

// ---------- 最重要目標（dashboard 最多顯示 3 個） ----------
export function renderUrgentGoalsList(state, urgentGoals) {
  const el = document.getElementById("urgent-goals-list");
  if (!urgentGoals.length) {
    el.innerHTML = `<p class="muted-text">暫時冇特別緊急嘅目標。</p>`;
    return;
  }
  el.innerHTML = urgentGoals.map(g => `
    <div class="urgent-goal-card">
      <span class="journal-type-badge">${g.category}</span>
      <span class="urgent-goal-name">${g.name}</span>
      ${g.weeksRemaining ? `<span class="meta-chip meta-chip-limited">${g.weeksRemaining} 週</span>` : ""}
    </div>
  `).join("");
}

// ---------- 目標頁 modal（分類 tab + checklist 詳情） ----------
let currentGoalsTab = "全部";

// 將 effect[] 轉做人睇得明、數字一律整數嘅獎勵句，例如「家庭關係 +5、金錢 +15」
function formatEffectsList(effects = []) {
  return effects.map(e => {
    if (e.type === "statChange") return `${e.stat} ${e.amount >= 0 ? "+" : ""}${formatNumber(e.amount)}`;
    if (e.type === "addMoney") return `金錢 +${formatNumber(e.amount)}`;
    return "";
  }).filter(Boolean).join("、");
}

function checklistRowHtml(sg) {
  return `
    <div class="goal-checklist-row">
      <span class="goal-checklist-check">${sg.done ? "☑" : "☐"}</span>
      <span class="goal-checklist-label">${sg.label}</span>
      <span class="goal-checklist-value">${formatSubGoalValue(sg)}</span>
    </div>
  `;
}

function renderTermGoalCard(state, goal) {
  const status = getGoalStatus(goal.id, state);
  const subProgress = getGoalSubProgress(goal.id, state);
  const term = getCurrentTerm(state);
  const rewardText = formatEffectsList(goal.successRewards);
  return `
    <div class="goal-detail-card">
      <div class="goal-detail-name">${goal.name}</div>
      <div class="action-meta-row">
        <span class="meta-chip">本學期心願</span>
        <span class="meta-chip meta-chip-limited">期限：第 ${goal.deadlineWeek || term?.totalWeeks || "?"} 週前</span>
        <span class="meta-chip">狀態：${status}</span>
      </div>
      ${goal.description ? `<p class="goal-detail-desc">${goal.description}</p>` : ""}
      <p class="goal-section-title">條件</p>
      <div class="goal-checklist-list">${subProgress.map(checklistRowHtml).join("")}</div>
      <p class="goal-section-title">獎勵</p>
      <p class="goal-detail-reward">🎁 ${rewardText || "少量狀態提升"}</p>
      <p class="goal-section-title">未完成</p>
      <p class="goal-detail-noharm">沒有懲罰，但會影響學期回顧和人生方向。</p>
    </div>
  `;
}

// 比賽／機會目標卡：清楚分開「參加資格」（entryRequirements）同「準備進度」（preparationRequirements）
function renderOpportunityGoalCard(state, goalEntry) {
  const compId = goalEntry.id.replace("goal_opportunity_", "");
  const comp = getCompetitionById(compId);
  const status = "進行中";
  const prepCount = state.opportunityProgress[compId]?.prepCount || 0;
  const prepTarget = comp?.preparationRequirements?.count ?? goalEntry.target ?? 0;
  const prepSg = { label: "比賽準備", current: prepCount, target: prepTarget, done: prepCount >= prepTarget };
  const rewardText = comp ? formatEffectsList(comp.successRewards) : "";
  return `
    <div class="goal-detail-card">
      <div class="goal-detail-name">${goalEntry.name}</div>
      <div class="action-meta-row">
        <span class="meta-chip">比賽／機會</span>
        ${goalEntry.source ? `<span class="meta-chip">來源：${goalEntry.source}</span>` : ""}
        <span class="meta-chip meta-chip-limited">期限：第 ${goalEntry.deadlineAt} 週前</span>
        <span class="meta-chip">狀態：${status}</span>
      </div>
      ${goalEntry.description ? `<p class="goal-detail-desc">${goalEntry.description}</p>` : ""}
      <p class="goal-section-title">準備進度</p>
      <div class="goal-checklist-list">${checklistRowHtml(prepSg)}</div>
      <p class="goal-section-title">獎勵</p>
      <p class="goal-detail-reward">🎁 ${rewardText || "相關資源提升、NPC 關係提升"}</p>
      <p class="goal-section-title">未完成</p>
      <p class="goal-detail-noharm">沒有懲罰，只是錯過呢次比賽，學期回顧會記錄你把時間留給咗其他方向。</p>
      ${goalEntry.canAbandon ? `<button class="btn-small btn-secondary goal-abandon-btn" data-cat="opportunityGoals" data-id="${goalEntry.id}">放棄</button>` : ""}
    </div>
  `;
}

export function showGoalsModal(state, goalsByCategory, handlers) {
  const el = document.getElementById("goals-body");
  const tabsEl = document.getElementById("goals-tabs");

  const sections = [
    { key: "termGoal", items: goalsByCategory.termGoal ? [goalsByCategory.termGoal] : [], isTermGoal: true },
    { key: "schoolGoals", items: goalsByCategory.schoolGoals },
    { key: "hobbyGoals", items: goalsByCategory.hobbyGoals },
    { key: "opportunityGoals", items: goalsByCategory.opportunityGoals },
    { key: "relationshipGoals", items: goalsByCategory.relationshipGoals },
    { key: "routeGoals", items: goalsByCategory.routeGoals }
  ];
  const completedNames = state.completedGoals.map(id => getGoalById(id)).filter(Boolean);
  const missedNames = state.missedGoals.map(id => getGoalById(id)).filter(Boolean);

  const tabNames = ["全部", ...Object.values(GOAL_CATEGORY_LABELS), "時間表", "身份", "已完成／錯過"];
  if (tabsEl) {
    tabsEl.innerHTML = tabNames.map(name => `<div class="option-chip goals-tab-chip${currentGoalsTab === name ? " selected" : ""}" data-tab="${name}">${name}</div>`).join("");
    tabsEl.querySelectorAll(".goals-tab-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        currentGoalsTab = chip.dataset.tab;
        showGoalsModal(state, goalsByCategory, handlers);
      });
    });
  }

  let bodyHtml = "";
  if (currentGoalsTab === "已完成／錯過") {
    const doneCards = completedNames.map(g => `<div class="goal-detail-card"><div class="goal-detail-name">✅ ${g.name}</div></div>`).join("");
    const missCards = missedNames.map(g => `<div class="goal-detail-card"><div class="goal-detail-name">⌛ ${g.name}</div><p class="goal-detail-noharm">未完成沒有懲罰，只是把時間留給了其他方向。</p></div>`).join("");
    bodyHtml = doneCards + missCards || `<p class="muted-text">暫時未有已完成或錯過嘅目標。</p>`;
  } else if (currentGoalsTab === "時間表") {
    bodyHtml = renderScheduleTab(state, handlers);
  } else if (currentGoalsTab === "身份") {
    bodyHtml = renderIdentityTab(state);
  } else {
    bodyHtml = sections.filter(sec => currentGoalsTab === "全部" || currentGoalsTab === GOAL_CATEGORY_LABELS[sec.key]).map(sec => {
      if (!sec.items.length) return "";
      if (sec.isTermGoal) return sec.items.map(g => renderTermGoalCard(state, g)).join("");
      if (sec.key === "opportunityGoals") return sec.items.map(g => renderOpportunityGoalCard(state, g)).join("");
      const cards = sec.items.map(g => `
        <div class="goal-detail-card">
          <div class="goal-detail-name">${g.name}</div>
          <div class="action-meta-row">
            <span class="meta-chip">${GOAL_CATEGORY_LABELS[sec.key]}</span>
            ${g.source ? `<span class="meta-chip">來源：${g.source}</span>` : ""}
            ${g.deadlineAt ? `<span class="meta-chip meta-chip-limited">deadline：第 ${formatNumber(g.deadlineAt)} 週</span>` : ""}
            ${g.target ? `<span class="meta-chip">進度：${formatStat(g.progress ?? 0, g.target)}</span>` : ""}
            ${g.level !== undefined ? `<span class="meta-chip">Lv.${formatNumber(g.level)}</span>` : ""}
            <span class="meta-chip">狀態：進行中</span>
          </div>
          ${g.description ? `<p class="goal-detail-desc">${g.description}</p>` : ""}
          <p class="goal-detail-noharm">未完成沒有懲罰，但會影響學期回顧和人生方向。</p>
          ${g.canAbandon ? `<button class="btn-small btn-secondary goal-abandon-btn" data-cat="${sec.key}" data-id="${g.id}">放棄</button>` : ""}
        </div>
      `).join("");
      return cards;
    }).join("") || `<p class="muted-text">暫時未有任何目標。</p>`;
  }

  el.innerHTML = bodyHtml;
  el.querySelectorAll(".goal-abandon-btn").forEach(btn => {
    btn.addEventListener("click", () => handlers.onAbandon(btn.dataset.cat, btn.dataset.id));
  });
  el.querySelectorAll(".schedule-cancel-btn").forEach(btn => {
    btn.addEventListener("click", () => handlers.onCancelSchedule && handlers.onCancelSchedule(btn.dataset.id));
  });
  el.querySelectorAll(".schedule-negotiate-btn").forEach(btn => {
    btn.addEventListener("click", () => handlers.onNegotiateSchedule && handlers.onNegotiateSchedule(btn.dataset.id));
  });
}

// ---------- 時間表 tab：已答應／被安排／參與中，未來會檢查條件嘅事情 ----------
function renderScheduleTab(state, handlers) {
  const active = state.scheduledCommitments || [];
  if (!active.length) return `<p class="muted-text">暫時未有已答應或被安排嘅時間表項目。</p>`;
  return active.map(item => {
    const conditionRows = (item.checkConditions || []).map(c => describeScheduleCondition(c, state)).join("");
    return `
      <div class="goal-detail-card">
        <div class="goal-detail-name">${item.name}</div>
        <div class="action-meta-row">
          <span class="meta-chip">時間表</span>
          <span class="meta-chip">來源：${item.source}</span>
          <span class="meta-chip meta-chip-limited">檢查：第 ${formatNumber(item.checkWeek)} 週</span>
          ${item.apCostPerWeek ? `<span class="meta-chip">每週 ${formatNumber(item.apCostPerWeek)} AP</span>` : ""}
        </div>
        ${item.progressText ? `<p class="goal-detail-desc">${item.progressText}</p>` : ""}
        <p class="goal-section-title">檢查條件</p>
        <div class="goal-checklist-list">${conditionRows}</div>
        <p class="goal-section-title">未達成</p>
        <p class="goal-detail-noharm">${item.missResultText}</p>
        <div class="action-meta-row">
          ${item.canAbandon ? `<button class="btn-small btn-secondary schedule-cancel-btn" data-id="${item.id}">放棄</button>` : ""}
          ${item.canNegotiate ? `<button class="btn-small btn-secondary schedule-negotiate-btn" data-id="${item.id}">協商</button>` : ""}
        </div>
      </div>
    `;
  }).join("");
}

function describeScheduleCondition(condition, state) {
  const label = condition.stat || condition.category || condition.dimension || condition.locationId || "條件";
  const current = condition.stat ? formatNumber(state.stats[condition.stat] ?? 0)
    : condition.category ? formatNumber(state.categoryUsageCounts?.[condition.category] || 0)
    : "";
  return `<div class="goal-checklist-row"><span class="goal-checklist-check">□</span><span class="goal-checklist-label">${label} ${condition.type?.includes("Below") ? "<" : "≥"} ${condition.amount}</span><span class="goal-checklist-value">${current !== "" ? `目前 ${current}` : ""}</span></div>`;
}

// ---------- 身份 tab：目前身份／曾經身份 ----------
function renderIdentityTab(state) {
  const active = (state.identities || []).filter(i => i.status === "active");
  const past = (state.identities || []).filter(i => i.status !== "active");
  const identityCard = (identity) => `
    <div class="goal-detail-card">
      <div class="goal-detail-name">${identity.status === "active" ? "🎖️" : "📜"} ${identity.name}</div>
      <div class="action-meta-row">
        <span class="meta-chip">${identity.type || "身份"}</span>
        <span class="meta-chip">狀態：${identity.status === "active" ? "現任" : identity.status === "completed" ? "已完成" : identity.status === "expired" ? "已完結" : "已放棄"}</span>
        ${identity.endWeek !== null && identity.endWeek !== undefined ? `<span class="meta-chip meta-chip-limited">至第 ${formatNumber(identity.endWeek)} 週</span>` : ""}
      </div>
      ${identity.duties && identity.duties.length ? `<p class="goal-detail-desc">職責：${identity.duties.join("、")}</p>` : ""}
      ${identity.reviewText ? `<p class="goal-detail-desc">${identity.reviewText}</p>` : ""}
    </div>
  `;
  const html = [
    `<h5>目前身份</h5>`,
    active.length ? active.map(identityCard).join("") : `<p class="muted-text">你目前只是一個普通學生。</p>`,
    `<h5 style="margin-top:14px;">曾經身份</h5>`,
    past.length ? past.map(identityCard).join("") : `<p class="muted-text">暫時未有曾經擁有嘅身份紀錄。</p>`
  ];
  return html.join("");
}
export function showGoalsOverlay() { document.getElementById("goals-overlay").classList.remove("hidden"); }
export function hideGoalsOverlay() { document.getElementById("goals-overlay").classList.add("hidden"); }

// ---------- 興趣班管理 modal ----------
// 每張卡分段：A 標題列（icon／班名／狀態 badge）→ B 基本資料列（類型／AP／金錢）→
// C 說明框 → D 效果 chip 區（可換行）→ E 補充規則列 → F 操作按鈕列（固定置底）。
// 每週固定嘅得／失：resourceEffects（property 升跌）＋ skillExpDelta（技能經驗）
function hobbyEffectTagsHtml(h) {
  const tags = [];
  (h.resourceEffects || []).forEach(e => {
    const cls = e.amount >= 0 ? "tag-positive" : "tag-negative";
    tags.push(`<span class="effect-tag ${cls}">${e.stat}${e.amount >= 0 ? "+" : ""}${e.amount}</span>`);
  });
  Object.entries(h.skillExpDelta || {}).forEach(([skill, amount]) => {
    tags.push(`<span class="effect-tag tag-positive">${skill}經驗+${amount}</span>`);
  });
  if (h.moneyCost) tags.push(`<span class="effect-tag tag-negative">金錢-${h.moneyCost}</span>`);
  return tags.join("");
}

function hobbyCostRowHtml(h) {
  return `
    <div class="hobby-cost-row">
      <span class="hobby-cost-chip">📌 每週 -${h.weeklyApCost} AP</span>
      ${h.moneyCost ? `<span class="hobby-cost-chip">💰 每週 -$${h.moneyCost}</span>` : ""}
    </div>
  `;
}

export function showHobbiesModal(state, allHobbies, knownComps, handlers, qualification = {}, overqualifiedReminders = []) {
  const el = document.getElementById("hobbies-body");
  const activeHtml = state.activeHobbies.map(hobbyId => {
    const hobby = allHobbies.find(h => h.id === hobbyId);
    if (!hobby) return "";
    return `
      <div class="hobby-card hobby-card-active">
        <div class="hobby-card-title-row">
          <span class="hobby-card-icon">${hobby.icon}</span>
          <span class="hobby-card-name">${hobby.name}</span>
          <span class="hobby-status-badge hobby-status-active">已參加</span>
        </div>
        <div class="hobby-meta-row">
          <span class="hobby-meta-chip">${hobby.category}</span>
        </div>
        ${hobbyCostRowHtml(hobby)}
        <div class="hobby-effects-row">${hobbyEffectTagsHtml(hobby)}</div>
        <div class="hobby-rules-row">
          <p>每週自動消耗 ${hobby.weeklyApCost} 課後 AP，唔使玩家逐週手動做。</p>
          <p>退出後 ${hobby.quitCooldownWeeks} 週（約 6 個月）內唔可以再揀返呢班。</p>
        </div>
        <div class="hobby-actions-row">
          <button class="btn-small btn-danger hobby-quit-btn" data-id="${hobby.id}">退出</button>
        </div>
      </div>
    `;
  }).join("");

  const availableHtml = allHobbies
    .filter(h => !state.activeHobbies.includes(h.id) && h.availableStages.includes(state.stageId))
    .map(h => {
      const cooldown = state.quitHobbyCooldowns[h.id];
      const onCooldown = cooldown && state.totalWeeksElapsed < cooldown;
      const atMax = state.activeHobbies.length >= MAX_ACTIVE_HOBBIES;
      const disabled = onCooldown || atMax;
      const badge = onCooldown
        ? `<span class="hobby-status-badge hobby-status-cooldown">暫不可選</span>`
        : atMax
          ? `<span class="hobby-status-badge hobby-status-cooldown">已額滿</span>`
          : "";
      const btnLabel = onCooldown ? "暫時未可以再揀" : atMax ? `最多 ${MAX_ACTIVE_HOBBIES} 個興趣班` : "參加";
      return `
        <div class="hobby-card">
          <div class="hobby-card-title-row">
            <span class="hobby-card-icon">${h.icon}</span>
            <span class="hobby-card-name">${h.name}</span>
            ${badge}
          </div>
          <div class="hobby-meta-row">
            <span class="hobby-meta-chip">${h.category}</span>
          </div>
          ${hobbyCostRowHtml(h)}
          <div class="hobby-desc-box">${h.description}</div>
          <div class="hobby-effects-row">${hobbyEffectTagsHtml(h)}</div>
          <div class="hobby-rules-row">
            <p>每週自動消耗 ${h.weeklyApCost} 課後 AP。</p>
            <p>退出後 ${h.quitCooldownWeeks} 週（約 6 個月）內唔可以再揀返呢班。</p>
            <p>同時最多可以參加 ${MAX_ACTIVE_HOBBIES} 個興趣班。</p>
          </div>
          <div class="hobby-actions-row">
            <button class="btn-small btn-secondary hobby-join-btn" data-id="${h.id}" ${disabled ? "disabled" : ""}>${btnLabel}</button>
          </div>
        </div>
      `;
    }).join("");

  const oppHtml = knownComps.filter(c => !state.opportunityProgress[c.id] || state.opportunityProgress[c.id].status !== "active").map(c => {
    const joined = state.opportunityProgress[c.id]?.joined;
    if (joined) return "";
    const q = qualification[c.id] || { qualified: true, missing: [] };
    const reminder = overqualifiedReminders.find(r => r.competitionId === c.id);
    return `
      <div class="guide-card">
        <div class="guide-card-header">
          <span class="guide-card-icon">🏆</span>
          <div><div class="guide-card-name">${c.name}</div><span class="guide-card-cat">${c.type}</span></div>
        </div>
        <div class="guide-tip-box">💡 ${c.description}</div>
        ${!q.qualified ? `<div class="opp-not-qualified">尚未符合資格：${q.missing.join("、")}</div>` : ""}
        ${reminder ? `<div class="opp-reminder">💬 ${reminder.reminderText}</div>` : ""}
        <div class="action-meta-row">
          <button class="btn-small btn-secondary opp-join-btn" data-id="${c.id}" ${q.qualified ? "" : "disabled"}>${q.qualified ? "加入目標" : "尚未符合資格"}</button>
          <button class="btn-small btn-secondary opp-decline-btn" data-id="${c.id}">暫時唔參加</button>
        </div>
      </div>
    `;
  }).join("");

  el.innerHTML = `
    <h5>目前參加緊</h5>
    <div class="hobby-card-list">${activeHtml || `<p class="muted-text">未有參加任何興趣班。</p>`}</div>
    <h5>可以參加</h5>
    <div class="hobby-card-list">${availableHtml || `<p class="muted-text">暫時冇更多可揀嘅興趣班。</p>`}</div>
    ${oppHtml ? `<h5>已知嘅比賽／機會</h5><div class="hobby-card-list">${oppHtml}</div>` : ""}
  `;

  el.querySelectorAll(".hobby-quit-btn").forEach(btn => btn.addEventListener("click", () => handlers.onQuit(btn.dataset.id)));
  el.querySelectorAll(".hobby-join-btn").forEach(btn => btn.addEventListener("click", () => handlers.onJoin(btn.dataset.id)));
  el.querySelectorAll(".opp-join-btn").forEach(btn => btn.addEventListener("click", () => handlers.onOppJoin(btn.dataset.id)));
  el.querySelectorAll(".opp-decline-btn").forEach(btn => btn.addEventListener("click", () => handlers.onOppDecline(btn.dataset.id)));
}
export function showHobbiesOverlay() { document.getElementById("hobbies-overlay").classList.remove("hidden"); }
export function hideHobbiesOverlay() { document.getElementById("hobbies-overlay").classList.add("hidden"); }

// ---------- Chatbot bonus function：ChatbotPanel 只顯示已解鎖角色，唔顯示未解鎖／神秘人 ----------
// 開／關成個 overlay 而家同「訊息」共用同一個浮動按鈕入口（見 js/main.js switchMessageChatbotTab），
// 呢度淨係負責 tab 入面嘅內容 render。
// BYOK：provider chip 淨係反映玩家自己揀咗邊個，唔再查任何 server-side key 狀態
export function renderChatbotProviderRow(onSelectProvider) {
  const el = document.getElementById("chatbot-provider-row");
  const currentProvider = getSelectedProvider();
  el.innerHTML = CHAT_PROVIDERS.map(p =>
    `<button class="chatbot-provider-chip ${p.id === currentProvider ? "selected" : ""}" data-provider="${p.id}">${p.label}</button>`
  ).join("");
  el.querySelectorAll(".chatbot-provider-chip").forEach(btn => {
    btn.addEventListener("click", () => onSelectProvider(btn.dataset.provider));
  });
}

// 顯示目前揀緊嗰個 provider 有冇存 key、只顯示 masked 版本，唔會顯示完整 key
export function renderChatbotKeyStatus() {
  const provider = getSelectedProvider();
  const key = getApiKey(provider);
  const statusEl = document.getElementById("chatbot-key-status");
  const providerLabel = CHAT_PROVIDERS.find(p => p.id === provider)?.label || provider;
  statusEl.textContent = key
    ? `${providerLabel}：已設定 key（${maskApiKey(key)}）`
    : `${providerLabel}：未設定 API key`;
  document.getElementById("chatbot-key-input").value = "";
  document.getElementById("chatbot-key-test-result").classList.add("hidden");
}

// Model dropdown：preset（可以嚟自 backend /api/chatbot/defaults 或者 fetch 返嚟嘅可用清單）
// + 手動輸入 input，兩個都可以決定最終用邊個 model，手動輸入優先
export async function renderChatbotModelRow(extraModels = []) {
  const provider = getSelectedProvider();
  const defaults = await getModelDefaults();
  const presetInfo = defaults[provider] || { presets: [], default: "" };
  const currentModel = getSelectedModel(provider, presetInfo.default);

  const options = [...new Set([...(presetInfo.presets || []), ...extraModels])];
  const selectEl = document.getElementById("chatbot-model-select");
  selectEl.innerHTML = options.map(m =>
    `<option value="${m}" ${m === currentModel ? "selected" : ""}>${m}</option>`
  ).join("");

  const manualInput = document.getElementById("chatbot-model-manual-input");
  manualInput.value = options.includes(currentModel) ? "" : currentModel;
  manualInput.placeholder = `或者手動輸入 model id（目前：${currentModel || "未揀"}）`;
}

export function showChatbotKeyTestResult(ok, message) {
  const el = document.getElementById("chatbot-key-test-result");
  el.textContent = message;
  el.className = `chatbot-key-test-result ${ok ? "success" : "error"}`;
}

export function renderChatbotCharacterList(state, onSelectCharacter) {
  const el = document.getElementById("chatbot-character-list");
  const characters = getEligibleChatCharacters(state);
  if (!characters.length) {
    el.innerHTML = `<p class="muted-text">暫時未有可以聊天的人。</p>`;
    return;
  }
  el.innerHTML = characters.map(c => {
    const thread = getChatThread(c.id, state);
    const summary = generateRelationshipSummary(c.id, state);
    const lastChatted = thread?.lastChattedWeek ? `上次傾偈：第 ${thread.lastChattedWeek} 週` : "仲未傾過偈";
    return `
      <div class="chatbot-char-card" data-id="${c.id}">
        ${characterAvatarHtml(c, state)}
        <div class="chatbot-char-card-body">
          <div class="chatbot-char-name">${c.name}</div>
          <div class="chatbot-char-meta">${c.roleLabel}${summary ? ` ・ ${summary.stageLabel}` : ""} ・ ${lastChatted}</div>
        </div>
      </div>
    `;
  }).join("");
  el.querySelectorAll(".chatbot-char-card").forEach(card => {
    card.addEventListener("click", () => onSelectCharacter(card.dataset.id));
  });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// 全部顯示角色頭像嘅地方（人物列表、Chatbot、對話 speaker、action related person tag……）
// 一律要經呢個 helper（背後淨係用 resolveCharacterIcon()），唔可以自己砌一套 emoji fallback
function characterAvatarHtml(character, state, extraClass = "") {
  const src = character ? resolveCharacterIcon(character, state) : DEFAULT_UNKNOWN_ICON;
  const alt = character ? escapeHtml(character.name || "") : "";
  return `<img class="character-avatar ${extraClass}" src="${src}" alt="${alt}" />`;
}

export function renderChatbotThread(characterId, state, options = {}) {
  const character = getCharacterById(characterId, state);
  const thread = getChatThread(characterId, state);
  document.getElementById("chatbot-thread-header").innerHTML = character
    ? `${characterAvatarHtml(character, state)}<div class="chatbot-char-name">${character.name}</div><div class="chatbot-char-meta">${character.roleLabel}</div>`
    : "";
  const messagesEl = document.getElementById("chatbot-thread-messages");
  const history = thread?.chatHistory || [];
  const visibleMessages = [...history];
  if (options.pendingPlayerMessage) {
    visibleMessages.push({ role: "player", text: options.pendingPlayerMessage });
  }
  if (options.isTyping) {
    visibleMessages.push({
      role: "character chatbot-msg-typing",
      text: options.typingText || "正在回覆",
      typing: true,
      pendingId: options.pendingMessageId || "pending"
    });
  }
  if (options.pendingError) {
    visibleMessages.push({
      role: "character chatbot-msg-error",
      text: options.pendingError.message,
      errorActions: true,
      pendingId: options.pendingMessageId || "pending"
    });
  }
  messagesEl.innerHTML = visibleMessages.length
    ? visibleMessages.map(m => {
        const pendingAttr = m.pendingId ? ` data-pending-id="${escapeHtml(m.pendingId)}"` : "";
        const content = m.typing
          ? `${escapeHtml(m.text)}<span class="typing-dots" aria-hidden="true"><span></span><span></span><span></span></span>`
          : escapeHtml(m.text);
        const actions = m.errorActions
          ? `<div class="chatbot-pending-actions">
              <button class="btn-small btn-secondary chatbot-retry-btn" type="button">重新嘗試</button>
              <button class="btn-small btn-secondary chatbot-cancel-pending-btn" type="button">取消</button>
            </div>`
          : "";
        const isPlayer = m.role === "player";
        const bubbleAvatar = isPlayer ? "" : characterAvatarHtml(character, state, "chatbot-msg-avatar");
        return `<div class="chatbot-msg chatbot-msg-${m.role}"${pendingAttr}>${bubbleAvatar}<div class="chatbot-msg-bubble">${content}${actions}</div></div>`;
      }).join("")
    : `<p class="muted-text">同${character?.name || "佢"}講句嘢啦。</p>`;
  messagesEl.scrollTop = messagesEl.scrollHeight;
  document.getElementById("chatbot-thread-error").classList.add("hidden");
  if (options.pendingError) {
    const retryBtn = messagesEl.querySelector(".chatbot-retry-btn");
    const cancelBtn = messagesEl.querySelector(".chatbot-cancel-pending-btn");
    if (retryBtn && options.pendingError.onRetry) retryBtn.addEventListener("click", options.pendingError.onRetry);
    if (cancelBtn && options.pendingError.onCancel) cancelBtn.addEventListener("click", options.pendingError.onCancel);
  }
}

export function showChatbotError(message) {
  const el = document.getElementById("chatbot-thread-error");
  el.textContent = message;
  el.classList.remove("hidden");
}

export function switchChatbotView(view) {
  document.getElementById("chatbot-key-settings").classList.toggle("hidden", view === "thread");
  document.getElementById("chatbot-character-list").classList.toggle("hidden", view === "thread");
  document.getElementById("chatbot-thread-view").classList.toggle("hidden", view !== "thread");
}

// ---------- 內容編輯器（俾作者手動輸入正式內容，唔屬於遊戲內容本身） ----------
const CONTENT_TYPE_LABELS = {
  character: "角色", event: "事件", choice: "選項", goal: "目標",
  scheduleItem: "Schedule Item", identity: "身份", storyScene: "Story Scene"
};

export function renderContentEditorTabs(types, currentType, onSelectType) {
  const el = document.getElementById("content-editor-type-tabs");
  el.innerHTML = types.map(t => `<div class="option-chip goals-tab-chip${t === currentType ? " selected" : ""}" data-type="${t}">${CONTENT_TYPE_LABELS[t] || t}</div>`).join("");
  el.querySelectorAll(".option-chip").forEach(chip => {
    chip.addEventListener("click", () => onSelectType(chip.dataset.type));
  });
}

export function setContentEditorText(text) {
  document.getElementById("content-editor-textarea").value = text;
}

export function getContentEditorText() {
  return document.getElementById("content-editor-textarea").value;
}

export function renderContentEditorWarnings(warnings) {
  const el = document.getElementById("content-editor-warnings");
  if (!warnings) {
    el.innerHTML = "";
    return;
  }
  if (!warnings.length) {
    el.innerHTML = `<div class="content-editor-ok-line">✅ 冇發現明顯缺漏。</div>`;
    return;
  }
  el.innerHTML = warnings.map(w => `<div class="content-editor-warning-line">⚠️ ${w}</div>`).join("");
}

export function showContentEditorOverlay() { document.getElementById("content-editor-overlay").classList.remove("hidden"); }
export function hideContentEditorOverlay() { document.getElementById("content-editor-overlay").classList.add("hidden"); }

// ---------- 成績表 ----------
export function showReportCard(card, onContinue) {
  const el = document.getElementById("report-card-body");
  const subjectHtml = card.subjectScores.map(sc => `<span class="review-stat-tag">${sc.name} ${sc.score}</span>`).join("");
  el.innerHTML = `
    <p class="term-review-goal">總評級：${card.overallLabel}（平均 ${card.overallAverage}）</p>
    <div class="review-stat-tags">${subjectHtml}</div>
    <h5>操行</h5>
    <p>${card.conductLabel} — ${card.conductComment}</p>
    <h5>老師評語</h5>
    <p>${card.teacherComment}</p>
    <h5>家長反應</h5>
    <p>${card.parentReaction}</p>
  `;
  document.getElementById("report-card-overlay").classList.remove("hidden");
  const btn = document.getElementById("btn-report-card-continue");
  const newBtn = btn.cloneNode(true);
  btn.parentNode.replaceChild(newBtn, btn);
  newBtn.addEventListener("click", () => {
    document.getElementById("report-card-overlay").classList.add("hidden");
    onContinue();
  });
}

// ---------- 人生片段回顧：唔係報告，係一段有場景、對話、結果嘅小故事 ----------
export function showStoryScene(scene, onContinue) {
  document.getElementById("story-scene-title").textContent = `📖 ${scene.title}`;
  const el = document.getElementById("story-scene-body");

  const narrationHtml = (scene.narration || []).map(line => `<p class="story-narration">${line}</p>`).join("");
  const dialogueHtml = (scene.dialogueLines || []).map(d => `
    <p class="story-dialogue-line"><span class="story-speaker">${d.speaker}：</span>「${d.text}」</p>
  `).join("");
  const effectsHtml = (scene.effects || []).map(e => `<li>${e}</li>`).join("");

  el.innerHTML = `
    <p class="story-scene-heading">${scene.sceneHeading}</p>
    ${scene.charactersInvolved && scene.charactersInvolved.length ? `<p class="story-characters">參與角色：${scene.charactersInvolved.join("、")}</p>` : ""}
    <div class="story-narration-block">${narrationHtml}</div>
    <div class="story-dialogue-block">${dialogueHtml}</div>
    <h5>結果</h5>
    <p class="story-result">${scene.result}</p>
    <h5>影響</h5>
    <ul class="story-effects-list">${effectsHtml}</ul>
  `;
  document.getElementById("story-scene-overlay").classList.remove("hidden");
  const btn = document.getElementById("btn-story-scene-continue");
  const newBtn = btn.cloneNode(true);
  btn.parentNode.replaceChild(newBtn, btn);
  newBtn.addEventListener("click", () => {
    document.getElementById("story-scene-overlay").classList.add("hidden");
    onContinue();
  });
}

export function renderStatsGrid(state) {
  const el = document.getElementById("stats-grid");
  const stats = state.stats;
  el.innerHTML = CORE_STAT_KEYS.map(key => {
    const value = formatNumber(stats[key] ?? 0);
    const cap = state.statCaps ? state.statCaps[key] : null;
    const ceiling = formatNumber(cap || 100);
    const percent = Math.min(100, (value / ceiling) * 100);
    return `
      <div class="stat-row">
        <div class="stat-row-label">${statMeta[key]?.emoji || ""} ${key}</div>
        <div class="stat-bar"><div class="stat-bar-fill" style="width:${percent}%"></div></div>
        <div class="stat-row-value">${formatStat(value, ceiling)}</div>
      </div>
    `;
  }).join("");
}

// ---------- Skill property：只顯示 skillExp > 0 嘅技能，唔顯示 0 分／未解鎖技能 ----------
export function renderSkillList(state) {
  const el = document.getElementById("skill-list");
  if (!el) return;
  const entries = Object.entries(state.skillExp || {}).filter(([, exp]) => exp > 0);
  if (!entries.length) {
    el.innerHTML = `<p class="muted-text skill-empty-text">暫時未開始任何技能。</p>`;
    return;
  }
  el.innerHTML = `
    <h3 class="panel-title">技能</h3>
    ${entries.map(([skill, exp]) => `
      <div class="skill-row">
        <span class="skill-row-name">${skill}</span>
        <span class="skill-row-exp">${exp} exp</span>
      </div>
    `).join("")}
  `;
}

// ---------- 本週安排頁 ----------
export function renderWeekHeader(state) {
  const el = document.getElementById("week-header");
  const term = getCurrentTerm(state);
  const weeksLeft = term ? Math.max(0, term.totalWeeks - state.currentWeek) : 0;
  const dots = Array.from({ length: state.maxAp }, (_, i) => `<span class="ap-dot ${i < state.ap ? "filled" : ""}"></span>`).join("");

  el.innerHTML = `
    <div class="week-header-top">
      <div>
        <div class="week-header-term">${term ? term.name : ""}</div>
        <div class="week-header-sub">第 ${state.currentWeek} / ${term ? term.totalWeeks : 0} 週 ・ 距離學期結束：${weeksLeft} 週</div>
      </div>
      <div class="ap-display">
        <div class="ap-label">課後 AP</div>
        <div class="ap-dots">${dots}</div>
      </div>
    </div>
    ${!state.unreadMessages.length && !state.forcedSchedule.length ? `<p class="calm-week-note">這週沒有特別事件，你可以照常安排自己的時間。</p>` : ""}
  `;
}

export function renderUrgentBanner(state) {
  const el = document.getElementById("urgent-banner");
  if (state.urgentMessageIds.length > 0) {
    el.classList.remove("hidden");
    el.textContent = "🚫 檢測到緊急未讀訊息，請先回覆再進入下一週";
  } else {
    el.classList.add("hidden");
  }
}

export function renderForcedScheduleBanner(state, onNegotiate) {
  const el = document.getElementById("forced-schedule-banner");
  if (!state.forcedSchedule.length) {
    el.classList.add("hidden");
    el.innerHTML = "";
    return;
  }
  el.classList.remove("hidden");
  el.innerHTML = state.forcedSchedule.map(f => {
    const who = getCharacterById(f.forcedByCharacterId);
    return `
      <div class="forced-schedule-row">
        <span>接下來 ${f.weeksRemaining} 週，每週 1 AP 會被補課佔用（${who ? who.name : "屋企人"}安排）。呢個唔係失敗，只係呢段人生俾大人介入咗。</span>
        ${f.canNegotiate ? `<button class="btn-small btn-secondary" data-forced-id="${f.id}">同佢商量</button>` : ""}
      </div>
    `;
  }).join("");
  el.querySelectorAll("[data-forced-id]").forEach(btn => {
    btn.addEventListener("click", () => onNegotiate(btn.dataset.forcedId));
  });
}

// ---------- 行動分類 tabs + 行動清單 ----------
let currentActionTab = null;

// 淨係顯示「而家有嘢」嘅 tab：班務身份呢類要解鎖先出現嘅分類，
// 冇任何可用 action 之前唔會顯示個 tab；解鎖咗先自動出現。
export function renderActionTabs(state, onChangeTab) {
  const el = document.getElementById("action-tabs-row");
  const allTabs = getActionTabs();
  const tabs = allTabs.filter(tab => getAvailableActionsByCategory(tab, state).length > 0);
  if (!currentActionTab || !tabs.includes(currentActionTab)) currentActionTab = tabs[0] || null;
  el.innerHTML = tabs.map(tab =>
    `<button class="action-tab-chip ${tab === currentActionTab ? "selected" : ""}" data-tab="${tab}">${tab}</button>`
  ).join("");
  el.querySelectorAll(".action-tab-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      currentActionTab = btn.dataset.tab;
      onChangeTab();
    });
  });
}

export function renderActionList(state, onChooseAction) {
  const el = document.getElementById("action-list");
  const list = currentActionTab ? getAvailableActionsByCategory(currentActionTab, state) : [];

  if (!list.length) {
    el.innerHTML = `<p class="muted-text">呢個分類暫時冇可用行動。</p>`;
    return list;
  }

  el.innerHTML = "";
  list.forEach(action => {
    const affordable = state.ap >= action.apCost;
    // Target 喺呢度 resolve 一次就即刻定案（action instance），render 用嚟顯示 name tag，
    // onChooseAction 一定要沿用返呢個值，唔可以喺 click 嗰陣重新 resolve／重新 random，
    // 否則會出現「UI 顯示 A，但實際加 B」
    const target = resolveActionRelatedPerson(action, state);
    const item = document.createElement("div");
    item.className = "action-item" + (affordable ? "" : " action-item-disabled");
    item.innerHTML = `
      <div class="action-item-icon">${action.icon}</div>
      <div class="action-item-body">
        <div class="action-name">${action.name}<span class="ap-cost-badge">-${action.apCost} AP</span></div>
        <div class="action-desc">${action.description}</div>
        <div class="action-effect-tags">${effectTagsHtml(action.effects)}</div>
        <div class="action-meta-row">${actionMetaHtml(action, state, target)}</div>
      </div>
      <span class="action-tag">${action.category}</span>
    `;
    item.addEventListener("click", () => onChooseAction(action.id, target ? target.id : null));
    el.appendChild(item);
  });
  return list;
}

// state 冇傳入（例如行動指南 wiki 模式）就淨係顯示唔涉及玩家已知狀態嘅 meta（地點／限時／目標），
// 唔會顯示人物 name tag。target 由 caller（renderActionList）resolve 一次傳入，呢度唔再自己
// call resolveActionRelatedPerson，確保顯示同 onChooseAction 用嘅係同一個 target。
function actionMetaHtml(action, state, target) {
  const chips = [];
  const locCondition = (action.conditions || []).find(c => c.type === "currentLocation");
  if (locCondition) {
    const loc = getLocationById(locCondition.locationId);
    chips.push(`<span class="meta-chip">📍 ${loc ? loc.name : locCondition.locationId}</span>`);
  }
  if (action.limitedWeeks && action.limitedWeeks.length) {
    chips.push(`<span class="meta-chip meta-chip-limited">⏰ 限時第${action.limitedWeeks.join("/")}週</span>`);
  }
  // 人物 name tag：target 一律嚟自已解鎖角色（s.knownCharacters），冇解鎖到就乜都唔顯示——
  // 唔顯示灰色名、唔顯示「???」、唔顯示 roleLabel 呢類提示
  if (target) chips.push(`<span class="meta-chip">👤 ${target.name}</span>`);
  if (state && action.fromCharacterId && state.knownCharacters.includes(action.fromCharacterId)) {
    const fromChar = getCharacterById(action.fromCharacterId, state);
    if (fromChar) chips.push(`<span class="meta-chip meta-chip-invite">✉️ 來自${fromChar.name}</span>`);
  }
  if (action.goalProgress && action.goalProgress.length) {
    chips.push(`<span class="meta-chip">🎯 推進：${action.goalProgress.join("／")}</span>`);
  }
  return chips.join("");
}

function effectTagsHtml(effects = []) {
  return effects
    .filter(e => e.type === "statChange" || e.type === "addMoney")
    .map(e => {
      const name = e.type === "addMoney" ? "金錢" : e.stat;
      const amount = e.amount;
      const cls = amount >= 0 ? "tag-positive" : "tag-negative";
      return `<span class="effect-tag ${cls}">${name}${amount >= 0 ? "+" : ""}${amount}</span>`;
    }).join("");
}

// ---------- 人物 tab：NPC 關係卡 ----------
export function renderPeopleList(state) {
  const el = document.getElementById("people-list");
  const people = getKnownCharacters(state);
  el.innerHTML = people.map(c => {
    const summary = generateRelationshipSummary(c.id, state);
    const dimBars = summary.dimensions
      .filter(d => c.relationshipDimensions.includes(d.dimension) || d.dimension === "misunderstanding")
      .map(d => `
        <div class="rel-dim-row">
          <span class="rel-dim-label">${d.label}</span>
          <div class="stat-bar"><div class="stat-bar-fill" style="width:${d.value}%"></div></div>
          <span class="rel-dim-value">${d.value}</span>
        </div>
      `).join("");
    const memories = summary.recentMemories.length
      ? `<div class="rel-memories">${summary.recentMemories.map(m => `<div class="rel-memory-item">📝 ${m.text}</div>`).join("")}</div>`
      : `<div class="rel-memories muted-text">仲未有共同回憶</div>`;

    return `
      <div class="person-card">
        <div class="person-card-header">
          ${characterAvatarHtml(c, state)}
          <div>
            <div class="person-name">${c.name}（${c.role}）</div>
            <span class="person-stage-badge stage-tone-${getStageCategoryMeta(summary.stageCategory).tone}">${getStageCategoryMeta(summary.stageCategory).icon} ${summary.stageLabel}</span>
          </div>
        </div>
        <p class="person-personality">${c.personalityTags.join(" ・ ")}</p>
        <p class="person-attitude">${summary.attitudeText}</p>
        <div class="rel-dims">${dimBars}</div>
        ${memories}
        <div class="person-goal-hint">🎯 佢想要：${c.personalGoal}</div>
      </div>
    `;
  }).join("");
}

// ---------- 成長記事簿 ----------
export function renderJournal(state) {
  const el = document.getElementById("journal-list");
  const logs = state.reviewLogs.slice().reverse();
  if (!logs.length) {
    el.innerHTML = `<p class="muted-text">仲未有任何記錄，去「本週安排」開始你嘅第一個選擇啦！</p>`;
    return;
  }
  el.innerHTML = logs.map(log => `
    <div class="journal-entry">
      <div class="journal-entry-time">${log.termLabel}</div>
      <div class="journal-entry-card">
        <div class="journal-entry-header">
          <span class="journal-type-badge">${log.type}</span>
          <span class="journal-entry-title">${log.title}</span>
        </div>
        <p class="journal-entry-body">${log.body}</p>
        <div class="journal-tags">${log.tags.map(t => `<span>${t}</span>`).join("")}</div>
      </div>
    </div>
  `).join("");
}

// ---------- 訊息浮動按鈕與列表 ----------
export function renderMessageBadge(state) {
  const badge = document.getElementById("message-badge");
  const count = state.unreadMessages.length + getVisibleActiveMessageObjects(state).length;
  if (count > 0) {
    badge.textContent = String(count);
    badge.classList.remove("hidden");
  } else {
    badge.classList.add("hidden");
  }
}

export function renderMessageList(state, onOpenMessage, onSkipMessage, onOpenActiveMessage) {
  const el = document.getElementById("message-list-body");
  const msgs = getUnreadMessageObjects(state);
  const activeMessages = getVisibleActiveMessageObjects(state);
  if (!msgs.length && !activeMessages.length) {
    el.innerHTML = `<p class="muted-text">暫時冇未讀訊息。</p>`;
    return;
  }
  el.innerHTML = "";
  activeMessages.forEach(m => {
    const sender = getCharacterById(m.senderId);
    const row = document.createElement("div");
    row.className = "message-row message-urgent";
    row.innerHTML = `
      ${characterAvatarHtml(sender, state)}
      <div class="message-row-body">
        <div class="message-row-title">主動訊息</div>
        <div class="message-row-sub">${sender ? (getCharacterDisplayName(m.senderId, state) || sender.name) : "未知"} ・ 親近度 ${m.threshold}</div>
      </div>
    `;
    row.querySelector(".message-row-body").addEventListener("click", () => onOpenActiveMessage && onOpenActiveMessage(m.instanceId));
    el.appendChild(row);
  });
  msgs.forEach(m => {
    const sender = getCharacterById(m.senderId);
    const row = document.createElement("div");
    row.className = "message-row" + (m.urgency === "urgent" ? " message-urgent" : "");
    row.innerHTML = `
      ${characterAvatarHtml(sender, state)}
      <div class="message-row-body">
        <div class="message-row-title">${m.title}</div>
        <div class="message-row-sub">${sender ? (getCharacterDisplayName(m.senderId, state) || sender.name) : "未知"}${m.urgency === "urgent" ? " ・ 緊急" : ""}</div>
      </div>
    `;
    row.querySelector(".message-row-body").addEventListener("click", () => onOpenMessage(m.id));
    if (m.urgency !== "urgent") {
      const skipBtn = document.createElement("button");
      skipBtn.className = "message-skip-btn";
      skipBtn.textContent = "暫時不回";
      skipBtn.addEventListener("click", (e) => { e.stopPropagation(); onSkipMessage(m.id); });
      row.appendChild(skipBtn);
    }
    el.appendChild(row);
  });
}

export function showMessageListOverlay() { document.getElementById("message-list-overlay").classList.remove("hidden"); }
export function hideMessageListOverlay() { document.getElementById("message-list-overlay").classList.add("hidden"); }

// ---------- 對話／訊息內容框（共用） ----------
export function showDialogue(dialogue, onChoiceSelected, state, options = {}) {
  const overlay = document.getElementById("dialogue-overlay");
  const speakerId = dialogue.senderId || dialogue.speakerId;
  const speaker = getCharacterById(speakerId, state);
  const avatarEl = document.getElementById("dialogue-avatar");
  avatarEl.src = speaker ? resolveCharacterIcon(speaker, state) : DEFAULT_UNKNOWN_ICON;
  avatarEl.alt = speaker ? escapeHtml(speaker.name || "") : "";
  document.getElementById("dialogue-name").textContent = speaker ? (getCharacterDisplayName(speakerId, state) || speaker.name) : "神秘人";

  const lines = state ? getMessageVariantByRelationship(dialogue, state) : dialogue.lines;
  document.getElementById("dialogue-lines").innerHTML = lines.map(line => {
    const normalized = typeof line === "string" ? { type: "speech", text: line } : line;
    const cls = normalized.type === "narrator" ? "dialogue-narrator-line" : "dialogue-speech-line";
    return `<p class="${cls}">${escapeHtml(normalized.text || "")}</p>`;
  }).join("");

  const choicesEl = document.getElementById("dialogue-choices");
  choicesEl.innerHTML = "";
  const setDialogueChoicesDisabled = (disabled) => {
    choicesEl.querySelectorAll("button").forEach(btn => { btn.disabled = disabled; });
  };
  const typingDotsHtml = `<span class="typing-dots" aria-hidden="true"><span></span><span></span><span></span></span>`;
  const activeMessageWaitingText = (elapsedMs) => {
    const name = speaker ? (getCharacterDisplayName(speakerId, state) || speaker.name) : "對方";
    if (elapsedMs >= 10000) return `${name}仲喺度組織緊點答你`;
    if (elapsedMs >= 3000) return `${name}仲諗緊點答你`;
    return `${name}正在諗點答你`;
  };
  const visibleChoices = state ? getAvailableChoicesByRelationship(dialogue, state) : dialogue.choices;
  visibleChoices.forEach((choice) => {
    const realIndex = dialogue.choices.indexOf(choice);
    const preview = state ? getChoicePreview(choice, state) : null;
    const btn = document.createElement("button");
    btn.className = "btn-choice" + (preview && !preview.natural ? " btn-choice-unnatural" : "");
    btn.innerHTML = `
      ${choice.text}
      ${preview && preview.toneLabel ? `<small class="choice-tone">（${preview.toneLabel}）</small>` : ""}
      ${preview ? choicePreviewHtml(preview, state) : ""}
    `;
    btn.addEventListener("click", () => onChoiceSelected(realIndex));
    choicesEl.appendChild(btn);
  });

  if (options.freeInputEnabled && options.onFreeInput) {
    const freeWrap = document.createElement("div");
    freeWrap.className = "dialogue-free-input";
    freeWrap.innerHTML = `
      <button class="btn-choice dialogue-free-toggle" type="button">自己輸入</button>
      <div class="dialogue-free-panel hidden">
        <textarea class="dialogue-free-textarea" maxlength="160" placeholder="輸入一句回覆"></textarea>
        <div class="dialogue-free-actions">
          <button class="btn-small btn-secondary dialogue-free-send" type="button">送出</button>
          <button class="btn-small btn-secondary dialogue-free-cancel" type="button">取消</button>
        </div>
        <div class="dialogue-free-status muted-text hidden"></div>
      </div>
    `;
    const toggle = freeWrap.querySelector(".dialogue-free-toggle");
    const panel = freeWrap.querySelector(".dialogue-free-panel");
    const textarea = freeWrap.querySelector(".dialogue-free-textarea");
    const send = freeWrap.querySelector(".dialogue-free-send");
    const cancel = freeWrap.querySelector(".dialogue-free-cancel");
    const status = freeWrap.querySelector(".dialogue-free-status");
    let waitingTimer = null;
    const stopWaiting = () => {
      if (waitingTimer) clearInterval(waitingTimer);
      waitingTimer = null;
    };
    const startWaiting = () => {
      const startedAt = Date.now();
      const renderWaiting = () => {
        status.innerHTML = `${escapeHtml(activeMessageWaitingText(Date.now() - startedAt))}${typingDotsHtml}`;
      };
      renderWaiting();
      status.classList.remove("hidden");
      waitingTimer = setInterval(renderWaiting, 500);
    };
    toggle.addEventListener("click", () => {
      panel.classList.remove("hidden");
      toggle.classList.add("hidden");
      textarea.focus();
    });
    cancel.addEventListener("click", () => {
      textarea.value = "";
      panel.classList.add("hidden");
      toggle.classList.remove("hidden");
      stopWaiting();
      status.classList.add("hidden");
    });
    send.addEventListener("click", async () => {
      const value = textarea.value.trim();
      if (!value) return;
      setDialogueChoicesDisabled(true);
      send.disabled = true;
      textarea.disabled = true;
      startWaiting();
      try {
        const handled = await options.onFreeInput(value);
        if (!handled) {
          status.textContent = "暫時未能理解這次回覆，請再試一次。";
          status.classList.remove("hidden");
        }
      } finally {
        stopWaiting();
        setDialogueChoicesDisabled(false);
        send.disabled = false;
        textarea.disabled = false;
      }
    });
    choicesEl.appendChild(freeWrap);
  }

  overlay.classList.remove("hidden");
}

function choicePreviewHtml(preview, state) {
  const parts = [];
  if (preview.affectedCharacters.length) parts.push(`👤 ${preview.affectedCharacters.join("、")}`);
  if (preview.affectedStats.length) parts.push(`📊 ${preview.affectedStats.join("、")}`);
  if (preview.tendencyLabel) parts.push(`🧭 ${preview.tendencyLabel}`);
  preview.riskNotes.forEach(n => parts.push(`⚠️ ${n}`));
  if (!preview.natural) parts.push(preview.hintText || "呢個回答同你平時唔太一樣");

  const metaLine = parts.length ? `<div class="choice-preview-line">可能影響：${parts.join(" ・ ")}</div>` : "";
  return metaLine;
}

export function hideDialogue() { document.getElementById("dialogue-overlay").classList.add("hidden"); }

// ---------- Opening event 選完 choice 之後嘅結果流程 ----------
// 順序一定要係：玩家 playerLine → follow-up resultDialogue → point change result，
// 唔可以淨係顯示數值、唔可以將 follow-up dialogue 藏起
export function showOpeningEventOutcome({ playerLine, playerLineType, resultDialogue, outcomeSummary }, onContinue) {
  const storyHtml = [];
  if (playerLine) {
    storyHtml.push(`<div class="outcome-story-bubble outcome-story-player">${playerLineType === "action" ? escapeHtml(playerLine) : `「${escapeHtml(playerLine)}」`}</div>`);
  }
  if (resultDialogue && resultDialogue.text) {
    const isNarrator = !resultDialogue.speaker || resultDialogue.speaker === "旁白";
    storyHtml.push(`
      <div class="outcome-story-bubble ${isNarrator ? "outcome-story-narrator" : "outcome-story-speaker"}">
        ${!isNarrator ? `<div class="outcome-story-speaker-name">${escapeHtml(resultDialogue.speaker)}</div>` : ""}
        <div>${escapeHtml(resultDialogue.text)}</div>
      </div>
    `);
  }
  const pointHtml = (outcomeSummary || []).map(l => `<div class="outcome-line">${l}</div>`).join("");

  const hasAnything = storyHtml.length || pointHtml;
  if (!hasAnything) { onContinue(); return; }

  document.getElementById("outcome-summary-list").innerHTML = `
    ${storyHtml.length ? `<div class="outcome-story-block">${storyHtml.join("")}</div>` : ""}
    ${pointHtml}
  `;
  document.getElementById("outcome-summary-overlay").classList.remove("hidden");
  const btn = document.getElementById("btn-outcome-summary-continue");
  const newBtn = btn.cloneNode(true);
  btn.parentNode.replaceChild(newBtn, btn);
  newBtn.addEventListener("click", () => {
    document.getElementById("outcome-summary-overlay").classList.add("hidden");
    onContinue();
  });
}

// ---------- 回覆後果摘要 ----------
export function showOutcomeSummary(lines, onContinue) {
  if (!lines || !lines.length) { onContinue(); return; }
  document.getElementById("outcome-summary-list").innerHTML = lines.map(l => `<div class="outcome-line">${l}</div>`).join("");
  document.getElementById("outcome-summary-overlay").classList.remove("hidden");
  const btn = document.getElementById("btn-outcome-summary-continue");
  const newBtn = btn.cloneNode(true);
  btn.parentNode.replaceChild(newBtn, btn);
  newBtn.addEventListener("click", () => {
    document.getElementById("outcome-summary-overlay").classList.add("hidden");
    onContinue();
  });
}

// ---------- 行動指南 modal ----------
let currentGuideFilter = "全部";
export function showGuideModal() {
  renderGuideFilters();
  renderGuideList();
  document.getElementById("guide-overlay").classList.remove("hidden");
}
export function hideGuideModal() { document.getElementById("guide-overlay").classList.add("hidden"); }

function renderGuideFilters() {
  const el = document.getElementById("guide-filter-row");
  // 直接用 data/actions.js 嘅 actionCategories（單一資料來源），避免呢度同 action 分類再次走樣
  const cats = actionCategories;
  el.innerHTML = cats.map(cat =>
    `<button class="guide-filter-chip ${cat === currentGuideFilter ? "selected" : ""}" data-cat="${cat}">${cat}</button>`
  ).join("");
  el.querySelectorAll(".guide-filter-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      currentGuideFilter = btn.dataset.cat;
      renderGuideFilters();
      renderGuideList();
    });
  });
}

function renderGuideList() {
  const el = document.getElementById("guide-list");
  const all = getAllActionsData();
  const list = currentGuideFilter === "全部" ? all : all.filter(a => a.category === currentGuideFilter);
  el.innerHTML = list.map(a => `
    <div class="guide-card">
      <div class="guide-card-header">
        <span class="guide-card-icon">${a.icon}</span>
        <div>
          <div class="guide-card-name">${a.name}</div>
          <span class="guide-card-cat">${a.category} ・ ${a.apCost} AP</span>
        </div>
      </div>
      <div class="action-effect-tags">${effectTagsHtml(a.effects)}</div>
      <div class="action-meta-row">${actionMetaHtml(a)}</div>
      ${(a.possibleConsequences && a.possibleConsequences.length) ? `<div class="guide-followup-note">⚡ 可能觸發後續</div>` : ""}
      <div class="guide-tip-box">💡 ${a.guideTip}</div>
    </div>
  `).join("");
}

// ---------- 系統介紹（唔追求完美人生，都可以開特殊路線） ----------
export function showIntroOverlay(onContinue) {
  document.getElementById("intro-overlay").classList.remove("hidden");
  const btn = document.getElementById("btn-intro-continue");
  const newBtn = btn.cloneNode(true);
  btn.parentNode.replaceChild(newBtn, btn);
  newBtn.addEventListener("click", () => {
    document.getElementById("intro-overlay").classList.add("hidden");
    onContinue();
  });
}

// ---------- 本學期心願選擇 ----------
export function showGoalSelectOverlay(state, onSelectGoal) {
  const el = document.getElementById("goal-select-list");
  el.innerHTML = termGoals.map(g => `
    <div class="goal-select-item" data-goal="${g.id}">
      <div class="goal-select-name">${g.name}</div>
      <div class="goal-select-desc">${g.description}</div>
    </div>
  `).join("");
  el.querySelectorAll(".goal-select-item").forEach(item => {
    item.addEventListener("click", () => onSelectGoal(item.dataset.goal));
  });
  document.getElementById("goal-select-overlay").classList.remove("hidden");
}
export function hideGoalSelectOverlay() { document.getElementById("goal-select-overlay").classList.add("hidden"); }

// ---------- 學期回顧 ----------
const GOAL_STATUS_LABELS = { success: "成功 ✅", partial: "部分完成 🌗", miss: "未完成", none: "未揀選" };

function formatSubGoalValue(sg) {
  if (sg.type === "flag") return sg.done ? "已完成" : "未完成";
  return formatStat(sg.current, sg.target);
}

export function showTermReview(review, onContinue) {
  document.getElementById("term-review-title").textContent = `${review.termName} 回顧`;

  const subGoalHtml = review.goalSubProgress && review.goalSubProgress.length
    ? `<ul class="review-subgoal-list">${review.goalSubProgress.map(sg => `<li>${sg.label}：${formatSubGoalValue(sg)} ${sg.done ? "✅" : ""}</li>`).join("")}</ul>`
    : "";

  const statChangesHtml = review.statChanges.length
    ? `<h5>核心數值變化</h5><div class="review-stat-tags">${review.statChanges.map(c => `<span class="review-stat-tag ${c.after >= c.before ? "tag-positive" : "tag-negative"}">${c.stat} ${c.before}→${c.after}</span>`).join("")}</div>`
    : "";

  const missed = review.missedOpportunities.length
    ? `<h5>錯過咗嘅機會</h5><ul>${review.missedOpportunities.map(m => `<li>${m}</li>`).join("")}</ul>`
    : "";
  const relationships = review.relationshipChanges.length
    ? `<h5>關係變化</h5><ul>${review.relationshipChanges.map(r => `<li>${r.name}（${r.stageLabel}）${r.dimension}：${r.diff >= 0 ? "+" : ""}${r.diff}</li>`).join("")}</ul>`
    : "";

  const locationHtml = review.locationFamiliarity.length
    ? `<h5>地區熟悉度</h5><div class="review-stat-tags">${review.locationFamiliarity.map(l => `<span class="review-stat-tag">${l.name} ${l.value}</span>`).join("")}</div>`
    : "";

  const directionLevelHtml = review.directionLevels && review.directionLevels.length
    ? `<h5>方向狀態（唔係評分，只係話你依家累積緊咩）</h5><ul class="review-direction-list">${review.directionLevels.map(d => `<li>${d.icon} ${d.name}：Lv.${d.level}${d.level > 0 ? ` — ${d.flavor}` : ""}</li>`).join("")}</ul>`
    : "";

  const unlocks = [
    ...review.newUnlockedActions.map(id => `新行動：${getActionById(id)?.name || id}`),
    ...review.newUnlockedCharacters.map(id => `新角色：${getCharacterById(id)?.name || id}`),
    ...review.newUnlockedLocations.map(id => `新地區：${getLocationById(id)?.name || id}`)
  ];
  const unlockHtml = unlocks.length ? `<h5>本學期解鎖</h5><ul>${unlocks.map(u => `<li>${u}</li>`).join("")}</ul>` : "";

  const ar = review.attitudeReview;
  const attitudeHtml = ar ? `
    <h5>回應方式／人格傾向</h5>
    <p>${ar.narrative}</p>
    <div class="review-stat-tags">
      <span class="review-stat-tag">目前傾向：${ar.dominantTendencyName}</span>
      ${ar.mostUsedAttitude ? `<span class="review-stat-tag">常用態度：${ar.mostUsedAttitude}</span>` : ""}
      ${ar.leastUsedAttitude ? `<span class="review-stat-tag">較少用：${ar.leastUsedAttitude}</span>` : ""}
      <span class="review-stat-tag">改變意願：${ar.willingnessToChange}</span>
      ${ar.changeAttemptCount ? `<span class="review-stat-tag tag-positive">試過改變：${ar.changeAttemptCount} 次</span>` : ""}
    </div>
    ${ar.influencingCharacters.length ? `<p class="goal-hint-text">影響咗你回應方式嘅人：${ar.influencingCharacters.join("、")}</p>` : ""}
  ` : "";

  document.getElementById("term-review-body").innerHTML = `
    <p class="term-review-goal">${review.goalName ? `心願「${review.goalName}」：${GOAL_STATUS_LABELS[review.goalStatus]}` : "未揀選本學期心願"}</p>
    ${subGoalHtml}
    <p>${review.goalReviewText}</p>
    ${statChangesHtml}
    <h5>目前人生方向</h5>
    <p><b>${review.directionName}</b><br/>${review.directionReason}</p>
    <p class="review-short-comment">${review.shortComment}</p>
    ${directionLevelHtml}
    ${attitudeHtml}
    ${locationHtml}
    ${missed}
    ${relationships}
    ${unlockHtml}
  `;

  document.getElementById("term-review-overlay").classList.remove("hidden");
  const btn = document.getElementById("btn-term-review-continue");
  const newBtn = btn.cloneNode(true);
  btn.parentNode.replaceChild(newBtn, btn);
  newBtn.addEventListener("click", () => {
    document.getElementById("term-review-overlay").classList.add("hidden");
    onContinue();
  });
}

// ---------- 總 render ----------
export function renderAll(state, handlers) {
  renderTopDashboard(state);
  renderCharacterCard(state);
  renderGoalProgressCard(state);
  renderUrgentGoalsList(state, handlers.urgentGoals || []);
  renderStatsGrid(state);
  renderSkillList(state);

  renderWeekHeader(state);
  renderUrgentBanner(state);
  renderForcedScheduleBanner(state, handlers.onNegotiateForcedSchedule);
  renderActionTabs(state, handlers.onRefreshActions);
  renderActionList(state, handlers.onChooseAction);

  renderPeopleList(state);
  renderJournal(state);
  renderMessageBadge(state);
}
