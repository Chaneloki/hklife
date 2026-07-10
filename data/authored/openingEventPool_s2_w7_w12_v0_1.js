// data/authored/openingEventPool_s2_w7_w12_v0_1.js
// Generated structural data from info/s2_w7_w12_dialogue_draft_v0_2.md.
// Authored source of truth: do not edit wording here unless the source MD changes.
// v0.2 -> v0.1 (code): W12 唔包含派卷／成績表／老師最後觀察 playable event（改做 hidden academic
// resolver，見 js/engine.js resolveAcademicSettlement()）；S2-W12-48 competition result resolver
// 唔喺呢個檔案（唔係 playable event），改做 js/engine.js resolveClassCompetitionResultIfPending()
// 嘅 system-only background resolver，唔佔 weekly event slot。

export const competitionTypePool = {
  "class_wall_poster": {
    "label": "班際壁報",
    "preferredNpcIds": [
      "classmate_quiet_observer",
      "classmate_curious_troublemaker"
    ]
  },
  "class_quiz": {
    "label": "班際常識問答",
    "preferredNpcIds": [
      "classmate_competitive_peer",
      "classmate_curious_troublemaker"
    ]
  },
  "class_recitation": {
    "label": "班際朗誦／讀文",
    "preferredNpcIds": [
      "classmate_outgoing_invite",
      "classmate_quiet_observer"
    ]
  },
  "class_relay": {
    "label": "班際接力／小型運動",
    "preferredNpcIds": [
      "classmate_outgoing_invite",
      "classmate_competitive_peer"
    ]
  },
  "class_service_order": {
    "label": "班際整潔／秩序／班務服務",
    "preferredNpcIds": [
      "classmate_quiet_observer",
      "classmate_competitive_peer"
    ]
  }
};

export const s2W12CompetitionResultResolverMetadata = {
  "id": "s2_w12_48_competition_result_resolver",
  "sourceTopicId": "S2-W12-48",
  "termId": "term_p1_s2",
  "week": 12,
  "category": "system_resolver",
  "title": "班際 competition result resolver",
  "metadata": {
    "sourceMarkdown": "info/s2_w7_w12_dialogue_draft_v0_2.md",
    "uiHidden": true,
    "systemOnlyResultResolver": true,
    "conditionalPopupOnly": true,
    "notWeeklyEventSlot": true,
    "notPlayerChoiceEvent": true,
    "eligibleWhen": "classCompetitionState.resultPending === true && classCompetitionState.resultResolved === false"
  }
};

export const hkLifeSimulatorOpeningEventDialogueS2W7W12 = [
  {
    "id": "s2_w7_25_competition_entry",
    "sourceTopicId": "S2-W7-25",
    "weekPool": "S2-W7_authored_weekly",
    "termId": "term_p1_s2",
    "week": 7,
    "category": "social",
    "title": "班際 competition 報名／提名／分組",
    "sceneIntro": "復活節假期前，班主任在黑板旁邊貼出一張新通告，上面寫著「班際活動」。課室本來已經有點吵，風扇轉得慢慢的，通告一貼上去，幾個同學立刻靠近看。你還未看清楚是哪一種比賽，就先聽見有人說要報名，有人說不要站太前，也有人問會不會有獎。",
    "metadata": {
      "sourceMarkdown": "info/s2_w7_w12_dialogue_draft_v0_2.md",
      "sourceTitle": "S2-W7–S2-W12｜復活節前到升 P2 前｜事件對話草稿 v0.2",
      "uiHidden": true,
      "competitionEntryCandidate": true,
      "competitionStartWeekLabel": "S2-W7",
      "requiredNpcCount": 3
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 65,
      "weekRange": [
        7,
        7
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        },
        {
          "type": "classCompetitionStarted",
          "value": false
        }
      ],
      "exclusiveGroup": "s2_w7_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "kalong_tszhin_try_vs_win",
        "variantTitle": "家朗 + 梓軒｜一起試與想贏的拉扯",
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "家朗指著通告最上面：「班際喎，不如我哋試吓！」梓軒立刻湊過來，看了看「每班小組」幾個字：「試都要試得好啲，唔係報嚟做咩？」家朗的手還貼在通告邊，梓軒已經開始數要幾多人。你站在他們旁邊，突然覺得這張紙比普通通告熱鬧很多。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w7_25_kalong_tszhin_try_vs_win_ask_what_to_do",
            "text": "問要做咩。",
            "buttonText": "問要做咩。",
            "playerLine": "「要做啲咩㗎？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_25_kalong_tszhin_ask_what_to_do"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗說可能畫、可能讀、可能跑，梓軒皺眉說要先看清楚。你沒有立刻答應，但被拉進了他們的討論裡。"
            },
            "resultText": "家朗說可能畫、可能讀、可能跑，梓軒皺眉說要先看清楚。你沒有立刻答應，但被拉進了他們的討論裡。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              },
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_competitive_peer",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_25_competition_entry",
              "variantId": "kalong_tszhin_try_vs_win",
              "mustMatchEventTitle": "班際 competition 報名／提名／分組"
            }
          },
          {
            "id": "s2_w7_25_kalong_tszhin_try_vs_win_agree_to_try",
            "text": "說可以試。",
            "buttonText": "說可以試。",
            "playerLine": "「可以試吓。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_25_kalong_tszhin_agree_to_try"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗馬上笑了，梓軒卻問你想做哪一樣。你的「試吓」很快變成一個要分工的問題。"
            },
            "resultText": "家朗馬上笑了，梓軒卻問你想做哪一樣。你的「試吓」很快變成一個要分工的問題。",
            "statusDelta": {
              "社交": 1,
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 2
              },
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_competitive_peer",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_25_competition_entry",
              "variantId": "kalong_tszhin_try_vs_win",
              "mustMatchEventTitle": "班際 competition 報名／提名／分組"
            }
          },
          {
            "id": "s2_w7_25_kalong_tszhin_try_vs_win_slow_down",
            "text": "說先不要急。",
            "buttonText": "說先不要急。",
            "playerLine": "「唔好咁快啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_25_kalong_tszhin_slow_down"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒說遲了就沒有位，家朗看了看你，又看了看通告，聲音慢了一點。三個人沒有散開，只是站得不那麼擠。"
            },
            "resultText": "梓軒說遲了就沒有位，家朗看了看你，又看了看通告，聲音慢了一點。三個人沒有散開，只是站得不那麼擠。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 0
              },
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_competitive_peer",
                "dimension": "misunderstanding",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_25_competition_entry",
              "variantId": "kalong_tszhin_try_vs_win",
              "mustMatchEventTitle": "班際 competition 報名／提名／分組"
            }
          },
          {
            "id": "s2_w7_25_kalong_tszhin_try_vs_win_must_win",
            "text": "問是不是一定要贏。",
            "buttonText": "問是不是一定要贏。",
            "playerLine": "「一定要贏先得㗎？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_25_kalong_tszhin_must_win"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒停了一下，說不是一定，但不想輸得太樣衰。家朗補一句：「玩得好都得啦。」兩個答案夾在一起，你反而聽見比賽不只一種想法。"
            },
            "resultText": "梓軒停了一下，說不是一定，但不想輸得太樣衰。家朗補一句：「玩得好都得啦。」兩個答案夾在一起，你反而聽見比賽不只一種想法。",
            "statusDelta": {
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_25_competition_entry",
              "variantId": "kalong_tszhin_try_vs_win",
              "mustMatchEventTitle": "班際 competition 報名／提名／分組"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗",
        "competitionType": null,
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_competitive_peer",
            "npcNameFallback": "梓軒"
          }
        ]
      },
      {
        "variantId": "wingsam_kalong_not_too_front",
        "variantTitle": "穎心 + 家朗｜被邀請與不想太前",
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "家朗拿著報名表跑回座位：「穎心，你字靚，可以寫啦！」穎心正在把鉛筆放直，聽見自己名字時手停了一下：「我唔想站最前。」家朗愣住，像沒想到「字靚」也可能讓人緊張。他轉頭看你：「咁你覺得點？」"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w7_25_wingsam_kalong_not_too_front_can_sit_back",
            "text": "說可以坐後面做。",
            "buttonText": "說可以坐後面做。",
            "playerLine": "「可以唔使企前面。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_25_wingsam_kalong_can_sit_back"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心看了報名表一眼，沒有立刻拒絕。家朗把紙放低一點，好像第一次想起分工不一定等於上台。"
            },
            "resultText": "穎心看了報名表一眼，沒有立刻拒絕。家朗把紙放低一點，好像第一次想起分工不一定等於上台。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 2
              },
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_outgoing_inviter",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_25_competition_entry",
              "variantId": "wingsam_kalong_not_too_front",
              "mustMatchEventTitle": "班際 competition 報名／提名／分組"
            }
          },
          {
            "id": "s2_w7_25_wingsam_kalong_not_too_front_ask_what_she_wants",
            "text": "問穎心想做咩。",
            "buttonText": "問穎心想做咩。",
            "playerLine": "「你想做邊樣？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_25_wingsam_kalong_ask_what_she_wants"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "穎心",
              "text": "穎心很細聲說可以剪紙或抄字。家朗立刻說也得，你發現邀請別人時也要等對方講完。"
            },
            "resultText": "穎心很細聲說可以剪紙或抄字。家朗立刻說也得，你發現邀請別人時也要等對方講完。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_25_competition_entry",
              "variantId": "wingsam_kalong_not_too_front",
              "mustMatchEventTitle": "班際 competition 報名／提名／分組"
            }
          },
          {
            "id": "s2_w7_25_wingsam_kalong_not_too_front_tell_kalong_slow_down",
            "text": "叫家朗慢啲。",
            "buttonText": "叫家朗慢啲。",
            "playerLine": "「你講慢啲啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_25_wingsam_kalong_tell_kalong_slow_down"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "家朗抓抓頭，重新說一次。這次他沒有把表格推到穎心面前，只把它放在桌角。"
            },
            "resultText": "家朗抓抓頭，重新說一次。這次他沒有把表格推到穎心面前，只把它放在桌角。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_outgoing_inviter",
                "dimension": "misunderstanding",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_25_competition_entry",
              "variantId": "wingsam_kalong_not_too_front",
              "mustMatchEventTitle": "班際 competition 報名／提名／分組"
            }
          },
          {
            "id": "s2_w7_25_wingsam_kalong_not_too_front_not_decided",
            "text": "自己先不答應。",
            "buttonText": "自己先不答應。",
            "playerLine": "「我未諗好。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_25_wingsam_kalong_not_decided"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗有點急，但穎心像鬆了一口氣。你沒有退出，只是讓這張表格先停在桌上。"
            },
            "resultText": "家朗有點急，但穎心像鬆了一口氣。你沒有退出，只是讓這張表格先停在桌上。",
            "statusDelta": {
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_25_competition_entry",
              "variantId": "wingsam_kalong_not_too_front",
              "mustMatchEventTitle": "班際 competition 報名／提名／分組"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_quiet_observer",
        "npcIdHint": "classmate_quiet_observer",
        "npcNameFallback": "穎心",
        "competitionType": null,
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_outgoing_inviter",
            "npcNameFallback": "家朗"
          }
        ]
      },
      {
        "variantId": "pakyu_wingsam_poster_corner",
        "variantTitle": "柏宇 + 穎心｜壁報角落的小圖案",
        "openingDialogue": [
          {
            "speaker": "柏宇",
            "text": "柏宇看著壁報類的那一欄，眼睛亮了一下：「如果畫個秘密角落，啲人要近睇先見到。」穎心立刻看向老師的方向：「太亂會唔會唔得？」柏宇把手縮回來，又用鉛筆在空氣中畫了一個很小的圈。你站在旁邊，看見他們兩個都看著同一張紙，但想像的位置完全不同。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w7_25_pakyu_wingsam_poster_corner_can_be_small",
            "text": "說可以畫細啲。",
            "buttonText": "說可以畫細啲。",
            "playerLine": "「畫細細個得唔得？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_25_pakyu_wingsam_can_be_small"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇立刻說可以藏在角落，穎心想了一下，說不要擋住字。這個小圖案沒有被取消，只是被安排得更乖一點。"
            },
            "resultText": "柏宇立刻說可以藏在角落，穎心想了一下，說不要擋住字。這個小圖案沒有被取消，只是被安排得更乖一點。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              },
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_quiet_observer",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_25_competition_entry",
              "variantId": "pakyu_wingsam_poster_corner",
              "mustMatchEventTitle": "班際 competition 報名／提名／分組"
            }
          },
          {
            "id": "s2_w7_25_pakyu_wingsam_poster_corner_ask_teacher",
            "text": "問老師可不可以。",
            "buttonText": "問老師可不可以。",
            "playerLine": "「問老師先啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_25_pakyu_wingsam_ask_teacher"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇有點失望，但也跟著你們去問。老師說整齊就可以，穎心聽到「整齊」才敢點頭。"
            },
            "resultText": "柏宇有點失望，但也跟著你們去問。老師說整齊就可以，穎心聽到「整齊」才敢點頭。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_quiet_observer",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_25_competition_entry",
              "variantId": "pakyu_wingsam_poster_corner",
              "mustMatchEventTitle": "班際 competition 報名／提名／分組"
            }
          },
          {
            "id": "s2_w7_25_pakyu_wingsam_poster_corner_help_text_position",
            "text": "幫穎心看字位。",
            "buttonText": "幫穎心看字位。",
            "playerLine": "「字放呢邊先啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_25_pakyu_wingsam_help_text_position"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "穎心",
              "text": "穎心把紙邊按住，柏宇在旁邊等了一會兒。你先把位置留出來，秘密角落才沒有擠到標題。"
            },
            "resultText": "穎心把紙邊按住，柏宇在旁邊等了一會兒。你先把位置留出來，秘密角落才沒有擠到標題。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_25_competition_entry",
              "variantId": "pakyu_wingsam_poster_corner",
              "mustMatchEventTitle": "班際 competition 報名／提名／分組"
            }
          },
          {
            "id": "s2_w7_25_pakyu_wingsam_poster_corner_just_listen",
            "text": "只聽他們講。",
            "buttonText": "只聽他們講。",
            "playerLine": "「……」",
            "playerLineType": "narration",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_25_pakyu_wingsam_just_listen"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇越講越小聲，穎心越看越認真。你沒有插話，但知道這組如果真的開始，一定不會只是貼幾張紙那麼簡單。"
            },
            "resultText": "柏宇越講越小聲，穎心越看越認真。你沒有插話，但知道這組如果真的開始，一定不會只是貼幾張紙那麼簡單。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_25_competition_entry",
              "variantId": "pakyu_wingsam_poster_corner",
              "mustMatchEventTitle": "班際 competition 報名／提名／分組"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_mischief_maker",
        "npcIdHint": "classmate_curious_troublemaker",
        "npcNameFallback": "柏宇",
        "competitionType": null,
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_quiet_observer",
            "npcNameFallback": "穎心"
          }
        ]
      },
      {
        "variantId": "tszhin_pakyu_weird_quiz",
        "variantTitle": "梓軒 + 柏宇｜常識問答變成怪事",
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "梓軒盯著「常識問答」幾個字，問：「係咪答啱最多就贏？」柏宇在旁邊說：「可能會問點解月亮跟住人行。」梓軒立刻皺眉：「嗰啲唔係咁答㗎。」柏宇笑了一下，像覺得問題越怪越好。你聽著他們，一個想答對，一個想把問題講到像秘密。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w7_25_tszhin_pakyu_weird_quiz_ask_what_questions",
            "text": "問會問咩題。",
            "buttonText": "問會問咩題。",
            "playerLine": "「會問咩題？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_25_tszhin_pakyu_ask_what_questions"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒說常識書那些，柏宇說也可能問學校裡的怪聲。你還不知道答案，但這場比賽好像已經在他們口中分成兩條路。"
            },
            "resultText": "梓軒說常識書那些，柏宇說也可能問學校裡的怪聲。你還不知道答案，但這場比賽好像已經在他們口中分成兩條路。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_25_competition_entry",
              "variantId": "tszhin_pakyu_weird_quiz",
              "mustMatchEventTitle": "班際 competition 報名／提名／分組"
            }
          },
          {
            "id": "s2_w7_25_tszhin_pakyu_weird_quiz_need_to_revise",
            "text": "說要先溫習。",
            "buttonText": "說要先溫習。",
            "playerLine": "「要睇書先啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_25_tszhin_pakyu_need_to_revise"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒馬上點頭，柏宇說看書也可以找怪事。你發現「溫習」在他們兩個耳裡不是同一件事。"
            },
            "resultText": "梓軒馬上點頭，柏宇說看書也可以找怪事。你發現「溫習」在他們兩個耳裡不是同一件事。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_25_competition_entry",
              "variantId": "tszhin_pakyu_weird_quiz",
              "mustMatchEventTitle": "班際 competition 報名／提名／分組"
            }
          },
          {
            "id": "s2_w7_25_tszhin_pakyu_weird_quiz_weird_is_fun",
            "text": "說怪題也好玩。",
            "buttonText": "說怪題也好玩。",
            "playerLine": "「怪啲都好玩。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_25_tszhin_pakyu_weird_is_fun"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "柏宇",
              "text": "柏宇立刻笑起來，梓軒卻說好玩不等於答中。兩個人沒有吵開，只是把「好玩」和「答中」放在同一張桌上。"
            },
            "resultText": "柏宇立刻笑起來，梓軒卻說好玩不等於答中。兩個人沒有吵開，只是把「好玩」和「答中」放在同一張桌上。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_mischief_maker",
                "dimension": "closeness",
                "amount": 1
              },
              {
                "targetScope": "currentSpeaker",
                "dimension": "misunderstanding",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_25_competition_entry",
              "variantId": "tszhin_pakyu_weird_quiz",
              "mustMatchEventTitle": "班際 competition 報名／提名／分組"
            }
          },
          {
            "id": "s2_w7_25_tszhin_pakyu_weird_quiz_dont_want_to_be_asked",
            "text": "不想被問到。",
            "buttonText": "不想被問到。",
            "playerLine": "「我唔想答錯。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_25_tszhin_pakyu_dont_want_to_be_asked"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒看你一眼，沒有笑，只說可以先練。柏宇把聲音放輕：「答錯都唔會爆炸。」你不知道他是不是安慰，但有一點想笑。"
            },
            "resultText": "梓軒看你一眼，沒有笑，只說可以先練。柏宇把聲音放輕：「答錯都唔會爆炸。」你不知道他是不是安慰，但有一點想笑。",
            "statusDelta": {
              "理智值": -1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_25_competition_entry",
              "variantId": "tszhin_pakyu_weird_quiz",
              "mustMatchEventTitle": "班際 competition 報名／提名／分組"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_competitive_peer",
        "npcIdHint": "classmate_competitive_peer",
        "npcNameFallback": "梓軒",
        "competitionType": null,
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_mischief_maker",
            "npcNameFallback": "柏宇"
          }
        ]
      }
    ]
  },
  {
    "id": "s2_w7_26_pre_holiday_restless",
    "sourceTopicId": "S2-W7-26",
    "weekPool": "S2-W7_authored_weekly",
    "termId": "term_p1_s2",
    "week": 7,
    "category": "school_life",
    "title": "復活節假期前，大家心已經飄走",
    "sceneIntro": "復活節假期還未正式開始，但班房裡已經有人在數還有幾日。手冊上有假期提示，書包裡有未派完的工作紙，窗邊的陽光落在桌面上，大家像還坐在課室，心卻已經跑到假期裡。老師講話時，有人翻鉛筆盒，有人看窗外，有人把「假期」兩個字講到很小聲。",
    "metadata": {
      "sourceMarkdown": "info/s2_w7_w12_dialogue_draft_v0_2.md",
      "uiHidden": true,
      "noCompetitionRequired": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        7,
        7
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w7_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "teacher_reminds_homework",
        "variantTitle": "老師提醒還有功課",
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師把假期工作紙放在講台上：「未放假之前，先聽清楚要帶咩返屋企。」幾個同學嘆了一聲，老師停了停，又說：「假期可以休息，但功課唔會自己行返嚟。」"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w7_26_teacher_reminds_homework_file_it",
            "text": "把紙放進功課夾。",
            "buttonText": "把紙放進功課夾。",
            "playerLine": "「我夾好先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_26_teacher_reminds_homework_file_it"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把工作紙夾進功課夾，紙角終於不再翹起來。假期還未到，書包已經先變重。"
            },
            "resultText": "你把工作紙夾進功課夾，紙角終於不再翹起來。假期還未到，書包已經先變重。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_26_pre_holiday_restless",
              "variantId": "teacher_reminds_homework",
              "mustMatchEventTitle": "復活節假期前，大家心已經飄走"
            }
          },
          {
            "id": "s2_w7_26_teacher_reminds_homework_ask_due_date",
            "text": "問要交哪日。",
            "buttonText": "問要交哪日。",
            "playerLine": "「幾時交呀？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_26_teacher_reminds_homework_ask_due_date"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師在黑板寫日期。你抄到手冊上，覺得假期中間忽然有一條線被畫出來。"
            },
            "resultText": "老師在黑板寫日期。你抄到手冊上，覺得假期中間忽然有一條線被畫出來。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_26_pre_holiday_restless",
              "variantId": "teacher_reminds_homework",
              "mustMatchEventTitle": "復活節假期前，大家心已經飄走"
            }
          },
          {
            "id": "s2_w7_26_teacher_reminds_homework_so_much",
            "text": "小聲說好多。",
            "buttonText": "小聲說好多。",
            "playerLine": "「好多呀。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_26_teacher_reminds_homework_so_much"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "前面同學也回頭點點頭。老師沒有聽見，或者聽見了也沒有立刻罵，只叫大家先寫日期。"
            },
            "resultText": "前面同學也回頭點點頭。老師沒有聽見，或者聽見了也沒有立刻罵，只叫大家先寫日期。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_26_pre_holiday_restless",
              "variantId": "teacher_reminds_homework",
              "mustMatchEventTitle": "復活節假期前，大家心已經飄走"
            }
          },
          {
            "id": "s2_w7_26_teacher_reminds_homework_look_outside",
            "text": "望向窗外。",
            "buttonText": "望向窗外。",
            "playerLine": "「……」",
            "playerLineType": "narration",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_26_teacher_reminds_homework_look_outside"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你看見窗外的樹在動。老師叫大家看回黑板時，你才發現自己還沒有寫完第一行。"
            },
            "resultText": "你看見窗外的樹在動。老師叫大家看回黑板時，你才發現自己還沒有寫完第一行。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_26_pre_holiday_restless",
              "variantId": "teacher_reminds_homework",
              "mustMatchEventTitle": "復活節假期前，大家心已經飄走"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": "pers_strict_academic",
        "npcIdHint": "teacher_strict_academic",
        "npcNameFallback": "老師"
      },
      {
        "variantId": "kalong_counts_days",
        "variantTitle": "家朗數假期日子",
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "家朗在手冊角落數格子：「一、二、三……有幾日唔使返學！」他數到一半又問你：「你假期會去邊？」旁邊有人聽見，也湊過來想講自己的安排。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w7_26_kalong_counts_days_maybe_home",
            "text": "說可能在家。",
            "buttonText": "說可能在家。",
            "playerLine": "「可能喺屋企。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_26_kalong_counts_days_maybe_home"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "家朗沒有笑你，只說在家也可以睇電視。假期在他口中很大，但也容得下一張梳化。"
            },
            "resultText": "家朗沒有笑你，只說在家也可以睇電視。假期在他口中很大，但也容得下一張梳化。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_26_pre_holiday_restless",
              "variantId": "kalong_counts_days",
              "mustMatchEventTitle": "復活節假期前，大家心已經飄走"
            }
          },
          {
            "id": "s2_w7_26_kalong_counts_days_ask_where",
            "text": "問他去邊。",
            "buttonText": "問他去邊。",
            "playerLine": "「咁你去邊？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_26_kalong_counts_days_ask_where"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "家朗說可能去食飯，可能去街，說了幾個可能，最後自己也不太確定。你發現他數得清日子，不一定知道每一天會做甚麼。"
            },
            "resultText": "家朗說可能去食飯，可能去街，說了幾個可能，最後自己也不太確定。你發現他數得清日子，不一定知道每一天會做甚麼。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_26_pre_holiday_restless",
              "variantId": "kalong_counts_days",
              "mustMatchEventTitle": "復活節假期前，大家心已經飄走"
            }
          },
          {
            "id": "s2_w7_26_kalong_counts_days_teacher_watching",
            "text": "提醒老師在看。",
            "buttonText": "提醒老師在看。",
            "playerLine": "「老師望住喇。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_26_kalong_counts_days_teacher_watching"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗立刻坐直，手冊還停在數到一半的地方。他沒有完全收起笑，只把它壓低了一點。"
            },
            "resultText": "家朗立刻坐直，手冊還停在數到一半的地方。他沒有完全收起笑，只把它壓低了一點。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 0
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_26_pre_holiday_restless",
              "variantId": "kalong_counts_days",
              "mustMatchEventTitle": "復活節假期前，大家心已經飄走"
            }
          },
          {
            "id": "s2_w7_26_kalong_counts_days_count_together",
            "text": "一起數。",
            "buttonText": "一起數。",
            "playerLine": "「仲有幾日？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_26_kalong_counts_days_count_together"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你們低頭一起數格子，數到最後也不知算不算放假第一天。那個答案不重要，重要的是假期已經被你們數出聲。"
            },
            "resultText": "你們低頭一起數格子，數到最後也不知算不算放假第一天。那個答案不重要，重要的是假期已經被你們數出聲。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_26_pre_holiday_restless",
              "variantId": "kalong_counts_days",
              "mustMatchEventTitle": "復活節假期前，大家心已經飄走"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗"
      },
      {
        "variantId": "wingsam_tidies_desk",
        "variantTitle": "穎心收拾桌面",
        "openingDialogue": [
          {
            "speaker": "穎心",
            "text": "穎心沒有加入數假期，只把抽屜裡的紙一張張拿出來，分成功課、通告和不要的草稿。她把一張皺紙壓平，小聲說：「放假前唔執，返嚟會搵唔到。」"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w7_26_wingsam_tidies_desk_sort_along",
            "text": "跟著分紙。",
            "buttonText": "跟著分紙。",
            "playerLine": "「我都分開先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_26_wingsam_tidies_desk_sort_along"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把自己的紙攤開，才發現抽屜裡有一張很久以前的通告。穎心沒有說你亂，只把自己的夾子推近一點讓你看。"
            },
            "resultText": "你把自己的紙攤開，才發現抽屜裡有一張很久以前的通告。穎心沒有說你亂，只把自己的夾子推近一點讓你看。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_26_pre_holiday_restless",
              "variantId": "wingsam_tidies_desk",
              "mustMatchEventTitle": "復活節假期前，大家心已經飄走"
            }
          },
          {
            "id": "s2_w7_26_wingsam_tidies_desk_offer_help",
            "text": "問要不要幫忙。",
            "buttonText": "問要不要幫忙。",
            "playerLine": "「要唔要我拎住？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_26_wingsam_tidies_desk_offer_help"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "穎心",
              "text": "穎心把一疊紙交給你，叫你不要弄散。你拿著紙時才知道，她不是慢，只是每一步都放得很準。"
            },
            "resultText": "穎心把一疊紙交給你，叫你不要弄散。你拿著紙時才知道，她不是慢，只是每一步都放得很準。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 2
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_26_pre_holiday_restless",
              "variantId": "wingsam_tidies_desk",
              "mustMatchEventTitle": "復活節假期前，大家心已經飄走"
            }
          },
          {
            "id": "s2_w7_26_wingsam_tidies_desk_later",
            "text": "說等返嚟先執。",
            "buttonText": "說等返嚟先執。",
            "playerLine": "「返嚟先啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_26_wingsam_tidies_desk_later"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心看了你一眼，沒有勸很久，只把自己的抽屜推好。你突然想到，返來那天也許真的會忘記。"
            },
            "resultText": "穎心看了你一眼，沒有勸很久，只把自己的抽屜推好。你突然想到，返來那天也許真的會忘記。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": -1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_26_pre_holiday_restless",
              "variantId": "wingsam_tidies_desk",
              "mustMatchEventTitle": "復活節假期前，大家心已經飄走"
            }
          },
          {
            "id": "s2_w7_26_wingsam_tidies_desk_just_watch",
            "text": "只看她執。",
            "buttonText": "只看她執。",
            "playerLine": "「……」",
            "playerLineType": "narration",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_26_wingsam_tidies_desk_just_watch"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她把紙角對齊，桌面變乾淨了。你沒有跟著做，但記住了那種紙被壓平的聲音。"
            },
            "resultText": "她把紙角對齊，桌面變乾淨了。你沒有跟著做，但記住了那種紙被壓平的聲音。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_26_pre_holiday_restless",
              "variantId": "wingsam_tidies_desk",
              "mustMatchEventTitle": "復活節假期前，大家心已經飄走"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_quiet_observer",
        "npcIdHint": "classmate_quiet_observer",
        "npcNameFallback": "穎心"
      },
      {
        "variantId": "pakyu_summer_task",
        "variantTitle": "柏宇把假期講成任務",
        "openingDialogue": [
          {
            "speaker": "柏宇",
            "text": "柏宇把鉛筆盒當成地圖，低聲說：「假期其實係秘密任務，要避開功課怪獸。」他用擦膠當怪獸，推到工作紙旁邊。老師在前面講交功課日期，他卻把日期圈成像入口。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w7_26_pakyu_summer_task_where_is_monster",
            "text": "問功課怪獸在哪。",
            "buttonText": "問功課怪獸在哪。",
            "playerLine": "「邊度有怪獸？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_26_pakyu_summer_task_where_is_monster"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "柏宇",
              "text": "柏宇指著工作紙最長那頁。你明明知道那只是功課，還是覺得那頁真的有點像會追人。"
            },
            "resultText": "柏宇指著工作紙最長那頁。你明明知道那只是功課，還是覺得那頁真的有點像會追人。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_26_pre_holiday_restless",
              "variantId": "pakyu_summer_task",
              "mustMatchEventTitle": "復活節假期前，大家心已經飄走"
            }
          },
          {
            "id": "s2_w7_26_pakyu_summer_task_write_date",
            "text": "叫他寫日期。",
            "buttonText": "叫他寫日期。",
            "playerLine": "「你寫日期先啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_26_pakyu_summer_task_write_date"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇嘆一口氣，把入口變回日期。怪獸暫時退後，但鉛筆盒地圖還沒有完全收起來。"
            },
            "resultText": "柏宇嘆一口氣，把入口變回日期。怪獸暫時退後，但鉛筆盒地圖還沒有完全收起來。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 0
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_26_pre_holiday_restless",
              "variantId": "pakyu_summer_task",
              "mustMatchEventTitle": "復活節假期前，大家心已經飄走"
            }
          },
          {
            "id": "s2_w7_26_pakyu_summer_task_join_avoid",
            "text": "說我也要避開。",
            "buttonText": "說我也要避開。",
            "playerLine": "「我都要避。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_26_pakyu_summer_task_join_avoid"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "柏宇",
              "text": "柏宇很認真地點頭，說要先找安全地方做一題。你不確定這算玩還是做功課，但手上那張紙沒那麼硬了。"
            },
            "resultText": "柏宇很認真地點頭，說要先找安全地方做一題。你不確定這算玩還是做功課，但手上那張紙沒那麼硬了。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_26_pre_holiday_restless",
              "variantId": "pakyu_summer_task",
              "mustMatchEventTitle": "復活節假期前，大家心已經飄走"
            }
          },
          {
            "id": "s2_w7_26_pakyu_summer_task_not_join",
            "text": "不加入。",
            "buttonText": "不加入。",
            "playerLine": "「我寫手冊先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_26_pakyu_summer_task_not_join"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你低頭寫日期，柏宇的任務聲音在旁邊小小地飄著。你沒有進去他的故事，但也沒有完全聽不見。"
            },
            "resultText": "你低頭寫日期，柏宇的任務聲音在旁邊小小地飄著。你沒有進去他的故事，但也沒有完全聽不見。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_26_pre_holiday_restless",
              "variantId": "pakyu_summer_task",
              "mustMatchEventTitle": "復活節假期前，大家心已經飄走"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_mischief_maker",
        "npcIdHint": "classmate_curious_troublemaker",
        "npcNameFallback": "柏宇"
      }
    ]
  },
  {
    "id": "s2_w7_27_humid_classroom",
    "sourceTopicId": "S2-W7-27",
    "weekPool": "S2-W7_authored_weekly",
    "termId": "term_p1_s2",
    "week": 7,
    "category": "school_life",
    "title": "雨季前的悶熱課室、風扇和校服開始變熱",
    "sceneIntro": "四月的課室開始有點悶。風扇在頭頂轉，但風像只吹到前幾排。有人把冷衫塞進書包，有人用手冊扇風，有人的校服領口貼在脖子上。老師還在講課，你卻一直聽見風扇「嗡嗡」的聲音，好像整個班房都在等一場還未落下來的雨。",
    "metadata": {
      "sourceMarkdown": "info/s2_w7_w12_dialogue_draft_v0_2.md",
      "uiHidden": true,
      "noCompetitionRequired": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        7,
        7
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w7_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "under_the_fan",
        "variantTitle": "風扇下面的位置",
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "小息後，你坐回座位，發現風扇剛好不太吹到你這邊。家朗用手冊扇了兩下，說：「好熱呀。」前面同學說自己那邊有風，後面同學說根本沒有。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w7_27_under_the_fan_fan_with_notebook",
            "text": "用手冊扇風。",
            "buttonText": "用手冊扇風。",
            "playerLine": "「我扇陣。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_27_under_the_fan_fan_with_notebook"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "手冊頁邊拍到你的手指，風很小，但至少有一點。家朗也跟著扇，兩本手冊一起發出拍紙聲。"
            },
            "resultText": "手冊頁邊拍到你的手指，風很小，但至少有一點。家朗也跟著扇，兩本手冊一起發出拍紙聲。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_27_humid_classroom",
              "variantId": "under_the_fan",
              "mustMatchEventTitle": "雨季前的悶熱課室、風扇和校服開始變熱"
            }
          },
          {
            "id": "s2_w7_27_under_the_fan_ask_turn_up",
            "text": "問可不可以開大風扇。",
            "buttonText": "問可不可以開大風扇。",
            "playerLine": "「老師，可唔可以大啲？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_27_under_the_fan_ask_turn_up"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師看了風扇掣，說已經不小。你有點失望，但知道不是每個熱都能馬上解決。"
            },
            "resultText": "老師看了風扇掣，說已經不小。你有點失望，但知道不是每個熱都能馬上解決。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_27_humid_classroom",
              "variantId": "under_the_fan",
              "mustMatchEventTitle": "雨季前的悶熱課室、風扇和校服開始變熱"
            }
          },
          {
            "id": "s2_w7_27_under_the_fan_put_away_cardigan",
            "text": "把冷衫收起。",
            "buttonText": "把冷衫收起。",
            "playerLine": "「我唔著冷衫喇。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_27_under_the_fan_put_away_cardigan"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把冷衫塞進書包，書包鼓了一點。身上輕了，抽屜卻更擠。"
            },
            "resultText": "你把冷衫塞進書包，書包鼓了一點。身上輕了，抽屜卻更擠。",
            "statusDelta": {
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 0
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_27_humid_classroom",
              "variantId": "under_the_fan",
              "mustMatchEventTitle": "雨季前的悶熱課室、風扇和校服開始變熱"
            }
          },
          {
            "id": "s2_w7_27_under_the_fan_stay_quiet",
            "text": "忍住不說。",
            "buttonText": "忍住不說。",
            "playerLine": "「……」",
            "playerLineType": "narration",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_27_under_the_fan_stay_quiet"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你看著風扇轉，數到第十圈時又忘了數到哪裡。熱沒有很嚴重，只是一直在旁邊。"
            },
            "resultText": "你看著風扇轉，數到第十圈時又忘了數到哪裡。熱沒有很嚴重，只是一直在旁邊。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_27_humid_classroom",
              "variantId": "under_the_fan",
              "mustMatchEventTitle": "雨季前的悶熱課室、風扇和校服開始變熱"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗"
      },
      {
        "variantId": "collar_and_sweat",
        "variantTitle": "校服領口和汗",
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "寫字時，你覺得校服領口有點黏。梓軒把袖子拉上去，說：「咁熱點溫書呀。」老師提醒大家不要一直弄衣服，可是班房裡好幾個人都在動來動去。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w7_27_collar_and_sweat_pull_collar",
            "text": "拉一拉領口。",
            "buttonText": "拉一拉領口。",
            "playerLine": "「好焗呀。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_27_collar_and_sweat_pull_collar"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "你拉了一下領口，風鑽進來一秒又不見。梓軒點頭，好像這次你們不用比也有同一個答案。"
            },
            "resultText": "你拉了一下領口，風鑽進來一秒又不見。梓軒點頭，好像這次你們不用比也有同一個答案。",
            "statusDelta": {
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_27_humid_classroom",
              "variantId": "collar_and_sweat",
              "mustMatchEventTitle": "雨季前的悶熱課室、風扇和校服開始變熱"
            }
          },
          {
            "id": "s2_w7_27_collar_and_sweat_keep_writing",
            "text": "繼續寫字。",
            "buttonText": "繼續寫字。",
            "playerLine": "「我寫埋先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_27_collar_and_sweat_keep_writing"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把字寫完，筆尖有點滑。功課沒有因為天氣停下來，只是每一格都像比平日慢一點。"
            },
            "resultText": "你把字寫完，筆尖有點滑。功課沒有因為天氣停下來，只是每一格都像比平日慢一點。",
            "statusDelta": {
              "學業": 1,
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_27_humid_classroom",
              "variantId": "collar_and_sweat",
              "mustMatchEventTitle": "雨季前的悶熱課室、風扇和校服開始變熱"
            }
          },
          {
            "id": "s2_w7_27_collar_and_sweat_ask_water",
            "text": "問可不可以飲水。",
            "buttonText": "問可不可以飲水。",
            "playerLine": "「我想飲水。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_27_collar_and_sweat_ask_water"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師讓你小口喝水。水不冰，但喉嚨舒服了一點，桌面上的字也看得清楚些。"
            },
            "resultText": "老師讓你小口喝水。水不冰，但喉嚨舒服了一點，桌面上的字也看得清楚些。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_27_humid_classroom",
              "variantId": "collar_and_sweat",
              "mustMatchEventTitle": "雨季前的悶熱課室、風扇和校服開始變熱"
            }
          },
          {
            "id": "s2_w7_27_collar_and_sweat_want_to_go_home",
            "text": "說放學想快點走。",
            "buttonText": "說放學想快點走。",
            "playerLine": "「我想快啲放學。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_27_collar_and_sweat_want_to_go_home"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒說他也是，又立刻補一句放學還要溫習。那句話把一點風也壓回課室裡。"
            },
            "resultText": "梓軒說他也是，又立刻補一句放學還要溫習。那句話把一點風也壓回課室裡。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_27_humid_classroom",
              "variantId": "collar_and_sweat",
              "mustMatchEventTitle": "雨季前的悶熱課室、風扇和校服開始變熱"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_competitive_peer",
        "npcIdHint": "classmate_competitive_peer",
        "npcNameFallback": "梓軒"
      },
      {
        "variantId": "rain_clouds_outside",
        "variantTitle": "雨雲在窗外",
        "openingDialogue": [
          {
            "speaker": "穎心",
            "text": "下午，窗外的天慢慢灰起來。穎心抬頭看了一眼，把桌角的紙往裡推：「可能落雨。」柏宇立刻說：「可能係大雲怪嚟。」穎心沒有笑，只把紙壓得更平。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w7_27_rain_clouds_outside_hold_paper",
            "text": "幫忙壓紙。",
            "buttonText": "幫忙壓紙。",
            "playerLine": "「我幫你按住。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_27_rain_clouds_outside_hold_paper"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "穎心",
              "text": "你用手按著紙邊，窗外的風還沒吹進來，但穎心的紙先安靜了。柏宇看著你們，好像也在想雲怪可不可以整齊一點。"
            },
            "resultText": "你用手按著紙邊，窗外的風還沒吹進來，但穎心的紙先安靜了。柏宇看著你們，好像也在想雲怪可不可以整齊一點。",
            "statusDelta": {
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_27_humid_classroom",
              "variantId": "rain_clouds_outside",
              "mustMatchEventTitle": "雨季前的悶熱課室、風扇和校服開始變熱"
            }
          },
          {
            "id": "s2_w7_27_rain_clouds_outside_ask_heavy_rain",
            "text": "問會不會紅雨。",
            "buttonText": "問會不會紅雨。",
            "playerLine": "「會唔會好大雨？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_27_rain_clouds_outside_ask_heavy_rain"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心說不知道，柏宇說如果很大就像瀑布。你看著窗，忽然希望雨不要在放學時落。"
            },
            "resultText": "穎心說不知道，柏宇說如果很大就像瀑布。你看著窗，忽然希望雨不要在放學時落。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_27_humid_classroom",
              "variantId": "rain_clouds_outside",
              "mustMatchEventTitle": "雨季前的悶熱課室、風扇和校服開始變熱"
            }
          },
          {
            "id": "s2_w7_27_rain_clouds_outside_cloud_monster_is_weird",
            "text": "說雲怪好怪。",
            "buttonText": "說雲怪好怪。",
            "playerLine": "「雲怪係咩呀？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_27_rain_clouds_outside_cloud_monster_is_weird"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "柏宇",
              "text": "柏宇低聲解釋，穎心抬頭看了他一眼，沒有阻止。悶熱的天氣被他講歪了一點，反而沒那麼悶。"
            },
            "resultText": "柏宇低聲解釋，穎心抬頭看了他一眼，沒有阻止。悶熱的天氣被他講歪了一點，反而沒那麼悶。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_27_humid_classroom",
              "variantId": "rain_clouds_outside",
              "mustMatchEventTitle": "雨季前的悶熱課室、風扇和校服開始變熱"
            }
          },
          {
            "id": "s2_w7_27_rain_clouds_outside_put_paper_away",
            "text": "把自己的紙收好。",
            "buttonText": "把自己的紙收好。",
            "playerLine": "「我收埋先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_27_rain_clouds_outside_put_paper_away"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把紙塞進功課夾。還未落雨，但你像已經先避開了一點麻煩。"
            },
            "resultText": "你把紙塞進功課夾。還未落雨，但你像已經先避開了一點麻煩。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_27_humid_classroom",
              "variantId": "rain_clouds_outside",
              "mustMatchEventTitle": "雨季前的悶熱課室、風扇和校服開始變熱"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_quiet_observer",
        "npcIdHint": "classmate_quiet_observer",
        "npcNameFallback": "穎心",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_mischief_maker",
            "npcNameFallback": "柏宇"
          }
        ]
      },
      {
        "variantId": "teacher_seasonal_reminder",
        "variantTitle": "老師提醒換季",
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師在放學前說：「天氣開始熱，冷衫、水樽、雨傘都要自己記得。」她指指課室後面的失物籃，裡面已經有一件沒人認領的外套。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w7_27_teacher_seasonal_reminder_check_bottle",
            "text": "看自己的水樽。",
            "buttonText": "看自己的水樽。",
            "playerLine": "「我有帶水。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_27_teacher_seasonal_reminder_check_bottle"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你摸一摸水樽，發現裡面只剩一點。老師沒有看見，但你自己知道明天可能要裝多些。"
            },
            "resultText": "你摸一摸水樽，發現裡面只剩一點。老師沒有看見，但你自己知道明天可能要裝多些。",
            "statusDelta": {
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_27_humid_classroom",
              "variantId": "teacher_seasonal_reminder",
              "mustMatchEventTitle": "雨季前的悶熱課室、風扇和校服開始變熱"
            }
          },
          {
            "id": "s2_w7_27_teacher_seasonal_reminder_find_cardigan",
            "text": "找冷衫。",
            "buttonText": "找冷衫。",
            "playerLine": "「我件冷衫呢？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_27_teacher_seasonal_reminder_find_cardigan"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你在書包底找到冷衫，皺成一團。它沒有不見，只是被你塞到很遠。"
            },
            "resultText": "你在書包底找到冷衫，皺成一團。它沒有不見，只是被你塞到很遠。",
            "statusDelta": {
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_27_humid_classroom",
              "variantId": "teacher_seasonal_reminder",
              "mustMatchEventTitle": "雨季前的悶熱課室、風扇和校服開始變熱"
            }
          },
          {
            "id": "s2_w7_27_teacher_seasonal_reminder_ask_umbrella",
            "text": "問要不要帶傘。",
            "buttonText": "問要不要帶傘。",
            "playerLine": "「聽日要帶遮？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_27_teacher_seasonal_reminder_ask_umbrella"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師說看天氣報告。你不太懂報告，只知道家門口那把傘可能又要出現。"
            },
            "resultText": "老師說看天氣報告。你不太懂報告，只知道家門口那把傘可能又要出現。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_27_humid_classroom",
              "variantId": "teacher_seasonal_reminder",
              "mustMatchEventTitle": "雨季前的悶熱課室、風扇和校服開始變熱"
            }
          },
          {
            "id": "s2_w7_27_teacher_seasonal_reminder_write_note",
            "text": "記在手冊上。",
            "buttonText": "記在手冊上。",
            "playerLine": "「我寫低先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w7_27_teacher_seasonal_reminder_write_note"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你在手冊角落寫「水、遮」。字很小，但像給明天的自己留了一張紙條。"
            },
            "resultText": "你在手冊角落寫「水、遮」。字很小，但像給明天的自己留了一張紙條。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w7_27_humid_classroom",
              "variantId": "teacher_seasonal_reminder",
              "mustMatchEventTitle": "雨季前的悶熱課室、風扇和校服開始變熱"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": "pers_fair_observer",
        "npcIdHint": "teacher_fair_observer",
        "npcNameFallback": "老師"
      }
    ]
  },
  {
    "id": "s2_w8_28_easter_trip_selector",
    "sourceTopicId": "S2-W8-28",
    "weekPool": "S2-W8_authored_weekly",
    "termId": "term_p1_s2",
    "week": 8,
    "category": "family",
    "title": "Easter family trip：一局只抽一個地點",
    "sceneIntro": "復活節假期真的開始了。家人說這次可以出去走一走，不一定很遠，也不一定每件事都順利。門口的鞋排成一行，袋裡有水樽、紙巾和外套。你以為旅行就是去一個地方玩，後來才發現旅行也有等車、排隊、找路、吃飯時間和大人低頭看電話的時候。",
    "metadata": {
      "sourceMarkdown": "info/s2_w7_w12_dialogue_draft_v0_2.md",
      "uiHidden": true,
      "travelPlaceSourceEvent": true,
      "variantSelectionMode": "selectedTravelPlaceOnly",
      "onePlacePerSave": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 3,
      "weekRange": [
        8,
        8
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w8_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "island_day_trip",
        "variantTitle": "離島／坐船一日遊",
        "travelPlace": "island_day_trip",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "你們到碼頭時，風比街上大很多。媽媽一手按著袋口，一手看船票時間；爸爸望著指示牌，說應該是這邊排隊。海水味和人聲混在一起，你還未上船，已經覺得今天跟普通出街不一樣。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w8_28_island_day_trip_hold_hand",
            "text": "抓緊家人的手。",
            "buttonText": "抓緊家人的手。",
            "playerLine": "「風好大呀。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_28_island_day_trip_hold_hand"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人把你的手握緊一點。船還沒來，你已經記住了風把頭髮吹到眼前的感覺。"
            },
            "resultText": "家人把你的手握緊一點。船還沒來，你已經記住了風把頭髮吹到眼前的感覺。",
            "statusDelta": {
              "家庭關係": 1,
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_28_easter_trip_selector",
              "variantId": "island_day_trip",
              "mustMatchEventTitle": "Easter family trip：一局只抽一個地點"
            }
          },
          {
            "id": "s2_w8_28_island_day_trip_ask_when_board",
            "text": "問幾時上船。",
            "buttonText": "問幾時上船。",
            "playerLine": "「幾時到我哋？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_28_island_day_trip_ask_when_board"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "爸爸",
              "text": "爸爸看了看隊伍，說快了。這個「快」跟平日等升降機不一樣，前面還隔著一大排人和一陣海風。"
            },
            "resultText": "爸爸看了看隊伍，說快了。這個「快」跟平日等升降機不一樣，前面還隔著一大排人和一陣海風。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_28_easter_trip_selector",
              "variantId": "island_day_trip",
              "mustMatchEventTitle": "Easter family trip：一局只抽一個地點"
            }
          },
          {
            "id": "s2_w8_28_island_day_trip_watch_water",
            "text": "看海水。",
            "buttonText": "看海水。",
            "playerLine": "「水郁緊。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_28_island_day_trip_watch_water"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "媽媽",
              "text": "你趴近欄杆看，媽媽立刻叫你不要靠太前。海水一下一下拍著岸邊，像也在排隊。"
            },
            "resultText": "你趴近欄杆看，媽媽立刻叫你不要靠太前。海水一下一下拍著岸邊，像也在排隊。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_28_easter_trip_selector",
              "variantId": "island_day_trip",
              "mustMatchEventTitle": "Easter family trip：一局只抽一個地點"
            }
          },
          {
            "id": "s2_w8_28_island_day_trip_want_snack",
            "text": "想買小食。",
            "buttonText": "想買小食。",
            "playerLine": "「可唔可以買嘢食？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_28_island_day_trip_want_snack"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "媽媽",
              "text": "媽媽說上船前先不要亂買，等到了再說。小食檔的味道飄過來，你只好先把它放進肚子以外的地方。"
            },
            "resultText": "媽媽說上船前先不要亂買，等到了再說。小食檔的味道飄過來，你只好先把它放進肚子以外的地方。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_28_easter_trip_selector",
              "variantId": "island_day_trip",
              "mustMatchEventTitle": "Easter family trip：一局只抽一個地點"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "family_parent",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "theme_park_day_trip",
        "variantTitle": "海洋公園／主題公園類型一日遊",
        "travelPlace": "theme_park_day_trip",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "入口外面很多人，票、袋、水樽和地圖全都在大人手裡。媽媽低頭確認時間，爸爸把地圖打開又摺回去，摺痕怎樣都對不齊。你看見高高的牌和排隊的欄杆，覺得還未開始玩，腳已經要站很久。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w8_28_theme_park_day_trip_ask_where_first",
            "text": "問先玩邊個。",
            "buttonText": "問先玩邊個。",
            "playerLine": "「先去邊呀？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_28_theme_park_day_trip_ask_where_first"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "爸爸",
              "text": "爸爸指著地圖，媽媽說先找洗手間和水。你才知道旅行第一站不一定是最好玩的地方。"
            },
            "resultText": "爸爸指著地圖，媽媽說先找洗手間和水。你才知道旅行第一站不一定是最好玩的地方。",
            "statusDelta": {
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_28_easter_trip_selector",
              "variantId": "theme_park_day_trip",
              "mustMatchEventTitle": "Easter family trip：一局只抽一個地點"
            }
          },
          {
            "id": "s2_w8_28_theme_park_day_trip_so_many_people",
            "text": "說好多人。",
            "buttonText": "說好多人。",
            "playerLine": "「好多人呀。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_28_theme_park_day_trip_so_many_people"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "媽媽",
              "text": "媽媽叫你靠近一點。你看不到隊伍盡頭，只看見很多大人的背囊和帽子。"
            },
            "resultText": "媽媽叫你靠近一點。你看不到隊伍盡頭，只看見很多大人的背囊和帽子。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_28_easter_trip_selector",
              "variantId": "theme_park_day_trip",
              "mustMatchEventTitle": "Easter family trip：一局只抽一個地點"
            }
          },
          {
            "id": "s2_w8_28_theme_park_day_trip_hold_map",
            "text": "想拿地圖。",
            "buttonText": "想拿地圖。",
            "playerLine": "「我拎地圖得唔得？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_28_theme_park_day_trip_hold_map"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "爸爸",
              "text": "爸爸把地圖折小給你看，你拿著一角，覺得自己也像在幫忙找路。"
            },
            "resultText": "爸爸把地圖折小給你看，你拿著一角，覺得自己也像在幫忙找路。",
            "statusDelta": {
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_28_easter_trip_selector",
              "variantId": "theme_park_day_trip",
              "mustMatchEventTitle": "Easter family trip：一局只抽一個地點"
            }
          },
          {
            "id": "s2_w8_28_theme_park_day_trip_ask_souvenir",
            "text": "問可不可以買紀念品。",
            "buttonText": "問可不可以買紀念品。",
            "playerLine": "「可唔可以買嘢？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_28_theme_park_day_trip_ask_souvenir"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "媽媽",
              "text": "媽媽說先玩，最後再看。紀念品店的光很亮，但它被放到今天的後面。"
            },
            "resultText": "媽媽說先玩，最後再看。紀念品店的光很亮，但它被放到今天的後面。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_28_easter_trip_selector",
              "variantId": "theme_park_day_trip",
              "mustMatchEventTitle": "Easter family trip：一局只抽一個地點"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "family_parent",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "sz_macau_short_trip",
        "variantTitle": "深圳／澳門短途",
        "travelPlace": "sz_macau_short_trip",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "出發前，大人檢查證件比檢查玩具還認真。媽媽把證件袋放進包裡又拿出來看一次，爸爸說不要弄丟。你聽見地名，知道那不是平日去的商場，但還不太分得清要過幾道門。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w8_28_sz_macau_short_trip_ask_how_long",
            "text": "問要不要很久。",
            "buttonText": "問要不要很久。",
            "playerLine": "「要搭好耐車？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_28_sz_macau_short_trip_ask_how_long"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "爸爸",
              "text": "爸爸說要一陣。你看著車窗，覺得今天的路好像會比平日長很多。"
            },
            "resultText": "爸爸說要一陣。你看著車窗，覺得今天的路好像會比平日長很多。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_28_easter_trip_selector",
              "variantId": "sz_macau_short_trip",
              "mustMatchEventTitle": "Easter family trip：一局只抽一個地點"
            }
          },
          {
            "id": "s2_w8_28_sz_macau_short_trip_ask_what_is_document",
            "text": "問證件是甚麼。",
            "buttonText": "問證件是甚麼。",
            "playerLine": "「呢個係咩？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_28_sz_macau_short_trip_ask_what_is_document"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "媽媽",
              "text": "媽媽說是過關要用的東西，不能玩。那本小小的東西被放得很慎重，你也不敢再碰。"
            },
            "resultText": "媽媽說是過關要用的東西，不能玩。那本小小的東西被放得很慎重，你也不敢再碰。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_28_easter_trip_selector",
              "variantId": "sz_macau_short_trip",
              "mustMatchEventTitle": "Easter family trip：一局只抽一個地點"
            }
          },
          {
            "id": "s2_w8_28_sz_macau_short_trip_bring_toy",
            "text": "想帶玩具。",
            "buttonText": "想帶玩具。",
            "playerLine": "「我帶車仔得唔得？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_28_sz_macau_short_trip_bring_toy"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說可以，但要自己看好。你把小車放進袋裡，像帶一個熟悉的東西去不熟的地方。"
            },
            "resultText": "家人說可以，但要自己看好。你把小車放進袋裡，像帶一個熟悉的東西去不熟的地方。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_28_easter_trip_selector",
              "variantId": "sz_macau_short_trip",
              "mustMatchEventTitle": "Easter family trip：一局只抽一個地點"
            }
          },
          {
            "id": "s2_w8_28_sz_macau_short_trip_just_follow",
            "text": "只是跟著排隊。",
            "buttonText": "只是跟著排隊。",
            "playerLine": "「……」",
            "playerLineType": "narration",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_28_sz_macau_short_trip_just_follow"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你跟著大人一步一步走，前面的欄杆拐了幾次。你不太明白到了哪裡，只知道每過一個位，大人的手都握得緊一點。"
            },
            "resultText": "你跟著大人一步一步走，前面的欄杆拐了幾次。你不太明白到了哪裡，只知道每過一個位，大人的手都握得緊一點。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "dependency",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_28_easter_trip_selector",
              "variantId": "sz_macau_short_trip",
              "mustMatchEventTitle": "Easter family trip：一局只抽一個地點"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "family_parent",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "hotel_staycation",
        "variantTitle": "酒店 staycation",
        "travelPlace": "hotel_staycation",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "到酒店時，地板亮得可以看到人的影子。媽媽在櫃檯前拿出文件，爸爸看著電梯方向，你站在行李旁邊，望著一排很大的燈。你以為酒店就是立刻跳上床，但大人還要辦很多你聽不懂的事。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w8_28_hotel_staycation_ask_where_room",
            "text": "問房間在哪。",
            "buttonText": "問房間在哪。",
            "playerLine": "「我哋間房喺邊？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_28_hotel_staycation_ask_where_room"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "爸爸",
              "text": "爸爸說要先登記。你看著房卡還沒有出現，才知道房間不是一走進來就屬於你們。"
            },
            "resultText": "爸爸說要先登記。你看著房卡還沒有出現，才知道房間不是一走進來就屬於你們。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_28_easter_trip_selector",
              "variantId": "hotel_staycation",
              "mustMatchEventTitle": "Easter family trip：一局只抽一個地點"
            }
          },
          {
            "id": "s2_w8_28_hotel_staycation_look_at_floor",
            "text": "看地板影子。",
            "buttonText": "看地板影子。",
            "playerLine": "「地下好光。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_28_hotel_staycation_look_at_floor"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你低頭看自己的鞋影，影子比平日在家清楚。酒店的亮讓你走路也小心了一點。"
            },
            "resultText": "你低頭看自己的鞋影，影子比平日在家清楚。酒店的亮讓你走路也小心了一點。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_28_easter_trip_selector",
              "variantId": "hotel_staycation",
              "mustMatchEventTitle": "Easter family trip：一局只抽一個地點"
            }
          },
          {
            "id": "s2_w8_28_hotel_staycation_sit_on_luggage",
            "text": "想坐行李箱。",
            "buttonText": "想坐行李箱。",
            "playerLine": "「我坐一陣得唔得？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_28_hotel_staycation_sit_on_luggage"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "媽媽",
              "text": "媽媽叫你不要坐，行李箱會倒。你摸了摸拉桿，只好把它當成不是椅子的東西。"
            },
            "resultText": "媽媽叫你不要坐，行李箱會倒。你摸了摸拉桿，只好把它當成不是椅子的東西。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "misunderstanding",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_28_easter_trip_selector",
              "variantId": "hotel_staycation",
              "mustMatchEventTitle": "Easter family trip：一局只抽一個地點"
            }
          },
          {
            "id": "s2_w8_28_hotel_staycation_ask_slippers",
            "text": "問有冇拖鞋。",
            "buttonText": "問有冇拖鞋。",
            "playerLine": "「會唔會有拖鞋？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_28_hotel_staycation_ask_slippers"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "爸爸",
              "text": "爸爸笑說應該有。你還沒看到房間，已經開始想像一對可能太大的白色拖鞋。"
            },
            "resultText": "爸爸笑說應該有。你還沒看到房間，已經開始想像一對可能太大的白色拖鞋。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_28_easter_trip_selector",
              "variantId": "hotel_staycation",
              "mustMatchEventTitle": "Easter family trip：一局只抽一個地點"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "family_parent",
        "npcNameFallback": "家人"
      }
    ]
  },
  {
    "id": "s2_w8_29_trip_logistics",
    "sourceTopicId": "S2-W8-29",
    "weekPool": "S2-W8_authored_weekly",
    "termId": "term_p1_s2",
    "week": 8,
    "category": "family",
    "title": "旅行裡的大人安排：票、時間、水樽和外套",
    "sceneIntro": "旅行那天，大人的手好像一直沒有空過。有人拿票，有人看時間，有人找水樽，有人把外套塞進袋裡。你本來只想看前面有甚麼，卻常常被叫住：不要走太快、先喝水、等爸爸看路、等媽媽買票。旅行的節奏不是你一個人的腳步決定。",
    "metadata": {
      "sourceMarkdown": "info/s2_w7_w12_dialogue_draft_v0_2.md",
      "uiHidden": true,
      "usesSelectedTravelPlace": true,
      "familyMomentEvent": true,
      "motherFatherNotSeparateVariants": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        8,
        8
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w8_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "tickets_and_time",
        "variantTitle": "票和時間",
        "openingDialogue": [
          {
            "speaker": "媽媽",
            "text": "媽媽把票放在手機殼旁邊，又確認一次入場或上車時間。爸爸說還有一點時間，但媽媽看了看人流，說：「唔好太遲，排隊會耐。」你站在兩個答案中間，不知道到底是有時間還是沒有時間。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w8_29_tickets_and_time_ask_late",
            "text": "問會不會遲到。",
            "buttonText": "問會不會遲到。",
            "playerLine": "「會唔會遲到？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_29_tickets_and_time_ask_late"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "媽媽",
              "text": "媽媽說不會，但要現在行。你知道了不遲到也要快一點，這聽起來有點奇怪。"
            },
            "resultText": "媽媽說不會，但要現在行。你知道了不遲到也要快一點，這聽起來有點奇怪。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_29_trip_logistics",
              "variantId": "tickets_and_time",
              "mustMatchEventTitle": "旅行裡的大人安排：票、時間、水樽和外套"
            }
          },
          {
            "id": "s2_w8_29_tickets_and_time_want_slow",
            "text": "說想慢慢行。",
            "buttonText": "說想慢慢行。",
            "playerLine": "「我想慢慢行。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_29_tickets_and_time_want_slow"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "爸爸",
              "text": "爸爸叫你先跟著，等過了入口再慢。你把步子放大一點，像先把慢慢行存到後面。"
            },
            "resultText": "爸爸叫你先跟著，等過了入口再慢。你把步子放大一點，像先把慢慢行存到後面。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_29_trip_logistics",
              "variantId": "tickets_and_time",
              "mustMatchEventTitle": "旅行裡的大人安排：票、時間、水樽和外套"
            }
          },
          {
            "id": "s2_w8_29_tickets_and_time_carry_paper",
            "text": "幫忙拿一張紙。",
            "buttonText": "幫忙拿一張紙。",
            "playerLine": "「我拎呢張得唔得？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_29_tickets_and_time_carry_paper"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "媽媽",
              "text": "媽媽把不重要的宣傳紙給你，不把票給你。你有點失望，但也知道有些紙比其他紙重要。"
            },
            "resultText": "媽媽把不重要的宣傳紙給你，不把票給你。你有點失望，但也知道有些紙比其他紙重要。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_29_trip_logistics",
              "variantId": "tickets_and_time",
              "mustMatchEventTitle": "旅行裡的大人安排：票、時間、水樽和外套"
            }
          },
          {
            "id": "s2_w8_29_tickets_and_time_just_watch",
            "text": "只看大人忙。",
            "buttonText": "只看大人忙。",
            "playerLine": "「……」",
            "playerLineType": "narration",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_29_tickets_and_time_just_watch"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你看見票被拿起又放下，手機亮了又暗。旅行還沒真正開始，已經有很多小事情先走在前面。"
            },
            "resultText": "你看見票被拿起又放下，手機亮了又暗。旅行還沒真正開始，已經有很多小事情先走在前面。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_29_trip_logistics",
              "variantId": "tickets_and_time",
              "mustMatchEventTitle": "旅行裡的大人安排：票、時間、水樽和外套"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "family_parent",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "meal_time",
        "variantTitle": "食飯時間",
        "openingDialogue": [
          {
            "speaker": "媽媽",
            "text": "玩到一半，媽媽看了看時間：「要諗下食咩，唔係一陣好多人。」爸爸指著另一邊說那裡可能有餐廳。你其實還不餓，只想繼續看剛才那個地方。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w8_29_meal_time_not_hungry",
            "text": "說還不餓。",
            "buttonText": "說還不餓。",
            "playerLine": "「我未肚餓。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_29_meal_time_not_hungry"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "媽媽",
              "text": "媽媽說等你餓時可能已經要排很久。你不太服氣，但肚子像聽見這句後開始想了一下。"
            },
            "resultText": "媽媽說等你餓時可能已經要排很久。你不太服氣，但肚子像聽見這句後開始想了一下。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "misunderstanding",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_29_trip_logistics",
              "variantId": "meal_time",
              "mustMatchEventTitle": "旅行裡的大人安排：票、時間、水樽和外套"
            }
          },
          {
            "id": "s2_w8_29_meal_time_ask_what_food",
            "text": "問有咩食。",
            "buttonText": "問有咩食。",
            "playerLine": "「有咩食呀？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_29_meal_time_ask_what_food"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "爸爸",
              "text": "爸爸說要走近才知道。你想像很多食物，最後先看到的是排隊的人。"
            },
            "resultText": "爸爸說要走近才知道。你想像很多食物，最後先看到的是排隊的人。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_29_trip_logistics",
              "variantId": "meal_time",
              "mustMatchEventTitle": "旅行裡的大人安排：票、時間、水樽和外套"
            }
          },
          {
            "id": "s2_w8_29_meal_time_finish_looking_first",
            "text": "想先去看完。",
            "buttonText": "想先去看完。",
            "playerLine": "「睇埋先得唔得？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_29_meal_time_finish_looking_first"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人互相看了一眼，說看完這一個就去吃。你得到一小段時間，也知道它有盡頭。"
            },
            "resultText": "家人互相看了一眼，說看完這一個就去吃。你得到一小段時間，也知道它有盡頭。",
            "statusDelta": {
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_29_trip_logistics",
              "variantId": "meal_time",
              "mustMatchEventTitle": "旅行裡的大人安排：票、時間、水樽和外套"
            }
          },
          {
            "id": "s2_w8_29_meal_time_follow_to_restaurant",
            "text": "跟著去餐廳。",
            "buttonText": "跟著去餐廳。",
            "playerLine": "「咁去啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_29_meal_time_follow_to_restaurant"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你離開原本想看的地方，回頭看了兩次。餐廳的冷氣很舒服，但那個地方被留在玻璃門外。"
            },
            "resultText": "你離開原本想看的地方，回頭看了兩次。餐廳的冷氣很舒服，但那個地方被留在玻璃門外。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_29_trip_logistics",
              "variantId": "meal_time",
              "mustMatchEventTitle": "旅行裡的大人安排：票、時間、水樽和外套"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "family_parent",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "coat_and_bottle",
        "variantTitle": "外套和水樽",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "天氣一時熱一時涼。媽媽叫你喝水，爸爸把外套從袋裡拿出來問要不要穿。你覺得剛才很熱，現在又被冷氣吹到手臂起粒粒。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w8_29_coat_and_bottle_drink_water",
            "text": "喝一口水。",
            "buttonText": "喝一口水。",
            "playerLine": "「我飲啲水。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_29_coat_and_bottle_drink_water"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "媽媽",
              "text": "水樽不冰，但你喝完後喉嚨舒服了。媽媽把蓋扭緊，又把水樽放回袋邊容易拿的位置。"
            },
            "resultText": "水樽不冰，但你喝完後喉嚨舒服了。媽媽把蓋扭緊，又把水樽放回袋邊容易拿的位置。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_29_trip_logistics",
              "variantId": "coat_and_bottle",
              "mustMatchEventTitle": "旅行裡的大人安排：票、時間、水樽和外套"
            }
          },
          {
            "id": "s2_w8_29_coat_and_bottle_wear_coat",
            "text": "穿外套。",
            "buttonText": "穿外套。",
            "playerLine": "「我著返。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_29_coat_and_bottle_wear_coat"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "爸爸",
              "text": "外套袖子有點皺，你把手伸進去時卡了一下。爸爸幫你拉好，沒有說你剛才不肯穿。"
            },
            "resultText": "外套袖子有點皺，你把手伸進去時卡了一下。爸爸幫你拉好，沒有說你剛才不肯穿。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_29_trip_logistics",
              "variantId": "coat_and_bottle",
              "mustMatchEventTitle": "旅行裡的大人安排：票、時間、水樽和外套"
            }
          },
          {
            "id": "s2_w8_29_coat_and_bottle_dont_want_carry",
            "text": "說不想拿。",
            "buttonText": "說不想拿。",
            "playerLine": "「好重呀。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_29_coat_and_bottle_dont_want_carry"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "媽媽",
              "text": "媽媽說所以才叫你不要亂帶太多。你摸摸袋子，覺得旅行裡每樣東西都有重量。"
            },
            "resultText": "媽媽說所以才叫你不要亂帶太多。你摸摸袋子，覺得旅行裡每樣東西都有重量。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": -1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_29_trip_logistics",
              "variantId": "coat_and_bottle",
              "mustMatchEventTitle": "旅行裡的大人安排：票、時間、水樽和外套"
            }
          },
          {
            "id": "s2_w8_29_coat_and_bottle_ask_cold_drink",
            "text": "問可不可以買凍飲。",
            "buttonText": "問可不可以買凍飲。",
            "playerLine": "「可唔可以買凍嘢飲？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_29_coat_and_bottle_ask_cold_drink"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說先喝自己的水。凍飲店的杯子很漂亮，但水樽在你手上更近。"
            },
            "resultText": "家人說先喝自己的水。凍飲店的杯子很漂亮，但水樽在你手上更近。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_29_trip_logistics",
              "variantId": "coat_and_bottle",
              "mustMatchEventTitle": "旅行裡的大人安排：票、時間、水樽和外套"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "family_parent",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "count_before_return",
        "variantTitle": "回程前再點算",
        "openingDialogue": [
          {
            "speaker": "媽媽",
            "text": "準備回去時，媽媽站在旁邊點東西：「水樽、外套、袋、你個小玩具。」爸爸看路線，說要趕下一班車或船。你已經有點累，聽見大人數東西，覺得今天像要被慢慢收進袋裡。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w8_29_count_before_return_find_toy",
            "text": "找自己的玩具。",
            "buttonText": "找自己的玩具。",
            "playerLine": "「我個車仔呢？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_29_count_before_return_find_toy"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你在袋底摸到小車，鬆了一口氣。它沒有玩很多，卻像陪你走完整天。"
            },
            "resultText": "你在袋底摸到小車，鬆了一口氣。它沒有玩很多，卻像陪你走完整天。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_29_trip_logistics",
              "variantId": "count_before_return",
              "mustMatchEventTitle": "旅行裡的大人安排：票、時間、水樽和外套"
            }
          },
          {
            "id": "s2_w8_29_count_before_return_so_tired",
            "text": "說好累。",
            "buttonText": "說好累。",
            "playerLine": "「我好攰。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_29_count_before_return_so_tired"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "爸爸",
              "text": "爸爸蹲下來幫你把鞋帶拉好，說再走一段就到。那句再走一段比地圖容易明白。"
            },
            "resultText": "爸爸蹲下來幫你把鞋帶拉好，說再走一段就到。那句再走一段比地圖容易明白。",
            "statusDelta": {
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_29_trip_logistics",
              "variantId": "count_before_return",
              "mustMatchEventTitle": "旅行裡的大人安排：票、時間、水樽和外套"
            }
          },
          {
            "id": "s2_w8_29_count_before_return_still_queue",
            "text": "問還要不要排隊。",
            "buttonText": "問還要不要排隊。",
            "playerLine": "「仲要排呀？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_29_count_before_return_still_queue"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "媽媽",
              "text": "媽媽看了看前面的人，說要。你嘆了一聲，知道旅行的最後也可能是隊伍。"
            },
            "resultText": "媽媽看了看前面的人，說要。你嘆了一聲，知道旅行的最後也可能是隊伍。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_29_trip_logistics",
              "variantId": "count_before_return",
              "mustMatchEventTitle": "旅行裡的大人安排：票、時間、水樽和外套"
            }
          },
          {
            "id": "s2_w8_29_count_before_return_carry_tissue",
            "text": "幫忙拿紙巾。",
            "buttonText": "幫忙拿紙巾。",
            "playerLine": "「我拎紙巾。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_29_count_before_return_carry_tissue"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把紙巾握在手裡，像也有一樣小小的責任。大人沒有把票交給你，但紙巾是你的。"
            },
            "resultText": "你把紙巾握在手裡，像也有一樣小小的責任。大人沒有把票交給你，但紙巾是你的。",
            "statusDelta": {
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_29_trip_logistics",
              "variantId": "count_before_return",
              "mustMatchEventTitle": "旅行裡的大人安排：票、時間、水樽和外套"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "family_parent",
        "npcNameFallback": "家人"
      }
    ]
  },
  {
    "id": "s2_w8_30_dad_functions",
    "sourceTopicId": "S2-W8-30",
    "weekPool": "S2-W8_authored_weekly",
    "termId": "term_p1_s2",
    "week": 8,
    "category": "family",
    "title": "旅行裡爸爸的找路、拍照、零食和哄累",
    "sceneIntro": "旅行途中，爸爸常常不是站在你正前面，就是落後半步看手機。他找路時眉頭皺起，拍照時叫你站過去一點，買零食時又說不要吃太多。你有時覺得他很慢，有時又發現他手裡拿著的東西比你想像多。",
    "metadata": {
      "sourceMarkdown": "info/s2_w7_w12_dialogue_draft_v0_2.md",
      "uiHidden": true,
      "usesSelectedTravelPlace": true,
      "familyMomentEvent": true,
      "fatherFunctionEvent": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        8,
        8
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w8_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "dad_finds_way",
        "variantTitle": "爸爸找路",
        "openingDialogue": [
          {
            "speaker": "爸爸",
            "text": "爸爸把地圖或手機拿近，又轉了半圈：「應該係呢邊。」媽媽說剛才好像是另一邊。你站在兩個大人中間，看見前面有兩條路，兩條都有人走。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w8_30_dad_finds_way_ask_lost",
            "text": "問是不是迷路。",
            "buttonText": "問是不是迷路。",
            "playerLine": "「係咪唔識路？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_30_dad_finds_way_ask_lost"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "爸爸",
              "text": "爸爸說不是，只是確認。你聽到「確認」兩個字，覺得它像大人版的迷路。"
            },
            "resultText": "爸爸說不是，只是確認。你聽到「確認」兩個字，覺得它像大人版的迷路。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "misunderstanding",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_30_dad_functions",
              "variantId": "dad_finds_way",
              "mustMatchEventTitle": "旅行裡爸爸的找路、拍照、零食和哄累"
            }
          },
          {
            "id": "s2_w8_30_dad_finds_way_point_direction",
            "text": "指一個方向。",
            "buttonText": "指一個方向。",
            "playerLine": "「嗰邊啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_30_dad_finds_way_point_direction"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "爸爸",
              "text": "爸爸笑了一下，說不能亂指。你有點不服氣，但還是跟著他看回地圖。"
            },
            "resultText": "爸爸笑了一下，說不能亂指。你有點不服氣，但還是跟著他看回地圖。",
            "statusDelta": {
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_30_dad_functions",
              "variantId": "dad_finds_way",
              "mustMatchEventTitle": "旅行裡爸爸的找路、拍照、零食和哄累"
            }
          },
          {
            "id": "s2_w8_30_dad_finds_way_wait_aside",
            "text": "等在旁邊。",
            "buttonText": "等在旁邊。",
            "playerLine": "「……」",
            "playerLineType": "narration",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_30_dad_finds_way_wait_aside"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你靠著欄杆等，鞋尖踢到地上的小石。找路的時間不刺激，卻也是旅行的一部分。"
            },
            "resultText": "你靠著欄杆等，鞋尖踢到地上的小石。找路的時間不刺激，卻也是旅行的一部分。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_30_dad_functions",
              "variantId": "dad_finds_way",
              "mustMatchEventTitle": "旅行裡爸爸的找路、拍照、零食和哄累"
            }
          },
          {
            "id": "s2_w8_30_dad_finds_way_want_sit",
            "text": "說想坐下。",
            "buttonText": "說想坐下。",
            "playerLine": "「我想坐陣。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_30_dad_finds_way_want_sit"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "爸爸",
              "text": "爸爸看你一眼，說找到路先。過了一會兒，他真的帶你去長椅坐了一分鐘。"
            },
            "resultText": "爸爸看你一眼，說找到路先。過了一會兒，他真的帶你去長椅坐了一分鐘。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_30_dad_functions",
              "variantId": "dad_finds_way",
              "mustMatchEventTitle": "旅行裡爸爸的找路、拍照、零食和哄累"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_dad",
        "npcNameFallback": "爸爸"
      },
      {
        "variantId": "dad_takes_photo",
        "variantTitle": "爸爸拍照",
        "openingDialogue": [
          {
            "speaker": "爸爸",
            "text": "爸爸舉起手機：「企埋啲，影張相。」你剛好被陽光照到眼，又聽見後面有人等位。媽媽整理你的衣領，你不知道要笑多大才算對。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w8_30_dad_takes_photo_smile",
            "text": "站好笑。",
            "buttonText": "站好笑。",
            "playerLine": "「影啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_30_dad_takes_photo_smile"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你笑得有點硬，眼睛半瞇。爸爸說可以了，你跑回去看相，發現燈比你的笑還亮。"
            },
            "resultText": "你笑得有點硬，眼睛半瞇。爸爸說可以了，你跑回去看相，發現燈比你的笑還亮。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_30_dad_functions",
              "variantId": "dad_takes_photo",
              "mustMatchEventTitle": "旅行裡爸爸的找路、拍照、零食和哄累"
            }
          },
          {
            "id": "s2_w8_30_dad_takes_photo_too_bright",
            "text": "說曬眼。",
            "buttonText": "說曬眼。",
            "playerLine": "「好曬呀。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_30_dad_takes_photo_too_bright"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "爸爸",
              "text": "爸爸換了一個角度。照片遲了一點才拍，但你不用一直睜著痛的眼。"
            },
            "resultText": "爸爸換了一個角度。照片遲了一點才拍，但你不用一直睜著痛的眼。",
            "statusDelta": {
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_30_dad_functions",
              "variantId": "dad_takes_photo",
              "mustMatchEventTitle": "旅行裡爸爸的找路、拍照、零食和哄累"
            }
          },
          {
            "id": "s2_w8_30_dad_takes_photo_want_to_shoot",
            "text": "想自己拍。",
            "buttonText": "想自己拍。",
            "playerLine": "「我影得唔得？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_30_dad_takes_photo_want_to_shoot"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "爸爸",
              "text": "爸爸讓你按一下，但叫你拿穩。畫面有點歪，你卻很記得那一秒手機在你手裡。"
            },
            "resultText": "爸爸讓你按一下，但叫你拿穩。畫面有點歪，你卻很記得那一秒手機在你手裡。",
            "statusDelta": {
              "自信": 1,
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_30_dad_functions",
              "variantId": "dad_takes_photo",
              "mustMatchEventTitle": "旅行裡爸爸的找路、拍照、零食和哄累"
            }
          },
          {
            "id": "s2_w8_30_dad_takes_photo_dont_want",
            "text": "不想拍。",
            "buttonText": "不想拍。",
            "playerLine": "「我唔想影。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_30_dad_takes_photo_dont_want"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "爸爸",
              "text": "爸爸停了一下，說那就影景物。你站在旁邊，突然覺得不在照片裡也可以記住今天。"
            },
            "resultText": "爸爸停了一下，說那就影景物。你站在旁邊，突然覺得不在照片裡也可以記住今天。",
            "statusDelta": {
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": -1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_30_dad_functions",
              "variantId": "dad_takes_photo",
              "mustMatchEventTitle": "旅行裡爸爸的找路、拍照、零食和哄累"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_dad",
        "npcNameFallback": "爸爸"
      },
      {
        "variantId": "dad_buys_snack",
        "variantTitle": "爸爸買零食",
        "openingDialogue": [
          {
            "speaker": "爸爸",
            "text": "走到一半，爸爸在小食店前停下：「食少少先。」媽媽提醒不要買太多，等會兒還要食飯。你看著玻璃櫃裡的食物，覺得每一樣都比剛才的路線容易選。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w8_30_dad_buys_snack_choose_one",
            "text": "選一樣小食。",
            "buttonText": "選一樣小食。",
            "playerLine": "「我想要呢個。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_30_dad_buys_snack_choose_one"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "爸爸",
              "text": "爸爸買了小份的，叫你慢慢吃。那一口不是正式午餐，卻把累的地方補了一點。"
            },
            "resultText": "爸爸買了小份的，叫你慢慢吃。那一口不是正式午餐，卻把累的地方補了一點。",
            "statusDelta": {
              "快樂": 1,
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_30_dad_functions",
              "variantId": "dad_buys_snack",
              "mustMatchEventTitle": "旅行裡爸爸的找路、拍照、零食和哄累"
            }
          },
          {
            "id": "s2_w8_30_dad_buys_snack_ask_sweet",
            "text": "問可不可以買甜的。",
            "buttonText": "問可不可以買甜的。",
            "playerLine": "「甜嘅得唔得？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_30_dad_buys_snack_ask_sweet"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽說不要太甜，爸爸找了一個折衷。你不懂折衷，只知道最後不是最大杯，也不是沒有。"
            },
            "resultText": "媽媽說不要太甜，爸爸找了一個折衷。你不懂折衷，只知道最後不是最大杯，也不是沒有。",
            "statusDelta": {
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_30_dad_functions",
              "variantId": "dad_buys_snack",
              "mustMatchEventTitle": "旅行裡爸爸的找路、拍照、零食和哄累"
            }
          },
          {
            "id": "s2_w8_30_dad_buys_snack_share",
            "text": "分給家人。",
            "buttonText": "分給家人。",
            "playerLine": "「你食唔食？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_30_dad_buys_snack_share"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "爸爸",
              "text": "爸爸咬了一小口，說幾好。你覺得那樣東西忽然不只是你自己的。"
            },
            "resultText": "爸爸咬了一小口，說幾好。你覺得那樣東西忽然不只是你自己的。",
            "statusDelta": {
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 2
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_30_dad_functions",
              "variantId": "dad_buys_snack",
              "mustMatchEventTitle": "旅行裡爸爸的找路、拍照、零食和哄累"
            }
          },
          {
            "id": "s2_w8_30_dad_buys_snack_dont_want",
            "text": "不想吃。",
            "buttonText": "不想吃。",
            "playerLine": "「我唔想食。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_30_dad_buys_snack_dont_want"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "爸爸",
              "text": "爸爸把小食收起，說等你肚餓再說。它在袋裡跟著你走，像一個稍後才打開的休息。"
            },
            "resultText": "爸爸把小食收起，說等你肚餓再說。它在袋裡跟著你走，像一個稍後才打開的休息。",
            "statusDelta": {
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": -1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_30_dad_functions",
              "variantId": "dad_buys_snack",
              "mustMatchEventTitle": "旅行裡爸爸的找路、拍照、零食和哄累"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_dad",
        "npcNameFallback": "爸爸"
      },
      {
        "variantId": "dad_soothes_tired",
        "variantTitle": "爸爸哄玩家累了",
        "openingDialogue": [
          {
            "speaker": "爸爸",
            "text": "回程路上，你走得越來越慢。爸爸回頭看你，把手伸出來：「再行少少。」媽媽在前面看時間，你看著自己的鞋，覺得它們比早上重很多。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w8_30_dad_soothes_tired_hold_hand",
            "text": "牽爸爸的手。",
            "buttonText": "牽爸爸的手。",
            "playerLine": "「我拖住你。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_30_dad_soothes_tired_hold_hand"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "爸爸",
              "text": "爸爸的手很暖，步子放慢了一點。你沒有立刻不累，但每一步不用自己找方向。"
            },
            "resultText": "爸爸的手很暖，步子放慢了一點。你沒有立刻不累，但每一步不用自己找方向。",
            "statusDelta": {
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_30_dad_functions",
              "variantId": "dad_soothes_tired",
              "mustMatchEventTitle": "旅行裡爸爸的找路、拍照、零食和哄累"
            }
          },
          {
            "id": "s2_w8_30_dad_soothes_tired_cant_walk",
            "text": "說走不動。",
            "buttonText": "說走不動。",
            "playerLine": "「我行唔郁。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_30_dad_soothes_tired_cant_walk"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "爸爸",
              "text": "爸爸蹲低一點，叫你先走到前面那盞燈。整條路變成一小段一小段，好像真的短了。"
            },
            "resultText": "爸爸蹲低一點，叫你先走到前面那盞燈。整條路變成一小段一小段，好像真的短了。",
            "statusDelta": {
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_30_dad_functions",
              "variantId": "dad_soothes_tired",
              "mustMatchEventTitle": "旅行裡爸爸的找路、拍照、零食和哄累"
            }
          },
          {
            "id": "s2_w8_30_dad_soothes_tired_ask_carry",
            "text": "問可不可以抱。",
            "buttonText": "問可不可以抱。",
            "playerLine": "「抱我得唔得？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_30_dad_soothes_tired_ask_carry"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "爸爸",
              "text": "爸爸說你長大了，但還是讓你靠一靠。你沒有被抱很久，只是借到一點力。"
            },
            "resultText": "爸爸說你長大了，但還是讓你靠一靠。你沒有被抱很久，只是借到一點力。",
            "statusDelta": {
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "dependency",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_30_dad_functions",
              "variantId": "dad_soothes_tired",
              "mustMatchEventTitle": "旅行裡爸爸的找路、拍照、零食和哄累"
            }
          },
          {
            "id": "s2_w8_30_dad_soothes_tired_walk_alone",
            "text": "咬牙自己走。",
            "buttonText": "咬牙自己走。",
            "playerLine": "「我自己行。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_30_dad_soothes_tired_walk_alone"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你走得很慢，爸爸沒有催，只在旁邊等。到車站時，你比誰都先找位坐下。"
            },
            "resultText": "你走得很慢，爸爸沒有催，只在旁邊等。到車站時，你比誰都先找位坐下。",
            "statusDelta": {
              "自信": 1,
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_30_dad_functions",
              "variantId": "dad_soothes_tired",
              "mustMatchEventTitle": "旅行裡爸爸的找路、拍照、零食和哄累"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_dad",
        "npcNameFallback": "爸爸"
      }
    ]
  },
  {
    "id": "s2_w8_31_trip_memory",
    "sourceTopicId": "S2-W8-31",
    "weekPool": "S2-W8_authored_weekly",
    "termId": "term_p1_s2",
    "week": 8,
    "category": "family",
    "title": "玩家記住的不是完整景點，而是一個很小的畫面",
    "sceneIntro": "旅行回來後，大人問你今天好不好玩。你想講整件事，卻發現自己記不清楚所有路線、名字和時間。你記得的反而是很小的畫面：一陣風、一個太大的拖鞋、一張折得歪歪的地圖、便利店水樽的膠袋聲、或者證件袋被媽媽拿出又放回去。那些小東西比景點名字更快留在你腦裡。",
    "metadata": {
      "sourceMarkdown": "info/s2_w7_w12_dialogue_draft_v0_2.md",
      "uiHidden": true,
      "usesSelectedTravelPlace": true,
      "memoryEvent": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        8,
        8
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w8_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "island_wind_memory",
        "variantTitle": "船上風很大",
        "eligibleTravelPlace": "island_day_trip",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "最先跑回腦裡的是船上的風。你的頭髮被吹到眼前，媽媽叫你坐好，爸爸指著窗外說快到了。你其實沒有看清楚遠方，只記得風一直把話吹散。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w8_31_island_wind_memory_remember_wind",
            "text": "說記得風。",
            "buttonText": "說記得風。",
            "playerLine": "「風好大。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_31_island_wind_memory_remember_wind"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人笑說你只記得這個。你點點頭，因為那陣風比很多地名都清楚。"
            },
            "resultText": "家人笑說你只記得這個。你點點頭，因為那陣風比很多地名都清楚。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_31_trip_memory",
              "variantId": "island_wind_memory",
              "mustMatchEventTitle": "玩家記住的不是完整景點，而是一個很小的畫面"
            }
          },
          {
            "id": "s2_w8_31_island_wind_memory_ask_again",
            "text": "問下次可不可以再坐船。",
            "buttonText": "問下次可不可以再坐船。",
            "playerLine": "「下次再坐船得唔得？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_31_island_wind_memory_ask_again"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "爸爸",
              "text": "爸爸說有機會。你不知道下次是幾時，只把船的聲音放到「有機會」旁邊。"
            },
            "resultText": "爸爸說有機會。你不知道下次是幾時，只把船的聲音放到「有機會」旁邊。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_31_trip_memory",
              "variantId": "island_wind_memory",
              "mustMatchEventTitle": "玩家記住的不是完整景點，而是一個很小的畫面"
            }
          },
          {
            "id": "s2_w8_31_island_wind_memory_a_bit_scared",
            "text": "說有點怕。",
            "buttonText": "說有點怕。",
            "playerLine": "「有少少驚。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_31_island_wind_memory_a_bit_scared"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "媽媽",
              "text": "媽媽說所以要坐好。你沒有覺得自己膽小，只記得海浪拍著船邊時，椅子也像在動。"
            },
            "resultText": "媽媽說所以要坐好。你沒有覺得自己膽小，只記得海浪拍著船邊時，椅子也像在動。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": -1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_31_trip_memory",
              "variantId": "island_wind_memory",
              "mustMatchEventTitle": "玩家記住的不是完整景點，而是一個很小的畫面"
            }
          },
          {
            "id": "s2_w8_31_island_wind_memory_draw_boat",
            "text": "畫一條船。",
            "buttonText": "畫一條船。",
            "playerLine": "「我畫船。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_31_island_wind_memory_draw_boat"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你畫的船很小，風卻畫得很大。家人看了才知道你記住的是哪一部分。"
            },
            "resultText": "你畫的船很小，風卻畫得很大。家人看了才知道你記住的是哪一部分。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_31_trip_memory",
              "variantId": "island_wind_memory",
              "mustMatchEventTitle": "玩家記住的不是完整景點，而是一個很小的畫面"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "family_parent",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "theme_park_queue_memory",
        "variantTitle": "排隊時太熱",
        "eligibleTravelPlace": "theme_park_day_trip",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "你最記得的不是哪個設施，而是排隊時背上的汗。欄杆繞來繞去，前面的小朋友拿著扇，爸爸把地圖摺起，媽媽叫你喝水。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w8_31_theme_park_queue_memory_remember_queue",
            "text": "說記得排隊。",
            "buttonText": "說記得排隊。",
            "playerLine": "「排好耐。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_31_theme_park_queue_memory_remember_queue"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說是假期多人。你不太記得等了多久，只記得欄杆每轉一次，自己就以為快到了。"
            },
            "resultText": "家人說是假期多人。你不太記得等了多久，只記得欄杆每轉一次，自己就以為快到了。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 0
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_31_trip_memory",
              "variantId": "theme_park_queue_memory",
              "mustMatchEventTitle": "玩家記住的不是完整景點，而是一個很小的畫面"
            }
          },
          {
            "id": "s2_w8_31_theme_park_queue_memory_remember_bottle",
            "text": "說記得水樽。",
            "buttonText": "說記得水樽。",
            "playerLine": "「我飲咗好多水。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_31_theme_park_queue_memory_remember_bottle"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "媽媽",
              "text": "媽媽把水樽拿起來搖了搖，裡面真的剩很少。那個水樽像陪你排完整條隊。"
            },
            "resultText": "媽媽把水樽拿起來搖了搖，裡面真的剩很少。那個水樽像陪你排完整條隊。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_31_trip_memory",
              "variantId": "theme_park_queue_memory",
              "mustMatchEventTitle": "玩家記住的不是完整景點，而是一個很小的畫面"
            }
          },
          {
            "id": "s2_w8_31_theme_park_queue_memory_ask_why_crowded",
            "text": "問為甚麼那麼多人。",
            "buttonText": "問為甚麼那麼多人。",
            "playerLine": "「點解咁多人？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_31_theme_park_queue_memory_ask_why_crowded"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "爸爸",
              "text": "爸爸說大家都放假。你忽然覺得復活節不是只有你家的假期，是很多人的假期一起擠在同一個地方。"
            },
            "resultText": "爸爸說大家都放假。你忽然覺得復活節不是只有你家的假期，是很多人的假期一起擠在同一個地方。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_31_trip_memory",
              "variantId": "theme_park_queue_memory",
              "mustMatchEventTitle": "玩家記住的不是完整景點，而是一個很小的畫面"
            }
          },
          {
            "id": "s2_w8_31_theme_park_queue_memory_dont_want_queue",
            "text": "不想再排。",
            "buttonText": "不想再排。",
            "playerLine": "「下次唔排咁耐。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_31_theme_park_queue_memory_dont_want_queue"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人沒有答應，只說到時再看。你知道大人常說這句，但心裡已經把「短隊」圈了起來。"
            },
            "resultText": "家人沒有答應，只說到時再看。你知道大人常說這句，但心裡已經把「短隊」圈了起來。",
            "statusDelta": {
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "misunderstanding",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_31_trip_memory",
              "variantId": "theme_park_queue_memory",
              "mustMatchEventTitle": "玩家記住的不是完整景點，而是一個很小的畫面"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "family_parent",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "hotel_slipper_memory",
        "variantTitle": "酒店拖鞋太大",
        "eligibleTravelPlace": "hotel_staycation",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "你最記得的是房間裡那對白色拖鞋。它比你的腳大很多，你穿上去時腳趾像躲在洞裡。爸爸笑了一下，媽媽叫你小心不要跣倒。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w8_31_hotel_slipper_memory_walk_in_them",
            "text": "穿著走兩步。",
            "buttonText": "穿著走兩步。",
            "playerLine": "「好大呀。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_31_hotel_slipper_memory_walk_in_them"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "拖鞋拍著地板啪啪響。你走得像企鵝，房間突然變成一個可以小心試步的地方。"
            },
            "resultText": "拖鞋拍著地板啪啪響。你走得像企鵝，房間突然變成一個可以小心試步的地方。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_31_trip_memory",
              "variantId": "hotel_slipper_memory",
              "mustMatchEventTitle": "玩家記住的不是完整景點，而是一個很小的畫面"
            }
          },
          {
            "id": "s2_w8_31_hotel_slipper_memory_ask_take_home",
            "text": "問可不可以帶走。",
            "buttonText": "問可不可以帶走。",
            "playerLine": "「可以拎返屋企？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_31_hotel_slipper_memory_ask_take_home"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說不一定可以，先不要亂拿。你看著拖鞋，發現酒店的東西不全是自己的。"
            },
            "resultText": "家人說不一定可以，先不要亂拿。你看著拖鞋，發現酒店的東西不全是自己的。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_31_trip_memory",
              "variantId": "hotel_slipper_memory",
              "mustMatchEventTitle": "玩家記住的不是完整景點，而是一個很小的畫面"
            }
          },
          {
            "id": "s2_w8_31_hotel_slipper_memory_line_up_shoes",
            "text": "把自己的鞋排好。",
            "buttonText": "把自己的鞋排好。",
            "playerLine": "「我放呢度。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_31_hotel_slipper_memory_line_up_shoes"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把自己的鞋放在床邊，跟大拖鞋排在一起。兩對鞋差很多，但都在等明天早上。"
            },
            "resultText": "你把自己的鞋放在床邊，跟大拖鞋排在一起。兩對鞋差很多，但都在等明天早上。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_31_trip_memory",
              "variantId": "hotel_slipper_memory",
              "mustMatchEventTitle": "玩家記住的不是完整景點，而是一個很小的畫面"
            }
          },
          {
            "id": "s2_w8_31_hotel_slipper_memory_dont_wear",
            "text": "不穿。",
            "buttonText": "不穿。",
            "playerLine": "「我著自己鞋。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_31_hotel_slipper_memory_dont_wear"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把拖鞋推到一邊。它仍然白白地躺在那裡，像房間裡一件太大的玩具。"
            },
            "resultText": "你把拖鞋推到一邊。它仍然白白地躺在那裡，像房間裡一件太大的玩具。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 0
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_31_trip_memory",
              "variantId": "hotel_slipper_memory",
              "mustMatchEventTitle": "玩家記住的不是完整景點，而是一個很小的畫面"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "family_parent",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "border_document_memory",
        "variantTitle": "證件袋和過關欄杆",
        "eligibleTravelPlace": "sz_macau_short_trip",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "你最記得的不是大人說過的地名，而是媽媽那個透明證件袋。她一到排隊的位置就拿出來，過一陣又放回包裡，再到另一條欄杆前又拿出來。欄杆繞來繞去，隊伍走得很慢，證件袋裡的紙卻像比你更知道要去哪裡。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w8_31_border_document_memory_watch_pouch",
            "text": "看證件袋。",
            "buttonText": "看證件袋。",
            "playerLine": "「又要攞出嚟？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_31_border_document_memory_watch_pouch"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "媽媽",
              "text": "媽媽說等會兒要用。你不知道每一次要給誰看，只記得那個袋子一直被拿出來又收回去。"
            },
            "resultText": "媽媽說等會兒要用。你不知道每一次要給誰看，只記得那個袋子一直被拿出來又收回去。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_31_trip_memory",
              "variantId": "border_document_memory",
              "mustMatchEventTitle": "玩家記住的不是完整景點，而是一個很小的畫面"
            }
          },
          {
            "id": "s2_w8_31_border_document_memory_ask_how_long",
            "text": "問仲有幾耐。",
            "buttonText": "問仲有幾耐。",
            "playerLine": "「仲有幾耐呀？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_31_border_document_memory_ask_how_long"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "爸爸",
              "text": "爸爸說快到，但前面欄杆還有幾個彎。你慢慢跟著走，覺得「快」有時也會排隊。"
            },
            "resultText": "爸爸說快到，但前面欄杆還有幾個彎。你慢慢跟著走，覺得「快」有時也會排隊。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_31_trip_memory",
              "variantId": "border_document_memory",
              "mustMatchEventTitle": "玩家記住的不是完整景點，而是一個很小的畫面"
            }
          },
          {
            "id": "s2_w8_31_border_document_memory_count_rails",
            "text": "數欄杆。",
            "buttonText": "數欄杆。",
            "playerLine": "「一、二、三……」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_31_border_document_memory_count_rails"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你數到一半就亂了，因為隊伍轉了一個彎。過關的地方沒有很多玩具，卻有很多要跟著走的線。"
            },
            "resultText": "你數到一半就亂了，因為隊伍轉了一個彎。過關的地方沒有很多玩具，卻有很多要跟著走的線。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 0
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_31_trip_memory",
              "variantId": "border_document_memory",
              "mustMatchEventTitle": "玩家記住的不是完整景點，而是一個很小的畫面"
            }
          },
          {
            "id": "s2_w8_31_border_document_memory_hold_sleeve",
            "text": "握住家人衣角。",
            "buttonText": "握住家人衣角。",
            "playerLine": "「我跟住你。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w8_31_border_document_memory_hold_sleeve"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "人很多，你握著家人的衣角。證件袋在媽媽手裡晃了一下，你知道自己只要不要走散就好。"
            },
            "resultText": "人很多，你握著家人的衣角。證件袋在媽媽手裡晃了一下，你知道自己只要不要走散就好。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "dependency",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w8_31_trip_memory",
              "variantId": "border_document_memory",
              "mustMatchEventTitle": "玩家記住的不是完整景點，而是一個很小的畫面"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "family_parent",
        "npcNameFallback": "家人"
      }
    ]
  },
  {
    "id": "s2_w9_32_holiday_share",
    "sourceTopicId": "S2-W9-32",
    "weekPool": "S2-W9_authored_weekly",
    "termId": "term_p1_s2",
    "week": 9,
    "category": "social",
    "title": "同學分享假期去了哪裡",
    "sceneIntro": "復活節假期後回校，班房一早就像被假期塞滿。有人講去過哪裡，有人說只去了親戚家，有人把一張票根夾在手冊裡。老師還未叫安靜前，假期已經從每個人的書包和嘴巴裡掉出來。你聽著他們講，發現每個人的假期都不太一樣。",
    "metadata": {
      "sourceMarkdown": "info/s2_w7_w12_dialogue_draft_v0_2.md",
      "uiHidden": true,
      "postHolidaySchoolReturn": true,
      "notCompetitionForced": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        9,
        9
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w9_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "kalong_maps_holiday",
        "variantTitle": "家朗想把大家假期講成地圖",
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "家朗在桌上用手指畫路線：「你去呢度，我去嗰度，咁加埋咪好大。」他把幾個地方放在同一張看不見的地圖上，還叫梓軒也講。梓軒說自己去得不遠，但聲音有點不甘心。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w9_32_kalong_maps_holiday_say_where",
            "text": "說自己去了哪裡。",
            "buttonText": "說自己去了哪裡。",
            "playerLine": "「我去咗……」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_32_kalong_maps_holiday_say_where"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "家朗立刻把你的地方也加進地圖。你說得不完整，但他已經用手指替你畫了一條路。"
            },
            "resultText": "家朗立刻把你的地方也加進地圖。你說得不完整，但他已經用手指替你畫了一條路。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_32_holiday_share",
              "variantId": "kalong_maps_holiday",
              "mustMatchEventTitle": "同學分享假期去了哪裡"
            }
          },
          {
            "id": "s2_w9_32_kalong_maps_holiday_one_image",
            "text": "說只記得一個畫面。",
            "buttonText": "說只記得一個畫面。",
            "playerLine": "「我淨係記得一樣嘢。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_32_kalong_maps_holiday_one_image"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗愣了一下，問是甚麼。梓軒也看過來，你忽然發現小畫面也可以放進地圖裡。"
            },
            "resultText": "家朗愣了一下，問是甚麼。梓軒也看過來，你忽然發現小畫面也可以放進地圖裡。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_32_holiday_share",
              "variantId": "kalong_maps_holiday",
              "mustMatchEventTitle": "同學分享假期去了哪裡"
            }
          },
          {
            "id": "s2_w9_32_kalong_maps_holiday_who_furthest",
            "text": "問誰最遠。",
            "buttonText": "問誰最遠。",
            "playerLine": "「邊個最遠？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_32_kalong_maps_holiday_who_furthest"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "梓軒立刻抬頭，家朗卻說地圖不是用來比的。這句講得很快，但讓桌上的路線停了一下。"
            },
            "resultText": "梓軒立刻抬頭，家朗卻說地圖不是用來比的。這句講得很快，但讓桌上的路線停了一下。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "misunderstanding",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_32_holiday_share",
              "variantId": "kalong_maps_holiday",
              "mustMatchEventTitle": "同學分享假期去了哪裡"
            }
          },
          {
            "id": "s2_w9_32_kalong_maps_holiday_just_listen",
            "text": "只聽大家講。",
            "buttonText": "只聽大家講。",
            "playerLine": "「嗯。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_32_kalong_maps_holiday_just_listen"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有把自己的假期放出來。家朗的手指還在桌面走，像你也跟著去了幾個地方。"
            },
            "resultText": "你沒有把自己的假期放出來。家朗的手指還在桌面走，像你也跟著去了幾個地方。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 0
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_32_holiday_share",
              "variantId": "kalong_maps_holiday",
              "mustMatchEventTitle": "同學分享假期去了哪裡"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_competitive_peer",
            "npcNameFallback": "梓軒"
          }
        ]
      },
      {
        "variantId": "tszhin_who_went_far",
        "variantTitle": "梓軒在意誰去了更遠",
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "梓軒問了幾個同學：「你搭車去？坐船？過關？」他沒有說要比，但每個問題都像有長短。穎心在旁邊只看著自己的票根，沒有加入。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w9_32_tszhin_who_went_far_near_is_fine",
            "text": "說不一定遠才好玩。",
            "buttonText": "說不一定遠才好玩。",
            "playerLine": "「近都可以好玩。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_32_tszhin_who_went_far_near_is_fine"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒看你一眼，像想反駁，又想起甚麼，最後只說「都係」。那句很短，但比較的聲音小了一點。"
            },
            "resultText": "梓軒看你一眼，像想反駁，又想起甚麼，最後只說「都係」。那句很短，但比較的聲音小了一點。",
            "statusDelta": {
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_32_holiday_share",
              "variantId": "tszhin_who_went_far",
              "mustMatchEventTitle": "同學分享假期去了哪裡"
            }
          },
          {
            "id": "s2_w9_32_tszhin_who_went_far_say_where",
            "text": "講自己去的地方。",
            "buttonText": "講自己去的地方。",
            "playerLine": "「我去咗呢度。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_32_tszhin_who_went_far_say_where"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒立刻問遠不遠。你回答不上來，只好說有很多人。他好像第一次不知道怎樣把「很多人」排進遠近裡。"
            },
            "resultText": "梓軒立刻問遠不遠。你回答不上來，只好說有很多人。他好像第一次不知道怎樣把「很多人」排進遠近裡。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_32_holiday_share",
              "variantId": "tszhin_who_went_far",
              "mustMatchEventTitle": "同學分享假期去了哪裡"
            }
          },
          {
            "id": "s2_w9_32_tszhin_who_went_far_ask_what_remember",
            "text": "問他記得甚麼。",
            "buttonText": "問他記得甚麼。",
            "playerLine": "「你記得咩？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_32_tszhin_who_went_far_ask_what_remember"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒停了停，說記得親戚一直問功課。那不是遠的地方，卻讓他皺了皺眉。"
            },
            "resultText": "梓軒停了停，說記得親戚一直問功課。那不是遠的地方，卻讓他皺了皺眉。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_32_holiday_share",
              "variantId": "tszhin_who_went_far",
              "mustMatchEventTitle": "同學分享假期去了哪裡"
            }
          },
          {
            "id": "s2_w9_32_tszhin_who_went_far_avoid_compare",
            "text": "避開比較。",
            "buttonText": "避開比較。",
            "playerLine": "「我唔知遠唔遠。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_32_tszhin_who_went_far_avoid_compare"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒轉去問別人，你沒有被拉到那條尺上。穎心低頭把票根夾好，像也聽見了。"
            },
            "resultText": "梓軒轉去問別人，你沒有被拉到那條尺上。穎心低頭把票根夾好，像也聽見了。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_32_holiday_share",
              "variantId": "tszhin_who_went_far",
              "mustMatchEventTitle": "同學分享假期去了哪裡"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_competitive_peer",
        "npcIdHint": "classmate_competitive_peer",
        "npcNameFallback": "梓軒",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_quiet_observer",
            "npcNameFallback": "穎心"
          }
        ]
      },
      {
        "variantId": "wingsam_ticket_stub",
        "variantTitle": "穎心只記得一張票根",
        "openingDialogue": [
          {
            "speaker": "穎心",
            "text": "穎心沒有大聲講去了哪裡，只把一張小票根夾在鉛筆盒旁邊。家朗問那是甚麼，她說：「搭車嗰張。」票根邊角有點皺，顏色被手汗摸淡了一點。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w9_32_wingsam_ticket_stub_ask_to_see",
            "text": "問可不可以看。",
            "buttonText": "問可不可以看。",
            "playerLine": "「我睇吓得唔得？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_32_wingsam_ticket_stub_ask_to_see"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "穎心",
              "text": "穎心把票根推近，但用手指按住一邊。你看見日期和幾個字，不完全懂，卻知道那天被她收了起來。"
            },
            "resultText": "穎心把票根推近，但用手指按住一邊。你看見日期和幾個字，不完全懂，卻知道那天被她收了起來。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_32_holiday_share",
              "variantId": "wingsam_ticket_stub",
              "mustMatchEventTitle": "同學分享假期去了哪裡"
            }
          },
          {
            "id": "s2_w9_32_wingsam_ticket_stub_i_have_something_too",
            "text": "說自己也有小東西。",
            "buttonText": "說自己也有小東西。",
            "playerLine": "「我都有留住嘢。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_32_wingsam_ticket_stub_i_have_something_too"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "穎心",
              "text": "穎心抬頭看你，沒有追問得很急。你們的假期沒有變成比遠，只變成兩個被夾好的小東西。"
            },
            "resultText": "穎心抬頭看你，沒有追問得很急。你們的假期沒有變成比遠，只變成兩個被夾好的小東西。",
            "statusDelta": {
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 2
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_32_holiday_share",
              "variantId": "wingsam_ticket_stub",
              "mustMatchEventTitle": "同學分享假期去了哪裡"
            }
          },
          {
            "id": "s2_w9_32_wingsam_ticket_stub_ask_where",
            "text": "問去了哪裡。",
            "buttonText": "問去了哪裡。",
            "playerLine": "「你去邊呀？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_32_wingsam_ticket_stub_ask_where"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "穎心",
              "text": "她說了地名，聲音很輕，像怕講太大會把票根吹走。你沒有完全聽懂，但記得她說話時看著那張紙。"
            },
            "resultText": "她說了地名，聲音很輕，像怕講太大會把票根吹走。你沒有完全聽懂，但記得她說話時看著那張紙。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_32_holiday_share",
              "variantId": "wingsam_ticket_stub",
              "mustMatchEventTitle": "同學分享假期去了哪裡"
            }
          },
          {
            "id": "s2_w9_32_wingsam_ticket_stub_dont_touch",
            "text": "不碰票根。",
            "buttonText": "不碰票根。",
            "playerLine": "「我唔摸啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_32_wingsam_ticket_stub_dont_touch"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心把票根收回鉛筆盒，你沒有碰到它。那張紙還是她的，但你已經知道它在。"
            },
            "resultText": "穎心把票根收回鉛筆盒，你沒有碰到它。那張紙還是她的，但你已經知道它在。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": -1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_32_holiday_share",
              "variantId": "wingsam_ticket_stub",
              "mustMatchEventTitle": "同學分享假期去了哪裡"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_quiet_observer",
        "npcIdHint": "classmate_quiet_observer",
        "npcNameFallback": "穎心",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_outgoing_inviter",
            "npcNameFallback": "家朗"
          }
        ]
      },
      {
        "variantId": "pakyu_secret_passage",
        "variantTitle": "柏宇把地方講成秘密通道",
        "openingDialogue": [
          {
            "speaker": "柏宇",
            "text": "柏宇說他去過一個地方，樓梯轉來轉去，「好似有秘密通道」。家朗問是不是商場，柏宇說商場也可以有秘密通道。梓軒說不要亂講，柏宇卻把手指放到嘴邊。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w9_32_pakyu_secret_passage_ask_where",
            "text": "問通道在哪。",
            "buttonText": "問通道在哪。",
            "playerLine": "「邊度有通道？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_32_pakyu_secret_passage_ask_where"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "柏宇",
              "text": "柏宇立刻用鉛筆盒和擦膠排出一條路。你看不太懂，但那個地方在桌上變得彎彎曲曲。"
            },
            "resultText": "柏宇立刻用鉛筆盒和擦膠排出一條路。你看不太懂，但那個地方在桌上變得彎彎曲曲。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_32_holiday_share",
              "variantId": "pakyu_secret_passage",
              "mustMatchEventTitle": "同學分享假期去了哪裡"
            }
          },
          {
            "id": "s2_w9_32_pakyu_secret_passage_maybe_stairs",
            "text": "說可能只是樓梯。",
            "buttonText": "說可能只是樓梯。",
            "playerLine": "「可能只係樓梯。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_32_pakyu_secret_passage_maybe_stairs"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "柏宇",
              "text": "柏宇說樓梯也可以有秘密。你沒有被說服，但開始覺得普通樓梯也不是完全普通。"
            },
            "resultText": "柏宇說樓梯也可以有秘密。你沒有被說服，但開始覺得普通樓梯也不是完全普通。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "misunderstanding",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_32_holiday_share",
              "variantId": "pakyu_secret_passage",
              "mustMatchEventTitle": "同學分享假期去了哪裡"
            }
          },
          {
            "id": "s2_w9_32_pakyu_secret_passage_dont_scare",
            "text": "叫他不要嚇人。",
            "buttonText": "叫他不要嚇人。",
            "playerLine": "「唔好講到咁驚。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_32_pakyu_secret_passage_dont_scare"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "柏宇",
              "text": "柏宇改口說不恐怖，只是奇怪。穎心在旁邊沒有再皺眉，像這樣可以聽下去。"
            },
            "resultText": "柏宇改口說不恐怖，只是奇怪。穎心在旁邊沒有再皺眉，像這樣可以聽下去。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_32_holiday_share",
              "variantId": "pakyu_secret_passage",
              "mustMatchEventTitle": "同學分享假期去了哪裡"
            }
          },
          {
            "id": "s2_w9_32_pakyu_secret_passage_draw_it",
            "text": "一起畫出來。",
            "buttonText": "一起畫出來。",
            "playerLine": "「畫嚟睇吓。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_32_pakyu_secret_passage_draw_it"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇把路線畫得很亂，家朗笑說看不懂。那張紙不是正式地圖，但變成小息最忙的一角。"
            },
            "resultText": "柏宇把路線畫得很亂，家朗笑說看不懂。那張紙不是正式地圖，但變成小息最忙的一角。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_32_holiday_share",
              "variantId": "pakyu_secret_passage",
              "mustMatchEventTitle": "同學分享假期去了哪裡"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_mischief_maker",
        "npcIdHint": "classmate_curious_troublemaker",
        "npcNameFallback": "柏宇",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_outgoing_inviter",
            "npcNameFallback": "家朗"
          },
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_quiet_observer",
            "npcNameFallback": "穎心"
          },
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_competitive_peer",
            "npcNameFallback": "梓軒"
          }
        ]
      }
    ]
  },
  {
    "id": "s2_w9_33_souvenir_talk",
    "sourceTopicId": "S2-W9-33",
    "weekPool": "S2-W9_authored_weekly",
    "termId": "term_p1_s2",
    "week": 9,
    "category": "social",
    "title": "手信／票根／照片／小物件引起話題",
    "sceneIntro": "小息時，課桌上出現很多小東西：票根、照片、糖紙、鉛筆、貼紙、印著卡通圖案的小袋。不是每樣都貴，也不是每樣都特別，但它們從假期被帶回班房，就像每個人都偷偷帶了一小塊外面的世界回來。",
    "metadata": {
      "sourceMarkdown": "info/s2_w7_w12_dialogue_draft_v0_2.md",
      "uiHidden": true,
      "postHolidayObjectTalk": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        9,
        9
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w9_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "ticket_in_notebook",
        "variantTitle": "票根被夾在手冊裡",
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "你把手冊打開時，一張票根差點掉出來。家朗看見，立刻問：「你去邊嚟？」穎心也看了一眼，但沒有伸手。梓軒站在旁邊，像想知道那張票代表多遠。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w9_33_ticket_in_notebook_show_all",
            "text": "給大家看。",
            "buttonText": "給大家看。",
            "playerLine": "「呢張係嗰日嘅。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_33_ticket_in_notebook_show_all"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗把頭靠近，梓軒問地名，穎心只看日期。小小一張票，竟然讓三個人看到不同東西。"
            },
            "resultText": "家朗把頭靠近，梓軒問地名，穎心只看日期。小小一張票，竟然讓三個人看到不同東西。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_33_souvenir_talk",
              "variantId": "ticket_in_notebook",
              "mustMatchEventTitle": "手信／票根／照片／小物件引起話題"
            }
          },
          {
            "id": "s2_w9_33_ticket_in_notebook_show_wingsam_only",
            "text": "只給穎心看。",
            "buttonText": "只給穎心看。",
            "playerLine": "「你睇吓。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_33_ticket_in_notebook_show_wingsam_only"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "穎心",
              "text": "穎心用指尖按住票邊，沒有把它拿走。她看得很慢，像怕快一點就會弄皺。"
            },
            "resultText": "穎心用指尖按住票邊，沒有把它拿走。她看得很慢，像怕快一點就會弄皺。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_quiet_observer",
                "dimension": "trust",
                "amount": 2
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_33_souvenir_talk",
              "variantId": "ticket_in_notebook",
              "mustMatchEventTitle": "手信／票根／照片／小物件引起話題"
            }
          },
          {
            "id": "s2_w9_33_ticket_in_notebook_put_away",
            "text": "收回手冊。",
            "buttonText": "收回手冊。",
            "playerLine": "「我收返先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_33_ticket_in_notebook_put_away"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗說還未看清楚，梓軒也有點失望。你把手冊合上，知道不是所有假期東西都一定要攤開。"
            },
            "resultText": "家朗說還未看清楚，梓軒也有點失望。你把手冊合上，知道不是所有假期東西都一定要攤開。",
            "statusDelta": {
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_33_souvenir_talk",
              "variantId": "ticket_in_notebook",
              "mustMatchEventTitle": "手信／票根／照片／小物件引起話題"
            }
          },
          {
            "id": "s2_w9_33_ticket_in_notebook_ask_them",
            "text": "問他們有沒有。",
            "buttonText": "問他們有沒有。",
            "playerLine": "「你哋有冇留？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_33_ticket_in_notebook_ask_them"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗說他忘了，穎心點頭說有一張。梓軒說他有照片。原來每個人留下的方式不一樣。"
            },
            "resultText": "家朗說他忘了，穎心點頭說有一張。梓軒說他有照片。原來每個人留下的方式不一樣。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_33_souvenir_talk",
              "variantId": "ticket_in_notebook",
              "mustMatchEventTitle": "手信／票根／照片／小物件引起話題"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_quiet_observer",
            "npcNameFallback": "穎心"
          },
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_competitive_peer",
            "npcNameFallback": "梓軒"
          }
        ]
      },
      {
        "variantId": "photo_unclear_background",
        "variantTitle": "照片裡有看不懂的背景",
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "梓軒拿出一張相，說這是他假期去的地方。照片裡大人比景物多，背景有一塊招牌被擋住。家朗湊過來說：「你企喺邊？」柏宇說後面那個角落比較可疑。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w9_33_photo_unclear_background_ask_what_is_it",
            "text": "問背景是甚麼。",
            "buttonText": "問背景是甚麼。",
            "playerLine": "「後面係咩？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_33_photo_unclear_background_ask_what_is_it"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒回頭看照片，才發現自己也說不清。柏宇立刻說可能是入口，家朗笑了一下。"
            },
            "resultText": "梓軒回頭看照片，才發現自己也說不清。柏宇立刻說可能是入口，家朗笑了一下。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_33_souvenir_talk",
              "variantId": "photo_unclear_background",
              "mustMatchEventTitle": "手信／票根／照片／小物件引起話題"
            }
          },
          {
            "id": "s2_w9_33_photo_unclear_background_so_many_adults",
            "text": "說人好多。",
            "buttonText": "說人好多。",
            "playerLine": "「好多大人。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_33_photo_unclear_background_so_many_adults"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒本來想講景點，聽見你這樣說，也看回照片裡的人群。那張相忽然比較像你們真的看到的假期。"
            },
            "resultText": "梓軒本來想講景點，聽見你這樣說，也看回照片裡的人群。那張相忽然比較像你們真的看到的假期。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_33_souvenir_talk",
              "variantId": "photo_unclear_background",
              "mustMatchEventTitle": "手信／票根／照片／小物件引起話題"
            }
          },
          {
            "id": "s2_w9_33_photo_unclear_background_who_shot",
            "text": "問誰拍的。",
            "buttonText": "問誰拍的。",
            "playerLine": "「邊個影㗎？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_33_photo_unclear_background_who_shot"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒說爸爸影的，有點歪。他說時嘴角動了一下，像那個歪也可以拿來講。"
            },
            "resultText": "梓軒說爸爸影的，有點歪。他說時嘴角動了一下，像那個歪也可以拿來講。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_33_souvenir_talk",
              "variantId": "photo_unclear_background",
              "mustMatchEventTitle": "手信／票根／照片／小物件引起話題"
            }
          },
          {
            "id": "s2_w9_33_photo_unclear_background_not_join",
            "text": "不加入看相。",
            "buttonText": "不加入看相。",
            "playerLine": "「我唔睇住。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_33_photo_unclear_background_not_join"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "他們繼續看照片，你留在座位上。照片沒有到你手裡，但你聽見幾個笑聲，知道那裡面有故事。"
            },
            "resultText": "他們繼續看照片，你留在座位上。照片沒有到你手裡，但你聽見幾個笑聲，知道那裡面有故事。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_33_souvenir_talk",
              "variantId": "photo_unclear_background",
              "mustMatchEventTitle": "手信／票根／照片／小物件引起話題"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_competitive_peer",
        "npcIdHint": "classmate_competitive_peer",
        "npcNameFallback": "梓軒",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_outgoing_inviter",
            "npcNameFallback": "家朗"
          },
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_mischief_maker",
            "npcNameFallback": "柏宇"
          }
        ]
      },
      {
        "variantId": "candy_wrapper",
        "variantTitle": "手信糖紙",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "有同學拿來一小包糖，說是假期去親戚家時帶回來的。老師提醒不要在課室亂吃。家朗看著糖紙，梓軒問有幾多粒，穎心只看著包裝上的小圖案。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w9_33_candy_wrapper_ask_can_eat",
            "text": "問可以吃嗎。",
            "buttonText": "問可以吃嗎。",
            "playerLine": "「可以食㗎？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_33_candy_wrapper_ask_can_eat"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "同學說放學先。糖紙在桌上發出很小的聲音，比糖本身先進了你的記憶。"
            },
            "resultText": "同學說放學先。糖紙在桌上發出很小的聲音，比糖本身先進了你的記憶。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_33_souvenir_talk",
              "variantId": "candy_wrapper",
              "mustMatchEventTitle": "手信／票根／照片／小物件引起話題"
            }
          },
          {
            "id": "s2_w9_33_candy_wrapper_look_pattern",
            "text": "看包裝圖案。",
            "buttonText": "看包裝圖案。",
            "playerLine": "「上面有星星。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_33_candy_wrapper_look_pattern"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "穎心",
              "text": "穎心也點點頭，說那顆星有點歪。你們沒有吃糖，卻先把糖紙看了一遍。"
            },
            "resultText": "穎心也點點頭，說那顆星有點歪。你們沒有吃糖，卻先把糖紙看了一遍。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_33_souvenir_talk",
              "variantId": "candy_wrapper",
              "mustMatchEventTitle": "手信／票根／照片／小物件引起話題"
            }
          },
          {
            "id": "s2_w9_33_candy_wrapper_dont_want",
            "text": "不想拿。",
            "buttonText": "不想拿。",
            "playerLine": "「我唔攞住。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_33_candy_wrapper_dont_want"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "同學把糖收回去。你沒有失去甚麼，只是讓那包糖繼續當別人的手信。"
            },
            "resultText": "同學把糖收回去。你沒有失去甚麼，只是讓那包糖繼續當別人的手信。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": -1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_33_souvenir_talk",
              "variantId": "candy_wrapper",
              "mustMatchEventTitle": "手信／票根／照片／小物件引起話題"
            }
          },
          {
            "id": "s2_w9_33_candy_wrapper_ask_from_far",
            "text": "問是不是很遠買。",
            "buttonText": "問是不是很遠買。",
            "playerLine": "「好遠買㗎？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_33_candy_wrapper_ask_from_far"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "同學說不知道，是大人給的。你發現手信不一定要自己去很遠，也可能只是被交到手裡。"
            },
            "resultText": "同學說不知道，是大人給的。你發現手信不一定要自己去很遠，也可能只是被交到手裡。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_33_souvenir_talk",
              "variantId": "candy_wrapper",
              "mustMatchEventTitle": "手信／票根／照片／小物件引起話題"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_quiet_observer",
        "npcIdHint": "classmate_quiet_observer",
        "npcNameFallback": "穎心",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_outgoing_inviter",
            "npcNameFallback": "家朗"
          },
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_competitive_peer",
            "npcNameFallback": "梓軒"
          }
        ]
      },
      {
        "variantId": "pencil_comparison",
        "variantTitle": "小物件被拿來比較",
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "一支印著卡通圖案的新鉛筆被拿到桌上。梓軒說這款很難買，家朗說他見過類似，柏宇說筆尾像小火箭。物件小小的，卻讓一圈同學都伸長脖子。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w9_33_pencil_comparison_ask_to_borrow",
            "text": "問可不可以借看。",
            "buttonText": "問可不可以借看。",
            "playerLine": "「借我睇吓得唔得？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_33_pencil_comparison_ask_to_borrow"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "對方把筆遞過來，但提醒不要按太大力。你握著那支筆，覺得它比普通鉛筆更像一件玩具。"
            },
            "resultText": "對方把筆遞過來，但提醒不要按太大力。你握著那支筆，覺得它比普通鉛筆更像一件玩具。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_33_souvenir_talk",
              "variantId": "pencil_comparison",
              "mustMatchEventTitle": "手信／票根／照片／小物件引起話題"
            }
          },
          {
            "id": "s2_w9_33_pencil_comparison_ordinary_is_fine",
            "text": "說普通筆也可以。",
            "buttonText": "說普通筆也可以。",
            "playerLine": "「普通筆都寫到字。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_33_pencil_comparison_ordinary_is_fine"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒說但這支靚啲。你沒有反駁，只看見穎心把自己的鉛筆轉了一下，像也在想這句話。"
            },
            "resultText": "梓軒說但這支靚啲。你沒有反駁，只看見穎心把自己的鉛筆轉了一下，像也在想這句話。",
            "statusDelta": {
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_33_souvenir_talk",
              "variantId": "pencil_comparison",
              "mustMatchEventTitle": "手信／票根／照片／小物件引起話題"
            }
          },
          {
            "id": "s2_w9_33_pencil_comparison_who_is_it",
            "text": "問圖案是誰。",
            "buttonText": "問圖案是誰。",
            "playerLine": "「呢個係邊個？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_33_pencil_comparison_who_is_it"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "大家說了幾個不同名字，最後也不確定。卡通圖案在你們口中變得比原本更亂。"
            },
            "resultText": "大家說了幾個不同名字，最後也不確定。卡通圖案在你們口中變得比原本更亂。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_33_souvenir_talk",
              "variantId": "pencil_comparison",
              "mustMatchEventTitle": "手信／票根／照片／小物件引起話題"
            }
          },
          {
            "id": "s2_w9_33_pencil_comparison_not_join",
            "text": "不加入比較。",
            "buttonText": "不加入比較。",
            "playerLine": "「我用自己嗰支。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_33_pencil_comparison_not_join"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你低頭拿起自己的筆。它沒有圖案，但筆尖還能寫出今天的日期。"
            },
            "resultText": "你低頭拿起自己的筆。它沒有圖案，但筆尖還能寫出今天的日期。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_33_souvenir_talk",
              "variantId": "pencil_comparison",
              "mustMatchEventTitle": "手信／票根／照片／小物件引起話題"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_competitive_peer",
        "npcIdHint": "classmate_competitive_peer",
        "npcNameFallback": "梓軒",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_outgoing_inviter",
            "npcNameFallback": "家朗"
          },
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_quiet_observer",
            "npcNameFallback": "穎心"
          },
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_mischief_maker",
            "npcNameFallback": "柏宇"
          }
        ]
      }
    ]
  },
  {
    "id": "s2_w9_34_holiday_equity",
    "sourceTopicId": "S2-W9-34",
    "weekPool": "S2-W9_authored_weekly",
    "termId": "term_p1_s2",
    "week": 9,
    "category": "social",
    "title": "有人去了很遠，有人只是探親，有人只是在家",
    "sceneIntro": "午飯前，假期話題還沒有完。有人去了很遠，有人只去了親戚家，有人說自己幾乎都在家。大家講的時候不一定想比較，但「遠」、「多」、「有冇買嘢」這些字一出來，班房裡就像多了一把看不見的尺。",
    "metadata": {
      "sourceMarkdown": "info/s2_w7_w12_dialogue_draft_v0_2.md",
      "uiHidden": true,
      "socialComparisonSoftEvent": true,
      "postHolidayEquityTheme": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        9,
        9
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w9_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "tszhin_asks_how_far",
        "variantTitle": "梓軒追問遠不遠",
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "梓軒聽見有人去了外地，立刻問坐了多久車。家朗說遠不遠有甚麼所謂，梓軒卻說：「遠啲咪特別啲囉。」穎心低頭把飯盒蓋打開，沒有加入。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w9_34_tszhin_asks_how_far_home_is_fine",
            "text": "說在家也可以好玩。",
            "buttonText": "說在家也可以好玩。",
            "playerLine": "「喺屋企都可以玩。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_34_tszhin_asks_how_far_home_is_fine"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒看了你一眼，沒有立刻同意，但也沒有笑。家朗馬上說他在家看電視也好玩，氣氛鬆了一點。"
            },
            "resultText": "梓軒看了你一眼，沒有立刻同意，但也沒有笑。家朗馬上說他在家看電視也好玩，氣氛鬆了一點。",
            "statusDelta": {
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_34_holiday_equity",
              "variantId": "tszhin_asks_how_far",
              "mustMatchEventTitle": "有人去了很遠，有人只是探親，有人只是在家"
            }
          },
          {
            "id": "s2_w9_34_tszhin_asks_how_far_why_far",
            "text": "問他為何要遠。",
            "buttonText": "問他為何要遠。",
            "playerLine": "「點解要遠？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_34_tszhin_asks_how_far_why_far"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒說遠啲好似勁啲，說完自己也咬住筷子。你不知道怎樣答，但聽見那個「好似」其實不是很肯定。"
            },
            "resultText": "梓軒說遠啲好似勁啲，說完自己也咬住筷子。你不知道怎樣答，但聽見那個「好似」其實不是很肯定。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_34_holiday_equity",
              "variantId": "tszhin_asks_how_far",
              "mustMatchEventTitle": "有人去了很遠，有人只是探親，有人只是在家"
            }
          },
          {
            "id": "s2_w9_34_tszhin_asks_how_far_ask_food",
            "text": "轉問吃了甚麼。",
            "buttonText": "轉問吃了甚麼。",
            "playerLine": "「咁你食咗咩？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_34_tszhin_asks_how_far_ask_food"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "話題從遠不遠轉到食物。家朗立刻講小食，柏宇說有些店名像密碼。那把尺被放低了一會兒。"
            },
            "resultText": "話題從遠不遠轉到食物。家朗立刻講小食，柏宇說有些店名像密碼。那把尺被放低了一會兒。",
            "statusDelta": {
              "社交": 1,
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_34_holiday_equity",
              "variantId": "tszhin_asks_how_far",
              "mustMatchEventTitle": "有人去了很遠，有人只是探親，有人只是在家"
            }
          },
          {
            "id": "s2_w9_34_tszhin_asks_how_far_say_nothing",
            "text": "不說自己的假期。",
            "buttonText": "不說自己的假期。",
            "playerLine": "「……」",
            "playerLineType": "narration",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_34_tszhin_asks_how_far_say_nothing"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有加入。比較聲還在，但它沒有抓到你的假期。穎心把飯盒推近一點，像也在避開那條線。"
            },
            "resultText": "你沒有加入。比較聲還在，但它沒有抓到你的假期。穎心把飯盒推近一點，像也在避開那條線。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 0
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_34_holiday_equity",
              "variantId": "tszhin_asks_how_far",
              "mustMatchEventTitle": "有人去了很遠，有人只是探親，有人只是在家"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_competitive_peer",
        "npcIdHint": "classmate_competitive_peer",
        "npcNameFallback": "梓軒",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_outgoing_inviter",
            "npcNameFallback": "家朗"
          },
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_quiet_observer",
            "npcNameFallback": "穎心"
          },
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_mischief_maker",
            "npcNameFallback": "柏宇"
          }
        ]
      },
      {
        "variantId": "kalong_lively_ordinary",
        "variantTitle": "家朗把普通假期講得熱鬧",
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "家朗說自己有一天只在家看電視和落樓下，卻講得像走了很多地方：「我落咗去買魚蛋，又返上去，又再落去！」梓軒說這不算旅行，家朗笑著說：「咁都係假期呀。」"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w9_34_kalong_lively_ordinary_agree",
            "text": "說也算假期。",
            "buttonText": "說也算假期。",
            "playerLine": "「都係假期。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_34_kalong_lively_ordinary_agree"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "家朗立刻拍桌一下，小聲說你明。梓軒沒有再說不算，只把筷子戳進飯裡。"
            },
            "resultText": "家朗立刻拍桌一下，小聲說你明。梓軒沒有再說不算，只把筷子戳進飯裡。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 2
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_34_holiday_equity",
              "variantId": "kalong_lively_ordinary",
              "mustMatchEventTitle": "有人去了很遠，有人只是探親，有人只是在家"
            }
          },
          {
            "id": "s2_w9_34_kalong_lively_ordinary_ask_fishball",
            "text": "問魚蛋好不好吃。",
            "buttonText": "問魚蛋好不好吃。",
            "playerLine": "「魚蛋好唔好食？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_34_kalong_lively_ordinary_ask_fishball"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "家朗馬上開始講醬汁，話題從去哪裡變成味道。你突然覺得近的地方也有很多可講。"
            },
            "resultText": "家朗馬上開始講醬汁，話題從去哪裡變成味道。你突然覺得近的地方也有很多可講。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_34_holiday_equity",
              "variantId": "kalong_lively_ordinary",
              "mustMatchEventTitle": "有人去了很遠，有人只是探親，有人只是在家"
            }
          },
          {
            "id": "s2_w9_34_kalong_lively_ordinary_me_too",
            "text": "說自己也落樓下。",
            "buttonText": "說自己也落樓下。",
            "playerLine": "「我都有落樓下。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_34_kalong_lively_ordinary_me_too"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "家朗問你有沒有遇到人。你想起鄰居的名字，校外的記憶輕輕碰到班房話題。"
            },
            "resultText": "家朗問你有沒有遇到人。你想起鄰居的名字，校外的記憶輕輕碰到班房話題。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_34_holiday_equity",
              "variantId": "kalong_lively_ordinary",
              "mustMatchEventTitle": "有人去了很遠，有人只是探親，有人只是在家"
            }
          },
          {
            "id": "s2_w9_34_kalong_lively_ordinary_just_laugh",
            "text": "只笑一下。",
            "buttonText": "只笑一下。",
            "playerLine": "「哈哈。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_34_kalong_lively_ordinary_just_laugh"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗繼續講，他不是因為你笑才停下來，而是因為那件小事真的能被他講很久。"
            },
            "resultText": "家朗繼續講，他不是因為你笑才停下來，而是因為那件小事真的能被他講很久。",
            "statusDelta": {
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 0
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_34_holiday_equity",
              "variantId": "kalong_lively_ordinary",
              "mustMatchEventTitle": "有人去了很遠，有人只是探親，有人只是在家"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_competitive_peer",
            "npcNameFallback": "梓軒"
          }
        ]
      },
      {
        "variantId": "wingsam_stayed_home",
        "variantTitle": "穎心說只在家",
        "openingDialogue": [
          {
            "speaker": "穎心",
            "text": "穎心被問到假期去哪裡時，只說：「多數喺屋企。」旁邊有人說那不是很悶嗎。她沒有立刻答，只把飯盒裡的小叉放好，像先把桌面整理清楚。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w9_34_wingsam_stayed_home_home_is_fine",
            "text": "說在家也可以。",
            "buttonText": "說在家也可以。",
            "playerLine": "「喺屋企都得呀。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_34_wingsam_stayed_home_home_is_fine"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "穎心",
              "text": "穎心看你一眼，很輕地點頭。她沒有多講，但那句話像替她把門口留住。"
            },
            "resultText": "穎心看你一眼，很輕地點頭。她沒有多講，但那句話像替她把門口留住。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 2
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_34_holiday_equity",
              "variantId": "wingsam_stayed_home",
              "mustMatchEventTitle": "有人去了很遠，有人只是探親，有人只是在家"
            }
          },
          {
            "id": "s2_w9_34_wingsam_stayed_home_ask_what_did",
            "text": "問她在家做甚麼。",
            "buttonText": "問她在家做甚麼。",
            "playerLine": "「你喺屋企做咩？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_34_wingsam_stayed_home_ask_what_did"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "穎心",
              "text": "她說看書、貼貼紙、幫忙摺衫。那些事不大，但一件一件放出來後，也不是空的假期。"
            },
            "resultText": "她說看書、貼貼紙、幫忙摺衫。那些事不大，但一件一件放出來後，也不是空的假期。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_34_holiday_equity",
              "variantId": "wingsam_stayed_home",
              "mustMatchEventTitle": "有人去了很遠，有人只是探親，有人只是在家"
            }
          },
          {
            "id": "s2_w9_34_wingsam_stayed_home_tell_others_stop",
            "text": "叫其他人不要笑。",
            "buttonText": "叫其他人不要笑。",
            "playerLine": "「唔好笑啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_34_wingsam_stayed_home_tell_others_stop"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "那個同學聳聳肩，沒有再講。穎心低頭吃飯，你看見她握叉子的手鬆了一點。"
            },
            "resultText": "那個同學聳聳肩，沒有再講。穎心低頭吃飯，你看見她握叉子的手鬆了一點。",
            "statusDelta": {
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_34_holiday_equity",
              "variantId": "wingsam_stayed_home",
              "mustMatchEventTitle": "有人去了很遠，有人只是探親，有人只是在家"
            }
          },
          {
            "id": "s2_w9_34_wingsam_stayed_home_not_speak",
            "text": "不插話。",
            "buttonText": "不插話。",
            "playerLine": "「……」",
            "playerLineType": "narration",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_34_wingsam_stayed_home_not_speak"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "話題很快滑去別處。你沒有幫她說話，也沒有笑，只記得她把小叉放得很整齊。"
            },
            "resultText": "話題很快滑去別處。你沒有幫她說話，也沒有笑，只記得她把小叉放得很整齊。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_34_holiday_equity",
              "variantId": "wingsam_stayed_home",
              "mustMatchEventTitle": "有人去了很遠，有人只是探親，有人只是在家"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_quiet_observer",
        "npcIdHint": "classmate_quiet_observer",
        "npcNameFallback": "穎心"
      },
      {
        "variantId": "pakyu_home_base",
        "variantTitle": "柏宇把在家說成基地",
        "openingDialogue": [
          {
            "speaker": "柏宇",
            "text": "柏宇說他有一天整天在家，因為「基地要整理」。梓軒問甚麼基地，柏宇指自己的房間：「床下面、書枱下面，全部都有位。」家朗立刻問有沒有寶藏。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w9_34_pakyu_home_base_ask_whats_inside",
            "text": "問基地有咩。",
            "buttonText": "問基地有咩。",
            "playerLine": "「有咩喺入面？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_34_pakyu_home_base_ask_whats_inside"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "柏宇",
              "text": "柏宇說有舊貼紙、斷了的筆蓋和一張不知道哪來的紙。你聽著聽著，覺得在家也像探險。"
            },
            "resultText": "柏宇說有舊貼紙、斷了的筆蓋和一張不知道哪來的紙。你聽著聽著，覺得在家也像探險。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_34_holiday_equity",
              "variantId": "pakyu_home_base",
              "mustMatchEventTitle": "有人去了很遠，有人只是探親，有人只是在家"
            }
          },
          {
            "id": "s2_w9_34_pakyu_home_base_dirty",
            "text": "說床底很髒。",
            "buttonText": "說床底很髒。",
            "playerLine": "「床底好污糟喎。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_34_pakyu_home_base_dirty"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "柏宇",
              "text": "柏宇說所以才叫基地，家朗笑了。你不確定這有沒有道理，但那個床底已經變得很有畫面。"
            },
            "resultText": "柏宇說所以才叫基地，家朗笑了。你不確定這有沒有道理，但那個床底已經變得很有畫面。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "misunderstanding",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_34_holiday_equity",
              "variantId": "pakyu_home_base",
              "mustMatchEventTitle": "有人去了很遠，有人只是探親，有人只是在家"
            }
          },
          {
            "id": "s2_w9_34_pakyu_home_base_want_to_tidy",
            "text": "說我也想整理。",
            "buttonText": "說我也想整理。",
            "playerLine": "「我都想執吓。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_34_pakyu_home_base_want_to_tidy"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "柏宇",
              "text": "柏宇立刻說要小心找到怪東西。你想到自己的抽屜，覺得也許真的有怪東西在等。"
            },
            "resultText": "柏宇立刻說要小心找到怪東西。你想到自己的抽屜，覺得也許真的有怪東西在等。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_34_holiday_equity",
              "variantId": "pakyu_home_base",
              "mustMatchEventTitle": "有人去了很遠，有人只是探親，有人只是在家"
            }
          },
          {
            "id": "s2_w9_34_pakyu_home_base_dont_want_hear",
            "text": "不想聽床底。",
            "buttonText": "不想聽床底。",
            "playerLine": "「唔好講床底啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w9_34_pakyu_home_base_dont_want_hear"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇把基地改成書枱上面。故事沒有停，只是從黑一點的地方搬到亮一點的地方。"
            },
            "resultText": "柏宇把基地改成書枱上面。故事沒有停，只是從黑一點的地方搬到亮一點的地方。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": -1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w9_34_holiday_equity",
              "variantId": "pakyu_home_base",
              "mustMatchEventTitle": "有人去了很遠，有人只是探親，有人只是在家"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_mischief_maker",
        "npcIdHint": "classmate_curious_troublemaker",
        "npcNameFallback": "柏宇",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_outgoing_inviter",
            "npcNameFallback": "家朗"
          },
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_competitive_peer",
            "npcNameFallback": "梓軒"
          }
        ]
      }
    ]
  },
  {
    "id": "s2_w10_35_competition_prep_or_entry",
    "sourceTopicId": "S2-W10-35",
    "weekPool": "S2-W10_authored_weekly",
    "termId": "term_p1_s2",
    "week": 10,
    "category": "social",
    "title": "班際 competition 正式準備或正式出現",
    "sceneIntro": "五月一開始，班際活動終於不能再只是通告角上的紙。老師把小組名單或練習安排貼出來，叫被點名的同學留下來聽分工。你看到自己的名字旁邊還有兩個熟悉的名字，心裡一跳：這次不是自己做完功課就算，也不是一個同學來問你要不要幫忙，而是三個人要把同一件事做出來。",
    "metadata": {
      "sourceMarkdown": "info/s2_w7_w12_dialogue_draft_v0_2.md",
      "uiHidden": true,
      "conditionalMandatory": true,
      "competitionMandatoryFallback": true,
      "competitionStartWeekLabel": "S2-W10",
      "requiredNpcCount": 3
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 40,
      "weekRange": [
        10,
        10
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        },
        {
          "type": "classCompetitionStarted",
          "value": false
        }
      ],
      "exclusiveGroup": "s2_w10_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "wall_poster_wingsam_pakyu",
        "variantTitle": "class_wall_poster｜穎心 + 柏宇 + player",
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師說這次是班際壁報，主題要清楚，字要看得見。穎心先看紙邊和標題位，柏宇卻已經在角落畫了一個小圖案：「近睇先見到。」穎心立刻說：「唔好擋住字。」柏宇把筆停在半空，轉頭看你。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w10_35_wall_poster_wingsam_pakyu_title_first",
            "text": "先留標題位。",
            "buttonText": "先留標題位。",
            "playerLine": "「標題放上面先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_35_wall_poster_wingsam_pakyu_title_first"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "穎心",
              "text": "穎心點頭，柏宇只好把小圖案移到角落。壁報沒有少了想像，只是先有地方站好。"
            },
            "resultText": "穎心點頭，柏宇只好把小圖案移到角落。壁報沒有少了想像，只是先有地方站好。",
            "statusDelta": {
              "創意": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              },
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_mischief_maker",
                "dimension": "closeness",
                "amount": 0
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_35_competition_prep_or_entry",
              "variantId": "wall_poster_wingsam_pakyu",
              "mustMatchEventTitle": "班際 competition 正式準備或正式出現"
            }
          },
          {
            "id": "s2_w10_35_wall_poster_wingsam_pakyu_support_corner",
            "text": "支持小圖案。",
            "buttonText": "支持小圖案。",
            "playerLine": "「角落畫細細個得唔得？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_35_wall_poster_wingsam_pakyu_support_corner"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "柏宇",
              "text": "柏宇立刻笑了，穎心看了一眼空位，說不要太多。你把兩個人的想法放在同一張紙上。"
            },
            "resultText": "柏宇立刻笑了，穎心看了一眼空位，說不要太多。你把兩個人的想法放在同一張紙上。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_mischief_maker",
                "dimension": "closeness",
                "amount": 2
              },
              {
                "targetScope": "currentSpeaker",
                "dimension": "misunderstanding",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_35_competition_prep_or_entry",
              "variantId": "wall_poster_wingsam_pakyu",
              "mustMatchEventTitle": "班際 competition 正式準備或正式出現"
            }
          },
          {
            "id": "s2_w10_35_wall_poster_wingsam_pakyu_ask_teacher",
            "text": "問老師規矩。",
            "buttonText": "問老師規矩。",
            "playerLine": "「老師，可唔可以有小圖案？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_35_wall_poster_wingsam_pakyu_ask_teacher"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師說整齊就可以。柏宇像拿到通行證，穎心也終於不用一直擔心。"
            },
            "resultText": "老師說整齊就可以。柏宇像拿到通行證，穎心也終於不用一直擔心。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              },
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_mischief_maker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_35_competition_prep_or_entry",
              "variantId": "wall_poster_wingsam_pakyu",
              "mustMatchEventTitle": "班際 competition 正式準備或正式出現"
            }
          },
          {
            "id": "s2_w10_35_wall_poster_wingsam_pakyu_cut_paper",
            "text": "自己負責剪紙。",
            "buttonText": "自己負責剪紙。",
            "playerLine": "「我剪呢啲。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_35_wall_poster_wingsam_pakyu_cut_paper"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你拿起剪刀，避開他們的爭論。紙屑慢慢落到桌面上，三個人的工作開始有了不同聲音。"
            },
            "resultText": "你拿起剪刀，避開他們的爭論。紙屑慢慢落到桌面上，三個人的工作開始有了不同聲音。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_35_competition_prep_or_entry",
              "variantId": "wall_poster_wingsam_pakyu",
              "mustMatchEventTitle": "班際 competition 正式準備或正式出現"
            },
            "validate": {
              "softCheck": true,
              "stats": {
                "創意": 35,
                "體力": 25
              },
              "passMemoryTag": "s2_w10_35_wall_poster_wingsam_pakyu_cut_paper_soft_pass",
              "weakMemoryTag": "s2_w10_35_wall_poster_wingsam_pakyu_cut_paper_soft_weak",
              "passResultText": "你拿起剪刀，避開他們的爭論。紙屑慢慢落到桌面上，三個人的工作開始有了不同聲音。",
              "weakResultText": "你做到中間慢了一點，紙邊也有些歪，但你沒有把手縮回來。大家等一等，把這一小步接住，事情仍然完成了。"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_quiet_observer",
        "npcIdHint": "classmate_quiet_observer",
        "npcNameFallback": "穎心",
        "competitionType": "class_wall_poster",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_mischief_maker",
            "npcNameFallback": "柏宇"
          }
        ]
      },
      {
        "variantId": "quiz_tszhin_pakyu",
        "variantTitle": "class_quiz｜梓軒 + 柏宇 + player",
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師說常識問答要先練題。梓軒把題目紙按得很平：「唔好亂答。」柏宇盯著第一題，說：「如果答案係學校地下有怪聲呢？」梓軒皺眉：「唔係問呢啲。」你拿著鉛筆，覺得這張題目紙好像被他們拉向兩邊。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w10_35_quiz_tszhin_pakyu_read_first",
            "text": "先讀題目。",
            "buttonText": "先讀題目。",
            "playerLine": "「我讀題先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_35_quiz_tszhin_pakyu_read_first"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把題目讀出來，柏宇終於停下怪聲，梓軒也看回紙上。三個人先有同一行字可以抓住。"
            },
            "resultText": "你把題目讀出來，柏宇終於停下怪聲，梓軒也看回紙上。三個人先有同一行字可以抓住。",
            "statusDelta": {
              "學業": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              },
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_mischief_maker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_35_competition_prep_or_entry",
              "variantId": "quiz_tszhin_pakyu",
              "mustMatchEventTitle": "班際 competition 正式準備或正式出現"
            }
          },
          {
            "id": "s2_w10_35_quiz_tszhin_pakyu_let_pakyu_finish",
            "text": "叫柏宇講完再答。",
            "buttonText": "叫柏宇講完再答。",
            "playerLine": "「你講完先，我哋再答。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_35_quiz_tszhin_pakyu_let_pakyu_finish"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "柏宇",
              "text": "柏宇很快講完他的怪想法，梓軒有點急，但沒有打斷。題目回到正軌時，氣氛反而沒那麼硬。"
            },
            "resultText": "柏宇很快講完他的怪想法，梓軒有點急，但沒有打斷。題目回到正軌時，氣氛反而沒那麼硬。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_mischief_maker",
                "dimension": "closeness",
                "amount": 1
              },
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_35_competition_prep_or_entry",
              "variantId": "quiz_tszhin_pakyu",
              "mustMatchEventTitle": "班際 competition 正式準備或正式出現"
            }
          },
          {
            "id": "s2_w10_35_quiz_tszhin_pakyu_ask_why_nervous",
            "text": "問梓軒為何緊張。",
            "buttonText": "問梓軒為何緊張。",
            "playerLine": "「你做咩咁急？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_35_quiz_tszhin_pakyu_ask_why_nervous"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒說不想到時答錯。柏宇收起笑，說可以先錯在這裡。你第一次聽見他們的急和玩其實都在怕同一件事。"
            },
            "resultText": "梓軒說不想到時答錯。柏宇收起笑，說可以先錯在這裡。你第一次聽見他們的急和玩其實都在怕同一件事。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 2
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_35_competition_prep_or_entry",
              "variantId": "quiz_tszhin_pakyu",
              "mustMatchEventTitle": "班際 competition 正式準備或正式出現"
            }
          },
          {
            "id": "s2_w10_35_quiz_tszhin_pakyu_write_answer",
            "text": "自己寫答案。",
            "buttonText": "自己寫答案。",
            "playerLine": "「我寫低先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_35_quiz_tszhin_pakyu_write_answer"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把答案寫在旁邊，字不大。梓軒看了一眼，柏宇也湊過來，兩個人的聲音終於落到紙上。"
            },
            "resultText": "你把答案寫在旁邊，字不大。梓軒看了一眼，柏宇也湊過來，兩個人的聲音終於落到紙上。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_35_competition_prep_or_entry",
              "variantId": "quiz_tszhin_pakyu",
              "mustMatchEventTitle": "班際 competition 正式準備或正式出現"
            },
            "validate": {
              "softCheck": true,
              "stats": {
                "學業": 35,
                "理智值": 30
              },
              "passMemoryTag": "s2_w10_35_quiz_tszhin_pakyu_write_answer_soft_pass",
              "weakMemoryTag": "s2_w10_35_quiz_tszhin_pakyu_write_answer_soft_weak",
              "passResultText": "你把答案寫在旁邊，字不大。梓軒看了一眼，柏宇也湊過來，兩個人的聲音終於落到紙上。",
              "weakResultText": "你答到中間停了一下，題目好像忽然變長。旁邊同學沒有立刻催，你重新看多一次，才把答案慢慢放回紙上。"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_competitive_peer",
        "npcIdHint": "classmate_competitive_peer",
        "npcNameFallback": "梓軒",
        "competitionType": "class_quiz",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_mischief_maker",
            "npcNameFallback": "柏宇"
          }
        ]
      },
      {
        "variantId": "recitation_kalong_wingsam",
        "variantTitle": "class_recitation｜家朗 + 穎心 + player",
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "朗誦小組要試讀一段短文。家朗先拿起紙：「我可以讀開頭。」穎心把紙邊按住，聲音很細：「我唔想第一個。」家朗說那你第二個，穎心的手指又收緊了一點。你站在旁邊，聽見自己的心跳跟紙聲混在一起。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w10_35_recitation_kalong_wingsam_read_middle",
            "text": "說我可以讀中間。",
            "buttonText": "說我可以讀中間。",
            "playerLine": "「我讀中間得唔得？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_35_recitation_kalong_wingsam_read_middle"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗立刻說好，穎心也鬆了一點。中間不是最前面，也不是最後面，三個人的位置忽然比較容易排。"
            },
            "resultText": "家朗立刻說好，穎心也鬆了一點。中間不是最前面，也不是最後面，三個人的位置忽然比較容易排。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              },
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_quiet_observer",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_35_competition_prep_or_entry",
              "variantId": "recitation_kalong_wingsam",
              "mustMatchEventTitle": "班際 competition 正式準備或正式出現"
            },
            "validate": {
              "softCheck": true,
              "stats": {
                "自信": 35,
                "理智值": 25
              },
              "passMemoryTag": "s2_w10_35_recitation_kalong_wingsam_read_middle_soft_pass",
              "weakMemoryTag": "s2_w10_35_recitation_kalong_wingsam_read_middle_soft_weak",
              "passResultText": "家朗立刻說好，穎心也鬆了一點。中間不是最前面，也不是最後面，三個人的位置忽然比較容易排。",
              "weakResultText": "你讀到中間聲音細了，字句差點散開。有人在旁邊接了一下，你再跟著讀，沒有把整段完全掉在地上。"
            }
          },
          {
            "id": "s2_w10_35_recitation_kalong_wingsam_read_quiet_first",
            "text": "先一起細聲讀。",
            "buttonText": "先一起細聲讀。",
            "playerLine": "「我哋細聲讀一次先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_35_recitation_kalong_wingsam_read_quiet_first"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗本來想大聲試，但看到穎心點頭，就把聲音收低。短文先在你們三個中間走了一遍。"
            },
            "resultText": "家朗本來想大聲試，但看到穎心點頭，就把聲音收低。短文先在你們三個中間走了一遍。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_quiet_observer",
                "dimension": "closeness",
                "amount": 2
              }
            ],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_35_competition_prep_or_entry",
              "variantId": "recitation_kalong_wingsam",
              "mustMatchEventTitle": "班際 competition 正式準備或正式出現"
            }
          },
          {
            "id": "s2_w10_35_recitation_kalong_wingsam_ask_not_front",
            "text": "問可否不站最前。",
            "buttonText": "問可否不站最前。",
            "playerLine": "「可唔可以唔企最前？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_35_recitation_kalong_wingsam_ask_not_front"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師說可以先排位。穎心看你一眼，好像這句不是只有她想問。"
            },
            "resultText": "老師說可以先排位。穎心看你一眼，好像這句不是只有她想問。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_quiet_observer",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_35_competition_prep_or_entry",
              "variantId": "recitation_kalong_wingsam",
              "mustMatchEventTitle": "班際 competition 正式準備或正式出現"
            }
          },
          {
            "id": "s2_w10_35_recitation_kalong_wingsam_let_kalong_first",
            "text": "讓家朗先讀。",
            "buttonText": "讓家朗先讀。",
            "playerLine": "「你先啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_35_recitation_kalong_wingsam_let_kalong_first"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "家朗讀得很快，讀到第二句才放慢。穎心跟著紙上的字走，你發現快的人也需要有人在後面拉住節奏。"
            },
            "resultText": "家朗讀得很快，讀到第二句才放慢。穎心跟著紙上的字走，你發現快的人也需要有人在後面拉住節奏。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_35_competition_prep_or_entry",
              "variantId": "recitation_kalong_wingsam",
              "mustMatchEventTitle": "班際 competition 正式準備或正式出現"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗",
        "competitionType": "class_recitation",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_quiet_observer",
            "npcNameFallback": "穎心"
          }
        ]
      },
      {
        "variantId": "relay_kalong_tszhin",
        "variantTitle": "class_relay｜家朗 + 梓軒 + player",
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "接力練習時，家朗一聽到「跑」就站直，梓軒已經在問棒要交給誰。老師叫大家先排順序，不要衝。家朗說自己可以跑第一棒，梓軒說最後一棒比較重要，兩個人都看向你。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w10_35_relay_kalong_tszhin_ask_which_leg",
            "text": "問自己跑哪棒。",
            "buttonText": "問自己跑哪棒。",
            "playerLine": "「咁我跑邊段？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_35_relay_kalong_tszhin_ask_which_leg"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒開始分析，家朗直接說你跑中間也得。你被放在兩種安排中間，第一次覺得跑步也有分工。"
            },
            "resultText": "梓軒開始分析，家朗直接說你跑中間也得。你被放在兩種安排中間，第一次覺得跑步也有分工。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              },
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_competitive_peer",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_35_competition_prep_or_entry",
              "variantId": "relay_kalong_tszhin",
              "mustMatchEventTitle": "班際 competition 正式準備或正式出現"
            }
          },
          {
            "id": "s2_w10_35_relay_kalong_tszhin_try_once",
            "text": "說先試一次。",
            "buttonText": "說先試一次。",
            "playerLine": "「試咗先啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_35_relay_kalong_tszhin_try_once"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師也說先試。家朗終於站到線後，梓軒仍然盯著交棒位，但不再只用嘴排。"
            },
            "resultText": "老師也說先試。家朗終於站到線後，梓軒仍然盯著交棒位，但不再只用嘴排。",
            "statusDelta": {
              "體力": 1,
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_35_competition_prep_or_entry",
              "variantId": "relay_kalong_tszhin",
              "mustMatchEventTitle": "班際 competition 正式準備或正式出現"
            },
            "validate": {
              "softCheck": true,
              "stats": {
                "體力": 35,
                "自信": 25
              },
              "passMemoryTag": "s2_w10_35_relay_kalong_tszhin_try_once_soft_pass",
              "weakMemoryTag": "s2_w10_35_relay_kalong_tszhin_try_once_soft_weak",
              "passResultText": "老師也說先試。家朗終於站到線後，梓軒仍然盯著交棒位，但不再只用嘴排。",
              "weakResultText": "你試的時候腳步有點亂，交接也不算順。大家停下來重來一次，你才知道原來慢一點也是練習的一部分。"
            }
          },
          {
            "id": "s2_w10_35_relay_kalong_tszhin_dont_bump",
            "text": "提醒不要撞。",
            "buttonText": "提醒不要撞。",
            "playerLine": "「唔好撞到人。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_35_relay_kalong_tszhin_dont_bump"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "家朗收住腳，梓軒看了一眼旁邊隊伍。比快之前，三個人先學會不要把棒掉在混亂裡。"
            },
            "resultText": "家朗收住腳，梓軒看了一眼旁邊隊伍。比快之前，三個人先學會不要把棒掉在混亂裡。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_competitive_peer",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_35_competition_prep_or_entry",
              "variantId": "relay_kalong_tszhin",
              "mustMatchEventTitle": "班際 competition 正式準備或正式出現"
            }
          },
          {
            "id": "s2_w10_35_relay_kalong_tszhin_a_bit_scared",
            "text": "說我有啲驚。",
            "buttonText": "說我有啲驚。",
            "playerLine": "「我有啲驚。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_35_relay_kalong_tszhin_a_bit_scared"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "家朗說他會叫你，梓軒說不要望後面。兩句話不一樣，但都像在把你推近跑道一點。"
            },
            "resultText": "家朗說他會叫你，梓軒說不要望後面。兩句話不一樣，但都像在把你推近跑道一點。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_35_competition_prep_or_entry",
              "variantId": "relay_kalong_tszhin",
              "mustMatchEventTitle": "班際 competition 正式準備或正式出現"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗",
        "competitionType": "class_relay",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_competitive_peer",
            "npcNameFallback": "梓軒"
          }
        ]
      },
      {
        "variantId": "service_order_wingsam_tszhin",
        "variantTitle": "class_service_order｜穎心 + 梓軒 + player",
        "openingDialogue": [
          {
            "speaker": "穎心",
            "text": "班際整潔／秩序比賽要記錄書包、桌面和排隊。穎心先把表格壓平，梓軒說：「如果有人唔做，咪扣分？」穎心皺了一下眉：「唔好一開始就話扣分。」你看著表格上的格子，覺得每一格都像會牽到很多人。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w10_35_service_order_wingsam_tszhin_tidy_self",
            "text": "先執自己桌面。",
            "buttonText": "先執自己桌面。",
            "playerLine": "「我執自己先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_35_service_order_wingsam_tszhin_tidy_self"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "穎心",
              "text": "穎心點頭，梓軒也看了自己的抽屜一眼。你沒有先管全班，卻讓第一格變得容易開始。"
            },
            "resultText": "穎心點頭，梓軒也看了自己的抽屜一眼。你沒有先管全班，卻讓第一格變得容易開始。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_35_competition_prep_or_entry",
              "variantId": "service_order_wingsam_tszhin",
              "mustMatchEventTitle": "班際 competition 正式準備或正式出現"
            }
          },
          {
            "id": "s2_w10_35_service_order_wingsam_tszhin_ask_how_remind",
            "text": "問怎樣提醒人。",
            "buttonText": "問怎樣提醒人。",
            "playerLine": "「點樣同人講好？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_35_service_order_wingsam_tszhin_ask_how_remind"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "穎心",
              "text": "穎心說可以細聲提醒，梓軒說但有些人不聽。你發現秩序不是只有表格，還有說話的聲音大小。"
            },
            "resultText": "穎心說可以細聲提醒，梓軒說但有些人不聽。你發現秩序不是只有表格，還有說話的聲音大小。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              },
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_competitive_peer",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_35_competition_prep_or_entry",
              "variantId": "service_order_wingsam_tszhin",
              "mustMatchEventTitle": "班際 competition 正式準備或正式出現"
            }
          },
          {
            "id": "s2_w10_35_service_order_wingsam_tszhin_dont_scold",
            "text": "說不要罵人。",
            "buttonText": "說不要罵人。",
            "playerLine": "「唔好鬧人啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_35_service_order_wingsam_tszhin_dont_scold"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒說不鬧就沒人理，穎心沒有同意。兩個人的分歧沒有消失，但至少被講清楚了。"
            },
            "resultText": "梓軒說不鬧就沒人理，穎心沒有同意。兩個人的分歧沒有消失，但至少被講清楚了。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_competitive_peer",
                "dimension": "misunderstanding",
                "amount": 1
              },
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_35_competition_prep_or_entry",
              "variantId": "service_order_wingsam_tszhin",
              "mustMatchEventTitle": "班際 competition 正式準備或正式出現"
            }
          },
          {
            "id": "s2_w10_35_service_order_wingsam_tszhin_wipe_board",
            "text": "負責擦黑板角。",
            "buttonText": "負責擦黑板角。",
            "playerLine": "「我抹呢邊。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_35_service_order_wingsam_tszhin_wipe_board"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你拿起布，先處理一小角。表格上的大字沒有變少，但你的手已經開始動。"
            },
            "resultText": "你拿起布，先處理一小角。表格上的大字沒有變少，但你的手已經開始動。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_35_competition_prep_or_entry",
              "variantId": "service_order_wingsam_tszhin",
              "mustMatchEventTitle": "班際 competition 正式準備或正式出現"
            },
            "validate": {
              "softCheck": true,
              "stats": {
                "理智值": 30,
                "社交": 30
              },
              "passMemoryTag": "s2_w10_35_service_order_wingsam_tszhin_wipe_board_soft_pass",
              "weakMemoryTag": "s2_w10_35_service_order_wingsam_tszhin_wipe_board_soft_weak",
              "passResultText": "你拿起布，先處理一小角。表格上的大字沒有變少，但你的手已經開始動。",
              "weakResultText": "你做到一半才發現提醒別人比自己做更難。聲音有點卡住，但你仍然把規矩講得比較輕，沒有變成罵人。"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_quiet_observer",
        "npcIdHint": "classmate_quiet_observer",
        "npcNameFallback": "穎心",
        "competitionType": "class_service_order",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_competitive_peer",
            "npcNameFallback": "梓軒"
          }
        ]
      }
    ]
  },
  {
    "id": "s2_w10_36_division_of_labor",
    "sourceTopicId": "S2-W10-36",
    "weekPool": "S2-W10_authored_weekly",
    "termId": "term_p1_s2",
    "week": 10,
    "category": "social",
    "title": "小組分工：誰寫字、誰畫、誰答題、誰跑、誰上台",
    "sceneIntro": "班際活動一開始，最難的不是「要不要參加」，而是誰做哪一部分。老師只給了一個方向，真正分工時，大家的聲音就多了起來。有人想做最前面，有人只想在旁邊做好，有人怕自己做錯，有人怕別人拖慢。你看著表格或練習紙，知道自己不能一直站在中間不說話。",
    "metadata": {
      "sourceMarkdown": "info/s2_w7_w12_dialogue_draft_v0_2.md",
      "uiHidden": true,
      "competitionFollowUpCandidate": true,
      "usesExistingCompetitionType": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        10,
        10
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        },
        {
          "type": "classCompetitionStarted",
          "value": true
        }
      ],
      "exclusiveGroup": "s2_w10_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "writing_or_drawing",
        "variantTitle": "寫字和畫圖之間",
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "如果活動要做壁報，穎心看著標題字，柏宇看著空白角落，家朗在旁邊說：「快啲開始啦。」穎心說字要先排好，柏宇說圖先出來才有感覺。家朗看你：「咁你揀邊樣？」"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w10_36_writing_or_drawing_title",
            "text": "我寫標題。",
            "buttonText": "我寫標題。",
            "playerLine": "「我寫標題試吓。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_36_writing_or_drawing_title"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "穎心",
              "text": "穎心把尺推給你，柏宇把圖案移到旁邊。你一筆一筆寫，三個人的爭論暫時有了起點。"
            },
            "resultText": "穎心把尺推給你，柏宇把圖案移到旁邊。你一筆一筆寫，三個人的爭論暫時有了起點。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_36_division_of_labor",
              "variantId": "writing_or_drawing",
              "mustMatchEventTitle": "小組分工：誰寫字、誰畫、誰答題、誰跑、誰上台"
            }
          },
          {
            "id": "s2_w10_36_writing_or_drawing_border",
            "text": "我畫邊框。",
            "buttonText": "我畫邊框。",
            "playerLine": "「我畫邊邊。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_36_writing_or_drawing_border"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "柏宇",
              "text": "柏宇立刻靠近看，穎心提醒不要碰到字。邊框不在正中，卻把兩邊想法接在一起。"
            },
            "resultText": "柏宇立刻靠近看，穎心提醒不要碰到字。邊框不在正中，卻把兩邊想法接在一起。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_mischief_maker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_36_division_of_labor",
              "variantId": "writing_or_drawing",
              "mustMatchEventTitle": "小組分工：誰寫字、誰畫、誰答題、誰跑、誰上台"
            },
            "validate": {
              "softCheck": true,
              "stats": {
                "創意": 35,
                "體力": 25
              },
              "passMemoryTag": "s2_w10_36_writing_or_drawing_border_soft_pass",
              "weakMemoryTag": "s2_w10_36_writing_or_drawing_border_soft_weak",
              "passResultText": "柏宇立刻靠近看，穎心提醒不要碰到字。邊框不在正中，卻把兩邊想法接在一起。",
              "weakResultText": "你做到中間慢了一點，紙邊也有些歪，但你沒有把手縮回來。大家等一等，把這一小步接住，事情仍然完成了。"
            }
          },
          {
            "id": "s2_w10_36_writing_or_drawing_pencil_first",
            "text": "先用鉛筆排位。",
            "buttonText": "先用鉛筆排位。",
            "playerLine": "「不如鉛筆畫住先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_36_writing_or_drawing_pencil_first"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗說好，因為這樣快；穎心也點頭，因為可以改。你提出的方法沒有贏誰，只讓大家不用立刻定死。"
            },
            "resultText": "家朗說好，因為這樣快；穎心也點頭，因為可以改。你提出的方法沒有贏誰，只讓大家不用立刻定死。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_36_division_of_labor",
              "variantId": "writing_or_drawing",
              "mustMatchEventTitle": "小組分工：誰寫字、誰畫、誰答題、誰跑、誰上台"
            }
          },
          {
            "id": "s2_w10_36_writing_or_drawing_cut_paper",
            "text": "我剪紙。",
            "buttonText": "我剪紙。",
            "playerLine": "「我剪啲細紙。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_36_writing_or_drawing_cut_paper"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你避開最前面的選擇，拿起剪刀。家朗催了一句，又被穎心叫他等一等。"
            },
            "resultText": "你避開最前面的選擇，拿起剪刀。家朗催了一句，又被穎心叫他等一等。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_36_division_of_labor",
              "variantId": "writing_or_drawing",
              "mustMatchEventTitle": "小組分工：誰寫字、誰畫、誰答題、誰跑、誰上台"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_quiet_observer",
        "npcIdHint": "classmate_quiet_observer",
        "npcNameFallback": "穎心",
        "competitionType": "class_wall_poster",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_mischief_maker",
            "npcNameFallback": "柏宇"
          },
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_outgoing_inviter",
            "npcNameFallback": "家朗"
          }
        ]
      },
      {
        "variantId": "answer_order",
        "variantTitle": "答題順序",
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "如果是常識問答，梓軒把題目分成「識」和「唔穩陣」，柏宇把其中一題旁邊畫了問號。梓軒說：「到時唔好亂搶答。」柏宇反問：「咁靈機一動點算？」"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w10_36_answer_order_raise_hand",
            "text": "先舉手再講。",
            "buttonText": "先舉手再講。",
            "playerLine": "「我哋舉手先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_36_answer_order_raise_hand"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒立刻同意，柏宇覺得有點慢，但還是試著舉了一下手。規矩變成你們自己的小約定。"
            },
            "resultText": "梓軒立刻同意，柏宇覺得有點慢，但還是試著舉了一下手。規矩變成你們自己的小約定。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_36_division_of_labor",
              "variantId": "answer_order",
              "mustMatchEventTitle": "小組分工：誰寫字、誰畫、誰答題、誰跑、誰上台"
            }
          },
          {
            "id": "s2_w10_36_answer_order_whoever_knows",
            "text": "誰識誰答。",
            "buttonText": "誰識誰答。",
            "playerLine": "「識嗰個答啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_36_answer_order_whoever_knows"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "柏宇",
              "text": "柏宇說那如果兩個都識呢，梓軒立刻說先不要撞聲。你們發現「識」也要排隊。"
            },
            "resultText": "柏宇說那如果兩個都識呢，梓軒立刻說先不要撞聲。你們發現「識」也要排隊。",
            "statusDelta": {
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_mischief_maker",
                "dimension": "misunderstanding",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_36_division_of_labor",
              "variantId": "answer_order",
              "mustMatchEventTitle": "小組分工：誰寫字、誰畫、誰答題、誰跑、誰上台"
            }
          },
          {
            "id": "s2_w10_36_answer_order_read_clearly",
            "text": "我負責讀題。",
            "buttonText": "我負責讀題。",
            "playerLine": "「我讀清楚題目。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_36_answer_order_read_clearly"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒把題目紙交給你，柏宇湊過來聽。讀題不是答案，但如果讀錯，後面全都會歪。"
            },
            "resultText": "梓軒把題目紙交給你，柏宇湊過來聽。讀題不是答案，但如果讀錯，後面全都會歪。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_36_division_of_labor",
              "variantId": "answer_order",
              "mustMatchEventTitle": "小組分工：誰寫字、誰畫、誰答題、誰跑、誰上台"
            },
            "validate": {
              "softCheck": true,
              "stats": {
                "學業": 35,
                "理智值": 30
              },
              "passMemoryTag": "s2_w10_36_answer_order_read_clearly_soft_pass",
              "weakMemoryTag": "s2_w10_36_answer_order_read_clearly_soft_weak",
              "passResultText": "梓軒把題目紙交給你，柏宇湊過來聽。讀題不是答案，但如果讀錯，後面全都會歪。",
              "weakResultText": "你答到中間停了一下，題目好像忽然變長。旁邊同學沒有立刻催，你重新看多一次，才把答案慢慢放回紙上。"
            }
          },
          {
            "id": "s2_w10_36_answer_order_practice_wrong",
            "text": "先練錯都得。",
            "buttonText": "先練錯都得。",
            "playerLine": "「而家錯都得啫。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_36_answer_order_practice_wrong"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒不太情願，柏宇卻點頭。你們在正式前先把錯放出來一點，紙上的紅圈也沒那麼可怕。"
            },
            "resultText": "梓軒不太情願，柏宇卻點頭。你們在正式前先把錯放出來一點，紙上的紅圈也沒那麼可怕。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_mischief_maker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_36_division_of_labor",
              "variantId": "answer_order",
              "mustMatchEventTitle": "小組分工：誰寫字、誰畫、誰答題、誰跑、誰上台"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_competitive_peer",
        "npcIdHint": "classmate_competitive_peer",
        "npcNameFallback": "梓軒",
        "competitionType": "class_quiz",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_mischief_maker",
            "npcNameFallback": "柏宇"
          }
        ]
      },
      {
        "variantId": "stage_position",
        "variantTitle": "上台位置",
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "如果是朗誦或讀文，家朗想站中間，穎心想站旁邊，梓軒說中間聲音比較清楚。老師還未排位，你們已經在講台前站了幾次，又退回去。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w10_36_stage_position_stand_side",
            "text": "我站旁邊。",
            "buttonText": "我站旁邊。",
            "playerLine": "「我企邊邊得唔得？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_36_stage_position_stand_side"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "穎心",
              "text": "穎心看你一眼，像那句話也替她問了。老師說可以試位置，講台忽然不是只有正中一個位。"
            },
            "resultText": "穎心看你一眼，像那句話也替她問了。老師說可以試位置，講台忽然不是只有正中一個位。",
            "statusDelta": {
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_quiet_observer",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_36_division_of_labor",
              "variantId": "stage_position",
              "mustMatchEventTitle": "小組分工：誰寫字、誰畫、誰答題、誰跑、誰上台"
            }
          },
          {
            "id": "s2_w10_36_stage_position_read_first_line",
            "text": "我讀第一句。",
            "buttonText": "我讀第一句。",
            "playerLine": "「我讀第一句。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_36_stage_position_read_first_line"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "家朗有點意外，梓軒立刻問你記不記得。你看著紙，知道第一句不長，但它會讓全場先聽到你。"
            },
            "resultText": "家朗有點意外，梓軒立刻問你記不記得。你看著紙，知道第一句不長，但它會讓全場先聽到你。",
            "statusDelta": {
              "自信": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_36_division_of_labor",
              "variantId": "stage_position",
              "mustMatchEventTitle": "小組分工：誰寫字、誰畫、誰答題、誰跑、誰上台"
            },
            "validate": {
              "softCheck": true,
              "stats": {
                "自信": 35,
                "理智值": 25
              },
              "passMemoryTag": "s2_w10_36_stage_position_read_first_line_soft_pass",
              "weakMemoryTag": "s2_w10_36_stage_position_read_first_line_soft_weak",
              "passResultText": "家朗有點意外，梓軒立刻問你記不記得。你看著紙，知道第一句不長，但它會讓全場先聽到你。",
              "weakResultText": "你答到中間停了一下，題目好像忽然變長。旁邊同學沒有立刻催，你重新看多一次，才把答案慢慢放回紙上。"
            }
          },
          {
            "id": "s2_w10_36_stage_position_practice_quiet",
            "text": "一起試細聲。",
            "buttonText": "一起試細聲。",
            "playerLine": "「細聲試一次先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_36_stage_position_practice_quiet"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "三個人先不面向全班，只對著黑板讀。聲音撞到黑板再回來，比想像中沒有那麼可怕。"
            },
            "resultText": "三個人先不面向全班，只對著黑板讀。聲音撞到黑板再回來，比想像中沒有那麼可怕。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_36_division_of_labor",
              "variantId": "stage_position",
              "mustMatchEventTitle": "小組分工：誰寫字、誰畫、誰答題、誰跑、誰上台"
            }
          },
          {
            "id": "s2_w10_36_stage_position_let_others_first",
            "text": "讓別人先排。",
            "buttonText": "讓別人先排。",
            "playerLine": "「你哋排先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_36_stage_position_let_others_first"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗很快站好，穎心慢慢移到旁邊。你退後一步，看到他們原來也在找舒服的位置。"
            },
            "resultText": "家朗很快站好，穎心慢慢移到旁邊。你退後一步，看到他們原來也在找舒服的位置。",
            "statusDelta": {
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_36_division_of_labor",
              "variantId": "stage_position",
              "mustMatchEventTitle": "小組分工：誰寫字、誰畫、誰答題、誰跑、誰上台"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗",
        "competitionType": "class_recitation",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_quiet_observer",
            "npcNameFallback": "穎心"
          },
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_competitive_peer",
            "npcNameFallback": "梓軒"
          }
        ]
      },
      {
        "variantId": "baton_pass",
        "variantTitle": "接力交棒",
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "接力要練交棒，不只是跑快。家朗把手伸後，梓軒說角度不對，老師叫你們不要在起點吵。棒子很短，卻讓三個人的手都變得緊張。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w10_36_baton_pass_slow_try",
            "text": "慢慢交一次。",
            "buttonText": "慢慢交一次。",
            "playerLine": "「慢啲試一次。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_36_baton_pass_slow_try"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗收慢，梓軒終於有時間看清楚。棒子沒有掉，三個人都像鬆了一口氣。"
            },
            "resultText": "家朗收慢，梓軒終於有時間看清楚。棒子沒有掉，三個人都像鬆了一口氣。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              },
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_competitive_peer",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_36_division_of_labor",
              "variantId": "baton_pass",
              "mustMatchEventTitle": "小組分工：誰寫字、誰畫、誰答題、誰跑、誰上台"
            }
          },
          {
            "id": "s2_w10_36_baton_pass_take_middle",
            "text": "我接中間。",
            "buttonText": "我接中間。",
            "playerLine": "「我接中間嗰棒。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_36_baton_pass_take_middle"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒開始說中間很重要，家朗說每一棒都重要。你拿著棒，覺得它比看起來更熱。"
            },
            "resultText": "梓軒開始說中間很重要，家朗說每一棒都重要。你拿著棒，覺得它比看起來更熱。",
            "statusDelta": {
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_36_division_of_labor",
              "variantId": "baton_pass",
              "mustMatchEventTitle": "小組分工：誰寫字、誰畫、誰答題、誰跑、誰上台"
            },
            "validate": {
              "softCheck": true,
              "stats": {
                "體力": 35,
                "自信": 25
              },
              "passMemoryTag": "s2_w10_36_baton_pass_take_middle_soft_pass",
              "weakMemoryTag": "s2_w10_36_baton_pass_take_middle_soft_weak",
              "passResultText": "梓軒開始說中間很重要，家朗說每一棒都重要。你拿著棒，覺得它比看起來更熱。",
              "weakResultText": "你試的時候腳步有點亂，交接也不算順。大家停下來重來一次，你才知道原來慢一點也是練習的一部分。"
            }
          },
          {
            "id": "s2_w10_36_baton_pass_ask_hand",
            "text": "問手放哪裡。",
            "buttonText": "問手放哪裡。",
            "playerLine": "「手點擺？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_36_baton_pass_ask_hand"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師示範一次，家朗也跟著做。梓軒沒有再只講名次，而是看著你的手。"
            },
            "resultText": "老師示範一次，家朗也跟著做。梓軒沒有再只講名次，而是看著你的手。",
            "statusDelta": {
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_competitive_peer",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_36_division_of_labor",
              "variantId": "baton_pass",
              "mustMatchEventTitle": "小組分工：誰寫字、誰畫、誰答題、誰跑、誰上台"
            }
          },
          {
            "id": "s2_w10_36_baton_pass_afraid_drop",
            "text": "說我怕跌。",
            "buttonText": "說我怕跌。",
            "playerLine": "「我驚跌咗。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_36_baton_pass_afraid_drop"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "家朗說跌了撿起來，梓軒說最好不要跌。兩句話放在一起，你反而知道跌了也不是世界完結。"
            },
            "resultText": "家朗說跌了撿起來，梓軒說最好不要跌。兩句話放在一起，你反而知道跌了也不是世界完結。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_36_division_of_labor",
              "variantId": "baton_pass",
              "mustMatchEventTitle": "小組分工：誰寫字、誰畫、誰答題、誰跑、誰上台"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗",
        "competitionType": "class_relay",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_competitive_peer",
            "npcNameFallback": "梓軒"
          }
        ]
      }
    ]
  },
  {
    "id": "s2_w10_37_competition_tension",
    "sourceTopicId": "S2-W10-37",
    "weekPool": "S2-W10_authored_weekly",
    "termId": "term_p1_s2",
    "week": 10,
    "category": "social",
    "title": "competition 壓力開始影響 NPC 關係",
    "sceneIntro": "練習幾次之後，班際活動不再只是好不好玩。有人開始在意做得夠不夠快，有人怕自己拖累，有人覺得別人太急，有人覺得別人太慢。老師不一定每次都看見，小摩擦常常在桌角、跑道邊、講台前或黑板旁邊發生。你夾在中間，才發現三個人一起做事，聲音會比一個人多很多。",
    "metadata": {
      "sourceMarkdown": "info/s2_w7_w12_dialogue_draft_v0_2.md",
      "uiHidden": true,
      "competitionTensionEvent": true,
      "noResultResolveHere": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        10,
        10
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        },
        {
          "type": "classCompetitionStarted",
          "value": true
        }
      ],
      "exclusiveGroup": "s2_w10_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "tszhin_thinks_pakyu_not_serious",
        "variantTitle": "梓軒覺得柏宇不認真",
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "梓軒把練習紙拍平：「你可唔可以唔好成日講怪嘢？」柏宇本來在題目旁邊畫小箭嘴，聽見後把筆停住：「我有諗㗎。」兩個人都沒有看你，但你正坐在他們中間。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w10_37_tszhin_thinks_pakyu_not_serious_look_at_question",
            "text": "叫大家先看題。",
            "buttonText": "叫大家先看題。",
            "playerLine": "「睇返呢題先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_37_tszhin_thinks_pakyu_not_serious_look_at_question_tension"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒吸了一口氣，柏宇把箭嘴擦淡一點。摩擦沒有完全消失，但題目至少又回到中間。"
            },
            "resultText": "梓軒吸了一口氣，柏宇把箭嘴擦淡一點。摩擦沒有完全消失，但題目至少又回到中間。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_37_competition_tension",
              "variantId": "tszhin_thinks_pakyu_not_serious",
              "mustMatchEventTitle": "competition 壓力開始影響 NPC 關係"
            }
          },
          {
            "id": "s2_w10_37_tszhin_thinks_pakyu_not_serious_ask_pakyu",
            "text": "問柏宇想到甚麼。",
            "buttonText": "問柏宇想到甚麼。",
            "playerLine": "「你諗到咩？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_37_tszhin_thinks_pakyu_not_serious_ask_pakyu"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "柏宇",
              "text": "柏宇說那個箭嘴是提醒自己看關鍵字。梓軒愣了一下，像第一次發現怪東西也可能有用。"
            },
            "resultText": "柏宇說那個箭嘴是提醒自己看關鍵字。梓軒愣了一下，像第一次發現怪東西也可能有用。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_mischief_maker",
                "dimension": "closeness",
                "amount": 2
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_37_competition_tension",
              "variantId": "tszhin_thinks_pakyu_not_serious",
              "mustMatchEventTitle": "competition 壓力開始影響 NPC 關係"
            }
          },
          {
            "id": "s2_w10_37_tszhin_thinks_pakyu_not_serious_tell_tszhin_slow",
            "text": "叫梓軒不要太急。",
            "buttonText": "叫梓軒不要太急。",
            "playerLine": "「你唔好咁急啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_37_tszhin_thinks_pakyu_not_serious_tell_tszhin_slow_tension"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒皺眉，說不急就會輸。你聽見那個「輸」字，比剛才的聲音更硬。"
            },
            "resultText": "梓軒皺眉，說不急就會輸。你聽見那個「輸」字，比剛才的聲音更硬。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "misunderstanding",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_37_competition_tension",
              "variantId": "tszhin_thinks_pakyu_not_serious",
              "mustMatchEventTitle": "competition 壓力開始影響 NPC 關係"
            }
          },
          {
            "id": "s2_w10_37_tszhin_thinks_pakyu_not_serious_stay_quiet",
            "text": "自己低頭寫。",
            "buttonText": "自己低頭寫。",
            "playerLine": "「……」",
            "playerLineType": "narration",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_37_tszhin_thinks_pakyu_not_serious_stay_quiet_tension"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有加入，兩個人的聲音繼續在旁邊磨。紙上的字沒有變少，但氣氛變得比較窄。"
            },
            "resultText": "你沒有加入，兩個人的聲音繼續在旁邊磨。紙上的字沒有變少，但氣氛變得比較窄。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_37_competition_tension",
              "variantId": "tszhin_thinks_pakyu_not_serious",
              "mustMatchEventTitle": "competition 壓力開始影響 NPC 關係"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_competitive_peer",
        "npcIdHint": "classmate_competitive_peer",
        "npcNameFallback": "梓軒",
        "competitionType": "class_quiz",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_mischief_maker",
            "npcNameFallback": "柏宇"
          }
        ]
      },
      {
        "variantId": "kalong_fast_wingsam_behind",
        "variantTitle": "家朗太快，穎心跟不上",
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "家朗已經讀到第二段，穎心還在第一段用鉛筆畫停頓。家朗說：「快啲啦，一陣又唔夠時間。」穎心沒有抬頭，只把鉛筆握緊了一點。你看見她的紙邊被按出一條白痕。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w10_37_kalong_fast_wingsam_behind_tell_kalong_wait",
            "text": "叫家朗等一下。",
            "buttonText": "叫家朗等一下。",
            "playerLine": "「等佢畫埋先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_37_kalong_fast_wingsam_behind_tell_kalong_wait"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "家朗停住，雖然腳尖還在動。穎心把最後一個停頓畫好，聲音才敢出來。"
            },
            "resultText": "家朗停住，雖然腳尖還在動。穎心把最後一個停頓畫好，聲音才敢出來。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_quiet_observer",
                "dimension": "trust",
                "amount": 2
              },
              {
                "targetScope": "currentSpeaker",
                "dimension": "misunderstanding",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_37_competition_tension",
              "variantId": "kalong_fast_wingsam_behind",
              "mustMatchEventTitle": "competition 壓力開始影響 NPC 關係"
            }
          },
          {
            "id": "s2_w10_37_kalong_fast_wingsam_behind_read_with_her",
            "text": "陪穎心讀一次。",
            "buttonText": "陪穎心讀一次。",
            "playerLine": "「我同你讀。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_37_kalong_fast_wingsam_behind_read_with_her"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "穎心",
              "text": "你把聲音放低，穎心跟著讀。家朗聽了一會兒，也把速度放慢。"
            },
            "resultText": "你把聲音放低，穎心跟著讀。家朗聽了一會兒，也把速度放慢。",
            "statusDelta": {
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_quiet_observer",
                "dimension": "closeness",
                "amount": 2
              }
            ],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_37_competition_tension",
              "variantId": "kalong_fast_wingsam_behind",
              "mustMatchEventTitle": "competition 壓力開始影響 NPC 關係"
            }
          },
          {
            "id": "s2_w10_37_kalong_fast_wingsam_behind_continue_with_kalong",
            "text": "跟家朗繼續。",
            "buttonText": "跟家朗繼續。",
            "playerLine": "「咁我哋先讀。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_37_kalong_fast_wingsam_behind_continue_with_kalong_tension"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗繼續向前，穎心留在後面。你們的聲音變大了，但那張被按住的紙也離你遠了一點。"
            },
            "resultText": "家朗繼續向前，穎心留在後面。你們的聲音變大了，但那張被按住的紙也離你遠了一點。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              },
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_quiet_observer",
                "dimension": "misunderstanding",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_37_competition_tension",
              "variantId": "kalong_fast_wingsam_behind",
              "mustMatchEventTitle": "competition 壓力開始影響 NPC 關係"
            }
          },
          {
            "id": "s2_w10_37_kalong_fast_wingsam_behind_ask_split",
            "text": "問要不要分開練。",
            "buttonText": "問要不要分開練。",
            "playerLine": "「分開練得唔得？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_37_kalong_fast_wingsam_behind_ask_split"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師說可以先分段。家朗像鬆了一口氣，穎心也不用立刻追上全部。"
            },
            "resultText": "老師說可以先分段。家朗像鬆了一口氣，穎心也不用立刻追上全部。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_37_competition_tension",
              "variantId": "kalong_fast_wingsam_behind",
              "mustMatchEventTitle": "competition 壓力開始影響 NPC 關係"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗",
        "competitionType": "class_recitation",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_quiet_observer",
            "npcNameFallback": "穎心"
          }
        ]
      },
      {
        "variantId": "wingsam_thinks_tszhin_harsh",
        "variantTitle": "穎心覺得梓軒提醒太硬",
        "openingDialogue": [
          {
            "speaker": "穎心",
            "text": "整潔比賽記錄時，梓軒看見有人書包沒放好，立刻說要記下。穎心輕聲說：「可以先提佢。」梓軒說：「提咗都唔改點算？」你拿著表格，忽然覺得格子裡不是只有勾和叉。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w10_37_wingsam_thinks_tszhin_harsh_remind_first",
            "text": "先提醒一次。",
            "buttonText": "先提醒一次。",
            "playerLine": "「我哋提一次先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_37_wingsam_thinks_tszhin_harsh_remind_first"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "穎心",
              "text": "穎心點頭，梓軒勉強同意。那個同學把書包推進去後，表格暫時不用落叉。"
            },
            "resultText": "穎心點頭，梓軒勉強同意。那個同學把書包推進去後，表格暫時不用落叉。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              },
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_competitive_peer",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_37_competition_tension",
              "variantId": "wingsam_thinks_tszhin_harsh",
              "mustMatchEventTitle": "competition 壓力開始影響 NPC 關係"
            }
          },
          {
            "id": "s2_w10_37_wingsam_thinks_tszhin_harsh_ask_rule",
            "text": "問規則怎樣寫。",
            "buttonText": "問規則怎樣寫。",
            "playerLine": "「老師點講㗎？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_37_wingsam_thinks_tszhin_harsh_ask_rule"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你們回去看老師寫的規則，發現上面只有「保持整潔」，沒有寫要怎樣說話。這反而更難。"
            },
            "resultText": "你們回去看老師寫的規則，發現上面只有「保持整潔」，沒有寫要怎樣說話。這反而更難。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_37_competition_tension",
              "variantId": "wingsam_thinks_tszhin_harsh",
              "mustMatchEventTitle": "competition 壓力開始影響 NPC 關係"
            }
          },
          {
            "id": "s2_w10_37_wingsam_thinks_tszhin_harsh_let_tszhin_record",
            "text": "讓梓軒記下。",
            "buttonText": "讓梓軒記下。",
            "playerLine": "「咁你寫低啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_37_wingsam_thinks_tszhin_harsh_let_tszhin_record_tension"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒在表格上畫了一小記，穎心沒有說話。那一格完成了，但桌邊的空氣變硬了一點。"
            },
            "resultText": "梓軒在表格上畫了一小記，穎心沒有說話。那一格完成了，但桌邊的空氣變硬了一點。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "misunderstanding",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_37_competition_tension",
              "variantId": "wingsam_thinks_tszhin_harsh",
              "mustMatchEventTitle": "competition 壓力開始影響 NPC 關係"
            }
          },
          {
            "id": "s2_w10_37_wingsam_thinks_tszhin_harsh_help_push_bag",
            "text": "自己去幫那同學。",
            "buttonText": "自己去幫那同學。",
            "playerLine": "「我幫佢推入去。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_37_wingsam_thinks_tszhin_harsh_help_push_bag"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你走過去推書包，那個同學有點不好意思。梓軒沒有反對，穎心看著表格，像鬆了一口氣。"
            },
            "resultText": "你走過去推書包，那個同學有點不好意思。梓軒沒有反對，穎心看著表格，像鬆了一口氣。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_37_competition_tension",
              "variantId": "wingsam_thinks_tszhin_harsh",
              "mustMatchEventTitle": "competition 壓力開始影響 NPC 關係"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_quiet_observer",
        "npcIdHint": "classmate_quiet_observer",
        "npcNameFallback": "穎心",
        "competitionType": "class_service_order",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_competitive_peer",
            "npcNameFallback": "梓軒"
          }
        ]
      },
      {
        "variantId": "kalong_happy_tszhin_result",
        "variantTitle": "家朗想大家開心，梓軒想結果好",
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "練習後，家朗說：「其實大家玩得開心咪得。」梓軒立刻說：「但輸咗就唔開心。」家朗張口想反駁，又停了一下。你坐在他們旁邊，覺得兩句都像有一點道理。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w10_37_kalong_happy_tszhin_result_want_both",
            "text": "說兩樣都想。",
            "buttonText": "說兩樣都想。",
            "playerLine": "「我兩樣都想。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_37_kalong_happy_tszhin_result_want_both"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗笑了，梓軒沒有笑，但說那就要練好。你沒有解決問題，只把它變成三個人都聽得見的話。"
            },
            "resultText": "家朗笑了，梓軒沒有笑，但說那就要練好。你沒有解決問題，只把它變成三個人都聽得見的話。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              },
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_competitive_peer",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_37_competition_tension",
              "variantId": "kalong_happy_tszhin_result",
              "mustMatchEventTitle": "competition 壓力開始影響 NPC 關係"
            }
          },
          {
            "id": "s2_w10_37_kalong_happy_tszhin_result_do_our_best",
            "text": "說先做好自己。",
            "buttonText": "說先做好自己。",
            "playerLine": "「我哋做好自己先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_37_kalong_happy_tszhin_result_do_our_best"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒點頭，家朗也說可以。這句話沒有很威風，但夠你們繼續練下一次。"
            },
            "resultText": "梓軒點頭，家朗也說可以。這句話沒有很威風，但夠你們繼續練下一次。",
            "statusDelta": {
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_competitive_peer",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_37_competition_tension",
              "variantId": "kalong_happy_tszhin_result",
              "mustMatchEventTitle": "competition 壓力開始影響 NPC 關係"
            }
          },
          {
            "id": "s2_w10_37_kalong_happy_tszhin_result_no_fighting",
            "text": "說輸都不要吵。",
            "buttonText": "說輸都不要吵。",
            "playerLine": "「輸咗都唔好鬧交。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_37_kalong_happy_tszhin_result_no_fighting"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗立刻說當然，梓軒看著地面，沒有馬上答。那個停頓比答案更讓你記得。"
            },
            "resultText": "家朗立刻說當然，梓軒看著地面，沒有馬上答。那個停頓比答案更讓你記得。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_competitive_peer",
                "dimension": "misunderstanding",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_37_competition_tension",
              "variantId": "kalong_happy_tszhin_result",
              "mustMatchEventTitle": "competition 壓力開始影響 NPC 關係"
            }
          },
          {
            "id": "s2_w10_37_kalong_happy_tszhin_result_dont_talk_result",
            "text": "不想講結果。",
            "buttonText": "不想講結果。",
            "playerLine": "「唔好講住啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_37_kalong_happy_tszhin_result_dont_talk_result_tension"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把話題推回練習。結果還在很遠的地方，但它的影子已經跟著你們走。"
            },
            "resultText": "你把話題推回練習。結果還在很遠的地方，但它的影子已經跟著你們走。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": -1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_37_competition_tension",
              "variantId": "kalong_happy_tszhin_result",
              "mustMatchEventTitle": "competition 壓力開始影響 NPC 關係"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗",
        "competitionType": "class_relay",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_competitive_peer",
            "npcNameFallback": "梓軒"
          }
        ]
      }
    ]
  },
  {
    "id": "s2_w10_38_result_pending_echo",
    "sourceTopicId": "S2-W10-38",
    "weekPool": "S2-W10_authored_weekly",
    "termId": "term_p1_s2",
    "week": 10,
    "category": "social",
    "title": "結果前回聲：老師提醒、名單未出、班房開始等",
    "sceneIntro": "班際活動做完或練到一段落後，結果還沒有出。老師說要等評分，或者等其他班也完成。班房裡沒有人一直講，卻總有人在小息或放學前提一句：「幾時知？」結果像貼在黑板旁邊的一張看不見的紙，還沒揭開，但大家都知道它在。",
    "metadata": {
      "sourceMarkdown": "info/s2_w7_w12_dialogue_draft_v0_2.md",
      "uiHidden": true,
      "competitionResultPendingEcho": true,
      "doesNotResolveResult": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        10,
        10
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        },
        {
          "type": "classCompetitionStarted",
          "value": true
        },
        {
          "type": "classCompetitionResultPending",
          "value": true
        }
      ],
      "exclusiveGroup": "s2_w10_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "teacher_says_later",
        "variantTitle": "老師說結果遲些公布",
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師收起作品或記錄表，說：「結果唔係今日即刻有，等通知。」家朗小聲嘆氣，梓軒立刻問大概幾時。老師只說很快，沒有給確實日期。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w10_38_teacher_says_later_ask_how_long",
            "text": "問要等多久。",
            "buttonText": "問要等多久。",
            "playerLine": "「要等幾耐？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_38_teacher_says_later_ask_how_long"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師說不會太久。這句話不夠清楚，但你也只能把它放進手冊旁邊。"
            },
            "resultText": "老師說不會太久。這句話不夠清楚，但你也只能把它放進手冊旁邊。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_38_result_pending_echo",
              "variantId": "teacher_says_later",
              "mustMatchEventTitle": "結果前回聲：老師提醒、名單未出、班房開始等"
            }
          },
          {
            "id": "s2_w10_38_teacher_says_later_we_finished",
            "text": "說已經做完。",
            "buttonText": "說已經做完。",
            "playerLine": "「咁我哋做完喇。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_38_teacher_says_later_we_finished"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗點頭，像這句話比結果更快能拿到手。梓軒還想問，但也先坐下。"
            },
            "resultText": "家朗點頭，像這句話比結果更快能拿到手。梓軒還想問，但也先坐下。",
            "statusDelta": {
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_38_result_pending_echo",
              "variantId": "teacher_says_later",
              "mustMatchEventTitle": "結果前回聲：老師提醒、名單未出、班房開始等"
            }
          },
          {
            "id": "s2_w10_38_teacher_says_later_look_at_group",
            "text": "看向同組同學。",
            "buttonText": "看向同組同學。",
            "playerLine": "「……」",
            "playerLineType": "narration",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_38_teacher_says_later_look_at_group"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你看了看他們，大家沒有說一樣的話。做完同一件事後，每個人等結果的樣子也不一樣。"
            },
            "resultText": "你看了看他們，大家沒有說一樣的話。做完同一件事後，每個人等結果的樣子也不一樣。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_38_result_pending_echo",
              "variantId": "teacher_says_later",
              "mustMatchEventTitle": "結果前回聲：老師提醒、名單未出、班房開始等"
            }
          },
          {
            "id": "s2_w10_38_teacher_says_later_ask_prize",
            "text": "問會不會有獎。",
            "buttonText": "問會不會有獎。",
            "playerLine": "「有冇獎㗎？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_38_teacher_says_later_ask_prize"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師說要看評分。梓軒聽得很認真，家朗則把筆轉了一圈，好像不想一直想這件事。"
            },
            "resultText": "老師說要看評分。梓軒聽得很認真，家朗則把筆轉了一圈，好像不想一直想這件事。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_38_result_pending_echo",
              "variantId": "teacher_says_later",
              "mustMatchEventTitle": "結果前回聲：老師提醒、名單未出、班房開始等"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": "pers_fair_observer",
        "npcIdHint": "teacher_fair_observer",
        "npcNameFallback": "老師",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_outgoing_inviter",
            "npcNameFallback": "家朗"
          },
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_competitive_peer",
            "npcNameFallback": "梓軒"
          }
        ]
      },
      {
        "variantId": "npc_asks_at_recess",
        "variantTitle": "NPC 小息追問",
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "小息時，家朗突然問：「你覺得我哋得唔得？」旁邊的另一個組員也停下來。這不是正式宣布，只是等太久時冒出來的一句話。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w10_38_npc_asks_at_recess_should_be_fine",
            "text": "說應該可以。",
            "buttonText": "說應該可以。",
            "playerLine": "「應該得啩。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_38_npc_asks_at_recess_should_be_fine"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "家朗笑了一下，但那個「啩」讓大家都知道你也不確定。等結果的時間沒有少，只是有人一起等。"
            },
            "resultText": "家朗笑了一下，但那個「啩」讓大家都知道你也不確定。等結果的時間沒有少，只是有人一起等。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_38_result_pending_echo",
              "variantId": "npc_asks_at_recess",
              "mustMatchEventTitle": "結果前回聲：老師提醒、名單未出、班房開始等"
            }
          },
          {
            "id": "s2_w10_38_npc_asks_at_recess_dont_know",
            "text": "說不知道。",
            "buttonText": "說不知道。",
            "playerLine": "「我唔知呀。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_38_npc_asks_at_recess_dont_know"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "對方沒有怪你。因為真的沒有人知道，這句反而很像現在最正確的答案。"
            },
            "resultText": "對方沒有怪你。因為真的沒有人知道，這句反而很像現在最正確的答案。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 0
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_38_result_pending_echo",
              "variantId": "npc_asks_at_recess",
              "mustMatchEventTitle": "結果前回聲：老師提醒、名單未出、班房開始等"
            }
          },
          {
            "id": "s2_w10_38_npc_asks_at_recess_ask_him",
            "text": "問他覺得如何。",
            "buttonText": "問他覺得如何。",
            "playerLine": "「咁你覺得呢？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_38_npc_asks_at_recess_ask_him"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "家朗說他覺得有機會，另一個同學說要看其他班。兩個答案把希望拉得一高一低。"
            },
            "resultText": "家朗說他覺得有機會，另一個同學說要看其他班。兩個答案把希望拉得一高一低。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_38_result_pending_echo",
              "variantId": "npc_asks_at_recess",
              "mustMatchEventTitle": "結果前回聲：老師提醒、名單未出、班房開始等"
            }
          },
          {
            "id": "s2_w10_38_npc_asks_at_recess_dont_talk",
            "text": "不想再講。",
            "buttonText": "不想再講。",
            "playerLine": "「唔好講住啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_38_npc_asks_at_recess_dont_talk"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗把話收住，轉去飲水。結果沒有被忘記，只是暫時不在嘴邊。"
            },
            "resultText": "家朗把話收住，轉去飲水。結果沒有被忘記，只是暫時不在嘴邊。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": -1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_38_result_pending_echo",
              "variantId": "npc_asks_at_recess",
              "mustMatchEventTitle": "結果前回聲：老師提醒、名單未出、班房開始等"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗"
      },
      {
        "variantId": "tszhin_replays_details",
        "variantTitle": "梓軒反覆看細節",
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "梓軒一直回想哪裡做得不夠好：「我哋嗰下係咪慢咗？」家朗說已經做完，柏宇說可能評分老師沒有看到那一下。梓軒沒有立刻放鬆，手指一直敲桌面。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w10_38_tszhin_replays_details_cant_change",
            "text": "說已經改不了。",
            "buttonText": "說已經改不了。",
            "playerLine": "「而家改唔到喇。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_38_tszhin_replays_details_cant_change"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒聽見後停了一下，像不太喜歡這句，但手指終於沒有敲那麼快。"
            },
            "resultText": "梓軒聽見後停了一下，像不太喜歡這句，但手指終於沒有敲那麼快。",
            "statusDelta": {
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "misunderstanding",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_38_result_pending_echo",
              "variantId": "tszhin_replays_details",
              "mustMatchEventTitle": "結果前回聲：老師提醒、名單未出、班房開始等"
            }
          },
          {
            "id": "s2_w10_38_tszhin_replays_details_think_with_him",
            "text": "陪他想一次。",
            "buttonText": "陪他想一次。",
            "playerLine": "「嗰下係快少少。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_38_tszhin_replays_details_think_with_him"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒立刻點頭，家朗皺眉說不要一直講。你陪他看見問題，也看見其他人有點累。"
            },
            "resultText": "梓軒立刻點頭，家朗皺眉說不要一直講。你陪他看見問題，也看見其他人有點累。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_38_result_pending_echo",
              "variantId": "tszhin_replays_details",
              "mustMatchEventTitle": "結果前回聲：老師提醒、名單未出、班房開始等"
            }
          },
          {
            "id": "s2_w10_38_tszhin_replays_details_drink_water",
            "text": "叫他喝水。",
            "buttonText": "叫他喝水。",
            "playerLine": "「你飲啖水啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_38_tszhin_replays_details_drink_water"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒愣住，像沒想到答案可以是喝水。水樽拿起來後，他的手終於離開桌面。"
            },
            "resultText": "梓軒愣住，像沒想到答案可以是喝水。水樽拿起來後，他的手終於離開桌面。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_38_result_pending_echo",
              "variantId": "tszhin_replays_details",
              "mustMatchEventTitle": "結果前回聲：老師提醒、名單未出、班房開始等"
            }
          },
          {
            "id": "s2_w10_38_tszhin_replays_details_not_join",
            "text": "不加入。",
            "buttonText": "不加入。",
            "playerLine": "「……」",
            "playerLineType": "narration",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_38_tszhin_replays_details_not_join"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒繼續想，家朗轉去別邊。你沒有選邊，但空氣裡的敲桌聲留了下來。"
            },
            "resultText": "梓軒繼續想，家朗轉去別邊。你沒有選邊，但空氣裡的敲桌聲留了下來。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": -1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_38_result_pending_echo",
              "variantId": "tszhin_replays_details",
              "mustMatchEventTitle": "結果前回聲：老師提醒、名單未出、班房開始等"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_competitive_peer",
        "npcIdHint": "classmate_competitive_peer",
        "npcNameFallback": "梓軒",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_outgoing_inviter",
            "npcNameFallback": "家朗"
          },
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_mischief_maker",
            "npcNameFallback": "柏宇"
          }
        ]
      },
      {
        "variantId": "wingsam_files_away",
        "variantTitle": "穎心把作品／記錄收好",
        "openingDialogue": [
          {
            "speaker": "穎心",
            "text": "穎心把剩下的草稿、停頓記號或記錄表夾好，說：「等結果都要收好。」柏宇想再看一次角落圖案，家朗說反正老師已經收了。穎心還是把自己的那份摺平。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w10_38_wingsam_files_away_help_hold",
            "text": "幫她夾好。",
            "buttonText": "幫她夾好。",
            "playerLine": "「我幫你按住。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_38_wingsam_files_away_help_hold"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "穎心",
              "text": "你按住紙角，穎心把夾子扣上。結果還未出，但你們先把做過的痕跡收好。"
            },
            "resultText": "你按住紙角，穎心把夾子扣上。結果還未出，但你們先把做過的痕跡收好。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_38_result_pending_echo",
              "variantId": "wingsam_files_away",
              "mustMatchEventTitle": "結果前回聲：老師提醒、名單未出、班房開始等"
            }
          },
          {
            "id": "s2_w10_38_wingsam_files_away_keep_draft",
            "text": "問要不要留草稿。",
            "buttonText": "問要不要留草稿。",
            "playerLine": "「草稿都要留？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_38_wingsam_files_away_keep_draft"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "穎心",
              "text": "穎心說可能以後會看。你不知道會不會真的看，但那張草稿沒有立刻被丟掉。"
            },
            "resultText": "穎心說可能以後會看。你不知道會不會真的看，但那張草稿沒有立刻被丟掉。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_38_result_pending_echo",
              "variantId": "wingsam_files_away",
              "mustMatchEventTitle": "結果前回聲：老師提醒、名單未出、班房開始等"
            }
          },
          {
            "id": "s2_w10_38_wingsam_files_away_want_to_know",
            "text": "說想知道結果。",
            "buttonText": "說想知道結果。",
            "playerLine": "「我想快啲知。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_38_wingsam_files_away_want_to_know"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心點頭，手裡的紙卻還是慢慢夾。她的等，跟你的等，不太一樣。"
            },
            "resultText": "穎心點頭，手裡的紙卻還是慢慢夾。她的等，跟你的等，不太一樣。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_38_result_pending_echo",
              "variantId": "wingsam_files_away",
              "mustMatchEventTitle": "結果前回聲：老師提醒、名單未出、班房開始等"
            }
          },
          {
            "id": "s2_w10_38_wingsam_files_away_let_pakyu_look",
            "text": "讓柏宇再看。",
            "buttonText": "讓柏宇再看。",
            "playerLine": "「俾佢睇多陣啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w10_38_wingsam_files_away_let_pakyu_look"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "柏宇",
              "text": "穎心把紙攤開一點，柏宇立刻找角落。小小的圖案又露出來，像結果前的一點回聲。"
            },
            "resultText": "穎心把紙攤開一點，柏宇立刻找角落。小小的圖案又露出來，像結果前的一點回聲。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "secondaryNpc",
                "personalityId": "pers_mischief_maker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w10_38_result_pending_echo",
              "variantId": "wingsam_files_away",
              "mustMatchEventTitle": "結果前回聲：老師提醒、名單未出、班房開始等"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_quiet_observer",
        "npcIdHint": "classmate_quiet_observer",
        "npcNameFallback": "穎心",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_mischief_maker",
            "npcNameFallback": "柏宇"
          },
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_outgoing_inviter",
            "npcNameFallback": "家朗"
          }
        ]
      }
    ]
  },
  {
    "id": "s2_w11_39_exam_revision_sheet",
    "sourceTopicId": "S2-W11-39",
    "weekPool": "S2-W11_authored_weekly",
    "termId": "term_p1_s2",
    "week": 11,
    "category": "academic",
    "title": "期末考範圍／溫習紙",
    "sceneIntro": "老師把期末考範圍紙派下來時，班房的聲音忽然變小。紙上有日期、科目和一行行要溫習的內容。你看著那些字，覺得它不像平日一張工作紙，而像把六月慢慢推到你面前。有人立刻圈日期，有人把紙塞進手冊，有人問會不會很難。",
    "metadata": {
      "sourceMarkdown": "info/s2_w7_w12_dialogue_draft_v0_2.md",
      "uiHidden": true,
      "propertyValidation": {
        "purpose": "natural_scene_branching_only",
        "ordinaryVersionAlwaysAvailable": true,
        "hideLockedChoices": true
      },
      "propertyContext": "finalExamRevisionRange",
      "basicSkillsPressureCue": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        11,
        11
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w11_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "teacher_goes_through_range",
        "variantTitle": "老師逐項講範圍",
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師拿著範圍紙說：「唔使一次驚晒，今日先圈日期，再睇每科要溫咩。」她用粉筆在黑板寫「中文、英文、數學、常識」，每寫一個字，班房就安靜一點。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w11_39_teacher_goes_through_range_circle_date",
            "text": "先圈日期。",
            "buttonText": "先圈日期。",
            "playerLine": "「我圈日期先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_39_teacher_goes_through_range_circle_date"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把考試日期圈起來，紅圈很小，但那天忽然在紙上跳出來。"
            },
            "resultText": "你把考試日期圈起來，紅圈很小，但那天忽然在紙上跳出來。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_39_exam_revision_sheet",
              "variantId": "teacher_goes_through_range",
              "mustMatchEventTitle": "期末考範圍／溫習紙"
            },
            "validate": {
              "softCheck": true,
              "stats": {
                "學業": 35,
                "理智值": 30
              },
              "passMemoryTag": "s2_w11_39_teacher_goes_through_range_circle_date_soft_pass",
              "weakMemoryTag": "s2_w11_39_teacher_goes_through_range_circle_date_soft_weak",
              "passResultText": "你把考試日期圈起來，紅圈很小，但那天忽然在紙上跳出來。",
              "weakResultText": "你看著那張紙，心裡有點亂。你沒有一下子變得很穩，只是先抓住其中一小格，讓自己不用整張紙一起害怕。"
            }
          },
          {
            "id": "s2_w11_39_teacher_goes_through_range_is_it_a_lot",
            "text": "問是不是很多。",
            "buttonText": "問是不是很多。",
            "playerLine": "「係咪好多？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_39_teacher_goes_through_range_is_it_a_lot"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師說一項一項來。這句沒有讓範圍變少，但至少它被切成幾塊。"
            },
            "resultText": "老師說一項一項來。這句沒有讓範圍變少，但至少它被切成幾塊。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_39_exam_revision_sheet",
              "variantId": "teacher_goes_through_range",
              "mustMatchEventTitle": "期末考範圍／溫習紙"
            }
          },
          {
            "id": "s2_w11_39_teacher_goes_through_range_file_it",
            "text": "把紙夾進手冊。",
            "buttonText": "把紙夾進手冊。",
            "playerLine": "「我夾好先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_39_teacher_goes_through_range_file_it"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "紙被夾住後不會飛走。可是你知道它不是被收起來就消失，而是會跟你回家。"
            },
            "resultText": "紙被夾住後不會飛走。可是你知道它不是被收起來就消失，而是會跟你回家。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_39_exam_revision_sheet",
              "variantId": "teacher_goes_through_range",
              "mustMatchEventTitle": "期末考範圍／溫習紙"
            }
          },
          {
            "id": "s2_w11_39_teacher_goes_through_range_look_at_classmates",
            "text": "望向同學。",
            "buttonText": "望向同學。",
            "playerLine": "「……」",
            "playerLineType": "narration",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_39_teacher_goes_through_range_look_at_classmates"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你看見家朗皺眉，穎心低頭圈字，梓軒已經問下一項。每個人都有自己的緊張樣子。"
            },
            "resultText": "你看見家朗皺眉，穎心低頭圈字，梓軒已經問下一項。每個人都有自己的緊張樣子。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_39_exam_revision_sheet",
              "variantId": "teacher_goes_through_range",
              "mustMatchEventTitle": "期末考範圍／溫習紙"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": "pers_strict_academic",
        "npcIdHint": "teacher_strict_academic",
        "npcNameFallback": "老師",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_outgoing_inviter",
            "npcNameFallback": "家朗"
          },
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_quiet_observer",
            "npcNameFallback": "穎心"
          },
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_competitive_peer",
            "npcNameFallback": "梓軒"
          }
        ]
      },
      {
        "variantId": "tszhin_asks_score",
        "variantTitle": "梓軒問分數",
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "梓軒一拿到範圍紙就問：「今次計唔計好多分？」老師說要認真，但不要只想分數。梓軒坐下時還在看那張紙，像想從紙上找出一個保證。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w11_39_tszhin_asks_score_ask_scared",
            "text": "問他怕不怕。",
            "buttonText": "問他怕不怕。",
            "playerLine": "「你驚呀？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_39_tszhin_asks_score_ask_scared"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒立刻說不是驚，是想知清楚。你聽見他的聲音比平日低一點，知道那兩個字也許差不多。"
            },
            "resultText": "梓軒立刻說不是驚，是想知清楚。你聽見他的聲音比平日低一點，知道那兩個字也許差不多。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_39_exam_revision_sheet",
              "variantId": "tszhin_asks_score",
              "mustMatchEventTitle": "期末考範圍／溫習紙"
            },
            "validate": {
              "softCheck": true,
              "stats": {
                "自信": 35,
                "理智值": 30
              },
              "passMemoryTag": "s2_w11_39_exam_pressure_stable",
              "weakMemoryTag": "s2_w11_39_exam_pressure_nervous",
              "passResultText": "梓軒立刻說不是驚，是想知清楚。你聽見他的聲音比平日低一點，但都算穩，你陪佢一齊睇返範圍紙，把「今次計唔計分」慢慢放低。",
              "weakResultText": "梓軒立刻說不是驚，是想知清楚，但佢手指一直喺範圍紙邊度戳。你自己都有啲頂唔順，靜靜哋冇再問落去，只係坐喺度睇住張紙。"
            }
          },
          {
            "id": "s2_w11_39_tszhin_asks_score_one_page_first",
            "text": "說先溫一頁。",
            "buttonText": "說先溫一頁。",
            "playerLine": "「先睇一頁啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_39_tszhin_asks_score_one_page_first"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒看你一眼，沒有反駁。範圍還是很多，但你們先把第一頁拉近。"
            },
            "resultText": "梓軒看你一眼，沒有反駁。範圍還是很多，但你們先把第一頁拉近。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_39_exam_revision_sheet",
              "variantId": "tszhin_asks_score",
              "mustMatchEventTitle": "期末考範圍／溫習紙"
            }
          },
          {
            "id": "s2_w11_39_tszhin_asks_score_dont_talk_score",
            "text": "不講分數。",
            "buttonText": "不講分數。",
            "playerLine": "「我唔想講分。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_39_tszhin_asks_score_dont_talk_score"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒有點不明白，但沒有追問。你把範圍紙翻過去，讓分數暫時看不見。"
            },
            "resultText": "梓軒有點不明白，但沒有追問。你把範圍紙翻過去，讓分數暫時看不見。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "misunderstanding",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_39_exam_revision_sheet",
              "variantId": "tszhin_asks_score",
              "mustMatchEventTitle": "期末考範圍／溫習紙"
            }
          },
          {
            "id": "s2_w11_39_tszhin_asks_score_ask_teacher_how",
            "text": "問老師點溫。",
            "buttonText": "問老師點溫。",
            "playerLine": "「老師，點溫呀？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_39_tszhin_asks_score_ask_teacher_how"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師說每天一點，不要最後一晚。梓軒也抬頭聽，像這句不是只給你。"
            },
            "resultText": "老師說每天一點，不要最後一晚。梓軒也抬頭聽，像這句不是只給你。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_39_exam_revision_sheet",
              "variantId": "tszhin_asks_score",
              "mustMatchEventTitle": "期末考範圍／溫習紙"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_competitive_peer",
        "npcIdHint": "classmate_competitive_peer",
        "npcNameFallback": "梓軒"
      },
      {
        "variantId": "wingsam_organizes_sheet",
        "variantTitle": "穎心整理溫習紙",
        "openingDialogue": [
          {
            "speaker": "穎心",
            "text": "穎心把範圍紙對摺，又打開，用鉛筆在科目旁邊畫小點。家朗問她畫甚麼，她說：「記住邊啲要睇。」家朗看了一眼，像覺得很細，但也沒有笑。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w11_39_wingsam_organizes_sheet_ask_how",
            "text": "問她怎樣分。",
            "buttonText": "問她怎樣分。",
            "playerLine": "「你點分㗎？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_39_wingsam_organizes_sheet_ask_how"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "穎心",
              "text": "穎心把小點指給你看，一點是一頁。她沒有說自己很會整理，只是讓紙看起來沒那麼大片。"
            },
            "resultText": "穎心把小點指給你看，一點是一頁。她沒有說自己很會整理，只是讓紙看起來沒那麼大片。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_39_exam_revision_sheet",
              "variantId": "wingsam_organizes_sheet",
              "mustMatchEventTitle": "期末考範圍／溫習紙"
            }
          },
          {
            "id": "s2_w11_39_wingsam_organizes_sheet_draw_along",
            "text": "跟著畫小點。",
            "buttonText": "跟著畫小點。",
            "playerLine": "「我都畫。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_39_wingsam_organizes_sheet_draw_along"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你在自己的紙上畫點，有些點畫得歪。穎心沒有改你，只說看得到就可以。"
            },
            "resultText": "你在自己的紙上畫點，有些點畫得歪。穎心沒有改你，只說看得到就可以。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_39_exam_revision_sheet",
              "variantId": "wingsam_organizes_sheet",
              "mustMatchEventTitle": "期末考範圍／溫習紙"
            },
            "validate": {
              "softCheck": true,
              "stats": {
                "創意": 35,
                "體力": 25
              },
              "passMemoryTag": "s2_w11_39_wingsam_organizes_sheet_draw_along_soft_pass",
              "weakMemoryTag": "s2_w11_39_wingsam_organizes_sheet_draw_along_soft_weak",
              "passResultText": "你在自己的紙上畫點，有些點畫得歪。穎心沒有改你，只說看得到就可以。",
              "weakResultText": "你做到中間慢了一點，紙邊也有些歪，但你沒有把手縮回來。大家等一等，把這一小步接住，事情仍然完成了。"
            }
          },
          {
            "id": "s2_w11_39_wingsam_organizes_sheet_dont_understand",
            "text": "說我看不明。",
            "buttonText": "說我看不明。",
            "playerLine": "「我睇唔明。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_39_wingsam_organizes_sheet_dont_understand"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "穎心",
              "text": "穎心把紙轉向你，慢慢指一次。她的聲音不大，但比整張範圍紙近很多。"
            },
            "resultText": "穎心把紙轉向你，慢慢指一次。她的聲音不大，但比整張範圍紙近很多。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 2
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_39_exam_revision_sheet",
              "variantId": "wingsam_organizes_sheet",
              "mustMatchEventTitle": "期末考範圍／溫習紙"
            }
          },
          {
            "id": "s2_w11_39_wingsam_organizes_sheet_dont_want",
            "text": "不想整理。",
            "buttonText": "不想整理。",
            "playerLine": "「我返屋企先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_39_wingsam_organizes_sheet_dont_want"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心點點頭，把自己的紙夾好。你沒有現在開始，但看見了另一種開始的方法。"
            },
            "resultText": "穎心點點頭，把自己的紙夾好。你沒有現在開始，但看見了另一種開始的方法。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_39_exam_revision_sheet",
              "variantId": "wingsam_organizes_sheet",
              "mustMatchEventTitle": "期末考範圍／溫習紙"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_quiet_observer",
        "npcIdHint": "classmate_quiet_observer",
        "npcNameFallback": "穎心",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_outgoing_inviter",
            "npcNameFallback": "家朗"
          }
        ]
      },
      {
        "variantId": "kalong_exam_as_levels",
        "variantTitle": "家朗把考試講成關卡",
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "家朗看著範圍紙，小聲說：「好似好多關。」柏宇立刻說：「咁最後有大魔王。」老師在前面咳了一聲，他們兩個馬上收聲。你看著紙，覺得那幾科真的像幾扇門。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w11_39_kalong_exam_as_levels_pass_first",
            "text": "說先過第一關。",
            "buttonText": "說先過第一關。",
            "playerLine": "「先過第一關啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_39_kalong_exam_as_levels_pass_first"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "家朗立刻點頭，柏宇說第一關可能是默書怪。紙上的科目被你們講得有點好笑，卻也比較容易看。"
            },
            "resultText": "家朗立刻點頭，柏宇說第一關可能是默書怪。紙上的科目被你們講得有點好笑，卻也比較容易看。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_39_exam_revision_sheet",
              "variantId": "kalong_exam_as_levels",
              "mustMatchEventTitle": "期末考範圍／溫習紙"
            }
          },
          {
            "id": "s2_w11_39_kalong_exam_as_levels_quiet_down",
            "text": "提醒不要太大聲。",
            "buttonText": "提醒不要太大聲。",
            "playerLine": "「細聲啲啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_39_kalong_exam_as_levels_quiet_down"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗把嘴巴收細，柏宇也把魔王畫到紙角。老師沒有再望過來，你們的關卡還在但變小聲了。"
            },
            "resultText": "家朗把嘴巴收細，柏宇也把魔王畫到紙角。老師沒有再望過來，你們的關卡還在但變小聲了。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_39_exam_revision_sheet",
              "variantId": "kalong_exam_as_levels",
              "mustMatchEventTitle": "期末考範圍／溫習紙"
            }
          },
          {
            "id": "s2_w11_39_kalong_exam_as_levels_dont_want_fight",
            "text": "說我不想打怪。",
            "buttonText": "說我不想打怪。",
            "playerLine": "「我唔想打怪。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_39_kalong_exam_as_levels_dont_want_fight"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "家朗說可以慢慢打，柏宇說也可以繞路。你不知道考試能不能繞路，但這句讓你笑了一下。"
            },
            "resultText": "家朗說可以慢慢打，柏宇說也可以繞路。你不知道考試能不能繞路，但這句讓你笑了一下。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_39_exam_revision_sheet",
              "variantId": "kalong_exam_as_levels",
              "mustMatchEventTitle": "期末考範圍／溫習紙"
            }
          },
          {
            "id": "s2_w11_39_kalong_exam_as_levels_just_look",
            "text": "只看範圍紙。",
            "buttonText": "只看範圍紙。",
            "playerLine": "「……」",
            "playerLineType": "narration",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_39_kalong_exam_as_levels_just_look"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有加入他們的說法。紙還是紙，但旁邊的低聲笑讓它不像剛才那麼冷。"
            },
            "resultText": "你沒有加入他們的說法。紙還是紙，但旁邊的低聲笑讓它不像剛才那麼冷。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_39_exam_revision_sheet",
              "variantId": "kalong_exam_as_levels",
              "mustMatchEventTitle": "期末考範圍／溫習紙"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_mischief_maker",
            "npcNameFallback": "柏宇"
          }
        ]
      }
    ]
  },
  {
    "id": "s2_w11_41_family_summer_planning",
    "sourceTopicId": "S2-W11-41",
    "weekPool": "S2-W11_authored_weekly",
    "termId": "term_p1_s2",
    "week": 11,
    "category": "family",
    "title": "家人看手冊，開始問暑假安排",
    "sceneIntro": "晚上，家人翻手冊時看到期末考日期和學校通告。飯桌上還有碗筷聲，電視在旁邊低低地響。你本來以為考試只是班房裡的事，現在它被帶回家，跟暑假、補習、旅行、興趣班和睡覺時間放在同一張桌上。",
    "metadata": {
      "sourceMarkdown": "info/s2_w7_w12_dialogue_draft_v0_2.md",
      "uiHidden": true,
      "summerPlanningSeed": true,
      "basicSkillsPressureCue": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        11,
        11
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w11_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "family_circles_dates",
        "variantTitle": "家人圈考試日期",
        "openingDialogue": [
          {
            "speaker": "媽媽",
            "text": "家人拿著筆，在月曆上圈起幾天：「呢幾日要早啲瞓。」你看見紅圈一個個落在日曆上，像有人把六月的幾格框了起來。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w11_41_family_circles_dates_ask_no_play",
            "text": "問不能玩嗎。",
            "buttonText": "問不能玩嗎。",
            "playerLine": "「嗰幾日唔玩？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_41_family_circles_dates_ask_no_play"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "媽媽",
              "text": "家人說不是完全不能玩，但要先溫習。你聽見「先」字，就知道玩被推到後面。"
            },
            "resultText": "家人說不是完全不能玩，但要先溫習。你聽見「先」字，就知道玩被推到後面。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_41_family_summer_planning",
              "variantId": "family_circles_dates",
              "mustMatchEventTitle": "家人看手冊，開始問暑假安排"
            }
          },
          {
            "id": "s2_w11_41_family_circles_dates_i_know",
            "text": "說我知道。",
            "buttonText": "說我知道。",
            "playerLine": "「我知。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_41_family_circles_dates_i_know"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你答得很快，家人看了你一眼，又叫你真的要記得。知道和做到中間，還隔著很多晚。"
            },
            "resultText": "你答得很快，家人看了你一眼，又叫你真的要記得。知道和做到中間，還隔著很多晚。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_41_family_summer_planning",
              "variantId": "family_circles_dates",
              "mustMatchEventTitle": "家人看手冊，開始問暑假安排"
            }
          },
          {
            "id": "s2_w11_41_family_circles_dates_look_at_calendar",
            "text": "看日曆。",
            "buttonText": "看日曆。",
            "playerLine": "「……」",
            "playerLineType": "narration",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_41_family_circles_dates_look_at_calendar"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你數紅圈之間有幾格空白，數到一半又亂了。日曆比手冊大，但壓力也像大一點。"
            },
            "resultText": "你數紅圈之間有幾格空白，數到一半又亂了。日曆比手冊大，但壓力也像大一點。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_41_family_summer_planning",
              "variantId": "family_circles_dates",
              "mustMatchEventTitle": "家人看手冊，開始問暑假安排"
            }
          },
          {
            "id": "s2_w11_41_family_circles_dates_ask_summer",
            "text": "問暑假呢。",
            "buttonText": "問暑假呢。",
            "playerLine": "「暑假係咪就玩？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_41_family_circles_dates_ask_summer"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "媽媽",
              "text": "家人說要看考完怎樣。暑假本來很遠很亮，忽然也被考試的影子碰了一下。"
            },
            "resultText": "家人說要看考完怎樣。暑假本來很遠很亮，忽然也被考試的影子碰了一下。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_41_family_summer_planning",
              "variantId": "family_circles_dates",
              "mustMatchEventTitle": "家人看手冊，開始問暑假安排"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "family_parent",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "family_asks_tutoring",
        "variantTitle": "家人問暑假補習或活動",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "家人一邊收碗一邊說：「暑假可能要安排啲嘢，唔好成日喺屋企。」另一個家人問：「要唔要補返啲弱嘅？」你拿著筷子，聽見「補」字時手停了一下。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w11_41_family_asks_tutoring_ask_what_tutor",
            "text": "問補甚麼。",
            "buttonText": "問補甚麼。",
            "playerLine": "「補咩呀？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_41_family_asks_tutoring_ask_what_tutor"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說看成績和老師意見。你不知道老師會說甚麼，只覺得學校好像也會走進暑假。"
            },
            "resultText": "家人說看成績和老師意見。你不知道老師會說甚麼，只覺得學校好像也會走進暑假。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_41_family_summer_planning",
              "variantId": "family_asks_tutoring",
              "mustMatchEventTitle": "家人看手冊，開始問暑假安排"
            }
          },
          {
            "id": "s2_w11_41_family_asks_tutoring_want_to_play",
            "text": "說想玩。",
            "buttonText": "說想玩。",
            "playerLine": "「我想玩多啲。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_41_family_asks_tutoring_want_to_play"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說會有得玩，但也要安排時間。你不太喜歡這個答案，因為它像每樣都可以有一點，卻沒有一樣完全屬於你。"
            },
            "resultText": "家人說會有得玩，但也要安排時間。你不太喜歡這個答案，因為它像每樣都可以有一點，卻沒有一樣完全屬於你。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "misunderstanding",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_41_family_summer_planning",
              "variantId": "family_asks_tutoring",
              "mustMatchEventTitle": "家人看手冊，開始問暑假安排"
            }
          },
          {
            "id": "s2_w11_41_family_asks_tutoring_ask_hobby_class",
            "text": "問可不可以上興趣班。",
            "buttonText": "問可不可以上興趣班。",
            "playerLine": "「可以上興趣班嗎？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_41_family_asks_tutoring_ask_hobby_class"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說要看時間和錢。興趣班突然不只是想不想，還要跟日曆和荷包一起坐下來。"
            },
            "resultText": "家人說要看時間和錢。興趣班突然不只是想不想，還要跟日曆和荷包一起坐下來。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_41_family_summer_planning",
              "variantId": "family_asks_tutoring",
              "mustMatchEventTitle": "家人看手冊，開始問暑假安排"
            }
          },
          {
            "id": "s2_w11_41_family_asks_tutoring_stay_quiet",
            "text": "不出聲吃飯。",
            "buttonText": "不出聲吃飯。",
            "playerLine": "「……」",
            "playerLineType": "narration",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_41_family_asks_tutoring_stay_quiet"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你低頭吃飯，聽見大人把暑假講成很多格。飯還是熱的，但那個假期好像沒有想像中空。"
            },
            "resultText": "你低頭吃飯，聽見大人把暑假講成很多格。飯還是熱的，但那個假期好像沒有想像中空。",
            "statusDelta": {
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": -1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_41_family_summer_planning",
              "variantId": "family_asks_tutoring",
              "mustMatchEventTitle": "家人看手冊，開始問暑假安排"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "family_parent",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "family_checks_corrections",
        "variantTitle": "家人看改正和手冊簽名",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "家人翻到手冊簽名位，又看到幾頁改正：「呢啲要補齊。」你想說老師已經看過，但家人把簿放到你面前，手指停在紅筆旁邊。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w11_41_family_checks_corrections_will_fix",
            "text": "說我會補。",
            "buttonText": "說我會補。",
            "playerLine": "「我會補返。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_41_family_checks_corrections_will_fix"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人把簿推近一點，沒有再罵。紅筆還在，但旁邊多了一個可以開始的空位。"
            },
            "resultText": "家人把簿推近一點，沒有再罵。紅筆還在，但旁邊多了一個可以開始的空位。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_41_family_summer_planning",
              "variantId": "family_checks_corrections",
              "mustMatchEventTitle": "家人看手冊，開始問暑假安排"
            }
          },
          {
            "id": "s2_w11_41_family_checks_corrections_tomorrow",
            "text": "問可不可以明天。",
            "buttonText": "問可不可以明天。",
            "playerLine": "「聽日先得唔得？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_41_family_checks_corrections_tomorrow"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人問你明天幾時。你發現「明天」不是一個洞，不能甚麼都丟進去。"
            },
            "resultText": "家人問你明天幾時。你發現「明天」不是一個洞，不能甚麼都丟進去。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "misunderstanding",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_41_family_summer_planning",
              "variantId": "family_checks_corrections",
              "mustMatchEventTitle": "家人看手冊，開始問暑假安排"
            }
          },
          {
            "id": "s2_w11_41_family_checks_corrections_fix_one",
            "text": "先改一題。",
            "buttonText": "先改一題。",
            "playerLine": "「我改一題先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_41_family_checks_corrections_fix_one"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你拿起鉛筆，先改最上面那題。家人沒有說這樣就夠，只說繼續。"
            },
            "resultText": "你拿起鉛筆，先改最上面那題。家人沒有說這樣就夠，只說繼續。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_41_family_summer_planning",
              "variantId": "family_checks_corrections",
              "mustMatchEventTitle": "家人看手冊，開始問暑假安排"
            }
          },
          {
            "id": "s2_w11_41_family_checks_corrections_annoying",
            "text": "覺得很煩。",
            "buttonText": "覺得很煩。",
            "playerLine": "「好煩呀。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_41_family_checks_corrections_annoying"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人沉默了一下，說煩都要做少少。那句不溫柔，但也沒有把整本簿丟到你面前。"
            },
            "resultText": "家人沉默了一下，說煩都要做少少。那句不溫柔，但也沒有把整本簿丟到你面前。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "misunderstanding",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_41_family_summer_planning",
              "variantId": "family_checks_corrections",
              "mustMatchEventTitle": "家人看手冊，開始問暑假安排"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "family_parent",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "summer_freedom_limited",
        "variantTitle": "暑假自由被輕輕限制",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "家人說考試前和暑假頭幾天要看情況，如果成績不穩，可能要先溫習或補課。你聽見「可能」兩個字，卻覺得它已經開始靠近你的暑假。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w11_41_summer_freedom_limited_cant_go_out",
            "text": "問是不是不能出去。",
            "buttonText": "問是不是不能出去。",
            "playerLine": "「係咪唔可以出去？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_41_summer_freedom_limited_cant_go_out"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說不是完全不能，只是要先安排好。你知道「完全」沒有被拿走，但「先」又回來了。"
            },
            "resultText": "家人說不是完全不能，只是要先安排好。你知道「完全」沒有被拿走，但「先」又回來了。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_41_family_summer_planning",
              "variantId": "summer_freedom_limited",
              "mustMatchEventTitle": "家人看手冊，開始問暑假安排"
            }
          },
          {
            "id": "s2_w11_41_summer_freedom_limited_will_try",
            "text": "說我會努力。",
            "buttonText": "說我會努力。",
            "playerLine": "「我會努力。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_41_summer_freedom_limited_will_try"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人點頭，叫你不是講就算。你把這句收下，雖然還不知道努力要長甚麼樣。"
            },
            "resultText": "家人點頭，叫你不是講就算。你把這句收下，雖然還不知道努力要長甚麼樣。",
            "statusDelta": {
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_41_family_summer_planning",
              "variantId": "summer_freedom_limited",
              "mustMatchEventTitle": "家人看手冊，開始問暑假安排"
            }
          },
          {
            "id": "s2_w11_41_summer_freedom_limited_ask_neighbor",
            "text": "問可不可以還見鄰居。",
            "buttonText": "問可不可以還見鄰居。",
            "playerLine": "「咁可唔可以落樓下？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_41_summer_freedom_limited_ask_neighbor"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說看時間。樓下平台沒有被關上，只是門口多了一個要先完成的事情。"
            },
            "resultText": "家人說看時間。樓下平台沒有被關上，只是門口多了一個要先完成的事情。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_41_family_summer_planning",
              "variantId": "summer_freedom_limited",
              "mustMatchEventTitle": "家人看手冊，開始問暑假安排"
            }
          },
          {
            "id": "s2_w11_41_summer_freedom_limited_dont_want_hear",
            "text": "不想聽。",
            "buttonText": "不想聽。",
            "playerLine": "「我唔想講呢個。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_41_summer_freedom_limited_dont_want_hear"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人沒有繼續逼你說，但手冊還攤在桌上。你避開話題，卻避不開那幾個紅圈。"
            },
            "resultText": "家人沒有繼續逼你說，但手冊還攤在桌上。你避開話題，卻避不開那幾個紅圈。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "misunderstanding",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_41_family_summer_planning",
              "variantId": "summer_freedom_limited",
              "mustMatchEventTitle": "家人看手冊，開始問暑假安排"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "family_parent",
        "npcNameFallback": "家人"
      }
    ]
  },
  {
    "id": "s2_w11_42_pre_exam_ambient",
    "sourceTopicId": "S2-W11-42",
    "weekPool": "S2-W11_authored_weekly",
    "termId": "term_p1_s2",
    "week": 11,
    "category": "school_life",
    "title": "期末前班房聲音：competition 回聲、考試紙和小小壓力",
    "sceneIntro": "五月下旬，班房裡同時有很多事情的回聲：期末考、升 P2、還未公布或剛完成的班際活動、暑假安排。沒有一件事大到把全部課堂佔滿，但每一件都會在小息、收簿、排隊或放學前冒出來一下。你覺得自己還是小一，可是大家講的東西已經比開學時重了一點。",
    "metadata": {
      "sourceMarkdown": "info/s2_w7_w12_dialogue_draft_v0_2.md",
      "uiHidden": true,
      "examPressureAmbientEvent": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        11,
        11
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w11_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "recess_asks_result",
        "variantTitle": "小息時有人問比賽結果",
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "如果班際結果還未出，小息時家朗又問：「係咪今日會知？」梓軒說他不想再等，穎心則把筆蓋蓋好，說老師會講。你拿著水樽站在旁邊，感覺大家都在等不同東西。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w11_42_recess_asks_result_wait_teacher",
            "text": "說等老師講。",
            "buttonText": "說等老師講。",
            "playerLine": "「等老師講啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_42_recess_asks_result_wait_teacher"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗嘆一聲，梓軒看了看講台。等待沒有變短，但至少不用一直猜。"
            },
            "resultText": "家朗嘆一聲，梓軒看了看講台。等待沒有變短，但至少不用一直猜。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_42_pre_exam_ambient",
              "variantId": "recess_asks_result",
              "mustMatchEventTitle": "期末前班房聲音：competition 回聲、考試紙和小小壓力"
            }
          },
          {
            "id": "s2_w11_42_recess_asks_result_what_if_lose",
            "text": "問如果輸了呢。",
            "buttonText": "問如果輸了呢。",
            "playerLine": "「輸咗點算？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_42_recess_asks_result_what_if_lose"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "家朗說下次再試，梓軒沒有馬上接話。那個「下次」很遠，卻比空白好一點。"
            },
            "resultText": "家朗說下次再試，梓軒沒有馬上接話。那個「下次」很遠，卻比空白好一點。",
            "statusDelta": {
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_42_pre_exam_ambient",
              "variantId": "recess_asks_result",
              "mustMatchEventTitle": "期末前班房聲音：competition 回聲、考試紙和小小壓力"
            }
          },
          {
            "id": "s2_w11_42_recess_asks_result_study_first",
            "text": "說先溫書。",
            "buttonText": "說先溫書。",
            "playerLine": "「考試先啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_42_recess_asks_result_study_first"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "梓軒",
              "text": "梓軒看你一眼，像覺得你突然很正經。家朗把水樽轉了一圈，沒有反駁。"
            },
            "resultText": "梓軒看你一眼，像覺得你突然很正經。家朗把水樽轉了一圈，沒有反駁。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_42_pre_exam_ambient",
              "variantId": "recess_asks_result",
              "mustMatchEventTitle": "期末前班房聲音：competition 回聲、考試紙和小小壓力"
            }
          },
          {
            "id": "s2_w11_42_recess_asks_result_not_join",
            "text": "不加入。",
            "buttonText": "不加入。",
            "playerLine": "「……」",
            "playerLineType": "narration",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_42_recess_asks_result_not_join"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "他們繼續講，你喝了一口水。水很快吞下去，結果和考試卻還留在喉嚨旁邊。"
            },
            "resultText": "他們繼續講，你喝了一口水。水很快吞下去，結果和考試卻還留在喉嚨旁邊。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_42_pre_exam_ambient",
              "variantId": "recess_asks_result",
              "mustMatchEventTitle": "期末前班房聲音：competition 回聲、考試紙和小小壓力"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_quiet_observer",
            "npcNameFallback": "穎心"
          },
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_competitive_peer",
            "npcNameFallback": "梓軒"
          }
        ]
      },
      {
        "variantId": "teacher_hands_quiz",
        "variantTitle": "老師派小測卷",
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師把小測卷放回桌上，紙角帶著紅筆。有人立刻翻開，有人用手遮住分數。老師說這不是期末，只是看看哪裡要補。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w11_42_teacher_hands_quiz_look_wrong_first",
            "text": "先看錯題。",
            "buttonText": "先看錯題。",
            "playerLine": "「我睇錯邊。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_42_teacher_hands_quiz_look_wrong_first"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你先看紅圈，不先看分數。紅圈很多或很少都在那裡，至少你知道要從哪一題開始。"
            },
            "resultText": "你先看紅圈，不先看分數。紅圈很多或很少都在那裡，至少你知道要從哪一題開始。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_42_pre_exam_ambient",
              "variantId": "teacher_hands_quiz",
              "mustMatchEventTitle": "期末前班房聲音：competition 回聲、考試紙和小小壓力"
            }
          },
          {
            "id": "s2_w11_42_teacher_hands_quiz_cover_score",
            "text": "先遮住分數。",
            "buttonText": "先遮住分數。",
            "playerLine": "「我唔想睇住。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_42_teacher_hands_quiz_cover_score"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你用手遮著上面，老師經過時沒有催你立刻放開。那幾秒讓你慢慢準備。"
            },
            "resultText": "你用手遮著上面，老師經過時沒有催你立刻放開。那幾秒讓你慢慢準備。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_42_pre_exam_ambient",
              "variantId": "teacher_hands_quiz",
              "mustMatchEventTitle": "期末前班房聲音：competition 回聲、考試紙和小小壓力"
            }
          },
          {
            "id": "s2_w11_42_teacher_hands_quiz_ask_correction",
            "text": "問要不要改正。",
            "buttonText": "問要不要改正。",
            "playerLine": "「要改正嗎？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_42_teacher_hands_quiz_ask_correction"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師說要。這個答案不意外，但你還是希望它沒有那麼快出現。"
            },
            "resultText": "老師說要。這個答案不意外，但你還是希望它沒有那麼快出現。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_42_pre_exam_ambient",
              "variantId": "teacher_hands_quiz",
              "mustMatchEventTitle": "期末前班房聲音：competition 回聲、考試紙和小小壓力"
            },
            "validate": {
              "softCheck": true,
              "stats": {
                "學業": 35,
                "理智值": 30
              },
              "passMemoryTag": "s2_w11_42_teacher_hands_quiz_ask_correction_soft_pass",
              "weakMemoryTag": "s2_w11_42_teacher_hands_quiz_ask_correction_soft_weak",
              "passResultText": "老師說要。這個答案不意外，但你還是希望它沒有那麼快出現。",
              "weakResultText": "你答到中間停了一下，題目好像忽然變長。旁邊同學沒有立刻催，你重新看多一次，才把答案慢慢放回紙上。"
            }
          },
          {
            "id": "s2_w11_42_teacher_hands_quiz_watch_others",
            "text": "看別人的反應。",
            "buttonText": "看別人的反應。",
            "playerLine": "「……」",
            "playerLineType": "narration",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_42_teacher_hands_quiz_watch_others"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "有人鬆一口氣，有人低頭。你發現同一張卷派回來，每個人的臉都不一樣。"
            },
            "resultText": "有人鬆一口氣，有人低頭。你發現同一張卷派回來，每個人的臉都不一樣。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_42_pre_exam_ambient",
              "variantId": "teacher_hands_quiz",
              "mustMatchEventTitle": "期末前班房聲音：competition 回聲、考試紙和小小壓力"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": "pers_strict_academic",
        "npcIdHint": "teacher_strict_academic",
        "npcNameFallback": "老師"
      },
      {
        "variantId": "classmates_talk_tutoring",
        "variantTitle": "同學講暑假補習",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "排隊時，有同學說暑假要補習，另一個同學說自己要去學游水。梓軒問補哪科，家朗問游水好不好玩。隊伍往前一點，你聽著暑假被分成很多種樣子。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w11_42_classmates_talk_tutoring_ask_what_is_tutoring",
            "text": "問補習是甚麼。",
            "buttonText": "問補習是甚麼。",
            "playerLine": "「補習係點㗎？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_42_classmates_talk_tutoring_ask_what_is_tutoring"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "同學說就是做更多題。你聽見「更多」兩個字，腳步慢了一點。"
            },
            "resultText": "同學說就是做更多題。你聽見「更多」兩個字，腳步慢了一點。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_42_pre_exam_ambient",
              "variantId": "classmates_talk_tutoring",
              "mustMatchEventTitle": "期末前班房聲音：competition 回聲、考試紙和小小壓力"
            }
          },
          {
            "id": "s2_w11_42_classmates_talk_tutoring_want_to_play",
            "text": "說想去玩。",
            "buttonText": "說想去玩。",
            "playerLine": "「我想玩多啲。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_42_classmates_talk_tutoring_want_to_play"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "家朗立刻說他也是。梓軒卻說玩都要看成績。隊伍裡的暑假變得一半亮一半沉。"
            },
            "resultText": "家朗立刻說他也是。梓軒卻說玩都要看成績。隊伍裡的暑假變得一半亮一半沉。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_42_pre_exam_ambient",
              "variantId": "classmates_talk_tutoring",
              "mustMatchEventTitle": "期末前班房聲音：competition 回聲、考試紙和小小壓力"
            }
          },
          {
            "id": "s2_w11_42_classmates_talk_tutoring_ask_swim_scared",
            "text": "問游水會不會驚。",
            "buttonText": "問游水會不會驚。",
            "playerLine": "「游水會唔會驚？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_42_classmates_talk_tutoring_ask_swim_scared"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "那個同學說一開始會。你想像泳池的水，覺得暑假也可能有新的怕和新的好玩。"
            },
            "resultText": "那個同學說一開始會。你想像泳池的水，覺得暑假也可能有新的怕和新的好玩。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "游泳": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_42_pre_exam_ambient",
              "variantId": "classmates_talk_tutoring",
              "mustMatchEventTitle": "期末前班房聲音：competition 回聲、考試紙和小小壓力"
            }
          },
          {
            "id": "s2_w11_42_classmates_talk_tutoring_dont_talk_summer",
            "text": "不講暑假。",
            "buttonText": "不講暑假。",
            "playerLine": "「我企返好。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_42_classmates_talk_tutoring_dont_talk_summer"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把隊排直。話題還在後面飄，但老師看過來時，大家先站回自己的位置。"
            },
            "resultText": "你把隊排直。話題還在後面飄，但老師看過來時，大家先站回自己的位置。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_42_pre_exam_ambient",
              "variantId": "classmates_talk_tutoring",
              "mustMatchEventTitle": "期末前班房聲音：competition 回聲、考試紙和小小壓力"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_competitive_peer",
        "npcIdHint": "classmate_competitive_peer",
        "npcNameFallback": "梓軒",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_outgoing_inviter",
            "npcNameFallback": "家朗"
          }
        ]
      },
      {
        "variantId": "countdown_feeling",
        "variantTitle": "課室裡的倒數感",
        "openingDialogue": [
          {
            "speaker": "柏宇",
            "text": "黑板旁邊有考試日期，手冊裡有簽名，抽屜裡有溫習紙。穎心把紙壓平，柏宇把日期講成倒數入口，梓軒說不要亂講，家朗說放學後才算今天完。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w11_42_countdown_feeling_copy_date",
            "text": "抄低日期。",
            "buttonText": "抄低日期。",
            "playerLine": "「我寫低先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_42_countdown_feeling_copy_date"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把日期抄到手冊角落。它看起來很小，卻像會每天自己變近。"
            },
            "resultText": "你把日期抄到手冊角落。它看起來很小，卻像會每天自己變近。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_42_pre_exam_ambient",
              "variantId": "countdown_feeling",
              "mustMatchEventTitle": "期末前班房聲音：competition 回聲、考試紙和小小壓力"
            }
          },
          {
            "id": "s2_w11_42_countdown_feeling_how_many_days",
            "text": "問還有幾日。",
            "buttonText": "問還有幾日。",
            "playerLine": "「仲有幾日？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_42_countdown_feeling_how_many_days"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "家朗開始數，梓軒立刻糾正他少算一天。你聽著他們數，覺得時間也可以吵起來。"
            },
            "resultText": "家朗開始數，梓軒立刻糾正他少算一天。你聽著他們數，覺得時間也可以吵起來。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_42_pre_exam_ambient",
              "variantId": "countdown_feeling",
              "mustMatchEventTitle": "期末前班房聲音：competition 回聲、考試紙和小小壓力"
            }
          },
          {
            "id": "s2_w11_42_countdown_feeling_dont_count",
            "text": "不想倒數。",
            "buttonText": "不想倒數。",
            "playerLine": "「唔好數啦。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_42_countdown_feeling_dont_count"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "柏宇",
              "text": "柏宇把入口關上，穎心也沒有再看日期。不是不考，只是不用一直把它喊出來。"
            },
            "resultText": "柏宇把入口關上，穎心也沒有再看日期。不是不考，只是不用一直把它喊出來。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_42_pre_exam_ambient",
              "variantId": "countdown_feeling",
              "mustMatchEventTitle": "期末前班房聲音：competition 回聲、考試紙和小小壓力"
            }
          },
          {
            "id": "s2_w11_42_countdown_feeling_tidy_drawer",
            "text": "整理抽屜。",
            "buttonText": "整理抽屜。",
            "playerLine": "「我執吓。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w11_42_countdown_feeling_tidy_drawer"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把幾張溫習紙放好。抽屜乾淨一點，心裡也像少了一點亂聲。"
            },
            "resultText": "你把幾張溫習紙放好。抽屜乾淨一點，心裡也像少了一點亂聲。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w11_42_pre_exam_ambient",
              "variantId": "countdown_feeling",
              "mustMatchEventTitle": "期末前班房聲音：competition 回聲、考試紙和小小壓力"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_mischief_maker",
        "npcIdHint": "classmate_curious_troublemaker",
        "npcNameFallback": "柏宇",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_outgoing_inviter",
            "npcNameFallback": "家朗"
          },
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_quiet_observer",
            "npcNameFallback": "穎心"
          },
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_competitive_peer",
            "npcNameFallback": "梓軒"
          }
        ]
      }
    ]
  },
  {
    "id": "s2_w12_45_classroom_closure",
    "sourceTopicId": "S2-W12-45",
    "weekPool": "S2-W12_authored_weekly",
    "termId": "term_p1_s2",
    "week": 12,
    "category": "school_life",
    "title": "班房清理、拿回作品、撕走壁報",
    "sceneIntro": "考試後，班房開始收拾。牆上的作品被一張張取下，桌子裡的紙被翻出來，壁報角落的膠紙撕開時發出很細的聲音。開學時貼上去的東西，現在要拿回家或丟掉。你看著空出來的牆，才發現原來這些紙陪了你們一段時間。",
    "metadata": {
      "sourceMarkdown": "info/s2_w7_w12_dialogue_draft_v0_2.md",
      "uiHidden": true,
      "classroomClosureEvent": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        12,
        12
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w12_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "tear_down_poster",
        "variantTitle": "撕走壁報",
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "如果這段時間你們做過壁報，老師叫小組把它取下來。柏宇先找角落的小圖案，穎心小心撕膠紙，家朗說不要撕爛。紙從牆上離開時，牆面白了一塊。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w12_45_tear_down_poster_hold_corner",
            "text": "按住紙角。",
            "buttonText": "按住紙角。",
            "playerLine": "「我按住呢邊。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_45_tear_down_poster_hold_corner"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "穎心",
              "text": "穎心慢慢撕，柏宇在旁邊看著小圖案。你按住的那一角沒有破，像替它好好落地。"
            },
            "resultText": "穎心慢慢撕，柏宇在旁邊看著小圖案。你按住的那一角沒有破，像替它好好落地。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_45_classroom_closure",
              "variantId": "tear_down_poster",
              "mustMatchEventTitle": "班房清理、拿回作品、撕走壁報"
            },
            "validate": {
              "softCheck": true,
              "stats": {
                "創意": 35,
                "體力": 25
              },
              "passMemoryTag": "s2_w12_45_tear_down_poster_hold_corner_soft_pass",
              "weakMemoryTag": "s2_w12_45_tear_down_poster_hold_corner_soft_weak",
              "passResultText": "穎心慢慢撕，柏宇在旁邊看著小圖案。你按住的那一角沒有破，像替它好好落地。",
              "weakResultText": "你做到中間慢了一點，紙邊也有些歪，但你沒有把手縮回來。大家等一等，把這一小步接住，事情仍然完成了。"
            }
          },
          {
            "id": "s2_w12_45_tear_down_poster_ask_keep",
            "text": "問可不可以帶走。",
            "buttonText": "問可不可以帶走。",
            "playerLine": "「可以攞返去嗎？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_45_tear_down_poster_ask_keep"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師說小組可以商量留哪部分。家朗立刻說留標題，柏宇說留角落，你發現作品也要分工收尾。"
            },
            "resultText": "老師說小組可以商量留哪部分。家朗立刻說留標題，柏宇說留角落，你發現作品也要分工收尾。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_45_classroom_closure",
              "variantId": "tear_down_poster",
              "mustMatchEventTitle": "班房清理、拿回作品、撕走壁報"
            }
          },
          {
            "id": "s2_w12_45_tear_down_poster_look_at_wall",
            "text": "看牆上的白印。",
            "buttonText": "看牆上的白印。",
            "playerLine": "「呢度白咗。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_45_tear_down_poster_look_at_wall"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "紙拿下後，牆上留下一塊比較乾淨的位。你不知道為甚麼，覺得那個空位比紙還讓人記得。"
            },
            "resultText": "紙拿下後，牆上留下一塊比較乾淨的位。你不知道為甚麼，覺得那個空位比紙還讓人記得。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_45_classroom_closure",
              "variantId": "tear_down_poster",
              "mustMatchEventTitle": "班房清理、拿回作品、撕走壁報"
            }
          },
          {
            "id": "s2_w12_45_tear_down_poster_help_fold",
            "text": "幫忙摺起。",
            "buttonText": "幫忙摺起。",
            "playerLine": "「我摺起佢。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_45_tear_down_poster_help_fold"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "穎心",
              "text": "你把大紙摺得有點歪，穎心幫你壓平。壁報變小了，卻沒有立刻消失。"
            },
            "resultText": "你把大紙摺得有點歪，穎心幫你壓平。壁報變小了，卻沒有立刻消失。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_45_classroom_closure",
              "variantId": "tear_down_poster",
              "mustMatchEventTitle": "班房清理、拿回作品、撕走壁報"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_quiet_observer",
        "npcIdHint": "classmate_quiet_observer",
        "npcNameFallback": "穎心",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_outgoing_inviter",
            "npcNameFallback": "家朗"
          },
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_mischief_maker",
            "npcNameFallback": "柏宇"
          }
        ]
      },
      {
        "variantId": "get_back_artwork",
        "variantTitle": "拿回自己的作品",
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師派回貼在牆上的作品。你的那張紙邊角有點翹，背後還有膠紙痕。它貼在課室時像屬於大家，拿回手上後又變回你的。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w12_45_get_back_artwork_look_tape_mark",
            "text": "看膠紙痕。",
            "buttonText": "看膠紙痕。",
            "playerLine": "「黐住咗。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_45_get_back_artwork_look_tape_mark"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你慢慢撕掉背後膠紙，紙面有點痛似的捲起。作品回來時，已經帶著課室的痕跡。"
            },
            "resultText": "你慢慢撕掉背後膠紙，紙面有點痛似的捲起。作品回來時，已經帶著課室的痕跡。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_45_classroom_closure",
              "variantId": "get_back_artwork",
              "mustMatchEventTitle": "班房清理、拿回作品、撕走壁報"
            }
          },
          {
            "id": "s2_w12_45_get_back_artwork_show_classmate",
            "text": "給同學看。",
            "buttonText": "給同學看。",
            "playerLine": "「你睇吓。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_45_get_back_artwork_show_classmate"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "家朗看了一眼，說他記得這張。你有點意外，原來牆上的東西真的有人看過。"
            },
            "resultText": "家朗看了一眼，說他記得這張。你有點意外，原來牆上的東西真的有人看過。",
            "statusDelta": {
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_45_classroom_closure",
              "variantId": "get_back_artwork",
              "mustMatchEventTitle": "班房清理、拿回作品、撕走壁報"
            }
          },
          {
            "id": "s2_w12_45_get_back_artwork_put_in_bag",
            "text": "直接放進書包。",
            "buttonText": "直接放進書包。",
            "playerLine": "「我收起先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_45_get_back_artwork_put_in_bag"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把作品塞進書包，紙角又彎了一點。它沒有被好好展示，但跟你一起回家了。"
            },
            "resultText": "你把作品塞進書包，紙角又彎了一點。它沒有被好好展示，但跟你一起回家了。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_45_classroom_closure",
              "variantId": "get_back_artwork",
              "mustMatchEventTitle": "班房清理、拿回作品、撕走壁報"
            }
          },
          {
            "id": "s2_w12_45_get_back_artwork_ask_redo",
            "text": "問可不可以重畫。",
            "buttonText": "問可不可以重畫。",
            "playerLine": "「而家可唔可以改？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_45_get_back_artwork_ask_redo"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師說不用改了，這是當時的作品。你看著那些不完美的線，第一次覺得它們也算完成。"
            },
            "resultText": "老師說不用改了，這是當時的作品。你看著那些不完美的線，第一次覺得它們也算完成。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_45_classroom_closure",
              "variantId": "get_back_artwork",
              "mustMatchEventTitle": "班房清理、拿回作品、撕走壁報"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗"
      },
      {
        "variantId": "clean_out_desk",
        "variantTitle": "抽屜清理",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "老師叫大家清抽屜，不能把舊紙留到暑假。你伸手進去，摸到鉛筆碎、皺紙、半張貼紙和一張很久以前的草稿。柏宇說抽屜裡一定有秘密，穎心已經把垃圾和要帶走的分開。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w12_45_clean_out_desk_sort_two_piles",
            "text": "分成兩堆。",
            "buttonText": "分成兩堆。",
            "playerLine": "「呢啲要，呢啲唔要。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_45_clean_out_desk_sort_two_piles"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把紙分開，才發現自己留了很多忘記的東西。抽屜空起來時，像有風進去。"
            },
            "resultText": "你把紙分開，才發現自己留了很多忘記的東西。抽屜空起來時，像有風進去。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_45_classroom_closure",
              "variantId": "clean_out_desk",
              "mustMatchEventTitle": "班房清理、拿回作品、撕走壁報"
            },
            "validate": {
              "softCheck": true,
              "stats": {
                "理智值": 30,
                "社交": 30
              },
              "passMemoryTag": "s2_w12_45_clean_out_desk_sort_two_piles_soft_pass",
              "weakMemoryTag": "s2_w12_45_clean_out_desk_sort_two_piles_soft_weak",
              "passResultText": "你把紙分開，才發現自己留了很多忘記的東西。抽屜空起來時，像有風進去。",
              "weakResultText": "你看著那張紙，心裡有點亂。你沒有一下子變得很穩，只是先抓住其中一小格，讓自己不用整張紙一起害怕。"
            }
          },
          {
            "id": "s2_w12_45_clean_out_desk_ask_what_is_this",
            "text": "問這張是甚麼。",
            "buttonText": "問這張是甚麼。",
            "playerLine": "「呢張咩嚟？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_45_clean_out_desk_ask_what_is_this"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "柏宇",
              "text": "柏宇湊過來說像失落地圖。穎心說是舊草稿。兩個答案都不太一樣，你最後把它放進回收箱。"
            },
            "resultText": "柏宇湊過來說像失落地圖。穎心說是舊草稿。兩個答案都不太一樣，你最後把它放進回收箱。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_45_classroom_closure",
              "variantId": "clean_out_desk",
              "mustMatchEventTitle": "班房清理、拿回作品、撕走壁報"
            }
          },
          {
            "id": "s2_w12_45_clean_out_desk_keep_sticker",
            "text": "保留小貼紙。",
            "buttonText": "保留小貼紙。",
            "playerLine": "「呢張我留。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_45_clean_out_desk_keep_sticker"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把半張貼紙夾進手冊。它不完整，但你就是想留住那一角。"
            },
            "resultText": "你把半張貼紙夾進手冊。它不完整，但你就是想留住那一角。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_45_classroom_closure",
              "variantId": "clean_out_desk",
              "mustMatchEventTitle": "班房清理、拿回作品、撕走壁報"
            }
          },
          {
            "id": "s2_w12_45_clean_out_desk_too_much",
            "text": "覺得很麻煩。",
            "buttonText": "覺得很麻煩。",
            "playerLine": "「好多嘢呀。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_45_clean_out_desk_too_much"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師說所以才要現在清。你嘆氣，還是把手再伸進抽屜。"
            },
            "resultText": "老師說所以才要現在清。你嘆氣，還是把手再伸進抽屜。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": -1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_45_classroom_closure",
              "variantId": "clean_out_desk",
              "mustMatchEventTitle": "班房清理、拿回作品、撕走壁報"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_mischief_maker",
        "npcIdHint": "classmate_curious_troublemaker",
        "npcNameFallback": "柏宇",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_quiet_observer",
            "npcNameFallback": "穎心"
          }
        ]
      },
      {
        "variantId": "classroom_feels_empty",
        "variantTitle": "班房變空一點",
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "作品拿下來後，班房牆壁空了幾塊。桌面也比平日乾淨，失物籃裡剩下一些沒人認的冷衫和水樽。你坐回座位，覺得課室還是同一間，卻像準備把你們送出去。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w12_45_classroom_feels_empty_look_at_wall",
            "text": "看空牆。",
            "buttonText": "看空牆。",
            "playerLine": "「好空呀。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_45_classroom_feels_empty_look_at_wall"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "家朗說遲啲會貼新的。你看著那面牆，想到新的可能不是你們小一的作品。"
            },
            "resultText": "家朗說遲啲會貼新的。你看著那面牆，想到新的可能不是你們小一的作品。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_45_classroom_closure",
              "variantId": "classroom_feels_empty",
              "mustMatchEventTitle": "班房清理、拿回作品、撕走壁報"
            }
          },
          {
            "id": "s2_w12_45_classroom_feels_empty_check_missing",
            "text": "找自己的東西。",
            "buttonText": "找自己的東西。",
            "playerLine": "「我有冇漏？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_45_classroom_feels_empty_check_missing"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你檢查抽屜和書包，找到一支短鉛筆。它陪你過完小一最後一段，差點被留在課室。"
            },
            "resultText": "你檢查抽屜和書包，找到一支短鉛筆。它陪你過完小一最後一段，差點被留在課室。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_45_classroom_closure",
              "variantId": "classroom_feels_empty",
              "mustMatchEventTitle": "班房清理、拿回作品、撕走壁報"
            }
          },
          {
            "id": "s2_w12_45_classroom_feels_empty_ask_next_year_seat",
            "text": "問下年坐哪裡。",
            "buttonText": "問下年坐哪裡。",
            "playerLine": "「下年坐邊？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_45_classroom_feels_empty_ask_next_year_seat"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師說升 P2 會再安排。座位突然變成將來的事，不再只是今天的椅子。"
            },
            "resultText": "老師說升 P2 會再安排。座位突然變成將來的事，不再只是今天的椅子。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_45_classroom_closure",
              "variantId": "classroom_feels_empty",
              "mustMatchEventTitle": "班房清理、拿回作品、撕走壁報"
            }
          },
          {
            "id": "s2_w12_45_classroom_feels_empty_sit_quiet",
            "text": "安靜坐著。",
            "buttonText": "安靜坐著。",
            "playerLine": "「……」",
            "playerLineType": "narration",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_45_classroom_feels_empty_sit_quiet"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你坐在座位上，聽見別人收拾的聲音。課室沒有說再見，但每一下拉鍊聲都像在收尾。"
            },
            "resultText": "你坐在座位上，聽見別人收拾的聲音。課室沒有說再見，但每一下拉鍊聲都像在收尾。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": -1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_45_classroom_closure",
              "variantId": "classroom_feels_empty",
              "mustMatchEventTitle": "班房清理、拿回作品、撕走壁報"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗"
      }
    ]
  },
  {
    "id": "s2_w12_46_p2_seed",
    "sourceTopicId": "S2-W12-46",
    "weekPool": "S2-W12_authored_weekly",
    "termId": "term_p1_s2",
    "week": 12,
    "category": "school_life",
    "title": "看見 P2 課室／新樓層／新手冊",
    "sceneIntro": "學期尾，老師帶大家經過高一層的走廊，或者派下學期用品通知。P2 以前只是學校裡另一批同學，現在它像一間你快要走進去的課室。走廊的地磚差不多，門牌卻不一樣。你看著那些門，忽然想到自己明年可能會站在那裡。",
    "metadata": {
      "sourceMarkdown": "info/s2_w7_w12_dialogue_draft_v0_2.md",
      "uiHidden": true,
      "promotionToP2Seed": true,
      "noRetentionBranch": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        12,
        12
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w12_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "pass_p2_classroom",
        "variantTitle": "經過 P2 課室",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "排隊經過 P2 課室時，裡面有高一級的學生在收拾書包。你看見牆上字比較多，書架也放得高一點。家朗踮起腳看，穎心只看了一眼就回到隊伍。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w12_46_pass_p2_classroom_looks_big",
            "text": "說好像很大。",
            "buttonText": "說好像很大。",
            "playerLine": "「好似好大。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_46_pass_p2_classroom_looks_big"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "家朗說不過都是課室。你知道他可能對，但門牌上的「二」字還是讓那間房大了一點。"
            },
            "resultText": "家朗說不過都是課室。你知道他可能對，但門牌上的「二」字還是讓那間房大了一點。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_46_p2_seed",
              "variantId": "pass_p2_classroom",
              "mustMatchEventTitle": "看見 P2 課室／新樓層／新手冊"
            }
          },
          {
            "id": "s2_w12_46_pass_p2_classroom_ask_will_we_go",
            "text": "問我們會不會去那裡。",
            "buttonText": "問我們會不會去那裡。",
            "playerLine": "「我哋會嚟呢度？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_46_pass_p2_classroom_ask_will_we_go"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師說升上去會有安排。那句很普通，卻讓走廊忽然變成以後的路。"
            },
            "resultText": "老師說升上去會有安排。那句很普通，卻讓走廊忽然變成以後的路。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_46_p2_seed",
              "variantId": "pass_p2_classroom",
              "mustMatchEventTitle": "看見 P2 課室／新樓層／新手冊"
            }
          },
          {
            "id": "s2_w12_46_pass_p2_classroom_look_at_books",
            "text": "看裡面的書。",
            "buttonText": "看裡面的書。",
            "playerLine": "「佢哋好多書。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_46_pass_p2_classroom_look_at_books"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你看不清書名，只覺得書脊排得很密。P2 好像有更多東西等在架上。"
            },
            "resultText": "你看不清書名，只覺得書脊排得很密。P2 好像有更多東西等在架上。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_46_p2_seed",
              "variantId": "pass_p2_classroom",
              "mustMatchEventTitle": "看見 P2 課室／新樓層／新手冊"
            }
          },
          {
            "id": "s2_w12_46_pass_p2_classroom_follow_line",
            "text": "跟隊走。",
            "buttonText": "跟隊走。",
            "playerLine": "「……」",
            "playerLineType": "narration",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_46_pass_p2_classroom_follow_line"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有停太久，因為隊伍往前移。那扇門很快到你身後，但門牌還在你腦裡。"
            },
            "resultText": "你沒有停太久，因為隊伍往前移。那扇門很快到你身後，但門牌還在你腦裡。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 0
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_46_p2_seed",
              "variantId": "pass_p2_classroom",
              "mustMatchEventTitle": "看見 P2 課室／新樓層／新手冊"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_quiet_observer",
            "npcNameFallback": "穎心"
          }
        ]
      },
      {
        "variantId": "new_notebook_notice",
        "variantTitle": "新手冊通知",
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師說下學期會有新手冊、新班務安排，暑假前要把舊手冊收好。你翻開自己的手冊，裡面有很多簽名、日期和一點皺痕。它看起來不像新的東西，卻裝了整個小一。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w12_46_new_notebook_notice_flip_through",
            "text": "翻舊手冊。",
            "buttonText": "翻舊手冊。",
            "playerLine": "「好多簽名。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_46_new_notebook_notice_flip_through"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你一頁頁翻過去，看見家人的簽名，有些急、有些大。那些簽名跟你一起過了很多星期。"
            },
            "resultText": "你一頁頁翻過去，看見家人的簽名，有些急、有些大。那些簽名跟你一起過了很多星期。",
            "statusDelta": {
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_46_p2_seed",
              "variantId": "new_notebook_notice",
              "mustMatchEventTitle": "看見 P2 課室／新樓層／新手冊"
            }
          },
          {
            "id": "s2_w12_46_new_notebook_notice_ask_what_new",
            "text": "問新手冊長怎樣。",
            "buttonText": "問新手冊長怎樣。",
            "playerLine": "「新嗰本係點？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_46_new_notebook_notice_ask_what_new"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師說差不多，但年級不一樣。你想像一樣的格子裡寫著新的班別。"
            },
            "resultText": "老師說差不多，但年級不一樣。你想像一樣的格子裡寫著新的班別。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_46_p2_seed",
              "variantId": "new_notebook_notice",
              "mustMatchEventTitle": "看見 P2 課室／新樓層／新手冊"
            }
          },
          {
            "id": "s2_w12_46_new_notebook_notice_put_away",
            "text": "把手冊放好。",
            "buttonText": "把手冊放好。",
            "playerLine": "「我收好先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_46_new_notebook_notice_put_away"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把手冊放進書包內格。它不會再像開學時那麼平，但這正好是它用過的樣子。"
            },
            "resultText": "你把手冊放進書包內格。它不會再像開學時那麼平，但這正好是它用過的樣子。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_46_p2_seed",
              "variantId": "new_notebook_notice",
              "mustMatchEventTitle": "看見 P2 課室／新樓層／新手冊"
            }
          },
          {
            "id": "s2_w12_46_new_notebook_notice_dont_want_change",
            "text": "說不想換。",
            "buttonText": "說不想換。",
            "playerLine": "「我想用返呢本。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_46_new_notebook_notice_dont_want_change"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師笑說手冊也要升級。你摸摸封面，覺得一本簿也會有結束的時候。"
            },
            "resultText": "老師笑說手冊也要升級。你摸摸封面，覺得一本簿也會有結束的時候。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": -1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_46_p2_seed",
              "variantId": "new_notebook_notice",
              "mustMatchEventTitle": "看見 P2 課室／新樓層／新手冊"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": "pers_pastoral_care_teacher",
        "npcIdHint": "teacher_pastoral_care",
        "npcNameFallback": "老師"
      },
      {
        "variantId": "see_senior_students",
        "variantTitle": "看到高年級同學",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "走廊上有高年級同學搬作品，他們比你高很多，拿著大紙也走得很快。你認得其中一兩個曾經在活動裡見過的身影，但他們沒有停下來，像在自己的學期尾裡忙。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w12_46_see_senior_students_make_way",
            "text": "讓路。",
            "buttonText": "讓路。",
            "playerLine": "「我企埋邊。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_46_see_senior_students_make_way"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你往牆邊站，高年級同學拿著作品走過。紙邊擦過空氣，像從另一個年級吹來。"
            },
            "resultText": "你往牆邊站，高年級同學拿著作品走過。紙邊擦過空氣，像從另一個年級吹來。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_46_p2_seed",
              "variantId": "see_senior_students",
              "mustMatchEventTitle": "看見 P2 課室／新樓層／新手冊"
            }
          },
          {
            "id": "s2_w12_46_see_senior_students_ask_what_carrying",
            "text": "問他們拿甚麼。",
            "buttonText": "問他們拿甚麼。",
            "playerLine": "「佢哋拎咩？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_46_see_senior_students_ask_what_carrying"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師說是他們的作品。你看著大紙，想到自己剛剛也拿回作品，只是大小不一樣。"
            },
            "resultText": "老師說是他們的作品。你看著大紙，想到自己剛剛也拿回作品，只是大小不一樣。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_46_p2_seed",
              "variantId": "see_senior_students",
              "mustMatchEventTitle": "看見 P2 課室／新樓層／新手冊"
            }
          },
          {
            "id": "s2_w12_46_see_senior_students_they_are_fast",
            "text": "覺得他們很快。",
            "buttonText": "覺得他們很快。",
            "playerLine": "「佢哋行得好快。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_46_see_senior_students_they_are_fast"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "家朗說因為他們大個。你看著他們背影，不知道自己下年會不會也走得快一點。"
            },
            "resultText": "家朗說因為他們大個。你看著他們背影，不知道自己下年會不會也走得快一點。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_46_p2_seed",
              "variantId": "see_senior_students",
              "mustMatchEventTitle": "看見 P2 課室／新樓層／新手冊"
            }
          },
          {
            "id": "s2_w12_46_see_senior_students_watch_quiet",
            "text": "安靜看著。",
            "buttonText": "安靜看著。",
            "playerLine": "「……」",
            "playerLineType": "narration",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_46_see_senior_students_watch_quiet"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有叫住任何人，只看著他們消失在樓梯口。高一級不是突然變成大人，只是腳步聲遠了一點。"
            },
            "resultText": "你沒有叫住任何人，只看著他們消失在樓梯口。高一級不是突然變成大人，只是腳步聲遠了一點。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_46_p2_seed",
              "variantId": "see_senior_students",
              "mustMatchEventTitle": "看見 P2 課室／新樓層／新手冊"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗"
      },
      {
        "variantId": "teacher_confirms_promotion",
        "variantTitle": "老師說會升 P2",
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師在班房最後幾天說：「大家完成小一，就會升 P2。」這句本來應該很簡單，卻讓很多同學抬頭。有人笑，有人問暑假有多長，有人問會不會分班。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w12_46_teacher_confirms_promotion_same_class",
            "text": "問會不會同班。",
            "buttonText": "問會不會同班。",
            "playerLine": "「我哋仲同班嗎？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_46_teacher_confirms_promotion_same_class"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師說要等安排。你看向幾個熟悉的人，突然覺得班房裡的座位也可能會變。"
            },
            "resultText": "老師說要等安排。你看向幾個熟悉的人，突然覺得班房裡的座位也可能會變。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_46_p2_seed",
              "variantId": "teacher_confirms_promotion",
              "mustMatchEventTitle": "看見 P2 課室／新樓層／新手冊"
            }
          },
          {
            "id": "s2_w12_46_teacher_confirms_promotion_is_p2_hard",
            "text": "問 P2 難不難。",
            "buttonText": "問 P2 難不難。",
            "playerLine": "「P2 難唔難？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_46_teacher_confirms_promotion_is_p2_hard"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師說會學新東西，但現在先完成小一。P2 沒有被說得很可怕，只是被放到暑假後。"
            },
            "resultText": "老師說會學新東西，但現在先完成小一。P2 沒有被說得很可怕，只是被放到暑假後。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_46_p2_seed",
              "variantId": "teacher_confirms_promotion",
              "mustMatchEventTitle": "看見 P2 課室／新樓層／新手冊"
            }
          },
          {
            "id": "s2_w12_46_teacher_confirms_promotion_a_bit_happy",
            "text": "有點開心。",
            "buttonText": "有點開心。",
            "playerLine": "「我升 P2。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_46_teacher_confirms_promotion_a_bit_happy"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你說得很小聲。那句話像試穿一件新的校服，還有點大，但真的能穿上。"
            },
            "resultText": "你說得很小聲。那句話像試穿一件新的校服，還有點大，但真的能穿上。",
            "statusDelta": {
              "自信": 1,
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_46_p2_seed",
              "variantId": "teacher_confirms_promotion",
              "mustMatchEventTitle": "看見 P2 課室／新樓層／新手冊"
            }
          },
          {
            "id": "s2_w12_46_teacher_confirms_promotion_dont_want_p1_end",
            "text": "不想小一完。",
            "buttonText": "不想小一完。",
            "playerLine": "「咁小一完喇？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_46_teacher_confirms_promotion_dont_want_p1_end"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師停了一下，說是啊。你看著白板，覺得一整年原來也會有最後一頁。"
            },
            "resultText": "老師停了一下，說是啊。你看著白板，覺得一整年原來也會有最後一頁。",
            "statusDelta": {
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_46_p2_seed",
              "variantId": "teacher_confirms_promotion",
              "mustMatchEventTitle": "看見 P2 課室／新樓層／新手冊"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": "pers_pastoral_care_teacher",
        "npcIdHint": "teacher_pastoral_care",
        "npcNameFallback": "老師"
      }
    ]
  },
  {
    "id": "s2_w12_47_summer_homework",
    "sourceTopicId": "S2-W12-47",
    "weekPool": "S2-W12_authored_weekly",
    "termId": "term_p1_s2",
    "week": 12,
    "category": "academic",
    "title": "暑假功課派發",
    "sceneIntro": "考試後，老師派下暑假功課和閱讀紀錄。你本來以為考完就可以完全放空，但那疊紙又一次出現在桌上。這次它不是聖誕假期功課，也不是復活節工作紙，而是會陪你走進暑假的東西。窗外很亮，紙卻很白。",
    "metadata": {
      "sourceMarkdown": "info/s2_w7_w12_dialogue_draft_v0_2.md",
      "uiHidden": true,
      "summerHomeworkEntry": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        12,
        12
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w12_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "ordinary_summer_homework",
        "variantTitle": "普通暑假功課",
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師說暑假功課不用一天做完，但不要最後一星期才想起。家朗嘆氣，柏宇說暑假功課怪獸又回來。老師看了他一眼，他立刻坐直。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w12_47_ordinary_summer_homework_ask_how_much",
            "text": "問有幾多。",
            "buttonText": "問有幾多。",
            "playerLine": "「有幾多呀？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_47_ordinary_summer_homework_ask_how_much"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師把項目讀一次。你數到一半就有點亂，但知道它們會全部進書包。"
            },
            "resultText": "老師把項目讀一次。你數到一半就有點亂，但知道它們會全部進書包。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_47_summer_homework",
              "variantId": "ordinary_summer_homework",
              "mustMatchEventTitle": "暑假功課派發"
            }
          },
          {
            "id": "s2_w12_47_ordinary_summer_homework_write_name",
            "text": "先寫名字。",
            "buttonText": "先寫名字。",
            "playerLine": "「我寫名先。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_47_ordinary_summer_homework_write_name"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你在封面寫名字，字有點歪。暑假功課還沒開始，卻已經認得你。"
            },
            "resultText": "你在封面寫名字，字有點歪。暑假功課還沒開始，卻已經認得你。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_47_summer_homework",
              "variantId": "ordinary_summer_homework",
              "mustMatchEventTitle": "暑假功課派發"
            }
          },
          {
            "id": "s2_w12_47_ordinary_summer_homework_still_have",
            "text": "說考完仲有。",
            "buttonText": "說考完仲有。",
            "playerLine": "「考完都仲有呀。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_47_ordinary_summer_homework_still_have"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "家朗",
              "text": "家朗小聲說他也覺得。老師說暑假也要保持。你不太喜歡這句，但知道它是真的。"
            },
            "resultText": "家朗小聲說他也覺得。老師說暑假也要保持。你不太喜歡這句，但知道它是真的。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_47_summer_homework",
              "variantId": "ordinary_summer_homework",
              "mustMatchEventTitle": "暑假功課派發"
            }
          },
          {
            "id": "s2_w12_47_ordinary_summer_homework_file_it",
            "text": "把紙放進功課夾。",
            "buttonText": "把紙放進功課夾。",
            "playerLine": "「我夾好。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_47_ordinary_summer_homework_file_it"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把紙夾好，紙夾一下子厚起來。暑假的空位被放進一些白色的頁。"
            },
            "resultText": "你把紙夾好，紙夾一下子厚起來。暑假的空位被放進一些白色的頁。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_47_summer_homework",
              "variantId": "ordinary_summer_homework",
              "mustMatchEventTitle": "暑假功課派發"
            },
            "validate": {
              "softCheck": true,
              "stats": {
                "學業": 35,
                "理智值": 30
              },
              "passMemoryTag": "s2_w12_47_ordinary_summer_homework_file_it_soft_pass",
              "weakMemoryTag": "s2_w12_47_ordinary_summer_homework_file_it_soft_weak",
              "passResultText": "你把紙夾好，紙夾一下子厚起來。暑假的空位被放進一些白色的頁。",
              "weakResultText": "你看著那張紙，心裡有點亂。你沒有一下子變得很穩，只是先抓住其中一小格，讓自己不用整張紙一起害怕。"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": "pers_strict_academic",
        "npcIdHint": "teacher_strict_academic",
        "npcNameFallback": "老師",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_outgoing_inviter",
            "npcNameFallback": "家朗"
          },
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_mischief_maker",
            "npcNameFallback": "柏宇"
          }
        ]
      },
      {
        "variantId": "reading_record",
        "variantTitle": "閱讀紀錄",
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師派閱讀紀錄表，說暑假可以慢慢看書。穎心看著表格，像已經在想第一本要寫甚麼。柏宇問可不可以寫漫畫，老師說要看種類。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w12_47_reading_record_ask_what_to_read",
            "text": "問可以看甚麼。",
            "buttonText": "問可以看甚麼。",
            "playerLine": "「睇咩書得？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_47_reading_record_ask_what_to_read"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師說圖書、故事書都可以。你想到家裡書架，不知道有沒有一本願意先被打開。"
            },
            "resultText": "老師說圖書、故事書都可以。你想到家裡書架，不知道有沒有一本願意先被打開。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_47_summer_homework",
              "variantId": "reading_record",
              "mustMatchEventTitle": "暑假功課派發"
            },
            "validate": {
              "softCheck": true,
              "stats": {
                "學業": 35,
                "理智值": 30
              },
              "passMemoryTag": "s2_w12_47_reading_record_ask_what_to_read_soft_pass",
              "weakMemoryTag": "s2_w12_47_reading_record_ask_what_to_read_soft_weak",
              "passResultText": "老師說圖書、故事書都可以。你想到家裡書架，不知道有沒有一本願意先被打開。",
              "weakResultText": "你看著那張紙，心裡有點亂。你沒有一下子變得很穩，只是先抓住其中一小格，讓自己不用整張紙一起害怕。"
            }
          },
          {
            "id": "s2_w12_47_reading_record_ask_comics",
            "text": "問漫畫可不可以。",
            "buttonText": "問漫畫可不可以。",
            "playerLine": "「漫畫得唔得？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_47_reading_record_ask_comics"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "柏宇",
              "text": "老師說有些可以，但要認真看。柏宇立刻說漫畫也有很多字，你忍不住笑了一下。"
            },
            "resultText": "老師說有些可以，但要認真看。柏宇立刻說漫畫也有很多字，你忍不住笑了一下。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_47_summer_homework",
              "variantId": "reading_record",
              "mustMatchEventTitle": "暑假功課派發"
            }
          },
          {
            "id": "s2_w12_47_reading_record_look_at_grid",
            "text": "看表格格子。",
            "buttonText": "看表格格子。",
            "playerLine": "「好多格。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_47_reading_record_look_at_grid"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "穎心",
              "text": "穎心說不用一次填滿。她把手指放在第一格，你也覺得那格比整張表近。"
            },
            "resultText": "穎心說不用一次填滿。她把手指放在第一格，你也覺得那格比整張表近。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_47_summer_homework",
              "variantId": "reading_record",
              "mustMatchEventTitle": "暑假功課派發"
            }
          },
          {
            "id": "s2_w12_47_reading_record_dont_want_to_write",
            "text": "不想寫紀錄。",
            "buttonText": "不想寫紀錄。",
            "playerLine": "「睇完仲要寫呀？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_47_reading_record_dont_want_to_write"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師說簡單寫幾句。故事還未開始，紀錄已經等在旁邊。"
            },
            "resultText": "老師說簡單寫幾句。故事還未開始，紀錄已經等在旁邊。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_47_summer_homework",
              "variantId": "reading_record",
              "mustMatchEventTitle": "暑假功課派發"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_quiet_observer",
        "npcIdHint": "classmate_quiet_observer",
        "npcNameFallback": "穎心",
        "secondaryNpcs": [
          {
            "identityTypeId": "same_age_peer",
            "personalityId": "pers_mischief_maker",
            "npcNameFallback": "柏宇"
          }
        ]
      },
      {
        "variantId": "low_basic_follow_up",
        "variantTitle": "低基礎暑假跟進",
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "如果 academic validation 太低，老師另外夾了一張基礎練習提醒，說家人會知道怎樣安排。她沒有在全班面前大聲講，只把那張紙放進你的功課夾裡。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w12_47_low_basic_follow_up_ask_what_is_this",
            "text": "問這張是甚麼。",
            "buttonText": "問這張是甚麼。",
            "playerLine": "「呢張咩嚟？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_47_low_basic_follow_up_ask_what_is_this"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師說是暑假跟進，幫你穩返基本。那張紙沒有罵你，只是比其他紙多了一點重量。"
            },
            "resultText": "老師說是暑假跟進，幫你穩返基本。那張紙沒有罵你，只是比其他紙多了一點重量。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_47_summer_homework",
              "variantId": "low_basic_follow_up",
              "mustMatchEventTitle": "暑假功課派發"
            }
          },
          {
            "id": "s2_w12_47_low_basic_follow_up_dont_want",
            "text": "說我不想補。",
            "buttonText": "說我不想補。",
            "playerLine": "「我唔想補。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_47_low_basic_follow_up_dont_want"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師說不是罰，是幫你下年容易點。你不一定相信，但她說話的聲音沒有很硬。"
            },
            "resultText": "老師說不是罰，是幫你下年容易點。你不一定相信，但她說話的聲音沒有很硬。",
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_47_summer_homework",
              "variantId": "low_basic_follow_up",
              "mustMatchEventTitle": "暑假功課派發"
            }
          },
          {
            "id": "s2_w12_47_low_basic_follow_up_hide_it",
            "text": "低頭收好。",
            "buttonText": "低頭收好。",
            "playerLine": "「……」",
            "playerLineType": "narration",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_47_low_basic_follow_up_hide_it"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把紙放進夾裡，不想讓很多人看見。它被收起後，還是在那裡。"
            },
            "resultText": "你把紙放進夾裡，不想讓很多人看見。它被收起後，還是在那裡。",
            "statusDelta": {
              "自信": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_47_summer_homework",
              "variantId": "low_basic_follow_up",
              "mustMatchEventTitle": "暑假功課派發"
            }
          },
          {
            "id": "s2_w12_47_low_basic_follow_up_ask_still_p2",
            "text": "問會不會升 P2。",
            "buttonText": "問會不會升 P2。",
            "playerLine": "「咁我仲升 P2？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_47_low_basic_follow_up_ask_still_p2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師說會升，但暑假要跟上。你先聽見會升，心放下一點，然後又聽見暑假的門多了一把鎖。"
            },
            "resultText": "老師說會升，但暑假要跟上。你先聽見會升，心放下一點，然後又聽見暑假的門多了一把鎖。",
            "statusDelta": {
              "自信": 1,
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_47_summer_homework",
              "variantId": "low_basic_follow_up",
              "mustMatchEventTitle": "暑假功課派發"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": "pers_pastoral_care_teacher",
        "npcIdHint": "teacher_pastoral_care",
        "npcNameFallback": "老師"
      },
      {
        "variantId": "homework_goes_home",
        "variantTitle": "暑假表格帶回家",
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師提醒暑假功課要給家人看，也要簽名。你看著那幾張紙，已經想像它們今晚躺在飯桌上，跟碗、杯子和電視聲一起等大人翻開。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w12_47_homework_goes_home_ask_sign",
            "text": "問要簽名嗎。",
            "buttonText": "問要簽名嗎。",
            "playerLine": "「要簽名？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_47_homework_goes_home_ask_sign"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師說要。簽名位很小，卻代表這張紙不會只留在學校。"
            },
            "resultText": "老師說要。簽名位很小，卻代表這張紙不會只留在學校。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_47_summer_homework",
              "variantId": "homework_goes_home",
              "mustMatchEventTitle": "暑假功課派發"
            }
          },
          {
            "id": "s2_w12_47_homework_goes_home_bottom_of_bag",
            "text": "放進書包最底。",
            "buttonText": "放進書包最底。",
            "playerLine": "「我放入去。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_47_homework_goes_home_bottom_of_bag"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把紙放進書包，壓在其他簿下面。它看不見了，但一回家大概還是會被找出來。"
            },
            "resultText": "你把紙放進書包，壓在其他簿下面。它看不見了，但一回家大概還是會被找出來。",
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_47_summer_homework",
              "variantId": "homework_goes_home",
              "mustMatchEventTitle": "暑假功課派發"
            }
          },
          {
            "id": "s2_w12_47_homework_goes_home_show_family_tonight",
            "text": "想先給家人看。",
            "buttonText": "想先給家人看。",
            "playerLine": "「我今晚俾佢哋睇。」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_47_homework_goes_home_show_family_tonight"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師點頭。你不知道家人會怎樣說，但至少不用最後一日才拿出來。"
            },
            "resultText": "老師點頭。你不知道家人會怎樣說，但至少不用最後一日才拿出來。",
            "statusDelta": {
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_47_summer_homework",
              "variantId": "homework_goes_home",
              "mustMatchEventTitle": "暑假功課派發"
            }
          },
          {
            "id": "s2_w12_47_homework_goes_home_ask_can_play",
            "text": "問暑假可不可以玩。",
            "buttonText": "問暑假可不可以玩。",
            "playerLine": "「咁暑假仲可以玩？」",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "s2_w12_47_homework_goes_home_ask_can_play"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "老師",
              "text": "老師說當然可以，但要安排時間。你已經很熟悉這個答案，卻還是想再問一次。"
            },
            "resultText": "老師說當然可以，但要安排時間。你已經很熟悉這個答案，卻還是想再問一次。",
            "statusDelta": {
              "快樂": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w12_47_summer_homework",
              "variantId": "homework_goes_home",
              "mustMatchEventTitle": "暑假功課派發"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": "pers_strict_academic",
        "npcIdHint": "teacher_strict_academic",
        "npcNameFallback": "老師"
      }
    ]
  }
];
