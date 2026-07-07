// js/state.js
// 管理遊戲狀態（單一 state 物件），唔負責畫面或邏輯運算

export function createInitialState() {
  return {
    playerName: "",
    age: 6,
    stageId: "stage_p1",
    locationId: "loc_shatin",

    // ---------- 學期／週曆 ----------
    currentTermId: "term_p1_s1",
    currentYear: 1,
    currentWeek: 1,
    totalWeeksElapsed: 0,
    ap: 3,
    maxAp: 3,
    termStartSnapshot: null,

    // ---------- 目標系統 ----------
    selectedTermGoalId: null,
    goalProgress: {},          // { goalId: number }
    completedGoals: [],        // goalId[]
    missedGoals: [],           // goalId[]
    unlockedGoals: [],         // 額外解鎖嘅目標 id
    currentLifeDirection: null,
    lifeDirectionReason: "",

    background: {
      familyId: null,
      regionId: null,
      personalityId: null,
      talentId: null,
      interestId: null
    },

    stats: {
      快樂: 60,
      壓力: 30,
      體力: 70,
      自信: 50,
      學業: 50,
      創意: 50,
      社交: 50,
      紀律: 50,
      金錢: 50,
      家庭關係: 60,
      人脈: 30
    },

    knownCharacters: ["char_mom", "char_dad", "char_teacher"], // 已經見過／識得嘅人（未必熟）
    unlockedLocations: ["loc_shatin"],
    unlockedActions: [],       // 額外解鎖嘅 action id（例如小組合作、修理遊戲機）

    triggeredDialogues: [],
    completedSideStories: [],
    flags: {},
    achievements: [],
    logs: [],
    stageHistory: [],          // { stageId, tendencyId, tendencyName }
    termHistory: [],           // 學期回顧記錄（同 stageReviewHistory 一齊記錄）
    stageReviewHistory: [],    // 階段結算記錄（比 termHistory 更完整，包含方向狀態、routeSeeds）

    // ---------- 訊息／後果／記事簿 ----------
    unreadMessages: [],        // messageId[]，等緊玩家開嘅訊息
    urgentMessageIds: [],      // messageId[]，未回覆前唔可以進入下一週
    deliveredMessageIds: [],   // 已經派送過（避免重複派送）嘅 messageId
    pendingConsequences: [],   // { id, consequenceId, triggerAtWeek, triggerAtTermId, resolved }
    reviewLogs: [],            // 成長記事簿記錄
    memories: [],              // 簡短記憶字串，俾 hasMemory 條件用
    recentActionHistory: [],   // { actionId, category, week, termId }

    // ---------- NPC 關係系統 ----------
    // { charId: { closeness, trust, respect, dependency, misunderstanding } }
    relationships: {},
    // { charId: [ { text, week, termId } ] }
    characterMemories: {},
    // { charId: weekNumber }，最後一次同呢個角色有互動（回覆訊息／做相關行動）嘅週數，用嚟判斷「已讀不回」
    lastInteractionWeek: {},
    // { charId: { choiceKey: true } }，暫時鎖住嘅回答選項
    choiceCooldowns: {},
    // { locationId: count }，去過幾多次，代表「地區熟悉度」
    locationFamiliarity: {},
    // { category: count }，累積用過幾多次某分類嘅行動，俾 actionCategoryUsedAtLeast 條件用
    categoryUsageCounts: {},
    // { charId: attitudeText }，特殊事件可以覆寫 NPC 對玩家嘅態度描述
    characterAttitudeOverrides: {},
    // [{ locationId, eventId }]，已經解鎖嘅地區專屬事件
    unlockedLocationEvents: [],
    // { charId: number }，NPC 自己目標嘅進度（例如媽媽「希望你健康成長」）
    npcGoalProgress: {},

    // ---------- 第四輪：目標細節／路線種子／訊息預算／人生方向強度 ----------
    // { goalId: { subGoalKey: { current, target, done } } }
    termGoalProgressDetail: {},
    // { seedId: number }，例如 dreamSeed、explorationSeed，累積但唔會即刻變成路線
    routeSeeds: {},
    // { seedId: level }，由 routeSeeds／關係／行動計出嚟嘅「方向強度」，俾學期結算顯示
    directionLevels: {},
    // 本週已經自動派送咗幾多個「普通」訊息，用嚟做 message budget
    messageBudgetThisWeek: 0,
    // messageId[]，玩家揀咗「暫時不回」嘅普通訊息（唔會擋週，但會記錄後果）
    ignoredMessages: [],
    // messageId[]，可選、唔強制回覆嘅訊息（喺 inbox 度會保留，但唔會計入 message budget 阻塞）
    optionalUnreadMessages: [],
    // 本學期已經派送咗幾多個 urgent 訊息，俾 maxUrgentMessagesPerTerm 用
    urgentMessagesSentThisTerm: 0,
    // 已經介紹過嘅系統提示（例如 intro modal），避免重複彈出
    seenIntros: [],

    // ---------- 第五輪：態度／人格傾向／改變意願 ----------
    // [{ attitudeId, week, termId, characterId }]，玩家用過嘅態度紀錄，用嚟計 personalityTendencies
    attitudeHistory: [],
    // { tendencyId: number }，累積分數，越高代表越自然噉用到呢種傾向
    personalityTendencies: {},
    // 玩家想改變自己慣性嘅意願值，用嚟解鎖同人格傾向唔一致嘅選項
    willingnessToChange: 30,
    // { choiceKey: true }，永久鎖住嘅選項（呢個系統盡量少用，多數用 cooldown）
    choiceLocks: {},
    // interactionId[]，玩家揀咗「暫時不理」嘅 popup／event
    ignoredInteractions: [],
    // { interactionId: [{ text, week, termId }] }，popup／event 專用嘅記憶（同 characterMemories 分開，方便追蹤事件本身）
    interactionMemories: {},
    // 玩家設定：預設唔顯示完整數字，淨係顯示「可能影響」
    showDetailedNumbers: false,
    // [{ interactionId, dueWeek }]，popup 事件排緊嘅後續
    pendingPopupFollowUps: []
  };
}

export let state = createInitialState();

export function resetState() {
  state = createInitialState();
  return state;
}

export function setState(newState) {
  state = newState;
  return state;
}

export function clampStat(value) {
  return Math.max(0, Math.min(100, value));
}
