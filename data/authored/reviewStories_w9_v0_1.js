// data/authored/reviewStories_w9_v0_1.js
// Generated structural data from info/week9_reviewStories_v0_1_full_story.md.
// Authored source of truth: do not edit wording here unless the source MD changes.
// These are full review/life-memory stories, not immediate playable event resultText.

export const WEEK9_REVIEW_STORY_AUTHORING_RULES = {
  version: "week9_reviewStories_v0_1_full_story",
  purpose: "W9（Oct 27–Nov 2）Halloween + 學校活動壓力的人生片段回顧完整故事稿。不是即時事件文字。",
  playerVisibleRule: "玩家 UI 只顯示 sceneOpening + fullStoryText；impactList 只作 hidden metadata，不直接顯示。",
  source: "info/week9_reviewStories_v0_1_full_story.md"
};

export const openingWeek9ReviewStoryGroups = [
  {
    "id": "review_w9_9_halloween_english_class_decoration_encouraging_teacher",
    "sourceEventId": "w9_halloween_english_decoration",
    "sourceVariantId": "encouraging_teacher",
    "eventId": "w9_9_halloween_english_class_decoration",
    "variantId": "encouraging_teacher",
    "week": 9,
    "dateRange": "Oct 27–Nov 2",
    "title": "Halloween Words 的紙南瓜",
    "timeText": "第 9 週，英文課前",
    "timeLabel": "第 9 週，英文課前",
    "placeText": "小一課室",
    "locationLabel": "小一課室",
    "characters": [
      "英文老師"
    ],
    "characterIdHint": "teacher_encouraging_mentor",
    "unknownDisplayName": null,
    "knownDisplayName": null,
    "sceneOpening": "英文課前，課室和平時有一點不一樣。白板角落貼了幾個紙南瓜和小蝙蝠，黑板上寫著 Halloween Words，粉筆字旁邊還有一粒沒有貼好的膠紙角，隨著風扇微微翹起來。這不是全校的大活動，只是一節英文課，老師說會學幾個生字，也可以做一張小裝飾紙。有人一見到橙色紙就笑，有人把椅子推前想看清楚，也有人望著黑色蝙蝠貼紙，不知道是不是應該覺得好玩。\n\n英文老師拿起一張紙南瓜，聲音比平時慢一點：「今日學幾個字，唔使驚讀錯。Pumpkin，慢慢跟我讀。」她把紙放低，又把一盒顏色筆放到講台邊。「你哋可以畫自己鍾意嘅小圖案，唔一定要畫得好靚。」",
    "branches": [
      {
        "id": "read_pumpkin_together",
        "branchId": "read_pumpkin_together",
        "choiceId": "w9_9_halloween_english_class_decoration_encouraging_teacher_choice_1",
        "triggerStoryMemoryTags": [
          "w9_9_halloween_english_class_decoration_encouraging_teacher_choice_1"
        ],
        "title": "聲音跟著南瓜走了一次",
        "branchTitle": "聲音跟著南瓜走了一次",
        "fullStoryText": "你望著黑板上那個很長的字，嘴巴先動了一下，聲音才跟著出來：「Pumpkin。」\n\n那個 p 和 m 擠在一起，你讀得不算很準。老師沒有停下來看你，也沒有叫你一個人再讀，只是帶著全班又讀了一次。旁邊有人把 pumpkin 讀得更歪，前排有同學偷偷笑，但老師很快又說：「再嚟一次，慢慢讀。」\n\n你在第二次讀時聲音仍然細，但沒有剛才那麼縮。後來你想起這節課時，記住的不是自己讀錯了，而是原來英文生字也可以先跟著很多人的聲音走一次，不用一開始就自己站出來。",
        "impactList": [
          "新增回憶：跟讀 pumpkin；英文課緊張感降低；課堂參與感微幅形成"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "跟讀 pumpkin"
        ],
        "emotionalTags": [
          "英文課緊張感降低"
        ],
        "relationshipHints": [],
        "propertyHints": [
          "英文課緊張感降低",
          "課堂參與感微幅形成"
        ],
        "reviewSummaryTags": [
          "跟讀 pumpkin",
          "英文課緊張感降低",
          "課堂參與感微幅形成"
        ]
      },
      {
        "id": "draw_small_pumpkin",
        "branchId": "draw_small_pumpkin",
        "choiceId": "w9_9_halloween_english_class_decoration_encouraging_teacher_choice_2",
        "triggerStoryMemoryTags": [
          "w9_9_halloween_english_class_decoration_encouraging_teacher_choice_2"
        ],
        "title": "那個像橙的小南瓜",
        "branchTitle": "那個像橙的小南瓜",
        "fullStoryText": "你拿起橙色筆，在紙上畫了一個細細的圓，再加上幾條不太直的線。畫完後你看了很久，覺得它比起南瓜更像一個被壓扁的橙。\n\n老師走過來時沒有說像不像，只是指著那個亮亮的橙色說：「呢個都可以貼上去。」她幫你撕了一小段膠紙，你把那個小南瓜貼在白板角落，手指按了兩下才放開。\n\n它沒有很大，也沒有在中間，但英文課後你再望向白板時，會看到一點屬於自己的橙色。你那時才覺得，參加課堂不一定要做最漂亮的東西，有時只是把一張小紙真的貼上去。",
        "impactList": [
          "新增回憶：白板角落的小南瓜；創意參與痕跡形成；課室歸屬感微幅上升"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "白板角落的小南瓜"
        ],
        "emotionalTags": [],
        "relationshipHints": [],
        "propertyHints": [
          "創意參與痕跡形成"
        ],
        "reviewSummaryTags": [
          "白板角落的小南瓜",
          "創意參與痕跡形成",
          "課室歸屬感微幅上升"
        ]
      },
      {
        "id": "ask_not_to_draw_ghost",
        "branchId": "ask_not_to_draw_ghost",
        "choiceId": "w9_9_halloween_english_class_decoration_encouraging_teacher_choice_3",
        "triggerStoryMemoryTags": [
          "w9_9_halloween_english_class_decoration_encouraging_teacher_choice_3"
        ],
        "title": "Halloween 不一定要畫鬼",
        "branchTitle": "Halloween 不一定要畫鬼",
        "fullStoryText": "你看著同學手上的鬼圖案，筆尖停在紙上很久。最後你把手舉得不太高，像怕老師看不見，又怕她真的叫你回答。「老師，可唔可以唔畫鬼？」\n\n老師很快點頭，像這是一個很正常的問題。「可以呀，糖果、星星、南瓜都得。」她還拿了一張比較圓的南瓜紙給你看，沒有問你是不是膽小。\n\n你鬆了一口氣，重新拿起顏色筆。那一刻 Halloween 沒有突然變成你最喜歡的日子，但它從一堆可怕圖案裡退開了一點，變成一張你可以自己選內容的紙。",
        "impactList": [
          "新增回憶：不用畫鬼也可以；界線被允許；英文課安全感微幅上升"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "不用畫鬼也可以"
        ],
        "emotionalTags": [
          "英文課安全感微幅上升"
        ],
        "relationshipHints": [],
        "propertyHints": [
          "界線被允許",
          "英文課安全感微幅上升"
        ],
        "reviewSummaryTags": [
          "不用畫鬼也可以",
          "界線被允許",
          "英文課安全感微幅上升"
        ]
      },
      {
        "id": "observe_others_first",
        "branchId": "observe_others_first",
        "choiceId": "w9_9_halloween_english_class_decoration_encouraging_teacher_choice_4",
        "triggerStoryMemoryTags": [
          "w9_9_halloween_english_class_decoration_encouraging_teacher_choice_4"
        ],
        "title": "先看別人的紙",
        "branchTitle": "先看別人的紙",
        "fullStoryText": "你沒有立刻拿筆，只把手放在桌邊，眼睛跟著別人的紙移來移去。有人畫尖尖的帽子，有人畫一粒糖，有人的南瓜眼睛大得像兩個洞。\n\n老師沒有催你，只提醒大家可以先想一想。你看了一會兒，才在紙邊畫了一個很小很小的圓，又把它塗成橙色。那個圓幾乎不算圖案，但它讓你開始了。\n\n後來你記得的，是自己那段沒有被催的時間。原來在課室裡慢一點開始，也還是開始。",
        "impactList": [
          "新增回憶：先看再畫；觀察傾向保留；課堂壓力維持平穩"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "先看再畫"
        ],
        "emotionalTags": [
          "課堂壓力維持平穩"
        ],
        "relationshipHints": [],
        "propertyHints": [
          "觀察傾向保留"
        ],
        "reviewSummaryTags": [
          "先看再畫",
          "觀察傾向保留",
          "課堂壓力維持平穩"
        ]
      }
    ],
    "mapping": {
      "source": "info/week9_reviewStories_v0_1_full_story.md",
      "mappingMethod": "eventId alias + variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_w9_9_halloween_english_class_decoration_caring_teacher",
    "sourceEventId": "w9_halloween_english_decoration",
    "sourceVariantId": "caring_teacher",
    "eventId": "w9_9_halloween_english_class_decoration",
    "variantId": "caring_teacher",
    "week": 9,
    "dateRange": "Oct 27–Nov 2",
    "title": "被拿遠的骷髏貼紙",
    "timeText": "第 9 週，英文課前",
    "timeLabel": "第 9 週，英文課前",
    "placeText": "小一課室",
    "locationLabel": "小一課室",
    "characters": [
      "英文老師"
    ],
    "characterIdHint": "teacher_pastoral_care",
    "unknownDisplayName": null,
    "knownDisplayName": null,
    "sceneOpening": "英文老師把一盒萬聖節貼紙放到講台上，紙南瓜、糖果、星星和黑色小蝙蝠混在一起。有人一邊伸手一邊說要最可怕那張，也有人只是盯著盒子，不肯把手伸出去。當一張骷髏貼紙被拿起來時，後排有個同學縮了一下，椅腳在地上擦出很短的聲音。\n\n老師看見了，沒有笑，也沒有說「呢啲都驚」。她把那張貼紙拿遠一點，語氣很輕：「唔鍾意呢啲圖案，可以畫糖果或者星星。Halloween 唔一定要嚇人。」她把顏色筆推到大家看得見的位置，像是先把選擇放回桌面上。",
    "branches": [
      {
        "id": "draw_candy",
        "branchId": "draw_candy",
        "choiceId": "w9_9_halloween_english_class_decoration_caring_teacher_choice_1",
        "triggerStoryMemoryTags": [
          "w9_9_halloween_english_class_decoration_caring_teacher_choice_1"
        ],
        "title": "糖果也算 Halloween",
        "branchTitle": "糖果也算 Halloween",
        "fullStoryText": "你沒有去碰黑色紙，只拿了一支粉紅色筆，在紙上畫一粒糖。糖紙兩邊的蝴蝶結畫得一邊大一邊小，你自己看了也覺得有點歪。\n\n老師把糖果貼紙放到中間，像在告訴大家這也可以算。你把自己的糖果畫在貼紙旁邊，沒有鬼，也沒有骷髏，但顏色很亮。\n\n回想起來，那節課最重要的不是 Halloween 有多熱鬧，而是你第一次發現，同一個活動裡也可以有不嚇人的位置。",
        "impactList": [
          "新增回憶：不嚇人的糖果圖；創意表達保留；安全感微幅上升"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "不嚇人的糖果圖"
        ],
        "emotionalTags": [
          "安全感微幅上升"
        ],
        "relationshipHints": [],
        "propertyHints": [
          "創意表達保留"
        ],
        "reviewSummaryTags": [
          "不嚇人的糖果圖",
          "創意表達保留",
          "安全感微幅上升"
        ]
      },
      {
        "id": "say_no_ghost",
        "branchId": "say_no_ghost",
        "choiceId": "w9_9_halloween_english_class_decoration_caring_teacher_choice_2",
        "triggerStoryMemoryTags": [
          "w9_9_halloween_english_class_decoration_caring_teacher_choice_2"
        ],
        "title": "沒有被問是不是膽小",
        "branchTitle": "沒有被問是不是膽小",
        "fullStoryText": "你看著那些鬼圖，心裡不太舒服。你把手裡的筆轉了一圈，最後小聲說：「我唔想畫鬼。」\n\n老師只是點頭，把可怕的圖案收回盒子一角。「咁你揀其他。」她說得很快，像這件事不需要全班知道。旁邊有人還在挑貼紙，你的桌面卻安靜了一點。\n\n你沒有被迫解釋自己怕什麼，也沒有被叫做膽小。那一刻你只是可以不畫鬼，而這件小事已經夠讓你的手敢重新拿起筆。",
        "impactList": [
          "新增回憶：可以不畫鬼；被照顧的界線；理智值回穩的片段"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "可以不畫鬼"
        ],
        "emotionalTags": [
          "理智值回穩的片段"
        ],
        "relationshipHints": [],
        "propertyHints": [
          "被照顧的界線"
        ],
        "reviewSummaryTags": [
          "可以不畫鬼",
          "被照顧的界線",
          "理智值回穩的片段"
        ]
      },
      {
        "id": "ask_star_word",
        "branchId": "ask_star_word",
        "choiceId": "w9_9_halloween_english_class_decoration_caring_teacher_choice_3",
        "triggerStoryMemoryTags": [
          "w9_9_halloween_english_class_decoration_caring_teacher_choice_3"
        ],
        "title": "Star 比 pumpkin 短很多",
        "branchTitle": "Star 比 pumpkin 短很多",
        "fullStoryText": "你不想畫鬼，於是盯著一張星星貼紙看。過了一會兒，你抬頭問：「星星英文係咩？」\n\n老師轉身在黑板上寫 star，四個字母排得很短。她帶你讀一次，你跟著讀，覺得這個字比 pumpkin 容易入口很多。穎心那邊有人也跟著小聲讀了一次，聲音輕得像筆在紙上擦過。\n\n後來你記住 star，不是因為它最重要，而是因為它是你自己問回來的字。Halloween 的黑色和橙色中間，忽然多了一個比較亮的位置。",
        "impactList": [
          "新增回憶：自己問來的 star；英文提問經驗形成；課堂參與感微幅上升"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "自己問來的 star"
        ],
        "emotionalTags": [],
        "relationshipHints": [],
        "propertyHints": [
          "英文提問經驗形成",
          "課堂參與感微幅上升"
        ],
        "reviewSummaryTags": [
          "自己問來的 star",
          "英文提問經驗形成",
          "課堂參與感微幅上升"
        ]
      },
      {
        "id": "move_sticker_away",
        "branchId": "move_sticker_away",
        "choiceId": "w9_9_halloween_english_class_decoration_caring_teacher_choice_4",
        "triggerStoryMemoryTags": [
          "w9_9_halloween_english_class_decoration_caring_teacher_choice_4"
        ],
        "title": "桌面舒服了一點",
        "branchTitle": "桌面舒服了一點",
        "fullStoryText": "那張骷髏貼紙被傳到你附近時，你的手沒有立刻拿筆，反而把貼紙輕輕推遠了一點。「呢張可唔可以放遠啲？」你說得很細，像怕這句話太麻煩人。\n\n老師聽見後把貼紙拿走，換了一疊糖果和南瓜過來。她沒有問原因，只說：「呢邊用呢啲。」\n\n你那時沒有覺得自己很勇敢，只覺得桌面舒服了一點。可是後來再想起來，能說出「放遠啲」也是一種很小的保護自己的方法。",
        "impactList": [
          "新增回憶：被拿遠的貼紙；界線表達經驗；不適感降低"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "被拿遠的貼紙"
        ],
        "emotionalTags": [
          "不適感降低"
        ],
        "relationshipHints": [],
        "propertyHints": [
          "界線表達經驗"
        ],
        "reviewSummaryTags": [
          "被拿遠的貼紙",
          "界線表達經驗",
          "不適感降低"
        ]
      }
    ],
    "mapping": {
      "source": "info/week9_reviewStories_v0_1_full_story.md",
      "mappingMethod": "eventId alias + variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_w9_9_halloween_english_class_decoration_outgoing",
    "sourceEventId": "w9_halloween_english_decoration",
    "sourceVariantId": "kalong",
    "eventId": "w9_9_halloween_english_class_decoration",
    "variantId": "outgoing",
    "week": 9,
    "dateRange": "Oct 27–Nov 2",
    "title": "家朗的大南瓜",
    "timeText": "第 9 週，英文課前",
    "timeLabel": "第 9 週，英文課前",
    "placeText": "小一課室",
    "locationLabel": "小一課室",
    "characters": [
      "家朗"
    ],
    "characterIdHint": "classmate_outgoing_invite",
    "unknownDisplayName": null,
    "knownDisplayName": null,
    "sceneOpening": "紙南瓜貼到白板角落後，課室好像比平時吵一點。英文老師還未開始點名，家朗已經拿著橙色紙，把一個很大的南瓜畫在中間。那個南瓜的嘴巴歪到旁邊，眼睛卻畫得很圓。家朗畫得很快，手肘差點碰到你的顏色筆。\n\n他一邊畫一邊說：「我畫呢個！你畫蝙蝠啦！」畫到一半，他忽然停住，抬頭看黑板：「蝙蝠係 bat？係咪咁讀？」他問得很急，像如果答案快一點來，整張紙就會更快完成。",
    "branches": [
      {
        "id": "read_bat_together",
        "branchId": "read_bat_together",
        "choiceId": "w9_9_halloween_english_class_decoration_outgoing_choice_1",
        "triggerStoryMemoryTags": [
          "w9_9_halloween_english_class_decoration_outgoing_choice_1"
        ],
        "title": "兩個不太大的 bat",
        "branchTitle": "兩個不太大的 bat",
        "fullStoryText": "你跟著黑板上的字，很短地讀了一聲：「Bat。」\n\n家朗立刻也跟著讀：「Bat。」他讀完自己笑了一下，像這個字比想像中短。你們兩個的聲音不大，沒有蓋過全班，但剛好落在那張紙南瓜旁邊。\n\n後來你想起這節英文課時，記得家朗不是只會快。他也會在一個很短的英文生字前停一下，等你和他一起確認。那個 bat 因為一起讀過，變得沒那麼像考試。",
        "impactList": [
          "新增回憶：一起讀 bat；家朗共同學習片段；英文課社交感形成"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "一起讀 bat"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "家朗共同學習片段"
        ],
        "propertyHints": [
          "英文課社交感形成"
        ],
        "reviewSummaryTags": [
          "一起讀 bat",
          "家朗共同學習片段",
          "英文課社交感形成"
        ]
      },
      {
        "id": "draw_candy_beside_pumpkin",
        "branchId": "draw_candy_beside_pumpkin",
        "choiceId": "w9_9_halloween_english_class_decoration_outgoing_choice_2",
        "triggerStoryMemoryTags": [
          "w9_9_halloween_english_class_decoration_outgoing_choice_2"
        ],
        "title": "南瓜旁邊的一粒糖",
        "branchTitle": "南瓜旁邊的一粒糖",
        "fullStoryText": "你看著家朗畫得很大的南瓜，最後把自己的紙移到邊邊。「我畫糖果啦。」\n\n家朗低頭看了看，沒有說你不合群，只是很快地說：「都得，糖都係 Halloween。」他把自己的南瓜往左邊移一點，雖然南瓜已經太大，但還是勉強讓出一小角。\n\n你在那一角畫了一粒糖。它沒有家朗的南瓜顯眼，可是你知道那是他讓出來的位置。家朗的熱鬧有時會佔滿紙，但那天他也學會了把紙轉一轉。",
        "impactList": [
          "新增回憶：南瓜旁邊的糖；共同創作留下位置；同學節奏調整"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "南瓜旁邊的糖"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "同學節奏調整"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "南瓜旁邊的糖",
          "共同創作留下位置",
          "同學節奏調整"
        ]
      },
      {
        "id": "ask_teacher_bat",
        "branchId": "ask_teacher_bat",
        "choiceId": "w9_9_halloween_english_class_decoration_outgoing_choice_3",
        "triggerStoryMemoryTags": [
          "w9_9_halloween_english_class_decoration_outgoing_choice_3"
        ],
        "title": "真係 bat",
        "branchTitle": "真係 bat",
        "fullStoryText": "你沒有跟著亂讀，只說：「問老師點讀先啦。」\n\n家朗拿著那隻還未畫完的蝙蝠跑去講台，回來時眼睛亮亮的。「真係 bat。」他說得像剛剛拿到一個很小的勝利，還把 b 寫得特別大。\n\n那一刻你覺得問老師不是很丟臉的事。家朗跑得比你快，但答案回到桌面時，好像也有你的一份。",
        "impactList": [
          "新增回憶：一起問到的 bat；求助不再太尷尬；同學合作感微幅形成"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "一起問到的 bat"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "同學合作感微幅形成"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "一起問到的 bat",
          "求助不再太尷尬",
          "同學合作感微幅形成"
        ]
      },
      {
        "id": "tell_kalong_too_fast",
        "branchId": "tell_kalong_too_fast",
        "choiceId": "w9_9_halloween_english_class_decoration_outgoing_choice_4",
        "triggerStoryMemoryTags": [
          "w9_9_halloween_english_class_decoration_outgoing_choice_4"
        ],
        "title": "你畫得太快啦",
        "branchTitle": "你畫得太快啦",
        "fullStoryText": "家朗的南瓜越畫越大，快要佔了半張紙。你看著自己手上的筆，忍不住說：「你畫得太快，冇位啦。」\n\n他低頭看了一眼，才像突然發現紙不是只有他一個人在用。「哦，咁呢邊俾你。」他把紙轉了半圈，又用手掌壓住邊角。\n\n你沒有罵他，只是把問題說出來。後來那張紙上還是他的南瓜最大，但你的一角沒有消失。你慢慢明白，跟家朗一起做事，有時要在他衝出去前叫住他一下。",
        "impactList": [
          "新增回憶：叫住太快的家朗；界線表達在同伴中形成；共同工作節奏微調"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "叫住太快的家朗"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "叫住太快的家朗",
          "界線表達在同伴中形成"
        ],
        "propertyHints": [
          "界線表達在同伴中形成"
        ],
        "reviewSummaryTags": [
          "叫住太快的家朗",
          "界線表達在同伴中形成",
          "共同工作節奏微調"
        ]
      }
    ],
    "mapping": {
      "source": "info/week9_reviewStories_v0_1_full_story.md",
      "mappingMethod": "eventId alias + variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_w9_9_halloween_english_class_decoration_quiet",
    "sourceEventId": "w9_halloween_english_decoration",
    "sourceVariantId": "wingsum",
    "eventId": "w9_9_halloween_english_class_decoration",
    "variantId": "quiet",
    "week": 9,
    "dateRange": "Oct 27–Nov 2",
    "title": "穎心剪出來的小蝙蝠",
    "timeText": "第 9 週，英文課前",
    "timeLabel": "第 9 週，英文課前",
    "placeText": "小一課室",
    "locationLabel": "小一課室",
    "characters": [
      "穎心"
    ],
    "characterIdHint": "classmate_quiet_observer",
    "unknownDisplayName": null,
    "knownDisplayName": null,
    "sceneOpening": "英文老師把黑色紙和黃色紙分到每一組。拿到黑色紙時，穎心沒有立刻剪。她先把紙角對齊桌邊，又把剪刀轉到安全的一邊。白板上的小蝙蝠貼紙在風扇下面輕輕動，她看了很久，眉心皺得很小。\n\n過了一會兒，穎心細聲說：「我想剪細啲，唔好咁大隻。」她把剪刀慢慢轉向你，像怕刀尖對著人。「你用先嗎？」",
    "branches": [
      {
        "id": "let_wingsum_cut_first",
        "branchId": "let_wingsum_cut_first",
        "choiceId": "w9_9_halloween_english_class_decoration_quiet_choice_1",
        "triggerStoryMemoryTags": [
          "w9_9_halloween_english_class_decoration_quiet_choice_1"
        ],
        "title": "剪刀慢慢走",
        "branchTitle": "剪刀慢慢走",
        "fullStoryText": "你把手收回來，說：「你先用啦。」\n\n穎心點點頭，沒有再推來推去。她拿著剪刀，沿著黑色紙慢慢剪，剪到翅膀的位置時停了兩次。那隻蝙蝠很小，小到貼在白板上可能很快被人忽略，但翅膀很整齊。\n\n你後來想起那節課，記得的不是 Halloween 有多可怕，而是穎心用很慢的速度把一張黑紙變成不太嚇人的形狀。你們之間沒有說很多話，可是她先用剪刀，你也沒有覺得自己被排除。",
        "impactList": [
          "新增回憶：穎心的小蝙蝠；安靜合作片段；同桌安全感微幅上升"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "穎心的小蝙蝠"
        ],
        "emotionalTags": [
          "同桌安全感微幅上升"
        ],
        "relationshipHints": [
          "穎心的小蝙蝠"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "穎心的小蝙蝠",
          "安靜合作片段",
          "同桌安全感微幅上升"
        ]
      },
      {
        "id": "cut_stars_together",
        "branchId": "cut_stars_together",
        "choiceId": "w9_9_halloween_english_class_decoration_quiet_choice_2",
        "triggerStoryMemoryTags": [
          "w9_9_halloween_english_class_decoration_quiet_choice_2"
        ],
        "title": "黃色紙上的星星",
        "branchTitle": "黃色紙上的星星",
        "fullStoryText": "你看見她一直盯著蝙蝠，便拿起黃色紙說：「我哋剪星星啦。」\n\n穎心想了一下，把黑紙放下。她沒有很高興地點頭，只是把黃色紙移到桌中間，輕輕說：「星星易啲。」你們一起剪出幾個不太一樣大的星星，有一顆角還被剪斷了。\n\n那張紙最後沒有很 Halloween，可是貼到白板時，黑色蝙蝠旁邊多了幾點黃色。你記得穎心的手比剛才穩了一點，也記得自己沒有逼她留在害怕的圖案裡。",
        "impactList": [
          "新增回憶：一起剪星星；照顧同學界線；安靜合作加深"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "一起剪星星"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "照顧同學界線"
        ],
        "propertyHints": [
          "照顧同學界線"
        ],
        "reviewSummaryTags": [
          "一起剪星星",
          "照顧同學界線",
          "安靜合作加深"
        ]
      },
      {
        "id": "ask_about_scary_picture",
        "branchId": "ask_about_scary_picture",
        "choiceId": "w9_9_halloween_english_class_decoration_quiet_choice_3",
        "triggerStoryMemoryTags": [
          "w9_9_halloween_english_class_decoration_quiet_choice_3"
        ],
        "title": "太大隻",
        "branchTitle": "太大隻",
        "fullStoryText": "你看著她把黑紙放遠一點，小聲問：「你係咪唔鍾意鬼圖？」\n\n穎心沒有立刻答。她的手指按在紙角上，過了好一會兒才說：「太大隻。」她沒有說怕，也沒有看你，只把那張大蝙蝠貼紙推遠了一點。\n\n你那時才知道，不是每一個不喜歡都要講成害怕。穎心只是把太大的東西放遠，讓桌面重新安靜下來。你沒有再追問，這反而讓她留在你旁邊。",
        "impactList": [
          "新增回憶：太大隻的蝙蝠；學會不追問；穎心界線被看見"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "太大隻的蝙蝠"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "穎心界線被看見"
        ],
        "propertyHints": [
          "穎心界線被看見"
        ],
        "reviewSummaryTags": [
          "太大隻的蝙蝠",
          "學會不追問",
          "穎心界線被看見"
        ]
      },
      {
        "id": "draw_own_corner",
        "branchId": "draw_own_corner",
        "choiceId": "w9_9_halloween_english_class_decoration_quiet_choice_4",
        "triggerStoryMemoryTags": [
          "w9_9_halloween_english_class_decoration_quiet_choice_4"
        ],
        "title": "同一張桌上的安靜",
        "branchTitle": "同一張桌上的安靜",
        "fullStoryText": "你沒有加入剪紙，只在自己的紙角畫了一個小圖案。「我畫呢邊角落。」你說。\n\n穎心點了一下頭，繼續剪她的小蝙蝠。你畫你的角落，她剪她的邊，剪刀聲和筆尖聲輪流出現，中間沒有太多對話。\n\n後來你想到這節課，覺得你們不像家朗那樣一起大聲討論，也不像柏宇那樣把事情變成故事。你們只是坐在同一張桌上，各自做一小部分，但那份安靜沒有把你們推遠。",
        "impactList": [
          "新增回憶：同桌安靜創作；慢熱關係保持；創意參與微幅形成"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "同桌安靜創作"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "慢熱關係保持"
        ],
        "propertyHints": [
          "創意參與微幅形成"
        ],
        "reviewSummaryTags": [
          "同桌安靜創作",
          "慢熱關係保持",
          "創意參與微幅形成"
        ]
      }
    ],
    "mapping": {
      "source": "info/week9_reviewStories_v0_1_full_story.md",
      "mappingMethod": "eventId alias + variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_w9_10_corridor_ghost_story_halloween_rumor_curious",
    "sourceEventId": "w9_corridor_ghost_story",
    "sourceVariantId": "bakyu",
    "eventId": "w9_10_corridor_ghost_story_halloween_rumor",
    "variantId": "curious",
    "week": 9,
    "dateRange": "Oct 27–Nov 2",
    "title": "飲水機旁邊的三樓櫃",
    "timeText": "第 9 週，小息",
    "timeLabel": "第 9 週，小息",
    "placeText": "走廊飲水機旁",
    "locationLabel": "走廊飲水機旁",
    "characters": [
      "柏宇"
    ],
    "characterIdHint": "classmate_curious_troublemaker",
    "unknownDisplayName": null,
    "knownDisplayName": null,
    "sceneOpening": "小息時，走廊比平時多了幾張英文課作品。紙南瓜貼在牆上，風扇吹過來時，角落會輕輕動一下。幾個同學擠在飲水機旁邊，水聲、笑聲和拖鞋底擦地的聲音混在一起。你本來只是走過去飲水，卻聽見有人壓低聲音說，三樓那邊放學後會有奇怪聲音。\n\n柏宇站在人群中間，手裡拿著還沒喝完的水杯。他把聲音壓得很低：「我聽人講，三樓有個櫃夜晚會自己開。」他看見你，眼睛一亮，像突然多了一個可以分享秘密的人。「你信唔信？」",
    "branches": [
      {
        "id": "ask_which_cabinet",
        "branchId": "ask_which_cabinet",
        "choiceId": "w9_10_corridor_ghost_story_halloween_rumor_curious_choice_1",
        "triggerStoryMemoryTags": [
          "w9_10_corridor_ghost_story_halloween_rumor_curious_choice_1"
        ],
        "title": "說不清的櫃",
        "branchTitle": "說不清的櫃",
        "fullStoryText": "你立刻問：「邊個櫃呀？」\n\n柏宇指向樓梯方向，手指很快，又很快收回來。「應該係上面嗰邊……唔知第二個定第三個。」他越說越不清楚，旁邊同學卻靠得更近，好像故事說不清才更像真的。\n\n你沒有真的看到那個櫃，只是從那天開始，走過樓梯時會忍不住抬頭。柏宇的故事不一定是真的，可是它把原本普通的三樓變成了一個會被你記住的位置。",
        "impactList": [
          "新增回憶：說不清的三樓櫃；校園傳聞入口；探索感微幅形成"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "說不清的三樓櫃"
        ],
        "emotionalTags": [],
        "relationshipHints": [],
        "propertyHints": [
          "探索感微幅形成"
        ],
        "reviewSummaryTags": [
          "說不清的三樓櫃",
          "校園傳聞入口",
          "探索感微幅形成"
        ]
      },
      {
        "id": "ask_bakyu_lower_voice",
        "branchId": "ask_bakyu_lower_voice",
        "choiceId": "w9_10_corridor_ghost_story_halloween_rumor_curious_choice_2",
        "triggerStoryMemoryTags": [
          "w9_10_corridor_ghost_story_halloween_rumor_curious_choice_2"
        ],
        "title": "聲音放低了一點",
        "branchTitle": "聲音放低了一點",
        "fullStoryText": "你皺了皺眉，說：「唔好亂講啦，會嚇到人。」\n\n柏宇撇撇嘴，像覺得你掃興，但他真的把聲音放低了一點。「我又冇大聲。」他還是想講，眼睛還是望著樓梯，可是他開始看一眼旁邊那個縮著肩膀的同學。\n\n那天你沒有把故事完全停掉，也沒有變成老師那樣管人。你只是讓柏宇知道，傳聞不是只會變好玩，也可能會落到別人的心裡。",
        "impactList": [
          "新增回憶：叫柏宇細聲一點；界線和好奇形成張力；同學害怕被看見"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "叫柏宇細聲一點"
        ],
        "emotionalTags": [
          "同學害怕被看見"
        ],
        "relationshipHints": [
          "叫柏宇細聲一點",
          "同學害怕被看見"
        ],
        "propertyHints": [
          "界線和好奇形成張力"
        ],
        "reviewSummaryTags": [
          "叫柏宇細聲一點",
          "界線和好奇形成張力",
          "同學害怕被看見"
        ]
      },
      {
        "id": "admit_a_little_scared",
        "branchId": "admit_a_little_scared",
        "choiceId": "w9_10_corridor_ghost_story_halloween_rumor_curious_choice_3",
        "triggerStoryMemoryTags": [
          "w9_10_corridor_ghost_story_halloween_rumor_curious_choice_3"
        ],
        "title": "可能係風吹啫",
        "branchTitle": "可能係風吹啫",
        "fullStoryText": "你望向樓梯，心裡忽然涼了一下。「我有少少驚。」你說。\n\n柏宇本來還想繼續講，聽到你這句後立刻補了一句：「可能係風吹啫。」他講得很快，好像怕自己剛才講太多。故事沒有完全停，但那個會自己開的櫃，忽然從鬼故事變成可能只是風。\n\n你後來想起這一幕時，記得柏宇也不是只會嚇人。他看到你真的怕，會把門關回一點，讓那個故事不要整個跑出來。",
        "impactList": [
          "新增回憶：柏宇把故事說輕了；害怕被同學接住；傳聞壓力下降"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "柏宇把故事說輕了"
        ],
        "emotionalTags": [
          "害怕被同學接住",
          "傳聞壓力下降"
        ],
        "relationshipHints": [
          "柏宇把故事說輕了",
          "害怕被同學接住"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "柏宇把故事說輕了",
          "害怕被同學接住",
          "傳聞壓力下降"
        ]
      },
      {
        "id": "ask_lower_secret_voice",
        "branchId": "ask_lower_secret_voice",
        "choiceId": "w9_10_corridor_ghost_story_halloween_rumor_curious_choice_4",
        "triggerStoryMemoryTags": [
          "w9_10_corridor_ghost_story_halloween_rumor_curious_choice_4"
        ],
        "title": "像真的秘密",
        "branchTitle": "像真的秘密",
        "fullStoryText": "你靠近一點，提醒他：「你細聲啲啦。」\n\n柏宇立刻把手放到嘴邊，眼睛睜得更大，像這樣才更像秘密。飲水機旁邊的人還是想聽，但聲音沒有傳到整條走廊。有人經過時只看到你們圍在一起，不知道裡面正在講一個會自己開的櫃。\n\n那一刻你沒有阻止故事，也沒有讓它變成全走廊的聲音。它留在你們中間，小小的、半真半假的，像紙南瓜背後沒有貼牢的膠紙角。",
        "impactList": [
          "新增回憶：飲水機旁的秘密聲；與柏宇共享傳聞；秩序風險降低"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "飲水機旁的秘密聲"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "與柏宇共享傳聞"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "飲水機旁的秘密聲",
          "與柏宇共享傳聞",
          "秩序風險降低"
        ]
      }
    ],
    "mapping": {
      "source": "info/week9_reviewStories_v0_1_full_story.md",
      "mappingMethod": "eventId alias + variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_w9_10_corridor_ghost_story_halloween_rumor_outgoing",
    "sourceEventId": "w9_corridor_ghost_story",
    "sourceVariantId": "kalong",
    "eventId": "w9_10_corridor_ghost_story_halloween_rumor",
    "variantId": "outgoing",
    "week": 9,
    "dateRange": "Oct 27–Nov 2",
    "title": "家朗也回頭看了一眼",
    "timeText": "第 9 週，小息",
    "timeLabel": "第 9 週，小息",
    "placeText": "走廊飲水機旁",
    "locationLabel": "走廊飲水機旁",
    "characters": [
      "家朗"
    ],
    "characterIdHint": "classmate_outgoing_invite",
    "unknownDisplayName": null,
    "knownDisplayName": null,
    "sceneOpening": "飲水機前面排了幾個人，大家手裡拿著水壺，卻沒有立刻走開。牆上的紙南瓜被風扇吹得一動一動，有同學說三樓放學後會有聲音。你剛走近，家朗也正好來飲水。他本來只是想快點喝完回去，聽到「夜晚自己開」幾個字後，腳步停住了。\n\n家朗湊過來，眼睛在說故事的人和樓梯之間來回看。「真㗎？但我哋又唔會夜晚留校。」他笑了一下，又轉過來問你：「你驚唔驚呀？」",
    "branches": [
      {
        "id": "say_a_little_scared",
        "branchId": "say_a_little_scared",
        "choiceId": "w9_10_corridor_ghost_story_halloween_rumor_outgoing_choice_1",
        "triggerStoryMemoryTags": [
          "w9_10_corridor_ghost_story_halloween_rumor_outgoing_choice_1"
        ],
        "title": "被拉出故事",
        "branchTitle": "被拉出故事",
        "fullStoryText": "你看著樓梯，很小聲地說：「有少少。」\n\n家朗幾乎立刻接住：「咁我哋唔聽啦。」他說得很快，像平時拉你去看熱鬧一樣，只是這次是把你從熱鬧裡拉走。他還沒喝完水，就把水壺蓋子扭上。\n\n你們離開飲水機時，背後還有人在講。可是家朗走在旁邊，那個故事好像沒有剛才那麼貼近你。你後來記得，家朗不只是會拉人去玩，有時也會很快地拉人離開。",
        "impactList": [
          "新增回憶：家朗把你拉出鬼故事；同伴照應片段；害怕感降低"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "家朗把你拉出鬼故事"
        ],
        "emotionalTags": [
          "害怕感降低"
        ],
        "relationshipHints": [
          "家朗把你拉出鬼故事",
          "同伴照應片段"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "家朗把你拉出鬼故事",
          "同伴照應片段",
          "害怕感降低"
        ]
      },
      {
        "id": "say_do_not_believe",
        "branchId": "say_do_not_believe",
        "choiceId": "w9_10_corridor_ghost_story_halloween_rumor_outgoing_choice_2",
        "triggerStoryMemoryTags": [
          "w9_10_corridor_ghost_story_halloween_rumor_outgoing_choice_2"
        ],
        "title": "不信也會回頭",
        "branchTitle": "不信也會回頭",
        "fullStoryText": "你說：「我唔信。」\n\n家朗馬上跟著說：「我都唔信。」他說得很快，像這樣就能把故事關掉。可是你們排隊準備回班房時，他還是回頭看了三樓一眼，動作很短，短到如果不是你剛好看見，可能會以為他真的完全不怕。\n\n那個回頭讓你覺得有點好笑，也有點安心。原來說不信的人，也可能還有一點點好奇。",
        "impactList": [
          "新增回憶：家朗回頭看三樓；同齡誠實感形成；鬼故事威力變輕"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "家朗回頭看三樓"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "家朗回頭看三樓"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "家朗回頭看三樓",
          "同齡誠實感形成",
          "鬼故事威力變輕"
        ]
      },
      {
        "id": "ask_if_kalong_believes",
        "branchId": "ask_if_kalong_believes",
        "choiceId": "w9_10_corridor_ghost_story_halloween_rumor_outgoing_choice_3",
        "triggerStoryMemoryTags": [
          "w9_10_corridor_ghost_story_halloween_rumor_outgoing_choice_3"
        ],
        "title": "半信半唔信",
        "branchTitle": "半信半唔信",
        "fullStoryText": "你反問他：「咁你信唔信？」\n\n家朗張了張口，像本來想說不信，最後卻改成：「我半信半唔信。」說完他自己笑了，好像這個答案不夠威風，但比較真。\n\n你那時忽然覺得，家朗不是每次都一定站在最前面。他也會被一個走廊故事拖住腳步，只是他說出來的速度比別人快。這個半信半不信，讓他看起來沒那麼像永遠不怕的人。",
        "impactList": [
          "新增回憶：半信半唔信；家朗露出緊張一面；同學形象變得立體"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "半信半唔信"
        ],
        "emotionalTags": [
          "家朗露出緊張一面"
        ],
        "relationshipHints": [
          "家朗露出緊張一面",
          "同學形象變得立體"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "半信半唔信",
          "家朗露出緊張一面",
          "同學形象變得立體"
        ]
      },
      {
        "id": "leave_for_queue",
        "branchId": "leave_for_queue",
        "choiceId": "w9_10_corridor_ghost_story_halloween_rumor_outgoing_choice_4",
        "triggerStoryMemoryTags": [
          "w9_10_corridor_ghost_story_halloween_rumor_outgoing_choice_4"
        ],
        "title": "把故事留在飲水機",
        "branchTitle": "把故事留在飲水機",
        "fullStoryText": "你看了看鐘，又看了看飲水機旁邊越圍越多的人，說：「走啦，要排隊。」\n\n家朗跟著你走，邊走邊回頭。「等陣先再聽囉。」他說得很小聲，但腳步沒有停。你們回到隊伍時，老師還沒來，前面同學正在整理水壺帶。\n\n鬼故事留在飲水機旁邊，沒有跟著你回到隊伍中間。那天你沒有證明故事是真是假，只是選擇先回到自己要去的位置。",
        "impactList": [
          "新增回憶：把鬼故事留在飲水機；秩序選擇形成；與家朗同步離開"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "把鬼故事留在飲水機"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "與家朗同步離開"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "把鬼故事留在飲水機",
          "秩序選擇形成",
          "與家朗同步離開"
        ]
      }
    ],
    "mapping": {
      "source": "info/week9_reviewStories_v0_1_full_story.md",
      "mappingMethod": "eventId alias + variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_w9_10_corridor_ghost_story_halloween_rumor_quiet",
    "sourceEventId": "w9_corridor_ghost_story",
    "sourceVariantId": "wingsum",
    "eventId": "w9_10_corridor_ghost_story_halloween_rumor",
    "variantId": "quiet",
    "week": 9,
    "dateRange": "Oct 27–Nov 2",
    "title": "穎心不想聽咁多",
    "timeText": "第 9 週，小息",
    "timeLabel": "第 9 週，小息",
    "placeText": "走廊飲水機旁",
    "locationLabel": "走廊飲水機旁",
    "characters": [
      "穎心"
    ],
    "characterIdHint": "classmate_quiet_observer",
    "unknownDisplayName": null,
    "knownDisplayName": null,
    "sceneOpening": "走廊貼著英文課作品，紙南瓜和糖果圖案一排排貼在牆上。飲水機旁邊的人越圍越多，說話聲卻越壓越低。你聽到有人說三樓的櫃夜晚會自己開，又有人補一句放學後會有怪聲。\n\n穎心站在人群外，手裡拿著水杯。她聽到「自己開」三個字時皺了一下眉，沒有再往前。她小聲說：「我唔想聽咁多。」水杯被她握得很緊，杯口有一點水晃出來。",
    "branches": [
      {
        "id": "walk_back_with_wingsum",
        "branchId": "walk_back_with_wingsum",
        "choiceId": "w9_10_corridor_ghost_story_halloween_rumor_quiet_choice_1",
        "triggerStoryMemoryTags": [
          "w9_10_corridor_ghost_story_halloween_rumor_quiet_choice_1"
        ],
        "title": "走到轉角才鬆一口氣",
        "branchTitle": "走到轉角才鬆一口氣",
        "fullStoryText": "你沒有再留在飲水機旁邊，對她說：「我同你返班房。」\n\n穎心點點頭，跟你一起走。你們走過紙南瓜和英文單字，走到轉角時，飲水機那邊的聲音才變得模糊。穎心的手指鬆開水杯一點，沒有很大聲說多謝，只是放慢腳步，等你一起走。\n\n回到課室後，她把水杯放好，像什麼都沒有發生。可是你記得那個轉角。原來陪人離開，不一定要講很多安慰的話，只要真的一起走開。",
        "impactList": [
          "新增回憶：陪穎心離開鬼故事；安靜支援片段；穎心安全感上升"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "陪穎心離開鬼故事"
        ],
        "emotionalTags": [
          "穎心安全感上升"
        ],
        "relationshipHints": [
          "陪穎心離開鬼故事",
          "穎心安全感上升"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "陪穎心離開鬼故事",
          "安靜支援片段",
          "穎心安全感上升"
        ]
      },
      {
        "id": "ask_others_quiet",
        "branchId": "ask_others_quiet",
        "choiceId": "w9_10_corridor_ghost_story_halloween_rumor_quiet_choice_2",
        "triggerStoryMemoryTags": [
          "w9_10_corridor_ghost_story_halloween_rumor_quiet_choice_2"
        ],
        "title": "水杯握得鬆了一點",
        "branchTitle": "水杯握得鬆了一點",
        "fullStoryText": "你轉向那群同學，說：「你哋唔好講咁大聲啦。」\n\n有人看了你一眼，像有點掃興，但聲音真的小了一點。穎心沒有加入說話，只是站在你旁邊，手裡的水杯慢慢放低。\n\n你沒有把所有人趕走，也沒有變成管秩序的人。你只是讓那個故事不要再一直撞過來。後來你記得，穎心沒有說謝謝，但她站的位置沒有再往後退。",
        "impactList": [
          "新增回憶：替穎心擋低一點聲音；界線支援形成；同學聲量下降"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "替穎心擋低一點聲音"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "替穎心擋低一點聲音",
          "同學聲量下降"
        ],
        "propertyHints": [
          "界線支援形成"
        ],
        "reviewSummaryTags": [
          "替穎心擋低一點聲音",
          "界線支援形成",
          "同學聲量下降"
        ]
      },
      {
        "id": "ask_if_scared",
        "branchId": "ask_if_scared",
        "choiceId": "w9_10_corridor_ghost_story_halloween_rumor_quiet_choice_3",
        "triggerStoryMemoryTags": [
          "w9_10_corridor_ghost_story_halloween_rumor_quiet_choice_3"
        ],
        "title": "不是每個不想聽都要被拆穿",
        "branchTitle": "不是每個不想聽都要被拆穿",
        "fullStoryText": "你看著她，忍不住問：「你驚呀？」\n\n穎心停了停，沒有點頭，也沒有搖頭。她只說：「唔想聽。」那句話很短，像她只想把門關上一點，不想把整件事拿出來講。\n\n你那時有點不知道該怎樣接。後來再想，才覺得自己問得太直。穎心不是要你猜中她的心情，她只是想離開那個聲音。",
        "impactList": [
          "新增回憶：唔想聽；學會不把害怕問到底；穎心界線被看見"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "唔想聽"
        ],
        "emotionalTags": [
          "學會不把害怕問到底"
        ],
        "relationshipHints": [
          "穎心界線被看見"
        ],
        "propertyHints": [
          "穎心界線被看見"
        ],
        "reviewSummaryTags": [
          "唔想聽",
          "學會不把害怕問到底",
          "穎心界線被看見"
        ]
      },
      {
        "id": "stay_and_listen",
        "branchId": "stay_and_listen",
        "choiceId": "w9_10_corridor_ghost_story_halloween_rumor_quiet_choice_4",
        "triggerStoryMemoryTags": [
          "w9_10_corridor_ghost_story_halloween_rumor_quiet_choice_4"
        ],
        "title": "空了的位置",
        "branchTitle": "空了的位置",
        "fullStoryText": "你說：「我聽多陣。」\n\n穎心點點頭，自己拿著水杯走回課室。你留下來聽故事，柏宇那邊又多講了幾句，三樓的櫃被說得更像真的。可是聽到一半，你忽然發現穎心剛才站的位置空了。\n\n那天你沒有做錯什麼，只是選了留下。可是後來再想起這個小息，你會記得鬼故事，也會記得有人在你旁邊安靜地離開。不是每一次好奇都會有人一起留下。",
        "impactList": [
          "新增回憶：穎心自己回班房；探索與陪伴分開；關係進度保持距離"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "穎心自己回班房"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "穎心自己回班房",
          "關係進度保持距離"
        ],
        "propertyHints": [
          "探索與陪伴分開"
        ],
        "reviewSummaryTags": [
          "穎心自己回班房",
          "探索與陪伴分開",
          "關係進度保持距離"
        ]
      }
    ],
    "mapping": {
      "source": "info/week9_reviewStories_v0_1_full_story.md",
      "mappingMethod": "eventId alias + variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_w9_10_corridor_ghost_story_halloween_rumor_zhiyau",
    "sourceEventId": "w9_corridor_ghost_story",
    "sourceVariantId": "senior_yau",
    "eventId": "w9_10_corridor_ghost_story_halloween_rumor",
    "variantId": "zhiyau",
    "week": 9,
    "dateRange": "Oct 27–Nov 2",
    "title": "飲水機旁的高年級女生",
    "timeText": "第 9 週，小息",
    "timeLabel": "第 9 週，小息",
    "placeText": "走廊飲水機旁",
    "locationLabel": "走廊飲水機旁",
    "characters": [
      "高年級女生／芷悠"
    ],
    "characterIdHint": "senior_friendly_girl_zhiyau",
    "unknownDisplayName": "高年級女生",
    "knownDisplayName": "芷悠師姐",
    "sceneOpening": "小息的飲水機旁邊堵住了幾個小一同學。有人拿著水壺，卻一直沒有讓開，因為那個三樓櫃的故事正講到最可怕的地方。牆上的紙南瓜在風扇下晃，後面排隊的人開始探頭看前面發生什麼事。\n\n一位高年級女生經過，腳步停了一下。你未必那時已經知道她叫芷悠，只記得她沒有用很兇的語氣罵人，只是說：「飲水就飲水，唔好塞住條路。」聽到鬼故事，她笑了一下，又說：「好多傳聞都係講講下變多咗。」",
    "branches": [
      {
        "id": "ask_senior_heard_before",
        "branchId": "ask_senior_heard_before",
        "choiceId": "w9_10_corridor_ghost_story_halloween_rumor_zhiyau_choice_1",
        "triggerStoryMemoryTags": [
          "w9_10_corridor_ghost_story_halloween_rumor_zhiyau_choice_1"
        ],
        "title": "每年都不一樣的版本",
        "branchTitle": "每年都不一樣的版本",
        "fullStoryText": "你抬頭問她：「師姐，你以前有冇聽過？」\n\n高年級女生想了想，說以前也有人講過，不過有時是三樓，有時又變成禮堂後面。「每年都唔同㗎。」她說得很平常，像那些故事會跟著紙南瓜一樣被人貼上去，又被人改一改。\n\n你沒有因此完全不怕，但那個櫃突然不像真的有一個固定答案。原來傳聞會長大，也會走樣。你第一次從高年級口中聽到，學校裡有些可怕的聲音，可能只是被講多了。",
        "impactList": [
          "新增回憶：每年不同的鬼故事；高年級經驗線索；傳聞感降低"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "每年不同的鬼故事"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "高年級經驗線索"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "每年不同的鬼故事",
          "高年級經驗線索",
          "傳聞感降低"
        ]
      },
      {
        "id": "make_room_at_fountain",
        "branchId": "make_room_at_fountain",
        "choiceId": "w9_10_corridor_ghost_story_halloween_rumor_zhiyau_choice_2",
        "triggerStoryMemoryTags": [
          "w9_10_corridor_ghost_story_halloween_rumor_zhiyau_choice_2"
        ],
        "title": "讓開一步",
        "branchTitle": "讓開一步",
        "fullStoryText": "你看見後面有人還拿著水壺，便往旁邊移了一步。「我讓開先。」你說。\n\n你一讓開，後面的同學終於可以走近飲水機。高年級女生看了你一眼，點點頭，沒有再多說。她的注意力很快轉到還堵在中間的幾個人身上。\n\n那件事很小，小到不像一個故事。可是後來你想起那個小息，會記得自己沒有站在走廊中間。你沒有解決鬼故事，只是先讓路通了。",
        "impactList": [
          "新增回憶：在飲水機旁讓路；校園秩序感形成；高年級印象平穩"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "在飲水機旁讓路"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "高年級印象平穩"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "在飲水機旁讓路",
          "校園秩序感形成",
          "高年級印象平穩"
        ]
      },
      {
        "id": "tell_senior_they_are_scared",
        "branchId": "tell_senior_they_are_scared",
        "choiceId": "w9_10_corridor_ghost_story_halloween_rumor_zhiyau_choice_3",
        "triggerStoryMemoryTags": [
          "w9_10_corridor_ghost_story_halloween_rumor_zhiyau_choice_3"
        ],
        "title": "驚就唔好再加",
        "branchTitle": "驚就唔好再加",
        "fullStoryText": "你望向那群越講越起勁的同學，小聲說：「佢哋講到好驚。」\n\n高年級女生看了那邊一眼，語氣沒有很重，但句子很清楚：「驚就唔好再加。」幾個同學安靜了一點，有人還想笑，最後只是低頭喝水。\n\n你那時覺得她不像老師，因為她沒有叫大家排成一行，也沒有記名。可是她一句話讓故事停了一下。原來高年級不是全都很遠，有些人只是剛好懂得在走廊上把聲音壓下來。",
        "impactList": [
          "新增回憶：驚就唔好再加；高年級照應片段；走廊聲量下降"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "驚就唔好再加"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "高年級照應片段"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "驚就唔好再加",
          "高年級照應片段",
          "走廊聲量下降"
        ]
      },
      {
        "id": "return_to_classroom",
        "branchId": "return_to_classroom",
        "choiceId": "w9_10_corridor_ghost_story_halloween_rumor_zhiyau_choice_4",
        "triggerStoryMemoryTags": [
          "w9_10_corridor_ghost_story_halloween_rumor_zhiyau_choice_4"
        ],
        "title": "樓梯沒有剛才那麼可怕",
        "branchTitle": "樓梯沒有剛才那麼可怕",
        "fullStoryText": "你沒有再問，轉身說：「我返班房先。」\n\n你離開飲水機時，背後還有人小聲講。高年級女生正在叫別人不要堵路，水聲重新響起來。你走過樓梯口，忍不住看了一眼三樓，但腳步沒有停。\n\n回到課室後，白板角落的紙南瓜還在。你沒有弄清楚故事真假，可是離開之後，樓梯好像沒有剛才那麼可怕。它重新變回學校的一部分，不再全是故事。",
        "impactList": [
          "新增回憶：從鬼故事旁離開；自我調節片段；恐懼保持在可承受範圍"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "從鬼故事旁離開"
        ],
        "emotionalTags": [
          "恐懼保持在可承受範圍"
        ],
        "relationshipHints": [],
        "propertyHints": [],
        "reviewSummaryTags": [
          "從鬼故事旁離開",
          "自我調節片段",
          "恐懼保持在可承受範圍"
        ]
      }
    ],
    "mapping": {
      "source": "info/week9_reviewStories_v0_1_full_story.md",
      "mappingMethod": "eventId alias + variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_w9_11_sports_day_practice_grouping_outgoing",
    "sourceEventId": "w9_sports_day_practice_group",
    "sourceVariantId": "kalong",
    "eventId": "w9_11_sports_day_practice_grouping",
    "variantId": "outgoing",
    "week": 9,
    "dateRange": "Oct 27–Nov 2",
    "title": "白線前的家朗",
    "timeText": "第 9 週，體育堂",
    "timeLabel": "第 9 週，體育堂",
    "placeText": "操場跑道邊",
    "locationLabel": "操場跑道邊",
    "characters": [
      "家朗"
    ],
    "characterIdHint": "classmate_outgoing_invite",
    "unknownDisplayName": null,
    "knownDisplayName": null,
    "sceneOpening": "體育堂上，老師用哨子把大家叫到操場邊。今天不是真的比賽，只是試一試跑道、分組練習和聽口令。太陽曬在白線上，膠跑道有一點熱，大家站在自己的組別後面，有人一直看鞋帶，有人不停問是不是要跑很快。\n\n家朗排在你前面，回頭時臉被太陽照得很亮。「我哋同組喎！一陣聽到啪就跑。」他做了一個起跑姿勢，腳往旁邊一伸，差點碰到另一個同學的鞋。",
    "branches": [
      {
        "id": "warn_kalong_about_bumping",
        "branchId": "warn_kalong_about_bumping",
        "choiceId": "w9_11_sports_day_practice_grouping_outgoing_choice_1",
        "triggerStoryMemoryTags": [
          "w9_11_sports_day_practice_grouping_outgoing_choice_1"
        ],
        "title": "先收回那隻腳",
        "branchTitle": "先收回那隻腳",
        "fullStoryText": "你立刻提醒他：「你小心撞到人呀。」\n\n家朗低頭看見自己的腳，馬上收回來，轉向旁邊同學說：「唔好意思。」他說得很快，像怕慢一點就會被老師看見。收回腳後，他仍然很想跑，腳尖在白線後面一下一下地動。\n\n你那時發現，家朗的興奮有時會比身體先跑出去。你沒有叫他不要開心，只是把他拉回白線後面一點。",
        "impactList": [
          "新增回憶：家朗收回那隻腳；同伴提醒形成；運動日秩序感上升"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "家朗收回那隻腳"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "家朗收回那隻腳",
          "同伴提醒形成"
        ],
        "propertyHints": [
          "運動日秩序感上升"
        ],
        "reviewSummaryTags": [
          "家朗收回那隻腳",
          "同伴提醒形成",
          "運動日秩序感上升"
        ]
      },
      {
        "id": "ask_slow_run_first",
        "branchId": "ask_slow_run_first",
        "choiceId": "w9_11_sports_day_practice_grouping_outgoing_choice_2",
        "triggerStoryMemoryTags": [
          "w9_11_sports_day_practice_grouping_outgoing_choice_2"
        ],
        "title": "頭先慢少少",
        "branchTitle": "頭先慢少少",
        "fullStoryText": "你看著跑道，有點不確定地說：「一陣先慢慢跑得唔得？」\n\n家朗本來想說快一點，嘴巴張開又停住。最後他改口：「咁頭先慢少少。」他還是想跑，但這一次沒有立刻把你丟在後面。\n\n那天你們真正跑起來時，家朗還是比你快半步。可是你記得他在起跑前那個小小的改口。原來一起跑，不一定要完全一樣快，只要有人願意先慢一點等你開始。",
        "impactList": [
          "新增回憶：頭先慢少少；同伴節奏調整；運動緊張感降低"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "頭先慢少少"
        ],
        "emotionalTags": [
          "運動緊張感降低"
        ],
        "relationshipHints": [
          "同伴節奏調整"
        ],
        "propertyHints": [
          "運動緊張感降低"
        ],
        "reviewSummaryTags": [
          "頭先慢少少",
          "同伴節奏調整",
          "運動緊張感降低"
        ]
      },
      {
        "id": "say_nervous_to_kalong",
        "branchId": "say_nervous_to_kalong",
        "choiceId": "w9_11_sports_day_practice_grouping_outgoing_choice_3",
        "triggerStoryMemoryTags": [
          "w9_11_sports_day_practice_grouping_outgoing_choice_3"
        ],
        "title": "我等你",
        "branchTitle": "我等你",
        "fullStoryText": "哨子還沒響，你的手心已經有點出汗。「我有啲緊張。」你說。\n\n家朗回頭看你，沒有笑你。他很快地說：「咁我等你。」這句話聽起來很肯定，雖然你也不知道跑起來後他是不是真的等得到。\n\n後來哨子響時，他還是衝得很快，但起步前那一句留在你心裡。你不是因為他真的一直等你才記住，而是因為在白線前，有人先承認你可以緊張。",
        "impactList": [
          "新增回憶：白線前的一句我等你；自信微幅被接住；同伴支持片段"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "白線前的一句我等你"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "同伴支持片段"
        ],
        "propertyHints": [
          "自信微幅被接住"
        ],
        "reviewSummaryTags": [
          "白線前的一句我等你",
          "自信微幅被接住",
          "同伴支持片段"
        ]
      },
      {
        "id": "wait_for_whistle",
        "branchId": "wait_for_whistle",
        "choiceId": "w9_11_sports_day_practice_grouping_outgoing_choice_4",
        "triggerStoryMemoryTags": [
          "w9_11_sports_day_practice_grouping_outgoing_choice_4"
        ],
        "title": "沒有偷跑",
        "branchTitle": "沒有偷跑",
        "fullStoryText": "你盯著老師手上的哨子，說：「我聽口令先。」\n\n家朗也看向老師，腳尖還是一直動，但沒有衝出去。你們兩個站在白線後面，等那一下聲音。操場很大，旁邊組別有人講話，可是你把注意力放在哨子上。\n\n哨聲響起時，你沒有最快，家朗也沒有偷跑。後來你回想這次練習，覺得等待口令本身也是一件需要用力的事，尤其是身邊有人已經快要跑出去。",
        "impactList": [
          "新增回憶：等哨子的白線；規則感形成；運動日準備片段"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "等哨子的白線"
        ],
        "emotionalTags": [],
        "relationshipHints": [],
        "propertyHints": [
          "規則感形成",
          "運動日準備片段"
        ],
        "reviewSummaryTags": [
          "等哨子的白線",
          "規則感形成",
          "運動日準備片段"
        ]
      }
    ],
    "mapping": {
      "source": "info/week9_reviewStories_v0_1_full_story.md",
      "mappingMethod": "eventId alias + variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_w9_11_sports_day_practice_grouping_competitive",
    "sourceEventId": "w9_sports_day_practice_group",
    "sourceVariantId": "zixuan",
    "eventId": "w9_11_sports_day_practice_grouping",
    "variantId": "competitive",
    "week": 9,
    "dateRange": "Oct 27–Nov 2",
    "title": "梓軒的跑道問題",
    "timeText": "第 9 週，體育堂",
    "timeLabel": "第 9 週，體育堂",
    "placeText": "操場跑道邊",
    "locationLabel": "操場跑道邊",
    "characters": [
      "梓軒"
    ],
    "characterIdHint": "classmate_competitive_peer",
    "unknownDisplayName": null,
    "knownDisplayName": null,
    "sceneOpening": "操場上的白線把大家分成幾組。老師說今天只是練習，不計名次，可是「跑」這個字一出現，有些同學已經開始看誰站在最前面。梓軒把袖子拉起來，又把鞋尖對準跑道，好像身體已經準備好要回答一個問題。\n\n他看著終點，再轉頭問你：「你覺得邊個最快？」他明明在問別人，眼睛卻像已經把自己放進答案裡。",
    "branches": [
      {
        "id": "say_cannot_know_before_running",
        "branchId": "say_cannot_know_before_running",
        "choiceId": "w9_11_sports_day_practice_grouping_competitive_choice_1",
        "triggerStoryMemoryTags": [
          "w9_11_sports_day_practice_grouping_competitive_choice_1"
        ],
        "title": "未跑點知",
        "branchTitle": "未跑點知",
        "fullStoryText": "你沒有跟著看其他人，只說：「未跑點知。」\n\n梓軒嘟囔了一句：「都係。」他像是少了一個可以先猜的排名，只好把視線拉回自己的跑道。旁邊有人還在說誰跑得快，你沒有加入。\n\n這次你沒有贏他，也沒有輸給他。你只是把那個還沒發生的比賽，留到真正開始後再說。",
        "impactList": [
          "新增回憶：未跑點知；避開預先排名；競爭壓力降低"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "未跑點知"
        ],
        "emotionalTags": [
          "競爭壓力降低"
        ],
        "relationshipHints": [],
        "propertyHints": [],
        "reviewSummaryTags": [
          "未跑點知",
          "避開預先排名",
          "競爭壓力降低"
        ]
      },
      {
        "id": "ask_if_wants_to_win",
        "branchId": "ask_if_wants_to_win",
        "choiceId": "w9_11_sports_day_practice_grouping_competitive_choice_2",
        "triggerStoryMemoryTags": [
          "w9_11_sports_day_practice_grouping_competitive_choice_2"
        ],
        "title": "那個梗係",
        "branchTitle": "那個梗係",
        "fullStoryText": "你看著他拉袖子的動作，問：「你係咪想贏呀？」\n\n梓軒幾乎馬上說：「梗係啦。」說完他又看向終點，嘴巴抿了一下。那個「梗係」聽起來很有力，但你忽然覺得它也有一點重，像不贏就會有什麼東西壓回他身上。\n\n你沒有再追問。跑道還在前面，白線很直，而梓軒站得比剛才更用力。",
        "impactList": [
          "新增回憶：梓軒想贏；看見比較背後的壓力；競爭線加深"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "梓軒想贏"
        ],
        "emotionalTags": [
          "看見比較背後的壓力"
        ],
        "relationshipHints": [
          "梓軒想贏"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "梓軒想贏",
          "看見比較背後的壓力",
          "競爭線加深"
        ]
      },
      {
        "id": "say_just_finish",
        "branchId": "say_just_finish",
        "choiceId": "w9_11_sports_day_practice_grouping_competitive_choice_3",
        "triggerStoryMemoryTags": [
          "w9_11_sports_day_practice_grouping_competitive_choice_3"
        ],
        "title": "跑完就得",
        "branchTitle": "跑完就得",
        "fullStoryText": "你望著跑道，說：「我跑完就得。」\n\n梓軒像不知道怎樣接這句。過了一會兒，他才補一句：「跑完都要跑好啲。」他說得不算兇，倒像是真的不明白為什麼有人只想跑完。\n\n你站在白線後面，知道自己和他的目標不太一樣。對他來說，跑道像一條要排位置的線；對你來說，今天能從起點跑到終點，也已經是一件事。",
        "impactList": [
          "新增回憶：跑完就得；自己的目標被保留；與梓軒價值差異出現"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "跑完就得"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "與梓軒價值差異出現"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "跑完就得",
          "自己的目標被保留",
          "與梓軒價值差異出現"
        ]
      },
      {
        "id": "refuse_guess_rank",
        "branchId": "refuse_guess_rank",
        "choiceId": "w9_11_sports_day_practice_grouping_competitive_choice_4",
        "triggerStoryMemoryTags": [
          "w9_11_sports_day_practice_grouping_competitive_choice_4"
        ],
        "title": "不估名次",
        "branchTitle": "不估名次",
        "fullStoryText": "你沒有看向其他人，只說：「我唔估。」\n\n梓軒等了一下，見你真的不接，就轉去問另一個同學。那邊很快又開始猜誰最快，你站在白線後，聽到那些名字在空氣裡跳來跳去，卻沒有一個落到你身上。\n\n那天你不是最勇敢，也不是最冷淡。你只是沒有把自己交給那個還沒開始的排名。",
        "impactList": [
          "新增回憶：不估名次；界線形成；社交競爭保持距離"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "不估名次"
        ],
        "emotionalTags": [],
        "relationshipHints": [],
        "propertyHints": [
          "界線形成"
        ],
        "reviewSummaryTags": [
          "不估名次",
          "界線形成",
          "社交競爭保持距離"
        ]
      }
    ],
    "mapping": {
      "source": "info/week9_reviewStories_v0_1_full_story.md",
      "mappingMethod": "eventId alias + variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_w9_11_sports_day_practice_grouping_hoiching",
    "sourceEventId": "w9_sports_day_practice_group",
    "sourceVariantId": "senior_kaiching",
    "eventId": "w9_11_sports_day_practice_grouping",
    "variantId": "hoiching",
    "week": 9,
    "dateRange": "Oct 27–Nov 2",
    "title": "校隊女生的白線",
    "timeText": "第 9 週，體育堂",
    "timeLabel": "第 9 週，體育堂",
    "placeText": "操場跑道邊",
    "locationLabel": "操場跑道邊",
    "characters": [
      "校隊女生／凱晴"
    ],
    "characterIdHint": "senior_captain_hoiching",
    "unknownDisplayName": "校隊女生",
    "knownDisplayName": "凱晴師姐",
    "sceneOpening": "體育老師叫大家試跑前，幾個高年級學生在旁邊幫忙排雪糕筒。你留意到一個校隊女生，她手裡拿著幾個橙色雪糕筒，走路很快，放下時卻放得很直。你未必那時已經知道她叫凱晴，只覺得她一站在跑道邊，大家就會自然把腳縮回線後。\n\n她看見低年級排得歪，直接說：「線後面，唔好踩出去。跑之前先聽口令。」她說得快，但手勢很清楚，不像老師那樣長篇，只是把該站的位置指出來。",
    "branches": [
      {
        "id": "stand_behind_line",
        "branchId": "stand_behind_line",
        "choiceId": "w9_11_sports_day_practice_grouping_hoiching_choice_1",
        "triggerStoryMemoryTags": [
          "w9_11_sports_day_practice_grouping_hoiching_choice_1"
        ],
        "title": "眼神從鞋邊移開",
        "branchTitle": "眼神從鞋邊移開",
        "fullStoryText": "你低頭看見自己的腳尖踩到白線，立刻退後。「我企返後面。」你說。\n\n校隊女生沒有稱讚，也沒有笑。她的眼神從你鞋邊移開，轉去看下一個站歪的同學。那一刻你知道，對她來說，站對位置不是值得表揚的大事，只是開始前應該做好的事。\n\n你把腳放回線後，心裡有一點緊。可是那條白線也讓你知道，自己至少現在站對了。",
        "impactList": [
          "新增回憶：凱晴的白線提醒；運動日規則感形成；高年級要求型印象建立"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "凱晴的白線提醒"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "凱晴的白線提醒",
          "高年級要求型印象建立"
        ],
        "propertyHints": [
          "運動日規則感形成"
        ],
        "reviewSummaryTags": [
          "凱晴的白線提醒",
          "運動日規則感形成",
          "高年級要求型印象建立"
        ]
      },
      {
        "id": "ask_first_step",
        "branchId": "ask_first_step",
        "choiceId": "w9_11_sports_day_practice_grouping_hoiching_choice_2",
        "triggerStoryMemoryTags": [
          "w9_11_sports_day_practice_grouping_hoiching_choice_2"
        ],
        "title": "不是只靠衝",
        "branchTitle": "不是只靠衝",
        "fullStoryText": "你看她示範別人的站姿，忍不住問：「第一步點跑？」\n\n校隊女生看了你一眼，沒有嫌問題細。她把腳尖放在白線後面，示範了一下：「唔好跪太低，會慢。」她的句子很短，但你看見腳應該放在哪裡。\n\n你不一定立刻跑得好，可是從那一刻起，起跑不是只靠衝。它變成一個可以先看腳、再聽口令、再跑出去的動作。",
        "impactList": [
          "新增回憶：第一步點跑；運動技巧入口；凱晴可靠感形成"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "第一步點跑"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "凱晴可靠感形成"
        ],
        "propertyHints": [
          "運動技巧入口"
        ],
        "reviewSummaryTags": [
          "第一步點跑",
          "運動技巧入口",
          "凱晴可靠感形成"
        ]
      },
      {
        "id": "say_shoelace_loose",
        "branchId": "say_shoelace_loose",
        "choiceId": "w9_11_sports_day_practice_grouping_hoiching_choice_3",
        "triggerStoryMemoryTags": [
          "w9_11_sports_day_practice_grouping_hoiching_choice_3"
        ],
        "title": "跌倒比慢更麻煩",
        "branchTitle": "跌倒比慢更麻煩",
        "fullStoryText": "你低頭看見鞋帶鬆了，立刻說：「我鞋帶鬆咗。」\n\n校隊女生沒有叫你快點跑，只是指向旁邊：「綁好先。」她語氣仍然直接，但這次沒有催。你蹲下綁鞋帶時，其他同學還在前面移動，跑道聲音離你遠了一點。\n\n你那時才明白，她不是只想大家快。對她來說，跌倒比慢更麻煩。這種要求聽起來硬，裡面卻有一條很清楚的安全線。",
        "impactList": [
          "新增回憶：綁好鞋帶先；安全感藏在要求裡；高年級隊長印象加深"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "綁好鞋帶先"
        ],
        "emotionalTags": [
          "安全感藏在要求裡"
        ],
        "relationshipHints": [
          "高年級隊長印象加深"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "綁好鞋帶先",
          "安全感藏在要求裡",
          "高年級隊長印象加深"
        ]
      },
      {
        "id": "step_back_less_crowded",
        "branchId": "step_back_less_crowded",
        "choiceId": "w9_11_sports_day_practice_grouping_hoiching_choice_4",
        "triggerStoryMemoryTags": [
          "w9_11_sports_day_practice_grouping_hoiching_choice_4"
        ],
        "title": "退到不擠的位置",
        "branchTitle": "退到不擠的位置",
        "fullStoryText": "人群擠在白線後，你覺得肩膀快碰到別人，便說：「我企後少少。」\n\n你退到比較不擠的位置。校隊女生看了你一眼，沒有叫你回到最前，只是確認你沒有離開隊伍。你站在那裡，跑道仍然在前面，但身邊空了一點。\n\n那天你沒有搶最前，也沒有躲到隊伍外。你只是找到一個能站得穩的位置。",
        "impactList": [
          "新增回憶：退後一點也在隊裡；自我調節片段；運動日壓迫感降低"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "退後一點也在隊裡"
        ],
        "emotionalTags": [],
        "relationshipHints": [],
        "propertyHints": [
          "運動日壓迫感降低"
        ],
        "reviewSummaryTags": [
          "退後一點也在隊裡",
          "自我調節片段",
          "運動日壓迫感降低"
        ]
      }
    ],
    "mapping": {
      "source": "info/week9_reviewStories_v0_1_full_story.md",
      "mappingMethod": "eventId alias + variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_w9_11_sports_day_practice_grouping_pe_teacher",
    "sourceEventId": "w9_sports_day_practice_group",
    "sourceVariantId": "pe_teacher",
    "eventId": "w9_11_sports_day_practice_grouping",
    "variantId": "pe_teacher",
    "week": 9,
    "dateRange": "Oct 27–Nov 2",
    "title": "不計名次的試跑",
    "timeText": "第 9 週，體育堂",
    "timeLabel": "第 9 週，體育堂",
    "placeText": "操場跑道邊",
    "locationLabel": "操場跑道邊",
    "characters": [
      "體育老師"
    ],
    "characterIdHint": "pe_teacher",
    "unknownDisplayName": null,
    "knownDisplayName": null,
    "sceneOpening": "體育堂的太陽有點曬，跑道白線亮得像剛畫上去。老師把大家叫到操場邊，手上拿著哨子。有人一聽到運動日就興奮地跳，有人站在隊伍後面，一直捏著水壺帶。\n\n體育老師吹了一下哨子，讓大家安靜。「今日唔計名次，先學點排、點起跑、點停。唔舒服就舉手。」他指向陰影位，叫大家不要硬撐。這不像真正比賽，但操場還是大得讓人心跳快一點。",
    "branches": [
      {
        "id": "go_to_own_group",
        "branchId": "go_to_own_group",
        "choiceId": "w9_11_sports_day_practice_grouping_pe_teacher_choice_1",
        "triggerStoryMemoryTags": [
          "w9_11_sports_day_practice_grouping_pe_teacher_choice_1"
        ],
        "title": "站到自己的組",
        "branchTitle": "站到自己的組",
        "fullStoryText": "你找了一會兒自己的組別，最後站到白線後面。「我去我嗰組。」你說。\n\n前面的人動一下，你也跟著移一點。操場看起來仍然很大，終點仍然有點遠，但腳下那條白線讓你知道自己現在應該在哪裡。\n\n後來你想起試跑日，記住的不是名次，而是第一次站到自己的組裡。很多事情還未開始，但位置先找到了。",
        "impactList": [
          "新增回憶：找到自己的組；運動日準備感形成；操場陌生感降低"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "找到自己的組"
        ],
        "emotionalTags": [],
        "relationshipHints": [],
        "propertyHints": [
          "運動日準備感形成"
        ],
        "reviewSummaryTags": [
          "找到自己的組",
          "運動日準備感形成",
          "操場陌生感降低"
        ]
      },
      {
        "id": "say_too_hot",
        "branchId": "say_too_hot",
        "choiceId": "w9_11_sports_day_practice_grouping_pe_teacher_choice_2",
        "triggerStoryMemoryTags": [
          "w9_11_sports_day_practice_grouping_pe_teacher_choice_2"
        ],
        "title": "陰影位的一口水",
        "branchTitle": "陰影位的一口水",
        "fullStoryText": "你站了一會兒，覺得臉很熱，便舉手說：「老師，我有啲熱。」\n\n老師叫你先站到陰影位喝水。你離開白線時有點擔心自己是不是很麻煩，但老師只是提醒你不要一次喝太快。今天不計名次，所以你不用把不舒服藏起來。\n\n那口水很普通，卻讓你記得，運動日不是一定要硬撐。身體先停一下，也可以是參加的一部分。",
        "impactList": [
          "新增回憶：陰影位喝水；身體界線被允許；運動壓力降低"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "陰影位喝水"
        ],
        "emotionalTags": [
          "運動壓力降低"
        ],
        "relationshipHints": [],
        "propertyHints": [
          "身體界線被允許",
          "運動壓力降低"
        ],
        "reviewSummaryTags": [
          "陰影位喝水",
          "身體界線被允許",
          "運動壓力降低"
        ]
      },
      {
        "id": "ask_not_counting_score",
        "branchId": "ask_not_counting_score",
        "choiceId": "w9_11_sports_day_practice_grouping_pe_teacher_choice_3",
        "triggerStoryMemoryTags": [
          "w9_11_sports_day_practice_grouping_pe_teacher_choice_3"
        ],
        "title": "再問一次不計分",
        "branchTitle": "再問一次不計分",
        "fullStoryText": "你聽見不計名次，還是不太放心，舉手問：「今日真係唔計分？」\n\n老師再說一次不計，只是練習。旁邊幾個同學也聽到了，有人明顯鬆了一口氣。梓軒那邊雖然還在看跑道，但肩膀也放低了一點。\n\n你那個問題不是只幫自己問。它讓隊伍裡其他沒有開口的人，也一起聽到答案。後來你回想起來，覺得有些問題小聲問出來，也會讓很多人一起安心。",
        "impactList": [
          "新增回憶：再問一次不計分；提問帶來安心；班級壓力下降"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "再問一次不計分"
        ],
        "emotionalTags": [
          "提問帶來安心",
          "班級壓力下降"
        ],
        "relationshipHints": [],
        "propertyHints": [],
        "reviewSummaryTags": [
          "再問一次不計分",
          "提問帶來安心",
          "班級壓力下降"
        ]
      },
      {
        "id": "follow_classmates_queue",
        "branchId": "follow_classmates_queue",
        "choiceId": "w9_11_sports_day_practice_grouping_pe_teacher_choice_4",
        "triggerStoryMemoryTags": [
          "w9_11_sports_day_practice_grouping_pe_teacher_choice_4"
        ],
        "title": "差點一起走歪",
        "branchTitle": "差點一起走歪",
        "fullStoryText": "你不太確定自己是哪一組，只好說：「我跟住佢哋排。」\n\n前面的同學往左移，你也跟著移。這次沒有真的走錯，但前面那個人差點站到另一組，你也差點一起歪出去。老師很快指了指正確的位置，你們又退回來。\n\n你那天學到，跟著別人有時很方便，也有時會一起走錯。跑道白線在腳下，提醒你下一次可能要自己看一眼。",
        "impactList": [
          "新增回憶：差點跟著走歪；依賴同伴的風險被看見；觀察規則意識形成"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "差點跟著走歪"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "依賴同伴的風險被看見"
        ],
        "propertyHints": [
          "觀察規則意識形成"
        ],
        "reviewSummaryTags": [
          "差點跟著走歪",
          "依賴同伴的風險被看見",
          "觀察規則意識形成"
        ]
      }
    ],
    "mapping": {
      "source": "info/week9_reviewStories_v0_1_full_story.md",
      "mappingMethod": "eventId alias + variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_w9_12_recitation_drawing_activity_signup_deadline_zhiyau",
    "sourceEventId": "w9_activity_signup_deadline",
    "sourceVariantId": "senior_yau",
    "eventId": "w9_12_recitation_drawing_activity_signup_deadline",
    "variantId": "zhiyau",
    "week": 9,
    "dateRange": "Oct 27–Nov 2",
    "title": "表格前的高年級女生",
    "timeText": "第 9 週，放學前",
    "timeLabel": "第 9 週，放學前",
    "placeText": "小一課室門口",
    "locationLabel": "小一課室門口",
    "characters": [
      "高年級女生／芷悠"
    ],
    "characterIdHint": "senior_friendly_girl_zhiyau",
    "unknownDisplayName": "高年級女生",
    "knownDisplayName": "芷悠師姐",
    "sceneOpening": "放學前，老師把幾張報名表貼到黑板旁邊。朗誦、畫畫、班際活動的表格疊在一起，名字很多，格子很小。有人已經在空格旁邊拿著筆，有人只是看著「截止」兩個字，像那兩個字會一直往前走。\n\n一位高年級女生到班房門口交文件。你未必那時已經知道她叫芷悠，只記得她看見你們在看朗誦表，說了一句：「第一次上台會震㗎，正常。」她把文件交給老師，又補一句：「可以先讀俾一個人聽。」",
    "branches": [
      {
        "id": "ask_stage_fear",
        "branchId": "ask_stage_fear",
        "choiceId": "w9_12_recitation_drawing_activity_signup_deadline_zhiyau_choice_1",
        "triggerStoryMemoryTags": [
          "w9_12_recitation_drawing_activity_signup_deadline_zhiyau_choice_1"
        ],
        "title": "會，但不是一直都會",
        "branchTitle": "會，但不是一直都會",
        "fullStoryText": "你抬頭問：「師姐，上台會唔會好驚？」\n\n高年級女生想了一下，沒有說不驚。她只說：「會。不過唔係一路都咁驚。」這句話很短，沒有把上台講成很勇敢的大事，也沒有把害怕講成錯。\n\n那張朗誦表還是貼在黑板旁邊，但它忽然沒有像剛才那麼高。原來高年級也試過震，只是她們後來知道震完還可以讀下去。",
        "impactList": [
          "新增回憶：上台會震也正常；朗誦壓力降低；高年級經驗感形成"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "上台會震也正常"
        ],
        "emotionalTags": [
          "朗誦壓力降低"
        ],
        "relationshipHints": [
          "高年級經驗感形成"
        ],
        "propertyHints": [
          "朗誦壓力降低"
        ],
        "reviewSummaryTags": [
          "上台會震也正常",
          "朗誦壓力降低",
          "高年級經驗感形成"
        ]
      },
      {
        "id": "say_not_ready_to_join",
        "branchId": "say_not_ready_to_join",
        "choiceId": "w9_12_recitation_drawing_activity_signup_deadline_zhiyau_choice_2",
        "triggerStoryMemoryTags": [
          "w9_12_recitation_drawing_activity_signup_deadline_zhiyau_choice_2"
        ],
        "title": "未敢就先聽",
        "branchTitle": "未敢就先聽",
        "fullStoryText": "你看著表格，小聲說：「我未敢報。」\n\n高年級女生點點頭，沒有把你推到表格前。「未敢就先聽。」她說。她講完就回頭等老師簽收文件，像這只是她順手留下的一個方法。\n\n你沒有因此立刻報名，但也沒有馬上逃開。那句「先聽」把報名表旁邊開出一條比較小的路，讓你知道不報名以前，也可以先靠近一點。",
        "impactList": [
          "新增回憶：未敢就先聽；活動支援路線開啟；自信壓力降低"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "未敢就先聽"
        ],
        "emotionalTags": [
          "自信壓力降低"
        ],
        "relationshipHints": [],
        "propertyHints": [
          "活動支援路線開啟",
          "自信壓力降低"
        ],
        "reviewSummaryTags": [
          "未敢就先聽",
          "活動支援路線開啟",
          "自信壓力降低"
        ]
      },
      {
        "id": "ask_to_listen_first",
        "branchId": "ask_to_listen_first",
        "choiceId": "w9_12_recitation_drawing_activity_signup_deadline_zhiyau_choice_3",
        "triggerStoryMemoryTags": [
          "w9_12_recitation_drawing_activity_signup_deadline_zhiyau_choice_3"
        ],
        "title": "不用馬上寫名字",
        "branchTitle": "不用馬上寫名字",
        "fullStoryText": "你追問：「我可唔可以先聽人哋讀？」\n\n高年級女生說可以，小息時常有人在走廊或禮堂旁邊練。她沒有說你一定要參加，也沒有問你為什麼不直接報名。你望著表格上的空格，發現空格還在，但它不再像一個馬上要填的洞。\n\n後來你記得這一天，是因為你第一次知道，活動不只得報名和不報名。中間還有先聽、先試、先站在旁邊。",
        "impactList": [
          "新增回憶：可以先聽別人讀；活動參與方式變多；退路帶來安全感"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "可以先聽別人讀"
        ],
        "emotionalTags": [
          "退路帶來安全感"
        ],
        "relationshipHints": [],
        "propertyHints": [
          "活動參與方式變多"
        ],
        "reviewSummaryTags": [
          "可以先聽別人讀",
          "活動參與方式變多",
          "退路帶來安全感"
        ]
      },
      {
        "id": "only_look_at_form",
        "branchId": "only_look_at_form",
        "choiceId": "w9_12_recitation_drawing_activity_signup_deadline_zhiyau_choice_4",
        "triggerStoryMemoryTags": [
          "w9_12_recitation_drawing_activity_signup_deadline_zhiyau_choice_4"
        ],
        "title": "那句話留在腦裡",
        "branchTitle": "那句話留在腦裡",
        "fullStoryText": "你沒有開口，只看著表格。高年級女生交完文件，轉身離開前又看了你們一眼。\n\n你沒有問她問題，也沒有拿表。可是她剛才那句「先讀俾一個人聽」留在你腦裡，像一張沒有被你拿走的紙。\n\n放學時你把書包拉鏈拉上，還是想起那個空格。你沒有做決定，但活動已經從黑板旁邊，悄悄跟著你回家了一點。",
        "impactList": [
          "新增回憶：沒有拿走的報名表；活動念頭留下；選擇延後"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "沒有拿走的報名表"
        ],
        "emotionalTags": [],
        "relationshipHints": [],
        "propertyHints": [
          "活動念頭留下"
        ],
        "reviewSummaryTags": [
          "沒有拿走的報名表",
          "活動念頭留下",
          "選擇延後"
        ]
      }
    ],
    "mapping": {
      "source": "info/week9_reviewStories_v0_1_full_story.md",
      "mappingMethod": "eventId alias + variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_w9_12_recitation_drawing_activity_signup_deadline_competitive",
    "sourceEventId": "w9_activity_signup_deadline",
    "sourceVariantId": "zixuan",
    "eventId": "w9_12_recitation_drawing_activity_signup_deadline",
    "variantId": "competitive",
    "week": 9,
    "dateRange": "Oct 27–Nov 2",
    "title": "梓軒停在畫畫表旁",
    "timeText": "第 9 週，放學前",
    "timeLabel": "第 9 週，放學前",
    "placeText": "小一課室",
    "locationLabel": "小一課室",
    "characters": [
      "梓軒"
    ],
    "characterIdHint": "classmate_competitive_peer",
    "unknownDisplayName": null,
    "knownDisplayName": null,
    "sceneOpening": "黑板旁邊貼了幾張報名表，紙角因為太多人看過而翹起來。畫畫比賽那一張最靠外，主題寫得很大，下面的名字格子卻很窄。梓軒站在表格前，手裡拿著鉛筆，筆尖一直在名字旁邊停住。\n\n他盯著畫畫比賽那張表，問：「如果得獎會唔會貼名出嚟？」他像是在問老師，又像是在問自己。鉛筆沒有真的落下，但已經離那個空格很近。",
    "branches": [
      {
        "id": "ask_what_to_join",
        "branchId": "ask_what_to_join",
        "choiceId": "w9_12_recitation_drawing_activity_signup_deadline_competitive_choice_1",
        "triggerStoryMemoryTags": [
          "w9_12_recitation_drawing_activity_signup_deadline_competitive_choice_1"
        ],
        "title": "要睇有冇獎",
        "branchTitle": "要睇有冇獎",
        "fullStoryText": "你問他：「你想報邊個？」\n\n梓軒說可能畫畫，又馬上補一句：「不過要睇有冇獎。」他的筆在空格旁邊敲了兩下，像獎項比題目更早到他眼前。\n\n你那時沒有覺得他只是貪心。你看見他那支一直停著的筆，忽然覺得他也不是完全肯定。想被看見和怕寫下名字，好像同時卡在那個小格子裡。",
        "impactList": [
          "新增回憶：停在空格旁的筆；梓軒證明自己的壓力；活動競爭線加深"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "停在空格旁的筆"
        ],
        "emotionalTags": [
          "梓軒證明自己的壓力"
        ],
        "relationshipHints": [
          "梓軒證明自己的壓力"
        ],
        "propertyHints": [
          "活動競爭線加深"
        ],
        "reviewSummaryTags": [
          "停在空格旁的筆",
          "梓軒證明自己的壓力",
          "活動競爭線加深"
        ]
      },
      {
        "id": "say_want_drawing",
        "branchId": "say_want_drawing",
        "choiceId": "w9_12_recitation_drawing_activity_signup_deadline_competitive_choice_2",
        "triggerStoryMemoryTags": [
          "w9_12_recitation_drawing_activity_signup_deadline_competitive_choice_2"
        ],
        "title": "你畫咩",
        "branchTitle": "你畫咩",
        "fullStoryText": "你看著那張表，說：「我想報畫畫。」\n\n梓軒立刻轉頭：「你畫咩？」那句不像普通聊天，比較像比賽已經提早開始。他的眼睛很快，像想先知道你的題目，再決定自己要不要更厲害。\n\n你還沒有真正畫任何東西，卻已經感到活動從一張表變成兩個人的位置。這不一定不好，只是從那一刻開始，畫畫比賽裡多了一點被看見的壓力。",
        "impactList": [
          "新增回憶：你畫咩；創意活動帶入比較；與梓軒競爭感形成"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "你畫咩"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "與梓軒競爭感形成"
        ],
        "propertyHints": [
          "創意活動帶入比較"
        ],
        "reviewSummaryTags": [
          "你畫咩",
          "創意活動帶入比較",
          "與梓軒競爭感形成"
        ]
      },
      {
        "id": "say_not_decided",
        "branchId": "say_not_decided",
        "choiceId": "w9_12_recitation_drawing_activity_signup_deadline_competitive_choice_3",
        "triggerStoryMemoryTags": [
          "w9_12_recitation_drawing_activity_signup_deadline_competitive_choice_3"
        ],
        "title": "沒有因為他急就寫名",
        "branchTitle": "沒有因為他急就寫名",
        "fullStoryText": "你搖搖頭：「我未諗好。」\n\n梓軒用手指敲了敲截止日期：「快到喇。」那一下敲得不重，但你聽得很清楚。旁邊有人開始寫名字，你的筆還在筆盒裡。\n\n你沒有因為他的急而立刻寫下去。那張表格仍然在黑板旁邊，截止日期也沒有消失，但你把自己的速度留住了。",
        "impactList": [
          "新增回憶：未諗好的空格；保留決定權；活動壓力維持"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "未諗好的空格"
        ],
        "emotionalTags": [
          "活動壓力維持"
        ],
        "relationshipHints": [],
        "propertyHints": [
          "活動壓力維持"
        ],
        "reviewSummaryTags": [
          "未諗好的空格",
          "保留決定權",
          "活動壓力維持"
        ]
      },
      {
        "id": "look_at_another_form",
        "branchId": "look_at_another_form",
        "choiceId": "w9_12_recitation_drawing_activity_signup_deadline_competitive_choice_4",
        "triggerStoryMemoryTags": [
          "w9_12_recitation_drawing_activity_signup_deadline_competitive_choice_4"
        ],
        "title": "離開同一張表",
        "branchTitle": "離開同一張表",
        "fullStoryText": "你往旁邊移了一步，說：「我睇另一張先。」\n\n梓軒還站在畫畫表前，鉛筆在手裡轉了一下。你走到另一張活動表旁邊，那邊的人少一點，紙角也沒有被按得那麼皺。\n\n你不是完全不想參加，只是不想在梓軒旁邊立刻被拉進比較。那一步很小，卻讓你重新看清楚，活動表不止一張，選擇也不止一種。",
        "impactList": [
          "新增回憶：看另一張表；避開直接比較；活動選擇重新打開"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "看另一張表"
        ],
        "emotionalTags": [],
        "relationshipHints": [],
        "propertyHints": [
          "活動選擇重新打開"
        ],
        "reviewSummaryTags": [
          "看另一張表",
          "避開直接比較",
          "活動選擇重新打開"
        ]
      }
    ],
    "mapping": {
      "source": "info/week9_reviewStories_v0_1_full_story.md",
      "mappingMethod": "eventId alias + variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_w9_12_recitation_drawing_activity_signup_deadline_quiet",
    "sourceEventId": "w9_activity_signup_deadline",
    "sourceVariantId": "wingsum",
    "eventId": "w9_12_recitation_drawing_activity_signup_deadline",
    "variantId": "quiet",
    "week": 9,
    "dateRange": "Oct 27–Nov 2",
    "title": "穎心沒有立刻拿筆",
    "timeText": "第 9 週，放學前",
    "timeLabel": "第 9 週，放學前",
    "placeText": "小一課室",
    "locationLabel": "小一課室",
    "characters": [
      "穎心"
    ],
    "characterIdHint": "classmate_quiet_observer",
    "unknownDisplayName": null,
    "knownDisplayName": null,
    "sceneOpening": "報名表貼在黑板旁邊，放學前的課室一半人在收拾書包，一半人擠到前面看。朗誦表、畫畫表和班際活動表疊在一起，格子很小，名字一多就像快要擠出紙邊。\n\n穎心站在表格旁邊很久，手指停在閱讀或畫畫那一欄，但沒有拿筆。她小聲說：「如果報咗，要唔要上台講嘢？」她沒有看著你，只看著那個很窄的名字格。",
    "branches": [
      {
        "id": "ask_teacher_together",
        "branchId": "ask_teacher_together",
        "choiceId": "w9_12_recitation_drawing_activity_signup_deadline_quiet_choice_1",
        "triggerStoryMemoryTags": [
          "w9_12_recitation_drawing_activity_signup_deadline_quiet_choice_1"
        ],
        "title": "一起走近講台",
        "branchTitle": "一起走近講台",
        "fullStoryText": "你對她說：「我同你問老師。」\n\n穎心點點頭，跟你一起走近講台。她沒有自己一個人問，站到老師面前時還把手指捏在一起。最後問題是你先開口，她在旁邊很小聲地補了一句：「畫畫嗰個……」\n\n老師說畫畫不用上台講。穎心沒有立刻報名，但她沒有退回座位。你記得她站在你旁邊的那一步，像是兩個人合起來，問題才有足夠的聲音。",
        "impactList": [
          "新增回憶：和穎心一起問老師；安靜支援形成；活動焦慮降低"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "和穎心一起問老師"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "和穎心一起問老師"
        ],
        "propertyHints": [
          "活動焦慮降低"
        ],
        "reviewSummaryTags": [
          "和穎心一起問老師",
          "安靜支援形成",
          "活動焦慮降低"
        ]
      },
      {
        "id": "say_drawing_no_speaking",
        "branchId": "say_drawing_no_speaking",
        "choiceId": "w9_12_recitation_drawing_activity_signup_deadline_quiet_choice_2",
        "triggerStoryMemoryTags": [
          "w9_12_recitation_drawing_activity_signup_deadline_quiet_choice_2"
        ],
        "title": "那一欄沒有那麼可怕",
        "branchTitle": "那一欄沒有那麼可怕",
        "fullStoryText": "你看著畫畫那張表，說：「畫畫應該唔使講嘢。」\n\n穎心的手指沒有立刻縮回去。她看了那一欄久一點，又看了看截止日期。她沒有說要報，也沒有說不報，只是把那張表多看了幾秒。\n\n對很多人來說，那只是少講一句話。但對穎心來說，知道不用上台，好像把表格從很遠的地方拉近了一點。",
        "impactList": [
          "新增回憶：不用上台的畫畫表；穎心活動可能性打開；安靜興趣線延伸"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "不用上台的畫畫表"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "穎心活動可能性打開"
        ],
        "propertyHints": [
          "穎心活動可能性打開"
        ],
        "reviewSummaryTags": [
          "不用上台的畫畫表",
          "穎心活動可能性打開",
          "安靜興趣線延伸"
        ]
      },
      {
        "id": "ask_if_wants_to_join",
        "branchId": "ask_if_wants_to_join",
        "choiceId": "w9_12_recitation_drawing_activity_signup_deadline_quiet_choice_3",
        "triggerStoryMemoryTags": [
          "w9_12_recitation_drawing_activity_signup_deadline_quiet_choice_3"
        ],
        "title": "睇多陣",
        "branchTitle": "睇多陣",
        "fullStoryText": "你問她：「你想唔想報呀？」\n\n穎心沒有馬上答。她看著表格，過了一會兒才說：「我想睇多陣。」她的聲音很輕，但沒有像平時那樣立刻退開。\n\n你沒有催她。放學前的課室很吵，書包拉鏈聲一直響，但她真的在表格前多站了一會兒。那一會兒不像決定，卻像決定前很需要的空白。",
        "impactList": [
          "新增回憶：睇多陣；不催促的陪伴；穎心自主感保留"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "睇多陣"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "穎心自主感保留"
        ],
        "propertyHints": [],
        "reviewSummaryTags": [
          "睇多陣",
          "不催促的陪伴",
          "穎心自主感保留"
        ]
      },
      {
        "id": "do_not_push_wingsum",
        "branchId": "do_not_push_wingsum",
        "choiceId": "w9_12_recitation_drawing_activity_signup_deadline_quiet_choice_4",
        "triggerStoryMemoryTags": [
          "w9_12_recitation_drawing_activity_signup_deadline_quiet_choice_4"
        ],
        "title": "筆拿起來又放下",
        "branchTitle": "筆拿起來又放下",
        "fullStoryText": "你站在她旁邊，沒有說話。\n\n穎心慢慢把筆拿起來，又放下。她看了畫畫那欄，再看朗誦那欄，最後把手放回身前。你們沒有一起問老師，也沒有一起填表，只是站在那裡，等那個想法自己浮上來一點。\n\n後來你記得的，是你沒有催她。很多事情在小一課室裡都很快，收書包、排隊、放學，但那一次，你讓一個還沒想好的同學慢了一點。",
        "impactList": [
          "新增回憶：沒有催穎心；慢熱關係加深；活動選擇延後"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "沒有催穎心"
        ],
        "emotionalTags": [],
        "relationshipHints": [
          "沒有催穎心",
          "慢熱關係加深"
        ],
        "propertyHints": [
          "活動選擇延後"
        ],
        "reviewSummaryTags": [
          "沒有催穎心",
          "慢熱關係加深",
          "活動選擇延後"
        ]
      }
    ],
    "mapping": {
      "source": "info/week9_reviewStories_v0_1_full_story.md",
      "mappingMethod": "eventId alias + variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  },
  {
    "id": "review_w9_12_recitation_drawing_activity_signup_deadline_caring_activity_teacher",
    "sourceEventId": "w9_activity_signup_deadline",
    "sourceVariantId": "caring_activity_teacher",
    "eventId": "w9_12_recitation_drawing_activity_signup_deadline",
    "variantId": "caring_activity_teacher",
    "week": 9,
    "dateRange": "Oct 27–Nov 2",
    "title": "截止日期旁邊的退路",
    "timeText": "第 9 週，放學前",
    "timeLabel": "第 9 週，放學前",
    "placeText": "小一課室",
    "locationLabel": "小一課室",
    "characters": [
      "關顧／活動老師"
    ],
    "characterIdHint": "teacher_pastoral_care",
    "unknownDisplayName": null,
    "knownDisplayName": null,
    "sceneOpening": "放學前，老師把幾張報名表貼到黑板旁邊，又把截止日期用紅筆圈起來。那個紅圈很細，卻很容易被看見。幾個同學湊在一起問要不要報，家朗說好像可以一起試，梓軒一直看有沒有獎，穎心站在遠一點的位置，沒有立刻靠近。\n\n老師看見大家擠在表格前，提醒：「想報可以報，唔想報都冇問題。唔好因為人哋報就急。」她把一張空白表拿起來，沒有直接塞到任何人手上。「今晚可以同屋企人講。」",
    "branches": [
      {
        "id": "ask_decide_tomorrow",
        "branchId": "ask_decide_tomorrow",
        "choiceId": "w9_12_recitation_drawing_activity_signup_deadline_caring_activity_teacher_choice_1",
        "triggerStoryMemoryTags": [
          "w9_12_recitation_drawing_activity_signup_deadline_caring_activity_teacher_choice_1"
        ],
        "title": "截止日期沒有那麼逼近",
        "branchTitle": "截止日期沒有那麼逼近",
        "fullStoryText": "你看著紅圈，問：「老師，可唔可以聽日先決定？」\n\n老師看了一眼日期，說明早前可以。她沒有說你拖，也沒有叫你現在就想好。你再看那個紅圈時，它還在，但不像剛才那樣一直往你面前推。\n\n放學鈴聲響起後，你沒有拿表，也沒有報名。可是你知道自己不是錯過了全部，只是把決定帶到明天早上一點點。",
        "impactList": [
          "新增回憶：明早前還可以；活動壓力降低；決定被延後"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "明早前還可以"
        ],
        "emotionalTags": [
          "活動壓力降低"
        ],
        "relationshipHints": [],
        "propertyHints": [
          "活動壓力降低"
        ],
        "reviewSummaryTags": [
          "明早前還可以",
          "活動壓力降低",
          "決定被延後"
        ]
      },
      {
        "id": "take_form_home",
        "branchId": "take_form_home",
        "choiceId": "w9_12_recitation_drawing_activity_signup_deadline_caring_activity_teacher_choice_2",
        "triggerStoryMemoryTags": [
          "w9_12_recitation_drawing_activity_signup_deadline_caring_activity_teacher_choice_2"
        ],
        "title": "薄薄的紙很有重量",
        "branchTitle": "薄薄的紙很有重量",
        "fullStoryText": "你伸手說：「我攞張返屋企睇。」\n\n老師遞給你一張表，提醒你夾進手冊，不要弄丟。那張紙很薄，放進手冊時卻像多了一件要跟家人講的事。你把手冊合上，又忍不住摸了摸那張紙的位置。\n\n後來你記得那張表，不是因為你馬上決定參加，而是因為活動第一次跟著你離開課室，回到家裡的飯桌附近。",
        "impactList": [
          "新增回憶：帶回家的活動表；家庭討論入口；活動可能性保留"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "帶回家的活動表"
        ],
        "emotionalTags": [],
        "relationshipHints": [],
        "propertyHints": [
          "帶回家的活動表",
          "活動可能性保留"
        ],
        "reviewSummaryTags": [
          "帶回家的活動表",
          "家庭討論入口",
          "活動可能性保留"
        ]
      },
      {
        "id": "say_want_but_scared",
        "branchId": "say_want_but_scared",
        "choiceId": "w9_12_recitation_drawing_activity_signup_deadline_caring_activity_teacher_choice_3",
        "triggerStoryMemoryTags": [
          "w9_12_recitation_drawing_activity_signup_deadline_caring_activity_teacher_choice_3"
        ],
        "title": "被允許害怕",
        "branchTitle": "被允許害怕",
        "fullStoryText": "你看著表格，小聲說：「我想報，但有啲驚。」\n\n老師沒有笑你，只說可以先試一小段，或者先讀給老師聽。她說「試」的時候沒有把筆推到你手邊，只是把那條路講出來。\n\n你還沒有報名，但已經被允許害怕。那一刻，害怕不是把活動門關上的東西，而是可以拿著一起站在門口的東西。",
        "impactList": [
          "新增回憶：想報但驚；活動支援版本開啟；自信被溫和接住"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "想報但驚"
        ],
        "emotionalTags": [],
        "relationshipHints": [],
        "propertyHints": [
          "活動支援版本開啟",
          "自信被溫和接住"
        ],
        "reviewSummaryTags": [
          "想報但驚",
          "活動支援版本開啟",
          "自信被溫和接住"
        ]
      },
      {
        "id": "do_not_take_form_yet",
        "branchId": "do_not_take_form_yet",
        "choiceId": "w9_12_recitation_drawing_activity_signup_deadline_caring_activity_teacher_choice_4",
        "triggerStoryMemoryTags": [
          "w9_12_recitation_drawing_activity_signup_deadline_caring_activity_teacher_choice_4"
        ],
        "title": "今天先不用帶回家",
        "branchTitle": "今天先不用帶回家",
        "fullStoryText": "你搖搖頭，說：「我唔攞住。」\n\n老師點頭，讓你回座位。表格仍然貼在黑板旁邊，有幾個同學還在看，但你把書包拉鏈拉上時，手裡沒有多一張紙。\n\n你沒有變成不參加的人，也沒有變成參加的人。只是這一天，你選擇不把那張紙帶回家。回想起來，那也是一種很小的決定。",
        "impactList": [
          "新增回憶：今天不拿表；界線保留；活動壓力暫時留在課室"
        ],
        "impactListVisibility": "hidden",
        "memoryTags": [
          "今天不拿表"
        ],
        "emotionalTags": [
          "活動壓力暫時留在課室"
        ],
        "relationshipHints": [],
        "propertyHints": [
          "界線保留",
          "活動壓力暫時留在課室"
        ],
        "reviewSummaryTags": [
          "今天不拿表",
          "界線保留",
          "活動壓力暫時留在課室"
        ]
      }
    ],
    "mapping": {
      "source": "info/week9_reviewStories_v0_1_full_story.md",
      "mappingMethod": "eventId alias + variantId alias + branch order to playable choice order",
      "mappingWarnings": []
    }
  }
];
