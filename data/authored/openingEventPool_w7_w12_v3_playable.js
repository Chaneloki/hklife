// data/authored/openingEventPool_w7_w12_v3_playable.js
// Generated structural data from info/w7_w12_dialogue_draft_v3_playable.md.
// Authored source of truth: do not edit wording here unless the source MD changes.

export const hkLifeSimulatorOpeningEventDialogueW7W12 = [
  {
    "id": "w7_1_wall_display_group_first_task",
    "sourceTopicId": "W7-1",
    "weekPool": "W7_authored_weekly",
    "week": 7,
    "dateRange": "Oct 13–Oct 19",
    "category": "social",
    "title": "班際壁報小組第一次分工",
    "sceneIntro": "早會後，老師把一張大白紙貼在黑板旁，說每組都要做「我眼中的校園」壁報，星期五前貼好，之後會放到走廊讓其他班看。你們這組被分到同一張桌，桌上有彩紙、膠水、剪刀和顏色筆。大家先看著那張白紙，沒有一個人知道第一步應該做甚麼。",
    "propertyValidation": {
      "purpose": "natural_scene_branching_only",
      "note": "創意高時，桌上會多一盒彩色紙，老師可能問玩家要不要試試排圖案；自信低時，玩家會先拿著筆不敢落紙；普通版本只用上面場景。這些 variation 只改起點，不決定結果。",
      "ordinaryVersionAlwaysAvailable": true,
      "hideLockedChoices": true
    },
    "sceneIntroOverrides": [
      {
        "eligibleWhen": "TODO_from_author_property_note",
        "note": "創意高時，桌上會多一盒彩色紙，老師可能問玩家要不要試試排圖案；自信低時，玩家會先拿著筆不敢落紙；普通版本只用上面場景。這些 variation 只改起點，不決定結果。"
      }
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        7,
        7
      ],
      "conditions": [],
      "exclusiveGroup": "w7_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "outgoing",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "家朗把彩紙推開，像怕大家再坐一會兒就會浪費掉時間。他指指白紙，又指指膠水：「我哋要快啲開始啦。你貼字得唔得？我去搵藍色紙。」他停一下，好像想起你可能還未跟上，又補一句：「唔識都得，我都係試下咋。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w7_1_wall_display_group_first_task_outgoing_choice_1",
            "text": "我貼字啦。",
            "buttonText": "我貼字啦。",
            "playerLine": "我貼字啦，你畀膠水我。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_1_wall_display_group_first_task_outgoing_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗馬上把膠水推過來，還想一次過說三件事。你接過膠水時，白紙終於不再只是白紙。"
            },
            "resultText": "家朗馬上把膠水推過來，還想一次過說三件事。你接過膠水時，白紙終於不再只是白紙。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "w7_1_wall_display_group_first_task",
              "variantId": "outgoing",
              "mustMatchEventTitle": "班際壁報小組第一次分工"
            }
          },
          {
            "id": "w7_1_wall_display_group_first_task_outgoing_choice_2",
            "text": "我畫邊邊啦。",
            "buttonText": "我畫邊邊啦。",
            "playerLine": "我畫邊邊啦，唔好畫咁多字住。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_1_wall_display_group_first_task_outgoing_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗看了看紙邊，點頭說：「好呀。」他還是急，但至少把字的位置空了出來。"
            },
            "resultText": "家朗看了看紙邊，點頭說：「好呀。」他還是急，但至少把字的位置空了出來。",
            "statusDelta": {
              "自信": 1,
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
              "eventId": "w7_1_wall_display_group_first_task",
              "variantId": "outgoing",
              "mustMatchEventTitle": "班際壁報小組第一次分工"
            }
          },
          {
            "id": "w7_1_wall_display_group_first_task_outgoing_choice_3",
            "text": "等陣，我未諗到。",
            "buttonText": "等陣，我未諗到。",
            "playerLine": "等陣先，我未諗到做咩。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_1_wall_display_group_first_task_outgoing_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗原本想再催，看到你還拿著筆沒動，就把其中一張紙放慢一點。他說：「咁你睇我哋先。」"
            },
            "resultText": "家朗原本想再催，看到你還拿著筆沒動，就把其中一張紙放慢一點。他說：「咁你睇我哋先。」",
            "statusDelta": {
              "自信": 1,
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
              "eventId": "w7_1_wall_display_group_first_task",
              "variantId": "outgoing",
              "mustMatchEventTitle": "班際壁報小組第一次分工"
            }
          },
          {
            "id": "w7_1_wall_display_group_first_task_outgoing_choice_4",
            "text": "你講慢啲啦。",
            "buttonText": "你講慢啲啦。",
            "playerLine": "你講慢啲啦，我聽唔切。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_1_wall_display_group_first_task_outgoing_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗愣了一下，真的把手上的紙放下：「哦。咁先貼標題。」他下一句又差點變快，但已經記得停一停。"
            },
            "resultText": "家朗愣了一下，真的把手上的紙放下：「哦。咁先貼標題。」他下一句又差點變快，但已經記得停一停。",
            "statusDelta": {
              "自信": 1,
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
              "eventId": "w7_1_wall_display_group_first_task",
              "variantId": "outgoing",
              "mustMatchEventTitle": "班際壁報小組第一次分工"
            }
          }
        ]
      },
      {
        "variantId": "quiet",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_quiet_observer",
        "npcIdHint": "classmate_quiet_observer",
        "npcNameFallback": "穎心",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "穎心",
            "text": "穎心沒有先拿最漂亮的紙，她把剪刀放回盒邊，又把一張皺了的粉紅紙壓平。她小聲說：「呢張可以做花。」她把紙推近你一點，看向白紙的角落：「嗰度仲空。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w7_1_wall_display_group_first_task_quiet_choice_1",
            "text": "我幫你按住張紙。",
            "buttonText": "我幫你按住張紙。",
            "playerLine": "我幫你按住，唔好郁。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_1_wall_display_group_first_task_quiet_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心點點頭，剪刀慢慢沿著紙邊走。她沒有講多謝很大聲，但把下一張紙也推到你看得見的位置。"
            },
            "resultText": "穎心點點頭，剪刀慢慢沿著紙邊走。她沒有講多謝很大聲，但把下一張紙也推到你看得見的位置。",
            "statusDelta": {
              "自信": 1,
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
              "eventId": "w7_1_wall_display_group_first_task",
              "variantId": "quiet",
              "mustMatchEventTitle": "班際壁報小組第一次分工"
            }
          },
          {
            "id": "w7_1_wall_display_group_first_task_quiet_choice_2",
            "text": "我畫一朵細花。",
            "buttonText": "我畫一朵細花。",
            "playerLine": "我畫一朵細細朵，可以嗎？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_1_wall_display_group_first_task_quiet_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心看了看你畫的位置，輕聲說：「可以。」她把自己的花貼在旁邊，兩朵花隔得很近。"
            },
            "resultText": "穎心看了看你畫的位置，輕聲說：「可以。」她把自己的花貼在旁邊，兩朵花隔得很近。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "w7_1_wall_display_group_first_task",
              "variantId": "quiet",
              "mustMatchEventTitle": "班際壁報小組第一次分工"
            }
          },
          {
            "id": "w7_1_wall_display_group_first_task_quiet_choice_3",
            "text": "你想貼邊度呀？",
            "buttonText": "你想貼邊度呀？",
            "playerLine": "你想貼邊度？我唔知放邊。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_1_wall_display_group_first_task_quiet_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心用鉛筆在白紙角落點一下，不敢畫太深。你照著那個小點貼，紙面多了一個安靜的位置。"
            },
            "resultText": "穎心用鉛筆在白紙角落點一下，不敢畫太深。你照著那個小點貼，紙面多了一個安靜的位置。",
            "statusDelta": {
              "自信": 1,
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
              "eventId": "w7_1_wall_display_group_first_task",
              "variantId": "quiet",
              "mustMatchEventTitle": "班際壁報小組第一次分工"
            }
          },
          {
            "id": "w7_1_wall_display_group_first_task_quiet_choice_4",
            "text": "我先睇你點整。",
            "buttonText": "我先睇你點整。",
            "playerLine": "我先睇你整。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_1_wall_display_group_first_task_quiet_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心沒有催你加入，只是把動作放慢一點。你看著她先壓紙、再剪、再試位置，好像慢慢知道可以怎樣開始。"
            },
            "resultText": "穎心沒有催你加入，只是把動作放慢一點。你看著她先壓紙、再剪、再試位置，好像慢慢知道可以怎樣開始。",
            "statusDelta": {
              "自信": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_1_wall_display_group_first_task",
              "variantId": "quiet",
              "mustMatchEventTitle": "班際壁報小組第一次分工"
            }
          }
        ]
      },
      {
        "variantId": "competitive",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_competitive_peer",
        "npcIdHint": "classmate_competitive_peer",
        "npcNameFallback": "梓軒",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "梓軒一坐下就看隔壁組。隔壁組已經有人拿筆寫大字，他皺起眉：「佢哋好快喎。我哋唔好慢過佢哋。」他把黑色筆遞給你：「你寫字靚唔靚？」"
          }
        ],
        "playerChoices": [
          {
            "id": "w7_1_wall_display_group_first_task_competitive_choice_1",
            "text": "我試寫一個字。",
            "buttonText": "我試寫一個字。",
            "playerLine": "我試一個字先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_1_wall_display_group_first_task_competitive_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒把白紙角落讓出來，眼睛盯著你的筆。你寫得慢，他沒有立刻搶回去，只說：「唔好太細。」"
            },
            "resultText": "梓軒把白紙角落讓出來，眼睛盯著你的筆。你寫得慢，他沒有立刻搶回去，只說：「唔好太細。」",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "w7_1_wall_display_group_first_task",
              "variantId": "competitive",
              "mustMatchEventTitle": "班際壁報小組第一次分工"
            }
          },
          {
            "id": "w7_1_wall_display_group_first_task_competitive_choice_2",
            "text": "你寫，我幫你貼。",
            "buttonText": "你寫，我幫你貼。",
            "playerLine": "你寫啦，我貼。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_1_wall_display_group_first_task_competitive_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒立刻坐直，像終於有人同意分工。他寫第一個字時很用力，紙有點皺，你只好小心把膠水塗少一點。"
            },
            "resultText": "梓軒立刻坐直，像終於有人同意分工。他寫第一個字時很用力，紙有點皺，你只好小心把膠水塗少一點。",
            "statusDelta": {
              "自信": 1,
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
              "eventId": "w7_1_wall_display_group_first_task",
              "variantId": "competitive",
              "mustMatchEventTitle": "班際壁報小組第一次分工"
            }
          },
          {
            "id": "w7_1_wall_display_group_first_task_competitive_choice_3",
            "text": "唔好成日比啦。",
            "buttonText": "唔好成日比啦。",
            "playerLine": "唔好咁快比啦，先做完自己嗰張。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_1_wall_display_group_first_task_competitive_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒想反駁，但看見你手上的紙還沒剪好，只好把眼睛移回自己組。他小聲說：「咁都要快。」"
            },
            "resultText": "梓軒想反駁，但看見你手上的紙還沒剪好，只好把眼睛移回自己組。他小聲說：「咁都要快。」",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "w7_1_wall_display_group_first_task",
              "variantId": "competitive",
              "mustMatchEventTitle": "班際壁報小組第一次分工"
            }
          },
          {
            "id": "w7_1_wall_display_group_first_task_competitive_choice_4",
            "text": "我唔知靚唔靚。",
            "buttonText": "我唔知靚唔靚。",
            "playerLine": "我唔知呀，我未寫落咁大張紙。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_1_wall_display_group_first_task_competitive_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒手上的筆停了一下，像沒想到你會直接說不知道。他沒有笑，只把紙轉向自己：「咁我先寫一個。」"
            },
            "resultText": "梓軒手上的筆停了一下，像沒想到你會直接說不知道。他沒有笑，只把紙轉向自己：「咁我先寫一個。」",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "w7_1_wall_display_group_first_task",
              "variantId": "competitive",
              "mustMatchEventTitle": "班際壁報小組第一次分工"
            }
          }
        ]
      },
      {
        "variantId": "curious",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_mischief_maker",
        "npcIdHint": "classmate_curious_troublemaker",
        "npcNameFallback": "柏宇",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "柏宇",
            "text": "柏宇把綠色紙捲成一條筒，放在眼前像望遠鏡。他望著白紙下面那片空位，壓低聲音：「如果校園下面有秘密路，畫唔畫得？」他又把紙筒放低：「不過老師可能睇唔明。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w7_1_wall_display_group_first_task_curious_choice_1",
            "text": "畫個秘密角落。",
            "buttonText": "畫個秘密角落。",
            "playerLine": "畫個細細嘅秘密角落啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_1_wall_display_group_first_task_curious_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇眼睛亮起來，馬上把綠紙剪成一條彎彎的路。你們把它放在操場旁邊，像只有很細心的人才會看到。"
            },
            "resultText": "柏宇眼睛亮起來，馬上把綠紙剪成一條彎彎的路。你們把它放在操場旁邊，像只有很細心的人才會看到。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "w7_1_wall_display_group_first_task",
              "variantId": "curious",
              "mustMatchEventTitle": "班際壁報小組第一次分工"
            }
          },
          {
            "id": "w7_1_wall_display_group_first_task_curious_choice_2",
            "text": "唔好太奇怪啦。",
            "buttonText": "唔好太奇怪啦。",
            "playerLine": "唔好整到老師唔明呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_1_wall_display_group_first_task_curious_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇嘟囔一句：「咁畫細啲囉。」他把秘密路縮到角落，仍然偷偷加了一個小箭嘴。"
            },
            "resultText": "柏宇嘟囔一句：「咁畫細啲囉。」他把秘密路縮到角落，仍然偷偷加了一個小箭嘴。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "w7_1_wall_display_group_first_task",
              "variantId": "curious",
              "mustMatchEventTitle": "班際壁報小組第一次分工"
            }
          },
          {
            "id": "w7_1_wall_display_group_first_task_curious_choice_3",
            "text": "先畫普通操場。",
            "buttonText": "先畫普通操場。",
            "playerLine": "先畫操場啦，老師一定睇得明。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_1_wall_display_group_first_task_curious_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇有點失望，但還是拿起綠色筆畫草地。他畫著畫著，又在草地邊加了一個小小的洞。"
            },
            "resultText": "柏宇有點失望，但還是拿起綠色筆畫草地。他畫著畫著，又在草地邊加了一個小小的洞。",
            "statusDelta": {
              "自信": 1,
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
              "eventId": "w7_1_wall_display_group_first_task",
              "variantId": "curious",
              "mustMatchEventTitle": "班際壁報小組第一次分工"
            }
          },
          {
            "id": "w7_1_wall_display_group_first_task_curious_choice_4",
            "text": "條路去邊㗎？",
            "buttonText": "條路去邊㗎？",
            "playerLine": "你條秘密路去邊㗎？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_1_wall_display_group_first_task_curious_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇馬上靠近白紙，像這個問題很重要。他指著紙邊說：「去小食……唔係，去圖書角後面。」"
            },
            "resultText": "柏宇馬上靠近白紙，像這個問題很重要。他指著紙邊說：「去小食……唔係，去圖書角後面。」",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_1_wall_display_group_first_task",
              "variantId": "curious",
              "mustMatchEventTitle": "班際壁報小組第一次分工"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "w7_2_classroom_cleaning_duty_roster",
    "sourceTopicId": "W7-2",
    "weekPool": "W7_authored_weekly",
    "week": 7,
    "dateRange": "Oct 13–Oct 19",
    "category": "school",
    "title": "班房清潔／值日表新規矩",
    "sceneIntro": "午飯後，課室地上有飯粒、紙碎和幾張用過的紙巾。老師說班房不能只等姨姨收拾，從這星期開始每天有小組值日。黑板旁貼出一張新值日表，大家都伸長頸找自己的名字。",
    "propertyValidation": null,
    "sceneIntroOverrides": [],
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        7,
        7
      ],
      "conditions": [],
      "exclusiveGroup": "w7_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "strict_teacher",
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": "pers_strict_academic",
        "npcIdHint": "teacher_strict_academic",
        "npcNameFallback": "老師",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師拿著值日表，聲音不大，但每個字都很清楚：「掃地、抹桌、排椅，做完先走。自己睇邊日，唔好明日先話唔知。」她把表格貼正，轉身看全班。"
          }
        ],
        "playerChoices": [
          {
            "id": "w7_2_classroom_cleaning_duty_roster_strict_teacher_choice_1",
            "text": "行近少少睇名字。",
            "buttonText": "行近少少睇名字。",
            "playerLine": "我睇下我係邊日。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_2_classroom_cleaning_duty_roster_strict_teacher_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師沒有稱讚你，只是讓開一點。你找到自己的名字時，心裡比剛才定了一點。"
            },
            "resultText": "老師沒有稱讚你，只是讓開一點。你找到自己的名字時，心裡比剛才定了一點。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_2_classroom_cleaning_duty_roster",
              "variantId": "strict_teacher",
              "mustMatchEventTitle": "班房清潔／值日表新規矩"
            }
          },
          {
            "id": "w7_2_classroom_cleaning_duty_roster_strict_teacher_choice_2",
            "text": "問今日係咪到我。",
            "buttonText": "問今日係咪到我。",
            "playerLine": "老師，今日係咪我做？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_2_classroom_cleaning_duty_roster_strict_teacher_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師指著表格說：「你自己睇先。」語氣硬，但她也用手指幫你找到那一行。"
            },
            "resultText": "老師指著表格說：「你自己睇先。」語氣硬，但她也用手指幫你找到那一行。",
            "statusDelta": {
              "自信": 1,
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
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_2_classroom_cleaning_duty_roster",
              "variantId": "strict_teacher",
              "mustMatchEventTitle": "班房清潔／值日表新規矩"
            }
          },
          {
            "id": "w7_2_classroom_cleaning_duty_roster_strict_teacher_choice_3",
            "text": "先幫手排椅。",
            "buttonText": "先幫手排椅。",
            "playerLine": "我排椅先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_2_classroom_cleaning_duty_roster_strict_teacher_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把一張椅子推回桌底。老師看見後說：「小心手。」她沒有多講，但沒有阻止你。"
            },
            "resultText": "你把一張椅子推回桌底。老師看見後說：「小心手。」她沒有多講，但沒有阻止你。",
            "statusDelta": {
              "社交": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_2_classroom_cleaning_duty_roster",
              "variantId": "strict_teacher",
              "mustMatchEventTitle": "班房清潔／值日表新規矩"
            }
          },
          {
            "id": "w7_2_classroom_cleaning_duty_roster_strict_teacher_choice_4",
            "text": "企後面等人講。",
            "buttonText": "企後面等人講。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_2_classroom_cleaning_duty_roster_strict_teacher_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你站在後面，前面同學擋住表格。老師很快指向你：「唔好淨係等，過嚟睇。」你只好慢慢走近。"
            },
            "resultText": "你站在後面，前面同學擋住表格。老師很快指向你：「唔好淨係等，過嚟睇。」你只好慢慢走近。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_2_classroom_cleaning_duty_roster",
              "variantId": "strict_teacher",
              "mustMatchEventTitle": "班房清潔／值日表新規矩"
            }
          }
        ]
      },
      {
        "variantId": "fair_teacher",
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": "pers_fair_observer",
        "npcIdHint": "teacher_fair_observer",
        "npcNameFallback": "老師",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師把值日表貼直，又用粉筆圈起今天的小組：「今日先試一次，唔係考試。每人做一樣，做錯可以再改。」她把掃把靠在門邊，抹布放在講台上。"
          }
        ],
        "playerChoices": [
          {
            "id": "w7_2_classroom_cleaning_duty_roster_fair_teacher_choice_1",
            "text": "我掃地。",
            "buttonText": "我掃地。",
            "playerLine": "我掃地啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_2_classroom_cleaning_duty_roster_fair_teacher_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你拿起掃把時有點不順手，老師指了指紙碎最多的位置：「由嗰邊開始。」你終於知道第一步。"
            },
            "resultText": "你拿起掃把時有點不順手，老師指了指紙碎最多的位置：「由嗰邊開始。」你終於知道第一步。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_2_classroom_cleaning_duty_roster",
              "variantId": "fair_teacher",
              "mustMatchEventTitle": "班房清潔／值日表新規矩"
            }
          },
          {
            "id": "w7_2_classroom_cleaning_duty_roster_fair_teacher_choice_2",
            "text": "我抹桌。",
            "buttonText": "我抹桌。",
            "playerLine": "我抹桌，可以嗎？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_2_classroom_cleaning_duty_roster_fair_teacher_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師把抹布交給你，提醒不要弄濕書本。你先擦自己那張桌，再看旁邊還有沒有水印。"
            },
            "resultText": "老師把抹布交給你，提醒不要弄濕書本。你先擦自己那張桌，再看旁邊還有沒有水印。",
            "statusDelta": {
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_2_classroom_cleaning_duty_roster",
              "variantId": "fair_teacher",
              "mustMatchEventTitle": "班房清潔／值日表新規矩"
            }
          },
          {
            "id": "w7_2_classroom_cleaning_duty_roster_fair_teacher_choice_3",
            "text": "問可以同邊個一組。",
            "buttonText": "問可以同邊個一組。",
            "playerLine": "老師，我同邊個一齊？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_2_classroom_cleaning_duty_roster_fair_teacher_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師看了一眼表格，把你指到同組同學旁邊。原本亂成一團的值日，好像有了隊形。"
            },
            "resultText": "老師看了一眼表格，把你指到同組同學旁邊。原本亂成一團的值日，好像有了隊形。",
            "statusDelta": {
              "自信": 1,
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
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_2_classroom_cleaning_duty_roster",
              "variantId": "fair_teacher",
              "mustMatchEventTitle": "班房清潔／值日表新規矩"
            }
          },
          {
            "id": "w7_2_classroom_cleaning_duty_roster_fair_teacher_choice_4",
            "text": "等老師分。",
            "buttonText": "等老師分。",
            "playerLine": "我等老師分。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_2_classroom_cleaning_duty_roster_fair_teacher_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師最後把你安排去排椅。你沒有做錯，但等到最後才知道自己要做甚麼，時間已經少了一點。"
            },
            "resultText": "老師最後把你安排去排椅。你沒有做錯，但等到最後才知道自己要做甚麼，時間已經少了一點。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_2_classroom_cleaning_duty_roster",
              "variantId": "fair_teacher",
              "mustMatchEventTitle": "班房清潔／值日表新規矩"
            }
          }
        ]
      },
      {
        "variantId": "caring_teacher",
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": "pers_pastoral_care_teacher",
        "npcIdHint": "teacher_pastoral_care",
        "npcNameFallback": "老師",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師看見幾個同學盯著值日表不說話，語氣放慢：「未識睇表可以問。唔好自己驚。」她把今日組別用粉筆圈出來，又說：「今日只係試第一次。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w7_2_classroom_cleaning_duty_roster_caring_teacher_choice_1",
            "text": "舉手問自己做咩。",
            "buttonText": "舉手問自己做咩。",
            "playerLine": "老師，我做邊樣？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_2_classroom_cleaning_duty_roster_caring_teacher_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師點點頭，沒有笑你。她把你帶到門邊：「你先收紙碎，見到就執。」事情變得很細，沒那麼嚇人。"
            },
            "resultText": "老師點點頭，沒有笑你。她把你帶到門邊：「你先收紙碎，見到就執。」事情變得很細，沒那麼嚇人。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_2_classroom_cleaning_duty_roster",
              "variantId": "caring_teacher",
              "mustMatchEventTitle": "班房清潔／值日表新規矩"
            }
          },
          {
            "id": "w7_2_classroom_cleaning_duty_roster_caring_teacher_choice_2",
            "text": "跟住同組同學。",
            "buttonText": "跟住同組同學。",
            "playerLine": "我跟住你哋做。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_2_classroom_cleaning_duty_roster_caring_teacher_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "同組同學先拿掃把，你就跟著拿簸箕。你不太知道流程，但有人動起來後，你也比較敢動。"
            },
            "resultText": "同組同學先拿掃把，你就跟著拿簸箕。你不太知道流程，但有人動起來後，你也比較敢動。",
            "statusDelta": {
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_2_classroom_cleaning_duty_roster",
              "variantId": "caring_teacher",
              "mustMatchEventTitle": "班房清潔／值日表新規矩"
            }
          },
          {
            "id": "w7_2_classroom_cleaning_duty_roster_caring_teacher_choice_3",
            "text": "先收紙碎。",
            "buttonText": "先收紙碎。",
            "playerLine": "我執紙碎先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_2_classroom_cleaning_duty_roster_caring_teacher_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你蹲下撿起桌腳旁的紙。老師看見後說：「呢樣就係幫手。」你發現值日不一定一開始就要很懂。"
            },
            "resultText": "你蹲下撿起桌腳旁的紙。老師看見後說：「呢樣就係幫手。」你發現值日不一定一開始就要很懂。",
            "statusDelta": {
              "社交": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_2_classroom_cleaning_duty_roster",
              "variantId": "caring_teacher",
              "mustMatchEventTitle": "班房清潔／值日表新規矩"
            }
          },
          {
            "id": "w7_2_classroom_cleaning_duty_roster_caring_teacher_choice_4",
            "text": "細聲問旁邊同學。",
            "buttonText": "細聲問旁邊同學。",
            "playerLine": "你知唔知我做咩？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_2_classroom_cleaning_duty_roster_caring_teacher_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "旁邊同學看了看表格，小聲說你們同組。老師沒有打斷你們，只讓你們自己找到位置。"
            },
            "resultText": "旁邊同學看了看表格，小聲說你們同組。老師沒有打斷你們，只讓你們自己找到位置。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_2_classroom_cleaning_duty_roster",
              "variantId": "caring_teacher",
              "mustMatchEventTitle": "班房清潔／值日表新規矩"
            }
          }
        ]
      },
      {
        "variantId": "gachang",
        "variantType": "seniorStudent",
        "identityTypeId": "senior_student",
        "personalityId": "pers_senior_gentle_helper",
        "npcIdHint": "senior_gentle_helper_gachang",
        "npcNameFallback": "嘉澄",
        "unknownDisplayName": "圖書服務生",
        "knownDisplayName": "嘉澄師姐",
        "unlockCharacterId": "senior_gentle_helper_gachang",
        "openingDialogue": [
          {
            "speaker": "嘉澄師姐",
            "text": "放學前，一位圖書服務生抱著一疊書經過課室門口。她看見門邊的掃把倒了，先把書抱緊，再用腳尖輕輕把掃把扶正：「呢支唔好擺門口，會跣。」她看一眼黑板旁的值日表：「你哋今日開始值日？」"
          }
        ],
        "playerChoices": [
          {
            "id": "w7_2_classroom_cleaning_duty_roster_gachang_choice_1",
            "text": "問掃把放邊。",
            "buttonText": "問掃把放邊。",
            "playerLine": "師姐，掃把放邊度？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_2_classroom_cleaning_duty_roster_gachang_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她指向門後角落：「嗰度。唔好擋門。」她沒有走進來管你們，只把最容易絆倒人的地方說清楚。"
            },
            "resultText": "她指向門後角落：「嗰度。唔好擋門。」她沒有走進來管你們，只把最容易絆倒人的地方說清楚。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_gentle_helper_gachang",
                "trueName": "嘉澄",
                "sourceEventId": "w7_2_classroom_cleaning_duty_roster"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_2_classroom_cleaning_duty_roster",
              "variantId": "gachang",
              "mustMatchEventTitle": "班房清潔／值日表新規矩"
            }
          },
          {
            "id": "w7_2_classroom_cleaning_duty_roster_gachang_choice_2",
            "text": "自己放回角落。",
            "buttonText": "自己放回角落。",
            "playerLine": "我放返入去。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_2_classroom_cleaning_duty_roster_gachang_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把掃把靠回角落。圖書服務生點點頭，抱著書走之前說：「咁樣好啲。」那句很短，但像真的有用。"
            },
            "resultText": "你把掃把靠回角落。圖書服務生點點頭，抱著書走之前說：「咁樣好啲。」那句很短，但像真的有用。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_gentle_helper_gachang",
                "trueName": "嘉澄",
                "sourceEventId": "w7_2_classroom_cleaning_duty_roster"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_2_classroom_cleaning_duty_roster",
              "variantId": "gachang",
              "mustMatchEventTitle": "班房清潔／值日表新規矩"
            }
          },
          {
            "id": "w7_2_classroom_cleaning_duty_roster_gachang_choice_3",
            "text": "說我哋仲未識做。",
            "buttonText": "說我哋仲未識做。",
            "playerLine": "我哋仲未識值日。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_2_classroom_cleaning_duty_roster_gachang_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她看了看表格，又看你一眼：「第一次係咁。先收大件嘅。」她說完便走了，沒有替你做完。"
            },
            "resultText": "她看了看表格，又看你一眼：「第一次係咁。先收大件嘅。」她說完便走了，沒有替你做完。",
            "statusDelta": {
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "班務服務": 1
            },
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_gentle_helper_gachang",
                "trueName": "嘉澄",
                "sourceEventId": "w7_2_classroom_cleaning_duty_roster"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_2_classroom_cleaning_duty_roster",
              "variantId": "gachang",
              "mustMatchEventTitle": "班房清潔／值日表新規矩"
            }
          },
          {
            "id": "w7_2_classroom_cleaning_duty_roster_gachang_choice_4",
            "text": "只點頭，繼續收桌面。",
            "buttonText": "只點頭，繼續收桌面。",
            "playerLine": "嗯。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_2_classroom_cleaning_duty_roster_gachang_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她沒有追問，只把掃把扶好。你繼續把桌上的紙收到一起，門口沒有那麼亂了。"
            },
            "resultText": "她沒有追問，只把掃把扶好。你繼續把桌上的紙收到一起，門口沒有那麼亂了。",
            "statusDelta": {
              "自信": 1,
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
              "eventId": "w7_2_classroom_cleaning_duty_roster",
              "variantId": "gachang",
              "mustMatchEventTitle": "班房清潔／值日表新規矩"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "w7_3_sports_day_first_notice",
    "sourceTopicId": "W7-3",
    "weekPool": "W7_authored_weekly",
    "week": 7,
    "dateRange": "Oct 13–Oct 19",
    "category": "school",
    "title": "運動日初步消息",
    "sceneIntro": "體育堂前，老師把幾張通告放在講台上，說十一月會有運動日，今天只是先講項目，真正報名遲一點才開始。班裡一下子吵起來，有人問跑步，有人問接力，有人只問那天是不是不用上課。",
    "propertyValidation": null,
    "sceneIntroOverrides": [],
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        7,
        7
      ],
      "conditions": [],
      "exclusiveGroup": "w7_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "outgoing",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "家朗把通告角壓住，眼睛很亮：「運動日喎。如果有接力，我哋可唔可以一組？」他又小聲補一句：「我唔係最快，不過我想試。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w7_3_sports_day_first_notice_outgoing_choice_1",
            "text": "我都想試下。",
            "buttonText": "我都想試下。",
            "playerLine": "我都想試下。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_3_sports_day_first_notice_outgoing_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗立刻開始想誰跑第一棒，講到一半又停住：「不過都未報名。」運動日還很遠，但他已經把你算進去了。"
            },
            "resultText": "家朗立刻開始想誰跑第一棒，講到一半又停住：「不過都未報名。」運動日還很遠，但他已經把你算進去了。",
            "statusDelta": {
              "社交": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_3_sports_day_first_notice",
              "variantId": "outgoing",
              "mustMatchEventTitle": "運動日初步消息"
            }
          },
          {
            "id": "w7_3_sports_day_first_notice_outgoing_choice_2",
            "text": "接力點玩？",
            "buttonText": "接力點玩？",
            "playerLine": "接力係咪一個跑完到一個？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_3_sports_day_first_notice_outgoing_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗用手比了一個交棒動作，差點碰到你的筆盒。他自己也不太懂，但講得很認真。"
            },
            "resultText": "家朗用手比了一個交棒動作，差點碰到你的筆盒。他自己也不太懂，但講得很認真。",
            "statusDelta": {
              "自信": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_3_sports_day_first_notice",
              "variantId": "outgoing",
              "mustMatchEventTitle": "運動日初步消息"
            }
          },
          {
            "id": "w7_3_sports_day_first_notice_outgoing_choice_3",
            "text": "我想睇多啲先。",
            "buttonText": "我想睇多啲先。",
            "playerLine": "我想睇下先，未報住。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_3_sports_day_first_notice_outgoing_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗點點頭，還是把通告推近你：「咁你睇住先。」他沒有硬拉你，只是把熱鬧放在你旁邊。"
            },
            "resultText": "家朗點點頭，還是把通告推近你：「咁你睇住先。」他沒有硬拉你，只是把熱鬧放在你旁邊。",
            "statusDelta": {
              "自信": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_3_sports_day_first_notice",
              "variantId": "outgoing",
              "mustMatchEventTitle": "運動日初步消息"
            }
          },
          {
            "id": "w7_3_sports_day_first_notice_outgoing_choice_4",
            "text": "會唔會好攰？",
            "buttonText": "會唔會好攰？",
            "playerLine": "跑步會唔會好攰㗎？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_3_sports_day_first_notice_outgoing_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗想了一下：「應該會啦。但跑完可以飲水。」這個答案沒有很有用，不過很像他真的在想。"
            },
            "resultText": "家朗想了一下：「應該會啦。但跑完可以飲水。」這個答案沒有很有用，不過很像他真的在想。",
            "statusDelta": {
              "理智值": 1,
              "壓力": -1
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
              "eventId": "w7_3_sports_day_first_notice",
              "variantId": "outgoing",
              "mustMatchEventTitle": "運動日初步消息"
            }
          }
        ]
      },
      {
        "variantId": "competitive",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_competitive_peer",
        "npcIdHint": "classmate_competitive_peer",
        "npcNameFallback": "梓軒",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "梓軒先找通告上有沒有「名次」兩個字。他用手指劃過項目表，低聲說：「如果有第一名，應該好多人報。」他看向你：「你跑得快唔快？」"
          }
        ],
        "playerChoices": [
          {
            "id": "w7_3_sports_day_first_notice_competitive_choice_1",
            "text": "未跑唔知。",
            "buttonText": "未跑唔知。",
            "playerLine": "未跑，點知呀？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_3_sports_day_first_notice_competitive_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒像不太滿意這個答案，但又反駁不了。他把通告摺起來，說：「咁遲啲跑先知。」"
            },
            "resultText": "梓軒像不太滿意這個答案，但又反駁不了。他把通告摺起來，說：「咁遲啲跑先知。」",
            "statusDelta": {
              "自信": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_3_sports_day_first_notice",
              "variantId": "competitive",
              "mustMatchEventTitle": "運動日初步消息"
            }
          },
          {
            "id": "w7_3_sports_day_first_notice_competitive_choice_2",
            "text": "你快唔快？",
            "buttonText": "你快唔快？",
            "playerLine": "咁你跑得快唔快？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_3_sports_day_first_notice_competitive_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒立刻坐直：「都快啦。」說完他又看一眼通告，像怕這句到時要證明。"
            },
            "resultText": "梓軒立刻坐直：「都快啦。」說完他又看一眼通告，像怕這句到時要證明。",
            "statusDelta": {
              "社交": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_3_sports_day_first_notice",
              "variantId": "competitive",
              "mustMatchEventTitle": "運動日初步消息"
            }
          },
          {
            "id": "w7_3_sports_day_first_notice_competitive_choice_3",
            "text": "我想報冇咁多人睇嗰啲。",
            "buttonText": "我想報冇咁多人睇嗰啲。",
            "playerLine": "我想報少啲人望嗰啲。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_3_sports_day_first_notice_competitive_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒愣了一下：「運動日點會冇人望？」他說得像問題，但沒有笑你。"
            },
            "resultText": "梓軒愣了一下：「運動日點會冇人望？」他說得像問題，但沒有笑你。",
            "statusDelta": {
              "自信": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_3_sports_day_first_notice",
              "variantId": "competitive",
              "mustMatchEventTitle": "運動日初步消息"
            }
          },
          {
            "id": "w7_3_sports_day_first_notice_competitive_choice_4",
            "text": "我唔想比速度。",
            "buttonText": "我唔想比速度。",
            "playerLine": "我唔想鬥快。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_3_sports_day_first_notice_competitive_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒皺眉，看起來不太懂你為甚麼不想比。可是他沒有再問，只把視線放回項目表。"
            },
            "resultText": "梓軒皺眉，看起來不太懂你為甚麼不想比。可是他沒有再問，只把視線放回項目表。",
            "statusDelta": {
              "自信": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_3_sports_day_first_notice",
              "variantId": "competitive",
              "mustMatchEventTitle": "運動日初步消息"
            }
          }
        ]
      },
      {
        "variantId": "hoiching",
        "variantType": "seniorStudent",
        "identityTypeId": "senior_student",
        "personalityId": "pers_senior_competitive_captain",
        "npcIdHint": "senior_captain_hoiching",
        "npcNameFallback": "凱晴",
        "unknownDisplayName": "校隊女生",
        "knownDisplayName": "凱晴師姐",
        "unlockCharacterId": "senior_captain_hoiching",
        "openingDialogue": [
          {
            "speaker": "凱晴師姐",
            "text": "小息時，一位校隊女生在操場邊收練習繩。她聽見你們講運動日，抬頭說：「報咗就要練㗎，唔係到時會亂。」她不是罵人，只是語氣很直，手上還在把繩子捲好。"
          }
        ],
        "playerChoices": [
          {
            "id": "w7_3_sports_day_first_notice_hoiching_choice_1",
            "text": "問點樣練。",
            "buttonText": "問點樣練。",
            "playerLine": "師姐，點樣練先得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_3_sports_day_first_notice_hoiching_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她指著跑道白線：「先聽口令，唔好一開始就衝。」你發現她不是只叫人快，也會講第一步。"
            },
            "resultText": "她指著跑道白線：「先聽口令，唔好一開始就衝。」你發現她不是只叫人快，也會講第一步。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_captain_hoiching",
                "trueName": "凱晴",
                "sourceEventId": "w7_3_sports_day_first_notice"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_3_sports_day_first_notice",
              "variantId": "hoiching",
              "mustMatchEventTitle": "運動日初步消息"
            }
          },
          {
            "id": "w7_3_sports_day_first_notice_hoiching_choice_2",
            "text": "我未決定報唔報。",
            "buttonText": "我未決定報唔報。",
            "playerLine": "我未諗好報唔報。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_3_sports_day_first_notice_hoiching_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她點頭：「未諗好就唔好亂寫名。」語氣硬硬的，但這句其實是給你退路。"
            },
            "resultText": "她點頭：「未諗好就唔好亂寫名。」語氣硬硬的，但這句其實是給你退路。",
            "statusDelta": {
              "自信": 1,
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_captain_hoiching",
                "trueName": "凱晴",
                "sourceEventId": "w7_3_sports_day_first_notice"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_3_sports_day_first_notice",
              "variantId": "hoiching",
              "mustMatchEventTitle": "運動日初步消息"
            }
          },
          {
            "id": "w7_3_sports_day_first_notice_hoiching_choice_3",
            "text": "可唔可以慢慢跑？",
            "buttonText": "可唔可以慢慢跑？",
            "playerLine": "可唔可以慢慢跑㗎？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_3_sports_day_first_notice_hoiching_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她看你一眼：「練習可以慢，聽口令唔可以慢。」你不完全懂，但記住了那句「聽口令」。"
            },
            "resultText": "她看你一眼：「練習可以慢，聽口令唔可以慢。」你不完全懂，但記住了那句「聽口令」。",
            "statusDelta": {
              "自信": 1,
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
              "足球": 1
            },
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_captain_hoiching",
                "trueName": "凱晴",
                "sourceEventId": "w7_3_sports_day_first_notice"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_3_sports_day_first_notice",
              "variantId": "hoiching",
              "mustMatchEventTitle": "運動日初步消息"
            }
          },
          {
            "id": "w7_3_sports_day_first_notice_hoiching_choice_4",
            "text": "先看她們練。",
            "buttonText": "先看她們練。",
            "playerLine": "我睇陣先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_3_sports_day_first_notice_hoiching_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你站在旁邊看她們把繩子排好。校隊女生沒有叫你加入，只在跑道上喊了一次：「線後面。」"
            },
            "resultText": "你站在旁邊看她們把繩子排好。校隊女生沒有叫你加入，只在跑道上喊了一次：「線後面。」",
            "statusDelta": {
              "理智值": 1,
              "壓力": -1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_3_sports_day_first_notice",
              "variantId": "hoiching",
              "mustMatchEventTitle": "運動日初步消息"
            }
          }
        ]
      },
      {
        "variantId": "teacher_notice",
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": null,
        "npcIdHint": "teacher_announcement",
        "npcNameFallback": "老師",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師把運動日通告派下來：「今日先帶返屋企俾家長睇。未報名，唔使而家決定。」有人已經舉手想問項目，老師敲敲桌面：「先收好，唔好整唔見。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w7_3_sports_day_first_notice_teacher_notice_choice_1",
            "text": "夾入手冊。",
            "buttonText": "夾入手冊。",
            "playerLine": "我放入手冊先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_3_sports_day_first_notice_teacher_notice_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把通告夾到手冊裡，紙角露出一點。周圍還在猜比賽，你至少知道它不會在書包裡亂飛。"
            },
            "resultText": "你把通告夾到手冊裡，紙角露出一點。周圍還在猜比賽，你至少知道它不會在書包裡亂飛。",
            "statusDelta": {
              "自信": 1,
              "體力": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_3_sports_day_first_notice",
              "variantId": "teacher_notice",
              "mustMatchEventTitle": "運動日初步消息"
            }
          },
          {
            "id": "w7_3_sports_day_first_notice_teacher_notice_choice_2",
            "text": "問幾時報名。",
            "buttonText": "問幾時報名。",
            "playerLine": "老師，幾時先報名？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_3_sports_day_first_notice_teacher_notice_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說下星期才會講清楚。你還是有點想早點知道，但不用今天就選。"
            },
            "resultText": "老師說下星期才會講清楚。你還是有點想早點知道，但不用今天就選。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_3_sports_day_first_notice",
              "variantId": "teacher_notice",
              "mustMatchEventTitle": "運動日初步消息"
            }
          },
          {
            "id": "w7_3_sports_day_first_notice_teacher_notice_choice_3",
            "text": "問旁邊同學參唔參加。",
            "buttonText": "問旁邊同學參唔參加。",
            "playerLine": "你會唔會參加呀？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_3_sports_day_first_notice_teacher_notice_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "旁邊同學也不知道，只說可能。你們兩個看著通告，像一起面對一件還沒發生的事。"
            },
            "resultText": "旁邊同學也不知道，只說可能。你們兩個看著通告，像一起面對一件還沒發生的事。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_3_sports_day_first_notice",
              "variantId": "teacher_notice",
              "mustMatchEventTitle": "運動日初步消息"
            }
          },
          {
            "id": "w7_3_sports_day_first_notice_teacher_notice_choice_4",
            "text": "先唔理運動日。",
            "buttonText": "先唔理運動日。",
            "playerLine": "我遲啲先睇。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_3_sports_day_first_notice_teacher_notice_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把通告收好，但腦裡仍聽見同學講「接力」「跑步」。就算你先不理，它也開始進入班房的話題。"
            },
            "resultText": "你把通告收好，但腦裡仍聽見同學講「接力」「跑步」。就算你先不理，它也開始進入班房的話題。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_3_sports_day_first_notice",
              "variantId": "teacher_notice",
              "mustMatchEventTitle": "運動日初步消息"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "w7_4_group_work_too_fast_too_slow",
    "sourceTopicId": "W7-4",
    "weekPool": "W7_authored_weekly",
    "week": 7,
    "dateRange": "Oct 13–Oct 19",
    "category": "social",
    "title": "小組工作有人太快／太慢",
    "sceneIntro": "壁報小組第二次開工，老師只給十五分鐘。桌上的標題還沒貼好，有些圖還沒乾。時間一少，大家的節奏就變得很不一樣：有人急著搶紙，有人拿著筆不敢畫，有人想幫忙但不知道插在哪裡。",
    "propertyValidation": null,
    "sceneIntroOverrides": [],
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        7,
        7
      ],
      "conditions": [],
      "exclusiveGroup": "w7_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "outgoing",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "家朗已經拿起兩張紙，嘴裡不停說：「呢張貼呢度，嗰張貼上面，快啲快啲。」他轉頭看見你還在找位置，才停一下：「啊……你聽唔聽得切？」"
          }
        ],
        "playerChoices": [
          {
            "id": "w7_4_group_work_too_fast_too_slow_outgoing_choice_1",
            "text": "講慢啲。",
            "buttonText": "講慢啲。",
            "playerLine": "你講慢啲，我聽唔切。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_4_group_work_too_fast_too_slow_outgoing_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗抓抓頭，把手上的紙分成一張一張：「咁你先貼呢張。」他還是急，但終於一次只講一件。"
            },
            "resultText": "家朗抓抓頭，把手上的紙分成一張一張：「咁你先貼呢張。」他還是急，但終於一次只講一件。",
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
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_4_group_work_too_fast_too_slow",
              "variantId": "outgoing",
              "mustMatchEventTitle": "小組工作有人太快／太慢"
            }
          },
          {
            "id": "w7_4_group_work_too_fast_too_slow_outgoing_choice_2",
            "text": "我幫你拎膠水。",
            "buttonText": "我幫你拎膠水。",
            "playerLine": "我拎膠水先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_4_group_work_too_fast_too_slow_outgoing_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你拿起膠水遞給他，家朗立刻說多謝，下一秒又找另一張紙。你沒有被拉去做最難的事，但有參與到。"
            },
            "resultText": "你拿起膠水遞給他，家朗立刻說多謝，下一秒又找另一張紙。你沒有被拉去做最難的事，但有參與到。",
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
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_4_group_work_too_fast_too_slow",
              "variantId": "outgoing",
              "mustMatchEventTitle": "小組工作有人太快／太慢"
            }
          },
          {
            "id": "w7_4_group_work_too_fast_too_slow_outgoing_choice_3",
            "text": "我做邊張？",
            "buttonText": "我做邊張？",
            "playerLine": "我做邊張呀？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_4_group_work_too_fast_too_slow_outgoing_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗把最小那張紙給你：「呢張，貼角落。」你有了明確任務，雖然他已經跑去看另一邊。"
            },
            "resultText": "家朗把最小那張紙給你：「呢張，貼角落。」你有了明確任務，雖然他已經跑去看另一邊。",
            "statusDelta": {
              "社交": 1,
              "體力": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_4_group_work_too_fast_too_slow",
              "variantId": "outgoing",
              "mustMatchEventTitle": "小組工作有人太快／太慢"
            }
          },
          {
            "id": "w7_4_group_work_too_fast_too_slow_outgoing_choice_4",
            "text": "自己貼一張細的。",
            "buttonText": "自己貼一張細的。",
            "playerLine": "我貼呢張細嘅。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_4_group_work_too_fast_too_slow_outgoing_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有等家朗分配，自己把細紙貼好。家朗回頭時說：「咦，得咗喎。」語氣有點驚喜。"
            },
            "resultText": "你沒有等家朗分配，自己把細紙貼好。家朗回頭時說：「咦，得咗喎。」語氣有點驚喜。",
            "statusDelta": {
              "自信": 1,
              "壓力": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_4_group_work_too_fast_too_slow",
              "variantId": "outgoing",
              "mustMatchEventTitle": "小組工作有人太快／太慢"
            }
          }
        ]
      },
      {
        "variantId": "quiet",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_quiet_observer",
        "npcIdHint": "classmate_quiet_observer",
        "npcNameFallback": "穎心",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "穎心",
            "text": "穎心用鉛筆畫邊線，畫得很慢。旁邊有人催：「得未呀？」她沒有回嘴，只擦掉一小截線。你看見她的手停在紙邊，像是不知道應不應該繼續。"
          }
        ],
        "playerChoices": [
          {
            "id": "w7_4_group_work_too_fast_too_slow_quiet_choice_1",
            "text": "幫她擋一擋。",
            "buttonText": "幫她擋一擋。",
            "playerLine": "等陣先，佢差少少。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_4_group_work_too_fast_too_slow_quiet_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "催人的同學停了一下。穎心沒有抬頭，只很小聲說：「差少少。」她終於把那條線畫完。"
            },
            "resultText": "催人的同學停了一下。穎心沒有抬頭，只很小聲說：「差少少。」她終於把那條線畫完。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "w7_4_group_work_too_fast_too_slow",
              "variantId": "quiet",
              "mustMatchEventTitle": "小組工作有人太快／太慢"
            }
          },
          {
            "id": "w7_4_group_work_too_fast_too_slow_quiet_choice_2",
            "text": "問要不要幫貼。",
            "buttonText": "問要不要幫貼。",
            "playerLine": "你畫完，我幫你貼，好唔好？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_4_group_work_too_fast_too_slow_quiet_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心點點頭，把膠水推到你旁邊。她不用立刻被催快，只要知道下一步有人接住。"
            },
            "resultText": "穎心點點頭，把膠水推到你旁邊。她不用立刻被催快，只要知道下一步有人接住。",
            "statusDelta": {
              "自信": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_4_group_work_too_fast_too_slow",
              "variantId": "quiet",
              "mustMatchEventTitle": "小組工作有人太快／太慢"
            }
          },
          {
            "id": "w7_4_group_work_too_fast_too_slow_quiet_choice_3",
            "text": "叫大家等一陣。",
            "buttonText": "叫大家等一陣。",
            "playerLine": "等多陣啦，未乾。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_4_group_work_too_fast_too_slow_quiet_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "大家看向那塊還有點濕的顏色。你說完後，桌邊安靜了幾秒，足夠讓紙不要被弄花。"
            },
            "resultText": "大家看向那塊還有點濕的顏色。你說完後，桌邊安靜了幾秒，足夠讓紙不要被弄花。",
            "statusDelta": {
              "自信": 1,
              "創意": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_4_group_work_too_fast_too_slow",
              "variantId": "quiet",
              "mustMatchEventTitle": "小組工作有人太快／太慢"
            }
          },
          {
            "id": "w7_4_group_work_too_fast_too_slow_quiet_choice_4",
            "text": "先做自己那一角。",
            "buttonText": "先做自己那一角。",
            "playerLine": "我先做我嗰邊。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_4_group_work_too_fast_too_slow_quiet_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你低頭完成自己的小角落。穎心仍然慢慢畫線，你沒有幫她擋，但也沒有加入催促。"
            },
            "resultText": "你低頭完成自己的小角落。穎心仍然慢慢畫線，你沒有幫她擋，但也沒有加入催促。",
            "statusDelta": {
              "自信": 1,
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
              "eventId": "w7_4_group_work_too_fast_too_slow",
              "variantId": "quiet",
              "mustMatchEventTitle": "小組工作有人太快／太慢"
            }
          }
        ]
      },
      {
        "variantId": "competitive",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_competitive_peer",
        "npcIdHint": "classmate_competitive_peer",
        "npcNameFallback": "梓軒",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "梓軒看見別組快貼完了，立刻把你們組的字排得很密：「快啲啦，唔係輸㗎。」有張紙被貼歪，他皺眉想撕起來。"
          }
        ],
        "playerChoices": [
          {
            "id": "w7_4_group_work_too_fast_too_slow_competitive_choice_1",
            "text": "先唔好撕。",
            "buttonText": "先唔好撕。",
            "playerLine": "唔好撕住，會爛㗎。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_4_group_work_too_fast_too_slow_competitive_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒的手停在紙角。他皺眉看了幾秒，最後只是用手指把邊按平。"
            },
            "resultText": "梓軒的手停在紙角。他皺眉看了幾秒，最後只是用手指把邊按平。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_4_group_work_too_fast_too_slow",
              "variantId": "competitive",
              "mustMatchEventTitle": "小組工作有人太快／太慢"
            }
          },
          {
            "id": "w7_4_group_work_too_fast_too_slow_competitive_choice_2",
            "text": "幫他對齊。",
            "buttonText": "幫他對齊。",
            "playerLine": "我幫你睇直唔直。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_4_group_work_too_fast_too_slow_competitive_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把紙邊對著底線，梓軒不再只盯著隔壁組。那張紙貼得慢一點，但沒有歪得更嚴重。"
            },
            "resultText": "你把紙邊對著底線，梓軒不再只盯著隔壁組。那張紙貼得慢一點，但沒有歪得更嚴重。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_4_group_work_too_fast_too_slow",
              "variantId": "competitive",
              "mustMatchEventTitle": "小組工作有人太快／太慢"
            }
          },
          {
            "id": "w7_4_group_work_too_fast_too_slow_competitive_choice_3",
            "text": "歪少少都得。",
            "buttonText": "歪少少都得。",
            "playerLine": "歪少少都得啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_4_group_work_too_fast_too_slow_competitive_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒看起來很難接受，但老師走近時，他只把紙再按緊一點。不是完美，但來得及完成。"
            },
            "resultText": "梓軒看起來很難接受，但老師走近時，他只把紙再按緊一點。不是完美，但來得及完成。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_4_group_work_too_fast_too_slow",
              "variantId": "competitive",
              "mustMatchEventTitle": "小組工作有人太快／太慢"
            }
          },
          {
            "id": "w7_4_group_work_too_fast_too_slow_competitive_choice_4",
            "text": "讓他自己改。",
            "buttonText": "讓他自己改。",
            "playerLine": "你改啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_4_group_work_too_fast_too_slow_competitive_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒把紙角撕起來一點，膠水把底紙拉皺了。他立刻停住，臉色比剛才更急。"
            },
            "resultText": "梓軒把紙角撕起來一點，膠水把底紙拉皺了。他立刻停住，臉色比剛才更急。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_4_group_work_too_fast_too_slow",
              "variantId": "competitive",
              "mustMatchEventTitle": "小組工作有人太快／太慢"
            }
          }
        ]
      },
      {
        "variantId": "curious",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_mischief_maker",
        "npcIdHint": "classmate_curious_troublemaker",
        "npcNameFallback": "柏宇",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "柏宇",
            "text": "柏宇把一朵雲貼到校舍上面，還想貼一隻像怪獸的紙影。有人問他做甚麼，他說：「呢個係守住校門嘅雲怪。」桌邊有人笑，有人開始急。"
          }
        ],
        "playerChoices": [
          {
            "id": "w7_4_group_work_too_fast_too_slow_curious_choice_1",
            "text": "雲怪貼細啲。",
            "buttonText": "雲怪貼細啲。",
            "playerLine": "雲怪細隻啲得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_4_group_work_too_fast_too_slow_curious_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇把紙影剪小一圈，還是很捨不得丟掉。他說：「咁佢做細怪。」大家比較能接受了。"
            },
            "resultText": "柏宇把紙影剪小一圈，還是很捨不得丟掉。他說：「咁佢做細怪。」大家比較能接受了。",
            "statusDelta": {
              "社交": 1,
              "創意": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_4_group_work_too_fast_too_slow",
              "variantId": "curious",
              "mustMatchEventTitle": "小組工作有人太快／太慢"
            }
          },
          {
            "id": "w7_4_group_work_too_fast_too_slow_curious_choice_2",
            "text": "幫它改名字。",
            "buttonText": "幫它改名字。",
            "playerLine": "叫佢校門怪啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_4_group_work_too_fast_too_slow_curious_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇馬上笑出聲，把名字寫在很小的紙條上。壁報多了一個只有你們組懂的小笑位。"
            },
            "resultText": "柏宇馬上笑出聲，把名字寫在很小的紙條上。壁報多了一個只有你們組懂的小笑位。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "w7_4_group_work_too_fast_too_slow",
              "variantId": "curious",
              "mustMatchEventTitle": "小組工作有人太快／太慢"
            }
          },
          {
            "id": "w7_4_group_work_too_fast_too_slow_curious_choice_3",
            "text": "先貼標題。",
            "buttonText": "先貼標題。",
            "playerLine": "標題未貼呀，先貼標題。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_4_group_work_too_fast_too_slow_curious_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇嘆氣，把雲怪放到一邊。你們先貼大字，但他一直用手指壓住那隻怪，不讓它不見。"
            },
            "resultText": "柏宇嘆氣，把雲怪放到一邊。你們先貼大字，但他一直用手指壓住那隻怪，不讓它不見。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_4_group_work_too_fast_too_slow",
              "variantId": "curious",
              "mustMatchEventTitle": "小組工作有人太快／太慢"
            }
          },
          {
            "id": "w7_4_group_work_too_fast_too_slow_curious_choice_4",
            "text": "收好多出的紙。",
            "buttonText": "收好多出的紙。",
            "playerLine": "我收埋啲碎紙先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w7_4_group_work_too_fast_too_slow_curious_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把桌上的碎紙收在一堆，柏宇在裡面找回怪獸的尾巴。桌面清了些，大家也比較看得見還有甚麼沒做。"
            },
            "resultText": "你把桌上的碎紙收在一堆，柏宇在裡面找回怪獸的尾巴。桌面清了些，大家也比較看得見還有甚麼沒做。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w7_4_group_work_too_fast_too_slow",
              "variantId": "curious",
              "mustMatchEventTitle": "小組工作有人太快／太慢"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "w8_5_mom_birthday_no_celebration",
    "sourceTopicId": "W8-5",
    "weekPool": "W8_authored_weekly",
    "week": 8,
    "dateRange": "Oct 20–Oct 26",
    "category": "family",
    "title": "媽媽生日快到，但她說不用慶祝",
    "sceneIntro": "晚上吃飯時，你看見雪櫃上的月曆有一天被爸爸用原子筆圈起來。你問那是甚麼日子，大人本來在夾餸，動作慢了一下。原來媽媽生日快到了，但媽媽很快說今年不用特別慶祝。",
    "propertyValidation": null,
    "sceneIntroOverrides": [],
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        8,
        8
      ],
      "conditions": [],
      "exclusiveGroup": "w8_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "mom",
        "variantType": "family",
        "identityTypeId": "family_elder",
        "personalityId": null,
        "npcIdHint": "char_mom",
        "npcNameFallback": "媽媽",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "媽媽",
            "text": "媽媽把碗放下，笑了一下：「唔使搞啦，平平常常食餐飯就得。」她又把話題拉回你身上：「你今日手冊簽咗未？」"
          }
        ],
        "playerChoices": [
          {
            "id": "w8_5_mom_birthday_no_celebration_mom_choice_1",
            "text": "想食蛋糕嗎？",
            "buttonText": "想食蛋糕嗎？",
            "playerLine": "媽媽，你想唔想食蛋糕？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_5_mom_birthday_no_celebration_mom_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽說不用買很大的，但嘴角有一點笑。你發現她不是完全不想，只是不想大家太麻煩。"
            },
            "resultText": "媽媽說不用買很大的，但嘴角有一點笑。你發現她不是完全不想，只是不想大家太麻煩。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_5_mom_birthday_no_celebration",
              "variantId": "mom",
              "mustMatchEventTitle": "媽媽生日快到，但她說不用慶祝"
            }
          },
          {
            "id": "w8_5_mom_birthday_no_celebration_mom_choice_2",
            "text": "我畫張卡。",
            "buttonText": "我畫張卡。",
            "playerLine": "我可以畫張卡俾你。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_5_mom_birthday_no_celebration_mom_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽手上的筷子停了一下，笑得比剛才久：「好呀。」她沒有說很多，但那張卡忽然變成真的要做。"
            },
            "resultText": "媽媽手上的筷子停了一下，笑得比剛才久：「好呀。」她沒有說很多，但那張卡忽然變成真的要做。",
            "statusDelta": {
              "理智值": 1,
              "壓力": -1
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
              "eventId": "w8_5_mom_birthday_no_celebration",
              "variantId": "mom",
              "mustMatchEventTitle": "媽媽生日快到，但她說不用慶祝"
            }
          },
          {
            "id": "w8_5_mom_birthday_no_celebration_mom_choice_3",
            "text": "先拿手冊。",
            "buttonText": "先拿手冊。",
            "playerLine": "我去拎手冊先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_5_mom_birthday_no_celebration_mom_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把手冊拿出來，生日話題暫時放下。媽媽簽名時仍看了一眼月曆，好像那天還在那裡。"
            },
            "resultText": "你把手冊拿出來，生日話題暫時放下。媽媽簽名時仍看了一眼月曆，好像那天還在那裡。",
            "statusDelta": {
              "理智值": 1,
              "壓力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_5_mom_birthday_no_celebration",
              "variantId": "mom",
              "mustMatchEventTitle": "媽媽生日快到，但她說不用慶祝"
            }
          },
          {
            "id": "w8_5_mom_birthday_no_celebration_mom_choice_4",
            "text": "不再問。",
            "buttonText": "不再問。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_5_mom_birthday_no_celebration_mom_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你繼續吃飯。大人很快講別的事，但你記住了月曆上的圈。"
            },
            "resultText": "你繼續吃飯。大人很快講別的事，但你記住了月曆上的圈。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_5_mom_birthday_no_celebration",
              "variantId": "mom",
              "mustMatchEventTitle": "媽媽生日快到，但她說不用慶祝"
            }
          }
        ]
      },
      {
        "variantId": "dad",
        "variantType": "family",
        "identityTypeId": "family_elder",
        "personalityId": null,
        "npcIdHint": "char_dad",
        "npcNameFallback": "爸爸",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "爸爸",
            "text": "爸爸看了月曆，又看媽媽，壓低聲音對你說：「你想唔想整張小卡俾媽媽？唔使大件事。」他說得像偷偷任務，但又怕你太興奮講出來。"
          }
        ],
        "playerChoices": [
          {
            "id": "w8_5_mom_birthday_no_celebration_dad_choice_1",
            "text": "細聲話想。",
            "buttonText": "細聲話想。",
            "playerLine": "想。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_5_mom_birthday_no_celebration_dad_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸把一張白紙對摺，塞到你手裡。他自己也有點累，但把紙邊摺得很直。"
            },
            "resultText": "爸爸把一張白紙對摺，塞到你手裡。他自己也有點累，但把紙邊摺得很直。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_5_mom_birthday_no_celebration",
              "variantId": "dad",
              "mustMatchEventTitle": "媽媽生日快到，但她說不用慶祝"
            }
          },
          {
            "id": "w8_5_mom_birthday_no_celebration_dad_choice_2",
            "text": "畫咩好？",
            "buttonText": "畫咩好？",
            "playerLine": "畫咩好呀？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_5_mom_birthday_no_celebration_dad_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸想了想：「畫你同媽媽都得。」這個主意很簡單，你卻開始想媽媽的頭髮要畫多長。"
            },
            "resultText": "爸爸想了想：「畫你同媽媽都得。」這個主意很簡單，你卻開始想媽媽的頭髮要畫多長。",
            "statusDelta": {
              "自信": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_5_mom_birthday_no_celebration",
              "variantId": "dad",
              "mustMatchEventTitle": "媽媽生日快到，但她說不用慶祝"
            }
          },
          {
            "id": "w8_5_mom_birthday_no_celebration_dad_choice_3",
            "text": "驚媽媽知道。",
            "buttonText": "驚媽媽知道。",
            "playerLine": "會唔會畀媽媽見到？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_5_mom_birthday_no_celebration_dad_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸立刻把紙藏到報紙下面：「咁你返房畫。」你們兩個都看向媽媽，差點一起笑出來。"
            },
            "resultText": "爸爸立刻把紙藏到報紙下面：「咁你返房畫。」你們兩個都看向媽媽，差點一起笑出來。",
            "statusDelta": {
              "自信": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_5_mom_birthday_no_celebration",
              "variantId": "dad",
              "mustMatchEventTitle": "媽媽生日快到，但她說不用慶祝"
            }
          },
          {
            "id": "w8_5_mom_birthday_no_celebration_dad_choice_4",
            "text": "我唔識整。",
            "buttonText": "我唔識整。",
            "playerLine": "我唔識整卡。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_5_mom_birthday_no_celebration_dad_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸說畫一個心都可以。你覺得那好像很容易，又好像比買禮物還難。"
            },
            "resultText": "爸爸說畫一個心都可以。你覺得那好像很容易，又好像比買禮物還難。",
            "statusDelta": {
              "理智值": 1,
              "壓力": -1
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
              "eventId": "w8_5_mom_birthday_no_celebration",
              "variantId": "dad",
              "mustMatchEventTitle": "媽媽生日快到，但她說不用慶祝"
            }
          }
        ]
      },
      {
        "variantId": "player_self",
        "variantType": "system",
        "identityTypeId": null,
        "personalityId": null,
        "npcIdHint": "system_player_self",
        "npcNameFallback": "旁白",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "星期六下午，媽媽在廚房忙，桌上剛好有一盒彩色筆。你看見月曆上的圈，又想起媽媽說不用慶祝。沒有人叫你做甚麼，但那盒彩色筆放得很近。"
          }
        ],
        "playerChoices": [
          {
            "id": "w8_5_mom_birthday_no_celebration_player_self_choice_1",
            "text": "畫生日卡。",
            "buttonText": "畫生日卡。",
            "playerLine": "我畫張卡先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_5_mom_birthday_no_celebration_player_self_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把紙攤開，先畫了一個不太圓的蛋糕。畫到一半時，你一直聽著廚房聲，怕媽媽突然走出來。"
            },
            "resultText": "你把紙攤開，先畫了一個不太圓的蛋糕。畫到一半時，你一直聽著廚房聲，怕媽媽突然走出來。",
            "statusDelta": {
              "理智值": 1,
              "壓力": -1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_5_mom_birthday_no_celebration",
              "variantId": "player_self",
              "mustMatchEventTitle": "媽媽生日快到，但她說不用慶祝"
            }
          },
          {
            "id": "w8_5_mom_birthday_no_celebration_player_self_choice_2",
            "text": "寫生日快樂。",
            "buttonText": "寫生日快樂。",
            "playerLine": "我寫媽媽生日快樂。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_5_mom_birthday_no_celebration_player_self_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "字有一點大細不一，但你寫完後又看了很久。那幾個字看起來比平時功課更重要。"
            },
            "resultText": "字有一點大細不一，但你寫完後又看了很久。那幾個字看起來比平時功課更重要。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_5_mom_birthday_no_celebration",
              "variantId": "player_self",
              "mustMatchEventTitle": "媽媽生日快到，但她說不用慶祝"
            }
          },
          {
            "id": "w8_5_mom_birthday_no_celebration_player_self_choice_3",
            "text": "只畫一個蛋糕。",
            "buttonText": "只畫一個蛋糕。",
            "playerLine": "我畫蛋糕就得。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_5_mom_birthday_no_celebration_player_self_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有寫很多字，只畫了一個有蠟燭的蛋糕。蠟燭有點歪，但你覺得媽媽會看得懂。"
            },
            "resultText": "你沒有寫很多字，只畫了一個有蠟燭的蛋糕。蠟燭有點歪，但你覺得媽媽會看得懂。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_5_mom_birthday_no_celebration",
              "variantId": "player_self",
              "mustMatchEventTitle": "媽媽生日快到，但她說不用慶祝"
            }
          },
          {
            "id": "w8_5_mom_birthday_no_celebration_player_self_choice_4",
            "text": "先不做。",
            "buttonText": "先不做。",
            "playerLine": "我遲啲先畫。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_5_mom_birthday_no_celebration_player_self_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把彩色筆推回原位。過了一會兒你又看向月曆，那個圈還是很明顯。"
            },
            "resultText": "你把彩色筆推回原位。過了一會兒你又看向月曆，那個圈還是很明顯。",
            "statusDelta": {
              "理智值": 1,
              "壓力": -1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_5_mom_birthday_no_celebration",
              "variantId": "player_self",
              "mustMatchEventTitle": "媽媽生日快到，但她說不用慶祝"
            }
          }
        ]
      },
      {
        "variantId": "relative_mentions",
        "variantType": "family",
        "identityTypeId": "family_elder",
        "personalityId": null,
        "npcIdHint": "family_relative",
        "npcNameFallback": "親戚",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "親戚",
            "text": "電話裡，親戚問媽媽生日會不會出去吃飯。媽媽一邊聽一邊說：「唔啦，唔好使錢。」你坐在旁邊，只聽懂「生日」和「使錢」幾個字。"
          }
        ],
        "playerChoices": [
          {
            "id": "w8_5_mom_birthday_no_celebration_relative_mentions_choice_1",
            "text": "生日不能花錢？",
            "buttonText": "生日不能花錢？",
            "playerLine": "生日係咪唔可以使錢？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_5_mom_birthday_no_celebration_relative_mentions_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽掛線後摸摸你的頭，說不是不可以，只是不用太多。你還是不太明白，但知道生日不一定要很大。"
            },
            "resultText": "媽媽掛線後摸摸你的頭，說不是不可以，只是不用太多。你還是不太明白，但知道生日不一定要很大。",
            "statusDelta": {
              "理智值": 1,
              "壓力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_5_mom_birthday_no_celebration",
              "variantId": "relative_mentions",
              "mustMatchEventTitle": "媽媽生日快到，但她說不用慶祝"
            }
          },
          {
            "id": "w8_5_mom_birthday_no_celebration_relative_mentions_choice_2",
            "text": "媽媽不開心？",
            "buttonText": "媽媽不開心？",
            "playerLine": "媽媽，你係咪唔開心？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_5_mom_birthday_no_celebration_relative_mentions_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽愣了一下，說不是，只是有點忙。她坐近你一點，像怕你把那句「唔好使錢」聽得太重。"
            },
            "resultText": "媽媽愣了一下，說不是，只是有點忙。她坐近你一點，像怕你把那句「唔好使錢」聽得太重。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_5_mom_birthday_no_celebration",
              "variantId": "relative_mentions",
              "mustMatchEventTitle": "媽媽生日快到，但她說不用慶祝"
            }
          },
          {
            "id": "w8_5_mom_birthday_no_celebration_relative_mentions_choice_3",
            "text": "拿貼紙出來。",
            "buttonText": "拿貼紙出來。",
            "playerLine": "我有貼紙，可以貼卡。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_5_mom_birthday_no_celebration_relative_mentions_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你翻出幾張小貼紙。媽媽說現在不用貼，但你已經決定那張卡不會空空的。"
            },
            "resultText": "你翻出幾張小貼紙。媽媽說現在不用貼，但你已經決定那張卡不會空空的。",
            "statusDelta": {
              "理智值": 1,
              "壓力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_5_mom_birthday_no_celebration",
              "variantId": "relative_mentions",
              "mustMatchEventTitle": "媽媽生日快到，但她說不用慶祝"
            }
          },
          {
            "id": "w8_5_mom_birthday_no_celebration_relative_mentions_choice_4",
            "text": "安靜吃飯。",
            "buttonText": "安靜吃飯。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_5_mom_birthday_no_celebration_relative_mentions_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有再問，低頭吃飯。生日和錢在你腦裡黏在一起，像兩個你還未分得清的字。"
            },
            "resultText": "你沒有再問，低頭吃飯。生日和錢在你腦裡黏在一起，像兩個你還未分得清的字。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_5_mom_birthday_no_celebration",
              "variantId": "relative_mentions",
              "mustMatchEventTitle": "媽媽生日快到，但她說不用慶祝"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "w8_6_dad_tired_checks_handbook",
    "sourceTopicId": "W8-6",
    "weekPool": "W8_authored_weekly",
    "week": 8,
    "dateRange": "Oct 20–Oct 26",
    "category": "family",
    "title": "爸爸工作很累，但還是看手冊",
    "sceneIntro": "晚上，門口傳來鎖匙聲。爸爸回來時公事袋還掛在肩上，鞋也沒放好。媽媽提醒你今天手冊要簽，你拿著手冊站在飯桌邊，不知道現在拿過去會不會打擾他。",
    "propertyValidation": null,
    "sceneIntroOverrides": [],
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        8,
        8
      ],
      "conditions": [],
      "exclusiveGroup": "w8_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "dad",
        "variantType": "family",
        "identityTypeId": "family_elder",
        "personalityId": null,
        "npcIdHint": "char_dad",
        "npcNameFallback": "爸爸",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "爸爸",
            "text": "爸爸揉揉眼睛，接過手冊：「畀我睇下，今日有咩？」他翻頁翻得慢，有一頁差點揭過頭，又翻回來。"
          }
        ],
        "playerChoices": [
          {
            "id": "w8_6_dad_tired_checks_handbook_dad_choice_1",
            "text": "指簽名位。",
            "buttonText": "指簽名位。",
            "playerLine": "簽呢度呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_6_dad_tired_checks_handbook_dad_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸跟著你的手指找到格仔，簽名有點斜。他笑笑說：「好彩你知邊度。」"
            },
            "resultText": "爸爸跟著你的手指找到格仔，簽名有點斜。他笑笑說：「好彩你知邊度。」",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_6_dad_tired_checks_handbook",
              "variantId": "dad",
              "mustMatchEventTitle": "爸爸工作很累，但還是看手冊"
            }
          },
          {
            "id": "w8_6_dad_tired_checks_handbook_dad_choice_2",
            "text": "慢慢睇。",
            "buttonText": "慢慢睇。",
            "playerLine": "你慢慢睇啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_6_dad_tired_checks_handbook_dad_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸抬頭看你一眼，像有點意外。他把手冊放近一點，慢慢讀完老師寫的那行字。"
            },
            "resultText": "爸爸抬頭看你一眼，像有點意外。他把手冊放近一點，慢慢讀完老師寫的那行字。",
            "statusDelta": {
              "自信": 1,
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_6_dad_tired_checks_handbook",
              "variantId": "dad",
              "mustMatchEventTitle": "爸爸工作很累，但還是看手冊"
            }
          },
          {
            "id": "w8_6_dad_tired_checks_handbook_dad_choice_3",
            "text": "你今日好攰？",
            "buttonText": "你今日好攰？",
            "playerLine": "爸爸，你好攰呀？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_6_dad_tired_checks_handbook_dad_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸說「有少少」，但仍然拿起筆。你看見他的字寫得比平時慢。"
            },
            "resultText": "爸爸說「有少少」，但仍然拿起筆。你看見他的字寫得比平時慢。",
            "statusDelta": {
              "紀律": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_6_dad_tired_checks_handbook",
              "variantId": "dad",
              "mustMatchEventTitle": "爸爸工作很累，但還是看手冊"
            }
          },
          {
            "id": "w8_6_dad_tired_checks_handbook_dad_choice_4",
            "text": "放低就走開。",
            "buttonText": "放低就走開。",
            "playerLine": "我放喺度。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_6_dad_tired_checks_handbook_dad_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把手冊放在桌角。爸爸過了一會兒才發現它，差點被碗擋住。幸好他最後還是簽了。"
            },
            "resultText": "你把手冊放在桌角。爸爸過了一會兒才發現它，差點被碗擋住。幸好他最後還是簽了。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_6_dad_tired_checks_handbook",
              "variantId": "dad",
              "mustMatchEventTitle": "爸爸工作很累，但還是看手冊"
            }
          }
        ]
      },
      {
        "variantId": "mom",
        "variantType": "family",
        "identityTypeId": "family_elder",
        "personalityId": null,
        "npcIdHint": "char_mom",
        "npcNameFallback": "媽媽",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "媽媽",
            "text": "媽媽看見爸爸很累，先把手冊接過去：「我睇咗先，你等爸爸食啖飯。」她把碗筷移開，替手冊騰出位置。"
          }
        ],
        "playerChoices": [
          {
            "id": "w8_6_dad_tired_checks_handbook_mom_choice_1",
            "text": "先給媽媽。",
            "buttonText": "先給媽媽。",
            "playerLine": "媽媽你先睇。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_6_dad_tired_checks_handbook_mom_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽把頁角摺一點點，讓爸爸等一下能一眼看到。手冊沒有馬上簽，但事情被放在看得見的位置。"
            },
            "resultText": "媽媽把頁角摺一點點，讓爸爸等一下能一眼看到。手冊沒有馬上簽，但事情被放在看得見的位置。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_6_dad_tired_checks_handbook",
              "variantId": "mom",
              "mustMatchEventTitle": "爸爸工作很累，但還是看手冊"
            }
          },
          {
            "id": "w8_6_dad_tired_checks_handbook_mom_choice_2",
            "text": "等爸爸吃完。",
            "buttonText": "等爸爸吃完。",
            "playerLine": "咁我等爸爸食完先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_6_dad_tired_checks_handbook_mom_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把手冊抱回胸前，站了一會兒又坐下。等待讓你有點急，但爸爸終於放下筷子時，你還記得。"
            },
            "resultText": "你把手冊抱回胸前，站了一會兒又坐下。等待讓你有點急，但爸爸終於放下筷子時，你還記得。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_6_dad_tired_checks_handbook",
              "variantId": "mom",
              "mustMatchEventTitle": "爸爸工作很累，但還是看手冊"
            }
          },
          {
            "id": "w8_6_dad_tired_checks_handbook_mom_choice_3",
            "text": "問簽邊頁。",
            "buttonText": "問簽邊頁。",
            "playerLine": "係咪簽呢頁？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_6_dad_tired_checks_handbook_mom_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽看了一眼，幫你翻到正確位置。你發現自己不一定要一次找對，也可以問。"
            },
            "resultText": "媽媽看了一眼，幫你翻到正確位置。你發現自己不一定要一次找對，也可以問。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_6_dad_tired_checks_handbook",
              "variantId": "mom",
              "mustMatchEventTitle": "爸爸工作很累，但還是看手冊"
            }
          },
          {
            "id": "w8_6_dad_tired_checks_handbook_mom_choice_4",
            "text": "我驚唔記得。",
            "buttonText": "我驚唔記得。",
            "playerLine": "我驚一陣唔記得。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_6_dad_tired_checks_handbook_mom_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽把手冊放到飯桌正中：「咁放呢度。」那本手冊擋住了菜碟的一角，誰都很難忽略。"
            },
            "resultText": "媽媽把手冊放到飯桌正中：「咁放呢度。」那本手冊擋住了菜碟的一角，誰都很難忽略。",
            "statusDelta": {
              "壓力": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_6_dad_tired_checks_handbook",
              "variantId": "mom",
              "mustMatchEventTitle": "爸爸工作很累，但還是看手冊"
            }
          }
        ]
      },
      {
        "variantId": "player_talks",
        "variantType": "family",
        "identityTypeId": "family_elder",
        "personalityId": null,
        "npcIdHint": "family_player_initiates",
        "npcNameFallback": "家人",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "家人",
            "text": "你本來想等大人問，卻想起老師說明天會檢查。爸爸還在脫外套，你已經把手冊拿在手裡。"
          }
        ],
        "playerChoices": [
          {
            "id": "w8_6_dad_tired_checks_handbook_player_talks_choice_1",
            "text": "今日要簽手冊。",
            "buttonText": "今日要簽手冊。",
            "playerLine": "爸爸，今日要簽手冊。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_6_dad_tired_checks_handbook_player_talks_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你講得有點急，爸爸愣了一下才點頭。幸好你手冊已經拿出來，不用再翻書包。"
            },
            "resultText": "你講得有點急，爸爸愣了一下才點頭。幸好你手冊已經拿出來，不用再翻書包。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_6_dad_tired_checks_handbook",
              "variantId": "player_talks",
              "mustMatchEventTitle": "爸爸工作很累，但還是看手冊"
            }
          },
          {
            "id": "w8_6_dad_tired_checks_handbook_player_talks_choice_2",
            "text": "等爸爸坐下。",
            "buttonText": "等爸爸坐下。",
            "playerLine": "我等你坐低先講。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_6_dad_tired_checks_handbook_player_talks_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你忍住沒有立刻開口。爸爸坐下喝水後，你再把手冊放過去，聲音比剛才穩一點。"
            },
            "resultText": "你忍住沒有立刻開口。爸爸坐下喝水後，你再把手冊放過去，聲音比剛才穩一點。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_6_dad_tired_checks_handbook",
              "variantId": "player_talks",
              "mustMatchEventTitle": "爸爸工作很累，但還是看手冊"
            }
          },
          {
            "id": "w8_6_dad_tired_checks_handbook_player_talks_choice_3",
            "text": "先翻到那頁。",
            "buttonText": "先翻到那頁。",
            "playerLine": "我翻到嗰頁先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_6_dad_tired_checks_handbook_player_talks_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把簽名頁找出來，用手指壓著。爸爸看到後很快簽了，沒有在一堆紙裡找很久。"
            },
            "resultText": "你把簽名頁找出來，用手指壓著。爸爸看到後很快簽了，沒有在一堆紙裡找很久。",
            "statusDelta": {
              "紀律": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_6_dad_tired_checks_handbook",
              "variantId": "player_talks",
              "mustMatchEventTitle": "爸爸工作很累，但還是看手冊"
            }
          },
          {
            "id": "w8_6_dad_tired_checks_handbook_player_talks_choice_4",
            "text": "請媽媽幫我講。",
            "buttonText": "請媽媽幫我講。",
            "playerLine": "媽媽，你幫我講得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_6_dad_tired_checks_handbook_player_talks_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽替你開口，爸爸接過手冊。你沒有自己講出口，但事情沒有拖到睡前。"
            },
            "resultText": "媽媽替你開口，爸爸接過手冊。你沒有自己講出口，但事情沒有拖到睡前。",
            "statusDelta": {
              "社交": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_6_dad_tired_checks_handbook",
              "variantId": "player_talks",
              "mustMatchEventTitle": "爸爸工作很累，但還是看手冊"
            }
          }
        ]
      },
      {
        "variantId": "player_avoids",
        "variantType": "family",
        "identityTypeId": "family_elder",
        "personalityId": null,
        "npcIdHint": "family_player_avoids",
        "npcNameFallback": "家人",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "家人",
            "text": "爸爸看起來很累，你把手冊放回書包裡，想著等一下再講。電視聲、洗碗聲和大人說話聲混在一起，時間慢慢過去。"
          }
        ],
        "playerChoices": [
          {
            "id": "w8_6_dad_tired_checks_handbook_player_avoids_choice_1",
            "text": "現在拿出來。",
            "buttonText": "現在拿出來。",
            "playerLine": "都係而家簽先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_6_dad_tired_checks_handbook_player_avoids_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把手冊重新拿出來，心跳有點快。爸爸有點累，但還是接過去簽了。"
            },
            "resultText": "你把手冊重新拿出來，心跳有點快。爸爸有點累，但還是接過去簽了。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_6_dad_tired_checks_handbook",
              "variantId": "player_avoids",
              "mustMatchEventTitle": "爸爸工作很累，但還是看手冊"
            }
          },
          {
            "id": "w8_6_dad_tired_checks_handbook_player_avoids_choice_2",
            "text": "睡前再講。",
            "buttonText": "睡前再講。",
            "playerLine": "我瞓前先講。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_6_dad_tired_checks_handbook_player_avoids_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你一直記著這件事，連刷牙時也想起。睡前講出口時，大家都比晚飯時更睏。"
            },
            "resultText": "你一直記著這件事，連刷牙時也想起。睡前講出口時，大家都比晚飯時更睏。",
            "statusDelta": {
              "紀律": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_6_dad_tired_checks_handbook",
              "variantId": "player_avoids",
              "mustMatchEventTitle": "爸爸工作很累，但還是看手冊"
            }
          },
          {
            "id": "w8_6_dad_tired_checks_handbook_player_avoids_choice_3",
            "text": "放到飯桌上。",
            "buttonText": "放到飯桌上。",
            "playerLine": "我放枱面先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_6_dad_tired_checks_handbook_player_avoids_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有叫人簽，只把手冊放在最明顯的位置。媽媽經過時看見，提醒爸爸簽名。"
            },
            "resultText": "你沒有叫人簽，只把手冊放在最明顯的位置。媽媽經過時看見，提醒爸爸簽名。",
            "statusDelta": {
              "紀律": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_6_dad_tired_checks_handbook",
              "variantId": "player_avoids",
              "mustMatchEventTitle": "爸爸工作很累，但還是看手冊"
            }
          },
          {
            "id": "w8_6_dad_tired_checks_handbook_player_avoids_choice_4",
            "text": "今日不提。",
            "buttonText": "今日不提。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_6_dad_tired_checks_handbook_player_avoids_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把書包拉鍊拉上。手冊安靜地躺在裡面，你心裡也跟著有點不安靜。"
            },
            "resultText": "你把書包拉鍊拉上。手冊安靜地躺在裡面，你心裡也跟著有點不安靜。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_6_dad_tired_checks_handbook",
              "variantId": "player_avoids",
              "mustMatchEventTitle": "爸爸工作很累，但還是看手冊"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "w8_7_family_interest_class_stationery_money",
    "sourceTopicId": "W8-7",
    "weekPool": "W8_authored_weekly",
    "week": 8,
    "dateRange": "Oct 20–Oct 26",
    "category": "family",
    "title": "家裡討論興趣班／文具用品錢",
    "sceneIntro": "星期日，飯桌上有超市收據、學校通告和一張興趣班單張。你想要一盒新的香味擦膠，但大人在講報名費、文具和下個月的開支。你聽不懂全部，只知道每樣東西好像都要錢。",
    "propertyValidation": null,
    "sceneIntroOverrides": [],
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        8,
        8
      ],
      "conditions": [],
      "exclusiveGroup": "w8_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "mom",
        "variantType": "family",
        "identityTypeId": "family_elder",
        "personalityId": null,
        "npcIdHint": "char_mom",
        "npcNameFallback": "媽媽",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "媽媽",
            "text": "媽媽把興趣班單張摺起來：「唔係話唔俾你學，不過要諗清楚係咪真係想學。」她看見你手上的文具廣告，又問：「你而家嗰盒顏色筆仲用唔用到？」"
          }
        ],
        "playerChoices": [
          {
            "id": "w8_7_family_interest_class_stationery_money_mom_choice_1",
            "text": "舊筆仲用到。",
            "buttonText": "舊筆仲用到。",
            "playerLine": "仲有幾支用到。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_7_family_interest_class_stationery_money_mom_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽叫你拿出來看看。你發現有些顏色真的還能用，有些已經很淡。"
            },
            "resultText": "媽媽叫你拿出來看看。你發現有些顏色真的還能用，有些已經很淡。",
            "statusDelta": {
              "創意": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_7_family_interest_class_stationery_money",
              "variantId": "mom",
              "mustMatchEventTitle": "家裡討論興趣班／文具用品錢"
            }
          },
          {
            "id": "w8_7_family_interest_class_stationery_money_mom_choice_2",
            "text": "我想學畫畫。",
            "buttonText": "我想學畫畫。",
            "playerLine": "我想學畫畫。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_7_family_interest_class_stationery_money_mom_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽沒有立刻答應，只問你是不是想每星期都去。你想到「每星期」三個字，才知道不是只去一次。"
            },
            "resultText": "媽媽沒有立刻答應，只問你是不是想每星期都去。你想到「每星期」三個字，才知道不是只去一次。",
            "statusDelta": {
              "自信": 1,
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
              "eventId": "w8_7_family_interest_class_stationery_money",
              "variantId": "mom",
              "mustMatchEventTitle": "家裡討論興趣班／文具用品錢"
            }
          },
          {
            "id": "w8_7_family_interest_class_stationery_money_mom_choice_3",
            "text": "遲啲買可以嗎？",
            "buttonText": "遲啲買可以嗎？",
            "playerLine": "咁遲啲先買得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_7_family_interest_class_stationery_money_mom_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽點頭，說如果真的用完再買。你沒有拿到新文具，但也不是被完全拒絕。"
            },
            "resultText": "媽媽點頭，說如果真的用完再買。你沒有拿到新文具，但也不是被完全拒絕。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_7_family_interest_class_stationery_money",
              "variantId": "mom",
              "mustMatchEventTitle": "家裡討論興趣班／文具用品錢"
            }
          },
          {
            "id": "w8_7_family_interest_class_stationery_money_mom_choice_4",
            "text": "放低廣告。",
            "buttonText": "放低廣告。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_7_family_interest_class_stationery_money_mom_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把文具廣告放低。媽媽沒有再追問，但你眼睛還是忍不住看那盒香味擦膠。"
            },
            "resultText": "你把文具廣告放低。媽媽沒有再追問，但你眼睛還是忍不住看那盒香味擦膠。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_7_family_interest_class_stationery_money",
              "variantId": "mom",
              "mustMatchEventTitle": "家裡討論興趣班／文具用品錢"
            }
          }
        ]
      },
      {
        "variantId": "dad",
        "variantType": "family",
        "identityTypeId": "family_elder",
        "personalityId": null,
        "npcIdHint": "char_dad",
        "npcNameFallback": "爸爸",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "爸爸",
            "text": "爸爸看著價錢，眉頭皺了一下：「報一樣可以，唔好樣樣都報。」他把單張推到你面前：「你揀一個最想試嘅。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w8_7_family_interest_class_stationery_money_dad_choice_1",
            "text": "揀畫畫。",
            "buttonText": "揀畫畫。",
            "playerLine": "我想試畫畫。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_7_family_interest_class_stationery_money_dad_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸把畫畫班那一欄圈起來，但說還要看時間。你第一次覺得一個選擇會佔住星期六。"
            },
            "resultText": "爸爸把畫畫班那一欄圈起來，但說還要看時間。你第一次覺得一個選擇會佔住星期六。",
            "statusDelta": {
              "創意": 1,
              "家庭關係": 1
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
              "eventId": "w8_7_family_interest_class_stationery_money",
              "variantId": "dad",
              "mustMatchEventTitle": "家裡討論興趣班／文具用品錢"
            }
          },
          {
            "id": "w8_7_family_interest_class_stationery_money_dad_choice_2",
            "text": "揀朗誦。",
            "buttonText": "揀朗誦。",
            "playerLine": "我想試朗誦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_7_family_interest_class_stationery_money_dad_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸看了看課程時間，問你敢不敢讀給人聽。你沒有馬上回答，但沒有把手縮回去。"
            },
            "resultText": "爸爸看了看課程時間，問你敢不敢讀給人聽。你沒有馬上回答，但沒有把手縮回去。",
            "statusDelta": {
              "自信": 1,
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
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_7_family_interest_class_stationery_money",
              "variantId": "dad",
              "mustMatchEventTitle": "家裡討論興趣班／文具用品錢"
            }
          },
          {
            "id": "w8_7_family_interest_class_stationery_money_dad_choice_3",
            "text": "可以唔揀住？",
            "buttonText": "可以唔揀住？",
            "playerLine": "可唔可以唔揀住？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_7_family_interest_class_stationery_money_dad_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸說可以先不報。你鬆了一口氣，但也知道這張單張不會永遠放在桌上。"
            },
            "resultText": "爸爸說可以先不報。你鬆了一口氣，但也知道這張單張不會永遠放在桌上。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_7_family_interest_class_stationery_money",
              "variantId": "dad",
              "mustMatchEventTitle": "家裡討論興趣班／文具用品錢"
            }
          },
          {
            "id": "w8_7_family_interest_class_stationery_money_dad_choice_4",
            "text": "我想新文具多啲。",
            "buttonText": "我想新文具多啲。",
            "playerLine": "我想要新文具多啲。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_7_family_interest_class_stationery_money_dad_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸問：「係真係要，定係見人有？」你看著廣告，一時答不上來。"
            },
            "resultText": "爸爸問：「係真係要，定係見人有？」你看著廣告，一時答不上來。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_7_family_interest_class_stationery_money",
              "variantId": "dad",
              "mustMatchEventTitle": "家裡討論興趣班／文具用品錢"
            }
          }
        ]
      },
      {
        "variantId": "tutoring",
        "variantType": "family",
        "identityTypeId": "family_elder",
        "personalityId": null,
        "npcIdHint": "family_tutoring",
        "npcNameFallback": "家人",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "家人",
            "text": "媽媽提到有同學開始補習，爸爸問你功課會不會跟不上。你聽見「補習」兩個字，想到放學後可能少了玩或休息時間。"
          }
        ],
        "playerChoices": [
          {
            "id": "w8_7_family_interest_class_stationery_money_tutoring_choice_1",
            "text": "有啲字唔識。",
            "buttonText": "有啲字唔識。",
            "playerLine": "有啲字我唔識。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_7_family_interest_class_stationery_money_tutoring_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "大人聽完沒有馬上說要補習，只問是哪一科。你把困難講小了一點，它就沒有那麼像一大團。"
            },
            "resultText": "大人聽完沒有馬上說要補習，只問是哪一科。你把困難講小了一點，它就沒有那麼像一大團。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_7_family_interest_class_stationery_money",
              "variantId": "tutoring",
              "mustMatchEventTitle": "家裡討論興趣班／文具用品錢"
            }
          },
          {
            "id": "w8_7_family_interest_class_stationery_money_tutoring_choice_2",
            "text": "暫時唔想補。",
            "buttonText": "暫時唔想補。",
            "playerLine": "我暫時唔想補習。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_7_family_interest_class_stationery_money_tutoring_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸看了媽媽一眼，說先看看這幾星期。你知道不是永遠不用想，但今晚不用立刻去新地方。"
            },
            "resultText": "爸爸看了媽媽一眼，說先看看這幾星期。你知道不是永遠不用想，但今晚不用立刻去新地方。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_7_family_interest_class_stationery_money",
              "variantId": "tutoring",
              "mustMatchEventTitle": "家裡討論興趣班／文具用品錢"
            }
          },
          {
            "id": "w8_7_family_interest_class_stationery_money_tutoring_choice_3",
            "text": "補習做咩？",
            "buttonText": "補習做咩？",
            "playerLine": "補習係做咩㗎？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_7_family_interest_class_stationery_money_tutoring_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽解釋是有人陪你溫功課，不是去另一間學校上全日課。你還是有點擔心，但知道不是完全陌生。"
            },
            "resultText": "媽媽解釋是有人陪你溫功課，不是去另一間學校上全日課。你還是有點擔心，但知道不是完全陌生。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_7_family_interest_class_stationery_money",
              "variantId": "tutoring",
              "mustMatchEventTitle": "家裡討論興趣班／文具用品錢"
            }
          },
          {
            "id": "w8_7_family_interest_class_stationery_money_tutoring_choice_4",
            "text": "老師話可以問家人。",
            "buttonText": "老師話可以問家人。",
            "playerLine": "老師話唔識可以問屋企人先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_7_family_interest_class_stationery_money_tutoring_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "大人聽完安靜了一下。爸爸說那今晚先試試一起看一頁，補習的事不急著定。"
            },
            "resultText": "大人聽完安靜了一下。爸爸說那今晚先試試一起看一頁，補習的事不急著定。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_7_family_interest_class_stationery_money",
              "variantId": "tutoring",
              "mustMatchEventTitle": "家裡討論興趣班／文具用品錢"
            }
          }
        ]
      },
      {
        "variantId": "stationery",
        "variantType": "family",
        "identityTypeId": "family_elder",
        "personalityId": null,
        "npcIdHint": "family_stationery",
        "npcNameFallback": "家人",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "家人",
            "text": "你在文具店門口停下來，看見一盒會閃的鉛筆和一塊小熊擦膠。媽媽已經買了作業簿，袋子很重。"
          }
        ],
        "playerChoices": [
          {
            "id": "w8_7_family_interest_class_stationery_money_stationery_choice_1",
            "text": "想買小熊擦膠。",
            "buttonText": "想買小熊擦膠。",
            "playerLine": "可唔可以買小熊擦膠？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_7_family_interest_class_stationery_money_stationery_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽問家裡的擦膠是不是用完了。你看著那塊小熊，忽然記不起書包裡那塊還剩多少。"
            },
            "resultText": "媽媽問家裡的擦膠是不是用完了。你看著那塊小熊，忽然記不起書包裡那塊還剩多少。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_7_family_interest_class_stationery_money",
              "variantId": "stationery",
              "mustMatchEventTitle": "家裡討論興趣班／文具用品錢"
            }
          },
          {
            "id": "w8_7_family_interest_class_stationery_money_stationery_choice_2",
            "text": "只看一陣。",
            "buttonText": "只看一陣。",
            "playerLine": "我睇吓咋。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_7_family_interest_class_stationery_money_stationery_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你站在架前看了一會兒，最後跟著媽媽走。那塊小熊擦膠的位置你記得很清楚。"
            },
            "resultText": "你站在架前看了一會兒，最後跟著媽媽走。那塊小熊擦膠的位置你記得很清楚。",
            "statusDelta": {
              "家庭關係": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_7_family_interest_class_stationery_money",
              "variantId": "stationery",
              "mustMatchEventTitle": "家裡討論興趣班／文具用品錢"
            }
          },
          {
            "id": "w8_7_family_interest_class_stationery_money_stationery_choice_3",
            "text": "舊擦膠快用完。",
            "buttonText": "舊擦膠快用完。",
            "playerLine": "我嗰舊擦膠好細啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_7_family_interest_class_stationery_money_stationery_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽說回家找出來看看，真的快用完才買。你有點失望，但這句不像直接不可以。"
            },
            "resultText": "媽媽說回家找出來看看，真的快用完才買。你有點失望，但這句不像直接不可以。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_7_family_interest_class_stationery_money",
              "variantId": "stationery",
              "mustMatchEventTitle": "家裡討論興趣班／文具用品錢"
            }
          },
          {
            "id": "w8_7_family_interest_class_stationery_money_stationery_choice_4",
            "text": "摸一下放回去。",
            "buttonText": "摸一下放回去。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_7_family_interest_class_stationery_money_stationery_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你摸了一下包裝，又放回架上。手指還留著膠盒滑滑的感覺。"
            },
            "resultText": "你摸了一下包裝，又放回架上。手指還留著膠盒滑滑的感覺。",
            "statusDelta": {
              "家庭關係": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_7_family_interest_class_stationery_money",
              "variantId": "stationery",
              "mustMatchEventTitle": "家裡討論興趣班／文具用品錢"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "w8_8_relatives_ask_primary_school",
    "sourceTopicId": "W8-8",
    "weekPool": "W8_authored_weekly",
    "week": 8,
    "dateRange": "Oct 20–Oct 26",
    "category": "family",
    "title": "親戚來吃飯問你小學點樣",
    "sceneIntro": "晚上有親戚來吃飯，桌上多了幾副碗筷。大人講完工作和天氣，很自然就轉到你身上。你正在夾菜，突然聽見有人問：「小學點呀？」幾個大人的眼睛好像都望過來。",
    "propertyValidation": null,
    "sceneIntroOverrides": [],
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        8,
        8
      ],
      "conditions": [],
      "exclusiveGroup": "w8_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "face_relative",
        "variantType": "family",
        "identityTypeId": "family_elder",
        "personalityId": null,
        "npcIdHint": "family_face_relative",
        "npcNameFallback": "親戚",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "親戚",
            "text": "親戚笑著問：「有冇攞貼紙呀？老師有冇讚你乖？」他不是很兇，但問題一個接一個，像想把你在學校的表現拿出來看看。"
          }
        ],
        "playerChoices": [
          {
            "id": "w8_8_relatives_ask_primary_school_face_relative_choice_1",
            "text": "有交功課。",
            "buttonText": "有交功課。",
            "playerLine": "我有交功課。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_8_relatives_ask_primary_school_face_relative_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "親戚說「咁咪好囉」，又想問有沒有一百分。媽媽替你夾菜，話題才慢慢移開。"
            },
            "resultText": "親戚說「咁咪好囉」，又想問有沒有一百分。媽媽替你夾菜，話題才慢慢移開。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_8_relatives_ask_primary_school",
              "variantId": "face_relative",
              "mustMatchEventTitle": "親戚來吃飯問你小學點樣"
            }
          },
          {
            "id": "w8_8_relatives_ask_primary_school_face_relative_choice_2",
            "text": "老師叫我答到。",
            "buttonText": "老師叫我答到。",
            "playerLine": "老師有叫我答到。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_8_relatives_ask_primary_school_face_relative_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "親戚笑說你很乖。你其實只是點名時回答了，但大人好像很容易把小事說大。"
            },
            "resultText": "親戚笑說你很乖。你其實只是點名時回答了，但大人好像很容易把小事說大。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_8_relatives_ask_primary_school",
              "variantId": "face_relative",
              "mustMatchEventTitle": "親戚來吃飯問你小學點樣"
            }
          },
          {
            "id": "w8_8_relatives_ask_primary_school_face_relative_choice_3",
            "text": "唔記得。",
            "buttonText": "唔記得。",
            "playerLine": "我唔記得喇。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_8_relatives_ask_primary_school_face_relative_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "親戚愣了一下，笑著說你這麼快就忘記。你低頭吃飯，不太想再被問。"
            },
            "resultText": "親戚愣了一下，笑著說你這麼快就忘記。你低頭吃飯，不太想再被問。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_8_relatives_ask_primary_school",
              "variantId": "face_relative",
              "mustMatchEventTitle": "親戚來吃飯問你小學點樣"
            }
          },
          {
            "id": "w8_8_relatives_ask_primary_school_face_relative_choice_4",
            "text": "望向媽媽。",
            "buttonText": "望向媽媽。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_8_relatives_ask_primary_school_face_relative_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽接過話說你還在適應。你不用立刻回答，但仍感到那個問題在桌上停了一會兒。"
            },
            "resultText": "媽媽接過話說你還在適應。你不用立刻回答，但仍感到那個問題在桌上停了一會兒。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_8_relatives_ask_primary_school",
              "variantId": "face_relative",
              "mustMatchEventTitle": "親戚來吃飯問你小學點樣"
            }
          }
        ]
      },
      {
        "variantId": "warm_relative",
        "variantType": "family",
        "identityTypeId": "family_elder",
        "personalityId": null,
        "npcIdHint": "family_warm_relative",
        "npcNameFallback": "親戚",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "親戚",
            "text": "親戚把湯碗推近你：「第一個月返學，攰唔攰呀？」他沒有問成績，只問你記不記得班裡誰坐你旁邊。"
          }
        ],
        "playerChoices": [
          {
            "id": "w8_8_relatives_ask_primary_school_warm_relative_choice_1",
            "text": "講同學名。",
            "buttonText": "講同學名。",
            "playerLine": "我識得家朗／穎心／梓軒／柏宇。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_8_relatives_ask_primary_school_warm_relative_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "親戚點點頭，沒有追問成績。你講出一個名字時，學校好像不只是課室和功課。"
            },
            "resultText": "親戚點點頭，沒有追問成績。你講出一個名字時，學校好像不只是課室和功課。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_8_relatives_ask_primary_school",
              "variantId": "warm_relative",
              "mustMatchEventTitle": "親戚來吃飯問你小學點樣"
            }
          },
          {
            "id": "w8_8_relatives_ask_primary_school_warm_relative_choice_2",
            "text": "小息好多人。",
            "buttonText": "小息好多人。",
            "playerLine": "小息好多人，好嘈。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_8_relatives_ask_primary_school_warm_relative_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "親戚笑說小息就是這樣。你發現大人也知道學校不只是上課。"
            },
            "resultText": "親戚笑說小息就是這樣。你發現大人也知道學校不只是上課。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_8_relatives_ask_primary_school",
              "variantId": "warm_relative",
              "mustMatchEventTitle": "親戚來吃飯問你小學點樣"
            }
          },
          {
            "id": "w8_8_relatives_ask_primary_school_warm_relative_choice_3",
            "text": "有啲攰。",
            "buttonText": "有啲攰。",
            "playerLine": "有啲攰。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_8_relatives_ask_primary_school_warm_relative_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "親戚沒有叫你要堅強，只說小一開頭會累。你喝了一口湯，肩膀放低一點。"
            },
            "resultText": "親戚沒有叫你要堅強，只說小一開頭會累。你喝了一口湯，肩膀放低一點。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_8_relatives_ask_primary_school",
              "variantId": "warm_relative",
              "mustMatchEventTitle": "親戚來吃飯問你小學點樣"
            }
          },
          {
            "id": "w8_8_relatives_ask_primary_school_warm_relative_choice_4",
            "text": "只點頭。",
            "buttonText": "只點頭。",
            "playerLine": "嗯。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_8_relatives_ask_primary_school_warm_relative_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "親戚沒有逼你再講，只把湯推近一點。這個問題沒有變成考問。"
            },
            "resultText": "親戚沒有逼你再講，只把湯推近一點。這個問題沒有變成考問。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_8_relatives_ask_primary_school",
              "variantId": "warm_relative",
              "mustMatchEventTitle": "親戚來吃飯問你小學點樣"
            }
          }
        ]
      },
      {
        "variantId": "parents_help",
        "variantType": "family",
        "identityTypeId": "family_elder",
        "personalityId": null,
        "npcIdHint": "family_parent_helps",
        "npcNameFallback": "家人",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "家人",
            "text": "親戚問你學校好不好，爸爸看見你停住，先說：「佢仲適應緊。」媽媽接著說：「最近識得自己執手冊。」你還沒回答，大人已經替你放了一條路。"
          }
        ],
        "playerChoices": [
          {
            "id": "w8_8_relatives_ask_primary_school_parents_help_choice_1",
            "text": "講手冊。",
            "buttonText": "講手冊。",
            "playerLine": "我會放手冊出嚟。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_8_relatives_ask_primary_school_parents_help_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽點頭，像幫你證明那是真的。親戚聽完沒有再問分數，只問手冊是不是每天都要簽。"
            },
            "resultText": "媽媽點頭，像幫你證明那是真的。親戚聽完沒有再問分數，只問手冊是不是每天都要簽。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_8_relatives_ask_primary_school",
              "variantId": "parents_help",
              "mustMatchEventTitle": "親戚來吃飯問你小學點樣"
            }
          },
          {
            "id": "w8_8_relatives_ask_primary_school_parents_help_choice_2",
            "text": "講同學幫過我。",
            "buttonText": "講同學幫過我。",
            "playerLine": "有同學話我知排隊。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_8_relatives_ask_primary_school_parents_help_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "大人聽見「同學」兩個字，表情放鬆了一點。你沒有講很多，但學校裡多了一個人。"
            },
            "resultText": "大人聽見「同學」兩個字，表情放鬆了一點。你沒有講很多，但學校裡多了一個人。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_8_relatives_ask_primary_school",
              "variantId": "parents_help",
              "mustMatchEventTitle": "親戚來吃飯問你小學點樣"
            }
          },
          {
            "id": "w8_8_relatives_ask_primary_school_parents_help_choice_3",
            "text": "今日有啲亂。",
            "buttonText": "今日有啲亂。",
            "playerLine": "今日有啲亂。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_8_relatives_ask_primary_school_parents_help_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸接著說剛開學是會亂。你沒有被笑，反而覺得可以承認學校不是每天都順。"
            },
            "resultText": "爸爸接著說剛開學是會亂。你沒有被笑，反而覺得可以承認學校不是每天都順。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_8_relatives_ask_primary_school",
              "variantId": "parents_help",
              "mustMatchEventTitle": "親戚來吃飯問你小學點樣"
            }
          },
          {
            "id": "w8_8_relatives_ask_primary_school_parents_help_choice_4",
            "text": "繼續吃飯。",
            "buttonText": "繼續吃飯。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_8_relatives_ask_primary_school_parents_help_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "大人幫你說完，你就繼續吃飯。你沒有加入話題，但也沒有被卡在問題中間。"
            },
            "resultText": "大人幫你說完，你就繼續吃飯。你沒有加入話題，但也沒有被卡在問題中間。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_8_relatives_ask_primary_school",
              "variantId": "parents_help",
              "mustMatchEventTitle": "親戚來吃飯問你小學點樣"
            }
          }
        ]
      },
      {
        "variantId": "player_answers",
        "variantType": "family",
        "identityTypeId": "family_elder",
        "personalityId": null,
        "npcIdHint": "family_player_answers",
        "npcNameFallback": "家人",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "家人",
            "text": "親戚問完後，大人沒有立刻接話。你放下筷子，覺得自己要說一點東西。"
          }
        ],
        "playerChoices": [
          {
            "id": "w8_8_relatives_ask_primary_school_player_answers_choice_1",
            "text": "學校好大。",
            "buttonText": "學校好大。",
            "playerLine": "學校好大。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_8_relatives_ask_primary_school_player_answers_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "親戚笑說小學當然大。你想起走廊和操場，覺得自己說得其實很對。"
            },
            "resultText": "親戚笑說小學當然大。你想起走廊和操場，覺得自己說得其實很對。",
            "statusDelta": {
              "自信": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_8_relatives_ask_primary_school",
              "variantId": "player_answers",
              "mustMatchEventTitle": "親戚來吃飯問你小學點樣"
            }
          },
          {
            "id": "w8_8_relatives_ask_primary_school_player_answers_choice_2",
            "text": "小息好快完。",
            "buttonText": "小息好快完。",
            "playerLine": "小息好快完。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_8_relatives_ask_primary_school_player_answers_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "親戚說因為你玩得開心。你不確定是不是開心，可能只是很多人很多聲。"
            },
            "resultText": "親戚說因為你玩得開心。你不確定是不是開心，可能只是很多人很多聲。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_8_relatives_ask_primary_school",
              "variantId": "player_answers",
              "mustMatchEventTitle": "親戚來吃飯問你小學點樣"
            }
          },
          {
            "id": "w8_8_relatives_ask_primary_school_player_answers_choice_3",
            "text": "有時唔知排邊度。",
            "buttonText": "有時唔知排邊度。",
            "playerLine": "有時唔知排邊度。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_8_relatives_ask_primary_school_player_answers_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸聽見後問現在好一點沒有。你點點頭，想起有人曾經指過班牌。"
            },
            "resultText": "爸爸聽見後問現在好一點沒有。你點點頭，想起有人曾經指過班牌。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_8_relatives_ask_primary_school",
              "variantId": "player_answers",
              "mustMatchEventTitle": "親戚來吃飯問你小學點樣"
            }
          },
          {
            "id": "w8_8_relatives_ask_primary_school_player_answers_choice_4",
            "text": "識咗幾個名。",
            "buttonText": "識咗幾個名。",
            "playerLine": "我識咗幾個名。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w8_8_relatives_ask_primary_school_player_answers_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "親戚問是哪幾個，你只講了一兩個。名字不多，但已經比第一天多。"
            },
            "resultText": "親戚問是哪幾個，你只講了一兩個。名字不多，但已經比第一天多。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w8_8_relatives_ask_primary_school",
              "variantId": "player_answers",
              "mustMatchEventTitle": "親戚來吃飯問你小學點樣"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "w9_9_halloween_english_class_decoration",
    "sourceTopicId": "W9-9",
    "weekPool": "W9_authored_weekly",
    "week": 9,
    "dateRange": "Oct 27–Nov 2",
    "category": "festival",
    "title": "Halloween 英文課小裝飾",
    "sceneIntro": "英文課前，老師把幾個紙南瓜和小蝙蝠貼在白板角落，黑板上寫著「Halloween Words」。這不是全校大型活動，只是這節課會學幾個英文生字，可能做一張小裝飾紙。有人覺得好玩，有人覺得課室突然太花。",
    "propertyValidation": null,
    "sceneIntroOverrides": [],
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        9,
        9
      ],
      "conditions": [],
      "exclusiveGroup": "w9_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "encouraging_teacher",
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": "pers_encouraging_mentor",
        "npcIdHint": "teacher_encouraging_mentor",
        "npcNameFallback": "老師",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "英文老師拿起一張紙南瓜：「今日學幾個字，唔使驚讀錯。Pumpkin，慢慢跟我讀。」她把紙放低：「你哋可以畫自己鍾意嘅小圖案。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w9_9_halloween_english_class_decoration_encouraging_teacher_choice_1",
            "text": "跟讀 pumpkin。",
            "buttonText": "跟讀 pumpkin。",
            "playerLine": "Pumpkin。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_9_halloween_english_class_decoration_encouraging_teacher_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你讀得不算很準，老師只是再讀一次。旁邊有人也讀錯，聲音反而沒那麼可怕。"
            },
            "resultText": "你讀得不算很準，老師只是再讀一次。旁邊有人也讀錯，聲音反而沒那麼可怕。",
            "statusDelta": {
              "理智值": 1,
              "壓力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_9_halloween_english_class_decoration",
              "variantId": "encouraging_teacher",
              "mustMatchEventTitle": "Halloween 英文課小裝飾"
            }
          },
          {
            "id": "w9_9_halloween_english_class_decoration_encouraging_teacher_choice_2",
            "text": "畫細南瓜。",
            "buttonText": "畫細南瓜。",
            "playerLine": "我畫細細個南瓜。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_9_halloween_english_class_decoration_encouraging_teacher_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你的南瓜畫得像橙，但橙色很亮。老師說可以貼在角落，你就真的貼上去。"
            },
            "resultText": "你的南瓜畫得像橙，但橙色很亮。老師說可以貼在角落，你就真的貼上去。",
            "statusDelta": {
              "創意": 1,
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
              "eventId": "w9_9_halloween_english_class_decoration",
              "variantId": "encouraging_teacher",
              "mustMatchEventTitle": "Halloween 英文課小裝飾"
            }
          },
          {
            "id": "w9_9_halloween_english_class_decoration_encouraging_teacher_choice_3",
            "text": "唔畫鬼得唔得？",
            "buttonText": "唔畫鬼得唔得？",
            "playerLine": "老師，可唔可以唔畫鬼？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_9_halloween_english_class_decoration_encouraging_teacher_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說可以畫糖果、星星或南瓜。你鬆了一口氣，原來 Halloween 不一定要可怕。"
            },
            "resultText": "老師說可以畫糖果、星星或南瓜。你鬆了一口氣，原來 Halloween 不一定要可怕。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
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
              "eventId": "w9_9_halloween_english_class_decoration",
              "variantId": "encouraging_teacher",
              "mustMatchEventTitle": "Halloween 英文課小裝飾"
            }
          },
          {
            "id": "w9_9_halloween_english_class_decoration_encouraging_teacher_choice_4",
            "text": "先看同學畫。",
            "buttonText": "先看同學畫。",
            "playerLine": "我睇吓先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_9_halloween_english_class_decoration_encouraging_teacher_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你看見有人畫帽子，有人畫糖。看了一會兒，你才在紙邊畫了一個小小的圓。"
            },
            "resultText": "你看見有人畫帽子，有人畫糖。看了一會兒，你才在紙邊畫了一個小小的圓。",
            "statusDelta": {
              "理智值": 1,
              "壓力": -1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_9_halloween_english_class_decoration",
              "variantId": "encouraging_teacher",
              "mustMatchEventTitle": "Halloween 英文課小裝飾"
            }
          }
        ]
      },
      {
        "variantId": "caring_teacher",
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": "pers_pastoral_care_teacher",
        "npcIdHint": "teacher_pastoral_care",
        "npcNameFallback": "老師",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師看見有同學被骷髏貼紙嚇到，立刻把那張拿遠一點：「唔鍾意呢啲圖案，可以畫糖果或者星星。Halloween 唔一定要嚇人。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w9_9_halloween_english_class_decoration_caring_teacher_choice_1",
            "text": "畫糖果。",
            "buttonText": "畫糖果。",
            "playerLine": "我畫糖果。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_9_halloween_english_class_decoration_caring_teacher_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師把糖果貼紙放到中間。你的紙上沒有鬼，還是有 Halloween 的顏色。"
            },
            "resultText": "老師把糖果貼紙放到中間。你的紙上沒有鬼，還是有 Halloween 的顏色。",
            "statusDelta": {
              "壓力": 1,
              "創意": 1
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
              "eventId": "w9_9_halloween_english_class_decoration",
              "variantId": "caring_teacher",
              "mustMatchEventTitle": "Halloween 英文課小裝飾"
            }
          },
          {
            "id": "w9_9_halloween_english_class_decoration_caring_teacher_choice_2",
            "text": "我唔想畫鬼。",
            "buttonText": "我唔想畫鬼。",
            "playerLine": "我唔想畫鬼。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_9_halloween_english_class_decoration_caring_teacher_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師點頭，沒有問你是不是膽小。她把可怕的圖案收回盒裡，你的手才敢拿筆。"
            },
            "resultText": "老師點頭，沒有問你是不是膽小。她把可怕的圖案收回盒裡，你的手才敢拿筆。",
            "statusDelta": {
              "自信": 1,
              "壓力": 1
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
              "eventId": "w9_9_halloween_english_class_decoration",
              "variantId": "caring_teacher",
              "mustMatchEventTitle": "Halloween 英文課小裝飾"
            }
          },
          {
            "id": "w9_9_halloween_english_class_decoration_caring_teacher_choice_3",
            "text": "星星英文點講？",
            "buttonText": "星星英文點講？",
            "playerLine": "星星英文係咩？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_9_halloween_english_class_decoration_caring_teacher_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師在黑板寫 star。你跟著讀一次，覺得這個字比 pumpkin 短很多。"
            },
            "resultText": "老師在黑板寫 star。你跟著讀一次，覺得這個字比 pumpkin 短很多。",
            "statusDelta": {
              "自信": 1,
              "創意": 1
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
              "eventId": "w9_9_halloween_english_class_decoration",
              "variantId": "caring_teacher",
              "mustMatchEventTitle": "Halloween 英文課小裝飾"
            }
          },
          {
            "id": "w9_9_halloween_english_class_decoration_caring_teacher_choice_4",
            "text": "把貼紙推遠。",
            "buttonText": "把貼紙推遠。",
            "playerLine": "呢張可唔可以放遠啲？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_9_halloween_english_class_decoration_caring_teacher_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師把那張貼紙拿走。你沒有被迫說自己怕，只是桌面舒服了一點。"
            },
            "resultText": "老師把那張貼紙拿走。你沒有被迫說自己怕，只是桌面舒服了一點。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_9_halloween_english_class_decoration",
              "variantId": "caring_teacher",
              "mustMatchEventTitle": "Halloween 英文課小裝飾"
            }
          }
        ]
      },
      {
        "variantId": "outgoing",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "家朗拿著橙色紙，很快就畫了一個大南瓜：「我畫呢個！你畫蝙蝠啦！」畫到一半他又問：「蝙蝠係 bat？係咪咁讀？」"
          }
        ],
        "playerChoices": [
          {
            "id": "w9_9_halloween_english_class_decoration_outgoing_choice_1",
            "text": "一起讀 bat。",
            "buttonText": "一起讀 bat。",
            "playerLine": "Bat。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_9_halloween_english_class_decoration_outgoing_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗跟著讀，讀完自己笑了一下。你們兩個的聲音不大，但在紙南瓜旁邊剛剛好。"
            },
            "resultText": "家朗跟著讀，讀完自己笑了一下。你們兩個的聲音不大，但在紙南瓜旁邊剛剛好。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "w9_9_halloween_english_class_decoration",
              "variantId": "outgoing",
              "mustMatchEventTitle": "Halloween 英文課小裝飾"
            }
          },
          {
            "id": "w9_9_halloween_english_class_decoration_outgoing_choice_2",
            "text": "我畫糖果算。",
            "buttonText": "我畫糖果算。",
            "playerLine": "我畫糖果啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_9_halloween_english_class_decoration_outgoing_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗看了看你的糖果，說：「都得，糖都係 Halloween。」他把南瓜移開一點，留位給你。"
            },
            "resultText": "家朗看了看你的糖果，說：「都得，糖都係 Halloween。」他把南瓜移開一點，留位給你。",
            "statusDelta": {
              "自信": 1,
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
              "eventId": "w9_9_halloween_english_class_decoration",
              "variantId": "outgoing",
              "mustMatchEventTitle": "Halloween 英文課小裝飾"
            }
          },
          {
            "id": "w9_9_halloween_english_class_decoration_outgoing_choice_3",
            "text": "問老師先。",
            "buttonText": "問老師先。",
            "playerLine": "問老師點讀先啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_9_halloween_english_class_decoration_outgoing_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗拿著蝙蝠圖去問老師，回來時很得意地說：「真係 bat。」他像贏了一個很小的答案。"
            },
            "resultText": "家朗拿著蝙蝠圖去問老師，回來時很得意地說：「真係 bat。」他像贏了一個很小的答案。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_9_halloween_english_class_decoration",
              "variantId": "outgoing",
              "mustMatchEventTitle": "Halloween 英文課小裝飾"
            }
          },
          {
            "id": "w9_9_halloween_english_class_decoration_outgoing_choice_4",
            "text": "你畫太快啦。",
            "buttonText": "你畫太快啦。",
            "playerLine": "你畫得太快，冇位啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_9_halloween_english_class_decoration_outgoing_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗低頭看紙，才發現自己的南瓜快佔滿半張。他把紙轉一轉，讓你有一角可以畫。"
            },
            "resultText": "家朗低頭看紙，才發現自己的南瓜快佔滿半張。他把紙轉一轉，讓你有一角可以畫。",
            "statusDelta": {
              "社交": 1,
              "創意": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_9_halloween_english_class_decoration",
              "variantId": "outgoing",
              "mustMatchEventTitle": "Halloween 英文課小裝飾"
            }
          }
        ]
      },
      {
        "variantId": "quiet",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_quiet_observer",
        "npcIdHint": "classmate_quiet_observer",
        "npcNameFallback": "穎心",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "穎心",
            "text": "穎心拿到黑色紙後沒有立刻剪。她看著白板上的小蝙蝠，細聲說：「我想剪細啲，唔好咁大隻。」她把剪刀轉向你：「你用先嗎？」"
          }
        ],
        "playerChoices": [
          {
            "id": "w9_9_halloween_english_class_decoration_quiet_choice_1",
            "text": "你先剪。",
            "buttonText": "你先剪。",
            "playerLine": "你先用啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_9_halloween_english_class_decoration_quiet_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心點點頭，剪刀沿著紙慢慢走。她剪出來的蝙蝠很小，但翅膀很整齊。"
            },
            "resultText": "穎心點點頭，剪刀沿著紙慢慢走。她剪出來的蝙蝠很小，但翅膀很整齊。",
            "statusDelta": {
              "自信": 1,
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
              "eventId": "w9_9_halloween_english_class_decoration",
              "variantId": "quiet",
              "mustMatchEventTitle": "Halloween 英文課小裝飾"
            }
          },
          {
            "id": "w9_9_halloween_english_class_decoration_quiet_choice_2",
            "text": "一起剪星星。",
            "buttonText": "一起剪星星。",
            "playerLine": "我哋剪星星啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_9_halloween_english_class_decoration_quiet_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心想了一下，把黑紙放下，拿了黃色紙。星星比蝙蝠沒那麼嚇人，她的手也穩一點。"
            },
            "resultText": "穎心想了一下，把黑紙放下，拿了黃色紙。星星比蝙蝠沒那麼嚇人，她的手也穩一點。",
            "statusDelta": {
              "自信": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_9_halloween_english_class_decoration",
              "variantId": "quiet",
              "mustMatchEventTitle": "Halloween 英文課小裝飾"
            }
          },
          {
            "id": "w9_9_halloween_english_class_decoration_quiet_choice_3",
            "text": "你怕鬼圖嗎？",
            "buttonText": "你怕鬼圖嗎？",
            "playerLine": "你係咪唔鍾意鬼圖？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_9_halloween_english_class_decoration_quiet_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心沒有說怕，只說：「太大隻。」她把那張大蝙蝠放遠一點，聲音很輕。"
            },
            "resultText": "穎心沒有說怕，只說：「太大隻。」她把那張大蝙蝠放遠一點，聲音很輕。",
            "statusDelta": {
              "自信": 1,
              "壓力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_9_halloween_english_class_decoration",
              "variantId": "quiet",
              "mustMatchEventTitle": "Halloween 英文課小裝飾"
            }
          },
          {
            "id": "w9_9_halloween_english_class_decoration_quiet_choice_4",
            "text": "自己畫角落。",
            "buttonText": "自己畫角落。",
            "playerLine": "我畫呢邊角落。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_9_halloween_english_class_decoration_quiet_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你在紙角畫自己的圖案。穎心安靜地剪，你們沒有一起說很多話，但桌面很平靜。"
            },
            "resultText": "你在紙角畫自己的圖案。穎心安靜地剪，你們沒有一起說很多話，但桌面很平靜。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "w9_9_halloween_english_class_decoration",
              "variantId": "quiet",
              "mustMatchEventTitle": "Halloween 英文課小裝飾"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "w9_10_corridor_ghost_story_halloween_rumor",
    "sourceTopicId": "W9-10",
    "weekPool": "W9_authored_weekly",
    "week": 9,
    "dateRange": "Oct 27–Nov 2",
    "category": "festival",
    "title": "走廊鬼故事／萬聖節傳聞",
    "sceneIntro": "小息時，走廊貼了幾張英文課作品，紙南瓜在風扇下面輕輕動。幾個同學聚在飲水機旁邊，有人壓低聲音說三樓那邊放學後會有奇怪聲音。你剛好走近，聽到最後一句。",
    "propertyValidation": null,
    "sceneIntroOverrides": [],
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        9,
        9
      ],
      "conditions": [],
      "exclusiveGroup": "w9_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "curious",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_mischief_maker",
        "npcIdHint": "classmate_curious_troublemaker",
        "npcNameFallback": "柏宇",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "柏宇",
            "text": "柏宇把聲音壓得很低：「我聽人講，三樓有個櫃夜晚會自己開。」他看見你，眼睛一亮：「你信唔信？」"
          }
        ],
        "playerChoices": [
          {
            "id": "w9_10_corridor_ghost_story_halloween_rumor_curious_choice_1",
            "text": "邊個櫃？",
            "buttonText": "邊個櫃？",
            "playerLine": "邊個櫃呀？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_10_corridor_ghost_story_halloween_rumor_curious_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇立刻指向樓梯方向，但其實他也說不清是哪一個。故事因為說不清，反而更像真的。"
            },
            "resultText": "柏宇立刻指向樓梯方向，但其實他也說不清是哪一個。故事因為說不清，反而更像真的。",
            "statusDelta": {
              "壓力": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_10_corridor_ghost_story_halloween_rumor",
              "variantId": "curious",
              "mustMatchEventTitle": "走廊鬼故事／萬聖節傳聞"
            }
          },
          {
            "id": "w9_10_corridor_ghost_story_halloween_rumor_curious_choice_2",
            "text": "唔好亂講啦。",
            "buttonText": "唔好亂講啦。",
            "playerLine": "唔好亂講啦，會嚇到人。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_10_corridor_ghost_story_halloween_rumor_curious_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇撇撇嘴，聲音放低一點：「我又冇大聲。」他還是想講，但開始留意旁邊有沒有同學害怕。"
            },
            "resultText": "柏宇撇撇嘴，聲音放低一點：「我又冇大聲。」他還是想講，但開始留意旁邊有沒有同學害怕。",
            "statusDelta": {
              "自信": 1,
              "壓力": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_10_corridor_ghost_story_halloween_rumor",
              "variantId": "curious",
              "mustMatchEventTitle": "走廊鬼故事／萬聖節傳聞"
            }
          },
          {
            "id": "w9_10_corridor_ghost_story_halloween_rumor_curious_choice_3",
            "text": "我有少少驚。",
            "buttonText": "我有少少驚。",
            "playerLine": "我有少少驚。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_10_corridor_ghost_story_halloween_rumor_curious_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇馬上補一句：「可能係風吹啫。」他的故事沒有完全停，但變得沒那麼嚇人。"
            },
            "resultText": "柏宇馬上補一句：「可能係風吹啫。」他的故事沒有完全停，但變得沒那麼嚇人。",
            "statusDelta": {
              "理智值": 1,
              "壓力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_10_corridor_ghost_story_halloween_rumor",
              "variantId": "curious",
              "mustMatchEventTitle": "走廊鬼故事／萬聖節傳聞"
            }
          },
          {
            "id": "w9_10_corridor_ghost_story_halloween_rumor_curious_choice_4",
            "text": "細聲啲。",
            "buttonText": "細聲啲。",
            "playerLine": "你細聲啲啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_10_corridor_ghost_story_halloween_rumor_curious_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇把手放到嘴邊，像真的在講秘密。飲水機旁邊的人還是想聽，但聲音沒有傳到整條走廊。"
            },
            "resultText": "柏宇把手放到嘴邊，像真的在講秘密。飲水機旁邊的人還是想聽，但聲音沒有傳到整條走廊。",
            "statusDelta": {
              "自信": 1,
              "壓力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_10_corridor_ghost_story_halloween_rumor",
              "variantId": "curious",
              "mustMatchEventTitle": "走廊鬼故事／萬聖節傳聞"
            }
          }
        ]
      },
      {
        "variantId": "outgoing",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "家朗本來只是來飲水，聽到鬼故事後也湊過來：「真㗎？但我哋又唔會夜晚留校。」他笑了一下，又看你：「你驚唔驚呀？」"
          }
        ],
        "playerChoices": [
          {
            "id": "w9_10_corridor_ghost_story_halloween_rumor_outgoing_choice_1",
            "text": "有少少驚。",
            "buttonText": "有少少驚。",
            "playerLine": "有少少。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_10_corridor_ghost_story_halloween_rumor_outgoing_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗立刻說：「咁我哋唔聽啦。」他說得很快，像是要把你從故事裡拉出來。"
            },
            "resultText": "家朗立刻說：「咁我哋唔聽啦。」他說得很快，像是要把你從故事裡拉出來。",
            "statusDelta": {
              "壓力": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_10_corridor_ghost_story_halloween_rumor",
              "variantId": "outgoing",
              "mustMatchEventTitle": "走廊鬼故事／萬聖節傳聞"
            }
          },
          {
            "id": "w9_10_corridor_ghost_story_halloween_rumor_outgoing_choice_2",
            "text": "我唔信。",
            "buttonText": "我唔信。",
            "playerLine": "我唔信。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_10_corridor_ghost_story_halloween_rumor_outgoing_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗也說不信，但飲水後還是回頭看三樓一眼。你看見他其實也有一點好奇。"
            },
            "resultText": "家朗也說不信，但飲水後還是回頭看三樓一眼。你看見他其實也有一點好奇。",
            "statusDelta": {
              "自信": 1,
              "壓力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_10_corridor_ghost_story_halloween_rumor",
              "variantId": "outgoing",
              "mustMatchEventTitle": "走廊鬼故事／萬聖節傳聞"
            }
          },
          {
            "id": "w9_10_corridor_ghost_story_halloween_rumor_outgoing_choice_3",
            "text": "你信唔信？",
            "buttonText": "你信唔信？",
            "playerLine": "咁你信唔信？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_10_corridor_ghost_story_halloween_rumor_outgoing_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗想了一下：「我半信半唔信。」這個答案很快，卻比直接說不怕誠實一點。"
            },
            "resultText": "家朗想了一下：「我半信半唔信。」這個答案很快，卻比直接說不怕誠實一點。",
            "statusDelta": {
              "自信": 1,
              "壓力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_10_corridor_ghost_story_halloween_rumor",
              "variantId": "outgoing",
              "mustMatchEventTitle": "走廊鬼故事／萬聖節傳聞"
            }
          },
          {
            "id": "w9_10_corridor_ghost_story_halloween_rumor_outgoing_choice_4",
            "text": "去排隊啦。",
            "buttonText": "去排隊啦。",
            "playerLine": "走啦，要排隊。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_10_corridor_ghost_story_halloween_rumor_outgoing_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗跟著你離開，邊走邊回頭。鬼故事留在飲水機旁邊，你們沒有再被它黏住。"
            },
            "resultText": "家朗跟著你離開，邊走邊回頭。鬼故事留在飲水機旁邊，你們沒有再被它黏住。",
            "statusDelta": {
              "壓力": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_10_corridor_ghost_story_halloween_rumor",
              "variantId": "outgoing",
              "mustMatchEventTitle": "走廊鬼故事／萬聖節傳聞"
            }
          }
        ]
      },
      {
        "variantId": "quiet",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_quiet_observer",
        "npcIdHint": "classmate_quiet_observer",
        "npcNameFallback": "穎心",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "穎心",
            "text": "穎心站在人群外，手裡拿著水杯。她聽到「自己開」三個字時皺了一下眉，沒有靠近。她小聲說：「我唔想聽咁多。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w9_10_corridor_ghost_story_halloween_rumor_quiet_choice_1",
            "text": "陪她走開。",
            "buttonText": "陪她走開。",
            "playerLine": "我同你返班房。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_10_corridor_ghost_story_halloween_rumor_quiet_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心走到轉角才鬆一口氣。她沒有很大聲說多謝，只是放慢腳步，等你一起走。"
            },
            "resultText": "穎心走到轉角才鬆一口氣。她沒有很大聲說多謝，只是放慢腳步，等你一起走。",
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_10_corridor_ghost_story_halloween_rumor",
              "variantId": "quiet",
              "mustMatchEventTitle": "走廊鬼故事／萬聖節傳聞"
            }
          },
          {
            "id": "w9_10_corridor_ghost_story_halloween_rumor_quiet_choice_2",
            "text": "叫同學細聲。",
            "buttonText": "叫同學細聲。",
            "playerLine": "你哋唔好講咁大聲啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_10_corridor_ghost_story_halloween_rumor_quiet_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "同學看你一眼，聲音小了一點。穎心沒有加入說話，但她握水杯的手鬆了一點。"
            },
            "resultText": "同學看你一眼，聲音小了一點。穎心沒有加入說話，但她握水杯的手鬆了一點。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_10_corridor_ghost_story_halloween_rumor",
              "variantId": "quiet",
              "mustMatchEventTitle": "走廊鬼故事／萬聖節傳聞"
            }
          },
          {
            "id": "w9_10_corridor_ghost_story_halloween_rumor_quiet_choice_3",
            "text": "你係咪驚？",
            "buttonText": "你係咪驚？",
            "playerLine": "你驚呀？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_10_corridor_ghost_story_halloween_rumor_quiet_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心停了停，只說：「唔想聽。」她不是要被人拆穿，只是想離開那個聲音。"
            },
            "resultText": "穎心停了停，只說：「唔想聽。」她不是要被人拆穿，只是想離開那個聲音。",
            "statusDelta": {
              "自信": 1,
              "壓力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_10_corridor_ghost_story_halloween_rumor",
              "variantId": "quiet",
              "mustMatchEventTitle": "走廊鬼故事／萬聖節傳聞"
            }
          },
          {
            "id": "w9_10_corridor_ghost_story_halloween_rumor_quiet_choice_4",
            "text": "自己留下聽。",
            "buttonText": "自己留下聽。",
            "playerLine": "我聽多陣。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_10_corridor_ghost_story_halloween_rumor_quiet_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心點點頭，自己走回課室。你留下聽故事時，忽然發現她的位置空了。"
            },
            "resultText": "穎心點點頭，自己走回課室。你留下聽故事時，忽然發現她的位置空了。",
            "statusDelta": {
              "自信": 1,
              "壓力": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_10_corridor_ghost_story_halloween_rumor",
              "variantId": "quiet",
              "mustMatchEventTitle": "走廊鬼故事／萬聖節傳聞"
            }
          }
        ]
      },
      {
        "variantId": "zhiyau",
        "variantType": "seniorStudent",
        "identityTypeId": "senior_student",
        "personalityId": "pers_friendly_senior",
        "npcIdHint": "senior_friendly_girl_zhiyau",
        "npcNameFallback": "芷悠",
        "unknownDisplayName": "高年級女生",
        "knownDisplayName": "芷悠師姐",
        "unlockCharacterId": "senior_friendly_girl_zhiyau",
        "openingDialogue": [
          {
            "speaker": "芷悠師姐",
            "text": "一位高年級女生經過，看見一群小一堵在飲水機旁邊。她沒有罵，只是說：「飲水就飲水，唔好塞住條路。」聽到鬼故事，她笑了一下：「好多傳聞都係講講下變多咗。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w9_10_corridor_ghost_story_halloween_rumor_zhiyau_choice_1",
            "text": "以前有冇聽過？",
            "buttonText": "以前有冇聽過？",
            "playerLine": "師姐，你以前有冇聽過？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_10_corridor_ghost_story_halloween_rumor_zhiyau_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她想了想，說以前也有人講過，但每年版本都不一樣。故事突然像紙南瓜一樣，是會被人加上去的。"
            },
            "resultText": "她想了想，說以前也有人講過，但每年版本都不一樣。故事突然像紙南瓜一樣，是會被人加上去的。",
            "statusDelta": {
              "壓力": 1,
              "創意": 1
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
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_friendly_girl_zhiyau",
                "trueName": "芷悠",
                "sourceEventId": "w9_10_corridor_ghost_story_halloween_rumor"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_10_corridor_ghost_story_halloween_rumor",
              "variantId": "zhiyau",
              "mustMatchEventTitle": "走廊鬼故事／萬聖節傳聞"
            }
          },
          {
            "id": "w9_10_corridor_ghost_story_halloween_rumor_zhiyau_choice_2",
            "text": "讓開飲水機。",
            "buttonText": "讓開飲水機。",
            "playerLine": "我讓開先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_10_corridor_ghost_story_halloween_rumor_zhiyau_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你往旁邊移一步，後面同學終於可以飲水。高年級女生點點頭，沒有再管你。"
            },
            "resultText": "你往旁邊移一步，後面同學終於可以飲水。高年級女生點點頭，沒有再管你。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_friendly_girl_zhiyau",
                "trueName": "芷悠",
                "sourceEventId": "w9_10_corridor_ghost_story_halloween_rumor"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_10_corridor_ghost_story_halloween_rumor",
              "variantId": "zhiyau",
              "mustMatchEventTitle": "走廊鬼故事／萬聖節傳聞"
            }
          },
          {
            "id": "w9_10_corridor_ghost_story_halloween_rumor_zhiyau_choice_3",
            "text": "佢哋講到好驚。",
            "buttonText": "佢哋講到好驚。",
            "playerLine": "佢哋講到好驚。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_10_corridor_ghost_story_halloween_rumor_zhiyau_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她看向那群同學：「驚就唔好再加。」她不是老師，但那句話讓幾個人安靜了一點。"
            },
            "resultText": "她看向那群同學：「驚就唔好再加。」她不是老師，但那句話讓幾個人安靜了一點。",
            "statusDelta": {
              "自信": 1,
              "壓力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_friendly_girl_zhiyau",
                "trueName": "芷悠",
                "sourceEventId": "w9_10_corridor_ghost_story_halloween_rumor"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_10_corridor_ghost_story_halloween_rumor",
              "variantId": "zhiyau",
              "mustMatchEventTitle": "走廊鬼故事／萬聖節傳聞"
            }
          },
          {
            "id": "w9_10_corridor_ghost_story_halloween_rumor_zhiyau_choice_4",
            "text": "回班房。",
            "buttonText": "回班房。",
            "playerLine": "我返班房先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_10_corridor_ghost_story_halloween_rumor_zhiyau_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你離開飲水機。背後還有人小聲講，但樓梯好像沒有剛才那麼可怕。"
            },
            "resultText": "你離開飲水機。背後還有人小聲講，但樓梯好像沒有剛才那麼可怕。",
            "statusDelta": {
              "壓力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_friendly_girl_zhiyau",
                "trueName": "芷悠",
                "sourceEventId": "w9_10_corridor_ghost_story_halloween_rumor"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_10_corridor_ghost_story_halloween_rumor",
              "variantId": "zhiyau",
              "mustMatchEventTitle": "走廊鬼故事／萬聖節傳聞"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "w9_11_sports_day_practice_grouping",
    "sourceTopicId": "W9-11",
    "weekPool": "W9_authored_weekly",
    "week": 9,
    "dateRange": "Oct 27–Nov 2",
    "category": "school",
    "title": "運動日練習分組",
    "sceneIntro": "體育堂上，老師用哨子把大家叫到操場邊。今天不是真的比賽，只是試試跑道、分組練習和聽口令。太陽有點曬，大家站在白線後面，有人很興奮，有人一直看自己的鞋帶。",
    "propertyValidation": null,
    "sceneIntroOverrides": [],
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        9,
        9
      ],
      "conditions": [],
      "exclusiveGroup": "w9_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "outgoing",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "家朗排在你前面，回頭說：「我哋同組喎！一陣聽到啪就跑。」他做了一個起跑姿勢，又差點撞到旁邊同學。"
          }
        ],
        "playerChoices": [
          {
            "id": "w9_11_sports_day_practice_grouping_outgoing_choice_1",
            "text": "小心旁邊。",
            "buttonText": "小心旁邊。",
            "playerLine": "你小心撞到人呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_11_sports_day_practice_grouping_outgoing_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗立刻收腳，向旁邊同學說不好意思。他還是很想跑，但站得比較直了。"
            },
            "resultText": "家朗立刻收腳，向旁邊同學說不好意思。他還是很想跑，但站得比較直了。",
            "statusDelta": {
              "社交": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_11_sports_day_practice_grouping",
              "variantId": "outgoing",
              "mustMatchEventTitle": "運動日練習分組"
            }
          },
          {
            "id": "w9_11_sports_day_practice_grouping_outgoing_choice_2",
            "text": "一起慢跑。",
            "buttonText": "一起慢跑。",
            "playerLine": "一陣先慢慢跑得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_11_sports_day_practice_grouping_outgoing_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗想說快一點，最後改口：「咁頭先慢少少。」他好像也不想一開始就出錯。"
            },
            "resultText": "家朗想說快一點，最後改口：「咁頭先慢少少。」他好像也不想一開始就出錯。",
            "statusDelta": {
              "自信": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_11_sports_day_practice_grouping",
              "variantId": "outgoing",
              "mustMatchEventTitle": "運動日練習分組"
            }
          },
          {
            "id": "w9_11_sports_day_practice_grouping_outgoing_choice_3",
            "text": "我有啲緊張。",
            "buttonText": "我有啲緊張。",
            "playerLine": "我有啲緊張。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_11_sports_day_practice_grouping_outgoing_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗回頭看你：「咁我等你。」他未必真的能等很久，但這句聽起來像真的。"
            },
            "resultText": "家朗回頭看你：「咁我等你。」他未必真的能等很久，但這句聽起來像真的。",
            "statusDelta": {
              "自信": 1,
              "壓力": 1
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
              "eventId": "w9_11_sports_day_practice_grouping",
              "variantId": "outgoing",
              "mustMatchEventTitle": "運動日練習分組"
            }
          },
          {
            "id": "w9_11_sports_day_practice_grouping_outgoing_choice_4",
            "text": "跟著等口令。",
            "buttonText": "跟著等口令。",
            "playerLine": "我聽口令先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_11_sports_day_practice_grouping_outgoing_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你們一起望著老師手上的哨子。家朗腳尖一直動，但沒有偷跑。"
            },
            "resultText": "你們一起望著老師手上的哨子。家朗腳尖一直動，但沒有偷跑。",
            "statusDelta": {
              "社交": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_11_sports_day_practice_grouping",
              "variantId": "outgoing",
              "mustMatchEventTitle": "運動日練習分組"
            }
          }
        ]
      },
      {
        "variantId": "competitive",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_competitive_peer",
        "npcIdHint": "classmate_competitive_peer",
        "npcNameFallback": "梓軒",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "梓軒看著跑道，問你：「你覺得邊個最快？」他明明在問別人，自己卻已經把袖子拉起來，像要證明甚麼。"
          }
        ],
        "playerChoices": [
          {
            "id": "w9_11_sports_day_practice_grouping_competitive_choice_1",
            "text": "未跑唔知。",
            "buttonText": "未跑唔知。",
            "playerLine": "未跑點知。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_11_sports_day_practice_grouping_competitive_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒嘟囔一句也是。你沒有加入猜名次，他只好看回自己的跑道。"
            },
            "resultText": "梓軒嘟囔一句也是。你沒有加入猜名次，他只好看回自己的跑道。",
            "statusDelta": {
              "自信": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_11_sports_day_practice_grouping",
              "variantId": "competitive",
              "mustMatchEventTitle": "運動日練習分組"
            }
          },
          {
            "id": "w9_11_sports_day_practice_grouping_competitive_choice_2",
            "text": "你係咪想贏？",
            "buttonText": "你係咪想贏？",
            "playerLine": "你係咪想贏呀？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_11_sports_day_practice_grouping_competitive_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒馬上說：「梗係啦。」但說完又看向終點，像那個「梗係」也有點重。"
            },
            "resultText": "梓軒馬上說：「梗係啦。」但說完又看向終點，像那個「梗係」也有點重。",
            "statusDelta": {
              "自信": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_11_sports_day_practice_grouping",
              "variantId": "competitive",
              "mustMatchEventTitle": "運動日練習分組"
            }
          },
          {
            "id": "w9_11_sports_day_practice_grouping_competitive_choice_3",
            "text": "我只想跑完。",
            "buttonText": "我只想跑完。",
            "playerLine": "我跑完就得。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_11_sports_day_practice_grouping_competitive_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒像不知道怎樣接這句。他過了一會兒才說：「跑完都要跑好啲。」"
            },
            "resultText": "梓軒像不知道怎樣接這句。他過了一會兒才說：「跑完都要跑好啲。」",
            "statusDelta": {
              "社交": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_11_sports_day_practice_grouping",
              "variantId": "competitive",
              "mustMatchEventTitle": "運動日練習分組"
            }
          },
          {
            "id": "w9_11_sports_day_practice_grouping_competitive_choice_4",
            "text": "不加入比較。",
            "buttonText": "不加入比較。",
            "playerLine": "我唔估。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_11_sports_day_practice_grouping_competitive_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒沒有再問你，轉去問另一個同學。你站在白線後，沒有被拉進那個排名裡。"
            },
            "resultText": "梓軒沒有再問你，轉去問另一個同學。你站在白線後，沒有被拉進那個排名裡。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_11_sports_day_practice_grouping",
              "variantId": "competitive",
              "mustMatchEventTitle": "運動日練習分組"
            }
          }
        ]
      },
      {
        "variantId": "hoiching",
        "variantType": "seniorStudent",
        "identityTypeId": "senior_student",
        "personalityId": "pers_senior_competitive_captain",
        "npcIdHint": "senior_captain_hoiching",
        "npcNameFallback": "凱晴",
        "unknownDisplayName": "校隊女生",
        "knownDisplayName": "凱晴師姐",
        "unlockCharacterId": "senior_captain_hoiching",
        "openingDialogue": [
          {
            "speaker": "凱晴師姐",
            "text": "校隊女生站在跑道旁幫體育老師排雪糕筒。她看見低年級排得歪，直接說：「線後面，唔好踩出去。跑之前先聽口令。」她說得快，但手勢很清楚。"
          }
        ],
        "playerChoices": [
          {
            "id": "w9_11_sports_day_practice_grouping_hoiching_choice_1",
            "text": "照手勢站好。",
            "buttonText": "照手勢站好。",
            "playerLine": "我企返後面。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_11_sports_day_practice_grouping_hoiching_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你退回白線後面。校隊女生沒有稱讚，但她的眼神從你腳邊移開，像這樣就夠了。"
            },
            "resultText": "你退回白線後面。校隊女生沒有稱讚，但她的眼神從你腳邊移開，像這樣就夠了。",
            "statusDelta": {
              "體力": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_11_sports_day_practice_grouping",
              "variantId": "hoiching",
              "mustMatchEventTitle": "運動日練習分組"
            }
          },
          {
            "id": "w9_11_sports_day_practice_grouping_hoiching_choice_2",
            "text": "問第一步。",
            "buttonText": "問第一步。",
            "playerLine": "第一步點跑？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_11_sports_day_practice_grouping_hoiching_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她示範腳尖放哪裡：「唔好跪太低，會慢。」你不一定做得到，但知道不是只靠衝。"
            },
            "resultText": "她示範腳尖放哪裡：「唔好跪太低，會慢。」你不一定做得到，但知道不是只靠衝。",
            "statusDelta": {
              "自信": 1,
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_captain_hoiching",
                "trueName": "凱晴",
                "sourceEventId": "w9_11_sports_day_practice_grouping"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_11_sports_day_practice_grouping",
              "variantId": "hoiching",
              "mustMatchEventTitle": "運動日練習分組"
            }
          },
          {
            "id": "w9_11_sports_day_practice_grouping_hoiching_choice_3",
            "text": "鞋帶鬆了。",
            "buttonText": "鞋帶鬆了。",
            "playerLine": "我鞋帶鬆咗。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_11_sports_day_practice_grouping_hoiching_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她立刻指旁邊：「綁好先。」這次她沒有催快，因為跌倒比慢更麻煩。"
            },
            "resultText": "她立刻指旁邊：「綁好先。」這次她沒有催快，因為跌倒比慢更麻煩。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_captain_hoiching",
                "trueName": "凱晴",
                "sourceEventId": "w9_11_sports_day_practice_grouping"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_11_sports_day_practice_grouping",
              "variantId": "hoiching",
              "mustMatchEventTitle": "運動日練習分組"
            }
          },
          {
            "id": "w9_11_sports_day_practice_grouping_hoiching_choice_4",
            "text": "退後一點。",
            "buttonText": "退後一點。",
            "playerLine": "我企後少少。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_11_sports_day_practice_grouping_hoiching_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你退到比較不擠的位置。校隊女生看了你一眼，沒有叫你回到最前。"
            },
            "resultText": "你退到比較不擠的位置。校隊女生看了你一眼，沒有叫你回到最前。",
            "statusDelta": {
              "自信": 1,
              "體力": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_11_sports_day_practice_grouping",
              "variantId": "hoiching",
              "mustMatchEventTitle": "運動日練習分組"
            }
          }
        ]
      },
      {
        "variantId": "pe_teacher",
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": null,
        "npcIdHint": "pe_teacher",
        "npcNameFallback": "體育老師",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "體育老師",
            "text": "體育老師吹一下哨子：「今日唔計名次，先學點排、點起跑、點停。唔舒服就舉手。」他指向陰影位，叫大家不要硬撐。"
          }
        ],
        "playerChoices": [
          {
            "id": "w9_11_sports_day_practice_grouping_pe_teacher_choice_1",
            "text": "排到自己組。",
            "buttonText": "排到自己組。",
            "playerLine": "我去我嗰組。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_11_sports_day_practice_grouping_pe_teacher_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你站到自己的組別後，操場看起來仍然很大，但至少有一條白線告訴你該站哪裡。"
            },
            "resultText": "你站到自己的組別後，操場看起來仍然很大，但至少有一條白線告訴你該站哪裡。",
            "statusDelta": {
              "體力": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_11_sports_day_practice_grouping",
              "variantId": "pe_teacher",
              "mustMatchEventTitle": "運動日練習分組"
            }
          },
          {
            "id": "w9_11_sports_day_practice_grouping_pe_teacher_choice_2",
            "text": "有點熱。",
            "buttonText": "有點熱。",
            "playerLine": "老師，我有啲熱。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_11_sports_day_practice_grouping_pe_teacher_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師叫你先站到陰影位喝水。今天不計名次，所以你不用把不舒服藏起來。"
            },
            "resultText": "老師叫你先站到陰影位喝水。今天不計名次，所以你不用把不舒服藏起來。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_11_sports_day_practice_grouping",
              "variantId": "pe_teacher",
              "mustMatchEventTitle": "運動日練習分組"
            }
          },
          {
            "id": "w9_11_sports_day_practice_grouping_pe_teacher_choice_3",
            "text": "今天不計分？",
            "buttonText": "今天不計分？",
            "playerLine": "今日真係唔計分？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_11_sports_day_practice_grouping_pe_teacher_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師再說一次不計。旁邊幾個同學也聽到了，隊伍裡的緊張鬆了一點。"
            },
            "resultText": "老師再說一次不計。旁邊幾個同學也聽到了，隊伍裡的緊張鬆了一點。",
            "statusDelta": {
              "自信": 1,
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_11_sports_day_practice_grouping",
              "variantId": "pe_teacher",
              "mustMatchEventTitle": "運動日練習分組"
            }
          },
          {
            "id": "w9_11_sports_day_practice_grouping_pe_teacher_choice_4",
            "text": "跟著同學排。",
            "buttonText": "跟著同學排。",
            "playerLine": "我跟住佢哋排。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_11_sports_day_practice_grouping_pe_teacher_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你跟著前面同學移動。這次沒有做錯，但如果前面的人走錯，你也差點跟著歪出去。"
            },
            "resultText": "你跟著前面同學移動。這次沒有做錯，但如果前面的人走錯，你也差點跟著歪出去。",
            "statusDelta": {
              "自信": 1,
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_11_sports_day_practice_grouping",
              "variantId": "pe_teacher",
              "mustMatchEventTitle": "運動日練習分組"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "w9_12_recitation_drawing_activity_signup_deadline",
    "sourceTopicId": "W9-12",
    "weekPool": "W9_authored_weekly",
    "week": 9,
    "dateRange": "Oct 27–Nov 2",
    "category": "school",
    "title": "朗誦／畫畫／班際活動報名截止",
    "sceneIntro": "放學前，老師把幾張報名表貼到黑板旁邊，提醒大家有些活動快截止。朗誦、畫畫、班際活動的表格疊在一起，名字很多，格子很小。有人已經報了，有人還在想，有人只看見「截止」兩個字就緊張。",
    "propertyValidation": {
      "purpose": "natural_scene_branching_only",
      "note": "自信高時，老師或高年級可能邀請玩家先試一小段；自信低時，老師不把表格推到玩家面前，只讓玩家先聽；創意高時，畫畫表格會更自然被提起；朗誦經驗大於 0 時，可以出現「上次讀句子」的回聲。低數值只出支援版本，不是失敗。",
      "ordinaryVersionAlwaysAvailable": true,
      "hideLockedChoices": true
    },
    "sceneIntroOverrides": [
      {
        "eligibleWhen": "TODO_from_author_property_note",
        "note": "自信高時，老師或高年級可能邀請玩家先試一小段；自信低時，老師不把表格推到玩家面前，只讓玩家先聽；創意高時，畫畫表格會更自然被提起；朗誦經驗大於 0 時，可以出現「上次讀句子」的回聲。低數值只出支援版本，不是失敗。"
      }
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        9,
        9
      ],
      "conditions": [],
      "exclusiveGroup": "w9_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "zhiyau",
        "variantType": "seniorStudent",
        "identityTypeId": "senior_student",
        "personalityId": "pers_friendly_senior",
        "npcIdHint": "senior_friendly_girl_zhiyau",
        "npcNameFallback": "芷悠",
        "unknownDisplayName": "高年級女生",
        "knownDisplayName": "芷悠師姐",
        "unlockCharacterId": "senior_friendly_girl_zhiyau",
        "openingDialogue": [
          {
            "speaker": "芷悠師姐",
            "text": "高年級女生到班房門口交文件，看見你們在看朗誦表，說：「第一次上台會震㗎，正常。」她把文件交給老師，又補一句：「可以先讀俾一個人聽。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w9_12_recitation_drawing_activity_signup_deadline_zhiyau_choice_1",
            "text": "上台會唔會好驚？",
            "buttonText": "上台會唔會好驚？",
            "playerLine": "師姐，上台會唔會好驚？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_12_recitation_drawing_activity_signup_deadline_zhiyau_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她說會，但不是一直都那麼驚。她講得很簡單，沒有把上台變成很偉大的事。"
            },
            "resultText": "她說會，但不是一直都那麼驚。她講得很簡單，沒有把上台變成很偉大的事。",
            "statusDelta": {
              "理智值": 1,
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_friendly_girl_zhiyau",
                "trueName": "芷悠",
                "sourceEventId": "w9_12_recitation_drawing_activity_signup_deadline"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_12_recitation_drawing_activity_signup_deadline",
              "variantId": "zhiyau",
              "mustMatchEventTitle": "朗誦／畫畫／班際活動報名截止"
            }
          },
          {
            "id": "w9_12_recitation_drawing_activity_signup_deadline_zhiyau_choice_2",
            "text": "我未敢報。",
            "buttonText": "我未敢報。",
            "playerLine": "我未敢報。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_12_recitation_drawing_activity_signup_deadline_zhiyau_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她點頭：「未敢就先聽。」你沒有被推去表格前，反而比較敢多看一眼。"
            },
            "resultText": "她點頭：「未敢就先聽。」你沒有被推去表格前，反而比較敢多看一眼。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_friendly_girl_zhiyau",
                "trueName": "芷悠",
                "sourceEventId": "w9_12_recitation_drawing_activity_signup_deadline"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_12_recitation_drawing_activity_signup_deadline",
              "variantId": "zhiyau",
              "mustMatchEventTitle": "朗誦／畫畫／班際活動報名截止"
            }
          },
          {
            "id": "w9_12_recitation_drawing_activity_signup_deadline_zhiyau_choice_3",
            "text": "可唔可以先聽？",
            "buttonText": "可唔可以先聽？",
            "playerLine": "我可唔可以先聽人哋讀？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_12_recitation_drawing_activity_signup_deadline_zhiyau_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她說可以，小息時有些人會練。報名表還在，但你多了一條不用馬上報名的路。"
            },
            "resultText": "她說可以，小息時有些人會練。報名表還在，但你多了一條不用馬上報名的路。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_friendly_girl_zhiyau",
                "trueName": "芷悠",
                "sourceEventId": "w9_12_recitation_drawing_activity_signup_deadline"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_12_recitation_drawing_activity_signup_deadline",
              "variantId": "zhiyau",
              "mustMatchEventTitle": "朗誦／畫畫／班際活動報名截止"
            }
          },
          {
            "id": "w9_12_recitation_drawing_activity_signup_deadline_zhiyau_choice_4",
            "text": "只看表格。",
            "buttonText": "只看表格。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_12_recitation_drawing_activity_signup_deadline_zhiyau_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有問。高年級女生交完文件就走了，那句「先讀俾一個人聽」留在你腦裡。"
            },
            "resultText": "你沒有問。高年級女生交完文件就走了，那句「先讀俾一個人聽」留在你腦裡。",
            "statusDelta": {
              "自信": 1,
              "創意": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_12_recitation_drawing_activity_signup_deadline",
              "variantId": "zhiyau",
              "mustMatchEventTitle": "朗誦／畫畫／班際活動報名截止"
            }
          }
        ]
      },
      {
        "variantId": "competitive",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_competitive_peer",
        "npcIdHint": "classmate_competitive_peer",
        "npcNameFallback": "梓軒",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "梓軒盯著畫畫比賽那張表：「如果得獎會唔會貼名出嚟？」他拿著筆，像想寫又還在等甚麼。"
          }
        ],
        "playerChoices": [
          {
            "id": "w9_12_recitation_drawing_activity_signup_deadline_competitive_choice_1",
            "text": "你想報邊個？",
            "buttonText": "你想報邊個？",
            "playerLine": "你想報邊個？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_12_recitation_drawing_activity_signup_deadline_competitive_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒說可能畫畫，又馬上補一句：「不過要睇有冇獎。」他的筆還沒落下，但已經離表格很近。"
            },
            "resultText": "梓軒說可能畫畫，又馬上補一句：「不過要睇有冇獎。」他的筆還沒落下，但已經離表格很近。",
            "statusDelta": {
              "社交": 1,
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
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_12_recitation_drawing_activity_signup_deadline",
              "variantId": "competitive",
              "mustMatchEventTitle": "朗誦／畫畫／班際活動報名截止"
            }
          },
          {
            "id": "w9_12_recitation_drawing_activity_signup_deadline_competitive_choice_2",
            "text": "我想報畫畫。",
            "buttonText": "我想報畫畫。",
            "playerLine": "我想報畫畫。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_12_recitation_drawing_activity_signup_deadline_competitive_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒立刻看你：「你畫咩？」那句不像普通聊天，比較像他已經開始想像比賽。"
            },
            "resultText": "梓軒立刻看你：「你畫咩？」那句不像普通聊天，比較像他已經開始想像比賽。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_12_recitation_drawing_activity_signup_deadline",
              "variantId": "competitive",
              "mustMatchEventTitle": "朗誦／畫畫／班際活動報名截止"
            }
          },
          {
            "id": "w9_12_recitation_drawing_activity_signup_deadline_competitive_choice_3",
            "text": "我未諗好。",
            "buttonText": "我未諗好。",
            "playerLine": "我未諗好。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_12_recitation_drawing_activity_signup_deadline_competitive_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒說截止快到了，手指敲了敲表格。你沒有因為他的急而立刻寫名。"
            },
            "resultText": "梓軒說截止快到了，手指敲了敲表格。你沒有因為他的急而立刻寫名。",
            "statusDelta": {
              "自信": 1,
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
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_12_recitation_drawing_activity_signup_deadline",
              "variantId": "competitive",
              "mustMatchEventTitle": "朗誦／畫畫／班際活動報名截止"
            }
          },
          {
            "id": "w9_12_recitation_drawing_activity_signup_deadline_competitive_choice_4",
            "text": "不跟他看同一張。",
            "buttonText": "不跟他看同一張。",
            "playerLine": "我睇另一張先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_12_recitation_drawing_activity_signup_deadline_competitive_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你移到另一張表格旁邊。梓軒還在原地看畫畫比賽，你避開了那種被比較的感覺。"
            },
            "resultText": "你移到另一張表格旁邊。梓軒還在原地看畫畫比賽，你避開了那種被比較的感覺。",
            "statusDelta": {
              "社交": 1,
              "創意": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_12_recitation_drawing_activity_signup_deadline",
              "variantId": "competitive",
              "mustMatchEventTitle": "朗誦／畫畫／班際活動報名截止"
            }
          }
        ]
      },
      {
        "variantId": "quiet",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_quiet_observer",
        "npcIdHint": "classmate_quiet_observer",
        "npcNameFallback": "穎心",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "穎心",
            "text": "穎心站在報名表旁邊很久，手指停在閱讀或畫畫那一欄，但沒有拿筆。她小聲說：「如果報咗，要唔要上台講嘢？」"
          }
        ],
        "playerChoices": [
          {
            "id": "w9_12_recitation_drawing_activity_signup_deadline_quiet_choice_1",
            "text": "一起問老師。",
            "buttonText": "一起問老師。",
            "playerLine": "我同你問老師。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_12_recitation_drawing_activity_signup_deadline_quiet_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心點點頭，跟你走近講台。她沒有自己一個人問，但也沒有走開。"
            },
            "resultText": "穎心點點頭，跟你走近講台。她沒有自己一個人問，但也沒有走開。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_12_recitation_drawing_activity_signup_deadline",
              "variantId": "quiet",
              "mustMatchEventTitle": "朗誦／畫畫／班際活動報名截止"
            }
          },
          {
            "id": "w9_12_recitation_drawing_activity_signup_deadline_quiet_choice_2",
            "text": "畫畫應該唔使。",
            "buttonText": "畫畫應該唔使。",
            "playerLine": "畫畫應該唔使講嘢。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_12_recitation_drawing_activity_signup_deadline_quiet_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心看了畫畫那一欄久一點，手指沒有立刻縮回去。那張表格忽然沒有那麼可怕。"
            },
            "resultText": "穎心看了畫畫那一欄久一點，手指沒有立刻縮回去。那張表格忽然沒有那麼可怕。",
            "statusDelta": {
              "自信": 1,
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
              "eventId": "w9_12_recitation_drawing_activity_signup_deadline",
              "variantId": "quiet",
              "mustMatchEventTitle": "朗誦／畫畫／班際活動報名截止"
            }
          },
          {
            "id": "w9_12_recitation_drawing_activity_signup_deadline_quiet_choice_3",
            "text": "你想唔想報？",
            "buttonText": "你想唔想報？",
            "playerLine": "你想唔想報呀？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_12_recitation_drawing_activity_signup_deadline_quiet_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心沒有馬上答，只說：「我想睇多陣。」你沒有催她，她就真的再看了一會兒。"
            },
            "resultText": "穎心沒有馬上答，只說：「我想睇多陣。」你沒有催她，她就真的再看了一會兒。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_12_recitation_drawing_activity_signup_deadline",
              "variantId": "quiet",
              "mustMatchEventTitle": "朗誦／畫畫／班際活動報名截止"
            }
          },
          {
            "id": "w9_12_recitation_drawing_activity_signup_deadline_quiet_choice_4",
            "text": "先不催她。",
            "buttonText": "先不催她。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_12_recitation_drawing_activity_signup_deadline_quiet_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你站在旁邊沒有說話。穎心慢慢把筆拿起來，又放下，至少她沒有急著離開。"
            },
            "resultText": "你站在旁邊沒有說話。穎心慢慢把筆拿起來，又放下，至少她沒有急著離開。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_12_recitation_drawing_activity_signup_deadline",
              "variantId": "quiet",
              "mustMatchEventTitle": "朗誦／畫畫／班際活動報名截止"
            }
          }
        ]
      },
      {
        "variantId": "caring_activity_teacher",
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": "pers_pastoral_care_teacher",
        "npcIdHint": "teacher_pastoral_care",
        "npcNameFallback": "老師",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師看見大家擠在報名表前，提醒：「想報可以報，唔想報都冇問題。唔好因為人哋報就急。」她把截止日期圈起來：「今晚可以同屋企人講。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w9_12_recitation_drawing_activity_signup_deadline_caring_activity_teacher_choice_1",
            "text": "明天再決定？",
            "buttonText": "明天再決定？",
            "playerLine": "老師，可唔可以聽日先決定？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_12_recitation_drawing_activity_signup_deadline_caring_activity_teacher_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說明早前可以。你看著截止日期，知道它還在，但沒有剛才那麼逼近。"
            },
            "resultText": "老師說明早前可以。你看著截止日期，知道它還在，但沒有剛才那麼逼近。",
            "statusDelta": {
              "自信": 1,
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_12_recitation_drawing_activity_signup_deadline",
              "variantId": "caring_activity_teacher",
              "mustMatchEventTitle": "朗誦／畫畫／班際活動報名截止"
            }
          },
          {
            "id": "w9_12_recitation_drawing_activity_signup_deadline_caring_activity_teacher_choice_2",
            "text": "拿表回家。",
            "buttonText": "拿表回家。",
            "playerLine": "我攞張返屋企睇。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_12_recitation_drawing_activity_signup_deadline_caring_activity_teacher_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師給你一張表，提醒不要弄丟。那張紙很薄，放進手冊後卻很有重量。"
            },
            "resultText": "老師給你一張表，提醒不要弄丟。那張紙很薄，放進手冊後卻很有重量。",
            "statusDelta": {
              "創意": 1,
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
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_12_recitation_drawing_activity_signup_deadline",
              "variantId": "caring_activity_teacher",
              "mustMatchEventTitle": "朗誦／畫畫／班際活動報名截止"
            }
          },
          {
            "id": "w9_12_recitation_drawing_activity_signup_deadline_caring_activity_teacher_choice_3",
            "text": "我想報但有啲驚。",
            "buttonText": "我想報但有啲驚。",
            "playerLine": "我想報，但有啲驚。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_12_recitation_drawing_activity_signup_deadline_caring_activity_teacher_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師沒有笑你，只說可以先試一小段。你還沒報名，但已經被允許害怕。"
            },
            "resultText": "老師沒有笑你，只說可以先試一小段。你還沒報名，但已經被允許害怕。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_12_recitation_drawing_activity_signup_deadline",
              "variantId": "caring_activity_teacher",
              "mustMatchEventTitle": "朗誦／畫畫／班際活動報名截止"
            }
          },
          {
            "id": "w9_12_recitation_drawing_activity_signup_deadline_caring_activity_teacher_choice_4",
            "text": "先不拿表。",
            "buttonText": "先不拿表。",
            "playerLine": "我唔攞住。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w9_12_recitation_drawing_activity_signup_deadline_caring_activity_teacher_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師點頭，讓你回座位。你沒有錯過全部，只是今晚不用把那張紙帶回家。"
            },
            "resultText": "老師點頭，讓你回座位。你沒有錯過全部，只是今晚不用把那張紙帶回家。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "朗誦": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w9_12_recitation_drawing_activity_signup_deadline",
              "variantId": "caring_activity_teacher",
              "mustMatchEventTitle": "朗誦／畫畫／班際活動報名截止"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "w10_13_flu_news_handwashing_reminder",
    "sourceTopicId": "W10-13",
    "weekPool": "W10_authored_weekly",
    "week": 10,
    "dateRange": "Nov 3–Nov 9",
    "category": "news",
    "title": "流感新聞，學校開始提醒洗手",
    "sceneIntro": "早上進課室時，門口多了一支搓手液。黑板角落貼了「洗手、戴口罩、唔舒服要講」的提醒。老師說最近新聞有流感消息，所以學校會多提醒衛生。你聽到「流感」兩個字，班裡也有人開始問是不是很多人會病。",
    "propertyValidation": null,
    "sceneIntroOverrides": [],
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        10,
        10
      ],
      "conditions": [],
      "exclusiveGroup": "w10_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "strict_teacher",
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": "pers_strict_academic",
        "npcIdHint": "teacher_strict_academic",
        "npcNameFallback": "老師",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師站在門邊：「入課室前搓手，咳就掩口，紙巾用完掉垃圾桶。」她指指隊伍：「唔好玩搓手液。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w10_13_flu_news_handwashing_reminder_strict_teacher_choice_1",
            "text": "照做搓手。",
            "buttonText": "照做搓手。",
            "playerLine": "我搓手先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_13_flu_news_handwashing_reminder_strict_teacher_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "搓手液味道有點大，你還是把手搓到乾。老師看見你沒有玩那支瓶，便讓你進課室。"
            },
            "resultText": "搓手液味道有點大，你還是把手搓到乾。老師看見你沒有玩那支瓶，便讓你進課室。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_13_flu_news_handwashing_reminder",
              "variantId": "strict_teacher",
              "mustMatchEventTitle": "流感新聞，學校開始提醒洗手"
            }
          },
          {
            "id": "w10_13_flu_news_handwashing_reminder_strict_teacher_choice_2",
            "text": "全班會病嗎？",
            "buttonText": "全班會病嗎？",
            "playerLine": "係咪全班都會病？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_13_flu_news_handwashing_reminder_strict_teacher_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師回答很短：「唔係咁計。做好自己先。」你仍不完全懂，但知道搓手是今天要做的事。"
            },
            "resultText": "老師回答很短：「唔係咁計。做好自己先。」你仍不完全懂，但知道搓手是今天要做的事。",
            "statusDelta": {
              "理智值": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_13_flu_news_handwashing_reminder",
              "variantId": "strict_teacher",
              "mustMatchEventTitle": "流感新聞，學校開始提醒洗手"
            }
          },
          {
            "id": "w10_13_flu_news_handwashing_reminder_strict_teacher_choice_3",
            "text": "提醒後面同學。",
            "buttonText": "提醒後面同學。",
            "playerLine": "你未搓手呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_13_flu_news_handwashing_reminder_strict_teacher_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "後面同學看你一眼，才按了一下瓶子。老師沒有叫你做小老師，但隊伍少了一點混亂。"
            },
            "resultText": "後面同學看你一眼，才按了一下瓶子。老師沒有叫你做小老師，但隊伍少了一點混亂。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_13_flu_news_handwashing_reminder",
              "variantId": "strict_teacher",
              "mustMatchEventTitle": "流感新聞，學校開始提醒洗手"
            }
          },
          {
            "id": "w10_13_flu_news_handwashing_reminder_strict_teacher_choice_4",
            "text": "味道太大。",
            "buttonText": "味道太大。",
            "playerLine": "好大陣味……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_13_flu_news_handwashing_reminder_strict_teacher_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你想快點走，老師叫你搓完才進去。那股味道留在手上很久，像新聞也跟著進了班房。"
            },
            "resultText": "你想快點走，老師叫你搓完才進去。那股味道留在手上很久，像新聞也跟著進了班房。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_13_flu_news_handwashing_reminder",
              "variantId": "strict_teacher",
              "mustMatchEventTitle": "流感新聞，學校開始提醒洗手"
            }
          }
        ]
      },
      {
        "variantId": "caring_teacher",
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": "pers_pastoral_care_teacher",
        "npcIdHint": "teacher_pastoral_care",
        "npcNameFallback": "老師",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師看見有人聽到流感就緊張，放慢聲音：「新聞講有流感，不代表你一聽到就會病。唔舒服就同大人講。」她把紙巾盒放到講台邊。"
          }
        ],
        "playerChoices": [
          {
            "id": "w10_13_flu_news_handwashing_reminder_caring_teacher_choice_1",
            "text": "咳要點做？",
            "buttonText": "咳要點做？",
            "playerLine": "如果咳，要點做？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_13_flu_news_handwashing_reminder_caring_teacher_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師示範用紙巾或手肘遮住口鼻。你跟著做一次，動作有點笨，但記住了。"
            },
            "resultText": "老師示範用紙巾或手肘遮住口鼻。你跟著做一次，動作有點笨，但記住了。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_13_flu_news_handwashing_reminder",
              "variantId": "caring_teacher",
              "mustMatchEventTitle": "流感新聞，學校開始提醒洗手"
            }
          },
          {
            "id": "w10_13_flu_news_handwashing_reminder_caring_teacher_choice_2",
            "text": "我有啲驚。",
            "buttonText": "我有啲驚。",
            "playerLine": "我有啲驚。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_13_flu_news_handwashing_reminder_caring_teacher_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說驚也可以，但不要亂估。她把紙巾盒放近一點，像把害怕變成一件可以做的小事。"
            },
            "resultText": "老師說驚也可以，但不要亂估。她把紙巾盒放近一點，像把害怕變成一件可以做的小事。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_13_flu_news_handwashing_reminder",
              "variantId": "caring_teacher",
              "mustMatchEventTitle": "流感新聞，學校開始提醒洗手"
            }
          },
          {
            "id": "w10_13_flu_news_handwashing_reminder_caring_teacher_choice_3",
            "text": "拿一張紙巾。",
            "buttonText": "拿一張紙巾。",
            "playerLine": "我攞張紙巾放書包。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_13_flu_news_handwashing_reminder_caring_teacher_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把紙巾摺好放進書包外格。它不代表你一定會病，但你覺得自己有準備。"
            },
            "resultText": "你把紙巾摺好放進書包外格。它不代表你一定會病，但你覺得自己有準備。",
            "statusDelta": {
              "理智值": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_13_flu_news_handwashing_reminder",
              "variantId": "caring_teacher",
              "mustMatchEventTitle": "流感新聞，學校開始提醒洗手"
            }
          },
          {
            "id": "w10_13_flu_news_handwashing_reminder_caring_teacher_choice_4",
            "text": "先不出聲。",
            "buttonText": "先不出聲。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_13_flu_news_handwashing_reminder_caring_teacher_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有問問題，只看著搓手液瓶。老師繼續講步驟，你默默跟著做。"
            },
            "resultText": "你沒有問問題，只看著搓手液瓶。老師繼續講步驟，你默默跟著做。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_13_flu_news_handwashing_reminder",
              "variantId": "caring_teacher",
              "mustMatchEventTitle": "流感新聞，學校開始提醒洗手"
            }
          }
        ]
      },
      {
        "variantId": "outgoing",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "家朗一進門就聞到搓手液：「嘩，好大陣味。」他搓完手，把手伸到你面前，又馬上縮回去：「唔好，老師話唔好玩。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w10_13_flu_news_handwashing_reminder_outgoing_choice_1",
            "text": "唔好玩。",
            "buttonText": "唔好玩。",
            "playerLine": "唔好玩搓手液啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_13_flu_news_handwashing_reminder_outgoing_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗把手收回，還是忍不住聞了聞。他說：「我冇玩。」但聲音小了點。"
            },
            "resultText": "家朗把手收回，還是忍不住聞了聞。他說：「我冇玩。」但聲音小了點。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_13_flu_news_handwashing_reminder",
              "variantId": "outgoing",
              "mustMatchEventTitle": "流感新聞，學校開始提醒洗手"
            }
          },
          {
            "id": "w10_13_flu_news_handwashing_reminder_outgoing_choice_2",
            "text": "跟著搓手。",
            "buttonText": "跟著搓手。",
            "playerLine": "我都搓。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_13_flu_news_handwashing_reminder_outgoing_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你按了一下搓手液，家朗看你搓得很認真，也跟著多搓幾下指尖。"
            },
            "resultText": "你按了一下搓手液，家朗看你搓得很認真，也跟著多搓幾下指尖。",
            "statusDelta": {
              "理智值": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_13_flu_news_handwashing_reminder",
              "variantId": "outgoing",
              "mustMatchEventTitle": "流感新聞，學校開始提醒洗手"
            }
          },
          {
            "id": "w10_13_flu_news_handwashing_reminder_outgoing_choice_3",
            "text": "你怕病嗎？",
            "buttonText": "你怕病嗎？",
            "playerLine": "你怕唔怕病？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_13_flu_news_handwashing_reminder_outgoing_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗立刻說不怕，過了一會兒又問你有沒有紙巾。他的「不怕」好像不是全部真的。"
            },
            "resultText": "家朗立刻說不怕，過了一會兒又問你有沒有紙巾。他的「不怕」好像不是全部真的。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_13_flu_news_handwashing_reminder",
              "variantId": "outgoing",
              "mustMatchEventTitle": "流感新聞，學校開始提醒洗手"
            }
          },
          {
            "id": "w10_13_flu_news_handwashing_reminder_outgoing_choice_4",
            "text": "笑一下不伸手。",
            "buttonText": "笑一下不伸手。",
            "playerLine": "哈哈，唔好畀我聞。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_13_flu_news_handwashing_reminder_outgoing_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗笑了，沒有再把手伸過來。你們把這件事當成小笑位，但還是排好隊進課室。"
            },
            "resultText": "家朗笑了，沒有再把手伸過來。你們把這件事當成小笑位，但還是排好隊進課室。",
            "statusDelta": {
              "理智值": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_13_flu_news_handwashing_reminder",
              "variantId": "outgoing",
              "mustMatchEventTitle": "流感新聞，學校開始提醒洗手"
            }
          }
        ]
      },
      {
        "variantId": "quiet",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_quiet_observer",
        "npcIdHint": "classmate_quiet_observer",
        "npcNameFallback": "穎心",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "穎心",
            "text": "穎心把自己的小紙巾包放在桌角，又用濕紙巾擦了一下鉛筆盒。她沒有說新聞，只小聲問：「你要紙巾嗎？」"
          }
        ],
        "playerChoices": [
          {
            "id": "w10_13_flu_news_handwashing_reminder_quiet_choice_1",
            "text": "接一張。",
            "buttonText": "接一張。",
            "playerLine": "好呀，多謝。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_13_flu_news_handwashing_reminder_quiet_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心把紙巾推過來，沒有多說。那張紙巾很薄，但你覺得桌面和心裡都乾淨了一點。"
            },
            "resultText": "穎心把紙巾推過來，沒有多說。那張紙巾很薄，但你覺得桌面和心裡都乾淨了一點。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_13_flu_news_handwashing_reminder",
              "variantId": "quiet",
              "mustMatchEventTitle": "流感新聞，學校開始提醒洗手"
            }
          },
          {
            "id": "w10_13_flu_news_handwashing_reminder_quiet_choice_2",
            "text": "我有。",
            "buttonText": "我有。",
            "playerLine": "我有紙巾。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_13_flu_news_handwashing_reminder_quiet_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心點點頭，把自己的紙巾包放回外格。你們沒有講流感，但都知道那包紙巾在哪裡。"
            },
            "resultText": "穎心點點頭，把自己的紙巾包放回外格。你們沒有講流感，但都知道那包紙巾在哪裡。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_13_flu_news_handwashing_reminder",
              "variantId": "quiet",
              "mustMatchEventTitle": "流感新聞，學校開始提醒洗手"
            }
          },
          {
            "id": "w10_13_flu_news_handwashing_reminder_quiet_choice_3",
            "text": "你很怕病嗎？",
            "buttonText": "你很怕病嗎？",
            "playerLine": "你係咪好驚病？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_13_flu_news_handwashing_reminder_quiet_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心搖頭：「唔想黏黏哋。」她的理由很細，但你聽得懂。"
            },
            "resultText": "穎心搖頭：「唔想黏黏哋。」她的理由很細，但你聽得懂。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_13_flu_news_handwashing_reminder",
              "variantId": "quiet",
              "mustMatchEventTitle": "流感新聞，學校開始提醒洗手"
            }
          },
          {
            "id": "w10_13_flu_news_handwashing_reminder_quiet_choice_4",
            "text": "一起擦桌。",
            "buttonText": "一起擦桌。",
            "playerLine": "我同你擦桌面。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_13_flu_news_handwashing_reminder_quiet_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你拿出紙巾擦自己的桌邊。穎心沒有笑你學她，只把濕紙巾盒推近一點。"
            },
            "resultText": "你拿出紙巾擦自己的桌邊。穎心沒有笑你學她，只把濕紙巾盒推近一點。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_13_flu_news_handwashing_reminder",
              "variantId": "quiet",
              "mustMatchEventTitle": "流感新聞，學校開始提醒洗手"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "w10_14_roadworks_school_route_change",
    "sourceTopicId": "W10-14",
    "weekPool": "W10_authored_weekly",
    "week": 10,
    "dateRange": "Nov 3–Nov 9",
    "category": "news",
    "title": "學校附近修路，放學路線改了",
    "sceneIntro": "放學鈴響後，老師說今天校門外有修路，放學隊伍要改從側門走。走廊比平時更亂，因為大家習慣的方向變了。你看見遠處有膠欄、工人帽和黃色告示牌，聲音也比平時嘈。",
    "propertyValidation": null,
    "sceneIntroOverrides": [],
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        10,
        10
      ],
      "conditions": [],
      "exclusiveGroup": "w10_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "junlong",
        "variantType": "seniorStudent",
        "identityTypeId": "senior_student",
        "personalityId": "pers_strict_prefect",
        "npcIdHint": "senior_strict_prefect_junlong",
        "npcNameFallback": "俊朗",
        "unknownDisplayName": "風紀男生",
        "knownDisplayName": "俊朗師兄",
        "unlockCharacterId": "senior_strict_prefect_junlong",
        "openingDialogue": [
          {
            "speaker": "俊朗師兄",
            "text": "風紀男生站在樓梯口，手指向另一邊：「小一唔好行正門，今日行側門。跟住老師，唔好自己衝。」他語氣很快，但方向指得很清楚。"
          }
        ],
        "playerChoices": [
          {
            "id": "w10_14_roadworks_school_route_change_junlong_choice_1",
            "text": "側門係邊？",
            "buttonText": "側門係邊？",
            "playerLine": "師兄，側門係邊？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_14_roadworks_school_route_change_junlong_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "他立刻指向走廊另一端：「嗰邊，跟班牌。」語氣硬，但你不用再猜方向。"
            },
            "resultText": "他立刻指向走廊另一端：「嗰邊，跟班牌。」語氣硬，但你不用再猜方向。",
            "statusDelta": {
              "理智值": 2,
              "壓力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_strict_prefect_junlong",
                "trueName": "俊朗",
                "sourceEventId": "w10_14_roadworks_school_route_change"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_14_roadworks_school_route_change",
              "variantId": "junlong",
              "mustMatchEventTitle": "學校附近修路，放學路線改了"
            }
          },
          {
            "id": "w10_14_roadworks_school_route_change_junlong_choice_2",
            "text": "跟隊伍走。",
            "buttonText": "跟隊伍走。",
            "playerLine": "我跟住隊。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_14_roadworks_school_route_change_junlong_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你跟著前面同學轉向側門。走廊仍然嘈，但你沒有被正門那邊的膠欄吸走。"
            },
            "resultText": "你跟著前面同學轉向側門。走廊仍然嘈，但你沒有被正門那邊的膠欄吸走。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_strict_prefect_junlong",
                "trueName": "俊朗",
                "sourceEventId": "w10_14_roadworks_school_route_change"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_14_roadworks_school_route_change",
              "variantId": "junlong",
              "mustMatchEventTitle": "學校附近修路，放學路線改了"
            }
          },
          {
            "id": "w10_14_roadworks_school_route_change_junlong_choice_3",
            "text": "先讓後面過。",
            "buttonText": "先讓後面過。",
            "playerLine": "你哋先過。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_14_roadworks_school_route_change_junlong_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你往牆邊讓開一點。風紀男生看見後沒有催你，因為你沒有擋在中間。"
            },
            "resultText": "你往牆邊讓開一點。風紀男生看見後沒有催你，因為你沒有擋在中間。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_strict_prefect_junlong",
                "trueName": "俊朗",
                "sourceEventId": "w10_14_roadworks_school_route_change"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_14_roadworks_school_route_change",
              "variantId": "junlong",
              "mustMatchEventTitle": "學校附近修路，放學路線改了"
            }
          },
          {
            "id": "w10_14_roadworks_school_route_change_junlong_choice_4",
            "text": "站住望正門。",
            "buttonText": "站住望正門。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_14_roadworks_school_route_change_junlong_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你望著平時的正門，腳沒有動。風紀男生很快叫你：「唔好企定，行。」那句讓你有點緊張，但也把你拉回隊伍。"
            },
            "resultText": "你望著平時的正門，腳沒有動。風紀男生很快叫你：「唔好企定，行。」那句讓你有點緊張，但也把你拉回隊伍。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_14_roadworks_school_route_change",
              "variantId": "junlong",
              "mustMatchEventTitle": "學校附近修路，放學路線改了"
            }
          }
        ]
      },
      {
        "variantId": "zhiyau",
        "variantType": "seniorStudent",
        "identityTypeId": "senior_student",
        "personalityId": "pers_friendly_senior",
        "npcIdHint": "senior_friendly_girl_zhiyau",
        "npcNameFallback": "芷悠",
        "unknownDisplayName": "高年級女生",
        "knownDisplayName": "芷悠師姐",
        "unlockCharacterId": "senior_friendly_girl_zhiyau",
        "openingDialogue": [
          {
            "speaker": "芷悠師姐",
            "text": "高年級女生在側門附近看見你們停住，蹲低一點說：「今日唔同平時，睇住前面班牌就得。」她指向你班老師：「你哋老師喺嗰邊。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w10_14_roadworks_school_route_change_zhiyau_choice_1",
            "text": "每日都改嗎？",
            "buttonText": "每日都改嗎？",
            "playerLine": "係咪日日都行呢度？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_14_roadworks_school_route_change_zhiyau_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她搖頭：「唔係，修路先係咁。」你聽到不是每天都變，心裡定了一點。"
            },
            "resultText": "她搖頭：「唔係，修路先係咁。」你聽到不是每天都變，心裡定了一點。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_friendly_girl_zhiyau",
                "trueName": "芷悠",
                "sourceEventId": "w10_14_roadworks_school_route_change"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_14_roadworks_school_route_change",
              "variantId": "zhiyau",
              "mustMatchEventTitle": "學校附近修路，放學路線改了"
            }
          },
          {
            "id": "w10_14_roadworks_school_route_change_zhiyau_choice_2",
            "text": "跟她指的方向。",
            "buttonText": "跟她指的方向。",
            "playerLine": "我見到老師喇。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_14_roadworks_school_route_change_zhiyau_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沿著她指的方向走，終於看見班主任。高年級女生沒有跟到底，只確認你看見了。"
            },
            "resultText": "你沿著她指的方向走，終於看見班主任。高年級女生沒有跟到底，只確認你看見了。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_friendly_girl_zhiyau",
                "trueName": "芷悠",
                "sourceEventId": "w10_14_roadworks_school_route_change"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_14_roadworks_school_route_change",
              "variantId": "zhiyau",
              "mustMatchEventTitle": "學校附近修路，放學路線改了"
            }
          },
          {
            "id": "w10_14_roadworks_school_route_change_zhiyau_choice_3",
            "text": "我搵唔到門口。",
            "buttonText": "我搵唔到門口。",
            "playerLine": "我搵唔到門口。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_14_roadworks_school_route_change_zhiyau_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她沒有笑你，只指著側門的亮光：「嗰個就係。」原來門口只是換了位置，不是消失了。"
            },
            "resultText": "她沒有笑你，只指著側門的亮光：「嗰個就係。」原來門口只是換了位置，不是消失了。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_friendly_girl_zhiyau",
                "trueName": "芷悠",
                "sourceEventId": "w10_14_roadworks_school_route_change"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_14_roadworks_school_route_change",
              "variantId": "zhiyau",
              "mustMatchEventTitle": "學校附近修路，放學路線改了"
            }
          },
          {
            "id": "w10_14_roadworks_school_route_change_zhiyau_choice_4",
            "text": "慢慢行。",
            "buttonText": "慢慢行。",
            "playerLine": "我慢慢行。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_14_roadworks_school_route_change_zhiyau_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你拉住書包帶跟著隊伍。她沒有催你快，只提醒你不要離隊太遠。"
            },
            "resultText": "你拉住書包帶跟著隊伍。她沒有催你快，只提醒你不要離隊太遠。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_friendly_girl_zhiyau",
                "trueName": "芷悠",
                "sourceEventId": "w10_14_roadworks_school_route_change"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_14_roadworks_school_route_change",
              "variantId": "zhiyau",
              "mustMatchEventTitle": "學校附近修路，放學路線改了"
            }
          }
        ]
      },
      {
        "variantId": "parent_pickup",
        "variantType": "family",
        "identityTypeId": "family_elder",
        "personalityId": null,
        "npcIdHint": "family_pickup",
        "npcNameFallback": "家人",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "家人",
            "text": "放學後，家長接送位也移了。你看見平時等你的地方空了，心裡一緊。老師叫大家不要亂走，等家長到側門。"
          }
        ],
        "playerChoices": [
          {
            "id": "w10_14_roadworks_school_route_change_parent_pickup_choice_1",
            "text": "留在老師旁邊。",
            "buttonText": "留在老師旁邊。",
            "playerLine": "我留喺老師度等。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_14_roadworks_school_route_change_parent_pickup_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你站在老師旁邊，過了一會兒就看見家長從另一邊揮手。原來他們也只是繞了路。"
            },
            "resultText": "你站在老師旁邊，過了一會兒就看見家長從另一邊揮手。原來他們也只是繞了路。",
            "statusDelta": {
              "理智值": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_14_roadworks_school_route_change",
              "variantId": "parent_pickup",
              "mustMatchEventTitle": "學校附近修路，放學路線改了"
            }
          },
          {
            "id": "w10_14_roadworks_school_route_change_parent_pickup_choice_2",
            "text": "問家長在哪。",
            "buttonText": "問家長在哪。",
            "playerLine": "老師，我爸爸媽媽喺邊？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_14_roadworks_school_route_change_parent_pickup_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師叫你先不要走，家長會到側門。你還是擔心，但不再想自己跑去舊門口。"
            },
            "resultText": "老師叫你先不要走，家長會到側門。你還是擔心，但不再想自己跑去舊門口。",
            "statusDelta": {
              "自信": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_14_roadworks_school_route_change",
              "variantId": "parent_pickup",
              "mustMatchEventTitle": "學校附近修路，放學路線改了"
            }
          },
          {
            "id": "w10_14_roadworks_school_route_change_parent_pickup_choice_3",
            "text": "想去舊門口。",
            "buttonText": "想去舊門口。",
            "playerLine": "我想去以前嗰邊睇吓。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_14_roadworks_school_route_change_parent_pickup_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師立刻叫你停下。你沒有去成，心裡急了一下，但也避開了修路那邊。"
            },
            "resultText": "老師立刻叫你停下。你沒有去成，心裡急了一下，但也避開了修路那邊。",
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": -1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_14_roadworks_school_route_change",
              "variantId": "parent_pickup",
              "mustMatchEventTitle": "學校附近修路，放學路線改了"
            }
          },
          {
            "id": "w10_14_roadworks_school_route_change_parent_pickup_choice_4",
            "text": "找熟悉書包。",
            "buttonText": "找熟悉書包。",
            "playerLine": "我睇下有冇同班同學。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_14_roadworks_school_route_change_parent_pickup_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你看見幾個同班同學也在等。原來不是只有你找不到平時的位置。"
            },
            "resultText": "你看見幾個同班同學也在等。原來不是只有你找不到平時的位置。",
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
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_14_roadworks_school_route_change",
              "variantId": "parent_pickup",
              "mustMatchEventTitle": "學校附近修路，放學路線改了"
            }
          }
        ]
      },
      {
        "variantId": "curious",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_mischief_maker",
        "npcIdHint": "classmate_curious_troublemaker",
        "npcNameFallback": "柏宇",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "柏宇",
            "text": "柏宇看見修路膠欄，眼睛亮起來：「嗰邊好似迷宮。」他想往前看，被老師叫回隊伍。他小聲說：「如果側門平時唔開，入面會唔會有秘密路？」"
          }
        ],
        "playerChoices": [
          {
            "id": "w10_14_roadworks_school_route_change_curious_choice_1",
            "text": "排隊先。",
            "buttonText": "排隊先。",
            "playerLine": "排隊先啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_14_roadworks_school_route_change_curious_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇被你拉回隊伍，還是回頭看了兩次。秘密路暫時輸給放學隊伍。"
            },
            "resultText": "柏宇被你拉回隊伍，還是回頭看了兩次。秘密路暫時輸給放學隊伍。",
            "statusDelta": {
              "理智值": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_14_roadworks_school_route_change",
              "variantId": "curious",
              "mustMatchEventTitle": "學校附近修路，放學路線改了"
            }
          },
          {
            "id": "w10_14_roadworks_school_route_change_curious_choice_2",
            "text": "側門通去邊？",
            "buttonText": "側門通去邊？",
            "playerLine": "側門通去邊㗎？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_14_roadworks_school_route_change_curious_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇立刻想講一個很神秘的答案，但老師在前面說通去接送區。他小聲說：「咁都係路。」"
            },
            "resultText": "柏宇立刻想講一個很神秘的答案，但老師在前面說通去接送區。他小聲說：「咁都係路。」",
            "statusDelta": {
              "理智值": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_14_roadworks_school_route_change",
              "variantId": "curious",
              "mustMatchEventTitle": "學校附近修路，放學路線改了"
            }
          },
          {
            "id": "w10_14_roadworks_school_route_change_curious_choice_3",
            "text": "唔好近工地。",
            "buttonText": "唔好近工地。",
            "playerLine": "唔好行咁近，危險。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_14_roadworks_school_route_change_curious_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇停在膠欄外，腳尖沒有再往前。他嘟囔說只是看一下，但真的退後了。"
            },
            "resultText": "柏宇停在膠欄外，腳尖沒有再往前。他嘟囔說只是看一下，但真的退後了。",
            "statusDelta": {
              "理智值": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_14_roadworks_school_route_change",
              "variantId": "curious",
              "mustMatchEventTitle": "學校附近修路，放學路線改了"
            }
          },
          {
            "id": "w10_14_roadworks_school_route_change_curious_choice_4",
            "text": "望一眼告示牌。",
            "buttonText": "望一眼告示牌。",
            "playerLine": "睇下個牌寫咩。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_14_roadworks_school_route_change_curious_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你們一起看黃色告示。字有些看不懂，但工人帽和箭嘴很明顯，像一張大人的路線圖。"
            },
            "resultText": "你們一起看黃色告示。字有些看不懂，但工人帽和箭嘴很明顯，像一張大人的路線圖。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_14_roadworks_school_route_change",
              "variantId": "curious",
              "mustMatchEventTitle": "學校附近修路，放學路線改了"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "w10_15_price_news_child_misunderstanding",
    "sourceTopicId": "W10-15",
    "weekPool": "W10_authored_weekly",
    "week": 10,
    "dateRange": "Nov 3–Nov 9",
    "category": "news",
    "title": "物價新聞被小朋友誤解",
    "sceneIntro": "晚上電視新聞在講「物價上升」，畫面有菜檔、超市和一串你看不太懂的數字。大人一邊看一邊說最近甚麼都貴了。你手裡拿著一塊快用完的擦膠，突然想到：是不是以後連擦膠都不能買了？",
    "propertyValidation": null,
    "sceneIntroOverrides": [],
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        10,
        10
      ],
      "conditions": [],
      "exclusiveGroup": "w10_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "dad",
        "variantType": "family",
        "identityTypeId": "family_elder",
        "personalityId": null,
        "npcIdHint": "char_dad",
        "npcNameFallback": "爸爸",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "爸爸",
            "text": "爸爸看著新聞，嘆了一口氣：「啲嘢又貴咗。」你問是不是以後不能買文具，他愣了一下，才笑笑：「唔係完全唔買，係要諗清楚先買。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w10_15_price_news_child_misunderstanding_dad_choice_1",
            "text": "擦膠可以買嗎？",
            "buttonText": "擦膠可以買嗎？",
            "playerLine": "咁擦膠可唔可以買？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_15_price_news_child_misunderstanding_dad_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸拿起你的擦膠看了看，說真的用完就買。你還是覺得那塊擦膠突然變珍貴了。"
            },
            "resultText": "爸爸拿起你的擦膠看了看，說真的用完就買。你還是覺得那塊擦膠突然變珍貴了。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_15_price_news_child_misunderstanding",
              "variantId": "dad",
              "mustMatchEventTitle": "物價新聞被小朋友誤解"
            }
          },
          {
            "id": "w10_15_price_news_child_misunderstanding_dad_choice_2",
            "text": "我用完先買。",
            "buttonText": "我用完先買。",
            "playerLine": "我用完先買。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_15_price_news_child_misunderstanding_dad_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸點頭，說這樣就好。你把擦膠放回筆盒時，比平時放得更小心。"
            },
            "resultText": "爸爸點頭，說這樣就好。你把擦膠放回筆盒時，比平時放得更小心。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_15_price_news_child_misunderstanding",
              "variantId": "dad",
              "mustMatchEventTitle": "物價新聞被小朋友誤解"
            }
          },
          {
            "id": "w10_15_price_news_child_misunderstanding_dad_choice_3",
            "text": "點解會貴？",
            "buttonText": "點解會貴？",
            "playerLine": "點解會貴嘅？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_15_price_news_child_misunderstanding_dad_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸想解釋，又停了一下，只說很多東西都要錢去運來運去。你聽懂一半，另一半留在電視裡。"
            },
            "resultText": "爸爸想解釋，又停了一下，只說很多東西都要錢去運來運去。你聽懂一半，另一半留在電視裡。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_15_price_news_child_misunderstanding",
              "variantId": "dad",
              "mustMatchEventTitle": "物價新聞被小朋友誤解"
            }
          },
          {
            "id": "w10_15_price_news_child_misunderstanding_dad_choice_4",
            "text": "把擦膠收好。",
            "buttonText": "把擦膠收好。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_15_price_news_child_misunderstanding_dad_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有再問，把擦膠收進筆盒最裡面。電視還在講，你卻只想不要弄丟它。"
            },
            "resultText": "你沒有再問，把擦膠收進筆盒最裡面。電視還在講，你卻只想不要弄丟它。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_15_price_news_child_misunderstanding",
              "variantId": "dad",
              "mustMatchEventTitle": "物價新聞被小朋友誤解"
            }
          }
        ]
      },
      {
        "variantId": "mom",
        "variantType": "family",
        "identityTypeId": "family_elder",
        "personalityId": null,
        "npcIdHint": "char_mom",
        "npcNameFallback": "媽媽",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "媽媽",
            "text": "媽媽在整理收據，聽見你問是不是不能買東西，停下來說：「唔係呀，食飯同返學要用嘅都會買。」她把收據摺好：「但唔一定見到靚就買。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w10_15_price_news_child_misunderstanding_mom_choice_1",
            "text": "我見到小熊擦膠。",
            "buttonText": "我見到小熊擦膠。",
            "playerLine": "我見到小熊擦膠好靚。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_15_price_news_child_misunderstanding_mom_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽笑了一下，問家裡是不是還有擦膠。你知道她不是沒有聽見，只是還沒說可以。"
            },
            "resultText": "媽媽笑了一下，問家裡是不是還有擦膠。你知道她不是沒有聽見，只是還沒說可以。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_15_price_news_child_misunderstanding",
              "variantId": "mom",
              "mustMatchEventTitle": "物價新聞被小朋友誤解"
            }
          },
          {
            "id": "w10_15_price_news_child_misunderstanding_mom_choice_2",
            "text": "我用舊的先。",
            "buttonText": "我用舊的先。",
            "playerLine": "咁我用舊嗰舊先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_15_price_news_child_misunderstanding_mom_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽點頭，收據也摺好了。你把筆盒拉鍊拉上，像做了一件小小的大人事。"
            },
            "resultText": "媽媽點頭，收據也摺好了。你把筆盒拉鍊拉上，像做了一件小小的大人事。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_15_price_news_child_misunderstanding",
              "variantId": "mom",
              "mustMatchEventTitle": "物價新聞被小朋友誤解"
            }
          },
          {
            "id": "w10_15_price_news_child_misunderstanding_mom_choice_3",
            "text": "生日蛋糕會貴嗎？",
            "buttonText": "生日蛋糕會貴嗎？",
            "playerLine": "生日蛋糕係咪都好貴？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_15_price_news_child_misunderstanding_mom_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽望了你一眼，笑得有點軟：「可以買細細個。」你沒有完全放心，但知道生日沒有被取消。"
            },
            "resultText": "媽媽望了你一眼，笑得有點軟：「可以買細細個。」你沒有完全放心，但知道生日沒有被取消。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_15_price_news_child_misunderstanding",
              "variantId": "mom",
              "mustMatchEventTitle": "物價新聞被小朋友誤解"
            }
          },
          {
            "id": "w10_15_price_news_child_misunderstanding_mom_choice_4",
            "text": "不再問。",
            "buttonText": "不再問。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_15_price_news_child_misunderstanding_mom_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你坐在旁邊聽大人講收據。那些數字你不懂，但你記住了「見到靚」不等於一定買。"
            },
            "resultText": "你坐在旁邊聽大人講收據。那些數字你不懂，但你記住了「見到靚」不等於一定買。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_15_price_news_child_misunderstanding",
              "variantId": "mom",
              "mustMatchEventTitle": "物價新聞被小朋友誤解"
            }
          }
        ]
      },
      {
        "variantId": "competitive",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_competitive_peer",
        "npcIdHint": "classmate_competitive_peer",
        "npcNameFallback": "梓軒",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "第二天，梓軒在課室說：「我阿媽話而家咩都貴，買錯嘢會蝕。」他看著你的鉛筆盒：「你嗰支筆幾錢？」"
          }
        ],
        "playerChoices": [
          {
            "id": "w10_15_price_news_child_misunderstanding_competitive_choice_1",
            "text": "我唔知。",
            "buttonText": "我唔知。",
            "playerLine": "我唔知幾錢。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_15_price_news_child_misunderstanding_competitive_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒像沒想到你真的不知道。他拿起自己的筆看一眼，似乎也不是很清楚。"
            },
            "resultText": "梓軒像沒想到你真的不知道。他拿起自己的筆看一眼，似乎也不是很清楚。",
            "statusDelta": {
              "理智值": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_15_price_news_child_misunderstanding",
              "variantId": "competitive",
              "mustMatchEventTitle": "物價新聞被小朋友誤解"
            }
          },
          {
            "id": "w10_15_price_news_child_misunderstanding_competitive_choice_2",
            "text": "屋企買的。",
            "buttonText": "屋企買的。",
            "playerLine": "屋企買畀我嘅。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_15_price_news_child_misunderstanding_competitive_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒點點頭，又問是不是一盒買。你沒有回答太多，只把筆放回筆盒。"
            },
            "resultText": "梓軒點點頭，又問是不是一盒買。你沒有回答太多，只把筆放回筆盒。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_15_price_news_child_misunderstanding",
              "variantId": "competitive",
              "mustMatchEventTitle": "物價新聞被小朋友誤解"
            }
          },
          {
            "id": "w10_15_price_news_child_misunderstanding_competitive_choice_3",
            "text": "你咩都計？",
            "buttonText": "你咩都計？",
            "playerLine": "你係咪咩都計㗎？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_15_price_news_child_misunderstanding_competitive_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒說不是，但手指還是摸著自己的筆。他看起來不只是想比，也是真的怕弄丟。"
            },
            "resultText": "梓軒說不是，但手指還是摸著自己的筆。他看起來不只是想比，也是真的怕弄丟。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_15_price_news_child_misunderstanding",
              "variantId": "competitive",
              "mustMatchEventTitle": "物價新聞被小朋友誤解"
            }
          },
          {
            "id": "w10_15_price_news_child_misunderstanding_competitive_choice_4",
            "text": "不給他看。",
            "buttonText": "不給他看。",
            "playerLine": "唔畀你睇。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_15_price_news_child_misunderstanding_competitive_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒撇撇嘴，轉去看自己的文具。你保住了筆盒，但氣氛有點硬。"
            },
            "resultText": "梓軒撇撇嘴，轉去看自己的文具。你保住了筆盒，但氣氛有點硬。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_15_price_news_child_misunderstanding",
              "variantId": "competitive",
              "mustMatchEventTitle": "物價新聞被小朋友誤解"
            }
          }
        ]
      },
      {
        "variantId": "classmate_rumor",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": null,
        "npcIdHint": "classmate_rumor",
        "npcNameFallback": "同學",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "同學",
            "text": "小息時，有同學說：「新聞話啲嘢貴晒，以後小食部可能冇嘢賣。」另一個同學立刻說：「咁咪冇餅乾？」話傳得很快，越講越像真的。"
          }
        ],
        "playerChoices": [
          {
            "id": "w10_15_price_news_child_misunderstanding_classmate_rumor_choice_1",
            "text": "問老師真唔真。",
            "buttonText": "問老師真唔真。",
            "playerLine": "老師，係咪冇餅乾買？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_15_price_news_child_misunderstanding_classmate_rumor_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師聽完愣了一下，說學校沒有這樣通知。你發現小朋友傳話可以變得很快。"
            },
            "resultText": "老師聽完愣了一下，說學校沒有這樣通知。你發現小朋友傳話可以變得很快。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_15_price_news_child_misunderstanding",
              "variantId": "classmate_rumor",
              "mustMatchEventTitle": "物價新聞被小朋友誤解"
            }
          },
          {
            "id": "w10_15_price_news_child_misunderstanding_classmate_rumor_choice_2",
            "text": "新聞唔係咁講。",
            "buttonText": "新聞唔係咁講。",
            "playerLine": "新聞唔係話小食部呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_15_price_news_child_misunderstanding_classmate_rumor_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "有同學問那到底是甚麼意思。你也說不清，但至少那個傳聞停了一下。"
            },
            "resultText": "有同學問那到底是甚麼意思。你也說不清，但至少那個傳聞停了一下。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_15_price_news_child_misunderstanding",
              "variantId": "classmate_rumor",
              "mustMatchEventTitle": "物價新聞被小朋友誤解"
            }
          },
          {
            "id": "w10_15_price_news_child_misunderstanding_classmate_rumor_choice_3",
            "text": "跟著擔心。",
            "buttonText": "跟著擔心。",
            "playerLine": "咁咪冇小食？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_15_price_news_child_misunderstanding_classmate_rumor_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你也一起擔心起來。後來老師說不是這樣，但那一刻小食部好像真的遠了一點。"
            },
            "resultText": "你也一起擔心起來。後來老師說不是這樣，但那一刻小食部好像真的遠了一點。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_15_price_news_child_misunderstanding",
              "variantId": "classmate_rumor",
              "mustMatchEventTitle": "物價新聞被小朋友誤解"
            }
          },
          {
            "id": "w10_15_price_news_child_misunderstanding_classmate_rumor_choice_4",
            "text": "先不加入。",
            "buttonText": "先不加入。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_15_price_news_child_misunderstanding_classmate_rumor_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你聽著大家越講越大聲，沒有加入。等聲音散開後，你還是有一點想知道小食部明天有沒有東西賣。"
            },
            "resultText": "你聽著大家越講越大聲，沒有加入。等聲音散開後，你還是有一點想知道小食部明天有沒有東西賣。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_15_price_news_child_misunderstanding",
              "variantId": "classmate_rumor",
              "mustMatchEventTitle": "物價新聞被小朋友誤解"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "w10_16_weather_news_sports_day_cancel_guess",
    "sourceTopicId": "W10-16",
    "weekPool": "W10_authored_weekly",
    "week": 10,
    "dateRange": "Nov 3–Nov 9",
    "category": "news",
    "title": "天氣新聞，大家猜運動日會不會取消",
    "sceneIntro": "這幾天早上都有雲，電視天氣說可能有雨。運動日還未到，但班裡已經開始猜會不會取消。有人希望不用跑，有人很怕練習白費，有人只想知道那天要不要帶水壺。",
    "propertyValidation": null,
    "sceneIntroOverrides": [],
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        10,
        10
      ],
      "conditions": [],
      "exclusiveGroup": "w10_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "outgoing",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "家朗趴在窗邊看天：「如果落雨，運動日會唔會冇咗？」他回頭看你：「我又想跑，又想唔使曬。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w10_16_weather_news_sports_day_cancel_guess_outgoing_choice_1",
            "text": "希望不要下雨。",
            "buttonText": "希望不要下雨。",
            "playerLine": "我想照開。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_16_weather_news_sports_day_cancel_guess_outgoing_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗點頭：「我都想。」他又望出窗外，像只靠眼睛就能看出那天會不會放晴。"
            },
            "resultText": "家朗點頭：「我都想。」他又望出窗外，像只靠眼睛就能看出那天會不會放晴。",
            "statusDelta": {
              "自信": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_16_weather_news_sports_day_cancel_guess",
              "variantId": "outgoing",
              "mustMatchEventTitle": "天氣新聞，大家猜運動日會不會取消"
            }
          },
          {
            "id": "w10_16_weather_news_sports_day_cancel_guess_outgoing_choice_2",
            "text": "下雨也好。",
            "buttonText": "下雨也好。",
            "playerLine": "落雨都幾好，唔使跑。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_16_weather_news_sports_day_cancel_guess_outgoing_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗笑了一下，又說：「但我又想跑。」他自己也知道兩個想法打架。"
            },
            "resultText": "家朗笑了一下，又說：「但我又想跑。」他自己也知道兩個想法打架。",
            "statusDelta": {
              "理智值": 2,
              "壓力": -1
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
              "eventId": "w10_16_weather_news_sports_day_cancel_guess",
              "variantId": "outgoing",
              "mustMatchEventTitle": "天氣新聞，大家猜運動日會不會取消"
            }
          },
          {
            "id": "w10_16_weather_news_sports_day_cancel_guess_outgoing_choice_3",
            "text": "你想唔想跑？",
            "buttonText": "你想唔想跑？",
            "playerLine": "咁你想唔想跑呀？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_16_weather_news_sports_day_cancel_guess_outgoing_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗想了很久，最後說：「想，但唔想太曬。」這答案很像他。"
            },
            "resultText": "家朗想了很久，最後說：「想，但唔想太曬。」這答案很像他。",
            "statusDelta": {
              "自信": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_16_weather_news_sports_day_cancel_guess",
              "variantId": "outgoing",
              "mustMatchEventTitle": "天氣新聞，大家猜運動日會不會取消"
            }
          },
          {
            "id": "w10_16_weather_news_sports_day_cancel_guess_outgoing_choice_4",
            "text": "一起看雲。",
            "buttonText": "一起看雲。",
            "playerLine": "我睇吓啲雲。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_16_weather_news_sports_day_cancel_guess_outgoing_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你們一起望窗外。雲沒有給答案，但班房安靜了幾秒。"
            },
            "resultText": "你們一起望窗外。雲沒有給答案，但班房安靜了幾秒。",
            "statusDelta": {
              "理智值": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_16_weather_news_sports_day_cancel_guess",
              "variantId": "outgoing",
              "mustMatchEventTitle": "天氣新聞，大家猜運動日會不會取消"
            }
          }
        ]
      },
      {
        "variantId": "hoiching",
        "variantType": "seniorStudent",
        "identityTypeId": "senior_student",
        "personalityId": "pers_senior_competitive_captain",
        "npcIdHint": "senior_captain_hoiching",
        "npcNameFallback": "凱晴",
        "unknownDisplayName": "校隊女生",
        "knownDisplayName": "凱晴師姐",
        "unlockCharacterId": "senior_captain_hoiching",
        "openingDialogue": [
          {
            "speaker": "凱晴師姐",
            "text": "校隊女生在操場邊收器材，聽到低年級說可能取消，直接說：「未通知就照練。等到真係落雨先算。」她把雪糕筒疊好，手上沒有停。"
          }
        ],
        "playerChoices": [
          {
            "id": "w10_16_weather_news_sports_day_cancel_guess_hoiching_choice_1",
            "text": "落雨點算？",
            "buttonText": "落雨點算？",
            "playerLine": "如果真係落雨呢？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_16_weather_news_sports_day_cancel_guess_hoiching_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她說學校會通知，不用自己亂猜。她講得很快，但好像把那件事交回給學校決定。"
            },
            "resultText": "她說學校會通知，不用自己亂猜。她講得很快，但好像把那件事交回給學校決定。",
            "statusDelta": {
              "自信": 1,
              "理智值": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_captain_hoiching",
                "trueName": "凱晴",
                "sourceEventId": "w10_16_weather_news_sports_day_cancel_guess"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_16_weather_news_sports_day_cancel_guess",
              "variantId": "hoiching",
              "mustMatchEventTitle": "天氣新聞，大家猜運動日會不會取消"
            }
          },
          {
            "id": "w10_16_weather_news_sports_day_cancel_guess_hoiching_choice_2",
            "text": "今日照練。",
            "buttonText": "今日照練。",
            "playerLine": "咁今日照練先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_16_weather_news_sports_day_cancel_guess_hoiching_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她點頭，把一個雪糕筒遞給你放好。你只是幫了一下，卻覺得自己靠近了練習一點。"
            },
            "resultText": "她點頭，把一個雪糕筒遞給你放好。你只是幫了一下，卻覺得自己靠近了練習一點。",
            "statusDelta": {
              "自信": 1,
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
              "足球": 1
            },
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_captain_hoiching",
                "trueName": "凱晴",
                "sourceEventId": "w10_16_weather_news_sports_day_cancel_guess"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_16_weather_news_sports_day_cancel_guess",
              "variantId": "hoiching",
              "mustMatchEventTitle": "天氣新聞，大家猜運動日會不會取消"
            }
          },
          {
            "id": "w10_16_weather_news_sports_day_cancel_guess_hoiching_choice_3",
            "text": "我怕白練。",
            "buttonText": "我怕白練。",
            "playerLine": "我驚練咗都冇用。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_16_weather_news_sports_day_cancel_guess_hoiching_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她看你一眼：「練咗唔會冇用。」不是很溫柔，但很肯定。"
            },
            "resultText": "她看你一眼：「練咗唔會冇用。」不是很溫柔，但很肯定。",
            "statusDelta": {
              "理智值": 2,
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_captain_hoiching",
                "trueName": "凱晴",
                "sourceEventId": "w10_16_weather_news_sports_day_cancel_guess"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_16_weather_news_sports_day_cancel_guess",
              "variantId": "hoiching",
              "mustMatchEventTitle": "天氣新聞，大家猜運動日會不會取消"
            }
          },
          {
            "id": "w10_16_weather_news_sports_day_cancel_guess_hoiching_choice_4",
            "text": "幫她遞器材。",
            "buttonText": "幫她遞器材。",
            "playerLine": "我幫你拎呢個。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_16_weather_news_sports_day_cancel_guess_hoiching_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她接過器材，說了聲「唔該」。天氣還沒決定，手上的東西先被收好了。"
            },
            "resultText": "她接過器材，說了聲「唔該」。天氣還沒決定，手上的東西先被收好了。",
            "statusDelta": {
              "理智值": 1,
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
              "足球": 1
            },
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_captain_hoiching",
                "trueName": "凱晴",
                "sourceEventId": "w10_16_weather_news_sports_day_cancel_guess"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_16_weather_news_sports_day_cancel_guess",
              "variantId": "hoiching",
              "mustMatchEventTitle": "天氣新聞，大家猜運動日會不會取消"
            }
          }
        ]
      },
      {
        "variantId": "competitive",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_competitive_peer",
        "npcIdHint": "classmate_competitive_peer",
        "npcNameFallback": "梓軒",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "梓軒把天氣報告當成另一個要猜中的東西：「如果取消，啲練習咪白費？」他看起來有點不高興，又有點擔心。"
          }
        ],
        "playerChoices": [
          {
            "id": "w10_16_weather_news_sports_day_cancel_guess_competitive_choice_1",
            "text": "練了都有用。",
            "buttonText": "練了都有用。",
            "playerLine": "練咗都會跑快啲啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_16_weather_news_sports_day_cancel_guess_competitive_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒想反駁，最後只說：「都係。」他像不太想承認，但臉色鬆了一點。"
            },
            "resultText": "梓軒想反駁，最後只說：「都係。」他像不太想承認，但臉色鬆了一點。",
            "statusDelta": {
              "自信": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_16_weather_news_sports_day_cancel_guess",
              "variantId": "competitive",
              "mustMatchEventTitle": "天氣新聞，大家猜運動日會不會取消"
            }
          },
          {
            "id": "w10_16_weather_news_sports_day_cancel_guess_competitive_choice_2",
            "text": "你想比賽？",
            "buttonText": "你想比賽？",
            "playerLine": "你係咪好想比？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_16_weather_news_sports_day_cancel_guess_competitive_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒立刻說當然想。說完後，他又補一句：「練咗咁耐。」那句比「想贏」更小聲。"
            },
            "resultText": "梓軒立刻說當然想。說完後，他又補一句：「練咗咁耐。」那句比「想贏」更小聲。",
            "statusDelta": {
              "理智值": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_16_weather_news_sports_day_cancel_guess",
              "variantId": "competitive",
              "mustMatchEventTitle": "天氣新聞，大家猜運動日會不會取消"
            }
          },
          {
            "id": "w10_16_weather_news_sports_day_cancel_guess_competitive_choice_3",
            "text": "取消就不用緊張。",
            "buttonText": "取消就不用緊張。",
            "playerLine": "取消咪唔使緊張。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_16_weather_news_sports_day_cancel_guess_competitive_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒沒有立刻反駁。他看著跑道，像突然想起自己其實也會緊張。"
            },
            "resultText": "梓軒沒有立刻反駁。他看著跑道，像突然想起自己其實也會緊張。",
            "statusDelta": {
              "理智值": 2,
              "壓力": -1
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
              "eventId": "w10_16_weather_news_sports_day_cancel_guess",
              "variantId": "competitive",
              "mustMatchEventTitle": "天氣新聞，大家猜運動日會不會取消"
            }
          },
          {
            "id": "w10_16_weather_news_sports_day_cancel_guess_competitive_choice_4",
            "text": "不跟他猜。",
            "buttonText": "不跟他猜。",
            "playerLine": "我唔估天氣。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_16_weather_news_sports_day_cancel_guess_competitive_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒自己看向窗外，還在猜。你沒有加入那個猜測遊戲。"
            },
            "resultText": "梓軒自己看向窗外，還在猜。你沒有加入那個猜測遊戲。",
            "statusDelta": {
              "理智值": 1,
              "社交": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_16_weather_news_sports_day_cancel_guess",
              "variantId": "competitive",
              "mustMatchEventTitle": "天氣新聞，大家猜運動日會不會取消"
            }
          }
        ]
      },
      {
        "variantId": "teacher_notice",
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": null,
        "npcIdHint": "teacher_announcement",
        "npcNameFallback": "老師",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師在早會後說：「運動日會唔會改期，要等學校通知。大家唔好自己亂估。」她把帶水、帽子和外套的提醒寫在黑板上。"
          }
        ],
        "playerChoices": [
          {
            "id": "w10_16_weather_news_sports_day_cancel_guess_teacher_notice_choice_1",
            "text": "抄要帶東西。",
            "buttonText": "抄要帶東西。",
            "playerLine": "我抄低先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_16_weather_news_sports_day_cancel_guess_teacher_notice_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把水壺、帽、外套寫進手冊。天氣還不知道，但書包可以先知道。"
            },
            "resultText": "你把水壺、帽、外套寫進手冊。天氣還不知道，但書包可以先知道。",
            "statusDelta": {
              "理智值": 2,
              "壓力": -1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_16_weather_news_sports_day_cancel_guess",
              "variantId": "teacher_notice",
              "mustMatchEventTitle": "天氣新聞，大家猜運動日會不會取消"
            }
          },
          {
            "id": "w10_16_weather_news_sports_day_cancel_guess_teacher_notice_choice_2",
            "text": "幾時通知？",
            "buttonText": "幾時通知？",
            "playerLine": "幾時先知呀？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_16_weather_news_sports_day_cancel_guess_teacher_notice_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說要看天氣，學校會通知。你沒有得到答案，但知道不是老師現在不肯說。"
            },
            "resultText": "老師說要看天氣，學校會通知。你沒有得到答案，但知道不是老師現在不肯說。",
            "statusDelta": {
              "理智值": 1,
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_16_weather_news_sports_day_cancel_guess",
              "variantId": "teacher_notice",
              "mustMatchEventTitle": "天氣新聞，大家猜運動日會不會取消"
            }
          },
          {
            "id": "w10_16_weather_news_sports_day_cancel_guess_teacher_notice_choice_3",
            "text": "叫同學先別亂猜。",
            "buttonText": "叫同學先別亂猜。",
            "playerLine": "老師話等通知呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_16_weather_news_sports_day_cancel_guess_teacher_notice_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "同學還是想猜，但聲音小了一點。你把老師的話搬過去，自己也穩了一些。"
            },
            "resultText": "同學還是想猜，但聲音小了一點。你把老師的話搬過去，自己也穩了一些。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_16_weather_news_sports_day_cancel_guess",
              "variantId": "teacher_notice",
              "mustMatchEventTitle": "天氣新聞，大家猜運動日會不會取消"
            }
          },
          {
            "id": "w10_16_weather_news_sports_day_cancel_guess_teacher_notice_choice_4",
            "text": "還是想知道。",
            "buttonText": "還是想知道。",
            "playerLine": "我都係想知會唔會取消。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w10_16_weather_news_sports_day_cancel_guess_teacher_notice_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你看著黑板上的用品清單，心裡還在想雨。不是所有事情都能今天知道。"
            },
            "resultText": "你看著黑板上的用品清單，心裡還在想雨。不是所有事情都能今天知道。",
            "statusDelta": {
              "理智值": 2,
              "壓力": -1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w10_16_weather_news_sports_day_cancel_guess",
              "variantId": "teacher_notice",
              "mustMatchEventTitle": "天氣新聞，大家猜運動日會不會取消"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "w11_17_parent_day_notice",
    "sourceTopicId": "W11-17",
    "weekPool": "W11_authored_weekly",
    "week": 11,
    "dateRange": "Nov 10–Nov 16",
    "category": "school",
    "title": "家長日預告",
    "sceneIntro": "老師派下一張家長日通告，紙上有日期和時間。她說那天家長會到學校和老師談一談你們開學到現在的情況。班裡一下子變得安靜，有人小聲問是不是老師會投訴。",
    "propertyValidation": {
      "purpose": "natural_scene_branching_only",
      "note": "學業穩定時，玩家可能擔心老師會不會只講分數；改正常拖時，玩家會先想起書包裡還沒改的簿；理智值低時，家長日兩個字會讓玩家胸口緊；普通版本只用通告場景。低數值版本是支援與焦慮分流，不是懲罰。",
      "ordinaryVersionAlwaysAvailable": true,
      "hideLockedChoices": true
    },
    "sceneIntroOverrides": [
      {
        "eligibleWhen": "TODO_from_author_property_note",
        "note": "學業穩定時，玩家可能擔心老師會不會只講分數；改正常拖時，玩家會先想起書包裡還沒改的簿；理智值低時，家長日兩個字會讓玩家胸口緊；普通版本只用通告場景。低數值版本是支援與焦慮分流，不是懲罰。"
      }
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        11,
        11
      ],
      "conditions": [],
      "exclusiveGroup": "w11_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "strict_teacher",
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": "pers_strict_academic",
        "npcIdHint": "teacher_strict_academic",
        "npcNameFallback": "老師",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師把通告拿高：「家長日唔係突然發生嘅事。手冊、功課、改正，平時點做，老師就點講。」她看了全班一眼：「唔使驚，但唔好以為冇人知。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w11_17_parent_day_notice_strict_teacher_choice_1",
            "text": "夾好通告。",
            "buttonText": "夾好通告。",
            "playerLine": "我夾入手冊先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_17_parent_day_notice_strict_teacher_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把通告夾得很入，怕它掉出來。那張紙不會罵人，但你覺得它比平時的通告重。"
            },
            "resultText": "你把通告夾得很入，怕它掉出來。那張紙不會罵人，但你覺得它比平時的通告重。",
            "statusDelta": {
              "紀律": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_17_parent_day_notice",
              "variantId": "strict_teacher",
              "mustMatchEventTitle": "家長日預告"
            }
          },
          {
            "id": "w11_17_parent_day_notice_strict_teacher_choice_2",
            "text": "會講功課嗎？",
            "buttonText": "會講功課嗎？",
            "playerLine": "老師，會唔會講功課？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_17_parent_day_notice_strict_teacher_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說會講平時情況，不是只講一次分數。你聽到「平時」兩個字，立刻想起幾本簿。"
            },
            "resultText": "老師說會講平時情況，不是只講一次分數。你聽到「平時」兩個字，立刻想起幾本簿。",
            "statusDelta": {
              "理智值": 1,
              "壓力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_17_parent_day_notice",
              "variantId": "strict_teacher",
              "mustMatchEventTitle": "家長日預告"
            }
          },
          {
            "id": "w11_17_parent_day_notice_strict_teacher_choice_3",
            "text": "想起未改正。",
            "buttonText": "想起未改正。",
            "playerLine": "我有本未改……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_17_parent_day_notice_strict_teacher_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你聲音很小，老師聽見後只說今天放學前拿出來。事情沒有消失，但有了今天要做的一步。"
            },
            "resultText": "你聲音很小，老師聽見後只說今天放學前拿出來。事情沒有消失，但有了今天要做的一步。",
            "statusDelta": {
              "家庭關係": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_17_parent_day_notice",
              "variantId": "strict_teacher",
              "mustMatchEventTitle": "家長日預告"
            }
          },
          {
            "id": "w11_17_parent_day_notice_strict_teacher_choice_4",
            "text": "不敢看老師。",
            "buttonText": "不敢看老師。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_17_parent_day_notice_strict_teacher_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你低頭看通告角。老師繼續派紙，沒有特別叫你，但你一直覺得她可能知道你在想甚麼。"
            },
            "resultText": "你低頭看通告角。老師繼續派紙，沒有特別叫你，但你一直覺得她可能知道你在想甚麼。",
            "statusDelta": {
              "家庭關係": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_17_parent_day_notice",
              "variantId": "strict_teacher",
              "mustMatchEventTitle": "家長日預告"
            }
          }
        ]
      },
      {
        "variantId": "encouraging_teacher",
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": "pers_encouraging_mentor",
        "npcIdHint": "teacher_encouraging_mentor",
        "npcNameFallback": "老師",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師把通告派得很慢：「家長日係講你哋呢段時間點樣適應，唔係淨係講分數。」她笑了一下：「我也會講你哋有進步嘅地方。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w11_17_parent_day_notice_encouraging_teacher_choice_1",
            "text": "會講我進步嗎？",
            "buttonText": "會講我進步嗎？",
            "playerLine": "老師，會講我進步咩？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_17_parent_day_notice_encouraging_teacher_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師點頭，說每個人都有一點不一樣的進步。你不知道自己是哪一點，但開始想找找看。"
            },
            "resultText": "老師點頭，說每個人都有一點不一樣的進步。你不知道自己是哪一點，但開始想找找看。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_17_parent_day_notice",
              "variantId": "encouraging_teacher",
              "mustMatchEventTitle": "家長日預告"
            }
          },
          {
            "id": "w11_17_parent_day_notice_encouraging_teacher_choice_2",
            "text": "我有啲驚。",
            "buttonText": "我有啲驚。",
            "playerLine": "我有啲驚。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_17_parent_day_notice_encouraging_teacher_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說怕也正常。她沒有立刻叫你勇敢，只提醒你今晚把通告給家人。"
            },
            "resultText": "老師說怕也正常。她沒有立刻叫你勇敢，只提醒你今晚把通告給家人。",
            "statusDelta": {
              "壓力": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_17_parent_day_notice",
              "variantId": "encouraging_teacher",
              "mustMatchEventTitle": "家長日預告"
            }
          },
          {
            "id": "w11_17_parent_day_notice_encouraging_teacher_choice_3",
            "text": "給旁邊看日期。",
            "buttonText": "給旁邊看日期。",
            "playerLine": "係呢日喎。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_17_parent_day_notice_encouraging_teacher_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "旁邊同學看了一眼，說他也要給媽媽。你發現不是只有自己要面對那張紙。"
            },
            "resultText": "旁邊同學看了一眼，說他也要給媽媽。你發現不是只有自己要面對那張紙。",
            "statusDelta": {
              "家庭關係": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_17_parent_day_notice",
              "variantId": "encouraging_teacher",
              "mustMatchEventTitle": "家長日預告"
            }
          },
          {
            "id": "w11_17_parent_day_notice_encouraging_teacher_choice_4",
            "text": "先收入手冊。",
            "buttonText": "先收入手冊。",
            "playerLine": "我收好先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_17_parent_day_notice_encouraging_teacher_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "通告被你夾進手冊，紙角露出一點。你決定今晚不要讓它留在書包底。"
            },
            "resultText": "通告被你夾進手冊，紙角露出一點。你決定今晚不要讓它留在書包底。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_17_parent_day_notice",
              "variantId": "encouraging_teacher",
              "mustMatchEventTitle": "家長日預告"
            }
          }
        ]
      },
      {
        "variantId": "caring_teacher",
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": "pers_pastoral_care_teacher",
        "npcIdHint": "teacher_pastoral_care",
        "npcNameFallback": "老師",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師看見班裡有人開始緊張，先說：「如果你驚屋企人會鬧，可以同我講。」她把通告放到講台邊：「家長日係大人一齊幫你，唔係審你。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w11_17_parent_day_notice_caring_teacher_choice_1",
            "text": "會講錯事嗎？",
            "buttonText": "會講錯事嗎？",
            "playerLine": "老師，會唔會講我做錯嘢？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_17_parent_day_notice_caring_teacher_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說會講需要幫忙的地方，也會講你做到的事。你還是怕，但不是只聽到「錯」。"
            },
            "resultText": "老師說會講需要幫忙的地方，也會講你做到的事。你還是怕，但不是只聽到「錯」。",
            "statusDelta": {
              "理智值": 1,
              "壓力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_17_parent_day_notice",
              "variantId": "caring_teacher",
              "mustMatchEventTitle": "家長日預告"
            }
          },
          {
            "id": "w11_17_parent_day_notice_caring_teacher_choice_2",
            "text": "點頭收好。",
            "buttonText": "點頭收好。",
            "playerLine": "嗯，我收好。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_17_parent_day_notice_caring_teacher_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有講出害怕甚麼，只把通告放進手冊。老師看見你收好，沒有再追問。"
            },
            "resultText": "你沒有講出害怕甚麼，只把通告放進手冊。老師看見你收好，沒有再追問。",
            "statusDelta": {
              "自信": 1,
              "壓力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_17_parent_day_notice",
              "variantId": "caring_teacher",
              "mustMatchEventTitle": "家長日預告"
            }
          },
          {
            "id": "w11_17_parent_day_notice_caring_teacher_choice_3",
            "text": "回家先給媽媽。",
            "buttonText": "回家先給媽媽。",
            "playerLine": "我返屋企俾媽媽睇。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_17_parent_day_notice_caring_teacher_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師點頭，提醒不要拖到睡前。你把通告放在手冊最前面，像怕自己會反悔。"
            },
            "resultText": "老師點頭，提醒不要拖到睡前。你把通告放在手冊最前面，像怕自己會反悔。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_17_parent_day_notice",
              "variantId": "caring_teacher",
              "mustMatchEventTitle": "家長日預告"
            }
          },
          {
            "id": "w11_17_parent_day_notice_caring_teacher_choice_4",
            "text": "不想提。",
            "buttonText": "不想提。",
            "playerLine": "我唔想講。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_17_parent_day_notice_caring_teacher_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師沒有逼你立刻講，只說如果今晚很怕，可以明天再跟她說。那句話像放了一條細路在旁邊。"
            },
            "resultText": "老師沒有逼你立刻講，只說如果今晚很怕，可以明天再跟她說。那句話像放了一條細路在旁邊。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_17_parent_day_notice",
              "variantId": "caring_teacher",
              "mustMatchEventTitle": "家長日預告"
            }
          }
        ]
      },
      {
        "variantId": "parent_reaction",
        "variantType": "family",
        "identityTypeId": "family_elder",
        "personalityId": null,
        "npcIdHint": "family_parent",
        "npcNameFallback": "家人",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "家人",
            "text": "晚上，你把家長日通告放到飯桌上。媽媽拿起來看日期，爸爸問要不要請假或調時間。大人開始對日子，你站在旁邊，聽見自己的名字被提到。"
          }
        ],
        "playerChoices": [
          {
            "id": "w11_17_parent_day_notice_parent_reaction_choice_1",
            "text": "會講咩？",
            "buttonText": "會講咩？",
            "playerLine": "家長日會講咩？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_17_parent_day_notice_parent_reaction_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽說會聽老師講你在學校怎樣。爸爸先看時間，沒有馬上問成績，你稍微鬆了一點。"
            },
            "resultText": "媽媽說會聽老師講你在學校怎樣。爸爸先看時間，沒有馬上問成績，你稍微鬆了一點。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_17_parent_day_notice",
              "variantId": "parent_reaction",
              "mustMatchEventTitle": "家長日預告"
            }
          },
          {
            "id": "w11_17_parent_day_notice_parent_reaction_choice_2",
            "text": "老師應該唔會罵我。",
            "buttonText": "老師應該唔會罵我。",
            "playerLine": "老師應該唔會鬧我。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_17_parent_day_notice_parent_reaction_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸看你一眼，說家長日不是去被罵。你點頭，但心裡仍想知道老師會不會講改正。"
            },
            "resultText": "爸爸看你一眼，說家長日不是去被罵。你點頭，但心裡仍想知道老師會不會講改正。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_17_parent_day_notice",
              "variantId": "parent_reaction",
              "mustMatchEventTitle": "家長日預告"
            }
          },
          {
            "id": "w11_17_parent_day_notice_parent_reaction_choice_3",
            "text": "你哋會去嗎？",
            "buttonText": "你哋會去嗎？",
            "playerLine": "你哋會唔會去？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_17_parent_day_notice_parent_reaction_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽說會安排時間。你聽見「會去」時，有點安心，也有點更緊張。"
            },
            "resultText": "媽媽說會安排時間。你聽見「會去」時，有點安心，也有點更緊張。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_17_parent_day_notice",
              "variantId": "parent_reaction",
              "mustMatchEventTitle": "家長日預告"
            }
          },
          {
            "id": "w11_17_parent_day_notice_parent_reaction_choice_4",
            "text": "拿手冊出來。",
            "buttonText": "拿手冊出來。",
            "playerLine": "手冊都喺度。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_17_parent_day_notice_parent_reaction_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把手冊也放到桌上。大人看見近日簽名和通告，討論變得有東西可以看，而不是只看著你。"
            },
            "resultText": "你把手冊也放到桌上。大人看見近日簽名和通告，討論變得有東西可以看，而不是只看著你。",
            "statusDelta": {
              "紀律": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_17_parent_day_notice",
              "variantId": "parent_reaction",
              "mustMatchEventTitle": "家長日預告"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "w11_18_post_test_classroom_mood",
    "sourceTopicId": "W11-18",
    "weekPool": "W11_authored_weekly",
    "week": 11,
    "dateRange": "Nov 10–Nov 16",
    "category": "school",
    "title": "測驗後班房氣氛",
    "sceneIntro": "老師派回小測簿，有人把分數遮起來，有人立刻給旁邊看，有人一拿到就合上。課室的聲音比平時怪，有些位置很吵，有些位置特別安靜。你拿著自己的簿，不知道要不要看別人的反應。",
    "propertyValidation": {
      "purpose": "natural_scene_branching_only",
      "note": "學業高時，玩家分數可以不差，但仍要面對旁邊同學情緒；學業低時，錯題很多但可以拆成改正步驟；自信低時，明明不是最差也會想合上；理智值高時，玩家更容易先圈錯題而不是盯分數。這些只改場景版本，不做成功失敗。",
      "ordinaryVersionAlwaysAvailable": true,
      "hideLockedChoices": true
    },
    "sceneIntroOverrides": [
      {
        "eligibleWhen": "TODO_from_author_property_note",
        "note": "學業高時，玩家分數可以不差，但仍要面對旁邊同學情緒；學業低時，錯題很多但可以拆成改正步驟；自信低時，明明不是最差也會想合上；理智值高時，玩家更容易先圈錯題而不是盯分數。這些只改場景版本，不做成功失敗。"
      }
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        11,
        11
      ],
      "conditions": [],
      "exclusiveGroup": "w11_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "competitive",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_competitive_peer",
        "npcIdHint": "classmate_competitive_peer",
        "npcNameFallback": "梓軒",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "梓軒拿到簿後很快看了一眼，然後把簿角壓住。他平時很快問分數，今天卻先問你：「你幾多？」聲音比平時低一點。"
          }
        ],
        "playerChoices": [
          {
            "id": "w11_18_post_test_classroom_mood_competitive_choice_1",
            "text": "你先講。",
            "buttonText": "你先講。",
            "playerLine": "你先講。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_18_post_test_classroom_mood_competitive_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒抿了一下嘴，沒有馬上講。他把簿角按得更緊，你發現他今天可能不是想炫耀。"
            },
            "resultText": "梓軒抿了一下嘴，沒有馬上講。他把簿角按得更緊，你發現他今天可能不是想炫耀。",
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
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_18_post_test_classroom_mood",
              "variantId": "competitive",
              "mustMatchEventTitle": "測驗後班房氣氛"
            }
          },
          {
            "id": "w11_18_post_test_classroom_mood_competitive_choice_2",
            "text": "我唔想講。",
            "buttonText": "我唔想講。",
            "playerLine": "我唔想講分數。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_18_post_test_classroom_mood_competitive_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒看你一眼，竟然沒有追問。他低頭看自己的簿，好像也有不想講的地方。"
            },
            "resultText": "梓軒看你一眼，竟然沒有追問。他低頭看自己的簿，好像也有不想講的地方。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_18_post_test_classroom_mood",
              "variantId": "competitive",
              "mustMatchEventTitle": "測驗後班房氣氛"
            }
          },
          {
            "id": "w11_18_post_test_classroom_mood_competitive_choice_3",
            "text": "我有錯。",
            "buttonText": "我有錯。",
            "playerLine": "我有幾題錯咗。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_18_post_test_classroom_mood_competitive_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒立刻問幾題，但聲音沒有平時那麼大。你沒有說分數，只說錯題，話題變小了些。"
            },
            "resultText": "梓軒立刻問幾題，但聲音沒有平時那麼大。你沒有說分數，只說錯題，話題變小了些。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_18_post_test_classroom_mood",
              "variantId": "competitive",
              "mustMatchEventTitle": "測驗後班房氣氛"
            }
          },
          {
            "id": "w11_18_post_test_classroom_mood_competitive_choice_4",
            "text": "你做錯了？",
            "buttonText": "你做錯了？",
            "playerLine": "你係咪做錯咗？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_18_post_test_classroom_mood_competitive_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒皺眉：「少少。」他很快把簿合上，但那句少少已經比平時多。"
            },
            "resultText": "梓軒皺眉：「少少。」他很快把簿合上，但那句少少已經比平時多。",
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
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_18_post_test_classroom_mood",
              "variantId": "competitive",
              "mustMatchEventTitle": "測驗後班房氣氛"
            }
          }
        ]
      },
      {
        "variantId": "quiet",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_quiet_observer",
        "npcIdHint": "classmate_quiet_observer",
        "npcNameFallback": "穎心",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "穎心",
            "text": "穎心看完自己的簿，把它合上，沒有問任何人。她看見你停住，輕輕把改正紙推到中間：「老師話一陣改正。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w11_18_post_test_classroom_mood_quiet_choice_1",
            "text": "你識改嗎？",
            "buttonText": "你識改嗎？",
            "playerLine": "呢題你識唔識改？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_18_post_test_classroom_mood_quiet_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心看了一下，指著第一個空格：「先圈呢度。」她沒有問你幾分，只把第一步放到你面前。"
            },
            "resultText": "穎心看了一下，指著第一個空格：「先圈呢度。」她沒有問你幾分，只把第一步放到你面前。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_18_post_test_classroom_mood",
              "variantId": "quiet",
              "mustMatchEventTitle": "測驗後班房氣氛"
            }
          },
          {
            "id": "w11_18_post_test_classroom_mood_quiet_choice_2",
            "text": "一起看改正紙。",
            "buttonText": "一起看改正紙。",
            "playerLine": "我哋睇改正紙。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_18_post_test_classroom_mood_quiet_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你們把分數暫時放在旁邊，先看老師派的改正紙。紅筆還在，但沒有剛才那麼大。"
            },
            "resultText": "你們把分數暫時放在旁邊，先看老師派的改正紙。紅筆還在，但沒有剛才那麼大。",
            "statusDelta": {
              "理智值": 1,
              "壓力": -1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_18_post_test_classroom_mood",
              "variantId": "quiet",
              "mustMatchEventTitle": "測驗後班房氣氛"
            }
          },
          {
            "id": "w11_18_post_test_classroom_mood_quiet_choice_3",
            "text": "不問分數。",
            "buttonText": "不問分數。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_18_post_test_classroom_mood_quiet_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有問她幾分，她也沒有問你。兩本簿合著躺在桌上，反而讓人舒服一點。"
            },
            "resultText": "你沒有問她幾分，她也沒有問你。兩本簿合著躺在桌上，反而讓人舒服一點。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_18_post_test_classroom_mood",
              "variantId": "quiet",
              "mustMatchEventTitle": "測驗後班房氣氛"
            }
          },
          {
            "id": "w11_18_post_test_classroom_mood_quiet_choice_4",
            "text": "我有啲唔識。",
            "buttonText": "我有啲唔識。",
            "playerLine": "我有啲唔識改。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_18_post_test_classroom_mood_quiet_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心點點頭，把自己的鉛筆移開，讓你看清楚題目。她的幫忙很小聲，但很實在。"
            },
            "resultText": "穎心點點頭，把自己的鉛筆移開，讓你看清楚題目。她的幫忙很小聲，但很實在。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_18_post_test_classroom_mood",
              "variantId": "quiet",
              "mustMatchEventTitle": "測驗後班房氣氛"
            }
          }
        ]
      },
      {
        "variantId": "outgoing",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "家朗一開始想湊過來問，看到班裡有幾個人不開心，又把聲音放低：「你……OK嗎？」他把自己的簿放在桌上，沒有立刻打開給你看。"
          }
        ],
        "playerChoices": [
          {
            "id": "w11_18_post_test_classroom_mood_outgoing_choice_1",
            "text": "還可以。",
            "buttonText": "還可以。",
            "playerLine": "都OK。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_18_post_test_classroom_mood_outgoing_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗點點頭，沒有立刻追問分數。他像很想講話，但這次忍住了。"
            },
            "resultText": "家朗點點頭，沒有立刻追問分數。他像很想講話，但這次忍住了。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_18_post_test_classroom_mood",
              "variantId": "outgoing",
              "mustMatchEventTitle": "測驗後班房氣氛"
            }
          },
          {
            "id": "w11_18_post_test_classroom_mood_outgoing_choice_2",
            "text": "有啲錯。",
            "buttonText": "有啲錯。",
            "playerLine": "有啲錯咗。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_18_post_test_classroom_mood_outgoing_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗說他也有。你不知道他是不是真的「也有」，但那句讓你沒有那麼孤單。"
            },
            "resultText": "家朗說他也有。你不知道他是不是真的「也有」，但那句讓你沒有那麼孤單。",
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
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_18_post_test_classroom_mood",
              "variantId": "outgoing",
              "mustMatchEventTitle": "測驗後班房氣氛"
            }
          },
          {
            "id": "w11_18_post_test_classroom_mood_outgoing_choice_3",
            "text": "你呢？",
            "buttonText": "你呢？",
            "playerLine": "你呢？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_18_post_test_classroom_mood_outgoing_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗把簿打開一點點給你看，又很快合上。他不是炫耀，只像想交換一點點心情。"
            },
            "resultText": "家朗把簿打開一點點給你看，又很快合上。他不是炫耀，只像想交換一點點心情。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_18_post_test_classroom_mood",
              "variantId": "outgoing",
              "mustMatchEventTitle": "測驗後班房氣氛"
            }
          },
          {
            "id": "w11_18_post_test_classroom_mood_outgoing_choice_4",
            "text": "笑一下，不想講。",
            "buttonText": "笑一下，不想講。",
            "playerLine": "哈哈，唔講住。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_18_post_test_classroom_mood_outgoing_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗看懂了，沒有再問。他轉去拿紅筆，像用動作替自己收住話題。"
            },
            "resultText": "家朗看懂了，沒有再問。他轉去拿紅筆，像用動作替自己收住話題。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_18_post_test_classroom_mood",
              "variantId": "outgoing",
              "mustMatchEventTitle": "測驗後班房氣氛"
            }
          }
        ]
      },
      {
        "variantId": "teacher",
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": null,
        "npcIdHint": "teacher",
        "npcNameFallback": "老師",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師敲敲桌面：「分數已經派咗，但今日重點係改正。」她把幾題寫到黑板上：「做錯唔等於完，唔改先麻煩。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w11_18_post_test_classroom_mood_teacher_choice_1",
            "text": "拿紅筆改正。",
            "buttonText": "拿紅筆改正。",
            "playerLine": "我改正先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_18_post_test_classroom_mood_teacher_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你拿起紅筆，先找第一題。分數還在簿面，但你的眼睛開始看題目。"
            },
            "resultText": "你拿起紅筆，先找第一題。分數還在簿面，但你的眼睛開始看題目。",
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_18_post_test_classroom_mood",
              "variantId": "teacher",
              "mustMatchEventTitle": "測驗後班房氣氛"
            }
          },
          {
            "id": "w11_18_post_test_classroom_mood_teacher_choice_2",
            "text": "問其中一題。",
            "buttonText": "問其中一題。",
            "playerLine": "老師，呢題點改？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_18_post_test_classroom_mood_teacher_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師走過來看了一眼，叫你先圈關鍵字。你問的是一題，不是整本簿，事情變小了。"
            },
            "resultText": "老師走過來看了一眼，叫你先圈關鍵字。你問的是一題，不是整本簿，事情變小了。",
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
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_18_post_test_classroom_mood",
              "variantId": "teacher",
              "mustMatchEventTitle": "測驗後班房氣氛"
            }
          },
          {
            "id": "w11_18_post_test_classroom_mood_teacher_choice_3",
            "text": "先圈錯題。",
            "buttonText": "先圈錯題。",
            "playerLine": "我圈錯嗰啲先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_18_post_test_classroom_mood_teacher_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把錯題圈起來，沒有馬上改完，但知道自己要處理哪些地方。"
            },
            "resultText": "你把錯題圈起來，沒有馬上改完，但知道自己要處理哪些地方。",
            "statusDelta": {
              "學業": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_18_post_test_classroom_mood",
              "variantId": "teacher",
              "mustMatchEventTitle": "測驗後班房氣氛"
            }
          },
          {
            "id": "w11_18_post_test_classroom_mood_teacher_choice_4",
            "text": "不想打開簿。",
            "buttonText": "不想打開簿。",
            "playerLine": "我唔想睇住。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_18_post_test_classroom_mood_teacher_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師沒有在全班面前叫你講分數，只讓你先把簿打開到改正頁。你還是慢，但開始了。"
            },
            "resultText": "老師沒有在全班面前叫你講分數，只讓你先把簿打開到改正頁。你還是慢，但開始了。",
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
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_18_post_test_classroom_mood",
              "variantId": "teacher",
              "mustMatchEventTitle": "測驗後班房氣氛"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "w11_19_winter_uniform_cardigan_arrangement",
    "sourceTopicId": "W11-19",
    "weekPool": "W11_authored_weekly",
    "week": 11,
    "dateRange": "Nov 10–Nov 16",
    "category": "school",
    "title": "冬季校服／冷衫安排",
    "sceneIntro": "早上天氣涼了，操場有風。有人穿了冷衫，有人還是短袖，有人把外套塞在書包裡。老師提醒下星期開始留意冬季校服安排，家裡也開始問你冷不冷、衣服合不合身。",
    "propertyValidation": null,
    "sceneIntroOverrides": [],
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        11,
        11
      ],
      "conditions": [],
      "exclusiveGroup": "w11_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "mom",
        "variantType": "family",
        "identityTypeId": "family_elder",
        "personalityId": null,
        "npcIdHint": "char_mom",
        "npcNameFallback": "媽媽",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "媽媽",
            "text": "媽媽早上拿出冷衫，在你身上比一比：「好似短咗少少。」她把袖口拉下來，又說：「今日帶住先，凍先著。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w11_19_winter_uniform_cardigan_arrangement_mom_choice_1",
            "text": "袖口緊。",
            "buttonText": "袖口緊。",
            "playerLine": "袖口有啲緊。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_19_winter_uniform_cardigan_arrangement_mom_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽再拉一拉袖口，說放學後試清楚。你不是馬上有新冷衫，但不舒服被聽見了。"
            },
            "resultText": "媽媽再拉一拉袖口，說放學後試清楚。你不是馬上有新冷衫，但不舒服被聽見了。",
            "statusDelta": {
              "理智值": 1,
              "壓力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_19_winter_uniform_cardigan_arrangement",
              "variantId": "mom",
              "mustMatchEventTitle": "冬季校服／冷衫安排"
            }
          },
          {
            "id": "w11_19_winter_uniform_cardigan_arrangement_mom_choice_2",
            "text": "唔想帶，好重。",
            "buttonText": "唔想帶，好重。",
            "playerLine": "我唔想帶，好重。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_19_winter_uniform_cardigan_arrangement_mom_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽把冷衫摺小一點塞進書包。書包還是重，但比剛才少佔一點位置。"
            },
            "resultText": "媽媽把冷衫摺小一點塞進書包。書包還是重，但比剛才少佔一點位置。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_19_winter_uniform_cardigan_arrangement",
              "variantId": "mom",
              "mustMatchEventTitle": "冬季校服／冷衫安排"
            }
          },
          {
            "id": "w11_19_winter_uniform_cardigan_arrangement_mom_choice_3",
            "text": "可以買新的？",
            "buttonText": "可以買新的？",
            "playerLine": "可唔可以買新冷衫？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_19_winter_uniform_cardigan_arrangement_mom_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽說要先看看舊的還能不能穿。你有點失望，但她沒有說你不可以長大。"
            },
            "resultText": "媽媽說要先看看舊的還能不能穿。你有點失望，但她沒有說你不可以長大。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_19_winter_uniform_cardigan_arrangement",
              "variantId": "mom",
              "mustMatchEventTitle": "冬季校服／冷衫安排"
            }
          },
          {
            "id": "w11_19_winter_uniform_cardigan_arrangement_mom_choice_4",
            "text": "先放書包。",
            "buttonText": "先放書包。",
            "playerLine": "我放入書包先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_19_winter_uniform_cardigan_arrangement_mom_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把冷衫塞進書包，拉鍊差點拉不上。出門時風一吹，你又覺得帶著也不是完全沒用。"
            },
            "resultText": "你把冷衫塞進書包，拉鍊差點拉不上。出門時風一吹，你又覺得帶著也不是完全沒用。",
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
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_19_winter_uniform_cardigan_arrangement",
              "variantId": "mom",
              "mustMatchEventTitle": "冬季校服／冷衫安排"
            }
          }
        ]
      },
      {
        "variantId": "dad",
        "variantType": "family",
        "identityTypeId": "family_elder",
        "personalityId": null,
        "npcIdHint": "char_dad",
        "npcNameFallback": "爸爸",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "爸爸",
            "text": "爸爸出門前看見你沒拿外套，提醒：「今日有風喎。」他一手拿公事包，一手把冷衫遞給你：「唔著都帶住。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w11_19_winter_uniform_cardigan_arrangement_dad_choice_1",
            "text": "接過冷衫。",
            "buttonText": "接過冷衫。",
            "playerLine": "好啦，我帶。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_19_winter_uniform_cardigan_arrangement_dad_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸很快點頭，又看了一眼時間。你把冷衫抱在手上，像多了一件要負責的東西。"
            },
            "resultText": "爸爸很快點頭，又看了一眼時間。你把冷衫抱在手上，像多了一件要負責的東西。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_19_winter_uniform_cardigan_arrangement",
              "variantId": "dad",
              "mustMatchEventTitle": "冬季校服／冷衫安排"
            }
          },
          {
            "id": "w11_19_winter_uniform_cardigan_arrangement_dad_choice_2",
            "text": "我唔凍。",
            "buttonText": "我唔凍。",
            "playerLine": "我唔凍呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_19_winter_uniform_cardigan_arrangement_dad_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸說現在不凍，不代表下午不凍。這句有點像大人常說的話，你還是把冷衫拿了。"
            },
            "resultText": "爸爸說現在不凍，不代表下午不凍。這句有點像大人常說的話，你還是把冷衫拿了。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_19_winter_uniform_cardigan_arrangement",
              "variantId": "dad",
              "mustMatchEventTitle": "冬季校服／冷衫安排"
            }
          },
          {
            "id": "w11_19_winter_uniform_cardigan_arrangement_dad_choice_3",
            "text": "爸爸會唔會凍？",
            "buttonText": "爸爸會唔會凍？",
            "playerLine": "咁你凍唔凍？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_19_winter_uniform_cardigan_arrangement_dad_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸愣了一下，拉好自己的外套：「我都帶咗。」你才發現大人也要準備。"
            },
            "resultText": "爸爸愣了一下，拉好自己的外套：「我都帶咗。」你才發現大人也要準備。",
            "statusDelta": {
              "理智值": 1,
              "壓力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_19_winter_uniform_cardigan_arrangement",
              "variantId": "dad",
              "mustMatchEventTitle": "冬季校服／冷衫安排"
            }
          },
          {
            "id": "w11_19_winter_uniform_cardigan_arrangement_dad_choice_4",
            "text": "塞書包底。",
            "buttonText": "塞書包底。",
            "playerLine": "我放入去。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_19_winter_uniform_cardigan_arrangement_dad_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把冷衫塞到書包底。到學校要拿書時，它擋住了作業簿，你才想起它原來在那裡。"
            },
            "resultText": "你把冷衫塞到書包底。到學校要拿書時，它擋住了作業簿，你才想起它原來在那裡。",
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_19_winter_uniform_cardigan_arrangement",
              "variantId": "dad",
              "mustMatchEventTitle": "冬季校服／冷衫安排"
            }
          }
        ]
      },
      {
        "variantId": "classmate_compare",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": null,
        "npcIdHint": "classmate_comparison",
        "npcNameFallback": "同學",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "同學",
            "text": "回到班房，有同學指著一件新冷衫說：「我呢件新買㗎。」梓軒也拉一拉自己的袖口：「我阿媽話要啱校規。」有人看向你的冷衫。"
          }
        ],
        "playerChoices": [
          {
            "id": "w11_19_winter_uniform_cardigan_arrangement_classmate_compare_choice_1",
            "text": "我係舊的。",
            "buttonText": "我係舊的。",
            "playerLine": "我呢件舊㗎。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_19_winter_uniform_cardigan_arrangement_classmate_compare_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "同學看了一眼，又轉去看別人的外套。那一刻有點尷尬，但沒有停留很久。"
            },
            "resultText": "同學看了一眼，又轉去看別人的外套。那一刻有點尷尬，但沒有停留很久。",
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
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_19_winter_uniform_cardigan_arrangement",
              "variantId": "classmate_compare",
              "mustMatchEventTitle": "冬季校服／冷衫安排"
            }
          },
          {
            "id": "w11_19_winter_uniform_cardigan_arrangement_classmate_compare_choice_2",
            "text": "不理，坐下。",
            "buttonText": "不理，坐下。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_19_winter_uniform_cardigan_arrangement_classmate_compare_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把書包放下，沒有加入冷衫話題。別人的比較聲還在，但你已經翻開自己的書。"
            },
            "resultText": "你把書包放下，沒有加入冷衫話題。別人的比較聲還在，但你已經翻開自己的書。",
            "statusDelta": {
              "理智值": 1,
              "社交": -1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_19_winter_uniform_cardigan_arrangement",
              "variantId": "classmate_compare",
              "mustMatchEventTitle": "冬季校服／冷衫安排"
            }
          },
          {
            "id": "w11_19_winter_uniform_cardigan_arrangement_classmate_compare_choice_3",
            "text": "校規係咩？",
            "buttonText": "校規係咩？",
            "playerLine": "校規係咩呀？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_19_winter_uniform_cardigan_arrangement_classmate_compare_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒立刻說顏色、款式和校章。你聽得有點亂，但知道他不只是炫耀，也是真的在意規矩。"
            },
            "resultText": "梓軒立刻說顏色、款式和校章。你聽得有點亂，但知道他不只是炫耀，也是真的在意規矩。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "closeness",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_19_winter_uniform_cardigan_arrangement",
              "variantId": "classmate_compare",
              "mustMatchEventTitle": "冬季校服／冷衫安排"
            }
          },
          {
            "id": "w11_19_winter_uniform_cardigan_arrangement_classmate_compare_choice_4",
            "text": "拉好袖口。",
            "buttonText": "拉好袖口。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_19_winter_uniform_cardigan_arrangement_classmate_compare_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把袖口拉平，沒有說話。衣服不會因為這樣變新，但看起來整齊了一點。"
            },
            "resultText": "你把袖口拉平，沒有說話。衣服不會因為這樣變新，但看起來整齊了一點。",
            "statusDelta": {
              "自信": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_19_winter_uniform_cardigan_arrangement",
              "variantId": "classmate_compare",
              "mustMatchEventTitle": "冬季校服／冷衫安排"
            }
          }
        ]
      },
      {
        "variantId": "",
        "variantType": "system",
        "identityTypeId": null,
        "personalityId": null,
        "npcIdHint": "",
        "npcNameFallback": "老師提醒",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "老師提醒",
            "text": "老師早會後提醒：「天氣開始涼，冷衫同外套要寫名。唔好放低喺操場。」她舉起一件沒有人認領的外套，班裡立刻有人摸自己的書包。"
          }
        ],
        "playerChoices": [
          {
            "id": "w11_19_winter_uniform_cardigan_arrangement__choice_1",
            "text": "看有沒有寫名。",
            "buttonText": "看有沒有寫名。",
            "playerLine": "我睇下有冇寫名。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_19_winter_uniform_cardigan_arrangement__choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你翻開冷衫內側，找到自己的名字貼。看到名字在那裡，你安心了一點。"
            },
            "resultText": "你翻開冷衫內側，找到自己的名字貼。看到名字在那裡，你安心了一點。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_19_winter_uniform_cardigan_arrangement",
              "variantId": "",
              "mustMatchEventTitle": "冬季校服／冷衫安排"
            }
          },
          {
            "id": "w11_19_winter_uniform_cardigan_arrangement__choice_2",
            "text": "問可以貼名嗎？",
            "buttonText": "問可以貼名嗎？",
            "playerLine": "老師，可以貼名嗎？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_19_winter_uniform_cardigan_arrangement__choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說可以回家叫家人幫忙，也可以寫在名牌位。你記下來，怕冷衫像失物那樣被舉起來。"
            },
            "resultText": "老師說可以回家叫家人幫忙，也可以寫在名牌位。你記下來，怕冷衫像失物那樣被舉起來。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_19_winter_uniform_cardigan_arrangement",
              "variantId": "",
              "mustMatchEventTitle": "冬季校服／冷衫安排"
            }
          },
          {
            "id": "w11_19_winter_uniform_cardigan_arrangement__choice_3",
            "text": "摸書包找外套。",
            "buttonText": "摸書包找外套。",
            "playerLine": "我有冇帶呢？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_19_winter_uniform_cardigan_arrangement__choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你摸到書包裡那團冷衫，鬆了一口氣。它很佔位，但至少沒有留在家裡。"
            },
            "resultText": "你摸到書包裡那團冷衫，鬆了一口氣。它很佔位，但至少沒有留在家裡。",
            "statusDelta": {
              "理智值": 1,
              "壓力": -1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_19_winter_uniform_cardigan_arrangement",
              "variantId": "",
              "mustMatchEventTitle": "冬季校服／冷衫安排"
            }
          },
          {
            "id": "w11_19_winter_uniform_cardigan_arrangement__choice_4",
            "text": "覺得不用帶。",
            "buttonText": "覺得不用帶。",
            "playerLine": "我唔凍，應該唔使。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_19_winter_uniform_cardigan_arrangement__choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師沒有逼你穿，只提醒天氣會變。你看向窗外，風把樹葉吹得一直動。"
            },
            "resultText": "老師沒有逼你穿，只提醒天氣會變。你看向窗外，風把樹葉吹得一直動。",
            "statusDelta": {
              "理智值": 2,
              "壓力": -1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_19_winter_uniform_cardigan_arrangement",
              "variantId": "",
              "mustMatchEventTitle": "冬季校服／冷衫安排"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "w11_20_corridor_queue_order_seen_by_seniors",
    "sourceTopicId": "W11-20",
    "weekPool": "W11_authored_weekly",
    "week": 11,
    "dateRange": "Nov 10–Nov 16",
    "category": "social",
    "title": "走廊隊伍／秩序問題被高年級看見",
    "sceneIntro": "放學前，走廊同時有幾班排隊。有人回頭講話，有人書包撞到牆，還有人停在圖書角門口看書。隊伍一亂，後面的班就被擋住。幾個高年級學生剛好在附近，不同的人看到的是不一樣的問題。",
    "propertyValidation": null,
    "sceneIntroOverrides": [],
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        11,
        11
      ],
      "conditions": [],
      "exclusiveGroup": "w11_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "junlong",
        "variantType": "seniorStudent",
        "identityTypeId": "senior_student",
        "personalityId": "pers_strict_prefect",
        "npcIdHint": "senior_strict_prefect_junlong",
        "npcNameFallback": "俊朗",
        "unknownDisplayName": "風紀男生",
        "knownDisplayName": "俊朗師兄",
        "unlockCharacterId": "senior_strict_prefect_junlong",
        "openingDialogue": [
          {
            "speaker": "俊朗師兄",
            "text": "風紀男生站在轉角，皺眉看著隊伍：「唔好企中間。書包揹好，跟返自己班。」他沒有大叫，但聲音很快，像隊伍再亂一點就會出事。"
          }
        ],
        "playerChoices": [
          {
            "id": "w11_20_corridor_queue_order_seen_by_seniors_junlong_choice_1",
            "text": "退回自己隊。",
            "buttonText": "退回自己隊。",
            "playerLine": "我返返去。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_20_corridor_queue_order_seen_by_seniors_junlong_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你退回班隊，書包沒有再撞到人。風紀男生沒有稱讚，只是把視線移到下一個擋路的人。"
            },
            "resultText": "你退回班隊，書包沒有再撞到人。風紀男生沒有稱讚，只是把視線移到下一個擋路的人。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_strict_prefect_junlong",
                "trueName": "俊朗",
                "sourceEventId": "w11_20_corridor_queue_order_seen_by_seniors"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_20_corridor_queue_order_seen_by_seniors",
              "variantId": "junlong",
              "mustMatchEventTitle": "走廊隊伍／秩序問題被高年級看見"
            }
          },
          {
            "id": "w11_20_corridor_queue_order_seen_by_seniors_junlong_choice_2",
            "text": "問要企邊。",
            "buttonText": "問要企邊。",
            "playerLine": "師兄，我企邊度？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_20_corridor_queue_order_seen_by_seniors_junlong_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "他指向班牌後面：「嗰度。」語氣硬，但方向很明確。你被催了一下，也終於知道位置。"
            },
            "resultText": "他指向班牌後面：「嗰度。」語氣硬，但方向很明確。你被催了一下，也終於知道位置。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_strict_prefect_junlong",
                "trueName": "俊朗",
                "sourceEventId": "w11_20_corridor_queue_order_seen_by_seniors"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_20_corridor_queue_order_seen_by_seniors",
              "variantId": "junlong",
              "mustMatchEventTitle": "走廊隊伍／秩序問題被高年級看見"
            }
          },
          {
            "id": "w11_20_corridor_queue_order_seen_by_seniors_junlong_choice_3",
            "text": "提醒前面同學。",
            "buttonText": "提醒前面同學。",
            "playerLine": "你行前少少呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_20_corridor_queue_order_seen_by_seniors_junlong_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "前面同學移了半步，隊伍順了一點。風紀男生看見你有幫忙，沒有再催你。"
            },
            "resultText": "前面同學移了半步，隊伍順了一點。風紀男生看見你有幫忙，沒有再催你。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_strict_prefect_junlong",
                "trueName": "俊朗",
                "sourceEventId": "w11_20_corridor_queue_order_seen_by_seniors"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_20_corridor_queue_order_seen_by_seniors",
              "variantId": "junlong",
              "mustMatchEventTitle": "走廊隊伍／秩序問題被高年級看見"
            }
          },
          {
            "id": "w11_20_corridor_queue_order_seen_by_seniors_junlong_choice_4",
            "text": "被聲音嚇住。",
            "buttonText": "被聲音嚇住。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_20_corridor_queue_order_seen_by_seniors_junlong_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你站住一瞬間，反而擋住了路。風紀男生又指了一下隊伍，這次聲音更短：「行。」"
            },
            "resultText": "你站住一瞬間，反而擋住了路。風紀男生又指了一下隊伍，這次聲音更短：「行。」",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_20_corridor_queue_order_seen_by_seniors",
              "variantId": "junlong",
              "mustMatchEventTitle": "走廊隊伍／秩序問題被高年級看見"
            }
          }
        ]
      },
      {
        "variantId": "zhiyau",
        "variantType": "seniorStudent",
        "identityTypeId": "senior_student",
        "personalityId": "pers_friendly_senior",
        "npcIdHint": "senior_friendly_girl_zhiyau",
        "npcNameFallback": "芷悠",
        "unknownDisplayName": "高年級女生",
        "knownDisplayName": "芷悠師姐",
        "unlockCharacterId": "senior_friendly_girl_zhiyau",
        "openingDialogue": [
          {
            "speaker": "芷悠師姐",
            "text": "高年級女生看見幾個小一在隊伍裡慌慌張張，沒有先罵，只說：「睇住前面個書包就得。唔好望咁多邊。」她把聲音放慢一點。"
          }
        ],
        "playerChoices": [
          {
            "id": "w11_20_corridor_queue_order_seen_by_seniors_zhiyau_choice_1",
            "text": "跟住前面書包。",
            "buttonText": "跟住前面書包。",
            "playerLine": "我跟住前面。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_20_corridor_queue_order_seen_by_seniors_zhiyau_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你盯著前面同學的書包，終於不再左看右看。隊伍慢慢向前，你也跟得上。"
            },
            "resultText": "你盯著前面同學的書包，終於不再左看右看。隊伍慢慢向前，你也跟得上。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_friendly_girl_zhiyau",
                "trueName": "芷悠",
                "sourceEventId": "w11_20_corridor_queue_order_seen_by_seniors"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_20_corridor_queue_order_seen_by_seniors",
              "variantId": "zhiyau",
              "mustMatchEventTitle": "走廊隊伍／秩序問題被高年級看見"
            }
          },
          {
            "id": "w11_20_corridor_queue_order_seen_by_seniors_zhiyau_choice_2",
            "text": "說我唔知去邊。",
            "buttonText": "說我唔知去邊。",
            "playerLine": "我唔知行邊。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_20_corridor_queue_order_seen_by_seniors_zhiyau_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她指向你班老師的位置：「去嗰邊。」沒有笑你，也沒有替你走，只讓你看見方向。"
            },
            "resultText": "她指向你班老師的位置：「去嗰邊。」沒有笑你，也沒有替你走，只讓你看見方向。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_friendly_girl_zhiyau",
                "trueName": "芷悠",
                "sourceEventId": "w11_20_corridor_queue_order_seen_by_seniors"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_20_corridor_queue_order_seen_by_seniors",
              "variantId": "zhiyau",
              "mustMatchEventTitle": "走廊隊伍／秩序問題被高年級看見"
            }
          },
          {
            "id": "w11_20_corridor_queue_order_seen_by_seniors_zhiyau_choice_3",
            "text": "問是不是排錯。",
            "buttonText": "問是不是排錯。",
            "playerLine": "我係咪排錯隊？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_20_corridor_queue_order_seen_by_seniors_zhiyau_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她看了看你的班牌，說沒有，只是站歪了。你往內移一步，心裡也跟著正了一點。"
            },
            "resultText": "她看了看你的班牌，說沒有，只是站歪了。你往內移一步，心裡也跟著正了一點。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_friendly_girl_zhiyau",
                "trueName": "芷悠",
                "sourceEventId": "w11_20_corridor_queue_order_seen_by_seniors"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_20_corridor_queue_order_seen_by_seniors",
              "variantId": "zhiyau",
              "mustMatchEventTitle": "走廊隊伍／秩序問題被高年級看見"
            }
          },
          {
            "id": "w11_20_corridor_queue_order_seen_by_seniors_zhiyau_choice_4",
            "text": "小聲多謝。",
            "buttonText": "小聲多謝。",
            "playerLine": "唔該師姐。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_20_corridor_queue_order_seen_by_seniors_zhiyau_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她點點頭，就回去幫另一邊。你還不知道她名字，但記得她沒有令你更慌。"
            },
            "resultText": "她點點頭，就回去幫另一邊。你還不知道她名字，但記得她沒有令你更慌。",
            "statusDelta": {
              "自信": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_friendly_girl_zhiyau",
                "trueName": "芷悠",
                "sourceEventId": "w11_20_corridor_queue_order_seen_by_seniors"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_20_corridor_queue_order_seen_by_seniors",
              "variantId": "zhiyau",
              "mustMatchEventTitle": "走廊隊伍／秩序問題被高年級看見"
            }
          }
        ]
      },
      {
        "variantId": "baakjin",
        "variantType": "seniorStudent",
        "identityTypeId": "senior_student",
        "personalityId": "pers_senior_aloof",
        "npcIdHint": "senior_aloof_baakjin",
        "npcNameFallback": "柏言",
        "unknownDisplayName": "高年級男生",
        "knownDisplayName": "柏言師兄",
        "unlockCharacterId": "senior_aloof_baakjin",
        "openingDialogue": [
          {
            "speaker": "柏言師兄",
            "text": "一個高年級男生站在牆邊，沒有加入催促。他看見圖書角門口被堵住，只說一句：「門口。」然後用手指了指旁邊空位。"
          }
        ],
        "playerChoices": [
          {
            "id": "w11_20_corridor_queue_order_seen_by_seniors_baakjin_choice_1",
            "text": "讓開門口。",
            "buttonText": "讓開門口。",
            "playerLine": "哦，我讓開。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_20_corridor_queue_order_seen_by_seniors_baakjin_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你往旁邊移一步，圖書角門終於能開。高年級男生沒有再說話，但問題解決了。"
            },
            "resultText": "你往旁邊移一步，圖書角門終於能開。高年級男生沒有再說話，但問題解決了。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_aloof_baakjin",
                "trueName": "柏言",
                "sourceEventId": "w11_20_corridor_queue_order_seen_by_seniors"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_20_corridor_queue_order_seen_by_seniors",
              "variantId": "baakjin",
              "mustMatchEventTitle": "走廊隊伍／秩序問題被高年級看見"
            }
          },
          {
            "id": "w11_20_corridor_queue_order_seen_by_seniors_baakjin_choice_2",
            "text": "問他說甚麼。",
            "buttonText": "問他說甚麼。",
            "playerLine": "咩呀？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_20_corridor_queue_order_seen_by_seniors_baakjin_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "他又指了一下門：「擋住。」只有兩個字，你卻聽懂了。你往旁邊移開。"
            },
            "resultText": "他又指了一下門：「擋住。」只有兩個字，你卻聽懂了。你往旁邊移開。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_aloof_baakjin",
                "trueName": "柏言",
                "sourceEventId": "w11_20_corridor_queue_order_seen_by_seniors"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_20_corridor_queue_order_seen_by_seniors",
              "variantId": "baakjin",
              "mustMatchEventTitle": "走廊隊伍／秩序問題被高年級看見"
            }
          },
          {
            "id": "w11_20_corridor_queue_order_seen_by_seniors_baakjin_choice_3",
            "text": "先看門口。",
            "buttonText": "先看門口。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_20_corridor_queue_order_seen_by_seniors_baakjin_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你回頭看，才發現自己真的站在門口。那個高年級男生沒有罵你，只等你自己看見。"
            },
            "resultText": "你回頭看，才發現自己真的站在門口。那個高年級男生沒有罵你，只等你自己看見。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_20_corridor_queue_order_seen_by_seniors",
              "variantId": "baakjin",
              "mustMatchEventTitle": "走廊隊伍／秩序問題被高年級看見"
            }
          },
          {
            "id": "w11_20_corridor_queue_order_seen_by_seniors_baakjin_choice_4",
            "text": "覺得他很冷淡。",
            "buttonText": "覺得他很冷淡。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_20_corridor_queue_order_seen_by_seniors_baakjin_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你退開後，他已經看向別處。他沒有照顧你，但也沒有多講一句令你難堪。"
            },
            "resultText": "你退開後，他已經看向別處。他沒有照顧你，但也沒有多講一句令你難堪。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_20_corridor_queue_order_seen_by_seniors",
              "variantId": "baakjin",
              "mustMatchEventTitle": "走廊隊伍／秩序問題被高年級看見"
            }
          }
        ]
      },
      {
        "variantId": "gachang",
        "variantType": "seniorStudent",
        "identityTypeId": "senior_student",
        "personalityId": "pers_senior_gentle_helper",
        "npcIdHint": "senior_gentle_helper_gachang",
        "npcNameFallback": "嘉澄",
        "unknownDisplayName": "圖書服務生",
        "knownDisplayName": "嘉澄師姐",
        "unlockCharacterId": "senior_gentle_helper_gachang",
        "openingDialogue": [
          {
            "speaker": "嘉澄師姐",
            "text": "圖書服務生抱著書站在圖書角旁邊，看見隊伍把入口擋住。她沒有大聲，只說：「借書嗰邊要留條路。」她把書抱高一點，怕碰到低年級的書包。"
          }
        ],
        "playerChoices": [
          {
            "id": "w11_20_corridor_queue_order_seen_by_seniors_gachang_choice_1",
            "text": "移開一點。",
            "buttonText": "移開一點。",
            "playerLine": "我企入啲。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_20_corridor_queue_order_seen_by_seniors_gachang_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你往班隊內側移，圖書角前面空出一條細路。她抱著書走過時說：「唔該。」"
            },
            "resultText": "你往班隊內側移，圖書角前面空出一條細路。她抱著書走過時說：「唔該。」",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_gentle_helper_gachang",
                "trueName": "嘉澄",
                "sourceEventId": "w11_20_corridor_queue_order_seen_by_seniors"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_20_corridor_queue_order_seen_by_seniors",
              "variantId": "gachang",
              "mustMatchEventTitle": "走廊隊伍／秩序問題被高年級看見"
            }
          },
          {
            "id": "w11_20_corridor_queue_order_seen_by_seniors_gachang_choice_2",
            "text": "提醒旁邊同學。",
            "buttonText": "提醒旁邊同學。",
            "playerLine": "呢度要畀人過。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_20_corridor_queue_order_seen_by_seniors_gachang_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "旁邊同學也移開一點。你沒有變成風紀，但讓那條路通了。"
            },
            "resultText": "旁邊同學也移開一點。你沒有變成風紀，但讓那條路通了。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_gentle_helper_gachang",
                "trueName": "嘉澄",
                "sourceEventId": "w11_20_corridor_queue_order_seen_by_seniors"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_20_corridor_queue_order_seen_by_seniors",
              "variantId": "gachang",
              "mustMatchEventTitle": "走廊隊伍／秩序問題被高年級看見"
            }
          },
          {
            "id": "w11_20_corridor_queue_order_seen_by_seniors_gachang_choice_3",
            "text": "問書放邊。",
            "buttonText": "問書放邊。",
            "playerLine": "啲書要放邊？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_20_corridor_queue_order_seen_by_seniors_gachang_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她指向圖書角籃子：「還書放嗰度。」你本來只是在排隊，卻順便記住了圖書角的位置。"
            },
            "resultText": "她指向圖書角籃子：「還書放嗰度。」你本來只是在排隊，卻順便記住了圖書角的位置。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_gentle_helper_gachang",
                "trueName": "嘉澄",
                "sourceEventId": "w11_20_corridor_queue_order_seen_by_seniors"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_20_corridor_queue_order_seen_by_seniors",
              "variantId": "gachang",
              "mustMatchEventTitle": "走廊隊伍／秩序問題被高年級看見"
            }
          },
          {
            "id": "w11_20_corridor_queue_order_seen_by_seniors_gachang_choice_4",
            "text": "只抱緊書包。",
            "buttonText": "只抱緊書包。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w11_20_corridor_queue_order_seen_by_seniors_gachang_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你抱緊自己的書包，沒有擋得更出。圖書服務生繞過去，沒有責怪你。"
            },
            "resultText": "你抱緊自己的書包，沒有擋得更出。圖書服務生繞過去，沒有責怪你。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w11_20_corridor_queue_order_seen_by_seniors",
              "variantId": "gachang",
              "mustMatchEventTitle": "走廊隊伍／秩序問題被高年級看見"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "w12_21_sports_day_trial_run",
    "sourceTopicId": "W12-21",
    "weekPool": "W12_authored_weekly",
    "week": 12,
    "dateRange": "Nov 17–Nov 23",
    "category": "school",
    "title": "運動日初賽／試跑日",
    "sceneIntro": "今天不是正式運動日，但操場上多了白線、雪糕筒和計時的老師。每班輪流試跑，大家要聽口令、跑到指定位置，再回到陰影位等。你站在隊伍裡，聽見哨子聲比平時大。",
    "propertyValidation": null,
    "sceneIntroOverrides": [],
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        12,
        12
      ],
      "conditions": [],
      "exclusiveGroup": "w12_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "hoiching",
        "variantType": "seniorStudent",
        "identityTypeId": "senior_student",
        "personalityId": "pers_senior_competitive_captain",
        "npcIdHint": "senior_captain_hoiching",
        "npcNameFallback": "凱晴",
        "unknownDisplayName": "校隊女生",
        "knownDisplayName": "凱晴師姐",
        "unlockCharacterId": "senior_captain_hoiching",
        "openingDialogue": [
          {
            "speaker": "凱晴師姐",
            "text": "校隊女生在跑道旁幫忙擺雪糕筒，看見有人亂踏線，直接說：「未到你就唔好踩入去。到你先跑。」她看向你們這組：「聽到名先出嚟。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w12_21_sports_day_trial_run_hoiching_choice_1",
            "text": "聽名才出去。",
            "buttonText": "聽名才出去。",
            "playerLine": "我等叫名先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_21_sports_day_trial_run_hoiching_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你站在線後，腳沒有偷跑出去。她看見你有等，便轉去提醒另一組。"
            },
            "resultText": "你站在線後，腳沒有偷跑出去。她看見你有等，便轉去提醒另一組。",
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
              "足球": 1
            },
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_captain_hoiching",
                "trueName": "凱晴",
                "sourceEventId": "w12_21_sports_day_trial_run"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_21_sports_day_trial_run",
              "variantId": "hoiching",
              "mustMatchEventTitle": "運動日初賽／試跑日"
            }
          },
          {
            "id": "w12_21_sports_day_trial_run_hoiching_choice_2",
            "text": "問跑到邊。",
            "buttonText": "問跑到邊。",
            "playerLine": "跑到邊度停？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_21_sports_day_trial_run_hoiching_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她指向最遠的雪糕筒：「嗰度，過線先停。」你盯著那個橙色筒，目標清楚了一點。"
            },
            "resultText": "她指向最遠的雪糕筒：「嗰度，過線先停。」你盯著那個橙色筒，目標清楚了一點。",
            "statusDelta": {
              "自信": 1,
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_captain_hoiching",
                "trueName": "凱晴",
                "sourceEventId": "w12_21_sports_day_trial_run"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_21_sports_day_trial_run",
              "variantId": "hoiching",
              "mustMatchEventTitle": "運動日初賽／試跑日"
            }
          },
          {
            "id": "w12_21_sports_day_trial_run_hoiching_choice_3",
            "text": "說有點怕。",
            "buttonText": "說有點怕。",
            "playerLine": "我有啲驚跌。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_21_sports_day_trial_run_hoiching_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她看了一眼你的鞋：「鞋帶有冇鬆？」她不太會安慰，但會把害怕變成一個檢查動作。"
            },
            "resultText": "她看了一眼你的鞋：「鞋帶有冇鬆？」她不太會安慰，但會把害怕變成一個檢查動作。",
            "statusDelta": {
              "自信": 1,
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_captain_hoiching",
                "trueName": "凱晴",
                "sourceEventId": "w12_21_sports_day_trial_run"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_21_sports_day_trial_run",
              "variantId": "hoiching",
              "mustMatchEventTitle": "運動日初賽／試跑日"
            }
          },
          {
            "id": "w12_21_sports_day_trial_run_hoiching_choice_4",
            "text": "幫手遞筒。",
            "buttonText": "幫手遞筒。",
            "playerLine": "我幫你拎呢個。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_21_sports_day_trial_run_hoiching_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她接過雪糕筒，短短說了聲多謝。你不是跑最快的人，也能在操場上做一件有用的事。"
            },
            "resultText": "她接過雪糕筒，短短說了聲多謝。你不是跑最快的人，也能在操場上做一件有用的事。",
            "statusDelta": {
              "社交": 1,
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
              "足球": 1
            },
            "unlocks": [
              {
                "type": "unlockCharacter",
                "characterId": "senior_captain_hoiching",
                "trueName": "凱晴",
                "sourceEventId": "w12_21_sports_day_trial_run"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_21_sports_day_trial_run",
              "variantId": "hoiching",
              "mustMatchEventTitle": "運動日初賽／試跑日"
            }
          }
        ]
      },
      {
        "variantId": "outgoing",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "家朗站在你旁邊，不停踮腳看前面跑的人：「好快到我哋喇。」他嘴上說不緊張，手卻一直拉自己的衣角。"
          }
        ],
        "playerChoices": [
          {
            "id": "w12_21_sports_day_trial_run_outgoing_choice_1",
            "text": "一起深呼吸。",
            "buttonText": "一起深呼吸。",
            "playerLine": "我哋吸一啖氣先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_21_sports_day_trial_run_outgoing_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗照著吸了一大口氣，差點笑出來。笑完之後，他的肩膀放低了一點。"
            },
            "resultText": "家朗照著吸了一大口氣，差點笑出來。笑完之後，他的肩膀放低了一點。",
            "statusDelta": {
              "自信": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_21_sports_day_trial_run",
              "variantId": "outgoing",
              "mustMatchEventTitle": "運動日初賽／試跑日"
            }
          },
          {
            "id": "w12_21_sports_day_trial_run_outgoing_choice_2",
            "text": "叫他別踮腳。",
            "buttonText": "叫他別踮腳。",
            "playerLine": "你唔好踩出去呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_21_sports_day_trial_run_outgoing_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗退回白線後面，說自己只是看看。下一次哨子響，他真的沒有先衝出去。"
            },
            "resultText": "家朗退回白線後面，說自己只是看看。下一次哨子響，他真的沒有先衝出去。",
            "statusDelta": {
              "社交": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_21_sports_day_trial_run",
              "variantId": "outgoing",
              "mustMatchEventTitle": "運動日初賽／試跑日"
            }
          },
          {
            "id": "w12_21_sports_day_trial_run_outgoing_choice_3",
            "text": "問他怕唔怕。",
            "buttonText": "問他怕唔怕。",
            "playerLine": "你驚唔驚？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_21_sports_day_trial_run_outgoing_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗立刻說不驚，過了一下又說：「少少啦。」這次他沒有把話講得太大。"
            },
            "resultText": "家朗立刻說不驚，過了一下又說：「少少啦。」這次他沒有把話講得太大。",
            "statusDelta": {
              "自信": 1,
              "壓力": 1
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
              "eventId": "w12_21_sports_day_trial_run",
              "variantId": "outgoing",
              "mustMatchEventTitle": "運動日初賽／試跑日"
            }
          },
          {
            "id": "w12_21_sports_day_trial_run_outgoing_choice_4",
            "text": "一起看前面示範。",
            "buttonText": "一起看前面示範。",
            "playerLine": "睇前面點跑先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_21_sports_day_trial_run_outgoing_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你們一起看前一組跑。家朗終於安靜了幾秒，像把跑道在心裡走了一次。"
            },
            "resultText": "你們一起看前一組跑。家朗終於安靜了幾秒，像把跑道在心裡走了一次。",
            "statusDelta": {
              "自信": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_21_sports_day_trial_run",
              "variantId": "outgoing",
              "mustMatchEventTitle": "運動日初賽／試跑日"
            }
          }
        ]
      },
      {
        "variantId": "competitive",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_competitive_peer",
        "npcIdHint": "classmate_competitive_peer",
        "npcNameFallback": "梓軒",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "梓軒盯著計時老師的手錶，問：「佢哋有冇計幾秒？」他把自己的袖子拉高，像怕袖子會拖慢自己。"
          }
        ],
        "playerChoices": [
          {
            "id": "w12_21_sports_day_trial_run_competitive_choice_1",
            "text": "先跑完再講。",
            "buttonText": "先跑完再講。",
            "playerLine": "先跑完啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_21_sports_day_trial_run_competitive_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒看你一眼，像不太滿意，但還是點頭。輪到你們時，他真的先看終點，而不是看手錶。"
            },
            "resultText": "梓軒看你一眼，像不太滿意，但還是點頭。輪到你們時，他真的先看終點，而不是看手錶。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_21_sports_day_trial_run",
              "variantId": "competitive",
              "mustMatchEventTitle": "運動日初賽／試跑日"
            }
          },
          {
            "id": "w12_21_sports_day_trial_run_competitive_choice_2",
            "text": "問他想幾快。",
            "buttonText": "問他想幾快。",
            "playerLine": "你想跑幾快？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_21_sports_day_trial_run_competitive_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒說「越快越好」，但說完又看向腳尖。那句聽起來像願望，不像答案。"
            },
            "resultText": "梓軒說「越快越好」，但說完又看向腳尖。那句聽起來像願望，不像答案。",
            "statusDelta": {
              "自信": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_21_sports_day_trial_run",
              "variantId": "competitive",
              "mustMatchEventTitle": "運動日初賽／試跑日"
            }
          },
          {
            "id": "w12_21_sports_day_trial_run_competitive_choice_3",
            "text": "說我只想唔跌。",
            "buttonText": "說我只想唔跌。",
            "playerLine": "我唔跌就得。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_21_sports_day_trial_run_competitive_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒想笑又忍住，最後說：「咁都要睇路。」這句比平時少一點比較，多一點提醒。"
            },
            "resultText": "梓軒想笑又忍住，最後說：「咁都要睇路。」這句比平時少一點比較，多一點提醒。",
            "statusDelta": {
              "自信": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_21_sports_day_trial_run",
              "variantId": "competitive",
              "mustMatchEventTitle": "運動日初賽／試跑日"
            }
          },
          {
            "id": "w12_21_sports_day_trial_run_competitive_choice_4",
            "text": "不談秒數。",
            "buttonText": "不談秒數。",
            "playerLine": "我唔知幾秒。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_21_sports_day_trial_run_competitive_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有接住他的計時話題。梓軒自己看手錶，你則看著終點線。"
            },
            "resultText": "你沒有接住他的計時話題。梓軒自己看手錶，你則看著終點線。",
            "statusDelta": {
              "自信": 1,
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
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_21_sports_day_trial_run",
              "variantId": "competitive",
              "mustMatchEventTitle": "運動日初賽／試跑日"
            }
          }
        ]
      },
      {
        "variantId": "pe_teacher",
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": null,
        "npcIdHint": "pe_teacher",
        "npcNameFallback": "體育老師",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "體育老師",
            "text": "體育老師拿著名單：「今日試跑，唔係正式決賽。跑完返陰影位飲水。」他舉起手：「聽到哨子先開始，未吹唔好跑。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w12_21_sports_day_trial_run_pe_teacher_choice_1",
            "text": "聽哨子。",
            "buttonText": "聽哨子。",
            "playerLine": "我等哨子。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_21_sports_day_trial_run_pe_teacher_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "哨子響前，你忍住沒有動。真正跑出去那一下，你知道自己至少沒有偷跑。"
            },
            "resultText": "哨子響前，你忍住沒有動。真正跑出去那一下，你知道自己至少沒有偷跑。",
            "statusDelta": {
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_21_sports_day_trial_run",
              "variantId": "pe_teacher",
              "mustMatchEventTitle": "運動日初賽／試跑日"
            }
          },
          {
            "id": "w12_21_sports_day_trial_run_pe_teacher_choice_2",
            "text": "問可否飲水。",
            "buttonText": "問可否飲水。",
            "playerLine": "老師，我可唔可以飲水？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_21_sports_day_trial_run_pe_teacher_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師叫你跑完先到陰影位飲。你把這件事記住，跑前沒有一直想水壺。"
            },
            "resultText": "老師叫你跑完先到陰影位飲。你把這件事記住，跑前沒有一直想水壺。",
            "statusDelta": {
              "自信": 1,
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_21_sports_day_trial_run",
              "variantId": "pe_teacher",
              "mustMatchEventTitle": "運動日初賽／試跑日"
            }
          },
          {
            "id": "w12_21_sports_day_trial_run_pe_teacher_choice_3",
            "text": "怕聽不到名字。",
            "buttonText": "怕聽不到名字。",
            "playerLine": "我驚聽唔到叫名。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_21_sports_day_trial_run_pe_teacher_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說會再叫一次，叫到才出來。你站近一點，不再一直伸長頸。"
            },
            "resultText": "老師說會再叫一次，叫到才出來。你站近一點，不再一直伸長頸。",
            "statusDelta": {
              "自信": 1,
              "壓力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_21_sports_day_trial_run",
              "variantId": "pe_teacher",
              "mustMatchEventTitle": "運動日初賽／試跑日"
            }
          },
          {
            "id": "w12_21_sports_day_trial_run_pe_teacher_choice_4",
            "text": "跟著前面做。",
            "buttonText": "跟著前面做。",
            "playerLine": "我跟前面嗰個。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_21_sports_day_trial_run_pe_teacher_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你看著前面同學怎樣起跑和停下。輪到你時，動作還是亂了一點，但知道大概流程。"
            },
            "resultText": "你看著前面同學怎樣起跑和停下。輪到你時，動作還是亂了一點，但知道大概流程。",
            "statusDelta": {
              "自信": 1,
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {
              "足球": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_21_sports_day_trial_run",
              "variantId": "pe_teacher",
              "mustMatchEventTitle": "運動日初賽／試跑日"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "w12_22_wall_display_class_work_showcase",
    "sourceTopicId": "W12-22",
    "weekPool": "W12_authored_weekly",
    "week": 12,
    "dateRange": "Nov 17–Nov 23",
    "category": "school",
    "title": "壁報／班際作品展示",
    "sceneIntro": "走廊牆上貼滿不同班的壁報。你們班那張也被貼上去，紙邊有些地方不太平，但顏色很亮。小息時，大家經過都會看一眼，有人找自己的部分，有人先看別班做得多整齊。",
    "propertyValidation": null,
    "sceneIntroOverrides": [],
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        12,
        12
      ],
      "conditions": [],
      "exclusiveGroup": "w12_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "quiet",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_quiet_observer",
        "npcIdHint": "classmate_quiet_observer",
        "npcNameFallback": "穎心",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "穎心",
            "text": "穎心站在壁報前，很快找到了她剪的那朵小花。她沒有指給很多人看，只小聲說：「呢度冇甩。」像是放心了一點。"
          }
        ],
        "playerChoices": [
          {
            "id": "w12_22_wall_display_class_work_showcase_quiet_choice_1",
            "text": "說花還在。",
            "buttonText": "說花還在。",
            "playerLine": "你朵花仲喺度。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_22_wall_display_class_work_showcase_quiet_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心點點頭，嘴角很小地彎了一下。那朵花沒有被很多人看見，但你們看見了。"
            },
            "resultText": "穎心點點頭，嘴角很小地彎了一下。那朵花沒有被很多人看見，但你們看見了。",
            "statusDelta": {
              "自信": 1,
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
              "eventId": "w12_22_wall_display_class_work_showcase",
              "variantId": "quiet",
              "mustMatchEventTitle": "壁報／班際作品展示"
            }
          },
          {
            "id": "w12_22_wall_display_class_work_showcase_quiet_choice_2",
            "text": "找自己的部分。",
            "buttonText": "找自己的部分。",
            "playerLine": "我搵下我貼嗰個。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_22_wall_display_class_work_showcase_quiet_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你在壁報邊角找到自己貼的紙。它有一點歪，但還是貼在那裡。"
            },
            "resultText": "你在壁報邊角找到自己貼的紙。它有一點歪，但還是貼在那裡。",
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
              "eventId": "w12_22_wall_display_class_work_showcase",
              "variantId": "quiet",
              "mustMatchEventTitle": "壁報／班際作品展示"
            }
          },
          {
            "id": "w12_22_wall_display_class_work_showcase_quiet_choice_3",
            "text": "問她滿唔滿意。",
            "buttonText": "問她滿唔滿意。",
            "playerLine": "你覺得得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_22_wall_display_class_work_showcase_quiet_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心看了好一會兒，只說：「冇甩就好。」她的標準不大聲，但很清楚。"
            },
            "resultText": "穎心看了好一會兒，只說：「冇甩就好。」她的標準不大聲，但很清楚。",
            "statusDelta": {
              "自信": 1,
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
              "eventId": "w12_22_wall_display_class_work_showcase",
              "variantId": "quiet",
              "mustMatchEventTitle": "壁報／班際作品展示"
            }
          },
          {
            "id": "w12_22_wall_display_class_work_showcase_quiet_choice_4",
            "text": "安靜看一會。",
            "buttonText": "安靜看一會。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_22_wall_display_class_work_showcase_quiet_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你們站在走廊看壁報，沒有急著講話。旁邊有人走過，你們也沒有馬上讓那張紙變成比賽。"
            },
            "resultText": "你們站在走廊看壁報，沒有急著講話。旁邊有人走過，你們也沒有馬上讓那張紙變成比賽。",
            "statusDelta": {
              "創意": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_22_wall_display_class_work_showcase",
              "variantId": "quiet",
              "mustMatchEventTitle": "壁報／班際作品展示"
            }
          }
        ]
      },
      {
        "variantId": "outgoing",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "家朗一看到壁報貼出來，就先找最大那幾個字：「嗰個係我貼嘅！」他說完又看你：「你嗰個喺邊？」"
          }
        ],
        "playerChoices": [
          {
            "id": "w12_22_wall_display_class_work_showcase_outgoing_choice_1",
            "text": "指自己的角落。",
            "buttonText": "指自己的角落。",
            "playerLine": "我嗰個喺呢度。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_22_wall_display_class_work_showcase_outgoing_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗湊近看，說：「有喎。」他把你的角落也算進了整張壁報裡。"
            },
            "resultText": "家朗湊近看，說：「有喎。」他把你的角落也算進了整張壁報裡。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "w12_22_wall_display_class_work_showcase",
              "variantId": "outgoing",
              "mustMatchEventTitle": "壁報／班際作品展示"
            }
          },
          {
            "id": "w12_22_wall_display_class_work_showcase_outgoing_choice_2",
            "text": "說貼得有點歪。",
            "buttonText": "說貼得有點歪。",
            "playerLine": "我貼歪咗少少。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_22_wall_display_class_work_showcase_outgoing_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗看了看，說不算很歪。可能他真的覺得不歪，也可能他只是想讓你舒服一點。"
            },
            "resultText": "家朗看了看，說不算很歪。可能他真的覺得不歪，也可能他只是想讓你舒服一點。",
            "statusDelta": {
              "自信": 1,
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
              "eventId": "w12_22_wall_display_class_work_showcase",
              "variantId": "outgoing",
              "mustMatchEventTitle": "壁報／班際作品展示"
            }
          },
          {
            "id": "w12_22_wall_display_class_work_showcase_outgoing_choice_3",
            "text": "問他是不是好開心。",
            "buttonText": "問他是不是好開心。",
            "playerLine": "你係咪好開心？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_22_wall_display_class_work_showcase_outgoing_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗笑著說當然，然後又望向別班壁報。開心裡也有一點想比。"
            },
            "resultText": "家朗笑著說當然，然後又望向別班壁報。開心裡也有一點想比。",
            "statusDelta": {
              "自信": 1,
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
              "eventId": "w12_22_wall_display_class_work_showcase",
              "variantId": "outgoing",
              "mustMatchEventTitle": "壁報／班際作品展示"
            }
          },
          {
            "id": "w12_22_wall_display_class_work_showcase_outgoing_choice_4",
            "text": "一起看別班。",
            "buttonText": "一起看別班。",
            "playerLine": "睇下隔籬班。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_22_wall_display_class_work_showcase_outgoing_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你們一起看另一張很整齊的壁報。家朗先說好靚，下一秒又說你們那張顏色也好。"
            },
            "resultText": "你們一起看另一張很整齊的壁報。家朗先說好靚，下一秒又說你們那張顏色也好。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "w12_22_wall_display_class_work_showcase",
              "variantId": "outgoing",
              "mustMatchEventTitle": "壁報／班際作品展示"
            }
          }
        ]
      },
      {
        "variantId": "competitive",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_competitive_peer",
        "npcIdHint": "classmate_competitive_peer",
        "npcNameFallback": "梓軒",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "梓軒站在走廊，先看別班，再看你們班。他皺眉：「隔籬班字好直。」但過了一會兒，他又看著你們班的標題不走。"
          }
        ],
        "playerChoices": [
          {
            "id": "w12_22_wall_display_class_work_showcase_competitive_choice_1",
            "text": "我們顏色也好。",
            "buttonText": "我們顏色也好。",
            "playerLine": "我哋顏色都幾靚呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_22_wall_display_class_work_showcase_competitive_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒沒有馬上同意，但又看了一眼彩紙位置：「係多色啲。」這句已經算是承認。"
            },
            "resultText": "梓軒沒有馬上同意，但又看了一眼彩紙位置：「係多色啲。」這句已經算是承認。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "w12_22_wall_display_class_work_showcase",
              "variantId": "competitive",
              "mustMatchEventTitle": "壁報／班際作品展示"
            }
          },
          {
            "id": "w12_22_wall_display_class_work_showcase_competitive_choice_2",
            "text": "不要一直比。",
            "buttonText": "不要一直比。",
            "playerLine": "唔好成日比啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_22_wall_display_class_work_showcase_competitive_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒撇撇嘴，卻沒有再講隔壁班。他改去找自己寫的字，手指停在那一筆上。"
            },
            "resultText": "梓軒撇撇嘴，卻沒有再講隔壁班。他改去找自己寫的字，手指停在那一筆上。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "w12_22_wall_display_class_work_showcase",
              "variantId": "competitive",
              "mustMatchEventTitle": "壁報／班際作品展示"
            }
          },
          {
            "id": "w12_22_wall_display_class_work_showcase_competitive_choice_3",
            "text": "問他哪裡最好。",
            "buttonText": "問他哪裡最好。",
            "playerLine": "你覺得邊度最好？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_22_wall_display_class_work_showcase_competitive_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒想了一會兒，指向標題：「呢度。」他沒有說是自己寫的，但你看得出來。"
            },
            "resultText": "梓軒想了一會兒，指向標題：「呢度。」他沒有說是自己寫的，但你看得出來。",
            "statusDelta": {
              "自信": 1,
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
              "eventId": "w12_22_wall_display_class_work_showcase",
              "variantId": "competitive",
              "mustMatchEventTitle": "壁報／班際作品展示"
            }
          },
          {
            "id": "w12_22_wall_display_class_work_showcase_competitive_choice_4",
            "text": "陪他看別班。",
            "buttonText": "陪他看別班。",
            "playerLine": "睇埋其他班啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_22_wall_display_class_work_showcase_competitive_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你們一路看下去，梓軒每張都要比較一下。你有點累，但也看見很多不一樣的做法。"
            },
            "resultText": "你們一路看下去，梓軒每張都要比較一下。你有點累，但也看見很多不一樣的做法。",
            "statusDelta": {
              "自信": 1,
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
              "eventId": "w12_22_wall_display_class_work_showcase",
              "variantId": "competitive",
              "mustMatchEventTitle": "壁報／班際作品展示"
            }
          }
        ]
      },
      {
        "variantId": "curious",
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_mischief_maker",
        "npcIdHint": "classmate_curious_troublemaker",
        "npcNameFallback": "柏宇",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "柏宇",
            "text": "柏宇第一眼就找那個被縮小的「雲怪」。他蹲低一點，指著角落：「佢仲喺度！冇俾老師撕走！」"
          }
        ],
        "playerChoices": [
          {
            "id": "w12_22_wall_display_class_work_showcase_curious_choice_1",
            "text": "幫雲怪改名。",
            "buttonText": "幫雲怪改名。",
            "playerLine": "佢叫守門雲怪啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_22_wall_display_class_work_showcase_curious_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇立刻笑了，像那隻小怪真的有了名字。壁報角落變成你們的小秘密。"
            },
            "resultText": "柏宇立刻笑了，像那隻小怪真的有了名字。壁報角落變成你們的小秘密。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "w12_22_wall_display_class_work_showcase",
              "variantId": "curious",
              "mustMatchEventTitle": "壁報／班際作品展示"
            }
          },
          {
            "id": "w12_22_wall_display_class_work_showcase_curious_choice_2",
            "text": "叫他小聲點。",
            "buttonText": "叫他小聲點。",
            "playerLine": "細聲啲啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_22_wall_display_class_work_showcase_curious_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇把聲音壓低，但笑還是藏不住。旁邊同學沒有聽清楚，你們的角落保住了。"
            },
            "resultText": "柏宇把聲音壓低，但笑還是藏不住。旁邊同學沒有聽清楚，你們的角落保住了。",
            "statusDelta": {
              "自信": 1,
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
              "eventId": "w12_22_wall_display_class_work_showcase",
              "variantId": "curious",
              "mustMatchEventTitle": "壁報／班際作品展示"
            }
          },
          {
            "id": "w12_22_wall_display_class_work_showcase_curious_choice_3",
            "text": "說老師也看得懂。",
            "buttonText": "說老師也看得懂。",
            "playerLine": "老師應該睇得明啩。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_22_wall_display_class_work_showcase_curious_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇看著雲怪，說老師可能以為是雲。這個答案讓他更高興，因為秘密藏得剛剛好。"
            },
            "resultText": "柏宇看著雲怪，說老師可能以為是雲。這個答案讓他更高興，因為秘密藏得剛剛好。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "w12_22_wall_display_class_work_showcase",
              "variantId": "curious",
              "mustMatchEventTitle": "壁報／班際作品展示"
            }
          },
          {
            "id": "w12_22_wall_display_class_work_showcase_curious_choice_4",
            "text": "看其他細節。",
            "buttonText": "看其他細節。",
            "playerLine": "睇下仲有咩細位。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_22_wall_display_class_work_showcase_curious_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你們沿著壁報找細節，找到了穎心的花、家朗貼的字和梓軒寫的標題。那張紙像真的有你們一組人。"
            },
            "resultText": "你們沿著壁報找細節，找到了穎心的花、家朗貼的字和梓軒寫的標題。那張紙像真的有你們一組人。",
            "statusDelta": {
              "自信": 1,
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
              "eventId": "w12_22_wall_display_class_work_showcase",
              "variantId": "curious",
              "mustMatchEventTitle": "壁報／班際作品展示"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "w12_23_after_parent_day_family_reaction",
    "sourceTopicId": "W12-23",
    "weekPool": "W12_authored_weekly",
    "week": 12,
    "dateRange": "Nov 17–Nov 23",
    "category": "family",
    "title": "家長日後的家庭反應",
    "sceneIntro": "家長日之後，家裡的氣氛有點不一樣。大人從學校回來，手上拿著手冊、幾張通告和老師給的提醒。你很想知道老師說了甚麼，又有點怕知道得太清楚。",
    "propertyValidation": null,
    "sceneIntroOverrides": [],
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        12,
        12
      ],
      "conditions": [],
      "exclusiveGroup": "w12_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "mom",
        "variantType": "family",
        "identityTypeId": "family_elder",
        "personalityId": null,
        "npcIdHint": "char_mom",
        "npcNameFallback": "媽媽",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "媽媽",
            "text": "媽媽把手冊放到桌上，先說：「老師話你開始適應咗，但有啲嘢要再穩啲。」她沒有立刻罵人，只把手冊翻到其中一頁。"
          }
        ],
        "playerChoices": [
          {
            "id": "w12_23_after_parent_day_family_reaction_mom_choice_1",
            "text": "問要穩咩。",
            "buttonText": "問要穩咩。",
            "playerLine": "咩要穩啲？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_23_after_parent_day_family_reaction_mom_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽指著改正和收拾書包。這兩件事很普通，但被老師講出來後，像變成接下來要留意的事。"
            },
            "resultText": "媽媽指著改正和收拾書包。這兩件事很普通，但被老師講出來後，像變成接下來要留意的事。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_23_after_parent_day_family_reaction",
              "variantId": "mom",
              "mustMatchEventTitle": "家長日後的家庭反應"
            }
          },
          {
            "id": "w12_23_after_parent_day_family_reaction_mom_choice_2",
            "text": "問老師有冇讚。",
            "buttonText": "問老師有冇讚。",
            "playerLine": "老師有冇讚我？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_23_after_parent_day_family_reaction_mom_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽笑了一下，說有講你會問問題。你聽見那句，心裡先亮了一下，再想起還有要改的地方。"
            },
            "resultText": "媽媽笑了一下，說有講你會問問題。你聽見那句，心裡先亮了一下，再想起還有要改的地方。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_23_after_parent_day_family_reaction",
              "variantId": "mom",
              "mustMatchEventTitle": "家長日後的家庭反應"
            }
          },
          {
            "id": "w12_23_after_parent_day_family_reaction_mom_choice_3",
            "text": "說我會試。",
            "buttonText": "說我會試。",
            "playerLine": "我會試下。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_23_after_parent_day_family_reaction_mom_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽沒有要求你馬上保證很多，只說明天先從手冊開始。那個「明天」聽起來比較做到。"
            },
            "resultText": "媽媽沒有要求你馬上保證很多，只說明天先從手冊開始。那個「明天」聽起來比較做到。",
            "statusDelta": {
              "紀律": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": -1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_23_after_parent_day_family_reaction",
              "variantId": "mom",
              "mustMatchEventTitle": "家長日後的家庭反應"
            }
          },
          {
            "id": "w12_23_after_parent_day_family_reaction_mom_choice_4",
            "text": "不想聽。",
            "buttonText": "不想聽。",
            "playerLine": "我唔想聽住。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_23_after_parent_day_family_reaction_mom_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽停了一下，把手冊合上。她說等你食完飯再講，你鬆了一口氣，但知道它還會回來。"
            },
            "resultText": "媽媽停了一下，把手冊合上。她說等你食完飯再講，你鬆了一口氣，但知道它還會回來。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_23_after_parent_day_family_reaction",
              "variantId": "mom",
              "mustMatchEventTitle": "家長日後的家庭反應"
            }
          }
        ]
      },
      {
        "variantId": "dad",
        "variantType": "family",
        "identityTypeId": "family_elder",
        "personalityId": null,
        "npcIdHint": "char_dad",
        "npcNameFallback": "爸爸",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "爸爸",
            "text": "爸爸回來後把外套放下，語氣比平時慢：「老師講你有進步，不過有時會唔出聲。」他沒有問你為甚麼，只看著你等你反應。"
          }
        ],
        "playerChoices": [
          {
            "id": "w12_23_after_parent_day_family_reaction_dad_choice_1",
            "text": "我有時唔知講咩。",
            "buttonText": "我有時唔知講咩。",
            "playerLine": "我有時唔知講咩。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_23_after_parent_day_family_reaction_dad_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸點頭，說可以先舉手問一句。這不是很大的方法，但比「要勇敢」容易一點。"
            },
            "resultText": "爸爸點頭，說可以先舉手問一句。這不是很大的方法，但比「要勇敢」容易一點。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_23_after_parent_day_family_reaction",
              "variantId": "dad",
              "mustMatchEventTitle": "家長日後的家庭反應"
            }
          },
          {
            "id": "w12_23_after_parent_day_family_reaction_dad_choice_2",
            "text": "老師有講同學嗎？",
            "buttonText": "老師有講同學嗎？",
            "playerLine": "老師有冇講我同同學？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_23_after_parent_day_family_reaction_dad_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸說有提到你開始認得幾個同學名。你想起那些名字，學校忽然比較不像一間大樓。"
            },
            "resultText": "爸爸說有提到你開始認得幾個同學名。你想起那些名字，學校忽然比較不像一間大樓。",
            "statusDelta": {
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": -1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_23_after_parent_day_family_reaction",
              "variantId": "dad",
              "mustMatchEventTitle": "家長日後的家庭反應"
            }
          },
          {
            "id": "w12_23_after_parent_day_family_reaction_dad_choice_3",
            "text": "問是不是不好。",
            "buttonText": "問是不是不好。",
            "playerLine": "咁係咪唔好？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_23_after_parent_day_family_reaction_dad_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸搖頭，說不是不好，是還在學。你聽見「還在學」，比聽見「做錯」舒服一點。"
            },
            "resultText": "爸爸搖頭，說不是不好，是還在學。你聽見「還在學」，比聽見「做錯」舒服一點。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_23_after_parent_day_family_reaction",
              "variantId": "dad",
              "mustMatchEventTitle": "家長日後的家庭反應"
            }
          },
          {
            "id": "w12_23_after_parent_day_family_reaction_dad_choice_4",
            "text": "只點頭。",
            "buttonText": "只點頭。",
            "playerLine": "嗯。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_23_after_parent_day_family_reaction_dad_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸沒有逼你講很多，只把手冊放在桌上。你點頭後，心裡仍有一點東西想問，但還未出口。"
            },
            "resultText": "爸爸沒有逼你講很多，只把手冊放在桌上。你點頭後，心裡仍有一點東西想問，但還未出口。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_23_after_parent_day_family_reaction",
              "variantId": "dad",
              "mustMatchEventTitle": "家長日後的家庭反應"
            }
          }
        ]
      },
      {
        "variantId": "face_family",
        "variantType": "family",
        "identityTypeId": "family_elder",
        "personalityId": null,
        "npcIdHint": "family_face_reaction",
        "npcNameFallback": "家人",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "家人",
            "text": "家裡有人很在意老師有沒有講好話。親戚或長輩問：「老師點講呀？有冇話你乖？」媽媽還沒回答，你已經先感覺到那個問題很重。"
          }
        ],
        "playerChoices": [
          {
            "id": "w12_23_after_parent_day_family_reaction_face_family_choice_1",
            "text": "說有準時交功課。",
            "buttonText": "說有準時交功課。",
            "playerLine": "我有交功課。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_23_after_parent_day_family_reaction_face_family_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "長輩點頭說這樣就好，又想問成績。你說的是一件真的事情，但好像還不夠他們聽。"
            },
            "resultText": "長輩點頭說這樣就好，又想問成績。你說的是一件真的事情，但好像還不夠他們聽。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_23_after_parent_day_family_reaction",
              "variantId": "face_family",
              "mustMatchEventTitle": "家長日後的家庭反應"
            }
          },
          {
            "id": "w12_23_after_parent_day_family_reaction_face_family_choice_2",
            "text": "望向媽媽。",
            "buttonText": "望向媽媽。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_23_after_parent_day_family_reaction_face_family_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽替你說老師也有講進步。你沒有自己回答，但那個問題被大人接住了一半。"
            },
            "resultText": "媽媽替你說老師也有講進步。你沒有自己回答，但那個問題被大人接住了一半。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_23_after_parent_day_family_reaction",
              "variantId": "face_family",
              "mustMatchEventTitle": "家長日後的家庭反應"
            }
          },
          {
            "id": "w12_23_after_parent_day_family_reaction_face_family_choice_3",
            "text": "說老師講我要收拾。",
            "buttonText": "說老師講我要收拾。",
            "playerLine": "老師話我要執好啲。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_23_after_parent_day_family_reaction_face_family_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "長輩「哦」了一聲。這不是最好聽的答案，但它是真的，媽媽也沒有否認你。"
            },
            "resultText": "長輩「哦」了一聲。這不是最好聽的答案，但它是真的，媽媽也沒有否認你。",
            "statusDelta": {
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_23_after_parent_day_family_reaction",
              "variantId": "face_family",
              "mustMatchEventTitle": "家長日後的家庭反應"
            }
          },
          {
            "id": "w12_23_after_parent_day_family_reaction_face_family_choice_4",
            "text": "不想講家長日。",
            "buttonText": "不想講家長日。",
            "playerLine": "我唔想講。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_23_after_parent_day_family_reaction_face_family_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "桌上安靜了一下。媽媽把話題轉到晚飯，你避開了被追問，但氣氛還有一點硬。"
            },
            "resultText": "桌上安靜了一下。媽媽把話題轉到晚飯，你避開了被追問，但氣氛還有一點硬。",
            "statusDelta": {
              "自信": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": -1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_23_after_parent_day_family_reaction",
              "variantId": "face_family",
              "mustMatchEventTitle": "家長日後的家庭反應"
            }
          }
        ]
      },
      {
        "variantId": "warm_family",
        "variantType": "family",
        "identityTypeId": "family_elder",
        "personalityId": null,
        "npcIdHint": "family_warm_reaction",
        "npcNameFallback": "家人",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "家人",
            "text": "大人坐下後，沒有立刻問分數。媽媽或爸爸先問：「你想唔想知老師講咩？」那句不像考問，比較像把門打開一點。"
          }
        ],
        "playerChoices": [
          {
            "id": "w12_23_after_parent_day_family_reaction_warm_family_choice_1",
            "text": "想知。",
            "buttonText": "想知。",
            "playerLine": "想。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_23_after_parent_day_family_reaction_warm_family_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "大人慢慢講老師提到的幾件事：有進步，也有要練。你聽到一半緊張，一半又想知道多點。"
            },
            "resultText": "大人慢慢講老師提到的幾件事：有進步，也有要練。你聽到一半緊張，一半又想知道多點。",
            "statusDelta": {
              "自信": 1,
              "壓力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_23_after_parent_day_family_reaction",
              "variantId": "warm_family",
              "mustMatchEventTitle": "家長日後的家庭反應"
            }
          },
          {
            "id": "w12_23_after_parent_day_family_reaction_warm_family_choice_2",
            "text": "唔想知住。",
            "buttonText": "唔想知住。",
            "playerLine": "唔想知住。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_23_after_parent_day_family_reaction_warm_family_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "大人說可以等一會兒。你沒有逃掉所有事情，但至少可以先吃飯。"
            },
            "resultText": "大人說可以等一會兒。你沒有逃掉所有事情，但至少可以先吃飯。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_23_after_parent_day_family_reaction",
              "variantId": "warm_family",
              "mustMatchEventTitle": "家長日後的家庭反應"
            }
          },
          {
            "id": "w12_23_after_parent_day_family_reaction_warm_family_choice_3",
            "text": "先講好事。",
            "buttonText": "先講好事。",
            "playerLine": "可唔可以先講好嘅？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_23_after_parent_day_family_reaction_warm_family_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "大人笑了一下，先講你有記得交手冊。你聽完後，比較有力氣聽後面的提醒。"
            },
            "resultText": "大人笑了一下，先講你有記得交手冊。你聽完後，比較有力氣聽後面的提醒。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "trust",
                "amount": -1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_23_after_parent_day_family_reaction",
              "variantId": "warm_family",
              "mustMatchEventTitle": "家長日後的家庭反應"
            }
          },
          {
            "id": "w12_23_after_parent_day_family_reaction_warm_family_choice_4",
            "text": "問有冇講朋友。",
            "buttonText": "問有冇講朋友。",
            "playerLine": "老師有冇講我啲同學？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_23_after_parent_day_family_reaction_warm_family_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "大人說有提到你開始和同學一起做小組。你想起壁報那張紙，家長日忽然不只是分數。"
            },
            "resultText": "大人說有提到你開始和同學一起做小組。你想起壁報那張紙，家長日忽然不只是分數。",
            "statusDelta": {
              "自信": 1,
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
              "eventId": "w12_23_after_parent_day_family_reaction",
              "variantId": "warm_family",
              "mustMatchEventTitle": "家長日後的家庭反應"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "w12_24_first_term_midpoint_observation",
    "sourceTopicId": "W12-24",
    "weekPool": "W12_authored_weekly",
    "week": 12,
    "dateRange": "Nov 17–Nov 23",
    "category": "school",
    "title": "第一學期中段觀察",
    "sceneIntro": "十二週過去，課室已經不像第一天那麼陌生。你知道手冊放哪裡，知道小息隊伍大概怎樣排，也認得幾個同學和高年級學生。老師沒有派正式成績表，只是在一個普通下午，趁大家收拾時叫你過去說幾句。",
    "propertyValidation": {
      "purpose": "natural_scene_branching_only",
      "note": "這條最適合做綜合 observation。學業線看功課和改正；社交線看是否有固定同學互動；自信線看是否敢問問題或報活動；理智線看是否常緊張或太累；創意／活動線看壁報、畫畫、朗誦、運動日是否留下痕跡。variation 只決定老師觀察哪一面，不判成功失敗。",
      "ordinaryVersionAlwaysAvailable": true,
      "hideLockedChoices": true
    },
    "sceneIntroOverrides": [
      {
        "eligibleWhen": "TODO_from_author_property_note",
        "note": "這條最適合做綜合 observation。學業線看功課和改正；社交線看是否有固定同學互動；自信線看是否敢問問題或報活動；理智線看是否常緊張或太累；創意／活動線看壁報、畫畫、朗誦、運動日是否留下痕跡。variation 只決定老師觀察哪一面，不判成功失敗。"
      }
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        12,
        12
      ],
      "conditions": [],
      "exclusiveGroup": "w12_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_w7_w12",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "strict_teacher",
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": "pers_strict_academic",
        "npcIdHint": "teacher_strict_academic",
        "npcNameFallback": "老師",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師把你的手冊和幾本簿放在桌上，沒有立刻打開很厚的紀錄，只指著其中一頁：「你而家比開學時清楚咗，但改正唔可以拖太耐。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w12_24_first_term_midpoint_observation_strict_teacher_choice_1",
            "text": "問哪本未改。",
            "buttonText": "問哪本未改。",
            "playerLine": "邊本未改呀？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_24_first_term_midpoint_observation_strict_teacher_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師翻到那一頁給你看。答案不算好聽，但它是一頁紙，不是一整個你都不好。"
            },
            "resultText": "老師翻到那一頁給你看。答案不算好聽，但它是一頁紙，不是一整個你都不好。",
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
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_24_first_term_midpoint_observation",
              "variantId": "strict_teacher",
              "mustMatchEventTitle": "第一學期中段觀察"
            }
          },
          {
            "id": "w12_24_first_term_midpoint_observation_strict_teacher_choice_2",
            "text": "說我會今日做。",
            "buttonText": "說我會今日做。",
            "playerLine": "我今日做返。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_24_first_term_midpoint_observation_strict_teacher_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師點頭：「講咗就要做。」那句很硬，但也把事情限在今天。"
            },
            "resultText": "老師點頭：「講咗就要做。」那句很硬，但也把事情限在今天。",
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
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_24_first_term_midpoint_observation",
              "variantId": "strict_teacher",
              "mustMatchEventTitle": "第一學期中段觀察"
            }
          },
          {
            "id": "w12_24_first_term_midpoint_observation_strict_teacher_choice_3",
            "text": "低頭聽。",
            "buttonText": "低頭聽。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_24_first_term_midpoint_observation_strict_teacher_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你低頭聽老師說完。她沒有罵很久，但你知道改正這件事不會自己消失。"
            },
            "resultText": "你低頭聽老師說完。她沒有罵很久，但你知道改正這件事不會自己消失。",
            "statusDelta": {
              "學業": 1,
              "壓力": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_24_first_term_midpoint_observation",
              "variantId": "strict_teacher",
              "mustMatchEventTitle": "第一學期中段觀察"
            }
          },
          {
            "id": "w12_24_first_term_midpoint_observation_strict_teacher_choice_4",
            "text": "問有沒有做好。",
            "buttonText": "問有沒有做好。",
            "playerLine": "我有冇做得好啲？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_24_first_term_midpoint_observation_strict_teacher_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師停了一下，說你最近手冊比較少漏。嚴格老師的稱讚很短，但你聽得很清楚。"
            },
            "resultText": "老師停了一下，說你最近手冊比較少漏。嚴格老師的稱讚很短，但你聽得很清楚。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_24_first_term_midpoint_observation",
              "variantId": "strict_teacher",
              "mustMatchEventTitle": "第一學期中段觀察"
            }
          }
        ]
      },
      {
        "variantId": "encouraging_teacher",
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": "pers_encouraging_mentor",
        "npcIdHint": "teacher_encouraging_mentor",
        "npcNameFallback": "老師",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師叫你到桌邊，笑著說：「你記唔記得第一週點名時好細聲？而家你有時會自己問問題。」她沒有說你變得很厲害，只說：「呢個係進步。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w12_24_first_term_midpoint_observation_encouraging_teacher_choice_1",
            "text": "我有問問題。",
            "buttonText": "我有問問題。",
            "playerLine": "我有問過。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_24_first_term_midpoint_observation_encouraging_teacher_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師點頭，說不明白時問，是很重要的事。你想起自己第一次舉手，原來那也算數。"
            },
            "resultText": "老師點頭，說不明白時問，是很重要的事。你想起自己第一次舉手，原來那也算數。",
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
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_24_first_term_midpoint_observation",
              "variantId": "encouraging_teacher",
              "mustMatchEventTitle": "第一學期中段觀察"
            }
          },
          {
            "id": "w12_24_first_term_midpoint_observation_encouraging_teacher_choice_2",
            "text": "我仲會驚。",
            "buttonText": "我仲會驚。",
            "playerLine": "但我仲會驚。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_24_first_term_midpoint_observation_encouraging_teacher_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說會驚也可以，重點是你有沒有試。那句沒有把害怕趕走，但讓害怕站遠一點。"
            },
            "resultText": "老師說會驚也可以，重點是你有沒有試。那句沒有把害怕趕走，但讓害怕站遠一點。",
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
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_24_first_term_midpoint_observation",
              "variantId": "encouraging_teacher",
              "mustMatchEventTitle": "第一學期中段觀察"
            }
          },
          {
            "id": "w12_24_first_term_midpoint_observation_encouraging_teacher_choice_3",
            "text": "問下一步做咩。",
            "buttonText": "問下一步做咩。",
            "playerLine": "咁我下一步做咩？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_24_first_term_midpoint_observation_encouraging_teacher_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說可以試著早一點拿出手冊和改正。下一步很小，但正因為小，像可以做到。"
            },
            "resultText": "老師說可以試著早一點拿出手冊和改正。下一步很小，但正因為小，像可以做到。",
            "statusDelta": {
              "自信": 1,
              "紀律": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_24_first_term_midpoint_observation",
              "variantId": "encouraging_teacher",
              "mustMatchEventTitle": "第一學期中段觀察"
            }
          },
          {
            "id": "w12_24_first_term_midpoint_observation_encouraging_teacher_choice_4",
            "text": "只笑一下。",
            "buttonText": "只笑一下。",
            "playerLine": "……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_24_first_term_midpoint_observation_encouraging_teacher_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有說話，只笑了一下。老師沒有逼你講感受，只讓你把那句進步帶回座位。"
            },
            "resultText": "你沒有說話，只笑了一下。老師沒有逼你講感受，只讓你把那句進步帶回座位。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_24_first_term_midpoint_observation",
              "variantId": "encouraging_teacher",
              "mustMatchEventTitle": "第一學期中段觀察"
            }
          }
        ]
      },
      {
        "variantId": "fair_teacher",
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": "pers_fair_observer",
        "npcIdHint": "teacher_fair_observer",
        "npcNameFallback": "老師",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師攤開幾件事情：功課、值日、小組、活動。她說：「我唔係只睇一日。你有時先觀察先做，有時又會慢少少開口。呢個我見到。」"
          }
        ],
        "playerChoices": [
          {
            "id": "w12_24_first_term_midpoint_observation_fair_teacher_choice_1",
            "text": "問這樣好不好。",
            "buttonText": "問這樣好不好。",
            "playerLine": "咁係好定唔好？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_24_first_term_midpoint_observation_fair_teacher_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說不是簡單好壞，要看時候。小組工作有時要早點講，找位置時觀察就有用。"
            },
            "resultText": "老師說不是簡單好壞，要看時候。小組工作有時要早點講，找位置時觀察就有用。",
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
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_24_first_term_midpoint_observation",
              "variantId": "fair_teacher",
              "mustMatchEventTitle": "第一學期中段觀察"
            }
          },
          {
            "id": "w12_24_first_term_midpoint_observation_fair_teacher_choice_2",
            "text": "說我會慢。",
            "buttonText": "說我會慢。",
            "playerLine": "我有時會慢。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_24_first_term_midpoint_observation_fair_teacher_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師點頭：「慢唔係錯，但要知道幾時要出聲。」你第一次聽到慢不是錯，只是有時要調整。"
            },
            "resultText": "老師點頭：「慢唔係錯，但要知道幾時要出聲。」你第一次聽到慢不是錯，只是有時要調整。",
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
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_24_first_term_midpoint_observation",
              "variantId": "fair_teacher",
              "mustMatchEventTitle": "第一學期中段觀察"
            }
          },
          {
            "id": "w12_24_first_term_midpoint_observation_fair_teacher_choice_3",
            "text": "講壁報的事。",
            "buttonText": "講壁報的事。",
            "playerLine": "壁報嗰次我有做。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_24_first_term_midpoint_observation_fair_teacher_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說她有看見你那一角。你不確定她看見多少，但那張走廊上的紙被記住了。"
            },
            "resultText": "老師說她有看見你那一角。你不確定她看見多少，但那張走廊上的紙被記住了。",
            "statusDelta": {
              "創意": 1
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
              "eventId": "w12_24_first_term_midpoint_observation",
              "variantId": "fair_teacher",
              "mustMatchEventTitle": "第一學期中段觀察"
            }
          },
          {
            "id": "w12_24_first_term_midpoint_observation_fair_teacher_choice_4",
            "text": "問同學有沒有講我。",
            "buttonText": "問同學有沒有講我。",
            "playerLine": "同學有冇講我？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_24_first_term_midpoint_observation_fair_teacher_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師沒有直接說別人怎樣評你，只說你開始和同學有互動。這句讓你想起幾個名字。"
            },
            "resultText": "老師沒有直接說別人怎樣評你，只說你開始和同學有互動。這句讓你想起幾個名字。",
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
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_24_first_term_midpoint_observation",
              "variantId": "fair_teacher",
              "mustMatchEventTitle": "第一學期中段觀察"
            }
          }
        ]
      },
      {
        "variantId": "caring_teacher",
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "personalityId": "pers_pastoral_care_teacher",
        "npcIdHint": "teacher_pastoral_care",
        "npcNameFallback": "老師",
        "unknownDisplayName": null,
        "knownDisplayName": null,
        "unlockCharacterId": null,
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "老師看著你，語氣比平時低一點：「最近有幾日你好似好攰。係功課多，定係返屋企太夜瞓？」她沒有翻簿，先問你人怎樣。"
          }
        ],
        "playerChoices": [
          {
            "id": "w12_24_first_term_midpoint_observation_caring_teacher_choice_1",
            "text": "說有啲攰。",
            "buttonText": "說有啲攰。",
            "playerLine": "我有啲攰。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_24_first_term_midpoint_observation_caring_teacher_choice_1"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師點頭，說今晚可以早點收拾書包，少一件睡前要急的事。她沒有把累當成懶。"
            },
            "resultText": "老師點頭，說今晚可以早點收拾書包，少一件睡前要急的事。她沒有把累當成懶。",
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
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_24_first_term_midpoint_observation",
              "variantId": "caring_teacher",
              "mustMatchEventTitle": "第一學期中段觀察"
            }
          },
          {
            "id": "w12_24_first_term_midpoint_observation_caring_teacher_choice_2",
            "text": "說我唔知。",
            "buttonText": "說我唔知。",
            "playerLine": "我唔知點解。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_24_first_term_midpoint_observation_caring_teacher_choice_2"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師沒有逼你找原因，只說先留意哪幾天最累。你不用立刻回答一個大問題。"
            },
            "resultText": "老師沒有逼你找原因，只說先留意哪幾天最累。你不用立刻回答一個大問題。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_24_first_term_midpoint_observation",
              "variantId": "caring_teacher",
              "mustMatchEventTitle": "第一學期中段觀察"
            }
          },
          {
            "id": "w12_24_first_term_midpoint_observation_caring_teacher_choice_3",
            "text": "問會不會告訴家長。",
            "buttonText": "問會不會告訴家長。",
            "playerLine": "你會唔會同屋企講？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_24_first_term_midpoint_observation_caring_teacher_choice_3"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說如果需要，她會和家人一起想方法，不是投訴。你還是緊張，但沒那麼像被告狀。"
            },
            "resultText": "老師說如果需要，她會和家人一起想方法，不是投訴。你還是緊張，但沒那麼像被告狀。",
            "statusDelta": {
              "自信": 1,
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "dimension": "respect",
                "amount": 1
              }
            ],
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_24_first_term_midpoint_observation",
              "variantId": "caring_teacher",
              "mustMatchEventTitle": "第一學期中段觀察"
            }
          },
          {
            "id": "w12_24_first_term_midpoint_observation_caring_teacher_choice_4",
            "text": "只點頭。",
            "buttonText": "只點頭。",
            "playerLine": "嗯。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [
              "w12_24_first_term_midpoint_observation_caring_teacher_choice_4"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師讓你先回座位，沒有追問。你坐下後，才發現自己真的很想喝水。"
            },
            "resultText": "老師讓你先回座位，沒有追問。你坐下後，才發現自己真的很想喝水。",
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
            "skillExpDelta": {},
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w12_24_first_term_midpoint_observation",
              "variantId": "caring_teacher",
              "mustMatchEventTitle": "第一學期中段觀察"
            }
          }
        ]
      }
    ]
  }
];
