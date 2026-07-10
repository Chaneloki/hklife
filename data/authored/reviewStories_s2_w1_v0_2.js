// data/authored/reviewStories_s2_w1_v0_2.js
// Generated structural data from info/s2_w1_reviewStories_v0_2_full_story.md.
// Authored source of truth: keep fullStory wording aligned with the markdown.

export const S2_W1_REVIEW_STORY_AUTHORING_RULES = {
  "version": "s2_w1_reviewStories_v0_2_full_story",
  "purpose": "S2-W1 六週人生片段回顧 full story；即時事件仍使用 opening event resultText。",
  "sourceMarkdown": "info/s2_w1_reviewStories_v0_2_full_story.md",
  "cleanupNotes": [
    "S2-W1-2 首次鄰居事件後即知道該 same_age_neighbor 真名。",
    "不保留長期未知名字狀態。",
    "hiddenImpact 與玩家可見 fullStory 分離。"
  ]
};

export const openingS2W1ReviewStoryGroups = [
  {
    "id": "review_s2_w1_1_christmas_holiday_first_day_family_rhythm_sleep_late",
    "eventId": "s2_w1_1_christmas_holiday_first_day_family_rhythm",
    "sourceEventId": "S2-W1-1",
    "variantId": "sleep_late",
    "sourceVariantId": "no_early_wakeup",
    "title": "聖誕假期第一天的家庭節奏",
    "timeText": "S2-W1，聖誕假期第一天早上",
    "placeText": "家裡，睡房、飯桌與客廳",
    "role": "holiday_family_rhythm",
    "variantTitle": "不用早起",
    "sceneOpening": "第一個不用返學的早上，房間沒有校服袋摩擦床腳的聲音，也沒有大人站在門口催你快點刷牙。窗簾邊已經有光，廚房裡有人打開雪櫃，杯子碰到桌面，電話在遠一點的地方亮了一下。你慢慢坐起來，以為今天可以完全不用跟時間走，可是書包還靠在牆邊，拉鍊裡面有手冊和假期功課，像有些東西只是暫時沒有出聲。",
    "variantOpening": "你醒來時，窗簾邊已經有光。家人從門外探頭：「今日唔使返學，瞓多陣都得。不過唔好瞓到食晏。」屋企沒有平日早上的腳步聲，你一時不知道應該繼續躺著，還是起身。",
    "characters": [],
    "branches": [
      {
        "id": "stay_in_bed",
        "branchId": "stay_in_bed",
        "choiceId": "s2_w1_1_christmas_holiday_first_day_family_rhythm_sleep_late_choice_1",
        "triggerStoryMemoryTags": [
          "s2_w1_1_christmas_holiday_first_day_family_rhythm_sleep_late_choice_1",
          "s2_w1_family_rhythm_no_early_wakeup_stay_in_bed",
          "christmas_holiday_first_morning"
        ],
        "title": "再躺一陣。",
        "branchTitle": "再躺一陣。",
        "playerLine": "我再瞓陣。",
        "fullStoryText": "你把被拉高一點，臉貼到枕頭邊。門外有人開雪櫃，水壺被拿起又放下，杯子敲到桌面時發出很輕的一聲。平日這個時間，你應該已經穿上校服，襪子可能還沒拉好，就被叫去門口穿鞋。可是今天沒有腳步聲追著你，你可以聽完整個廚房早上慢慢開始的聲音。你沒有想很多，只覺得被窩裡比平日安全一點，像假期真的先從「不用立刻起身」開始。",
        "impactList": [
          "家人允許玩家慢一點開始假期，家庭節奏暫時放鬆。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_family_rhythm_no_early_wakeup_stay_in_bed",
          "christmas_holiday_first_morning"
        ],
        "emotionalTags": [
          "slow_morning",
          "soft_safety",
          "holiday_relief"
        ],
        "relationshipHints": [
          "家人允許玩家慢一點開始假期，家庭節奏暫時放鬆。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_family_rhythm_no_early_wakeup_stay_in_bed",
          "slow_morning",
          "soft_safety",
          "家人允許玩家慢一點開始假期，家庭節奏暫時放鬆。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_family_rhythm_no_early_wakeup_stay_in_bed",
            "christmas_holiday_first_morning"
          ],
          "emotionalTags": [
            "slow_morning",
            "soft_safety",
            "holiday_relief"
          ],
          "relationshipHint": "家人允許玩家慢一點開始假期，家庭節奏暫時放鬆。",
          "systemUseOnly": true
        }
      },
      {
        "id": "get_up_and_look",
        "branchId": "get_up_and_look",
        "choiceId": "s2_w1_1_christmas_holiday_first_day_family_rhythm_sleep_late_choice_2",
        "triggerStoryMemoryTags": [
          "s2_w1_1_christmas_holiday_first_day_family_rhythm_sleep_late_choice_2",
          "s2_w1_family_rhythm_no_early_wakeup_get_up",
          "body_remembers_school"
        ],
        "title": "起身看看。",
        "branchTitle": "起身看看。",
        "playerLine": "我起身啦。",
        "fullStoryText": "你坐起來時，腳碰到地板，冰冰的，讓你縮了一下。今天不用找校服，椅背上也沒有領帶或冷衫等著你，可是你還是先看向書包。它靠在牆邊，肩帶歪了一點，像也還沒醒。你走出房門，看到飯桌上有杯子和麵包，家人回頭看你一眼，沒有催你快，只說先洗面。那一刻你覺得今天不是學校日，但身體還記得上學的路，連不用趕都要慢慢學。",
        "impactList": [
          "玩家主動進入家庭早晨，家人以低壓方式接住。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_family_rhythm_no_early_wakeup_get_up",
          "body_remembers_school"
        ],
        "emotionalTags": [
          "quiet_confusion",
          "morning_adjustment"
        ],
        "relationshipHints": [
          "玩家主動進入家庭早晨，家人以低壓方式接住。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_family_rhythm_no_early_wakeup_get_up",
          "quiet_confusion",
          "morning_adjustment",
          "玩家主動進入家庭早晨，家人以低壓方式接住。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_family_rhythm_no_early_wakeup_get_up",
            "body_remembers_school"
          ],
          "emotionalTags": [
            "quiet_confusion",
            "morning_adjustment"
          ],
          "relationshipHint": "玩家主動進入家庭早晨，家人以低壓方式接住。",
          "systemUseOnly": true
        }
      },
      {
        "id": "ask_today_plan",
        "branchId": "ask_today_plan",
        "choiceId": "s2_w1_1_christmas_holiday_first_day_family_rhythm_sleep_late_choice_3",
        "triggerStoryMemoryTags": [
          "s2_w1_1_christmas_holiday_first_day_family_rhythm_sleep_late_choice_3",
          "s2_w1_family_rhythm_no_early_wakeup_ask_plan",
          "holiday_plan_uncertain"
        ],
        "title": "問今日做咩。",
        "branchTitle": "問今日做咩。",
        "playerLine": "今日去邊呀？",
        "fullStoryText": "你站在門邊問今日去邊，聲音還有一點剛睡醒的啞。家人一邊摺報紙，一邊說還未決定，可能去樓下，可能去商場，也可能只是買餸。你本來以為假期一醒來就會有好玩的安排，像卡通片一開場就有人出發。可是桌上的杯子還沒收，電話裡的訊息還沒回，大人的拖鞋在廚房和客廳之間走來走去。你才發現，假期第一天不是沒有規矩，只是規矩藏在大人慢慢商量的聲音裡。",
        "impactList": [
          "玩家嘗試加入家庭安排，但發現家庭生活不是即時給答案。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_family_rhythm_no_early_wakeup_ask_plan",
          "holiday_plan_uncertain"
        ],
        "emotionalTags": [
          "curiosity",
          "mild_waiting"
        ],
        "relationshipHints": [
          "玩家嘗試加入家庭安排，但發現家庭生活不是即時給答案。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_family_rhythm_no_early_wakeup_ask_plan",
          "curiosity",
          "mild_waiting",
          "玩家嘗試加入家庭安排，但發現家庭生活不是即時給答案。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_family_rhythm_no_early_wakeup_ask_plan",
            "holiday_plan_uncertain"
          ],
          "emotionalTags": [
            "curiosity",
            "mild_waiting"
          ],
          "relationshipHint": "玩家嘗試加入家庭安排，但發現家庭生活不是即時給答案。",
          "systemUseOnly": true
        }
      },
      {
        "id": "look_for_schoolbag",
        "branchId": "look_for_schoolbag",
        "choiceId": "s2_w1_1_christmas_holiday_first_day_family_rhythm_sleep_late_choice_4",
        "triggerStoryMemoryTags": [
          "s2_w1_1_christmas_holiday_first_day_family_rhythm_sleep_late_choice_4",
          "s2_w1_family_rhythm_no_early_wakeup_schoolbag",
          "homework_in_bag"
        ],
        "title": "找書包。",
        "branchTitle": "找書包。",
        "playerLine": "我個書包呢？",
        "fullStoryText": "你第一句不是問早餐，也不是問電視，而是問書包在哪裡。家人笑了一下，說今日唔使咁急。你順著家人的眼神看過去，書包靠在牆邊，旁邊有一隻拖鞋，拉鍊沒有完全拉好。它看起來不像平日那麼要緊，可是你知道手冊和功課紙在裡面。你沒有把它拿起來，只是看了一眼。那一眼讓假期的早上有了小小的邊框，像就算不用返學，學校也沒有真的離開家裡。",
        "impactList": [
          "家人用輕鬆語氣提醒玩家不用立刻進入上學模式。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_family_rhythm_no_early_wakeup_schoolbag",
          "homework_in_bag"
        ],
        "emotionalTags": [
          "habit",
          "slight_pressure"
        ],
        "relationshipHints": [
          "家人用輕鬆語氣提醒玩家不用立刻進入上學模式。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_family_rhythm_no_early_wakeup_schoolbag",
          "habit",
          "slight_pressure",
          "家人用輕鬆語氣提醒玩家不用立刻進入上學模式。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_family_rhythm_no_early_wakeup_schoolbag",
            "homework_in_bag"
          ],
          "emotionalTags": [
            "habit",
            "slight_pressure"
          ],
          "relationshipHint": "家人用輕鬆語氣提醒玩家不用立刻進入上學模式。",
          "systemUseOnly": true
        }
      }
    ],
    "mapping": {
      "source": "info/s2_w1_reviewStories_v0_2_full_story.md",
      "mappingMethod": "S2-W1 eventId/variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_s2_w1_1_christmas_holiday_first_day_family_rhythm_slow_breakfast",
    "eventId": "s2_w1_1_christmas_holiday_first_day_family_rhythm",
    "sourceEventId": "S2-W1-1",
    "variantId": "slow_breakfast",
    "sourceVariantId": "slower_breakfast",
    "title": "聖誕假期第一天的家庭節奏",
    "timeText": "S2-W1，聖誕假期第一天早上",
    "placeText": "家裡，睡房、飯桌與客廳",
    "role": "holiday_family_rhythm",
    "variantTitle": "早餐變慢",
    "sceneOpening": "第一個不用返學的早上，房間沒有校服袋摩擦床腳的聲音，也沒有大人站在門口催你快點刷牙。窗簾邊已經有光，廚房裡有人打開雪櫃，杯子碰到桌面，電話在遠一點的地方亮了一下。你慢慢坐起來，以為今天可以完全不用跟時間走，可是書包還靠在牆邊，拉鍊裡面有手冊和假期功課，像有些東西只是暫時沒有出聲。",
    "variantOpening": "早餐沒有平日那麼急。飯桌上放著麵包、杯子和半包朱古力麥皮，家人一邊倒水一邊問：「今日想慢慢食，定係一陣先落街？」你坐在椅子上，發現不用邊食邊看鐘。",
    "characters": [],
    "branches": [
      {
        "id": "eat_slowly",
        "branchId": "eat_slowly",
        "choiceId": "s2_w1_1_christmas_holiday_first_day_family_rhythm_slow_breakfast_choice_1",
        "triggerStoryMemoryTags": [
          "s2_w1_1_christmas_holiday_first_day_family_rhythm_slow_breakfast_choice_1",
          "s2_w1_family_rhythm_slower_breakfast_eat_slowly",
          "slow_breakfast"
        ],
        "title": "慢慢食。",
        "branchTitle": "慢慢食。",
        "playerLine": "我想慢慢食。",
        "fullStoryText": "你拿起麵包時，沒有立刻咬很大口。平日早餐像一條短短的路，吃完就要穿鞋、拿書包、出門；今天那條路忽然變長了。你咬下一小塊，朱古力麥皮的甜味留在舌頭上，窗外有車聲和人說話，可是它們好像不再催你。家人坐在對面看電話，杯子旁邊有水痕，沒有人叫你快點。你不太懂為甚麼同一塊麵包今天會比較好吃，只覺得假期好像從慢慢咬開始。",
        "impactList": [
          "家庭早餐節奏變慢，玩家感到假期與平日不同。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_family_rhythm_slower_breakfast_eat_slowly",
          "slow_breakfast"
        ],
        "emotionalTags": [
          "comfort",
          "holiday_taste"
        ],
        "relationshipHints": [
          "家庭早餐節奏變慢，玩家感到假期與平日不同。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_family_rhythm_slower_breakfast_eat_slowly",
          "comfort",
          "holiday_taste",
          "家庭早餐節奏變慢，玩家感到假期與平日不同。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_family_rhythm_slower_breakfast_eat_slowly",
            "slow_breakfast"
          ],
          "emotionalTags": [
            "comfort",
            "holiday_taste"
          ],
          "relationshipHint": "家庭早餐節奏變慢，玩家感到假期與平日不同。",
          "systemUseOnly": true
        }
      },
      {
        "id": "ask_go_downstairs",
        "branchId": "ask_go_downstairs",
        "choiceId": "s2_w1_1_christmas_holiday_first_day_family_rhythm_slow_breakfast_choice_2",
        "triggerStoryMemoryTags": [
          "s2_w1_1_christmas_holiday_first_day_family_rhythm_slow_breakfast_choice_2",
          "s2_w1_family_rhythm_slower_breakfast_ask_downstairs",
          "holiday_needs_adult_time"
        ],
        "title": "問可不可以落街。",
        "branchTitle": "問可不可以落街。",
        "playerLine": "食完可唔可以落樓下？",
        "fullStoryText": "你還沒吃完，就先看向門口，問食完可不可以落樓下。家人沒有馬上答應，只看了看窗外，又看了看手機，說要看天氣，也要看有沒有大人一起。你聽到「要睇下」三個字，覺得樓下平台忽然沒有想像中那麼近。飯桌上的麵包、杯子、紙巾都還在原位，可是你的心已經跑到升降機門口。你第一次覺得，假期不是自己想開門就能出去，還要等大人的時間也剛好打開。",
        "impactList": [
          "玩家開始感到校外生活圈由家庭節奏牽引。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_family_rhythm_slower_breakfast_ask_downstairs",
          "holiday_needs_adult_time"
        ],
        "emotionalTags": [
          "anticipation",
          "small_waiting"
        ],
        "relationshipHints": [
          "玩家開始感到校外生活圈由家庭節奏牽引。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_family_rhythm_slower_breakfast_ask_downstairs",
          "anticipation",
          "small_waiting",
          "玩家開始感到校外生活圈由家庭節奏牽引。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_family_rhythm_slower_breakfast_ask_downstairs",
            "holiday_needs_adult_time"
          ],
          "emotionalTags": [
            "anticipation",
            "small_waiting"
          ],
          "relationshipHint": "玩家開始感到校外生活圈由家庭節奏牽引。",
          "systemUseOnly": true
        }
      },
      {
        "id": "hold_cup_quietly",
        "branchId": "hold_cup_quietly",
        "choiceId": "s2_w1_1_christmas_holiday_first_day_family_rhythm_slow_breakfast_choice_3",
        "triggerStoryMemoryTags": [
          "s2_w1_1_christmas_holiday_first_day_family_rhythm_slow_breakfast_choice_3",
          "s2_w1_family_rhythm_slower_breakfast_cup_quiet",
          "quiet_morning_pause"
        ],
        "title": "拿起杯子發呆。",
        "branchTitle": "拿起杯子發呆。",
        "playerLine": "……",
        "fullStoryText": "你沒有回答家人的問題，只把杯子拿起來又放下。杯底碰到桌面，水面晃了一下，映出窗邊一小塊白光。家人看見你在轉杯子，只說小心不要打翻，沒有追問你到底想不想落街。你也說不上自己想做甚麼，只覺得今天不用那麼快給答案。平日很多事情都被鐘聲和功課推著走，這一刻，連不知道要做甚麼都可以先放在杯子旁邊，慢慢晃一會兒。",
        "impactList": [
          "家人容許玩家短暫沉默，沒有把沉默立即解讀成問題。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_family_rhythm_slower_breakfast_cup_quiet",
          "quiet_morning_pause"
        ],
        "emotionalTags": [
          "blank_rest",
          "gentle_uncertainty"
        ],
        "relationshipHints": [
          "家人容許玩家短暫沉默，沒有把沉默立即解讀成問題。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_family_rhythm_slower_breakfast_cup_quiet",
          "blank_rest",
          "gentle_uncertainty",
          "家人容許玩家短暫沉默，沒有把沉默立即解讀成問題。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_family_rhythm_slower_breakfast_cup_quiet",
            "quiet_morning_pause"
          ],
          "emotionalTags": [
            "blank_rest",
            "gentle_uncertainty"
          ],
          "relationshipHint": "家人容許玩家短暫沉默，沒有把沉默立即解讀成問題。",
          "systemUseOnly": true
        }
      },
      {
        "id": "ask_tv",
        "branchId": "ask_tv",
        "choiceId": "s2_w1_1_christmas_holiday_first_day_family_rhythm_slow_breakfast_choice_4",
        "triggerStoryMemoryTags": [
          "s2_w1_1_christmas_holiday_first_day_family_rhythm_slow_breakfast_choice_4",
          "s2_w1_family_rhythm_slower_breakfast_tv_after_food",
          "tv_waiting"
        ],
        "title": "想開電視。",
        "branchTitle": "想開電視。",
        "playerLine": "可唔可以開電視？",
        "fullStoryText": "你看著飯桌另一邊的遙控器，問可不可以開電視。家人說食完先，語氣不算兇，只像把電視往後推了一點。你把遙控器看了一眼，又把麵包拿起來。電視機的黑色螢幕映著客廳，裡面沒有卡通，只有你坐在椅上的影子。你忽然覺得，假期的早上可以想看電視，但不代表所有想做的事都會立刻開始。麵包被你咬到邊邊，片頭歌還在很遠的地方等著。",
        "impactList": [
          "家庭規矩仍在，但以生活節奏而非懲罰方式出現。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_family_rhythm_slower_breakfast_tv_after_food",
          "tv_waiting"
        ],
        "emotionalTags": [
          "small_impatience",
          "ordinary_boundary"
        ],
        "relationshipHints": [
          "家庭規矩仍在，但以生活節奏而非懲罰方式出現。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_family_rhythm_slower_breakfast_tv_after_food",
          "small_impatience",
          "ordinary_boundary",
          "家庭規矩仍在，但以生活節奏而非懲罰方式出現。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_family_rhythm_slower_breakfast_tv_after_food",
            "tv_waiting"
          ],
          "emotionalTags": [
            "small_impatience",
            "ordinary_boundary"
          ],
          "relationshipHint": "家庭規矩仍在，但以生活節奏而非懲罰方式出現。",
          "systemUseOnly": true
        }
      }
    ],
    "mapping": {
      "source": "info/s2_w1_reviewStories_v0_2_full_story.md",
      "mappingMethod": "S2-W1 eventId/variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_s2_w1_1_christmas_holiday_first_day_family_rhythm_family_discusses_where_to_go",
    "eventId": "s2_w1_1_christmas_holiday_first_day_family_rhythm",
    "sourceEventId": "S2-W1-1",
    "variantId": "family_discusses_where_to_go",
    "sourceVariantId": "family_discusses_where_to_go",
    "title": "聖誕假期第一天的家庭節奏",
    "timeText": "S2-W1，聖誕假期第一天早上",
    "placeText": "家裡，睡房、飯桌與客廳",
    "role": "holiday_family_rhythm",
    "variantTitle": "家人討論去哪裡",
    "sceneOpening": "第一個不用返學的早上，房間沒有校服袋摩擦床腳的聲音，也沒有大人站在門口催你快點刷牙。窗簾邊已經有光，廚房裡有人打開雪櫃，杯子碰到桌面，電話在遠一點的地方亮了一下。你慢慢坐起來，以為今天可以完全不用跟時間走，可是書包還靠在牆邊，拉鍊裡面有手冊和假期功課，像有些東西只是暫時沒有出聲。",
    "variantOpening": "飯桌旁，家人一邊看電話一邊說：「商場應該有聖誕燈，不過人可能好多。」另一個家人說：「去近啲啦，樓下平台都可以行吓。」你聽著他們說地點，好像每個地方都會變成今天的一個可能。",
    "characters": [],
    "branches": [
      {
        "id": "want_mall_lights",
        "branchId": "want_mall_lights",
        "choiceId": "s2_w1_1_christmas_holiday_first_day_family_rhythm_family_discusses_where_to_go_choice_1",
        "triggerStoryMemoryTags": [
          "s2_w1_1_christmas_holiday_first_day_family_rhythm_family_discusses_where_to_go_choice_1",
          "s2_w1_family_rhythm_discuss_plan_mall_lights",
          "christmas_lights_wish"
        ],
        "title": "想去商場。",
        "branchTitle": "想去商場。",
        "playerLine": "我想睇聖誕燈。",
        "fullStoryText": "你一聽到商場有聖誕燈，就把杯子放下，說想去看。家人沒有立刻說好，只說要先收拾，還要看人多不多。你原本只看見腦裡亮起來的樹和星星，這時才看見桌上還有沒吃完的麵包、椅背上的外套、門邊沒裝好的水樽。聖誕燈好像不是一講就會出現在眼前，中間隔著很多小步。可是因為你先說了想去，那些小步忽然也有了方向。",
        "impactList": [
          "玩家把自己的期待放進家庭討論，家人沒有否定，只把期待放進現實步驟。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_family_rhythm_discuss_plan_mall_lights",
          "christmas_lights_wish"
        ],
        "emotionalTags": [
          "expectation",
          "waiting_for_family"
        ],
        "relationshipHints": [
          "玩家把自己的期待放進家庭討論，家人沒有否定，只把期待放進現實步驟。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_family_rhythm_discuss_plan_mall_lights",
          "expectation",
          "waiting_for_family",
          "玩家把自己的期待放進家庭討論，家人沒有否定，只把期待放進現實步驟。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_family_rhythm_discuss_plan_mall_lights",
            "christmas_lights_wish"
          ],
          "emotionalTags": [
            "expectation",
            "waiting_for_family"
          ],
          "relationshipHint": "玩家把自己的期待放進家庭討論，家人沒有否定，只把期待放進現實步驟。",
          "systemUseOnly": true
        }
      },
      {
        "id": "want_downstairs",
        "branchId": "want_downstairs",
        "choiceId": "s2_w1_1_christmas_holiday_first_day_family_rhythm_family_discusses_where_to_go_choice_2",
        "triggerStoryMemoryTags": [
          "s2_w1_1_christmas_holiday_first_day_family_rhythm_family_discusses_where_to_go_choice_2",
          "s2_w1_family_rhythm_discuss_plan_downstairs",
          "holiday_starts_near_home"
        ],
        "title": "想去樓下。",
        "branchTitle": "想去樓下。",
        "playerLine": "落樓下得唔得？",
        "fullStoryText": "你沒有說商場，反而問落樓下得唔得。家人說樓下近一點，可以先去看看。你想到升降機裡的鏡子、保安亭旁邊的盆栽、平台花槽和長椅，那些地方平日只是返學放學時匆匆經過，今天好像可以慢慢看。你還不知道樓下會遇到誰，只覺得假期不是一定要坐車去很遠的地方，有時候家門外的走廊也像剛剛多開了一個入口。",
        "impactList": [
          "玩家對社區生活圈開始產生注意，為鄰居事件鋪路。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_family_rhythm_discuss_plan_downstairs",
          "holiday_starts_near_home"
        ],
        "emotionalTags": [
          "nearby_curiosity",
          "gentle_adventure"
        ],
        "relationshipHints": [
          "玩家對社區生活圈開始產生注意，為鄰居事件鋪路。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_family_rhythm_discuss_plan_downstairs",
          "nearby_curiosity",
          "gentle_adventure",
          "玩家對社區生活圈開始產生注意，為鄰居事件鋪路。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_family_rhythm_discuss_plan_downstairs",
            "holiday_starts_near_home"
          ],
          "emotionalTags": [
            "nearby_curiosity",
            "gentle_adventure"
          ],
          "relationshipHint": "玩家對社區生活圈開始產生注意，為鄰居事件鋪路。",
          "systemUseOnly": true
        }
      },
      {
        "id": "ask_not_go_out",
        "branchId": "ask_not_go_out",
        "choiceId": "s2_w1_1_christmas_holiday_first_day_family_rhythm_family_discusses_where_to_go_choice_3",
        "triggerStoryMemoryTags": [
          "s2_w1_1_christmas_holiday_first_day_family_rhythm_family_discusses_where_to_go_choice_3",
          "s2_w1_family_rhythm_discuss_plan_stay_home",
          "holiday_rest_has_rules"
        ],
        "title": "問可不可以不出門。",
        "branchTitle": "問可不可以不出門。",
        "playerLine": "唔出街得唔得？",
        "fullStoryText": "你聽見商場、人多、樓下、買餸，忽然問可不可以不出街。家人說也可以，但不要一整天只攤在梳化。你點點頭，還未完全明白為甚麼休息也要有規矩。梳化的靠墊看起來很軟，電視遙控器就放在旁邊，可是家人的聲音把它們和「一整天」綁在一起。你沒有被逼立刻出門，只是第一次覺得，假期裡的自由也會被大人輕輕扶住，不讓它整個滑到地上。",
        "impactList": [
          "玩家嘗試保留居家空間，家庭規矩以溫和提醒出現。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_family_rhythm_discuss_plan_stay_home",
          "holiday_rest_has_rules"
        ],
        "emotionalTags": [
          "home_comfort",
          "mild_resistance"
        ],
        "relationshipHints": [
          "玩家嘗試保留居家空間，家庭規矩以溫和提醒出現。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_family_rhythm_discuss_plan_stay_home",
          "home_comfort",
          "mild_resistance",
          "玩家嘗試保留居家空間，家庭規矩以溫和提醒出現。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_family_rhythm_discuss_plan_stay_home",
            "holiday_rest_has_rules"
          ],
          "emotionalTags": [
            "home_comfort",
            "mild_resistance"
          ],
          "relationshipHint": "玩家嘗試保留居家空間，家庭規矩以溫和提醒出現。",
          "systemUseOnly": true
        }
      },
      {
        "id": "just_listen",
        "branchId": "just_listen",
        "choiceId": "s2_w1_1_christmas_holiday_first_day_family_rhythm_family_discusses_where_to_go_choice_4",
        "triggerStoryMemoryTags": [
          "s2_w1_1_christmas_holiday_first_day_family_rhythm_family_discusses_where_to_go_choice_4",
          "s2_w1_family_rhythm_discuss_plan_listen",
          "family_plan_table"
        ],
        "title": "只聽大人講。",
        "branchTitle": "只聽大人講。",
        "playerLine": "……",
        "fullStoryText": "你沒有插嘴，只把筷子放好。大人的話在飯桌上來回走，商場、樓下、買餸、晚一點、人太多，每個詞都像一張小紙條被放到桌面。你不太知道最後會去哪裡，只知道今天不是老師派的工作紙，沒有一個正確答案。家人說來說去，最後還是回到一句：「先食完早餐啦。」你低頭吃麵包，覺得也許大人的計劃就是這樣，一邊說，一邊慢慢變成真正會發生的事。",
        "impactList": [
          "玩家以旁觀方式進入家庭決策場景。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_family_rhythm_discuss_plan_listen",
          "family_plan_table"
        ],
        "emotionalTags": [
          "observing_adults",
          "quiet_participation"
        ],
        "relationshipHints": [
          "玩家以旁觀方式進入家庭決策場景。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_family_rhythm_discuss_plan_listen",
          "observing_adults",
          "quiet_participation",
          "玩家以旁觀方式進入家庭決策場景。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_family_rhythm_discuss_plan_listen",
            "family_plan_table"
          ],
          "emotionalTags": [
            "observing_adults",
            "quiet_participation"
          ],
          "relationshipHint": "玩家以旁觀方式進入家庭決策場景。",
          "systemUseOnly": true
        }
      }
    ],
    "mapping": {
      "source": "info/s2_w1_reviewStories_v0_2_full_story.md",
      "mappingMethod": "S2-W1 eventId/variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_s2_w1_1_christmas_holiday_first_day_family_rhythm_holiday_not_fully_free",
    "eventId": "s2_w1_1_christmas_holiday_first_day_family_rhythm",
    "sourceEventId": "S2-W1-1",
    "variantId": "holiday_not_fully_free",
    "sourceVariantId": "holiday_not_fully_free",
    "title": "聖誕假期第一天的家庭節奏",
    "timeText": "S2-W1，聖誕假期第一天早上",
    "placeText": "家裡，睡房、飯桌與客廳",
    "role": "holiday_family_rhythm",
    "variantTitle": "發現假期不是完全自由",
    "sceneOpening": "第一個不用返學的早上，房間沒有校服袋摩擦床腳的聲音，也沒有大人站在門口催你快點刷牙。窗簾邊已經有光，廚房裡有人打開雪櫃，杯子碰到桌面，電話在遠一點的地方亮了一下。你慢慢坐起來，以為今天可以完全不用跟時間走，可是書包還靠在牆邊，拉鍊裡面有手冊和假期功課，像有些東西只是暫時沒有出聲。",
    "variantOpening": "你以為假期第一天可以一直玩。可是家人把手冊拿到桌上，又把一疊功課紙放旁邊：「唔係而家做晒，但要記得有。」聖誕貼紙和功課紙在同一張桌上，看起來有點奇怪。",
    "characters": [],
    "branches": [
      {
        "id": "dont_want_today",
        "branchId": "dont_want_today",
        "choiceId": "s2_w1_1_christmas_holiday_first_day_family_rhythm_holiday_not_fully_free_choice_1",
        "triggerStoryMemoryTags": [
          "s2_w1_1_christmas_holiday_first_day_family_rhythm_holiday_not_fully_free_choice_1",
          "s2_w1_family_rhythm_homework_not_today",
          "holiday_homework_waits"
        ],
        "title": "今日唔想做。",
        "branchTitle": "今日唔想做。",
        "playerLine": "今日唔做得唔得？",
        "fullStoryText": "你看著那疊功課紙，第一句就是今天不想做。家人沒有立刻罵，只說可以不現在做，但不能完全不理。這句話不像紅筆，也不像老師的聲音，可是它讓那疊紙留在桌上，沒有被你推走。你鬆了一口氣，因為今天還可以先過假期；又有一點不舒服，因為那些格子和橫線像會安靜地等你回來。桌上的聖誕貼紙很亮，功課紙很白，它們放在一起，讓假期看起來沒有想像中那麼乾淨。",
        "impactList": [
          "家人沒有把拒絕立即變成衝突，而是留下後續責任。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_family_rhythm_homework_not_today",
          "holiday_homework_waits"
        ],
        "emotionalTags": [
          "relief_with_pressure",
          "child_negotiation"
        ],
        "relationshipHints": [
          "家人沒有把拒絕立即變成衝突，而是留下後續責任。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_family_rhythm_homework_not_today",
          "relief_with_pressure",
          "child_negotiation",
          "家人沒有把拒絕立即變成衝突，而是留下後續責任。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_family_rhythm_homework_not_today",
            "holiday_homework_waits"
          ],
          "emotionalTags": [
            "relief_with_pressure",
            "child_negotiation"
          ],
          "relationshipHint": "家人沒有把拒絕立即變成衝突，而是留下後續責任。",
          "systemUseOnly": true
        }
      },
      {
        "id": "count_homework",
        "branchId": "count_homework",
        "choiceId": "s2_w1_1_christmas_holiday_first_day_family_rhythm_holiday_not_fully_free_choice_2",
        "triggerStoryMemoryTags": [
          "s2_w1_1_christmas_holiday_first_day_family_rhythm_holiday_not_fully_free_choice_2",
          "s2_w1_family_rhythm_homework_count_pages",
          "homework_becomes_visible"
        ],
        "title": "先看有幾多。",
        "branchTitle": "先看有幾多。",
        "playerLine": "我睇吓有幾多先。",
        "fullStoryText": "你把功課紙翻開，一頁、兩頁、三頁，數到一半就有點亂。紙張邊角刮到手指，手冊夾在下面，像還有東西沒有被算進去。家人把幾張紙重新疊好，用夾子夾住，說不用一次做晒。你看著被夾好的那疊紙，覺得它沒有剛才那麼像一座山，但也沒有變成小石頭。你只是先知道它有多少，像先看清楚一個假期裡躲著的東西。",
        "impactList": [
          "家人以拆細方式幫助玩家面對假期功課。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_family_rhythm_homework_count_pages",
          "homework_becomes_visible"
        ],
        "emotionalTags": [
          "cautious_control",
          "manageable_steps"
        ],
        "relationshipHints": [
          "家人以拆細方式幫助玩家面對假期功課。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_family_rhythm_homework_count_pages",
          "cautious_control",
          "manageable_steps",
          "家人以拆細方式幫助玩家面對假期功課。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_family_rhythm_homework_count_pages",
            "homework_becomes_visible"
          ],
          "emotionalTags": [
            "cautious_control",
            "manageable_steps"
          ],
          "relationshipHint": "家人以拆細方式幫助玩家面對假期功課。",
          "systemUseOnly": true
        }
      },
      {
        "id": "put_homework_back",
        "branchId": "put_homework_back",
        "choiceId": "s2_w1_1_christmas_holiday_first_day_family_rhythm_holiday_not_fully_free_choice_3",
        "triggerStoryMemoryTags": [
          "s2_w1_1_christmas_holiday_first_day_family_rhythm_holiday_not_fully_free_choice_3",
          "s2_w1_family_rhythm_homework_put_back",
          "homework_hidden_in_bag"
        ],
        "title": "把功課放回書包。",
        "branchTitle": "把功課放回書包。",
        "playerLine": "我放返入書包先。",
        "fullStoryText": "你把功課紙收起來，塞回書包。拉鍊被你拉上時，聲音很清楚，好像事情真的被關進去了。家人看了你一眼，沒有馬上把它拿回來，只說記住放在哪裡。你點點頭，卻覺得書包比剛才重了一點。它靠回牆邊，看起來仍然安靜，可是你知道那疊紙在裡面。假期的第一天，功課沒有追著你跑，只是在書包裡留下了一個小小的角，等你下次拉開。",
        "impactList": [
          "玩家暫時避開功課，家庭沒有立刻逼迫但保留提醒。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_family_rhythm_homework_put_back",
          "homework_hidden_in_bag"
        ],
        "emotionalTags": [
          "avoidance",
          "tucked_away_pressure"
        ],
        "relationshipHints": [
          "玩家暫時避開功課，家庭沒有立刻逼迫但保留提醒。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_family_rhythm_homework_put_back",
          "avoidance",
          "tucked_away_pressure",
          "玩家暫時避開功課，家庭沒有立刻逼迫但保留提醒。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_family_rhythm_homework_put_back",
            "homework_hidden_in_bag"
          ],
          "emotionalTags": [
            "avoidance",
            "tucked_away_pressure"
          ],
          "relationshipHint": "玩家暫時避開功課，家庭沒有立刻逼迫但保留提醒。",
          "systemUseOnly": true
        }
      },
      {
        "id": "trade_homework_for_downstairs",
        "branchId": "trade_homework_for_downstairs",
        "choiceId": "s2_w1_1_christmas_holiday_first_day_family_rhythm_holiday_not_fully_free_choice_4",
        "triggerStoryMemoryTags": [
          "s2_w1_1_christmas_holiday_first_day_family_rhythm_holiday_not_fully_free_choice_4",
          "s2_w1_family_rhythm_homework_trade_downstairs",
          "one_page_then_play"
        ],
        "title": "問做完可不可以落街。",
        "branchTitle": "問做完可不可以落街。",
        "playerLine": "做一頁可唔可以落街？",
        "fullStoryText": "你沒有說完全不做，只指著第一頁問，做完可不可以落街。家人想了一下，說可以。那一刻，功課紙上的第一頁突然變得很重要，像它不是學校留下來的麻煩，而是一道通往樓下平台的小門。你拿起鉛筆，筆尖在第一格停了很久，因為心已經跑到升降機裡。可是你還是先寫下第一個字。假期原來可以這樣被分成兩半，一半在桌上，一半在門外等你。",
        "impactList": [
          "玩家把家庭規矩轉化成可理解的小交換。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_family_rhythm_homework_trade_downstairs",
          "one_page_then_play"
        ],
        "emotionalTags": [
          "bargain",
          "motivated_by_outside"
        ],
        "relationshipHints": [
          "玩家把家庭規矩轉化成可理解的小交換。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_family_rhythm_homework_trade_downstairs",
          "bargain",
          "motivated_by_outside",
          "玩家把家庭規矩轉化成可理解的小交換。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_family_rhythm_homework_trade_downstairs",
            "one_page_then_play"
          ],
          "emotionalTags": [
            "bargain",
            "motivated_by_outside"
          ],
          "relationshipHint": "玩家把家庭規矩轉化成可理解的小交換。",
          "systemUseOnly": true
        }
      }
    ],
    "mapping": {
      "source": "info/s2_w1_reviewStories_v0_2_full_story.md",
      "mappingMethod": "S2-W1 eventId/variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_s2_w1_2_meet_primary_same_age_neighbor_neighbor_lokyin",
    "eventId": "s2_w1_2_meet_primary_same_age_neighbor",
    "sourceEventId": "S2-W1-2",
    "variantId": "neighbor_lokyin",
    "sourceVariantId": "neighbor_lokyin_quick_invite",
    "title": "樓下／屋苑平台遇到 {neighborDisplayName}（必出）",
    "timeText": "S2-W1，聖誕假期第一天午飯前後",
    "placeText": "屋苑升降機、平台、花槽旁與長椅",
    "role": "required_first_same_age_neighbor_event",
    "variantTitle": "快手邀請型鄰居｜樂言",
    "sceneOpening": "午飯前，家人帶你落樓下走走。升降機門打開又關上，裡面有人拿著環保袋，也有人拖著小朋友的手。平日返學時，你總是趕著按樓層、出門、排隊，很少看清楚同座有誰。今天不用穿校服，書包也不在背上，你才發現屋企附近原來也有差不多年紀的小朋友。這不是班房介紹，沒有老師點名，也沒有座位表；只是兩個小朋友在升降機、平台和大人聊天的空隙裡，慢慢看見對方。",
    "variantOpening": "升降機裡，一個同年紀小朋友抱著紅色車仔，站在媽媽旁邊。對方看了你的鞋，又看了你的手冊袋，很快問：「你都放假呀？」升降機數字一格一格往下跳，對方又補一句：「我一陣去平台，你去唔去？」你忽然不知道這算不算邀請，因為你們剛剛才在同一部升降機裡站近。",
    "characters": [
      "{neighborDisplayName}"
    ],
    "branches": [
      {
        "id": "nod_to_neighbor",
        "branchId": "nod_to_neighbor",
        "choiceId": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_lokyin_choice_1",
        "triggerStoryMemoryTags": [
          "s2_w1_2_meet_primary_same_age_neighbor_neighbor_lokyin_choice_1",
          "s2_w1_neighbor_first_lokyin_met",
          "s2_w1_neighbor_first_lokyin_nod",
          "neighbor_name_known_lokyin",
          "neighbor_relationship_started_lokyin"
        ],
        "title": "點頭。",
        "branchTitle": "點頭。",
        "playerLine": "嗯。",
        "fullStoryText": "你只是點了點頭，聲音小到幾乎被升降機的提示聲蓋住。那個同座小朋友卻像已經聽見了，把紅色車仔往懷裡收緊一點，又點了點頭。升降機數字還未跳到 G，你已經感覺到對方的眼睛又飄過來一次，好像想再說甚麼，又怕門一開就要跟著大人走。你那時還不知道他的名字，只記得那架紅色車仔和一句「你都放假呀」。後來升降機門快關上時，對方媽媽叫了一聲：「樂言，行啦。」你才把那架紅色車仔、很快的說話聲，和「樂言」這個名字放在一起。",
        "impactList": [
          "玩家首次遇見樂言，事件結束後樂言加入校外同齡鄰居 relationship list。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_neighbor_first_lokyin_met",
          "s2_w1_neighbor_first_lokyin_nod",
          "neighbor_name_known_lokyin",
          "neighbor_relationship_started_lokyin"
        ],
        "emotionalTags": [
          "shy_notice",
          "elevator_first_contact",
          "name_learned_after_pause"
        ],
        "relationshipHints": [
          "玩家首次遇見樂言，事件結束後樂言加入校外同齡鄰居 relationship list。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_neighbor_first_lokyin_met",
          "shy_notice",
          "elevator_first_contact",
          "玩家首次遇見樂言，事件結束後樂言加入校外同齡鄰居 relationship list。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_neighbor_first_lokyin_met",
            "s2_w1_neighbor_first_lokyin_nod",
            "neighbor_name_known_lokyin",
            "neighbor_relationship_started_lokyin"
          ],
          "emotionalTags": [
            "shy_notice",
            "elevator_first_contact",
            "name_learned_after_pause"
          ],
          "relationshipHint": "玩家首次遇見樂言，事件結束後樂言加入校外同齡鄰居 relationship list。",
          "systemUseOnly": true
        }
      },
      {
        "id": "ask_neighbor_name",
        "branchId": "ask_neighbor_name",
        "choiceId": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_lokyin_choice_2",
        "triggerStoryMemoryTags": [
          "s2_w1_2_meet_primary_same_age_neighbor_neighbor_lokyin_choice_2",
          "s2_w1_neighbor_first_lokyin_met",
          "s2_w1_neighbor_first_lokyin_ask_name",
          "neighbor_name_known_lokyin",
          "neighbor_relationship_started_lokyin"
        ],
        "title": "問對方叫咩名。",
        "branchTitle": "問對方叫咩名。",
        "playerLine": "你叫咩名？",
        "fullStoryText": "你在升降機快到地下時，終於問：「你叫咩名？」對方像一直等著這個問題，把紅色車仔往胸前一按，很快說：「我叫樂言。」說完又立刻問你。名字不是從點名簿裡跳出來，也不是老師站在前面念的，而是在升降機門準備打開時，被兩個小朋友很快地交換了。門外有平台的光，家人提醒你小心門邊，你一邊踏出去，一邊把「樂言」這兩個字在心裡重複了一次，怕它跟升降機聲一起跑掉。",
        "impactList": [
          "玩家首次遇見樂言，事件結束後樂言加入校外同齡鄰居 relationship list。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_neighbor_first_lokyin_met",
          "s2_w1_neighbor_first_lokyin_ask_name",
          "neighbor_name_known_lokyin",
          "neighbor_relationship_started_lokyin"
        ],
        "emotionalTags": [
          "name_exchange",
          "quick_connection"
        ],
        "relationshipHints": [
          "玩家首次遇見樂言，事件結束後樂言加入校外同齡鄰居 relationship list。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_neighbor_first_lokyin_met",
          "name_exchange",
          "quick_connection",
          "玩家首次遇見樂言，事件結束後樂言加入校外同齡鄰居 relationship list。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_neighbor_first_lokyin_met",
            "s2_w1_neighbor_first_lokyin_ask_name",
            "neighbor_name_known_lokyin",
            "neighbor_relationship_started_lokyin"
          ],
          "emotionalTags": [
            "name_exchange",
            "quick_connection"
          ],
          "relationshipHint": "玩家首次遇見樂言，事件結束後樂言加入校外同齡鄰居 relationship list。",
          "systemUseOnly": true
        }
      },
      {
        "id": "ask_platform_play",
        "branchId": "ask_platform_play",
        "choiceId": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_lokyin_choice_3",
        "triggerStoryMemoryTags": [
          "s2_w1_2_meet_primary_same_age_neighbor_neighbor_lokyin_choice_3",
          "s2_w1_neighbor_first_lokyin_met",
          "s2_w1_neighbor_first_lokyin_ask_platform",
          "neighbor_name_known_lokyin",
          "neighbor_relationship_started_lokyin",
          "platform_as_play_space"
        ],
        "title": "問平台有咩玩。",
        "branchTitle": "問平台有咩玩。",
        "playerLine": "平台有咩玩？",
        "fullStoryText": "你沒有先問名字，只問平台有甚麼玩。那個同座小朋友立刻精神起來，說有花槽、有長椅，還有一個位置可以推車仔，說到「推車仔」時手指已經在半空畫了一條路。你其實聽不出那裡有甚麼特別，平台平日看起來只是大人經過的地方，可是對方講得像那裡有一張只有他知道的小地圖。升降機門開了，他走出一步，又回頭看你有沒有跟上。你那時還不知道他的名字，只覺得平台忽然不像剛才那麼普通。到平台入口時，他媽媽把水樽遞過去，叫：「樂言，攞住。」你才知道剛剛那張小地圖，是樂言講給你聽的。",
        "impactList": [
          "玩家首次遇見樂言，事件結束後樂言加入校外同齡鄰居 relationship list。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_neighbor_first_lokyin_met",
          "s2_w1_neighbor_first_lokyin_ask_platform",
          "neighbor_name_known_lokyin",
          "neighbor_relationship_started_lokyin",
          "platform_as_play_space"
        ],
        "emotionalTags": [
          "curiosity",
          "invited_before_name",
          "name_attached_to_place"
        ],
        "relationshipHints": [
          "玩家首次遇見樂言，事件結束後樂言加入校外同齡鄰居 relationship list。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_neighbor_first_lokyin_met",
          "curiosity",
          "invited_before_name",
          "玩家首次遇見樂言，事件結束後樂言加入校外同齡鄰居 relationship list。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_neighbor_first_lokyin_met",
            "s2_w1_neighbor_first_lokyin_ask_platform",
            "neighbor_name_known_lokyin",
            "neighbor_relationship_started_lokyin",
            "platform_as_play_space"
          ],
          "emotionalTags": [
            "curiosity",
            "invited_before_name",
            "name_attached_to_place"
          ],
          "relationshipHint": "玩家首次遇見樂言，事件結束後樂言加入校外同齡鄰居 relationship list。",
          "systemUseOnly": true
        }
      },
      {
        "id": "hide_near_family",
        "branchId": "hide_near_family",
        "choiceId": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_lokyin_choice_4",
        "triggerStoryMemoryTags": [
          "s2_w1_2_meet_primary_same_age_neighbor_neighbor_lokyin_choice_4",
          "s2_w1_neighbor_first_lokyin_met",
          "s2_w1_neighbor_first_lokyin_hide",
          "neighbor_name_known_lokyin",
          "neighbor_relationship_started_lokyin"
        ],
        "title": "躲到家人旁邊。",
        "branchTitle": "躲到家人旁邊。",
        "playerLine": "……",
        "fullStoryText": "你往家人身邊靠了一點，手指碰到大人的外套邊。那個同座小朋友看見你沒有答，就沒有再追問，只把紅色車仔低頭看了一下。升降機門打開時，他先跟著媽媽出去，走到門口又回頭看了你一眼。那一眼很快，比車仔輪子轉一圈還快。你沒有答應去平台，只記得有人在升降機裡比你早一步說話，而你把自己藏到家人旁邊，像先把今天的新東西隔開了一點距離。回家時，家人說：「頭先嗰個叫樂言，住我哋呢座。」你低頭看自己的鞋，才發現那個很快的聲音已經有了名字。",
        "impactList": [
          "玩家首次遇見樂言，事件結束後樂言加入校外同齡鄰居 relationship list。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_neighbor_first_lokyin_met",
          "s2_w1_neighbor_first_lokyin_hide",
          "neighbor_name_known_lokyin",
          "neighbor_relationship_started_lokyin"
        ],
        "emotionalTags": [
          "cautious_distance",
          "noticed_but_not_ready",
          "name_learned_from_family"
        ],
        "relationshipHints": [
          "玩家首次遇見樂言，事件結束後樂言加入校外同齡鄰居 relationship list。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_neighbor_first_lokyin_met",
          "cautious_distance",
          "noticed_but_not_ready",
          "玩家首次遇見樂言，事件結束後樂言加入校外同齡鄰居 relationship list。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_neighbor_first_lokyin_met",
            "s2_w1_neighbor_first_lokyin_hide",
            "neighbor_name_known_lokyin",
            "neighbor_relationship_started_lokyin"
          ],
          "emotionalTags": [
            "cautious_distance",
            "noticed_but_not_ready",
            "name_learned_from_family"
          ],
          "relationshipHint": "玩家首次遇見樂言，事件結束後樂言加入校外同齡鄰居 relationship list。",
          "systemUseOnly": true
        }
      }
    ],
    "mapping": {
      "source": "info/s2_w1_reviewStories_v0_2_full_story.md",
      "mappingMethod": "S2-W1 eventId/variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_s2_w1_2_meet_primary_same_age_neighbor_neighbor_wingching",
    "eventId": "s2_w1_2_meet_primary_same_age_neighbor",
    "sourceEventId": "S2-W1-2",
    "variantId": "neighbor_wingching",
    "sourceVariantId": "neighbor_wingching_quiet_collect",
    "title": "樓下／屋苑平台遇到 {neighborDisplayName}（必出）",
    "timeText": "S2-W1，聖誕假期第一天午飯前後",
    "placeText": "屋苑升降機、平台、花槽旁與長椅",
    "role": "required_first_same_age_neighbor_event",
    "variantTitle": "安靜收藏型鄰居｜詠晴",
    "sceneOpening": "午飯前，家人帶你落樓下走走。升降機門打開又關上，裡面有人拿著環保袋，也有人拖著小朋友的手。平日返學時，你總是趕著按樓層、出門、排隊，很少看清楚同座有誰。今天不用穿校服，書包也不在背上，你才發現屋企附近原來也有差不多年紀的小朋友。這不是班房介紹，沒有老師點名，也沒有座位表；只是兩個小朋友在升降機、平台和大人聊天的空隙裡，慢慢看見對方。",
    "variantOpening": "平台花槽旁邊，家人遇到熟人停下來說話。你站在一邊，旁邊那個同年紀小朋友也在等。對方手裡拿著一個小盒，盒蓋沒有全打開，只露出幾張貼紙的角。對方看見你在望，就把盒子往中間移一點，聲音很細：「你睇唔睇？」",
    "characters": [
      "{neighborDisplayName}"
    ],
    "branches": [
      {
        "id": "ask_to_look",
        "branchId": "ask_to_look",
        "choiceId": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_wingching_choice_1",
        "triggerStoryMemoryTags": [
          "s2_w1_2_meet_primary_same_age_neighbor_neighbor_wingching_choice_1",
          "s2_w1_neighbor_first_wingching_met",
          "s2_w1_neighbor_first_wingching_look_stickers",
          "neighbor_name_known_wingching",
          "neighbor_relationship_started_wingching"
        ],
        "title": "問可不可以看。",
        "branchTitle": "問可不可以看。",
        "playerLine": "我睇吓得唔得？",
        "fullStoryText": "你望著那個小盒，問可不可以看。平台女孩沒有立刻把整盒推給你，只把盒蓋再打開一點，叫你不要撕。裡面的貼紙疊得很齊，最上面是一顆星，邊邊反著平台的光。你把手放在膝頭上，先用眼睛看，沒有伸手碰。大人在旁邊講樓層和超市，聲音一下一下飄過來，可是你記得更清楚的是盒子被推近的那一小段距離。後來對方家長回頭說：「詠晴，收一收先，等陣要走。」你才把「詠晴」這個名字放到那個半開的貼紙盒旁邊，覺得它也很細聲。",
        "impactList": [
          "玩家首次遇見詠晴，事件結束後詠晴加入校外同齡鄰居 relationship list。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_neighbor_first_wingching_met",
          "s2_w1_neighbor_first_wingching_look_stickers",
          "neighbor_name_known_wingching",
          "neighbor_relationship_started_wingching"
        ],
        "emotionalTags": [
          "quiet_invitation",
          "careful_curiosity",
          "name_learned_from_parent_call"
        ],
        "relationshipHints": [
          "玩家首次遇見詠晴，事件結束後詠晴加入校外同齡鄰居 relationship list。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_neighbor_first_wingching_met",
          "quiet_invitation",
          "careful_curiosity",
          "玩家首次遇見詠晴，事件結束後詠晴加入校外同齡鄰居 relationship list。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_neighbor_first_wingching_met",
            "s2_w1_neighbor_first_wingching_look_stickers",
            "neighbor_name_known_wingching",
            "neighbor_relationship_started_wingching"
          ],
          "emotionalTags": [
            "quiet_invitation",
            "careful_curiosity",
            "name_learned_from_parent_call"
          ],
          "relationshipHint": "玩家首次遇見詠晴，事件結束後詠晴加入校外同齡鄰居 relationship list。",
          "systemUseOnly": true
        }
      },
      {
        "id": "ask_neighbor_name",
        "branchId": "ask_neighbor_name",
        "choiceId": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_wingching_choice_2",
        "triggerStoryMemoryTags": [
          "s2_w1_2_meet_primary_same_age_neighbor_neighbor_wingching_choice_2",
          "s2_w1_neighbor_first_wingching_met",
          "s2_w1_neighbor_first_wingching_ask_name",
          "neighbor_name_known_wingching",
          "neighbor_relationship_started_wingching"
        ],
        "title": "問對方叫咩名。",
        "branchTitle": "問對方叫咩名。",
        "playerLine": "你叫咩名？",
        "fullStoryText": "你看了貼紙一會兒，才問她叫甚麼名。平台女孩停了停，盒蓋停在半開的位置，像連貼紙都一起等了一下。她很細聲地說：「我叫詠晴。」說完又低頭把盒裡一張歪了的貼紙推正。這個名字沒有被喊出來，也沒有被大人介紹得很熱鬧，只是落在花槽旁邊，像一張小小的星星貼紙被你看見。你跟著說了自己的名字，聲音也不自覺放輕，怕太大聲會把那個剛打開的盒子嚇回去。",
        "impactList": [
          "玩家首次遇見詠晴，事件結束後詠晴加入校外同齡鄰居 relationship list。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_neighbor_first_wingching_met",
          "s2_w1_neighbor_first_wingching_ask_name",
          "neighbor_name_known_wingching",
          "neighbor_relationship_started_wingching"
        ],
        "emotionalTags": [
          "soft_name_exchange",
          "slow_nearness"
        ],
        "relationshipHints": [
          "玩家首次遇見詠晴，事件結束後詠晴加入校外同齡鄰居 relationship list。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_neighbor_first_wingching_met",
          "soft_name_exchange",
          "slow_nearness",
          "玩家首次遇見詠晴，事件結束後詠晴加入校外同齡鄰居 relationship list。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_neighbor_first_wingching_met",
            "s2_w1_neighbor_first_wingching_ask_name",
            "neighbor_name_known_wingching",
            "neighbor_relationship_started_wingching"
          ],
          "emotionalTags": [
            "soft_name_exchange",
            "slow_nearness"
          ],
          "relationshipHint": "玩家首次遇見詠晴，事件結束後詠晴加入校外同齡鄰居 relationship list。",
          "systemUseOnly": true
        }
      },
      {
        "id": "only_look",
        "branchId": "only_look",
        "choiceId": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_wingching_choice_3",
        "triggerStoryMemoryTags": [
          "s2_w1_2_meet_primary_same_age_neighbor_neighbor_wingching_choice_3",
          "s2_w1_neighbor_first_wingching_met",
          "s2_w1_neighbor_first_wingching_only_look",
          "neighbor_name_known_wingching",
          "neighbor_relationship_started_wingching",
          "sticker_star_hand"
        ],
        "title": "只看不碰。",
        "branchTitle": "只看不碰。",
        "playerLine": "我睇就得。",
        "fullStoryText": "你說只看就得，沒有把手伸進盒子。平台女孩點點頭，像鬆了一口氣，又像本來就覺得這樣比較好。她自己挑了一張星星貼在手背上，手背一動，星星就跟著光閃一下。你們沒有講很多話，大人聊天的聲音比你們的聲音大得多，可是那顆星星在她手上動了很久。你那時還不知道她叫甚麼，只記得她沒有叫你快點選，也沒有把盒子收走。等家人終於講完，對方家長叫：「詠晴，返去喇。」她把盒蓋合上，你才知道那顆星星貼在詠晴手上。",
        "impactList": [
          "玩家首次遇見詠晴，事件結束後詠晴加入校外同齡鄰居 relationship list。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_neighbor_first_wingching_met",
          "s2_w1_neighbor_first_wingching_only_look",
          "neighbor_name_known_wingching",
          "neighbor_relationship_started_wingching",
          "sticker_star_hand"
        ],
        "emotionalTags": [
          "respect_distance",
          "quiet_shared_attention",
          "name_learned_at_departure"
        ],
        "relationshipHints": [
          "玩家首次遇見詠晴，事件結束後詠晴加入校外同齡鄰居 relationship list。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_neighbor_first_wingching_met",
          "respect_distance",
          "quiet_shared_attention",
          "玩家首次遇見詠晴，事件結束後詠晴加入校外同齡鄰居 relationship list。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_neighbor_first_wingching_met",
            "s2_w1_neighbor_first_wingching_only_look",
            "neighbor_name_known_wingching",
            "neighbor_relationship_started_wingching",
            "sticker_star_hand"
          ],
          "emotionalTags": [
            "respect_distance",
            "quiet_shared_attention",
            "name_learned_at_departure"
          ],
          "relationshipHint": "玩家首次遇見詠晴，事件結束後詠晴加入校外同齡鄰居 relationship list。",
          "systemUseOnly": true
        }
      },
      {
        "id": "count_leaves",
        "branchId": "count_leaves",
        "choiceId": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_wingching_choice_4",
        "triggerStoryMemoryTags": [
          "s2_w1_2_meet_primary_same_age_neighbor_neighbor_wingching_choice_4",
          "s2_w1_neighbor_first_wingching_met",
          "s2_w1_neighbor_first_wingching_count_leaves",
          "neighbor_name_known_wingching",
          "neighbor_relationship_started_wingching"
        ],
        "title": "數地上的葉。",
        "branchTitle": "數地上的葉。",
        "playerLine": "我數樹葉。",
        "fullStoryText": "你沒有看很久貼紙，反而低頭數地上的葉。平台女孩也低頭看了一下，說有一片像魚。你本來只是想找一件不用說太多話的事，那片葉子卻忽然變成你們一起看的東西。大人還在講，花槽裡的泥有點濕，鞋尖旁邊有幾片細葉被風吹到一邊。你們沒有一起玩，只是在等待大人講完的時間裡，靠一片像魚的葉子站近了一點。回家路上，家人說剛才那個平台女孩叫詠晴。你把這個名字放到那片像魚的葉子旁邊，覺得它不是很大聲，卻沒有被風吹走。",
        "impactList": [
          "玩家首次遇見詠晴，事件結束後詠晴加入校外同齡鄰居 relationship list。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_neighbor_first_wingching_met",
          "s2_w1_neighbor_first_wingching_count_leaves",
          "neighbor_name_known_wingching",
          "neighbor_relationship_started_wingching"
        ],
        "emotionalTags": [
          "parallel_waiting",
          "tiny_shared_detail",
          "name_learned_after_scene"
        ],
        "relationshipHints": [
          "玩家首次遇見詠晴，事件結束後詠晴加入校外同齡鄰居 relationship list。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_neighbor_first_wingching_met",
          "parallel_waiting",
          "tiny_shared_detail",
          "玩家首次遇見詠晴，事件結束後詠晴加入校外同齡鄰居 relationship list。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_neighbor_first_wingching_met",
            "s2_w1_neighbor_first_wingching_count_leaves",
            "neighbor_name_known_wingching",
            "neighbor_relationship_started_wingching"
          ],
          "emotionalTags": [
            "parallel_waiting",
            "tiny_shared_detail",
            "name_learned_after_scene"
          ],
          "relationshipHint": "玩家首次遇見詠晴，事件結束後詠晴加入校外同齡鄰居 relationship list。",
          "systemUseOnly": true
        }
      }
    ],
    "mapping": {
      "source": "info/s2_w1_reviewStories_v0_2_full_story.md",
      "mappingMethod": "S2-W1 eventId/variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_s2_w1_2_meet_primary_same_age_neighbor_neighbor_holong",
    "eventId": "s2_w1_2_meet_primary_same_age_neighbor",
    "sourceEventId": "S2-W1-2",
    "variantId": "neighbor_holong",
    "sourceVariantId": "neighbor_holong_showy_toy",
    "title": "樓下／屋苑平台遇到 {neighborDisplayName}（必出）",
    "timeText": "S2-W1，聖誕假期第一天午飯前後",
    "placeText": "屋苑升降機、平台、花槽旁與長椅",
    "role": "required_first_same_age_neighbor_event",
    "variantTitle": "玩具展示型鄰居｜皓朗",
    "sceneOpening": "午飯前，家人帶你落樓下走走。升降機門打開又關上，裡面有人拿著環保袋，也有人拖著小朋友的手。平日返學時，你總是趕著按樓層、出門、排隊，很少看清楚同座有誰。今天不用穿校服，書包也不在背上，你才發現屋企附近原來也有差不多年紀的小朋友。這不是班房介紹，沒有老師點名，也沒有座位表；只是兩個小朋友在升降機、平台和大人聊天的空隙裡，慢慢看見對方。",
    "variantOpening": "平台長椅旁，{neighborDisplayName}把一盒彩色貼紙打開，裡面有車、星星和一張皺了邊的卡通貼紙。對方沒有立刻給你，只把盒子移到你看得到的位置：「我啱啱喺屋企攞落嚟。」說完又把最閃那張放到最上面，像怕你沒看到。",
    "characters": [
      "{neighborDisplayName}"
    ],
    "branches": [
      {
        "id": "say_shiny",
        "branchId": "say_shiny",
        "choiceId": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_holong_choice_1",
        "triggerStoryMemoryTags": [
          "s2_w1_2_meet_primary_same_age_neighbor_neighbor_holong_choice_1",
          "s2_w1_neighbor_first_holong_met",
          "s2_w1_neighbor_first_holong_shiny",
          "neighbor_name_known_holong",
          "neighbor_relationship_started_holong",
          "shiny_sticker_memory"
        ],
        "title": "說好閃。",
        "branchTitle": "說好閃。",
        "playerLine": "好閃呀。",
        "fullStoryText": "你一看到最上面那張貼紙，就說好閃。拿貼紙的小朋友眼睛亮了一下，把盒子抬高一點，讓那張貼紙正好接到平台的光。貼紙沒有離開盒子，也沒有變成你的，可是那一下反光像很快地跳到你眼裡。對方的手指按著盒邊，像怕風把它吹走，也像怕你沒看夠。你那時還不知道他的名字，只記得那張貼紙被放在最上面，好像不是隨便放的。後來有大人從長椅後面叫：「皓朗，唔好擋住人。」你才知道，拿著那盒閃貼的小朋友叫皓朗。",
        "impactList": [
          "玩家首次遇見皓朗，事件結束後皓朗加入校外同齡鄰居 relationship list。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_neighbor_first_holong_met",
          "s2_w1_neighbor_first_holong_shiny",
          "neighbor_name_known_holong",
          "neighbor_relationship_started_holong",
          "shiny_sticker_memory"
        ],
        "emotionalTags": [
          "visual_attraction",
          "toy_attention",
          "name_learned_from_parent_call"
        ],
        "relationshipHints": [
          "玩家首次遇見皓朗，事件結束後皓朗加入校外同齡鄰居 relationship list。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_neighbor_first_holong_met",
          "visual_attraction",
          "toy_attention",
          "玩家首次遇見皓朗，事件結束後皓朗加入校外同齡鄰居 relationship list。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_neighbor_first_holong_met",
            "s2_w1_neighbor_first_holong_shiny",
            "neighbor_name_known_holong",
            "neighbor_relationship_started_holong",
            "shiny_sticker_memory"
          ],
          "emotionalTags": [
            "visual_attraction",
            "toy_attention",
            "name_learned_from_parent_call"
          ],
          "relationshipHint": "玩家首次遇見皓朗，事件結束後皓朗加入校外同齡鄰居 relationship list。",
          "systemUseOnly": true
        }
      },
      {
        "id": "ask_neighbor_name",
        "branchId": "ask_neighbor_name",
        "choiceId": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_holong_choice_2",
        "triggerStoryMemoryTags": [
          "s2_w1_2_meet_primary_same_age_neighbor_neighbor_holong_choice_2",
          "s2_w1_neighbor_first_holong_met",
          "s2_w1_neighbor_first_holong_ask_name",
          "neighbor_name_known_holong",
          "neighbor_relationship_started_holong"
        ],
        "title": "問對方叫咩名。",
        "branchTitle": "問對方叫咩名。",
        "playerLine": "你叫咩名？",
        "fullStoryText": "你看著貼紙盒，忽然問他叫甚麼名。拿貼紙的小朋友一邊把盒子抱回胸前，一邊說：「我叫皓朗。」他的名字和貼紙一起出現，像也是一樣要給你看的東西。你說自己的名字時，他還低頭確認最閃那張有沒有被風吹歪。大人從旁邊走過，膠袋擦到長椅邊，你卻記得那一刻平台的光很亮，貼紙很亮，連「皓朗」兩個字也像被他放到盒子最上面，讓你先看見。",
        "impactList": [
          "玩家首次遇見皓朗，事件結束後皓朗加入校外同齡鄰居 relationship list。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_neighbor_first_holong_met",
          "s2_w1_neighbor_first_holong_ask_name",
          "neighbor_name_known_holong",
          "neighbor_relationship_started_holong"
        ],
        "emotionalTags": [
          "name_with_object",
          "bright_first_impression"
        ],
        "relationshipHints": [
          "玩家首次遇見皓朗，事件結束後皓朗加入校外同齡鄰居 relationship list。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_neighbor_first_holong_met",
          "name_with_object",
          "bright_first_impression",
          "玩家首次遇見皓朗，事件結束後皓朗加入校外同齡鄰居 relationship list。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_neighbor_first_holong_met",
            "s2_w1_neighbor_first_holong_ask_name",
            "neighbor_name_known_holong",
            "neighbor_relationship_started_holong"
          ],
          "emotionalTags": [
            "name_with_object",
            "bright_first_impression"
          ],
          "relationshipHint": "玩家首次遇見皓朗，事件結束後皓朗加入校外同齡鄰居 relationship list。",
          "systemUseOnly": true
        }
      },
      {
        "id": "say_i_have_stickers_too",
        "branchId": "say_i_have_stickers_too",
        "choiceId": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_holong_choice_3",
        "triggerStoryMemoryTags": [
          "s2_w1_2_meet_primary_same_age_neighbor_neighbor_holong_choice_3",
          "s2_w1_neighbor_first_holong_met",
          "s2_w1_neighbor_first_holong_i_have_stickers",
          "neighbor_name_known_holong",
          "neighbor_relationship_started_holong",
          "home_sticker_connection"
        ],
        "title": "說自己也有貼紙。",
        "branchTitle": "說自己也有貼紙。",
        "playerLine": "我屋企都有貼紙。",
        "fullStoryText": "你說自己家裡也有貼紙。拿貼紙的小朋友立刻抬頭問是甚麼圖案，問得很快，像貼紙盒忽然多開了一層。你想了一下，發現自己記不清楚，只記得好像有卡通，有星星，也有一張已經捲邊。你有點想立刻回家找出來，證明自己也有一盒可以拿出來說的東西。這不像班房裡比誰考得好，只是平台上兩個小朋友都抱著自己的小寶物，想把它放到別人眼前一下。到你要走時，對方家長叫：「皓朗，收返好。」你看著他把盒子合上，才把那盒貼紙和「皓朗」這個名字放在一起。",
        "impactList": [
          "玩家首次遇見皓朗，事件結束後皓朗加入校外同齡鄰居 relationship list。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_neighbor_first_holong_met",
          "s2_w1_neighbor_first_holong_i_have_stickers",
          "neighbor_name_known_holong",
          "neighbor_relationship_started_holong",
          "home_sticker_connection"
        ],
        "emotionalTags": [
          "want_to_show",
          "playful_comparison",
          "name_learned_at_departure"
        ],
        "relationshipHints": [
          "玩家首次遇見皓朗，事件結束後皓朗加入校外同齡鄰居 relationship list。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_neighbor_first_holong_met",
          "want_to_show",
          "playful_comparison",
          "玩家首次遇見皓朗，事件結束後皓朗加入校外同齡鄰居 relationship list。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_neighbor_first_holong_met",
            "s2_w1_neighbor_first_holong_i_have_stickers",
            "neighbor_name_known_holong",
            "neighbor_relationship_started_holong",
            "home_sticker_connection"
          ],
          "emotionalTags": [
            "want_to_show",
            "playful_comparison",
            "name_learned_at_departure"
          ],
          "relationshipHint": "玩家首次遇見皓朗，事件結束後皓朗加入校外同齡鄰居 relationship list。",
          "systemUseOnly": true
        }
      },
      {
        "id": "ask_where_bought",
        "branchId": "ask_where_bought",
        "choiceId": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_holong_choice_4",
        "triggerStoryMemoryTags": [
          "s2_w1_2_meet_primary_same_age_neighbor_neighbor_holong_choice_4",
          "s2_w1_neighbor_first_holong_met",
          "s2_w1_neighbor_first_holong_where_bought",
          "neighbor_name_known_holong",
          "neighbor_relationship_started_holong",
          "gifted_object_memory"
        ],
        "title": "問邊度買。",
        "branchTitle": "問邊度買。",
        "playerLine": "邊度買㗎？",
        "fullStoryText": "你指著那張最閃的貼紙，問在哪裡買。拿貼紙的小朋友低頭看了一下，說可能是姨媽給的，不是自己買的。你聽到「姨媽」兩個字，忽然覺得那張貼紙後面還有一條你看不見的路：有人去過某間店，有人把它帶回家，有人又把它拿到平台。你沒有得到店名，也沒有得到貼紙，可是你知道了不是所有想要的東西都能立刻買到。等家人叫你走時，對方忽然補了一句：「我叫皓朗。」他說得像又把一樣東西拿出來。你回頭看見那張最閃的貼紙還在盒面，和這個名字一起亮了一下。",
        "impactList": [
          "玩家首次遇見皓朗，事件結束後皓朗加入校外同齡鄰居 relationship list。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_neighbor_first_holong_met",
          "s2_w1_neighbor_first_holong_where_bought",
          "neighbor_name_known_holong",
          "neighbor_relationship_started_holong",
          "gifted_object_memory"
        ],
        "emotionalTags": [
          "curiosity_about_objects",
          "small_want",
          "late_self_intro"
        ],
        "relationshipHints": [
          "玩家首次遇見皓朗，事件結束後皓朗加入校外同齡鄰居 relationship list。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_neighbor_first_holong_met",
          "curiosity_about_objects",
          "small_want",
          "玩家首次遇見皓朗，事件結束後皓朗加入校外同齡鄰居 relationship list。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_neighbor_first_holong_met",
            "s2_w1_neighbor_first_holong_where_bought",
            "neighbor_name_known_holong",
            "neighbor_relationship_started_holong",
            "gifted_object_memory"
          ],
          "emotionalTags": [
            "curiosity_about_objects",
            "small_want",
            "late_self_intro"
          ],
          "relationshipHint": "玩家首次遇見皓朗，事件結束後皓朗加入校外同齡鄰居 relationship list。",
          "systemUseOnly": true
        }
      }
    ],
    "mapping": {
      "source": "info/s2_w1_reviewStories_v0_2_full_story.md",
      "mappingMethod": "S2-W1 eventId/variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_s2_w1_2_meet_primary_same_age_neighbor_neighbor_manhei",
    "eventId": "s2_w1_2_meet_primary_same_age_neighbor",
    "sourceEventId": "S2-W1-2",
    "variantId": "neighbor_manhei",
    "sourceVariantId": "neighbor_manhei_adult_bridge",
    "title": "樓下／屋苑平台遇到 {neighborDisplayName}（必出）",
    "timeText": "S2-W1，聖誕假期第一天午飯前後",
    "placeText": "屋苑升降機、平台、花槽旁與長椅",
    "role": "required_first_same_age_neighbor_event",
    "variantTitle": "家長牽線型鄰居｜敏希",
    "sceneOpening": "午飯前，家人帶你落樓下走走。升降機門打開又關上，裡面有人拿著環保袋，也有人拖著小朋友的手。平日返學時，你總是趕著按樓層、出門、排隊，很少看清楚同座有誰。今天不用穿校服，書包也不在背上，你才發現屋企附近原來也有差不多年紀的小朋友。這不是班房介紹，沒有老師點名，也沒有座位表；只是兩個小朋友在升降機、平台和大人聊天的空隙裡，慢慢看見對方。",
    "variantOpening": "家人跟對方家長說話時，忽然笑了：「原來你哋都住呢座？」兩個大人開始講樓層、保安和哪間超市近。{neighborDisplayName}站在旁邊，聽見大人提到你們差不多年紀，才慢慢看向你。對方沒有先開口，只是把手裡的小車轉了半圈。",
    "characters": [
      "{neighborDisplayName}"
    ],
    "branches": [
      {
        "id": "ask_grade",
        "branchId": "ask_grade",
        "choiceId": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_manhei_choice_1",
        "triggerStoryMemoryTags": [
          "s2_w1_2_meet_primary_same_age_neighbor_neighbor_manhei_choice_1",
          "s2_w1_neighbor_first_manhei_met",
          "s2_w1_neighbor_first_manhei_ask_grade",
          "neighbor_name_known_manhei",
          "neighbor_relationship_started_manhei",
          "same_age_not_same_school"
        ],
        "title": "問對方小幾。",
        "branchTitle": "問對方小幾。",
        "playerLine": "你小幾？",
        "fullStoryText": "你等大人說話停了一下，才問她小幾。跟著家長的小朋友看了家長一眼，像確認可以回答，才說自己也是小一，不過不是你的學校。你們站得不遠，中間卻隔著兩個校門、兩套校服和很多你不知道的班房。名字還沒有出現，可是「小一」兩個字像先在你們之間放了一張小凳子，讓你知道她不是大人話題裡的背景，也不是班裡那些同學。後來對方家長說：「敏希，你同佢一樣都係小一喎。」你才知道，這個跟你一樣小一、但不是同校的小朋友叫敏希。",
        "impactList": [
          "玩家首次遇見敏希，事件結束後敏希加入校外同齡鄰居 relationship list。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_neighbor_first_manhei_met",
          "s2_w1_neighbor_first_manhei_ask_grade",
          "neighbor_name_known_manhei",
          "neighbor_relationship_started_manhei",
          "same_age_not_same_school"
        ],
        "emotionalTags": [
          "cautious_recognition",
          "outside_school_parallel",
          "name_learned_from_parent_context"
        ],
        "relationshipHints": [
          "玩家首次遇見敏希，事件結束後敏希加入校外同齡鄰居 relationship list。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_neighbor_first_manhei_met",
          "cautious_recognition",
          "outside_school_parallel",
          "玩家首次遇見敏希，事件結束後敏希加入校外同齡鄰居 relationship list。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_neighbor_first_manhei_met",
            "s2_w1_neighbor_first_manhei_ask_grade",
            "neighbor_name_known_manhei",
            "neighbor_relationship_started_manhei",
            "same_age_not_same_school"
          ],
          "emotionalTags": [
            "cautious_recognition",
            "outside_school_parallel",
            "name_learned_from_parent_context"
          ],
          "relationshipHint": "玩家首次遇見敏希，事件結束後敏希加入校外同齡鄰居 relationship list。",
          "systemUseOnly": true
        }
      },
      {
        "id": "wait_for_parent_intro",
        "branchId": "wait_for_parent_intro",
        "choiceId": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_manhei_choice_2",
        "triggerStoryMemoryTags": [
          "s2_w1_2_meet_primary_same_age_neighbor_neighbor_manhei_choice_2",
          "s2_w1_neighbor_first_manhei_met",
          "s2_w1_neighbor_first_manhei_parent_intro",
          "neighbor_name_known_manhei",
          "neighbor_relationship_started_manhei"
        ],
        "title": "等家長介紹。",
        "branchTitle": "等家長介紹。",
        "playerLine": "……",
        "fullStoryText": "你沒有自己問，只站在家人旁邊聽。大人講到你們差不多年紀時，家人笑著說：「佢叫敏希。」那個名字不是你伸手拿到的，而是從大人的話題裡掉到你面前。敏希聽見自己的名字，抬頭看了你一下，又把手裡的小車轉回去。你也說了自己的名字，聲音有點慢。那一刻不像班房點名，沒有全班看著，只是兩個小朋友在家長身邊，被輕輕推到對方眼前。",
        "impactList": [
          "玩家首次遇見敏希，事件結束後敏希加入校外同齡鄰居 relationship list。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_neighbor_first_manhei_met",
          "s2_w1_neighbor_first_manhei_parent_intro",
          "neighbor_name_known_manhei",
          "neighbor_relationship_started_manhei"
        ],
        "emotionalTags": [
          "introduced_by_adults",
          "gentle_formality"
        ],
        "relationshipHints": [
          "玩家首次遇見敏希，事件結束後敏希加入校外同齡鄰居 relationship list。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_neighbor_first_manhei_met",
          "introduced_by_adults",
          "gentle_formality",
          "玩家首次遇見敏希，事件結束後敏希加入校外同齡鄰居 relationship list。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_neighbor_first_manhei_met",
            "s2_w1_neighbor_first_manhei_parent_intro",
            "neighbor_name_known_manhei",
            "neighbor_relationship_started_manhei"
          ],
          "emotionalTags": [
            "introduced_by_adults",
            "gentle_formality"
          ],
          "relationshipHint": "玩家首次遇見敏希，事件結束後敏希加入校外同齡鄰居 relationship list。",
          "systemUseOnly": true
        }
      },
      {
        "id": "ask_will_meet_again",
        "branchId": "ask_will_meet_again",
        "choiceId": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_manhei_choice_3",
        "triggerStoryMemoryTags": [
          "s2_w1_2_meet_primary_same_age_neighbor_neighbor_manhei_choice_3",
          "s2_w1_neighbor_first_manhei_met",
          "s2_w1_neighbor_first_manhei_ask_again",
          "neighbor_name_known_manhei",
          "neighbor_relationship_started_manhei",
          "possible_future_meeting"
        ],
        "title": "問會不會再見。",
        "branchTitle": "問會不會再見。",
        "playerLine": "咁會唔會再見到？",
        "fullStoryText": "你看著大人講樓層和超市，忽然問會不會再見到。跟著家長的小朋友想了一下，說可能會，因為升降機只有幾部。這個答案很普通，普通得像保安亭、信箱和走廊燈，可是你聽完反而記住了。學校同學會在課室裡再見，老師會點名，可是鄰居不是這樣。鄰居可能是在倒垃圾時、等升降機時、平台花槽旁邊，忽然又站在同一個地方。你那時還不知道她的名字，只覺得「可能會」這句話在升降機門口停了一會兒。回家路上，家人提起剛才那個小朋友叫敏希，你才把「可能會再見」和「敏希」放到同一個位置。",
        "impactList": [
          "玩家首次遇見敏希，事件結束後敏希加入校外同齡鄰居 relationship list。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_neighbor_first_manhei_met",
          "s2_w1_neighbor_first_manhei_ask_again",
          "neighbor_name_known_manhei",
          "neighbor_relationship_started_manhei",
          "possible_future_meeting"
        ],
        "emotionalTags": [
          "tentative_continuity",
          "community_awareness",
          "name_learned_after_possibility"
        ],
        "relationshipHints": [
          "玩家首次遇見敏希，事件結束後敏希加入校外同齡鄰居 relationship list。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_neighbor_first_manhei_met",
          "tentative_continuity",
          "community_awareness",
          "玩家首次遇見敏希，事件結束後敏希加入校外同齡鄰居 relationship list。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_neighbor_first_manhei_met",
            "s2_w1_neighbor_first_manhei_ask_again",
            "neighbor_name_known_manhei",
            "neighbor_relationship_started_manhei",
            "possible_future_meeting"
          ],
          "emotionalTags": [
            "tentative_continuity",
            "community_awareness",
            "name_learned_after_possibility"
          ],
          "relationshipHint": "玩家首次遇見敏希，事件結束後敏希加入校外同齡鄰居 relationship list。",
          "systemUseOnly": true
        }
      },
      {
        "id": "stand_by_family_listen",
        "branchId": "stand_by_family_listen",
        "choiceId": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_manhei_choice_4",
        "triggerStoryMemoryTags": [
          "s2_w1_2_meet_primary_same_age_neighbor_neighbor_manhei_choice_4",
          "s2_w1_neighbor_first_manhei_met",
          "s2_w1_neighbor_first_manhei_listen",
          "neighbor_name_known_manhei",
          "neighbor_relationship_started_manhei"
        ],
        "title": "站在家人旁邊聽。",
        "branchTitle": "站在家人旁邊聽。",
        "playerLine": "……",
        "fullStoryText": "你沒有問，也沒有走開，只靠在家人旁邊聽大人講買餸和樓層。跟著家長的小朋友站在另一邊，手裡的小車被她轉了半圈又停住。你看著她的鞋，她也看著你的袋，兩個小朋友都沒有先把話打開。這樣站著有一點悶，卻不是完全沒有事情發生。大人的話像一把很大的傘，下面藏著兩個差不多年紀的人，慢慢知道對方原來住得不遠。臨走前，對方家長說：「敏希，同姨姨講拜拜。」她抬起手，很細地揮了一下。你這才知道，剛才一直站在傘底下的人叫敏希。",
        "impactList": [
          "玩家首次遇見敏希，事件結束後敏希加入校外同齡鄰居 relationship list。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_neighbor_first_manhei_met",
          "s2_w1_neighbor_first_manhei_listen",
          "neighbor_name_known_manhei",
          "neighbor_relationship_started_manhei"
        ],
        "emotionalTags": [
          "quiet_under_adults",
          "slow_recognition",
          "name_learned_at_goodbye"
        ],
        "relationshipHints": [
          "玩家首次遇見敏希，事件結束後敏希加入校外同齡鄰居 relationship list。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_neighbor_first_manhei_met",
          "quiet_under_adults",
          "slow_recognition",
          "玩家首次遇見敏希，事件結束後敏希加入校外同齡鄰居 relationship list。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_neighbor_first_manhei_met",
            "s2_w1_neighbor_first_manhei_listen",
            "neighbor_name_known_manhei",
            "neighbor_relationship_started_manhei"
          ],
          "emotionalTags": [
            "quiet_under_adults",
            "slow_recognition",
            "name_learned_at_goodbye"
          ],
          "relationshipHint": "玩家首次遇見敏希，事件結束後敏希加入校外同齡鄰居 relationship list。",
          "systemUseOnly": true
        }
      }
    ],
    "mapping": {
      "source": "info/s2_w1_reviewStories_v0_2_full_story.md",
      "mappingMethod": "S2-W1 eventId/variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_s2_w1_3_christmas_decorations_outing_before_going_out",
    "eventId": "s2_w1_3_christmas_decorations_outing",
    "sourceEventId": "S2-W1-3",
    "variantId": "before_going_out",
    "sourceVariantId": "before_leaving",
    "title": "去商場／街上看聖誕裝飾",
    "timeText": "S2-W1，聖誕假期第一天下午至回程",
    "placeText": "家門口、街上、商場、車上",
    "role": "holiday_family_outing_christmas_lights",
    "variantTitle": "出門前準備",
    "sceneOpening": "下午，家人說可以出去走一圈。你換好外套，門口放著水樽、紙巾和一個袋。街上比平日多人，商場門口有聖誕樹和亮燈，有人停下來拍照，也有人只想快點買完東西回家。你跟著家人走，發現假期的外面比學校更吵：喇叭有歌，人群有袋子摩擦的聲音，地板上還有燈一點一點碎開。",
    "variantOpening": "家人站在門口問：「水樽、紙巾、八達通，攞齊未？」你本來只想快點出門，看見大人一樣一樣數，才發現出街也像上學前一樣有清單。",
    "characters": [],
    "branches": [
      {
        "id": "take_water_bottle",
        "branchId": "take_water_bottle",
        "choiceId": "s2_w1_3_christmas_decorations_outing_before_going_out_choice_1",
        "triggerStoryMemoryTags": [
          "s2_w1_3_christmas_decorations_outing_before_going_out_choice_1",
          "s2_w1_mall_outing_before_leaving_water_bottle",
          "outing_preparation"
        ],
        "title": "拿水樽。",
        "branchTitle": "拿水樽。",
        "playerLine": "我攞水樽。",
        "fullStoryText": "你把水樽從桌邊拿起來，放進袋裡。袋子立刻沉了一點，帶子壓到家人的手背。家人說這樣等會兒不用到處找水喝，你點點頭，雖然心裡只想快點出門看燈。水樽在袋裡晃了一下，發出很小的膠聲。那一刻，出街不像你想像中只要打開門就可以跑出去，還要帶水、紙巾、八達通，還要等大人把所有東西數完。聖誕燈還沒有出現，先出現的是一個變重的袋子。",
        "impactList": [
          "玩家參與家庭出行準備，開始理解外出需要小步驟。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_mall_outing_before_leaving_water_bottle",
          "outing_preparation"
        ],
        "emotionalTags": [
          "readying",
          "small_responsibility"
        ],
        "relationshipHints": [
          "玩家參與家庭出行準備，開始理解外出需要小步驟。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_mall_outing_before_leaving_water_bottle",
          "readying",
          "small_responsibility",
          "玩家參與家庭出行準備，開始理解外出需要小步驟。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_mall_outing_before_leaving_water_bottle",
            "outing_preparation"
          ],
          "emotionalTags": [
            "readying",
            "small_responsibility"
          ],
          "relationshipHint": "玩家參與家庭出行準備，開始理解外出需要小步驟。",
          "systemUseOnly": true
        }
      },
      {
        "id": "ask_bring_toy",
        "branchId": "ask_bring_toy",
        "choiceId": "s2_w1_3_christmas_decorations_outing_before_going_out_choice_2",
        "triggerStoryMemoryTags": [
          "s2_w1_3_christmas_decorations_outing_before_going_out_choice_2",
          "s2_w1_mall_outing_before_leaving_toy",
          "familiar_object_outside"
        ],
        "title": "問可不可以帶玩具。",
        "branchTitle": "問可不可以帶玩具。",
        "playerLine": "可唔可以帶玩具？",
        "fullStoryText": "你站在門口問可不可以帶玩具。家人看了一眼你手上的大玩具，又看了看袋子，最後說小件可以，大件不行。你在玩具堆裡選了很久，最後把一個小小的放入口袋。它在口袋裡頂住大腿，走路時輕輕撞一下，像把家裡的一點熟悉帶到外面。商場還沒有到，人群也還沒有出現，可是你已經先把自己的小世界塞進口袋。家人催你穿鞋，你才發現自己選玩具選到鞋帶還沒拉好。",
        "impactList": [
          "家人允許有限度攜帶玩具，外出規矩以物件大小呈現。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_mall_outing_before_leaving_toy",
          "familiar_object_outside"
        ],
        "emotionalTags": [
          "comfort_object",
          "anticipation"
        ],
        "relationshipHints": [
          "家人允許有限度攜帶玩具，外出規矩以物件大小呈現。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_mall_outing_before_leaving_toy",
          "comfort_object",
          "anticipation",
          "家人允許有限度攜帶玩具，外出規矩以物件大小呈現。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_mall_outing_before_leaving_toy",
            "familiar_object_outside"
          ],
          "emotionalTags": [
            "comfort_object",
            "anticipation"
          ],
          "relationshipHint": "家人允許有限度攜帶玩具，外出規矩以物件大小呈現。",
          "systemUseOnly": true
        }
      },
      {
        "id": "hurry_family",
        "branchId": "hurry_family",
        "choiceId": "s2_w1_3_christmas_decorations_outing_before_going_out_choice_3",
        "triggerStoryMemoryTags": [
          "s2_w1_3_christmas_decorations_outing_before_going_out_choice_3",
          "s2_w1_mall_outing_before_leaving_hurry",
          "self_not_ready"
        ],
        "title": "催快點。",
        "branchTitle": "催快點。",
        "playerLine": "快啲啦。",
        "fullStoryText": "你催家人快點，可是家人只指了指你的鞋：「你自己都未著好。」你低頭看，鞋舌歪著，鞋帶一邊長一邊短。剛才那句「快啲」忽然回到你身上。你蹲下來拉鞋帶，手指有點急，越急越打不好結。門口的袋子、水樽和外套都在等，像大家都在排隊，只有你的鞋還沒準備好。等你終於站起來時，聖誕燈還是要等一等，可是你知道出門慢下來，不一定全是大人的錯。",
        "impactList": [
          "玩家在催促與自身準備之間看到家庭出門的互相牽連。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_mall_outing_before_leaving_hurry",
          "self_not_ready"
        ],
        "emotionalTags": [
          "impatience",
          "small_self_awareness"
        ],
        "relationshipHints": [
          "玩家在催促與自身準備之間看到家庭出門的互相牽連。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_mall_outing_before_leaving_hurry",
          "impatience",
          "small_self_awareness",
          "玩家在催促與自身準備之間看到家庭出門的互相牽連。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_mall_outing_before_leaving_hurry",
            "self_not_ready"
          ],
          "emotionalTags": [
            "impatience",
            "small_self_awareness"
          ],
          "relationshipHint": "玩家在催促與自身準備之間看到家庭出門的互相牽連。",
          "systemUseOnly": true
        }
      },
      {
        "id": "forget_coat",
        "branchId": "forget_coat",
        "choiceId": "s2_w1_3_christmas_decorations_outing_before_going_out_choice_4",
        "triggerStoryMemoryTags": [
          "s2_w1_3_christmas_decorations_outing_before_going_out_choice_4",
          "s2_w1_mall_outing_before_leaving_coat",
          "hallway_wind"
        ],
        "title": "忘記外套。",
        "branchTitle": "忘記外套。",
        "playerLine": "我得啦。",
        "fullStoryText": "你說自己得，門一開，走廊的風就先碰到你的手臂。家人沒有多說，只從椅背拿起外套遞過來。外套還帶著屋裡的暖味，你把手伸進袖子時，門口的光被布料遮了一下。你本來以為少穿一件就能快點出門，結果又走回來穿上。聖誕燈還在外面等，你卻先記住了走廊風很冷，家人遞外套的手很快。出門不是一條直線，有時候會被一件冷衫拉回來一下。",
        "impactList": [
          "家庭照應透過外套動作出現，不用直接說教。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_mall_outing_before_leaving_coat",
          "hallway_wind"
        ],
        "emotionalTags": [
          "minor_delay",
          "cared_for_by_object"
        ],
        "relationshipHints": [
          "家庭照應透過外套動作出現，不用直接說教。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_mall_outing_before_leaving_coat",
          "minor_delay",
          "cared_for_by_object",
          "家庭照應透過外套動作出現，不用直接說教。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_mall_outing_before_leaving_coat",
            "hallway_wind"
          ],
          "emotionalTags": [
            "minor_delay",
            "cared_for_by_object"
          ],
          "relationshipHint": "家庭照應透過外套動作出現，不用直接說教。",
          "systemUseOnly": true
        }
      }
    ],
    "mapping": {
      "source": "info/s2_w1_reviewStories_v0_2_full_story.md",
      "mappingMethod": "S2-W1 eventId/variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_s2_w1_3_christmas_decorations_outing_crowded_way",
    "eventId": "s2_w1_3_christmas_decorations_outing",
    "sourceEventId": "S2-W1-3",
    "variantId": "crowded_way",
    "sourceVariantId": "crowded_route",
    "title": "去商場／街上看聖誕裝飾",
    "timeText": "S2-W1，聖誕假期第一天下午至回程",
    "placeText": "家門口、街上、商場、車上",
    "role": "holiday_family_outing_christmas_lights",
    "variantTitle": "路上人太多",
    "sceneOpening": "下午，家人說可以出去走一圈。你換好外套，門口放著水樽、紙巾和一個袋。街上比平日多人，商場門口有聖誕樹和亮燈，有人停下來拍照，也有人只想快點買完東西回家。你跟著家人走，發現假期的外面比學校更吵：喇叭有歌，人群有袋子摩擦的聲音，地板上還有燈一點一點碎開。",
    "variantOpening": "商場門口很多人，聖誕歌從喇叭傳出來。你想看裝飾，但前面全是大人的袋和外套。家人握著你的手說：「跟實啲，唔好自己行開。」",
    "characters": [],
    "branches": [
      {
        "id": "hold_family_hand",
        "branchId": "hold_family_hand",
        "choiceId": "s2_w1_3_christmas_decorations_outing_crowded_way_choice_1",
        "triggerStoryMemoryTags": [
          "s2_w1_3_christmas_decorations_outing_crowded_way_choice_1",
          "s2_w1_mall_outing_crowd_hold_hand",
          "christmas_crowd_hand"
        ],
        "title": "抓緊家人的手。",
        "branchTitle": "抓緊家人的手。",
        "playerLine": "我跟住你。",
        "fullStoryText": "你把家人的手握緊一點，手心有點熱。人群從旁邊推過去，大人的袋子晃來晃去，聖誕歌在頭頂上播，可是你看不到完整的樹，只看見一顆顆發光的小球從人縫裡露出來。家人沒有走很快，每走幾步就回頭確認你還在。你沒有看到整個商場佈置，只記得那隻被你握住的手和燈球在外套中間閃了一下。人很多時，世界會變高，也會變窄，你只能先跟著一隻手慢慢前進。",
        "impactList": [
          "家庭照應在擁擠商場中以牽手呈現。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_mall_outing_crowd_hold_hand",
          "christmas_crowd_hand"
        ],
        "emotionalTags": [
          "crowd_safety",
          "dependence"
        ],
        "relationshipHints": [
          "家庭照應在擁擠商場中以牽手呈現。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_mall_outing_crowd_hold_hand",
          "crowd_safety",
          "dependence",
          "家庭照應在擁擠商場中以牽手呈現。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_mall_outing_crowd_hold_hand",
            "christmas_crowd_hand"
          ],
          "emotionalTags": [
            "crowd_safety",
            "dependence"
          ],
          "relationshipHint": "家庭照應在擁擠商場中以牽手呈現。",
          "systemUseOnly": true
        }
      },
      {
        "id": "say_cannot_see",
        "branchId": "say_cannot_see",
        "choiceId": "s2_w1_3_christmas_decorations_outing_crowded_way_choice_2",
        "triggerStoryMemoryTags": [
          "s2_w1_3_christmas_decorations_outing_crowded_way_choice_2",
          "s2_w1_mall_outing_crowd_cannot_see",
          "found_viewing_spot"
        ],
        "title": "說看不到。",
        "branchTitle": "說看不到。",
        "playerLine": "我睇唔到呀。",
        "fullStoryText": "你仰頭看了很久，前面全是大人的背和購物袋，只好說自己看不到。家人帶你往旁邊走，找了一個矮一點的位置。你終於看到聖誕樹頂，那顆星在商場燈底下閃得很亮，可是你也看到旁邊還有一排人舉著手機等拍照。原來看見一樣東西也要找位置，不是站在人群裡就自然看得清楚。你站在家人旁邊，覺得那棵樹比課室所有裝飾都高，但也比想像中更難接近。",
        "impactList": [
          "玩家向家人表達困難，家人幫助調整位置。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_mall_outing_crowd_cannot_see",
          "found_viewing_spot"
        ],
        "emotionalTags": [
          "frustration_then_relief",
          "child_height_pov"
        ],
        "relationshipHints": [
          "玩家向家人表達困難，家人幫助調整位置。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_mall_outing_crowd_cannot_see",
          "frustration_then_relief",
          "child_height_pov",
          "玩家向家人表達困難，家人幫助調整位置。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_mall_outing_crowd_cannot_see",
            "found_viewing_spot"
          ],
          "emotionalTags": [
            "frustration_then_relief",
            "child_height_pov"
          ],
          "relationshipHint": "玩家向家人表達困難，家人幫助調整位置。",
          "systemUseOnly": true
        }
      },
      {
        "id": "go_ahead_alone",
        "branchId": "go_ahead_alone",
        "choiceId": "s2_w1_3_christmas_decorations_outing_crowded_way_choice_3",
        "triggerStoryMemoryTags": [
          "s2_w1_3_christmas_decorations_outing_crowded_way_choice_3",
          "s2_w1_mall_outing_crowd_go_ahead",
          "almost_step_away"
        ],
        "title": "想自己走前。",
        "branchTitle": "想自己走前。",
        "playerLine": "我去前面睇。",
        "fullStoryText": "你看到前面好像有空位，想自己走過去。家人立刻叫住你，聲音比剛才大了一點。你停下來，腳尖已經往前，心裡有點不服氣。可是下一秒，有人推著BB車從旁邊過去，又有人拿著很大的袋子轉身，你才發現那個空位很快就不見了。聖誕樹還在前面，可是人群像水一樣流，你站在原地，被家人的手拉回來。你沒有真的走失，只記得那一下被叫住時，胸口跳得比聖誕歌還快。",
        "impactList": [
          "家庭限制在擁擠場景中帶有保護性，但玩家感到被拉住。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_mall_outing_crowd_go_ahead",
          "almost_step_away"
        ],
        "emotionalTags": [
          "impatience",
          "crowd_warning"
        ],
        "relationshipHints": [
          "家庭限制在擁擠場景中帶有保護性，但玩家感到被拉住。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_mall_outing_crowd_go_ahead",
          "impatience",
          "crowd_warning",
          "家庭限制在擁擠場景中帶有保護性，但玩家感到被拉住。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_mall_outing_crowd_go_ahead",
            "almost_step_away"
          ],
          "emotionalTags": [
            "impatience",
            "crowd_warning"
          ],
          "relationshipHint": "家庭限制在擁擠場景中帶有保護性，但玩家感到被拉住。",
          "systemUseOnly": true
        }
      },
      {
        "id": "watch_floor_lights",
        "branchId": "watch_floor_lights",
        "choiceId": "s2_w1_3_christmas_decorations_outing_crowded_way_choice_4",
        "triggerStoryMemoryTags": [
          "s2_w1_3_christmas_decorations_outing_crowded_way_choice_4",
          "s2_w1_mall_outing_crowd_floor_lights",
          "floor_light_memory"
        ],
        "title": "先看地上的燈影。",
        "branchTitle": "先看地上的燈影。",
        "playerLine": "地下都有光。",
        "fullStoryText": "你看不到前面，就低頭看地板。聖誕燈落在亮亮的地面上，碎成一點一點，像小小的糖紙。大人的鞋從光上走過，光被遮住，又很快回來。你指給家人看，說地下都有光。家人也低頭看了一眼，笑了一下。你沒有站到最前面，也沒有拍到最好看的照片，可是那些燈自己來到你腳邊。後來你想起那天下午，記得的不是整棵樹，而是地板上的碎光一路跟著你的鞋尖走。",
        "impactList": [
          "玩家以自己的高度找到可看的風景，家庭同行沒有打斷這種發現。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_mall_outing_crowd_floor_lights",
          "floor_light_memory"
        ],
        "emotionalTags": [
          "found_beauty_nearby",
          "calm_observation"
        ],
        "relationshipHints": [
          "玩家以自己的高度找到可看的風景，家庭同行沒有打斷這種發現。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_mall_outing_crowd_floor_lights",
          "found_beauty_nearby",
          "calm_observation",
          "玩家以自己的高度找到可看的風景，家庭同行沒有打斷這種發現。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_mall_outing_crowd_floor_lights",
            "floor_light_memory"
          ],
          "emotionalTags": [
            "found_beauty_nearby",
            "calm_observation"
          ],
          "relationshipHint": "玩家以自己的高度找到可看的風景，家庭同行沒有打斷這種發現。",
          "systemUseOnly": true
        }
      }
    ],
    "mapping": {
      "source": "info/s2_w1_reviewStories_v0_2_full_story.md",
      "mappingMethod": "S2-W1 eventId/variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_s2_w1_3_christmas_decorations_outing_sees_decorations",
    "eventId": "s2_w1_3_christmas_decorations_outing",
    "sourceEventId": "S2-W1-3",
    "variantId": "sees_decorations",
    "sourceVariantId": "seeing_decorations",
    "title": "去商場／街上看聖誕裝飾",
    "timeText": "S2-W1，聖誕假期第一天下午至回程",
    "placeText": "家門口、街上、商場、車上",
    "role": "holiday_family_outing_christmas_lights",
    "variantTitle": "看到裝飾",
    "sceneOpening": "下午，家人說可以出去走一圈。你換好外套，門口放著水樽、紙巾和一個袋。街上比平日多人，商場門口有聖誕樹和亮燈，有人停下來拍照，也有人只想快點買完東西回家。你跟著家人走，發現假期的外面比學校更吵：喇叭有歌，人群有袋子摩擦的聲音，地板上還有燈一點一點碎開。",
    "variantOpening": "商場中央的聖誕樹很高，下面有假雪和禮物盒。你抬頭看了很久，脖子有點酸。旁邊有小朋友說那個熊仔好大，也有人說想要拍照。",
    "characters": [],
    "branches": [
      {
        "id": "look_tree_top",
        "branchId": "look_tree_top",
        "choiceId": "s2_w1_3_christmas_decorations_outing_sees_decorations_choice_1",
        "triggerStoryMemoryTags": [
          "s2_w1_3_christmas_decorations_outing_sees_decorations_choice_1",
          "s2_w1_mall_outing_decor_tree_top",
          "tall_christmas_tree"
        ],
        "title": "看聖誕樹頂。",
        "branchTitle": "看聖誕樹頂。",
        "playerLine": "好高呀。",
        "fullStoryText": "你站在聖誕樹下面，一直仰頭看。樹頂的星星高到好像不屬於商場，脖子看得有點酸，眼睛也被燈照得花了一下。旁邊大人拿手機拍照，有小朋友拉著家人的袖子說熊仔很大。你沒有立刻說想要甚麼，只說好高。那棵樹沒有回答你，只把燈一層一層亮著。你想起課室白板角落那些紙星星，忽然覺得它們也許是同一種東西，只是一個貼得很近，一個高到你要抬頭很久。",
        "impactList": [
          "玩家在家庭出行中留下視覺型節日記憶。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_mall_outing_decor_tree_top",
          "tall_christmas_tree"
        ],
        "emotionalTags": [
          "wonder",
          "smallness_under_lights"
        ],
        "relationshipHints": [
          "玩家在家庭出行中留下視覺型節日記憶。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_mall_outing_decor_tree_top",
          "wonder",
          "smallness_under_lights",
          "玩家在家庭出行中留下視覺型節日記憶。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_mall_outing_decor_tree_top",
            "tall_christmas_tree"
          ],
          "emotionalTags": [
            "wonder",
            "smallness_under_lights"
          ],
          "relationshipHint": "玩家在家庭出行中留下視覺型節日記憶。",
          "systemUseOnly": true
        }
      },
      {
        "id": "ask_photo",
        "branchId": "ask_photo",
        "choiceId": "s2_w1_3_christmas_decorations_outing_sees_decorations_choice_2",
        "triggerStoryMemoryTags": [
          "s2_w1_3_christmas_decorations_outing_sees_decorations_choice_2",
          "s2_w1_mall_outing_decor_photo",
          "christmas_photo"
        ],
        "title": "想拍照。",
        "branchTitle": "想拍照。",
        "playerLine": "可唔可以影相？",
        "fullStoryText": "你問可不可以影相。家人帶你站到旁邊，提醒不要碰裝飾，也不要站到別人鏡頭前。你站在聖誕樹旁邊，手不知道要放哪裡，只好抓住外套邊。倒數三聲時，你笑得有點硬，因為後面有人在等，前面也有人看著。相機按下去那一下，燈把你的臉照得很亮。照片裡也許看不出你有多緊張，只會看見你和一棵很高的樹站在一起，像你真的到過那個發光的下午。",
        "impactList": [
          "家人協助玩家把節日出行留下可回顧的畫面。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_mall_outing_decor_photo",
          "christmas_photo"
        ],
        "emotionalTags": [
          "awkward_pose",
          "bright_memory"
        ],
        "relationshipHints": [
          "家人協助玩家把節日出行留下可回顧的畫面。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_mall_outing_decor_photo",
          "awkward_pose",
          "bright_memory",
          "家人協助玩家把節日出行留下可回顧的畫面。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_mall_outing_decor_photo",
            "christmas_photo"
          ],
          "emotionalTags": [
            "awkward_pose",
            "bright_memory"
          ],
          "relationshipHint": "家人協助玩家把節日出行留下可回顧的畫面。",
          "systemUseOnly": true
        }
      },
      {
        "id": "ask_gift_boxes",
        "branchId": "ask_gift_boxes",
        "choiceId": "s2_w1_3_christmas_decorations_outing_sees_decorations_choice_3",
        "triggerStoryMemoryTags": [
          "s2_w1_3_christmas_decorations_outing_sees_decorations_choice_3",
          "s2_w1_mall_outing_decor_gift_boxes",
          "empty_decoration_question"
        ],
        "title": "問禮物盒是不是真的。",
        "branchTitle": "問禮物盒是不是真的。",
        "playerLine": "入面有冇嘢？",
        "fullStoryText": "你蹲低看聖誕樹下的禮物盒，問裡面有沒有東西。家人說只是裝飾，不能打開。你盯著那個包得很漂亮的盒子，覺得如果裡面是空的，好像有一點可惜。絲帶打得很正，紙面也很亮，比你家裡真正的盒子還像禮物。你沒有伸手，只把臉靠近一點看縫隙，還是看不到裡面。那天下午你才知道，有些東西看起來像可以打開，其實只是讓人想像。可是想像也會在心裡佔一點位置。",
        "impactList": [
          "家人用簡單方式回答節日裝飾的真與假。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_mall_outing_decor_gift_boxes",
          "empty_decoration_question"
        ],
        "emotionalTags": [
          "curious_disappointment",
          "imagination"
        ],
        "relationshipHints": [
          "家人用簡單方式回答節日裝飾的真與假。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_mall_outing_decor_gift_boxes",
          "curious_disappointment",
          "imagination",
          "家人用簡單方式回答節日裝飾的真與假。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_mall_outing_decor_gift_boxes",
            "empty_decoration_question"
          ],
          "emotionalTags": [
            "curious_disappointment",
            "imagination"
          ],
          "relationshipHint": "家人用簡單方式回答節日裝飾的真與假。",
          "systemUseOnly": true
        }
      },
      {
        "id": "want_leave_crowd",
        "branchId": "want_leave_crowd",
        "choiceId": "s2_w1_3_christmas_decorations_outing_sees_decorations_choice_4",
        "triggerStoryMemoryTags": [
          "s2_w1_3_christmas_decorations_outing_sees_decorations_choice_4",
          "s2_w1_mall_outing_decor_too_crowded",
          "leaving_lights"
        ],
        "title": "想快點走。",
        "branchTitle": "想快點走。",
        "playerLine": "好多人呀。",
        "fullStoryText": "你站在裝飾旁邊，聽見聖誕歌、人聲、手機快門聲，全部混在一起。你說好多人，手也抓緊了家人的衣角。家人說再看一陣就走，語氣像在把今天的節目收尾。你沒有哭，也不是完全不喜歡，只是覺得燈太多，人也太多，連空氣都被外套和袋子塞滿。你最後又看了一眼那隻大熊仔，牠站在原地不動，像一點也不怕吵。你跟著家人離開時，耳邊還留著歌聲，亮亮的，卻有點重。",
        "impactList": [
          "玩家表達人群壓力，家人以收尾方式回應。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_mall_outing_decor_too_crowded",
          "leaving_lights"
        ],
        "emotionalTags": [
          "sensory_tiredness",
          "mixed_enjoyment"
        ],
        "relationshipHints": [
          "玩家表達人群壓力，家人以收尾方式回應。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_mall_outing_decor_too_crowded",
          "sensory_tiredness",
          "mixed_enjoyment",
          "玩家表達人群壓力，家人以收尾方式回應。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_mall_outing_decor_too_crowded",
            "leaving_lights"
          ],
          "emotionalTags": [
            "sensory_tiredness",
            "mixed_enjoyment"
          ],
          "relationshipHint": "玩家表達人群壓力，家人以收尾方式回應。",
          "systemUseOnly": true
        }
      }
    ],
    "mapping": {
      "source": "info/s2_w1_reviewStories_v0_2_full_story.md",
      "mappingMethod": "S2-W1 eventId/variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_s2_w1_3_christmas_decorations_outing_tired_return_remember_image",
    "eventId": "s2_w1_3_christmas_decorations_outing",
    "sourceEventId": "S2-W1-3",
    "variantId": "tired_return_remember_image",
    "sourceVariantId": "tired_return_memory",
    "title": "去商場／街上看聖誕裝飾",
    "timeText": "S2-W1，聖誕假期第一天下午至回程",
    "placeText": "家門口、街上、商場、車上",
    "role": "holiday_family_outing_christmas_lights",
    "variantTitle": "回程累了但記得某個畫面",
    "sceneOpening": "下午，家人說可以出去走一圈。你換好外套，門口放著水樽、紙巾和一個袋。街上比平日多人，商場門口有聖誕樹和亮燈，有人停下來拍照，也有人只想快點買完東西回家。你跟著家人走，發現假期的外面比學校更吵：喇叭有歌，人群有袋子摩擦的聲音，地板上還有燈一點一點碎開。",
    "variantOpening": "回程時，你的腳有點酸。車窗外的燈一盞一盞往後退，家人問你今天最記得甚麼。你想不起整個下午，只記得一個很小的畫面。",
    "characters": [],
    "branches": [
      {
        "id": "remember_star",
        "branchId": "remember_star",
        "choiceId": "s2_w1_3_christmas_decorations_outing_tired_return_remember_image_choice_1",
        "triggerStoryMemoryTags": [
          "s2_w1_3_christmas_decorations_outing_tired_return_remember_image_choice_1",
          "s2_w1_mall_outing_return_star",
          "christmas_star_afterimage"
        ],
        "title": "記得星星。",
        "branchTitle": "記得星星。",
        "playerLine": "我記得樹頂粒星。",
        "fullStoryText": "回程時，你靠在椅背上，鞋底像還留著商場地板的硬。家人問你今天最記得甚麼，你想了一下，說記得樹頂那顆星。家人說那顆星很高，你點點頭，眼睛半閉著，卻覺得它還在眼皮裡閃了一下。你其實記不清聖誕樹有多少層，也記不清旁邊有幾個禮物盒，只記得自己抬頭抬得脖子酸，還是不想太快移開眼。那顆星被車窗外的燈一點一點拉遠，像今天還沒有完全走掉。",
        "impactList": [
          "家庭回程對話幫玩家把節日片段收成記憶。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_mall_outing_return_star",
          "christmas_star_afterimage"
        ],
        "emotionalTags": [
          "tired_wonder",
          "visual_afterglow"
        ],
        "relationshipHints": [
          "家庭回程對話幫玩家把節日片段收成記憶。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_mall_outing_return_star",
          "tired_wonder",
          "visual_afterglow",
          "家庭回程對話幫玩家把節日片段收成記憶。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_mall_outing_return_star",
            "christmas_star_afterimage"
          ],
          "emotionalTags": [
            "tired_wonder",
            "visual_afterglow"
          ],
          "relationshipHint": "家庭回程對話幫玩家把節日片段收成記憶。",
          "systemUseOnly": true
        }
      },
      {
        "id": "remember_crowd",
        "branchId": "remember_crowd",
        "choiceId": "s2_w1_3_christmas_decorations_outing_tired_return_remember_image_choice_2",
        "triggerStoryMemoryTags": [
          "s2_w1_3_christmas_decorations_outing_tired_return_remember_image_choice_2",
          "s2_w1_mall_outing_return_crowd",
          "crowded_holiday_memory"
        ],
        "title": "記得人很多。",
        "branchTitle": "記得人很多。",
        "playerLine": "好多人。",
        "fullStoryText": "你說最記得人很多。家人笑了一下，說假期就是這樣。你不太知道這算不算好玩，只知道自己的手整個下午都沒有離開大人太遠。車窗外的燈往後退，玻璃上有你的影子，你看起來比在商場時安靜很多。人群已經不在身邊，耳朵卻好像還聽見袋子擦過外套的聲音。你沒有說下次還要不要去，只把手放在膝上，慢慢記住一件事：有些漂亮的地方，也會讓人很累。",
        "impactList": [
          "玩家把外出經驗記成環境感受，而不是單純節日快樂。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_mall_outing_return_crowd",
          "crowded_holiday_memory"
        ],
        "emotionalTags": [
          "tiredness",
          "cautious_future_outing"
        ],
        "relationshipHints": [
          "玩家把外出經驗記成環境感受，而不是單純節日快樂。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_mall_outing_return_crowd",
          "tiredness",
          "cautious_future_outing",
          "玩家把外出經驗記成環境感受，而不是單純節日快樂。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_mall_outing_return_crowd",
            "crowded_holiday_memory"
          ],
          "emotionalTags": [
            "tiredness",
            "cautious_future_outing"
          ],
          "relationshipHint": "玩家把外出經驗記成環境感受，而不是單純節日快樂。",
          "systemUseOnly": true
        }
      },
      {
        "id": "remember_fake_snow",
        "branchId": "remember_fake_snow",
        "choiceId": "s2_w1_3_christmas_decorations_outing_tired_return_remember_image_choice_3",
        "triggerStoryMemoryTags": [
          "s2_w1_3_christmas_decorations_outing_tired_return_remember_image_choice_3",
          "s2_w1_mall_outing_return_fake_snow",
          "hong_kong_no_snow_question"
        ],
        "title": "記得假雪。",
        "branchTitle": "記得假雪。",
        "playerLine": "啲雪係假㗎。",
        "fullStoryText": "你說記得那些雪是假的。家人說香港很少真的下雪，聲音很平常。你看著車窗，想像如果地上真的全是白色，鞋會不會濕，手會不會凍，聖誕樹下面的熊仔會不會被蓋住。商場裡的假雪沒有聲音，也沒有變冷，只是白白地鋪在盒子旁邊，讓很多人拍照。你不太介意它是假的，因為它還是讓你想了很久。回程的車窗上，一盞盞街燈退後時，也有一點像不會融化的小雪。",
        "impactList": [
          "家人用生活常識回應玩家對節日裝飾的好奇。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_mall_outing_return_fake_snow",
          "hong_kong_no_snow_question"
        ],
        "emotionalTags": [
          "imagination",
          "gentle_questioning"
        ],
        "relationshipHints": [
          "家人用生活常識回應玩家對節日裝飾的好奇。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_mall_outing_return_fake_snow",
          "imagination",
          "gentle_questioning",
          "家人用生活常識回應玩家對節日裝飾的好奇。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_mall_outing_return_fake_snow",
            "hong_kong_no_snow_question"
          ],
          "emotionalTags": [
            "imagination",
            "gentle_questioning"
          ],
          "relationshipHint": "家人用生活常識回應玩家對節日裝飾的好奇。",
          "systemUseOnly": true
        }
      },
      {
        "id": "too_tired_to_talk",
        "branchId": "too_tired_to_talk",
        "choiceId": "s2_w1_3_christmas_decorations_outing_tired_return_remember_image_choice_4",
        "triggerStoryMemoryTags": [
          "s2_w1_3_christmas_decorations_outing_tired_return_remember_image_choice_4",
          "s2_w1_mall_outing_return_tired",
          "holiday_outing_exhaustion"
        ],
        "title": "累到不想說。",
        "branchTitle": "累到不想說。",
        "playerLine": "我攰啦。",
        "fullStoryText": "家人問你最記得甚麼，你只說自己累了。家人把袋子換到另一邊手，叫你閉眼一會兒。你沒有真的睡著，車聲在耳邊拉得很長，像有人把今天一點一點捲起來。聖誕樹、地板上的光、人群裡的大袋子、出門前那個水樽，全都混在一起，變成眼睛後面一團亮亮的東西。你不想再說話，也不想再走路，只靠著椅背，讓今天慢慢退後。原來好玩的事，也可以把腳底用得很酸。",
        "impactList": [
          "家人以休息方式接住玩家的疲累，沒有要求玩家總結今天。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_mall_outing_return_tired",
          "holiday_outing_exhaustion"
        ],
        "emotionalTags": [
          "soft_exhaustion",
          "memory_settling"
        ],
        "relationshipHints": [
          "家人以休息方式接住玩家的疲累，沒有要求玩家總結今天。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_mall_outing_return_tired",
          "soft_exhaustion",
          "memory_settling",
          "家人以休息方式接住玩家的疲累，沒有要求玩家總結今天。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_mall_outing_return_tired",
            "holiday_outing_exhaustion"
          ],
          "emotionalTags": [
            "soft_exhaustion",
            "memory_settling"
          ],
          "relationshipHint": "家人以休息方式接住玩家的疲累，沒有要求玩家總結今天。",
          "systemUseOnly": true
        }
      }
    ],
    "mapping": {
      "source": "info/s2_w1_reviewStories_v0_2_full_story.md",
      "mappingMethod": "S2-W1 eventId/variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_s2_w1_4_holiday_homework_in_family_life_family_reminder",
    "eventId": "s2_w1_4_holiday_homework_in_family_life",
    "sourceEventId": "S2-W1-4",
    "variantId": "family_reminder",
    "sourceVariantId": "family_reminds_homework",
    "title": "假期功課被放進家庭生活裡",
    "timeText": "S2-W1，聖誕假期第一天晚上至翌日平台",
    "placeText": "家裡飯桌、客廳、刷牙前的睡房／洗手間、屋苑平台",
    "role": "holiday_homework_enters_family_life",
    "variantTitle": "家人提醒",
    "sceneOpening": "聖誕假期的東西很多：電視、街上的燈、樓下遇到的新朋友、家裡比較慢的早餐。可是晚上收拾桌子時，假期功課又被拿出來。它不再像學校裡的功課簿，而是跟飯碗、玩具、牙刷泡泡和沙發上的外套放在同一個家裡。你還不太明白為甚麼放假也會有功課，只覺得那疊紙被放到飯桌上之後，晚飯後的椅子好像沒有剛才那麼舒服。",
    "variantOpening": "晚飯後，家人把功課紙放在桌上：「今日做少少，之後就冇咁趕。」你本來想去玩，看到鉛筆盒被推過來，心裡有一點沉。",
    "characters": [],
    "branches": [
      {
        "id": "do_one_page",
        "branchId": "do_one_page",
        "choiceId": "s2_w1_4_holiday_homework_in_family_life_family_reminder_choice_1",
        "triggerStoryMemoryTags": [
          "s2_w1_4_holiday_homework_in_family_life_family_reminder_choice_1",
          "s2_w1_homework_family_reminder_one_page",
          "first_holiday_homework_page"
        ],
        "title": "做一頁。",
        "branchTitle": "做一頁。",
        "playerLine": "我做一頁。",
        "fullStoryText": "你坐回飯桌，拿起鉛筆，說自己做一頁。電視聲從客廳傳過來，你寫到一半，看了幾次那個方向。家人沒有關掉電視，只把功課紙壓平，手指停在下一格，叫你先看這裡。你寫得不快，有些字擦了又寫，擦膠屑黏在手邊。可是寫完一頁時，那疊紙真的薄了一點，雖然只是很少很少。你把鉛筆放下，覺得假期沒有被功課吃掉，只是被它咬走了一小口。",
        "impactList": [
          "家人用陪伴和指格方式幫助玩家完成小步。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_homework_family_reminder_one_page",
          "first_holiday_homework_page"
        ],
        "emotionalTags": [
          "small_completion",
          "mixed_play_homework"
        ],
        "relationshipHints": [
          "家人用陪伴和指格方式幫助玩家完成小步。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_homework_family_reminder_one_page",
          "small_completion",
          "mixed_play_homework",
          "家人用陪伴和指格方式幫助玩家完成小步。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_homework_family_reminder_one_page",
            "first_holiday_homework_page"
          ],
          "emotionalTags": [
            "small_completion",
            "mixed_play_homework"
          ],
          "relationshipHint": "家人用陪伴和指格方式幫助玩家完成小步。",
          "systemUseOnly": true
        }
      },
      {
        "id": "ask_tomorrow",
        "branchId": "ask_tomorrow",
        "choiceId": "s2_w1_4_holiday_homework_in_family_life_family_reminder_choice_2",
        "triggerStoryMemoryTags": [
          "s2_w1_4_holiday_homework_in_family_life_family_reminder_choice_2",
          "s2_w1_homework_family_reminder_tomorrow",
          "tomorrow_needs_time"
        ],
        "title": "問可不可以明天。",
        "branchTitle": "問可不可以明天。",
        "playerLine": "聽日先得唔得？",
        "fullStoryText": "你看著功課紙，問可不可以明天先做。家人沒有立刻罵，只問你明天甚麼時候做。你本來以為「明天」像一個很大的櫃，可以把今天不想做的東西全放進去，可是家人一問時間，那個櫃門就好像打開了，裡面也要有位置。你說不出來，只用鉛筆尾敲了敲桌面。家人把紙收起一半，說那就明天早上記得。你鬆了一口氣，又覺得明天早上突然多了一樣會等你的東西。",
        "impactList": [
          "家人沒有否定拖延，但要求玩家把拖延接回具體時間。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_homework_family_reminder_tomorrow",
          "tomorrow_needs_time"
        ],
        "emotionalTags": [
          "postponement",
          "mild_accountability"
        ],
        "relationshipHints": [
          "家人沒有否定拖延，但要求玩家把拖延接回具體時間。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_homework_family_reminder_tomorrow",
          "postponement",
          "mild_accountability",
          "家人沒有否定拖延，但要求玩家把拖延接回具體時間。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_homework_family_reminder_tomorrow",
            "tomorrow_needs_time"
          ],
          "emotionalTags": [
            "postponement",
            "mild_accountability"
          ],
          "relationshipHint": "家人沒有否定拖延，但要求玩家把拖延接回具體時間。",
          "systemUseOnly": true
        }
      },
      {
        "id": "sharpen_pencil_first",
        "branchId": "sharpen_pencil_first",
        "choiceId": "s2_w1_4_holiday_homework_in_family_life_family_reminder_choice_3",
        "triggerStoryMemoryTags": [
          "s2_w1_4_holiday_homework_in_family_life_family_reminder_choice_3",
          "s2_w1_homework_family_reminder_sharpen_pencil",
          "preparation_delay"
        ],
        "title": "先削鉛筆。",
        "branchTitle": "先削鉛筆。",
        "playerLine": "我削鉛筆先。",
        "fullStoryText": "你拿起鉛筆，說要先削。削筆器轉起來，木屑一圈一圈落在小盒裡，鉛筆尖慢慢變得很長，好像只要削得夠尖，就算已經開始做功課。家人看著你削完一支，又看著你拿起第二支，終於說：「夠喇，寫先。」你停下來，手上沾了一點木屑味。鉛筆尖真的很漂亮，也真的很尖，可是功課紙還在原位等你。你那時才知道，準備有時候很像開始，但又不是開始本身。",
        "impactList": [
          "家人容許短暫準備，但把玩家帶回任務本身。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_homework_family_reminder_sharpen_pencil",
          "preparation_delay"
        ],
        "emotionalTags": [
          "stalling",
          "tactile_memory"
        ],
        "relationshipHints": [
          "家人容許短暫準備，但把玩家帶回任務本身。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_homework_family_reminder_sharpen_pencil",
          "stalling",
          "tactile_memory",
          "家人容許短暫準備，但把玩家帶回任務本身。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_homework_family_reminder_sharpen_pencil",
            "preparation_delay"
          ],
          "emotionalTags": [
            "stalling",
            "tactile_memory"
          ],
          "relationshipHint": "家人容許短暫準備，但把玩家帶回任務本身。",
          "systemUseOnly": true
        }
      },
      {
        "id": "sit_still",
        "branchId": "sit_still",
        "choiceId": "s2_w1_4_holiday_homework_in_family_life_family_reminder_choice_4",
        "triggerStoryMemoryTags": [
          "s2_w1_4_holiday_homework_in_family_life_family_reminder_choice_4",
          "s2_w1_homework_family_reminder_freeze",
          "first_square_support"
        ],
        "title": "坐著不動。",
        "branchTitle": "坐著不動。",
        "playerLine": "……",
        "fullStoryText": "你坐在椅子上沒有動。功課紙放在前面，鉛筆盒在旁邊，電視聲在遠一點的地方，可是你像還沒從假期走回桌面。家人沒有立刻說你懶，只把第一題讀給你聽。那題其實不長，聽起來也不是完全不會，但你剛才心裡那條通往玩具的路忽然要轉彎，轉得有點慢。家人的手指停在第一格，沒有指整張紙。你看著那一格，覺得它比整疊紙小很多，才終於把鉛筆拿起來。",
        "impactList": [
          "家人以讀題和指格方式接住玩家卡住的狀態。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_homework_family_reminder_freeze",
          "first_square_support"
        ],
        "emotionalTags": [
          "stuck_transition",
          "supported_start"
        ],
        "relationshipHints": [
          "家人以讀題和指格方式接住玩家卡住的狀態。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_homework_family_reminder_freeze",
          "stuck_transition",
          "supported_start",
          "家人以讀題和指格方式接住玩家卡住的狀態。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_homework_family_reminder_freeze",
            "first_square_support"
          ],
          "emotionalTags": [
            "stuck_transition",
            "supported_start"
          ],
          "relationshipHint": "家人以讀題和指格方式接住玩家卡住的狀態。",
          "systemUseOnly": true
        }
      }
    ],
    "mapping": {
      "source": "info/s2_w1_reviewStories_v0_2_full_story.md",
      "mappingMethod": "S2-W1 eventId/variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_s2_w1_4_holiday_homework_in_family_life_player_delays",
    "eventId": "s2_w1_4_holiday_homework_in_family_life",
    "sourceEventId": "S2-W1-4",
    "variantId": "player_delays",
    "sourceVariantId": "player_wants_to_delay",
    "title": "假期功課被放進家庭生活裡",
    "timeText": "S2-W1，聖誕假期第一天晚上至翌日平台",
    "placeText": "家裡飯桌、客廳、刷牙前的睡房／洗手間、屋苑平台",
    "role": "holiday_homework_enters_family_life",
    "variantTitle": "玩家想拖",
    "sceneOpening": "聖誕假期的東西很多：電視、街上的燈、樓下遇到的新朋友、家裡比較慢的早餐。可是晚上收拾桌子時，假期功課又被拿出來。它不再像學校裡的功課簿，而是跟飯碗、玩具、牙刷泡泡和沙發上的外套放在同一個家裡。你還不太明白為甚麼放假也會有功課，只覺得那疊紙被放到飯桌上之後，晚飯後的椅子好像沒有剛才那麼舒服。",
    "variantOpening": "你把功課紙放到書包旁邊，想著反正還有好多天。家人路過看見，問：「你係咪諗住佢自己會做完？」你愣了一下，因為你其實就是想它自己不見。",
    "characters": [],
    "branches": [
      {
        "id": "say_lots_of_days",
        "branchId": "say_lots_of_days",
        "choiceId": "s2_w1_4_holiday_homework_in_family_life_player_delays_choice_1",
        "triggerStoryMemoryTags": [
          "s2_w1_4_holiday_homework_in_family_life_player_delays_choice_1",
          "s2_w1_homework_delay_lots_of_days",
          "calendar_pressure"
        ],
        "title": "說還有時間。",
        "branchTitle": "說還有時間。",
        "playerLine": "仲有好多日。",
        "fullStoryText": "你說還有好多日，聲音說得很有把握。家人看了看日曆，說好多日很快過。你本來不太相信，因為日曆上還有那麼多格子，可是那些格子排在一起，又好像真的會被一天一天擦掉。功課紙躺在書包旁邊，沒有出聲，也沒有自己變少。你把日曆看了一眼，又看了一眼功課，心裡有點不服氣：明明是假期，為甚麼「好多日」聽起來不像你想像中那麼多？那天你沒有立刻做完，只是開始怕它真的會很快變成明天。",
        "impactList": [
          "家人用日曆讓玩家看見時間流動，而非直接斥責。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_homework_delay_lots_of_days",
          "calendar_pressure"
        ],
        "emotionalTags": [
          "defensive_delay",
          "time_uncertainty"
        ],
        "relationshipHints": [
          "家人用日曆讓玩家看見時間流動，而非直接斥責。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_homework_delay_lots_of_days",
          "defensive_delay",
          "time_uncertainty",
          "家人用日曆讓玩家看見時間流動，而非直接斥責。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_homework_delay_lots_of_days",
            "calendar_pressure"
          ],
          "emotionalTags": [
            "defensive_delay",
            "time_uncertainty"
          ],
          "relationshipHint": "家人用日曆讓玩家看見時間流動，而非直接斥責。",
          "systemUseOnly": true
        }
      },
      {
        "id": "do_shortest_question",
        "branchId": "do_shortest_question",
        "choiceId": "s2_w1_4_holiday_homework_in_family_life_player_delays_choice_2",
        "triggerStoryMemoryTags": [
          "s2_w1_4_holiday_homework_in_family_life_player_delays_choice_2",
          "s2_w1_homework_delay_shortest_question",
          "small_entry_to_homework"
        ],
        "title": "先做最短那題。",
        "branchTitle": "先做最短那題。",
        "playerLine": "我做最短嗰題。",
        "fullStoryText": "你在功課紙上找了很久，專挑看起來字最少的一題。家人沒有說你取巧，只把紙轉正，讓你看清楚題目。你寫那一題寫得很慢，因為它雖然短，還是要想。做完後，整疊功課沒有少很多，可是那一題旁邊多了你的字，空白少了一小塊。你把鉛筆放下時，心裡沒有很厲害的感覺，只是覺得原來可以先挑一個比較小的入口。假期功課沒有突然變好玩，但它也沒有一直完整地壓在你面前了。",
        "impactList": [
          "玩家用自己能接受的方式開始功課，家人沒有破壞這個入口。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_homework_delay_shortest_question",
          "small_entry_to_homework"
        ],
        "emotionalTags": [
          "tactical_start",
          "cautious_relief"
        ],
        "relationshipHints": [
          "玩家用自己能接受的方式開始功課，家人沒有破壞這個入口。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_homework_delay_shortest_question",
          "tactical_start",
          "cautious_relief",
          "玩家用自己能接受的方式開始功課，家人沒有破壞這個入口。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_homework_delay_shortest_question",
            "small_entry_to_homework"
          ],
          "emotionalTags": [
            "tactical_start",
            "cautious_relief"
          ],
          "relationshipHint": "玩家用自己能接受的方式開始功課，家人沒有破壞這個入口。",
          "systemUseOnly": true
        }
      },
      {
        "id": "clip_papers",
        "branchId": "clip_papers",
        "choiceId": "s2_w1_4_holiday_homework_in_family_life_player_delays_choice_3",
        "triggerStoryMemoryTags": [
          "s2_w1_4_holiday_homework_in_family_life_player_delays_choice_3",
          "s2_w1_homework_delay_clip_papers",
          "organized_not_finished"
        ],
        "title": "把紙夾好。",
        "branchTitle": "把紙夾好。",
        "playerLine": "我夾好先。",
        "fullStoryText": "你把功課紙一張張放齊，夾進文件夾裡。紙被夾住之後，看起來整齊了很多，像已經被你處理好一半。家人看著那個文件夾，說夾好是第一步，做完才是第二步。你假裝沒有聽到後半句，只把夾子壓得更緊一點。文件夾邊緣很硬，摸起來比散開的紙可靠。可是當你把它放到書包旁邊時，心裡又知道，整齊不是完成。它只是讓那件還沒完成的事，穿上比較乖的外衣。",
        "impactList": [
          "家人承認整理是第一步，但提醒仍需完成。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_homework_delay_clip_papers",
          "organized_not_finished"
        ],
        "emotionalTags": [
          "order_as_delay",
          "half_relief"
        ],
        "relationshipHints": [
          "家人承認整理是第一步，但提醒仍需完成。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_homework_delay_clip_papers",
          "order_as_delay",
          "half_relief",
          "家人承認整理是第一步，但提醒仍需完成。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_homework_delay_clip_papers",
            "organized_not_finished"
          ],
          "emotionalTags": [
            "order_as_delay",
            "half_relief"
          ],
          "relationshipHint": "家人承認整理是第一步，但提醒仍需完成。",
          "systemUseOnly": true
        }
      },
      {
        "id": "run_to_tv",
        "branchId": "run_to_tv",
        "choiceId": "s2_w1_4_holiday_homework_in_family_life_player_delays_choice_4",
        "triggerStoryMemoryTags": [
          "s2_w1_4_holiday_homework_in_family_life_player_delays_choice_4",
          "s2_w1_homework_delay_tv",
          "homework_waiting_while_tv"
        ],
        "title": "跑去看電視。",
        "branchTitle": "跑去看電視。",
        "playerLine": "我睇陣電視先。",
        "fullStoryText": "你說看一會兒電視，話還沒完全落地，人已經往客廳走。電視聲很快蓋過功課紙，畫面裡的人跑來跑去，比題目有趣很多。你坐在梳化上，手裡拿著遙控器，假裝桌上的紙不存在。可是廣告一播，音樂突然變大又突然停，你就想起那疊紙還在飯桌邊。它沒有追過來，卻像在看著你的背。你沒有馬上回去，只把腳縮上梳化。那一集卡通變得有點短，因為心裡有一角一直聽著飯桌那邊的安靜。",
        "impactList": [
          "玩家把功課推開，但未能完全把它從心裡移走。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_homework_delay_tv",
          "homework_waiting_while_tv"
        ],
        "emotionalTags": [
          "avoidance",
          "guilty_distraction"
        ],
        "relationshipHints": [
          "玩家把功課推開，但未能完全把它從心裡移走。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_homework_delay_tv",
          "avoidance",
          "guilty_distraction",
          "玩家把功課推開，但未能完全把它從心裡移走。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_homework_delay_tv",
            "homework_waiting_while_tv"
          ],
          "emotionalTags": [
            "avoidance",
            "guilty_distraction"
          ],
          "relationshipHint": "玩家把功課推開，但未能完全把它從心裡移走。",
          "systemUseOnly": true
        }
      }
    ],
    "mapping": {
      "source": "info/s2_w1_reviewStories_v0_2_full_story.md",
      "mappingMethod": "S2-W1 eventId/variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_s2_w1_4_holiday_homework_in_family_life_neighbor_mentions_homework",
    "eventId": "s2_w1_4_holiday_homework_in_family_life",
    "sourceEventId": "S2-W1-4",
    "variantId": "neighbor_mentions_homework",
    "sourceVariantId": "neighbor_mentions_homework",
    "title": "假期功課被放進家庭生活裡",
    "timeText": "S2-W1，聖誕假期第一天晚上至翌日平台",
    "placeText": "家裡飯桌、客廳、刷牙前的睡房／洗手間、屋苑平台",
    "role": "holiday_homework_enters_family_life",
    "variantTitle": "鄰居也提起功課",
    "sceneOpening": "聖誕假期的東西很多：電視、街上的燈、樓下遇到的新朋友、家裡比較慢的早餐。可是晚上收拾桌子時，假期功課又被拿出來。它不再像學校裡的功課簿，而是跟飯碗、玩具、牙刷泡泡和沙發上的外套放在同一個家裡。你還不太明白為甚麼放假也會有功課，只覺得那疊紙被放到飯桌上之後，晚飯後的椅子好像沒有剛才那麼舒服。",
    "variantOpening": "第二天在平台碰到 {neighborDisplayName}。對方提起功課的方式不一定像學校同學：可能是一句很快的「你做咗未」，可能只是把功課紙角露出來，也可能一邊收貼紙一邊說家人叫每日做一頁。你突然覺得功課不是只有你家裡才有。",
    "characters": [
      "{neighborDisplayName}"
    ],
    "branches": [
      {
        "id": "say_did_a_little",
        "branchId": "say_did_a_little",
        "choiceId": "s2_w1_4_holiday_homework_in_family_life_neighbor_mentions_homework_choice_1",
        "triggerStoryMemoryTags": [
          "s2_w1_4_holiday_homework_in_family_life_neighbor_mentions_homework_choice_1",
          "s2_w1_homework_neighbor_did_little",
          "shared_homework_outside_school"
        ],
        "title": "說做了一點。",
        "branchTitle": "說做了一點。",
        "playerLine": "做咗少少。",
        "fullStoryText": "你在平台上說自己做了一點。{neighborDisplayName}點點頭，沒有問你做了幾多，也沒有把自己的拿出來比。花槽旁邊有一片葉被風吹到鞋邊，你們站在那裡，好像忽然變成同一隊有功課的人。這不是班房，沒有老師收簿，沒有同學看誰先交，只是樓下平台上兩個小朋友都知道家裡有一疊紙。你說完「少少」之後，心裡沒有很驕傲，但也沒有那麼孤單。原來假期功課會跟著不同書包，住在不同單位裡。",
        "impactList": [
          "玩家與這位鄰居透過假期功課形成校外共同話題。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_homework_neighbor_did_little",
          "shared_homework_outside_school"
        ],
        "emotionalTags": [
          "less_alone",
          "small_common_ground"
        ],
        "relationshipHints": [
          "玩家與這位鄰居透過假期功課形成校外共同話題。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_homework_neighbor_did_little",
          "less_alone",
          "small_common_ground",
          "玩家與這位鄰居透過假期功課形成校外共同話題。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_homework_neighbor_did_little",
            "shared_homework_outside_school"
          ],
          "emotionalTags": [
            "less_alone",
            "small_common_ground"
          ],
          "relationshipHint": "玩家與這位鄰居透過假期功課形成校外共同話題。",
          "systemUseOnly": true
        }
      },
      {
        "id": "say_not_yet",
        "branchId": "say_not_yet",
        "choiceId": "s2_w1_4_holiday_homework_in_family_life_neighbor_mentions_homework_choice_2",
        "triggerStoryMemoryTags": [
          "s2_w1_4_holiday_homework_in_family_life_neighbor_mentions_homework_choice_2",
          "s2_w1_homework_neighbor_not_yet",
          "neighbor_also_almost_forgot"
        ],
        "title": "說還未。",
        "branchTitle": "說還未。",
        "playerLine": "未呀。",
        "fullStoryText": "你低聲說還未做。你本來以為{neighborDisplayName}會笑你，或是說自己早就做完了。可是對方只是看了看手裡的東西，小聲說昨天也差點忘記，然後繼續把貼紙或玩具收好。這句話很普通，卻像把你心裡那塊皺了的紙壓平了一點。平台上沒有紅筆，也沒有人叫名，只有風從花槽邊吹過。你還是沒有做完功課，可是「未」這個字忽然沒有剛才那麼可怕，因為它不是只有你一個人會說。",
        "impactList": [
          "這位鄰居以普通反應降低玩家對未完成的孤立感。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_homework_neighbor_not_yet",
          "neighbor_also_almost_forgot"
        ],
        "emotionalTags": [
          "relief_from_shared_imperfection",
          "lowered_shame"
        ],
        "relationshipHints": [
          "這位鄰居以普通反應降低玩家對未完成的孤立感。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_homework_neighbor_not_yet",
          "relief_from_shared_imperfection",
          "lowered_shame",
          "這位鄰居以普通反應降低玩家對未完成的孤立感。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_homework_neighbor_not_yet",
            "neighbor_also_almost_forgot"
          ],
          "emotionalTags": [
            "relief_from_shared_imperfection",
            "lowered_shame"
          ],
          "relationshipHint": "這位鄰居以普通反應降低玩家對未完成的孤立感。",
          "systemUseOnly": true
        }
      },
      {
        "id": "ask_if_hard",
        "branchId": "ask_if_hard",
        "choiceId": "s2_w1_4_holiday_homework_in_family_life_neighbor_mentions_homework_choice_3",
        "triggerStoryMemoryTags": [
          "s2_w1_4_holiday_homework_in_family_life_neighbor_mentions_homework_choice_3",
          "s2_w1_homework_neighbor_ask_hard",
          "many_words_homework"
        ],
        "title": "問對方難不難。",
        "branchTitle": "問對方難不難。",
        "playerLine": "你嗰啲難唔難？",
        "fullStoryText": "你問對方的功課難不難。{neighborDisplayName}想了一下，說有一頁很多字。你不知道對方學校的功課跟你的是不是一樣，也不知道那頁是不是真的比你的難，可是「很多字」三個字你聽得懂。它們像從對方書包裡跑出來，跑到你自己的功課紙上。你們沒有討論答案，也沒有交換功課，只是站在平台邊說了幾句。那一刻，功課不再只是老師和家人的事情，它也可以在花槽、長椅和玩具旁邊被提起。",
        "impactList": [
          "玩家意識到校外同齡人也有自己的學校壓力。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_homework_neighbor_ask_hard",
          "many_words_homework"
        ],
        "emotionalTags": [
          "curiosity_about_other_school",
          "shared_difficulty"
        ],
        "relationshipHints": [
          "玩家意識到校外同齡人也有自己的學校壓力。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_homework_neighbor_ask_hard",
          "curiosity_about_other_school",
          "shared_difficulty",
          "玩家意識到校外同齡人也有自己的學校壓力。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_homework_neighbor_ask_hard",
            "many_words_homework"
          ],
          "emotionalTags": [
            "curiosity_about_other_school",
            "shared_difficulty"
          ],
          "relationshipHint": "玩家意識到校外同齡人也有自己的學校壓力。",
          "systemUseOnly": true
        }
      },
      {
        "id": "change_to_toy",
        "branchId": "change_to_toy",
        "choiceId": "s2_w1_4_holiday_homework_in_family_life_neighbor_mentions_homework_choice_4",
        "triggerStoryMemoryTags": [
          "s2_w1_4_holiday_homework_in_family_life_neighbor_mentions_homework_choice_4",
          "s2_w1_homework_neighbor_change_to_toy",
          "toy_pushes_homework_away"
        ],
        "title": "轉去講玩具。",
        "branchTitle": "轉去講玩具。",
        "playerLine": "你今日有冇帶車？",
        "fullStoryText": "你不想再講功課，就問對方今天有沒有帶車。{neighborDisplayName}立刻從口袋裡摸出小車，話題像被車輪推走了一段。你看著車子在平台長椅上滑過去，心裡鬆了一下。可是功課沒有真的消失，它只是暫時退到花槽後面，像等你玩完再出來。你們開始講車、貼紙或卡通，聲音比剛才輕快，可你仍然記得剛剛那句「你做咗未」。假期裡，玩具和功課原來可以站得很近，只要轉一個問題，就會看見另一邊。",
        "impactList": [
          "玩家用玩具話題維持鄰居互動，同時避開功課壓力。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_homework_neighbor_change_to_toy",
          "toy_pushes_homework_away"
        ],
        "emotionalTags": [
          "avoidance_with_play",
          "temporary_relief"
        ],
        "relationshipHints": [
          "玩家用玩具話題維持鄰居互動，同時避開功課壓力。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_homework_neighbor_change_to_toy",
          "avoidance_with_play",
          "temporary_relief",
          "玩家用玩具話題維持鄰居互動，同時避開功課壓力。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_homework_neighbor_change_to_toy",
            "toy_pushes_homework_away"
          ],
          "emotionalTags": [
            "avoidance_with_play",
            "temporary_relief"
          ],
          "relationshipHint": "玩家用玩具話題維持鄰居互動，同時避開功課壓力。",
          "systemUseOnly": true
        }
      }
    ],
    "mapping": {
      "source": "info/s2_w1_reviewStories_v0_2_full_story.md",
      "mappingMethod": "S2-W1 eventId/variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_s2_w1_4_holiday_homework_in_family_life_remembers_at_night",
    "eventId": "s2_w1_4_holiday_homework_in_family_life",
    "sourceEventId": "S2-W1-4",
    "variantId": "remembers_at_night",
    "sourceVariantId": "remembered_at_night",
    "title": "假期功課被放進家庭生活裡",
    "timeText": "S2-W1，聖誕假期第一天晚上至翌日平台",
    "placeText": "家裡飯桌、客廳、刷牙前的睡房／洗手間、屋苑平台",
    "role": "holiday_homework_enters_family_life",
    "variantTitle": "晚上才想起",
    "sceneOpening": "聖誕假期的東西很多：電視、街上的燈、樓下遇到的新朋友、家裡比較慢的早餐。可是晚上收拾桌子時，假期功課又被拿出來。它不再像學校裡的功課簿，而是跟飯碗、玩具、牙刷泡泡和沙發上的外套放在同一個家裡。你還不太明白為甚麼放假也會有功課，只覺得那疊紙被放到飯桌上之後，晚飯後的椅子好像沒有剛才那麼舒服。",
    "variantOpening": "晚上刷牙前，你忽然想起今天完全沒有打開功課。牙刷還在嘴裡，你看見書包靠在椅邊，心裡突然跳了一下。",
    "characters": [],
    "branches": [
      {
        "id": "tell_family_now",
        "branchId": "tell_family_now",
        "choiceId": "s2_w1_4_holiday_homework_in_family_life_remembers_at_night_choice_1",
        "triggerStoryMemoryTags": [
          "s2_w1_4_holiday_homework_in_family_life_remembers_at_night_choice_1",
          "s2_w1_homework_night_tell_family",
          "admitted_unfinished_homework"
        ],
        "title": "立刻告訴家人。",
        "branchTitle": "立刻告訴家人。",
        "playerLine": "我今日未做功課。",
        "fullStoryText": "你嘴裡還有牙膏泡泡，就走到門邊說今天未做功課。家人嘆了一口氣，先叫你把嘴漱乾淨，沒有立刻叫你坐到桌前做到很夜。水聲嘩啦嘩啦，把你的心跳蓋住一點。等你擦乾嘴，家人才說明天早上補一點。你點頭時，還看見書包靠在椅邊，像剛剛被你告發了一樣。那天晚上，你沒有把功課做完，但你記得自己說出口之後，房間裡的空氣沒有塌下來，只是多了一個明早要面對的小鬧鐘。",
        "impactList": [
          "家人接住玩家的坦白，將壓力移到可處理的明早。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_homework_night_tell_family",
          "admitted_unfinished_homework"
        ],
        "emotionalTags": [
          "nervous_honesty",
          "manageable_tomorrow"
        ],
        "relationshipHints": [
          "家人接住玩家的坦白，將壓力移到可處理的明早。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_homework_night_tell_family",
          "nervous_honesty",
          "manageable_tomorrow",
          "家人接住玩家的坦白，將壓力移到可處理的明早。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_homework_night_tell_family",
            "admitted_unfinished_homework"
          ],
          "emotionalTags": [
            "nervous_honesty",
            "manageable_tomorrow"
          ],
          "relationshipHint": "家人接住玩家的坦白，將壓力移到可處理的明早。",
          "systemUseOnly": true
        }
      },
      {
        "id": "pretend_not_remember",
        "branchId": "pretend_not_remember",
        "choiceId": "s2_w1_4_holiday_homework_in_family_life_remembers_at_night_choice_2",
        "triggerStoryMemoryTags": [
          "s2_w1_4_holiday_homework_in_family_life_remembers_at_night_choice_2",
          "s2_w1_homework_night_pretend",
          "homework_in_bag_at_night"
        ],
        "title": "假裝沒想起。",
        "branchTitle": "假裝沒想起。",
        "playerLine": "……",
        "fullStoryText": "你看見書包時，心裡跳了一下，但沒有說。你把牙刷放回嘴裡，刷出很多泡泡，像泡泡多一點，心裡那句「未做功課」就會被蓋住。家人在外面收杯子，沒有發現你忽然安靜。你躺上床後，房間燈關了，書包在椅邊只剩下一個黑黑的形狀。可是你知道那疊紙在裡面，像晚上也會翻身。你沒有真的忘記，只是把它推到明天。那一晚，假期的被子很暖，心裡卻有一個角沒有躺好。",
        "impactList": [
          "玩家選擇不說出壓力，未形成家庭支援但留下內在記憶。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_homework_night_pretend",
          "homework_in_bag_at_night"
        ],
        "emotionalTags": [
          "avoidance",
          "quiet_worry"
        ],
        "relationshipHints": [
          "玩家選擇不說出壓力，未形成家庭支援但留下內在記憶。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_homework_night_pretend",
          "avoidance",
          "quiet_worry",
          "玩家選擇不說出壓力，未形成家庭支援但留下內在記憶。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_homework_night_pretend",
            "homework_in_bag_at_night"
          ],
          "emotionalTags": [
            "avoidance",
            "quiet_worry"
          ],
          "relationshipHint": "玩家選擇不說出壓力，未形成家庭支援但留下內在記憶。",
          "systemUseOnly": true
        }
      },
      {
        "id": "take_one_page",
        "branchId": "take_one_page",
        "choiceId": "s2_w1_4_holiday_homework_in_family_life_remembers_at_night_choice_3",
        "triggerStoryMemoryTags": [
          "s2_w1_4_holiday_homework_in_family_life_remembers_at_night_choice_3",
          "s2_w1_homework_night_look_one_page",
          "found_homework_location"
        ],
        "title": "拿出一頁看。",
        "branchTitle": "拿出一頁看。",
        "playerLine": "我睇一眼先。",
        "fullStoryText": "你把牙刷放好後，走到書包旁邊，拉開拉鍊，只拿出最上面一頁。你沒有真的坐下來做，只把題目看了一眼。紙在晚上看起來比早上白，桌燈照到格子上，像每一格都在等字進去。你看完，又把它放回去，夾得比剛才整齊一點。這件事小到幾乎不算做功課，可是你知道明天不用再從整個書包裡找。你睡前還是有點緊，但至少那頁紙的位置被你記住了。",
        "impactList": [
          "玩家用很小的行動降低明日慌亂。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_homework_night_look_one_page",
          "found_homework_location"
        ],
        "emotionalTags": [
          "partial_control",
          "quiet_preparation"
        ],
        "relationshipHints": [
          "玩家用很小的行動降低明日慌亂。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_homework_night_look_one_page",
          "partial_control",
          "quiet_preparation",
          "玩家用很小的行動降低明日慌亂。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_homework_night_look_one_page",
            "found_homework_location"
          ],
          "emotionalTags": [
            "partial_control",
            "quiet_preparation"
          ],
          "relationshipHint": "玩家用很小的行動降低明日慌亂。",
          "systemUseOnly": true
        }
      },
      {
        "id": "ask_morning_possible",
        "branchId": "ask_morning_possible",
        "choiceId": "s2_w1_4_holiday_homework_in_family_life_remembers_at_night_choice_4",
        "triggerStoryMemoryTags": [
          "s2_w1_4_holiday_homework_in_family_life_remembers_at_night_choice_4",
          "s2_w1_homework_night_morning_plan",
          "morning_homework_alarm"
        ],
        "title": "問明天早上可不可以做。",
        "branchTitle": "問明天早上可不可以做。",
        "playerLine": "聽朝做得唔得？",
        "fullStoryText": "你拿著牙刷杯，問明天早上可不可以做。家人看了看鐘，說可以，但要真的起來。你點頭，心裡卻想起今天早上可以慢慢醒來的感覺。明天早上好像不會一樣了，因為有一頁功課先排在那裡等你。你把杯子放回洗手盆旁邊，水滴沿著杯邊滑下去。假期還在，可是它不像第一天早上那麼鬆了。你躺上床時，第一次覺得假期也可能需要一個小鬧鐘，不是為了返學，而是為了追上自己說過的話。",
        "impactList": [
          "家人讓玩家延後，但將延後轉成明確承諾。"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w1_homework_night_morning_plan",
          "morning_homework_alarm"
        ],
        "emotionalTags": [
          "planning_with_pressure",
          "promise_to_self"
        ],
        "relationshipHints": [
          "家人讓玩家延後，但將延後轉成明確承諾。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w1_homework_night_morning_plan",
          "planning_with_pressure",
          "promise_to_self",
          "家人讓玩家延後，但將延後轉成明確承諾。"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w1_homework_night_morning_plan",
            "morning_homework_alarm"
          ],
          "emotionalTags": [
            "planning_with_pressure",
            "promise_to_self"
          ],
          "relationshipHint": "家人讓玩家延後，但將延後轉成明確承諾。",
          "systemUseOnly": true
        }
      }
    ],
    "mapping": {
      "source": "info/s2_w1_reviewStories_v0_2_full_story.md",
      "mappingMethod": "S2-W1 eventId/variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  }
];
