# 香港人生重開模擬器（Prototype v3）

純前端 HTML / CSS / JavaScript（ES Modules）製作嘅香港人生養成模擬器 prototype。

- **第二輪**將遊戲由「自由按行動刷數值」改成「每週 3 點 AP 嘅人生決策 simulator」：學期制、限時事件、
  本學期心願、自動判斷嘅人生方向、未讀訊息／延遲後果、成長記事簿、學期回顧。
- **第三輪**將遊戲由「同 NPC 儲值好感度」改成「喺一個有人嘅香港生活圈裡面養成」：每個 NPC 有自己嘅
  人格、目標、多維度關係（親近／信任／尊重／依賴／誤會）、記憶；地區有明確玩法（限定行動、常見 NPC、
  人生方向影響）；行動列表加咗分類 tabs 同自動推薦；人生方向計算埋 NPC 關係同地區熟悉度一齊算。

## 點樣開啟

呢個專案用咗 ES Modules（`import` / `export`），瀏覽器基於安全限制，**唔可以直接開 `index.html`（file://）**，一定要用本地伺服器開啟，例如：

- VS Code：安裝 `Live Server` 擴充功能，右鍵 `index.html` → `Open with Live Server`
- 或者用終端機（喺專案根目錄執行）：
  ```
  python3 -m http.server 8000
  ```
  然後瀏覽器開 `http://localhost:8000`

## 檔案結構

```
/index.html            主要頁面 layout（唔含遊戲內容）
/css/style.css          手機 App 風格 UI
/js/state.js            遊戲狀態（週曆／AP／目標／訊息／後果／記事簿／NPC 關係／記憶／地區熟悉度）
/js/engine.js           通用遊戲引擎（條件、效果、AP 行動、NPC 關係、訊息、延遲後果、週／學期推進、目標、人生方向）
/js/ui.js               純 render，唔含遊戲邏輯
/js/storage.js          localStorage 儲存／讀取（整個 state 一齊存）
/js/main.js             初始化＋事件綁定
/data/backgrounds.js    開局背景（家庭／地區／性格／天賦／興趣）
/data/locations.js      香港地區資料（5 個，各有特色行動／常見 NPC／人生方向影響）
/data/characters.js     NPC 資料（8 個，各有人格／目標／關係維度／關係階段規則）
/data/actions.js        AP 行動資料（32 個，全部有 trade-off，可按分類／地區篩選）
/data/dialogues.js      場景短句對話（主線＋搞笑支線，由行動觸發）
/data/messages.js       inbox 訊息／對話（15 個，部分由延遲後果觸發，choices 支援關係效果／記憶／限制未來選項）
/data/consequences.js   延遲後果（20 個，行動／訊息選擇之後幾週先觸發）
/data/goals.js          本學期心願（6）、階段目標（5）、人生方向（7）
/data/schedule.js       學期／週曆（小一上學期 12 週完整可玩，下學期／小二／小三留架構）
/data/stages.js         人生階段資料
/data/endings.js        階段性「成長傾向」輔助文字（沿用第一版）
```

## 核心設計原則

1. **資料驅動**：`data/` 入面嘅資料表定義晒地區、角色、行動、對話、訊息、後果、目標、學期，`engine.js`
   只負責「點樣讀資料」，唔會出現 `if (id === 'xxx')` 呢種寫死個別內容嘅邏輯。
2. **對話為主**：事件用角色對話／訊息呈現，唔用大段文字事件卡。
3. **AP 取捨**：每週 3 點 AP，行動 1～3 AP 唔等，玩家一定要取捨，唔可能做晒所有嘢。
4. **後果會被記住**：玩家嘅選擇會透過 `pendingConsequences` 喺幾週後回來，並自動寫入成長記事簿（`reviewLogs`）。
5. **NPC 有人**：每個 NPC 唔係得一個好感度數值，而係 5 個關係維度（親近／信任／尊重／依賴／誤會）
   加自己嘅記憶（`characterMemories`），呢啲都會被之後嘅對話同人生方向計算引用。

## Condition / Effect 支援類型

**conditions**：

| type | 說明 |
|---|---|
| `statAtLeast` / `statBelow` | 數值 ≥ / < amount |
| `hasFlag` / `notFlag` | `{ type: "hasFlag", flag: "flag_xxx" }` |
| `currentStage` / `currentLocation` / `currentWeek` / `currentTerm` | 階段／地區／週數／學期 |
| `backgroundTag` | `{ type: "backgroundTag", tag: "社區人情味" }` |
| `hasMemory` | `{ type: "hasMemory", keyword: "……" }`（玩家自己嘅記憶） |
| `lifeDirection` | `{ type: "lifeDirection", directionId: "direction_social" }` |
| `relationshipAtLeast` / `relationshipBelow` | `{ type: "relationshipAtLeast", characterId: "char_mom", dimension: "trust", amount: 40 }` |
| `characterHasMemory` / `characterLacksMemory` | `{ type: "characterHasMemory", characterId: "char_cha_chaan_teng", keyword: "凍檸茶" }` |
| `locationVisitedAtLeast` | `{ type: "locationVisitedAtLeast", locationId: "loc_sspk", amount: 3 }` |
| `hasMetCharacter` / `notMetCharacter` | 角色係咪已經解鎖 |
| `goalSelected` | `{ type: "goalSelected", goalId: "goal_real_friend" }` |
| `actionCategoryUsedAtLeast` | `{ type: "actionCategoryUsedAtLeast", category: "學習", amount: 5 }` |
| `recentlyIgnoredCharacter` | `{ type: "recentlyIgnoredCharacter", characterId: "char_best_friend", weeks: 4 }` |

**effects**：

| type | 說明 |
|---|---|
| `statChange` / `addMoney` / `addLog` | 數值／金錢／日誌 |
| `setFlag` | 會自動推進相關 flag 型目標 |
| `unlockCharacter` / `unlockLocation` / `unlockAction` | 解鎖角色／地區／行動 |
| `addMessage` / `addPendingConsequence` / `progressGoal` / `addMemory` | 派送訊息／排程後果／推進目標／玩家記憶 |
| `relationshipChange` | `{ type: "relationshipChange", characterId, dimension, amount }` |
| `addCharacterMemory` | `{ type: "addCharacterMemory", characterId, text }` |
| `setCharacterAttitude` | 覆寫 NPC 對玩家嘅態度描述 |
| `unlockCharacterMessage` | 即時派送某個 NPC 嘅訊息 |
| `unlockLocationEvent` | `{ type: "unlockLocationEvent", locationId, eventId }` |
| `addLocationFamiliarity` | 增加地區熟悉度 |
| `changeNpcGoalProgress` | 推進 NPC 自己目標嘅進度 |
| `restrictFutureChoice` / `addChoiceCooldown` | 限制／冷卻未來選項（底層用 flag 實現） |

## Message choice 完整 schema

```
{
  text, tone,                          // tone: 認真/開玩笑/禮貌拒絕/熱情接受/逃避/求助/說謊/沉默
  conditions,                          // 選項本身要符合先顯示（例如 relationshipAtLeast）
  effects,                             // 通用效果
  relationshipEffects: [{ characterId, dimension, amount }],
  addMemory: [{ characterId, text }],
  setFlags, lockFlags, restrictFutureChoices,   // 底層都係設 flag，俾之後嘅 conditions 讀
  unlockLocationEvent: [{ locationId, eventId }],
  addReviewLog, delayedConsequences,
  nextMessageId, closeMessage
}
```

message 亦支援 `relationshipVariants: [{ conditions, lines }]`——由上至下第一個符合條件（例如
`relationshipAtLeast` 或 `characterHasMemory`）就用嗰組開場白，唔符合就用預設 `lines`。

## 每週 AP 流程

1. 每學期開始揀（或隨機抽）一個**本學期心願**。
2. 每週 3 點 AP，喺「本週安排」頁揀行動。行動分咗 9 個 tabs：推薦、學習、朋友、家庭、興趣、探索、
   休息、限時、已解鎖。預設顯示「推薦」（由 `getRecommendedActions()` 根據心願、AP、壓力、體力、
   未讀訊息、地區、NPC 關係自動計分排序）。
3. 有紅點嘅訊息浮動按鈕代表未讀／緊急訊息；**有緊急訊息未回覆就唔可以「進入下一週」**。回覆完會即刻
   顯示「呢個選擇嘅後果」摘要（`generateChoiceOutcomeSummary`）。
4. 撳「進入下一週」會：結算延遲後果 → 派送本週觸發嘅訊息 → 檢查目標進度 → 檢查人生方向（結合行動
   分類、NPC 關係、地區熟悉度）→ 檢查學期是否完結。
5. 學期完結會顯示「學期回顧」，然後可以喺新學期重新揀心願。

## 點樣新增內容

### 新增一個 NPC
喺 `data/characters.js` 加物件，跟 schema（`id/name/role/personalityTags/personalGoal/values/likes/
dislikes/defaultTone/relationshipDimensions/relationshipStageRules/preferredLocations/
weeklyAvailability/messageStyle/supportTypes/conflictTriggers/lifeDirectionInfluence/
unlockConditions`）。`relationshipStageRules` 由上至下第一個符合就用嗰個關係階段名。

### 新增一個行動（action）
喺 `data/actions.js` 加物件，跟 schema（`id/name/category/icon/description/apCost/effects/goalProgress/
relatedCharacterId/fromCharacterId/conditions/conflicts/limitedWeeks/possibleDialogueIds/
possibleConsequences/guideTip`）。地區限定用 `conditions` 入面嘅 `currentLocation`；UI 會自動由
`conditions` 推導出「地區要求」標籤，唔使獨立欄位。

### 新增一個地區
喺 `data/locations.js` 加物件（`id/name/description/lifeFlavor/actionCategories/uniqueActions/
commonCharacters/possibleEncounters/locationResources/travelCost/apModifier/riskTags/goalInfluence/
relationshipInfluence/unlockConditions`）。`goalInfluence` 會俾人生方向計算讀取。

### 新增一個訊息（message）
喺 `data/messages.js` 加物件，可以用 `relationshipVariants` 做關係／記憶敏感嘅開場白，choices 可以用
`relationshipEffects` / `addMemory` / `restrictFutureChoices` 影響之後嘅對話。

### 新增一個延遲後果（consequence）
喺 `data/consequences.js` 加物件，然後喺相關 action 嘅 `possibleConsequences` 或者 message choice 嘅
`delayedConsequences` 入面加返個 id，就會自動排程。

### 新增一個目標／人生方向
喺 `data/goals.js` 嘅 `termGoals` / `stageGoals` / `lifeDirections` 加物件。人生方向計算（
`checkLifeDirection()`）會結合行動分類次數、NPC 關係（`character.lifeDirectionInfluence`）、
地區熟悉度（`location.goalInfluence`）三個訊號嚟自動判斷。

## 已知限制（Prototype v3 階段）

- 完整可玩內容只做到小一上學期（`term_p1_s1`）12 週；下學期／小二／小三嘅 term 已經有資料架構，但
  未填內容週數限定事件。
- `addChoiceCooldown` / `changeNpcGoalProgress` / `setCharacterAttitude` 呢幾個效果類型引擎已經支援，
  但現有資料入面暫時未大量使用，留返俾之後擴展。
- 未做多重存檔／雲端同步，只用單一 localStorage key（`hklife_save_v3`）。
