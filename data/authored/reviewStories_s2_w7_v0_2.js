// data/authored/reviewStories_s2_w7_v0_2.js
// Generated structural data from info/s2_w7_reviewStories_v0_2_full_story.md.
// Authored source of truth: keep fullStory wording aligned with the markdown.

export const S2_W7_REVIEW_STORY_AUTHORING_RULES = {
  "version": "s2_w7_reviewStories_v0_2_full_story",
  "purpose": "S2-W7 六週人生片段回顧 full story；即時事件仍使用 opening event resultText。",
  "sourceMarkdown": "info/s2_w7_reviewStories_v0_2_full_story.md",
  "cleanupNotes": [
    "只包含 S2-W7-25、S2-W7-26、S2-W7-27。",
    "variantId / memoryTags 統一使用 ka_long、wing_sum、tsz_hin、pak_yu internal id。",
    "hiddenImpact 與玩家可見 fullStory 分離，不直接顯示。",
    "S2-W7-25 只記錄班際活動入口，不包含 competition result。"
  ],
  "fallbackOrder": [
    "eventId+variantId+branchId",
    "eventId+variantId",
    "eventId",
    "S2-W7 default",
    "final safe fallback"
  ],
  "expectedCounts": {
    "events": 3,
    "variants": 12,
    "branches": 48
  }
};

export const S2_W7_DEFAULT_REVIEW_STORY = {
  "id": "review_s2_w7_default_safe_fallback",
  "title": "復活節假期前的班房片段",
  "sceneHeading": "S2-W7・小一班房",
  "charactersInvolved": [],
  "narration": [
    "復活節假期前，班房裡有通告、手冊、工作紙，也有慢慢變熱的空氣。那幾天不一定每件事都很大，但有些小動作留了下來：有人靠近通告，有人數假期，有人把紙壓平，有人望向窗外。你不一定記得每一句話，卻記得自己在那些聲音中站過一下。"
  ],
  "dialogueLines": [],
  "result": "這件 S2-W7 的小事被記了下來，成為這六週裡其中一個清楚的片段。",
  "effects": []
};

export const openingS2W7ReviewStoryGroups = [
  {
    "id": "review_s2_w7_25_competition_entry_ka_long_tsz_hin_try_vs_win",
    "eventId": "s2_w7_25_competition_entry",
    "sourceEventId": "S2-W7-25",
    "variantId": "ka_long_tsz_hin_try_vs_win",
    "sourceVariantId": "ka_long_tsz_hin_try_vs_win",
    "eventVariantId": "kalong_tszhin_try_vs_win",
    "matchVariantIds": [
      "ka_long_tsz_hin_try_vs_win",
      "kalong_tszhin_try_vs_win"
    ],
    "title": "班際活動報名／提名／分組",
    "timeText": "S2-W7，四月上旬，復活節假期前的班主任課或小息前後",
    "placeText": "小一班房，黑板旁通告、課桌之間、報名表附近",
    "role": "class_competition_entry_review",
    "variantTitle": "家朗 + 梓軒｜一起試與想贏的拉扯",
    "sceneOpening": "復活節假期前，班房本來已經有點浮。風扇慢慢轉，黑板邊還貼著未收走的舊通告，班主任把一張新的「班際活動」紙貼上去時，幾個同學立刻靠近。你還沒有看清楚是壁報、問答、朗誦還是接力，就先聽到紙邊被按住的聲音、有人問會不會有獎、有人說不要站太前。那張通告不只是通知，它像忽然把幾張熟悉的課桌拉近了一點。",
    "variantOpening": "家朗指著通告最上面：「班際喎，不如我哋試吓！」梓軒立刻湊過來，看了看「每班小組」幾個字：「試都要試得好啲，唔係報嚟做咩？」家朗的手還貼在通告邊，梓軒已經開始數要幾多人。你站在他們旁邊，突然覺得這張紙比普通通告熱鬧很多。",
    "participants": [
      "ka_long",
      "tsz_hin"
    ],
    "characters": [
      "ka_long",
      "tsz_hin"
    ],
    "branches": [
      {
        "id": "ask_what_to_do",
        "branchId": "ask_what_to_do",
        "title": "問要做咩",
        "branchTitle": "問要做咩",
        "playerLine": "「要做啲咩㗎？」",
        "playerButton": "問要做咩",
        "fullStoryText": "你把頭湊近通告，問到底要做甚麼。家朗的手指從壁報、朗誦一路滑到接力，像每一格都可以立刻變成一件好玩的事；梓軒卻把他的手指按住，叫他先看清楚每班要幾多人。紙被兩個人的手指按得有點皺，你夾在中間，看著黑字一行一行浮出來。你沒有答應，也沒有拒絕，只是第一次發現「班際」不是老師貼完就算的一張紙，它會讓家朗想拉人一起試，也會讓梓軒先想到不能亂來。那一刻，你已經被拉進他們中間，連不說話都像在聽一個小組慢慢成形。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_competition_entry_ka_long_tsz_hin_ask_task",
          "class_competition_notice_seen",
          "peer_triangle_ka_long_tsz_hin_player"
        ],
        "emotionalTags": [
          "curious",
          "pulled_into_group",
          "first_competition_stir"
        ],
        "relationshipHints": [
          "玩家站在家朗的「一起試」和梓軒的「先看清楚」之間，形成第一次班際活動三人記憶。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_competition_entry_ka_long_tsz_hin_ask_task",
          "class_competition_notice_seen",
          "peer_triangle_ka_long_tsz_hin_player",
          "curious",
          "pulled_into_group",
          "first_competition_stir"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_competition_entry_ka_long_tsz_hin_ask_task",
            "class_competition_notice_seen",
            "peer_triangle_ka_long_tsz_hin_player"
          ],
          "emotionalTags": [
            "curious",
            "pulled_into_group",
            "first_competition_stir"
          ],
          "relationshipHint": "玩家站在家朗的「一起試」和梓軒的「先看清楚」之間，形成第一次班際活動三人記憶。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_25_kalong_tszhin_try_vs_win_ask_what_to_do",
        "matchBranchIds": [
          "ask_what_to_do",
          "s2_w7_25_kalong_tszhin_try_vs_win_ask_what_to_do"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_competition_entry_ka_long_tsz_hin_ask_task",
          "class_competition_notice_seen",
          "peer_triangle_ka_long_tsz_hin_player",
          "ask_what_to_do"
        ]
      },
      {
        "id": "say_can_try",
        "branchId": "say_can_try",
        "title": "說可以試",
        "branchTitle": "說可以試",
        "playerLine": "「可以試吓。」",
        "playerButton": "說可以試",
        "fullStoryText": "你說可以試吓，話剛出口，家朗就像聽到鐘聲一樣笑起來，立刻問你想試哪一格。梓軒沒有笑得那麼快，他低頭看報名表，問：「咁你寫字定畫，定答題？」你的「試吓」原本很輕，像只是把腳尖放到門邊，卻一下子被他們變成要選位置。家朗已經在想大家可以一起做甚麼，梓軒則把表格上的空位看得很清楚。你看著報名表上一個個小格，才知道參加不是只說一句就完，還要把自己放到其中一格裡。那格子有點小，但它第一次好像真的等著你。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_competition_entry_ka_long_tsz_hin_try",
          "player_opens_competition_participation",
          "role_question_started"
        ],
        "emotionalTags": [
          "tentative_joining",
          "mild_pressure",
          "group_energy"
        ],
        "relationshipHints": [
          "玩家被家朗的興奮接住，也被梓軒帶入實際分工，班際活動成為共同話題。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_competition_entry_ka_long_tsz_hin_try",
          "player_opens_competition_participation",
          "role_question_started",
          "tentative_joining",
          "mild_pressure",
          "group_energy"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_competition_entry_ka_long_tsz_hin_try",
            "player_opens_competition_participation",
            "role_question_started"
          ],
          "emotionalTags": [
            "tentative_joining",
            "mild_pressure",
            "group_energy"
          ],
          "relationshipHint": "玩家被家朗的興奮接住，也被梓軒帶入實際分工，班際活動成為共同話題。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_25_kalong_tszhin_try_vs_win_agree_to_try",
        "matchBranchIds": [
          "say_can_try",
          "s2_w7_25_kalong_tszhin_try_vs_win_agree_to_try"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_competition_entry_ka_long_tsz_hin_try",
          "player_opens_competition_participation",
          "role_question_started",
          "say_can_try"
        ]
      },
      {
        "id": "slow_down",
        "branchId": "slow_down",
        "title": "說先不要急",
        "branchTitle": "說先不要急",
        "playerLine": "「唔好咁快啦。」",
        "playerButton": "說先不要急",
        "fullStoryText": "你說不要那麼快，聲音不大，但兩個人都聽到了。梓軒先皺眉，說遲了可能沒有位，家朗本來還想再拉你去看另一欄，手卻停在通告邊，慢了一點。通告前面還有別的同學擠過來，紙角被風扇吹得一下一下動，你們三個沒有散開，只是從很近的地方退開半步。家朗抓抓頭，說也可以等老師講清楚；梓軒還在看名額，但沒有再催你立刻答。你突然發現，叫慢一點不是把事情推走，而是讓那張通告不要一下子壓到面前。班際活動還在，三個人也還在，只是中間多了一點可以呼吸的位置。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_competition_entry_ka_long_tsz_hin_slow_down",
          "player_sets_pace",
          "group_pressure_softened"
        ],
        "emotionalTags": [
          "cautious",
          "breathing_space",
          "not_ready_yet"
        ],
        "relationshipHints": [
          "玩家沒有否定家朗和梓軒，只是調慢小組節奏，讓三人互動保留空位。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_competition_entry_ka_long_tsz_hin_slow_down",
          "player_sets_pace",
          "group_pressure_softened",
          "cautious",
          "breathing_space",
          "not_ready_yet"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_competition_entry_ka_long_tsz_hin_slow_down",
            "player_sets_pace",
            "group_pressure_softened"
          ],
          "emotionalTags": [
            "cautious",
            "breathing_space",
            "not_ready_yet"
          ],
          "relationshipHint": "玩家沒有否定家朗和梓軒，只是調慢小組節奏，讓三人互動保留空位。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_25_kalong_tszhin_try_vs_win_slow_down",
        "matchBranchIds": [
          "slow_down",
          "s2_w7_25_kalong_tszhin_try_vs_win_slow_down"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_competition_entry_ka_long_tsz_hin_slow_down",
          "player_sets_pace",
          "group_pressure_softened",
          "slow_down"
        ]
      },
      {
        "id": "ask_must_win",
        "branchId": "ask_must_win",
        "title": "問是不是一定要贏",
        "branchTitle": "問是不是一定要贏",
        "playerLine": "「一定要贏先得㗎？」",
        "playerButton": "問是不是一定要贏",
        "fullStoryText": "你問是不是一定要贏，梓軒的手指停在「小組」兩個字上。他沒有立刻說當然，只是低聲說：「唔係一定，不過唔想輸得太樣衰。」家朗立刻補一句：「玩得好都得啦。」兩句話像兩張不同顏色的紙貼在同一張通告旁邊，一張寫著不要出醜，一張寫著一起試。你看著他們，突然覺得比賽不只是誰拿第一，也可能是誰怕被笑、誰想拉朋友一齊上去。通告前面很吵，但這一小段停頓很清楚。你沒有得到一個正確答案，只記得梓軒說話時沒有看你，家朗卻看了你一下，像想確認你還沒有走開。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_competition_entry_ka_long_tsz_hin_must_win",
          "competition_meaning_questioned",
          "tsz_hin_face_concern"
        ],
        "emotionalTags": [
          "thoughtful",
          "mixed_motivation",
          "competition_uncertainty"
        ],
        "relationshipHints": [
          "玩家讓家朗和梓軒的參與理由同時被說出來，三人對班際活動的理解變得更複雜。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_competition_entry_ka_long_tsz_hin_must_win",
          "competition_meaning_questioned",
          "tsz_hin_face_concern",
          "thoughtful",
          "mixed_motivation",
          "competition_uncertainty"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_competition_entry_ka_long_tsz_hin_must_win",
            "competition_meaning_questioned",
            "tsz_hin_face_concern"
          ],
          "emotionalTags": [
            "thoughtful",
            "mixed_motivation",
            "competition_uncertainty"
          ],
          "relationshipHint": "玩家讓家朗和梓軒的參與理由同時被說出來，三人對班際活動的理解變得更複雜。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_25_kalong_tszhin_try_vs_win_must_win",
        "matchBranchIds": [
          "ask_must_win",
          "s2_w7_25_kalong_tszhin_try_vs_win_must_win"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_competition_entry_ka_long_tsz_hin_must_win",
          "competition_meaning_questioned",
          "tsz_hin_face_concern",
          "ask_must_win"
        ]
      }
    ],
    "defaultBranchId": "ask_what_to_do"
  },
  {
    "id": "review_s2_w7_25_competition_entry_wing_sum_ka_long_invited_not_front",
    "eventId": "s2_w7_25_competition_entry",
    "sourceEventId": "S2-W7-25",
    "variantId": "wing_sum_ka_long_invited_not_front",
    "sourceVariantId": "wing_sum_ka_long_invited_not_front",
    "eventVariantId": "wingsam_kalong_not_too_front",
    "matchVariantIds": [
      "wing_sum_ka_long_invited_not_front",
      "wingsam_kalong_not_too_front"
    ],
    "title": "班際活動報名／提名／分組",
    "timeText": "S2-W7，四月上旬，復活節假期前的班主任課或小息前後",
    "placeText": "小一班房，黑板旁通告、課桌之間、報名表附近",
    "role": "class_competition_entry_review",
    "variantTitle": "穎心 + 家朗｜被邀請與不想太前",
    "sceneOpening": "復活節假期前，班房本來已經有點浮。風扇慢慢轉，黑板邊還貼著未收走的舊通告，班主任把一張新的「班際活動」紙貼上去時，幾個同學立刻靠近。你還沒有看清楚是壁報、問答、朗誦還是接力，就先聽到紙邊被按住的聲音、有人問會不會有獎、有人說不要站太前。那張通告不只是通知，它像忽然把幾張熟悉的課桌拉近了一點。",
    "variantOpening": "家朗拿著報名表跑回座位：「穎心，你字靚，可以寫啦！」穎心正在把鉛筆放直，聽見自己名字時手停了一下：「我唔想站最前。」家朗愣住，像沒想到「字靚」也可能讓人緊張。他轉頭看你：「咁你覺得點？」",
    "participants": [
      "wing_sum",
      "ka_long"
    ],
    "characters": [
      "wing_sum",
      "ka_long"
    ],
    "branches": [
      {
        "id": "can_work_from_back",
        "branchId": "can_work_from_back",
        "title": "說可以坐後面做",
        "branchTitle": "說可以坐後面做",
        "playerLine": "「可以唔使企前面。」",
        "playerButton": "說可以坐後面做",
        "fullStoryText": "你看著穎心手邊排得很直的鉛筆，說可以不用企前面。家朗本來把表格舉得有點高，聽到你這樣說，慢慢把紙放回桌面。穎心沒有立刻點頭，只把鉛筆盒往裡推了一點，看了看表格上「小組」那一欄。家朗問那她是不是可以抄字，聲音比剛才小一些。你才發現，原來參加不是只有站到最前和完全不去兩種，中間還有坐在後面、剪紙、抄字、按住紙角這些位置。穎心的手沒有再縮回抽屜，家朗也沒有再把表格推到她面前。那張報名表停在桌邊，像終於找到一個不那麼逼人的角度。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_competition_entry_wing_sum_ka_long_back_role",
          "role_can_be_quiet",
          "participation_position_split"
        ],
        "emotionalTags": [
          "gentle_support",
          "lowered_pressure",
          "small_opening"
        ],
        "relationshipHints": [
          "玩家幫穎心把參與拆成不必站前的位置，也讓家朗學會邀請可以慢一點。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_competition_entry_wing_sum_ka_long_back_role",
          "role_can_be_quiet",
          "participation_position_split",
          "gentle_support",
          "lowered_pressure",
          "small_opening"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_competition_entry_wing_sum_ka_long_back_role",
            "role_can_be_quiet",
            "participation_position_split"
          ],
          "emotionalTags": [
            "gentle_support",
            "lowered_pressure",
            "small_opening"
          ],
          "relationshipHint": "玩家幫穎心把參與拆成不必站前的位置，也讓家朗學會邀請可以慢一點。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_25_wingsam_kalong_not_too_front_can_sit_back",
        "matchBranchIds": [
          "can_work_from_back",
          "s2_w7_25_wingsam_kalong_not_too_front_can_sit_back"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_competition_entry_wing_sum_ka_long_back_role",
          "role_can_be_quiet",
          "participation_position_split",
          "can_work_from_back"
        ]
      },
      {
        "id": "ask_wing_sum_preference",
        "branchId": "ask_wing_sum_preference",
        "title": "問穎心想做咩",
        "branchTitle": "問穎心想做咩",
        "playerLine": "「你想做邊樣？」",
        "playerButton": "問穎心想做咩",
        "fullStoryText": "你沒有先替穎心答，而是問她想做哪一樣。課室裡有人還在通告前面吵，家朗握著報名表等答案，穎心低頭看自己剛剛放直的鉛筆，很久才說可以剪紙或者抄字。她說得很細聲，細到家朗差點要靠近才聽到。家朗馬上說：「得呀，剪紙都要人。」那句話說得太快，但至少沒有再叫她站最前。你看見穎心把桌角那張草稿紙拉出來，像先在心裡試了一下剪紙的位置。這一小段沒有很熱鬧，卻讓你記住問一句「你想做邊樣」有時比直接拉人報名更重要。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_competition_entry_wing_sum_ka_long_ask_preference",
          "wing_sum_names_role",
          "ka_long_accepts_quiet_role"
        ],
        "emotionalTags": [
          "patient_question",
          "quiet_answer",
          "careful_joining"
        ],
        "relationshipHints": [
          "玩家讓穎心自己說出能接受的位置，家朗的邀請被調整成真正能接住人的方式。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_competition_entry_wing_sum_ka_long_ask_preference",
          "wing_sum_names_role",
          "ka_long_accepts_quiet_role",
          "patient_question",
          "quiet_answer",
          "careful_joining"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_competition_entry_wing_sum_ka_long_ask_preference",
            "wing_sum_names_role",
            "ka_long_accepts_quiet_role"
          ],
          "emotionalTags": [
            "patient_question",
            "quiet_answer",
            "careful_joining"
          ],
          "relationshipHint": "玩家讓穎心自己說出能接受的位置，家朗的邀請被調整成真正能接住人的方式。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_25_wingsam_kalong_not_too_front_ask_what_she_wants",
        "matchBranchIds": [
          "ask_wing_sum_preference",
          "s2_w7_25_wingsam_kalong_not_too_front_ask_what_she_wants"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_competition_entry_wing_sum_ka_long_ask_preference",
          "wing_sum_names_role",
          "ka_long_accepts_quiet_role",
          "ask_wing_sum_preference"
        ]
      },
      {
        "id": "tell_ka_long_slow_down",
        "branchId": "tell_ka_long_slow_down",
        "title": "叫家朗慢啲",
        "branchTitle": "叫家朗慢啲",
        "playerLine": "「你講慢啲啦。」",
        "playerButton": "叫家朗慢啲",
        "fullStoryText": "你叫家朗講慢一點。家朗一開始像被按住了腳步，眨了眨眼，然後把報名表反過來看了一次，重新說：「即係……你可以寫字，唔一定上台。」這次他沒有一口氣把所有事塞到穎心面前，只把表格放在桌角，手指沒有壓住名字欄。穎心的肩膀沒有完全放鬆，但她終於看向那張紙。你站在桌旁，聽見風扇聲和後面同學的笑聲，覺得班房裡的快慢原來可以差很多。家朗還是想大家一起參加，只是他那句「一齊啦」被你攔了一下，變得沒有那麼像衝過來的球。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_competition_entry_wing_sum_ka_long_slow_invite",
          "ka_long_invitation_softened",
          "wing_sum_not_pushed"
        ],
        "emotionalTags": [
          "protective",
          "pacing",
          "reduced_noise"
        ],
        "relationshipHints": [
          "玩家用不羞辱的方式提醒家朗放慢邀請，穎心有更多空間考慮。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_competition_entry_wing_sum_ka_long_slow_invite",
          "ka_long_invitation_softened",
          "wing_sum_not_pushed",
          "protective",
          "pacing",
          "reduced_noise"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_competition_entry_wing_sum_ka_long_slow_invite",
            "ka_long_invitation_softened",
            "wing_sum_not_pushed"
          ],
          "emotionalTags": [
            "protective",
            "pacing",
            "reduced_noise"
          ],
          "relationshipHint": "玩家用不羞辱的方式提醒家朗放慢邀請，穎心有更多空間考慮。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_25_wingsam_kalong_not_too_front_tell_kalong_slow_down",
        "matchBranchIds": [
          "tell_ka_long_slow_down",
          "s2_w7_25_wingsam_kalong_not_too_front_tell_kalong_slow_down"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_competition_entry_wing_sum_ka_long_slow_invite",
          "ka_long_invitation_softened",
          "wing_sum_not_pushed",
          "tell_ka_long_slow_down"
        ]
      },
      {
        "id": "not_ready_to_answer",
        "branchId": "not_ready_to_answer",
        "title": "自己先不答應",
        "branchTitle": "自己先不答應",
        "playerLine": "「我未諗好。」",
        "playerButton": "自己先不答應",
        "fullStoryText": "你說自己還未想好，家朗的嘴角一下子收住，像原本準備把你也寫進表格裡。穎心卻低頭把鉛筆又排直了一次，那個動作很小，但你覺得她像也跟著有了幾秒空位。報名表放在三個人中間，沒有誰立刻拿起筆。家朗問是不是等下再看，聲音裡還有急，但沒有再追著問。你不是不想參加，也不是想讓大家散開，只是覺得這張紙來得太快，要先把它放到眼前看清楚。那一刻，你和穎心都沒有被推到最前，家朗也沒有真的走開。班際活動就這樣停在桌上，像一個還沒有剪開的信封。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_competition_entry_wing_sum_ka_long_player_not_ready",
          "shared_pause",
          "invitation_not_forced"
        ],
        "emotionalTags": [
          "hesitation",
          "pause",
          "gentle_distance"
        ],
        "relationshipHints": [
          "玩家保留自己的節奏，也讓穎心不被立即推進報名；家朗仍留在討論裡。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_competition_entry_wing_sum_ka_long_player_not_ready",
          "shared_pause",
          "invitation_not_forced",
          "hesitation",
          "pause",
          "gentle_distance"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_competition_entry_wing_sum_ka_long_player_not_ready",
            "shared_pause",
            "invitation_not_forced"
          ],
          "emotionalTags": [
            "hesitation",
            "pause",
            "gentle_distance"
          ],
          "relationshipHint": "玩家保留自己的節奏，也讓穎心不被立即推進報名；家朗仍留在討論裡。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_25_wingsam_kalong_not_too_front_not_decided",
        "matchBranchIds": [
          "not_ready_to_answer",
          "s2_w7_25_wingsam_kalong_not_too_front_not_decided"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_competition_entry_wing_sum_ka_long_player_not_ready",
          "shared_pause",
          "invitation_not_forced",
          "not_ready_to_answer"
        ]
      }
    ],
    "defaultBranchId": "can_work_from_back"
  },
  {
    "id": "review_s2_w7_25_competition_entry_pak_yu_wing_sum_hidden_corner",
    "eventId": "s2_w7_25_competition_entry",
    "sourceEventId": "S2-W7-25",
    "variantId": "pak_yu_wing_sum_hidden_corner",
    "sourceVariantId": "pak_yu_wing_sum_hidden_corner",
    "eventVariantId": "pakyu_wingsam_poster_corner",
    "matchVariantIds": [
      "pak_yu_wing_sum_hidden_corner",
      "pakyu_wingsam_poster_corner"
    ],
    "title": "班際活動報名／提名／分組",
    "timeText": "S2-W7，四月上旬，復活節假期前的班主任課或小息前後",
    "placeText": "小一班房，黑板旁通告、課桌之間、報名表附近",
    "role": "class_competition_entry_review",
    "variantTitle": "柏宇 + 穎心｜壁報角落的小圖案",
    "sceneOpening": "復活節假期前，班房本來已經有點浮。風扇慢慢轉，黑板邊還貼著未收走的舊通告，班主任把一張新的「班際活動」紙貼上去時，幾個同學立刻靠近。你還沒有看清楚是壁報、問答、朗誦還是接力，就先聽到紙邊被按住的聲音、有人問會不會有獎、有人說不要站太前。那張通告不只是通知，它像忽然把幾張熟悉的課桌拉近了一點。",
    "variantOpening": "柏宇看著壁報類的那一欄，眼睛亮了一下：「如果畫個秘密角落，啲人要近睇先見到。」穎心立刻看向老師的方向：「太亂會唔會唔得？」柏宇把手縮回來，又用鉛筆在空氣中畫了一個很小的圈。你站在旁邊，看見他們兩個都看著同一張紙，但想像的位置完全不同。",
    "participants": [
      "pak_yu",
      "wing_sum"
    ],
    "characters": [
      "pak_yu",
      "wing_sum"
    ],
    "branches": [
      {
        "id": "draw_smaller",
        "branchId": "draw_smaller",
        "title": "說可以畫細啲",
        "branchTitle": "說可以畫細啲",
        "playerLine": "「畫細細個得唔得？」",
        "playerButton": "說可以畫細啲",
        "fullStoryText": "你說可以畫細一點，柏宇的眼睛立刻又亮回來，鉛筆尖在紙角旁邊繞了一個很小的圈。穎心沒有馬上說好，只先把通告上的標題位置指給你們看，說不要擋住字。於是那個秘密圖案從柏宇嘴裡的大怪東西，慢慢縮成紙角裡一個小小的符號。你看著他把想像縮小，穎心把字位留出來，才發現兩個人的要求不是一定會撞在一起。風扇吹得紙邊微微翹起，你用手按住一角，像先替那張還不存在的壁報留下一個安全的位置。秘密沒有消失，只是學會不要把整張紙吃掉。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_competition_entry_pak_yu_wing_sum_small_hidden_drawing",
          "imagination_made_tidy",
          "wall_poster_corner_memory"
        ],
        "emotionalTags": [
          "playful_compromise",
          "careful_creativity"
        ],
        "relationshipHints": [
          "玩家把柏宇的怪想法和穎心的整齊顧慮放在同一張紙上，形成合作可能。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_competition_entry_pak_yu_wing_sum_small_hidden_drawing",
          "imagination_made_tidy",
          "wall_poster_corner_memory",
          "playful_compromise",
          "careful_creativity"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_competition_entry_pak_yu_wing_sum_small_hidden_drawing",
            "imagination_made_tidy",
            "wall_poster_corner_memory"
          ],
          "emotionalTags": [
            "playful_compromise",
            "careful_creativity"
          ],
          "relationshipHint": "玩家把柏宇的怪想法和穎心的整齊顧慮放在同一張紙上，形成合作可能。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_25_pakyu_wingsam_poster_corner_can_be_small",
        "matchBranchIds": [
          "draw_smaller",
          "s2_w7_25_pakyu_wingsam_poster_corner_can_be_small"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_competition_entry_pak_yu_wing_sum_small_hidden_drawing",
          "imagination_made_tidy",
          "wall_poster_corner_memory",
          "draw_smaller"
        ]
      },
      {
        "id": "ask_teacher_first",
        "branchId": "ask_teacher_first",
        "title": "問老師可不可以",
        "branchTitle": "問老師可不可以",
        "playerLine": "「問老師先啦。」",
        "playerButton": "問老師可不可以",
        "fullStoryText": "你提議先問老師。柏宇的臉有一點垮下來，像秘密一拿去問就不再秘密了；穎心卻把紙邊按住，輕輕點頭。你們三個走到講台旁，柏宇一路把聲音壓低，說如果老師不准就沒有神秘感。老師聽完，只說整齊、不擋字就可以。穎心聽到「整齊」時才把手放鬆一點，柏宇則馬上小聲說那就畫得很像普通裝飾。你沒有替任何一邊贏，只是把一個可能會吵起來的角落先拿去照一照光。回到座位時，柏宇還是想藏東西，穎心也還是想排好字，但他們沒有散開。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_competition_entry_pak_yu_wing_sum_ask_teacher",
          "teacher_boundary_for_creativity",
          "tidy_secret_allowed"
        ],
        "emotionalTags": [
          "cautious_permission",
          "small_disappointment",
          "relief"
        ],
        "relationshipHints": [
          "玩家選擇確認界線，讓柏宇的想像和穎心的安全感都有留下來的空間。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_competition_entry_pak_yu_wing_sum_ask_teacher",
          "teacher_boundary_for_creativity",
          "tidy_secret_allowed",
          "cautious_permission",
          "small_disappointment",
          "relief"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_competition_entry_pak_yu_wing_sum_ask_teacher",
            "teacher_boundary_for_creativity",
            "tidy_secret_allowed"
          ],
          "emotionalTags": [
            "cautious_permission",
            "small_disappointment",
            "relief"
          ],
          "relationshipHint": "玩家選擇確認界線，讓柏宇的想像和穎心的安全感都有留下來的空間。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_25_pakyu_wingsam_poster_corner_ask_teacher",
        "matchBranchIds": [
          "ask_teacher_first",
          "s2_w7_25_pakyu_wingsam_poster_corner_ask_teacher"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_competition_entry_pak_yu_wing_sum_ask_teacher",
          "teacher_boundary_for_creativity",
          "tidy_secret_allowed",
          "ask_teacher_first"
        ]
      },
      {
        "id": "help_word_space",
        "branchId": "help_word_space",
        "title": "幫穎心看字位",
        "branchTitle": "幫穎心看字位",
        "playerLine": "「字放呢邊先啦。」",
        "playerButton": "幫穎心看字位",
        "fullStoryText": "你先指著紙中央，說字可以放這邊。穎心立刻把紙邊按住，手指在標題下面停了一下，像在心裡排隊；柏宇在旁邊等，鉛筆一直轉，轉得有點急。你沒有叫柏宇不要畫，只是先把最大、最需要看清楚的字位留出來。等穎心點頭後，柏宇才把鉛筆尖移到角落，小聲說秘密可以躲在這裡。那張紙還是空的，可是你已經看見它被分成幾個地方：標題、字、邊框，還有一個不太會吵到人的小角。這不是誰贏誰輸，只是讓整張紙先有位置，然後才讓奇怪的東西住進去。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_competition_entry_pak_yu_wing_sum_word_space_first",
          "layout_before_secret",
          "player_mediates_poster_roles"
        ],
        "emotionalTags": [
          "practical_help",
          "quiet_coordination"
        ],
        "relationshipHints": [
          "玩家先照顧穎心在意的字位，再保留柏宇的角落想像，推進三人的壁報合作。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_competition_entry_pak_yu_wing_sum_word_space_first",
          "layout_before_secret",
          "player_mediates_poster_roles",
          "practical_help",
          "quiet_coordination"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_competition_entry_pak_yu_wing_sum_word_space_first",
            "layout_before_secret",
            "player_mediates_poster_roles"
          ],
          "emotionalTags": [
            "practical_help",
            "quiet_coordination"
          ],
          "relationshipHint": "玩家先照顧穎心在意的字位，再保留柏宇的角落想像，推進三人的壁報合作。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_25_pakyu_wingsam_poster_corner_help_text_position",
        "matchBranchIds": [
          "help_word_space",
          "s2_w7_25_pakyu_wingsam_poster_corner_help_text_position"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_competition_entry_pak_yu_wing_sum_word_space_first",
          "layout_before_secret",
          "player_mediates_poster_roles",
          "help_word_space"
        ]
      },
      {
        "id": "just_listen",
        "branchId": "just_listen",
        "title": "只聽他們講",
        "branchTitle": "只聽他們講",
        "playerLine": "「……」",
        "playerButton": "只聽他們講",
        "fullStoryText": "你沒有插話，只站在旁邊聽。柏宇的聲音越講越小，從「秘密角落」變成「近看才見到一點點」；穎心一直看著紙邊，手指按在可能放標題的位置。兩個人沒有真的吵，但他們看同一張紙時，眼睛停的地方完全不同。你聽見後面同學喊有人報名，又聽見風扇把通告吹得啪啪響。你沒有加入，卻記住了這種感覺：一張壁報還沒有開始做，已經有人想把它變成故事，也有人怕它變亂。那天你只是旁觀，但後來想起班際活動時，紙角那個還沒畫出來的小圖案總會先浮出來。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_competition_entry_pak_yu_wing_sum_observe",
          "poster_tension_observed",
          "imagination_and_order"
        ],
        "emotionalTags": [
          "watchful",
          "thoughtful_distance"
        ],
        "relationshipHints": [
          "玩家作為旁觀者記住柏宇與穎心的差異，沒有介入但形成後續理解素材。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_competition_entry_pak_yu_wing_sum_observe",
          "poster_tension_observed",
          "imagination_and_order",
          "watchful",
          "thoughtful_distance"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_competition_entry_pak_yu_wing_sum_observe",
            "poster_tension_observed",
            "imagination_and_order"
          ],
          "emotionalTags": [
            "watchful",
            "thoughtful_distance"
          ],
          "relationshipHint": "玩家作為旁觀者記住柏宇與穎心的差異，沒有介入但形成後續理解素材。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_25_pakyu_wingsam_poster_corner_just_listen",
        "matchBranchIds": [
          "just_listen",
          "s2_w7_25_pakyu_wingsam_poster_corner_just_listen"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_competition_entry_pak_yu_wing_sum_observe",
          "poster_tension_observed",
          "imagination_and_order",
          "just_listen"
        ]
      }
    ],
    "defaultBranchId": "draw_smaller"
  },
  {
    "id": "review_s2_w7_25_competition_entry_tsz_hin_pak_yu_quiz_strange_question",
    "eventId": "s2_w7_25_competition_entry",
    "sourceEventId": "S2-W7-25",
    "variantId": "tsz_hin_pak_yu_quiz_strange_question",
    "sourceVariantId": "tsz_hin_pak_yu_quiz_strange_question",
    "eventVariantId": "tszhin_pakyu_weird_quiz",
    "matchVariantIds": [
      "tsz_hin_pak_yu_quiz_strange_question",
      "tszhin_pakyu_weird_quiz"
    ],
    "title": "班際活動報名／提名／分組",
    "timeText": "S2-W7，四月上旬，復活節假期前的班主任課或小息前後",
    "placeText": "小一班房，黑板旁通告、課桌之間、報名表附近",
    "role": "class_competition_entry_review",
    "variantTitle": "梓軒 + 柏宇｜常識問答變成怪事",
    "sceneOpening": "復活節假期前，班房本來已經有點浮。風扇慢慢轉，黑板邊還貼著未收走的舊通告，班主任把一張新的「班際活動」紙貼上去時，幾個同學立刻靠近。你還沒有看清楚是壁報、問答、朗誦還是接力，就先聽到紙邊被按住的聲音、有人問會不會有獎、有人說不要站太前。那張通告不只是通知，它像忽然把幾張熟悉的課桌拉近了一點。",
    "variantOpening": "梓軒盯著「常識問答」幾個字，問：「係咪答啱最多就贏？」柏宇在旁邊說：「可能會問點解月亮跟住人行。」梓軒立刻皺眉：「嗰啲唔係咁答㗎。」柏宇笑了一下，像覺得問題越怪越好。你聽著他們，一個想答對，一個想把問題講到像秘密。",
    "participants": [
      "tsz_hin",
      "pak_yu"
    ],
    "characters": [
      "tsz_hin",
      "pak_yu"
    ],
    "branches": [
      {
        "id": "ask_question_type",
        "branchId": "ask_question_type",
        "title": "問會問咩題",
        "branchTitle": "問會問咩題",
        "playerLine": "「會問咩題？」",
        "playerButton": "問會問咩題",
        "fullStoryText": "你問會問甚麼題，梓軒馬上說應該是常識書裡的內容，像水循環、節日、交通安全那些。柏宇卻靠近一點，說也可能問學校夜晚會不會有怪聲，說完還自己笑。梓軒的眉頭皺起，但沒有直接叫他閉嘴，只把通告上「常識」兩個字再看一次。你站在他們中間，覺得同一個「問答」可以被想成兩種樣子：一種有正確答案，一種像會從課室角落鑽出來。你還不知道自己想不想參加，只記得梓軒把答案看得很重，柏宇把問題看得很遠，而你第一次想知道題目到底會從哪裡來。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_competition_entry_tsz_hin_pak_yu_ask_questions",
          "quiz_split_between_correct_and_strange",
          "player_between_quiz_views"
        ],
        "emotionalTags": [
          "curious",
          "uncertain",
          "amused_tension"
        ],
        "relationshipHints": [
          "玩家看見梓軒和柏宇對常識問答的不同入口，三人互動從題目想像開始。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_competition_entry_tsz_hin_pak_yu_ask_questions",
          "quiz_split_between_correct_and_strange",
          "player_between_quiz_views",
          "curious",
          "uncertain",
          "amused_tension"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_competition_entry_tsz_hin_pak_yu_ask_questions",
            "quiz_split_between_correct_and_strange",
            "player_between_quiz_views"
          ],
          "emotionalTags": [
            "curious",
            "uncertain",
            "amused_tension"
          ],
          "relationshipHint": "玩家看見梓軒和柏宇對常識問答的不同入口，三人互動從題目想像開始。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_25_tszhin_pakyu_weird_quiz_ask_what_questions",
        "matchBranchIds": [
          "ask_question_type",
          "s2_w7_25_tszhin_pakyu_weird_quiz_ask_what_questions"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_competition_entry_tsz_hin_pak_yu_ask_questions",
          "quiz_split_between_correct_and_strange",
          "player_between_quiz_views",
          "ask_question_type"
        ]
      },
      {
        "id": "need_study_first",
        "branchId": "need_study_first",
        "title": "說要先溫習",
        "branchTitle": "說要先溫習",
        "playerLine": "「要睇書先啦。」",
        "playerButton": "說要先溫習",
        "fullStoryText": "你說要先看書。梓軒立刻點頭，像終於有人把題目拉回常識書上，手指已經準備去翻書包；柏宇卻說看書也可以找怪事，例如書裡有沒有奇怪圖。梓軒看了他一眼，沒有笑，卻也沒有再說他亂講。你忽然覺得「溫習」在兩個人耳裡是不一樣的：梓軒聽到的是要答中，柏宇聽到的是書裡可能藏著別人沒注意的東西。你把自己的常識書想了一下，封面平時很普通，現在好像多了些可能被翻出來的角落。比賽還沒有開始，但書包裡那本書已經被他們講得不太一樣。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_competition_entry_tsz_hin_pak_yu_study_first",
          "reading_as_preparation",
          "pak_yu_reframes_book"
        ],
        "emotionalTags": [
          "practical",
          "study_pressure_softened",
          "shared_preparation"
        ],
        "relationshipHints": [
          "玩家用溫習作為共同起點，讓梓軒安心，也讓柏宇保留自己的怪想像。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_competition_entry_tsz_hin_pak_yu_study_first",
          "reading_as_preparation",
          "pak_yu_reframes_book",
          "practical",
          "study_pressure_softened",
          "shared_preparation"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_competition_entry_tsz_hin_pak_yu_study_first",
            "reading_as_preparation",
            "pak_yu_reframes_book"
          ],
          "emotionalTags": [
            "practical",
            "study_pressure_softened",
            "shared_preparation"
          ],
          "relationshipHint": "玩家用溫習作為共同起點，讓梓軒安心，也讓柏宇保留自己的怪想像。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_25_tszhin_pakyu_weird_quiz_need_to_revise",
        "matchBranchIds": [
          "need_study_first",
          "s2_w7_25_tszhin_pakyu_weird_quiz_need_to_revise"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_competition_entry_tsz_hin_pak_yu_study_first",
          "reading_as_preparation",
          "pak_yu_reframes_book",
          "need_study_first"
        ]
      },
      {
        "id": "strange_questions_fun",
        "branchId": "strange_questions_fun",
        "title": "說怪題也好玩",
        "branchTitle": "說怪題也好玩",
        "playerLine": "「怪啲都好玩。」",
        "playerButton": "說怪題也好玩",
        "fullStoryText": "你說怪一點也好玩，柏宇立刻笑起來，像有人把他剛剛丟出去的怪問題接住了。他說如果題目問「點解鐘聲會追人」，他一定知道答案。梓軒馬上說好玩不等於答中，但語氣沒有平日那麼硬，只是把手裡的報名表折了一下。你看著他們，一邊想笑，一邊又明白梓軒不想因為好玩而失分。柏宇的怪題像在班房地上滾了一圈，梓軒的「答中」又把它拉回桌面。你沒有叫任何一個人停，只讓兩種聲音一起留在那張通告旁邊。問答還未開始，已經有一點像遊戲，也有一點像考試。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_competition_entry_tsz_hin_pak_yu_strange_fun",
          "pak_yu_idea_received",
          "tsz_hin_accuracy_boundary"
        ],
        "emotionalTags": [
          "playful",
          "light_conflict",
          "balanced_attention"
        ],
        "relationshipHints": [
          "玩家接住柏宇的怪題，但沒有否定梓軒對答中的在意，形成輕微但可合作的拉扯。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_competition_entry_tsz_hin_pak_yu_strange_fun",
          "pak_yu_idea_received",
          "tsz_hin_accuracy_boundary",
          "playful",
          "light_conflict",
          "balanced_attention"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_competition_entry_tsz_hin_pak_yu_strange_fun",
            "pak_yu_idea_received",
            "tsz_hin_accuracy_boundary"
          ],
          "emotionalTags": [
            "playful",
            "light_conflict",
            "balanced_attention"
          ],
          "relationshipHint": "玩家接住柏宇的怪題，但沒有否定梓軒對答中的在意，形成輕微但可合作的拉扯。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_25_tszhin_pakyu_weird_quiz_weird_is_fun",
        "matchBranchIds": [
          "strange_questions_fun",
          "s2_w7_25_tszhin_pakyu_weird_quiz_weird_is_fun"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_competition_entry_tsz_hin_pak_yu_strange_fun",
          "pak_yu_idea_received",
          "tsz_hin_accuracy_boundary",
          "strange_questions_fun"
        ]
      },
      {
        "id": "afraid_wrong_answer",
        "branchId": "afraid_wrong_answer",
        "title": "不想被問到",
        "branchTitle": "不想被問到",
        "playerLine": "「我唔想答錯。」",
        "playerButton": "不想被問到",
        "fullStoryText": "你說不想答錯，聲音比你想像中小。梓軒看了你一眼，沒有笑，也沒有說答錯很笨，只說可以先練。柏宇把聲音放輕，說答錯也不會爆炸，說完自己又補一句最多只是老師眨眼。你本來有點怕被梓軒聽見會變成比較，結果他的手指只是停在常識書那一欄，像真的在想怎樣練；柏宇則把害怕答錯講成一個不會爆炸的小事。你沒有立刻變得勇敢，只是覺得那個「錯」字沒有剛才那麼大。通告還在黑板旁邊，你站在兩個同學中間，第一次覺得害怕也可以被放進討論裡，而不是藏在書包底。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_competition_entry_tsz_hin_pak_yu_afraid_wrong",
          "fear_of_wrong_answer_spoken",
          "peers_soften_response"
        ],
        "emotionalTags": [
          "vulnerable",
          "lightly_reassured",
          "cautious_participation"
        ],
        "relationshipHints": [
          "玩家把怕答錯說出口，梓軒和柏宇用不同方式回應，形成三人之間的信任小片段。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_competition_entry_tsz_hin_pak_yu_afraid_wrong",
          "fear_of_wrong_answer_spoken",
          "peers_soften_response",
          "vulnerable",
          "lightly_reassured",
          "cautious_participation"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_competition_entry_tsz_hin_pak_yu_afraid_wrong",
            "fear_of_wrong_answer_spoken",
            "peers_soften_response"
          ],
          "emotionalTags": [
            "vulnerable",
            "lightly_reassured",
            "cautious_participation"
          ],
          "relationshipHint": "玩家把怕答錯說出口，梓軒和柏宇用不同方式回應，形成三人之間的信任小片段。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_25_tszhin_pakyu_weird_quiz_dont_want_to_be_asked",
        "matchBranchIds": [
          "afraid_wrong_answer",
          "s2_w7_25_tszhin_pakyu_weird_quiz_dont_want_to_be_asked"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_competition_entry_tsz_hin_pak_yu_afraid_wrong",
          "fear_of_wrong_answer_spoken",
          "peers_soften_response",
          "afraid_wrong_answer"
        ]
      }
    ],
    "defaultBranchId": "ask_question_type"
  },
  {
    "id": "review_s2_w7_26_pre_holiday_restless_teacher_homework_folder",
    "eventId": "s2_w7_26_pre_holiday_restless",
    "sourceEventId": "S2-W7-26",
    "variantId": "teacher_homework_folder",
    "sourceVariantId": "teacher_homework_folder",
    "eventVariantId": "teacher_reminds_homework",
    "matchVariantIds": [
      "teacher_homework_folder",
      "teacher_reminds_homework"
    ],
    "title": "復活節假期前，大家心已經飄走",
    "timeText": "S2-W7，復活節假期前幾日，上課前後或班主任提醒時間",
    "placeText": "小一班房、手冊、抽屜、窗邊座位",
    "role": "pre_holiday_restless_review",
    "variantTitle": "老師提醒還有功課",
    "sceneOpening": "復活節假期還未真正開始，班房裡已經有人在數還有幾日。手冊角落有假期日期，書包裡塞著未派完的工作紙，窗邊的陽光落在桌面上，令鉛筆影子變得很短。老師還在講課，可是有人翻鉛筆盒，有人看窗外，有人把「假期」兩個字講得很輕。大家的身體還坐在課室，心好像已經先跑到門口等放學。",
    "variantOpening": "老師把假期工作紙放在講台上：「未放假之前，先聽清楚要帶咩返屋企。」幾個同學嘆了一聲，老師停了停，又說：「假期可以休息，但功課唔會自己行返嚟。」",
    "participants": [],
    "characters": [],
    "branches": [
      {
        "id": "put_into_homework_folder",
        "branchId": "put_into_homework_folder",
        "title": "把紙放進功課夾",
        "branchTitle": "把紙放進功課夾",
        "playerLine": "「我夾好先。」",
        "playerButton": "把紙放進功課夾",
        "fullStoryText": "你把假期工作紙拿起來，紙角有一點翹，像剛從一大疊紙裡被分出來。你沒有先看題目，只把它放進功課夾，用手掌壓平。夾子合上的一刻，書包好像先重了一點，雖然假期還未真正開始。旁邊同學在嘆氣，有人問可不可以少一張，老師在前面繼續說要帶回家。你把功課夾塞進書包，聽見拉鍊拉到一半卡住，又重新拉一次。那疊紙沒有在當下追你做題，只是先跟著你回家，把復活節假期的邊邊壓出了一條摺痕。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_preholiday_homework_folder",
          "easter_homework_packed",
          "holiday_line_in_bag"
        ],
        "emotionalTags": [
          "small_pressure",
          "organized_response"
        ],
        "relationshipHints": [
          "玩家用整理功課夾面對假期前的提醒，壓力留在物件而不是口頭教訓裡。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_preholiday_homework_folder",
          "easter_homework_packed",
          "holiday_line_in_bag",
          "small_pressure",
          "organized_response"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_preholiday_homework_folder",
            "easter_homework_packed",
            "holiday_line_in_bag"
          ],
          "emotionalTags": [
            "small_pressure",
            "organized_response"
          ],
          "relationshipHint": "玩家用整理功課夾面對假期前的提醒，壓力留在物件而不是口頭教訓裡。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_26_teacher_reminds_homework_file_it",
        "matchBranchIds": [
          "put_into_homework_folder",
          "s2_w7_26_teacher_reminds_homework_file_it"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_preholiday_homework_folder",
          "easter_homework_packed",
          "holiday_line_in_bag",
          "put_into_homework_folder"
        ]
      },
      {
        "id": "ask_due_date",
        "branchId": "ask_due_date",
        "title": "問要交哪日",
        "branchTitle": "問要交哪日",
        "playerLine": "「幾時交呀？」",
        "playerButton": "問要交哪日",
        "fullStoryText": "你舉手問幾時交，老師轉身在黑板角落寫日期。粉筆聲很短，卻把假期中間劃出一條清楚的線。你低頭抄到手冊上，寫得有點歪，因為旁邊有人還在小聲數放幾日。日期被寫下來之前，假期像一整塊沒有邊的時間；寫下來之後，它忽然有了要回來的那一天。你看著手冊角落的數字，沒有馬上覺得害怕，只是覺得那些日子不再全是空白。它們中間有早餐、出街、看電視，也有這張工作紙會被你某一天再拿出來。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_preholiday_homework_due_date",
          "date_written_in_handbook",
          "holiday_has_boundary"
        ],
        "emotionalTags": [
          "aware",
          "mild_pressure",
          "practical_tracking"
        ],
        "relationshipHints": [
          "玩家主動把假期功課日期變成可見的生活線索，減少純粹漂走的感覺。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_preholiday_homework_due_date",
          "date_written_in_handbook",
          "holiday_has_boundary",
          "aware",
          "mild_pressure",
          "practical_tracking"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_preholiday_homework_due_date",
            "date_written_in_handbook",
            "holiday_has_boundary"
          ],
          "emotionalTags": [
            "aware",
            "mild_pressure",
            "practical_tracking"
          ],
          "relationshipHint": "玩家主動把假期功課日期變成可見的生活線索，減少純粹漂走的感覺。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_26_teacher_reminds_homework_ask_due_date",
        "matchBranchIds": [
          "ask_due_date",
          "s2_w7_26_teacher_reminds_homework_ask_due_date"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_preholiday_homework_due_date",
          "date_written_in_handbook",
          "holiday_has_boundary",
          "ask_due_date"
        ]
      },
      {
        "id": "whisper_too_many",
        "branchId": "whisper_too_many",
        "title": "小聲說好多",
        "branchTitle": "小聲說好多",
        "playerLine": "「好多呀。」",
        "playerButton": "小聲說好多",
        "fullStoryText": "你看著工作紙的厚度，小聲說好多。前面同學回頭點了點頭，沒有大聲回答，只用眼神把同一句話傳回來。老師好像聽見了，又好像沒有聽見，只叫大家先寫日期，不要把紙弄丟。你摸著那疊紙邊，覺得每一張都很薄，可是放在一起就變成一件要背回家的事。這句「好多呀」沒有讓功課變少，但它不是只有你一個人說。班房裡有幾個很輕的嘆氣聲散在不同位置，像大家的心都被假期拉走，又被工作紙拉回來一點。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_preholiday_homework_many",
          "shared_class_sigh",
          "homework_weight_noticed"
        ],
        "emotionalTags": [
          "overwhelmed_lightly",
          "shared_complaint"
        ],
        "relationshipHints": [
          "玩家感到假期功課壓力並非個人單獨承受，而是在班房裡形成小聲共鳴。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_preholiday_homework_many",
          "shared_class_sigh",
          "homework_weight_noticed",
          "overwhelmed_lightly",
          "shared_complaint"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_preholiday_homework_many",
            "shared_class_sigh",
            "homework_weight_noticed"
          ],
          "emotionalTags": [
            "overwhelmed_lightly",
            "shared_complaint"
          ],
          "relationshipHint": "玩家感到假期功課壓力並非個人單獨承受，而是在班房裡形成小聲共鳴。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_26_teacher_reminds_homework_so_much",
        "matchBranchIds": [
          "whisper_too_many",
          "s2_w7_26_teacher_reminds_homework_so_much"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_preholiday_homework_many",
          "shared_class_sigh",
          "homework_weight_noticed",
          "whisper_too_many"
        ]
      },
      {
        "id": "look_out_window",
        "branchId": "look_out_window",
        "title": "望向窗外",
        "branchTitle": "望向窗外",
        "playerLine": "「……」",
        "playerButton": "望向窗外",
        "fullStoryText": "你沒有立刻把日期寫下來，先望向窗外。樹葉在窗外微微動，陽光落在窗框上，看起來比黑板上的字遠很多。老師在前面講要帶工作紙回家，你聽見聲音，卻只看到樹枝晃了一下又停。等老師叫大家看回黑板，你才發現手冊第一行還沒寫完。你趕快低頭補字，筆尖在紙上拖得有點急。這不是很大的錯，也沒有人特別罵你，只是你記得那一秒，假期好像真的在窗外招手，而你的手冊還在桌上等你寫完日期。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_preholiday_homework_window",
          "attention_drift_before_easter",
          "handbook_line_unfinished"
        ],
        "emotionalTags": [
          "daydreaming",
          "mild_catch_up",
          "holiday_pull"
        ],
        "relationshipHints": [
          "玩家被假期氣氛拉走注意力，形成復活節前躁動的個人記憶。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_preholiday_homework_window",
          "attention_drift_before_easter",
          "handbook_line_unfinished",
          "daydreaming",
          "mild_catch_up",
          "holiday_pull"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_preholiday_homework_window",
            "attention_drift_before_easter",
            "handbook_line_unfinished"
          ],
          "emotionalTags": [
            "daydreaming",
            "mild_catch_up",
            "holiday_pull"
          ],
          "relationshipHint": "玩家被假期氣氛拉走注意力，形成復活節前躁動的個人記憶。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_26_teacher_reminds_homework_look_outside",
        "matchBranchIds": [
          "look_out_window",
          "s2_w7_26_teacher_reminds_homework_look_outside"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_preholiday_homework_window",
          "attention_drift_before_easter",
          "handbook_line_unfinished",
          "look_out_window"
        ]
      }
    ],
    "defaultBranchId": "put_into_homework_folder"
  },
  {
    "id": "review_s2_w7_26_pre_holiday_restless_ka_long_counts_holiday_days",
    "eventId": "s2_w7_26_pre_holiday_restless",
    "sourceEventId": "S2-W7-26",
    "variantId": "ka_long_counts_holiday_days",
    "sourceVariantId": "ka_long_counts_holiday_days",
    "eventVariantId": "kalong_counts_days",
    "matchVariantIds": [
      "ka_long_counts_holiday_days",
      "kalong_counts_days"
    ],
    "title": "復活節假期前，大家心已經飄走",
    "timeText": "S2-W7，復活節假期前幾日，上課前後或班主任提醒時間",
    "placeText": "小一班房、手冊、抽屜、窗邊座位",
    "role": "pre_holiday_restless_review",
    "variantTitle": "家朗數假期日子",
    "sceneOpening": "復活節假期還未真正開始，班房裡已經有人在數還有幾日。手冊角落有假期日期，書包裡塞著未派完的工作紙，窗邊的陽光落在桌面上，令鉛筆影子變得很短。老師還在講課，可是有人翻鉛筆盒，有人看窗外，有人把「假期」兩個字講得很輕。大家的身體還坐在課室，心好像已經先跑到門口等放學。",
    "variantOpening": "家朗在手冊角落數格子：「一、二、三……有幾日唔使返學！」他數到一半又問你：「你假期會去邊？」旁邊有人聽見，也湊過來想講自己的安排。",
    "participants": [
      "ka_long"
    ],
    "characters": [
      "ka_long"
    ],
    "branches": [
      {
        "id": "maybe_stay_home",
        "branchId": "maybe_stay_home",
        "title": "說可能在家",
        "branchTitle": "說可能在家",
        "playerLine": "「可能喺屋企。」",
        "playerButton": "說可能在家",
        "fullStoryText": "你說可能在家，原本以為家朗會立刻說很悶。可是他只把手冊往你那邊推了一點，說在家也可以看電視、食零食、玩到不用那麼早收拾。旁邊同學還在講要去邊，你忽然覺得「在家」沒有被擠到很後面。家朗數格子的手指停在假期第一天，像那一天可以放進很多種事情，不一定要很遠。你看著手冊上的小方格，想到家裡的梳化、遙控器、書包旁邊的工作紙。假期在別人口中很大，在你這裡可能只是屋企，但它也有自己的聲音。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_preholiday_ka_long_stay_home",
          "holiday_home_valid",
          "ka_long_includes_home_plan"
        ],
        "emotionalTags": [
          "accepted",
          "simple_expectation",
          "home_holiday"
        ],
        "relationshipHints": [
          "家朗沒有否定玩家較普通的假期安排，讓玩家感到在家也能被放進同學話題。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_preholiday_ka_long_stay_home",
          "holiday_home_valid",
          "ka_long_includes_home_plan",
          "accepted",
          "simple_expectation",
          "home_holiday"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_preholiday_ka_long_stay_home",
            "holiday_home_valid",
            "ka_long_includes_home_plan"
          ],
          "emotionalTags": [
            "accepted",
            "simple_expectation",
            "home_holiday"
          ],
          "relationshipHint": "家朗沒有否定玩家較普通的假期安排，讓玩家感到在家也能被放進同學話題。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_26_kalong_counts_days_maybe_home",
        "matchBranchIds": [
          "maybe_stay_home",
          "s2_w7_26_kalong_counts_days_maybe_home"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_preholiday_ka_long_stay_home",
          "holiday_home_valid",
          "ka_long_includes_home_plan",
          "maybe_stay_home"
        ]
      },
      {
        "id": "ask_ka_long_plan",
        "branchId": "ask_ka_long_plan",
        "title": "問他去邊",
        "branchTitle": "問他去邊",
        "playerLine": "「咁你去邊？」",
        "playerButton": "問他去邊",
        "fullStoryText": "你反問家朗會去哪裡。他先說可能去食飯，又說可能去街，再說可能去親戚家，講到第三個可能時自己也笑了。原來他把假期數得很清楚，卻不是每一天都有真正的安排。手冊格子被他數了一遍又一遍，像只要數出來，假期就會變得更近。旁邊同學問他是不是一定去玩，他抓抓頭，說要看大人。你聽到這句，忽然覺得大家的假期都被家裡的時間牽著，不只是想去哪裡就去哪裡。家朗的聲音仍然很亮，但那亮裡也有一點等大人決定的空位。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_preholiday_ka_long_ask_plan",
          "holiday_plan_uncertain_again",
          "peers_wait_for_family"
        ],
        "emotionalTags": [
          "curious",
          "shared_waiting",
          "light_realism"
        ],
        "relationshipHints": [
          "玩家從家朗的多個「可能」裡看見同學假期也不完全由自己決定。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_preholiday_ka_long_ask_plan",
          "holiday_plan_uncertain_again",
          "peers_wait_for_family",
          "curious",
          "shared_waiting",
          "light_realism"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_preholiday_ka_long_ask_plan",
            "holiday_plan_uncertain_again",
            "peers_wait_for_family"
          ],
          "emotionalTags": [
            "curious",
            "shared_waiting",
            "light_realism"
          ],
          "relationshipHint": "玩家從家朗的多個「可能」裡看見同學假期也不完全由自己決定。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_26_kalong_counts_days_ask_where",
        "matchBranchIds": [
          "ask_ka_long_plan",
          "s2_w7_26_kalong_counts_days_ask_where"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_preholiday_ka_long_ask_plan",
          "holiday_plan_uncertain_again",
          "peers_wait_for_family",
          "ask_ka_long_plan"
        ]
      },
      {
        "id": "remind_teacher_watching",
        "branchId": "remind_teacher_watching",
        "title": "提醒老師在看",
        "branchTitle": "提醒老師在看",
        "playerLine": "「老師望住喇。」",
        "playerButton": "提醒老師在看",
        "fullStoryText": "你看見老師的眼神掃過來，立刻小聲提醒家朗。家朗的手指還停在手冊格子上，身體卻一下子坐直，好像被看不見的線拉回座位。他把手冊合上一半，笑還沒有完全收回去，只是縮到嘴角邊。老師沒有點名，只繼續講工作紙要帶回家。你低頭也假裝在整理鉛筆盒，心裡卻還記得剛剛數到第幾格。這一下提醒沒有破壞假期的興奮，只是把它藏回桌面底下。家朗看了你一眼，沒有怪你多事，反而用口形又數了一次，像把那幾日偷偷留住。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_preholiday_ka_long_teacher_watching",
          "excitement_hidden_under_desk",
          "player_soft_warning"
        ],
        "emotionalTags": [
          "small_conspiracy",
          "careful",
          "restrained_laughter"
        ],
        "relationshipHints": [
          "玩家幫家朗在興奮和課堂規矩之間收一收，形成輕微默契。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_preholiday_ka_long_teacher_watching",
          "excitement_hidden_under_desk",
          "player_soft_warning",
          "small_conspiracy",
          "careful",
          "restrained_laughter"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_preholiday_ka_long_teacher_watching",
            "excitement_hidden_under_desk",
            "player_soft_warning"
          ],
          "emotionalTags": [
            "small_conspiracy",
            "careful",
            "restrained_laughter"
          ],
          "relationshipHint": "玩家幫家朗在興奮和課堂規矩之間收一收，形成輕微默契。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_26_kalong_counts_days_teacher_watching",
        "matchBranchIds": [
          "remind_teacher_watching",
          "s2_w7_26_kalong_counts_days_teacher_watching"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_preholiday_ka_long_teacher_watching",
          "excitement_hidden_under_desk",
          "player_soft_warning",
          "remind_teacher_watching"
        ]
      },
      {
        "id": "count_together",
        "branchId": "count_together",
        "title": "一起數",
        "branchTitle": "一起數",
        "playerLine": "「仲有幾日？」",
        "playerButton": "一起數",
        "fullStoryText": "你把手冊推近一點，跟家朗一起數。你們一開始數得很認真，後來卡在到底放假第一天算不算那一格。家朗說當然要算，你說好像未放學不算，兩個人把手指在小格子上移來移去，旁邊同學也湊過來看。老師在前面還在講別的事，你們的聲音壓得很低，像在桌上偷偷量一段時間。最後到底有幾日不太重要，重要的是「假期」被你們一格一格數出聲。那幾個小方格不再只是手冊上的日期，它們被家朗的手指和你的手指一起碰過，好像真的近了一點。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_preholiday_ka_long_count_together",
          "holiday_counted_aloud",
          "desk_calendar_shared"
        ],
        "emotionalTags": [
          "shared_anticipation",
          "playful_counting",
          "closeness"
        ],
        "relationshipHints": [
          "玩家和家朗共同把假期倒數變成桌面小活動，增加輕鬆互動記憶。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_preholiday_ka_long_count_together",
          "holiday_counted_aloud",
          "desk_calendar_shared",
          "shared_anticipation",
          "playful_counting",
          "closeness"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_preholiday_ka_long_count_together",
            "holiday_counted_aloud",
            "desk_calendar_shared"
          ],
          "emotionalTags": [
            "shared_anticipation",
            "playful_counting",
            "closeness"
          ],
          "relationshipHint": "玩家和家朗共同把假期倒數變成桌面小活動，增加輕鬆互動記憶。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_26_kalong_counts_days_count_together",
        "matchBranchIds": [
          "count_together",
          "s2_w7_26_kalong_counts_days_count_together"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_preholiday_ka_long_count_together",
          "holiday_counted_aloud",
          "desk_calendar_shared",
          "count_together"
        ]
      }
    ],
    "defaultBranchId": "maybe_stay_home"
  },
  {
    "id": "review_s2_w7_26_pre_holiday_restless_wing_sum_cleans_desk",
    "eventId": "s2_w7_26_pre_holiday_restless",
    "sourceEventId": "S2-W7-26",
    "variantId": "wing_sum_cleans_desk",
    "sourceVariantId": "wing_sum_cleans_desk",
    "eventVariantId": "wingsam_tidies_desk",
    "matchVariantIds": [
      "wing_sum_cleans_desk",
      "wingsam_tidies_desk"
    ],
    "title": "復活節假期前，大家心已經飄走",
    "timeText": "S2-W7，復活節假期前幾日，上課前後或班主任提醒時間",
    "placeText": "小一班房、手冊、抽屜、窗邊座位",
    "role": "pre_holiday_restless_review",
    "variantTitle": "穎心收拾桌面",
    "sceneOpening": "復活節假期還未真正開始，班房裡已經有人在數還有幾日。手冊角落有假期日期，書包裡塞著未派完的工作紙，窗邊的陽光落在桌面上，令鉛筆影子變得很短。老師還在講課，可是有人翻鉛筆盒，有人看窗外，有人把「假期」兩個字講得很輕。大家的身體還坐在課室，心好像已經先跑到門口等放學。",
    "variantOpening": "穎心沒有加入數假期，只把抽屜裡的紙一張張拿出來，分成功課、通告和不要的草稿。她把一張皺紙壓平，小聲說：「放假前唔執，返嚟會搵唔到。」",
    "participants": [
      "wing_sum"
    ],
    "characters": [
      "wing_sum"
    ],
    "branches": [
      {
        "id": "sort_papers_together",
        "branchId": "sort_papers_together",
        "title": "跟著分紙",
        "branchTitle": "跟著分紙",
        "playerLine": "「我都分開先。」",
        "playerButton": "跟著分紙",
        "fullStoryText": "你看見穎心把紙分成幾小疊，也低頭拉開自己的抽屜。裡面有功課紙、鉛筆碎、半張很久以前的通告，還有一張不知道為甚麼被摺成三角形的草稿。你把它們攤在桌上，一開始分得很亂。穎心沒有說你亂，只把自己的功課夾推近一點，讓你看到她把要交的紙放在同一邊。你照著做，桌面慢慢從一團紙變成幾堆。假期還沒有開始，返來那天也很遠，可是你忽然明白她為甚麼要現在執。紙被放對位置時，心裡也像有一小格被收好。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_preholiday_wing_sum_sort_together",
          "desk_papers_sorted",
          "wing_sum_modeling_order"
        ],
        "emotionalTags": [
          "quiet_following",
          "small_control",
          "preparation"
        ],
        "relationshipHints": [
          "玩家跟著穎心的整理方式做，從物件秩序裡靠近她的節奏。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_preholiday_wing_sum_sort_together",
          "desk_papers_sorted",
          "wing_sum_modeling_order",
          "quiet_following",
          "small_control",
          "preparation"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_preholiday_wing_sum_sort_together",
            "desk_papers_sorted",
            "wing_sum_modeling_order"
          ],
          "emotionalTags": [
            "quiet_following",
            "small_control",
            "preparation"
          ],
          "relationshipHint": "玩家跟著穎心的整理方式做，從物件秩序裡靠近她的節奏。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_26_wingsam_tidies_desk_sort_along",
        "matchBranchIds": [
          "sort_papers_together",
          "s2_w7_26_wingsam_tidies_desk_sort_along"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_preholiday_wing_sum_sort_together",
          "desk_papers_sorted",
          "wing_sum_modeling_order",
          "sort_papers_together"
        ]
      },
      {
        "id": "offer_help_holding",
        "branchId": "offer_help_holding",
        "title": "問要不要幫忙",
        "branchTitle": "問要不要幫忙",
        "playerLine": "「要唔要我拎住？」",
        "playerButton": "問要不要幫忙",
        "fullStoryText": "你問穎心要不要幫忙拿著紙。她看了你一下，才把一疊已經分好的紙交到你手上，叮囑不要弄散。那疊紙比你想像中滑，你用兩隻手夾住，怕它們像魚一樣散開。穎心趁你拿著，從抽屜底抽出另一張皺紙，慢慢壓平。你站在她旁邊，沒有做很大的事，只是替她暫時多了一隻手。可就是因為要拿穩，你才看見她每一疊紙的方向都對齊，連不要的草稿也沒有亂塞。她不是叫你幫她完成很多，只把一小份秩序放到你手裡，你就得小心接住。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_preholiday_wing_sum_help_hold_papers",
          "careful_holding",
          "shared_desk_order"
        ],
        "emotionalTags": [
          "trusted_with_small_task",
          "careful",
          "quiet_teamwork"
        ],
        "relationshipHints": [
          "玩家被穎心交託一小疊紙，形成低聲但具體的合作記憶。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_preholiday_wing_sum_help_hold_papers",
          "careful_holding",
          "shared_desk_order",
          "trusted_with_small_task",
          "careful",
          "quiet_teamwork"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_preholiday_wing_sum_help_hold_papers",
            "careful_holding",
            "shared_desk_order"
          ],
          "emotionalTags": [
            "trusted_with_small_task",
            "careful",
            "quiet_teamwork"
          ],
          "relationshipHint": "玩家被穎心交託一小疊紙，形成低聲但具體的合作記憶。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_26_wingsam_tidies_desk_offer_help",
        "matchBranchIds": [
          "offer_help_holding",
          "s2_w7_26_wingsam_tidies_desk_offer_help"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_preholiday_wing_sum_help_hold_papers",
          "careful_holding",
          "shared_desk_order",
          "offer_help_holding"
        ]
      },
      {
        "id": "say_later",
        "branchId": "say_later",
        "title": "說等返嚟先執",
        "branchTitle": "說等返嚟先執",
        "playerLine": "「返嚟先啦。」",
        "playerButton": "說等返嚟先執",
        "fullStoryText": "你看著自己的抽屜，說回來再收拾。穎心抬頭看了你一眼，沒有長篇勸你，只把自己的紙疊推齊，然後把抽屜輕輕推回去。那一下「咔」的聲音很短，卻讓你突然想到放完假回來那天，大家可能會翻書包、找通告、問功課放哪裡。你沒有立刻跟著收拾，抽屜裡的紙還是亂的，可是穎心那個已經推好的抽屜像在旁邊提醒你：有些麻煩不會因為假期而不見，只會等你回來時坐在原位。你沒有被罵，也沒有被催，只是把這個聲音記住了。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_preholiday_wing_sum_later_cleanup",
          "drawer_closes_as_reminder",
          "postponed_order"
        ],
        "emotionalTags": [
          "avoidance",
          "quiet_warning",
          "delayed_concern"
        ],
        "relationshipHints": [
          "玩家沒有採納穎心做法，但以旁觀方式記住她對返校混亂的預感。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_preholiday_wing_sum_later_cleanup",
          "drawer_closes_as_reminder",
          "postponed_order",
          "avoidance",
          "quiet_warning",
          "delayed_concern"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_preholiday_wing_sum_later_cleanup",
            "drawer_closes_as_reminder",
            "postponed_order"
          ],
          "emotionalTags": [
            "avoidance",
            "quiet_warning",
            "delayed_concern"
          ],
          "relationshipHint": "玩家沒有採納穎心做法，但以旁觀方式記住她對返校混亂的預感。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_26_wingsam_tidies_desk_later",
        "matchBranchIds": [
          "say_later",
          "s2_w7_26_wingsam_tidies_desk_later"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_preholiday_wing_sum_later_cleanup",
          "drawer_closes_as_reminder",
          "postponed_order",
          "say_later"
        ]
      },
      {
        "id": "just_watch_her_clean",
        "branchId": "just_watch_her_clean",
        "title": "只看她執",
        "branchTitle": "只看她執",
        "playerLine": "「……」",
        "playerButton": "只看她執",
        "fullStoryText": "你只是看著穎心收拾。她把皺紙壓平，把通告放到一邊，把草稿摺好，動作都不大，卻一下一下很清楚。班房另一邊還有人在講假期，家朗的聲音偶爾飄過來，可她的桌面像被一個小圈圈住，裡面只有紙角對齊的聲音。你沒有伸手幫忙，也沒有問她為甚麼要現在做。可是看著她把最後一張紙放進夾子時，你忽然覺得有些人等假期的方式不是數日子，而是把東西放好，讓回來那天不會一下子亂掉。你沒說出口，只把那種紙被壓平的聲音放進記憶裡。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_preholiday_wing_sum_observe_cleaning",
          "paper_flattening_memory",
          "quiet_preparation_seen"
        ],
        "emotionalTags": [
          "observing",
          "calm_detail",
          "distant_respect"
        ],
        "relationshipHints": [
          "玩家沒有直接參與，但從動作細節感受到穎心面對假期前混亂的方式。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_preholiday_wing_sum_observe_cleaning",
          "paper_flattening_memory",
          "quiet_preparation_seen",
          "observing",
          "calm_detail",
          "distant_respect"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_preholiday_wing_sum_observe_cleaning",
            "paper_flattening_memory",
            "quiet_preparation_seen"
          ],
          "emotionalTags": [
            "observing",
            "calm_detail",
            "distant_respect"
          ],
          "relationshipHint": "玩家沒有直接參與，但從動作細節感受到穎心面對假期前混亂的方式。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_26_wingsam_tidies_desk_just_watch",
        "matchBranchIds": [
          "just_watch_her_clean",
          "s2_w7_26_wingsam_tidies_desk_just_watch"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_preholiday_wing_sum_observe_cleaning",
          "paper_flattening_memory",
          "quiet_preparation_seen",
          "just_watch_her_clean"
        ]
      }
    ],
    "defaultBranchId": "sort_papers_together"
  },
  {
    "id": "review_s2_w7_26_pre_holiday_restless_pak_yu_holiday_as_mission",
    "eventId": "s2_w7_26_pre_holiday_restless",
    "sourceEventId": "S2-W7-26",
    "variantId": "pak_yu_holiday_as_mission",
    "sourceVariantId": "pak_yu_holiday_as_mission",
    "eventVariantId": "pakyu_summer_task",
    "matchVariantIds": [
      "pak_yu_holiday_as_mission",
      "pakyu_summer_task"
    ],
    "title": "復活節假期前，大家心已經飄走",
    "timeText": "S2-W7，復活節假期前幾日，上課前後或班主任提醒時間",
    "placeText": "小一班房、手冊、抽屜、窗邊座位",
    "role": "pre_holiday_restless_review",
    "variantTitle": "柏宇把假期講成任務",
    "sceneOpening": "復活節假期還未真正開始，班房裡已經有人在數還有幾日。手冊角落有假期日期，書包裡塞著未派完的工作紙，窗邊的陽光落在桌面上，令鉛筆影子變得很短。老師還在講課，可是有人翻鉛筆盒，有人看窗外，有人把「假期」兩個字講得很輕。大家的身體還坐在課室，心好像已經先跑到門口等放學。",
    "variantOpening": "柏宇把鉛筆盒當成地圖，低聲說：「假期其實係秘密任務，要避開功課怪獸。」他用擦膠當怪獸，推到工作紙旁邊。老師在前面講交功課日期，他卻把日期圈成像入口。",
    "participants": [
      "pak_yu"
    ],
    "characters": [
      "pak_yu"
    ],
    "branches": [
      {
        "id": "ask_homework_monster",
        "branchId": "ask_homework_monster",
        "title": "問功課怪獸在哪",
        "branchTitle": "問功課怪獸在哪",
        "playerLine": "「邊度有怪獸？」",
        "playerButton": "問功課怪獸在哪",
        "fullStoryText": "你問功課怪獸在哪裡，柏宇立刻把擦膠推到工作紙最長那一頁旁邊，壓低聲音說這隻最麻煩。你明明知道那只是很多字的題目，卻忍不住把那頁看成一隻趴在紙上的東西。老師在前面寫交功課日期，粉筆聲把怪獸拉回普通功課；柏宇又用鉛筆在旁邊畫了一條逃走路線。你沒有真的忘記要做功課，但它在那一刻沒有那麼像一堵牆。它變成可以被指出來、被繞過去、最後還是要打開來做的一頁紙。你記得柏宇笑得很小聲，像怕怪獸聽見。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_preholiday_pak_yu_homework_monster",
          "homework_reframed_as_monster",
          "playful_coping"
        ],
        "emotionalTags": [
          "amused",
          "pressure_softened",
          "shared_imagination"
        ],
        "relationshipHints": [
          "玩家接住柏宇的怪想像，讓功課壓力以可玩的方式被說出來。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_preholiday_pak_yu_homework_monster",
          "homework_reframed_as_monster",
          "playful_coping",
          "amused",
          "pressure_softened",
          "shared_imagination"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_preholiday_pak_yu_homework_monster",
            "homework_reframed_as_monster",
            "playful_coping"
          ],
          "emotionalTags": [
            "amused",
            "pressure_softened",
            "shared_imagination"
          ],
          "relationshipHint": "玩家接住柏宇的怪想像，讓功課壓力以可玩的方式被說出來。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_26_pakyu_summer_task_where_is_monster",
        "matchBranchIds": [
          "ask_homework_monster",
          "s2_w7_26_pakyu_summer_task_where_is_monster"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_preholiday_pak_yu_homework_monster",
          "homework_reframed_as_monster",
          "playful_coping",
          "ask_homework_monster"
        ]
      },
      {
        "id": "tell_write_date",
        "branchId": "tell_write_date",
        "title": "叫他寫日期",
        "branchTitle": "叫他寫日期",
        "playerLine": "「你寫日期先啦。」",
        "playerButton": "叫他寫日期",
        "fullStoryText": "你叫柏宇先寫日期。柏宇嘆了一口氣，把本來圈成入口的數字又改回普通日期，嘴裡還說入口暫時關閉。你看著他把日子抄到手冊上，字有一點歪，但總算在格子裡。鉛筆盒地圖還攤在旁邊，擦膠怪獸沒有完全收起，只是被推到一邊等。你沒有叫他不要玩，也沒有跟著他一直講怪獸，只把最需要做的那一步先放到前面。日期寫完後，他又小聲說任務第一步完成。你忽然覺得，有些時候把怪事變回手冊，不一定會把好玩完全弄丟。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_preholiday_pak_yu_write_date_first",
          "mission_meets_handbook",
          "practical_redirect"
        ],
        "emotionalTags": [
          "grounding",
          "gentle_correction",
          "still_playful"
        ],
        "relationshipHints": [
          "玩家把柏宇的想像拉回實際記錄，但沒有否定他的玩法。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_preholiday_pak_yu_write_date_first",
          "mission_meets_handbook",
          "practical_redirect",
          "grounding",
          "gentle_correction",
          "still_playful"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_preholiday_pak_yu_write_date_first",
            "mission_meets_handbook",
            "practical_redirect"
          ],
          "emotionalTags": [
            "grounding",
            "gentle_correction",
            "still_playful"
          ],
          "relationshipHint": "玩家把柏宇的想像拉回實際記錄，但沒有否定他的玩法。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_26_pakyu_summer_task_write_date",
        "matchBranchIds": [
          "tell_write_date",
          "s2_w7_26_pakyu_summer_task_write_date"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_preholiday_pak_yu_write_date_first",
          "mission_meets_handbook",
          "practical_redirect",
          "tell_write_date"
        ]
      },
      {
        "id": "join_avoid_monster",
        "branchId": "join_avoid_monster",
        "title": "說我也要避開",
        "branchTitle": "說我也要避開",
        "playerLine": "「我都要避。」",
        "playerButton": "說我也要避開",
        "fullStoryText": "你說自己也要避開功課怪獸。柏宇馬上很認真地點頭，把鉛筆盒推到你和他中間，說要先找安全地方做一題，做完一題就能過一格。你看著工作紙，原本一整頁密密麻麻的字被他分成幾個小關卡，雖然怪得有點好笑，卻也沒那麼硬。老師還在講要帶回家的東西，你們兩個低頭在桌角用很細的聲音討論，沒有真的逃走。你知道功課還是功課，假期還是要交，可是在柏宇那張小地圖裡，第一題像變成可以踩上去的石頭。你不確定這算玩還是做準備，只覺得手上的紙輕了一點。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_preholiday_pak_yu_join_mission",
          "homework_as_steps",
          "shared_secret_task"
        ],
        "emotionalTags": [
          "playful_alliance",
          "lighter_pressure",
          "small_courage"
        ],
        "relationshipHints": [
          "玩家加入柏宇的任務語言，形成一起面對假期功課的想像式默契。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_preholiday_pak_yu_join_mission",
          "homework_as_steps",
          "shared_secret_task",
          "playful_alliance",
          "lighter_pressure",
          "small_courage"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_preholiday_pak_yu_join_mission",
            "homework_as_steps",
            "shared_secret_task"
          ],
          "emotionalTags": [
            "playful_alliance",
            "lighter_pressure",
            "small_courage"
          ],
          "relationshipHint": "玩家加入柏宇的任務語言，形成一起面對假期功課的想像式默契。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_26_pakyu_summer_task_join_avoid",
        "matchBranchIds": [
          "join_avoid_monster",
          "s2_w7_26_pakyu_summer_task_join_avoid"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_preholiday_pak_yu_join_mission",
          "homework_as_steps",
          "shared_secret_task",
          "join_avoid_monster"
        ]
      },
      {
        "id": "not_join_write_handbook",
        "branchId": "not_join_write_handbook",
        "title": "不加入",
        "branchTitle": "不加入",
        "playerLine": "「我寫手冊先。」",
        "playerButton": "不加入",
        "fullStoryText": "你沒有加入柏宇的秘密任務，只低頭把日期寫進手冊。柏宇的聲音還在旁邊小小地飄著，說怪獸藏在最長那頁，又說擦膠是盾牌。你一邊聽，一邊把數字寫好，筆尖在紙上停了一下，確認沒有抄錯。你沒有進到他的故事裡，但也不是完全把他關在外面；那些怪獸聲音像課室後面很遠的風扇聲，存在著，卻沒有把你的手冊推亂。日期寫完後，你把手冊合上，心裡比較穩一點。柏宇還在畫他的路線，你們用兩種方法處理同一疊工作紙，誰也沒有把誰的方式趕走。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_preholiday_pak_yu_not_join_handbook",
          "parallel_coping",
          "date_recorded"
        ],
        "emotionalTags": [
          "focused",
          "gently_distant",
          "stable"
        ],
        "relationshipHints": [
          "玩家選擇實際記錄，但仍容許柏宇的想像在旁邊存在，保留平和距離。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_preholiday_pak_yu_not_join_handbook",
          "parallel_coping",
          "date_recorded",
          "focused",
          "gently_distant",
          "stable"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_preholiday_pak_yu_not_join_handbook",
            "parallel_coping",
            "date_recorded"
          ],
          "emotionalTags": [
            "focused",
            "gently_distant",
            "stable"
          ],
          "relationshipHint": "玩家選擇實際記錄，但仍容許柏宇的想像在旁邊存在，保留平和距離。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_26_pakyu_summer_task_not_join",
        "matchBranchIds": [
          "not_join_write_handbook",
          "s2_w7_26_pakyu_summer_task_not_join"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_preholiday_pak_yu_not_join_handbook",
          "parallel_coping",
          "date_recorded",
          "not_join_write_handbook"
        ]
      }
    ],
    "defaultBranchId": "ask_homework_monster"
  },
  {
    "id": "review_s2_w7_27_humid_classroom_under_fan_seat",
    "eventId": "s2_w7_27_humid_classroom",
    "sourceEventId": "S2-W7-27",
    "variantId": "under_fan_seat",
    "sourceVariantId": "under_fan_seat",
    "eventVariantId": "under_the_fan",
    "matchVariantIds": [
      "under_fan_seat",
      "under_the_fan"
    ],
    "title": "雨季前的悶熱課室、風扇和校服開始變熱",
    "timeText": "S2-W7，四月上旬，上午小息後至放學前",
    "placeText": "小一班房，風扇下、窗邊、課桌與書包旁",
    "role": "seasonal_humidity_classroom_review",
    "variantTitle": "風扇下面的位置",
    "sceneOpening": "四月的課室開始有點悶。風扇在頭頂轉，聲音一直嗡嗡響，但風像只吹到某幾排。有人把冷衫塞進書包，有人用手冊扇風，有人的校服領口黏在脖子上。窗外的天有時亮，有時灰，像雨還沒有落下來，只先把空氣變厚。老師仍然在講課，可是你一直留意水樽、紙角和風到底有沒有吹到自己。",
    "variantOpening": "小息後，你坐回座位，發現風扇剛好不太吹到你這邊。家朗用手冊扇了兩下，說：「好熱呀。」前面同學說自己那邊有風，後面同學說根本沒有。",
    "participants": [
      "ka_long"
    ],
    "characters": [
      "ka_long"
    ],
    "branches": [
      {
        "id": "fan_with_handbook",
        "branchId": "fan_with_handbook",
        "title": "用手冊扇風",
        "branchTitle": "用手冊扇風",
        "playerLine": "「我扇陣。」",
        "playerButton": "用手冊扇風",
        "fullStoryText": "你拿起手冊扇風，頁邊一下下拍到手指，風很小，還帶著紙的味道。家朗看見，也拿自己的手冊跟著扇，兩本手冊在桌面旁邊拍出不整齊的聲音。前面同學回頭說不要吹亂紙，家朗立刻把角度轉低一點，你也跟著放慢。那點風其實不夠涼，但比完全坐著不動好一些。老師在黑板前講下一頁，你們的手冊又要很快放回桌上。後來你記得的不是那堂課的內容，而是四月第一個開始覺得熱的上午，你和家朗用手冊做了幾秒鐘的小風扇。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_humid_classroom_handbook_fan",
          "ka_long_shared_fanning",
          "first_hot_classroom"
        ],
        "emotionalTags": [
          "small_relief",
          "shared_discomfort",
          "playful_practical"
        ],
        "relationshipHints": [
          "玩家和家朗用同一個小方法應付悶熱，形成輕微共同感。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_humid_classroom_handbook_fan",
          "ka_long_shared_fanning",
          "first_hot_classroom",
          "small_relief",
          "shared_discomfort",
          "playful_practical"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_humid_classroom_handbook_fan",
            "ka_long_shared_fanning",
            "first_hot_classroom"
          ],
          "emotionalTags": [
            "small_relief",
            "shared_discomfort",
            "playful_practical"
          ],
          "relationshipHint": "玩家和家朗用同一個小方法應付悶熱，形成輕微共同感。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_27_under_the_fan_fan_with_notebook",
        "matchBranchIds": [
          "fan_with_handbook",
          "s2_w7_27_under_the_fan_fan_with_notebook"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_humid_classroom_handbook_fan",
          "ka_long_shared_fanning",
          "first_hot_classroom",
          "fan_with_handbook"
        ]
      },
      {
        "id": "ask_fan_stronger",
        "branchId": "ask_fan_stronger",
        "title": "問可不可以開大風扇",
        "branchTitle": "問可不可以開大風扇",
        "playerLine": "「老師，可唔可以大啲？」",
        "playerButton": "問可不可以開大風扇",
        "fullStoryText": "你舉手問老師可不可以把風扇開大一點。老師走到牆邊看了一下掣，說已經不小，再開也差不多。你有點失望，因為剛才問出口時，心裡已經想像會有一陣大風從頭頂落下來。風扇仍然照原本的速度轉，嗡嗡聲沒有變大，也沒有變涼。家朗小聲說可能風都去了前面，前面同學又說自己也熱。你坐回去，才知道不是每個不舒服都會因為問了就立刻被修好。有些熱只能先被大家承認一下，然後繼續坐在課室裡。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_humid_classroom_ask_fan",
          "classroom_heat_unfixed",
          "teacher_checks_switch"
        ],
        "emotionalTags": [
          "disappointed",
          "heard_but_unsolved",
          "ordinary_limit"
        ],
        "relationshipHints": [
          "玩家把悶熱說出口，班房共同知道這件小不舒服存在，但沒有立即解決。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_humid_classroom_ask_fan",
          "classroom_heat_unfixed",
          "teacher_checks_switch",
          "disappointed",
          "heard_but_unsolved",
          "ordinary_limit"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_humid_classroom_ask_fan",
            "classroom_heat_unfixed",
            "teacher_checks_switch"
          ],
          "emotionalTags": [
            "disappointed",
            "heard_but_unsolved",
            "ordinary_limit"
          ],
          "relationshipHint": "玩家把悶熱說出口，班房共同知道這件小不舒服存在，但沒有立即解決。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_27_under_the_fan_ask_turn_up",
        "matchBranchIds": [
          "ask_fan_stronger",
          "s2_w7_27_under_the_fan_ask_turn_up"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_humid_classroom_ask_fan",
          "classroom_heat_unfixed",
          "teacher_checks_switch",
          "ask_fan_stronger"
        ]
      },
      {
        "id": "take_off_cardigan",
        "branchId": "take_off_cardigan",
        "title": "把冷衫收起",
        "branchTitle": "把冷衫收起",
        "playerLine": "「我唔著冷衫喇。」",
        "playerButton": "把冷衫收起",
        "fullStoryText": "你把冷衫從肩膀上脫下來，袖口反了出來，像一條軟軟的繩。你把它塞進書包，書包立刻鼓起一塊，拉鍊有點難拉。身上是輕了一點，脖子那邊也沒有那麼焗，可是抽屜和書包變得更擠。家朗看見，也摸摸自己的冷衫，說放學可能又會凍。你不知道到底要穿還是不穿，只知道四月的天氣開始讓人一直換來換去。冷衫沒有不見，只是被你塞到書包深處，像冬天剩下的一小團布，暫時讓位給越來越熱的課室。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_humid_classroom_cardigan_in_bag",
          "changing_season_object",
          "bag_gets_crowded"
        ],
        "emotionalTags": [
          "relief",
          "mild_mess",
          "seasonal_shift"
        ],
        "relationshipHints": [
          "玩家透過冷衫和書包感受到換季，與家朗短暫共享不確定的天氣感。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_humid_classroom_cardigan_in_bag",
          "changing_season_object",
          "bag_gets_crowded",
          "relief",
          "mild_mess",
          "seasonal_shift"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_humid_classroom_cardigan_in_bag",
            "changing_season_object",
            "bag_gets_crowded"
          ],
          "emotionalTags": [
            "relief",
            "mild_mess",
            "seasonal_shift"
          ],
          "relationshipHint": "玩家透過冷衫和書包感受到換季，與家朗短暫共享不確定的天氣感。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_27_under_the_fan_put_away_cardigan",
        "matchBranchIds": [
          "take_off_cardigan",
          "s2_w7_27_under_the_fan_put_away_cardigan"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_humid_classroom_cardigan_in_bag",
          "changing_season_object",
          "bag_gets_crowded",
          "take_off_cardigan"
        ]
      },
      {
        "id": "endure_silently",
        "branchId": "endure_silently",
        "title": "忍住不說",
        "branchTitle": "忍住不說",
        "playerLine": "「……」",
        "playerButton": "忍住不說",
        "fullStoryText": "你沒有說熱，只看著風扇轉。你想數它轉了幾圈，數到第十圈就忘記剛才是不是已經數過八。熱不是很嚴重，沒有讓人立刻喊出來，卻一直貼在手臂和領口旁邊。旁邊有人用手撥頭髮，家朗的手冊又偷偷扇了一下，老師的粉筆聲在黑板前停停走走。你把手放在桌面，桌面也有一點暖。那天沒有甚麼特別的大事，只是你記住了這種悶悶的感覺：不至於哭，也不至於病，只是整個班房像一起等一場還沒落下來的雨。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_humid_classroom_endure",
          "fan_counting",
          "waiting_for_rain_mood"
        ],
        "emotionalTags": [
          "quiet_discomfort",
          "patience",
          "hazy_attention"
        ],
        "relationshipHints": [
          "玩家以沉默方式經歷季節變化，這段記憶偏向個人感受而非關係推進。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_humid_classroom_endure",
          "fan_counting",
          "waiting_for_rain_mood",
          "quiet_discomfort",
          "patience",
          "hazy_attention"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_humid_classroom_endure",
            "fan_counting",
            "waiting_for_rain_mood"
          ],
          "emotionalTags": [
            "quiet_discomfort",
            "patience",
            "hazy_attention"
          ],
          "relationshipHint": "玩家以沉默方式經歷季節變化，這段記憶偏向個人感受而非關係推進。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_27_under_the_fan_stay_quiet",
        "matchBranchIds": [
          "endure_silently",
          "s2_w7_27_under_the_fan_stay_quiet"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_humid_classroom_endure",
          "fan_counting",
          "waiting_for_rain_mood",
          "endure_silently"
        ]
      }
    ],
    "defaultBranchId": "fan_with_handbook"
  },
  {
    "id": "review_s2_w7_27_humid_classroom_uniform_collar_sweat",
    "eventId": "s2_w7_27_humid_classroom",
    "sourceEventId": "S2-W7-27",
    "variantId": "uniform_collar_sweat",
    "sourceVariantId": "uniform_collar_sweat",
    "eventVariantId": "collar_and_sweat",
    "matchVariantIds": [
      "uniform_collar_sweat",
      "collar_and_sweat"
    ],
    "title": "雨季前的悶熱課室、風扇和校服開始變熱",
    "timeText": "S2-W7，四月上旬，上午小息後至放學前",
    "placeText": "小一班房，風扇下、窗邊、課桌與書包旁",
    "role": "seasonal_humidity_classroom_review",
    "variantTitle": "校服領口和汗",
    "sceneOpening": "四月的課室開始有點悶。風扇在頭頂轉，聲音一直嗡嗡響，但風像只吹到某幾排。有人把冷衫塞進書包，有人用手冊扇風，有人的校服領口黏在脖子上。窗外的天有時亮，有時灰，像雨還沒有落下來，只先把空氣變厚。老師仍然在講課，可是你一直留意水樽、紙角和風到底有沒有吹到自己。",
    "variantOpening": "寫字時，你覺得校服領口有點黏。梓軒把袖子拉上去，說：「咁熱點溫書呀。」老師提醒大家不要一直弄衣服，可是班房裡好幾個人都在動來動去。",
    "participants": [
      "tsz_hin"
    ],
    "characters": [
      "tsz_hin"
    ],
    "branches": [
      {
        "id": "pull_collar",
        "branchId": "pull_collar",
        "title": "拉一拉領口",
        "branchTitle": "拉一拉領口",
        "playerLine": "「好焗呀。」",
        "playerButton": "拉一拉領口",
        "fullStoryText": "你拉了一下校服領口，風鑽進來一秒，很快又不見。梓軒聽見你說焗，立刻點頭，這次沒有問誰比較熱，也沒有把它變成比賽，只把袖子再拉高一點。老師提醒大家不要一直弄衣服，你們兩個都停了一下，然後又偷偷坐正。熱讓筆跡變慢，也讓脖子後面黏黏的。你很少和梓軒在同一件事上不用比較地同意，但那一刻，大家都只是熱。你看見他皺著眉盯住簿，像不是想贏甚麼，只想快點寫完這一行。四月的熱把很多話壓小了，也把某些距離拉近了一點點。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_humid_classroom_collar_hot",
          "tsz_hin_shared_heat",
          "no_comparison_moment"
        ],
        "emotionalTags": [
          "physical_discomfort",
          "shared_condition",
          "small_alignment"
        ],
        "relationshipHints": [
          "玩家和梓軒在悶熱裡短暫站在同一邊，沒有進入比較語氣。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_humid_classroom_collar_hot",
          "tsz_hin_shared_heat",
          "no_comparison_moment",
          "physical_discomfort",
          "shared_condition",
          "small_alignment"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_humid_classroom_collar_hot",
            "tsz_hin_shared_heat",
            "no_comparison_moment"
          ],
          "emotionalTags": [
            "physical_discomfort",
            "shared_condition",
            "small_alignment"
          ],
          "relationshipHint": "玩家和梓軒在悶熱裡短暫站在同一邊，沒有進入比較語氣。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_27_collar_and_sweat_pull_collar",
        "matchBranchIds": [
          "pull_collar",
          "s2_w7_27_collar_and_sweat_pull_collar"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_humid_classroom_collar_hot",
          "tsz_hin_shared_heat",
          "no_comparison_moment",
          "pull_collar"
        ]
      },
      {
        "id": "continue_writing",
        "branchId": "continue_writing",
        "title": "繼續寫字",
        "branchTitle": "繼續寫字",
        "playerLine": "「我寫埋先。」",
        "playerButton": "繼續寫字",
        "fullStoryText": "你低頭繼續寫字，筆尖在紙上有點滑，手心也有點濕。梓軒在旁邊說熱到難溫書，你沒有接話，只把最後幾個字慢慢補上。每一格字都像比平日慢半拍，明明不是很多，卻因為領口黏住和風扇聲變得很長。老師走過來看了一眼，沒有特別說甚麼。你寫完那一行時，手腕邊有一點鉛筆灰。那天你沒有提出要休息，也沒有很有精神，只是把要寫的東西寫到最後。後來想起來，這不是甚麼了不起的努力，只是悶熱課室裡一個小一學生把一格一格字填完的下午。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_humid_classroom_continue_writing",
          "hot_but_finished_line",
          "pencil_mark_on_hand"
        ],
        "emotionalTags": [
          "persistence",
          "low_energy",
          "ordinary_effort"
        ],
        "relationshipHints": [
          "這段主要記錄玩家在悶熱中維持小任務完成，關係推進較弱。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_humid_classroom_continue_writing",
          "hot_but_finished_line",
          "pencil_mark_on_hand",
          "persistence",
          "low_energy",
          "ordinary_effort"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_humid_classroom_continue_writing",
            "hot_but_finished_line",
            "pencil_mark_on_hand"
          ],
          "emotionalTags": [
            "persistence",
            "low_energy",
            "ordinary_effort"
          ],
          "relationshipHint": "這段主要記錄玩家在悶熱中維持小任務完成，關係推進較弱。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_27_collar_and_sweat_keep_writing",
        "matchBranchIds": [
          "continue_writing",
          "s2_w7_27_collar_and_sweat_keep_writing"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_humid_classroom_continue_writing",
          "hot_but_finished_line",
          "pencil_mark_on_hand",
          "continue_writing"
        ]
      },
      {
        "id": "ask_drink_water",
        "branchId": "ask_drink_water",
        "title": "問可不可以飲水",
        "branchTitle": "問可不可以飲水",
        "playerLine": "「我想飲水。」",
        "playerButton": "問可不可以飲水",
        "fullStoryText": "你舉手說想喝水。老師讓你小口喝，不要整支水樽拿來玩。你打開水樽，水不是冰的，喝下去卻讓喉嚨舒服了一點。梓軒看見，也摸了摸自己的水樽，低聲說他那支快沒水。你把蓋扭緊，放回桌角，心裡想著明天是不是要裝多一點。風扇還是那樣轉，校服領口還是有點黏，可是喝水後，桌面上的字沒有剛才那麼糊。那一口水很普通，卻像把悶熱從喉嚨裡推開了一小段距離。你記住了水樽放在桌角的聲音，也記住了梓軒那句快沒水。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_humid_classroom_drink_water",
          "water_bottle_awareness",
          "tsz_hin_water_low"
        ],
        "emotionalTags": [
          "relief",
          "bodily_awareness",
          "practical_care"
        ],
        "relationshipHints": [
          "玩家以飲水處理身體不適，也注意到梓軒同樣受熱影響。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_humid_classroom_drink_water",
          "water_bottle_awareness",
          "tsz_hin_water_low",
          "relief",
          "bodily_awareness",
          "practical_care"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_humid_classroom_drink_water",
            "water_bottle_awareness",
            "tsz_hin_water_low"
          ],
          "emotionalTags": [
            "relief",
            "bodily_awareness",
            "practical_care"
          ],
          "relationshipHint": "玩家以飲水處理身體不適，也注意到梓軒同樣受熱影響。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_27_collar_and_sweat_ask_water",
        "matchBranchIds": [
          "ask_drink_water",
          "s2_w7_27_collar_and_sweat_ask_water"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_humid_classroom_drink_water",
          "water_bottle_awareness",
          "tsz_hin_water_low",
          "ask_drink_water"
        ]
      },
      {
        "id": "want_school_end",
        "branchId": "want_school_end",
        "title": "說放學想快點走",
        "branchTitle": "說放學想快點走",
        "playerLine": "「我想快啲放學。」",
        "playerButton": "說放學想快點走",
        "fullStoryText": "你小聲說想快點放學。梓軒立刻說他也是，語氣裡先是同意，下一秒又補一句放學還要溫習。那句話像把剛剛吹進來的一點風又壓回課室裡。你看著他把袖子拉平，忽然覺得他不是不想走，只是走出課室後，另一件事又在等。老師在前面叫大家寫完最後一題，你們都沒有再說話。放學這兩個字在你心裡亮了一下，又被「溫習」遮住一角。那天你記得的不是題目，而是悶熱、領口和梓軒那句很快接上的話，像他連想走也要先想下一件要做好的事。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_humid_classroom_want_leave",
          "tsz_hin_mentions_study_after_school",
          "heat_and_study_pressure"
        ],
        "emotionalTags": [
          "tired",
          "trapped_lightly",
          "empathy_seed"
        ],
        "relationshipHints": [
          "玩家聽見梓軒把天氣疲累和溫習壓力連在一起，對他的緊繃有更具體的記憶。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_humid_classroom_want_leave",
          "tsz_hin_mentions_study_after_school",
          "heat_and_study_pressure",
          "tired",
          "trapped_lightly",
          "empathy_seed"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_humid_classroom_want_leave",
            "tsz_hin_mentions_study_after_school",
            "heat_and_study_pressure"
          ],
          "emotionalTags": [
            "tired",
            "trapped_lightly",
            "empathy_seed"
          ],
          "relationshipHint": "玩家聽見梓軒把天氣疲累和溫習壓力連在一起，對他的緊繃有更具體的記憶。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_27_collar_and_sweat_want_to_go_home",
        "matchBranchIds": [
          "want_school_end",
          "s2_w7_27_collar_and_sweat_want_to_go_home"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_humid_classroom_want_leave",
          "tsz_hin_mentions_study_after_school",
          "heat_and_study_pressure",
          "want_school_end"
        ]
      }
    ],
    "defaultBranchId": "pull_collar"
  },
  {
    "id": "review_s2_w7_27_humid_classroom_rain_cloud_outside_window",
    "eventId": "s2_w7_27_humid_classroom",
    "sourceEventId": "S2-W7-27",
    "variantId": "rain_cloud_outside_window",
    "sourceVariantId": "rain_cloud_outside_window",
    "eventVariantId": "rain_clouds_outside",
    "matchVariantIds": [
      "rain_cloud_outside_window",
      "rain_clouds_outside"
    ],
    "title": "雨季前的悶熱課室、風扇和校服開始變熱",
    "timeText": "S2-W7，四月上旬，上午小息後至放學前",
    "placeText": "小一班房，風扇下、窗邊、課桌與書包旁",
    "role": "seasonal_humidity_classroom_review",
    "variantTitle": "雨雲在窗外",
    "sceneOpening": "四月的課室開始有點悶。風扇在頭頂轉，聲音一直嗡嗡響，但風像只吹到某幾排。有人把冷衫塞進書包，有人用手冊扇風，有人的校服領口黏在脖子上。窗外的天有時亮，有時灰，像雨還沒有落下來，只先把空氣變厚。老師仍然在講課，可是你一直留意水樽、紙角和風到底有沒有吹到自己。",
    "variantOpening": "下午，窗外的天慢慢灰起來。穎心抬頭看了一眼，把桌角的紙往裡推：「可能落雨。」柏宇立刻說：「可能係大雲怪嚟。」穎心沒有笑，只把紙壓得更平。",
    "participants": [
      "wing_sum",
      "pak_yu"
    ],
    "characters": [
      "wing_sum",
      "pak_yu"
    ],
    "branches": [
      {
        "id": "hold_paper_for_wing_sum",
        "branchId": "hold_paper_for_wing_sum",
        "title": "幫忙壓紙",
        "branchTitle": "幫忙壓紙",
        "playerLine": "「我幫你按住。」",
        "playerButton": "幫忙壓紙",
        "fullStoryText": "你伸手按住穎心的紙邊。窗外的風還沒有真的吹進來，可是她的紙先安靜了，不再被風扇和人走過的氣流掀起。穎心看了你一眼，細細聲說謝謝，又把另一張紙塞進功課夾。柏宇在旁邊看著你們，突然說如果是雲怪，也要先學會不要吹亂人家的紙。穎心沒有笑出聲，只是嘴角很細地動了一下。你手掌底下的紙很薄，卻讓你覺得自己有一件很實際的小事可以做。雨還沒落，雲還在窗外，柏宇的怪話也在旁邊飄著，但桌上的紙至少被你們一起按住了。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_humid_classroom_hold_paper",
          "wing_sum_papers_safe",
          "pak_yu_cloud_monster_softened"
        ],
        "emotionalTags": [
          "helpful",
          "calm_in_grey_weather",
          "small_teamwork"
        ],
        "relationshipHints": [
          "玩家用具體動作幫穎心穩住紙，也讓柏宇的想像被放進較溫和的位置。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_humid_classroom_hold_paper",
          "wing_sum_papers_safe",
          "pak_yu_cloud_monster_softened",
          "helpful",
          "calm_in_grey_weather",
          "small_teamwork"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_humid_classroom_hold_paper",
            "wing_sum_papers_safe",
            "pak_yu_cloud_monster_softened"
          ],
          "emotionalTags": [
            "helpful",
            "calm_in_grey_weather",
            "small_teamwork"
          ],
          "relationshipHint": "玩家用具體動作幫穎心穩住紙，也讓柏宇的想像被放進較溫和的位置。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_27_rain_clouds_outside_hold_paper",
        "matchBranchIds": [
          "hold_paper_for_wing_sum",
          "s2_w7_27_rain_clouds_outside_hold_paper"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_humid_classroom_hold_paper",
          "wing_sum_papers_safe",
          "pak_yu_cloud_monster_softened",
          "hold_paper_for_wing_sum"
        ]
      },
      {
        "id": "ask_heavy_rain",
        "branchId": "ask_heavy_rain",
        "title": "問會不會紅雨",
        "branchTitle": "問會不會紅雨",
        "playerLine": "「會唔會好大雨？」",
        "playerButton": "問會不會紅雨",
        "fullStoryText": "你看著灰起來的天，問會不會很大雨。穎心說不知道，手指還按在紙角上；柏宇馬上說如果很大就像瀑布，走廊會變成河。你明明知道學校不會真的變成河，還是忍不住往窗外看久了一點。放學時如果下雨，書包、鞋、襪子都會變得麻煩，雨傘也會擠在門口。穎心把紙收進夾裡，像先替自己避開那個可能。柏宇又補一句雲怪可能只是路過。你沒有被嚇得很厲害，只是開始希望那場雨不要剛好在放學鐘響時落下來。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_humid_classroom_ask_rain",
          "grey_sky_after_school_worry",
          "rain_imagined"
        ],
        "emotionalTags": [
          "mild_worry",
          "weather_watch",
          "shared_uncertainty"
        ],
        "relationshipHints": [
          "玩家把天氣擔心說出來，穎心和柏宇分別以實際收拾和怪想像回應。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_humid_classroom_ask_rain",
          "grey_sky_after_school_worry",
          "rain_imagined",
          "mild_worry",
          "weather_watch",
          "shared_uncertainty"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_humid_classroom_ask_rain",
            "grey_sky_after_school_worry",
            "rain_imagined"
          ],
          "emotionalTags": [
            "mild_worry",
            "weather_watch",
            "shared_uncertainty"
          ],
          "relationshipHint": "玩家把天氣擔心說出來，穎心和柏宇分別以實際收拾和怪想像回應。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_27_rain_clouds_outside_ask_heavy_rain",
        "matchBranchIds": [
          "ask_heavy_rain",
          "s2_w7_27_rain_clouds_outside_ask_heavy_rain"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_humid_classroom_ask_rain",
          "grey_sky_after_school_worry",
          "rain_imagined",
          "ask_heavy_rain"
        ]
      },
      {
        "id": "ask_cloud_monster",
        "branchId": "ask_cloud_monster",
        "title": "說雲怪好怪",
        "branchTitle": "說雲怪好怪",
        "playerLine": "「雲怪係咩呀？」",
        "playerButton": "說雲怪好怪",
        "fullStoryText": "你問雲怪是甚麼，柏宇立刻把聲音放低，說它肚子裡裝滿雨，走過學校上面就會打嗝。穎心抬頭看了他一眼，沒有叫他不要講，只把紙又往裡推一點。你望著窗外那片灰，忽然覺得它真的有一點像慢慢移動的東西。悶熱原本黏在皮膚上，讓人一直想放學，現在被柏宇講歪了一點，變成一個很怪但沒那麼悶的畫面。你沒有忘記可能會下雨，也知道紙要收好，可是雲不再只是一團灰。它多了一個柏宇給的名字，穎心則讓那個名字不要吹亂桌面。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_humid_classroom_cloud_monster",
          "pak_yu_weather_imagination",
          "wing_sum_tolerates_story"
        ],
        "emotionalTags": [
          "amused",
          "weather_reframed",
          "softened_boredom"
        ],
        "relationshipHints": [
          "玩家接住柏宇的雲怪說法，同時看見穎心用收紙維持秩序，三人形成輕微互補。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_humid_classroom_cloud_monster",
          "pak_yu_weather_imagination",
          "wing_sum_tolerates_story",
          "amused",
          "weather_reframed",
          "softened_boredom"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_humid_classroom_cloud_monster",
            "pak_yu_weather_imagination",
            "wing_sum_tolerates_story"
          ],
          "emotionalTags": [
            "amused",
            "weather_reframed",
            "softened_boredom"
          ],
          "relationshipHint": "玩家接住柏宇的雲怪說法，同時看見穎心用收紙維持秩序，三人形成輕微互補。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_27_rain_clouds_outside_cloud_monster_is_weird",
        "matchBranchIds": [
          "ask_cloud_monster",
          "s2_w7_27_rain_clouds_outside_cloud_monster_is_weird"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_humid_classroom_cloud_monster",
          "pak_yu_weather_imagination",
          "wing_sum_tolerates_story",
          "ask_cloud_monster"
        ]
      },
      {
        "id": "pack_own_papers",
        "branchId": "pack_own_papers",
        "title": "把自己的紙收好",
        "branchTitle": "把自己的紙收好",
        "playerLine": "「我收埋先。」",
        "playerButton": "把自己的紙收好",
        "fullStoryText": "你低頭把自己的紙塞進功課夾，先把角對齊，再把夾子扣好。窗外還未下雨，班房裡也沒有真的起風，可是看見穎心那樣收紙，你忽然也想把自己的東西放穩。柏宇還在小聲講雲怪，說它可能會找最亂的桌面落雨，你把夾子抱近一點，覺得至少自己的紙不會被它找到。這個動作很小，沒有誰特別稱讚你。可是當你把功課夾放回書包時，心裡安靜了一點。雨季還沒有來，今天也不一定會下雨，但你像先替未來那場雨關好一扇很小的門。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_humid_classroom_pack_own_papers",
          "self_protection_before_rain",
          "paper_folder_ready"
        ],
        "emotionalTags": [
          "prepared",
          "small_control",
          "quiet_independence"
        ],
        "relationshipHints": [
          "玩家受穎心與天氣提醒影響，主動收好自己的紙，關係推進偏弱但生活習慣記憶清楚。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_humid_classroom_pack_own_papers",
          "self_protection_before_rain",
          "paper_folder_ready",
          "prepared",
          "small_control",
          "quiet_independence"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_humid_classroom_pack_own_papers",
            "self_protection_before_rain",
            "paper_folder_ready"
          ],
          "emotionalTags": [
            "prepared",
            "small_control",
            "quiet_independence"
          ],
          "relationshipHint": "玩家受穎心與天氣提醒影響，主動收好自己的紙，關係推進偏弱但生活習慣記憶清楚。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_27_rain_clouds_outside_put_paper_away",
        "matchBranchIds": [
          "pack_own_papers",
          "s2_w7_27_rain_clouds_outside_put_paper_away"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_humid_classroom_pack_own_papers",
          "self_protection_before_rain",
          "paper_folder_ready",
          "pack_own_papers"
        ]
      }
    ],
    "defaultBranchId": "hold_paper_for_wing_sum"
  },
  {
    "id": "review_s2_w7_27_humid_classroom_teacher_season_change_reminder",
    "eventId": "s2_w7_27_humid_classroom",
    "sourceEventId": "S2-W7-27",
    "variantId": "teacher_season_change_reminder",
    "sourceVariantId": "teacher_season_change_reminder",
    "eventVariantId": "teacher_seasonal_reminder",
    "matchVariantIds": [
      "teacher_season_change_reminder",
      "teacher_seasonal_reminder"
    ],
    "title": "雨季前的悶熱課室、風扇和校服開始變熱",
    "timeText": "S2-W7，四月上旬，上午小息後至放學前",
    "placeText": "小一班房，風扇下、窗邊、課桌與書包旁",
    "role": "seasonal_humidity_classroom_review",
    "variantTitle": "老師提醒換季",
    "sceneOpening": "四月的課室開始有點悶。風扇在頭頂轉，聲音一直嗡嗡響，但風像只吹到某幾排。有人把冷衫塞進書包，有人用手冊扇風，有人的校服領口黏在脖子上。窗外的天有時亮，有時灰，像雨還沒有落下來，只先把空氣變厚。老師仍然在講課，可是你一直留意水樽、紙角和風到底有沒有吹到自己。",
    "variantOpening": "老師在放學前說：「天氣開始熱，冷衫、水樽、雨傘都要自己記得。」她指指課室後面的失物籃，裡面已經有一件沒人認領的外套。",
    "participants": [],
    "characters": [],
    "branches": [
      {
        "id": "check_water_bottle",
        "branchId": "check_water_bottle",
        "title": "看自己的水樽",
        "branchTitle": "看自己的水樽",
        "playerLine": "「我有帶水。」",
        "playerButton": "看自己的水樽",
        "fullStoryText": "你摸了摸自己的水樽，發現裡面只剩下一點水，晃起來聲音很小。早上出門時它還很滿，現在只剩底部一圈，像一整天的熱都被你喝進去了。老師在前面說明天要記得帶水，你沒有舉手，也沒有出聲，只把水樽放回書包側袋，想著明天也許要裝多一點。失物籃裡那件外套垂出一隻袖子，旁邊有人問是不是自己的。你看著自己的水樽，忽然覺得換季不是大人說「天氣熱」那麼簡單，而是書包裡每樣東西都要重新想一次：水夠不夠、外套還要不要、雨傘會不會用到。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_humid_classroom_check_water_bottle",
          "season_change_water_awareness",
          "bottle_nearly_empty"
        ],
        "emotionalTags": [
          "practical_awareness",
          "bodily_memory",
          "preparation"
        ],
        "relationshipHints": [
          "這段主要記錄玩家透過水樽感受換季，關係推進較弱。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_humid_classroom_check_water_bottle",
          "season_change_water_awareness",
          "bottle_nearly_empty",
          "practical_awareness",
          "bodily_memory",
          "preparation"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_humid_classroom_check_water_bottle",
            "season_change_water_awareness",
            "bottle_nearly_empty"
          ],
          "emotionalTags": [
            "practical_awareness",
            "bodily_memory",
            "preparation"
          ],
          "relationshipHint": "這段主要記錄玩家透過水樽感受換季，關係推進較弱。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_27_teacher_seasonal_reminder_check_bottle",
        "matchBranchIds": [
          "check_water_bottle",
          "s2_w7_27_teacher_seasonal_reminder_check_bottle"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_humid_classroom_check_water_bottle",
          "season_change_water_awareness",
          "bottle_nearly_empty",
          "check_water_bottle"
        ]
      },
      {
        "id": "find_cardigan",
        "branchId": "find_cardigan",
        "title": "找冷衫",
        "branchTitle": "找冷衫",
        "playerLine": "「我件冷衫呢？」",
        "playerButton": "找冷衫",
        "fullStoryText": "你聽見老師說冷衫，立刻彎身翻書包。書包底有功課夾、水樽、皺了的紙巾，最後才摸到一團軟軟的布。冷衫被你塞得皺成一團，袖子捲在一起，好像在書包裡睡了一整天。你把它拿出來看，確認不是失物籃裡那件，才又塞回去。老師說要自己記得，你點點頭，雖然沒有人看見。冷衫沒有不見，只是被你放到太遠的地方。那一刻你覺得，長大一點也許就是要記得這些不太有趣的東西：自己的外套、自己的水樽、自己的傘，還有放學前不要把它們留在課室。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_humid_classroom_find_cardigan",
          "cardigan_not_lost",
          "lost_property_awareness"
        ],
        "emotionalTags": [
          "relief",
          "responsibility_small",
          "messy_bag"
        ],
        "relationshipHints": [
          "玩家在老師提醒下確認自己物件，形成換季自理記憶。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_humid_classroom_find_cardigan",
          "cardigan_not_lost",
          "lost_property_awareness",
          "relief",
          "responsibility_small",
          "messy_bag"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_humid_classroom_find_cardigan",
            "cardigan_not_lost",
            "lost_property_awareness"
          ],
          "emotionalTags": [
            "relief",
            "responsibility_small",
            "messy_bag"
          ],
          "relationshipHint": "玩家在老師提醒下確認自己物件，形成換季自理記憶。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_27_teacher_seasonal_reminder_find_cardigan",
        "matchBranchIds": [
          "find_cardigan",
          "s2_w7_27_teacher_seasonal_reminder_find_cardigan"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_humid_classroom_find_cardigan",
          "cardigan_not_lost",
          "lost_property_awareness",
          "find_cardigan"
        ]
      },
      {
        "id": "ask_about_umbrella",
        "branchId": "ask_about_umbrella",
        "title": "問要不要帶傘",
        "branchTitle": "問要不要帶傘",
        "playerLine": "「聽日要帶遮？」",
        "playerButton": "問要不要帶傘",
        "fullStoryText": "你問明天要不要帶傘。老師說要看天氣報告，家裡的大人也會知道。你其實不太懂報告，只想到家門口那把摺傘，傘套有時很難塞回去，濕了還會滴水。窗外的天還不是很黑，但已經不像早上那樣亮。你把「遮」這個字放在心裡，想著明天出門前可能又會被問有沒有帶。這不是教訓，也不是大事，只是雨季快來之前，課室裡每個人好像都多了一樣要記得的東西。放學鐘還沒響，你已經想到玄關、傘架和一隻可能被忘在家的雨傘。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_humid_classroom_ask_umbrella",
          "rainy_season_preparation",
          "umbrella_at_home"
        ],
        "emotionalTags": [
          "anticipation",
          "mild_uncertainty",
          "practical_worry"
        ],
        "relationshipHints": [
          "玩家將老師提醒轉化成家門口物件記憶，連接學校與家庭準備。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_humid_classroom_ask_umbrella",
          "rainy_season_preparation",
          "umbrella_at_home",
          "anticipation",
          "mild_uncertainty",
          "practical_worry"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_humid_classroom_ask_umbrella",
            "rainy_season_preparation",
            "umbrella_at_home"
          ],
          "emotionalTags": [
            "anticipation",
            "mild_uncertainty",
            "practical_worry"
          ],
          "relationshipHint": "玩家將老師提醒轉化成家門口物件記憶，連接學校與家庭準備。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_27_teacher_seasonal_reminder_ask_umbrella",
        "matchBranchIds": [
          "ask_about_umbrella",
          "s2_w7_27_teacher_seasonal_reminder_ask_umbrella"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_humid_classroom_ask_umbrella",
          "rainy_season_preparation",
          "umbrella_at_home",
          "ask_about_umbrella"
        ]
      },
      {
        "id": "write_in_handbook",
        "branchId": "write_in_handbook",
        "title": "記在手冊上",
        "branchTitle": "記在手冊上",
        "playerLine": "「我寫低先。」",
        "playerButton": "記在手冊上",
        "fullStoryText": "你打開手冊，在角落寫下「水、遮」。字很小，擠在原本的功課日期旁邊，看起來像給明天的自己留的一張迷你通告。老師還在提醒不要把冷衫留在課室，後面有人去失物籃找外套，你低頭把那兩個字多看了一眼，怕放學後就忘記。手冊平日多數寫功課和家長簽名，今天多了水樽和雨傘，像四月的天氣也被寫進去了。你不知道明天會不會真的下雨，也不知道會不會熱到要喝更多水，但至少明天打開手冊時，今天的自己會在角落提醒你。那兩個字很小，卻讓你覺得事情沒有完全飄走。",
        "impactList": [],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "s2_w7_humid_classroom_handbook_water_umbrella",
          "self_note_for_tomorrow",
          "season_change_written"
        ],
        "emotionalTags": [
          "prepared",
          "self_reminder",
          "small_independence"
        ],
        "relationshipHints": [
          "玩家把換季提醒變成手冊上的自我提示，形成自理習慣記憶。"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "s2_w7_humid_classroom_handbook_water_umbrella",
          "self_note_for_tomorrow",
          "season_change_written",
          "prepared",
          "self_reminder",
          "small_independence"
        ],
        "hiddenImpact": {
          "memoryTags": [
            "s2_w7_humid_classroom_handbook_water_umbrella",
            "self_note_for_tomorrow",
            "season_change_written"
          ],
          "emotionalTags": [
            "prepared",
            "self_reminder",
            "small_independence"
          ],
          "relationshipHint": "玩家把換季提醒變成手冊上的自我提示，形成自理習慣記憶。",
          "systemUseOnly": true
        },
        "choiceId": "s2_w7_27_teacher_seasonal_reminder_write_note",
        "matchBranchIds": [
          "write_in_handbook",
          "s2_w7_27_teacher_seasonal_reminder_write_note"
        ],
        "triggerStoryMemoryTags": [
          "s2_w7_humid_classroom_handbook_water_umbrella",
          "self_note_for_tomorrow",
          "season_change_written",
          "write_in_handbook"
        ]
      }
    ],
    "defaultBranchId": "check_water_bottle"
  }
];
