// js/ui.js
// 專門負責 render，唔應該喺呢度處理遊戲邏輯（邏輯全部由 engine.js 提供）

import { getAllBackgroundCategories } from "../data/backgrounds.js";
import { getCharacterById } from "../data/characters.js";
import { getActionById } from "../data/actions.js";
import { getLocationById } from "../data/locations.js";
import { getStageCategoryMeta } from "../data/relationshipStages.js";
import { termGoals, getGoalById, getDirectionById } from "../data/goals.js";
import {
  getCurrentStage, getCurrentTerm, getCurrentLocation,
  getUnlockedLocations, getKnownCharacters,
  getUnreadMessageObjects, getGoalProgressPercent, getGoalSubProgress, getAllActionsData,
  getActionTabs, getAvailableActionsByCategory, getRecommendedActions,
  getMessageVariantByRelationship, getAvailableChoicesByRelationship,
  generateRelationshipSummary, getChoicePreview
} from "./engine.js";

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
  人脈: { emoji: "🤝" }
};

const CORE_STAT_KEYS = ["快樂", "壓力", "體力", "學業", "社交", "創意", "家庭關係", "自信"];

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
export function renderSetupScreen(selection, onSelect) {
  const categories = getAllBackgroundCategories();
  const groupLabels = { family: "家庭背景", region: "成長地區", personality: "性格", talent: "天賦", interest: "興趣" };

  const container = document.getElementById("setup-body");
  container.innerHTML = "";

  const nameGroup = document.createElement("div");
  nameGroup.className = "setup-group";
  nameGroup.innerHTML = `
    <h4>你嘅名字</h4>
    <input id="input-player-name" class="name-input" type="text" placeholder="輸入你嘅名 / 花名" value="${selection.playerName || ""}" />
  `;
  container.appendChild(nameGroup);

  Object.entries(categories).forEach(([key, list]) => {
    const group = document.createElement("div");
    group.className = "setup-group";
    const rowId = `option-row-${key}`;
    group.innerHTML = `<h4>${groupLabels[key]}</h4><div class="option-row" id="${rowId}"></div>`;
    container.appendChild(group);

    const row = group.querySelector(`#${rowId}`);
    list.forEach(opt => {
      const chip = document.createElement("div");
      chip.className = "option-chip" + (selection[key] === opt.id ? " selected" : "");
      chip.innerHTML = `${opt.name}<small>${opt.description}</small>`;
      chip.addEventListener("click", () => onSelect(key, opt.id));
      row.appendChild(chip);
    });
  });

  document.getElementById("input-player-name").addEventListener("input", (e) => onSelect("playerName", e.target.value));
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
    <div class="dashboard-sub">距離學期結束：${weeksLeft} 週 ・ 📍 ${getCurrentLocation(state)?.name || "未知地區"}</div>
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
      <div class="character-avatar">🧒</div>
      <div>
        <div class="character-name">${state.playerName || "無名氏"}　<span class="character-grade">${stage.grade}</span></div>
        <div class="character-sub">${state.age} 歲 ・ ${backgroundLabelLookup[bg.regionId] || "香港"}成長</div>
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

export function renderStatsGrid(stats) {
  const el = document.getElementById("stats-grid");
  el.innerHTML = CORE_STAT_KEYS.map(key => {
    const value = stats[key] ?? 0;
    return `
      <div class="stat-card">
        <div class="stat-label">${statMeta[key]?.emoji || ""} ${key}</div>
        <div class="stat-value">${value}</div>
        <div class="stat-bar"><div class="stat-bar-fill" style="width:${value}%"></div></div>
      </div>
    `;
  }).join("");
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

export function renderLocationSwitcher(state, onSelectLocation) {
  const el = document.getElementById("location-switcher");
  const locs = getUnlockedLocations(state);
  el.innerHTML = locs.map(loc => `
    <button class="location-chip ${state.locationId === loc.id ? "selected" : ""}" data-loc="${loc.id}" title="${loc.lifeFlavor}">
      ${loc.emoji} ${loc.name}
    </button>
  `).join("");
  el.querySelectorAll(".location-chip").forEach(btn => {
    btn.addEventListener("click", () => onSelectLocation(btn.dataset.loc));
  });
}

// ---------- 行動分類 tabs + 行動清單 ----------
let currentActionTab = "推薦";

export function renderActionTabs(state, onChangeTab) {
  const el = document.getElementById("action-tabs-row");
  const tabs = getActionTabs();
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
  const list = currentActionTab === "推薦" ? getRecommendedActions(state, 5) : getAvailableActionsByCategory(currentActionTab, state);

  if (!list.length) {
    el.innerHTML = `<p class="muted-text">呢個分類暫時冇可用行動。</p>`;
    return list;
  }

  el.innerHTML = "";
  list.forEach(action => {
    const affordable = state.ap >= action.apCost;
    const item = document.createElement("div");
    item.className = "action-item" + (affordable ? "" : " action-item-disabled");
    item.innerHTML = `
      <div class="action-item-icon">${action.icon}</div>
      <div class="action-item-body">
        <div class="action-name">${action.name}<span class="ap-cost-badge">-${action.apCost} AP</span></div>
        <div class="action-desc">${action.description}</div>
        <div class="action-effect-tags">${effectTagsHtml(action.effects)}</div>
        <div class="action-meta-row">${actionMetaHtml(action)}</div>
      </div>
      <span class="action-tag">${action.category}</span>
    `;
    item.addEventListener("click", () => onChooseAction(action.id));
    el.appendChild(item);
  });
  return list;
}

function actionMetaHtml(action) {
  const chips = [];
  const locCondition = (action.conditions || []).find(c => c.type === "currentLocation");
  if (locCondition) {
    const loc = getLocationById(locCondition.locationId);
    chips.push(`<span class="meta-chip">📍 ${loc ? loc.name : locCondition.locationId}</span>`);
  }
  if (action.limitedWeeks && action.limitedWeeks.length) {
    chips.push(`<span class="meta-chip meta-chip-limited">⏰ 限時第${action.limitedWeeks.join("/")}週</span>`);
  }
  if (action.relatedCharacterId) {
    const char = getCharacterById(action.relatedCharacterId);
    chips.push(`<span class="meta-chip">👤 ${char ? char.name : action.relatedCharacterId}</span>`);
  }
  if (action.fromCharacterId) {
    const char = getCharacterById(action.fromCharacterId);
    chips.push(`<span class="meta-chip meta-chip-invite">✉️ 來自${char ? char.name : "邀請"}</span>`);
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
          <span class="avatar-emoji">${c.avatarEmoji}</span>
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
  const count = state.unreadMessages.length;
  if (count > 0) {
    badge.textContent = String(count);
    badge.classList.remove("hidden");
  } else {
    badge.classList.add("hidden");
  }
}

export function renderMessageList(state, onOpenMessage, onSkipMessage) {
  const el = document.getElementById("message-list-body");
  const msgs = getUnreadMessageObjects(state);
  if (!msgs.length) {
    el.innerHTML = `<p class="muted-text">暫時冇未讀訊息。</p>`;
    return;
  }
  el.innerHTML = "";
  msgs.forEach(m => {
    const sender = getCharacterById(m.senderId);
    const row = document.createElement("div");
    row.className = "message-row" + (m.urgency === "urgent" ? " message-urgent" : "");
    row.innerHTML = `
      <span class="avatar-emoji">${sender ? sender.avatarEmoji : "💬"}</span>
      <div class="message-row-body">
        <div class="message-row-title">${m.title}</div>
        <div class="message-row-sub">${sender ? sender.name : "未知"}${m.urgency === "urgent" ? " ・ 緊急" : ""}</div>
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
export function showDialogue(dialogue, onChoiceSelected, state) {
  const overlay = document.getElementById("dialogue-overlay");
  const speaker = getCharacterById(dialogue.senderId || dialogue.speakerId);
  document.getElementById("dialogue-avatar").textContent = speaker ? speaker.avatarEmoji : "💬";
  document.getElementById("dialogue-name").textContent = speaker ? speaker.name : "神秘人";

  const lines = state ? getMessageVariantByRelationship(dialogue, state) : dialogue.lines;
  document.getElementById("dialogue-lines").innerHTML = lines.map(l => `<p>${l}</p>`).join("");

  const choicesEl = document.getElementById("dialogue-choices");
  choicesEl.innerHTML = "";
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
  const cats = ["全部", "學習", "朋友", "家庭", "興趣", "探索", "休息", "支線"];
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
  return `${Math.round(sg.current * 10) / 10}/${sg.target}`;
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
  renderStatsGrid(state.stats);

  renderWeekHeader(state);
  renderUrgentBanner(state);
  renderLocationSwitcher(state, handlers.onSelectLocation);
  renderActionTabs(state, handlers.onRefreshActions);
  renderActionList(state, handlers.onChooseAction);

  renderPeopleList(state);
  renderJournal(state);
  renderMessageBadge(state);
}
