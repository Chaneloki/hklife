// data/authored/openingEventPool_s2_w1_w6_v0_5.js
// Generated structural data from info/s2_w1_w6_dialogue_draft_v0_5.md.
// Authored source of truth: do not edit wording here unless the source MD changes.

export const sameAgeNeighborPool = [
  {
    "id": "neighbor_lokyin",
    "identityTypeId": "same_age_neighbor",
    "personalityId": "pers_neighbor_quick_invite",
    "fixedName": "樂言",
    "unknownDisplayName": "同座小朋友",
    "knownDisplayName": "樂言",
    "label": "快手邀請型",
    "iconPath": "/assets/icons/characters/same_age_neighbor/icon_樂言.png"
  },
  {
    "id": "neighbor_wingching",
    "identityTypeId": "same_age_neighbor",
    "personalityId": "pers_neighbor_quiet_collect",
    "fixedName": "詠晴",
    "unknownDisplayName": "平台女孩",
    "knownDisplayName": "詠晴",
    "label": "安靜收藏型",
    "iconPath": "/assets/icons/characters/same_age_neighbor/icon_詠晴.png"
  },
  {
    "id": "neighbor_holong",
    "identityTypeId": "same_age_neighbor",
    "personalityId": "pers_neighbor_showy_toy",
    "fixedName": "皓朗",
    "unknownDisplayName": "拿貼紙的小朋友",
    "knownDisplayName": "皓朗",
    "label": "玩具展示型",
    "iconPath": "/assets/icons/characters/same_age_neighbor/icon_皓朗.png"
  },
  {
    "id": "neighbor_manhei",
    "identityTypeId": "same_age_neighbor",
    "personalityId": "pers_neighbor_adult_bridge",
    "fixedName": "敏希",
    "unknownDisplayName": "跟著家長的小朋友",
    "knownDisplayName": "敏希",
    "label": "家長牽線型",
    "iconPath": "/assets/icons/characters/same_age_neighbor/icon_敏希.png"
  }
];

export const selectedNeighborRule = {
  "selectAt": "S2-W1-2",
  "requiredFirstNeighborEvent": true,
  "pool": [
    "neighbor_lokyin",
    "neighbor_wingching",
    "neighbor_holong",
    "neighbor_manhei"
  ],
  "persistKey": "primarySameAgeNeighborId",
  "nameKnownFlag": "primarySameAgeNeighborNameKnown",
  "displayNameRule": "primarySameAgeNeighborNameKnown ? selectedNeighbor.knownDisplayName : selectedNeighbor.unknownDisplayName",
  "activeMessage": false,
  "doNotRerollWithinSave": true
};

export const hkLifeSimulatorOpeningEventDialogueS2W1W6 = [
  {
    "id": "s2_w1_1_christmas_holiday_first_day_family_rhythm",
    "sourceTopicId": "S2-W1-1",
    "weekPool": "S2-W1_authored_weekly",
    "termId": "term_p1_s2",
    "week": 1,
    "category": "holiday",
    "title": "聖誕假期第一天的家庭節奏",
    "sceneIntro": "第一天不用返學，房間沒有校服袋的聲音，也沒有大人催你快點刷牙。可是家裡不是完全停下來，廚房仍然有人走動，電話仍然會響，手冊和假期功課也還在書包裡。你慢慢醒來，覺得今天好像很自由，又好像不是完全自由。",
    "metadata": {
      "sourceMarkdown": "info/s2_w1_w6_dialogue_draft_v0_5.md",
      "sourceTitle": "S2-W1–S2-W6｜聖誕假期到農曆新年後｜事件對話草稿 v0.5",
      "uiHidden": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        1,
        1
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w1_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w1_w6",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "sleep_late",
        "variantTitle": "不用早起",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "你醒來時，窗簾邊已經有光。家人從門外探頭：「今日唔使返學，瞓多陣都得。不過唔好瞓到食晏。」屋企沒有平日早上的腳步聲，你一時不知道應該繼續躺著，還是起身。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w1_1_christmas_holiday_first_day_family_rhythm_sleep_late_choice_1",
            "text": "再躺一陣。",
            "buttonText": "再躺一陣。",
            "playerLine": "我再瞓陣。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把被拉高一點。外面有人開雪櫃，你聽見杯子碰到桌面的聲音，假期像真的慢了一點。"
            },
            "resultText": "你把被拉高一點。外面有人開雪櫃，你聽見杯子碰到桌面的聲音，假期像真的慢了一點。",
            "statusDelta": {
              "學業": 1,
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
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w1_1_christmas_holiday_first_day_family_rhythm",
              "variantId": "sleep_late",
              "mustMatchEventTitle": "聖誕假期第一天的家庭節奏"
            }
          },
          {
            "id": "s2_w1_1_christmas_holiday_first_day_family_rhythm_sleep_late_choice_2",
            "text": "起身看看。",
            "buttonText": "起身看看。",
            "playerLine": "我起身啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你坐起來，腳碰到地板時還有點凍。今天沒有校服要穿，但你還是下意識去看書包在哪裡。"
            },
            "resultText": "你坐起來，腳碰到地板時還有點凍。今天沒有校服要穿，但你還是下意識去看書包在哪裡。",
            "statusDelta": {
              "學業": 1,
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
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w1_1_christmas_holiday_first_day_family_rhythm",
              "variantId": "sleep_late",
              "mustMatchEventTitle": "聖誕假期第一天的家庭節奏"
            }
          },
          {
            "id": "s2_w1_1_christmas_holiday_first_day_family_rhythm_sleep_late_choice_3",
            "text": "問今日做咩。",
            "buttonText": "問今日做咩。",
            "playerLine": "今日去邊呀？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說還未決定，可能去樓下，可能去商場，也可能只是買餸。原來假期第一天也不是一開始就有節目表。"
            },
            "resultText": "家人說還未決定，可能去樓下，可能去商場，也可能只是買餸。原來假期第一天也不是一開始就有節目表。",
            "statusDelta": {
              "學業": 1,
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
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w1_1_christmas_holiday_first_day_family_rhythm",
              "variantId": "sleep_late",
              "mustMatchEventTitle": "聖誕假期第一天的家庭節奏"
            }
          },
          {
            "id": "s2_w1_1_christmas_holiday_first_day_family_rhythm_sleep_late_choice_4",
            "text": "找書包。",
            "buttonText": "找書包。",
            "playerLine": "我個書包呢？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人笑了一下：「今日唔使咁急。」你看見書包靠在牆邊，像也在放假，但拉鍊裡還藏著功課。"
            },
            "resultText": "家人笑了一下：「今日唔使咁急。」你看見書包靠在牆邊，像也在放假，但拉鍊裡還藏著功課。",
            "statusDelta": {
              "學業": 1,
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
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w1_1_christmas_holiday_first_day_family_rhythm",
              "variantId": "sleep_late",
              "mustMatchEventTitle": "聖誕假期第一天的家庭節奏"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "slow_breakfast",
        "variantTitle": "早餐變慢",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "早餐沒有平日那麼急。飯桌上放著麵包、杯子和半包朱古力麥皮，家人一邊倒水一邊問：「今日想慢慢食，定係一陣先落街？」你坐在椅子上，發現不用邊食邊看鐘。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w1_1_christmas_holiday_first_day_family_rhythm_slow_breakfast_choice_1",
            "text": "慢慢食。",
            "buttonText": "慢慢食。",
            "playerLine": "我想慢慢食。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你咬了一口麵包，沒有立刻被催。窗外有車聲，但它好像跟你沒有太大關係。"
            },
            "resultText": "你咬了一口麵包，沒有立刻被催。窗外有車聲，但它好像跟你沒有太大關係。",
            "statusDelta": {
              "學業": 1,
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
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w1_1_christmas_holiday_first_day_family_rhythm",
              "variantId": "slow_breakfast",
              "mustMatchEventTitle": "聖誕假期第一天的家庭節奏"
            }
          },
          {
            "id": "s2_w1_1_christmas_holiday_first_day_family_rhythm_slow_breakfast_choice_2",
            "text": "問可不可以落街。",
            "buttonText": "問可不可以落街。",
            "playerLine": "食完可唔可以落樓下？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說要看天氣和有沒有人一起。你第一次想到，假期的活動也要等大人有空。"
            },
            "resultText": "家人說要看天氣和有沒有人一起。你第一次想到，假期的活動也要等大人有空。",
            "statusDelta": {
              "學業": 1,
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
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w1_1_christmas_holiday_first_day_family_rhythm",
              "variantId": "slow_breakfast",
              "mustMatchEventTitle": "聖誕假期第一天的家庭節奏"
            }
          },
          {
            "id": "s2_w1_1_christmas_holiday_first_day_family_rhythm_slow_breakfast_choice_3",
            "text": "拿起杯子發呆。",
            "buttonText": "拿起杯子發呆。",
            "playerLine": "……",
            "playerLineType": "silent",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把杯子轉來轉去，水面晃了一下。家人沒有立刻催你說話，只叫你不要打翻。"
            },
            "resultText": "你把杯子轉來轉去，水面晃了一下。家人沒有立刻催你說話，只叫你不要打翻。",
            "statusDelta": {
              "學業": 1,
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
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w1_1_christmas_holiday_first_day_family_rhythm",
              "variantId": "slow_breakfast",
              "mustMatchEventTitle": "聖誕假期第一天的家庭節奏"
            }
          },
          {
            "id": "s2_w1_1_christmas_holiday_first_day_family_rhythm_slow_breakfast_choice_4",
            "text": "想開電視。",
            "buttonText": "想開電視。",
            "playerLine": "可唔可以開電視？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說食完先。你把遙控器看了一眼，又把麵包拿起來，覺得今天的早上比平日長很多。"
            },
            "resultText": "家人說食完先。你把遙控器看了一眼，又把麵包拿起來，覺得今天的早上比平日長很多。",
            "statusDelta": {
              "學業": 1,
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
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w1_1_christmas_holiday_first_day_family_rhythm",
              "variantId": "slow_breakfast",
              "mustMatchEventTitle": "聖誕假期第一天的家庭節奏"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "family_discusses_where_to_go",
        "variantTitle": "家人討論去哪裡",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "飯桌旁，家人一邊看電話一邊說：「商場應該有聖誕燈，不過人可能好多。」另一個家人說：「去近啲啦，樓下平台都可以行吓。」你聽著他們說地點，好像每個地方都會變成今天的一個可能。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w1_1_christmas_holiday_first_day_family_rhythm_family_discusses_where_to_go_choice_1",
            "text": "想去商場。",
            "buttonText": "想去商場。",
            "playerLine": "我想睇聖誕燈。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說可以考慮，但要先收拾好。你突然覺得聖誕燈不是一講就會出現，中間還隔著換衫、等車和排隊。"
            },
            "resultText": "家人說可以考慮，但要先收拾好。你突然覺得聖誕燈不是一講就會出現，中間還隔著換衫、等車和排隊。",
            "statusDelta": {
              "學業": 1,
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
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w1_1_christmas_holiday_first_day_family_rhythm",
              "variantId": "family_discusses_where_to_go",
              "mustMatchEventTitle": "聖誕假期第一天的家庭節奏"
            }
          },
          {
            "id": "s2_w1_1_christmas_holiday_first_day_family_rhythm_family_discusses_where_to_go_choice_2",
            "text": "想去樓下。",
            "buttonText": "想去樓下。",
            "playerLine": "落樓下得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說樓下近一點，可以先去看看。你想到平台、升降機和保安亭，覺得假期好像從家門口開始。"
            },
            "resultText": "家人說樓下近一點，可以先去看看。你想到平台、升降機和保安亭，覺得假期好像從家門口開始。",
            "statusDelta": {
              "學業": 1,
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
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w1_1_christmas_holiday_first_day_family_rhythm",
              "variantId": "family_discusses_where_to_go",
              "mustMatchEventTitle": "聖誕假期第一天的家庭節奏"
            }
          },
          {
            "id": "s2_w1_1_christmas_holiday_first_day_family_rhythm_family_discusses_where_to_go_choice_3",
            "text": "問可不可以不出門。",
            "buttonText": "問可不可以不出門。",
            "playerLine": "唔出街得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說也可以，但不要一整天只攤在梳化。你點點頭，還未明白「休息」為甚麼也要有規矩。"
            },
            "resultText": "家人說也可以，但不要一整天只攤在梳化。你點點頭，還未明白「休息」為甚麼也要有規矩。",
            "statusDelta": {
              "學業": 1,
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
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w1_1_christmas_holiday_first_day_family_rhythm",
              "variantId": "family_discusses_where_to_go",
              "mustMatchEventTitle": "聖誕假期第一天的家庭節奏"
            }
          },
          {
            "id": "s2_w1_1_christmas_holiday_first_day_family_rhythm_family_discusses_where_to_go_choice_4",
            "text": "只聽大人講。",
            "buttonText": "只聽大人講。",
            "playerLine": "……",
            "playerLineType": "silent",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有插嘴，只把筷子放好。大人說來說去，最後還是說先食完早餐，今天慢慢來。"
            },
            "resultText": "你沒有插嘴，只把筷子放好。大人說來說去，最後還是說先食完早餐，今天慢慢來。",
            "statusDelta": {
              "學業": 1,
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
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w1_1_christmas_holiday_first_day_family_rhythm",
              "variantId": "family_discusses_where_to_go",
              "mustMatchEventTitle": "聖誕假期第一天的家庭節奏"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "holiday_not_fully_free",
        "variantTitle": "發現假期不是完全自由",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "你以為假期第一天可以一直玩。可是家人把手冊拿到桌上，又把一疊功課紙放旁邊：「唔係而家做晒，但要記得有。」聖誕貼紙和功課紙在同一張桌上，看起來有點奇怪。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w1_1_christmas_holiday_first_day_family_rhythm_holiday_not_fully_free_choice_1",
            "text": "今日唔想做。",
            "buttonText": "今日唔想做。",
            "playerLine": "今日唔做得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說可以不現在做，但不能完全不理。你鬆了一下，又覺得那疊紙像會等你回來。"
            },
            "resultText": "家人說可以不現在做，但不能完全不理。你鬆了一下，又覺得那疊紙像會等你回來。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w1_1_christmas_holiday_first_day_family_rhythm",
              "variantId": "holiday_not_fully_free",
              "mustMatchEventTitle": "聖誕假期第一天的家庭節奏"
            }
          },
          {
            "id": "s2_w1_1_christmas_holiday_first_day_family_rhythm_holiday_not_fully_free_choice_2",
            "text": "先看有幾多。",
            "buttonText": "先看有幾多。",
            "playerLine": "我睇吓有幾多先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把功課紙翻開，數到一半已經有點亂。家人幫你夾好，說不用一次做晒。"
            },
            "resultText": "你把功課紙翻開，數到一半已經有點亂。家人幫你夾好，說不用一次做晒。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w1_1_christmas_holiday_first_day_family_rhythm",
              "variantId": "holiday_not_fully_free",
              "mustMatchEventTitle": "聖誕假期第一天的家庭節奏"
            }
          },
          {
            "id": "s2_w1_1_christmas_holiday_first_day_family_rhythm_holiday_not_fully_free_choice_3",
            "text": "把功課放回書包。",
            "buttonText": "把功課放回書包。",
            "playerLine": "我放返入書包先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "拉鍊拉上時，你覺得事情被收起來了。可是一想到它還在裡面，心裡又像有個小角沒有放假。"
            },
            "resultText": "拉鍊拉上時，你覺得事情被收起來了。可是一想到它還在裡面，心裡又像有個小角沒有放假。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w1_1_christmas_holiday_first_day_family_rhythm",
              "variantId": "holiday_not_fully_free",
              "mustMatchEventTitle": "聖誕假期第一天的家庭節奏"
            }
          },
          {
            "id": "s2_w1_1_christmas_holiday_first_day_family_rhythm_holiday_not_fully_free_choice_4",
            "text": "問做完可不可以落街。",
            "buttonText": "問做完可不可以落街。",
            "playerLine": "做一頁可唔可以落街？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人想了想，說可以。你第一次發現假期也會有交換：做一點，玩一點。"
            },
            "resultText": "家人想了想，說可以。你第一次發現假期也會有交換：做一點，玩一點。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w1_1_christmas_holiday_first_day_family_rhythm",
              "variantId": "holiday_not_fully_free",
              "mustMatchEventTitle": "聖誕假期第一天的家庭節奏"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      }
    ]
  },
  {
    "id": "s2_w1_2_meet_primary_same_age_neighbor",
    "sourceTopicId": "S2-W1-2",
    "weekPool": "S2-W1_authored_weekly",
    "termId": "term_p1_s2",
    "week": 1,
    "category": "neighbor",
    "title": "樓下／屋苑平台遇到 {neighborDisplayName}（必出）",
    "sceneIntro": "午飯前，家人帶你落樓下走走。升降機門打開又關上，裡面有人拿著環保袋，也有人拖著小朋友的手。你平日返學趕著出門，很少看清楚同座有誰。今天不用穿校服，你才發現原來屋企附近也有跟你差不多大的小朋友。這一刻不是班房介紹，也沒有老師點名；只是屋苑裡兩個差不多年紀的小朋友，在升降機、平台和大人聊天的空隙裡，開始留意到對方。",
    "metadata": {
      "sourceMarkdown": "info/s2_w1_w6_dialogue_draft_v0_5.md",
      "sourceTitle": "S2-W1–S2-W6｜聖誕假期到農曆新年後｜事件對話草稿 v0.5",
      "uiHidden": true,
      "identityTypeId": "same_age_neighbor",
      "usesSelectedNeighbor": true,
      "activeMessage": false,
      "selectedNeighborPersonality": "persisted_from_S2-W1-2",
      "displayNameRule": "neighborDisplayName = primarySameAgeNeighborNameKnown ? selectedNeighbor.knownDisplayName : selectedNeighbor.unknownDisplayName",
      "requiredFirstNeighborEvent": true,
      "selectedNeighborSourceEvent": true,
      "variantSelectionMode": "selectedNeighborOnly",
      "selectedNeighborRule": {
        "selectAt": "S2-W1-2",
        "requiredFirstNeighborEvent": true,
        "pool": [
          "neighbor_lokyin",
          "neighbor_wingching",
          "neighbor_holong",
          "neighbor_manhei"
        ],
        "persistKey": "primarySameAgeNeighborId",
        "nameKnownFlag": "primarySameAgeNeighborNameKnown",
        "displayNameRule": "primarySameAgeNeighborNameKnown ? selectedNeighbor.knownDisplayName : selectedNeighbor.unknownDisplayName",
        "activeMessage": false,
        "doNotRerollWithinSave": true
      },
      "nameRevealTextRule": "Use {selectedNeighbor.fixedName} at askName / selfIntro / parentIntro moment, then set primarySameAgeNeighborNameKnown = true",
      "unlockNameBy": [
        "askName",
        "selfIntro",
        "parentIntro"
      ]
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1000,
      "weekRange": [
        1,
        1
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w1_required_neighbor",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w1_w6",
      "involvementRole": "main_weekly_event",
      "requiredFirstNeighborEvent": true
    },
    "variants": [
      {
        "variantId": "neighbor_lokyin",
        "variantTitle": "快手邀請型鄰居",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "升降機裡，一個同年紀小朋友抱著紅色車仔，站在媽媽旁邊。對方看了你的鞋，又看了你的手冊袋，很快問：「你都放假呀？」升降機數字一格一格往下跳，對方又補一句：「我一陣去平台，你去唔去？」你忽然不知道這算不算邀請，因為你們剛剛才在同一部升降機裡站近。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_lokyin_choice_1",
            "text": "點頭。",
            "buttonText": "點頭。",
            "playerLine": "嗯。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "對方也點點頭，把車仔抱緊一點，像已經把你放進「可能會再見」那一格。你還不知道對方的名字，但升降機裡多了一個知道你也放假的人。"
            },
            "resultText": "對方也點點頭，把車仔抱緊一點，像已經把你放進「可能會再見」那一格。你還不知道對方的名字，但升降機裡多了一個知道你也放假的人。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w1_2_meet_primary_same_age_neighbor",
              "variantId": "neighbor_lokyin",
              "mustMatchEventTitle": "樓下／屋苑平台遇到 {neighborDisplayName}（必出）"
            }
          },
          {
            "id": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_lokyin_choice_2",
            "text": "問對方叫咩名。",
            "buttonText": "問對方叫咩名。",
            "playerLine": "你叫咩名？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "對方說：「我叫 {selectedNeighbor.fixedName}。」又反問你。名字不是在點名簿上出現，而是在升降機快到地下時，很快地交換了。"
            },
            "resultText": "對方說：「我叫 {selectedNeighbor.fixedName}。」又反問你。名字不是在點名簿上出現，而是在升降機快到地下時，很快地交換了。",
            "statusDelta": {
              "學業": 1,
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
            "unlocks": [
              {
                "type": "revealPrimarySameAgeNeighborName",
                "sourceEventId": "s2_w1_2_meet_primary_same_age_neighbor",
                "reason": "玩家在首次鄰居事件中交換或接到名字。"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w1_2_meet_primary_same_age_neighbor",
              "variantId": "neighbor_lokyin",
              "mustMatchEventTitle": "樓下／屋苑平台遇到 {neighborDisplayName}（必出）"
            }
          },
          {
            "id": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_lokyin_choice_3",
            "text": "問平台有咩玩。",
            "buttonText": "問平台有咩玩。",
            "playerLine": "平台有咩玩？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}立刻說有花槽、有長椅，還有一個位可以推車仔。你聽不懂那裡有甚麼特別，但對方講得像自己很熟路。"
            },
            "resultText": "{neighborDisplayName}立刻說有花槽、有長椅，還有一個位可以推車仔。你聽不懂那裡有甚麼特別，但對方講得像自己很熟路。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w1_2_meet_primary_same_age_neighbor",
              "variantId": "neighbor_lokyin",
              "mustMatchEventTitle": "樓下／屋苑平台遇到 {neighborDisplayName}（必出）"
            }
          },
          {
            "id": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_lokyin_choice_4",
            "text": "躲到家人旁邊。",
            "buttonText": "躲到家人旁邊。",
            "playerLine": "……",
            "playerLineType": "silent",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你站近家人一點。對方沒有再追問，只在升降機門開時回頭看你一眼。名字沒有交換，但你記得對方講話很快，像升降機門一開就會跑出去。"
            },
            "resultText": "你站近家人一點。對方沒有再追問，只在升降機門開時回頭看你一眼。名字沒有交換，但你記得對方講話很快，像升降機門一開就會跑出去。",
            "statusDelta": {
              "學業": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w1_2_meet_primary_same_age_neighbor",
              "variantId": "neighbor_lokyin",
              "mustMatchEventTitle": "樓下／屋苑平台遇到 {neighborDisplayName}（必出）"
            }
          }
        ],
        "metadata": {
          "uiHidden": true,
          "fixedName": "樂言"
        },
        "variantType": "sameAgeNeighborFirstMeet",
        "identityTypeId": "same_age_neighbor",
        "usesSelectedNeighbor": true,
        "activeMessage": false,
        "personalityId": "pers_neighbor_quick_invite",
        "neighborId": "neighbor_lokyin",
        "npcIdHint": "neighbor_lokyin",
        "npcNameFallback": "樂言",
        "unknownDisplayName": "同座小朋友",
        "knownDisplayName": "樂言",
        "eligibleWhen": "primarySameAgeNeighborId == \"neighbor_lokyin\"",
        "selectedNeighborCandidate": true
      },
      {
        "variantId": "neighbor_wingching",
        "variantTitle": "安靜收藏型鄰居",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "平台花槽旁邊，家人遇到熟人停下來說話。你站在一邊，旁邊那個同年紀小朋友也在等。對方手裡拿著一個小盒，盒蓋沒有全打開，只露出幾張貼紙的角。對方看見你在望，就把盒子往中間移一點，聲音很細：「你睇唔睇？」"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_wingching_choice_1",
            "text": "問可不可以看。",
            "buttonText": "問可不可以看。",
            "playerLine": "我睇吓得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "對方把盒子推近一點，但提醒你不要撕。你還不知道對方的名字，只先知道對方會用很小的動作讓人靠近。"
            },
            "resultText": "對方把盒子推近一點，但提醒你不要撕。你還不知道對方的名字，只先知道對方會用很小的動作讓人靠近。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w1_2_meet_primary_same_age_neighbor",
              "variantId": "neighbor_wingching",
              "mustMatchEventTitle": "樓下／屋苑平台遇到 {neighborDisplayName}（必出）"
            }
          },
          {
            "id": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_wingching_choice_2",
            "text": "問對方叫咩名。",
            "buttonText": "問對方叫咩名。",
            "playerLine": "你叫咩名？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "對方停了停，才說：「我叫 {selectedNeighbor.fixedName}。」說完又低頭看貼紙。名字像貼紙角一樣，不是很大聲，但被你看見了。"
            },
            "resultText": "對方停了停，才說：「我叫 {selectedNeighbor.fixedName}。」說完又低頭看貼紙。名字像貼紙角一樣，不是很大聲，但被你看見了。",
            "statusDelta": {
              "學業": 1,
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
            "unlocks": [
              {
                "type": "revealPrimarySameAgeNeighborName",
                "sourceEventId": "s2_w1_2_meet_primary_same_age_neighbor",
                "reason": "玩家在首次鄰居事件中交換或接到名字。"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w1_2_meet_primary_same_age_neighbor",
              "variantId": "neighbor_wingching",
              "mustMatchEventTitle": "樓下／屋苑平台遇到 {neighborDisplayName}（必出）"
            }
          },
          {
            "id": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_wingching_choice_3",
            "text": "只看不碰。",
            "buttonText": "只看不碰。",
            "playerLine": "我睇就得。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}點點頭，自己挑了一張星星貼在手背。你們沒有講很多話，但那顆星星跟著對方的手動了很久。"
            },
            "resultText": "{neighborDisplayName}點點頭，自己挑了一張星星貼在手背。你們沒有講很多話，但那顆星星跟著對方的手動了很久。",
            "statusDelta": {
              "社交": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w1_2_meet_primary_same_age_neighbor",
              "variantId": "neighbor_wingching",
              "mustMatchEventTitle": "樓下／屋苑平台遇到 {neighborDisplayName}（必出）"
            }
          },
          {
            "id": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_wingching_choice_4",
            "text": "數地上的葉。",
            "buttonText": "數地上的葉。",
            "playerLine": "我數樹葉。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "對方也低頭看，說有一片像魚。你們沒有交換名字，卻一起等到大人終於講完。"
            },
            "resultText": "對方也低頭看，說有一片像魚。你們沒有交換名字，卻一起等到大人終於講完。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w1_2_meet_primary_same_age_neighbor",
              "variantId": "neighbor_wingching",
              "mustMatchEventTitle": "樓下／屋苑平台遇到 {neighborDisplayName}（必出）"
            }
          }
        ],
        "metadata": {
          "uiHidden": true,
          "fixedName": "詠晴"
        },
        "variantType": "sameAgeNeighborFirstMeet",
        "identityTypeId": "same_age_neighbor",
        "usesSelectedNeighbor": true,
        "activeMessage": false,
        "personalityId": "pers_neighbor_quiet_collect",
        "neighborId": "neighbor_wingching",
        "npcIdHint": "neighbor_wingching",
        "npcNameFallback": "詠晴",
        "unknownDisplayName": "平台女孩",
        "knownDisplayName": "詠晴",
        "eligibleWhen": "primarySameAgeNeighborId == \"neighbor_wingching\"",
        "selectedNeighborCandidate": true
      },
      {
        "variantId": "neighbor_holong",
        "variantTitle": "玩具展示型鄰居",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "平台長椅旁，{neighborDisplayName}把一盒彩色貼紙打開，裡面有車、星星和一張皺了邊的卡通貼紙。對方沒有立刻給你，只把盒子移到你看得到的位置：「我啱啱喺屋企攞落嚟。」說完又把最閃那張放到最上面，像怕你沒看到。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_holong_choice_1",
            "text": "說好閃。",
            "buttonText": "說好閃。",
            "playerLine": "好閃呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}眼睛亮了一下，把那張貼紙拿近一點。你沒有拿到它，也還不知道對方的名字，但已經記住那一下光。"
            },
            "resultText": "{neighborDisplayName}眼睛亮了一下，把那張貼紙拿近一點。你沒有拿到它，也還不知道對方的名字，但已經記住那一下光。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w1_2_meet_primary_same_age_neighbor",
              "variantId": "neighbor_holong",
              "mustMatchEventTitle": "樓下／屋苑平台遇到 {neighborDisplayName}（必出）"
            }
          },
          {
            "id": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_holong_choice_2",
            "text": "問對方叫咩名。",
            "buttonText": "問對方叫咩名。",
            "playerLine": "你叫咩名？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "對方一邊把貼紙盒抱住，一邊說：「我叫 {selectedNeighbor.fixedName}。」名字跟貼紙一起出現，像對方給你看的另一樣東西。"
            },
            "resultText": "對方一邊把貼紙盒抱住，一邊說：「我叫 {selectedNeighbor.fixedName}。」名字跟貼紙一起出現，像對方給你看的另一樣東西。",
            "statusDelta": {
              "學業": 1,
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
            "unlocks": [
              {
                "type": "revealPrimarySameAgeNeighborName",
                "sourceEventId": "s2_w1_2_meet_primary_same_age_neighbor",
                "reason": "玩家在首次鄰居事件中交換或接到名字。"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w1_2_meet_primary_same_age_neighbor",
              "variantId": "neighbor_holong",
              "mustMatchEventTitle": "樓下／屋苑平台遇到 {neighborDisplayName}（必出）"
            }
          },
          {
            "id": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_holong_choice_3",
            "text": "說自己也有貼紙。",
            "buttonText": "說自己也有貼紙。",
            "playerLine": "我屋企都有貼紙。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "對方立刻問是甚麼圖案。你想了一下，發現自己記不清楚，但又想回家找出來。這不是班房比較，只是平台上兩個小朋友都想把自己的東西講出來。"
            },
            "resultText": "對方立刻問是甚麼圖案。你想了一下，發現自己記不清楚，但又想回家找出來。這不是班房比較，只是平台上兩個小朋友都想把自己的東西講出來。",
            "statusDelta": {
              "社交": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w1_2_meet_primary_same_age_neighbor",
              "variantId": "neighbor_holong",
              "mustMatchEventTitle": "樓下／屋苑平台遇到 {neighborDisplayName}（必出）"
            }
          },
          {
            "id": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_holong_choice_4",
            "text": "問邊度買。",
            "buttonText": "問邊度買。",
            "playerLine": "邊度買㗎？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "對方說可能是姨媽給的。不是所有玩具都能立刻買到，有些是被人送來，然後帶到平台上給人看。"
            },
            "resultText": "對方說可能是姨媽給的。不是所有玩具都能立刻買到，有些是被人送來，然後帶到平台上給人看。",
            "statusDelta": {
              "社交": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w1_2_meet_primary_same_age_neighbor",
              "variantId": "neighbor_holong",
              "mustMatchEventTitle": "樓下／屋苑平台遇到 {neighborDisplayName}（必出）"
            }
          }
        ],
        "metadata": {
          "uiHidden": true,
          "fixedName": "皓朗"
        },
        "variantType": "sameAgeNeighborFirstMeet",
        "identityTypeId": "same_age_neighbor",
        "usesSelectedNeighbor": true,
        "activeMessage": false,
        "personalityId": "pers_neighbor_showy_toy",
        "neighborId": "neighbor_holong",
        "npcIdHint": "neighbor_holong",
        "npcNameFallback": "皓朗",
        "unknownDisplayName": "拿貼紙的小朋友",
        "knownDisplayName": "皓朗",
        "eligibleWhen": "primarySameAgeNeighborId == \"neighbor_holong\"",
        "selectedNeighborCandidate": true
      },
      {
        "variantId": "neighbor_manhei",
        "variantTitle": "家長牽線型鄰居",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "家人跟對方家長說話時，忽然笑了：「原來你哋都住呢座？」兩個大人開始講樓層、保安和哪間超市近。{neighborDisplayName}站在旁邊，聽見大人提到你們差不多年紀，才慢慢看向你。對方沒有先開口，只是把手裡的小車轉了半圈。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_manhei_choice_1",
            "text": "問對方小幾。",
            "buttonText": "問對方小幾。",
            "playerLine": "你小幾？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}說小一，但不是你的學校。你們同一年長大，卻有兩個不同的校門。名字還未出現，只先知道對方也是小一。"
            },
            "resultText": "{neighborDisplayName}說小一，但不是你的學校。你們同一年長大，卻有兩個不同的校門。名字還未出現，只先知道對方也是小一。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w1_2_meet_primary_same_age_neighbor",
              "variantId": "neighbor_manhei",
              "mustMatchEventTitle": "樓下／屋苑平台遇到 {neighborDisplayName}（必出）"
            }
          },
          {
            "id": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_manhei_choice_2",
            "text": "等家長介紹。",
            "buttonText": "等家長介紹。",
            "playerLine": "……",
            "playerLineType": "silent",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人笑著說：「佢叫 {selectedNeighbor.fixedName}。」你不是自己問到名字，而是在大人話題旁邊接到一個名字。"
            },
            "resultText": "家人笑著說：「佢叫 {selectedNeighbor.fixedName}。」你不是自己問到名字，而是在大人話題旁邊接到一個名字。",
            "statusDelta": {
              "學業": 1,
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
            "unlocks": [
              {
                "type": "revealPrimarySameAgeNeighborName",
                "sourceEventId": "s2_w1_2_meet_primary_same_age_neighbor",
                "reason": "玩家在首次鄰居事件中交換或接到名字。"
              }
            ],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w1_2_meet_primary_same_age_neighbor",
              "variantId": "neighbor_manhei",
              "mustMatchEventTitle": "樓下／屋苑平台遇到 {neighborDisplayName}（必出）"
            }
          },
          {
            "id": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_manhei_choice_3",
            "text": "問會不會再見。",
            "buttonText": "問會不會再見。",
            "playerLine": "咁會唔會再見到？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}說可能會，因為升降機只有幾部。這個答案很普通，卻讓你覺得對方不是只出現一次。"
            },
            "resultText": "{neighborDisplayName}說可能會，因為升降機只有幾部。這個答案很普通，卻讓你覺得對方不是只出現一次。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w1_2_meet_primary_same_age_neighbor",
              "variantId": "neighbor_manhei",
              "mustMatchEventTitle": "樓下／屋苑平台遇到 {neighborDisplayName}（必出）"
            }
          },
          {
            "id": "s2_w1_2_meet_primary_same_age_neighbor_neighbor_manhei_choice_4",
            "text": "站在家人旁邊聽。",
            "buttonText": "站在家人旁邊聽。",
            "playerLine": "……",
            "playerLineType": "silent",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "大人繼續講樓下買餸。你看著{neighborDisplayName}的鞋，對方也看著你的袋，兩個小朋友在大人話題旁邊慢慢認得對方，但名字還沒有打開。"
            },
            "resultText": "大人繼續講樓下買餸。你看著{neighborDisplayName}的鞋，對方也看著你的袋，兩個小朋友在大人話題旁邊慢慢認得對方，但名字還沒有打開。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w1_2_meet_primary_same_age_neighbor",
              "variantId": "neighbor_manhei",
              "mustMatchEventTitle": "樓下／屋苑平台遇到 {neighborDisplayName}（必出）"
            }
          }
        ],
        "metadata": {
          "uiHidden": true,
          "fixedName": "敏希"
        },
        "variantType": "sameAgeNeighborFirstMeet",
        "identityTypeId": "same_age_neighbor",
        "usesSelectedNeighbor": true,
        "activeMessage": false,
        "personalityId": "pers_neighbor_adult_bridge",
        "neighborId": "neighbor_manhei",
        "npcIdHint": "neighbor_manhei",
        "npcNameFallback": "敏希",
        "unknownDisplayName": "跟著家長的小朋友",
        "knownDisplayName": "敏希",
        "eligibleWhen": "primarySameAgeNeighborId == \"neighbor_manhei\"",
        "selectedNeighborCandidate": true
      }
    ]
  },
  {
    "id": "s2_w1_3_christmas_decorations_outing",
    "sourceTopicId": "S2-W1-3",
    "weekPool": "S2-W1_authored_weekly",
    "termId": "term_p1_s2",
    "week": 1,
    "category": "holiday",
    "title": "去商場／街上看聖誕裝飾",
    "sceneIntro": "下午，家人說可以出去走一圈。你換好外套，門口放著水樽和一個袋。街上比平日多人，商場門口有聖誕樹和亮燈，有人停下來拍照，也有人只想快點買完東西回家。你跟著家人走，覺得假期的外面比學校更吵。",
    "metadata": {
      "sourceMarkdown": "info/s2_w1_w6_dialogue_draft_v0_5.md",
      "sourceTitle": "S2-W1–S2-W6｜聖誕假期到農曆新年後｜事件對話草稿 v0.5",
      "uiHidden": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        1,
        1
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w1_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w1_w6",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "before_going_out",
        "variantTitle": "出門前準備",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "家人站在門口問：「水樽、紙巾、八達通，攞齊未？」你本來只想快點出門，看見大人一樣一樣數，才發現出街也像上學前一樣有清單。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w1_3_christmas_decorations_outing_before_going_out_choice_1",
            "text": "拿水樽。",
            "buttonText": "拿水樽。",
            "playerLine": "我攞水樽。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把水樽放進袋裡，袋子立刻重了一點。家人說這樣等會兒不用到處找水喝。"
            },
            "resultText": "你把水樽放進袋裡，袋子立刻重了一點。家人說這樣等會兒不用到處找水喝。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w1_3_christmas_decorations_outing",
              "variantId": "before_going_out",
              "mustMatchEventTitle": "去商場／街上看聖誕裝飾"
            }
          },
          {
            "id": "s2_w1_3_christmas_decorations_outing_before_going_out_choice_2",
            "text": "問可不可以帶玩具。",
            "buttonText": "問可不可以帶玩具。",
            "playerLine": "可唔可以帶玩具？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說小件可以，大件不行。你最後只拿了一個小玩具，它在口袋裡跟著你走路。"
            },
            "resultText": "家人說小件可以，大件不行。你最後只拿了一個小玩具，它在口袋裡跟著你走路。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w1_3_christmas_decorations_outing",
              "variantId": "before_going_out",
              "mustMatchEventTitle": "去商場／街上看聖誕裝飾"
            }
          },
          {
            "id": "s2_w1_3_christmas_decorations_outing_before_going_out_choice_3",
            "text": "催快點。",
            "buttonText": "催快點。",
            "playerLine": "快啲啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人叫你先穿好鞋。你低頭拉鞋帶，發現自己其實也還沒準備好。"
            },
            "resultText": "家人叫你先穿好鞋。你低頭拉鞋帶，發現自己其實也還沒準備好。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w1_3_christmas_decorations_outing",
              "variantId": "before_going_out",
              "mustMatchEventTitle": "去商場／街上看聖誕裝飾"
            }
          },
          {
            "id": "s2_w1_3_christmas_decorations_outing_before_going_out_choice_4",
            "text": "忘記外套。",
            "buttonText": "忘記外套。",
            "playerLine": "我得啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "門一開，走廊的風有點涼。家人把外套遞給你，你又走回來穿上，出門慢了一點。"
            },
            "resultText": "門一開，走廊的風有點涼。家人把外套遞給你，你又走回來穿上，出門慢了一點。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w1_3_christmas_decorations_outing",
              "variantId": "before_going_out",
              "mustMatchEventTitle": "去商場／街上看聖誕裝飾"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "crowded_way",
        "variantTitle": "路上人太多",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "商場門口很多人，聖誕歌從喇叭傳出來。你想看裝飾，但前面全是大人的袋和外套。家人握著你的手說：「跟實啲，唔好自己行開。」"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w1_3_christmas_decorations_outing_crowded_way_choice_1",
            "text": "抓緊家人的手。",
            "buttonText": "抓緊家人的手。",
            "playerLine": "我跟住你。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你握緊一點，從人群中間慢慢走。看不到整棵聖誕樹，但看見很多發光的小球。"
            },
            "resultText": "你握緊一點，從人群中間慢慢走。看不到整棵聖誕樹，但看見很多發光的小球。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w1_3_christmas_decorations_outing",
              "variantId": "crowded_way",
              "mustMatchEventTitle": "去商場／街上看聖誕裝飾"
            }
          },
          {
            "id": "s2_w1_3_christmas_decorations_outing_crowded_way_choice_2",
            "text": "說看不到。",
            "buttonText": "說看不到。",
            "playerLine": "我睇唔到呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人帶你站到旁邊矮一點的位置。你終於看到聖誕樹頂，但也看到後面還有一排人等拍照。"
            },
            "resultText": "家人帶你站到旁邊矮一點的位置。你終於看到聖誕樹頂，但也看到後面還有一排人等拍照。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w1_3_christmas_decorations_outing",
              "variantId": "crowded_way",
              "mustMatchEventTitle": "去商場／街上看聖誕裝飾"
            }
          },
          {
            "id": "s2_w1_3_christmas_decorations_outing_crowded_way_choice_3",
            "text": "想自己走前。",
            "buttonText": "想自己走前。",
            "playerLine": "我去前面睇。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人立刻叫住你。你停在原地，心裡有點不服氣，但人群像水一樣一直往前流。"
            },
            "resultText": "家人立刻叫住你。你停在原地，心裡有點不服氣，但人群像水一樣一直往前流。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w1_3_christmas_decorations_outing",
              "variantId": "crowded_way",
              "mustMatchEventTitle": "去商場／街上看聖誕裝飾"
            }
          },
          {
            "id": "s2_w1_3_christmas_decorations_outing_crowded_way_choice_4",
            "text": "先看地上的燈影。",
            "buttonText": "先看地上的燈影。",
            "playerLine": "地下都有光。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你低頭看，聖誕燈在地板上碎成一點一點。就算看不到最前面，也有些東西來到你腳邊。"
            },
            "resultText": "你低頭看，聖誕燈在地板上碎成一點一點。就算看不到最前面，也有些東西來到你腳邊。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w1_3_christmas_decorations_outing",
              "variantId": "crowded_way",
              "mustMatchEventTitle": "去商場／街上看聖誕裝飾"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "sees_decorations",
        "variantTitle": "看到裝飾",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "商場中央的聖誕樹很高，下面有假雪和禮物盒。你抬頭看了很久，脖子有點酸。旁邊有小朋友說那個熊仔好大，也有人說想要拍照。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w1_3_christmas_decorations_outing_sees_decorations_choice_1",
            "text": "看聖誕樹頂。",
            "buttonText": "看聖誕樹頂。",
            "playerLine": "好高呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你一直看樹頂，看得眼睛有點花。那顆星星離你很遠，卻比課室白板上的紙星星亮很多。"
            },
            "resultText": "你一直看樹頂，看得眼睛有點花。那顆星星離你很遠，卻比課室白板上的紙星星亮很多。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w1_3_christmas_decorations_outing",
              "variantId": "sees_decorations",
              "mustMatchEventTitle": "去商場／街上看聖誕裝飾"
            }
          },
          {
            "id": "s2_w1_3_christmas_decorations_outing_sees_decorations_choice_2",
            "text": "想拍照。",
            "buttonText": "想拍照。",
            "playerLine": "可唔可以影相？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人叫你站到旁邊，不要碰裝飾。你笑得有點僵，但照片裡的燈把你的臉照得很亮。"
            },
            "resultText": "家人叫你站到旁邊，不要碰裝飾。你笑得有點僵，但照片裡的燈把你的臉照得很亮。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w1_3_christmas_decorations_outing",
              "variantId": "sees_decorations",
              "mustMatchEventTitle": "去商場／街上看聖誕裝飾"
            }
          },
          {
            "id": "s2_w1_3_christmas_decorations_outing_sees_decorations_choice_3",
            "text": "問禮物盒是不是真的。",
            "buttonText": "問禮物盒是不是真的。",
            "playerLine": "入面有冇嘢？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說只是裝飾。你盯著盒子看了一會兒，還是覺得如果裡面有東西會更好。"
            },
            "resultText": "家人說只是裝飾。你盯著盒子看了一會兒，還是覺得如果裡面有東西會更好。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w1_3_christmas_decorations_outing",
              "variantId": "sees_decorations",
              "mustMatchEventTitle": "去商場／街上看聖誕裝飾"
            }
          },
          {
            "id": "s2_w1_3_christmas_decorations_outing_sees_decorations_choice_4",
            "text": "想快點走。",
            "buttonText": "想快點走。",
            "playerLine": "好多人呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說看多一陣就走。你把手放在耳邊，聖誕歌和人聲混在一起，有點好玩，也有點累。"
            },
            "resultText": "家人說看多一陣就走。你把手放在耳邊，聖誕歌和人聲混在一起，有點好玩，也有點累。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w1_3_christmas_decorations_outing",
              "variantId": "sees_decorations",
              "mustMatchEventTitle": "去商場／街上看聖誕裝飾"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "tired_return_remember_image",
        "variantTitle": "回程累了但記得某個畫面",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "回程時，你的腳有點酸。車窗外的燈一盞一盞往後退，家人問你今天最記得甚麼。你想不起整個下午，只記得一個很小的畫面。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w1_3_christmas_decorations_outing_tired_return_remember_image_choice_1",
            "text": "記得星星。",
            "buttonText": "記得星星。",
            "playerLine": "我記得樹頂粒星。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說那顆星很高。你靠在椅背上，覺得它還在眼睛裡閃了一下。"
            },
            "resultText": "家人說那顆星很高。你靠在椅背上，覺得它還在眼睛裡閃了一下。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w1_3_christmas_decorations_outing",
              "variantId": "tired_return_remember_image",
              "mustMatchEventTitle": "去商場／街上看聖誕裝飾"
            }
          },
          {
            "id": "s2_w1_3_christmas_decorations_outing_tired_return_remember_image_choice_2",
            "text": "記得人很多。",
            "buttonText": "記得人很多。",
            "playerLine": "好多人。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人笑說假期就是這樣。你不知道是不是喜歡，但知道下次出門要更抓緊。"
            },
            "resultText": "家人笑說假期就是這樣。你不知道是不是喜歡，但知道下次出門要更抓緊。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w1_3_christmas_decorations_outing",
              "variantId": "tired_return_remember_image",
              "mustMatchEventTitle": "去商場／街上看聖誕裝飾"
            }
          },
          {
            "id": "s2_w1_3_christmas_decorations_outing_tired_return_remember_image_choice_3",
            "text": "記得假雪。",
            "buttonText": "記得假雪。",
            "playerLine": "啲雪係假㗎。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說香港很少真的下雪。你望著車窗，想像如果地上全是白色，鞋會不會濕。"
            },
            "resultText": "家人說香港很少真的下雪。你望著車窗，想像如果地上全是白色，鞋會不會濕。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w1_3_christmas_decorations_outing",
              "variantId": "tired_return_remember_image",
              "mustMatchEventTitle": "去商場／街上看聖誕裝飾"
            }
          },
          {
            "id": "s2_w1_3_christmas_decorations_outing_tired_return_remember_image_choice_4",
            "text": "累到不想說。",
            "buttonText": "累到不想說。",
            "playerLine": "我攰啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人把袋子換到另一邊手，叫你閉眼一會兒。你沒有睡著，只是把今天的燈慢慢收在腦裡。"
            },
            "resultText": "家人把袋子換到另一邊手，叫你閉眼一會兒。你沒有睡著，只是把今天的燈慢慢收在腦裡。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w1_3_christmas_decorations_outing",
              "variantId": "tired_return_remember_image",
              "mustMatchEventTitle": "去商場／街上看聖誕裝飾"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      }
    ]
  },
  {
    "id": "s2_w1_4_holiday_homework_in_family_life",
    "sourceTopicId": "S2-W1-4",
    "weekPool": "S2-W1_authored_weekly",
    "termId": "term_p1_s2",
    "week": 1,
    "category": "neighbor",
    "title": "假期功課被放進家庭生活裡",
    "sceneIntro": "聖誕假期的東西很多：電視、街上的燈、樓下遇到的新朋友、家裡比較慢的早餐。可是晚上收拾桌子時，假期功課又被拿出來。它不再像學校裡的功課簿，而是跟飯碗、玩具和沙發上的外套放在同一個家裡。",
    "metadata": {
      "sourceMarkdown": "info/s2_w1_w6_dialogue_draft_v0_5.md",
      "sourceTitle": "S2-W1–S2-W6｜聖誕假期到農曆新年後｜事件對話草稿 v0.5",
      "uiHidden": true,
      "identityTypeId": "same_age_neighbor",
      "usesSelectedNeighbor": true,
      "activeMessage": false,
      "selectedNeighborPersonality": "persisted_from_S2-W1-2",
      "displayNameRule": "neighborDisplayName = primarySameAgeNeighborNameKnown ? selectedNeighbor.knownDisplayName : selectedNeighbor.unknownDisplayName"
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        1,
        1
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w1_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w1_w6",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "family_reminder",
        "variantTitle": "家人提醒",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "晚飯後，家人把功課紙放在桌上：「今日做少少，之後就冇咁趕。」你本來想去玩，看到鉛筆盒被推過來，心裡有一點沉。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w1_4_holiday_homework_in_family_life_family_reminder_choice_1",
            "text": "做一頁。",
            "buttonText": "做一頁。",
            "playerLine": "我做一頁。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你寫得不快，寫到一半還看了幾次電視方向。但做完一頁後，那疊紙好像薄了一點。"
            },
            "resultText": "你寫得不快，寫到一半還看了幾次電視方向。但做完一頁後，那疊紙好像薄了一點。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w1_4_holiday_homework_in_family_life",
              "variantId": "family_reminder",
              "mustMatchEventTitle": "假期功課被放進家庭生活裡"
            }
          },
          {
            "id": "s2_w1_4_holiday_homework_in_family_life_family_reminder_choice_2",
            "text": "問可不可以明天。",
            "buttonText": "問可不可以明天。",
            "playerLine": "聽日先得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人沒有立刻罵，只問你明天甚麼時候做。你才發現拖延也要有下一個答案。"
            },
            "resultText": "家人沒有立刻罵，只問你明天甚麼時候做。你才發現拖延也要有下一個答案。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w1_4_holiday_homework_in_family_life",
              "variantId": "family_reminder",
              "mustMatchEventTitle": "假期功課被放進家庭生活裡"
            }
          },
          {
            "id": "s2_w1_4_holiday_homework_in_family_life_family_reminder_choice_3",
            "text": "先削鉛筆。",
            "buttonText": "先削鉛筆。",
            "playerLine": "我削鉛筆先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把鉛筆削得很尖，像這樣就等於開始了。家人看著你，沒有讓你一直削下去。"
            },
            "resultText": "你把鉛筆削得很尖，像這樣就等於開始了。家人看著你，沒有讓你一直削下去。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w1_4_holiday_homework_in_family_life",
              "variantId": "family_reminder",
              "mustMatchEventTitle": "假期功課被放進家庭生活裡"
            }
          },
          {
            "id": "s2_w1_4_holiday_homework_in_family_life_family_reminder_choice_4",
            "text": "坐著不動。",
            "buttonText": "坐著不動。",
            "playerLine": "……",
            "playerLineType": "silent",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人把題目讀給你聽。你不是不會，只是從假期回到功課紙的路有點遠。"
            },
            "resultText": "家人把題目讀給你聽。你不是不會，只是從假期回到功課紙的路有點遠。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w1_4_holiday_homework_in_family_life",
              "variantId": "family_reminder",
              "mustMatchEventTitle": "假期功課被放進家庭生活裡"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "player_delays",
        "variantTitle": "玩家想拖",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "你把功課紙放到書包旁邊，想著反正還有好多天。家人路過看見，問：「你係咪諗住佢自己會做完？」你愣了一下，因為你其實就是想它自己不見。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w1_4_holiday_homework_in_family_life_player_delays_choice_1",
            "text": "說還有時間。",
            "buttonText": "說還有時間。",
            "playerLine": "仲有好多日。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說好多日很快過。你不太相信，但看著日曆上密密麻麻的格子，又有點不確定。"
            },
            "resultText": "家人說好多日很快過。你不太相信，但看著日曆上密密麻麻的格子，又有點不確定。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w1_4_holiday_homework_in_family_life",
              "variantId": "player_delays",
              "mustMatchEventTitle": "假期功課被放進家庭生活裡"
            }
          },
          {
            "id": "s2_w1_4_holiday_homework_in_family_life_player_delays_choice_2",
            "text": "先做最短那題。",
            "buttonText": "先做最短那題。",
            "playerLine": "我做最短嗰題。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你挑了一題看起來最少字的，慢慢寫完。雖然只是很小的一題，但它沒有再追著你。"
            },
            "resultText": "你挑了一題看起來最少字的，慢慢寫完。雖然只是很小的一題，但它沒有再追著你。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w1_4_holiday_homework_in_family_life",
              "variantId": "player_delays",
              "mustMatchEventTitle": "假期功課被放進家庭生活裡"
            }
          },
          {
            "id": "s2_w1_4_holiday_homework_in_family_life_player_delays_choice_3",
            "text": "把紙夾好。",
            "buttonText": "把紙夾好。",
            "playerLine": "我夾好先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把功課紙夾進文件夾。家人說夾好是第一步，做完才是第二步，你假裝沒有聽到後半句。"
            },
            "resultText": "你把功課紙夾進文件夾。家人說夾好是第一步，做完才是第二步，你假裝沒有聽到後半句。",
            "statusDelta": {
              "學業": 1,
              "家庭關係": 1
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
              "eventId": "s2_w1_4_holiday_homework_in_family_life",
              "variantId": "player_delays",
              "mustMatchEventTitle": "假期功課被放進家庭生活裡"
            }
          },
          {
            "id": "s2_w1_4_holiday_homework_in_family_life_player_delays_choice_4",
            "text": "跑去看電視。",
            "buttonText": "跑去看電視。",
            "playerLine": "我睇陣電視先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "電視聲很快把題目蓋住。可是廣告一播，你又想起桌上的功課紙還在那裡。"
            },
            "resultText": "電視聲很快把題目蓋住。可是廣告一播，你又想起桌上的功課紙還在那裡。",
            "statusDelta": {
              "學業": 1,
              "家庭關係": 1
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
              "eventId": "s2_w1_4_holiday_homework_in_family_life",
              "variantId": "player_delays",
              "mustMatchEventTitle": "假期功課被放進家庭生活裡"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "neighbor_mentions_homework",
        "variantTitle": "鄰居也提起功課",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "第二天在平台碰到 {neighborDisplayName}。對方提起功課的方式不一定像學校同學：可能是一句很快的「你做咗未」，可能只是把功課紙角露出來，也可能一邊收貼紙一邊說家人叫每日做一頁。你突然覺得功課不是只有你家裡才有。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w1_4_holiday_homework_in_family_life_neighbor_mentions_homework_choice_1",
            "text": "說做了一點。",
            "buttonText": "說做了一點。",
            "playerLine": "做咗少少。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}點點頭，像這樣就算同一隊。你們沒有比誰多，只知道大家都有一疊紙。"
            },
            "resultText": "{neighborDisplayName}點點頭，像這樣就算同一隊。你們沒有比誰多，只知道大家都有一疊紙。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w1_4_holiday_homework_in_family_life",
              "variantId": "neighbor_mentions_homework",
              "mustMatchEventTitle": "假期功課被放進家庭生活裡"
            }
          },
          {
            "id": "s2_w1_4_holiday_homework_in_family_life_neighbor_mentions_homework_choice_2",
            "text": "說還未。",
            "buttonText": "說還未。",
            "playerLine": "未呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}小聲說昨天也差點忘記。你以為對方會笑你，結果對方只是繼續撕貼紙。"
            },
            "resultText": "{neighborDisplayName}小聲說昨天也差點忘記。你以為對方會笑你，結果對方只是繼續撕貼紙。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w1_4_holiday_homework_in_family_life",
              "variantId": "neighbor_mentions_homework",
              "mustMatchEventTitle": "假期功課被放進家庭生活裡"
            }
          },
          {
            "id": "s2_w1_4_holiday_homework_in_family_life_neighbor_mentions_homework_choice_3",
            "text": "問對方難不難。",
            "buttonText": "問對方難不難。",
            "playerLine": "你嗰啲難唔難？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "對方說有一頁很多字。你不知道對方的功課跟你一不一樣，但「很多字」聽起來很熟。"
            },
            "resultText": "對方說有一頁很多字。你不知道對方的功課跟你一不一樣，但「很多字」聽起來很熟。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w1_4_holiday_homework_in_family_life",
              "variantId": "neighbor_mentions_homework",
              "mustMatchEventTitle": "假期功課被放進家庭生活裡"
            }
          },
          {
            "id": "s2_w1_4_holiday_homework_in_family_life_neighbor_mentions_homework_choice_4",
            "text": "轉去講玩具。",
            "buttonText": "轉去講玩具。",
            "playerLine": "你今日有冇帶車？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}立刻從口袋裡拿出小車。功課話題被推走一點，但你知道它遲早會被推回來。"
            },
            "resultText": "{neighborDisplayName}立刻從口袋裡拿出小車。功課話題被推走一點，但你知道它遲早會被推回來。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w1_4_holiday_homework_in_family_life",
              "variantId": "neighbor_mentions_homework",
              "mustMatchEventTitle": "假期功課被放進家庭生活裡"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgeNeighbor",
        "identityTypeId": "same_age_neighbor",
        "usesSelectedNeighbor": true,
        "activeMessage": false,
        "npcIdHint": "primarySameAgeNeighborId",
        "npcNameFallback": "{neighborDisplayName}"
      },
      {
        "variantId": "remembers_at_night",
        "variantTitle": "晚上才想起",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "晚上刷牙前，你忽然想起今天完全沒有打開功課。牙刷還在嘴裡，你看見書包靠在椅邊，心裡突然跳了一下。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w1_4_holiday_homework_in_family_life_remembers_at_night_choice_1",
            "text": "立刻告訴家人。",
            "buttonText": "立刻告訴家人。",
            "playerLine": "我今日未做功課。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人嘆一口氣，但沒有叫你現在做到很夜，只叫你明天早上補一點。你把這句記得很清楚。"
            },
            "resultText": "家人嘆一口氣，但沒有叫你現在做到很夜，只叫你明天早上補一點。你把這句記得很清楚。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w1_4_holiday_homework_in_family_life",
              "variantId": "remembers_at_night",
              "mustMatchEventTitle": "假期功課被放進家庭生活裡"
            }
          },
          {
            "id": "s2_w1_4_holiday_homework_in_family_life_remembers_at_night_choice_2",
            "text": "假裝沒想起。",
            "buttonText": "假裝沒想起。",
            "playerLine": "……",
            "playerLineType": "silent",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你繼續刷牙，泡泡變得很多。可是躺上床後，功課紙像在書包裡翻身。"
            },
            "resultText": "你繼續刷牙，泡泡變得很多。可是躺上床後，功課紙像在書包裡翻身。",
            "statusDelta": {
              "學業": 1,
              "家庭關係": 1
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
              "eventId": "s2_w1_4_holiday_homework_in_family_life",
              "variantId": "remembers_at_night",
              "mustMatchEventTitle": "假期功課被放進家庭生活裡"
            }
          },
          {
            "id": "s2_w1_4_holiday_homework_in_family_life_remembers_at_night_choice_3",
            "text": "拿出一頁看。",
            "buttonText": "拿出一頁看。",
            "playerLine": "我睇一眼先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你只看了一眼題目，沒有真正做完。但至少你知道它在哪裡，明天不會從頭找起。"
            },
            "resultText": "你只看了一眼題目，沒有真正做完。但至少你知道它在哪裡，明天不會從頭找起。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w1_4_holiday_homework_in_family_life",
              "variantId": "remembers_at_night",
              "mustMatchEventTitle": "假期功課被放進家庭生活裡"
            }
          },
          {
            "id": "s2_w1_4_holiday_homework_in_family_life_remembers_at_night_choice_4",
            "text": "問明天早上可不可以做。",
            "buttonText": "問明天早上可不可以做。",
            "playerLine": "聽朝做得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說可以，但要真的起來。你點頭，第一次覺得假期早上可能也會有小鬧鐘。"
            },
            "resultText": "家人說可以，但要真的起來。你點頭，第一次覺得假期早上可能也會有小鬧鐘。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w1_4_holiday_homework_in_family_life",
              "variantId": "remembers_at_night",
              "mustMatchEventTitle": "假期功課被放進家庭生活裡"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      }
    ]
  },
  {
    "id": "s2_w2_5_family_tv_movie_cartoon_topic",
    "sourceTopicId": "S2-W2-5",
    "weekPool": "S2-W2_authored_weekly",
    "termId": "term_p1_s2",
    "week": 2,
    "category": "neighbor",
    "title": "家裡一起看電視／電影／卡通話題",
    "sceneIntro": "假期過了幾天，家裡的時間變得有點亂。早上不像上學日，晚上也比平日容易多看一會兒電視。電視裡有廣告、卡通、新聞和大人看的節目，你不是每句都聽懂，但會記住某個角色、某首歌，或者一個很亮的畫面。",
    "metadata": {
      "sourceMarkdown": "info/s2_w1_w6_dialogue_draft_v0_5.md",
      "sourceTitle": "S2-W1–S2-W6｜聖誕假期到農曆新年後｜事件對話草稿 v0.5",
      "uiHidden": true,
      "identityTypeId": "same_age_neighbor",
      "usesSelectedNeighbor": true,
      "activeMessage": false,
      "selectedNeighborPersonality": "persisted_from_S2-W1-2",
      "displayNameRule": "neighborDisplayName = primarySameAgeNeighborNameKnown ? selectedNeighbor.knownDisplayName : selectedNeighbor.unknownDisplayName"
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        2,
        2
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w2_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w1_w6",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "wants_cartoon",
        "variantTitle": "小朋友想看卡通",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "你拿著遙控器，看到卡通片頭剛好開始。家人正在收拾桌子，說：「睇一集就好，唔好一直坐喺度。」你盯著畫面，怕一轉頭就錯過開頭。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w2_5_family_tv_movie_cartoon_topic_wants_cartoon_choice_1",
            "text": "看一集。",
            "buttonText": "看一集。",
            "playerLine": "一集咋。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你坐到梳化上，片頭歌很快鑽進耳朵。你不知道一集有多長，只覺得它比做功課短。"
            },
            "resultText": "你坐到梳化上，片頭歌很快鑽進耳朵。你不知道一集有多長，只覺得它比做功課短。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w2_5_family_tv_movie_cartoon_topic",
              "variantId": "wants_cartoon",
              "mustMatchEventTitle": "家裡一起看電視／電影／卡通話題"
            }
          },
          {
            "id": "s2_w2_5_family_tv_movie_cartoon_topic_wants_cartoon_choice_2",
            "text": "叫家人一起看。",
            "buttonText": "叫家人一起看。",
            "playerLine": "你都睇啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說要洗碗，但站在後面看了一小段。你回頭時，發現大人也會被卡通停住幾秒。"
            },
            "resultText": "家人說要洗碗，但站在後面看了一小段。你回頭時，發現大人也會被卡通停住幾秒。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w2_5_family_tv_movie_cartoon_topic",
              "variantId": "wants_cartoon",
              "mustMatchEventTitle": "家裡一起看電視／電影／卡通話題"
            }
          },
          {
            "id": "s2_w2_5_family_tv_movie_cartoon_topic_wants_cartoon_choice_3",
            "text": "問角色名字。",
            "buttonText": "問角色名字。",
            "playerLine": "佢叫咩名？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "電視裡沒有回答你，家人也不太知道。你只好自己把角色叫成「藍色嗰個」。"
            },
            "resultText": "電視裡沒有回答你，家人也不太知道。你只好自己把角色叫成「藍色嗰個」。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w2_5_family_tv_movie_cartoon_topic",
              "variantId": "wants_cartoon",
              "mustMatchEventTitle": "家裡一起看電視／電影／卡通話題"
            }
          },
          {
            "id": "s2_w2_5_family_tv_movie_cartoon_topic_wants_cartoon_choice_4",
            "text": "邊看邊玩玩具。",
            "buttonText": "邊看邊玩玩具。",
            "playerLine": "我一邊玩。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把玩具放在膝上，眼睛卻一直看電視。玩具和卡通的故事混在一起，變成你自己的版本。"
            },
            "resultText": "你把玩具放在膝上，眼睛卻一直看電視。玩具和卡通的故事混在一起，變成你自己的版本。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w2_5_family_tv_movie_cartoon_topic",
              "variantId": "wants_cartoon",
              "mustMatchEventTitle": "家裡一起看電視／電影／卡通話題"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "adult_tv_background",
        "variantTitle": "家長在旁邊看成人節目",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "家人以為你在玩，自己轉了新聞或劇集。畫面裡大人說很多話，語氣很急，你聽不懂全部，只聽到「加價」「好忙」「唔夠時間」。你坐在旁邊，手裡的玩具停了一下。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w2_5_family_tv_movie_cartoon_topic_adult_tv_background_choice_1",
            "text": "問加價是甚麼。",
            "buttonText": "問加價是甚麼。",
            "playerLine": "咩叫加價？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人想了一下，只說有些東西變貴。你低頭看自己的擦膠，突然覺得它好像也可能變貴。"
            },
            "resultText": "家人想了一下，只說有些東西變貴。你低頭看自己的擦膠，突然覺得它好像也可能變貴。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w2_5_family_tv_movie_cartoon_topic",
              "variantId": "adult_tv_background",
              "mustMatchEventTitle": "家裡一起看電視／電影／卡通話題"
            }
          },
          {
            "id": "s2_w2_5_family_tv_movie_cartoon_topic_adult_tv_background_choice_2",
            "text": "叫轉卡通。",
            "buttonText": "叫轉卡通。",
            "playerLine": "可唔可以睇卡通？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說等一陣。你有點失望，但也聽到大人節目不是你想像中那麼好玩。"
            },
            "resultText": "家人說等一陣。你有點失望，但也聽到大人節目不是你想像中那麼好玩。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w2_5_family_tv_movie_cartoon_topic",
              "variantId": "adult_tv_background",
              "mustMatchEventTitle": "家裡一起看電視／電影／卡通話題"
            }
          },
          {
            "id": "s2_w2_5_family_tv_movie_cartoon_topic_adult_tv_background_choice_3",
            "text": "只聽到一半。",
            "buttonText": "只聽到一半。",
            "playerLine": "……",
            "playerLineType": "silent",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你只記得幾個字，連在一起有點怪。晚上睡前，你還想著是不是所有東西都會突然不見。"
            },
            "resultText": "你只記得幾個字，連在一起有點怪。晚上睡前，你還想著是不是所有東西都會突然不見。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w2_5_family_tv_movie_cartoon_topic",
              "variantId": "adult_tv_background",
              "mustMatchEventTitle": "家裡一起看電視／電影／卡通話題"
            }
          },
          {
            "id": "s2_w2_5_family_tv_movie_cartoon_topic_adult_tv_background_choice_4",
            "text": "問大人是不是不開心。",
            "buttonText": "問大人是不是不開心。",
            "playerLine": "你係咪唔開心？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人愣了一下，說只是累。你不知道累和不開心是不是一樣，只把聲音放小了一點。"
            },
            "resultText": "家人愣了一下，說只是累。你不知道累和不開心是不是一樣，只把聲音放小了一點。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w2_5_family_tv_movie_cartoon_topic",
              "variantId": "adult_tv_background",
              "mustMatchEventTitle": "家裡一起看電視／電影／卡通話題"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "neighbor_mentions_movie",
        "variantTitle": "鄰居提起看過的戲",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "在樓下平台，{neighborDisplayName}提起昨天看過一套卡通電影，裡面有個角色會飛。對方講到一半就比手勢，差點撞到花槽。你沒有看過，但那隻手像把畫面帶到你面前。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w2_5_family_tv_movie_cartoon_topic_neighbor_mentions_movie_choice_1",
            "text": "叫對方講多點。",
            "buttonText": "叫對方講多點。",
            "playerLine": "再講啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}立刻講那個角色怎樣飛，講到自己也笑。你沒看過那套戲，但開始有一點想看。"
            },
            "resultText": "{neighborDisplayName}立刻講那個角色怎樣飛，講到自己也笑。你沒看過那套戲，但開始有一點想看。",
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
              "eventId": "s2_w2_5_family_tv_movie_cartoon_topic",
              "variantId": "neighbor_mentions_movie",
              "mustMatchEventTitle": "家裡一起看電視／電影／卡通話題"
            }
          },
          {
            "id": "s2_w2_5_family_tv_movie_cartoon_topic_neighbor_mentions_movie_choice_2",
            "text": "說自己沒看過。",
            "buttonText": "說自己沒看過。",
            "playerLine": "我冇睇過。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}沒有笑你，只說下次如果電視有就要看。你忽然覺得沒看過也可以加入話題。"
            },
            "resultText": "{neighborDisplayName}沒有笑你，只說下次如果電視有就要看。你忽然覺得沒看過也可以加入話題。",
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
              "eventId": "s2_w2_5_family_tv_movie_cartoon_topic",
              "variantId": "neighbor_mentions_movie",
              "mustMatchEventTitle": "家裡一起看電視／電影／卡通話題"
            }
          },
          {
            "id": "s2_w2_5_family_tv_movie_cartoon_topic_neighbor_mentions_movie_choice_3",
            "text": "問是不是很恐怖。",
            "buttonText": "問是不是很恐怖。",
            "playerLine": "會唔會驚㗎？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}說不恐怖，只是有一個位很大聲。你把「很大聲」記住，像那就是你需要知道的提醒。"
            },
            "resultText": "{neighborDisplayName}說不恐怖，只是有一個位很大聲。你把「很大聲」記住，像那就是你需要知道的提醒。",
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
              "eventId": "s2_w2_5_family_tv_movie_cartoon_topic",
              "variantId": "neighbor_mentions_movie",
              "mustMatchEventTitle": "家裡一起看電視／電影／卡通話題"
            }
          },
          {
            "id": "s2_w2_5_family_tv_movie_cartoon_topic_neighbor_mentions_movie_choice_4",
            "text": "拿自己的角色比。",
            "buttonText": "拿自己的角色比。",
            "playerLine": "我鍾意另一個。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}問是哪個，你講得不太清楚，只用手比了形狀。兩個小朋友的故事碰在一起，不一定要同一套。"
            },
            "resultText": "{neighborDisplayName}問是哪個，你講得不太清楚，只用手比了形狀。兩個小朋友的故事碰在一起，不一定要同一套。",
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
              "eventId": "s2_w2_5_family_tv_movie_cartoon_topic",
              "variantId": "neighbor_mentions_movie",
              "mustMatchEventTitle": "家裡一起看電視／電影／卡通話題"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgeNeighbor",
        "identityTypeId": "same_age_neighbor",
        "usesSelectedNeighbor": true,
        "activeMessage": false,
        "npcIdHint": "primarySameAgeNeighborId",
        "npcNameFallback": "{neighborDisplayName}"
      },
      {
        "variantId": "remembers_character_or_song",
        "variantTitle": "玩家只記得某個角色或歌",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "那天晚上，你洗澡時突然唱起卡通片頭。家人從門外說：「你又唱呢首？」你唱到一半忘記歌詞，只把最後兩個音重複很多次。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w2_5_family_tv_movie_cartoon_topic_remembers_character_or_song_choice_1",
            "text": "一直唱副歌。",
            "buttonText": "一直唱副歌。",
            "playerLine": "啦啦啦——",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你唱錯了也繼續唱。家人叫你快點洗完，但聲音裡沒有真的生氣。"
            },
            "resultText": "你唱錯了也繼續唱。家人叫你快點洗完，但聲音裡沒有真的生氣。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w2_5_family_tv_movie_cartoon_topic",
              "variantId": "remembers_character_or_song",
              "mustMatchEventTitle": "家裡一起看電視／電影／卡通話題"
            }
          },
          {
            "id": "s2_w2_5_family_tv_movie_cartoon_topic_remembers_character_or_song_choice_2",
            "text": "問歌詞。",
            "buttonText": "問歌詞。",
            "playerLine": "後面點唱？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說自己也不知道。你只好用亂編的字接下去，歌變成你自己的版本。"
            },
            "resultText": "家人說自己也不知道。你只好用亂編的字接下去，歌變成你自己的版本。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w2_5_family_tv_movie_cartoon_topic",
              "variantId": "remembers_character_or_song",
              "mustMatchEventTitle": "家裡一起看電視／電影／卡通話題"
            }
          },
          {
            "id": "s2_w2_5_family_tv_movie_cartoon_topic_remembers_character_or_song_choice_3",
            "text": "說角色很好笑。",
            "buttonText": "說角色很好笑。",
            "playerLine": "嗰個好搞笑。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人問哪個，你講不出名字，只能說「跌低嗰個」。你發現記住一個角色不一定要記住他的名字。"
            },
            "resultText": "家人問哪個，你講不出名字，只能說「跌低嗰個」。你發現記住一個角色不一定要記住他的名字。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w2_5_family_tv_movie_cartoon_topic",
              "variantId": "remembers_character_or_song",
              "mustMatchEventTitle": "家裡一起看電視／電影／卡通話題"
            }
          },
          {
            "id": "s2_w2_5_family_tv_movie_cartoon_topic_remembers_character_or_song_choice_4",
            "text": "停下來聽自己唱。",
            "buttonText": "停下來聽自己唱。",
            "playerLine": "……",
            "playerLineType": "silent",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "浴室牆壁把你的聲音彈回來。那首歌不再只在電視裡，也在你家裡轉了一圈。"
            },
            "resultText": "浴室牆壁把你的聲音彈回來。那首歌不再只在電視裡，也在你家裡轉了一圈。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w2_5_family_tv_movie_cartoon_topic",
              "variantId": "remembers_character_or_song",
              "mustMatchEventTitle": "家裡一起看電視／電影／卡通話題"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      }
    ],
    "popCultureAnchor": "TODO_RESEARCH_CONFIRM",
    "fallback": [
      "generic_cartoon_opening_song",
      "adult_tv_background",
      "cartoon_movie_memory"
    ]
  },
  {
    "id": "s2_w2_6_neighbor_toys_stickers_cartoon_topic",
    "sourceTopicId": "S2-W2-6",
    "weekPool": "S2-W2_authored_weekly",
    "termId": "term_p1_s2",
    "week": 2,
    "category": "neighbor",
    "title": "鄰居帶來玩具／貼紙／卡通話題",
    "sceneIntro": "這幾天，你比平日更常在升降機、平台和樓下商場碰到{neighborDisplayName}。對方不是同班同學，講話不用舉手，也不用等小息鐘。可是平台也有平台的規矩：玩具要問才可以碰，走廊不能堵住，家長一叫就要回去。",
    "metadata": {
      "sourceMarkdown": "info/s2_w1_w6_dialogue_draft_v0_5.md",
      "sourceTitle": "S2-W1–S2-W6｜聖誕假期到農曆新年後｜事件對話草稿 v0.5",
      "uiHidden": true,
      "identityTypeId": "same_age_neighbor",
      "usesSelectedNeighbor": true,
      "activeMessage": false,
      "selectedNeighborPersonality": "persisted_from_S2-W1-2",
      "displayNameRule": "neighborDisplayName = primarySameAgeNeighborNameKnown ? selectedNeighbor.knownDisplayName : selectedNeighbor.unknownDisplayName"
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        2,
        2
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w2_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w1_w6",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "neighbor_shows_item",
        "variantTitle": "對方主動展示",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "{neighborDisplayName}今天拿著一個小盒子，裡面是一疊卡通貼紙。一看到你，對方就把盒蓋打開一半：「你睇，呢張會閃。」貼紙在平台的光下面亮了一下。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w2_6_neighbor_toys_stickers_cartoon_topic_neighbor_shows_item_choice_1",
            "text": "說好閃。",
            "buttonText": "說好閃。",
            "playerLine": "好閃呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}把那張貼紙拿近一點，像展示寶物。你沒有拿到它，但眼睛已經記住那一下光。"
            },
            "resultText": "{neighborDisplayName}把那張貼紙拿近一點，像展示寶物。你沒有拿到它，但眼睛已經記住那一下光。",
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
              "eventId": "s2_w2_6_neighbor_toys_stickers_cartoon_topic",
              "variantId": "neighbor_shows_item",
              "mustMatchEventTitle": "鄰居帶來玩具／貼紙／卡通話題"
            }
          },
          {
            "id": "s2_w2_6_neighbor_toys_stickers_cartoon_topic_neighbor_shows_item_choice_2",
            "text": "問可不可以摸。",
            "buttonText": "問可不可以摸。",
            "playerLine": "摸一摸得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}猶豫一下，叫你只摸角位。你用指尖碰了一下，發現閃貼比普通紙滑。"
            },
            "resultText": "{neighborDisplayName}猶豫一下，叫你只摸角位。你用指尖碰了一下，發現閃貼比普通紙滑。",
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
              "eventId": "s2_w2_6_neighbor_toys_stickers_cartoon_topic",
              "variantId": "neighbor_shows_item",
              "mustMatchEventTitle": "鄰居帶來玩具／貼紙／卡通話題"
            }
          },
          {
            "id": "s2_w2_6_neighbor_toys_stickers_cartoon_topic_neighbor_shows_item_choice_3",
            "text": "說自己也想要。",
            "buttonText": "說自己也想要。",
            "playerLine": "我都想有。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}說不是買的，是親戚給的。你想了一下，原來有些東西不是想要就能立刻買。"
            },
            "resultText": "{neighborDisplayName}說不是買的，是親戚給的。你想了一下，原來有些東西不是想要就能立刻買。",
            "statusDelta": {
              "社交": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w2_6_neighbor_toys_stickers_cartoon_topic",
              "variantId": "neighbor_shows_item",
              "mustMatchEventTitle": "鄰居帶來玩具／貼紙／卡通話題"
            }
          },
          {
            "id": "s2_w2_6_neighbor_toys_stickers_cartoon_topic_neighbor_shows_item_choice_4",
            "text": "只看盒子。",
            "buttonText": "只看盒子。",
            "playerLine": "……",
            "playerLineType": "silent",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你看著盒裡一張張圖案，沒有伸手。{neighborDisplayName}沒有催你，自己把最上面的貼紙放回去。"
            },
            "resultText": "你看著盒裡一張張圖案，沒有伸手。{neighborDisplayName}沒有催你，自己把最上面的貼紙放回去。",
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
              "eventId": "s2_w2_6_neighbor_toys_stickers_cartoon_topic",
              "variantId": "neighbor_shows_item",
              "mustMatchEventTitle": "鄰居帶來玩具／貼紙／卡通話題"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgeNeighbor",
        "identityTypeId": "same_age_neighbor",
        "usesSelectedNeighbor": true,
        "activeMessage": false,
        "npcIdHint": "primarySameAgeNeighborId",
        "npcNameFallback": "{neighborDisplayName}"
      },
      {
        "variantId": "curious_but_not_close",
        "variantTitle": "玩家不熟但好奇",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "你和{neighborDisplayName}坐在平台長椅兩邊，中間隔著一個書包的距離。對方把玩具車在椅面上推來推去，輪子發出很小的聲音。你想看，又不想太明顯。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w2_6_neighbor_toys_stickers_cartoon_topic_curious_but_not_close_choice_1",
            "text": "問車怎樣開。",
            "buttonText": "問車怎樣開。",
            "playerLine": "呢架點玩？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}把車推到你前面，示範一次。你看清楚了，才知道它不是普通推車，下面有個小開關。"
            },
            "resultText": "{neighborDisplayName}把車推到你前面，示範一次。你看清楚了，才知道它不是普通推車，下面有個小開關。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w2_6_neighbor_toys_stickers_cartoon_topic",
              "variantId": "curious_but_not_close",
              "mustMatchEventTitle": "鄰居帶來玩具／貼紙／卡通話題"
            }
          },
          {
            "id": "s2_w2_6_neighbor_toys_stickers_cartoon_topic_curious_but_not_close_choice_2",
            "text": "看著不說話。",
            "buttonText": "看著不說話。",
            "playerLine": "……",
            "playerLineType": "silent",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}推了一會兒，最後問你要不要試。你沒有開口，對方還是看出你在看。"
            },
            "resultText": "{neighborDisplayName}推了一會兒，最後問你要不要試。你沒有開口，對方還是看出你在看。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w2_6_neighbor_toys_stickers_cartoon_topic",
              "variantId": "curious_but_not_close",
              "mustMatchEventTitle": "鄰居帶來玩具／貼紙／卡通話題"
            }
          },
          {
            "id": "s2_w2_6_neighbor_toys_stickers_cartoon_topic_curious_but_not_close_choice_3",
            "text": "拿自己的東西出來。",
            "buttonText": "拿自己的東西出來。",
            "playerLine": "我都有呢個。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你拿出一個不太一樣的小玩具。{neighborDisplayName}湊近看，兩個玩具在長椅上變成兩個世界。"
            },
            "resultText": "你拿出一個不太一樣的小玩具。{neighborDisplayName}湊近看，兩個玩具在長椅上變成兩個世界。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w2_6_neighbor_toys_stickers_cartoon_topic",
              "variantId": "curious_but_not_close",
              "mustMatchEventTitle": "鄰居帶來玩具／貼紙／卡通話題"
            }
          },
          {
            "id": "s2_w2_6_neighbor_toys_stickers_cartoon_topic_curious_but_not_close_choice_4",
            "text": "問會不會壞。",
            "buttonText": "問會不會壞。",
            "playerLine": "會唔會整壞？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}說小心就不會。你點點頭，還是只用很輕的力推了一下。"
            },
            "resultText": "{neighborDisplayName}說小心就不會。你點點頭，還是只用很輕的力推了一下。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w2_6_neighbor_toys_stickers_cartoon_topic",
              "variantId": "curious_but_not_close",
              "mustMatchEventTitle": "鄰居帶來玩具／貼紙／卡通話題"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgeNeighbor",
        "identityTypeId": "same_age_neighbor",
        "usesSelectedNeighbor": true,
        "activeMessage": false,
        "npcIdHint": "primarySameAgeNeighborId",
        "npcNameFallback": "{neighborDisplayName}"
      },
      {
        "variantId": "adult_says_dont_block_path",
        "variantTitle": "家長叫不要堵路",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "你們站在升降機口看貼紙，看得太久。後面有人要出來，對方媽媽立刻說：「企埋一邊，唔好塞住。」你的家人也把你拉到牆邊。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w2_6_neighbor_toys_stickers_cartoon_topic_adult_says_dont_block_path_choice_1",
            "text": "退到牆邊。",
            "buttonText": "退到牆邊。",
            "playerLine": "我企呢邊。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你退後一步，升降機門口空了出來。{neighborDisplayName}也跟著退，貼紙盒差點掉下來。"
            },
            "resultText": "你退後一步，升降機門口空了出來。{neighborDisplayName}也跟著退，貼紙盒差點掉下來。",
            "statusDelta": {
              "社交": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w2_6_neighbor_toys_stickers_cartoon_topic",
              "variantId": "adult_says_dont_block_path",
              "mustMatchEventTitle": "鄰居帶來玩具／貼紙／卡通話題"
            }
          },
          {
            "id": "s2_w2_6_neighbor_toys_stickers_cartoon_topic_adult_says_dont_block_path_choice_2",
            "text": "收起貼紙。",
            "buttonText": "收起貼紙。",
            "playerLine": "等陣先睇。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}把盒子蓋上，有點不捨得。你們沒有被罵很久，但知道走廊不是玩具桌。"
            },
            "resultText": "{neighborDisplayName}把盒子蓋上，有點不捨得。你們沒有被罵很久，但知道走廊不是玩具桌。",
            "statusDelta": {
              "社交": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w2_6_neighbor_toys_stickers_cartoon_topic",
              "variantId": "adult_says_dont_block_path",
              "mustMatchEventTitle": "鄰居帶來玩具／貼紙／卡通話題"
            }
          },
          {
            "id": "s2_w2_6_neighbor_toys_stickers_cartoon_topic_adult_says_dont_block_path_choice_3",
            "text": "小聲說對不起。",
            "buttonText": "小聲說對不起。",
            "playerLine": "唔好意思。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "出來的大人點點頭。這句話很短，卻讓你覺得自己不是完全做錯，只是站錯位置。"
            },
            "resultText": "出來的大人點點頭。這句話很短，卻讓你覺得自己不是完全做錯，只是站錯位置。",
            "statusDelta": {
              "社交": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w2_6_neighbor_toys_stickers_cartoon_topic",
              "variantId": "adult_says_dont_block_path",
              "mustMatchEventTitle": "鄰居帶來玩具／貼紙／卡通話題"
            }
          },
          {
            "id": "s2_w2_6_neighbor_toys_stickers_cartoon_topic_adult_says_dont_block_path_choice_4",
            "text": "問可不可以去平台。",
            "buttonText": "問可不可以去平台。",
            "playerLine": "去平台睇得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說可以，但要先讓人出升降機。你把貼紙話題搬到不堵路的地方。"
            },
            "resultText": "家人說可以，但要先讓人出升降機。你把貼紙話題搬到不堵路的地方。",
            "statusDelta": {
              "社交": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w2_6_neighbor_toys_stickers_cartoon_topic",
              "variantId": "adult_says_dont_block_path",
              "mustMatchEventTitle": "鄰居帶來玩具／貼紙／卡通話題"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgeNeighbor",
        "identityTypeId": "same_age_neighbor",
        "usesSelectedNeighbor": true,
        "activeMessage": false,
        "npcIdHint": "primarySameAgeNeighborId",
        "npcNameFallback": "{neighborDisplayName}"
      },
      {
        "variantId": "toy_comparison",
        "variantTitle": "玩具引起比較",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "{neighborDisplayName}說貼紙裡有一張是限量，旁邊另一個小朋友立刻說自己有更多。{neighborDisplayName}抱住盒子，你站在旁邊，突然覺得貼紙也可以變成比賽。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w2_6_neighbor_toys_stickers_cartoon_topic_toy_comparison_choice_1",
            "text": "說每張都不同。",
            "buttonText": "說每張都不同。",
            "playerLine": "唔同款啫。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}低頭看自己的盒子，沒有再急著數。那個小朋友還在說很多，但貼紙好像不用排第一了。"
            },
            "resultText": "{neighborDisplayName}低頭看自己的盒子，沒有再急著數。那個小朋友還在說很多，但貼紙好像不用排第一了。",
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
              "eventId": "s2_w2_6_neighbor_toys_stickers_cartoon_topic",
              "variantId": "toy_comparison",
              "mustMatchEventTitle": "鄰居帶來玩具／貼紙／卡通話題"
            }
          },
          {
            "id": "s2_w2_6_neighbor_toys_stickers_cartoon_topic_toy_comparison_choice_2",
            "text": "問可以交換嗎。",
            "buttonText": "問可以交換嗎。",
            "playerLine": "可以換㗎？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}說要問媽媽。交換聽起來好玩，但原來不是一句話就可以把東西換走。"
            },
            "resultText": "{neighborDisplayName}說要問媽媽。交換聽起來好玩，但原來不是一句話就可以把東西換走。",
            "statusDelta": {
              "社交": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w2_6_neighbor_toys_stickers_cartoon_topic",
              "variantId": "toy_comparison",
              "mustMatchEventTitle": "鄰居帶來玩具／貼紙／卡通話題"
            }
          },
          {
            "id": "s2_w2_6_neighbor_toys_stickers_cartoon_topic_toy_comparison_choice_3",
            "text": "不加入比較。",
            "buttonText": "不加入比較。",
            "playerLine": "我睇吓就得。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有說自己有多少。旁邊的人還在比，你只是看見{neighborDisplayName}把最喜歡那張收到底下。"
            },
            "resultText": "你沒有說自己有多少。旁邊的人還在比，你只是看見{neighborDisplayName}把最喜歡那張收到底下。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w2_6_neighbor_toys_stickers_cartoon_topic",
              "variantId": "toy_comparison",
              "mustMatchEventTitle": "鄰居帶來玩具／貼紙／卡通話題"
            }
          },
          {
            "id": "s2_w2_6_neighbor_toys_stickers_cartoon_topic_toy_comparison_choice_4",
            "text": "說自己沒有。",
            "buttonText": "說自己沒有。",
            "playerLine": "我冇咁多。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}看你一眼，拿出一張普通星星貼紙說可以給你看，不是給你。你點點頭，覺得普通也可以亮。"
            },
            "resultText": "{neighborDisplayName}看你一眼，拿出一張普通星星貼紙說可以給你看，不是給你。你點點頭，覺得普通也可以亮。",
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
              "eventId": "s2_w2_6_neighbor_toys_stickers_cartoon_topic",
              "variantId": "toy_comparison",
              "mustMatchEventTitle": "鄰居帶來玩具／貼紙／卡通話題"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgeNeighbor",
        "identityTypeId": "same_age_neighbor",
        "usesSelectedNeighbor": true,
        "activeMessage": false,
        "npcIdHint": "primarySameAgeNeighborId",
        "npcNameFallback": "{neighborDisplayName}"
      }
    ],
    "popCultureAnchor": "TODO_RESEARCH_CONFIRM",
    "fallback": [
      "generic_cartoon_sticker",
      "generic_spin_top_style_toy"
    ]
  },
  {
    "id": "s2_w2_7_short_family_visit_or_outing",
    "sourceTopicId": "S2-W2-7",
    "weekPool": "S2-W2_authored_weekly",
    "termId": "term_p1_s2",
    "week": 2,
    "category": "holiday",
    "title": "短途家庭出行或探親",
    "sceneIntro": "假期中段，家人說要去一個不算遠的地方：可能是親戚家，可能是去吃飯，也可能只是順路買東西再探人。你不是每個大人都認得，也不是每句話都懂，只知道要穿整齊一點，帶一點禮貌，還要在車上坐一段時間。",
    "metadata": {
      "sourceMarkdown": "info/s2_w1_w6_dialogue_draft_v0_5.md",
      "sourceTitle": "S2-W1–S2-W6｜聖誕假期到農曆新年後｜事件對話草稿 v0.5",
      "uiHidden": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        2,
        2
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w2_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w1_w6",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "before_departure",
        "variantTitle": "出發前",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "家人拿著袋子在門口數東西：「禮物袋、水樽、外套，仲有你。」你剛穿好鞋，又被叫去梳頭。假期不像上學，但出門前還是很多聲音。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w2_7_short_family_visit_or_outing_before_departure_choice_1",
            "text": "站好梳頭。",
            "buttonText": "站好梳頭。",
            "playerLine": "咁快啲啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梳子拉過頭髮時有點痛。家人說忍一忍，你望著門口，只想快點出發。"
            },
            "resultText": "梳子拉過頭髮時有點痛。家人說忍一忍，你望著門口，只想快點出發。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w2_7_short_family_visit_or_outing",
              "variantId": "before_departure",
              "mustMatchEventTitle": "短途家庭出行或探親"
            }
          },
          {
            "id": "s2_w2_7_short_family_visit_or_outing_before_departure_choice_2",
            "text": "問去哪裡。",
            "buttonText": "問去哪裡。",
            "playerLine": "去邊個屋企？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說了親戚稱呼，你聽過但不太記得樣子。那個名字像一個要等下才打開的門牌。"
            },
            "resultText": "家人說了親戚稱呼，你聽過但不太記得樣子。那個名字像一個要等下才打開的門牌。",
            "statusDelta": {
              "學業": 1,
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
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w2_7_short_family_visit_or_outing",
              "variantId": "before_departure",
              "mustMatchEventTitle": "短途家庭出行或探親"
            }
          },
          {
            "id": "s2_w2_7_short_family_visit_or_outing_before_departure_choice_3",
            "text": "想帶玩具。",
            "buttonText": "想帶玩具。",
            "playerLine": "我帶一樣得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人讓你帶小件的。你把玩具放進袋裡，像帶了一個自己熟悉的東西去陌生地方。"
            },
            "resultText": "家人讓你帶小件的。你把玩具放進袋裡，像帶了一個自己熟悉的東西去陌生地方。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w2_7_short_family_visit_or_outing",
              "variantId": "before_departure",
              "mustMatchEventTitle": "短途家庭出行或探親"
            }
          },
          {
            "id": "s2_w2_7_short_family_visit_or_outing_before_departure_choice_4",
            "text": "不想換衫。",
            "buttonText": "不想換衫。",
            "playerLine": "呢件唔得咩？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說見人要整齊一點。你不明白衣服為甚麼會代表禮貌，但還是被換上另一件。"
            },
            "resultText": "家人說見人要整齊一點。你不明白衣服為甚麼會代表禮貌，但還是被換上另一件。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w2_7_short_family_visit_or_outing",
              "variantId": "before_departure",
              "mustMatchEventTitle": "短途家庭出行或探親"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "on_the_way",
        "variantTitle": "車上／路上",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "車上有點擠，窗外的街一段一段退後。家人提醒你不要踢前面的椅背，又問你會不會暈車。你抱著袋子，看著自己的倒影出現在車窗上。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w2_7_short_family_visit_or_outing_on_the_way_choice_1",
            "text": "看窗外。",
            "buttonText": "看窗外。",
            "playerLine": "嗰度有燈。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你指著街上的裝飾，家人只看了一眼就回頭。你知道不是每個你看到的東西，大人都會停下來看。"
            },
            "resultText": "你指著街上的裝飾，家人只看了一眼就回頭。你知道不是每個你看到的東西，大人都會停下來看。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w2_7_short_family_visit_or_outing",
              "variantId": "on_the_way",
              "mustMatchEventTitle": "短途家庭出行或探親"
            }
          },
          {
            "id": "s2_w2_7_short_family_visit_or_outing_on_the_way_choice_2",
            "text": "問還有多久。",
            "buttonText": "問還有多久。",
            "playerLine": "仲有幾耐？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說快到了。這個「快」好像很長，你又問了一次，才被提醒不要一直問。"
            },
            "resultText": "家人說快到了。這個「快」好像很長，你又問了一次，才被提醒不要一直問。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w2_7_short_family_visit_or_outing",
              "variantId": "on_the_way",
              "mustMatchEventTitle": "短途家庭出行或探親"
            }
          },
          {
            "id": "s2_w2_7_short_family_visit_or_outing_on_the_way_choice_3",
            "text": "抱緊袋子。",
            "buttonText": "抱緊袋子。",
            "playerLine": "我攞住。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "車轉彎時，袋子撞到你的膝頭。你把它抱緊一點，像抱住今天要帶去的禮貌。"
            },
            "resultText": "車轉彎時，袋子撞到你的膝頭。你把它抱緊一點，像抱住今天要帶去的禮貌。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w2_7_short_family_visit_or_outing",
              "variantId": "on_the_way",
              "mustMatchEventTitle": "短途家庭出行或探親"
            }
          },
          {
            "id": "s2_w2_7_short_family_visit_or_outing_on_the_way_choice_4",
            "text": "有點想睡。",
            "buttonText": "有點想睡。",
            "playerLine": "我眼瞓。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人叫你靠一靠，但不要睡到下車叫不醒。你閉上眼，車聲變成很長的嗡嗡聲。"
            },
            "resultText": "家人叫你靠一靠，但不要睡到下車叫不醒。你閉上眼，車聲變成很長的嗡嗡聲。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w2_7_short_family_visit_or_outing",
              "variantId": "on_the_way",
              "mustMatchEventTitle": "短途家庭出行或探親"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "relative_home",
        "variantTitle": "親戚家",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "親戚家門一開，裡面有飯菜味、電視聲和很多鞋。大人叫你打招呼，你忽然分不清每個人應該叫甚麼。有人摸摸你的頭，問：「小學點呀？」"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w2_7_short_family_visit_or_outing_relative_home_choice_1",
            "text": "打招呼。",
            "buttonText": "打招呼。",
            "playerLine": "姨姨好。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你說完才不知道有沒有叫對。大人笑著說乖，你鬆了一口氣，覺得至少第一句過了。"
            },
            "resultText": "你說完才不知道有沒有叫對。大人笑著說乖，你鬆了一口氣，覺得至少第一句過了。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w2_7_short_family_visit_or_outing",
              "variantId": "relative_home",
              "mustMatchEventTitle": "短途家庭出行或探親"
            }
          },
          {
            "id": "s2_w2_7_short_family_visit_or_outing_relative_home_choice_2",
            "text": "躲到家人旁邊。",
            "buttonText": "躲到家人旁邊。",
            "playerLine": "……",
            "playerLineType": "silent",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人替你接話，說你剛放假。你站在旁邊，聽見自己的學校被大人講出來，有點像不屬於自己。"
            },
            "resultText": "家人替你接話，說你剛放假。你站在旁邊，聽見自己的學校被大人講出來，有點像不屬於自己。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w2_7_short_family_visit_or_outing",
              "variantId": "relative_home",
              "mustMatchEventTitle": "短途家庭出行或探親"
            }
          },
          {
            "id": "s2_w2_7_short_family_visit_or_outing_relative_home_choice_3",
            "text": "回答小學還可以。",
            "buttonText": "回答小學還可以。",
            "playerLine": "都得。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "親戚說「都得」即是怎樣，你不知道怎樣再講。飯菜味從廚房飄出來，救了你一點。"
            },
            "resultText": "親戚說「都得」即是怎樣，你不知道怎樣再講。飯菜味從廚房飄出來，救了你一點。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w2_7_short_family_visit_or_outing",
              "variantId": "relative_home",
              "mustMatchEventTitle": "短途家庭出行或探親"
            }
          },
          {
            "id": "s2_w2_7_short_family_visit_or_outing_relative_home_choice_4",
            "text": "看桌上的糖果。",
            "buttonText": "看桌上的糖果。",
            "playerLine": "呢啲可以食嗎？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "大人說等食完飯先。你把手收回來，記住了糖果的位置。"
            },
            "resultText": "大人說等食完飯先。你把手收回來，記住了糖果的位置。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w2_7_short_family_visit_or_outing",
              "variantId": "relative_home",
              "mustMatchEventTitle": "短途家庭出行或探親"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "tired_after_return",
        "variantTitle": "回家後累了",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "回到家時，鞋子一脫，你立刻坐到地上。家人把袋子放下，說今天總算去完。你想起親戚問過很多問題，想起車窗外的燈，也想起自己好像沒有玩很多，卻很累。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w2_7_short_family_visit_or_outing_tired_after_return_choice_1",
            "text": "直接躺下。",
            "buttonText": "直接躺下。",
            "playerLine": "我好攰。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人叫你先洗手。你拖著腳走去洗手間，覺得累原來可以從腳底一路爬上來。"
            },
            "resultText": "家人叫你先洗手。你拖著腳走去洗手間，覺得累原來可以從腳底一路爬上來。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w2_7_short_family_visit_or_outing",
              "variantId": "tired_after_return",
              "mustMatchEventTitle": "短途家庭出行或探親"
            }
          },
          {
            "id": "s2_w2_7_short_family_visit_or_outing_tired_after_return_choice_2",
            "text": "說親戚好多。",
            "buttonText": "說親戚好多。",
            "playerLine": "好多人呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人笑說過年會更多。你聽到這句，突然覺得今天只是練習。"
            },
            "resultText": "家人笑說過年會更多。你聽到這句，突然覺得今天只是練習。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w2_7_short_family_visit_or_outing",
              "variantId": "tired_after_return",
              "mustMatchEventTitle": "短途家庭出行或探親"
            }
          },
          {
            "id": "s2_w2_7_short_family_visit_or_outing_tired_after_return_choice_3",
            "text": "找帶去的玩具。",
            "buttonText": "找帶去的玩具。",
            "playerLine": "我個玩具呢？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你在袋底找到它，鬆了一口氣。去了一整天，它還是跟你一起回來了。"
            },
            "resultText": "你在袋底找到它，鬆了一口氣。去了一整天，它還是跟你一起回來了。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w2_7_short_family_visit_or_outing",
              "variantId": "tired_after_return",
              "mustMatchEventTitle": "短途家庭出行或探親"
            }
          },
          {
            "id": "s2_w2_7_short_family_visit_or_outing_tired_after_return_choice_4",
            "text": "問下次還去嗎。",
            "buttonText": "問下次還去嗎。",
            "playerLine": "下次仲去？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說有機會。你沒有說好不好，只把外套放到椅背上，讓今天慢慢結束。"
            },
            "resultText": "家人說有機會。你沒有說好不好，只把外套放到椅背上，讓今天慢慢結束。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w2_7_short_family_visit_or_outing",
              "variantId": "tired_after_return",
              "mustMatchEventTitle": "短途家庭出行或探親"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      }
    ]
  },
  {
    "id": "s2_w2_8_pack_schoolbag_before_return",
    "sourceTopicId": "S2-W2-8",
    "weekPool": "S2-W2_authored_weekly",
    "termId": "term_p1_s2",
    "week": 2,
    "category": "neighbor",
    "title": "開學前整理書包",
    "sceneIntro": "假期快完，書包終於被放到桌上。裡面有功課紙、手冊、皺了的通告和一支不知為何沒有蓋好的筆。家人說要先整理好，不然開學第一天會很慌。你聽見「開學」兩個字，忽然覺得假期變短了。",
    "metadata": {
      "sourceMarkdown": "info/s2_w1_w6_dialogue_draft_v0_5.md",
      "sourceTitle": "S2-W1–S2-W6｜聖誕假期到農曆新年後｜事件對話草稿 v0.5",
      "uiHidden": true,
      "identityTypeId": "same_age_neighbor",
      "usesSelectedNeighbor": true,
      "activeMessage": false,
      "selectedNeighborPersonality": "persisted_from_S2-W1-2",
      "displayNameRule": "neighborDisplayName = primarySameAgeNeighborNameKnown ? selectedNeighbor.knownDisplayName : selectedNeighbor.unknownDisplayName"
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        2,
        2
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w2_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w1_w6",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "family_finds_homework",
        "variantTitle": "家人一起找功課",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "家人把書包倒了一半出來：「假期功課放邊？」你看著桌面上那堆紙，覺得每張都像功課，又像不是。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w2_8_pack_schoolbag_before_return_family_finds_homework_choice_1",
            "text": "一張張找。",
            "buttonText": "一張張找。",
            "playerLine": "我搵吓。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把紙攤開，找到熟悉的題目。家人幫你疊好，桌面慢慢從亂變成幾小堆。"
            },
            "resultText": "你把紙攤開，找到熟悉的題目。家人幫你疊好，桌面慢慢從亂變成幾小堆。",
            "statusDelta": {
              "學業": 1,
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
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w2_8_pack_schoolbag_before_return",
              "variantId": "family_finds_homework",
              "mustMatchEventTitle": "開學前整理書包"
            }
          },
          {
            "id": "s2_w2_8_pack_schoolbag_before_return_family_finds_homework_choice_2",
            "text": "說應該在書包。",
            "buttonText": "說應該在書包。",
            "playerLine": "應該喺入面。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說應該不等於找到。你把手伸進最底，摸到一張皺紙，心也皺了一下。"
            },
            "resultText": "家人說應該不等於找到。你把手伸進最底，摸到一張皺紙，心也皺了一下。",
            "statusDelta": {
              "學業": 1,
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
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w2_8_pack_schoolbag_before_return",
              "variantId": "family_finds_homework",
              "mustMatchEventTitle": "開學前整理書包"
            }
          },
          {
            "id": "s2_w2_8_pack_schoolbag_before_return_family_finds_homework_choice_3",
            "text": "問哪張要交。",
            "buttonText": "問哪張要交。",
            "playerLine": "邊張要交？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人看手冊，幫你圈出要交的幾張。你終於不用把全部紙都當成怪獸。"
            },
            "resultText": "家人看手冊，幫你圈出要交的幾張。你終於不用把全部紙都當成怪獸。",
            "statusDelta": {
              "學業": 1,
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
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w2_8_pack_schoolbag_before_return",
              "variantId": "family_finds_homework",
              "mustMatchEventTitle": "開學前整理書包"
            }
          },
          {
            "id": "s2_w2_8_pack_schoolbag_before_return_family_finds_homework_choice_4",
            "text": "想先休息。",
            "buttonText": "想先休息。",
            "playerLine": "我陣間先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說現在先整理，等下才休息。你坐到椅子上，知道假期快要被收進書包裡。"
            },
            "resultText": "家人說現在先整理，等下才休息。你坐到椅子上，知道假期快要被收進書包裡。",
            "statusDelta": {
              "學業": 1,
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
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w2_8_pack_schoolbag_before_return",
              "variantId": "family_finds_homework",
              "mustMatchEventTitle": "開學前整理書包"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "missing_one_page",
        "variantTitle": "發現少做一頁",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "你以為功課都做完了，直到家人翻到最後一頁：「呢頁點解空嘅？」你看著那一頁，突然想起自己那天只看了一眼，沒有真的寫。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w2_8_pack_schoolbag_before_return_missing_one_page_choice_1",
            "text": "立刻補做。",
            "buttonText": "立刻補做。",
            "playerLine": "我而家做。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你拿起鉛筆，寫得比平日慢。家人沒有再罵，只坐在旁邊看你把空白填少一點。"
            },
            "resultText": "你拿起鉛筆，寫得比平日慢。家人沒有再罵，只坐在旁邊看你把空白填少一點。",
            "statusDelta": {
              "學業": 1,
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
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w2_8_pack_schoolbag_before_return",
              "variantId": "missing_one_page",
              "mustMatchEventTitle": "開學前整理書包"
            }
          },
          {
            "id": "s2_w2_8_pack_schoolbag_before_return_missing_one_page_choice_2",
            "text": "說忘記了。",
            "buttonText": "說忘記了。",
            "playerLine": "我唔記得咗。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人嘆氣，說忘記也要補。你低頭看那頁空白，覺得它比做錯更明顯。"
            },
            "resultText": "家人嘆氣，說忘記也要補。你低頭看那頁空白，覺得它比做錯更明顯。",
            "statusDelta": {
              "學業": 1,
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
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w2_8_pack_schoolbag_before_return",
              "variantId": "missing_one_page",
              "mustMatchEventTitle": "開學前整理書包"
            }
          },
          {
            "id": "s2_w2_8_pack_schoolbag_before_return_missing_one_page_choice_3",
            "text": "問明早做可不可以。",
            "buttonText": "問明早做可不可以。",
            "playerLine": "聽朝做得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說明早會很趕。你想像自己穿校服時還在寫字，立刻沒有那麼想拖。"
            },
            "resultText": "家人說明早會很趕。你想像自己穿校服時還在寫字，立刻沒有那麼想拖。",
            "statusDelta": {
              "學業": 1,
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
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w2_8_pack_schoolbag_before_return",
              "variantId": "missing_one_page",
              "mustMatchEventTitle": "開學前整理書包"
            }
          },
          {
            "id": "s2_w2_8_pack_schoolbag_before_return_missing_one_page_choice_4",
            "text": "心裡很急。",
            "buttonText": "心裡很急。",
            "playerLine": "點算呀？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人把題目分開，叫你先做第一格。那頁還是很多，但至少不是一整片空白了。"
            },
            "resultText": "家人把題目分開，叫你先做第一格。那頁還是很多，但至少不是一整片空白了。",
            "statusDelta": {
              "學業": 1,
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
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w2_8_pack_schoolbag_before_return",
              "variantId": "missing_one_page",
              "mustMatchEventTitle": "開學前整理書包"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "neighbor_returns_to_school",
        "variantTitle": "鄰居也要回校",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "傍晚倒垃圾時，你在走廊碰到{neighborDisplayName}。對方背著一個空書包，說媽媽叫試試有沒有太重。看見你手裡的功課夾，對方問：「你都聽日返學？」"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w2_8_pack_schoolbag_before_return_neighbor_returns_to_school_choice_1",
            "text": "說是啊。",
            "buttonText": "說是啊。",
            "playerLine": "係呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}把書包帶拉緊一點，說自己也是。你們不同學校，但假期結束的聲音很像。"
            },
            "resultText": "{neighborDisplayName}把書包帶拉緊一點，說自己也是。你們不同學校，但假期結束的聲音很像。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w2_8_pack_schoolbag_before_return",
              "variantId": "neighbor_returns_to_school",
              "mustMatchEventTitle": "開學前整理書包"
            }
          },
          {
            "id": "s2_w2_8_pack_schoolbag_before_return_neighbor_returns_to_school_choice_2",
            "text": "問對方做完未。",
            "buttonText": "問對方做完未。",
            "playerLine": "你功課做完未？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}說差不多，然後很快補一句還有一頁。你聽見「一頁」，覺得大家都有小秘密。"
            },
            "resultText": "{neighborDisplayName}說差不多，然後很快補一句還有一頁。你聽見「一頁」，覺得大家都有小秘密。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w2_8_pack_schoolbag_before_return",
              "variantId": "neighbor_returns_to_school",
              "mustMatchEventTitle": "開學前整理書包"
            }
          },
          {
            "id": "s2_w2_8_pack_schoolbag_before_return_neighbor_returns_to_school_choice_3",
            "text": "說不想返學。",
            "buttonText": "說不想返學。",
            "playerLine": "我唔想咁快返。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}也點頭，說假期好短。走廊燈亮著，你們站在家門口，像一起看著假期被關起來。"
            },
            "resultText": "{neighborDisplayName}也點頭，說假期好短。走廊燈亮著，你們站在家門口，像一起看著假期被關起來。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w2_8_pack_schoolbag_before_return",
              "variantId": "neighbor_returns_to_school",
              "mustMatchEventTitle": "開學前整理書包"
            }
          },
          {
            "id": "s2_w2_8_pack_schoolbag_before_return_neighbor_returns_to_school_choice_4",
            "text": "給對方看書包。",
            "buttonText": "給對方看書包。",
            "playerLine": "我都整理緊。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}看了看你的功課夾，說你的比對方那本厚。你不知道這算不算比較，只把夾子抱緊了些。"
            },
            "resultText": "{neighborDisplayName}看了看你的功課夾，說你的比對方那本厚。你不知道這算不算比較，只把夾子抱緊了些。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w2_8_pack_schoolbag_before_return",
              "variantId": "neighbor_returns_to_school",
              "mustMatchEventTitle": "開學前整理書包"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgeNeighbor",
        "identityTypeId": "same_age_neighbor",
        "usesSelectedNeighbor": true,
        "activeMessage": false,
        "npcIdHint": "primarySameAgeNeighborId",
        "npcNameFallback": "{neighborDisplayName}"
      },
      {
        "variantId": "holiday_ending_feeling",
        "variantTitle": "假期結束感",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "晚上，校服被掛到椅背上，書包靠在門口，水樽也洗好了。家人說：「明朝要早起喇。」你看著這些熟悉的東西，覺得它們像一個個回來找你的同學。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w2_8_pack_schoolbag_before_return_holiday_ending_feeling_choice_1",
            "text": "看校服。",
            "buttonText": "看校服。",
            "playerLine": "聽日又要著。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "校服沒有回答你，只安靜掛著。你忽然想起班房的座位和小息鐘聲。"
            },
            "resultText": "校服沒有回答你，只安靜掛著。你忽然想起班房的座位和小息鐘聲。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w2_8_pack_schoolbag_before_return",
              "variantId": "holiday_ending_feeling",
              "mustMatchEventTitle": "開學前整理書包"
            }
          },
          {
            "id": "s2_w2_8_pack_schoolbag_before_return_holiday_ending_feeling_choice_2",
            "text": "問可以晚點睡嗎。",
            "buttonText": "問可以晚點睡嗎。",
            "playerLine": "今晚可唔可以夜少少？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說不可以，明天會起不來。假期最後一晚，也被明天的早晨拉住了。"
            },
            "resultText": "家人說不可以，明天會起不來。假期最後一晚，也被明天的早晨拉住了。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w2_8_pack_schoolbag_before_return",
              "variantId": "holiday_ending_feeling",
              "mustMatchEventTitle": "開學前整理書包"
            }
          },
          {
            "id": "s2_w2_8_pack_schoolbag_before_return_holiday_ending_feeling_choice_3",
            "text": "把書包放好。",
            "buttonText": "把書包放好。",
            "playerLine": "我放門口。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把書包放到門邊，像把自己明天要用的東西排隊。這樣早上應該不會太亂。"
            },
            "resultText": "你把書包放到門邊，像把自己明天要用的東西排隊。這樣早上應該不會太亂。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w2_8_pack_schoolbag_before_return",
              "variantId": "holiday_ending_feeling",
              "mustMatchEventTitle": "開學前整理書包"
            }
          },
          {
            "id": "s2_w2_8_pack_schoolbag_before_return_holiday_ending_feeling_choice_4",
            "text": "有點不捨得。",
            "buttonText": "有點不捨得。",
            "playerLine": "假期咁快完。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說很快又會有別的假。你不知道那是多久，只把今天剩下的時間抱緊一點。"
            },
            "resultText": "家人說很快又會有別的假。你不知道那是多久，只把今天剩下的時間抱緊一點。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w2_8_pack_schoolbag_before_return",
              "variantId": "holiday_ending_feeling",
              "mustMatchEventTitle": "開學前整理書包"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      }
    ]
  },
  {
    "id": "s2_w3_9_back_to_school_holiday_talk",
    "sourceTopicId": "S2-W3-9",
    "weekPool": "S2-W3_authored_weekly",
    "termId": "term_p1_s2",
    "week": 3,
    "category": "holiday",
    "title": "回校後大家講假期",
    "sceneIntro": "回校第一天，班房一早就比平日多聲。有人把新文具拿出來，有人說自己去了哪裡，有人只趴在桌上不想說話。假期像一堆小東西，被每個人從書包、口袋和嘴巴裡帶回來。",
    "metadata": {
      "sourceMarkdown": "info/s2_w1_w6_dialogue_draft_v0_5.md",
      "sourceTitle": "S2-W1–S2-W6｜聖誕假期到農曆新年後｜事件對話草稿 v0.5",
      "uiHidden": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        3,
        3
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w3_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w1_w6",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "kalong_holiday_talk",
        "variantTitle": "家朗講假期",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "家朗一坐下就轉過來：「我去咗睇好大棵聖誕樹！好多人，差啲搵唔返路。」他說得很快，手還比到很高。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w3_9_back_to_school_holiday_talk_kalong_holiday_talk_choice_1",
            "text": "問有幾高。",
            "buttonText": "問有幾高。",
            "playerLine": "有幾高呀？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗把手舉到最高，還嫌不夠高。你知道他可能誇張，但那棵樹在他手裡真的變高了。"
            },
            "resultText": "家朗把手舉到最高，還嫌不夠高。你知道他可能誇張，但那棵樹在他手裡真的變高了。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_9_back_to_school_holiday_talk",
              "variantId": "kalong_holiday_talk",
              "mustMatchEventTitle": "回校後大家講假期"
            }
          },
          {
            "id": "s2_w3_9_back_to_school_holiday_talk_kalong_holiday_talk_choice_2",
            "text": "說自己也看到燈。",
            "buttonText": "說自己也看到燈。",
            "playerLine": "我都有睇燈。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗立刻問你在哪裡看。兩個不同地方的燈，被你們放到同一張課桌上。"
            },
            "resultText": "家朗立刻問你在哪裡看。兩個不同地方的燈，被你們放到同一張課桌上。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_9_back_to_school_holiday_talk",
              "variantId": "kalong_holiday_talk",
              "mustMatchEventTitle": "回校後大家講假期"
            }
          },
          {
            "id": "s2_w3_9_back_to_school_holiday_talk_kalong_holiday_talk_choice_3",
            "text": "只聽他講。",
            "buttonText": "只聽他講。",
            "playerLine": "嗯。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗沒有介意，繼續講人很多。你沒有講自己的假期，也像跟著他走過一次商場。"
            },
            "resultText": "家朗沒有介意，繼續講人很多。你沒有講自己的假期，也像跟著他走過一次商場。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_9_back_to_school_holiday_talk",
              "variantId": "kalong_holiday_talk",
              "mustMatchEventTitle": "回校後大家講假期"
            }
          },
          {
            "id": "s2_w3_9_back_to_school_holiday_talk_kalong_holiday_talk_choice_4",
            "text": "提醒要交功課。",
            "buttonText": "提醒要交功課。",
            "playerLine": "等陣要交功課。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗愣了一下，立刻翻書包。假期話題被功課拉回來，但他還是一邊找一邊講聖誕樹。"
            },
            "resultText": "家朗愣了一下，立刻翻書包。假期話題被功課拉回來，但他還是一邊找一邊講聖誕樹。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_9_back_to_school_holiday_talk",
              "variantId": "kalong_holiday_talk",
              "mustMatchEventTitle": "回校後大家講假期"
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
        "variantId": "wingnam_holiday_talk",
        "variantTitle": "穎心講假期",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "穎心把功課夾放好，沒有主動說假期。你看見她鉛筆盒旁邊夾著一張小小的星星貼紙。她發現你在看，才小聲說：「呢個係假期貼上去嘅。」"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w3_9_back_to_school_holiday_talk_wingnam_holiday_talk_choice_1",
            "text": "說很漂亮。",
            "buttonText": "說很漂亮。",
            "playerLine": "幾靚呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心看了貼紙一眼，嘴角很小地動了一下。她沒有講很多，但那顆星星變成你們都看過的東西。"
            },
            "resultText": "穎心看了貼紙一眼，嘴角很小地動了一下。她沒有講很多，但那顆星星變成你們都看過的東西。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_9_back_to_school_holiday_talk",
              "variantId": "wingnam_holiday_talk",
              "mustMatchEventTitle": "回校後大家講假期"
            }
          },
          {
            "id": "s2_w3_9_back_to_school_holiday_talk_wingnam_holiday_talk_choice_2",
            "text": "問在哪裡買。",
            "buttonText": "問在哪裡買。",
            "playerLine": "邊度買㗎？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她說不是買，是姐姐給的。這句話很短，卻讓你知道她假期裡也有自己的小事。"
            },
            "resultText": "她說不是買，是姐姐給的。這句話很短，卻讓你知道她假期裡也有自己的小事。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_9_back_to_school_holiday_talk",
              "variantId": "wingnam_holiday_talk",
              "mustMatchEventTitle": "回校後大家講假期"
            }
          },
          {
            "id": "s2_w3_9_back_to_school_holiday_talk_wingnam_holiday_talk_choice_3",
            "text": "說自己也有貼紙。",
            "buttonText": "說自己也有貼紙。",
            "playerLine": "我都有貼紙。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心點點頭，沒有叫你拿出來比。你突然覺得有些東西可以只是有，不一定要比。"
            },
            "resultText": "穎心點點頭，沒有叫你拿出來比。你突然覺得有些東西可以只是有，不一定要比。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_9_back_to_school_holiday_talk",
              "variantId": "wingnam_holiday_talk",
              "mustMatchEventTitle": "回校後大家講假期"
            }
          },
          {
            "id": "s2_w3_9_back_to_school_holiday_talk_wingnam_holiday_talk_choice_4",
            "text": "不問下去。",
            "buttonText": "不問下去。",
            "playerLine": "哦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心把貼紙重新夾好。你沒有追問，她也沒有把那件小事收得很急。"
            },
            "resultText": "穎心把貼紙重新夾好。你沒有追問，她也沒有把那件小事收得很急。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_9_back_to_school_holiday_talk",
              "variantId": "wingnam_holiday_talk",
              "mustMatchEventTitle": "回校後大家講假期"
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
        "variantId": "zixuan_holiday_talk",
        "variantTitle": "梓軒講假期",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "梓軒一邊拿功課，一邊問：「你哋假期做晒功課未？」他說完立刻補一句：「我最後一日先差少少。」聽起來像在問你，其實也像在替自己找答案。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w3_9_back_to_school_holiday_talk_zixuan_holiday_talk_choice_1",
            "text": "說做完了。",
            "buttonText": "說做完了。",
            "playerLine": "做完。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒馬上問你幾時做完。你發現「做完」後面，還可以被追問很多。"
            },
            "resultText": "梓軒馬上問你幾時做完。你發現「做完」後面，還可以被追問很多。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_9_back_to_school_holiday_talk",
              "variantId": "zixuan_holiday_talk",
              "mustMatchEventTitle": "回校後大家講假期"
            }
          },
          {
            "id": "s2_w3_9_back_to_school_holiday_talk_zixuan_holiday_talk_choice_2",
            "text": "說差點忘記。",
            "buttonText": "說差點忘記。",
            "playerLine": "我差啲唔記得。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒停了一下，說他也有一頁很遲才做。這次他沒有立刻比較，像被你講中了甚麼。"
            },
            "resultText": "梓軒停了一下，說他也有一頁很遲才做。這次他沒有立刻比較，像被你講中了甚麼。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_9_back_to_school_holiday_talk",
              "variantId": "zixuan_holiday_talk",
              "mustMatchEventTitle": "回校後大家講假期"
            }
          },
          {
            "id": "s2_w3_9_back_to_school_holiday_talk_zixuan_holiday_talk_choice_3",
            "text": "不想講功課。",
            "buttonText": "不想講功課。",
            "playerLine": "唔講呢個啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒皺皺眉，但沒有繼續問。你把功課夾放好，像把那個話題也夾起來。"
            },
            "resultText": "梓軒皺皺眉，但沒有繼續問。你把功課夾放好，像把那個話題也夾起來。",
            "statusDelta": {
              "學業": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w3_9_back_to_school_holiday_talk",
              "variantId": "zixuan_holiday_talk",
              "mustMatchEventTitle": "回校後大家講假期"
            }
          },
          {
            "id": "s2_w3_9_back_to_school_holiday_talk_zixuan_holiday_talk_choice_4",
            "text": "反問他去了哪裡。",
            "buttonText": "反問他去了哪裡。",
            "playerLine": "咁你去咗邊？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒說去了親戚家，很多人問他成績。原來他的假期也不只是玩。"
            },
            "resultText": "梓軒說去了親戚家，很多人問他成績。原來他的假期也不只是玩。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_9_back_to_school_holiday_talk",
              "variantId": "zixuan_holiday_talk",
              "mustMatchEventTitle": "回校後大家講假期"
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
        "variantId": "baakyu_holiday_talk",
        "variantTitle": "柏宇講假期",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "柏宇把書包放下，神神秘秘地說：「我假期見到一間舖，門口有隻熊，夜晚可能會郁。」他自己先笑，像也不完全相信。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w3_9_back_to_school_holiday_talk_baakyu_holiday_talk_choice_1",
            "text": "問熊在哪裡。",
            "buttonText": "問熊在哪裡。",
            "playerLine": "邊度有熊？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇立刻講商場、樓層和一堆不太清楚的方向。你不一定找得到，但那隻熊像真的站在某個地方。"
            },
            "resultText": "柏宇立刻講商場、樓層和一堆不太清楚的方向。你不一定找得到，但那隻熊像真的站在某個地方。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_9_back_to_school_holiday_talk",
              "variantId": "baakyu_holiday_talk",
              "mustMatchEventTitle": "回校後大家講假期"
            }
          },
          {
            "id": "s2_w3_9_back_to_school_holiday_talk_baakyu_holiday_talk_choice_2",
            "text": "說公仔不會郁。",
            "buttonText": "說公仔不會郁。",
            "playerLine": "公仔唔會郁㗎。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇說夜晚就難講。你看著他，他把普通公仔說成故事的能力還是很強。"
            },
            "resultText": "柏宇說夜晚就難講。你看著他，他把普通公仔說成故事的能力還是很強。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_9_back_to_school_holiday_talk",
              "variantId": "baakyu_holiday_talk",
              "mustMatchEventTitle": "回校後大家講假期"
            }
          },
          {
            "id": "s2_w3_9_back_to_school_holiday_talk_baakyu_holiday_talk_choice_3",
            "text": "說有點驚。",
            "buttonText": "說有點驚。",
            "playerLine": "咁有啲驚。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇立刻改口：「可能只係燈影。」他沒有完全收回故事，但把聲音放輕了。"
            },
            "resultText": "柏宇立刻改口：「可能只係燈影。」他沒有完全收回故事，但把聲音放輕了。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_9_back_to_school_holiday_talk",
              "variantId": "baakyu_holiday_talk",
              "mustMatchEventTitle": "回校後大家講假期"
            }
          },
          {
            "id": "s2_w3_9_back_to_school_holiday_talk_baakyu_holiday_talk_choice_4",
            "text": "叫他先交功課。",
            "buttonText": "叫他先交功課。",
            "playerLine": "你功課交咗未？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇拍一拍書包，說差點忘記。那隻會郁的熊被功課壓回書包旁邊。"
            },
            "resultText": "柏宇拍一拍書包，說差點忘記。那隻會郁的熊被功課壓回書包旁邊。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_9_back_to_school_holiday_talk",
              "variantId": "baakyu_holiday_talk",
              "mustMatchEventTitle": "回校後大家講假期"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_mischief_maker",
        "npcIdHint": "classmate_mischief_maker",
        "npcNameFallback": "柏宇"
      }
    ]
  },
  {
    "id": "s2_w3_10_class_pop_culture_toys_talk",
    "sourceTopicId": "S2-W3-10",
    "weekPool": "S2-W3_authored_weekly",
    "termId": "term_p1_s2",
    "week": 3,
    "category": "holiday",
    "title": "班上有人講最近流行的戲／卡通／玩具",
    "sceneIntro": "小息前，幾個同學圍在一起講最近看的戲和玩具。不是每個人都看過同一樣東西，有人講到很大聲，有人只聽，有人把自己有沒有那件玩具看得很重。你站在旁邊，聽到幾個名字，但有些你根本不知道是誰。",
    "metadata": {
      "sourceMarkdown": "info/s2_w1_w6_dialogue_draft_v0_5.md",
      "sourceTitle": "S2-W1–S2-W6｜聖誕假期到農曆新年後｜事件對話草稿 v0.5",
      "uiHidden": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        3,
        3
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w3_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w1_w6",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "kalong_lively_movie",
        "variantTitle": "家朗把電影講得很熱鬧",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "家朗用手比了一個很大的圈：「佢最後咁樣飛出嚟！」旁邊同學笑，他又轉向你：「你有冇睇？」"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w3_10_class_pop_culture_toys_talk_kalong_lively_movie_choice_1",
            "text": "說看過一點。",
            "buttonText": "說看過一點。",
            "playerLine": "睇過少少。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗立刻問你看到哪一段。你講得不完整，他也幫你補得很開心。"
            },
            "resultText": "家朗立刻問你看到哪一段。你講得不完整，他也幫你補得很開心。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_10_class_pop_culture_toys_talk",
              "variantId": "kalong_lively_movie",
              "mustMatchEventTitle": "班上有人講最近流行的戲／卡通／玩具"
            }
          },
          {
            "id": "s2_w3_10_class_pop_culture_toys_talk_kalong_lively_movie_choice_2",
            "text": "說沒看過。",
            "buttonText": "說沒看過。",
            "playerLine": "我冇睇。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗說下次你要看，然後又繼續講最熱鬧那段。你沒看過，也還是被他的手勢拉進去。"
            },
            "resultText": "家朗說下次你要看，然後又繼續講最熱鬧那段。你沒看過，也還是被他的手勢拉進去。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_10_class_pop_culture_toys_talk",
              "variantId": "kalong_lively_movie",
              "mustMatchEventTitle": "班上有人講最近流行的戲／卡通／玩具"
            }
          },
          {
            "id": "s2_w3_10_class_pop_culture_toys_talk_kalong_lively_movie_choice_3",
            "text": "問角色名字。",
            "buttonText": "問角色名字。",
            "playerLine": "佢叫咩名？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗卡了一下，才發現自己一直用「嗰個」代替名字。你們一起笑了一下。"
            },
            "resultText": "家朗卡了一下，才發現自己一直用「嗰個」代替名字。你們一起笑了一下。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_10_class_pop_culture_toys_talk",
              "variantId": "kalong_lively_movie",
              "mustMatchEventTitle": "班上有人講最近流行的戲／卡通／玩具"
            }
          },
          {
            "id": "s2_w3_10_class_pop_culture_toys_talk_kalong_lively_movie_choice_4",
            "text": "覺得太吵。",
            "buttonText": "覺得太吵。",
            "playerLine": "你講細聲啲。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗立刻壓低聲音一點，可是手還是比得很大。熱鬧沒有不見，只是變小聲了。"
            },
            "resultText": "家朗立刻壓低聲音一點，可是手還是比得很大。熱鬧沒有不見，只是變小聲了。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_10_class_pop_culture_toys_talk",
              "variantId": "kalong_lively_movie",
              "mustMatchEventTitle": "班上有人講最近流行的戲／卡通／玩具"
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
        "variantId": "baakyu_odd_character",
        "variantTitle": "柏宇講奇怪角色",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "柏宇說他最喜歡的不是主角，是角落一個只出現一下的怪角色。「佢個樣好似鉛筆刨。」他說得很認真，幾個同學不知道該笑還是聽。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w3_10_class_pop_culture_toys_talk_baakyu_odd_character_choice_1",
            "text": "問哪裡像鉛筆刨。",
            "buttonText": "問哪裡像鉛筆刨。",
            "playerLine": "邊度似呀？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇用手比出一個怪形狀。你看不太懂，但開始覺得那個角色真的可能有點像。"
            },
            "resultText": "柏宇用手比出一個怪形狀。你看不太懂，但開始覺得那個角色真的可能有點像。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_10_class_pop_culture_toys_talk",
              "variantId": "baakyu_odd_character",
              "mustMatchEventTitle": "班上有人講最近流行的戲／卡通／玩具"
            }
          },
          {
            "id": "s2_w3_10_class_pop_culture_toys_talk_baakyu_odd_character_choice_2",
            "text": "說主角比較好。",
            "buttonText": "說主角比較好。",
            "playerLine": "主角好啲喎。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇說主角太普通。你們沒有吵，只是發現同一套戲可以看見不同東西。"
            },
            "resultText": "柏宇說主角太普通。你們沒有吵，只是發現同一套戲可以看見不同東西。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_10_class_pop_culture_toys_talk",
              "variantId": "baakyu_odd_character",
              "mustMatchEventTitle": "班上有人講最近流行的戲／卡通／玩具"
            }
          },
          {
            "id": "s2_w3_10_class_pop_culture_toys_talk_baakyu_odd_character_choice_3",
            "text": "笑出來。",
            "buttonText": "笑出來。",
            "playerLine": "哈哈，鉛筆刨。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇也笑，越講越離譜。那個角色從電影裡跑出來，變成你們小息的一句暗號。"
            },
            "resultText": "柏宇也笑，越講越離譜。那個角色從電影裡跑出來，變成你們小息的一句暗號。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_10_class_pop_culture_toys_talk",
              "variantId": "baakyu_odd_character",
              "mustMatchEventTitle": "班上有人講最近流行的戲／卡通／玩具"
            }
          },
          {
            "id": "s2_w3_10_class_pop_culture_toys_talk_baakyu_odd_character_choice_4",
            "text": "聽不懂。",
            "buttonText": "聽不懂。",
            "playerLine": "我唔知你講邊個。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇有點失望，但又重新講一次出場位置。你還是不太懂，不過知道他記得很細。"
            },
            "resultText": "柏宇有點失望，但又重新講一次出場位置。你還是不太懂，不過知道他記得很細。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_10_class_pop_culture_toys_talk",
              "variantId": "baakyu_odd_character",
              "mustMatchEventTitle": "班上有人講最近流行的戲／卡通／玩具"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_mischief_maker",
        "npcIdHint": "classmate_mischief_maker",
        "npcNameFallback": "柏宇"
      },
      {
        "variantId": "zixuan_who_has_toy",
        "variantTitle": "梓軒講誰有玩具",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "梓軒拿著一張玩具宣傳紙，指著上面說：「呢個而家好多人有。」他看向幾個同學：「你有冇？」那張紙很薄，但忽然像一張排名表。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w3_10_class_pop_culture_toys_talk_zixuan_who_has_toy_choice_1",
            "text": "說自己沒有。",
            "buttonText": "說自己沒有。",
            "playerLine": "我冇。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒看你一眼，沒有立刻笑，只說很難買。你分不清他是在安慰，還是在說那玩具更厲害。"
            },
            "resultText": "梓軒看你一眼，沒有立刻笑，只說很難買。你分不清他是在安慰，還是在說那玩具更厲害。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_10_class_pop_culture_toys_talk",
              "variantId": "zixuan_who_has_toy",
              "mustMatchEventTitle": "班上有人講最近流行的戲／卡通／玩具"
            }
          },
          {
            "id": "s2_w3_10_class_pop_culture_toys_talk_zixuan_who_has_toy_choice_2",
            "text": "問好不好玩。",
            "buttonText": "問好不好玩。",
            "playerLine": "好唔好玩先？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒停了一下，好像第一次想不是有沒有，而是好不好玩。他說應該好玩，聲音沒剛才那麼肯定。"
            },
            "resultText": "梓軒停了一下，好像第一次想不是有沒有，而是好不好玩。他說應該好玩，聲音沒剛才那麼肯定。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_10_class_pop_culture_toys_talk",
              "variantId": "zixuan_who_has_toy",
              "mustMatchEventTitle": "班上有人講最近流行的戲／卡通／玩具"
            }
          },
          {
            "id": "s2_w3_10_class_pop_culture_toys_talk_zixuan_who_has_toy_choice_3",
            "text": "不想比玩具。",
            "buttonText": "不想比玩具。",
            "playerLine": "唔好比啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒撇撇嘴，轉去問另一個同學。你沒有進入那張看不見的排名表。"
            },
            "resultText": "梓軒撇撇嘴，轉去問另一個同學。你沒有進入那張看不見的排名表。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_10_class_pop_culture_toys_talk",
              "variantId": "zixuan_who_has_toy",
              "mustMatchEventTitle": "班上有人講最近流行的戲／卡通／玩具"
            }
          },
          {
            "id": "s2_w3_10_class_pop_culture_toys_talk_zixuan_who_has_toy_choice_4",
            "text": "說鄰居有貼紙。",
            "buttonText": "說鄰居有貼紙。",
            "playerLine": "我鄰居有閃貼。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒問是不是限量。你發現校外的東西一拿進班房，也可能立刻變成比較。"
            },
            "resultText": "梓軒問是不是限量。你發現校外的東西一拿進班房，也可能立刻變成比較。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_10_class_pop_culture_toys_talk",
              "variantId": "zixuan_who_has_toy",
              "mustMatchEventTitle": "班上有人講最近流行的戲／卡通／玩具"
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
        "variantId": "wingnam_remembers_detail",
        "variantTitle": "穎心只是聽但記得細節",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "穎心坐在旁邊削鉛筆，沒有加入玩具話題。可是當有人把角色名字講錯時，她很輕地說：「唔係呢個名。」大家轉頭看她，她立刻把眼睛移回鉛筆。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w3_10_class_pop_culture_toys_talk_wingnam_remembers_detail_choice_1",
            "text": "問正確名字。",
            "buttonText": "問正確名字。",
            "playerLine": "咁叫咩？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心小聲說出名字。她沒有講自己很熟，只是剛好記得。"
            },
            "resultText": "穎心小聲說出名字。她沒有講自己很熟，只是剛好記得。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_10_class_pop_culture_toys_talk",
              "variantId": "wingnam_remembers_detail",
              "mustMatchEventTitle": "班上有人講最近流行的戲／卡通／玩具"
            }
          },
          {
            "id": "s2_w3_10_class_pop_culture_toys_talk_wingnam_remembers_detail_choice_2",
            "text": "幫她接話。",
            "buttonText": "幫她接話。",
            "playerLine": "佢講得啱呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "幾個同學又回去討論。穎心沒有望你很久，但她削鉛筆的手慢了一點。"
            },
            "resultText": "幾個同學又回去討論。穎心沒有望你很久，但她削鉛筆的手慢了一點。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_10_class_pop_culture_toys_talk",
              "variantId": "wingnam_remembers_detail",
              "mustMatchEventTitle": "班上有人講最近流行的戲／卡通／玩具"
            }
          },
          {
            "id": "s2_w3_10_class_pop_culture_toys_talk_wingnam_remembers_detail_choice_3",
            "text": "不把她拉進來。",
            "buttonText": "不把她拉進來。",
            "playerLine": "……",
            "playerLineType": "silent",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有追問她看過多少。穎心繼續削鉛筆，那句正確名字留在桌邊。"
            },
            "resultText": "你沒有追問她看過多少。穎心繼續削鉛筆，那句正確名字留在桌邊。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_10_class_pop_culture_toys_talk",
              "variantId": "wingnam_remembers_detail",
              "mustMatchEventTitle": "班上有人講最近流行的戲／卡通／玩具"
            }
          },
          {
            "id": "s2_w3_10_class_pop_culture_toys_talk_wingnam_remembers_detail_choice_4",
            "text": "問她有沒有看過。",
            "buttonText": "問她有沒有看過。",
            "playerLine": "你都有睇？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心停了停，說看過一點。她的「一點」可能比別人的很多還要記得清楚。"
            },
            "resultText": "穎心停了停，說看過一點。她的「一點」可能比別人的很多還要記得清楚。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_10_class_pop_culture_toys_talk",
              "variantId": "wingnam_remembers_detail",
              "mustMatchEventTitle": "班上有人講最近流行的戲／卡通／玩具"
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
      }
    ],
    "popCultureAnchor": "TODO_RESEARCH_CONFIRM",
    "fallback": [
      "generic_cartoon_movie",
      "generic_toy_trend",
      "pencil_case_sticker"
    ]
  },
  {
    "id": "s2_w3_11_teacher_collects_holiday_homework",
    "sourceTopicId": "S2-W3-11",
    "weekPool": "S2-W3_authored_weekly",
    "termId": "term_p1_s2",
    "week": 3,
    "category": "academic",
    "title": "老師收假期功課",
    "sceneIntro": "第一節課前，老師叫大家把假期功課放到桌角。班房忽然出現很多紙的聲音，有人的紙夾很整齊，有人的角折了，有人還在書包裡翻。你把自己的功課拿出來，看著那疊紙，不知道它算不算平安回到學校。",
    "metadata": {
      "sourceMarkdown": "info/s2_w1_w6_dialogue_draft_v0_5.md",
      "sourceTitle": "S2-W1–S2-W6｜聖誕假期到農曆新年後｜事件對話草稿 v0.5",
      "uiHidden": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        3,
        3
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w3_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w1_w6",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "strict_teacher_collects",
        "variantTitle": "嚴格老師收齊",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "老師站在講台前說：「功課放左上角，唔好等我逐個追。」她看了一眼鐘，聲音不大，但班房立刻安靜了一點。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w3_11_teacher_collects_holiday_homework_strict_teacher_collects_choice_1",
            "text": "立刻放好。",
            "buttonText": "立刻放好。",
            "playerLine": "我放呢度。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把功課放到左上角，紙角還算平。老師走過時沒有停下來，這次沒有被叫住就是好消息。"
            },
            "resultText": "你把功課放到左上角，紙角還算平。老師走過時沒有停下來，這次沒有被叫住就是好消息。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_11_teacher_collects_holiday_homework",
              "variantId": "strict_teacher_collects",
              "mustMatchEventTitle": "老師收假期功課"
            }
          },
          {
            "id": "s2_w3_11_teacher_collects_holiday_homework_strict_teacher_collects_choice_2",
            "text": "再檢查一次。",
            "buttonText": "再檢查一次。",
            "playerLine": "我睇多次。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你翻到第二頁時，前面已經有人收起書包。你有點急，但至少確認沒有少一張。"
            },
            "resultText": "你翻到第二頁時，前面已經有人收起書包。你有點急，但至少確認沒有少一張。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_11_teacher_collects_holiday_homework",
              "variantId": "strict_teacher_collects",
              "mustMatchEventTitle": "老師收假期功課"
            }
          },
          {
            "id": "s2_w3_11_teacher_collects_holiday_homework_strict_teacher_collects_choice_3",
            "text": "找不到夾子。",
            "buttonText": "找不到夾子。",
            "playerLine": "我個夾呢？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師走近時，你手忙腳亂。她叫你先把紙放出來，夾子等下再找。"
            },
            "resultText": "老師走近時，你手忙腳亂。她叫你先把紙放出來，夾子等下再找。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_11_teacher_collects_holiday_homework",
              "variantId": "strict_teacher_collects",
              "mustMatchEventTitle": "老師收假期功課"
            }
          },
          {
            "id": "s2_w3_11_teacher_collects_holiday_homework_strict_teacher_collects_choice_4",
            "text": "問可不可以補交。",
            "buttonText": "問可不可以補交。",
            "playerLine": "如果漏咗點算？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師看向你：「先搵清楚。」你立刻低頭翻書包，那句話讓你不敢再慢。"
            },
            "resultText": "老師看向你：「先搵清楚。」你立刻低頭翻書包，那句話讓你不敢再慢。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_11_teacher_collects_holiday_homework",
              "variantId": "strict_teacher_collects",
              "mustMatchEventTitle": "老師收假期功課"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "npcIdHint": "char_teacher",
        "npcNameFallback": "老師"
      },
      {
        "variantId": "fair_teacher_missing_page",
        "variantTitle": "公平老師處理漏頁",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "老師收功課時，有同學發現少了一頁，快要哭。老師沒有立刻罵，只說：「先講清楚少咗邊頁，唔好亂塞。」班房裡幾個人都偷偷再翻自己的功課。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w3_11_teacher_collects_holiday_homework_fair_teacher_missing_page_choice_1",
            "text": "一起檢查頁數。",
            "buttonText": "一起檢查頁數。",
            "playerLine": "我數吓頁數。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你一頁一頁數，數到最後才鬆一口氣。公平不是不用緊張，只是有方法慢慢對。"
            },
            "resultText": "你一頁一頁數，數到最後才鬆一口氣。公平不是不用緊張，只是有方法慢慢對。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_11_teacher_collects_holiday_homework",
              "variantId": "fair_teacher_missing_page",
              "mustMatchEventTitle": "老師收假期功課"
            }
          },
          {
            "id": "s2_w3_11_teacher_collects_holiday_homework_fair_teacher_missing_page_choice_2",
            "text": "問老師頁數。",
            "buttonText": "問老師頁數。",
            "playerLine": "老師，應該幾多頁？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師把頁數寫在黑板角落。你不是唯一一個抬頭看，原來很多人都不太肯定。"
            },
            "resultText": "老師把頁數寫在黑板角落。你不是唯一一個抬頭看，原來很多人都不太肯定。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_11_teacher_collects_holiday_homework",
              "variantId": "fair_teacher_missing_page",
              "mustMatchEventTitle": "老師收假期功課"
            }
          },
          {
            "id": "s2_w3_11_teacher_collects_holiday_homework_fair_teacher_missing_page_choice_3",
            "text": "幫同桌看。",
            "buttonText": "幫同桌看。",
            "playerLine": "你係咪少呢張？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "同桌把紙翻出來，真的找到一張夾錯的。你們沒有變成英雄，只是一起少慌了一點。"
            },
            "resultText": "同桌把紙翻出來，真的找到一張夾錯的。你們沒有變成英雄，只是一起少慌了一點。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_11_teacher_collects_holiday_homework",
              "variantId": "fair_teacher_missing_page",
              "mustMatchEventTitle": "老師收假期功課"
            }
          },
          {
            "id": "s2_w3_11_teacher_collects_holiday_homework_fair_teacher_missing_page_choice_4",
            "text": "只管自己的。",
            "buttonText": "只管自己的。",
            "playerLine": "……",
            "playerLineType": "silent",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把自己的功課放好，沒有看別人的混亂。這樣比較安全，但班房裡的急聲還是傳到你耳邊。"
            },
            "resultText": "你把自己的功課放好，沒有看別人的混亂。這樣比較安全，但班房裡的急聲還是傳到你耳邊。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_11_teacher_collects_holiday_homework",
              "variantId": "fair_teacher_missing_page",
              "mustMatchEventTitle": "老師收假期功課"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "npcIdHint": "char_teacher",
        "npcNameFallback": "老師"
      },
      {
        "variantId": "caring_teacher_handles_anxiety",
        "variantTitle": "關顧老師處理緊張",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "有同學拿著功課一直抖，老師蹲低一點說：「先放低，慢慢講。唔使而家就喊。」你看著自己的紙，也突然有點怕哪裡漏了。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w3_11_teacher_collects_holiday_homework_caring_teacher_handles_anxiety_choice_1",
            "text": "深呼吸後交。",
            "buttonText": "深呼吸後交。",
            "playerLine": "我交。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把功課放到收集籃裡，手還有點緊。老師說收到，你才發現自己剛才一直屏住氣。"
            },
            "resultText": "你把功課放到收集籃裡，手還有點緊。老師說收到，你才發現自己剛才一直屏住氣。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_11_teacher_collects_holiday_homework",
              "variantId": "caring_teacher_handles_anxiety",
              "mustMatchEventTitle": "老師收假期功課"
            }
          },
          {
            "id": "s2_w3_11_teacher_collects_holiday_homework_caring_teacher_handles_anxiety_choice_2",
            "text": "說自己有點怕。",
            "buttonText": "說自己有點怕。",
            "playerLine": "我驚漏咗。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師叫你先看名字和頁數。她沒有說你麻煩，只把害怕拆成兩件可以檢查的小事。"
            },
            "resultText": "老師叫你先看名字和頁數。她沒有說你麻煩，只把害怕拆成兩件可以檢查的小事。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_11_teacher_collects_holiday_homework",
              "variantId": "caring_teacher_handles_anxiety",
              "mustMatchEventTitle": "老師收假期功課"
            }
          },
          {
            "id": "s2_w3_11_teacher_collects_holiday_homework_caring_teacher_handles_anxiety_choice_3",
            "text": "看旁邊同學。",
            "buttonText": "看旁邊同學。",
            "playerLine": "……",
            "playerLineType": "silent",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你看見那個同學把眼淚擦掉，慢慢找頁數。原來功課也可以把人嚇到這樣。"
            },
            "resultText": "你看見那個同學把眼淚擦掉，慢慢找頁數。原來功課也可以把人嚇到這樣。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_11_teacher_collects_holiday_homework",
              "variantId": "caring_teacher_handles_anxiety",
              "mustMatchEventTitle": "老師收假期功課"
            }
          },
          {
            "id": "s2_w3_11_teacher_collects_holiday_homework_caring_teacher_handles_anxiety_choice_4",
            "text": "把紙角壓平。",
            "buttonText": "把紙角壓平。",
            "playerLine": "我壓平先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你用手掌把紙角按下去。那個角不會變得全新，但至少比較像可以交出去。"
            },
            "resultText": "你用手掌把紙角按下去。那個角不會變得全新，但至少比較像可以交出去。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_11_teacher_collects_holiday_homework",
              "variantId": "caring_teacher_handles_anxiety",
              "mustMatchEventTitle": "老師收假期功課"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "npcIdHint": "char_teacher",
        "npcNameFallback": "老師"
      },
      {
        "variantId": "player_finds_wrinkled_page",
        "variantTitle": "玩家發現有一頁皺了",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "你把功課拿出來時，發現其中一頁皺得很明顯，像在書包裡被水樽壓過。字還看得到，但你還是盯著那條摺痕很久。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w3_11_teacher_collects_holiday_homework_player_finds_wrinkled_page_choice_1",
            "text": "照交。",
            "buttonText": "照交。",
            "playerLine": "我照交。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把皺頁夾在中間，交出去時心跳快了一下。老師沒有立刻說甚麼，你才敢呼吸。"
            },
            "resultText": "你把皺頁夾在中間，交出去時心跳快了一下。老師沒有立刻說甚麼，你才敢呼吸。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_11_teacher_collects_holiday_homework",
              "variantId": "player_finds_wrinkled_page",
              "mustMatchEventTitle": "老師收假期功課"
            }
          },
          {
            "id": "s2_w3_11_teacher_collects_holiday_homework_player_finds_wrinkled_page_choice_2",
            "text": "跟老師說皺了。",
            "buttonText": "跟老師說皺了。",
            "playerLine": "老師，呢頁皺咗。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師看了一眼，說字看得到就可以。那條摺痕還在，但好像沒有你想像中那麼大。"
            },
            "resultText": "老師看了一眼，說字看得到就可以。那條摺痕還在，但好像沒有你想像中那麼大。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_11_teacher_collects_holiday_homework",
              "variantId": "player_finds_wrinkled_page",
              "mustMatchEventTitle": "老師收假期功課"
            }
          },
          {
            "id": "s2_w3_11_teacher_collects_holiday_homework_player_finds_wrinkled_page_choice_3",
            "text": "用手壓平。",
            "buttonText": "用手壓平。",
            "playerLine": "平啲啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你用手掌壓了幾次，紙還是有印。你明白有些皺痕壓得平一點，但不會完全不見。"
            },
            "resultText": "你用手掌壓了幾次，紙還是有印。你明白有些皺痕壓得平一點，但不會完全不見。",
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
              "eventId": "s2_w3_11_teacher_collects_holiday_homework",
              "variantId": "player_finds_wrinkled_page",
              "mustMatchEventTitle": "老師收假期功課"
            }
          },
          {
            "id": "s2_w3_11_teacher_collects_holiday_homework_player_finds_wrinkled_page_choice_4",
            "text": "擔心被扣。",
            "buttonText": "擔心被扣。",
            "playerLine": "會唔會唔收？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說先交。你把紙放進籃裡，覺得假期裡那一點亂，也跟著進了學校。"
            },
            "resultText": "老師說先交。你把紙放進籃裡，覺得假期裡那一點亂，也跟著進了學校。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_11_teacher_collects_holiday_homework",
              "variantId": "player_finds_wrinkled_page",
              "mustMatchEventTitle": "老師收假期功課"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "npcIdHint": "char_teacher",
        "npcNameFallback": "老師"
      }
    ],
    "propertyValidation": {
      "purpose": "natural_scene_branching_only",
      "propertyContext": "holidayHomeworkReturn",
      "ordinaryVersionAlwaysAvailable": true,
      "hideLockedChoices": true,
      "doNotShowInsufficientStats": true,
      "note": "功課完成度低或學業 < 35 → 漏頁／不敢交／需要拆細支援；理智值 < 35 → 交功課時更緊張；自信 < 35 → 問「會唔會唔收」；學業穩定或理智值 >= 60 → 先檢查頁數、先把紙夾好。"
    }
  },
  {
    "id": "s2_w3_12_neighbor_and_school_worlds_apart",
    "sourceTopicId": "S2-W3-12",
    "weekPool": "S2-W3_authored_weekly",
    "termId": "term_p1_s2",
    "week": 3,
    "category": "neighbor",
    "title": "鄰居和學校同學不是同一個世界",
    "sceneIntro": "放學後，你在升降機或平台又遇到{neighborDisplayName}。對方不是你的同班同學，不知道家朗、穎心、梓軒和柏宇是誰，也不用交同一份假期功課。可是對方會問你今天返學怎樣，讓你突然要把班房裡的事情講給一個班房外的人聽。",
    "metadata": {
      "sourceMarkdown": "info/s2_w1_w6_dialogue_draft_v0_5.md",
      "sourceTitle": "S2-W1–S2-W6｜聖誕假期到農曆新年後｜事件對話草稿 v0.5",
      "uiHidden": true,
      "identityTypeId": "same_age_neighbor",
      "usesSelectedNeighbor": true,
      "activeMessage": false,
      "selectedNeighborPersonality": "persisted_from_S2-W1-2",
      "displayNameRule": "neighborDisplayName = primarySameAgeNeighborNameKnown ? selectedNeighbor.knownDisplayName : selectedNeighbor.unknownDisplayName",
      "canAppearInSchoolEvents": false
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        3,
        3
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w3_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w1_w6",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "neighbor_asks_school",
        "variantTitle": "鄰居問你學校",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "{neighborDisplayName}靠在平台欄杆旁，問：「你今日返學好唔好玩？」手裡拿著一張貼紙，像準備聽故事，又像只是隨口問。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w3_12_neighbor_and_school_worlds_apart_neighbor_asks_school_choice_1",
            "text": "說很多人講假期。",
            "buttonText": "說很多人講假期。",
            "playerLine": "好多人講假期。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}問是不是全班一起講，你搖頭。班房裡的聲音其實是一小堆一小堆冒出來的。"
            },
            "resultText": "{neighborDisplayName}問是不是全班一起講，你搖頭。班房裡的聲音其實是一小堆一小堆冒出來的。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_12_neighbor_and_school_worlds_apart",
              "variantId": "neighbor_asks_school",
              "mustMatchEventTitle": "鄰居和學校同學不是同一個世界"
            }
          },
          {
            "id": "s2_w3_12_neighbor_and_school_worlds_apart_neighbor_asks_school_choice_2",
            "text": "說交功課。",
            "buttonText": "說交功課。",
            "playerLine": "今日交功課。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}立刻說自己也是。不同學校的功課在平台上碰了一下，原來大家都逃不過。"
            },
            "resultText": "{neighborDisplayName}立刻說自己也是。不同學校的功課在平台上碰了一下，原來大家都逃不過。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_12_neighbor_and_school_worlds_apart",
              "variantId": "neighbor_asks_school",
              "mustMatchEventTitle": "鄰居和學校同學不是同一個世界"
            }
          },
          {
            "id": "s2_w3_12_neighbor_and_school_worlds_apart_neighbor_asks_school_choice_3",
            "text": "說有點累。",
            "buttonText": "說有點累。",
            "playerLine": "有啲攰。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}點頭，說今天也起不來。你們沒有同班，卻都被早上的鐘拉回去。"
            },
            "resultText": "{neighborDisplayName}點頭，說今天也起不來。你們沒有同班，卻都被早上的鐘拉回去。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_12_neighbor_and_school_worlds_apart",
              "variantId": "neighbor_asks_school",
              "mustMatchEventTitle": "鄰居和學校同學不是同一個世界"
            }
          },
          {
            "id": "s2_w3_12_neighbor_and_school_worlds_apart_neighbor_asks_school_choice_4",
            "text": "問對方學校。",
            "buttonText": "問對方學校。",
            "playerLine": "你學校呢？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}開始講自己班上有人帶很大的鉛筆盒。那些名字你不認識，但聽起來也像一個班房。"
            },
            "resultText": "{neighborDisplayName}開始講自己班上有人帶很大的鉛筆盒。那些名字你不認識，但聽起來也像一個班房。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_12_neighbor_and_school_worlds_apart",
              "variantId": "neighbor_asks_school",
              "mustMatchEventTitle": "鄰居和學校同學不是同一個世界"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgeNeighbor",
        "identityTypeId": "same_age_neighbor",
        "usesSelectedNeighbor": true,
        "activeMessage": false,
        "npcIdHint": "primarySameAgeNeighborId",
        "npcNameFallback": "{neighborDisplayName}"
      },
      {
        "variantId": "talk_about_classmates",
        "variantTitle": "你講到班上同學",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "你講起家朗說聖誕樹，講起柏宇說熊會動。{neighborDisplayName}聽到一半問：「家朗係邊個？」你停了一下，才發現這些在班房裡很自然的名字，到了平台上全都要重新介紹。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w3_12_neighbor_and_school_worlds_apart_talk_about_classmates_choice_1",
            "text": "解釋家朗。",
            "buttonText": "解釋家朗。",
            "playerLine": "佢係我同學。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}點點頭，仍然不知道家朗長甚麼樣。你第一次發現「同學」兩個字在校外很大，要講清楚才看得見。"
            },
            "resultText": "{neighborDisplayName}點點頭，仍然不知道家朗長甚麼樣。你第一次發現「同學」兩個字在校外很大，要講清楚才看得見。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_12_neighbor_and_school_worlds_apart",
              "variantId": "talk_about_classmates",
              "mustMatchEventTitle": "鄰居和學校同學不是同一個世界"
            }
          },
          {
            "id": "s2_w3_12_neighbor_and_school_worlds_apart_talk_about_classmates_choice_2",
            "text": "講不清楚。",
            "buttonText": "講不清楚。",
            "playerLine": "總之佢好快講嘢。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}笑了一下，好像這樣也算認識一點。你沒有描述樣子，只把家朗的速度帶出來。"
            },
            "resultText": "{neighborDisplayName}笑了一下，好像這樣也算認識一點。你沒有描述樣子，只把家朗的速度帶出來。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_12_neighbor_and_school_worlds_apart",
              "variantId": "talk_about_classmates",
              "mustMatchEventTitle": "鄰居和學校同學不是同一個世界"
            }
          },
          {
            "id": "s2_w3_12_neighbor_and_school_worlds_apart_talk_about_classmates_choice_3",
            "text": "轉講玩具。",
            "buttonText": "轉講玩具。",
            "playerLine": "唔講學校啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}立刻拿出貼紙。班房被放回你心裡，平台又變回平台。"
            },
            "resultText": "{neighborDisplayName}立刻拿出貼紙。班房被放回你心裡，平台又變回平台。",
            "statusDelta": {
              "學業": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w3_12_neighbor_and_school_worlds_apart",
              "variantId": "talk_about_classmates",
              "mustMatchEventTitle": "鄰居和學校同學不是同一個世界"
            }
          },
          {
            "id": "s2_w3_12_neighbor_and_school_worlds_apart_talk_about_classmates_choice_4",
            "text": "問對方有沒有這種同學。",
            "buttonText": "問對方有沒有這種同學。",
            "playerLine": "你班有冇咁嘅人？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}想了想，說有個人也很吵。不同學校的班房忽然有了一點相似。"
            },
            "resultText": "{neighborDisplayName}想了想，說有個人也很吵。不同學校的班房忽然有了一點相似。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_12_neighbor_and_school_worlds_apart",
              "variantId": "talk_about_classmates",
              "mustMatchEventTitle": "鄰居和學校同學不是同一個世界"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgeNeighbor",
        "identityTypeId": "same_age_neighbor",
        "usesSelectedNeighbor": true,
        "activeMessage": false,
        "npcIdHint": "primarySameAgeNeighborId",
        "npcNameFallback": "{neighborDisplayName}"
      },
      {
        "variantId": "neighbor_does_not_know_names",
        "variantTitle": "鄰居不認識那些名字",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "你說起梓軒問玩具，{neighborDisplayName}皺眉：「邊個梓軒？」你忽然有點不想再解釋，因為每個名字後面都要補很多東西。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w3_12_neighbor_and_school_worlds_apart_neighbor_does_not_know_names_choice_1",
            "text": "慢慢解釋。",
            "buttonText": "慢慢解釋。",
            "playerLine": "佢成日問人有冇。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}點頭，好像明白那種人。你不用講完整故事，對方也懂一點點比較的感覺。"
            },
            "resultText": "{neighborDisplayName}點頭，好像明白那種人。你不用講完整故事，對方也懂一點點比較的感覺。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_12_neighbor_and_school_worlds_apart",
              "variantId": "neighbor_does_not_know_names",
              "mustMatchEventTitle": "鄰居和學校同學不是同一個世界"
            }
          },
          {
            "id": "s2_w3_12_neighbor_and_school_worlds_apart_neighbor_does_not_know_names_choice_2",
            "text": "說算了。",
            "buttonText": "說算了。",
            "playerLine": "算啦，好難講。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}沒有追問，把貼紙盒打開。你鬆了一口氣，原來不是每個學校故事都要搬出來。"
            },
            "resultText": "{neighborDisplayName}沒有追問，把貼紙盒打開。你鬆了一口氣，原來不是每個學校故事都要搬出來。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_12_neighbor_and_school_worlds_apart",
              "variantId": "neighbor_does_not_know_names",
              "mustMatchEventTitle": "鄰居和學校同學不是同一個世界"
            }
          },
          {
            "id": "s2_w3_12_neighbor_and_school_worlds_apart_neighbor_does_not_know_names_choice_3",
            "text": "畫位置給對方看。",
            "buttonText": "畫位置給對方看。",
            "playerLine": "佢坐嗰邊。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你用手指在空中畫班房位置。{neighborDisplayName}看著你的手，像在看一張看不見的地圖。"
            },
            "resultText": "你用手指在空中畫班房位置。{neighborDisplayName}看著你的手，像在看一張看不見的地圖。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_12_neighbor_and_school_worlds_apart",
              "variantId": "neighbor_does_not_know_names",
              "mustMatchEventTitle": "鄰居和學校同學不是同一個世界"
            }
          },
          {
            "id": "s2_w3_12_neighbor_and_school_worlds_apart_neighbor_does_not_know_names_choice_4",
            "text": "問對方同學名字。",
            "buttonText": "問對方同學名字。",
            "playerLine": "你同學叫咩名？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}說了兩個名字。輪到你不認識，你突然明白剛才對方為甚麼要問。"
            },
            "resultText": "{neighborDisplayName}說了兩個名字。輪到你不認識，你突然明白剛才對方為甚麼要問。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_12_neighbor_and_school_worlds_apart",
              "variantId": "neighbor_does_not_know_names",
              "mustMatchEventTitle": "鄰居和學校同學不是同一個世界"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgeNeighbor",
        "identityTypeId": "same_age_neighbor",
        "usesSelectedNeighbor": true,
        "activeMessage": false,
        "npcIdHint": "primarySameAgeNeighborId",
        "npcNameFallback": "{neighborDisplayName}"
      },
      {
        "variantId": "outside_friend_not_classroom_rules",
        "variantTitle": "玩家發現校外朋友不在班房規則裡",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "{neighborDisplayName}聽你說小息要排隊、功課要放左上角，忍不住問：「你哋咁多規矩㗎？」你想說不是很多，又想起走廊、功課、座位和老師的鐘聲。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w3_12_neighbor_and_school_worlds_apart_outside_friend_not_classroom_rules_choice_1",
            "text": "說學校是這樣。",
            "buttonText": "說學校是這樣。",
            "playerLine": "返學係咁。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}點點頭，但表情像還是不太懂。你突然覺得自己也未必懂，只是已經習慣了一點。"
            },
            "resultText": "{neighborDisplayName}點點頭，但表情像還是不太懂。你突然覺得自己也未必懂，只是已經習慣了一點。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_12_neighbor_and_school_worlds_apart",
              "variantId": "outside_friend_not_classroom_rules",
              "mustMatchEventTitle": "鄰居和學校同學不是同一個世界"
            }
          },
          {
            "id": "s2_w3_12_neighbor_and_school_worlds_apart_outside_friend_not_classroom_rules_choice_2",
            "text": "說平台不用排隊。",
            "buttonText": "說平台不用排隊。",
            "playerLine": "呢度唔使排隊。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}笑了：「升降機要。」你想了想，原來校外也有規矩，只是寫法不一樣。"
            },
            "resultText": "{neighborDisplayName}笑了：「升降機要。」你想了想，原來校外也有規矩，只是寫法不一樣。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_12_neighbor_and_school_worlds_apart",
              "variantId": "outside_friend_not_classroom_rules",
              "mustMatchEventTitle": "鄰居和學校同學不是同一個世界"
            }
          },
          {
            "id": "s2_w3_12_neighbor_and_school_worlds_apart_outside_friend_not_classroom_rules_choice_3",
            "text": "問對方學校規矩。",
            "buttonText": "問對方學校規矩。",
            "playerLine": "你哋學校呢？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}說學校也要排隊，但不是同一個門口。兩個學校像兩張不一樣的地圖。"
            },
            "resultText": "{neighborDisplayName}說學校也要排隊，但不是同一個門口。兩個學校像兩張不一樣的地圖。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_12_neighbor_and_school_worlds_apart",
              "variantId": "outside_friend_not_classroom_rules",
              "mustMatchEventTitle": "鄰居和學校同學不是同一個世界"
            }
          },
          {
            "id": "s2_w3_12_neighbor_and_school_worlds_apart_outside_friend_not_classroom_rules_choice_4",
            "text": "不再講學校。",
            "buttonText": "不再講學校。",
            "playerLine": "我哋玩貼紙啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}立刻把貼紙拿出來。你把班房規則暫時放低，跟校外朋友站在平台風裡。"
            },
            "resultText": "{neighborDisplayName}立刻把貼紙拿出來。你把班房規則暫時放低，跟校外朋友站在平台風裡。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w3_12_neighbor_and_school_worlds_apart",
              "variantId": "outside_friend_not_classroom_rules",
              "mustMatchEventTitle": "鄰居和學校同學不是同一個世界"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgeNeighbor",
        "identityTypeId": "same_age_neighbor",
        "usesSelectedNeighbor": true,
        "activeMessage": false,
        "npcIdHint": "primarySameAgeNeighborId",
        "npcNameFallback": "{neighborDisplayName}"
      }
    ]
  },
  {
    "id": "s2_w4_13_seating_adjustment_core_peers",
    "sourceTopicId": "S2-W4-13",
    "weekPool": "S2-W4_authored_weekly",
    "termId": "term_p1_s2",
    "week": 4,
    "category": "holiday",
    "title": "座位微調，坐近不熟的同班人",
    "sceneIntro": "老師說下學期要微調座位，不是因為有人犯錯，只是想大家試試跟不同同學合作。你抱著書包走到新位置時，發現旁邊不是新同學，而是一直在同一班的人。你可能聽過老師叫他的名字，可能在小息見過她站在窗邊，也可能以前已經跟他說過幾句，只是從來沒有坐得這麼近。桌角、抽屜、鉛筆盒和椅腳忽然變得很重要，因為這些小地方會決定你們今天怎樣開始。",
    "metadata": {
      "sourceMarkdown": "info/s2_w1_w6_dialogue_draft_v0_5.md",
      "sourceTitle": "S2-W1–S2-W6｜聖誕假期到農曆新年後｜事件對話草稿 v0.5",
      "uiHidden": true,
      "seatAdjustmentRule": "core_same_age_peer_only",
      "allowedCorePeerIds": [
        "classmate_outgoing_invite",
        "classmate_quiet_observer",
        "classmate_competitive_peer",
        "classmate_mischief_maker"
      ],
      "doNotCreateNewClassmateNpc": true,
      "notFirstMeet": true,
      "priorityRule": "lowest closeness / least interaction / least recent among 家朗、穎心、梓軒、柏宇"
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        4,
        4
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w4_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w1_w6",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "near_kalong",
        "variantTitle": "坐近家朗",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "你把書包放下時，家朗已經把自己的筆盒往旁邊移。他以前常常走得比你快，說話也快，但今天他看了看你的書，又看了看你還沒放好的功課夾，聲音反而壓低了一點：「你放呢邊啦。唔夠位我再移。」如果你以前很少跟他互動，這句像是他第一次真的等你跟上；如果你們已經熟，他只是把平時那種「一齊啦」放慢了一點。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w4_13_seating_adjustment_core_peers_near_kalong_choice_1",
            "text": "跟他說多謝。",
            "buttonText": "跟他說多謝。",
            "playerLine": "多謝。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗很快說不用，手卻沒有立刻伸過來幫你。他只是把膠水和筆盒推開一點，像終於記得你可能想自己放好。"
            },
            "resultText": "家朗很快說不用，手卻沒有立刻伸過來幫你。他只是把膠水和筆盒推開一點，像終於記得你可能想自己放好。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_13_seating_adjustment_core_peers",
              "variantId": "near_kalong",
              "mustMatchEventTitle": "座位微調，坐近不熟的同班人"
            }
          },
          {
            "id": "s2_w4_13_seating_adjustment_core_peers_near_kalong_choice_2",
            "text": "叫他慢少少。",
            "buttonText": "叫他慢少少。",
            "playerLine": "你慢少少啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗愣了一下，然後笑：「哦，慢啲。」他還是忍不住想講下一件事，但這次講之前先看你有沒有聽到。"
            },
            "resultText": "家朗愣了一下，然後笑：「哦，慢啲。」他還是忍不住想講下一件事，但這次講之前先看你有沒有聽到。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_13_seating_adjustment_core_peers",
              "variantId": "near_kalong",
              "mustMatchEventTitle": "座位微調，坐近不熟的同班人"
            }
          },
          {
            "id": "s2_w4_13_seating_adjustment_core_peers_near_kalong_choice_3",
            "text": "先整理自己的桌面。",
            "buttonText": "先整理自己的桌面。",
            "playerLine": "我擺好先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把書、手冊和鉛筆一樣一樣放好。家朗在旁邊等了幾秒，沒有催你，腳尖卻一直在椅腳下動。"
            },
            "resultText": "你把書、手冊和鉛筆一樣一樣放好。家朗在旁邊等了幾秒，沒有催你，腳尖卻一直在椅腳下動。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_13_seating_adjustment_core_peers",
              "variantId": "near_kalong",
              "mustMatchEventTitle": "座位微調，坐近不熟的同班人"
            }
          },
          {
            "id": "s2_w4_13_seating_adjustment_core_peers_near_kalong_choice_4",
            "text": "問他以前坐哪裡。",
            "buttonText": "問他以前坐哪裡。",
            "playerLine": "你之前坐邊度？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗指向課室另一邊，說以前離你幾張桌。你才發現他一直在同一間課室，只是以前聲音比位置更容易被你記住。"
            },
            "resultText": "家朗指向課室另一邊，說以前離你幾張桌。你才發現他一直在同一間課室，只是以前聲音比位置更容易被你記住。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_13_seating_adjustment_core_peers",
              "variantId": "near_kalong",
              "mustMatchEventTitle": "座位微調，坐近不熟的同班人"
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
        "variantId": "near_wingnam",
        "variantTitle": "坐近穎心",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "新座位旁邊是穎心。她不是新同學，你早就聽過老師叫她名字，也見過她小息時留在課室看書角。只是今天她的筆盒和你的功課夾第一次碰到同一張桌。她沒有立刻說話，只把書角對齊，再把一小塊位置留出來：「呢度可以放書。」如果你以前很少跟她互動，那塊空位比一句招呼更像開始；如果你們已經熟，你會發現她只是用更近的距離做同一件事。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w4_13_seating_adjustment_core_peers_near_wingnam_choice_1",
            "text": "把書放到她留的位置。",
            "buttonText": "把書放到她留的位置。",
            "playerLine": "我放呢度。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心點點頭，手指又把桌角的紙推平。她沒有問你很多，但你知道她已經看見你要放哪裡。"
            },
            "resultText": "穎心點點頭，手指又把桌角的紙推平。她沒有問你很多，但你知道她已經看見你要放哪裡。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_13_seating_adjustment_core_peers",
              "variantId": "near_wingnam",
              "mustMatchEventTitle": "座位微調，坐近不熟的同班人"
            }
          },
          {
            "id": "s2_w4_13_seating_adjustment_core_peers_near_wingnam_choice_2",
            "text": "細聲問會不會阻到她。",
            "buttonText": "細聲問會不會阻到她。",
            "playerLine": "會唔會阻住你？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心搖頭，說：「唔會。」她的聲音很輕，可是桌面忽然沒有那麼陌生。"
            },
            "resultText": "穎心搖頭，說：「唔會。」她的聲音很輕，可是桌面忽然沒有那麼陌生。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_13_seating_adjustment_core_peers",
              "variantId": "near_wingnam",
              "mustMatchEventTitle": "座位微調，坐近不熟的同班人"
            }
          },
          {
            "id": "s2_w4_13_seating_adjustment_core_peers_near_wingnam_choice_3",
            "text": "自己先不說話。",
            "buttonText": "自己先不說話。",
            "playerLine": "……",
            "playerLineType": "silent",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你安靜地拿出手冊。穎心也沒有逼你說話，只在你的橡皮擦快滾到桌邊時，用指尖輕輕擋了一下。"
            },
            "resultText": "你安靜地拿出手冊。穎心也沒有逼你說話，只在你的橡皮擦快滾到桌邊時，用指尖輕輕擋了一下。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_13_seating_adjustment_core_peers",
              "variantId": "near_wingnam",
              "mustMatchEventTitle": "座位微調，坐近不熟的同班人"
            }
          },
          {
            "id": "s2_w4_13_seating_adjustment_core_peers_near_wingnam_choice_4",
            "text": "問她這邊有甚麼規矩。",
            "buttonText": "問她這邊有甚麼規矩。",
            "playerLine": "呢邊要點坐？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心想了一下，指指抽屜：「書唔好塞太出，會跌。」這不是很大的秘密，卻像她把新座位的第一條規矩交給你。"
            },
            "resultText": "穎心想了一下，指指抽屜：「書唔好塞太出，會跌。」這不是很大的秘密，卻像她把新座位的第一條規矩交給你。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_13_seating_adjustment_core_peers",
              "variantId": "near_wingnam",
              "mustMatchEventTitle": "座位微調，坐近不熟的同班人"
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
        "variantId": "near_zixuan",
        "variantTitle": "坐近梓軒",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "你搬到新座位時，梓軒正在把新簿子寫名。他一直是同班的人，你聽過他問分數，聽過他說誰已經溫了書，也可能跟他有過一點尷尬。現在他坐得很近，連他用擦膠擦同一個字幾次，你都看得見。他抬頭看你：「你坐呢度呀？」語氣像平常那樣快，但筆尖停住了。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w4_13_seating_adjustment_core_peers_near_zixuan_choice_1",
            "text": "簡單應他。",
            "buttonText": "簡單應他。",
            "playerLine": "係呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒點點頭，又低頭寫名。你沒有接住比較，也沒有避開他，只是讓新座位先停在一句很短的回答裡。"
            },
            "resultText": "梓軒點點頭，又低頭寫名。你沒有接住比較，也沒有避開他，只是讓新座位先停在一句很短的回答裡。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_13_seating_adjustment_core_peers",
              "variantId": "near_zixuan",
              "mustMatchEventTitle": "座位微調，坐近不熟的同班人"
            }
          },
          {
            "id": "s2_w4_13_seating_adjustment_core_peers_near_zixuan_choice_2",
            "text": "問他在擦甚麼。",
            "buttonText": "問他在擦甚麼。",
            "playerLine": "你擦咩呀？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒立刻把手遮了一下，然後說寫歪了。他不是輸給誰，只是跟自己的字較勁，這比遠看時清楚很多。"
            },
            "resultText": "梓軒立刻把手遮了一下，然後說寫歪了。他不是輸給誰，只是跟自己的字較勁，這比遠看時清楚很多。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_13_seating_adjustment_core_peers",
              "variantId": "near_zixuan",
              "mustMatchEventTitle": "座位微調，坐近不熟的同班人"
            }
          },
          {
            "id": "s2_w4_13_seating_adjustment_core_peers_near_zixuan_choice_3",
            "text": "先把自己的東西放好。",
            "buttonText": "先把自己的東西放好。",
            "playerLine": "我擺書先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有看他的簿子，只把自己的功課夾放到桌角。比較的感覺還在旁邊，但你先把自己的位置穩住。"
            },
            "resultText": "你沒有看他的簿子，只把自己的功課夾放到桌角。比較的感覺還在旁邊，但你先把自己的位置穩住。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_13_seating_adjustment_core_peers",
              "variantId": "near_zixuan",
              "mustMatchEventTitle": "座位微調，坐近不熟的同班人"
            }
          },
          {
            "id": "s2_w4_13_seating_adjustment_core_peers_near_zixuan_choice_4",
            "text": "說這邊好近黑板。",
            "buttonText": "說這邊好近黑板。",
            "playerLine": "呢度好近黑板。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒看向黑板，說近一點都好，聽得清楚。你聽見他這樣說，才發現他不是只想贏，也是真的怕自己漏聽。"
            },
            "resultText": "梓軒看向黑板，說近一點都好，聽得清楚。你聽見他這樣說，才發現他不是只想贏，也是真的怕自己漏聽。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_13_seating_adjustment_core_peers",
              "variantId": "near_zixuan",
              "mustMatchEventTitle": "座位微調，坐近不熟的同班人"
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
        "variantId": "near_baakyu",
        "variantTitle": "坐近柏宇",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "柏宇坐在你旁邊時，第一眼看的不是你，而是桌底一條鉛筆痕。他一直在同一班，你可能聽過他講角落櫃，或者只在排隊時見過他轉頭看走廊。今天他把抽屜拉開一點，像發現新地方：「你睇，呢度有舊貼紙印。」如果你以前很少跟他一起做事，這個座位好像突然多了一條奇怪入口；如果你們已經熟，你會知道他又把普通東西看成線索。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w4_13_seating_adjustment_core_peers_near_baakyu_choice_1",
            "text": "問那是甚麼印。",
            "buttonText": "問那是甚麼印。",
            "playerLine": "咩印嚟㗎？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇立刻低頭看得更認真，說可能以前有人貼過。它也許只是膠紙痕，但在他嘴裡變成新座位的第一個傳聞。"
            },
            "resultText": "柏宇立刻低頭看得更認真，說可能以前有人貼過。它也許只是膠紙痕，但在他嘴裡變成新座位的第一個傳聞。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_13_seating_adjustment_core_peers",
              "variantId": "near_baakyu",
              "mustMatchEventTitle": "座位微調，坐近不熟的同班人"
            }
          },
          {
            "id": "s2_w4_13_seating_adjustment_core_peers_near_baakyu_choice_2",
            "text": "提醒先放好書。",
            "buttonText": "提醒先放好書。",
            "playerLine": "擺書先啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇哦了一聲，把抽屜推回去。你沒有完全不理他的發現，只是先把手冊放穩，讓座位不要一開始就亂。"
            },
            "resultText": "柏宇哦了一聲，把抽屜推回去。你沒有完全不理他的發現，只是先把手冊放穩，讓座位不要一開始就亂。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_13_seating_adjustment_core_peers",
              "variantId": "near_baakyu",
              "mustMatchEventTitle": "座位微調，坐近不熟的同班人"
            }
          },
          {
            "id": "s2_w4_13_seating_adjustment_core_peers_near_baakyu_choice_3",
            "text": "自己看一眼就算。",
            "buttonText": "自己看一眼就算。",
            "playerLine": "……",
            "playerLineType": "silent",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你看了那條痕一眼，沒有追問。柏宇還在旁邊小聲研究，你把鉛筆盒放好，像把自己留在比較安靜的一邊。"
            },
            "resultText": "你看了那條痕一眼，沒有追問。柏宇還在旁邊小聲研究，你把鉛筆盒放好，像把自己留在比較安靜的一邊。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_13_seating_adjustment_core_peers",
              "variantId": "near_baakyu",
              "mustMatchEventTitle": "座位微調，坐近不熟的同班人"
            }
          },
          {
            "id": "s2_w4_13_seating_adjustment_core_peers_near_baakyu_choice_4",
            "text": "問他不要搞到老師看見。",
            "buttonText": "問他不要搞到老師看見。",
            "playerLine": "唔好俾老師見到呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇笑了一下，說自己只是睇。你不太相信，但他真的沒有伸手去撕，只把那條痕當成秘密收在眼裡。"
            },
            "resultText": "柏宇笑了一下，說自己只是睇。你不太相信，但他真的沒有伸手去撕，只把那條痕當成秘密收在眼裡。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_13_seating_adjustment_core_peers",
              "variantId": "near_baakyu",
              "mustMatchEventTitle": "座位微調，坐近不熟的同班人"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_mischief_maker",
        "npcIdHint": "classmate_mischief_maker",
        "npcNameFallback": "柏宇"
      }
    ]
  },
  {
    "id": "s2_w4_14_new_dictation_or_quiz_notice",
    "sourceTopicId": "S2-W4-14",
    "weekPool": "S2-W4_authored_weekly",
    "termId": "term_p1_s2",
    "week": 4,
    "category": "academic",
    "title": "新一輪默書／小測通知",
    "sceneIntro": "回校後沒多久，老師又在黑板寫下新的默書或小測日期。假期剛完，班房裡還有聖誕和新玩具的聲音，可是日期一寫出來，大家的眼睛又被拉回簿子上。你看著範圍，覺得新學期真的開始了。",
    "metadata": {
      "sourceMarkdown": "info/s2_w1_w6_dialogue_draft_v0_5.md",
      "sourceTitle": "S2-W1–S2-W6｜聖誕假期到農曆新年後｜事件對話草稿 v0.5",
      "uiHidden": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        4,
        4
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w4_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w1_w6",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "teacher_reminder",
        "variantTitle": "老師提醒",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "老師把日期圈起來：「下星期有默書，今日唔使即刻驚，但要記低。」粉筆聲停下來，班房裡有人立刻翻手冊。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w4_14_new_dictation_or_quiz_notice_teacher_reminder_choice_1",
            "text": "抄低日期。",
            "buttonText": "抄低日期。",
            "playerLine": "我抄低先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把日期寫進手冊，數字寫得有點歪。它不是功課，但像一個會慢慢靠近的東西。"
            },
            "resultText": "你把日期寫進手冊，數字寫得有點歪。它不是功課，但像一個會慢慢靠近的東西。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_14_new_dictation_or_quiz_notice",
              "variantId": "teacher_reminder",
              "mustMatchEventTitle": "新一輪默書／小測通知"
            }
          },
          {
            "id": "s2_w4_14_new_dictation_or_quiz_notice_teacher_reminder_choice_2",
            "text": "問範圍。",
            "buttonText": "問範圍。",
            "playerLine": "默邊度？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師指著黑板下半格。你看見幾行字，不算很多，但也不是可以不理。"
            },
            "resultText": "老師指著黑板下半格。你看見幾行字，不算很多，但也不是可以不理。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_14_new_dictation_or_quiz_notice",
              "variantId": "teacher_reminder",
              "mustMatchEventTitle": "新一輪默書／小測通知"
            }
          },
          {
            "id": "s2_w4_14_new_dictation_or_quiz_notice_teacher_reminder_choice_3",
            "text": "先聽不寫。",
            "buttonText": "先聽不寫。",
            "playerLine": "……",
            "playerLineType": "silent",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你聽見老師講範圍，覺得自己應該記得。可是下課鐘一響，那幾個字就開始變模糊。"
            },
            "resultText": "你聽見老師講範圍，覺得自己應該記得。可是下課鐘一響，那幾個字就開始變模糊。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_14_new_dictation_or_quiz_notice",
              "variantId": "teacher_reminder",
              "mustMatchEventTitle": "新一輪默書／小測通知"
            }
          },
          {
            "id": "s2_w4_14_new_dictation_or_quiz_notice_teacher_reminder_choice_4",
            "text": "覺得又來了。",
            "buttonText": "覺得又來了。",
            "playerLine": "又默書……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "前面有人也嘆氣。你不是唯一一個這樣想，但日期還是安靜地留在黑板上。"
            },
            "resultText": "前面有人也嘆氣。你不是唯一一個這樣想，但日期還是安靜地留在黑板上。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_14_new_dictation_or_quiz_notice",
              "variantId": "teacher_reminder",
              "mustMatchEventTitle": "新一輪默書／小測通知"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "npcIdHint": "char_teacher",
        "npcNameFallback": "老師"
      },
      {
        "variantId": "deskmate_reaction",
        "variantTitle": "同桌反應",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "新同桌看見默書日期後，小聲說：「咁快？」他／她把手冊翻開，又翻錯頁。你也還沒完全習慣這個新座位，兩本手冊在桌上碰了一下。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w4_14_new_dictation_or_quiz_notice_deskmate_reaction_choice_1",
            "text": "一起找手冊頁。",
            "buttonText": "一起找手冊頁。",
            "playerLine": "係呢頁呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你指給同桌看。你們不是很熟，但一起找對一頁，像新座位第一件可以合作的小事。"
            },
            "resultText": "你指給同桌看。你們不是很熟，但一起找對一頁，像新座位第一件可以合作的小事。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_14_new_dictation_or_quiz_notice",
              "variantId": "deskmate_reaction",
              "mustMatchEventTitle": "新一輪默書／小測通知"
            }
          },
          {
            "id": "s2_w4_14_new_dictation_or_quiz_notice_deskmate_reaction_choice_2",
            "text": "問他怕不怕。",
            "buttonText": "問他怕不怕。",
            "playerLine": "你驚唔驚？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "同桌說少少。你聽見這句，自己的少少緊張也像有了同伴。"
            },
            "resultText": "同桌說少少。你聽見這句，自己的少少緊張也像有了同伴。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_14_new_dictation_or_quiz_notice",
              "variantId": "deskmate_reaction",
              "mustMatchEventTitle": "新一輪默書／小測通知"
            }
          },
          {
            "id": "s2_w4_14_new_dictation_or_quiz_notice_deskmate_reaction_choice_3",
            "text": "自己先抄。",
            "buttonText": "自己先抄。",
            "playerLine": "我抄先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你低頭寫字，沒有理會同桌翻錯頁。這樣比較快，但桌上那點混亂還在旁邊。"
            },
            "resultText": "你低頭寫字，沒有理會同桌翻錯頁。這樣比較快，但桌上那點混亂還在旁邊。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_14_new_dictation_or_quiz_notice",
              "variantId": "deskmate_reaction",
              "mustMatchEventTitle": "新一輪默書／小測通知"
            }
          },
          {
            "id": "s2_w4_14_new_dictation_or_quiz_notice_deskmate_reaction_choice_4",
            "text": "說回家再算。",
            "buttonText": "說回家再算。",
            "playerLine": "返屋企先啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "同桌點頭，你們都把手冊合上。那個日期暫時被合起來，但沒有消失。"
            },
            "resultText": "同桌點頭，你們都把手冊合上。那個日期暫時被合起來，但沒有消失。",
            "statusDelta": {
              "學業": 1,
              "家庭關係": 1
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
              "eventId": "s2_w4_14_new_dictation_or_quiz_notice",
              "variantId": "deskmate_reaction",
              "mustMatchEventTitle": "新一輪默書／小測通知"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "npcIdHint": "char_teacher",
        "npcNameFallback": "老師"
      },
      {
        "variantId": "family_knows_at_night",
        "variantTitle": "家人晚上知道",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "晚上簽手冊時，家人看到默書日期：「下星期？」他們用手指點了點那一格，你才想起白天黑板上的粉筆字。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w4_14_new_dictation_or_quiz_notice_family_knows_at_night_choice_1",
            "text": "說今天剛講。",
            "buttonText": "說今天剛講。",
            "playerLine": "今日先講。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說那就今晚先看一眼。你本來想說不用，但書已經被拿出來了。"
            },
            "resultText": "家人說那就今晚先看一眼。你本來想說不用，但書已經被拿出來了。",
            "statusDelta": {
              "學業": 1,
              "家庭關係": 1
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
              "eventId": "s2_w4_14_new_dictation_or_quiz_notice",
              "variantId": "family_knows_at_night",
              "mustMatchEventTitle": "新一輪默書／小測通知"
            }
          },
          {
            "id": "s2_w4_14_new_dictation_or_quiz_notice_family_knows_at_night_choice_2",
            "text": "說範圍不多。",
            "buttonText": "說範圍不多。",
            "playerLine": "唔係好多。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人點頭，說不多就早點溫。你發現「不多」有時不是逃走的理由，而是開始的理由。"
            },
            "resultText": "家人點頭，說不多就早點溫。你發現「不多」有時不是逃走的理由，而是開始的理由。",
            "statusDelta": {
              "學業": 1,
              "家庭關係": 1
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
              "eventId": "s2_w4_14_new_dictation_or_quiz_notice",
              "variantId": "family_knows_at_night",
              "mustMatchEventTitle": "新一輪默書／小測通知"
            }
          },
          {
            "id": "s2_w4_14_new_dictation_or_quiz_notice_family_knows_at_night_choice_3",
            "text": "問怎樣溫。",
            "buttonText": "問怎樣溫。",
            "playerLine": "點溫呀？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人叫你先讀一次，再遮住試寫。方法很普通，但比你自己對著範圍發呆好一點。"
            },
            "resultText": "家人叫你先讀一次，再遮住試寫。方法很普通，但比你自己對著範圍發呆好一點。",
            "statusDelta": {
              "學業": 1,
              "家庭關係": 1
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
              "eventId": "s2_w4_14_new_dictation_or_quiz_notice",
              "variantId": "family_knows_at_night",
              "mustMatchEventTitle": "新一輪默書／小測通知"
            }
          },
          {
            "id": "s2_w4_14_new_dictation_or_quiz_notice_family_knows_at_night_choice_4",
            "text": "想先玩。",
            "buttonText": "想先玩。",
            "playerLine": "我玩陣先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說可以玩一陣，但要記得回來。你跑去玩時，心裡像帶著一條小繩。"
            },
            "resultText": "家人說可以玩一陣，但要記得回來。你跑去玩時，心裡像帶著一條小繩。",
            "statusDelta": {
              "學業": 1,
              "家庭關係": 1
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
              "eventId": "s2_w4_14_new_dictation_or_quiz_notice",
              "variantId": "family_knows_at_night",
              "mustMatchEventTitle": "新一輪默書／小測通知"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "npcIdHint": "char_teacher",
        "npcNameFallback": "老師"
      },
      {
        "variantId": "tutor_or_family_breaks_down",
        "variantTitle": "tutor 或家人幫你拆細",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "補習姐姐或家人把範圍分成幾小格：「今日三個字，聽日三個字。」你看著原本一整行的範圍被圈起來，突然像變短了一點。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w4_14_new_dictation_or_quiz_notice_tutor_or_family_breaks_down_choice_1",
            "text": "先讀三個字。",
            "buttonText": "先讀三個字。",
            "playerLine": "我讀呢三個。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你讀到第二個字時卡住。大人沒有翻到後面，只叫你再讀這三個，範圍暫時沒有那麼大。"
            },
            "resultText": "你讀到第二個字時卡住。大人沒有翻到後面，只叫你再讀這三個，範圍暫時沒有那麼大。",
            "statusDelta": {
              "學業": 1,
              "家庭關係": 1
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
              "eventId": "s2_w4_14_new_dictation_or_quiz_notice",
              "variantId": "tutor_or_family_breaks_down",
              "mustMatchEventTitle": "新一輪默書／小測通知"
            }
          },
          {
            "id": "s2_w4_14_new_dictation_or_quiz_notice_tutor_or_family_breaks_down_choice_2",
            "text": "問可不可以少一點。",
            "buttonText": "問可不可以少一點。",
            "playerLine": "可唔可以兩個？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "大人笑說先試三個。你覺得三個很多，但至少不是整頁。"
            },
            "resultText": "大人笑說先試三個。你覺得三個很多，但至少不是整頁。",
            "statusDelta": {
              "學業": 1,
              "家庭關係": 1
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
              "eventId": "s2_w4_14_new_dictation_or_quiz_notice",
              "variantId": "tutor_or_family_breaks_down",
              "mustMatchEventTitle": "新一輪默書／小測通知"
            }
          },
          {
            "id": "s2_w4_14_new_dictation_or_quiz_notice_tutor_or_family_breaks_down_choice_3",
            "text": "遮住試寫。",
            "buttonText": "遮住試寫。",
            "playerLine": "我試吓。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你遮住字寫了一次，錯了一個筆畫。錯誤很細，卻很清楚地站在紙上。"
            },
            "resultText": "你遮住字寫了一次，錯了一個筆畫。錯誤很細，卻很清楚地站在紙上。",
            "statusDelta": {
              "學業": 1,
              "家庭關係": 1
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
              "eventId": "s2_w4_14_new_dictation_or_quiz_notice",
              "variantId": "tutor_or_family_breaks_down",
              "mustMatchEventTitle": "新一輪默書／小測通知"
            }
          },
          {
            "id": "s2_w4_14_new_dictation_or_quiz_notice_tutor_or_family_breaks_down_choice_4",
            "text": "趴在桌上。",
            "buttonText": "趴在桌上。",
            "playerLine": "我唔想溫。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "大人沒有立刻罵，只把今天要做的格子推近一點。你知道自己還是要坐起來，只是可以慢一點。"
            },
            "resultText": "大人沒有立刻罵，只把今天要做的格子推近一點。你知道自己還是要坐起來，只是可以慢一點。",
            "statusDelta": {
              "學業": 1,
              "家庭關係": 1
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
              "eventId": "s2_w4_14_new_dictation_or_quiz_notice",
              "variantId": "tutor_or_family_breaks_down",
              "mustMatchEventTitle": "新一輪默書／小測通知"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "npcIdHint": "char_teacher",
        "npcNameFallback": "老師"
      }
    ],
    "propertyValidation": {
      "purpose": "natural_scene_branching_only",
      "propertyContext": "dictationNoticeS2",
      "ordinaryVersionAlwaysAvailable": true,
      "hideLockedChoices": true,
      "doNotShowInsufficientStats": true,
      "note": "學業 < 35 或上次默書記憶不穩 → 範圍看起來很大、需要家人／tutor 拆細；理智值 < 35 → 日期一寫出來就緊張；自信 < 35 → 問「我會唔會又唔識」；理智值 >= 60 或學業穩定 → 抄低日期、圈起範圍、拆成幾日。"
    }
  },
  {
    "id": "s2_w4_15_interest_classes_restart",
    "sourceTopicId": "S2-W4-15",
    "weekPool": "S2-W4_authored_weekly",
    "termId": "term_p1_s2",
    "week": 4,
    "category": "holiday",
    "title": "興趣班／活動重新開始",
    "sceneIntro": "假期後，不只是學校開始，興趣班和活動也重新被提起。有人星期六要去畫畫，有人要練琴，有人補習又開始，有人想停一停。這些不是每天在班房發生的事，但它們會跟著同學的話、家人的問題和老師的提醒回到你面前。",
    "metadata": {
      "sourceMarkdown": "info/s2_w1_w6_dialogue_draft_v0_5.md",
      "sourceTitle": "S2-W1–S2-W6｜聖誕假期到農曆新年後｜事件對話草稿 v0.5",
      "uiHidden": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        4,
        4
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w4_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w1_w6",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "family_asks_continue",
        "variantTitle": "家人問是否繼續",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "家人翻著手機訊息：「畫畫班下星期又開始，仲去唔去？」你聽見班名，想到顏色、紙和坐很久的椅子，也想到假期裡不用趕車的下午。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w4_15_interest_classes_restart_family_asks_continue_choice_1",
            "text": "說想繼續。",
            "buttonText": "說想繼續。",
            "playerLine": "想去。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說那就要準時收拾東西。你想到畫筆，心裡有一點亮，也有一點趕。"
            },
            "resultText": "家人說那就要準時收拾東西。你想到畫筆，心裡有一點亮，也有一點趕。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w4_15_interest_classes_restart",
              "variantId": "family_asks_continue",
              "mustMatchEventTitle": "興趣班／活動重新開始"
            }
          },
          {
            "id": "s2_w4_15_interest_classes_restart_family_asks_continue_choice_2",
            "text": "說想停一次。",
            "buttonText": "說想停一次。",
            "playerLine": "可唔可以唔去一次？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人問是不是太累。你不一定答得清楚，但第一次把「不想去」說了出來。"
            },
            "resultText": "家人問是不是太累。你不一定答得清楚，但第一次把「不想去」說了出來。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w4_15_interest_classes_restart",
              "variantId": "family_asks_continue",
              "mustMatchEventTitle": "興趣班／活動重新開始"
            }
          },
          {
            "id": "s2_w4_15_interest_classes_restart_family_asks_continue_choice_3",
            "text": "問要多久。",
            "buttonText": "問要多久。",
            "playerLine": "幾耐㗎？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說一個鐘多。你用手指數，覺得一個鐘在假期後變得特別長。"
            },
            "resultText": "家人說一個鐘多。你用手指數，覺得一個鐘在假期後變得特別長。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w4_15_interest_classes_restart",
              "variantId": "family_asks_continue",
              "mustMatchEventTitle": "興趣班／活動重新開始"
            }
          },
          {
            "id": "s2_w4_15_interest_classes_restart_family_asks_continue_choice_4",
            "text": "沒有意見。",
            "buttonText": "沒有意見。",
            "playerLine": "唔知。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說先去一次看看。你點頭，像把答案交給下星期的自己。"
            },
            "resultText": "家人說先去一次看看。你點頭，像把答案交給下星期的自己。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w4_15_interest_classes_restart",
              "variantId": "family_asks_continue",
              "mustMatchEventTitle": "興趣班／活動重新開始"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "teacher_mentions_activity",
        "variantTitle": "老師提起活動",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "老師在課後說：「之前報咗活動嘅同學，記得留意通告。」她把幾張紙放在講台邊，沒有逐個點名，但有人已經開始看。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w4_15_interest_classes_restart_teacher_mentions_activity_choice_1",
            "text": "去看通告。",
            "buttonText": "去看通告。",
            "playerLine": "我睇吓。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你走到講台邊，看見日期和地點。字很多，但至少你知道活動沒有消失。"
            },
            "resultText": "你走到講台邊，看見日期和地點。字很多，但至少你知道活動沒有消失。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_15_interest_classes_restart",
              "variantId": "teacher_mentions_activity",
              "mustMatchEventTitle": "興趣班／活動重新開始"
            }
          },
          {
            "id": "s2_w4_15_interest_classes_restart_teacher_mentions_activity_choice_2",
            "text": "問自己有沒有報。",
            "buttonText": "問自己有沒有報。",
            "playerLine": "我有冇報㗎？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師叫你回去看手冊。你突然發現自己對報名這件事記得不太牢。"
            },
            "resultText": "老師叫你回去看手冊。你突然發現自己對報名這件事記得不太牢。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w4_15_interest_classes_restart",
              "variantId": "teacher_mentions_activity",
              "mustMatchEventTitle": "興趣班／活動重新開始"
            }
          },
          {
            "id": "s2_w4_15_interest_classes_restart_teacher_mentions_activity_choice_3",
            "text": "等同學先看。",
            "buttonText": "等同學先看。",
            "playerLine": "你哋睇先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你退後一步，讓前面的人看。活動還在那裡，只是你暫時不被人群推著走。"
            },
            "resultText": "你退後一步，讓前面的人看。活動還在那裡，只是你暫時不被人群推著走。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w4_15_interest_classes_restart",
              "variantId": "teacher_mentions_activity",
              "mustMatchEventTitle": "興趣班／活動重新開始"
            }
          },
          {
            "id": "s2_w4_15_interest_classes_restart_teacher_mentions_activity_choice_4",
            "text": "不太想過去。",
            "buttonText": "不太想過去。",
            "playerLine": "……",
            "playerLineType": "silent",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你留在座位，聽見同學在講日期。那些資訊沒有直接到你手上，只在空氣裡飄過。"
            },
            "resultText": "你留在座位，聽見同學在講日期。那些資訊沒有直接到你手上，只在空氣裡飄過。",
            "statusDelta": {
              "社交": 1,
              "家庭關係": 1
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
              "eventId": "s2_w4_15_interest_classes_restart",
              "variantId": "teacher_mentions_activity",
              "mustMatchEventTitle": "興趣班／活動重新開始"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "classmates_compare_activities",
        "variantTitle": "同學比較誰有上班",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "幾個同學講起假期後的活動。有人說自己有鋼琴，有人說有游泳，梓軒立刻問：「你一星期幾多堂？」你聽著，覺得星期六也可以被排得很滿。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w4_15_interest_classes_restart_classmates_compare_activities_choice_1",
            "text": "說自己的活動。",
            "buttonText": "說自己的活動。",
            "playerLine": "我有畫畫。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒問你畫了甚麼。你還沒回答，他已經像在估誰比較忙。"
            },
            "resultText": "梓軒問你畫了甚麼。你還沒回答，他已經像在估誰比較忙。",
            "statusDelta": {
              "社交": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w4_15_interest_classes_restart",
              "variantId": "classmates_compare_activities",
              "mustMatchEventTitle": "興趣班／活動重新開始"
            }
          },
          {
            "id": "s2_w4_15_interest_classes_restart_classmates_compare_activities_choice_2",
            "text": "說沒有很多。",
            "buttonText": "說沒有很多。",
            "playerLine": "我冇咁多。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "有人說少一點也好。你不知道他是真心還是羨慕，只覺得活動數量突然變成可以比較的東西。"
            },
            "resultText": "有人說少一點也好。你不知道他是真心還是羨慕，只覺得活動數量突然變成可以比較的東西。",
            "statusDelta": {
              "社交": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w4_15_interest_classes_restart",
              "variantId": "classmates_compare_activities",
              "mustMatchEventTitle": "興趣班／活動重新開始"
            }
          },
          {
            "id": "s2_w4_15_interest_classes_restart_classmates_compare_activities_choice_3",
            "text": "不加入。",
            "buttonText": "不加入。",
            "playerLine": "我唔講。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒聳聳肩，繼續問別人。你把自己的星期六留在自己那邊。"
            },
            "resultText": "梓軒聳聳肩，繼續問別人。你把自己的星期六留在自己那邊。",
            "statusDelta": {
              "社交": 1,
              "家庭關係": 1
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
              "eventId": "s2_w4_15_interest_classes_restart",
              "variantId": "classmates_compare_activities",
              "mustMatchEventTitle": "興趣班／活動重新開始"
            }
          },
          {
            "id": "s2_w4_15_interest_classes_restart_classmates_compare_activities_choice_4",
            "text": "問好不好玩。",
            "buttonText": "問好不好玩。",
            "playerLine": "好玩咩？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "同學說有時好玩，有時好攰。這個答案比「多不多」更像真的。"
            },
            "resultText": "同學說有時好玩，有時好攰。這個答案比「多不多」更像真的。",
            "statusDelta": {
              "社交": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w4_15_interest_classes_restart",
              "variantId": "classmates_compare_activities",
              "mustMatchEventTitle": "興趣班／活動重新開始"
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
        "variantId": "player_wants_stop_or_try",
        "variantTitle": "玩家想停或想試",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "晚上，家人問活動安排時，你看著自己的畫紙或練習簿，心裡有兩個聲音。一個說想再試，一個說好像很累。你不太會講完整，只能先講最短的一句。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w4_15_interest_classes_restart_player_wants_stop_or_try_choice_1",
            "text": "我想試。",
            "buttonText": "我想試。",
            "playerLine": "我想試多次。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人點頭，說那就再去一次看看。你沒有保證會一直喜歡，只是給自己多一次。"
            },
            "resultText": "家人點頭，說那就再去一次看看。你沒有保證會一直喜歡，只是給自己多一次。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w4_15_interest_classes_restart",
              "variantId": "player_wants_stop_or_try",
              "mustMatchEventTitle": "興趣班／活動重新開始"
            }
          },
          {
            "id": "s2_w4_15_interest_classes_restart_player_wants_stop_or_try_choice_2",
            "text": "我想停。",
            "buttonText": "我想停。",
            "playerLine": "我想停吓。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人問是不是太辛苦。你點頭，又不確定是不是只有辛苦，還是有點怕。"
            },
            "resultText": "家人問是不是太辛苦。你點頭，又不確定是不是只有辛苦，還是有點怕。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w4_15_interest_classes_restart",
              "variantId": "player_wants_stop_or_try",
              "mustMatchEventTitle": "興趣班／活動重新開始"
            }
          },
          {
            "id": "s2_w4_15_interest_classes_restart_player_wants_stop_or_try_choice_3",
            "text": "我未諗好。",
            "buttonText": "我未諗好。",
            "playerLine": "未諗到。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說可以明天再講。答案被放到明天，你暫時不用立刻選邊邊。"
            },
            "resultText": "家人說可以明天再講。答案被放到明天，你暫時不用立刻選邊邊。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w4_15_interest_classes_restart",
              "variantId": "player_wants_stop_or_try",
              "mustMatchEventTitle": "興趣班／活動重新開始"
            }
          },
          {
            "id": "s2_w4_15_interest_classes_restart_player_wants_stop_or_try_choice_4",
            "text": "問可不可以換。",
            "buttonText": "問可不可以換。",
            "playerLine": "可唔可以試第二樣？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說要先想清楚，不是每樣都可以立刻換。你第一次覺得興趣也要排隊。"
            },
            "resultText": "家人說要先想清楚，不是每樣都可以立刻換。你第一次覺得興趣也要排隊。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w4_15_interest_classes_restart",
              "variantId": "player_wants_stop_or_try",
              "mustMatchEventTitle": "興趣班／活動重新開始"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      }
    ],
    "propertyValidation": {
      "purpose": "natural_scene_branching_only",
      "propertyContext": "optionalActivityValidation",
      "ordinaryVersionAlwaysAvailable": true,
      "hideLockedChoices": true,
      "doNotShowInsufficientStats": true,
      "note": "只作活動／興趣班自然分流，不作成功失敗判定。可參考已報名活動、skillExp、體力或理智值，但普通版本永遠可用。"
    }
  },
  {
    "id": "s2_w4_16_new_stationery_and_object_comparison",
    "sourceTopicId": "S2-W4-16",
    "weekPool": "S2-W4_authored_weekly",
    "termId": "term_p1_s2",
    "week": 4,
    "category": "holiday",
    "title": "新文具／新書包／開學後的物件比較",
    "sceneIntro": "新學期開始後，班房裡多了很多新東西：新鉛筆盒、新書包扣、新擦膠、新包書膠。有些是聖誕或新年買的，有些只是家人趁假期換了。東西一放到桌上，就很容易被看見，也很容易被比較。",
    "metadata": {
      "sourceMarkdown": "info/s2_w1_w6_dialogue_draft_v0_5.md",
      "sourceTitle": "S2-W1–S2-W6｜聖誕假期到農曆新年後｜事件對話草稿 v0.5",
      "uiHidden": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        4,
        4
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w4_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w1_w6",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "zixuan_comparison",
        "variantTitle": "梓軒式比較",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "梓軒看到你或別人的新鉛筆盒，立刻問：「幾錢？有冇兩層？」他把自己的筆盒打開給旁邊看，像打開一個小展覽。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w4_16_new_stationery_and_object_comparison_zixuan_comparison_choice_1",
            "text": "說不知道價錢。",
            "buttonText": "說不知道價錢。",
            "playerLine": "唔知幾錢。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒愣了一下，好像沒想到你不知道。那個筆盒突然不再是價錢，而只是你每天要打開的東西。"
            },
            "resultText": "梓軒愣了一下，好像沒想到你不知道。那個筆盒突然不再是價錢，而只是你每天要打開的東西。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_16_new_stationery_and_object_comparison",
              "variantId": "zixuan_comparison",
              "mustMatchEventTitle": "新文具／新書包／開學後的物件比較"
            }
          },
          {
            "id": "s2_w4_16_new_stationery_and_object_comparison_zixuan_comparison_choice_2",
            "text": "問他筆盒。",
            "buttonText": "問他筆盒。",
            "playerLine": "你嗰個呢？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒立刻展示暗格。你看見他真的很想被看見，不只是想問人。"
            },
            "resultText": "梓軒立刻展示暗格。你看見他真的很想被看見，不只是想問人。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_16_new_stationery_and_object_comparison",
              "variantId": "zixuan_comparison",
              "mustMatchEventTitle": "新文具／新書包／開學後的物件比較"
            }
          },
          {
            "id": "s2_w4_16_new_stationery_and_object_comparison_zixuan_comparison_choice_3",
            "text": "不想比較。",
            "buttonText": "不想比較。",
            "playerLine": "唔好比啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒撇嘴，把筆盒合上。你沒有贏，也沒有輸，只是把桌面收回自己那邊。"
            },
            "resultText": "梓軒撇嘴，把筆盒合上。你沒有贏，也沒有輸，只是把桌面收回自己那邊。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_16_new_stationery_and_object_comparison",
              "variantId": "zixuan_comparison",
              "mustMatchEventTitle": "新文具／新書包／開學後的物件比較"
            }
          },
          {
            "id": "s2_w4_16_new_stationery_and_object_comparison_zixuan_comparison_choice_4",
            "text": "說很普通。",
            "buttonText": "說很普通。",
            "playerLine": "普通咋。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒看了一眼，說也不是很普通。你第一次發現他連普通也能拿來評一評。"
            },
            "resultText": "梓軒看了一眼，說也不是很普通。你第一次發現他連普通也能拿來評一評。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_16_new_stationery_and_object_comparison",
              "variantId": "zixuan_comparison",
              "mustMatchEventTitle": "新文具／新書包／開學後的物件比較"
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
        "variantId": "wingnam_notices_small_item",
        "variantTitle": "穎心注意小物",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "穎心沒有看你的書包多貴，只是指著你鉛筆上的小貼紙：「呢張好細。」她說完又低頭寫字，像只是把看見的東西放到你面前。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w4_16_new_stationery_and_object_comparison_wingnam_notices_small_item_choice_1",
            "text": "說是鄰居給看的款。",
            "buttonText": "說是鄰居給看的款。",
            "playerLine": "我見過類似嘅。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心點點頭，沒有追問鄰居是誰。那張小貼紙把校外的平台，帶到課桌角落。"
            },
            "resultText": "穎心點點頭，沒有追問鄰居是誰。那張小貼紙把校外的平台，帶到課桌角落。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_16_new_stationery_and_object_comparison",
              "variantId": "wingnam_notices_small_item",
              "mustMatchEventTitle": "新文具／新書包／開學後的物件比較"
            }
          },
          {
            "id": "s2_w4_16_new_stationery_and_object_comparison_wingnam_notices_small_item_choice_2",
            "text": "讓她看近一點。",
            "buttonText": "讓她看近一點。",
            "playerLine": "你睇吓。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把鉛筆推近。穎心只看了一下就推回來，像很怕拿太久。"
            },
            "resultText": "你把鉛筆推近。穎心只看了一下就推回來，像很怕拿太久。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_16_new_stationery_and_object_comparison",
              "variantId": "wingnam_notices_small_item",
              "mustMatchEventTitle": "新文具／新書包／開學後的物件比較"
            }
          },
          {
            "id": "s2_w4_16_new_stationery_and_object_comparison_wingnam_notices_small_item_choice_3",
            "text": "說會掉。",
            "buttonText": "說會掉。",
            "playerLine": "驚佢甩。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心說可以不要一直摸。她的提醒很小，卻讓你把鉛筆放得穩一點。"
            },
            "resultText": "穎心說可以不要一直摸。她的提醒很小，卻讓你把鉛筆放得穩一點。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_16_new_stationery_and_object_comparison",
              "variantId": "wingnam_notices_small_item",
              "mustMatchEventTitle": "新文具／新書包／開學後的物件比較"
            }
          },
          {
            "id": "s2_w4_16_new_stationery_and_object_comparison_wingnam_notices_small_item_choice_4",
            "text": "不太想展示。",
            "buttonText": "不太想展示。",
            "playerLine": "唔睇住。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心點頭，沒有再看。你的小東西還是你的，沒有被拿出來比。"
            },
            "resultText": "穎心點頭，沒有再看。你的小東西還是你的，沒有被拿出來比。",
            "statusDelta": {
              "學業": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w4_16_new_stationery_and_object_comparison",
              "variantId": "wingnam_notices_small_item",
              "mustMatchEventTitle": "新文具／新書包／開學後的物件比較"
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
        "variantId": "kalong_borrows_to_look",
        "variantTitle": "家朗借來看",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "家朗一看見新書包扣，就湊過來：「借我睇一睇。」他的手已經伸了一半，又停在半空，像突然想起不是每樣東西都可以直接拿。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w4_16_new_stationery_and_object_comparison_kalong_borrows_to_look_choice_1",
            "text": "給他看但不給拿走。",
            "buttonText": "給他看但不給拿走。",
            "playerLine": "你喺度睇啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗低頭看，沒有拆下來。他說好似會發光，雖然其實只是膠面反光。"
            },
            "resultText": "家朗低頭看，沒有拆下來。他說好似會發光，雖然其實只是膠面反光。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_16_new_stationery_and_object_comparison",
              "variantId": "kalong_borrows_to_look",
              "mustMatchEventTitle": "新文具／新書包／開學後的物件比較"
            }
          },
          {
            "id": "s2_w4_16_new_stationery_and_object_comparison_kalong_borrows_to_look_choice_2",
            "text": "說等一下。",
            "buttonText": "說等一下。",
            "playerLine": "等陣先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗收回手，跑去看別人的。你沒有拒絕到底，只是把速度放慢了。"
            },
            "resultText": "家朗收回手，跑去看別人的。你沒有拒絕到底，只是把速度放慢了。",
            "statusDelta": {
              "學業": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w4_16_new_stationery_and_object_comparison",
              "variantId": "kalong_borrows_to_look",
              "mustMatchEventTitle": "新文具／新書包／開學後的物件比較"
            }
          },
          {
            "id": "s2_w4_16_new_stationery_and_object_comparison_kalong_borrows_to_look_choice_3",
            "text": "提醒不要拉。",
            "buttonText": "提醒不要拉。",
            "playerLine": "唔好拉呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗立刻放輕力。他不是故意粗魯，只是手比腦快了一點。"
            },
            "resultText": "家朗立刻放輕力。他不是故意粗魯，只是手比腦快了一點。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_16_new_stationery_and_object_comparison",
              "variantId": "kalong_borrows_to_look",
              "mustMatchEventTitle": "新文具／新書包／開學後的物件比較"
            }
          },
          {
            "id": "s2_w4_16_new_stationery_and_object_comparison_kalong_borrows_to_look_choice_4",
            "text": "借給他拿一下。",
            "buttonText": "借給他拿一下。",
            "playerLine": "小心啲。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "他拿起來看了一下，很快還你。你盯著他的手，直到書包扣回到自己掌心。"
            },
            "resultText": "他拿起來看了一下，很快還你。你盯著他的手，直到書包扣回到自己掌心。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_16_new_stationery_and_object_comparison",
              "variantId": "kalong_borrows_to_look",
              "mustMatchEventTitle": "新文具／新書包／開學後的物件比較"
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
        "variantId": "teacher_reminds_write_name",
        "variantTitle": "老師提醒寫名",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "老師看見幾個新文具在桌上轉來轉去，拍了拍手：「新嘢要寫名，唔係唔見咗唔知邊個嘅。」班房裡立刻有人找箱頭筆。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w4_16_new_stationery_and_object_comparison_teacher_reminds_write_name_choice_1",
            "text": "立刻寫名。",
            "buttonText": "立刻寫名。",
            "playerLine": "我寫名。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你在鉛筆盒底寫上名字。字有點歪，但它把那樣東西從「新嘢」變成「你的」。"
            },
            "resultText": "你在鉛筆盒底寫上名字。字有點歪，但它把那樣東西從「新嘢」變成「你的」。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_16_new_stationery_and_object_comparison",
              "variantId": "teacher_reminds_write_name",
              "mustMatchEventTitle": "新文具／新書包／開學後的物件比較"
            }
          },
          {
            "id": "s2_w4_16_new_stationery_and_object_comparison_teacher_reminds_write_name_choice_2",
            "text": "問寫哪裡。",
            "buttonText": "問寫哪裡。",
            "playerLine": "寫邊度？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師叫你寫在不太顯眼但看得到的位置。你翻來翻去，像在替名字找一個家。"
            },
            "resultText": "老師叫你寫在不太顯眼但看得到的位置。你翻來翻去，像在替名字找一個家。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_16_new_stationery_and_object_comparison",
              "variantId": "teacher_reminds_write_name",
              "mustMatchEventTitle": "新文具／新書包／開學後的物件比較"
            }
          },
          {
            "id": "s2_w4_16_new_stationery_and_object_comparison_teacher_reminds_write_name_choice_3",
            "text": "借筆寫名。",
            "buttonText": "借筆寫名。",
            "playerLine": "可唔可以借筆？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "旁邊同學把箱頭筆遞給你。新文具的規矩，竟然也需要舊文具幫忙。"
            },
            "resultText": "旁邊同學把箱頭筆遞給你。新文具的規矩，竟然也需要舊文具幫忙。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_16_new_stationery_and_object_comparison",
              "variantId": "teacher_reminds_write_name",
              "mustMatchEventTitle": "新文具／新書包／開學後的物件比較"
            }
          },
          {
            "id": "s2_w4_16_new_stationery_and_object_comparison_teacher_reminds_write_name_choice_4",
            "text": "覺得不想寫。",
            "buttonText": "覺得不想寫。",
            "playerLine": "寫咗唔靚。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說不寫會更麻煩。你看著乾淨的盒面，最後還是把名字小小地寫上去。"
            },
            "resultText": "老師說不寫會更麻煩。你看著乾淨的盒面，最後還是把名字小小地寫上去。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w4_16_new_stationery_and_object_comparison",
              "variantId": "teacher_reminds_write_name",
              "mustMatchEventTitle": "新文具／新書包／開學後的物件比較"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      }
    ],
    "popCultureAnchor": "TODO_RESEARCH_CONFIRM",
    "fallback": [
      "generic_cartoon_stationery",
      "pencil_case_sticker",
      "school_bag_charm"
    ]
  },
  {
    "id": "s2_w5_17_family_lunar_new_year_cleaning",
    "sourceTopicId": "S2-W5-17",
    "weekPool": "S2-W5_authored_weekly",
    "termId": "term_p1_s2",
    "week": 5,
    "category": "holiday",
    "title": "家裡大掃除",
    "sceneIntro": "農曆新年前，家裡開始大掃除。平時放在角落的東西被拿出來，櫃子打開，舊袋子被翻起，桌上全是紙、玩具和不知何時留下的小物。大人說要清一清，你卻覺得很多東西突然都有了理由不能丟。",
    "metadata": {
      "sourceMarkdown": "info/s2_w1_w6_dialogue_draft_v0_5.md",
      "sourceTitle": "S2-W1–S2-W6｜聖誕假期到農曆新年後｜事件對話草稿 v0.5",
      "uiHidden": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        5,
        5
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w5_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w1_w6",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "players_small_things_sorted",
        "variantTitle": "玩家的小東西被整理",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "家人拿起一個小盒子：「呢啲仲要唔要？」裡面有貼紙、半截鉛筆、一張不知哪次帶回來的通告角。你本來忘了它們，一看到又覺得每樣都像認識你。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w5_17_family_lunar_new_year_cleaning_players_small_things_sorted_choice_1",
            "text": "全部想留。",
            "buttonText": "全部想留。",
            "playerLine": "全部留得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說盒子裝不下。你看著那些小東西，第一次覺得喜歡也需要位置。"
            },
            "resultText": "家人說盒子裝不下。你看著那些小東西，第一次覺得喜歡也需要位置。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_17_family_lunar_new_year_cleaning",
              "variantId": "players_small_things_sorted",
              "mustMatchEventTitle": "家裡大掃除"
            }
          },
          {
            "id": "s2_w5_17_family_lunar_new_year_cleaning_players_small_things_sorted_choice_2",
            "text": "挑幾樣。",
            "buttonText": "挑幾樣。",
            "playerLine": "我揀幾個。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把貼紙和小玩具留下，半截鉛筆放到旁邊。丟掉不是很開心，但盒子真的鬆了一點。"
            },
            "resultText": "你把貼紙和小玩具留下，半截鉛筆放到旁邊。丟掉不是很開心，但盒子真的鬆了一點。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_17_family_lunar_new_year_cleaning",
              "variantId": "players_small_things_sorted",
              "mustMatchEventTitle": "家裡大掃除"
            }
          },
          {
            "id": "s2_w5_17_family_lunar_new_year_cleaning_players_small_things_sorted_choice_3",
            "text": "問為甚麼要丟。",
            "buttonText": "問為甚麼要丟。",
            "playerLine": "點解要掉？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說新年要清地方。你不完全懂，只覺得新年好像會把舊東西推出來問一次。"
            },
            "resultText": "家人說新年要清地方。你不完全懂，只覺得新年好像會把舊東西推出來問一次。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_17_family_lunar_new_year_cleaning",
              "variantId": "players_small_things_sorted",
              "mustMatchEventTitle": "家裡大掃除"
            }
          },
          {
            "id": "s2_w5_17_family_lunar_new_year_cleaning_players_small_things_sorted_choice_4",
            "text": "抱著盒子。",
            "buttonText": "抱著盒子。",
            "playerLine": "我睇多陣。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人讓你看一會兒。那些小東西躺在盒裡，好像在排隊等你決定。"
            },
            "resultText": "家人讓你看一會兒。那些小東西躺在盒裡，好像在排隊等你決定。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_17_family_lunar_new_year_cleaning",
              "variantId": "players_small_things_sorted",
              "mustMatchEventTitle": "家裡大掃除"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "family_finds_old_homework",
        "variantTitle": "家人找到舊功課",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "櫃底被拉出來時，家人找到一張很久以前的功課紙，上面有紅筆圈和你以前寫得更大的字。家人笑：「你睇，你嗰陣啲字咁大隻。」"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w5_17_family_lunar_new_year_cleaning_family_finds_old_homework_choice_1",
            "text": "看以前的字。",
            "buttonText": "看以前的字。",
            "playerLine": "我以前咁寫㗎？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你看著那些歪歪的字，覺得像別人寫的，又好像是自己。"
            },
            "resultText": "你看著那些歪歪的字，覺得像別人寫的，又好像是自己。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w5_17_family_lunar_new_year_cleaning",
              "variantId": "family_finds_old_homework",
              "mustMatchEventTitle": "家裡大掃除"
            }
          },
          {
            "id": "s2_w5_17_family_lunar_new_year_cleaning_family_finds_old_homework_choice_2",
            "text": "不想看紅筆。",
            "buttonText": "不想看紅筆。",
            "playerLine": "唔好睇啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人把紙放低，沒有繼續笑。紅筆只是舊事，但你還是不太想它被拿出來。"
            },
            "resultText": "家人把紙放低，沒有繼續笑。紅筆只是舊事，但你還是不太想它被拿出來。",
            "statusDelta": {
              "學業": 1,
              "家庭關係": 1
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
              "eventId": "s2_w5_17_family_lunar_new_year_cleaning",
              "variantId": "family_finds_old_homework",
              "mustMatchEventTitle": "家裡大掃除"
            }
          },
          {
            "id": "s2_w5_17_family_lunar_new_year_cleaning_family_finds_old_homework_choice_3",
            "text": "問可以留嗎。",
            "buttonText": "問可以留嗎。",
            "playerLine": "留返得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說可以留一兩張。你挑了一張錯不算太多的，像挑一個比較敢看的以前。"
            },
            "resultText": "家人說可以留一兩張。你挑了一張錯不算太多的，像挑一個比較敢看的以前。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w5_17_family_lunar_new_year_cleaning",
              "variantId": "family_finds_old_homework",
              "mustMatchEventTitle": "家裡大掃除"
            }
          },
          {
            "id": "s2_w5_17_family_lunar_new_year_cleaning_family_finds_old_homework_choice_4",
            "text": "說現在寫得好一點。",
            "buttonText": "說現在寫得好一點。",
            "playerLine": "我而家好啲。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人點頭，說是啊。這句話很短，但你覺得自己真的從那張紙走遠了一點。"
            },
            "resultText": "家人點頭，說是啊。這句話很短，但你覺得自己真的從那張紙走遠了一點。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w5_17_family_lunar_new_year_cleaning",
              "variantId": "family_finds_old_homework",
              "mustMatchEventTitle": "家裡大掃除"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "reluctant_to_throw_toy_stationery",
        "variantTitle": "玩具／文具捨不得丟",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "一個舊玩具少了一隻輪，家人說可以丟了。你拿著它，明明很久沒玩，卻突然很不想放進垃圾袋。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w5_17_family_lunar_new_year_cleaning_reluctant_to_throw_toy_stationery_choice_1",
            "text": "說還可以玩。",
            "buttonText": "說還可以玩。",
            "playerLine": "仲玩到。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你推了一下，它歪歪地走了半步。家人看著你，沒有立刻拿走。"
            },
            "resultText": "你推了一下，它歪歪地走了半步。家人看著你，沒有立刻拿走。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_17_family_lunar_new_year_cleaning",
              "variantId": "reluctant_to_throw_toy_stationery",
              "mustMatchEventTitle": "家裡大掃除"
            }
          },
          {
            "id": "s2_w5_17_family_lunar_new_year_cleaning_reluctant_to_throw_toy_stationery_choice_2",
            "text": "放進保留盒。",
            "buttonText": "放進保留盒。",
            "playerLine": "放呢度得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說保留盒滿了就不能再加。你把它放進去，盒蓋差點合不上。"
            },
            "resultText": "家人說保留盒滿了就不能再加。你把它放進去，盒蓋差點合不上。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_17_family_lunar_new_year_cleaning",
              "variantId": "reluctant_to_throw_toy_stationery",
              "mustMatchEventTitle": "家裡大掃除"
            }
          },
          {
            "id": "s2_w5_17_family_lunar_new_year_cleaning_reluctant_to_throw_toy_stationery_choice_3",
            "text": "問可不可以修。",
            "buttonText": "問可不可以修。",
            "playerLine": "整返得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人看了一下，說未必。你抱著玩具，才知道不是每樣壞了都能變回原本。"
            },
            "resultText": "家人看了一下，說未必。你抱著玩具，才知道不是每樣壞了都能變回原本。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_17_family_lunar_new_year_cleaning",
              "variantId": "reluctant_to_throw_toy_stationery",
              "mustMatchEventTitle": "家裡大掃除"
            }
          },
          {
            "id": "s2_w5_17_family_lunar_new_year_cleaning_reluctant_to_throw_toy_stationery_choice_4",
            "text": "最後放手。",
            "buttonText": "最後放手。",
            "playerLine": "咁掉啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你說得很快，像怕自己後悔。垃圾袋輕輕響了一下，那個聲音在你耳邊停了很久。"
            },
            "resultText": "你說得很快，像怕自己後悔。垃圾袋輕輕響了一下，那個聲音在你耳邊停了很久。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_17_family_lunar_new_year_cleaning",
              "variantId": "reluctant_to_throw_toy_stationery",
              "mustMatchEventTitle": "家裡大掃除"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "whole_family_tired",
        "variantTitle": "全家都累了",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "大掃除做到下午，地上已經有幾袋東西。家人坐在椅子上揉肩膀，你也坐在地上，手上還拿著抹布。窗開著，風進來，卻沒有把累吹走。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w5_17_family_lunar_new_year_cleaning_whole_family_tired_choice_1",
            "text": "說好累。",
            "buttonText": "說好累。",
            "playerLine": "我好攰。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說他們也累。你第一次發現大掃除不是大人的魔法，而是大家一起累。"
            },
            "resultText": "家人說他們也累。你第一次發現大掃除不是大人的魔法，而是大家一起累。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_17_family_lunar_new_year_cleaning",
              "variantId": "whole_family_tired",
              "mustMatchEventTitle": "家裡大掃除"
            }
          },
          {
            "id": "s2_w5_17_family_lunar_new_year_cleaning_whole_family_tired_choice_2",
            "text": "繼續抹一小塊。",
            "buttonText": "繼續抹一小塊。",
            "playerLine": "我抹呢度。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你只抹了一小塊桌腳，但它真的乾淨了一點。小小的地方，也算被你整理過。"
            },
            "resultText": "你只抹了一小塊桌腳，但它真的乾淨了一點。小小的地方，也算被你整理過。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_17_family_lunar_new_year_cleaning",
              "variantId": "whole_family_tired",
              "mustMatchEventTitle": "家裡大掃除"
            }
          },
          {
            "id": "s2_w5_17_family_lunar_new_year_cleaning_whole_family_tired_choice_3",
            "text": "問可以休息嗎。",
            "buttonText": "問可以休息嗎。",
            "playerLine": "可唔可以休息？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說可以飲水。你拿著杯子坐下，覺得休息也像大掃除的一部分。"
            },
            "resultText": "家人說可以飲水。你拿著杯子坐下，覺得休息也像大掃除的一部分。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_17_family_lunar_new_year_cleaning",
              "variantId": "whole_family_tired",
              "mustMatchEventTitle": "家裡大掃除"
            }
          },
          {
            "id": "s2_w5_17_family_lunar_new_year_cleaning_whole_family_tired_choice_4",
            "text": "看清出來的空位。",
            "buttonText": "看清出來的空位。",
            "playerLine": "呢度多咗位。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "原本堆滿東西的角落露出地板。你看著那塊空位，覺得新年可能就是先讓一點地方出來。"
            },
            "resultText": "原本堆滿東西的角落露出地板。你看著那塊空位，覺得新年可能就是先讓一點地方出來。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_17_family_lunar_new_year_cleaning",
              "variantId": "whole_family_tired",
              "mustMatchEventTitle": "家裡大掃除"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      }
    ]
  },
  {
    "id": "s2_w5_18_buy_new_year_clothes_shoes_stationery",
    "sourceTopicId": "S2-W5-18",
    "weekPool": "S2-W5_authored_weekly",
    "termId": "term_p1_s2",
    "week": 5,
    "category": "holiday",
    "title": "買新年衫／鞋／文具",
    "sceneIntro": "新年前，家人帶你去買一兩樣要用的東西。街上和店裡都很多人，紅色、金色和價錢牌掛得到處都是。你以為買新東西一定開心，但原來試衣、等碼、看價錢和不能甚麼都買，也會讓人累。",
    "metadata": {
      "sourceMarkdown": "info/s2_w1_w6_dialogue_draft_v0_5.md",
      "sourceTitle": "S2-W1–S2-W6｜聖誕假期到農曆新年後｜事件對話草稿 v0.5",
      "uiHidden": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        5,
        5
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w5_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w1_w6",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "try_clothes",
        "variantTitle": "試衣服",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "店員拿了一件衣服給你試。家人說：「試吓啱唔啱身。」你站在鏡子前，袖子有點長，領口有點硬。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w5_18_buy_new_year_clothes_shoes_stationery_try_clothes_choice_1",
            "text": "說袖子長。",
            "buttonText": "說袖子長。",
            "playerLine": "袖好長。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人把袖子折了一下，說大一點可以穿久些。你看著鏡子裡的自己，像穿著一件還沒完全屬於你的衣服。"
            },
            "resultText": "家人把袖子折了一下，說大一點可以穿久些。你看著鏡子裡的自己，像穿著一件還沒完全屬於你的衣服。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_18_buy_new_year_clothes_shoes_stationery",
              "variantId": "try_clothes",
              "mustMatchEventTitle": "買新年衫／鞋／文具"
            }
          },
          {
            "id": "s2_w5_18_buy_new_year_clothes_shoes_stationery_try_clothes_choice_2",
            "text": "轉一圈。",
            "buttonText": "轉一圈。",
            "playerLine": "咁樣得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你轉得太快，衣角飛起。家人叫你站定一點，但嘴角有笑。"
            },
            "resultText": "你轉得太快，衣角飛起。家人叫你站定一點，但嘴角有笑。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_18_buy_new_year_clothes_shoes_stationery",
              "variantId": "try_clothes",
              "mustMatchEventTitle": "買新年衫／鞋／文具"
            }
          },
          {
            "id": "s2_w5_18_buy_new_year_clothes_shoes_stationery_try_clothes_choice_3",
            "text": "覺得不舒服。",
            "buttonText": "覺得不舒服。",
            "playerLine": "呢度拮住。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人叫你換另一件。原來新衣服不是漂亮就一定可以穿。"
            },
            "resultText": "家人叫你換另一件。原來新衣服不是漂亮就一定可以穿。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_18_buy_new_year_clothes_shoes_stationery",
              "variantId": "try_clothes",
              "mustMatchEventTitle": "買新年衫／鞋／文具"
            }
          },
          {
            "id": "s2_w5_18_buy_new_year_clothes_shoes_stationery_try_clothes_choice_4",
            "text": "只想快點出去。",
            "buttonText": "只想快點出去。",
            "playerLine": "試完未呀？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說還要看鞋。你嘆了一口氣，發現買新年東西比想像中長。"
            },
            "resultText": "家人說還要看鞋。你嘆了一口氣，發現買新年東西比想像中長。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_18_buy_new_year_clothes_shoes_stationery",
              "variantId": "try_clothes",
              "mustMatchEventTitle": "買新年衫／鞋／文具"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "money_discussion",
        "variantTitle": "錢的討論",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "家人拿著兩件差不多的衣服看價錢，一件貴一點，一件便宜一點。大人沒有立刻問你喜歡哪件，而是先看牌子和折扣。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w5_18_buy_new_year_clothes_shoes_stationery_money_discussion_choice_1",
            "text": "問哪件便宜。",
            "buttonText": "問哪件便宜。",
            "playerLine": "邊件平啲？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人指給你看，你看著數字，仍然不太懂差多少，只知道價錢會改變大人的表情。"
            },
            "resultText": "家人指給你看，你看著數字，仍然不太懂差多少，只知道價錢會改變大人的表情。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w5_18_buy_new_year_clothes_shoes_stationery",
              "variantId": "money_discussion",
              "mustMatchEventTitle": "買新年衫／鞋／文具"
            }
          },
          {
            "id": "s2_w5_18_buy_new_year_clothes_shoes_stationery_money_discussion_choice_2",
            "text": "說喜歡貴那件。",
            "buttonText": "說喜歡貴那件。",
            "playerLine": "我鍾意呢件。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說要再想想。你抱著衣服，第一次覺得喜歡不一定可以直接帶回家。"
            },
            "resultText": "家人說要再想想。你抱著衣服，第一次覺得喜歡不一定可以直接帶回家。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_18_buy_new_year_clothes_shoes_stationery",
              "variantId": "money_discussion",
              "mustMatchEventTitle": "買新年衫／鞋／文具"
            }
          },
          {
            "id": "s2_w5_18_buy_new_year_clothes_shoes_stationery_money_discussion_choice_3",
            "text": "說便宜也可以。",
            "buttonText": "說便宜也可以。",
            "playerLine": "呢件都得。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人看了你一眼，說那就試試。你不知道自己是不是懂事，只是想快點結束那個價錢牌。"
            },
            "resultText": "家人看了你一眼，說那就試試。你不知道自己是不是懂事，只是想快點結束那個價錢牌。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_18_buy_new_year_clothes_shoes_stationery",
              "variantId": "money_discussion",
              "mustMatchEventTitle": "買新年衫／鞋／文具"
            }
          },
          {
            "id": "s2_w5_18_buy_new_year_clothes_shoes_stationery_money_discussion_choice_4",
            "text": "不想聽錢。",
            "buttonText": "不想聽錢。",
            "playerLine": "我唔知呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人沒有逼你決定。你站在旁邊，看大人把新年和錢一起放在手裡掂量。"
            },
            "resultText": "家人沒有逼你決定。你站在旁邊，看大人把新年和錢一起放在手裡掂量。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_18_buy_new_year_clothes_shoes_stationery",
              "variantId": "money_discussion",
              "mustMatchEventTitle": "買新年衫／鞋／文具"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "player_wants_item",
        "variantTitle": "玩家想要某件東西",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "你看到一個很亮的新文具，外面有卡通圖案。它不在原本要買的清單上，但你一看到就停下來。家人走了幾步才發現你還站在貨架前。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w5_18_buy_new_year_clothes_shoes_stationery_player_wants_item_choice_1",
            "text": "說想要。",
            "buttonText": "說想要。",
            "playerLine": "我想要呢個。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人看了價錢，沒有馬上答應。那幾秒很長，你的手停在貨架邊。"
            },
            "resultText": "家人看了價錢，沒有馬上答應。那幾秒很長，你的手停在貨架邊。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_18_buy_new_year_clothes_shoes_stationery",
              "variantId": "player_wants_item",
              "mustMatchEventTitle": "買新年衫／鞋／文具"
            }
          },
          {
            "id": "s2_w5_18_buy_new_year_clothes_shoes_stationery_player_wants_item_choice_2",
            "text": "問可不可以下次。",
            "buttonText": "問可不可以下次。",
            "playerLine": "下次買得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說可以先記住。你不知道下次是甚麼時候，但至少不是完全沒有。"
            },
            "resultText": "家人說可以先記住。你不知道下次是甚麼時候，但至少不是完全沒有。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_18_buy_new_year_clothes_shoes_stationery",
              "variantId": "player_wants_item",
              "mustMatchEventTitle": "買新年衫／鞋／文具"
            }
          },
          {
            "id": "s2_w5_18_buy_new_year_clothes_shoes_stationery_player_wants_item_choice_3",
            "text": "自己放回去。",
            "buttonText": "自己放回去。",
            "playerLine": "算啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把文具放回架上，放得很慢。它還在那裡亮著，但不跟你回家。"
            },
            "resultText": "你把文具放回架上，放得很慢。它還在那裡亮著，但不跟你回家。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_18_buy_new_year_clothes_shoes_stationery",
              "variantId": "player_wants_item",
              "mustMatchEventTitle": "買新年衫／鞋／文具"
            }
          },
          {
            "id": "s2_w5_18_buy_new_year_clothes_shoes_stationery_player_wants_item_choice_4",
            "text": "說用舊的也可以。",
            "buttonText": "說用舊的也可以。",
            "playerLine": "我用返舊嗰個。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人摸摸你的頭，沒有多說。你突然有點想念舊筆盒，雖然它角落已經花了。"
            },
            "resultText": "家人摸摸你的頭，沒有多說。你突然有點想念舊筆盒，雖然它角落已經花了。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_18_buy_new_year_clothes_shoes_stationery",
              "variantId": "player_wants_item",
              "mustMatchEventTitle": "買新年衫／鞋／文具"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "family_says_not_everything",
        "variantTitle": "家人說不是每樣都買",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "你手上拿了新鞋、新文具和一個小掛飾。家人蹲下來說：「唔可以樣樣都買，揀一樣最需要嘅。」你看著手上的東西，每一樣都像突然變得很重要。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w5_18_buy_new_year_clothes_shoes_stationery_family_says_not_everything_choice_1",
            "text": "選最需要的。",
            "buttonText": "選最需要的。",
            "playerLine": "咁鞋啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人點頭，說鞋真的舊了。你把文具放回去，心裡有一點空，但腳上的鞋好像也鬆了一口氣。"
            },
            "resultText": "家人點頭，說鞋真的舊了。你把文具放回去，心裡有一點空，但腳上的鞋好像也鬆了一口氣。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_18_buy_new_year_clothes_shoes_stationery",
              "variantId": "family_says_not_everything",
              "mustMatchEventTitle": "買新年衫／鞋／文具"
            }
          },
          {
            "id": "s2_w5_18_buy_new_year_clothes_shoes_stationery_family_says_not_everything_choice_2",
            "text": "選最想要的。",
            "buttonText": "選最想要的。",
            "playerLine": "我想要呢個。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人問你真的需要嗎。你抱著小掛飾，發現「想要」和「需要」不是同一條路。"
            },
            "resultText": "家人問你真的需要嗎。你抱著小掛飾，發現「想要」和「需要」不是同一條路。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_18_buy_new_year_clothes_shoes_stationery",
              "variantId": "family_says_not_everything",
              "mustMatchEventTitle": "買新年衫／鞋／文具"
            }
          },
          {
            "id": "s2_w5_18_buy_new_year_clothes_shoes_stationery_family_says_not_everything_choice_3",
            "text": "很難選。",
            "buttonText": "很難選。",
            "playerLine": "我唔識揀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人叫你先放下來想。你把三樣東西放在架上，像在看三個小選擇站成一排。"
            },
            "resultText": "家人叫你先放下來想。你把三樣東西放在架上，像在看三個小選擇站成一排。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_18_buy_new_year_clothes_shoes_stationery",
              "variantId": "family_says_not_everything",
              "mustMatchEventTitle": "買新年衫／鞋／文具"
            }
          },
          {
            "id": "s2_w5_18_buy_new_year_clothes_shoes_stationery_family_says_not_everything_choice_4",
            "text": "不買了。",
            "buttonText": "不買了。",
            "playerLine": "咁唔買啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人沒有立刻接受，反而問你是不是生氣。你低頭看鞋尖，才知道自己說得太快。"
            },
            "resultText": "家人沒有立刻接受，反而問你是不是生氣。你低頭看鞋尖，才知道自己說得太快。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w5_18_buy_new_year_clothes_shoes_stationery",
              "variantId": "family_says_not_everything",
              "mustMatchEventTitle": "買新年衫／鞋／文具"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      }
    ],
    "popCultureAnchor": "TODO_RESEARCH_CONFIRM",
    "fallback": [
      "generic_cartoon_stationery_on_shelf"
    ]
  },
  {
    "id": "s2_w5_19_fai_chun_new_year_decoration",
    "sourceTopicId": "S2-W5-19",
    "weekPool": "S2-W5_authored_weekly",
    "termId": "term_p1_s2",
    "week": 5,
    "category": "holiday",
    "title": "揮春／新年佈置",
    "sceneIntro": "學校和家裡都開始出現紅色紙。課室門邊貼了揮春，黑板角落有「新年快樂」，有些字寫得很工整，有些貼得有點斜。新年好像不是一天突然來，而是被大家一張紙一張紙貼近。",
    "metadata": {
      "sourceMarkdown": "info/s2_w1_w6_dialogue_draft_v0_5.md",
      "sourceTitle": "S2-W1–S2-W6｜聖誕假期到農曆新年後｜事件對話草稿 v0.5",
      "uiHidden": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        5,
        5
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w5_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w1_w6",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "teacher_guides_class",
        "variantTitle": "老師帶全班做",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "老師把紅紙派下來：「今日試寫一張新年祝福。寫慢啲，唔使同人鬥快。」紅紙比普通紙滑，你的鉛筆不太聽話。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w5_19_fai_chun_new_year_decoration_teacher_guides_class_choice_1",
            "text": "寫新年快樂。",
            "buttonText": "寫新年快樂。",
            "playerLine": "我寫呢句。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你一筆一筆寫，最後一個字有點歪。老師說看得清楚就好，你把紙放到桌角等乾。"
            },
            "resultText": "你一筆一筆寫，最後一個字有點歪。老師說看得清楚就好，你把紙放到桌角等乾。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w5_19_fai_chun_new_year_decoration",
              "variantId": "teacher_guides_class",
              "mustMatchEventTitle": "揮春／新年佈置"
            }
          },
          {
            "id": "s2_w5_19_fai_chun_new_year_decoration_teacher_guides_class_choice_2",
            "text": "問可以畫嗎。",
            "buttonText": "問可以畫嗎。",
            "playerLine": "可唔可以畫花？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說可以畫一點裝飾。你在角落畫了小花，紅紙突然像你的作品。"
            },
            "resultText": "老師說可以畫一點裝飾。你在角落畫了小花，紅紙突然像你的作品。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w5_19_fai_chun_new_year_decoration",
              "variantId": "teacher_guides_class",
              "mustMatchEventTitle": "揮春／新年佈置"
            }
          },
          {
            "id": "s2_w5_19_fai_chun_new_year_decoration_teacher_guides_class_choice_3",
            "text": "怕寫錯。",
            "buttonText": "怕寫錯。",
            "playerLine": "寫錯點算？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師給你一張草稿紙先試。你在白紙上寫錯，反而沒有那麼可怕。"
            },
            "resultText": "老師給你一張草稿紙先試。你在白紙上寫錯，反而沒有那麼可怕。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w5_19_fai_chun_new_year_decoration",
              "variantId": "teacher_guides_class",
              "mustMatchEventTitle": "揮春／新年佈置"
            }
          },
          {
            "id": "s2_w5_19_fai_chun_new_year_decoration_teacher_guides_class_choice_4",
            "text": "看別人寫。",
            "buttonText": "看別人寫。",
            "playerLine": "我睇吓先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你看見有人寫很大，有人寫很細。看了一會兒，你才敢把筆放到紅紙上。"
            },
            "resultText": "你看見有人寫很大，有人寫很細。看了一會兒，你才敢把筆放到紅紙上。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w5_19_fai_chun_new_year_decoration",
              "variantId": "teacher_guides_class",
              "mustMatchEventTitle": "揮春／新年佈置"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "npcIdHint": "char_teacher",
        "npcNameFallback": "老師"
      },
      {
        "variantId": "wingnam_writes_slowly",
        "variantTitle": "穎心慢慢寫",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "穎心把紅紙壓得很平，先在空中比了一下筆畫，才開始寫。她的字不快，但每一筆都像先想過。她小聲說：「紅紙寫錯好明顯。」"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w5_19_fai_chun_new_year_decoration_wingnam_writes_slowly_choice_1",
            "text": "問她怎樣寫。",
            "buttonText": "問她怎樣寫。",
            "playerLine": "你點寫咁齊？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心說先慢一點。這不是很神奇的方法，但她的慢好像真的有用。"
            },
            "resultText": "穎心說先慢一點。這不是很神奇的方法，但她的慢好像真的有用。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w5_19_fai_chun_new_year_decoration",
              "variantId": "wingnam_writes_slowly",
              "mustMatchEventTitle": "揮春／新年佈置"
            }
          },
          {
            "id": "s2_w5_19_fai_chun_new_year_decoration_wingnam_writes_slowly_choice_2",
            "text": "一起先試草稿。",
            "buttonText": "一起先試草稿。",
            "playerLine": "我哋試紙先。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心點點頭，把紅紙放旁邊。你們先在白紙上寫，錯了也比較敢笑。"
            },
            "resultText": "穎心點點頭，把紅紙放旁邊。你們先在白紙上寫，錯了也比較敢笑。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w5_19_fai_chun_new_year_decoration",
              "variantId": "wingnam_writes_slowly",
              "mustMatchEventTitle": "揮春／新年佈置"
            }
          },
          {
            "id": "s2_w5_19_fai_chun_new_year_decoration_wingnam_writes_slowly_choice_3",
            "text": "說自己的很歪。",
            "buttonText": "說自己的很歪。",
            "playerLine": "我嗰張好斜。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心看了一眼，說只是最後一個字斜。她沒有笑你，只把問題變小了。"
            },
            "resultText": "穎心看了一眼，說只是最後一個字斜。她沒有笑你，只把問題變小了。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w5_19_fai_chun_new_year_decoration",
              "variantId": "wingnam_writes_slowly",
              "mustMatchEventTitle": "揮春／新年佈置"
            }
          },
          {
            "id": "s2_w5_19_fai_chun_new_year_decoration_wingnam_writes_slowly_choice_4",
            "text": "不打擾她。",
            "buttonText": "不打擾她。",
            "playerLine": "……",
            "playerLineType": "silent",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你自己慢慢寫。穎心也沒有說話，兩張紅紙在桌上安靜地變成新年。"
            },
            "resultText": "你自己慢慢寫。穎心也沒有說話，兩張紅紙在桌上安靜地變成新年。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w5_19_fai_chun_new_year_decoration",
              "variantId": "wingnam_writes_slowly",
              "mustMatchEventTitle": "揮春／新年佈置"
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
        "variantId": "baakyu_odd_blessing",
        "variantTitle": "柏宇亂想祝福語",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "柏宇盯著紅紙很久，忽然說：「可唔可以寫『唔好再唔見擦膠』？」旁邊同學笑了，老師也看過來。他立刻補一句：「都係祝福嚟㗎。」"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w5_19_fai_chun_new_year_decoration_baakyu_odd_blessing_choice_1",
            "text": "笑他。",
            "buttonText": "笑他。",
            "playerLine": "哈哈，呢句好怪。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇自己也笑，但還是把那句寫在草稿紙上。新年祝福忽然變得很像他。"
            },
            "resultText": "柏宇自己也笑，但還是把那句寫在草稿紙上。新年祝福忽然變得很像他。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w5_19_fai_chun_new_year_decoration",
              "variantId": "baakyu_odd_blessing",
              "mustMatchEventTitle": "揮春／新年佈置"
            }
          },
          {
            "id": "s2_w5_19_fai_chun_new_year_decoration_baakyu_odd_blessing_choice_2",
            "text": "幫他改短。",
            "buttonText": "幫他改短。",
            "playerLine": "寫『物件平安』？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇想了一下，說更怪。你們在怪和正式之間來回，紅紙還空著。"
            },
            "resultText": "柏宇想了一下，說更怪。你們在怪和正式之間來回，紅紙還空著。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w5_19_fai_chun_new_year_decoration",
              "variantId": "baakyu_odd_blessing",
              "mustMatchEventTitle": "揮春／新年佈置"
            }
          },
          {
            "id": "s2_w5_19_fai_chun_new_year_decoration_baakyu_odd_blessing_choice_3",
            "text": "叫他寫正常點。",
            "buttonText": "叫他寫正常點。",
            "playerLine": "寫新年快樂啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇嘆一口氣，寫了最普通那句。可是他在旁邊畫了一粒找不到的擦膠。"
            },
            "resultText": "柏宇嘆一口氣，寫了最普通那句。可是他在旁邊畫了一粒找不到的擦膠。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w5_19_fai_chun_new_year_decoration",
              "variantId": "baakyu_odd_blessing",
              "mustMatchEventTitle": "揮春／新年佈置"
            }
          },
          {
            "id": "s2_w5_19_fai_chun_new_year_decoration_baakyu_odd_blessing_choice_4",
            "text": "問老師可不可以。",
            "buttonText": "問老師可不可以。",
            "playerLine": "老師，咁寫得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說可以有創意，但要看得懂是祝福。柏宇像得到一半批准，開始認真想。"
            },
            "resultText": "老師說可以有創意，但要看得懂是祝福。柏宇像得到一半批准，開始認真想。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w5_19_fai_chun_new_year_decoration",
              "variantId": "baakyu_odd_blessing",
              "mustMatchEventTitle": "揮春／新年佈置"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgePeer",
        "identityTypeId": "same_age_peer",
        "personalityId": "pers_mischief_maker",
        "npcIdHint": "classmate_mischief_maker",
        "npcNameFallback": "柏宇"
      },
      {
        "variantId": "senior_helps_post",
        "variantTitle": "高年級幫忙貼",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "放學前，幾位高年級學生來幫忙把揮春貼到門邊。高年級學生站在椅子旁邊扶著紙，提醒你們不要擠過去：「膠紙黐手，等陣先。」"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w5_19_fai_chun_new_year_decoration_senior_helps_post_choice_1",
            "text": "遞膠紙。",
            "buttonText": "遞膠紙。",
            "playerLine": "畀你。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "高年級學生接過膠紙，說了聲謝謝。你只是遞了一小段，但那張揮春能貼上去也有你一點。"
            },
            "resultText": "高年級學生接過膠紙，說了聲謝謝。你只是遞了一小段，但那張揮春能貼上去也有你一點。",
            "statusDelta": {
              "學業": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w5_19_fai_chun_new_year_decoration",
              "variantId": "senior_helps_post",
              "mustMatchEventTitle": "揮春／新年佈置"
            }
          },
          {
            "id": "s2_w5_19_fai_chun_new_year_decoration_senior_helps_post_choice_2",
            "text": "問可以貼哪裡。",
            "buttonText": "問可以貼哪裡。",
            "playerLine": "貼邊度？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "他指向門邊，說要對齊。你看見原來貼紙也要看高度和邊線，不是隨手一拍。"
            },
            "resultText": "他指向門邊，說要對齊。你看見原來貼紙也要看高度和邊線，不是隨手一拍。",
            "statusDelta": {
              "學業": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w5_19_fai_chun_new_year_decoration",
              "variantId": "senior_helps_post",
              "mustMatchEventTitle": "揮春／新年佈置"
            }
          },
          {
            "id": "s2_w5_19_fai_chun_new_year_decoration_senior_helps_post_choice_3",
            "text": "站遠一點看。",
            "buttonText": "站遠一點看。",
            "playerLine": "我喺呢度睇。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你退後，門邊的紅色一下子完整了。站遠看，班房好像真的換了樣子。"
            },
            "resultText": "你退後，門邊的紅色一下子完整了。站遠看，班房好像真的換了樣子。",
            "statusDelta": {
              "學業": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w5_19_fai_chun_new_year_decoration",
              "variantId": "senior_helps_post",
              "mustMatchEventTitle": "揮春／新年佈置"
            }
          },
          {
            "id": "s2_w5_19_fai_chun_new_year_decoration_senior_helps_post_choice_4",
            "text": "想自己貼。",
            "buttonText": "想自己貼。",
            "playerLine": "我想貼。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "高年級學生說高處不行，可以貼下面的小圖案。你拿到一張細小的紅紙，貼得很小心。"
            },
            "resultText": "高年級學生說高處不行，可以貼下面的小圖案。你拿到一張細小的紅紙，貼得很小心。",
            "statusDelta": {
              "學業": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w5_19_fai_chun_new_year_decoration",
              "variantId": "senior_helps_post",
              "mustMatchEventTitle": "揮春／新年佈置"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "npcIdHint": "char_teacher",
        "npcNameFallback": "老師"
      }
    ]
  },
  {
    "id": "s2_w5_20_lai_see_imagination",
    "sourceTopicId": "S2-W5-20",
    "weekPool": "S2-W5_authored_weekly",
    "termId": "term_p1_s2",
    "week": 5,
    "category": "neighbor",
    "title": "利是想像",
    "sceneIntro": "新年前，利是開始被大家提起。家人買利是封，親戚說見面要講好意頭，同學小聲猜今年會收到多少。你還沒有真的收到，腦裡已經出現很多紅色封和想買的東西。",
    "metadata": {
      "sourceMarkdown": "info/s2_w1_w6_dialogue_draft_v0_5.md",
      "sourceTitle": "S2-W1–S2-W6｜聖誕假期到農曆新年後｜事件對話草稿 v0.5",
      "uiHidden": true,
      "identityTypeId": "same_age_neighbor",
      "usesSelectedNeighbor": true,
      "activeMessage": false,
      "selectedNeighborPersonality": "persisted_from_S2-W1-2",
      "displayNameRule": "neighborDisplayName = primarySameAgeNeighborNameKnown ? selectedNeighbor.knownDisplayName : selectedNeighbor.unknownDisplayName"
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        5,
        5
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w5_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w1_w6",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "family_reminds_manners",
        "variantTitle": "家人提醒禮貌",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "家人拿著一疊利是封說：「到時人哋畀利是，要講多謝，唔好即刻拆。」你看著紅色封，第一個想到的卻是裡面有甚麼。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w5_20_lai_see_imagination_family_reminds_manners_choice_1",
            "text": "練習講多謝。",
            "buttonText": "練習講多謝。",
            "playerLine": "多謝。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說聲音可以大一點。你又講一次，覺得這兩個字像新年要帶出去的功課。"
            },
            "resultText": "家人說聲音可以大一點。你又講一次，覺得這兩個字像新年要帶出去的功課。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w5_20_lai_see_imagination",
              "variantId": "family_reminds_manners",
              "mustMatchEventTitle": "利是想像"
            }
          },
          {
            "id": "s2_w5_20_lai_see_imagination_family_reminds_manners_choice_2",
            "text": "問為甚麼不能拆。",
            "buttonText": "問為甚麼不能拆。",
            "playerLine": "點解唔拆得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說在別人面前拆不禮貌。你不完全明白，只知道紅封要先收好，不能立刻打開。"
            },
            "resultText": "家人說在別人面前拆不禮貌。你不完全明白，只知道紅封要先收好，不能立刻打開。",
            "statusDelta": {
              "社交": 1,
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
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w5_20_lai_see_imagination",
              "variantId": "family_reminds_manners",
              "mustMatchEventTitle": "利是想像"
            }
          },
          {
            "id": "s2_w5_20_lai_see_imagination_family_reminds_manners_choice_3",
            "text": "問會有多少。",
            "buttonText": "問會有多少。",
            "playerLine": "會有幾多？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說不是重點。你點頭，但眼睛還是忍不住看那些利是封。"
            },
            "resultText": "家人說不是重點。你點頭，但眼睛還是忍不住看那些利是封。",
            "statusDelta": {
              "社交": 1,
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
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w5_20_lai_see_imagination",
              "variantId": "family_reminds_manners",
              "mustMatchEventTitle": "利是想像"
            }
          },
          {
            "id": "s2_w5_20_lai_see_imagination_family_reminds_manners_choice_4",
            "text": "說怕忘記。",
            "buttonText": "說怕忘記。",
            "playerLine": "我驚唔記得講。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人叫你跟著大人做就可以。你把「多謝」放在心裡，像放一張小紙條。"
            },
            "resultText": "家人叫你跟著大人做就可以。你把「多謝」放在心裡，像放一張小紙條。",
            "statusDelta": {
              "社交": 1,
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
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w5_20_lai_see_imagination",
              "variantId": "family_reminds_manners",
              "mustMatchEventTitle": "利是想像"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "relative_mentions",
        "variantTitle": "親戚提起",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "電話裡，親戚笑著說新年見，到時要聽你講好意頭。家人把電話遞給你，你突然不知道要說甚麼，只聽見那邊很熱鬧。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w5_20_lai_see_imagination_relative_mentions_choice_1",
            "text": "講新年快樂。",
            "buttonText": "講新年快樂。",
            "playerLine": "新年快樂。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "親戚在電話那邊笑，說你乖。你鬆了一口氣，像先完成了一次小練習。"
            },
            "resultText": "親戚在電話那邊笑，說你乖。你鬆了一口氣，像先完成了一次小練習。",
            "statusDelta": {
              "社交": 1,
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
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w5_20_lai_see_imagination",
              "variantId": "relative_mentions",
              "mustMatchEventTitle": "利是想像"
            }
          },
          {
            "id": "s2_w5_20_lai_see_imagination_relative_mentions_choice_2",
            "text": "忘記台詞。",
            "buttonText": "忘記台詞。",
            "playerLine": "呃……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人在旁邊小聲提示。你跟著講，雖然慢了一拍，但電話那邊還是很開心。"
            },
            "resultText": "家人在旁邊小聲提示。你跟著講，雖然慢了一拍，但電話那邊還是很開心。",
            "statusDelta": {
              "社交": 1,
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
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w5_20_lai_see_imagination",
              "variantId": "relative_mentions",
              "mustMatchEventTitle": "利是想像"
            }
          },
          {
            "id": "s2_w5_20_lai_see_imagination_relative_mentions_choice_3",
            "text": "問幾時見。",
            "buttonText": "問幾時見。",
            "playerLine": "幾時嚟？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "親戚說很快。這個很快可能是幾天後，也可能是你還要等到不耐煩。"
            },
            "resultText": "親戚說很快。這個很快可能是幾天後，也可能是你還要等到不耐煩。",
            "statusDelta": {
              "社交": 1,
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
              "班務服務": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w5_20_lai_see_imagination",
              "variantId": "relative_mentions",
              "mustMatchEventTitle": "利是想像"
            }
          },
          {
            "id": "s2_w5_20_lai_see_imagination_relative_mentions_choice_4",
            "text": "躲開電話。",
            "buttonText": "躲開電話。",
            "playerLine": "你講啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人接回電話，沒有逼你。你站在旁邊，聽見自己的名字在電話裡被提起。"
            },
            "resultText": "家人接回電話，沒有逼你。你站在旁邊，聽見自己的名字在電話裡被提起。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w5_20_lai_see_imagination",
              "variantId": "relative_mentions",
              "mustMatchEventTitle": "利是想像"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "player_wants_to_buy",
        "variantTitle": "玩家想買東西",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "你看著商店裡的玩具，忽然想到新年會有利是。那個想法像一盞小燈：如果有錢，是不是可以買這個？家人一眼看穿你在想甚麼。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w5_20_lai_see_imagination_player_wants_to_buy_choice_1",
            "text": "說想買玩具。",
            "buttonText": "說想買玩具。",
            "playerLine": "我想買呢個。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說等收到再說，而且不一定全部用來買。你的那盞小燈沒有熄，但被罩住了一點。"
            },
            "resultText": "家人說等收到再說，而且不一定全部用來買。你的那盞小燈沒有熄，但被罩住了一點。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w5_20_lai_see_imagination",
              "variantId": "player_wants_to_buy",
              "mustMatchEventTitle": "利是想像"
            }
          },
          {
            "id": "s2_w5_20_lai_see_imagination_player_wants_to_buy_choice_2",
            "text": "問利是是不是我的。",
            "buttonText": "問利是是不是我的。",
            "playerLine": "利是係咪我嘅？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說是給你的，但會幫你保管一部分。你聽懂一半，還有一半覺得怪怪的。"
            },
            "resultText": "家人說是給你的，但會幫你保管一部分。你聽懂一半，還有一半覺得怪怪的。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w5_20_lai_see_imagination",
              "variantId": "player_wants_to_buy",
              "mustMatchEventTitle": "利是想像"
            }
          },
          {
            "id": "s2_w5_20_lai_see_imagination_player_wants_to_buy_choice_3",
            "text": "先記住價錢。",
            "buttonText": "先記住價錢。",
            "playerLine": "我記住幾錢。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你盯著價錢牌看了很久，數字不像功課，卻也需要認真看。"
            },
            "resultText": "你盯著價錢牌看了很久，數字不像功課，卻也需要認真看。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w5_20_lai_see_imagination",
              "variantId": "player_wants_to_buy",
              "mustMatchEventTitle": "利是想像"
            }
          },
          {
            "id": "s2_w5_20_lai_see_imagination_player_wants_to_buy_choice_4",
            "text": "不說出來。",
            "buttonText": "不說出來。",
            "playerLine": "……",
            "playerLineType": "silent",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有講想買，但眼睛一直回到那個玩具上。家人叫你走時，你才把視線拉開。"
            },
            "resultText": "你沒有講想買，但眼睛一直回到那個玩具上。家人叫你走時，你才把視線拉開。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w5_20_lai_see_imagination",
              "variantId": "player_wants_to_buy",
              "mustMatchEventTitle": "利是想像"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "neighbor_talks_lai_see",
        "variantTitle": "鄰居也講利是",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "平台上，{neighborDisplayName}突然問：「你新年會唔會收利是？」聲音很小，像怕大人聽到，又像很想知道。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w5_20_lai_see_imagination_neighbor_talks_lai_see_choice_1",
            "text": "說應該會。",
            "buttonText": "說應該會。",
            "playerLine": "應該會。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}點頭，說自己也是。兩個小朋友還未收到利是，已經開始想像紅封會出現。"
            },
            "resultText": "{neighborDisplayName}點頭，說自己也是。兩個小朋友還未收到利是，已經開始想像紅封會出現。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w5_20_lai_see_imagination",
              "variantId": "neighbor_talks_lai_see",
              "mustMatchEventTitle": "利是想像"
            }
          },
          {
            "id": "s2_w5_20_lai_see_imagination_neighbor_talks_lai_see_choice_2",
            "text": "問對方想買甚麼。",
            "buttonText": "問對方想買甚麼。",
            "playerLine": "你想買咩？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}說想買一盒貼紙，但又怕媽媽收起錢。你聽見這句，覺得大人好像都差不多。"
            },
            "resultText": "{neighborDisplayName}說想買一盒貼紙，但又怕媽媽收起錢。你聽見這句，覺得大人好像都差不多。",
            "statusDelta": {
              "社交": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w5_20_lai_see_imagination",
              "variantId": "neighbor_talks_lai_see",
              "mustMatchEventTitle": "利是想像"
            }
          },
          {
            "id": "s2_w5_20_lai_see_imagination_neighbor_talks_lai_see_choice_3",
            "text": "說家人叫不要拆。",
            "buttonText": "說家人叫不要拆。",
            "playerLine": "我屋企話唔好即刻拆。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}說自己家也是。原來連不能立刻拆這件事，也可以變成共同話題。"
            },
            "resultText": "{neighborDisplayName}說自己家也是。原來連不能立刻拆這件事，也可以變成共同話題。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w5_20_lai_see_imagination",
              "variantId": "neighbor_talks_lai_see",
              "mustMatchEventTitle": "利是想像"
            }
          },
          {
            "id": "s2_w5_20_lai_see_imagination_neighbor_talks_lai_see_choice_4",
            "text": "怕被大人聽到。",
            "buttonText": "怕被大人聽到。",
            "playerLine": "細聲啲啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}立刻壓低聲音。你們像在講一個紅色的小秘密。"
            },
            "resultText": "{neighborDisplayName}立刻壓低聲音。你們像在講一個紅色的小秘密。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w5_20_lai_see_imagination",
              "variantId": "neighbor_talks_lai_see",
              "mustMatchEventTitle": "利是想像"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgeNeighbor",
        "identityTypeId": "same_age_neighbor",
        "usesSelectedNeighbor": true,
        "activeMessage": false,
        "npcIdHint": "primarySameAgeNeighborId",
        "npcNameFallback": "{neighborDisplayName}"
      }
    ]
  },
  {
    "id": "s2_w6_21_back_to_school_lai_see_questions",
    "sourceTopicId": "S2-W6-21",
    "weekPool": "S2-W6_authored_weekly",
    "termId": "term_p1_s2",
    "week": 6,
    "category": "holiday",
    "title": "回校後有人問收了幾多利是",
    "sceneIntro": "新年後第一天回校，班房還有一點節日味。有人帶了新擦膠，有人把利是封夾在手冊裡，有人一坐下就問別人收到多少。紅色的東西明明應該在家裡，卻跟著大家的嘴巴回到班房。",
    "metadata": {
      "sourceMarkdown": "info/s2_w1_w6_dialogue_draft_v0_5.md",
      "sourceTitle": "S2-W1–S2-W6｜聖誕假期到農曆新年後｜事件對話草稿 v0.5",
      "uiHidden": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        6,
        6
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w6_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w1_w6",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "zixuan_compares",
        "variantTitle": "梓軒比較",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "梓軒一放下書包就問：「你收咗幾多封？」他不是問你新年去過哪裡，而是先問數字。旁邊有人立刻開始數手指。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w6_21_back_to_school_lai_see_questions_zixuan_compares_choice_1",
            "text": "說不想講。",
            "buttonText": "說不想講。",
            "playerLine": "唔想講。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒撇撇嘴，但沒有辦法逼你。你把紅封的事留在自己那邊，沒有放進他的排名裡。"
            },
            "resultText": "梓軒撇撇嘴，但沒有辦法逼你。你把紅封的事留在自己那邊，沒有放進他的排名裡。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w6_21_back_to_school_lai_see_questions",
              "variantId": "zixuan_compares",
              "mustMatchEventTitle": "回校後有人問收了幾多利是"
            }
          },
          {
            "id": "s2_w6_21_back_to_school_lai_see_questions_zixuan_compares_choice_2",
            "text": "說不知道。",
            "buttonText": "說不知道。",
            "playerLine": "唔知，媽媽收起咗。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒愣了一下，像這個答案不能拿來比。你忽然覺得不知道也有一點安全。"
            },
            "resultText": "梓軒愣了一下，像這個答案不能拿來比。你忽然覺得不知道也有一點安全。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w6_21_back_to_school_lai_see_questions",
              "variantId": "zixuan_compares",
              "mustMatchEventTitle": "回校後有人問收了幾多利是"
            }
          },
          {
            "id": "s2_w6_21_back_to_school_lai_see_questions_zixuan_compares_choice_3",
            "text": "反問他。",
            "buttonText": "反問他。",
            "playerLine": "咁你呢？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒立刻說了個數，又補一句不一定準。你聽見他的快，像聽見他也怕自己少。"
            },
            "resultText": "梓軒立刻說了個數，又補一句不一定準。你聽見他的快，像聽見他也怕自己少。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w6_21_back_to_school_lai_see_questions",
              "variantId": "zixuan_compares",
              "mustMatchEventTitle": "回校後有人問收了幾多利是"
            }
          },
          {
            "id": "s2_w6_21_back_to_school_lai_see_questions_zixuan_compares_choice_4",
            "text": "說只記得紅色。",
            "buttonText": "說只記得紅色。",
            "playerLine": "我淨係記得好多紅色。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒皺眉，覺得這不是答案。可是你真的只記得手裡一疊紅封的感覺。"
            },
            "resultText": "梓軒皺眉，覺得這不是答案。可是你真的只記得手裡一疊紅封的感覺。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w6_21_back_to_school_lai_see_questions",
              "variantId": "zixuan_compares",
              "mustMatchEventTitle": "回校後有人問收了幾多利是"
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
        "variantId": "kalong_too_loud",
        "variantTitle": "家朗講得太大聲",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "家朗和幾個同學講新年，越講越大聲：「我去咗好多屋企！」他轉頭問你：「你有冇好多利是？」老師還未進來，但聲音已經飄到半個班房。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w6_21_back_to_school_lai_see_questions_kalong_too_loud_choice_1",
            "text": "叫他小聲。",
            "buttonText": "叫他小聲。",
            "playerLine": "細聲啲啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗立刻壓低聲音，但眼睛還是很亮。他不是想炫耀，只是新年的東西太多，差點全倒出來。"
            },
            "resultText": "家朗立刻壓低聲音，但眼睛還是很亮。他不是想炫耀，只是新年的東西太多，差點全倒出來。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w6_21_back_to_school_lai_see_questions",
              "variantId": "kalong_too_loud",
              "mustMatchEventTitle": "回校後有人問收了幾多利是"
            }
          },
          {
            "id": "s2_w6_21_back_to_school_lai_see_questions_kalong_too_loud_choice_2",
            "text": "說去了親戚家。",
            "buttonText": "說去了親戚家。",
            "playerLine": "我去咗親戚屋企。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗馬上問有沒有糖。利是話題被糖果分走一半，班房氣氛沒有那麼像數錢。"
            },
            "resultText": "家朗馬上問有沒有糖。利是話題被糖果分走一半，班房氣氛沒有那麼像數錢。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w6_21_back_to_school_lai_see_questions",
              "variantId": "kalong_too_loud",
              "mustMatchEventTitle": "回校後有人問收了幾多利是"
            }
          },
          {
            "id": "s2_w6_21_back_to_school_lai_see_questions_kalong_too_loud_choice_3",
            "text": "說不記得。",
            "buttonText": "說不記得。",
            "playerLine": "我唔記得。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗說怎會不記得，但很快又被別人叫走。你沒有被追問到底。"
            },
            "resultText": "家朗說怎會不記得，但很快又被別人叫走。你沒有被追問到底。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w6_21_back_to_school_lai_see_questions",
              "variantId": "kalong_too_loud",
              "mustMatchEventTitle": "回校後有人問收了幾多利是"
            }
          },
          {
            "id": "s2_w6_21_back_to_school_lai_see_questions_kalong_too_loud_choice_4",
            "text": "提醒老師快來。",
            "buttonText": "提醒老師快來。",
            "playerLine": "老師就嚟。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗立刻坐直一點，還把手冊推好。新年話題暫時躲進桌底。"
            },
            "resultText": "家朗立刻坐直一點，還把手冊推好。新年話題暫時躲進桌底。",
            "statusDelta": {
              "社交": 1,
              "家庭關係": 1
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
              "eventId": "s2_w6_21_back_to_school_lai_see_questions",
              "variantId": "kalong_too_loud",
              "mustMatchEventTitle": "回校後有人問收了幾多利是"
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
        "variantId": "wingnam_does_not_want_tell",
        "variantTitle": "穎心不想講",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "旁邊有人問穎心收到多少利是。穎心把手冊合上，小聲說：「唔講呢啲。」她沒有生氣，只是把那件事收得很快。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w6_21_back_to_school_lai_see_questions_wingnam_does_not_want_tell_choice_1",
            "text": "幫她轉話題。",
            "buttonText": "幫她轉話題。",
            "playerLine": "你支筆好靚。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "問利是的同學看向那支筆，話題被拉開。穎心沒有說多謝，但手冊沒有再被她抱得那麼緊。"
            },
            "resultText": "問利是的同學看向那支筆，話題被拉開。穎心沒有說多謝，但手冊沒有再被她抱得那麼緊。",
            "statusDelta": {
              "社交": 1,
              "家庭關係": 1
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
              "eventId": "s2_w6_21_back_to_school_lai_see_questions",
              "variantId": "wingnam_does_not_want_tell",
              "mustMatchEventTitle": "回校後有人問收了幾多利是"
            }
          },
          {
            "id": "s2_w6_21_back_to_school_lai_see_questions_wingnam_does_not_want_tell_choice_2",
            "text": "跟著說不講。",
            "buttonText": "跟著說不講。",
            "playerLine": "我都唔講。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "同學覺得無趣，轉去問別人。你們沒有一起分享利是，卻一起把它關在外面。"
            },
            "resultText": "同學覺得無趣，轉去問別人。你們沒有一起分享利是，卻一起把它關在外面。",
            "statusDelta": {
              "社交": 1,
              "家庭關係": 1
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
              "eventId": "s2_w6_21_back_to_school_lai_see_questions",
              "variantId": "wingnam_does_not_want_tell",
              "mustMatchEventTitle": "回校後有人問收了幾多利是"
            }
          },
          {
            "id": "s2_w6_21_back_to_school_lai_see_questions_wingnam_does_not_want_tell_choice_3",
            "text": "問她新年去了哪裡。",
            "buttonText": "問她新年去了哪裡。",
            "playerLine": "咁你去咗邊？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心想了想，說去了外婆家。這個答案沒有數字，卻比利是更像她願意講的東西。"
            },
            "resultText": "穎心想了想，說去了外婆家。這個答案沒有數字，卻比利是更像她願意講的東西。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w6_21_back_to_school_lai_see_questions",
              "variantId": "wingnam_does_not_want_tell",
              "mustMatchEventTitle": "回校後有人問收了幾多利是"
            }
          },
          {
            "id": "s2_w6_21_back_to_school_lai_see_questions_wingnam_does_not_want_tell_choice_4",
            "text": "自己也保持安靜。",
            "buttonText": "自己也保持安靜。",
            "playerLine": "……",
            "playerLineType": "silent",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有幫忙也沒有追問。穎心低頭整理手冊，班房裡的數字聲從你們旁邊流過。"
            },
            "resultText": "你沒有幫忙也沒有追問。穎心低頭整理手冊，班房裡的數字聲從你們旁邊流過。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w6_21_back_to_school_lai_see_questions",
              "variantId": "wingnam_does_not_want_tell",
              "mustMatchEventTitle": "回校後有人問收了幾多利是"
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
        "variantId": "teacher_says_dont_ask_too_much",
        "variantTitle": "老師提醒不要問太多",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "老師進來時，剛好聽見有人大聲問：「你收咗幾多錢？」老師停在門口，說：「新年可以分享開心事，但唔好追問人哋錢。」班房一下子靜了點。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w6_21_back_to_school_lai_see_questions_teacher_says_dont_ask_too_much_choice_1",
            "text": "把話題收住。",
            "buttonText": "把話題收住。",
            "playerLine": "唔講錢啦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把想問的話吞回去。老師沒有說不能講新年，只是把那條界線畫出來。"
            },
            "resultText": "你把想問的話吞回去。老師沒有說不能講新年，只是把那條界線畫出來。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w6_21_back_to_school_lai_see_questions",
              "variantId": "teacher_says_dont_ask_too_much",
              "mustMatchEventTitle": "回校後有人問收了幾多利是"
            }
          },
          {
            "id": "s2_w6_21_back_to_school_lai_see_questions_teacher_says_dont_ask_too_much_choice_2",
            "text": "改講食物。",
            "buttonText": "改講食物。",
            "playerLine": "我食咗好多糖。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "旁邊同學立刻說自己也吃了。新年話題從錢變成糖，空氣鬆了一點。"
            },
            "resultText": "旁邊同學立刻說自己也吃了。新年話題從錢變成糖，空氣鬆了一點。",
            "statusDelta": {
              "社交": 1,
              "家庭關係": 1
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
              "eventId": "s2_w6_21_back_to_school_lai_see_questions",
              "variantId": "teacher_says_dont_ask_too_much",
              "mustMatchEventTitle": "回校後有人問收了幾多利是"
            }
          },
          {
            "id": "s2_w6_21_back_to_school_lai_see_questions_teacher_says_dont_ask_too_much_choice_3",
            "text": "問可不可以講拜年。",
            "buttonText": "問可不可以講拜年。",
            "playerLine": "講去邊拜年得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說可以。你明白不是所有新年事都不能說，只是有些不應該追。"
            },
            "resultText": "老師說可以。你明白不是所有新年事都不能說，只是有些不應該追。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w6_21_back_to_school_lai_see_questions",
              "variantId": "teacher_says_dont_ask_too_much",
              "mustMatchEventTitle": "回校後有人問收了幾多利是"
            }
          },
          {
            "id": "s2_w6_21_back_to_school_lai_see_questions_teacher_says_dont_ask_too_much_choice_4",
            "text": "看梓軒反應。",
            "buttonText": "看梓軒反應。",
            "playerLine": "……",
            "playerLineType": "silent",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒低頭翻書，像有點不服氣。你突然知道，原來不問也可以是一條規矩。"
            },
            "resultText": "梓軒低頭翻書，像有點不服氣。你突然知道，原來不問也可以是一條規矩。",
            "statusDelta": {
              "社交": 1,
              "家庭關係": 1
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
              "eventId": "s2_w6_21_back_to_school_lai_see_questions",
              "variantId": "teacher_says_dont_ask_too_much",
              "mustMatchEventTitle": "回校後有人問收了幾多利是"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "npcIdHint": "char_teacher",
        "npcNameFallback": "老師"
      }
    ]
  },
  {
    "id": "s2_w6_22_family_handles_lai_see_money",
    "sourceTopicId": "S2-W6-22",
    "weekPool": "S2-W6_authored_weekly",
    "termId": "term_p1_s2",
    "week": 6,
    "category": "holiday",
    "title": "家裡處理利是錢",
    "sceneIntro": "回家後，利是封被放到桌上。紅色封一封一封打開，裡面的錢被家人整理好。你坐在旁邊，看著那些本來很神秘的紅封變成紙幣、硬幣和一句句大人的解釋。",
    "metadata": {
      "sourceMarkdown": "info/s2_w1_w6_dialogue_draft_v0_5.md",
      "sourceTitle": "S2-W1–S2-W6｜聖誕假期到農曆新年後｜事件對話草稿 v0.5",
      "uiHidden": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        6,
        6
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w6_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w1_w6",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "mom_keeps_money",
        "variantTitle": "媽媽保管",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "媽媽把利是錢疊好，說：「呢啲我幫你保管住，之後儲起。」你聽見「你的」和「保管」放在一起，覺得有點奇怪。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w6_22_family_handles_lai_see_money_mom_keeps_money_choice_1",
            "text": "問可不可以自己拿。",
            "buttonText": "問可不可以自己拿。",
            "playerLine": "我可唔可以攞住？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽說可以留一點，但不是全部。你看著那一小部分，覺得它變得很小，又很真。"
            },
            "resultText": "媽媽說可以留一點，但不是全部。你看著那一小部分，覺得它變得很小，又很真。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w6_22_family_handles_lai_see_money",
              "variantId": "mom_keeps_money",
              "mustMatchEventTitle": "家裡處理利是錢"
            }
          },
          {
            "id": "s2_w6_22_family_handles_lai_see_money_mom_keeps_money_choice_2",
            "text": "問儲起是甚麼。",
            "buttonText": "問儲起是甚麼。",
            "playerLine": "儲起係點？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽說放起來以後有用。你想像一個看不見的盒子，裝著你現在不能拿的東西。"
            },
            "resultText": "媽媽說放起來以後有用。你想像一個看不見的盒子，裝著你現在不能拿的東西。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w6_22_family_handles_lai_see_money",
              "variantId": "mom_keeps_money",
              "mustMatchEventTitle": "家裡處理利是錢"
            }
          },
          {
            "id": "s2_w6_22_family_handles_lai_see_money_mom_keeps_money_choice_3",
            "text": "有點不開心。",
            "buttonText": "有點不開心。",
            "playerLine": "但係人哋畀我㗎。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "媽媽停了一下，說知道，所以會幫你記好。你還是不完全開心，但知道她不是把它變走。"
            },
            "resultText": "媽媽停了一下，說知道，所以會幫你記好。你還是不完全開心，但知道她不是把它變走。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w6_22_family_handles_lai_see_money",
              "variantId": "mom_keeps_money",
              "mustMatchEventTitle": "家裡處理利是錢"
            }
          },
          {
            "id": "s2_w6_22_family_handles_lai_see_money_mom_keeps_money_choice_4",
            "text": "點頭。",
            "buttonText": "點頭。",
            "playerLine": "哦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有再問。紅封空了，錢被收好，你心裡還有一點紅色沒有收好。"
            },
            "resultText": "你沒有再問。紅封空了，錢被收好，你心裡還有一點紅色沒有收好。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w6_22_family_handles_lai_see_money",
              "variantId": "mom_keeps_money",
              "mustMatchEventTitle": "家裡處理利是錢"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "dad_explains",
        "variantTitle": "爸爸解釋",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "爸爸把幾張紙幣放在一起，說：「利是可以用少少，儲少少。」他拿了一張紙寫數字，像在做一個你不太懂的表。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w6_22_family_handles_lai_see_money_dad_explains_choice_1",
            "text": "問可以用多少。",
            "buttonText": "問可以用多少。",
            "playerLine": "用幾多？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸說可以挑一小部分。你看著數字，覺得錢不是一整團，而是會被分成幾份。"
            },
            "resultText": "爸爸說可以挑一小部分。你看著數字，覺得錢不是一整團，而是會被分成幾份。",
            "statusDelta": {
              "學業": 1,
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
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w6_22_family_handles_lai_see_money",
              "variantId": "dad_explains",
              "mustMatchEventTitle": "家裡處理利是錢"
            }
          },
          {
            "id": "s2_w6_22_family_handles_lai_see_money_dad_explains_choice_2",
            "text": "說想買玩具。",
            "buttonText": "說想買玩具。",
            "playerLine": "我想買玩具。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸說可以想，但要先看價錢。玩具沒有消失，只是被放到一條比較長的路上。"
            },
            "resultText": "爸爸說可以想，但要先看價錢。玩具沒有消失，只是被放到一條比較長的路上。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w6_22_family_handles_lai_see_money",
              "variantId": "dad_explains",
              "mustMatchEventTitle": "家裡處理利是錢"
            }
          },
          {
            "id": "s2_w6_22_family_handles_lai_see_money_dad_explains_choice_3",
            "text": "看他寫數字。",
            "buttonText": "看他寫數字。",
            "playerLine": "呢個係咩？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸說是記錄。你不完全懂，但覺得大人連利是都會變成功課一樣的格子。"
            },
            "resultText": "爸爸說是記錄。你不完全懂，但覺得大人連利是都會變成功課一樣的格子。",
            "statusDelta": {
              "學業": 1,
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
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w6_22_family_handles_lai_see_money",
              "variantId": "dad_explains",
              "mustMatchEventTitle": "家裡處理利是錢"
            }
          },
          {
            "id": "s2_w6_22_family_handles_lai_see_money_dad_explains_choice_4",
            "text": "說不想算。",
            "buttonText": "說不想算。",
            "playerLine": "我唔想計。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "爸爸笑說他來計，你只要知道不是一次用完。你鬆了一點，卻也覺得錢沒有想像中自由。"
            },
            "resultText": "爸爸笑說他來計，你只要知道不是一次用完。你鬆了一點，卻也覺得錢沒有想像中自由。",
            "statusDelta": {
              "學業": 1,
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
              "閱讀": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w6_22_family_handles_lai_see_money",
              "variantId": "dad_explains",
              "mustMatchEventTitle": "家裡處理利是錢"
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
        "variantId": "variant_3",
        "variantTitle": "玩家想買玩具",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "你把想買的玩具名字講出來。家人沒有立刻說不，只問：「你係想要，定係真係會玩好耐？」這句話太長，你只聽到前面那個「想要」。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w6_22_family_handles_lai_see_money_variant_3_choice_1",
            "text": "說真的會玩。",
            "buttonText": "說真的會玩。",
            "playerLine": "我會玩㗎。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說先等兩日，如果兩日後還想要再講。你覺得兩日很長，但那個玩具還在腦裡。"
            },
            "resultText": "家人說先等兩日，如果兩日後還想要再講。你覺得兩日很長，但那個玩具還在腦裡。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w6_22_family_handles_lai_see_money",
              "variantId": "variant_3",
              "mustMatchEventTitle": "家裡處理利是錢"
            }
          },
          {
            "id": "s2_w6_22_family_handles_lai_see_money_variant_3_choice_2",
            "text": "問今天可不可以買。",
            "buttonText": "問今天可不可以買。",
            "playerLine": "今日買得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說不急。你有點失望，因為錢明明就在桌上，玩具卻還很遠。"
            },
            "resultText": "家人說不急。你有點失望，因為錢明明就在桌上，玩具卻還很遠。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w6_22_family_handles_lai_see_money",
              "variantId": "variant_3",
              "mustMatchEventTitle": "家裡處理利是錢"
            }
          },
          {
            "id": "s2_w6_22_family_handles_lai_see_money_variant_3_choice_3",
            "text": "說只買小的。",
            "buttonText": "說只買小的。",
            "playerLine": "買細個得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人想了想，說可以再看。你學到「小一點」有時是一條可以商量的路。"
            },
            "resultText": "家人想了想，說可以再看。你學到「小一點」有時是一條可以商量的路。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w6_22_family_handles_lai_see_money",
              "variantId": "variant_3",
              "mustMatchEventTitle": "家裡處理利是錢"
            }
          },
          {
            "id": "s2_w6_22_family_handles_lai_see_money_variant_3_choice_4",
            "text": "不再說。",
            "buttonText": "不再說。",
            "playerLine": "……",
            "playerLineType": "silent",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把玩具名字吞回去。家人以為你不想了，其實它只是躲到心裡去了。"
            },
            "resultText": "你把玩具名字吞回去。家人以為你不想了，其實它只是躲到心裡去了。",
            "statusDelta": {
              "學業": 1,
              "家庭關係": 1
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
              "eventId": "s2_w6_22_family_handles_lai_see_money",
              "variantId": "variant_3",
              "mustMatchEventTitle": "家裡處理利是錢"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      },
      {
        "variantId": "player_keeps_one_packet",
        "variantTitle": "玩家想自己留一封",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "桌上還有一封未拆的利是。你看著它，忽然想把它原封不動留下。家人問：「點解唔拆？」你也說不清，只覺得封著時比較像新年。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w6_22_family_handles_lai_see_money_player_keeps_one_packet_choice_1",
            "text": "說想留住。",
            "buttonText": "說想留住。",
            "playerLine": "我想留一封。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人想了想，說可以留一封空封或小封。你把它放進抽屜，像把新年藏起一角。"
            },
            "resultText": "家人想了想，說可以留一封空封或小封。你把它放進抽屜，像把新年藏起一角。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w6_22_family_handles_lai_see_money",
              "variantId": "player_keeps_one_packet",
              "mustMatchEventTitle": "家裡處理利是錢"
            }
          },
          {
            "id": "s2_w6_22_family_handles_lai_see_money_player_keeps_one_packet_choice_2",
            "text": "問能不能不拆。",
            "buttonText": "問能不能不拆。",
            "playerLine": "唔拆得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說要記得是誰給的。你看著封面，才發現紅封也有來源，不只是裡面的錢。"
            },
            "resultText": "家人說要記得是誰給的。你看著封面，才發現紅封也有來源，不只是裡面的錢。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w6_22_family_handles_lai_see_money",
              "variantId": "player_keeps_one_packet",
              "mustMatchEventTitle": "家裡處理利是錢"
            }
          },
          {
            "id": "s2_w6_22_family_handles_lai_see_money_player_keeps_one_packet_choice_3",
            "text": "拆了又後悔。",
            "buttonText": "拆了又後悔。",
            "playerLine": "拆咗啦……",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "紅封打開後就不能變回原樣。你摸著封口，第一次覺得打開也會有一點失去。"
            },
            "resultText": "紅封打開後就不能變回原樣。你摸著封口，第一次覺得打開也會有一點失去。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w6_22_family_handles_lai_see_money",
              "variantId": "player_keeps_one_packet",
              "mustMatchEventTitle": "家裡處理利是錢"
            }
          },
          {
            "id": "s2_w6_22_family_handles_lai_see_money_player_keeps_one_packet_choice_4",
            "text": "把封收好。",
            "buttonText": "把封收好。",
            "playerLine": "我收埋佢。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把紅封夾進一本薄簿。錢也許會被保管，但這一封由你自己保管。"
            },
            "resultText": "你把紅封夾進一本薄簿。錢也許會被保管，但這一封由你自己保管。",
            "statusDelta": {
              "家庭關係": 1,
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
              "eventId": "s2_w6_22_family_handles_lai_see_money",
              "variantId": "player_keeps_one_packet",
              "mustMatchEventTitle": "家裡處理利是錢"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "family",
        "identityTypeId": "family_elder",
        "npcIdHint": "char_mom",
        "npcNameFallback": "家人"
      }
    ]
  },
  {
    "id": "s2_w6_23_neighbor_after_new_year_reunion",
    "sourceTopicId": "S2-W6-23",
    "weekPool": "S2-W6_authored_weekly",
    "termId": "term_p1_s2",
    "week": 6,
    "category": "neighbor",
    "title": "鄰居新年後再見",
    "sceneIntro": "新年後幾天，你在升降機或平台又遇到{neighborDisplayName}。對方穿著新外套，手裡拿著一個小袋。你們不是同班同學，所以不會在班房裡比較，但新年和利是這些話題還是會在樓下出現。",
    "metadata": {
      "sourceMarkdown": "info/s2_w1_w6_dialogue_draft_v0_5.md",
      "sourceTitle": "S2-W1–S2-W6｜聖誕假期到農曆新年後｜事件對話草稿 v0.5",
      "uiHidden": true,
      "identityTypeId": "same_age_neighbor",
      "usesSelectedNeighbor": true,
      "activeMessage": false,
      "selectedNeighborPersonality": "persisted_from_S2-W1-2",
      "displayNameRule": "neighborDisplayName = primarySameAgeNeighborNameKnown ? selectedNeighbor.knownDisplayName : selectedNeighbor.unknownDisplayName"
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        6,
        6
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w6_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w1_w6",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "neighbor_shows_off",
        "variantTitle": "鄰居炫耀",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "{neighborDisplayName}一見到你就說：「我有新貼紙。」對方從袋裡拿出一疊，語氣很亮，像忍不住要讓人看見。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w6_23_neighbor_after_new_year_reunion_neighbor_shows_off_choice_1",
            "text": "說很靚。",
            "buttonText": "說很靚。",
            "playerLine": "好靚呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}笑得更明顯，把最上面那張翻給你看。你沒有問價錢，也沒有問是不是利是買的。"
            },
            "resultText": "{neighborDisplayName}笑得更明顯，把最上面那張翻給你看。你沒有問價錢，也沒有問是不是利是買的。",
            "statusDelta": {
              "社交": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w6_23_neighbor_after_new_year_reunion",
              "variantId": "neighbor_shows_off",
              "mustMatchEventTitle": "鄰居新年後再見"
            }
          },
          {
            "id": "s2_w6_23_neighbor_after_new_year_reunion_neighbor_shows_off_choice_2",
            "text": "問是不是用利是買。",
            "buttonText": "問是不是用利是買。",
            "playerLine": "利是買㗎？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}停了一下，說媽媽只讓自己買一點。原來炫耀背後也有大人的手。"
            },
            "resultText": "{neighborDisplayName}停了一下，說媽媽只讓自己買一點。原來炫耀背後也有大人的手。",
            "statusDelta": {
              "社交": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w6_23_neighbor_after_new_year_reunion",
              "variantId": "neighbor_shows_off",
              "mustMatchEventTitle": "鄰居新年後再見"
            }
          },
          {
            "id": "s2_w6_23_neighbor_after_new_year_reunion_neighbor_shows_off_choice_3",
            "text": "說自己沒有買。",
            "buttonText": "說自己沒有買。",
            "playerLine": "我冇買嘢。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}看了你一眼，沒有繼續數貼紙。對方把袋口收小一點，像突然知道不是人人一樣。"
            },
            "resultText": "{neighborDisplayName}看了你一眼，沒有繼續數貼紙。對方把袋口收小一點，像突然知道不是人人一樣。",
            "statusDelta": {
              "社交": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w6_23_neighbor_after_new_year_reunion",
              "variantId": "neighbor_shows_off",
              "mustMatchEventTitle": "鄰居新年後再見"
            }
          },
          {
            "id": "s2_w6_23_neighbor_after_new_year_reunion_neighbor_shows_off_choice_4",
            "text": "不太想聽。",
            "buttonText": "不太想聽。",
            "playerLine": "哦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}講了幾句就停下。你們站在升降機前，貼紙聲變得比較小。"
            },
            "resultText": "{neighborDisplayName}講了幾句就停下。你們站在升降機前，貼紙聲變得比較小。",
            "statusDelta": {
              "社交": 1,
              "家庭關係": 1
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
              "eventId": "s2_w6_23_neighbor_after_new_year_reunion",
              "variantId": "neighbor_shows_off",
              "mustMatchEventTitle": "鄰居新年後再見"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgeNeighbor",
        "identityTypeId": "same_age_neighbor",
        "usesSelectedNeighbor": true,
        "activeMessage": false,
        "npcIdHint": "primarySameAgeNeighborId",
        "npcNameFallback": "{neighborDisplayName}"
      },
      {
        "variantId": "neighbor_awkward",
        "variantTitle": "鄰居尷尬",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "你問{neighborDisplayName}新年怎樣，對方只說：「都係咁。」手裡的袋子被捏得皺皺的。你本來想問利是，話到嘴邊又停住。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w6_23_neighbor_after_new_year_reunion_neighbor_awkward_choice_1",
            "text": "不問利是。",
            "buttonText": "不問利是。",
            "playerLine": "咁你有冇去玩？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}抬頭，說去了公園。你沒有追那個紅封話題，對方的肩膀好像放鬆了一點。"
            },
            "resultText": "{neighborDisplayName}抬頭，說去了公園。你沒有追那個紅封話題，對方的肩膀好像放鬆了一點。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w6_23_neighbor_after_new_year_reunion",
              "variantId": "neighbor_awkward",
              "mustMatchEventTitle": "鄰居新年後再見"
            }
          },
          {
            "id": "s2_w6_23_neighbor_after_new_year_reunion_neighbor_awkward_choice_2",
            "text": "問是不是累。",
            "buttonText": "問是不是累。",
            "playerLine": "你攰呀？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}點點頭，說拜年好久。你忽然知道，不是每個人新年都一直開心。"
            },
            "resultText": "{neighborDisplayName}點點頭，說拜年好久。你忽然知道，不是每個人新年都一直開心。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w6_23_neighbor_after_new_year_reunion",
              "variantId": "neighbor_awkward",
              "mustMatchEventTitle": "鄰居新年後再見"
            }
          },
          {
            "id": "s2_w6_23_neighbor_after_new_year_reunion_neighbor_awkward_choice_3",
            "text": "分享自己吃過的糖。",
            "buttonText": "分享自己吃過的糖。",
            "playerLine": "我食咗好多糖。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}笑了一下，說自己也是。糖果比錢容易講，話題終於走得動。"
            },
            "resultText": "{neighborDisplayName}笑了一下，說自己也是。糖果比錢容易講，話題終於走得動。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w6_23_neighbor_after_new_year_reunion",
              "variantId": "neighbor_awkward",
              "mustMatchEventTitle": "鄰居新年後再見"
            }
          },
          {
            "id": "s2_w6_23_neighbor_after_new_year_reunion_neighbor_awkward_choice_4",
            "text": "直接問利是。",
            "buttonText": "直接問利是。",
            "playerLine": "你收咗幾多？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}低頭說不記得。升降機門開了，你才覺得這句話好像問得太快。"
            },
            "resultText": "{neighborDisplayName}低頭說不記得。升降機門開了，你才覺得這句話好像問得太快。",
            "statusDelta": {
              "社交": 1,
              "家庭關係": 1
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
              "eventId": "s2_w6_23_neighbor_after_new_year_reunion",
              "variantId": "neighbor_awkward",
              "mustMatchEventTitle": "鄰居新年後再見"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgeNeighbor",
        "identityTypeId": "same_age_neighbor",
        "usesSelectedNeighbor": true,
        "activeMessage": false,
        "npcIdHint": "primarySameAgeNeighborId",
        "npcNameFallback": "{neighborDisplayName}"
      },
      {
        "variantId": "player_shares",
        "variantTitle": "玩家分享",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "你把自己新年記得的一件事告訴{neighborDisplayName}，不一定是錢，也可能是親戚家的糖果、很吵的飯桌、或者一封你想留下的紅封。{neighborDisplayName}一邊聽，一邊把腳尖踢著地。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w6_23_neighbor_after_new_year_reunion_player_shares_choice_1",
            "text": "講親戚家。",
            "buttonText": "講親戚家。",
            "playerLine": "我去咗親戚屋企。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}問有沒有很多鞋。你立刻想起門口一排鞋，原來對方也懂那種場面。"
            },
            "resultText": "{neighborDisplayName}問有沒有很多鞋。你立刻想起門口一排鞋，原來對方也懂那種場面。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w6_23_neighbor_after_new_year_reunion",
              "variantId": "player_shares",
              "mustMatchEventTitle": "鄰居新年後再見"
            }
          },
          {
            "id": "s2_w6_23_neighbor_after_new_year_reunion_player_shares_choice_2",
            "text": "講留了一封利是。",
            "buttonText": "講留了一封利是。",
            "playerLine": "我留咗一封。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}睜大眼，說自己也想。你們沒有討論裡面多少，只討論封住的紅色。"
            },
            "resultText": "{neighborDisplayName}睜大眼，說自己也想。你們沒有討論裡面多少，只討論封住的紅色。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w6_23_neighbor_after_new_year_reunion",
              "variantId": "player_shares",
              "mustMatchEventTitle": "鄰居新年後再見"
            }
          },
          {
            "id": "s2_w6_23_neighbor_after_new_year_reunion_player_shares_choice_3",
            "text": "講買東西。",
            "buttonText": "講買東西。",
            "playerLine": "我想買玩具。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}立刻問哪一款。這次不是比較，是兩個小朋友一起把想要的東西說出來。"
            },
            "resultText": "{neighborDisplayName}立刻問哪一款。這次不是比較，是兩個小朋友一起把想要的東西說出來。",
            "statusDelta": {
              "社交": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w6_23_neighbor_after_new_year_reunion",
              "variantId": "player_shares",
              "mustMatchEventTitle": "鄰居新年後再見"
            }
          },
          {
            "id": "s2_w6_23_neighbor_after_new_year_reunion_player_shares_choice_4",
            "text": "講不清楚。",
            "buttonText": "講不清楚。",
            "playerLine": "好多嘢，我唔知點講。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}點頭，說新年就是好多嘢。你覺得這句很對，因為你真的還沒有把它們分好。"
            },
            "resultText": "{neighborDisplayName}點頭，說新年就是好多嘢。你覺得這句很對，因為你真的還沒有把它們分好。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w6_23_neighbor_after_new_year_reunion",
              "variantId": "player_shares",
              "mustMatchEventTitle": "鄰居新年後再見"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgeNeighbor",
        "identityTypeId": "same_age_neighbor",
        "usesSelectedNeighbor": true,
        "activeMessage": false,
        "npcIdHint": "primarySameAgeNeighborId",
        "npcNameFallback": "{neighborDisplayName}"
      },
      {
        "variantId": "parents_teach_manners",
        "variantTitle": "家長在旁邊教禮貌",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "你和{neighborDisplayName}講到新年時，兩邊家長都在旁邊。{neighborDisplayName}差點問你收多少利是，旁邊的媽媽立刻輕聲說：「呢啲唔好問人。」你的家人也看了你一眼。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w6_23_neighbor_after_new_year_reunion_parents_teach_manners_choice_1",
            "text": "改口講新年快樂。",
            "buttonText": "改口講新年快樂。",
            "playerLine": "新年快樂。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "{neighborDisplayName}也跟著說。兩個小朋友像被大人把話題拉回一條比較安全的路。"
            },
            "resultText": "{neighborDisplayName}也跟著說。兩個小朋友像被大人把話題拉回一條比較安全的路。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w6_23_neighbor_after_new_year_reunion",
              "variantId": "parents_teach_manners",
              "mustMatchEventTitle": "鄰居新年後再見"
            }
          },
          {
            "id": "s2_w6_23_neighbor_after_new_year_reunion_parents_teach_manners_choice_2",
            "text": "問可不可以講吃的。",
            "buttonText": "問可不可以講吃的。",
            "playerLine": "講食咗咩得唔得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人笑說可以。你和{neighborDisplayName}立刻講糖果，禮貌沒有把話題關掉，只是換了一扇門。"
            },
            "resultText": "家人笑說可以。你和{neighborDisplayName}立刻講糖果，禮貌沒有把話題關掉，只是換了一扇門。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w6_23_neighbor_after_new_year_reunion",
              "variantId": "parents_teach_manners",
              "mustMatchEventTitle": "鄰居新年後再見"
            }
          },
          {
            "id": "s2_w6_23_neighbor_after_new_year_reunion_parents_teach_manners_choice_3",
            "text": "點頭不再問。",
            "buttonText": "點頭不再問。",
            "playerLine": "哦。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把問題吞回去，覺得有些話在同學面前、鄰居面前和大人面前都不太一樣。"
            },
            "resultText": "你把問題吞回去，覺得有些話在同學面前、鄰居面前和大人面前都不太一樣。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w6_23_neighbor_after_new_year_reunion",
              "variantId": "parents_teach_manners",
              "mustMatchEventTitle": "鄰居新年後再見"
            }
          },
          {
            "id": "s2_w6_23_neighbor_after_new_year_reunion_parents_teach_manners_choice_4",
            "text": "小聲問為甚麼。",
            "buttonText": "小聲問為甚麼。",
            "playerLine": "點解唔問得？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家人說人家的錢不一定要講。你聽懂一點點，至少知道下次要先忍住。"
            },
            "resultText": "家人說人家的錢不一定要講。你聽懂一點點，至少知道下次要先忍住。",
            "statusDelta": {
              "社交": 1,
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
              "eventId": "s2_w6_23_neighbor_after_new_year_reunion",
              "variantId": "parents_teach_manners",
              "mustMatchEventTitle": "鄰居新年後再見"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgeNeighbor",
        "identityTypeId": "same_age_neighbor",
        "usesSelectedNeighbor": true,
        "activeMessage": false,
        "npcIdHint": "primarySameAgeNeighborId",
        "npcNameFallback": "{neighborDisplayName}"
      }
    ]
  },
  {
    "id": "s2_w6_24_first_small_observation_second_term",
    "sourceTopicId": "S2-W6-24",
    "weekPool": "S2-W6_authored_weekly",
    "termId": "term_p1_s2",
    "week": 6,
    "category": "holiday",
    "title": "下學期第一個小觀察",
    "sceneIntro": "新年後，老師沒有正式派成績表，只是在一個比較安靜的時候，看著班上的座位、新同桌、交功課情況和小息互動，對你說了一兩句。這不是 W6 那種開學適應回看，而是老師開始看見你在下學期的位置：你怎樣面對新同學、新功課、新活動和新年的話題。",
    "metadata": {
      "sourceMarkdown": "info/s2_w1_w6_dialogue_draft_v0_5.md",
      "sourceTitle": "S2-W1–S2-W6｜聖誕假期到農曆新年後｜事件對話草稿 v0.5",
      "uiHidden": true
    },
    "choiceMode": "event_specific_variant_choices_only",
    "eventScheduling": {
      "baseWeight": 1,
      "weekRange": [
        6,
        6
      ],
      "conditions": [
        {
          "type": "currentTerm",
          "termId": "term_p1_s2"
        }
      ],
      "exclusiveGroup": "s2_w6_main",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "sourceChannel": "weekly_authored_s2_w1_w6",
      "involvementRole": "main_weekly_event"
    },
    "variants": [
      {
        "variantId": "teacher_observes_academic",
        "variantTitle": "老師看學業",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "老師翻了翻你的功課和改正，說：「你交嘢大致齊。不過有啲改正，可以早啲做。」她沒有很大聲，只把簿子推回你面前。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w6_24_first_small_observation_second_term_teacher_observes_academic_choice_1",
            "text": "說會改。",
            "buttonText": "說會改。",
            "playerLine": "我今日改。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師點頭，沒有再加很多話。那幾個紅圈還在，但它們有了今天這個時間。"
            },
            "resultText": "老師點頭，沒有再加很多話。那幾個紅圈還在，但它們有了今天這個時間。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w6_24_first_small_observation_second_term",
              "variantId": "teacher_observes_academic",
              "mustMatchEventTitle": "下學期第一個小觀察"
            }
          },
          {
            "id": "s2_w6_24_first_small_observation_second_term_teacher_observes_academic_choice_2",
            "text": "問哪裡先改。",
            "buttonText": "問哪裡先改。",
            "playerLine": "改邊度先？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師指了兩題。整本簿子沒有變少，但你先知道要從哪裡開始。"
            },
            "resultText": "老師指了兩題。整本簿子沒有變少，但你先知道要從哪裡開始。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w6_24_first_small_observation_second_term",
              "variantId": "teacher_observes_academic",
              "mustMatchEventTitle": "下學期第一個小觀察"
            }
          },
          {
            "id": "s2_w6_24_first_small_observation_second_term_teacher_observes_academic_choice_3",
            "text": "有點怕紅筆。",
            "buttonText": "有點怕紅筆。",
            "playerLine": "好多紅色。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師停了一下，說先看第一題。紅色沒有消失，但你不用一次看完整頁。"
            },
            "resultText": "老師停了一下，說先看第一題。紅色沒有消失，但你不用一次看完整頁。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w6_24_first_small_observation_second_term",
              "variantId": "teacher_observes_academic",
              "mustMatchEventTitle": "下學期第一個小觀察"
            }
          },
          {
            "id": "s2_w6_24_first_small_observation_second_term_teacher_observes_academic_choice_4",
            "text": "只是點頭。",
            "buttonText": "只是點頭。",
            "playerLine": "嗯。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把簿子收好。老師看著你，像不確定你是真的明白，還是只是想快點收起來。"
            },
            "resultText": "你把簿子收好。老師看著你，像不確定你是真的明白，還是只是想快點收起來。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w6_24_first_small_observation_second_term",
              "variantId": "teacher_observes_academic",
              "mustMatchEventTitle": "下學期第一個小觀察"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "npcIdHint": "char_teacher",
        "npcNameFallback": "老師"
      },
      {
        "variantId": "teacher_observes_social",
        "variantTitle": "老師看社交",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "老師看見你和新同桌一起找手冊，又看見小息時你跟不同同學站在一起。她說：「你最近好似開始識得同唔同同學講一兩句。」"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w6_24_first_small_observation_second_term_teacher_observes_social_choice_1",
            "text": "說只是少少。",
            "buttonText": "說只是少少。",
            "playerLine": "少少咋。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師笑了一下，說少少也算。你想起那些很短的你好、借筆和一起找頁數。"
            },
            "resultText": "老師笑了一下，說少少也算。你想起那些很短的你好、借筆和一起找頁數。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w6_24_first_small_observation_second_term",
              "variantId": "teacher_observes_social",
              "mustMatchEventTitle": "下學期第一個小觀察"
            }
          },
          {
            "id": "s2_w6_24_first_small_observation_second_term_teacher_observes_social_choice_2",
            "text": "講到鄰居。",
            "buttonText": "講到鄰居。",
            "playerLine": "我樓下都有個朋友。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師有點意外，問是不是同學。你搖頭，第一次把校外的{neighborDisplayName}放進學校話題裡。"
            },
            "resultText": "老師有點意外，問是不是同學。你搖頭，第一次把校外的{neighborDisplayName}放進學校話題裡。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w6_24_first_small_observation_second_term",
              "variantId": "teacher_observes_social",
              "mustMatchEventTitle": "下學期第一個小觀察"
            }
          },
          {
            "id": "s2_w6_24_first_small_observation_second_term_teacher_observes_social_choice_3",
            "text": "說有時不知道講咩。",
            "buttonText": "說有時不知道講咩。",
            "playerLine": "有時唔知講咩。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說不用每次都講很多。這句讓你想起穎心，想起安靜也可以在旁邊。"
            },
            "resultText": "老師說不用每次都講很多。這句讓你想起穎心，想起安靜也可以在旁邊。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w6_24_first_small_observation_second_term",
              "variantId": "teacher_observes_social",
              "mustMatchEventTitle": "下學期第一個小觀察"
            }
          },
          {
            "id": "s2_w6_24_first_small_observation_second_term_teacher_observes_social_choice_4",
            "text": "不太想被注意。",
            "buttonText": "不太想被注意。",
            "playerLine": "……",
            "playerLineType": "silent",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你低頭看桌面。老師沒有追問，只說慢慢來，像把那一點被看見放輕了。"
            },
            "resultText": "你低頭看桌面。老師沒有追問，只說慢慢來，像把那一點被看見放輕了。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w6_24_first_small_observation_second_term",
              "variantId": "teacher_observes_social",
              "mustMatchEventTitle": "下學期第一個小觀察"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "sameAgeNeighbor",
        "identityTypeId": "same_age_neighbor",
        "npcIdHint": "primarySameAgeNeighborId",
        "npcNameFallback": "{neighborDisplayName}",
        "usesSelectedNeighbor": true,
        "activeMessage": false
      },
      {
        "variantId": "teacher_observes_activity",
        "variantTitle": "老師看活動",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "老師提到壁報、揮春或活動表：「你呢排有試過幫手，或者有留意活動。」她說得很普通，但你突然想起好多張紙、好多張表和好多次站在旁邊看。"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w6_24_first_small_observation_second_term_teacher_observes_activity_choice_1",
            "text": "說有幫一點。",
            "buttonText": "說有幫一點。",
            "playerLine": "我幫咗少少。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師點頭，說少少都會被看見。你想起自己遞過膠紙、貼過角落、寫過一個歪字。"
            },
            "resultText": "老師點頭，說少少都會被看見。你想起自己遞過膠紙、貼過角落、寫過一個歪字。",
            "statusDelta": {
              "學業": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w6_24_first_small_observation_second_term",
              "variantId": "teacher_observes_activity",
              "mustMatchEventTitle": "下學期第一個小觀察"
            }
          },
          {
            "id": "s2_w6_24_first_small_observation_second_term_teacher_observes_activity_choice_2",
            "text": "問下次可不可以再試。",
            "buttonText": "問下次可不可以再試。",
            "playerLine": "下次仲有冇？",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說之後還會有。你沒有立刻變成很勇敢，但知道那扇門沒有關上。"
            },
            "resultText": "老師說之後還會有。你沒有立刻變成很勇敢，但知道那扇門沒有關上。",
            "statusDelta": {
              "學業": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w6_24_first_small_observation_second_term",
              "variantId": "teacher_observes_activity",
              "mustMatchEventTitle": "下學期第一個小觀察"
            }
          },
          {
            "id": "s2_w6_24_first_small_observation_second_term_teacher_observes_activity_choice_3",
            "text": "說怕做錯。",
            "buttonText": "說怕做錯。",
            "playerLine": "我驚整錯。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說可以先做細件事。你想起高年級學生把膠紙接過去，原來幫忙也可以很小。"
            },
            "resultText": "老師說可以先做細件事。你想起高年級學生把膠紙接過去，原來幫忙也可以很小。",
            "statusDelta": {
              "學業": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w6_24_first_small_observation_second_term",
              "variantId": "teacher_observes_activity",
              "mustMatchEventTitle": "下學期第一個小觀察"
            }
          },
          {
            "id": "s2_w6_24_first_small_observation_second_term_teacher_observes_activity_choice_4",
            "text": "不記得自己做過甚麼。",
            "buttonText": "不記得自己做過甚麼。",
            "playerLine": "我唔記得。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師提醒你曾經貼過一角。你才發現有些小事，老師比你記得清楚。"
            },
            "resultText": "老師提醒你曾經貼過一角。你才發現有些小事，老師比你記得清楚。",
            "statusDelta": {
              "學業": 1,
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
              "繪畫": 1
            },
            "unlocks": [],
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "s2_w6_24_first_small_observation_second_term",
              "variantId": "teacher_observes_activity",
              "mustMatchEventTitle": "下學期第一個小觀察"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "npcIdHint": "char_teacher",
        "npcNameFallback": "老師"
      },
      {
        "variantId": "teacher_observes_tiredness",
        "variantTitle": "老師看情緒／疲累",
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "老師看你這幾天常常趴在桌上，又在新年後比較慢拿書。她沒有在全班面前問，只在放學前低聲說：「最近係咪有啲攰？」"
          }
        ],
        "playerChoices": [
          {
            "id": "s2_w6_24_first_small_observation_second_term_teacher_observes_tiredness_choice_1",
            "text": "說有點累。",
            "buttonText": "說有點累。",
            "playerLine": "有啲。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師叫你今晚早點睡，不用把所有事都放到晚上做。這句很普通，卻像有人看見你放假後還沒完全回來。"
            },
            "resultText": "老師叫你今晚早點睡，不用把所有事都放到晚上做。這句很普通，卻像有人看見你放假後還沒完全回來。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w6_24_first_small_observation_second_term",
              "variantId": "teacher_observes_tiredness",
              "mustMatchEventTitle": "下學期第一個小觀察"
            }
          },
          {
            "id": "s2_w6_24_first_small_observation_second_term_teacher_observes_tiredness_choice_2",
            "text": "說沒有。",
            "buttonText": "說沒有。",
            "playerLine": "冇呀。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師看了你一眼，沒有逼你承認。你把書包背上，肩膀還是比平日重一點。"
            },
            "resultText": "老師看了你一眼，沒有逼你承認。你把書包背上，肩膀還是比平日重一點。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w6_24_first_small_observation_second_term",
              "variantId": "teacher_observes_tiredness",
              "mustMatchEventTitle": "下學期第一個小觀察"
            }
          },
          {
            "id": "s2_w6_24_first_small_observation_second_term_teacher_observes_tiredness_choice_3",
            "text": "說新年好多事。",
            "buttonText": "說新年好多事。",
            "playerLine": "新年好多嘢。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師點頭，說回校也要慢慢調返。你第一次覺得累不是因為你不好，而是這幾週真的很滿。"
            },
            "resultText": "老師點頭，說回校也要慢慢調返。你第一次覺得累不是因為你不好，而是這幾週真的很滿。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w6_24_first_small_observation_second_term",
              "variantId": "teacher_observes_tiredness",
              "mustMatchEventTitle": "下學期第一個小觀察"
            }
          },
          {
            "id": "s2_w6_24_first_small_observation_second_term_teacher_observes_tiredness_choice_4",
            "text": "只點頭。",
            "buttonText": "只點頭。",
            "playerLine": "嗯。",
            "playerLineType": "speech",
            "attitudeId": null,
            "memoryAdd": [],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師讓你去排隊。你走出課室時，看見走廊還是很吵，但心裡像被人放慢了一點。"
            },
            "resultText": "老師讓你去排隊。你走出課室時，看見走廊還是很吵，但心裡像被人放慢了一點。",
            "statusDelta": {
              "學業": 1,
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
              "eventId": "s2_w6_24_first_small_observation_second_term",
              "variantId": "teacher_observes_tiredness",
              "mustMatchEventTitle": "下學期第一個小觀察"
            }
          }
        ],
        "metadata": {
          "uiHidden": true
        },
        "variantType": "teacher",
        "identityTypeId": "teacher",
        "npcIdHint": "char_teacher",
        "npcNameFallback": "老師"
      }
    ],
    "propertyValidation": {
      "purpose": "natural_scene_branching_only",
      "propertyContext": "s2MidStartObservation",
      "ordinaryVersionAlwaysAvailable": true,
      "hideLockedChoices": true,
      "doNotShowInsufficientStats": true,
      "note": "學業／功課完成度 → 老師看功課與改正；社交／同齡互動記憶／neighborNameKnown → 老師看同學和校外朋友；活動身份／skillExp → 老師看活動；理智值 < 35 或體力低 → 老師看疲累與情緒。"
    }
  }
];
