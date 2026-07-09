// js/state.js
// 管理遊戲狀態（單一 state 物件），唔負責畫面或邏輯運算

// 資料層版本：每次資料結構有唔兼容嘅大改動（例如呢輪將角色由固定資料改成 identity type + generator）就要 bump，
// 舊存檔嘅版本對唔上就唔會被硬讀入嚟（避免搵唔到已刪除嘅 char_mom / msg_xxx 等舊 id 而爆 undefined）
// content_reset_v1：內容層清空（舊角色／舊 message／舊 event／舊 story review 全部清咗），
// bump 呢個版本令舊存檔（引用住已經被刪除嘅 characterId／eventId／messageId）唔會被硬讀入嚟
export const DATA_VERSION = "content_reset_v1";

export function createInitialState() {
  return {
    dataVersion: DATA_VERSION,
    playerName: "",
    // 玩家性別："male" | "female" | null（null＝舊存檔未補選，或者玩家未揀）。
    // 現階段淨係 player profile field，唔用嚟大規模分歧 W1–W6 event／message 內容。
    gender: null,
    age: 6,
    stageId: "stage_p1",
    locationId: "loc_shatin",
    // 呢個 playthrough 專屬嘅隨機種子，淨係用嚟做 deterministic weekly seeded selection
    // （例如 action card 嘅 related person 每週固定、下週先變），唔影響存檔相容性
    saveSeed: Math.floor(Math.random() * 1000000000),

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
      人脈: 30,
      理智值: 60 // 對應「stressTolerance」：抗壓緩衝，同「壓力」（即時負荷）分開
    },
    // { statName: cap }，8 個核心資源嘅上限，開局一律係 100，之後先可以透過長期訓練慢慢推高
    statCaps: {},
    // 開局隨機生成嘅「起始總點數池」（400～800），分配落 8 個核心資源嘅「目前值」（唔係 cap）
    startingTotalPoints: 0,
    totalCap: 0, // 向下相容欄位，數值同 startingTotalPoints 一樣
    // 開局隨機生成嘅「人生起點報告」文字／結構化資料，俾玩家喺開局睇一次
    startingPotentialReport: null,
    // 開局設定畫面暫存緊嘅姓名輸入草稿（避免畫面重新 render 時甩漏玩家打緊嘅字）
    inputDraftName: "",

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
    activeMessageQueue: [],    // NPC 主動訊息 queue：author-only content instance，resolved 後保留記錄但不再顯示
    activeMessageState: {},    // { charId: { triggeredThresholds, pendingMessageIds, lastActiveMessageWeek } }
    activeMessageHistory: [],  // active message 第一回覆關係處理記錄
    relationshipMilestoneRewards: {}, // { charId: { triggeredThresholds: [] } }，家庭／老師／補習老師一次性支援
    pendingConsequences: [],   // { id, consequenceId, triggerAtWeek, triggerAtTermId, resolved }
    reviewLogs: [],            // 成長記事簿記錄
    freeInputReviewLogIds: [], // 自己輸入成功結算後寫入成長記事簿嘅去重 id
    memories: [],              // 簡短記憶字串，俾 hasMemory 條件用
    recentActionHistory: [],   // { actionId, category, week, termId }
    // [{ type: "action_relationship_gain", week, actionId, characterId, displayedTargetName, amount, dimension }]
    // 記錄 action card 顯示咗邊個角色、玩家揀咗之後實際加咗邊個嘅 relationship，方便 debug UI／實際加分一致
    actionRelationshipHistory: [],

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
    // { actionFamily: count }，累積用過幾多次某成長線（例如 learning_habit、peer_relationship）嘅行動，
    // 俾 actionFamilyUsedAtLeast 條件用，係 action tier progressive unlock 嘅核心追蹤數值
    actionFamilyUseCount: {},
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
    pendingPopupFollowUps: [],

    // ---------- 第六輪：成績表／強制安排／長期興趣／比賽機會／多目標 ----------
    reportCards: [],           // 每 6 週一張成績表歷史記錄
    lastReportCardWeek: 0,
    lastStoryReviewWeek: 0,    // 上一次生成「人生片段回顧」嘅 totalWeeksElapsed，每 6 週一次
    // [{ id, actionId, weeksRemaining, forcedByCharacterId, reason, canNegotiate, negotiationConditions }]
    forcedSchedule: [],
    academicConcern: 0,        // 長期拒絕補課但成績持續低所累積嘅隱性數值，唔會即刻 game over

    activeHobbies: [],         // hobbyId[]，最多 3 個
    hobbyHistory: [],          // [{ hobbyId, joinedWeek, quitWeek }]
    quitHobbyCooldowns: {},    // { hobbyId: totalWeeksElapsed 之後先可以再揀 }
    hobbyProgress: {},         // { hobbyId: { weeksAttended } }

    knownOpportunities: [],    // competitionId[]，已經收到資訊嘅比賽／機會
    opportunityProgress: {},   // { competitionId: { prepCount, joined, status } }
    declinedOpportunities: [], // competitionId[]，玩家揀咗「暫時不參加」嘅機會（唔會有懲罰）

    // 多目標分類（termGoal 沿用 selectedTermGoalId，呢度放埋其餘分類）
    goalsByCategory: {
      schoolGoals: [],         // [{ id, ... }] 成績表／補課／學校要求
      hobbyGoals: [],          // 長期興趣承諾
      opportunityGoals: [],    // 比賽／機會
      relationshipGoals: [],   // 朋友邀請、家人約定、老師推薦
      routeGoals: []           // routeSeed 相關長期暗線
    },
    goalProgressMap: {},       // { goalId: number }
    goalDeadlines: {},         // { goalId: weekNumber（絕對 totalWeeksElapsed）}
    abandonedGoals: [],        // goalId[]

    // ---------- 第七輪：identity type + personality 生成角色／學術事件 ----------
    // { slotId: characterInstance }，新人生開始時由 generateCharacters() 產生，取代舊版寫死嘅 characters 陣列
    generatedCharacters: {},
    // 已經觸發過嘅學術事件 id 記錄，同埋事件鏈進度
    academicEventHistory: [],  // eventId[]
    eventChainProgress: {},    // { chainId: { lastStep, lastEventId } }

    // ---------- 第八輪：時間表（schedule）／身份列表（identity）／六週故事回顧 ----------
    // 已答應／被安排／參與中，未來某週會檢查條件嘅事情。唔係普通 goal，專門記錄「檢查時間 + 檢查條件」
    scheduledCommitments: [],  // [{ id, name, source, sourceCharacterId, identityId, checkWeek, checkConditions,
                               //    progressText, apCostPerWeek, onSuccessEffects, missResultText, canAbandon,
                               //    canNegotiate, negotiationConditions, relatedCharacterIds, relatedLocationIds,
                               //    relatedGoalId, relatedChainId, status }]
    completedSchedules: [],    // scheduleId[]
    missedSchedules: [],       // scheduleId[]

    // 玩家目前／曾經擁有嘅身份（唔係永久稱號，好多得幾週）
    identities: [],            // [{ id, name, type, sourceEventId, givenByCharacterId, startWeek, endWeek,
                               //    duties, benefits, costs, relatedScheduleIds, relatedGoals, relatedRelationships,
                               //    status, identityEffects, reviewText }]

    // 結構化事件紀錄：每次事件／訊息選擇解決之後都寫一條，俾 generateSixWeekStoryScene() 揀故事線用
    storyEventLog: [],         // [{ eventId, eventTitle, week, location, charactersInvolved, playerChoiceText,
                               //    playerAttitudeTag, resultSummary, relationshipChanges, identityChanges,
                               //    scheduleChanges, goalChanges, routeSeedChanges, followUpEventIds, storyThreadId,
                               //    variantId, choiceId, storyMemoryTags }]    // 後三個欄位係 opening event 專用
    sixWeekStoryHistory: [],   // 每 6 週生成一次嘅「人生片段回顧」歷史記錄

    // ---------- W1–W6 opening event pool（data/openingEvents.js + data/openingEventRegistry.js） ----------
    usedOpeningEventIds: [],       // eventId[]，onceOnly 嘅事件觸發過一次之後就唔會再揀
    openingEventCooldowns: {},     // { eventId: totalWeeksElapsed }，配合 cooldownWeeks 判斷幾時先可以再揀
    openingExclusiveGroupUsedThisWeek: {}, // { exclusiveGroup: true }，本週已經用過邊個 exclusiveGroup
    pendingOpeningEvent: null,     // 本週抽中、等緊玩家揀嘅 opening event：{ eventId, variantId }

    // ---------- Skill property 系統 ----------
    // { skillName: number }，具體能力經驗值，同「學業、社交、創意、自信」等核心 property 分開。
    // 現階段唯一合法入口係 hobby class 週處理（js/engine.js applyHobbyWeeklyEffects 讀 hobby.skillExpDelta）。
    // 初始一律 0；UI 只顯示 skillExp > 0 嘅項目（見 js/ui.js renderSkillList）。
    skillExp: {
      繪畫: 0,
      鋼琴: 0,
      朗誦: 0,
      游泳: 0,
      足球: 0,
      編程: 0,
      閱讀: 0,
      班務服務: 0
    },

    // ---------- Chatbot bonus function（唔係 action／event／hobby class，唔消耗 AP） ----------
    // 淨係俾玩家同已解鎖角色傾偈，最多對嗰個角色加少少 relationship，唔可以改 core property／skillExp。
    // 注意：provider 揀擇同 BYOK API key 一律唔存喺呢度（唔入 save data），存喺瀏覽器
    // sessionStorage／localStorage，見 js/chatbot.js getSelectedProvider／getApiKey。
    chatbot: {
      // { [characterId]: { chatHistory: [{role, text, week}], smallChatMemorySummary, lastChattedWeek,
      //                     chatbotRelationshipGainThisWeek } }
      threads: {}
    }
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

// 玩家可見嘅數值一律要係整數，所以呢度連帶做埋四捨五入，避免任何一個 call site 漏咗處理小數
export function clampStat(value) {
  return Math.round(Math.max(0, Math.min(100, value)));
}
