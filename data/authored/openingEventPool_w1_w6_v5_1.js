// data/hkLifeSimulatorOpeningEventDialogue.balanced.js
// P1 W1-W6 opening event bible — v5.1 balanced event-specific choices.
// Fixes: status trade-offs, generated previews, metadata identity cleanup, skillExpDelta semantics.

export const hkLifeMainStatusKeys = [
  "快樂",
  "理智值",
  "體力",
  "學業",
  "社交",
  "創意",
  "家庭關係",
  "自信"
];

export const hkLifeSkillKeys = [
  "繪畫",
  "鋼琴",
  "朗誦",
  "游泳",
  "足球",
  "編程",
  "閱讀",
  "班務服務"
];

export const hkLifeOpeningEventBalancedDesignNote = {
  "version": "opening_event_pool_v5_1_balanced_event_specific_choices",
  "summary": "正式 data 前整理版：event-specific choices 保留，並進一步壓低正向 statusDelta、修 preview 自動生成、修 NPC metadata、將 skillDelta 改名為 skillExpDelta。",
  "runtimePriority": "Render choice.text as short button; use playerLine for fuller action. Read variants[*].playerChoices only; do not inject personality generic choices.",
  "statusBalanceRule": "每個 variant 通常只有 1–2 個選項會推進核心狀態；觀察、保留、拒絕、休息、逃避、錯過多數為 0 或負數。",
  "skillSemantics": "skillExpDelta is skill experience, not skill level.",
  "mainStatusKeys": [
    "快樂",
    "理智值",
    "體力",
    "學業",
    "社交",
    "創意",
    "家庭關係",
    "自信"
  ],
  "skillKeys": [
    "繪畫",
    "鋼琴",
    "朗誦",
    "游泳",
    "足球",
    "編程",
    "閱讀",
    "班務服務"
  ]
};

export const hkLifeSimulatorOpeningEventDialogueBalanced = [
  {
    "id": "w1_seat_neighbor_first_day",
    "weekPool": "W1_opening_adaptation",
    "title": "第一日坐位附近的人",
    "sceneType": "classroom_social_first_contact",
    "coreSituation": "玩家坐到新座位，旁邊同學有反應，但這不一定代表馬上成為朋友，只是第一個社交入口。",
    "followUpHooks": [
      "w6_classmate_echo",
      "story_seat_neighbor_first_day"
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "pointDesign": {
      "version": "target_aware_integer_delta_v5_1_balanced",
      "mainStatusKeys": [
        "快樂",
        "理智值",
        "體力",
        "學業",
        "社交",
        "創意",
        "家庭關係",
        "自信"
      ],
      "skillKeys": [
        "繪畫",
        "鋼琴",
        "朗誦",
        "游泳",
        "足球",
        "編程",
        "閱讀",
        "班務服務"
      ],
      "note": "分數由玩家 attitudeId、舊 effects、事件題材，以及當前 NPC 身份 / 性格共同決定；同一個選項在不同 NPC 面前可以有不同結果。",
      "choiceTextRule": "choice.text is player-facing and must describe a concrete action or spoken line that answers this event dialogue; do not show abstract attitude labels.",
      "noCrossEventGenericChoiceRule": "The same choice.text should not be reused across unrelated event ids.",
      "statusBalanceRule": "每個 variant 通常只有 1–2 個選項會推進核心狀態；其餘選項偏向保留、錯過、休息、觀察或付出代價。statusDelta 是方向，不是每次點擊獎勵。",
      "skillSemantics": "skillExpDelta 是技能經驗值，不是技能等級。",
      "previewRule": "dialogueTriggerPreview is generated from openingDialogue and should not be hand-authored."
    },
    "fallbackChoices": [
      {
        "id": "w1_seat_neighbor_first_day_outgoingInvite_fallback_ask",
        "text": "問清楚這件事和自己現在要做甚麼。",
        "playerLine": "問清楚這件事和自己現在要做甚麼。",
        "attitudeId": "askForClarification",
        "personalityDelta": {
          "helpSeeking": 1
        },
        "memoryAdd": [
          "w1_seat_neighbor_first_day_outgoingInvite_fallback_ask"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你用提問避免誤會，這是只屬於當前事件的備用選項。"
        },
        "statusDelta": {
          "理智值": 1,
          "體力": -1,
          "自信": 1
        },
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "同學",
          "npcPersonality": "外向邀請型",
          "attitudeReadAs": "askForClarification",
          "reason": "這個選項是為 第一日坐位附近的人 / outgoingInvite 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w1_seat_neighbor_first_day",
          "variantId": "outgoingInvite",
          "mustMatchEventTitle": "第一日坐位附近的人"
        },
        "skillExpDelta": {}
      },
      {
        "id": "w1_seat_neighbor_first_day_outgoingInvite_fallback_observe",
        "text": "先觀察這個情境，不立刻答應或拒絕。",
        "playerLine": "先觀察這個情境，不立刻答應或拒絕。",
        "attitudeId": "observeFirst",
        "personalityDelta": {
          "observer": 1
        },
        "memoryAdd": [
          "w1_seat_neighbor_first_day_outgoingInvite_fallback_observe"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你暫時保留行動，讓自己多一點時間。"
        },
        "statusDelta": {},
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "同學",
          "npcPersonality": "外向邀請型",
          "attitudeReadAs": "observeFirst",
          "reason": "這個選項是為 第一日坐位附近的人 / outgoingInvite 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w1_seat_neighbor_first_day",
          "variantId": "outgoingInvite",
          "mustMatchEventTitle": "第一日坐位附近的人"
        },
        "skillExpDelta": {}
      }
    ],
    "variants": [
      {
        "npcIdHint": "classmate_outgoing_invite",
        "npcNameFallback": "家朗",
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "你坐呢度呀？我叫家朗。你知唔知小息去邊度排隊？我有去過迎新日。可以帶你去睇。"
          }
        ],
        "mood": "友善，但有少少急住建立連結",
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "你坐呢度呀？我叫家朗。你知唔知小息去邊度排隊？我有去過迎新日。可以帶你去睇。",
        "playerChoices": [
          {
            "id": "w1_seat_neighbor_first_day_outgoingInvite_go_with_kalong_slowly",
            "text": "跟家朗去",
            "playerLine": "好呀，你慢少少呀。",
            "attitudeId": "acceptWarmly",
            "personalityDelta": {
              "outgoing": 2,
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w1_seat_neighbor_first_day_outgoingInvite_go_with_kalong_slowly"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗本來想即刻衝出去，聽完就放慢了半步，邊行邊指給你看操場和洗手間。"
            },
            "statusDelta": {
              "體力": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 3,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "acceptWarmly",
              "reason": "外向邀請型同學會把一起行動視為友善訊號，但你提出行慢一點也讓節奏變得可控。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_seat_neighbor_first_day",
              "variantId": "outgoingInvite",
              "mustMatchEventTitle": "第一日坐位附近的人"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家朗本來想即刻衝出去，聽完就放慢了半步，邊行邊指給你看操場和洗手間。"
          },
          {
            "id": "w1_seat_neighbor_first_day_outgoingInvite_ask_queue_first",
            "text": "先問小息點行",
            "playerLine": "係咪打鐘就出去㗎？",
            "attitudeId": "askForHelp",
            "personalityDelta": {
              "helpSeeking": 2,
              "observer": 1
            },
            "memoryAdd": [
              "w1_seat_neighbor_first_day_outgoingInvite_ask_queue_first"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗把事情講得細一點，你心裡沒有那麼亂。"
            },
            "statusDelta": {
              "理智值": 2,
              "體力": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "askForHelp",
              "reason": "這個選項是為 第一日坐位附近的人 / outgoingInvite 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_seat_neighbor_first_day",
              "variantId": "outgoingInvite",
              "mustMatchEventTitle": "第一日坐位附近的人"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家朗把事情講得細一點，你心裡沒有那麼亂。"
          },
          {
            "id": "w1_seat_neighbor_first_day_outgoingInvite_smile_stay_seat",
            "text": "先留在座位",
            "playerLine": "我想一陣先。",
            "attitudeId": "softBoundary",
            "personalityDelta": {
              "boundary": 1,
              "observer": 1
            },
            "memoryAdd": [
              "w1_seat_neighbor_first_day_outgoingInvite_smile_stay_seat"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗點點頭，雖然有點想走，但沒有拉你。"
            },
            "statusDelta": {},
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "softBoundary",
              "reason": "這個選項是為 第一日坐位附近的人 / outgoingInvite 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_seat_neighbor_first_day",
              "variantId": "outgoingInvite",
              "mustMatchEventTitle": "第一日坐位附近的人"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家朗點點頭，雖然有點想走，但沒有拉你。"
          },
          {
            "id": "w1_seat_neighbor_first_day_outgoingInvite_ask_name_again",
            "text": "問名字點寫",
            "playerLine": "你個朗字點寫㗎？",
            "attitudeId": "startConversation",
            "personalityDelta": {
              "outgoing": 1,
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w1_seat_neighbor_first_day_outgoingInvite_ask_name_again"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗用手指在枱面寫了兩下，你們暫時只是認得名字，但座位旁邊沒有那麼陌生。"
            },
            "statusDelta": {
              "體力": -1,
              "社交": 2,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "startConversation",
              "reason": "這個選項是為 第一日坐位附近的人 / outgoingInvite 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_seat_neighbor_first_day",
              "variantId": "outgoingInvite",
              "mustMatchEventTitle": "第一日坐位附近的人"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家朗用手指在枱面寫了兩下，你們暫時只是認得名字，但座位旁邊沒有那麼陌生。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "outgoingInvite",
          "npcIdentity": "同學",
          "npcPersonality": "外向邀請型",
          "npcDisplayName": "家朗"
        },
        "variantId": "outgoingInvite",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "reactionProfileId": "identity_same_age_peer__pers_outgoing_inviter"
      },
      {
        "npcIdHint": "classmate_quiet_observer",
        "npcNameFallback": "穎心",
        "openingDialogue": [
          {
            "speaker": "穎心",
            "text": "你本書……放呢邊會唔會好啲？"
          },
          {
            "speaker": "穎心",
            "text": "呢張枱有少少斜，筆放太出會碌落地。我頭先整跌過一次。"
          }
        ],
        "mood": "安靜、細心，不主動拉近距離但會釋出善意",
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "你本書……放呢邊會唔會好啲？ 呢張枱有少少斜，筆放太出會碌落地。我頭先整跌過一次。",
        "playerChoices": [
          {
            "id": "w1_seat_neighbor_first_day_quietObserver_thank_for_space",
            "text": "細聲講多謝",
            "playerLine": "多謝，我放呢度。",
            "attitudeId": "gentleAccept",
            "personalityDelta": {
              "observer": 1,
              "gentle": 1
            },
            "memoryAdd": [
              "w1_seat_neighbor_first_day_quietObserver_thank_for_space"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心沒有再多講，只是把自己的筆盒再移開一點，像是默默給你留位。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "gentleAccept",
              "reason": "這個選項是為 第一日坐位附近的人 / quietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_seat_neighbor_first_day",
              "variantId": "quietObserver",
              "mustMatchEventTitle": "第一日坐位附近的人"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "穎心沒有再多講，只是把自己的筆盒再移開一點，像是默默給你留位。"
          },
          {
            "id": "w1_seat_neighbor_first_day_quietObserver_ask_if_blocking",
            "text": "問會不會阻到她",
            "playerLine": "咁會唔會阻住你寫字？",
            "attitudeId": "considerateCheck",
            "personalityDelta": {
              "considerate": 2
            },
            "memoryAdd": [
              "w1_seat_neighbor_first_day_quietObserver_ask_if_blocking"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她搖搖頭，很小聲講：「唔會。」氣氛安靜，但不尷尬。"
            },
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "considerateCheck",
              "reason": "這個選項是為 第一日坐位附近的人 / quietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_seat_neighbor_first_day",
              "variantId": "quietObserver",
              "mustMatchEventTitle": "第一日坐位附近的人"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "她搖搖頭，很小聲講：「唔會。」氣氛安靜，但不尷尬。"
          },
          {
            "id": "w1_seat_neighbor_first_day_quietObserver_arrange_books_quietly",
            "text": "自己執書",
            "playerLine": "你把書放好，暫時不出聲。",
            "attitudeId": "observeFirst",
            "personalityDelta": {
              "observer": 2,
              "boundary": 1
            },
            "memoryAdd": [
              "w1_seat_neighbor_first_day_quietObserver_arrange_books_quietly"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她看了你的書一眼，又很快低頭，像是放心了一點。"
            },
            "statusDelta": {},
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "observeFirst",
              "reason": "這個選項是為 第一日坐位附近的人 / quietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_seat_neighbor_first_day",
              "variantId": "quietObserver",
              "mustMatchEventTitle": "第一日坐位附近的人"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "她看了你的書一眼，又很快低頭，像是放心了一點。"
          },
          {
            "id": "w1_seat_neighbor_first_day_quietObserver_whisper_name",
            "text": "問名字",
            "playerLine": "你叫咩名呀？",
            "attitudeId": "smallTalk",
            "personalityDelta": {
              "outgoing": 1,
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w1_seat_neighbor_first_day_quietObserver_whisper_name"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她停了一下才答：「穎心。」聲音很小，但你聽到了。"
            },
            "statusDelta": {
              "體力": -1,
              "社交": 2,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "smallTalk",
              "reason": "這個選項是為 第一日坐位附近的人 / quietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_seat_neighbor_first_day",
              "variantId": "quietObserver",
              "mustMatchEventTitle": "第一日坐位附近的人"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "她停了一下才答：「穎心。」聲音很小，但你聽到了。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "quietObserver",
          "npcIdentity": "同學",
          "npcPersonality": "安靜觀察型",
          "npcDisplayName": "穎心"
        },
        "variantId": "quietObserver",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_quiet_observer",
        "reactionProfileId": "identity_same_age_peer__pers_quiet_observer"
      },
      {
        "npcIdHint": "classmate_competitive",
        "npcNameFallback": "梓軒",
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "你讀邊間幼稚園？你識寫自己個名未？"
          },
          {
            "speaker": "梓軒",
            "text": "我阿媽話小一就要做到最好。你有冇補習？"
          }
        ],
        "mood": "不是惡意，但習慣用比較理解新同學",
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "你讀邊間幼稚園？你識寫自己個名未？ 我阿媽話小一就要做到最好。你有冇補習？",
        "playerChoices": [
          {
            "id": "w1_seat_neighbor_first_day_competitivePeer_answer_school_simple",
            "text": "只講幼稚園名",
            "playerLine": "我讀屋企附近嗰間。我識寫名呀。",
            "attitudeId": "calmAnswer",
            "personalityDelta": {
              "composed": 1,
              "boundary": 1
            },
            "memoryAdd": [
              "w1_seat_neighbor_first_day_competitivePeer_answer_school_simple"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒還想追問，但你沒有變成比賽。"
            },
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "calmAnswer",
              "reason": "競爭型同學會把資料當成比較材料；平靜回答能維持禮貌，但不會大幅推進親近。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_seat_neighbor_first_day",
              "variantId": "competitivePeer",
              "mustMatchEventTitle": "第一日坐位附近的人"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "梓軒還想追問，但你沒有變成比賽。"
          },
          {
            "id": "w1_seat_neighbor_first_day_competitivePeer_ask_name_writing_back",
            "text": "反問他",
            "playerLine": "咁你個名難唔難寫？",
            "attitudeId": "mirrorChallenge",
            "personalityDelta": {
              "competitive": 2,
              "outgoing": 1
            },
            "memoryAdd": [
              "w1_seat_neighbor_first_day_competitivePeer_ask_name_writing_back"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒愣了一下，像沒想到你會把問題丟回去，然後立刻說：「唔難呀。」"
            },
            "statusDelta": {
              "理智值": -1,
              "社交": 1,
              "自信": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "mirrorChallenge",
              "reason": "這個選項是為 第一日坐位附近的人 / competitivePeer 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_seat_neighbor_first_day",
              "variantId": "competitivePeer",
              "mustMatchEventTitle": "第一日坐位附近的人"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "梓軒愣了一下，像沒想到你會把問題丟回去，然後立刻說：「唔難呀。」"
          },
          {
            "id": "w1_seat_neighbor_first_day_competitivePeer_say_still_learning",
            "text": "老實講未識晒",
            "playerLine": "有啲字我仲練緊。",
            "attitudeId": "honestBoundary",
            "personalityDelta": {
              "boundary": 2,
              "selfAware": 1
            },
            "memoryAdd": [
              "w1_seat_neighbor_first_day_competitivePeer_say_still_learning"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有假裝很厲害，梓軒也一時找不到可以比的地方。"
            },
            "statusDelta": {},
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "honestBoundary",
              "reason": "這個選項是為 第一日坐位附近的人 / competitivePeer 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_seat_neighbor_first_day",
              "variantId": "competitivePeer",
              "mustMatchEventTitle": "第一日坐位附近的人"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "你沒有假裝很厲害，梓軒也一時找不到可以比的地方。"
          },
          {
            "id": "w1_seat_neighbor_first_day_competitivePeer_avoid_comparison",
            "text": "不想再講",
            "playerLine": "我唔想講幼稚園。",
            "attitudeId": "clearBoundary",
            "personalityDelta": {
              "boundary": 2,
              "avoidant": 1
            },
            "memoryAdd": [
              "w1_seat_neighbor_first_day_competitivePeer_avoid_comparison"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒撇撇嘴，暫時收起了追問。"
            },
            "statusDelta": {
              "體力": 1,
              "社交": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": -1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "clearBoundary",
              "reason": "這個選項是為 第一日坐位附近的人 / competitivePeer 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_seat_neighbor_first_day",
              "variantId": "competitivePeer",
              "mustMatchEventTitle": "第一日坐位附近的人"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "梓軒撇撇嘴，暫時收起了追問。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "competitivePeer",
          "npcIdentity": "同學",
          "npcPersonality": "競爭同學型",
          "npcDisplayName": "梓軒"
        },
        "variantId": "competitivePeer",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_competitive_peer",
        "reactionProfileId": "identity_same_age_peer__pers_competitive_peer"
      },
      {
        "npcIdHint": "classmate_curious_troublemaker",
        "npcNameFallback": "柏宇",
        "openingDialogue": [
          {
            "speaker": "柏宇",
            "text": "你見唔見到角落嗰個櫃？我聽人講以前鎖住過人！"
          },
          {
            "speaker": "柏宇",
            "text": "我唔知係咪真㗎，我哋可以一齊行近啲睇吓！"
          }
        ],
        "mood": "好奇、帶點搞事氣氛，容易開探索線",
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "你見唔見到角落嗰個櫃？我聽人講以前鎖住過人！ 我唔知係咪真㗎，我哋可以一齊行近啲睇吓！",
        "playerChoices": [
          {
            "id": "w1_seat_neighbor_first_day_curiousTroublemaker_ask_secret_cabinet",
            "text": "追問秘密",
            "playerLine": "咩人呀？邊個講㗎？",
            "attitudeId": "curiousAsk",
            "personalityDelta": {
              "curious": 2,
              "outgoing": 1
            },
            "memoryAdd": [
              "w1_seat_neighbor_first_day_curiousTroublemaker_ask_secret_cabinet"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇眼睛一亮，立刻壓低聲音，像這件事終於有人相信。"
            },
            "statusDelta": {
              "快樂": 1,
              "體力": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "搞事好奇型",
              "attitudeReadAs": "curiousAsk",
              "reason": "這個選項是為 第一日坐位附近的人 / curiousTroublemaker 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_seat_neighbor_first_day",
              "variantId": "curiousTroublemaker",
              "mustMatchEventTitle": "第一日坐位附近的人"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "柏宇眼睛一亮，立刻壓低聲音，像這件事終於有人相信。"
          },
          {
            "id": "w1_seat_neighbor_first_day_curiousTroublemaker_say_dont_scare_me",
            "text": "半信半疑",
            "playerLine": "你唔好嚇我啦……但我都想望一眼。",
            "attitudeId": "playfulBoundary",
            "personalityDelta": {
              "boundary": 1,
              "curious": 1
            },
            "memoryAdd": [
              "w1_seat_neighbor_first_day_curiousTroublemaker_say_dont_scare_me"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有完全信他，但那個櫃變成你會留意的小地方。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "搞事好奇型",
              "attitudeReadAs": "playfulBoundary",
              "reason": "這個選項是為 第一日坐位附近的人 / curiousTroublemaker 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_seat_neighbor_first_day",
              "variantId": "curiousTroublemaker",
              "mustMatchEventTitle": "第一日坐位附近的人"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "你沒有完全信他，但那個櫃變成你會留意的小地方。"
          },
          {
            "id": "w1_seat_neighbor_first_day_curiousTroublemaker_observe_cabinet_later",
            "text": "先不要亂碰",
            "playerLine": "唔好搞啦，老師會鬧㗎。",
            "attitudeId": "observeFirst",
            "personalityDelta": {
              "observer": 2,
              "cautious": 1
            },
            "memoryAdd": [
              "w1_seat_neighbor_first_day_curiousTroublemaker_observe_cabinet_later"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇有點掃興，但仍然記住你會聽他講。"
            },
            "statusDelta": {},
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "搞事好奇型",
              "attitudeReadAs": "observeFirst",
              "reason": "這個選項是為 第一日坐位附近的人 / curiousTroublemaker 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_seat_neighbor_first_day",
              "variantId": "curiousTroublemaker",
              "mustMatchEventTitle": "第一日坐位附近的人"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "柏宇有點掃興，但仍然記住你會聽他講。"
          },
          {
            "id": "w1_seat_neighbor_first_day_curiousTroublemaker_change_to_class_rule",
            "text": "拉回上課",
            "playerLine": "一陣再講，老師嚟啦。",
            "attitudeId": "redirectPractical",
            "personalityDelta": {
              "compliant": 1,
              "practical": 1
            },
            "memoryAdd": [
              "w1_seat_neighbor_first_day_curiousTroublemaker_change_to_class_rule"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇嘆一口氣，把秘密先放回肚裡。"
            },
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "搞事好奇型",
              "attitudeReadAs": "redirectPractical",
              "reason": "這個選項是為 第一日坐位附近的人 / curiousTroublemaker 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_seat_neighbor_first_day",
              "variantId": "curiousTroublemaker",
              "mustMatchEventTitle": "第一日坐位附近的人"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "柏宇嘆一口氣，把秘密先放回肚裡。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "curiousTroublemaker",
          "npcIdentity": "同學",
          "npcPersonality": "搞事好奇型",
          "npcDisplayName": "柏宇"
        },
        "variantId": "curiousTroublemaker",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_curious_troublemaker",
        "reactionProfileId": "identity_same_age_peer__pers_curious_troublemaker"
      }
    ],
    "schemaVersion": "opening_event_pool_v5_1_balanced_event_specific_choices",
    "eventScheduling": {
      "baseWeight": 70,
      "weekRange": [
        1,
        1
      ],
      "conditions": [],
      "exclusiveGroup": null,
      "onceOnly": true,
      "cooldownWeeks": 999,
      "prerequisiteMemory": [],
      "sourceChannel": "classroom",
      "involvementRole": "direct_actor"
    },
    "eventChoiceDesignRule": "playerChoices must be authored for this exact event+variant; personalityId may alter tone and point interpretation but must not inject a generic personality choice set."
  },
  {
    "id": "w1_teacher_first_roll_call",
    "weekPool": "W1_opening_adaptation",
    "title": "老師第一次點名",
    "sceneType": "teacher_first_impression",
    "coreSituation": "班主任第一次點名，事件只建立老師記憶，不應大幅加扣分。",
    "followUpHooks": [
      "w6_teacher_observation",
      "story_first_roll_call"
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "pointDesign": {
      "version": "target_aware_integer_delta_v5_1_balanced",
      "mainStatusKeys": [
        "快樂",
        "理智值",
        "體力",
        "學業",
        "社交",
        "創意",
        "家庭關係",
        "自信"
      ],
      "skillKeys": [
        "繪畫",
        "鋼琴",
        "朗誦",
        "游泳",
        "足球",
        "編程",
        "閱讀",
        "班務服務"
      ],
      "note": "分數由玩家 attitudeId、舊 effects、事件題材，以及當前 NPC 身份 / 性格共同決定；同一個選項在不同 NPC 面前可以有不同結果。",
      "choiceTextRule": "choice.text is player-facing and must describe a concrete action or spoken line that answers this event dialogue; do not show abstract attitude labels.",
      "noCrossEventGenericChoiceRule": "The same choice.text should not be reused across unrelated event ids.",
      "statusBalanceRule": "每個 variant 通常只有 1–2 個選項會推進核心狀態；其餘選項偏向保留、錯過、休息、觀察或付出代價。statusDelta 是方向，不是每次點擊獎勵。",
      "skillSemantics": "skillExpDelta 是技能經驗值，不是技能等級。",
      "previewRule": "dialogueTriggerPreview is generated from openingDialogue and should not be hand-authored."
    },
    "fallbackChoices": [
      {
        "id": "w1_teacher_first_roll_call_strictAcademic_fallback_ask",
        "text": "問清楚這件事和自己現在要做甚麼。",
        "playerLine": "問清楚這件事和自己現在要做甚麼。",
        "attitudeId": "askForClarification",
        "personalityDelta": {
          "helpSeeking": 1
        },
        "memoryAdd": [
          "w1_teacher_first_roll_call_strictAcademic_fallback_ask"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你用提問避免誤會，這是只屬於當前事件的備用選項。"
        },
        "statusDelta": {
          "理智值": 1,
          "體力": -1,
          "自信": 1
        },
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "嚴格學業型",
          "attitudeReadAs": "askForClarification",
          "reason": "這個選項是為 老師第一次點名 / strictAcademic 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w1_teacher_first_roll_call",
          "variantId": "strictAcademic",
          "mustMatchEventTitle": "老師第一次點名"
        },
        "skillExpDelta": {}
      },
      {
        "id": "w1_teacher_first_roll_call_strictAcademic_fallback_observe",
        "text": "先觀察這個情境，不立刻答應或拒絕。",
        "playerLine": "先觀察這個情境，不立刻答應或拒絕。",
        "attitudeId": "observeFirst",
        "personalityDelta": {
          "observer": 1
        },
        "memoryAdd": [
          "w1_teacher_first_roll_call_strictAcademic_fallback_observe"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你暫時保留行動，讓自己多一點時間。"
        },
        "statusDelta": {},
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "嚴格學業型",
          "attitudeReadAs": "observeFirst",
          "reason": "這個選項是為 老師第一次點名 / strictAcademic 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w1_teacher_first_roll_call",
          "variantId": "strictAcademic",
          "mustMatchEventTitle": "老師第一次點名"
        },
        "skillExpDelta": {}
      }
    ],
    "variants": [
      {
        "npcIdHint": "teacher_strict_academic",
        "openingDialogue": [
          {
            "speaker": "班主任",
            "text": "聽到自己個名，就答『到』。唔使嗌，但老師要聽到。"
          },
          {
            "speaker": "班主任",
            "text": "第一日都一樣，大家要跟課室規矩。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "聽到自己個名，就答『到』。唔使嗌，但老師要聽到。 第一日都一樣，大家要跟課室規矩。",
        "playerChoices": [
          {
            "id": "w1_teacher_first_roll_call_strictAcademic_clear_arrival",
            "text": "答「到」",
            "playerLine": "到。",
            "attitudeId": "clearComply",
            "personalityDelta": {
              "compliant": 2
            },
            "memoryAdd": [
              "w1_teacher_first_roll_call_strictAcademic_clear_arrival"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師在名單上打勾，沒有多說，但你知道她聽得很清楚。"
            },
            "statusDelta": {
              "理智值": -1,
              "學業": 1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "clearComply",
              "reason": "嚴格學業型老師重視清楚、準時和規矩，清楚答到會成為穩定的第一印象。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_teacher_first_roll_call",
              "variantId": "strictAcademic",
              "mustMatchEventTitle": "老師第一次點名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師在名單上打勾，沒有多說，但你知道她聽得很清楚。"
          },
          {
            "id": "w1_teacher_first_roll_call_strictAcademic_small_but_try",
            "text": "細聲答到",
            "playerLine": "……到。",
            "attitudeId": "shyTry",
            "personalityDelta": {
              "shy": 1,
              "compliant": 1
            },
            "memoryAdd": [
              "w1_teacher_first_roll_call_strictAcademic_small_but_try"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師聽到了，只是停了一秒，像想提醒你下次可以大聲少少。"
            },
            "statusDelta": {
              "理智值": -1,
              "自信": 1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "shyTry",
              "reason": "嚴格老師不會因緊張重罰，但會把細聲記成需要練習課堂規矩。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_teacher_first_roll_call",
              "variantId": "strictAcademic",
              "mustMatchEventTitle": "老師第一次點名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師聽到了，只是停了一秒，像想提醒你下次可以大聲少少。"
          },
          {
            "id": "w1_teacher_first_roll_call_strictAcademic_wait_eye_contact",
            "text": "等老師望過來才答",
            "playerLine": "到。",
            "attitudeId": "cautiousWait",
            "personalityDelta": {
              "observer": 1,
              "cautious": 1
            },
            "memoryAdd": [
              "w1_teacher_first_roll_call_strictAcademic_wait_eye_contact"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你答得慢了半拍，老師的筆停了一下才繼續。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": -1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "cautiousWait",
              "reason": "這個選項是為 老師第一次點名 / strictAcademic 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_teacher_first_roll_call",
              "variantId": "strictAcademic",
              "mustMatchEventTitle": "老師第一次點名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "你答得慢了半拍，老師的筆停了一下才繼續。"
          },
          {
            "id": "w1_teacher_first_roll_call_strictAcademic_miss_then_fix",
            "text": "慢了半拍道歉",
            "playerLine": "到，對唔住。",
            "attitudeId": "repairMistake",
            "personalityDelta": {
              "accountable": 1
            },
            "memoryAdd": [
              "w1_teacher_first_roll_call_strictAcademic_miss_then_fix"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師沒有罵你，只說：「聽到就得，下次反應快少少。」"
            },
            "statusDelta": {
              "理智值": -1,
              "自信": 1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "repairMistake",
              "reason": "這個選項是為 老師第一次點名 / strictAcademic 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_teacher_first_roll_call",
              "variantId": "strictAcademic",
              "mustMatchEventTitle": "老師第一次點名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師沒有罵你，只說：「聽到就得，下次反應快少少。」"
          }
        ],
        "npcPointProfile": {
          "variantKey": "strictAcademic",
          "npcIdentity": "老師",
          "npcPersonality": "嚴格學業型",
          "npcDisplayName": "teacher_strict_academic"
        },
        "variantId": "strictAcademic",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_strict_academic",
        "reactionProfileId": "identity_teacher__pers_strict_academic"
      },
      {
        "npcIdHint": "teacher_encouraging",
        "openingDialogue": [
          {
            "speaker": "班主任",
            "text": "唔使驚，今日大家都係第一次返小學。我讀到名，你哋答『到』就可以。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "唔使驚，今日大家都係第一次返小學。我讀到名，你哋答『到』就可以。",
        "playerChoices": [
          {
            "id": "w1_teacher_first_roll_call_encouraging_normal_arrival",
            "text": "正常答到",
            "playerLine": "到。",
            "attitudeId": "clearComply",
            "personalityDelta": {
              "compliant": 1
            },
            "memoryAdd": [
              "w1_teacher_first_roll_call_encouraging_normal_arrival"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師笑了一下，像在說你做到了。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "clearComply",
              "reason": "這個選項是為 老師第一次點名 / encouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_teacher_first_roll_call",
              "variantId": "encouraging",
              "mustMatchEventTitle": "老師第一次點名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師笑了一下，像在說你做到了。"
          },
          {
            "id": "w1_teacher_first_roll_call_encouraging_tiny_voice_nod",
            "text": "先點頭再答",
            "playerLine": "你點了點頭，然後細聲說：「到。」",
            "attitudeId": "shyTry",
            "personalityDelta": {
              "shy": 1
            },
            "memoryAdd": [
              "w1_teacher_first_roll_call_encouraging_tiny_voice_nod"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師沒有催你，只把你的名字勾起來。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "shyTry",
              "reason": "鼓勵型老師會把細聲看成第一日緊張，不會把它讀成不合作。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_teacher_first_roll_call",
              "variantId": "encouraging",
              "mustMatchEventTitle": "老師第一次點名"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "老師沒有催你，只把你的名字勾起來。"
          },
          {
            "id": "w1_teacher_first_roll_call_encouraging_ask_pronunciation",
            "text": "老師讀錯時提醒",
            "playerLine": "老師，我個名係咁讀。",
            "attitudeId": "selfAdvocate",
            "personalityDelta": {
              "selfAdvocacy": 2
            },
            "memoryAdd": [
              "w1_teacher_first_roll_call_encouraging_ask_pronunciation"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師再讀一次，語氣很輕：「多謝你提我。」"
            },
            "statusDelta": {
              "理智值": -1,
              "自信": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "selfAdvocate",
              "reason": "這個選項是為 老師第一次點名 / encouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_teacher_first_roll_call",
              "variantId": "encouraging",
              "mustMatchEventTitle": "老師第一次點名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師再讀一次，語氣很輕：「多謝你提我。」"
          },
          {
            "id": "w1_teacher_first_roll_call_encouraging_smile_after_answer",
            "text": "答完偷偷鬆一口氣",
            "playerLine": "到。",
            "attitudeId": "softConnect",
            "personalityDelta": {
              "gentle": 1
            },
            "memoryAdd": [
              "w1_teacher_first_roll_call_encouraging_smile_after_answer"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你放下手，發現點名原來沒有想像中可怕。"
            },
            "statusDelta": {
              "快樂": 1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "warmth",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "softConnect",
              "reason": "這個選項是為 老師第一次點名 / encouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_teacher_first_roll_call",
              "variantId": "encouraging",
              "mustMatchEventTitle": "老師第一次點名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "你放下手，發現點名原來沒有想像中可怕。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "encouraging",
          "npcIdentity": "老師",
          "npcPersonality": "鼓勵型",
          "npcDisplayName": "teacher_encouraging"
        },
        "variantId": "encouraging",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_encouraging_teacher",
        "reactionProfileId": "identity_teacher__pers_encouraging_teacher"
      },
      {
        "npcIdHint": "teacher_fair_observer",
        "openingDialogue": [
          {
            "speaker": "班主任",
            "text": "我今日想先認住大家個名。聽到自己，就答一聲『到』。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "我今日想先認住大家個名。聽到自己，就答一聲『到』。",
        "playerChoices": [
          {
            "id": "w1_teacher_first_roll_call_fairObserver_answer_and_watch",
            "text": "答「到」",
            "playerLine": "到。",
            "attitudeId": "clearObserve",
            "personalityDelta": {
              "observer": 1,
              "compliant": 1
            },
            "memoryAdd": [
              "w1_teacher_first_roll_call_fairObserver_answer_and_watch"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師看了你一眼，在名單上做了記號。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "公平觀察型",
              "attitudeReadAs": "clearObserve",
              "reason": "這個選項是為 老師第一次點名 / fairObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_teacher_first_roll_call",
              "variantId": "fairObserver",
              "mustMatchEventTitle": "老師第一次點名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師看了你一眼，在名單上做了記號。"
          },
          {
            "id": "w1_teacher_first_roll_call_fairObserver_quiet_answer_seen",
            "text": "細聲答",
            "playerLine": "到。",
            "attitudeId": "controlledShy",
            "personalityDelta": {
              "observer": 1,
              "shy": 1
            },
            "memoryAdd": [
              "w1_teacher_first_roll_call_fairObserver_quiet_answer_seen"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師聽到後點點頭，沒有把你推出來再答一次。"
            },
            "statusDelta": {
              "理智值": 1,
              "自信": 1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "公平觀察型",
              "attitudeReadAs": "controlledShy",
              "reason": "這個選項是為 老師第一次點名 / fairObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_teacher_first_roll_call",
              "variantId": "fairObserver",
              "mustMatchEventTitle": "老師第一次點名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師聽到後點點頭，沒有把你推出來再答一次。"
          },
          {
            "id": "w1_teacher_first_roll_call_fairObserver_wait_turn_carefully",
            "text": "看住老師手上的名單",
            "playerLine": "你一直望住名單，等她讀到你。",
            "attitudeId": "carefulTiming",
            "personalityDelta": {
              "cautious": 1,
              "considerate": 1
            },
            "memoryAdd": [
              "w1_teacher_first_roll_call_fairObserver_wait_turn_carefully"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有漏掉，但整個人有點繃緊。"
            },
            "statusDelta": {
              "理智值": 1,
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "公平觀察型",
              "attitudeReadAs": "carefulTiming",
              "reason": "這個選項是為 老師第一次點名 / fairObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_teacher_first_roll_call",
              "variantId": "fairObserver",
              "mustMatchEventTitle": "老師第一次點名"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "你沒有漏掉，但整個人有點繃緊。"
          },
          {
            "id": "w1_teacher_first_roll_call_fairObserver_forget_then_raise_hand",
            "text": "慢了才答",
            "playerLine": "到。",
            "attitudeId": "repairMistake",
            "personalityDelta": {
              "accountable": 1
            },
            "memoryAdd": [
              "w1_teacher_first_roll_call_fairObserver_forget_then_raise_hand"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師沒有批評，只像在心裡記下你比較需要時間。"
            },
            "statusDelta": {
              "理智值": -1,
              "自信": 1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "公平觀察型",
              "attitudeReadAs": "repairMistake",
              "reason": "這個選項是為 老師第一次點名 / fairObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_teacher_first_roll_call",
              "variantId": "fairObserver",
              "mustMatchEventTitle": "老師第一次點名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師沒有批評，只像在心裡記下你比較需要時間。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "fairObserver",
          "npcIdentity": "老師",
          "npcPersonality": "公平觀察型",
          "npcDisplayName": "teacher_fair_observer"
        },
        "variantId": "fairObserver",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_fair_observer",
        "reactionProfileId": "identity_teacher__pers_fair_observer"
      },
      {
        "npcIdHint": "teacher_caring",
        "openingDialogue": [
          {
            "speaker": "班主任",
            "text": "如果今日未習慣，可以點頭，我都會見到。"
          },
          {
            "speaker": "班主任",
            "text": "不過如果答『到』，我會更容易記住你。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "如果今日未習慣，可以點頭，我都會見到。 不過如果答『到』，我會更容易記住你。",
        "playerChoices": [
          {
            "id": "w1_teacher_first_roll_call_caring_soft_arrival",
            "text": "細聲但努力答",
            "playerLine": "到。",
            "attitudeId": "shyTry",
            "personalityDelta": {
              "shy": 1,
              "compliant": 1
            },
            "memoryAdd": [
              "w1_teacher_first_roll_call_caring_soft_arrival"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師用很輕的眼神鼓勵你，像是知道你已經試了。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "warmth",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "關顧型",
              "attitudeReadAs": "shyTry",
              "reason": "關顧型老師會特別留意細聲或緊張學生，細聲答到反而可能讓她知道你需要溫和支持。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_teacher_first_roll_call",
              "variantId": "caring",
              "mustMatchEventTitle": "老師第一次點名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師用很輕的眼神鼓勵你，像是知道你已經試了。"
          },
          {
            "id": "w1_teacher_first_roll_call_caring_clear_arrival_relief",
            "text": "先點頭",
            "playerLine": "你先點點頭，再小聲補一句：「到。」",
            "attitudeId": "braveTry",
            "personalityDelta": {
              "brave": 1
            },
            "memoryAdd": [
              "w1_teacher_first_roll_call_caring_clear_arrival_relief"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師沒有追問，只溫和地繼續點名。"
            },
            "statusDelta": {
              "理智值": -1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "關顧型",
              "attitudeReadAs": "braveTry",
              "reason": "這個選項是為 老師第一次點名 / caring 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_teacher_first_roll_call",
              "variantId": "caring",
              "mustMatchEventTitle": "老師第一次點名"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "老師沒有追問，只溫和地繼續點名。"
          },
          {
            "id": "w1_teacher_first_roll_call_caring_nod_if_nervous",
            "text": "講自己驚",
            "playerLine": "我有少少驚。",
            "attitudeId": "nonverbalTry",
            "personalityDelta": {
              "shy": 2
            },
            "memoryAdd": [
              "w1_teacher_first_roll_call_caring_nod_if_nervous"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師放慢聲音說：「唔緊要，你已經答咗。」"
            },
            "statusDelta": {
              "理智值": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "warmth",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "關顧型",
              "attitudeReadAs": "nonverbalTry",
              "reason": "這個選項是為 老師第一次點名 / caring 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_teacher_first_roll_call",
              "variantId": "caring",
              "mustMatchEventTitle": "老師第一次點名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師放慢聲音說：「唔緊要，你已經答咗。」"
          },
          {
            "id": "w1_teacher_first_roll_call_caring_tell_after_class",
            "text": "只是點頭",
            "playerLine": "你抬頭點了點頭。",
            "attitudeId": "seekSupportLater",
            "personalityDelta": {
              "helpSeeking": 1,
              "selfAware": 1
            },
            "memoryAdd": [
              "w1_teacher_first_roll_call_caring_tell_after_class"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師看見了，但在名字旁邊多看了一眼，像在想之後要不要留意你。"
            },
            "statusDelta": {
              "理智值": 2,
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "關顧型",
              "attitudeReadAs": "seekSupportLater",
              "reason": "這個選項是為 老師第一次點名 / caring 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_teacher_first_roll_call",
              "variantId": "caring",
              "mustMatchEventTitle": "老師第一次點名"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "老師看見了，但在名字旁邊多看了一眼，像在想之後要不要留意你。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "caring",
          "npcIdentity": "老師",
          "npcPersonality": "關顧型",
          "npcDisplayName": "teacher_caring"
        },
        "variantId": "caring",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_caring_teacher",
        "reactionProfileId": "identity_teacher__pers_caring_teacher"
      }
    ],
    "schemaVersion": "opening_event_pool_v5_1_balanced_event_specific_choices",
    "eventScheduling": {
      "baseWeight": 70,
      "weekRange": [
        1,
        1
      ],
      "conditions": [],
      "exclusiveGroup": null,
      "onceOnly": true,
      "cooldownWeeks": 999,
      "prerequisiteMemory": [],
      "sourceChannel": "classroom",
      "involvementRole": "direct_actor"
    },
    "eventChoiceDesignRule": "playerChoices must be authored for this exact event+variant; personalityId may alter tone and point interpretation but must not inject a generic personality choice set."
  },
  {
    "id": "w1_dismissal_line_confusion",
    "weekPool": "W1_opening_adaptation",
    "title": "放學隊伍有點混亂",
    "sceneType": "school_order_navigation",
    "coreSituation": "放學時不同隊伍排在走廊，玩家未熟悉流程，需要決定怎樣處理混亂。",
    "followUpHooks": [
      "school_order_memory",
      "w6_teacher_observation"
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "pointDesign": {
      "version": "target_aware_integer_delta_v5_1_balanced",
      "mainStatusKeys": [
        "快樂",
        "理智值",
        "體力",
        "學業",
        "社交",
        "創意",
        "家庭關係",
        "自信"
      ],
      "skillKeys": [
        "繪畫",
        "鋼琴",
        "朗誦",
        "游泳",
        "足球",
        "編程",
        "閱讀",
        "班務服務"
      ],
      "note": "分數由玩家 attitudeId、舊 effects、事件題材，以及當前 NPC 身份 / 性格共同決定；同一個選項在不同 NPC 面前可以有不同結果。",
      "choiceTextRule": "choice.text is player-facing and must describe a concrete action or spoken line that answers this event dialogue; do not show abstract attitude labels.",
      "noCrossEventGenericChoiceRule": "The same choice.text should not be reused across unrelated event ids.",
      "statusBalanceRule": "每個 variant 通常只有 1–2 個選項會推進核心狀態；其餘選項偏向保留、錯過、休息、觀察或付出代價。statusDelta 是方向，不是每次點擊獎勵。",
      "skillSemantics": "skillExpDelta 是技能經驗值，不是技能等級。",
      "previewRule": "dialogueTriggerPreview is generated from openingDialogue and should not be hand-authored."
    },
    "fallbackChoices": [],
    "variants": [
      {
        "npcIdHint": "senior_student_friendly",
        "openingDialogue": [
          {
            "speaker": "芷悠",
            "text": "你睇手冊封面，有班別㗎。我幫你睇吓？"
          },
          {
            "speaker": "芷悠",
            "text": "我以前小一都試過排錯隊，唔係大件事。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "你睇手冊封面，有班別㗎。我幫你睇吓？ 我以前小一都試過排錯隊，唔係大件事。",
        "playerChoices": [
          {
            "id": "w1_dismissal_line_confusion_seniorFriendly_let_senior_check_handbook",
            "text": "把手冊遞給他",
            "playerLine": "我搵唔到1A條隊。",
            "attitudeId": "acceptHelp",
            "personalityDelta": {
              "helpSeeking": 2
            },
            "memoryAdd": [
              "w1_dismissal_line_confusion_seniorFriendly_let_senior_check_handbook"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "師兄／師姐幫你指了方向，還叫你跟住前面兩個同班同學。"
            },
            "statusDelta": {
              "理智值": 2,
              "體力": -1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_senior_student",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "師兄姐印象"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "高年級學生",
              "npcPersonality": "溫和支持型",
              "attitudeReadAs": "acceptHelp",
              "reason": "這個選項是為 放學隊伍有點混亂 / seniorFriendly 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_dismissal_line_confusion",
              "variantId": "seniorFriendly",
              "mustMatchEventTitle": "放學隊伍有點混亂"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "師兄／師姐幫你指了方向，還叫你跟住前面兩個同班同學。"
          },
          {
            "id": "w1_dismissal_line_confusion_seniorFriendly_ask_how_to_find_next_time",
            "text": "問他怎樣記",
            "playerLine": "你點知排邊條㗎？",
            "attitudeId": "learnProcedure",
            "personalityDelta": {
              "helpSeeking": 1,
              "selfManage": 1
            },
            "memoryAdd": [
              "w1_dismissal_line_confusion_seniorFriendly_ask_how_to_find_next_time"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "他教你看班牌和老師的位置，像把一個小秘密告訴你。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_senior_student",
                "dimension": "respect",
                "amount": 1,
                "legacyKey": "師兄姐印象"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "高年級學生",
              "npcPersonality": "溫和支持型",
              "attitudeReadAs": "learnProcedure",
              "reason": "這個選項是為 放學隊伍有點混亂 / seniorFriendly 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_dismissal_line_confusion",
              "variantId": "seniorFriendly",
              "mustMatchEventTitle": "放學隊伍有點混亂"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "他教你看班牌和老師的位置，像把一個小秘密告訴你。"
          },
          {
            "id": "w1_dismissal_line_confusion_seniorFriendly_thank_and_walk_self",
            "text": "自己先指一指",
            "playerLine": "係咪嗰邊呀？",
            "attitudeId": "selfManage",
            "personalityDelta": {
              "independent": 1,
              "polite": 1
            },
            "memoryAdd": [
              "w1_dismissal_line_confusion_seniorFriendly_thank_and_walk_self"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有完全靠別人，也沒有自己亂撞。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "自信": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_senior_student",
                "dimension": "respect",
                "amount": 1,
                "legacyKey": "師兄姐印象"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "高年級學生",
              "npcPersonality": "溫和支持型",
              "attitudeReadAs": "selfManage",
              "reason": "這個選項是為 放學隊伍有點混亂 / seniorFriendly 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_dismissal_line_confusion",
              "variantId": "seniorFriendly",
              "mustMatchEventTitle": "放學隊伍有點混亂"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "你沒有完全靠別人，也沒有自己亂撞。"
          },
          {
            "id": "w1_dismissal_line_confusion_seniorFriendly_too_shy_show_badge",
            "text": "跟住他指的方向走",
            "playerLine": "你點頭，抱緊書包走到隊伍尾。",
            "attitudeId": "shyAsk",
            "personalityDelta": {
              "shy": 2
            },
            "memoryAdd": [
              "w1_dismissal_line_confusion_seniorFriendly_too_shy_show_badge"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你終於站進隊裡，放學走廊沒有剛才那麼可怕。"
            },
            "statusDelta": {
              "理智值": 1,
              "自信": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_senior_student",
                "dimension": "warmth",
                "amount": 1,
                "legacyKey": "師兄姐印象"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "高年級學生",
              "npcPersonality": "溫和支持型",
              "attitudeReadAs": "shyAsk",
              "reason": "這個選項是為 放學隊伍有點混亂 / seniorFriendly 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_dismissal_line_confusion",
              "variantId": "seniorFriendly",
              "mustMatchEventTitle": "放學隊伍有點混亂"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "你終於站進隊裡，放學走廊沒有剛才那麼可怕。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "seniorFriendly",
          "npcIdentity": "高年級學生",
          "npcPersonality": "溫和支持型",
          "npcDisplayName": "senior_student_friendly"
        },
        "variantId": "seniorFriendly",
        "variantType": "npc",
        "identityTypeId": "identity_senior_student",
        "personalityId": "pers_gentle_support",
        "reactionProfileId": "identity_senior_student__pers_gentle_support"
      },
      {
        "npcIdHint": "senior_student_prefect_strict",
        "openingDialogue": [
          {
            "speaker": "俊朗",
            "text": "排隊要快，後面仲有人。"
          },
          {
            "speaker": "俊朗",
            "text": "你唔知就問，唔好企喺路中間。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "排隊要快，後面仲有人。 你唔知就問，唔好企喺路中間。",
        "playerChoices": [
          {
            "id": "w1_dismissal_line_confusion_seniorPrefectStrict_move_quickly_to_queue",
            "text": "直接問位置",
            "playerLine": "我係1A，應該去邊？",
            "attitudeId": "followRule",
            "personalityDelta": {
              "compliant": 2
            },
            "memoryAdd": [
              "w1_dismissal_line_confusion_seniorPrefectStrict_move_quickly_to_queue"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "風紀指得很快，你要小跑兩步才跟上他的指示。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_senior_student",
                "dimension": "order_impression",
                "amount": 1,
                "legacyKey": "師兄姐印象"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "高年級學生",
              "npcPersonality": "重規矩型",
              "attitudeReadAs": "followRule",
              "reason": "這個選項是為 放學隊伍有點混亂 / seniorPrefectStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_dismissal_line_confusion",
              "variantId": "seniorPrefectStrict",
              "mustMatchEventTitle": "放學隊伍有點混亂"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "風紀指得很快，你要小跑兩步才跟上他的指示。"
          },
          {
            "id": "w1_dismissal_line_confusion_seniorPrefectStrict_ask_prefect_class_line",
            "text": "先讓路",
            "playerLine": "你退到牆邊，讓後面的人先過。",
            "attitudeId": "askUnderPressure",
            "personalityDelta": {
              "helpSeeking": 1,
              "brave": 1
            },
            "memoryAdd": [
              "w1_dismissal_line_confusion_seniorPrefectStrict_ask_prefect_class_line"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "風紀沒有再催你，但你仍然有點緊張。"
            },
            "statusDelta": {
              "理智值": -1,
              "體力": -1,
              "自信": 1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "高年級學生",
              "npcPersonality": "重規矩型",
              "attitudeReadAs": "askUnderPressure",
              "reason": "這個選項是為 放學隊伍有點混亂 / seniorPrefectStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_dismissal_line_confusion",
              "variantId": "seniorPrefectStrict",
              "mustMatchEventTitle": "放學隊伍有點混亂"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "風紀沒有再催你，但你仍然有點緊張。"
          },
          {
            "id": "w1_dismissal_line_confusion_seniorPrefectStrict_look_for_teacher_instead",
            "text": "找同班同學",
            "playerLine": "你看見一個同班同學，趕快跟到他後面。",
            "attitudeId": "avoidButSolve",
            "personalityDelta": {
              "avoidant": 1,
              "observer": 1
            },
            "memoryAdd": [
              "w1_dismissal_line_confusion_seniorPrefectStrict_look_for_teacher_instead"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你跟上了隊伍，但心裡記住下次要早點看班牌。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_senior_student",
                "dimension": "order_impression",
                "amount": -1,
                "legacyKey": "師兄姐印象"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "高年級學生",
              "npcPersonality": "重規矩型",
              "attitudeReadAs": "avoidButSolve",
              "reason": "這個選項是為 放學隊伍有點混亂 / seniorPrefectStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_dismissal_line_confusion",
              "variantId": "seniorPrefectStrict",
              "mustMatchEventTitle": "放學隊伍有點混亂"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "你跟上了隊伍，但心裡記住下次要早點看班牌。"
          },
          {
            "id": "w1_dismissal_line_confusion_seniorPrefectStrict_follow_wrong_peer",
            "text": "小聲說不懂",
            "playerLine": "我唔知呀……",
            "attitudeId": "panicFollow",
            "personalityDelta": {
              "avoidant": 1
            },
            "memoryAdd": [
              "w1_dismissal_line_confusion_seniorPrefectStrict_follow_wrong_peer"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "風紀皺了一下眉，但還是叫你看手冊封面。"
            },
            "statusDelta": {
              "體力": -1,
              "自信": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_senior_student",
                "dimension": "order_impression",
                "amount": -1,
                "legacyKey": "師兄姐印象"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "高年級學生",
              "npcPersonality": "重規矩型",
              "attitudeReadAs": "panicFollow",
              "reason": "這個選項是為 放學隊伍有點混亂 / seniorPrefectStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_dismissal_line_confusion",
              "variantId": "seniorPrefectStrict",
              "mustMatchEventTitle": "放學隊伍有點混亂"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "風紀皺了一下眉，但還是叫你看手冊封面。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "seniorPrefectStrict",
          "npcIdentity": "高年級學生",
          "npcPersonality": "重規矩型",
          "npcDisplayName": "senior_student_prefect_strict"
        },
        "variantId": "seniorPrefectStrict",
        "variantType": "npc",
        "identityTypeId": "identity_senior_student",
        "personalityId": "pers_rule_focused",
        "reactionProfileId": "identity_senior_student__pers_rule_focused"
      }
    ],
    "schemaVersion": "opening_event_pool_v5_1_balanced_event_specific_choices",
    "eventScheduling": {
      "baseWeight": 70,
      "weekRange": [
        1,
        1
      ],
      "conditions": [],
      "exclusiveGroup": null,
      "onceOnly": true,
      "cooldownWeeks": 999,
      "prerequisiteMemory": [],
      "sourceChannel": "corridor_dismissal_line",
      "involvementRole": "direct_actor"
    },
    "eventChoiceDesignRule": "playerChoices must be authored for this exact event+variant; personalityId may alter tone and point interpretation but must not inject a generic personality choice set."
  },
  {
    "id": "w1_family_asks_first_day",
    "weekPool": "W1_opening_adaptation",
    "title": "家長問開學第一日點樣",
    "sceneType": "home_first_week_mood",
    "coreSituation": "放學回家後，家庭長輩問玩家第一日感覺，重點是形成家庭第一週氣氛，不是審問。",
    "followUpHooks": [
      "family_first_week_mood",
      "w2_handbook_signature"
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "pointDesign": {
      "version": "target_aware_integer_delta_v5_1_balanced",
      "mainStatusKeys": [
        "快樂",
        "理智值",
        "體力",
        "學業",
        "社交",
        "創意",
        "家庭關係",
        "自信"
      ],
      "skillKeys": [
        "繪畫",
        "鋼琴",
        "朗誦",
        "游泳",
        "足球",
        "編程",
        "閱讀",
        "班務服務"
      ],
      "note": "分數由玩家 attitudeId、舊 effects、事件題材，以及當前 NPC 身份 / 性格共同決定；同一個選項在不同 NPC 面前可以有不同結果。",
      "choiceTextRule": "choice.text is player-facing and must describe a concrete action or spoken line that answers this event dialogue; do not show abstract attitude labels.",
      "noCrossEventGenericChoiceRule": "The same choice.text should not be reused across unrelated event ids.",
      "statusBalanceRule": "每個 variant 通常只有 1–2 個選項會推進核心狀態；其餘選項偏向保留、錯過、休息、觀察或付出代價。statusDelta 是方向，不是每次點擊獎勵。",
      "skillSemantics": "skillExpDelta 是技能經驗值，不是技能等級。",
      "previewRule": "dialogueTriggerPreview is generated from openingDialogue and should not be hand-authored."
    },
    "fallbackChoices": [
      {
        "id": "w1_family_asks_first_day_gentleListener_fallback_ask",
        "text": "問清楚這件事和自己現在要做甚麼。",
        "playerLine": "問清楚這件事和自己現在要做甚麼。",
        "attitudeId": "askForClarification",
        "personalityDelta": {
          "helpSeeking": 1
        },
        "memoryAdd": [
          "w1_family_asks_first_day_gentleListener_fallback_ask"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你用提問避免誤會，這是只屬於當前事件的備用選項。"
        },
        "statusDelta": {
          "理智值": 1,
          "體力": -1,
          "自信": 1
        },
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "家長/家庭長輩",
          "npcPersonality": "溫和聆聽型",
          "attitudeReadAs": "askForClarification",
          "reason": "這個選項是為 家長問開學第一日點樣 / gentleListener 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w1_family_asks_first_day",
          "variantId": "gentleListener",
          "mustMatchEventTitle": "家長問開學第一日點樣"
        },
        "skillExpDelta": {}
      },
      {
        "id": "w1_family_asks_first_day_gentleListener_fallback_observe",
        "text": "先觀察這個情境，不立刻答應或拒絕。",
        "playerLine": "先觀察這個情境，不立刻答應或拒絕。",
        "attitudeId": "observeFirst",
        "personalityDelta": {
          "observer": 1
        },
        "memoryAdd": [
          "w1_family_asks_first_day_gentleListener_fallback_observe"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你暫時保留行動，讓自己多一點時間。"
        },
        "statusDelta": {},
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "家長/家庭長輩",
          "npcPersonality": "溫和聆聽型",
          "attitudeReadAs": "observeFirst",
          "reason": "這個選項是為 家長問開學第一日點樣 / gentleListener 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w1_family_asks_first_day",
          "variantId": "gentleListener",
          "mustMatchEventTitle": "家長問開學第一日點樣"
        },
        "skillExpDelta": {}
      }
    ],
    "variants": [
      {
        "npcIdHint": "family_elder_gentle_listener",
        "openingDialogue": [
          {
            "speaker": "家長",
            "text": "今日第一日，攰唔攰？"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "今日第一日，攰唔攰？",
        "playerChoices": [
          {
            "id": "w1_family_asks_first_day_gentleListener_talk_seat_classmate",
            "text": "講旁邊同學",
            "playerLine": "我隔離位有同我講嘢。",
            "attitudeId": "shareFeeling",
            "personalityDelta": {
              "expressive": 1
            },
            "memoryAdd": [
              "w1_family_asks_first_day_gentleListener_talk_seat_classmate"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長聽著，只問：「咁你覺得佢點呀？」"
            },
            "statusDelta": {
              "體力": -1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "溫和聆聽型",
              "attitudeReadAs": "shareFeeling",
              "reason": "這個選項是為 家長問開學第一日點樣 / gentleListener 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_family_asks_first_day",
              "variantId": "gentleListener",
              "mustMatchEventTitle": "家長問開學第一日點樣"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長聽著，只問：「咁你覺得佢點呀？」"
          },
          {
            "id": "w1_family_asks_first_day_gentleListener_say_tired_first",
            "text": "講點名",
            "playerLine": "老師點名嗰陣，我有少少驚。",
            "attitudeId": "honestTired",
            "personalityDelta": {
              "boundary": 1,
              "selfAware": 1
            },
            "memoryAdd": [
              "w1_family_asks_first_day_gentleListener_say_tired_first"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長摸摸你的頭，說第一日緊張很正常。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "溫和聆聽型",
              "attitudeReadAs": "honestTired",
              "reason": "這個選項是為 家長問開學第一日點樣 / gentleListener 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_family_asks_first_day",
              "variantId": "gentleListener",
              "mustMatchEventTitle": "家長問開學第一日點樣"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長摸摸你的頭，說第一日緊張很正常。"
          },
          {
            "id": "w1_family_asks_first_day_gentleListener_talk_roll_call_nervous",
            "text": "說很累",
            "playerLine": "我好攰，可唔可以遲啲講？",
            "attitudeId": "shareVulnerability",
            "personalityDelta": {
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w1_family_asks_first_day_gentleListener_talk_roll_call_nervous"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長沒有逼你，叫你先飲水換衫。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "家庭關係": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "溫和聆聽型",
              "attitudeReadAs": "shareVulnerability",
              "reason": "這個選項是為 家長問開學第一日點樣 / gentleListener 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_family_asks_first_day",
              "variantId": "gentleListener",
              "mustMatchEventTitle": "家長問開學第一日點樣"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長沒有逼你，叫你先飲水換衫。"
          },
          {
            "id": "w1_family_asks_first_day_gentleListener_ask_tomorrow_morning",
            "text": "問明天",
            "playerLine": "係咪日日都要咁早起身？",
            "attitudeId": "planAhead",
            "personalityDelta": {
              "organized": 1,
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w1_family_asks_first_day_gentleListener_ask_tomorrow_morning"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長笑了一下，說會一起慢慢習慣。"
            },
            "statusDelta": {
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "溫和聆聽型",
              "attitudeReadAs": "planAhead",
              "reason": "這個選項是為 家長問開學第一日點樣 / gentleListener 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_family_asks_first_day",
              "variantId": "gentleListener",
              "mustMatchEventTitle": "家長問開學第一日點樣"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長笑了一下，說會一起慢慢習慣。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "gentleListener",
          "npcIdentity": "家長/家庭長輩",
          "npcPersonality": "溫和聆聽型",
          "npcDisplayName": "family_elder_gentle_listener"
        },
        "variantId": "gentleListener",
        "variantType": "npc",
        "identityTypeId": "identity_family_elder",
        "personalityId": "pers_gentle_listener",
        "reactionProfileId": "identity_family_elder__pers_gentle_listener"
      },
      {
        "npcIdHint": "family_elder_cautious_planner",
        "openingDialogue": [
          {
            "speaker": "家長",
            "text": "老師講左咩？功課多唔多？聽日要帶咩？"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "老師講左咩？功課多唔多？聽日要帶咩？",
        "playerChoices": [
          {
            "id": "w1_family_asks_first_day_cautiousPlanner_show_handbook_items",
            "text": "先拿手冊",
            "playerLine": "老師話要睇手冊喺。",
            "attitudeId": "organizedShare",
            "personalityDelta": {
              "organized": 2,
              "compliant": 1
            },
            "memoryAdd": [
              "w1_family_asks_first_day_cautiousPlanner_show_handbook_items"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長立刻翻開。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "謹慎安排型",
              "attitudeReadAs": "organizedShare",
              "reason": "這個選項是為 家長問開學第一日點樣 / cautiousPlanner 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_family_asks_first_day",
              "variantId": "cautiousPlanner",
              "mustMatchEventTitle": "家長問開學第一日點樣"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長立刻翻開。"
          },
          {
            "id": "w1_family_asks_first_day_cautiousPlanner_ask_morning_schedule",
            "text": "講點名和排隊",
            "playerLine": "老師有點名。放學我差啲排錯。",
            "attitudeId": "planAhead",
            "personalityDelta": {
              "helpSeeking": 1,
              "organized": 1
            },
            "memoryAdd": [
              "w1_family_asks_first_day_cautiousPlanner_ask_morning_schedule"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長開始幫你想明天要怎樣記班牌。"
            },
            "statusDelta": {
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "謹慎安排型",
              "attitudeReadAs": "planAhead",
              "reason": "這個選項是為 家長問開學第一日點樣 / cautiousPlanner 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_family_asks_first_day",
              "variantId": "cautiousPlanner",
              "mustMatchEventTitle": "家長問開學第一日點樣"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長開始幫你想明天要怎樣記班牌。"
          },
          {
            "id": "w1_family_asks_first_day_cautiousPlanner_only_say_tired",
            "text": "說自己很累",
            "playerLine": "我而家好攰，可唔可以食完飯先講？",
            "attitudeId": "honestTired",
            "personalityDelta": {
              "boundary": 1,
              "avoidant": 1
            },
            "memoryAdd": [
              "w1_family_asks_first_day_cautiousPlanner_only_say_tired"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長有點想追問，但看你真的累，暫時收住。"
            },
            "statusDelta": {
              "理智值": -1,
              "體力": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": -1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "謹慎安排型",
              "attitudeReadAs": "honestTired",
              "reason": "這個選項是為 家長問開學第一日點樣 / cautiousPlanner 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_family_asks_first_day",
              "variantId": "cautiousPlanner",
              "mustMatchEventTitle": "家長問開學第一日點樣"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長有點想追問，但看你真的累，暫時收住。"
          },
          {
            "id": "w1_family_asks_first_day_cautiousPlanner_talk_teacher_rollcall",
            "text": "問明天要不要更早",
            "playerLine": "係咪日日都要咁早起身？",
            "attitudeId": "reportSchool",
            "personalityDelta": {
              "compliant": 1
            },
            "memoryAdd": [
              "w1_family_asks_first_day_cautiousPlanner_talk_teacher_rollcall"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長開始講今晚要早啲瞓。"
            },
            "statusDelta": {
              "體力": -1,
              "學業": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "謹慎安排型",
              "attitudeReadAs": "reportSchool",
              "reason": "這個選項是為 家長問開學第一日點樣 / cautiousPlanner 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_family_asks_first_day",
              "variantId": "cautiousPlanner",
              "mustMatchEventTitle": "家長問開學第一日點樣"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長開始講今晚要早啲瞓。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "cautiousPlanner",
          "npcIdentity": "家長/家庭長輩",
          "npcPersonality": "謹慎安排型",
          "npcDisplayName": "family_elder_cautious_planner"
        },
        "variantId": "cautiousPlanner",
        "variantType": "npc",
        "identityTypeId": "identity_family_elder",
        "personalityId": "pers_cautious_planner",
        "reactionProfileId": "identity_family_elder__pers_cautious_planner"
      },
      {
        "npcIdHint": "family_elder_face_expectation",
        "openingDialogue": [
          {
            "speaker": "家長",
            "text": "老師有冇讚你？有冇識到好叻嘅同學？"
          },
          {
            "speaker": "家長",
            "text": "第一印象好重要㗎。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "老師有冇讚你？有冇識到好叻嘅同學？ 第一印象好重要㗎。",
        "playerChoices": [
          {
            "id": "w1_family_asks_first_day_faceExpectation_mention_not_only_praise",
            "text": "講有同學跟你說話",
            "playerLine": "有個同學同我一齊排隊，唔知算唔算朋友。",
            "attitudeId": "honestSelfWorth",
            "personalityDelta": {
              "selfAdvocacy": 1,
              "boundary": 1
            },
            "memoryAdd": [
              "w1_family_asks_first_day_faceExpectation_mention_not_only_praise"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長聽見「同學」兩個字就很留意，問對方乖不乖。"
            },
            "statusDelta": {
              "理智值": 1,
              "家庭關係": -1,
              "自信": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": -1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "面子期望型",
              "attitudeReadAs": "honestSelfWorth",
              "reason": "這個選項是為 家長問開學第一日點樣 / faceExpectation 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_family_asks_first_day",
              "variantId": "faceExpectation",
              "mustMatchEventTitle": "家長問開學第一日點樣"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長聽見「同學」兩個字就很留意，問對方乖不乖。"
          },
          {
            "id": "w1_family_asks_first_day_faceExpectation_talk_good_classmate",
            "text": "講老師點名",
            "playerLine": "我有應老師到。",
            "attitudeId": "shareSocialWin",
            "personalityDelta": {
              "expressive": 1
            },
            "memoryAdd": [
              "w1_family_asks_first_day_faceExpectation_talk_good_classmate"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長點頭說：「答得清楚就好。」你感覺自己像交了一件小功課。"
            },
            "statusDelta": {
              "理智值": -1,
              "社交": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "面子期望型",
              "attitudeReadAs": "shareSocialWin",
              "reason": "這個選項是為 家長問開學第一日點樣 / faceExpectation 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_family_asks_first_day",
              "variantId": "faceExpectation",
              "mustMatchEventTitle": "家長問開學第一日點樣"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長點頭說：「答得清楚就好。」你感覺自己像交了一件小功課。"
          },
          {
            "id": "w1_family_asks_first_day_faceExpectation_avoid_top_student_topic",
            "text": "不想講太多",
            "playerLine": "今日好多嘢，我唔知點講。",
            "attitudeId": "softBoundary",
            "personalityDelta": {
              "boundary": 1,
              "observer": 1
            },
            "memoryAdd": [
              "w1_family_asks_first_day_faceExpectation_avoid_top_student_topic"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長有點失望，但沒有再追太緊。"
            },
            "statusDelta": {
              "體力": 1,
              "家庭關係": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": -1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "面子期望型",
              "attitudeReadAs": "softBoundary",
              "reason": "這個選項是為 家長問開學第一日點樣 / faceExpectation 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_family_asks_first_day",
              "variantId": "faceExpectation",
              "mustMatchEventTitle": "家長問開學第一日點樣"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長有點失望，但沒有再追太緊。"
          },
          {
            "id": "w1_family_asks_first_day_faceExpectation_ask_praise_meaning",
            "text": "問明天可否慢慢來",
            "playerLine": "我可唔可以慢慢嚟？",
            "attitudeId": "questionExpectation",
            "personalityDelta": {
              "selfAdvocacy": 2
            },
            "memoryAdd": [
              "w1_family_asks_first_day_faceExpectation_ask_praise_meaning"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長停了一下，說：「可以，但都要有禮貌。」"
            },
            "statusDelta": {
              "理智值": -1,
              "家庭關係": -1,
              "自信": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": -1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "面子期望型",
              "attitudeReadAs": "questionExpectation",
              "reason": "這個選項是為 家長問開學第一日點樣 / faceExpectation 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_family_asks_first_day",
              "variantId": "faceExpectation",
              "mustMatchEventTitle": "家長問開學第一日點樣"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長停了一下，說：「可以，但都要有禮貌。」"
          }
        ],
        "npcPointProfile": {
          "variantKey": "faceExpectation",
          "npcIdentity": "家長/家庭長輩",
          "npcPersonality": "面子期望型",
          "npcDisplayName": "family_elder_face_expectation"
        },
        "variantId": "faceExpectation",
        "variantType": "npc",
        "identityTypeId": "identity_family_elder",
        "personalityId": "pers_face_expectation",
        "reactionProfileId": "identity_family_elder__pers_face_expectation"
      },
      {
        "npcIdHint": "family_elder_relaxed_support",
        "openingDialogue": [
          {
            "speaker": "家長",
            "text": "第一日最緊要識學校嘅路，冇喊到已經好叻。"
          },
          {
            "speaker": "家長",
            "text": "其他慢慢嚟啦，唔使今日就識晒成班。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "第一日最緊要識學校嘅路，冇喊到已經好叻。 其他慢慢嚟啦，唔使今日就識晒成班。",
        "playerChoices": [
          {
            "id": "w1_family_asks_first_day_relaxedSupport_say_found_way_back",
            "text": "講同學",
            "playerLine": "有人帶我點行。",
            "attitudeId": "sharePracticalWin",
            "personalityDelta": {
              "selfManage": 1
            },
            "memoryAdd": [
              "w1_family_asks_first_day_relaxedSupport_say_found_way_back"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長說：「咁幾好，有人帶一帶會安心啲。」"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "寬鬆支持型",
              "attitudeReadAs": "sharePracticalWin",
              "reason": "這個選項是為 家長問開學第一日點樣 / relaxedSupport 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_family_asks_first_day",
              "variantId": "relaxedSupport",
              "mustMatchEventTitle": "家長問開學第一日點樣"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長說：「咁幾好，有人帶一帶會安心啲。」"
          },
          {
            "id": "w1_family_asks_first_day_relaxedSupport_talk_funny_classmate",
            "text": "講老師",
            "playerLine": "老師點名，我有答!",
            "attitudeId": "shareJoy",
            "personalityDelta": {
              "expressive": 1
            },
            "memoryAdd": [
              "w1_family_asks_first_day_relaxedSupport_talk_funny_classmate"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長笑著說：「咁你今日已經完成大任務。」"
            },
            "statusDelta": {
              "快樂": 2,
              "體力": -1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "warmth",
                "amount": 1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "寬鬆支持型",
              "attitudeReadAs": "shareJoy",
              "reason": "這個選項是為 家長問開學第一日點樣 / relaxedSupport 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_family_asks_first_day",
              "variantId": "relaxedSupport",
              "mustMatchEventTitle": "家長問開學第一日點樣"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長笑著說：「咁你今日已經完成大任務。」"
          },
          {
            "id": "w1_family_asks_first_day_relaxedSupport_say_need_rest",
            "text": "說很累",
            "playerLine": "我而家好攰。",
            "attitudeId": "honestTired",
            "personalityDelta": {
              "boundary": 1
            },
            "memoryAdd": [
              "w1_family_asks_first_day_relaxedSupport_say_need_rest"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長讓你休息，沒有把第一日變成問卷。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "寬鬆支持型",
              "attitudeReadAs": "honestTired",
              "reason": "這個選項是為 家長問開學第一日點樣 / relaxedSupport 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_family_asks_first_day",
              "variantId": "relaxedSupport",
              "mustMatchEventTitle": "家長問開學第一日點樣"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長讓你休息，沒有把第一日變成問卷。"
          },
          {
            "id": "w1_family_asks_first_day_relaxedSupport_ask_if_can_try_self",
            "text": "問明天早起",
            "playerLine": "聽日我可唔可以早少少起身？",
            "attitudeId": "askAutonomy",
            "personalityDelta": {
              "independent": 2
            },
            "memoryAdd": [
              "w1_family_asks_first_day_relaxedSupport_ask_if_can_try_self"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長答應幫你調鬧鐘，讓明天少一點慌張。"
            },
            "statusDelta": {
              "理智值": -1,
              "家庭關係": 1,
              "自信": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "寬鬆支持型",
              "attitudeReadAs": "askAutonomy",
              "reason": "這個選項是為 家長問開學第一日點樣 / relaxedSupport 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w1_family_asks_first_day",
              "variantId": "relaxedSupport",
              "mustMatchEventTitle": "家長問開學第一日點樣"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長答應幫你調鬧鐘，讓明天少一點慌張。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "relaxedSupport",
          "npcIdentity": "家長/家庭長輩",
          "npcPersonality": "寬鬆支持型",
          "npcDisplayName": "family_elder_relaxed_support"
        },
        "variantId": "relaxedSupport",
        "variantType": "npc",
        "identityTypeId": "identity_family_elder",
        "personalityId": "pers_relaxed_support",
        "reactionProfileId": "identity_family_elder__pers_relaxed_support"
      }
    ],
    "schemaVersion": "opening_event_pool_v5_1_balanced_event_specific_choices",
    "eventScheduling": {
      "baseWeight": 70,
      "weekRange": [
        1,
        1
      ],
      "conditions": [],
      "exclusiveGroup": null,
      "onceOnly": true,
      "cooldownWeeks": 999,
      "prerequisiteMemory": [],
      "sourceChannel": "home",
      "involvementRole": "direct_actor"
    },
    "eventChoiceDesignRule": "playerChoices must be authored for this exact event+variant; personalityId may alter tone and point interpretation but must not inject a generic personality choice set."
  },
  {
    "id": "w2_handbook_first_signature",
    "weekPool": "W2_daily_order",
    "title": "手冊第一頁要簽名",
    "sceneType": "home_school_routine",
    "coreSituation": "老師提醒手冊要家長簽名，回家後玩家要選擇怎樣處理。忘記可以開後續，但不是重罰。",
    "followUpHooks": [
      "w3_handbook_forgot_followup",
      "school_order_memory"
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "pointDesign": {
      "version": "target_aware_integer_delta_v5_1_balanced",
      "mainStatusKeys": [
        "快樂",
        "理智值",
        "體力",
        "學業",
        "社交",
        "創意",
        "家庭關係",
        "自信"
      ],
      "skillKeys": [
        "繪畫",
        "鋼琴",
        "朗誦",
        "游泳",
        "足球",
        "編程",
        "閱讀",
        "班務服務"
      ],
      "note": "分數由玩家 attitudeId、舊 effects、事件題材，以及當前 NPC 身份 / 性格共同決定；同一個選項在不同 NPC 面前可以有不同結果。",
      "choiceTextRule": "choice.text is player-facing and must describe a concrete action or spoken line that answers this event dialogue; do not show abstract attitude labels.",
      "noCrossEventGenericChoiceRule": "The same choice.text should not be reused across unrelated event ids.",
      "statusBalanceRule": "每個 variant 通常只有 1–2 個選項會推進核心狀態；其餘選項偏向保留、錯過、休息、觀察或付出代價。statusDelta 是方向，不是每次點擊獎勵。",
      "skillSemantics": "skillExpDelta 是技能經驗值，不是技能等級。",
      "previewRule": "dialogueTriggerPreview is generated from openingDialogue and should not be hand-authored."
    },
    "fallbackChoices": [
      {
        "id": "w2_handbook_first_signature_teacherStrictAcademic_fallback_ask",
        "text": "問清楚這件事和自己現在要做甚麼。",
        "playerLine": "問清楚這件事和自己現在要做甚麼。",
        "attitudeId": "askForClarification",
        "personalityDelta": {
          "helpSeeking": 1
        },
        "memoryAdd": [
          "w2_handbook_first_signature_teacherStrictAcademic_fallback_ask"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你用提問避免誤會，這是只屬於當前事件的備用選項。"
        },
        "statusDelta": {
          "理智值": 1,
          "體力": -1,
          "自信": 1
        },
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "嚴格學業型",
          "attitudeReadAs": "askForClarification",
          "reason": "這個選項是為 手冊第一頁要簽名 / teacherStrictAcademic 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w2_handbook_first_signature",
          "variantId": "teacherStrictAcademic",
          "mustMatchEventTitle": "手冊第一頁要簽名"
        },
        "skillExpDelta": {}
      },
      {
        "id": "w2_handbook_first_signature_teacherStrictAcademic_fallback_observe",
        "text": "先觀察這個情境，不立刻答應或拒絕。",
        "playerLine": "先觀察這個情境，不立刻答應或拒絕。",
        "attitudeId": "observeFirst",
        "personalityDelta": {
          "observer": 1
        },
        "memoryAdd": [
          "w2_handbook_first_signature_teacherStrictAcademic_fallback_observe"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你暫時保留行動，讓自己多一點時間。"
        },
        "statusDelta": {},
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "嚴格學業型",
          "attitudeReadAs": "observeFirst",
          "reason": "這個選項是為 手冊第一頁要簽名 / teacherStrictAcademic 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w2_handbook_first_signature",
          "variantId": "teacherStrictAcademic",
          "mustMatchEventTitle": "手冊第一頁要簽名"
        },
        "skillExpDelta": {}
      }
    ],
    "variants": [
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "今晚手冊要屋企人簽名。聽日我會睇。"
          },
          {
            "speaker": "老師",
            "text": "返屋企就攞出嚟，唔好瞓覺先記得。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "今晚手冊要屋企人簽名。聽日我會睇。 返屋企就攞出嚟，唔好瞓覺先記得。",
        "playerChoices": [
          {
            "id": "w2_handbook_first_signature_teacherStrictAcademic_write_reminder_now",
            "text": "答應記住",
            "playerLine": "我一返到屋企就攞出嚟！",
            "attitudeId": "recordTask",
            "personalityDelta": {
              "organized": 2,
              "compliant": 1
            },
            "memoryAdd": [
              "w2_handbook_first_signature_teacherStrictAcademic_write_reminder_now"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把手冊放到書包最外格，像把事情先抓住。"
            },
            "statusDelta": {
              "體力": -1,
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "recordTask",
              "reason": "這個選項是為 手冊第一頁要簽名 / teacherStrictAcademic 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_handbook_first_signature",
              "variantId": "teacherStrictAcademic",
              "mustMatchEventTitle": "手冊第一頁要簽名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "你把手冊放到書包最外格，像把事情先抓住。"
          },
          {
            "id": "w2_handbook_first_signature_teacherStrictAcademic_ask_where_sign",
            "text": "問簽哪格",
            "playerLine": "老師，係唔係簽呢度？",
            "attitudeId": "askForClarification",
            "personalityDelta": {
              "helpSeeking": 1,
              "organized": 1
            },
            "memoryAdd": [
              "w2_handbook_first_signature_teacherStrictAcademic_ask_where_sign"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師指給你看，語氣嚴格，但有講清楚。"
            },
            "statusDelta": {
              "理智值": 2,
              "體力": -1,
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "askForClarification",
              "reason": "這個選項是為 手冊第一頁要簽名 / teacherStrictAcademic 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_handbook_first_signature",
              "variantId": "teacherStrictAcademic",
              "mustMatchEventTitle": "手冊第一頁要簽名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師指給你看，語氣嚴格，但有講清楚。"
          },
          {
            "id": "w2_handbook_first_signature_teacherStrictAcademic_put_front_pocket",
            "text": "怕忘記",
            "playerLine": "如果我唔記得點算？",
            "attitudeId": "selfManage",
            "personalityDelta": {
              "organized": 2
            },
            "memoryAdd": [
              "w2_handbook_first_signature_teacherStrictAcademic_put_front_pocket"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說：「所以而家放好，返去第一件事做。」"
            },
            "statusDelta": {
              "理智值": 1,
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "selfManage",
              "reason": "這個選項是為 手冊第一頁要簽名 / teacherStrictAcademic 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_handbook_first_signature",
              "variantId": "teacherStrictAcademic",
              "mustMatchEventTitle": "手冊第一頁要簽名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師說：「所以而家放好，返去第一件事做。」"
          },
          {
            "id": "w2_handbook_first_signature_teacherStrictAcademic_think_later",
            "text": "暫時放進書包",
            "playerLine": "你把手冊塞回書包，想著回家再拿。",
            "attitudeId": "delayTask",
            "personalityDelta": {
              "avoidant": 1
            },
            "memoryAdd": [
              "w2_handbook_first_signature_teacherStrictAcademic_think_later"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "事情沒有即時解決，只是被你帶回家。"
            },
            "statusDelta": {
              "理智值": -1,
              "體力": 1,
              "學業": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": -1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "delayTask",
              "reason": "這個選項是為 手冊第一頁要簽名 / teacherStrictAcademic 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_handbook_first_signature",
              "variantId": "teacherStrictAcademic",
              "mustMatchEventTitle": "手冊第一頁要簽名"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "事情沒有即時解決，只是被你帶回家。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "teacherStrictAcademic",
          "npcIdentity": "老師",
          "npcPersonality": "嚴格學業型",
          "npcDisplayName": "teacherStrictAcademic"
        },
        "variantId": "teacherStrictAcademic",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_strict_academic",
        "reactionProfileId": "identity_teacher__pers_strict_academic"
      },
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "手冊係你同屋企人溝通嘅小橋樑，今晚記得俾屋企人睇。"
          },
          {
            "speaker": "老師",
            "text": "第一頁簽咗名，老師就知道屋企人睇過。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "手冊係你同屋企人溝通嘅小橋樑，今晚記得俾屋企人睇。 第一頁簽咗名，老師就知道屋企人睇過。",
        "playerChoices": [
          {
            "id": "w2_handbook_first_signature_teacherEncouraging_plan_show_family",
            "text": "答應回家拿出來",
            "playerLine": "知道！我會俾屋企人睇。",
            "attitudeId": "shareBridge",
            "personalityDelta": {
              "organized": 1,
              "expressive": 1
            },
            "memoryAdd": [
              "w2_handbook_first_signature_teacherEncouraging_plan_show_family"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師笑著說：「好，記得放喺易搵嘅地方。」"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "學業": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "shareBridge",
              "reason": "這個選項是為 手冊第一頁要簽名 / teacherEncouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_handbook_first_signature",
              "variantId": "teacherEncouraging",
              "mustMatchEventTitle": "手冊第一頁要簽名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師笑著說：「好，記得放喺易搵嘅地方。」"
          },
          {
            "id": "w2_handbook_first_signature_teacherEncouraging_circle_signature_box",
            "text": "問可否貼便利貼",
            "playerLine": "我可唔可以貼張紙提醒自己？",
            "attitudeId": "selfManage",
            "personalityDelta": {
              "organized": 2
            },
            "memoryAdd": [
              "w2_handbook_first_signature_teacherEncouraging_circle_signature_box"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說這是好方法，還提醒不要貼住要簽的位置。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "selfManage",
              "reason": "這個選項是為 手冊第一頁要簽名 / teacherEncouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_handbook_first_signature",
              "variantId": "teacherEncouraging",
              "mustMatchEventTitle": "手冊第一頁要簽名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師說這是好方法，還提醒不要貼住要簽的位置。"
          },
          {
            "id": "w2_handbook_first_signature_teacherEncouraging_ask_classmate_remind",
            "text": "跟同學互相提醒",
            "playerLine": "我要叫隔籬同學提我提佢。",
            "attitudeId": "peerReminder",
            "personalityDelta": {
              "helpSeeking": 1,
              "peerOriented": 1
            },
            "memoryAdd": [
              "w2_handbook_first_signature_teacherEncouraging_ask_classmate_remind"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把一件小任務變成互相提醒。"
            },
            "statusDelta": {
              "體力": -1,
              "學業": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "peerReminder",
              "reason": "這個選項是為 手冊第一頁要簽名 / teacherEncouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_handbook_first_signature",
              "variantId": "teacherEncouraging",
              "mustMatchEventTitle": "手冊第一頁要簽名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "你把一件小任務變成互相提醒。"
          },
          {
            "id": "w2_handbook_first_signature_teacherEncouraging_feel_annoyed",
            "text": "擔心家人忙",
            "playerLine": "如果屋企人今晚好忙呢？",
            "attitudeId": "lowMotivation",
            "personalityDelta": {
              "avoidant": 1
            },
            "memoryAdd": [
              "w2_handbook_first_signature_teacherEncouraging_feel_annoyed"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說可以先放在枱面，讓家人看到。"
            },
            "statusDelta": {
              "快樂": -1,
              "體力": 1,
              "學業": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "lowMotivation",
              "reason": "這個選項是為 手冊第一頁要簽名 / teacherEncouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_handbook_first_signature",
              "variantId": "teacherEncouraging",
              "mustMatchEventTitle": "手冊第一頁要簽名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師說可以先放在枱面，讓家人看到。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "teacherEncouraging",
          "npcIdentity": "老師",
          "npcPersonality": "鼓勵型",
          "npcDisplayName": "teacherEncouraging"
        },
        "variantId": "teacherEncouraging",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_encouraging_teacher",
        "reactionProfileId": "identity_teacher__pers_encouraging_teacher"
      },
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "今晚手冊要屋企人簽名。如果屋企人今晚好忙，可以同我講，唔使自己驚。"
          },
          {
            "speaker": "老師",
            "text": "但你要先記得俾屋企人睇。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "今晚手冊要屋企人簽名。如果屋企人今晚好忙，可以同我講，唔使自己驚。 但你要先記得俾屋企人睇。",
        "playerChoices": [
          {
            "id": "w2_handbook_first_signature_teacherCaring_note_if_family_busy",
            "text": "說會記住",
            "playerLine": "我一返屋企就講！",
            "attitudeId": "safetyPlan",
            "personalityDelta": {
              "helpSeeking": 1,
              "selfAware": 1
            },
            "memoryAdd": [
              "w2_handbook_first_signature_teacherCaring_note_if_family_busy"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師點頭，像把事情放在你手上，但沒有壓得很重。"
            },
            "statusDelta": {
              "理智值": 1,
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "warmth",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "關顧型",
              "attitudeReadAs": "safetyPlan",
              "reason": "這個選項是為 手冊第一頁要簽名 / teacherCaring 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_handbook_first_signature",
              "variantId": "teacherCaring",
              "mustMatchEventTitle": "手冊第一頁要簽名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師點頭，像把事情放在你手上，但沒有壓得很重。"
          },
          {
            "id": "w2_handbook_first_signature_teacherCaring_prepare_show_home",
            "text": "說怕忘記",
            "playerLine": "我成日唔記得攞嘢出嚟。",
            "attitudeId": "recordTask",
            "personalityDelta": {
              "organized": 1
            },
            "memoryAdd": [
              "w2_handbook_first_signature_teacherCaring_prepare_show_home"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師建議你把手冊放在飯枱旁邊。"
            },
            "statusDelta": {
              "體力": -1,
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "關顧型",
              "attitudeReadAs": "recordTask",
              "reason": "這個選項是為 手冊第一頁要簽名 / teacherCaring 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_handbook_first_signature",
              "variantId": "teacherCaring",
              "mustMatchEventTitle": "手冊第一頁要簽名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師建議你把手冊放在飯枱旁邊。"
          },
          {
            "id": "w2_handbook_first_signature_teacherCaring_worry_and_ask_teacher",
            "text": "問明天講得不",
            "playerLine": "如果簽唔到，聽日講得唔得？",
            "attitudeId": "askForSupport",
            "personalityDelta": {
              "helpSeeking": 2
            },
            "memoryAdd": [
              "w2_handbook_first_signature_teacherCaring_worry_and_ask_teacher"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說可以，但要誠實講原因。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "warmth",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "關顧型",
              "attitudeReadAs": "askForSupport",
              "reason": "這個選項是為 手冊第一頁要簽名 / teacherCaring 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_handbook_first_signature",
              "variantId": "teacherCaring",
              "mustMatchEventTitle": "手冊第一頁要簽名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師說可以，但要誠實講原因。"
          },
          {
            "id": "w2_handbook_first_signature_teacherCaring_hide_worry",
            "text": "安靜點頭",
            "playerLine": "你點頭，把手冊摸了一下。",
            "attitudeId": "hideConcern",
            "personalityDelta": {
              "avoidant": 1,
              "shy": 1
            },
            "memoryAdd": [
              "w2_handbook_first_signature_teacherCaring_hide_worry"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師看見你有聽，但不確定你是否真的記住。"
            },
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "關顧型",
              "attitudeReadAs": "hideConcern",
              "reason": "這個選項是為 手冊第一頁要簽名 / teacherCaring 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_handbook_first_signature",
              "variantId": "teacherCaring",
              "mustMatchEventTitle": "手冊第一頁要簽名"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "老師看見你有聽，但不確定你是否真的記住。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "teacherCaring",
          "npcIdentity": "老師",
          "npcPersonality": "關顧型",
          "npcDisplayName": "teacherCaring"
        },
        "variantId": "teacherCaring",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_caring_teacher",
        "reactionProfileId": "identity_teacher__pers_caring_teacher"
      },
      {
        "openingDialogue": [
          {
            "speaker": "家長",
            "text": "手冊呢？老師有冇話要簽名？而家攞出嚟先。"
          },
          {
            "speaker": "家長",
            "text": "第一個星期最容易漏嘢，我哋今日就開始養習慣。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "手冊呢？老師有冇話要簽名？而家攞出嚟先。 第一個星期最容易漏嘢，我哋今日就開始養習慣。",
        "playerChoices": [
          {
            "id": "w2_handbook_first_signature_homeCautiousPlanner_handbook_on_arrival",
            "text": "馬上拿出手冊",
            "playerLine": "喺書包度，我而家攞。",
            "attitudeId": "organizedShare",
            "personalityDelta": {
              "organized": 2
            },
            "memoryAdd": [
              "w2_handbook_first_signature_homeCautiousPlanner_handbook_on_arrival"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長很快簽好，還把手冊放回你明天會見到的位置。"
            },
            "statusDelta": {
              "體力": -1,
              "學業": 1,
              "家庭關係": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "謹慎安排型",
              "attitudeReadAs": "organizedShare",
              "reason": "這個選項是為 手冊第一頁要簽名 / homeCautiousPlanner 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_handbook_first_signature",
              "variantId": "homeCautiousPlanner",
              "mustMatchEventTitle": "手冊第一頁要簽名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長很快簽好，還把手冊放回你明天會見到的位置。"
          },
          {
            "id": "w2_handbook_first_signature_homeCautiousPlanner_ask_check_bag_together",
            "text": "說等吃完飯",
            "playerLine": "食完飯先得唔得？",
            "attitudeId": "askForHelp",
            "personalityDelta": {
              "helpSeeking": 1,
              "organized": 1
            },
            "memoryAdd": [
              "w2_handbook_first_signature_homeCautiousPlanner_ask_check_bag_together"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長答應，但叫你把手冊放在枱面，不要又塞回書包。"
            },
            "statusDelta": {
              "體力": -1,
              "學業": 1,
              "家庭關係": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "謹慎安排型",
              "attitudeReadAs": "askForHelp",
              "reason": "這個選項是為 手冊第一頁要簽名 / homeCautiousPlanner 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_handbook_first_signature",
              "variantId": "homeCautiousPlanner",
              "mustMatchEventTitle": "手冊第一頁要簽名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長答應，但叫你把手冊放在枱面，不要又塞回書包。"
          },
          {
            "id": "w2_handbook_first_signature_homeCautiousPlanner_after_dinner_signature",
            "text": "找不到手冊",
            "playerLine": "我記得有帶返嚟……等我搵下。",
            "attitudeId": "delayButVisible",
            "personalityDelta": {
              "boundary": 1,
              "organized": 1
            },
            "memoryAdd": [
              "w2_handbook_first_signature_homeCautiousPlanner_after_dinner_signature"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長開始皺眉，但先幫你把書包一格格打開。"
            },
            "statusDelta": {},
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "謹慎安排型",
              "attitudeReadAs": "delayButVisible",
              "reason": "這個選項是為 手冊第一頁要簽名 / homeCautiousPlanner 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_handbook_first_signature",
              "variantId": "homeCautiousPlanner",
              "mustMatchEventTitle": "手冊第一頁要簽名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長開始皺眉，但先幫你把書包一格格打開。"
          },
          {
            "id": "w2_handbook_first_signature_homeCautiousPlanner_forgot_in_bag",
            "text": "忘記說",
            "playerLine": "你做完其他事才突然想起手冊。",
            "attitudeId": "forgetTask",
            "personalityDelta": {
              "avoidant": 1
            },
            "memoryAdd": [
              "w2_handbook_first_signature_homeCautiousPlanner_forgot_in_bag"
            ],
            "followUps": [
              "w3_handbook_signature_followup"
            ],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長嘆氣，但這件事變成明天要改善的小提醒。"
            },
            "statusDelta": {
              "理智值": -1,
              "體力": 1,
              "學業": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": -1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "謹慎安排型",
              "attitudeReadAs": "forgetTask",
              "reason": "這個選項是為 手冊第一頁要簽名 / homeCautiousPlanner 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_handbook_first_signature",
              "variantId": "homeCautiousPlanner",
              "mustMatchEventTitle": "手冊第一頁要簽名"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "家長嘆氣，但這件事變成明天要改善的小提醒。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "homeCautiousPlanner",
          "npcIdentity": "家長/家庭長輩",
          "npcPersonality": "謹慎安排型",
          "npcDisplayName": "homeCautiousPlanner"
        },
        "variantId": "homeCautiousPlanner",
        "variantType": "npc",
        "identityTypeId": "identity_family_elder",
        "personalityId": "pers_cautious_planner",
        "reactionProfileId": "identity_family_elder__pers_cautious_planner"
      },
      {
        "openingDialogue": [
          {
            "speaker": "家長",
            "text": "手冊要簽就放枱面，我食完飯簽。"
          },
          {
            "speaker": "家長",
            "text": "唔好放返書包，我會見唔到。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "手冊要簽就放枱面，我食完飯簽。 唔好放返書包，我會見唔到。",
        "playerChoices": [
          {
            "id": "w2_handbook_first_signature_homeBusyPractical_put_on_table_clear",
            "text": "放在飯枱上",
            "playerLine": "我放呢度，你記得簽呀。",
            "attitudeId": "clearRequest",
            "personalityDelta": {
              "organized": 1,
              "selfAdvocacy": 1
            },
            "memoryAdd": [
              "w2_handbook_first_signature_homeBusyPractical_put_on_table_clear"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長點頭，事情先安全地停在可見的位置。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "忙碌務實型",
              "attitudeReadAs": "clearRequest",
              "reason": "這個選項是為 手冊第一頁要簽名 / homeBusyPractical 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_handbook_first_signature",
              "variantId": "homeBusyPractical",
              "mustMatchEventTitle": "手冊第一頁要簽名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長點頭，事情先安全地停在可見的位置。"
          },
          {
            "id": "w2_handbook_first_signature_homeBusyPractical_wait_until_meal_done",
            "text": "怕弄濕",
            "playerLine": "放文件夾得唔得？我驚食飯整濕。",
            "attitudeId": "timingAware",
            "personalityDelta": {
              "considerate": 1
            },
            "memoryAdd": [
              "w2_handbook_first_signature_homeBusyPractical_wait_until_meal_done"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長說可以，但要露出封面。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "忙碌務實型",
              "attitudeReadAs": "timingAware",
              "reason": "這個選項是為 手冊第一頁要簽名 / homeBusyPractical 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_handbook_first_signature",
              "variantId": "homeBusyPractical",
              "mustMatchEventTitle": "手冊第一頁要簽名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長說可以，但要露出封面。"
          },
          {
            "id": "w2_handbook_first_signature_homeBusyPractical_write_sticky_note",
            "text": "忘記拿出來",
            "playerLine": "你先去做別的事，手冊仍在書包裡。",
            "attitudeId": "selfManage",
            "personalityDelta": {
              "organized": 2
            },
            "memoryAdd": [
              "w2_handbook_first_signature_homeBusyPractical_write_sticky_note"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "直到睡前你才想起，家裡突然忙起來。"
            },
            "statusDelta": {
              "理智值": 2,
              "體力": -1,
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "忙碌務實型",
              "attitudeReadAs": "selfManage",
              "reason": "這個選項是為 手冊第一頁要簽名 / homeBusyPractical 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_handbook_first_signature",
              "variantId": "homeBusyPractical",
              "mustMatchEventTitle": "手冊第一頁要簽名"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "直到睡前你才想起，家裡突然忙起來。"
          },
          {
            "id": "w2_handbook_first_signature_homeBusyPractical_assume_parent_remember",
            "text": "問可否現在簽",
            "playerLine": "你可唔可以而家簽？我驚我唔記得。",
            "attitudeId": "handsOff",
            "personalityDelta": {
              "avoidant": 1
            },
            "memoryAdd": [
              "w2_handbook_first_signature_homeBusyPractical_assume_parent_remember"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長雖然忙，還是先簽了一下，叫你自己收好。"
            },
            "statusDelta": {
              "理智值": -1,
              "體力": 1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "忙碌務實型",
              "attitudeReadAs": "handsOff",
              "reason": "這個選項是為 手冊第一頁要簽名 / homeBusyPractical 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_handbook_first_signature",
              "variantId": "homeBusyPractical",
              "mustMatchEventTitle": "手冊第一頁要簽名"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長雖然忙，還是先簽了一下，叫你自己收好。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "homeBusyPractical",
          "npcIdentity": "家長/家庭長輩",
          "npcPersonality": "忙碌務實型",
          "npcDisplayName": "homeBusyPractical"
        },
        "variantId": "homeBusyPractical",
        "variantType": "npc",
        "identityTypeId": "identity_family_elder",
        "personalityId": "pers_busy_practical",
        "reactionProfileId": "identity_family_elder__pers_busy_practical"
      }
    ],
    "schemaVersion": "opening_event_pool_v5_1_balanced_event_specific_choices",
    "eventScheduling": {
      "baseWeight": 60,
      "weekRange": [
        2,
        2
      ],
      "conditions": [],
      "exclusiveGroup": null,
      "onceOnly": true,
      "cooldownWeeks": 999,
      "prerequisiteMemory": [],
      "sourceChannel": "classroom",
      "involvementRole": "direct_actor"
    },
    "eventChoiceDesignRule": "playerChoices must be authored for this exact event+variant; personalityId may alter tone and point interpretation but must not inject a generic personality choice set."
  },
  {
    "id": "w2_classmate_borrows_eraser",
    "weekPool": "W2_daily_order",
    "title": "同學問你借擦膠",
    "sceneType": "small_boundary_social",
    "coreSituation": "堂上或小息前，同學問玩家借擦膠。借出、拒絕、追問都可以形成不同關係，不是好壞分。",
    "followUpHooks": [
      "w6_classmate_echo",
      "story_eraser_request"
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "pointDesign": {
      "version": "target_aware_integer_delta_v5_1_balanced",
      "mainStatusKeys": [
        "快樂",
        "理智值",
        "體力",
        "學業",
        "社交",
        "創意",
        "家庭關係",
        "自信"
      ],
      "skillKeys": [
        "繪畫",
        "鋼琴",
        "朗誦",
        "游泳",
        "足球",
        "編程",
        "閱讀",
        "班務服務"
      ],
      "note": "分數由玩家 attitudeId、舊 effects、事件題材，以及當前 NPC 身份 / 性格共同決定；同一個選項在不同 NPC 面前可以有不同結果。",
      "choiceTextRule": "choice.text is player-facing and must describe a concrete action or spoken line that answers this event dialogue; do not show abstract attitude labels.",
      "noCrossEventGenericChoiceRule": "The same choice.text should not be reused across unrelated event ids.",
      "statusBalanceRule": "每個 variant 通常只有 1–2 個選項會推進核心狀態；其餘選項偏向保留、錯過、休息、觀察或付出代價。statusDelta 是方向，不是每次點擊獎勵。",
      "skillSemantics": "skillExpDelta 是技能經驗值，不是技能等級。",
      "previewRule": "dialogueTriggerPreview is generated from openingDialogue and should not be hand-authored."
    },
    "fallbackChoices": [
      {
        "id": "w2_classmate_borrows_eraser_outgoingInvite_fallback_ask",
        "text": "問清楚這件事和自己現在要做甚麼。",
        "playerLine": "問清楚這件事和自己現在要做甚麼。",
        "attitudeId": "askForClarification",
        "personalityDelta": {
          "helpSeeking": 1
        },
        "memoryAdd": [
          "w2_classmate_borrows_eraser_outgoingInvite_fallback_ask"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你用提問避免誤會，這是只屬於當前事件的備用選項。"
        },
        "statusDelta": {
          "理智值": 1,
          "體力": -1,
          "自信": 1
        },
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "同學",
          "npcPersonality": "外向邀請型",
          "attitudeReadAs": "askForClarification",
          "reason": "這個選項是為 同學問你借擦膠 / outgoingInvite 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w2_classmate_borrows_eraser",
          "variantId": "outgoingInvite",
          "mustMatchEventTitle": "同學問你借擦膠"
        },
        "skillExpDelta": {}
      },
      {
        "id": "w2_classmate_borrows_eraser_outgoingInvite_fallback_observe",
        "text": "先觀察這個情境，不立刻答應或拒絕。",
        "playerLine": "先觀察這個情境，不立刻答應或拒絕。",
        "attitudeId": "observeFirst",
        "personalityDelta": {
          "observer": 1
        },
        "memoryAdd": [
          "w2_classmate_borrows_eraser_outgoingInvite_fallback_observe"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你暫時保留行動，讓自己多一點時間。"
        },
        "statusDelta": {},
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "同學",
          "npcPersonality": "外向邀請型",
          "attitudeReadAs": "observeFirst",
          "reason": "這個選項是為 同學問你借擦膠 / outgoingInvite 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w2_classmate_borrows_eraser",
          "variantId": "outgoingInvite",
          "mustMatchEventTitle": "同學問你借擦膠"
        },
        "skillExpDelta": {}
      }
    ],
    "variants": [
      {
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "借一借擦膠得唔得？我下堂還你，真係。"
          },
          {
            "speaker": "家朗",
            "text": "我擦膠唔知去左邊。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "借一借擦膠得唔得？我下堂還你，真係。 我擦膠唔知去左邊。",
        "playerChoices": [
          {
            "id": "w2_classmate_borrows_eraser_outgoingInvite_lend_with_return",
            "text": "借給他",
            "playerLine": "俾你用，但要還返比我呀。",
            "attitudeId": "lendBoundary",
            "personalityDelta": {
              "outgoing": 1,
              "boundary": 1
            },
            "memoryAdd": [
              "w2_classmate_borrows_eraser_outgoingInvite_lend_with_return"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗一邊擦一邊點頭，還很快講：「我記得㗎啦。」"
            },
            "statusDelta": {
              "快樂": 1,
              "體力": -1,
              "社交": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "lendBoundary",
              "reason": "這個選項是為 同學問你借擦膠 / outgoingInvite 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_classmate_borrows_eraser",
              "variantId": "outgoingInvite",
              "mustMatchEventTitle": "同學問你借擦膠"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家朗一邊擦一邊點頭，還很快講：「我記得㗎啦。」"
          },
          {
            "id": "w2_classmate_borrows_eraser_outgoingInvite_ask_need_which_part",
            "text": "叫他找一找",
            "playerLine": "你搵吓先啦。",
            "attitudeId": "clarifyBoundary",
            "personalityDelta": {
              "boundary": 1,
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w2_classmate_borrows_eraser_outgoingInvite_ask_need_which_part"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗立刻彎腰看書包底，像把找東西也變成小動作。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "clarifyBoundary",
              "reason": "這個選項是為 同學問你借擦膠 / outgoingInvite 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_classmate_borrows_eraser",
              "variantId": "outgoingInvite",
              "mustMatchEventTitle": "同學問你借擦膠"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家朗立刻彎腰看書包底，像把找東西也變成小動作。"
          },
          {
            "id": "w2_classmate_borrows_eraser_outgoingInvite_lend_half_time",
            "text": "說自己也要用",
            "playerLine": "我而家要用，一陣先比你。",
            "attitudeId": "limitedHelp",
            "personalityDelta": {
              "boundary": 2
            },
            "memoryAdd": [
              "w2_classmate_borrows_eraser_outgoingInvite_lend_half_time"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗有點急，但接受要等。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "limitedHelp",
              "reason": "這個選項是為 同學問你借擦膠 / outgoingInvite 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_classmate_borrows_eraser",
              "variantId": "outgoingInvite",
              "mustMatchEventTitle": "同學問你借擦膠"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家朗有點急，但接受要等。"
          },
          {
            "id": "w2_classmate_borrows_eraser_outgoingInvite_say_using_now",
            "text": "裝作沒聽到",
            "playerLine": "你低頭看自己的簿，沒有回應。",
            "attitudeId": "refuseNow",
            "personalityDelta": {
              "boundary": 2
            },
            "memoryAdd": [
              "w2_classmate_borrows_eraser_outgoingInvite_say_using_now"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗轉去問別人，聲音比剛才小了一點。"
            },
            "statusDelta": {
              "體力": 1,
              "社交": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "refuseNow",
              "reason": "這個選項是為 同學問你借擦膠 / outgoingInvite 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_classmate_borrows_eraser",
              "variantId": "outgoingInvite",
              "mustMatchEventTitle": "同學問你借擦膠"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "家朗轉去問別人，聲音比剛才小了一點。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "outgoingInvite",
          "npcIdentity": "同學",
          "npcPersonality": "外向邀請型",
          "npcDisplayName": "outgoingInvite"
        },
        "variantId": "outgoingInvite",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "reactionProfileId": "identity_same_age_peer__pers_outgoing_inviter"
      },
      {
        "openingDialogue": [
          {
            "speaker": "穎心",
            "text": "唔好意思……可唔可以以借一借擦膠？"
          },
          {
            "speaker": "穎心",
            "text": "我只係擦一個字，好快還你。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "唔好意思……可唔可以以借一借擦膠？ 我只係擦一個字，好快還你。",
        "playerChoices": [
          {
            "id": "w2_classmate_borrows_eraser_quietObserver_quiet_lend",
            "text": "直接推給她",
            "playerLine": "可以，用完放返呢度。",
            "attitudeId": "gentleLend",
            "personalityDelta": {
              "gentle": 1,
              "considerate": 1
            },
            "memoryAdd": [
              "w2_classmate_borrows_eraser_quietObserver_quiet_lend"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心很小心地用了一角，然後把擦膠放回原位。"
            },
            "statusDelta": {
              "體力": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "gentleLend",
              "reason": "這個選項是為 同學問你借擦膠 / quietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_classmate_borrows_eraser",
              "variantId": "quietObserver",
              "mustMatchEventTitle": "同學問你借擦膠"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "穎心很小心地用了一角，然後把擦膠放回原位。"
          },
          {
            "id": "w2_classmate_borrows_eraser_quietObserver_ask_if_urgent",
            "text": "細聲問要擦哪個字",
            "playerLine": "邊個字呀？係咪寫錯咗？",
            "attitudeId": "considerateCheck",
            "personalityDelta": {
              "considerate": 2
            },
            "memoryAdd": [
              "w2_classmate_borrows_eraser_quietObserver_ask_if_urgent"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她把簿子遮了一半，只露出要擦的地方。"
            },
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "considerateCheck",
              "reason": "這個選項是為 同學問你借擦膠 / quietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_classmate_borrows_eraser",
              "variantId": "quietObserver",
              "mustMatchEventTitle": "同學問你借擦膠"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "她把簿子遮了一半，只露出要擦的地方。"
          },
          {
            "id": "w2_classmate_borrows_eraser_quietObserver_share_but_watch",
            "text": "說自己也要用",
            "playerLine": "我而家要用，一陣先比你。",
            "attitudeId": "cautiousLend",
            "personalityDelta": {
              "observer": 1,
              "boundary": 1
            },
            "memoryAdd": [
              "w2_classmate_borrows_eraser_quietObserver_share_but_watch"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她點頭，沒有追問，只把手縮回去。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "cautiousLend",
              "reason": "這個選項是為 同學問你借擦膠 / quietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_classmate_borrows_eraser",
              "variantId": "quietObserver",
              "mustMatchEventTitle": "同學問你借擦膠"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "她點頭，沒有追問，只把手縮回去。"
          },
          {
            "id": "w2_classmate_borrows_eraser_quietObserver_whisper_no_need_it",
            "text": "不想借",
            "playerLine": "唔得，我驚整唔見。",
            "attitudeId": "softRefuse",
            "personalityDelta": {
              "boundary": 1,
              "shy": 1
            },
            "memoryAdd": [
              "w2_classmate_borrows_eraser_quietObserver_whisper_no_need_it"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心說「哦」，沒有生氣，但之後更少主動開口。"
            },
            "statusDelta": {},
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "softRefuse",
              "reason": "這個選項是為 同學問你借擦膠 / quietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_classmate_borrows_eraser",
              "variantId": "quietObserver",
              "mustMatchEventTitle": "同學問你借擦膠"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "穎心說「哦」，沒有生氣，但之後更少主動開口。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "quietObserver",
          "npcIdentity": "同學",
          "npcPersonality": "安靜觀察型",
          "npcDisplayName": "quietObserver"
        },
        "variantId": "quietObserver",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_quiet_observer",
        "reactionProfileId": "identity_same_age_peer__pers_quiet_observer"
      },
      {
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "借擦膠俾我擦一擦得唔得？我唔會整污糟。"
          },
          {
            "speaker": "梓軒",
            "text": "我擦膠其實都幾新，不過今日唔記得帶。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "借擦膠俾我擦一擦得唔得？我唔會整污糟。 我擦膠其實都幾新，不過今日唔記得帶。",
        "playerChoices": [
          {
            "id": "w2_classmate_borrows_eraser_competitivePeer_lend_no_dirty",
            "text": "借給他",
            "playerLine": "借你啦，用完快啲還返比我。",
            "attitudeId": "lendBoundary",
            "personalityDelta": {
              "boundary": 1
            },
            "memoryAdd": [
              "w2_classmate_borrows_eraser_competitivePeer_lend_no_dirty"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒哼了一聲，但還是拿去用了。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "respect",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "lendBoundary",
              "reason": "這個選項是為 同學問你借擦膠 / competitivePeer 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_classmate_borrows_eraser",
              "variantId": "competitivePeer",
              "mustMatchEventTitle": "同學問你借擦膠"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "梓軒哼了一聲，但還是拿去用了。"
          },
          {
            "id": "w2_classmate_borrows_eraser_competitivePeer_ask_why_no_eraser",
            "text": "問他為甚麼沒帶",
            "playerLine": "你唔係話你會帶齊野咩？",
            "attitudeId": "directQuestion",
            "personalityDelta": {
              "direct": 1,
              "boundary": 1
            },
            "memoryAdd": [
              "w2_classmate_borrows_eraser_competitivePeer_ask_why_no_eraser"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒臉有點僵，像被你捉到一個小漏洞。"
            },
            "statusDelta": {
              "理智值": 1,
              "社交": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "directQuestion",
              "reason": "這個選項是為 同學問你借擦膠 / competitivePeer 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_classmate_borrows_eraser",
              "variantId": "competitivePeer",
              "mustMatchEventTitle": "同學問你借擦膠"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "梓軒臉有點僵，像被你捉到一個小漏洞。"
          },
          {
            "id": "w2_classmate_borrows_eraser_competitivePeer_trade_after_use",
            "text": "說等一下再借",
            "playerLine": "我而家都要用，等一陣先俾你。",
            "attitudeId": "tradeHelp",
            "personalityDelta": {
              "strategic": 1,
              "competitive": 1
            },
            "memoryAdd": [
              "w2_classmate_borrows_eraser_competitivePeer_trade_after_use"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "他看起來有點不耐煩，但沒有辦法反駁。"
            },
            "statusDelta": {
              "理智值": -1,
              "學業": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "tradeHelp",
              "reason": "這個選項是為 同學問你借擦膠 / competitivePeer 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_classmate_borrows_eraser",
              "variantId": "competitivePeer",
              "mustMatchEventTitle": "同學問你借擦膠"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "他看起來有點不耐煩，但沒有辦法反駁。"
          },
          {
            "id": "w2_classmate_borrows_eraser_competitivePeer_refuse_compare_tone",
            "text": "拒絕借出",
            "playerLine": "唔得，我驚整唔見。",
            "attitudeId": "clearBoundary",
            "personalityDelta": {
              "boundary": 2
            },
            "memoryAdd": [
              "w2_classmate_borrows_eraser_competitivePeer_refuse_compare_tone"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒撇嘴說：「咁算啦。」氣氛有點硬。"
            },
            "statusDelta": {
              "體力": 1,
              "社交": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": -1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "clearBoundary",
              "reason": "這個選項是為 同學問你借擦膠 / competitivePeer 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_classmate_borrows_eraser",
              "variantId": "competitivePeer",
              "mustMatchEventTitle": "同學問你借擦膠"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "梓軒撇嘴說：「咁算啦。」氣氛有點硬。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "competitivePeer",
          "npcIdentity": "同學",
          "npcPersonality": "競爭同學型",
          "npcDisplayName": "competitivePeer"
        },
        "variantId": "competitivePeer",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_competitive_peer",
        "reactionProfileId": "identity_same_age_peer__pers_competitive_peer"
      },
      {
        "openingDialogue": [
          {
            "speaker": "柏宇",
            "text": "借一借擦膠，我畫咗啲奇怪嘢，如果老師見到，我就死啦。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "借一借擦膠，我畫咗啲奇怪嘢，如果老師見到，我就死啦。",
        "playerChoices": [
          {
            "id": "w2_classmate_borrows_eraser_curiousTroublemaker_ask_strange_words",
            "text": "借給他，順便問",
            "playerLine": "借比你啦，你畫咗咩呀？",
            "attitudeId": "curiousAsk",
            "personalityDelta": {
              "curious": 2
            },
            "memoryAdd": [
              "w2_classmate_borrows_eraser_curiousTroublemaker_ask_strange_words"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇邊擦邊笑。"
            },
            "statusDelta": {
              "快樂": 1,
              "理智值": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "搞事好奇型",
              "attitudeReadAs": "curiousAsk",
              "reason": "這個選項是為 同學問你借擦膠 / curiousTroublemaker 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_classmate_borrows_eraser",
              "variantId": "curiousTroublemaker",
              "mustMatchEventTitle": "同學問你借擦膠"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "柏宇邊擦邊笑。"
          },
          {
            "id": "w2_classmate_borrows_eraser_curiousTroublemaker_lend_if_no_trouble",
            "text": "叫他不要亂寫",
            "playerLine": "你唔好上堂亂畫啦。",
            "attitudeId": "lendBoundary",
            "personalityDelta": {
              "boundary": 1
            },
            "memoryAdd": [
              "w2_classmate_borrows_eraser_curiousTroublemaker_lend_if_no_trouble"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇吐吐舌頭，但還是把那個奇怪的記號擦掉。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "搞事好奇型",
              "attitudeReadAs": "lendBoundary",
              "reason": "這個選項是為 同學問你借擦膠 / curiousTroublemaker 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_classmate_borrows_eraser",
              "variantId": "curiousTroublemaker",
              "mustMatchEventTitle": "同學問你借擦膠"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "柏宇吐吐舌頭，但還是把那個奇怪的記號擦掉。"
          },
          {
            "id": "w2_classmate_borrows_eraser_curiousTroublemaker_tell_teacher_if_weird",
            "text": "先看一眼",
            "playerLine": "比我睇一眼先！",
            "attitudeId": "ruleRedirect",
            "personalityDelta": {
              "compliant": 1,
              "cautious": 1
            },
            "memoryAdd": [
              "w2_classmate_borrows_eraser_curiousTroublemaker_tell_teacher_if_weird"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇把簿子遮住一半，像這件事真的很機密。"
            },
            "statusDelta": {
              "理智值": 1,
              "社交": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": -1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "搞事好奇型",
              "attitudeReadAs": "ruleRedirect",
              "reason": "這個選項是為 同學問你借擦膠 / curiousTroublemaker 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_classmate_borrows_eraser",
              "variantId": "curiousTroublemaker",
              "mustMatchEventTitle": "同學問你借擦膠"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "柏宇把簿子遮住一半，像這件事真的很機密。"
          },
          {
            "id": "w2_classmate_borrows_eraser_curiousTroublemaker_refuse_until_explain",
            "text": "不借",
            "playerLine": "你自己諗辦法啦，我唔想一齊俾老師見到。",
            "attitudeId": "clearBoundary",
            "personalityDelta": {
              "boundary": 2,
              "observer": 1
            },
            "memoryAdd": [
              "w2_classmate_borrows_eraser_curiousTroublemaker_refuse_until_explain"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇小聲「嘁」了一下，轉去找第二個人。"
            },
            "statusDelta": {
              "體力": 1,
              "社交": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "搞事好奇型",
              "attitudeReadAs": "clearBoundary",
              "reason": "這個選項是為 同學問你借擦膠 / curiousTroublemaker 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_classmate_borrows_eraser",
              "variantId": "curiousTroublemaker",
              "mustMatchEventTitle": "同學問你借擦膠"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "柏宇小聲「嘁」了一下，轉去找第二個人。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "curiousTroublemaker",
          "npcIdentity": "同學",
          "npcPersonality": "搞事好奇型",
          "npcDisplayName": "curiousTroublemaker"
        },
        "variantId": "curiousTroublemaker",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_curious_troublemaker",
        "reactionProfileId": "identity_same_age_peer__pers_curious_troublemaker"
      }
    ],
    "schemaVersion": "opening_event_pool_v5_1_balanced_event_specific_choices",
    "eventScheduling": {
      "baseWeight": 60,
      "weekRange": [
        2,
        2
      ],
      "conditions": [],
      "exclusiveGroup": null,
      "onceOnly": true,
      "cooldownWeeks": 999,
      "prerequisiteMemory": [],
      "sourceChannel": "classroom",
      "involvementRole": "direct_actor"
    },
    "eventChoiceDesignRule": "playerChoices must be authored for this exact event+variant; personalityId may alter tone and point interpretation but must not inject a generic personality choice set."
  },
  {
    "id": "w2_bag_mess_notice_missing",
    "weekPool": "W2_daily_order",
    "title": "書包亂到找不到通告",
    "sceneType": "organisation_skill_seed",
    "coreSituation": "放學前大家要交通告，玩家發現書包有點亂。事件連到整理書包 action，不只是扣學業。",
    "linkedAction": "organise_school_bag",
    "followUpHooks": [
      "organising_habit_seed",
      "w6_teacher_observation"
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "pointDesign": {
      "version": "target_aware_integer_delta_v5_1_balanced",
      "mainStatusKeys": [
        "快樂",
        "理智值",
        "體力",
        "學業",
        "社交",
        "創意",
        "家庭關係",
        "自信"
      ],
      "skillKeys": [
        "繪畫",
        "鋼琴",
        "朗誦",
        "游泳",
        "足球",
        "編程",
        "閱讀",
        "班務服務"
      ],
      "note": "分數由玩家 attitudeId、舊 effects、事件題材，以及當前 NPC 身份 / 性格共同決定；同一個選項在不同 NPC 面前可以有不同結果。",
      "choiceTextRule": "choice.text is player-facing and must describe a concrete action or spoken line that answers this event dialogue; do not show abstract attitude labels.",
      "noCrossEventGenericChoiceRule": "The same choice.text should not be reused across unrelated event ids.",
      "statusBalanceRule": "每個 variant 通常只有 1–2 個選項會推進核心狀態；其餘選項偏向保留、錯過、休息、觀察或付出代價。statusDelta 是方向，不是每次點擊獎勵。",
      "skillSemantics": "skillExpDelta 是技能經驗值，不是技能等級。",
      "previewRule": "dialogueTriggerPreview is generated from openingDialogue and should not be hand-authored."
    },
    "fallbackChoices": [
      {
        "id": "w2_bag_mess_notice_missing_teacherFairObserver_fallback_ask",
        "text": "問清楚這件事和自己現在要做甚麼。",
        "playerLine": "問清楚這件事和自己現在要做甚麼。",
        "attitudeId": "askForClarification",
        "personalityDelta": {
          "helpSeeking": 1
        },
        "memoryAdd": [
          "w2_bag_mess_notice_missing_teacherFairObserver_fallback_ask"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你用提問避免誤會，這是只屬於當前事件的備用選項。"
        },
        "statusDelta": {
          "理智值": 1,
          "體力": -1,
          "自信": 1
        },
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "公平觀察型",
          "attitudeReadAs": "askForClarification",
          "reason": "這個選項是為 書包亂到找不到通告 / teacherFairObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w2_bag_mess_notice_missing",
          "variantId": "teacherFairObserver",
          "mustMatchEventTitle": "書包亂到找不到通告"
        },
        "skillExpDelta": {}
      },
      {
        "id": "w2_bag_mess_notice_missing_teacherFairObserver_fallback_observe",
        "text": "先觀察這個情境，不立刻答應或拒絕。",
        "playerLine": "先觀察這個情境，不立刻答應或拒絕。",
        "attitudeId": "observeFirst",
        "personalityDelta": {
          "observer": 1
        },
        "memoryAdd": [
          "w2_bag_mess_notice_missing_teacherFairObserver_fallback_observe"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你暫時保留行動，讓自己多一點時間。"
        },
        "statusDelta": {},
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "公平觀察型",
          "attitudeReadAs": "observeFirst",
          "reason": "這個選項是為 書包亂到找不到通告 / teacherFairObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w2_bag_mess_notice_missing",
          "variantId": "teacherFairObserver",
          "mustMatchEventTitle": "書包亂到找不到通告"
        },
        "skillExpDelta": {}
      }
    ],
    "variants": [
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "而家要交通告，冇簽或者帶嘅先舉手。"
          },
          {
            "speaker": "老師",
            "text": "我會記名，下次試吓早一晚整理書包。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "而家要交通告，冇簽或者帶嘅先舉手。 我會記名，下次試吓早一晚整理書包。",
        "playerChoices": [
          {
            "id": "w2_bag_mess_notice_missing_teacherFairObserver_search_bag_calmly",
            "text": "慢慢找",
            "playerLine": "老師，我搵緊，應該喺書包入面。",
            "attitudeId": "calmSearch",
            "personalityDelta": {
              "observer": 1,
              "organized": 1
            },
            "memoryAdd": [
              "w2_bag_mess_notice_missing_teacherFairObserver_search_bag_calmly"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你花了點時間，但沒有把東西全倒出來。"
            },
            "statusDelta": {
              "理智值": 2,
              "體力": -1,
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "公平觀察型",
              "attitudeReadAs": "calmSearch",
              "reason": "這個選項是為 書包亂到找不到通告 / teacherFairObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_bag_mess_notice_missing",
              "variantId": "teacherFairObserver",
              "mustMatchEventTitle": "書包亂到找不到通告"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "你花了點時間，但沒有把東西全倒出來。"
          },
          {
            "id": "w2_bag_mess_notice_missing_teacherFairObserver_ask_deskmate_notice",
            "text": "問同桌有沒有看過",
            "playerLine": "你有冇見過我張通告？",
            "attitudeId": "askPeerHelp",
            "personalityDelta": {
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w2_bag_mess_notice_missing_teacherFairObserver_ask_deskmate_notice"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "旁邊同學幫你看了桌面，但通告仍要你自己找。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "公平觀察型",
              "attitudeReadAs": "askPeerHelp",
              "reason": "這個選項是為 書包亂到找不到通告 / teacherFairObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_bag_mess_notice_missing",
              "variantId": "teacherFairObserver",
              "mustMatchEventTitle": "書包亂到找不到通告"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "旁邊同學幫你看了桌面，但通告仍要你自己找。"
          },
          {
            "id": "w2_bag_mess_notice_missing_teacherFairObserver_submit_others_first",
            "text": "先交其他東西",
            "playerLine": "我先交功課，通告返屋企再搵得唔得？",
            "attitudeId": "partialResponsibility",
            "personalityDelta": {
              "accountable": 1
            },
            "memoryAdd": [
              "w2_bag_mess_notice_missing_teacherFairObserver_submit_others_first"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師讓你先記下，事情沒有立刻變成責罵。"
            },
            "statusDelta": {
              "理智值": 1,
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "公平觀察型",
              "attitudeReadAs": "partialResponsibility",
              "reason": "這個選項是為 書包亂到找不到通告 / teacherFairObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_bag_mess_notice_missing",
              "variantId": "teacherFairObserver",
              "mustMatchEventTitle": "書包亂到找不到通告"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師讓你先記下，事情沒有立刻變成責罵。"
          },
          {
            "id": "w2_bag_mess_notice_missing_teacherFairObserver_dump_bag_panic",
            "text": "把書包倒出來",
            "playerLine": "你心急地把書包東西全倒在枱上。",
            "attitudeId": "panicSearch",
            "personalityDelta": {
              "anxious": 1
            },
            "memoryAdd": [
              "w2_bag_mess_notice_missing_teacherFairObserver_dump_bag_panic"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "通告找到了，但枱面變得更亂。"
            },
            "statusDelta": {
              "體力": -1,
              "自信": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": -1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "公平觀察型",
              "attitudeReadAs": "panicSearch",
              "reason": "這個選項是為 書包亂到找不到通告 / teacherFairObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_bag_mess_notice_missing",
              "variantId": "teacherFairObserver",
              "mustMatchEventTitle": "書包亂到找不到通告"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "通告找到了，但枱面變得更亂。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "teacherFairObserver",
          "npcIdentity": "老師",
          "npcPersonality": "公平觀察型",
          "npcDisplayName": "teacherFairObserver"
        },
        "variantId": "teacherFairObserver",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_fair_observer",
        "reactionProfileId": "identity_teacher__pers_fair_observer"
      },
      {
        "openingDialogue": [
          {
            "speaker": "家長",
            "text": "你要學識每日整理，唔係嘅話會好易漏嘢架。"
          },
          {
            "speaker": "家長",
            "text": "通告唔可以亂咁塞。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "你要學識每日整理，唔係嘅話會好易漏嘢架。 通告唔可以亂咁塞。",
        "playerChoices": [
          {
            "id": "w2_bag_mess_notice_missing_parentCautiousPlannerFollow_sort_bag_with_parent",
            "text": "一起整理書包",
            "playerLine": "咁我哋而家執一次。",
            "attitudeId": "organizeTogether",
            "personalityDelta": {
              "organized": 2,
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w2_bag_mess_notice_missing_parentCautiousPlannerFollow_sort_bag_with_parent"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長拿出文件夾，開始幫你分通告、功課和手冊。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "學業": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "謹慎安排型",
              "attitudeReadAs": "organizeTogether",
              "reason": "這個選項是為 書包亂到找不到通告 / parentCautiousPlannerFollow 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_bag_mess_notice_missing",
              "variantId": "parentCautiousPlannerFollow",
              "mustMatchEventTitle": "書包亂到找不到通告"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長拿出文件夾，開始幫你分通告、功課和手冊。"
          },
          {
            "id": "w2_bag_mess_notice_missing_parentCautiousPlannerFollow_make_notice_folder",
            "text": "解釋自己找不到",
            "playerLine": "我唔係特登架！我係真係搵唔到。",
            "attitudeId": "makeSystem",
            "personalityDelta": {
              "organized": 2,
              "selfManage": 1
            },
            "memoryAdd": [
              "w2_bag_mess_notice_missing_parentCautiousPlannerFollow_make_notice_folder"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長語氣放軟一點，但仍然要求你明天固定放一格。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "學業": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "謹慎安排型",
              "attitudeReadAs": "makeSystem",
              "reason": "這個選項是為 書包亂到找不到通告 / parentCautiousPlannerFollow 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_bag_mess_notice_missing",
              "variantId": "parentCautiousPlannerFollow",
              "mustMatchEventTitle": "書包亂到找不到通告"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長語氣放軟一點，但仍然要求你明天固定放一格。"
          },
          {
            "id": "w2_bag_mess_notice_missing_parentCautiousPlannerFollow_say_need_try_self",
            "text": "說想自己試",
            "playerLine": "我自己執，你睇住我得唔得？",
            "attitudeId": "askAutonomy",
            "personalityDelta": {
              "independent": 2
            },
            "memoryAdd": [
              "w2_bag_mess_notice_missing_parentCautiousPlannerFollow_say_need_try_self"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長有點不放心，但讓你先試一次。"
            },
            "statusDelta": {},
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "謹慎安排型",
              "attitudeReadAs": "askAutonomy",
              "reason": "這個選項是為 書包亂到找不到通告 / parentCautiousPlannerFollow 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_bag_mess_notice_missing",
              "variantId": "parentCautiousPlannerFollow",
              "mustMatchEventTitle": "書包亂到找不到通告"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長有點不放心，但讓你先試一次。"
          },
          {
            "id": "w2_bag_mess_notice_missing_parentCautiousPlannerFollow_hide_mess",
            "text": "不想再講",
            "playerLine": "我今日好攰。",
            "attitudeId": "hideProblem",
            "personalityDelta": {
              "avoidant": 2
            },
            "memoryAdd": [
              "w2_bag_mess_notice_missing_parentCautiousPlannerFollow_hide_mess"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長停了一下，諗住先把通告找出來，整理明天再說。"
            },
            "statusDelta": {
              "理智值": -2,
              "體力": 1,
              "學業": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": -2,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "謹慎安排型",
              "attitudeReadAs": "hideProblem",
              "reason": "這個選項是為 書包亂到找不到通告 / parentCautiousPlannerFollow 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_bag_mess_notice_missing",
              "variantId": "parentCautiousPlannerFollow",
              "mustMatchEventTitle": "書包亂到找不到通告"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長停了一下，諗住先把通告找出來，整理明天再說。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "parentCautiousPlannerFollow",
          "npcIdentity": "家長/家庭長輩",
          "npcPersonality": "謹慎安排型",
          "npcDisplayName": "parentCautiousPlannerFollow"
        },
        "variantId": "parentCautiousPlannerFollow",
        "variantType": "npc",
        "identityTypeId": "identity_family_elder",
        "personalityId": "pers_cautious_planner",
        "reactionProfileId": "identity_family_elder__pers_cautious_planner"
      },
      {
        "openingDialogue": [
          {
            "speaker": "家長",
            "text": "亂啲唔緊要，但你要搵到自己需要嘅嘢。"
          },
          {
            "speaker": "家長",
            "text": "不如我哋整一個『通告位』，以後就唔使成個書包咁搵。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "亂啲唔緊要，但你要搵到自己需要嘅嘢。 不如我哋整一個『通告位』，以後就唔使成個書包咁搵。",
        "playerChoices": [
          {
            "id": "w2_bag_mess_notice_missing_parentRelaxedSupportFollow_find_needed_first",
            "text": "接受通告位",
            "playerLine": "咁通告以後放呢個文件夾。",
            "attitudeId": "practicalOrganize",
            "personalityDelta": {
              "practical": 1,
              "organized": 1
            },
            "memoryAdd": [
              "w2_bag_mess_notice_missing_parentRelaxedSupportFollow_find_needed_first"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "書包沒有立刻變完美，但至少有一個地方開始固定。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "寬鬆支持型",
              "attitudeReadAs": "practicalOrganize",
              "reason": "這個選項是為 書包亂到找不到通告 / parentRelaxedSupportFollow 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_bag_mess_notice_missing",
              "variantId": "parentRelaxedSupportFollow",
              "mustMatchEventTitle": "書包亂到找不到通告"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "書包沒有立刻變完美，但至少有一個地方開始固定。"
          },
          {
            "id": "w2_bag_mess_notice_missing_parentRelaxedSupportFollow_laugh_about_bag",
            "text": "說自己下次會小心",
            "playerLine": "我下次返到屋企就即刻拎出嚟。",
            "attitudeId": "lightAdmit",
            "personalityDelta": {
              "expressive": 1
            },
            "memoryAdd": [
              "w2_bag_mess_notice_missing_parentRelaxedSupportFollow_laugh_about_bag"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長笑笑說先試一星期，不行再改方法。"
            },
            "statusDelta": {
              "快樂": 1,
              "理智值": 1,
              "體力": -1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "warmth",
                "amount": 1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "寬鬆支持型",
              "attitudeReadAs": "lightAdmit",
              "reason": "這個選項是為 書包亂到找不到通告 / parentRelaxedSupportFollow 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_bag_mess_notice_missing",
              "variantId": "parentRelaxedSupportFollow",
              "mustMatchEventTitle": "書包亂到找不到通告"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長笑笑說先試一星期，不行再改方法。"
          },
          {
            "id": "w2_bag_mess_notice_missing_parentRelaxedSupportFollow_choose_one_pocket",
            "text": "先找完再整理",
            "playerLine": "我先搵返張通告。",
            "attitudeId": "makeSystem",
            "personalityDelta": {
              "organized": 1
            },
            "memoryAdd": [
              "w2_bag_mess_notice_missing_parentRelaxedSupportFollow_choose_one_pocket"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長讓你找，沒有馬上把事情變成教訓。"
            },
            "statusDelta": {
              "理智值": 1,
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "寬鬆支持型",
              "attitudeReadAs": "makeSystem",
              "reason": "這個選項是為 書包亂到找不到通告 / parentRelaxedSupportFollow 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_bag_mess_notice_missing",
              "variantId": "parentRelaxedSupportFollow",
              "mustMatchEventTitle": "書包亂到找不到通告"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長讓你找，沒有馬上把事情變成教訓。"
          },
          {
            "id": "w2_bag_mess_notice_missing_parentRelaxedSupportFollow_ignore_until_next_time",
            "text": "不想整理",
            "playerLine": "可唔可以聽日先？我好眼瞓。",
            "attitudeId": "delayTask",
            "personalityDelta": {
              "avoidant": 1
            },
            "memoryAdd": [
              "w2_bag_mess_notice_missing_parentRelaxedSupportFollow_ignore_until_next_time"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長提醒你明天可能又忘記，但沒有硬拉著你整理。"
            },
            "statusDelta": {
              "體力": 1,
              "學業": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "寬鬆支持型",
              "attitudeReadAs": "delayTask",
              "reason": "這個選項是為 書包亂到找不到通告 / parentRelaxedSupportFollow 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_bag_mess_notice_missing",
              "variantId": "parentRelaxedSupportFollow",
              "mustMatchEventTitle": "書包亂到找不到通告"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長提醒你明天可能又忘記，但沒有硬拉著你整理。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "parentRelaxedSupportFollow",
          "npcIdentity": "家長/家庭長輩",
          "npcPersonality": "寬鬆支持型",
          "npcDisplayName": "parentRelaxedSupportFollow"
        },
        "variantId": "parentRelaxedSupportFollow",
        "variantType": "npc",
        "identityTypeId": "identity_family_elder",
        "personalityId": "pers_relaxed_support",
        "reactionProfileId": "identity_family_elder__pers_relaxed_support"
      }
    ],
    "schemaVersion": "opening_event_pool_v5_1_balanced_event_specific_choices",
    "eventScheduling": {
      "baseWeight": 60,
      "weekRange": [
        2,
        2
      ],
      "conditions": [],
      "exclusiveGroup": null,
      "onceOnly": true,
      "cooldownWeeks": 999,
      "prerequisiteMemory": [],
      "sourceChannel": "classroom",
      "involvementRole": "direct_actor"
    },
    "eventChoiceDesignRule": "playerChoices must be authored for this exact event+variant; personalityId may alter tone and point interpretation but must not inject a generic personality choice set."
  },
  {
    "id": "w2_recess_playground_or_classroom",
    "weekPool": "W2_daily_order",
    "title": "小息去操場還是留課室",
    "sceneType": "recess_direction_choice",
    "coreSituation": "小息時間，玩家選擇社交、閱讀、探索或休息方向，適合重玩分歧。",
    "followUpHooks": [
      "recess_route_preference",
      "w6_classmate_echo"
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "pointDesign": {
      "version": "target_aware_integer_delta_v5_1_balanced",
      "mainStatusKeys": [
        "快樂",
        "理智值",
        "體力",
        "學業",
        "社交",
        "創意",
        "家庭關係",
        "自信"
      ],
      "skillKeys": [
        "繪畫",
        "鋼琴",
        "朗誦",
        "游泳",
        "足球",
        "編程",
        "閱讀",
        "班務服務"
      ],
      "note": "分數由玩家 attitudeId、舊 effects、事件題材，以及當前 NPC 身份 / 性格共同決定；同一個選項在不同 NPC 面前可以有不同結果。",
      "choiceTextRule": "choice.text is player-facing and must describe a concrete action or spoken line that answers this event dialogue; do not show abstract attitude labels.",
      "noCrossEventGenericChoiceRule": "The same choice.text should not be reused across unrelated event ids.",
      "statusBalanceRule": "每個 variant 通常只有 1–2 個選項會推進核心狀態；其餘選項偏向保留、錯過、休息、觀察或付出代價。statusDelta 是方向，不是每次點擊獎勵。",
      "skillSemantics": "skillExpDelta 是技能經驗值，不是技能等級。",
      "previewRule": "dialogueTriggerPreview is generated from openingDialogue and should not be hand-authored."
    },
    "fallbackChoices": [
      {
        "id": "w2_recess_playground_or_classroom_outgoingInvite_fallback_ask",
        "text": "問清楚這件事和自己現在要做甚麼。",
        "playerLine": "問清楚這件事和自己現在要做甚麼。",
        "attitudeId": "askForClarification",
        "personalityDelta": {
          "helpSeeking": 1
        },
        "memoryAdd": [
          "w2_recess_playground_or_classroom_outgoingInvite_fallback_ask"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你用提問避免誤會，這是只屬於當前事件的備用選項。"
        },
        "statusDelta": {
          "理智值": 1,
          "體力": -1,
          "自信": 1
        },
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "同學",
          "npcPersonality": "外向邀請型",
          "attitudeReadAs": "askForClarification",
          "reason": "這個選項是為 小息去操場還是留課室 / outgoingInvite 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w2_recess_playground_or_classroom",
          "variantId": "outgoingInvite",
          "mustMatchEventTitle": "小息去操場還是留課室"
        },
        "skillExpDelta": {}
      },
      {
        "id": "w2_recess_playground_or_classroom_outgoingInvite_fallback_observe",
        "text": "先觀察這個情境，不立刻答應或拒絕。",
        "playerLine": "先觀察這個情境，不立刻答應或拒絕。",
        "attitudeId": "observeFirst",
        "personalityDelta": {
          "observer": 1
        },
        "memoryAdd": [
          "w2_recess_playground_or_classroom_outgoingInvite_fallback_observe"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你暫時保留行動，讓自己多一點時間。"
        },
        "statusDelta": {},
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "同學",
          "npcPersonality": "外向邀請型",
          "attitudeReadAs": "observeFirst",
          "reason": "這個選項是為 小息去操場還是留課室 / outgoingInvite 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w2_recess_playground_or_classroom",
          "variantId": "outgoingInvite",
          "mustMatchEventTitle": "小息去操場還是留課室"
        },
        "skillExpDelta": {}
      }
    ],
    "variants": [
      {
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "快啲啦，小息好短㗎！我哋去操場玩，你嚟唔嚟？"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "快啲啦，小息好短㗎！我哋去操場玩，你嚟唔嚟？",
        "playerChoices": [
          {
            "id": "w2_recess_playground_or_classroom_outgoingInvite_go_playground_with_peer",
            "text": "跟他去操場",
            "playerLine": "好呀，但你唔好行咁快。",
            "attitudeId": "joinSocial",
            "personalityDelta": {
              "outgoing": 2
            },
            "memoryAdd": [
              "w2_recess_playground_or_classroom_outgoingInvite_go_playground_with_peer"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗回頭等你，一起走出課室。"
            },
            "statusDelta": {
              "快樂": 1,
              "體力": -1,
              "社交": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 3,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "joinSocial",
              "reason": "這個選項是為 小息去操場還是留課室 / outgoingInvite 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_recess_playground_or_classroom",
              "variantId": "outgoingInvite",
              "mustMatchEventTitle": "小息去操場還是留課室"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家朗回頭等你，一起走出課室。"
          },
          {
            "id": "w2_recess_playground_or_classroom_outgoingInvite_ask_where_to_queue_recess",
            "text": "問他玩甚麼",
            "playerLine": "你想玩咩先？",
            "attitudeId": "learnByFollowing",
            "personalityDelta": {
              "helpSeeking": 1,
              "observer": 1
            },
            "memoryAdd": [
              "w2_recess_playground_or_classroom_outgoingInvite_ask_where_to_queue_recess"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗一邊想一邊講三個可能，像小息可以塞滿整個世界。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "learnByFollowing",
              "reason": "這個選項是為 小息去操場還是留課室 / outgoingInvite 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_recess_playground_or_classroom",
              "variantId": "outgoingInvite",
              "mustMatchEventTitle": "小息去操場還是留課室"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家朗一邊想一邊講三個可能，像小息可以塞滿整個世界。"
          },
          {
            "id": "w2_recess_playground_or_classroom_outgoingInvite_stay_classroom_today",
            "text": "今天留課室",
            "playerLine": "我今日唔想出去，聽日先去得唔得？",
            "attitudeId": "softBoundary",
            "personalityDelta": {
              "boundary": 1,
              "cautious": 1
            },
            "memoryAdd": [
              "w2_recess_playground_or_classroom_outgoingInvite_stay_classroom_today"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗有點失望，但還是說：「咁我返嚟同你講。」"
            },
            "statusDelta": {
              "體力": 1,
              "社交": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "softBoundary",
              "reason": "這個選項是為 小息去操場還是留課室 / outgoingInvite 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_recess_playground_or_classroom",
              "variantId": "outgoingInvite",
              "mustMatchEventTitle": "小息去操場還是留課室"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家朗有點失望，但還是說：「咁我返嚟同你講。」"
          },
          {
            "id": "w2_recess_playground_or_classroom_outgoingInvite_watch_from_door",
            "text": "只去看一眼",
            "playerLine": "我去望一望先，太多人我就返嚟。",
            "attitudeId": "observeFirst",
            "personalityDelta": {
              "observer": 2
            },
            "memoryAdd": [
              "w2_recess_playground_or_classroom_outgoingInvite_watch_from_door"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你給自己留了退路，也沒有完全拒絕他的邀請。"
            },
            "statusDelta": {},
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "observeFirst",
              "reason": "這個選項是為 小息去操場還是留課室 / outgoingInvite 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_recess_playground_or_classroom",
              "variantId": "outgoingInvite",
              "mustMatchEventTitle": "小息去操場還是留課室"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "你給自己留了退路，也沒有完全拒絕他的邀請。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "outgoingInvite",
          "npcIdentity": "同學",
          "npcPersonality": "外向邀請型",
          "npcDisplayName": "outgoingInvite"
        },
        "variantId": "outgoingInvite",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "reactionProfileId": "identity_same_age_peer__pers_outgoing_inviter"
      },
      {
        "openingDialogue": [
          {
            "speaker": "穎心",
            "text": "我想留喺課室睇書。"
          },
          {
            "speaker": "穎心",
            "text": "如果你唔想去操場，我哋可以一齊睇。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "我想留喺課室睇書。 如果你唔想去操場，我哋可以一齊睇。",
        "playerChoices": [
          {
            "id": "w2_recess_playground_or_classroom_quietObserver_stay_read_with_peer",
            "text": "跟她留課室",
            "playerLine": "我都想靜一陣。",
            "attitudeId": "quietTogether",
            "personalityDelta": {
              "observer": 1,
              "gentle": 1
            },
            "memoryAdd": [
              "w2_recess_playground_or_classroom_quietObserver_stay_read_with_peer"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "課室比操場安靜，你們沒有講很多，但旁邊有人。"
            },
            "statusDelta": {
              "體力": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "quietTogether",
              "reason": "這個選項是為 小息去操場還是留課室 / quietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_recess_playground_or_classroom",
              "variantId": "quietObserver",
              "mustMatchEventTitle": "小息去操場還是留課室"
            },
            "skillExpDelta": {
              "閱讀": 1
            },
            "playerLineType": "speech",
            "resultText": "課室比操場安靜，你們沒有講很多，但旁邊有人。"
          },
          {
            "id": "w2_recess_playground_or_classroom_quietObserver_ask_what_book",
            "text": "問她在看甚麼",
            "playerLine": "你睇緊咩書？",
            "attitudeId": "gentleAsk",
            "personalityDelta": {
              "helpSeeking": 1,
              "observer": 1
            },
            "memoryAdd": [
              "w2_recess_playground_or_classroom_quietObserver_ask_what_book"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她把封面轉給你看，聲音很小地講書名。"
            },
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "gentleAsk",
              "reason": "這個選項是為 小息去操場還是留課室 / quietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_recess_playground_or_classroom",
              "variantId": "quietObserver",
              "mustMatchEventTitle": "小息去操場還是留課室"
            },
            "skillExpDelta": {
              "閱讀": 1
            },
            "playerLineType": "speech",
            "resultText": "她把封面轉給你看，聲音很小地講書名。"
          },
          {
            "id": "w2_recess_playground_or_classroom_quietObserver_draw_at_seat",
            "text": "去操場但跟她說一聲",
            "playerLine": "我去操場睇吓，返嚟再同你講。",
            "attitudeId": "soloCreate",
            "personalityDelta": {
              "creative": 1,
              "boundary": 1
            },
            "memoryAdd": [
              "w2_recess_playground_or_classroom_quietObserver_draw_at_seat"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心點點頭，沒有拉住你。"
            },
            "statusDelta": {},
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "soloCreate",
              "reason": "這個選項是為 小息去操場還是留課室 / quietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_recess_playground_or_classroom",
              "variantId": "quietObserver",
              "mustMatchEventTitle": "小息去操場還是留課室"
            },
            "skillExpDelta": {
              "繪畫": 1
            },
            "playerLineType": "speech",
            "resultText": "穎心點點頭，沒有拉住你。"
          },
          {
            "id": "w2_recess_playground_or_classroom_quietObserver_go_playground_alone_later",
            "text": "坐在座位休息",
            "playerLine": "你伏在桌上休息一下。",
            "attitudeId": "mixedExplore",
            "personalityDelta": {
              "observer": 1,
              "curious": 1
            },
            "memoryAdd": [
              "w2_recess_playground_or_classroom_quietObserver_go_playground_alone_later"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她把椅子移得輕一點，沒有弄出聲音。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "mixedExplore",
              "reason": "這個選項是為 小息去操場還是留課室 / quietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_recess_playground_or_classroom",
              "variantId": "quietObserver",
              "mustMatchEventTitle": "小息去操場還是留課室"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "她把椅子移得輕一點，沒有弄出聲音。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "quietObserver",
          "npcIdentity": "同學",
          "npcPersonality": "安靜觀察型",
          "npcDisplayName": "quietObserver"
        },
        "variantId": "quietObserver",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_quiet_observer",
        "reactionProfileId": "identity_same_age_peer__pers_quiet_observer"
      },
      {
        "openingDialogue": [
          {
            "speaker": "柏宇",
            "text": "走廊盡頭嗰邊好似好少人去。"
          },
          {
            "speaker": "柏宇",
            "text": "我哋一齊睇吓有啲咩，或者可以做基地。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "走廊盡頭嗰邊好似好少人去。 我哋一齊睇吓有啲咩，或者可以做基地。",
        "playerChoices": [
          {
            "id": "w2_recess_playground_or_classroom_curiousTroublemaker_check_corridor_with_limit",
            "text": "跟他去看",
            "playerLine": "我只係望下咋，唔可以亂入。",
            "attitudeId": "boundedExplore",
            "personalityDelta": {
              "curious": 2,
              "boundary": 1
            },
            "memoryAdd": [
              "w2_recess_playground_or_classroom_curiousTroublemaker_check_corridor_with_limit"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇立刻點頭，像你已經加入一個小任務。"
            },
            "statusDelta": {
              "快樂": 1,
              "理智值": -1,
              "體力": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "搞事好奇型",
              "attitudeReadAs": "boundedExplore",
              "reason": "這個選項是為 小息去操場還是留課室 / curiousTroublemaker 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_recess_playground_or_classroom",
              "variantId": "curiousTroublemaker",
              "mustMatchEventTitle": "小息去操場還是留課室"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "柏宇立刻點頭，像你已經加入一個小任務。"
          },
          {
            "id": "w2_recess_playground_or_classroom_curiousTroublemaker_ask_why_few_people",
            "text": "叫他先去操場",
            "playerLine": "小息去操場玩算啦，唔好第一星期就俾老師話。",
            "attitudeId": "curiousClarify",
            "personalityDelta": {
              "observer": 1,
              "curious": 1
            },
            "memoryAdd": [
              "w2_recess_playground_or_classroom_curiousTroublemaker_ask_why_few_people"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇嘆氣，但跟你往操場方向走。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "搞事好奇型",
              "attitudeReadAs": "curiousClarify",
              "reason": "這個選項是為 小息去操場還是留課室 / curiousTroublemaker 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_recess_playground_or_classroom",
              "variantId": "curiousTroublemaker",
              "mustMatchEventTitle": "小息去操場還是留課室"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "柏宇嘆氣，但跟你往操場方向走。"
          },
          {
            "id": "w2_recess_playground_or_classroom_curiousTroublemaker_refuse_corridor_playground",
            "text": "問那邊有甚麼",
            "playerLine": "嗰邊有咩呀？",
            "attitudeId": "safeChoice",
            "personalityDelta": {
              "cautious": 2
            },
            "memoryAdd": [
              "w2_recess_playground_or_classroom_curiousTroublemaker_refuse_corridor_playground"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇講唔清楚，就係因為唔清楚才想看。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": -1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "搞事好奇型",
              "attitudeReadAs": "safeChoice",
              "reason": "這個選項是為 小息去操場還是留課室 / curiousTroublemaker 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_recess_playground_or_classroom",
              "variantId": "curiousTroublemaker",
              "mustMatchEventTitle": "小息去操場還是留課室"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "柏宇講唔清楚，就係因為唔清楚才想看。"
          },
          {
            "id": "w2_recess_playground_or_classroom_curiousTroublemaker_tell_teacher_notice",
            "text": "留在座位",
            "playerLine": "我唔想去",
            "attitudeId": "ruleAware",
            "personalityDelta": {
              "cautious": 1,
              "compliant": 1
            },
            "memoryAdd": [
              "w2_recess_playground_or_classroom_curiousTroublemaker_tell_teacher_notice"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇轉身前還小聲說：「咁我返嚟話你知。」"
            },
            "statusDelta": {
              "理智值": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": -1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "搞事好奇型",
              "attitudeReadAs": "ruleAware",
              "reason": "這個選項是為 小息去操場還是留課室 / curiousTroublemaker 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_recess_playground_or_classroom",
              "variantId": "curiousTroublemaker",
              "mustMatchEventTitle": "小息去操場還是留課室"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "柏宇轉身前還小聲說：「咁我返嚟話你知。」"
          }
        ],
        "npcPointProfile": {
          "variantKey": "curiousTroublemaker",
          "npcIdentity": "同學",
          "npcPersonality": "搞事好奇型",
          "npcDisplayName": "curiousTroublemaker"
        },
        "variantId": "curiousTroublemaker",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_curious_troublemaker",
        "reactionProfileId": "identity_same_age_peer__pers_curious_troublemaker"
      },
      {
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "小息鐘響起，操場方向一下子變得很熱鬧。"
          },
          {
            "speaker": "旁白",
            "text": "課室裡也有人留下來喝水、看書、慢慢收拾桌面。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "小息鐘響起，操場方向一下子變得很熱鬧。 課室裡也有人留下來喝水、看書、慢慢收拾桌面。",
        "playerChoices": [
          {
            "id": "w2_recess_playground_or_classroom_noNpcEnvironment_go_playground_self",
            "text": "去操場",
            "playerLine": "你跟著人流走到操場。",
            "attitudeId": "soloExplore",
            "personalityDelta": {
              "curious": 1,
              "independent": 1
            },
            "memoryAdd": [
              "w2_recess_playground_or_classroom_noNpcEnvironment_go_playground_self"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "操場很吵，但你開始知道小息大家都會去哪裡。"
            },
            "statusDelta": {
              "快樂": 1,
              "體力": -1,
              "社交": 1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "環境",
              "npcPersonality": "資訊/場景提示",
              "attitudeReadAs": "soloExplore",
              "reason": "這個選項是為 小息去操場還是留課室 / noNpcEnvironment 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_recess_playground_or_classroom",
              "variantId": "noNpcEnvironment",
              "mustMatchEventTitle": "小息去操場還是留課室"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "操場很吵，但你開始知道小息大家都會去哪裡。"
          },
          {
            "id": "w2_recess_playground_or_classroom_noNpcEnvironment_stay_read_draw",
            "text": "留課室",
            "playerLine": "你留在座位，拿出書或畫紙。",
            "attitudeId": "restAndCreate",
            "personalityDelta": {
              "observer": 1,
              "creative": 1
            },
            "memoryAdd": [
              "w2_recess_playground_or_classroom_noNpcEnvironment_stay_read_draw"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "課室安靜下來，你有一小段自己的時間。"
            },
            "statusDelta": {},
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "環境",
              "npcPersonality": "資訊/場景提示",
              "attitudeReadAs": "restAndCreate",
              "reason": "這個選項是為 小息去操場還是留課室 / noNpcEnvironment 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_recess_playground_or_classroom",
              "variantId": "noNpcEnvironment",
              "mustMatchEventTitle": "小息去操場還是留課室"
            },
            "skillExpDelta": {
              "繪畫": 1,
              "閱讀": 1
            },
            "playerLineType": "action",
            "resultText": "課室安靜下來，你有一小段自己的時間。"
          },
          {
            "id": "w2_recess_playground_or_classroom_noNpcEnvironment_walk_to_toilet_route",
            "text": "去走廊看看",
            "playerLine": "你站到走廊邊，看看不同班的人來來往往。",
            "attitudeId": "learnRoute",
            "personalityDelta": {
              "selfManage": 1,
              "observer": 1
            },
            "memoryAdd": [
              "w2_recess_playground_or_classroom_noNpcEnvironment_walk_to_toilet_route"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有走太遠，但學校地圖在心裡多了一點。"
            },
            "statusDelta": {
              "理智值": 2,
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "location",
                "targetIdentityTypeId": "identity_environment_notice",
                "dimension": "familiarity",
                "amount": 1,
                "legacyKey": "地點熟悉度"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "環境",
              "npcPersonality": "資訊/場景提示",
              "attitudeReadAs": "learnRoute",
              "reason": "這個選項是為 小息去操場還是留課室 / noNpcEnvironment 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_recess_playground_or_classroom",
              "variantId": "noNpcEnvironment",
              "mustMatchEventTitle": "小息去操場還是留課室"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "你沒有走太遠，但學校地圖在心裡多了一點。"
          },
          {
            "id": "w2_recess_playground_or_classroom_noNpcEnvironment_sit_rest",
            "text": "坐著休息",
            "playerLine": "你喝水，坐著不動。",
            "attitudeId": "rest",
            "personalityDelta": {
              "boundary": 1
            },
            "memoryAdd": [
              "w2_recess_playground_or_classroom_noNpcEnvironment_sit_rest"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有多做甚麼，但身體終於慢慢放鬆。"
            },
            "statusDelta": {
              "體力": 1,
              "社交": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "環境",
              "npcPersonality": "資訊/場景提示",
              "attitudeReadAs": "rest",
              "reason": "這個選項是為 小息去操場還是留課室 / noNpcEnvironment 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w2_recess_playground_or_classroom",
              "variantId": "noNpcEnvironment",
              "mustMatchEventTitle": "小息去操場還是留課室"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "你沒有多做甚麼，但身體終於慢慢放鬆。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "noNpcEnvironment",
          "npcIdentity": "環境",
          "npcPersonality": "資訊/場景提示",
          "npcDisplayName": "noNpcEnvironment"
        },
        "variantId": "noNpcEnvironment",
        "variantType": "npc",
        "identityTypeId": "identity_environment_notice",
        "personalityId": "pers_environment_notice",
        "reactionProfileId": "identity_environment_notice__pers_environment_notice"
      }
    ],
    "schemaVersion": "opening_event_pool_v5_1_balanced_event_specific_choices",
    "eventScheduling": {
      "baseWeight": 60,
      "weekRange": [
        2,
        2
      ],
      "conditions": [],
      "exclusiveGroup": null,
      "onceOnly": true,
      "cooldownWeeks": 999,
      "prerequisiteMemory": [],
      "sourceChannel": "recess",
      "involvementRole": "direct_actor"
    },
    "eventChoiceDesignRule": "playerChoices must be authored for this exact event+variant; personalityId may alter tone and point interpretation but must not inject a generic personality choice set."
  },
  {
    "id": "w3_chinese_dictation_notice",
    "weekPool": "W3_first_academic_pressure",
    "title": "中文默書通知",
    "sceneType": "academic_schedule_chinese",
    "coreSituation": "下週有第一次中文默書，事件加入 W4 檢查 schedule，重點是玩家如何理解第一次學業壓力。",
    "blocksSameWeekWith": [
      "w3_english_spelling_notice"
    ],
    "followUpHooks": [
      "w4_test_result_reaction",
      "story_first_dictation"
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "pointDesign": {
      "version": "target_aware_integer_delta_v5_1_balanced",
      "mainStatusKeys": [
        "快樂",
        "理智值",
        "體力",
        "學業",
        "社交",
        "創意",
        "家庭關係",
        "自信"
      ],
      "skillKeys": [
        "繪畫",
        "鋼琴",
        "朗誦",
        "游泳",
        "足球",
        "編程",
        "閱讀",
        "班務服務"
      ],
      "note": "分數由玩家 attitudeId、舊 effects、事件題材，以及當前 NPC 身份 / 性格共同決定；同一個選項在不同 NPC 面前可以有不同結果。",
      "choiceTextRule": "choice.text is player-facing and must describe a concrete action or spoken line that answers this event dialogue; do not show abstract attitude labels.",
      "noCrossEventGenericChoiceRule": "The same choice.text should not be reused across unrelated event ids.",
      "statusBalanceRule": "每個 variant 通常只有 1–2 個選項會推進核心狀態；其餘選項偏向保留、錯過、休息、觀察或付出代價。statusDelta 是方向，不是每次點擊獎勵。",
      "skillSemantics": "skillExpDelta 是技能經驗值，不是技能等級。",
      "previewRule": "dialogueTriggerPreview is generated from openingDialogue and should not be hand-authored."
    },
    "fallbackChoices": [
      {
        "id": "w3_chinese_dictation_notice_teacherStrictAcademic_fallback_ask",
        "text": "問清楚這件事和自己現在要做甚麼。",
        "playerLine": "問清楚這件事和自己現在要做甚麼。",
        "attitudeId": "askForClarification",
        "personalityDelta": {
          "helpSeeking": 1
        },
        "memoryAdd": [
          "w3_chinese_dictation_notice_teacherStrictAcademic_fallback_ask"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你用提問避免誤會，這是只屬於當前事件的備用選項。"
        },
        "statusDelta": {
          "理智值": 1,
          "體力": -1,
          "自信": 1
        },
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "嚴格學業型",
          "attitudeReadAs": "askForClarification",
          "reason": "這個選項是為 中文默書通知 / teacherStrictAcademic 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w3_chinese_dictation_notice",
          "variantId": "teacherStrictAcademic",
          "mustMatchEventTitle": "中文默書通知"
        },
        "skillExpDelta": {}
      },
      {
        "id": "w3_chinese_dictation_notice_teacherStrictAcademic_fallback_observe",
        "text": "先觀察這個情境，不立刻答應或拒絕。",
        "playerLine": "先觀察這個情境，不立刻答應或拒絕。",
        "attitudeId": "observeFirst",
        "personalityDelta": {
          "observer": 1
        },
        "memoryAdd": [
          "w3_chinese_dictation_notice_teacherStrictAcademic_fallback_observe"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你暫時保留行動，讓自己多一點時間。"
        },
        "statusDelta": {},
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "嚴格學業型",
          "attitudeReadAs": "observeFirst",
          "reason": "這個選項是為 中文默書通知 / teacherStrictAcademic 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w3_chinese_dictation_notice",
          "variantId": "teacherStrictAcademic",
          "mustMatchEventTitle": "中文默書通知"
        },
        "skillExpDelta": {}
      }
    ],
    "variants": [
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "下星期第一次中文默書，範圍已經寫在黑板。"
          },
          {
            "speaker": "老師",
            "text": "唔好前一晚先溫，到時辛苦嘅係你自己。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "下星期第一次中文默書，範圍已經寫在黑板。 唔好前一晚先溫，到時辛苦嘅係你自己。",
        "playerChoices": [
          {
            "id": "w3_chinese_dictation_notice_teacherStrictAcademic_copy_words_tonight",
            "text": "抄下範圍",
            "playerLine": "你把範圍一行一行抄進手冊。",
            "attitudeId": "studyEarly",
            "personalityDelta": {
              "organized": 2,
              "compliant": 1
            },
            "memoryAdd": [
              "w3_chinese_dictation_notice_teacherStrictAcademic_copy_words_tonight"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "字未必最靚，但至少你知道要溫甚麼。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "學業": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "studyEarly",
              "reason": "這個選項是為 中文默書通知 / teacherStrictAcademic 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_chinese_dictation_notice",
              "variantId": "teacherStrictAcademic",
              "mustMatchEventTitle": "中文默書通知"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "字未必最靚，但至少你知道要溫甚麼。"
          },
          {
            "id": "w3_chinese_dictation_notice_teacherStrictAcademic_mark_dictation_scope",
            "text": "問要默哪些詞語",
            "playerLine": "老師，係咪呢幾個詞都要默？",
            "attitudeId": "recordTask",
            "personalityDelta": {
              "organized": 1
            },
            "memoryAdd": [
              "w3_chinese_dictation_notice_teacherStrictAcademic_mark_dictation_scope"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師指著黑板說：「對，抄清楚。」"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "recordTask",
              "reason": "這個選項是為 中文默書通知 / teacherStrictAcademic 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_chinese_dictation_notice",
              "variantId": "teacherStrictAcademic",
              "mustMatchEventTitle": "中文默書通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師指著黑板說：「對，抄清楚。」"
          },
          {
            "id": "w3_chinese_dictation_notice_teacherStrictAcademic_ask_how_many_words",
            "text": "有點怕",
            "playerLine": "你看著範圍，沒有立刻出聲。",
            "attitudeId": "clarifyStudy",
            "personalityDelta": {
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w3_chinese_dictation_notice_teacherStrictAcademic_ask_how_many_words"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "默書還未開始，壓力已經先來了。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "學業": 1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "clarifyStudy",
              "reason": "這個選項是為 中文默書通知 / teacherStrictAcademic 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_chinese_dictation_notice",
              "variantId": "teacherStrictAcademic",
              "mustMatchEventTitle": "中文默書通知"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "默書還未開始，壓力已經先來了。"
          },
          {
            "id": "w3_chinese_dictation_notice_teacherStrictAcademic_ignore_until_later",
            "text": "想回家再算",
            "playerLine": "你把範圍抄了，但沒有想今晚要不要溫。",
            "attitudeId": "delayStudy",
            "personalityDelta": {
              "avoidant": 1
            },
            "memoryAdd": [
              "w3_chinese_dictation_notice_teacherStrictAcademic_ignore_until_later"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "事情被放進手冊，也被放進明天的自己手裡。"
            },
            "statusDelta": {
              "理智值": -1,
              "體力": 1,
              "學業": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": -1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "delayStudy",
              "reason": "這個選項是為 中文默書通知 / teacherStrictAcademic 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_chinese_dictation_notice",
              "variantId": "teacherStrictAcademic",
              "mustMatchEventTitle": "中文默書通知"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "事情被放進手冊，也被放進明天的自己手裡。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "teacherStrictAcademic",
          "npcIdentity": "老師",
          "npcPersonality": "嚴格學業型",
          "npcDisplayName": "teacherStrictAcademic"
        },
        "variantId": "teacherStrictAcademic",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_strict_academic",
        "reactionProfileId": "identity_teacher__pers_strict_academic"
      },
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "第一次默書唔係嚇你哋，係俾大家試吓點樣溫書。"
          },
          {
            "speaker": "老師",
            "text": "今日可以先識三個詞，聽日再加，唔使一口氣就識晒。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "第一次默書唔係嚇你哋，係俾大家試吓點樣溫書。 今日可以先識三個詞，聽日再加，唔使一口氣就識晒。",
        "playerChoices": [
          {
            "id": "w3_chinese_dictation_notice_teacherEncouraging_try_three_words",
            "text": "今晚先抄一次",
            "playerLine": "我今晚試吓抄一次詞語。",
            "attitudeId": "smallStart",
            "personalityDelta": {
              "growthMindset": 1,
              "organized": 1
            },
            "memoryAdd": [
              "w3_chinese_dictation_notice_teacherEncouraging_try_three_words"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說這是好開始，不需要一開始就完美。"
            },
            "statusDelta": {
              "體力": -1,
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "smallStart",
              "reason": "這個選項是為 中文默書通知 / teacherEncouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_chinese_dictation_notice",
              "variantId": "teacherEncouraging",
              "mustMatchEventTitle": "中文默書通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師說這是好開始，不需要一開始就完美。"
          },
          {
            "id": "w3_chinese_dictation_notice_teacherEncouraging_ask_family_method",
            "text": "問怎樣溫",
            "playerLine": "如果我唔識溫，應該點做？",
            "attitudeId": "askFamilyStudy",
            "personalityDelta": {
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w3_chinese_dictation_notice_teacherEncouraging_ask_family_method"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師教你先讀、再遮住寫、最後自己檢查。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "學業": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "askFamilyStudy",
              "reason": "這個選項是為 中文默書通知 / teacherEncouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_chinese_dictation_notice",
              "variantId": "teacherEncouraging",
              "mustMatchEventTitle": "中文默書通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師教你先讀、再遮住寫、最後自己檢查。"
          },
          {
            "id": "w3_chinese_dictation_notice_teacherEncouraging_tell_teacher_worried",
            "text": "跟同學講怕",
            "playerLine": "我驚記唔晒。",
            "attitudeId": "seekSupport",
            "personalityDelta": {
              "helpSeeking": 2
            },
            "memoryAdd": [
              "w3_chinese_dictation_notice_teacherEncouraging_tell_teacher_worried"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "旁邊有人也小聲說自己怕，壓力忽然沒有那麼孤單。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "warmth",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "seekSupport",
              "reason": "這個選項是為 中文默書通知 / teacherEncouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_chinese_dictation_notice",
              "variantId": "teacherEncouraging",
              "mustMatchEventTitle": "中文默書通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "旁邊有人也小聲說自己怕，壓力忽然沒有那麼孤單。"
          },
          {
            "id": "w3_chinese_dictation_notice_teacherEncouraging_write_scope_only",
            "text": "先抄範圍",
            "playerLine": "你先把範圍抄好，其他晚一點再想。",
            "attitudeId": "recordOnly",
            "personalityDelta": {
              "cautious": 1
            },
            "memoryAdd": [
              "w3_chinese_dictation_notice_teacherEncouraging_write_scope_only"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有立刻準備好，但至少沒有漏掉通知。"
            },
            "statusDelta": {},
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "recordOnly",
              "reason": "這個選項是為 中文默書通知 / teacherEncouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_chinese_dictation_notice",
              "variantId": "teacherEncouraging",
              "mustMatchEventTitle": "中文默書通知"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "你沒有立刻準備好，但至少沒有漏掉通知。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "teacherEncouraging",
          "npcIdentity": "老師",
          "npcPersonality": "鼓勵型",
          "npcDisplayName": "teacherEncouraging"
        },
        "variantId": "teacherEncouraging",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_encouraging_teacher",
        "reactionProfileId": "identity_teacher__pers_encouraging_teacher"
      },
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "如果你唔知點溫，可以問我，或者返屋企問屋企人。"
          },
          {
            "speaker": "老師",
            "text": "第一次唔係定輸贏，重點係你知唔知道自己卡喺邊。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "如果你唔知點溫，可以問我，或者返屋企問屋企人。 第一次唔係定輸贏，重點係你知唔知道自己卡喺邊。",
        "playerChoices": [
          {
            "id": "w3_chinese_dictation_notice_teacherCaring_ask_teacher_study_way",
            "text": "說不知道怎樣溫",
            "playerLine": "老師，我唔係好識點溫默書。",
            "attitudeId": "seekTeacherMethod",
            "personalityDelta": {
              "helpSeeking": 2
            },
            "memoryAdd": [
              "w3_chinese_dictation_notice_teacherCaring_ask_teacher_study_way"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師沒有笑你，只叫你先試三個詞。"
            },
            "statusDelta": {
              "理智值": 2,
              "體力": -1,
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "warmth",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "關顧型",
              "attitudeReadAs": "seekTeacherMethod",
              "reason": "這個選項是為 中文默書通知 / teacherCaring 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_chinese_dictation_notice",
              "variantId": "teacherCaring",
              "mustMatchEventTitle": "中文默書通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師沒有笑你，只叫你先試三個詞。"
          },
          {
            "id": "w3_chinese_dictation_notice_teacherCaring_tell_family_need_help",
            "text": "問可否回家問",
            "playerLine": "我返屋企問屋企人得唔得？",
            "attitudeId": "askFamilyStudy",
            "personalityDelta": {
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w3_chinese_dictation_notice_teacherCaring_tell_family_need_help"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說可以，並提醒你把範圍寫清楚。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "關顧型",
              "attitudeReadAs": "askFamilyStudy",
              "reason": "這個選項是為 中文默書通知 / teacherCaring 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_chinese_dictation_notice",
              "variantId": "teacherCaring",
              "mustMatchEventTitle": "中文默書通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師說可以，並提醒你把範圍寫清楚。"
          },
          {
            "id": "w3_chinese_dictation_notice_teacherCaring_copy_once_slowly",
            "text": "抄下自己怕的字",
            "playerLine": "你在旁邊圈起覺得難的字。",
            "attitudeId": "gentleStudy",
            "personalityDelta": {
              "organized": 1,
              "selfCompassion": 1
            },
            "memoryAdd": [
              "w3_chinese_dictation_notice_teacherCaring_copy_once_slowly"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把害怕變成幾個具體的字。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "學業": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "關顧型",
              "attitudeReadAs": "gentleStudy",
              "reason": "這個選項是為 中文默書通知 / teacherCaring 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_chinese_dictation_notice",
              "variantId": "teacherCaring",
              "mustMatchEventTitle": "中文默書通知"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "你把害怕變成幾個具體的字。"
          },
          {
            "id": "w3_chinese_dictation_notice_teacherCaring_hide_fear",
            "text": "暫時不想看",
            "playerLine": "你把手冊合上。",
            "attitudeId": "hideAnxiety",
            "personalityDelta": {
              "avoidant": 1,
              "shy": 1
            },
            "memoryAdd": [
              "w3_chinese_dictation_notice_teacherCaring_hide_fear"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "壓力沒有消失，只是被你暫時收起來。"
            },
            "statusDelta": {
              "理智值": -1,
              "體力": 1,
              "自信": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "關顧型",
              "attitudeReadAs": "hideAnxiety",
              "reason": "這個選項是為 中文默書通知 / teacherCaring 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_chinese_dictation_notice",
              "variantId": "teacherCaring",
              "mustMatchEventTitle": "中文默書通知"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "壓力沒有消失，只是被你暫時收起來。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "teacherCaring",
          "npcIdentity": "老師",
          "npcPersonality": "關顧型",
          "npcDisplayName": "teacherCaring"
        },
        "variantId": "teacherCaring",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_caring_teacher",
        "reactionProfileId": "identity_teacher__pers_caring_teacher"
      },
      {
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "你識晒未？我阿媽話默書要九十分先算好。"
          },
          {
            "speaker": "梓軒",
            "text": "不過我都未溫晒，係……今日返去會繼續溫。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "你識晒未？我阿媽話默書要九十分先算好。 不過我都未溫晒，係……今日返去會繼續溫。",
        "playerChoices": [
          {
            "id": "w3_chinese_dictation_notice_classmateCompetitive_say_prepare_own_way",
            "text": "不接他的分數話題",
            "playerLine": "我先記住範圍，分數之後先算。",
            "attitudeId": "boundaryStudy",
            "personalityDelta": {
              "boundary": 2
            },
            "memoryAdd": [
              "w3_chinese_dictation_notice_classmateCompetitive_say_prepare_own_way"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒看你一眼，像沒想到你不跟著比分。"
            },
            "statusDelta": {
              "理智值": 1,
              "社交": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "boundaryStudy",
              "reason": "這個選項是為 中文默書通知 / classmateCompetitive 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_chinese_dictation_notice",
              "variantId": "classmateCompetitive",
              "mustMatchEventTitle": "中文默書通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "梓軒看你一眼，像沒想到你不跟著比分。"
          },
          {
            "id": "w3_chinese_dictation_notice_classmateCompetitive_ask_how_he_studies",
            "text": "問他最怕哪個字",
            "playerLine": "你有冇邊個字都覺得難？",
            "attitudeId": "learnFromPeer",
            "personalityDelta": {
              "helpSeeking": 1,
              "strategic": 1
            },
            "memoryAdd": [
              "w3_chinese_dictation_notice_classmateCompetitive_ask_how_he_studies"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒本來想說沒有，最後指了其中一個字。"
            },
            "statusDelta": {
              "理智值": -1,
              "學業": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "learnFromPeer",
              "reason": "這個選項是為 中文默書通知 / classmateCompetitive 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_chinese_dictation_notice",
              "variantId": "classmateCompetitive",
              "mustMatchEventTitle": "中文默書通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "梓軒本來想說沒有，最後指了其中一個字。"
          },
          {
            "id": "w3_chinese_dictation_notice_classmateCompetitive_admit_worried_to_peer",
            "text": "說自己有點怕",
            "playerLine": "我有少少驚默書。",
            "attitudeId": "shareFear",
            "personalityDelta": {
              "expressive": 1
            },
            "memoryAdd": [
              "w3_chinese_dictation_notice_classmateCompetitive_admit_worried_to_peer"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒安靜了一秒，才說：「其實我都唔想錯好多。」"
            },
            "statusDelta": {
              "理智值": -1,
              "社交": 1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "shareFear",
              "reason": "這個選項是為 中文默書通知 / classmateCompetitive 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_chinese_dictation_notice",
              "variantId": "classmateCompetitive",
              "mustMatchEventTitle": "中文默書通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "梓軒安靜了一秒，才說：「其實我都唔想錯好多。」"
          },
          {
            "id": "w3_chinese_dictation_notice_classmateCompetitive_compete_score",
            "text": "問他溫到哪裡",
            "playerLine": "咁你溫到邊？",
            "attitudeId": "compete",
            "personalityDelta": {
              "competitive": 2
            },
            "memoryAdd": [
              "w3_chinese_dictation_notice_classmateCompetitive_compete_score"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "話題變成小小比賽，你們都更留意對方準備到哪裡。"
            },
            "statusDelta": {
              "理智值": -2,
              "社交": 1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "respect",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "compete",
              "reason": "這個選項是為 中文默書通知 / classmateCompetitive 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_chinese_dictation_notice",
              "variantId": "classmateCompetitive",
              "mustMatchEventTitle": "中文默書通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "話題變成小小比賽，你們都更留意對方準備到哪裡。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "classmateCompetitive",
          "npcIdentity": "同學",
          "npcPersonality": "競爭同學型",
          "npcDisplayName": "classmateCompetitive"
        },
        "variantId": "classmateCompetitive",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_competitive_peer",
        "reactionProfileId": "identity_same_age_peer__pers_competitive_peer"
      },
      {
        "openingDialogue": [
          {
            "speaker": "穎心",
            "text": "我諗住今晚抄一次詞語。"
          },
          {
            "speaker": "穎心",
            "text": "可能抄完會冇咁亂。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "我諗住今晚抄一次詞語。 可能抄完會冇咁亂。",
        "playerChoices": [
          {
            "id": "w3_chinese_dictation_notice_classmateQuietObserver_copy_words_together",
            "text": "問她怎樣抄",
            "playerLine": "你係咪每個詞抄一次？",
            "attitudeId": "quietStudyTogether",
            "personalityDelta": {
              "helpSeeking": 1,
              "gentle": 1
            },
            "memoryAdd": [
              "w3_chinese_dictation_notice_classmateQuietObserver_copy_words_together"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心把手冊推近一點，讓你看她抄範圍的方法。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "學業": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "quietStudyTogether",
              "reason": "這個選項是為 中文默書通知 / classmateQuietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_chinese_dictation_notice",
              "variantId": "classmateQuietObserver",
              "mustMatchEventTitle": "中文默書通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "穎心把手冊推近一點，讓你看她抄範圍的方法。"
          },
          {
            "id": "w3_chinese_dictation_notice_classmateQuietObserver_borrow_copy_method",
            "text": "說想一起溫",
            "playerLine": "小息可唔可以互相讀一次？",
            "attitudeId": "askMethod",
            "personalityDelta": {
              "helpSeeking": 1,
              "observer": 1
            },
            "memoryAdd": [
              "w3_chinese_dictation_notice_classmateQuietObserver_borrow_copy_method"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她猶豫了一下，點頭說：「細聲啲得唔得？」"
            },
            "statusDelta": {
              "理智值": 2,
              "體力": -1,
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "askMethod",
              "reason": "這個選項是為 中文默書通知 / classmateQuietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_chinese_dictation_notice",
              "variantId": "classmateQuietObserver",
              "mustMatchEventTitle": "中文默書通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "她猶豫了一下，點頭說：「細聲啲得唔得？」"
          },
          {
            "id": "w3_chinese_dictation_notice_classmateQuietObserver_say_i_will_mark_scope",
            "text": "自己先記低",
            "playerLine": "我先抄低，返屋企再諗。",
            "attitudeId": "recordOnly",
            "personalityDelta": {
              "cautious": 1
            },
            "memoryAdd": [
              "w3_chinese_dictation_notice_classmateQuietObserver_say_i_will_mark_scope"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她沒有催你，只把自己的字慢慢寫好。"
            },
            "statusDelta": {},
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "recordOnly",
              "reason": "這個選項是為 中文默書通知 / classmateQuietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_chinese_dictation_notice",
              "variantId": "classmateQuietObserver",
              "mustMatchEventTitle": "中文默書通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "她沒有催你，只把自己的字慢慢寫好。"
          },
          {
            "id": "w3_chinese_dictation_notice_classmateQuietObserver_avoid_topic",
            "text": "說怕寫錯",
            "playerLine": "我驚我寫錯字又唔知。",
            "attitudeId": "avoidStudyTalk",
            "personalityDelta": {
              "avoidant": 1
            },
            "memoryAdd": [
              "w3_chinese_dictation_notice_classmateQuietObserver_avoid_topic"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心小聲說可以用鉛筆先圈起來。"
            },
            "statusDelta": {
              "體力": 1,
              "學業": -1,
              "社交": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": -1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "avoidStudyTalk",
              "reason": "這個選項是為 中文默書通知 / classmateQuietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_chinese_dictation_notice",
              "variantId": "classmateQuietObserver",
              "mustMatchEventTitle": "中文默書通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "穎心小聲說可以用鉛筆先圈起來。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "classmateQuietObserver",
          "npcIdentity": "同學",
          "npcPersonality": "安靜觀察型",
          "npcDisplayName": "classmateQuietObserver"
        },
        "variantId": "classmateQuietObserver",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_quiet_observer",
        "reactionProfileId": "identity_same_age_peer__pers_quiet_observer"
      }
    ],
    "schemaVersion": "opening_event_pool_v5_1_balanced_event_specific_choices",
    "eventScheduling": {
      "baseWeight": 60,
      "weekRange": [
        3,
        3
      ],
      "conditions": [],
      "exclusiveGroup": "w3_first_academic_pressure_one_only",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "prerequisiteMemory": [],
      "sourceChannel": "classroom",
      "involvementRole": "direct_actor"
    },
    "eventChoiceDesignRule": "playerChoices must be authored for this exact event+variant; personalityId may alter tone and point interpretation but must not inject a generic personality choice set."
  },
  {
    "id": "w3_english_spelling_notice",
    "weekPool": "W3_first_academic_pressure",
    "title": "英文生字小測通知",
    "sceneType": "academic_schedule_english",
    "coreSituation": "英文生字小測和中文默書不同，重點是玩家不一定擅長英文，也不應與中文默書同週強行出現。",
    "blocksSameWeekWith": [
      "w3_chinese_dictation_notice"
    ],
    "followUpHooks": [
      "w4_test_result_reaction"
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "pointDesign": {
      "version": "target_aware_integer_delta_v5_1_balanced",
      "mainStatusKeys": [
        "快樂",
        "理智值",
        "體力",
        "學業",
        "社交",
        "創意",
        "家庭關係",
        "自信"
      ],
      "skillKeys": [
        "繪畫",
        "鋼琴",
        "朗誦",
        "游泳",
        "足球",
        "編程",
        "閱讀",
        "班務服務"
      ],
      "note": "分數由玩家 attitudeId、舊 effects、事件題材，以及當前 NPC 身份 / 性格共同決定；同一個選項在不同 NPC 面前可以有不同結果。",
      "choiceTextRule": "choice.text is player-facing and must describe a concrete action or spoken line that answers this event dialogue; do not show abstract attitude labels.",
      "noCrossEventGenericChoiceRule": "The same choice.text should not be reused across unrelated event ids.",
      "statusBalanceRule": "每個 variant 通常只有 1–2 個選項會推進核心狀態；其餘選項偏向保留、錯過、休息、觀察或付出代價。statusDelta 是方向，不是每次點擊獎勵。",
      "skillSemantics": "skillExpDelta 是技能經驗值，不是技能等級。",
      "previewRule": "dialogueTriggerPreview is generated from openingDialogue and should not be hand-authored."
    },
    "fallbackChoices": [
      {
        "id": "w3_english_spelling_notice_teacherStrict_fallback_ask",
        "text": "問清楚這件事和自己現在要做甚麼。",
        "playerLine": "問清楚這件事和自己現在要做甚麼。",
        "attitudeId": "askForClarification",
        "personalityDelta": {
          "helpSeeking": 1
        },
        "memoryAdd": [
          "w3_english_spelling_notice_teacherStrict_fallback_ask"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你用提問避免誤會，這是只屬於當前事件的備用選項。"
        },
        "statusDelta": {
          "理智值": 1,
          "體力": -1,
          "自信": 1
        },
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "嚴格學業型",
          "attitudeReadAs": "askForClarification",
          "reason": "這個選項是為 英文生字小測通知 / teacherStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w3_english_spelling_notice",
          "variantId": "teacherStrict",
          "mustMatchEventTitle": "英文生字小測通知"
        },
        "skillExpDelta": {}
      },
      {
        "id": "w3_english_spelling_notice_teacherStrict_fallback_observe",
        "text": "先觀察這個情境，不立刻答應或拒絕。",
        "playerLine": "先觀察這個情境，不立刻答應或拒絕。",
        "attitudeId": "observeFirst",
        "personalityDelta": {
          "observer": 1
        },
        "memoryAdd": [
          "w3_english_spelling_notice_teacherStrict_fallback_observe"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你暫時保留行動，讓自己多一點時間。"
        },
        "statusDelta": {},
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "嚴格學業型",
          "attitudeReadAs": "observeFirst",
          "reason": "這個選項是為 英文生字小測通知 / teacherStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w3_english_spelling_notice",
          "variantId": "teacherStrict",
          "mustMatchEventTitle": "英文生字小測通知"
        },
        "skillExpDelta": {}
      }
    ],
    "variants": [
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "Spelling 唔係靠估。每日都記少少就會易啲。"
          },
          {
            "speaker": "老師",
            "text": "我會測今日派嗰張 list，返去讀清楚。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "Spelling 唔係靠估。每日都記少少就會易啲。 我會測今日派嗰張 list，返去讀清楚。",
        "playerChoices": [
          {
            "id": "w3_english_spelling_notice_teacherStrict_write_three_times",
            "text": "抄低日期",
            "playerLine": "你在手冊寫下 spelling 日期。",
            "attitudeId": "spellingPractice",
            "personalityDelta": {
              "organized": 1,
              "compliant": 1
            },
            "memoryAdd": [
              "w3_english_spelling_notice_teacherStrict_write_three_times"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "至少你知道它不是突然出現的事。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "學業": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "spellingPractice",
              "reason": "這個選項是為 英文生字小測通知 / teacherStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_english_spelling_notice",
              "variantId": "teacherStrict",
              "mustMatchEventTitle": "英文生字小測通知"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "至少你知道它不是突然出現的事。"
          },
          {
            "id": "w3_english_spelling_notice_teacherStrict_ask_pronunciation_after",
            "text": "問讀音",
            "playerLine": "老師，呢個字點讀？",
            "attitudeId": "askPronunciation",
            "personalityDelta": {
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w3_english_spelling_notice_teacherStrict_ask_pronunciation_after"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師讀了一次，叫全班一起跟讀。"
            },
            "statusDelta": {
              "體力": -1,
              "學業": 1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "askPronunciation",
              "reason": "這個選項是為 英文生字小測通知 / teacherStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_english_spelling_notice",
              "variantId": "teacherStrict",
              "mustMatchEventTitle": "英文生字小測通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師讀了一次，叫全班一起跟讀。"
          },
          {
            "id": "w3_english_spelling_notice_teacherStrict_cover_and_spell",
            "text": "想先避開英文",
            "playerLine": "你看著生字，暫時不想碰它。",
            "attitudeId": "selfTest",
            "personalityDelta": {
              "selfManage": 1
            },
            "memoryAdd": [
              "w3_english_spelling_notice_teacherStrict_cover_and_spell"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "紙還在桌上，英文沒有因為你不看就消失。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "selfTest",
              "reason": "這個選項是為 英文生字小測通知 / teacherStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_english_spelling_notice",
              "variantId": "teacherStrict",
              "mustMatchEventTitle": "英文生字小測通知"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "紙還在桌上，英文沒有因為你不看就消失。"
          },
          {
            "id": "w3_english_spelling_notice_teacherStrict_dont_touch_english",
            "text": "打算每天看一點",
            "playerLine": "我今晚先背三個字。",
            "attitudeId": "avoidSubject",
            "personalityDelta": {
              "avoidant": 1
            },
            "memoryAdd": [
              "w3_english_spelling_notice_teacherStrict_dont_touch_english"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師點頭，覺得這比空口說會溫更實際。"
            },
            "statusDelta": {
              "快樂": -1,
              "體力": 1,
              "學業": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": -1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "avoidSubject",
              "reason": "這個選項是為 英文生字小測通知 / teacherStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_english_spelling_notice",
              "variantId": "teacherStrict",
              "mustMatchEventTitle": "英文生字小測通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師點頭，覺得這比空口說會溫更實際。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "teacherStrict",
          "npcIdentity": "老師",
          "npcPersonality": "嚴格學業型",
          "npcDisplayName": "teacherStrict"
        },
        "variantId": "teacherStrict",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_strict_academic",
        "reactionProfileId": "identity_teacher__pers_strict_academic"
      },
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "你可以先記三個最熟嘅字，再慢慢加。"
          },
          {
            "speaker": "老師",
            "text": "英文唔係一開始就全部識，多識一個都係進步。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "你可以先記三個最熟嘅字，再慢慢加。 英文唔係一開始就全部識，多識一個都係進步。",
        "playerChoices": [
          {
            "id": "w3_english_spelling_notice_teacherEncouraging_pick_three_words",
            "text": "選三個先背",
            "playerLine": "我先記呢三個。",
            "attitudeId": "smallStart",
            "personalityDelta": {
              "growthMindset": 1
            },
            "memoryAdd": [
              "w3_english_spelling_notice_teacherEncouraging_pick_three_words"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "範圍還是很長，但你有了第一步。"
            },
            "statusDelta": {
              "體力": -1,
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "warmth",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "smallStart",
              "reason": "這個選項是為 英文生字小測通知 / teacherEncouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_english_spelling_notice",
              "variantId": "teacherEncouraging",
              "mustMatchEventTitle": "英文生字小測通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "範圍還是很長，但你有了第一步。"
          },
          {
            "id": "w3_english_spelling_notice_teacherEncouraging_ask_family_read",
            "text": "問可否畫圖記字",
            "playerLine": "我可唔可以畫個小圖幫自己記？",
            "attitudeId": "familyStudy",
            "personalityDelta": {
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w3_english_spelling_notice_teacherEncouraging_ask_family_read"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說可以，只要最後寫得出英文。"
            },
            "statusDelta": {
              "體力": -1,
              "學業": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "familyStudy",
              "reason": "這個選項是為 英文生字小測通知 / teacherEncouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_english_spelling_notice",
              "variantId": "teacherEncouraging",
              "mustMatchEventTitle": "英文生字小測通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師說可以，只要最後寫得出英文。"
          },
          {
            "id": "w3_english_spelling_notice_teacherEncouraging_make_word_picture",
            "text": "找同學互問",
            "playerLine": "小息你問我，我問你得唔得？",
            "attitudeId": "creativeMemory",
            "personalityDelta": {
              "creative": 1
            },
            "memoryAdd": [
              "w3_english_spelling_notice_teacherEncouraging_make_word_picture"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "同學點頭，你們把 spelling 變成小小練習遊戲。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "學業": 1,
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "creativeMemory",
              "reason": "這個選項是為 英文生字小測通知 / teacherEncouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_english_spelling_notice",
              "variantId": "teacherEncouraging",
              "mustMatchEventTitle": "英文生字小測通知"
            },
            "skillExpDelta": {
              "繪畫": 1
            },
            "playerLineType": "speech",
            "resultText": "同學點頭，你們把 spelling 變成小小練習遊戲。"
          },
          {
            "id": "w3_english_spelling_notice_teacherEncouraging_say_english_scary",
            "text": "說英文有點難",
            "playerLine": "我覺得英文好難讀。",
            "attitudeId": "shyTry",
            "personalityDelta": {
              "selfAware": 1,
              "shy": 1
            },
            "memoryAdd": [
              "w3_english_spelling_notice_teacherEncouraging_say_english_scary"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師放慢讀音，讓你聽多一次。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "warmth",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "shyTry",
              "reason": "這個選項是為 英文生字小測通知 / teacherEncouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_english_spelling_notice",
              "variantId": "teacherEncouraging",
              "mustMatchEventTitle": "英文生字小測通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師放慢讀音，讓你聽多一次。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "teacherEncouraging",
          "npcIdentity": "老師",
          "npcPersonality": "鼓勵型",
          "npcDisplayName": "teacherEncouraging"
        },
        "variantId": "teacherEncouraging",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_encouraging_teacher",
        "reactionProfileId": "identity_teacher__pers_encouraging_teacher"
      },
      {
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "我哋不如互相問 spelling？你問我 apple，我問你 school。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "我哋不如互相問 spelling？你問我 apple，我問你 school。",
        "playerChoices": [
          {
            "id": "w3_english_spelling_notice_classmateOutgoing_mutual_quiz_recess",
            "text": "答應互問",
            "playerLine": "好呀，但你唔好講太快。",
            "attitudeId": "peerPractice",
            "personalityDelta": {
              "outgoing": 1,
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w3_english_spelling_notice_classmateOutgoing_mutual_quiz_recess"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗立刻拿起生字紙，像已經開始玩遊戲。"
            },
            "statusDelta": {
              "體力": -1,
              "學業": 1,
              "社交": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 3,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "peerPractice",
              "reason": "這個選項是為 英文生字小測通知 / classmateOutgoing 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_english_spelling_notice",
              "variantId": "classmateOutgoing",
              "mustMatchEventTitle": "英文生字小測通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家朗立刻拿起生字紙，像已經開始玩遊戲。"
          },
          {
            "id": "w3_english_spelling_notice_classmateOutgoing_ask_read_aloud",
            "text": "先問三個",
            "playerLine": "我今日只問三個，得唔得？",
            "attitudeId": "askPeerHelp",
            "personalityDelta": {
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w3_english_spelling_notice_classmateOutgoing_ask_read_aloud"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗說可以，然後很認真地數到三。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "學業": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "askPeerHelp",
              "reason": "這個選項是為 英文生字小測通知 / classmateOutgoing 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_english_spelling_notice",
              "variantId": "classmateOutgoing",
              "mustMatchEventTitle": "英文生字小測通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家朗說可以，然後很認真地數到三。"
          },
          {
            "id": "w3_english_spelling_notice_classmateOutgoing_only_one_round",
            "text": "說想自己溫",
            "playerLine": "我自己睇一次先。",
            "attitudeId": "limitedPractice",
            "personalityDelta": {
              "boundary": 1
            },
            "memoryAdd": [
              "w3_english_spelling_notice_classmateOutgoing_only_one_round"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗點頭，但有點等不及想找人問。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "limitedPractice",
              "reason": "這個選項是為 英文生字小測通知 / classmateOutgoing 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_english_spelling_notice",
              "variantId": "classmateOutgoing",
              "mustMatchEventTitle": "英文生字小測通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家朗點頭，但有點等不及想找人問。"
          },
          {
            "id": "w3_english_spelling_notice_classmateOutgoing_rather_self_study",
            "text": "叫他讀慢點",
            "playerLine": "你讀英文嗰陣慢啲，我聽唔切。",
            "attitudeId": "studyAlone",
            "personalityDelta": {
              "boundary": 1,
              "observer": 1
            },
            "memoryAdd": [
              "w3_english_spelling_notice_classmateOutgoing_rather_self_study"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗放慢聲音，雖然還是有點急。"
            },
            "statusDelta": {
              "理智值": 1,
              "社交": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "studyAlone",
              "reason": "這個選項是為 英文生字小測通知 / classmateOutgoing 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_english_spelling_notice",
              "variantId": "classmateOutgoing",
              "mustMatchEventTitle": "英文生字小測通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家朗放慢聲音，雖然還是有點急。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "classmateOutgoing",
          "npcIdentity": "同學",
          "npcPersonality": "外向邀請型",
          "npcDisplayName": "classmateOutgoing"
        },
        "variantId": "classmateOutgoing",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "reactionProfileId": "identity_same_age_peer__pers_outgoing_inviter"
      },
      {
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "我已經識晒啦。"
          },
          {
            "speaker": "梓軒",
            "text": "……應該識晒，反正我今晚再叫我阿媽問。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "我已經識晒啦。 ……應該識晒，反正我今晚再叫我阿媽問。",
        "playerChoices": [
          {
            "id": "w3_english_spelling_notice_classmateCompetitive_dont_compare_spelling",
            "text": "不接比較",
            "playerLine": "哦，我慢慢記。",
            "attitudeId": "boundaryStudy",
            "personalityDelta": {
              "boundary": 2
            },
            "memoryAdd": [
              "w3_english_spelling_notice_classmateCompetitive_dont_compare_spelling"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒有點失望，因為你沒有跟他比。"
            },
            "statusDelta": {
              "理智值": 1,
              "社交": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "boundaryStudy",
              "reason": "這個選項是為 英文生字小測通知 / classmateCompetitive 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_english_spelling_notice",
              "variantId": "classmateCompetitive",
              "mustMatchEventTitle": "英文生字小測通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "梓軒有點失望，因為你沒有跟他比。"
          },
          {
            "id": "w3_english_spelling_notice_classmateCompetitive_ask_hardest_word",
            "text": "問他怎樣記",
            "playerLine": "你點得記咁快？",
            "attitudeId": "strategicAsk",
            "personalityDelta": {
              "strategic": 1,
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w3_english_spelling_notice_classmateCompetitive_ask_hardest_word"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "他本來想炫耀，最後講了自己會遮住中文試寫英文。"
            },
            "statusDelta": {
              "理智值": -1,
              "學業": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "respect",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "strategicAsk",
              "reason": "這個選項是為 英文生字小測通知 / classmateCompetitive 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_english_spelling_notice",
              "variantId": "classmateCompetitive",
              "mustMatchEventTitle": "英文生字小測通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "他本來想炫耀，最後講了自己會遮住中文試寫英文。"
          },
          {
            "id": "w3_english_spelling_notice_classmateCompetitive_challenge_three_words",
            "text": "說自己還未識",
            "playerLine": "我未識晒，我今晚先記幾個。",
            "attitudeId": "smallCompete",
            "personalityDelta": {
              "competitive": 1,
              "boundary": 1
            },
            "memoryAdd": [
              "w3_english_spelling_notice_classmateCompetitive_challenge_three_words"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒張口想說甚麼，但最後只說：「咁你快啲啦。」"
            },
            "statusDelta": {
              "理智值": -1,
              "體力": -1,
              "學業": 1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "respect",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "smallCompete",
              "reason": "這個選項是為 英文生字小測通知 / classmateCompetitive 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_english_spelling_notice",
              "variantId": "classmateCompetitive",
              "mustMatchEventTitle": "英文生字小測通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "梓軒張口想說甚麼，但最後只說：「咁你快啲啦。」"
          },
          {
            "id": "w3_english_spelling_notice_classmateCompetitive_pretend_not_hear",
            "text": "跟他互問",
            "playerLine": "你問我三個，我問你三個。",
            "attitudeId": "avoidCompare",
            "personalityDelta": {
              "avoidant": 1
            },
            "memoryAdd": [
              "w3_english_spelling_notice_classmateCompetitive_pretend_not_hear"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "練習變成小比賽，你們都更緊張了一點。"
            },
            "statusDelta": {
              "社交": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": -1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "avoidCompare",
              "reason": "這個選項是為 英文生字小測通知 / classmateCompetitive 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_english_spelling_notice",
              "variantId": "classmateCompetitive",
              "mustMatchEventTitle": "英文生字小測通知"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "練習變成小比賽，你們都更緊張了一點。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "classmateCompetitive",
          "npcIdentity": "同學",
          "npcPersonality": "競爭同學型",
          "npcDisplayName": "classmateCompetitive"
        },
        "variantId": "classmateCompetitive",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_competitive_peer",
        "reactionProfileId": "identity_same_age_peer__pers_competitive_peer"
      }
    ],
    "schemaVersion": "opening_event_pool_v5_1_balanced_event_specific_choices",
    "eventScheduling": {
      "baseWeight": 60,
      "weekRange": [
        3,
        3
      ],
      "conditions": [],
      "exclusiveGroup": "w3_first_academic_pressure_one_only",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "prerequisiteMemory": [],
      "sourceChannel": "classroom",
      "involvementRole": "direct_actor"
    },
    "eventChoiceDesignRule": "playerChoices must be authored for this exact event+variant; personalityId may alter tone and point interpretation but must not inject a generic personality choice set."
  },
  {
    "id": "w3_math_quiz_practice_sheet",
    "weekPool": "W3_first_academic_pressure",
    "title": "數學小測的練習紙",
    "sceneType": "academic_math_practice",
    "coreSituation": "老師派練習紙，說下週小測類似題型。事件適合開學業和理智值，不只是壓力。",
    "followUpHooks": [
      "w4_test_result_reaction",
      "organising_habit_seed"
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "pointDesign": {
      "version": "target_aware_integer_delta_v5_1_balanced",
      "mainStatusKeys": [
        "快樂",
        "理智值",
        "體力",
        "學業",
        "社交",
        "創意",
        "家庭關係",
        "自信"
      ],
      "skillKeys": [
        "繪畫",
        "鋼琴",
        "朗誦",
        "游泳",
        "足球",
        "編程",
        "閱讀",
        "班務服務"
      ],
      "note": "分數由玩家 attitudeId、舊 effects、事件題材，以及當前 NPC 身份 / 性格共同決定；同一個選項在不同 NPC 面前可以有不同結果。",
      "choiceTextRule": "choice.text is player-facing and must describe a concrete action or spoken line that answers this event dialogue; do not show abstract attitude labels.",
      "noCrossEventGenericChoiceRule": "The same choice.text should not be reused across unrelated event ids.",
      "statusBalanceRule": "每個 variant 通常只有 1–2 個選項會推進核心狀態；其餘選項偏向保留、錯過、休息、觀察或付出代價。statusDelta 是方向，不是每次點擊獎勵。",
      "skillSemantics": "skillExpDelta 是技能經驗值，不是技能等級。",
      "previewRule": "dialogueTriggerPreview is generated from openingDialogue and should not be hand-authored."
    },
    "fallbackChoices": [
      {
        "id": "w3_math_quiz_practice_sheet_teacherFairObserver_fallback_ask",
        "text": "問清楚這件事和自己現在要做甚麼。",
        "playerLine": "問清楚這件事和自己現在要做甚麼。",
        "attitudeId": "askForClarification",
        "personalityDelta": {
          "helpSeeking": 1
        },
        "memoryAdd": [
          "w3_math_quiz_practice_sheet_teacherFairObserver_fallback_ask"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你用提問避免誤會，這是只屬於當前事件的備用選項。"
        },
        "statusDelta": {
          "理智值": 1,
          "體力": -1,
          "自信": 1
        },
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "公平觀察型",
          "attitudeReadAs": "askForClarification",
          "reason": "這個選項是為 數學小測的練習紙 / teacherFairObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w3_math_quiz_practice_sheet",
          "variantId": "teacherFairObserver",
          "mustMatchEventTitle": "數學小測的練習紙"
        },
        "skillExpDelta": {}
      },
      {
        "id": "w3_math_quiz_practice_sheet_teacherFairObserver_fallback_observe",
        "text": "先觀察這個情境，不立刻答應或拒絕。",
        "playerLine": "先觀察這個情境，不立刻答應或拒絕。",
        "attitudeId": "observeFirst",
        "personalityDelta": {
          "observer": 1
        },
        "memoryAdd": [
          "w3_math_quiz_practice_sheet_teacherFairObserver_fallback_observe"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你暫時保留行動，讓自己多一點時間。"
        },
        "statusDelta": {},
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "公平觀察型",
          "attitudeReadAs": "observeFirst",
          "reason": "這個選項是為 數學小測的練習紙 / teacherFairObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w3_math_quiz_practice_sheet",
          "variantId": "teacherFairObserver",
          "mustMatchEventTitle": "數學小測的練習紙"
        },
        "skillExpDelta": {}
      }
    ],
    "variants": [
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "呢張練習紙唔計分。你做完就會知道自己邊度唔熟。"
          },
          {
            "speaker": "老師",
            "text": "識嘅先做，唔識嘅圈起來。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "呢張練習紙唔計分。你做完就會知道自己邊度唔熟。 識嘅先做，唔識嘅圈起來。",
        "playerChoices": [
          {
            "id": "w3_math_quiz_practice_sheet_teacherFairObserver_do_known_first_math",
            "text": "先做會的題目",
            "playerLine": "你跳過看不懂的題，先把會的做完。",
            "attitudeId": "partialPractice",
            "personalityDelta": {
              "organized": 1,
              "observer": 1
            },
            "memoryAdd": [
              "w3_math_quiz_practice_sheet_teacherFairObserver_do_known_first_math"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "練習紙沒有空白一片，你知道自己不是全不會。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "學業": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "公平觀察型",
              "attitudeReadAs": "partialPractice",
              "reason": "這個選項是為 數學小測的練習紙 / teacherFairObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_math_quiz_practice_sheet",
              "variantId": "teacherFairObserver",
              "mustMatchEventTitle": "數學小測的練習紙"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "練習紙沒有空白一片，你知道自己不是全不會。"
          },
          {
            "id": "w3_math_quiz_practice_sheet_teacherFairObserver_ask_one_question_math",
            "text": "圈起不懂的題",
            "playerLine": "你把不懂的題圈起來。",
            "attitudeId": "askForHelp",
            "personalityDelta": {
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w3_math_quiz_practice_sheet_teacherFairObserver_ask_one_question_math"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "問題沒有消失，但變得可以拿去問人。"
            },
            "statusDelta": {
              "體力": -1,
              "學業": 1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "公平觀察型",
              "attitudeReadAs": "askForHelp",
              "reason": "這個選項是為 數學小測的練習紙 / teacherFairObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_math_quiz_practice_sheet",
              "variantId": "teacherFairObserver",
              "mustMatchEventTitle": "數學小測的練習紙"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "問題沒有消失，但變得可以拿去問人。"
          },
          {
            "id": "w3_math_quiz_practice_sheet_teacherFairObserver_mark_homework_later",
            "text": "問同桌",
            "playerLine": "呢題係咪要先加？",
            "attitudeId": "deferWithPlan",
            "personalityDelta": {
              "cautious": 1
            },
            "memoryAdd": [
              "w3_math_quiz_practice_sheet_teacherFairObserver_mark_homework_later"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "同桌給你一點提示，你自己再試一次。"
            },
            "statusDelta": {},
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "公平觀察型",
              "attitudeReadAs": "deferWithPlan",
              "reason": "這個選項是為 數學小測的練習紙 / teacherFairObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_math_quiz_practice_sheet",
              "variantId": "teacherFairObserver",
              "mustMatchEventTitle": "數學小測的練習紙"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "同桌給你一點提示，你自己再試一次。"
          },
          {
            "id": "w3_math_quiz_practice_sheet_teacherFairObserver_hide_blank_sheet",
            "text": "收起回家做",
            "playerLine": "你把練習紙夾進書本。",
            "attitudeId": "avoidSubject",
            "personalityDelta": {
              "avoidant": 1
            },
            "memoryAdd": [
              "w3_math_quiz_practice_sheet_teacherFairObserver_hide_blank_sheet"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "它暫時離開眼前，但晚點還要再見面。"
            },
            "statusDelta": {
              "理智值": -1,
              "體力": 1,
              "學業": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": -1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "公平觀察型",
              "attitudeReadAs": "avoidSubject",
              "reason": "這個選項是為 數學小測的練習紙 / teacherFairObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_math_quiz_practice_sheet",
              "variantId": "teacherFairObserver",
              "mustMatchEventTitle": "數學小測的練習紙"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "它暫時離開眼前，但晚點還要再見面。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "teacherFairObserver",
          "npcIdentity": "老師",
          "npcPersonality": "公平觀察型",
          "npcDisplayName": "teacherFairObserver"
        },
        "variantId": "teacherFairObserver",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_fair_observer",
        "reactionProfileId": "identity_teacher__pers_fair_observer"
      },
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "做錯唔緊要，唔改先係問題。"
          },
          {
            "speaker": "老師",
            "text": "我唔想睇到你哋空白交返嚟。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "做錯唔緊要，唔改先係問題。 我唔想睇到你哋空白交返嚟。",
        "playerChoices": [
          {
            "id": "w3_math_quiz_practice_sheet_teacherStrict_finish_and_correct",
            "text": "即日做完",
            "playerLine": "你拿起鉛筆，從第一題開始做。",
            "attitudeId": "completePractice",
            "personalityDelta": {
              "compliant": 1,
              "organized": 1
            },
            "memoryAdd": [
              "w3_math_quiz_practice_sheet_teacherStrict_finish_and_correct"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你做得有點累，但至少知道自己錯在哪。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -2,
              "學業": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "completePractice",
              "reason": "這個選項是為 數學小測的練習紙 / teacherStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_math_quiz_practice_sheet",
              "variantId": "teacherStrict",
              "mustMatchEventTitle": "數學小測的練習紙"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "你做得有點累，但至少知道自己錯在哪。"
          },
          {
            "id": "w3_math_quiz_practice_sheet_teacherStrict_correct_wrong_one",
            "text": "先做容易的",
            "playerLine": "你先找看得懂的題。",
            "attitudeId": "repairLearning",
            "personalityDelta": {
              "accountable": 1
            },
            "memoryAdd": [
              "w3_math_quiz_practice_sheet_teacherStrict_correct_wrong_one"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師走過時看見你有開始，沒有催你。"
            },
            "statusDelta": {
              "體力": -1,
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "repairLearning",
              "reason": "這個選項是為 數學小測的練習紙 / teacherStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_math_quiz_practice_sheet",
              "variantId": "teacherStrict",
              "mustMatchEventTitle": "數學小測的練習紙"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "老師走過時看見你有開始，沒有催你。"
          },
          {
            "id": "w3_math_quiz_practice_sheet_teacherStrict_ask_classmate_method",
            "text": "問老師",
            "playerLine": "老師，我唔明呢題問咩。",
            "attitudeId": "peerHelp",
            "personalityDelta": {
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w3_math_quiz_practice_sheet_teacherStrict_ask_classmate_method"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師看一眼題目，提醒你先圈關鍵字。"
            },
            "statusDelta": {
              "體力": -1,
              "學業": 1,
              "社交": 1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "peerHelp",
              "reason": "這個選項是為 數學小測的練習紙 / teacherStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_math_quiz_practice_sheet",
              "variantId": "teacherStrict",
              "mustMatchEventTitle": "數學小測的練習紙"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師看一眼題目，提醒你先圈關鍵字。"
          },
          {
            "id": "w3_math_quiz_practice_sheet_teacherStrict_rush_without_check",
            "text": "想逃開練習紙",
            "playerLine": "你把紙壓在書下面。",
            "attitudeId": "rushWork",
            "personalityDelta": {
              "avoidant": 1
            },
            "memoryAdd": [
              "w3_math_quiz_practice_sheet_teacherStrict_rush_without_check"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你暫時看不見它，但心裡仍然記得有小測。"
            },
            "statusDelta": {
              "理智值": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": -1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "rushWork",
              "reason": "這個選項是為 數學小測的練習紙 / teacherStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_math_quiz_practice_sheet",
              "variantId": "teacherStrict",
              "mustMatchEventTitle": "數學小測的練習紙"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "你暫時看不見它，但心裡仍然記得有小測。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "teacherStrict",
          "npcIdentity": "老師",
          "npcPersonality": "嚴格學業型",
          "npcDisplayName": "teacherStrict"
        },
        "variantId": "teacherStrict",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_strict_academic",
        "reactionProfileId": "identity_teacher__pers_strict_academic"
      },
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "你識一半都已經係開始。"
          },
          {
            "speaker": "老師",
            "text": "唔好因為第一題唔識，就覺得成張都唔得。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "你識一半都已經係開始。 唔好因為第一題唔識，就覺得成張都唔得。",
        "playerChoices": [
          {
            "id": "w3_math_quiz_practice_sheet_teacherEncouraging_try_half_math",
            "text": "先做第一題",
            "playerLine": "我試吓先。",
            "attitudeId": "smallStart",
            "personalityDelta": {
              "growthMindset": 1
            },
            "memoryAdd": [
              "w3_math_quiz_practice_sheet_teacherEncouraging_try_half_math"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你寫下第一個算式，緊張少了一點。"
            },
            "statusDelta": {
              "體力": -1,
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "warmth",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "smallStart",
              "reason": "這個選項是為 數學小測的練習紙 / teacherEncouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_math_quiz_practice_sheet",
              "variantId": "teacherEncouraging",
              "mustMatchEventTitle": "數學小測的練習紙"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "你寫下第一個算式，緊張少了一點。"
          },
          {
            "id": "w3_math_quiz_practice_sheet_teacherEncouraging_circle_hard_math",
            "text": "問可否慢慢做",
            "playerLine": "我如果做得好慢呢？",
            "attitudeId": "markDifficulty",
            "personalityDelta": {
              "organized": 1,
              "selfAware": 1
            },
            "memoryAdd": [
              "w3_math_quiz_practice_sheet_teacherEncouraging_circle_hard_math"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說可以，重點是有想過。"
            },
            "statusDelta": {
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "markDifficulty",
              "reason": "這個選項是為 數學小測的練習紙 / teacherEncouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_math_quiz_practice_sheet",
              "variantId": "teacherEncouraging",
              "mustMatchEventTitle": "數學小測的練習紙"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師說可以，重點是有想過。"
          },
          {
            "id": "w3_math_quiz_practice_sheet_teacherEncouraging_ask_peer_one_hint",
            "text": "找同學一起看",
            "playerLine": "你做到邊題？",
            "attitudeId": "askHint",
            "personalityDelta": {
              "helpSeeking": 1,
              "selfManage": 1
            },
            "memoryAdd": [
              "w3_math_quiz_practice_sheet_teacherEncouraging_ask_peer_one_hint"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你們不是抄答案，而是一起確認題目意思。"
            },
            "statusDelta": {
              "體力": -1,
              "學業": 1,
              "社交": 1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "askHint",
              "reason": "這個選項是為 數學小測的練習紙 / teacherEncouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_math_quiz_practice_sheet",
              "variantId": "teacherEncouraging",
              "mustMatchEventTitle": "數學小測的練習紙"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "你們不是抄答案，而是一起確認題目意思。"
          },
          {
            "id": "w3_math_quiz_practice_sheet_teacherEncouraging_take_break_before_math",
            "text": "只寫名字先",
            "playerLine": "你先把名字寫上去。",
            "attitudeId": "restThenStudy",
            "personalityDelta": {
              "boundary": 1
            },
            "memoryAdd": [
              "w3_math_quiz_practice_sheet_teacherEncouraging_take_break_before_math"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "這只是很小一步，但比空白好。"
            },
            "statusDelta": {},
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "restThenStudy",
              "reason": "這個選項是為 數學小測的練習紙 / teacherEncouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w3_math_quiz_practice_sheet",
              "variantId": "teacherEncouraging",
              "mustMatchEventTitle": "數學小測的練習紙"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "這只是很小一步，但比空白好。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "teacherEncouraging",
          "npcIdentity": "老師",
          "npcPersonality": "鼓勵型",
          "npcDisplayName": "teacherEncouraging"
        },
        "variantId": "teacherEncouraging",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_encouraging_teacher",
        "reactionProfileId": "identity_teacher__pers_encouraging_teacher"
      }
    ],
    "schemaVersion": "opening_event_pool_v5_1_balanced_event_specific_choices",
    "eventScheduling": {
      "baseWeight": 60,
      "weekRange": [
        3,
        3
      ],
      "conditions": [],
      "exclusiveGroup": "w3_first_academic_pressure_one_only",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "prerequisiteMemory": [],
      "sourceChannel": "classroom",
      "involvementRole": "direct_actor"
    },
    "eventChoiceDesignRule": "playerChoices must be authored for this exact event+variant; personalityId may alter tone and point interpretation but must not inject a generic personality choice set."
  },
  {
    "id": "w4_test_result_reaction",
    "weekPool": "W4_result_and_class_duty",
    "title": "默書 / 小測後的反應",
    "sceneType": "academic_result_reaction",
    "coreSituation": "根據上週 schedule 產生準備足或不足的結果，不固定高低分，重點是後續路線。",
    "followUpHooks": [
      "possible_tutoring",
      "correction_action",
      "w6_teacher_observation",
      "story_first_test_result"
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "pointDesign": {
      "version": "target_aware_integer_delta_v5_1_balanced",
      "mainStatusKeys": [
        "快樂",
        "理智值",
        "體力",
        "學業",
        "社交",
        "創意",
        "家庭關係",
        "自信"
      ],
      "skillKeys": [
        "繪畫",
        "鋼琴",
        "朗誦",
        "游泳",
        "足球",
        "編程",
        "閱讀",
        "班務服務"
      ],
      "note": "分數由玩家 attitudeId、舊 effects、事件題材，以及當前 NPC 身份 / 性格共同決定；同一個選項在不同 NPC 面前可以有不同結果。",
      "choiceTextRule": "choice.text is player-facing and must describe a concrete action or spoken line that answers this event dialogue; do not show abstract attitude labels.",
      "noCrossEventGenericChoiceRule": "The same choice.text should not be reused across unrelated event ids.",
      "statusBalanceRule": "每個 variant 通常只有 1–2 個選項會推進核心狀態；其餘選項偏向保留、錯過、休息、觀察或付出代價。statusDelta 是方向，不是每次點擊獎勵。",
      "skillSemantics": "skillExpDelta 是技能經驗值，不是技能等級。",
      "previewRule": "dialogueTriggerPreview is generated from openingDialogue and should not be hand-authored."
    },
    "fallbackChoices": [
      {
        "id": "w4_test_result_reaction_preparedStrictTeacher_fallback_ask",
        "text": "問清楚這件事和自己現在要做甚麼。",
        "playerLine": "問清楚這件事和自己現在要做甚麼。",
        "attitudeId": "askForClarification",
        "personalityDelta": {
          "helpSeeking": 1
        },
        "memoryAdd": [
          "w4_test_result_reaction_preparedStrictTeacher_fallback_ask"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你用提問避免誤會，這是只屬於當前事件的備用選項。"
        },
        "statusDelta": {
          "理智值": 1,
          "體力": -1,
          "自信": 1
        },
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "嚴格學業型",
          "attitudeReadAs": "askForClarification",
          "reason": "這個選項是為 默書 / 小測後的反應 / preparedStrictTeacher 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w4_test_result_reaction",
          "variantId": "preparedStrictTeacher",
          "mustMatchEventTitle": "默書 / 小測後的反應"
        },
        "skillExpDelta": {}
      },
      {
        "id": "w4_test_result_reaction_preparedStrictTeacher_fallback_observe",
        "text": "先觀察這個情境，不立刻答應或拒絕。",
        "playerLine": "先觀察這個情境，不立刻答應或拒絕。",
        "attitudeId": "observeFirst",
        "personalityDelta": {
          "observer": 1
        },
        "memoryAdd": [
          "w4_test_result_reaction_preparedStrictTeacher_fallback_observe"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你暫時保留行動，讓自己多一點時間。"
        },
        "statusDelta": {},
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "嚴格學業型",
          "attitudeReadAs": "observeFirst",
          "reason": "這個選項是為 默書 / 小測後的反應 / preparedStrictTeacher 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w4_test_result_reaction",
          "variantId": "preparedStrictTeacher",
          "mustMatchEventTitle": "默書 / 小測後的反應"
        },
        "skillExpDelta": {}
      }
    ],
    "variants": [
      {
        "conditionHint": "prepScore >= 2 && teacherType === strictAcademic",
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "今次見到你有準備。字體再寫靚啲會更好。"
          },
          {
            "speaker": "老師",
            "text": "唔好因為今次可以，下次就放鬆晒。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "今次見到你有準備。字體再寫靚啲會更好。 唔好因為今次可以，下次就放鬆晒。",
        "playerChoices": [
          {
            "id": "w4_test_result_reaction_preparedStrictTeacher_accept_correction_neat",
            "text": "點頭收下",
            "playerLine": "我下次會寫整齊啲。",
            "attitudeId": "acceptFeedback",
            "personalityDelta": {
              "accountable": 1
            },
            "memoryAdd": [
              "w4_test_result_reaction_preparedStrictTeacher_accept_correction_neat"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師把簿交給你，語氣仍嚴格，但不是不滿意。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "學業": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "acceptFeedback",
              "reason": "這個選項是為 默書 / 小測後的反應 / preparedStrictTeacher 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_test_result_reaction",
              "variantId": "preparedStrictTeacher",
              "mustMatchEventTitle": "默書 / 小測後的反應"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師把簿交給你，語氣仍嚴格，但不是不滿意。"
          },
          {
            "id": "w4_test_result_reaction_preparedStrictTeacher_ask_which_word_unstable",
            "text": "問哪裡要改",
            "playerLine": "老師，邊幾個字最要改？",
            "attitudeId": "clarifyFeedback",
            "personalityDelta": {
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w4_test_result_reaction_preparedStrictTeacher_ask_which_word_unstable"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師圈了兩個字，讓你知道要練哪裡。"
            },
            "statusDelta": {
              "體力": -1,
              "學業": 1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "clarifyFeedback",
              "reason": "這個選項是為 默書 / 小測後的反應 / preparedStrictTeacher 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_test_result_reaction",
              "variantId": "preparedStrictTeacher",
              "mustMatchEventTitle": "默書 / 小測後的反應"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師圈了兩個字，讓你知道要練哪裡。"
          },
          {
            "id": "w4_test_result_reaction_preparedStrictTeacher_feel_proud_quietly",
            "text": "說自己有溫",
            "playerLine": "我琴晚溫左好耐。",
            "attitudeId": "quietPride",
            "personalityDelta": {
              "selfAware": 1
            },
            "memoryAdd": [
              "w4_test_result_reaction_preparedStrictTeacher_feel_proud_quietly"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說準備是看得出來的。"
            },
            "statusDelta": {},
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "quietPride",
              "reason": "這個選項是為 默書 / 小測後的反應 / preparedStrictTeacher 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_test_result_reaction",
              "variantId": "preparedStrictTeacher",
              "mustMatchEventTitle": "默書 / 小測後的反應"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師說準備是看得出來的。"
          },
          {
            "id": "w4_test_result_reaction_preparedStrictTeacher_only_look_score",
            "text": "不敢太開心",
            "playerLine": "你把簿收起來，只偷偷看了一眼分數。",
            "attitudeId": "scoreFocus",
            "personalityDelta": {
              "avoidant": 1
            },
            "memoryAdd": [
              "w4_test_result_reaction_preparedStrictTeacher_only_look_score"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有大聲講，但心裡有一點安心。"
            },
            "statusDelta": {
              "快樂": 1,
              "學業": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": -1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "scoreFocus",
              "reason": "這個選項是為 默書 / 小測後的反應 / preparedStrictTeacher 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_test_result_reaction",
              "variantId": "preparedStrictTeacher",
              "mustMatchEventTitle": "默書 / 小測後的反應"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "你沒有大聲講，但心裡有一點安心。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "preparedStrictTeacher",
          "npcIdentity": "老師",
          "npcPersonality": "嚴格學業型",
          "npcDisplayName": "preparedStrictTeacher"
        },
        "variantId": "preparedStrictTeacher",
        "variantType": "result",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_strict_academic",
        "reactionProfileId": "identity_teacher__pers_strict_academic"
      },
      {
        "conditionHint": "prepScore >= 2 && teacherType === encouraging",
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "你見唔見到？你有溫書，結果真的會唔同。"
          },
          {
            "speaker": "老師",
            "text": "下次都可以用今次嘅方法，再進步多少少。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "你見唔見到？你有溫書，結果真的會唔同。 下次都可以用今次嘅方法，再進步多少少。",
        "playerChoices": [
          {
            "id": "w4_test_result_reaction_preparedEncouragingTeacher_tell_teacher_practice_helped",
            "text": "說自己有進步",
            "playerLine": "我今次冇上次咁驚。",
            "attitudeId": "shareProgress",
            "personalityDelta": {
              "expressive": 1
            },
            "memoryAdd": [
              "w4_test_result_reaction_preparedEncouragingTeacher_tell_teacher_practice_helped"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師笑著說這也是很重要的進步。"
            },
            "statusDelta": {
              "快樂": 1,
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "warmth",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "shareProgress",
              "reason": "這個選項是為 默書 / 小測後的反應 / preparedEncouragingTeacher 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_test_result_reaction",
              "variantId": "preparedEncouragingTeacher",
              "mustMatchEventTitle": "默書 / 小測後的反應"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師笑著說這也是很重要的進步。"
          },
          {
            "id": "w4_test_result_reaction_preparedEncouragingTeacher_ask_next_method",
            "text": "問下次點溫",
            "playerLine": "下次都咁溫得唔得？",
            "attitudeId": "growthAsk",
            "personalityDelta": {
              "growthMindset": 1,
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w4_test_result_reaction_preparedEncouragingTeacher_ask_next_method"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師教你留住有效的方法，再加一點檢查。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "學業": 1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "growthAsk",
              "reason": "這個選項是為 默書 / 小測後的反應 / preparedEncouragingTeacher 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_test_result_reaction",
              "variantId": "preparedEncouragingTeacher",
              "mustMatchEventTitle": "默書 / 小測後的反應"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師教你留住有效的方法，再加一點檢查。"
          },
          {
            "id": "w4_test_result_reaction_preparedEncouragingTeacher_encourage_classmate",
            "text": "跟同學分享一點",
            "playerLine": "我係抄一次先記到。",
            "attitudeId": "supportPeer",
            "personalityDelta": {
              "supportive": 1
            },
            "memoryAdd": [
              "w4_test_result_reaction_preparedEncouragingTeacher_encourage_classmate"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "旁邊同學聽見了，也放鬆了一點。"
            },
            "statusDelta": {
              "快樂": 1,
              "體力": -1,
              "社交": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "supportPeer",
              "reason": "這個選項是為 默書 / 小測後的反應 / preparedEncouragingTeacher 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_test_result_reaction",
              "variantId": "preparedEncouragingTeacher",
              "mustMatchEventTitle": "默書 / 小測後的反應"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "旁邊同學聽見了，也放鬆了一點。"
          },
          {
            "id": "w4_test_result_reaction_preparedEncouragingTeacher_relax_after_result",
            "text": "只是笑一笑",
            "playerLine": "你看著簿角笑了一下。",
            "attitudeId": "restAfterEffort",
            "personalityDelta": {
              "boundary": 1
            },
            "memoryAdd": [
              "w4_test_result_reaction_preparedEncouragingTeacher_relax_after_result"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師沒有拆穿你的小開心。"
            },
            "statusDelta": {
              "體力": 1,
              "學業": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "restAfterEffort",
              "reason": "這個選項是為 默書 / 小測後的反應 / preparedEncouragingTeacher 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_test_result_reaction",
              "variantId": "preparedEncouragingTeacher",
              "mustMatchEventTitle": "默書 / 小測後的反應"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "老師沒有拆穿你的小開心。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "preparedEncouragingTeacher",
          "npcIdentity": "老師",
          "npcPersonality": "鼓勵型",
          "npcDisplayName": "preparedEncouragingTeacher"
        },
        "variantId": "preparedEncouragingTeacher",
        "variantType": "result",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_encouraging_teacher",
        "reactionProfileId": "identity_teacher__pers_encouraging_teacher"
      },
      {
        "conditionHint": "prepScore < 2 && teacherType === caring",
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "唔係一次就定輸贏。"
          },
          {
            "speaker": "老師",
            "text": "我想知你係唔識溫，定係冇時間，或者太緊張。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "唔係一次就定輸贏。 我想知你係唔識溫，定係冇時間，或者太緊張。",
        "playerChoices": [
          {
            "id": "w4_test_result_reaction_underpreparedCaringTeacher_admit_no_method",
            "text": "承認準備不夠",
            "playerLine": "我有溫，但好似溫得唔夠。",
            "attitudeId": "honestNeed",
            "personalityDelta": {
              "helpSeeking": 2,
              "selfAware": 1
            },
            "memoryAdd": [
              "w4_test_result_reaction_underpreparedCaringTeacher_admit_no_method"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師沒有罵你，只叫你下次提早一點開始。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "warmth",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "關顧型",
              "attitudeReadAs": "honestNeed",
              "reason": "這個選項是為 默書 / 小測後的反應 / underpreparedCaringTeacher 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_test_result_reaction",
              "variantId": "underpreparedCaringTeacher",
              "mustMatchEventTitle": "默書 / 小測後的反應"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師沒有罵你，只叫你下次提早一點開始。"
          },
          {
            "id": "w4_test_result_reaction_underpreparedCaringTeacher_say_no_time",
            "text": "說不知道怎樣溫",
            "playerLine": "我唔知點先算溫好。",
            "attitudeId": "shareConstraint",
            "personalityDelta": {
              "selfAware": 1
            },
            "memoryAdd": [
              "w4_test_result_reaction_underpreparedCaringTeacher_say_no_time"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師把方法拆細給你聽。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "warmth",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "關顧型",
              "attitudeReadAs": "shareConstraint",
              "reason": "這個選項是為 默書 / 小測後的反應 / underpreparedCaringTeacher 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_test_result_reaction",
              "variantId": "underpreparedCaringTeacher",
              "mustMatchEventTitle": "默書 / 小測後的反應"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師把方法拆細給你聽。"
          },
          {
            "id": "w4_test_result_reaction_underpreparedCaringTeacher_ask_retake_or_correction",
            "text": "說自己已經盡力",
            "playerLine": "我有試，但都錯咗好多。",
            "attitudeId": "repairMistake",
            "personalityDelta": {
              "accountable": 1
            },
            "memoryAdd": [
              "w4_test_result_reaction_underpreparedCaringTeacher_ask_retake_or_correction"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師先肯定你有試，再和你看錯在哪裡。"
            },
            "statusDelta": {
              "體力": -1,
              "學業": 1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "關顧型",
              "attitudeReadAs": "repairMistake",
              "reason": "這個選項是為 默書 / 小測後的反應 / underpreparedCaringTeacher 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_test_result_reaction",
              "variantId": "underpreparedCaringTeacher",
              "mustMatchEventTitle": "默書 / 小測後的反應"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師先肯定你有試，再和你看錯在哪裡。"
          },
          {
            "id": "w4_test_result_reaction_underpreparedCaringTeacher_dont_want_talk_score",
            "text": "不太想講",
            "playerLine": "我而家唔想講野。",
            "attitudeId": "shutDown",
            "personalityDelta": {
              "avoidant": 1
            },
            "memoryAdd": [
              "w4_test_result_reaction_underpreparedCaringTeacher_dont_want_talk_score"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師沒有逼你，只叫你晚點再把改正交回來。"
            },
            "statusDelta": {
              "理智值": -1,
              "體力": 1,
              "自信": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "關顧型",
              "attitudeReadAs": "shutDown",
              "reason": "這個選項是為 默書 / 小測後的反應 / underpreparedCaringTeacher 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_test_result_reaction",
              "variantId": "underpreparedCaringTeacher",
              "mustMatchEventTitle": "默書 / 小測後的反應"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師沒有逼你，只叫你晚點再把改正交回來。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "underpreparedCaringTeacher",
          "npcIdentity": "老師",
          "npcPersonality": "關顧型",
          "npcDisplayName": "underpreparedCaringTeacher"
        },
        "variantId": "underpreparedCaringTeacher",
        "variantType": "result",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_caring_teacher",
        "reactionProfileId": "identity_teacher__pers_caring_teacher"
      },
      {
        "conditionHint": "homeFollowUp && familyType === cautiousPlanner",
        "openingDialogue": [
          {
            "speaker": "家長",
            "text": "今次結果我睇到了。下次幾時開始溫，先係重點。"
          },
          {
            "speaker": "家長",
            "text": "唔係等派返嚟先諗點算。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "今次結果我睇到了。下次幾時開始溫，先係重點。 唔係等派返嚟先諗點算。",
        "playerChoices": [
          {
            "id": "w4_test_result_reaction_familyCautiousPlanner_make_next_revision_plan",
            "text": "一起定時間",
            "playerLine": "咁下次早兩日溫得唔得？",
            "attitudeId": "familyPlan",
            "personalityDelta": {
              "organized": 2
            },
            "memoryAdd": [
              "w4_test_result_reaction_familyCautiousPlanner_make_next_revision_plan"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長立刻拿出時間表，像開始處理一件工程。"
            },
            "statusDelta": {
              "體力": -1,
              "學業": 2,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "謹慎安排型",
              "attitudeReadAs": "familyPlan",
              "reason": "這個選項是為 默書 / 小測後的反應 / familyCautiousPlanner 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_test_result_reaction",
              "variantId": "familyCautiousPlanner",
              "mustMatchEventTitle": "默書 / 小測後的反應"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長立刻拿出時間表，像開始處理一件工程。"
          },
          {
            "id": "w4_test_result_reaction_familyCautiousPlanner_show_what_wrong",
            "text": "講哪裡難",
            "playerLine": "我記唔到後面幾個。",
            "attitudeId": "reviewMistakes",
            "personalityDelta": {
              "accountable": 1,
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w4_test_result_reaction_familyCautiousPlanner_show_what_wrong"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長這次沒有只看分數，開始問你哪幾個字不會。"
            },
            "statusDelta": {
              "體力": -1,
              "學業": 2,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "謹慎安排型",
              "attitudeReadAs": "reviewMistakes",
              "reason": "這個選項是為 默書 / 小測後的反應 / familyCautiousPlanner 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_test_result_reaction",
              "variantId": "familyCautiousPlanner",
              "mustMatchEventTitle": "默書 / 小測後的反應"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長這次沒有只看分數，開始問你哪幾個字不會。"
          },
          {
            "id": "w4_test_result_reaction_familyCautiousPlanner_say_tried_hard",
            "text": "說不想一直講分數",
            "playerLine": "我唔想成晚都講呢件事。",
            "attitudeId": "selfAdvocate",
            "personalityDelta": {
              "selfAdvocacy": 1
            },
            "memoryAdd": [
              "w4_test_result_reaction_familyCautiousPlanner_say_tried_hard"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長停了一下，語氣稍微放慢。"
            },
            "statusDelta": {},
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "謹慎安排型",
              "attitudeReadAs": "selfAdvocate",
              "reason": "這個選項是為 默書 / 小測後的反應 / familyCautiousPlanner 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_test_result_reaction",
              "variantId": "familyCautiousPlanner",
              "mustMatchEventTitle": "默書 / 小測後的反應"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長停了一下，語氣稍微放慢。"
          },
          {
            "id": "w4_test_result_reaction_familyCautiousPlanner_hide_score_first",
            "text": "只交簿",
            "playerLine": "你把簿放在桌上，不太想解釋。",
            "attitudeId": "avoidFamilyTalk",
            "personalityDelta": {
              "avoidant": 2
            },
            "memoryAdd": [
              "w4_test_result_reaction_familyCautiousPlanner_hide_score_first"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長看著簿，問題還是會晚點回來。"
            },
            "statusDelta": {
              "理智值": -1,
              "體力": 1,
              "家庭關係": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": -1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "謹慎安排型",
              "attitudeReadAs": "avoidFamilyTalk",
              "reason": "這個選項是為 默書 / 小測後的反應 / familyCautiousPlanner 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_test_result_reaction",
              "variantId": "familyCautiousPlanner",
              "mustMatchEventTitle": "默書 / 小測後的反應"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "家長看著簿，問題還是會晚點回來。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "familyCautiousPlanner",
          "npcIdentity": "家長/家庭長輩",
          "npcPersonality": "謹慎安排型",
          "npcDisplayName": "familyCautiousPlanner"
        },
        "variantId": "familyCautiousPlanner",
        "variantType": "result",
        "identityTypeId": "identity_family_elder",
        "personalityId": "pers_cautious_planner",
        "reactionProfileId": "identity_family_elder__pers_cautious_planner"
      },
      {
        "conditionHint": "homeFollowUp && familyType === gentleListener",
        "openingDialogue": [
          {
            "speaker": "家長",
            "text": "你自己覺得邊度最難？"
          },
          {
            "speaker": "家長",
            "text": "我唔係淨係睇分數，我想知你點樣學習。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "你自己覺得邊度最難？ 我唔係淨係睇分數，我想知你點樣學習。",
        "playerChoices": [
          {
            "id": "w4_test_result_reaction_familyGentleListener_talk_hard_part",
            "text": "說最難的地方",
            "playerLine": "我一緊張就唔記得個字。",
            "attitudeId": "shareDifficulty",
            "personalityDelta": {
              "expressive": 1,
              "selfAware": 1
            },
            "memoryAdd": [
              "w4_test_result_reaction_familyGentleListener_talk_hard_part"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長先聽你講完，才問要不要一起想方法。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "家庭關係": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "warmth",
                "amount": 2,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "溫和聆聽型",
              "attitudeReadAs": "shareDifficulty",
              "reason": "這個選項是為 默書 / 小測後的反應 / familyGentleListener 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_test_result_reaction",
              "variantId": "familyGentleListener",
              "mustMatchEventTitle": "默書 / 小測後的反應"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長先聽你講完，才問要不要一起想方法。"
          },
          {
            "id": "w4_test_result_reaction_familyGentleListener_say_proud_effort",
            "text": "說自己有努力",
            "playerLine": "我有溫，只係考得唔好。",
            "attitudeId": "sharePride",
            "personalityDelta": {
              "selfAware": 1
            },
            "memoryAdd": [
              "w4_test_result_reaction_familyGentleListener_say_proud_effort"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長說有努力也值得記住，但下次可以換方法。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "warmth",
                "amount": 1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "溫和聆聽型",
              "attitudeReadAs": "sharePride",
              "reason": "這個選項是為 默書 / 小測後的反應 / familyGentleListener 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_test_result_reaction",
              "variantId": "familyGentleListener",
              "mustMatchEventTitle": "默書 / 小測後的反應"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長說有努力也值得記住，但下次可以換方法。"
          },
          {
            "id": "w4_test_result_reaction_familyGentleListener_ask_sit_with_me",
            "text": "不想講分數",
            "playerLine": "我唔想講分，可唔可以講其他？",
            "attitudeId": "askSupport",
            "personalityDelta": {
              "helpSeeking": 2
            },
            "memoryAdd": [
              "w4_test_result_reaction_familyGentleListener_ask_sit_with_me"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長讓你休息一會兒，沒有把話題推到最重。"
            },
            "statusDelta": {
              "體力": -1,
              "學業": 1,
              "家庭關係": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "溫和聆聽型",
              "attitudeReadAs": "askSupport",
              "reason": "這個選項是為 默書 / 小測後的反應 / familyGentleListener 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_test_result_reaction",
              "variantId": "familyGentleListener",
              "mustMatchEventTitle": "默書 / 小測後的反應"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長讓你休息一會兒，沒有把話題推到最重。"
          },
          {
            "id": "w4_test_result_reaction_familyGentleListener_not_ready_talk",
            "text": "問下次怎樣做",
            "playerLine": "你可唔可以教我點溫？",
            "attitudeId": "softBoundary",
            "personalityDelta": {
              "boundary": 1
            },
            "memoryAdd": [
              "w4_test_result_reaction_familyGentleListener_not_ready_talk"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長把紙拿近一點，和你一起看哪些字最容易錯。"
            },
            "statusDelta": {
              "自信": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "溫和聆聽型",
              "attitudeReadAs": "softBoundary",
              "reason": "這個選項是為 默書 / 小測後的反應 / familyGentleListener 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_test_result_reaction",
              "variantId": "familyGentleListener",
              "mustMatchEventTitle": "默書 / 小測後的反應"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長把紙拿近一點，和你一起看哪些字最容易錯。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "familyGentleListener",
          "npcIdentity": "家長/家庭長輩",
          "npcPersonality": "溫和聆聽型",
          "npcDisplayName": "familyGentleListener"
        },
        "variantId": "familyGentleListener",
        "variantType": "result",
        "identityTypeId": "identity_family_elder",
        "personalityId": "pers_gentle_listener",
        "reactionProfileId": "identity_family_elder__pers_gentle_listener"
      }
    ],
    "schemaVersion": "opening_event_pool_v5_1_balanced_event_specific_choices",
    "eventScheduling": {
      "baseWeight": 60,
      "weekRange": [
        4,
        4
      ],
      "conditions": [
        "has_recent_academic_schedule_result"
      ],
      "exclusiveGroup": null,
      "onceOnly": true,
      "cooldownWeeks": 999,
      "prerequisiteMemory": [
        "any:w3_first_academic_pressure_scheduled"
      ],
      "sourceChannel": "classroom",
      "involvementRole": "direct_actor"
    },
    "eventChoiceDesignRule": "playerChoices must be authored for this exact event+variant; personalityId may alter tone and point interpretation but must not inject a generic personality choice set."
  },
  {
    "id": "w4_book_distribution_helper",
    "weekPool": "W4_result_and_class_duty",
    "title": "派簿小助手",
    "sceneType": "class_duty_identity_seed",
    "coreSituation": "老師需要人幫忙派簿，玩家可以主動、等待、推介同學或一起幫忙。",
    "followUpHooks": [
      "class_duty_identity",
      "w6_teacher_observation",
      "story_book_helper"
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "pointDesign": {
      "version": "target_aware_integer_delta_v5_1_balanced",
      "mainStatusKeys": [
        "快樂",
        "理智值",
        "體力",
        "學業",
        "社交",
        "創意",
        "家庭關係",
        "自信"
      ],
      "skillKeys": [
        "繪畫",
        "鋼琴",
        "朗誦",
        "游泳",
        "足球",
        "編程",
        "閱讀",
        "班務服務"
      ],
      "note": "分數由玩家 attitudeId、舊 effects、事件題材，以及當前 NPC 身份 / 性格共同決定；同一個選項在不同 NPC 面前可以有不同結果。",
      "choiceTextRule": "choice.text is player-facing and must describe a concrete action or spoken line that answers this event dialogue; do not show abstract attitude labels.",
      "noCrossEventGenericChoiceRule": "The same choice.text should not be reused across unrelated event ids.",
      "statusBalanceRule": "每個 variant 通常只有 1–2 個選項會推進核心狀態；其餘選項偏向保留、錯過、休息、觀察或付出代價。statusDelta 是方向，不是每次點擊獎勵。",
      "skillSemantics": "skillExpDelta 是技能經驗值，不是技能等級。",
      "previewRule": "dialogueTriggerPreview is generated from openingDialogue and should not be hand-authored."
    },
    "fallbackChoices": [
      {
        "id": "w4_book_distribution_helper_teacherActivityRecommender_fallback_ask",
        "text": "問清楚這件事和自己現在要做甚麼。",
        "playerLine": "問清楚這件事和自己現在要做甚麼。",
        "attitudeId": "askForClarification",
        "personalityDelta": {
          "helpSeeking": 1
        },
        "memoryAdd": [
          "w4_book_distribution_helper_teacherActivityRecommender_fallback_ask"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你用提問避免誤會，這是只屬於當前事件的備用選項。"
        },
        "statusDelta": {
          "理智值": 1,
          "體力": -1,
          "自信": 1
        },
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "活動推薦型",
          "attitudeReadAs": "askForClarification",
          "reason": "這個選項是為 派簿小助手 / teacherActivityRecommender 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w4_book_distribution_helper",
          "variantId": "teacherActivityRecommender",
          "mustMatchEventTitle": "派簿小助手"
        },
        "skillExpDelta": {}
      },
      {
        "id": "w4_book_distribution_helper_teacherActivityRecommender_fallback_observe",
        "text": "先觀察這個情境，不立刻答應或拒絕。",
        "playerLine": "先觀察這個情境，不立刻答應或拒絕。",
        "attitudeId": "observeFirst",
        "personalityDelta": {
          "observer": 1
        },
        "memoryAdd": [
          "w4_book_distribution_helper_teacherActivityRecommender_fallback_observe"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你暫時保留行動，讓自己多一點時間。"
        },
        "statusDelta": {},
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "活動推薦型",
          "attitudeReadAs": "observeFirst",
          "reason": "這個選項是為 派簿小助手 / teacherActivityRecommender 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w4_book_distribution_helper",
          "variantId": "teacherActivityRecommender",
          "mustMatchEventTitle": "派簿小助手"
        },
        "skillExpDelta": {}
      }
    ],
    "variants": [
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "今日有冇人想幫手派簿？唔使好快，最緊要細心。"
          },
          {
            "speaker": "老師",
            "text": "認唔晒名字都可以試，慢慢睇。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "今日有冇人想幫手派簿？唔使好快，最緊要細心。 認唔晒名字都可以試，慢慢睇。",
        "playerChoices": [
          {
            "id": "w4_book_distribution_helper_teacherActivityRecommender_volunteer_books_careful",
            "text": "自己舉手",
            "playerLine": "老師，我想試吓。",
            "attitudeId": "volunteerService",
            "personalityDelta": {
              "initiative": 1
            },
            "memoryAdd": [
              "w4_book_distribution_helper_teacherActivityRecommender_volunteer_books_careful"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師把一疊簿交給你，提醒你看清楚名字。"
            },
            "statusDelta": {
              "體力": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "活動推薦型",
              "attitudeReadAs": "volunteerService",
              "reason": "這個選項是為 派簿小助手 / teacherActivityRecommender 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_book_distribution_helper",
              "variantId": "teacherActivityRecommender",
              "mustMatchEventTitle": "派簿小助手"
            },
            "skillExpDelta": {
              "班務服務": 2
            },
            "playerLineType": "speech",
            "resultText": "老師把一疊簿交給你，提醒你看清楚名字。"
          },
          {
            "id": "w4_book_distribution_helper_teacherActivityRecommender_help_with_friend",
            "text": "問可否和同學一起",
            "playerLine": "可唔可以兩個人一齊派？",
            "attitudeId": "cooperateService",
            "personalityDelta": {
              "supportive": 1
            },
            "memoryAdd": [
              "w4_book_distribution_helper_teacherActivityRecommender_help_with_friend"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說可以，叫你們互相提醒。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "社交": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "活動推薦型",
              "attitudeReadAs": "cooperateService",
              "reason": "這個選項是為 派簿小助手 / teacherActivityRecommender 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_book_distribution_helper",
              "variantId": "teacherActivityRecommender",
              "mustMatchEventTitle": "派簿小助手"
            },
            "skillExpDelta": {
              "班務服務": 2
            },
            "playerLineType": "speech",
            "resultText": "老師說可以，叫你們互相提醒。"
          },
          {
            "id": "w4_book_distribution_helper_teacherActivityRecommender_suggest_quiet_classmate",
            "text": "推薦同學",
            "playerLine": "穎心好細心，佢可唔可以試？",
            "attitudeId": "supportPeer",
            "personalityDelta": {
              "supportive": 2
            },
            "memoryAdd": [
              "w4_book_distribution_helper_teacherActivityRecommender_suggest_quiet_classmate"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "被你提到的同學有點驚訝，老師也看了她一眼。"
            },
            "statusDelta": {
              "體力": -1,
              "社交": 2,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "活動推薦型",
              "attitudeReadAs": "supportPeer",
              "reason": "這個選項是為 派簿小助手 / teacherActivityRecommender 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_book_distribution_helper",
              "variantId": "teacherActivityRecommender",
              "mustMatchEventTitle": "派簿小助手"
            },
            "skillExpDelta": {
              "班務服務": 1
            },
            "playerLineType": "speech",
            "resultText": "被你提到的同學有點驚訝，老師也看了她一眼。"
          },
          {
            "id": "w4_book_distribution_helper_teacherActivityRecommender_watch_this_time",
            "text": "先旁觀",
            "playerLine": "你沒有舉手，只看別人怎樣派。",
            "attitudeId": "observeService",
            "personalityDelta": {
              "observer": 2
            },
            "memoryAdd": [
              "w4_book_distribution_helper_teacherActivityRecommender_watch_this_time"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有有份，但看懂了派簿要照座位順序。"
            },
            "statusDelta": {},
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "活動推薦型",
              "attitudeReadAs": "observeService",
              "reason": "這個選項是為 派簿小助手 / teacherActivityRecommender 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_book_distribution_helper",
              "variantId": "teacherActivityRecommender",
              "mustMatchEventTitle": "派簿小助手"
            },
            "skillExpDelta": {
              "班務服務": 1
            },
            "playerLineType": "action",
            "resultText": "你沒有有份，但看懂了派簿要照座位順序。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "teacherActivityRecommender",
          "npcIdentity": "老師",
          "npcPersonality": "活動推薦型",
          "npcDisplayName": "teacherActivityRecommender"
        },
        "variantId": "teacherActivityRecommender",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_activity_recommender",
        "reactionProfileId": "identity_teacher__pers_activity_recommender"
      },
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "派簿要跟座位次序，唔可以亂。"
          },
          {
            "speaker": "老師",
            "text": "派錯一本，後面就會亂晒。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "派簿要跟座位次序，唔可以亂。 派錯一本，後面就會亂晒。",
        "playerChoices": [
          {
            "id": "w4_book_distribution_helper_teacherStrict_volunteer_follow_order",
            "text": "舉手但說會慢慢來",
            "playerLine": "老師，我可以試下。",
            "attitudeId": "ruleService",
            "personalityDelta": {
              "compliant": 1,
              "organized": 1
            },
            "memoryAdd": [
              "w4_book_distribution_helper_teacherStrict_volunteer_follow_order"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師點頭，重點是你願意守規矩。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "學業": 1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "ruleService",
              "reason": "這個選項是為 派簿小助手 / teacherStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_book_distribution_helper",
              "variantId": "teacherStrict",
              "mustMatchEventTitle": "派簿小助手"
            },
            "skillExpDelta": {
              "班務服務": 2
            },
            "playerLineType": "speech",
            "resultText": "老師點頭，重點是你願意守規矩。"
          },
          {
            "id": "w4_book_distribution_helper_teacherStrict_take_small_stack",
            "text": "等老師叫人",
            "playerLine": "你看著老師，沒有舉手。",
            "attitudeId": "carefulService",
            "personalityDelta": {
              "cautious": 1
            },
            "memoryAdd": [
              "w4_book_distribution_helper_teacherStrict_take_small_stack"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師叫了另一位同學，你暫時不用做事情。"
            },
            "statusDelta": {
              "理智值": 2,
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "carefulService",
              "reason": "這個選項是為 派簿小助手 / teacherStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_book_distribution_helper",
              "variantId": "teacherStrict",
              "mustMatchEventTitle": "派簿小助手"
            },
            "skillExpDelta": {
              "班務服務": 2
            },
            "playerLineType": "action",
            "resultText": "老師叫了另一位同學，你暫時不用做事情。"
          },
          {
            "id": "w4_book_distribution_helper_teacherStrict_decline_not_sure_names",
            "text": "問從哪裡派",
            "playerLine": "由第一行開始呀？",
            "attitudeId": "honestBoundary",
            "personalityDelta": {
              "boundary": 1,
              "selfAware": 1
            },
            "memoryAdd": [
              "w4_book_distribution_helper_teacherStrict_decline_not_sure_names"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說對，覺得你有先問清楚。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "honestBoundary",
              "reason": "這個選項是為 派簿小助手 / teacherStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_book_distribution_helper",
              "variantId": "teacherStrict",
              "mustMatchEventTitle": "派簿小助手"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師說對，覺得你有先問清楚。"
          },
          {
            "id": "w4_book_distribution_helper_teacherStrict_rush_to_show",
            "text": "不想派",
            "playerLine": "你低頭看桌面。",
            "attitudeId": "rushService",
            "personalityDelta": {
              "competitive": 1
            },
            "memoryAdd": [
              "w4_book_distribution_helper_teacherStrict_rush_to_show"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "這次機會沒有落到你身上，你也鬆了一口氣。"
            },
            "statusDelta": {
              "理智值": -1,
              "體力": -1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": -1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "rushService",
              "reason": "這個選項是為 派簿小助手 / teacherStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_book_distribution_helper",
              "variantId": "teacherStrict",
              "mustMatchEventTitle": "派簿小助手"
            },
            "skillExpDelta": {
              "班務服務": 1
            },
            "playerLineType": "action",
            "resultText": "這次機會沒有落到你身上，你也鬆了一口氣。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "teacherStrict",
          "npcIdentity": "老師",
          "npcPersonality": "嚴格學業型",
          "npcDisplayName": "teacherStrict"
        },
        "variantId": "teacherStrict",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_strict_academic",
        "reactionProfileId": "identity_teacher__pers_strict_academic"
      },
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "我今日先叫一位同學派簿，其他人可以留意點做。"
          },
          {
            "speaker": "老師",
            "text": "唔係被叫到先算有份，有觀察都算。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "我今日先叫一位同學派簿，其他人可以留意點做。 唔係被叫到先算有份，有觀察都算。",
        "playerChoices": [
          {
            "id": "w4_book_distribution_helper_teacherFairObserver_wait_teacher_arrange",
            "text": "先看別人派",
            "playerLine": "你看同學怎樣找名字。",
            "attitudeId": "waitAssignment",
            "personalityDelta": {
              "observer": 1,
              "compliant": 1
            },
            "memoryAdd": [
              "w4_book_distribution_helper_teacherFairObserver_wait_teacher_arrange"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有派簿，但學到下次怎樣做。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "公平觀察型",
              "attitudeReadAs": "waitAssignment",
              "reason": "這個選項是為 派簿小助手 / teacherFairObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_book_distribution_helper",
              "variantId": "teacherFairObserver",
              "mustMatchEventTitle": "派簿小助手"
            },
            "skillExpDelta": {
              "班務服務": 1
            },
            "playerLineType": "action",
            "resultText": "你沒有派簿，但學到下次怎樣做。"
          },
          {
            "id": "w4_book_distribution_helper_teacherFairObserver_ask_next_time_try",
            "text": "問下次可否試",
            "playerLine": "老師，下次我可唔可以試？",
            "attitudeId": "askOpportunity",
            "personalityDelta": {
              "initiative": 1,
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w4_book_distribution_helper_teacherFairObserver_ask_next_time_try"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說可以，下次有機會會記得。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "自信": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "公平觀察型",
              "attitudeReadAs": "askOpportunity",
              "reason": "這個選項是為 派簿小助手 / teacherFairObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_book_distribution_helper",
              "variantId": "teacherFairObserver",
              "mustMatchEventTitle": "派簿小助手"
            },
            "skillExpDelta": {
              "班務服務": 1
            },
            "playerLineType": "speech",
            "resultText": "老師說可以，下次有機會會記得。"
          },
          {
            "id": "w4_book_distribution_helper_teacherFairObserver_help_check_names",
            "text": "替同學打氣",
            "playerLine": "你慢慢派，唔使急。",
            "attitudeId": "supportService",
            "personalityDelta": {
              "supportive": 1,
              "observer": 1
            },
            "memoryAdd": [
              "w4_book_distribution_helper_teacherFairObserver_help_check_names"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "被叫到的同學看了你一眼，表情放鬆一點。"
            },
            "statusDelta": {
              "理智值": 2,
              "體力": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "公平觀察型",
              "attitudeReadAs": "supportService",
              "reason": "這個選項是為 派簿小助手 / teacherFairObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_book_distribution_helper",
              "variantId": "teacherFairObserver",
              "mustMatchEventTitle": "派簿小助手"
            },
            "skillExpDelta": {
              "班務服務": 2
            },
            "playerLineType": "speech",
            "resultText": "被叫到的同學看了你一眼，表情放鬆一點。"
          },
          {
            "id": "w4_book_distribution_helper_teacherFairObserver_not_mind_others_chosen",
            "text": "有點羨慕",
            "playerLine": "你看著那疊簿，心裡想自己也想被叫一次。",
            "attitudeId": "quietJealousy",
            "personalityDelta": {
              "observer": 1
            },
            "memoryAdd": [
              "w4_book_distribution_helper_teacherFairObserver_not_mind_others_chosen"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "這份羨慕沒有壞，只是讓你知道自己也想試。"
            },
            "statusDelta": {
              "理智值": 1,
              "自信": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "公平觀察型",
              "attitudeReadAs": "quietJealousy",
              "reason": "這個選項是為 派簿小助手 / teacherFairObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_book_distribution_helper",
              "variantId": "teacherFairObserver",
              "mustMatchEventTitle": "派簿小助手"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "這份羨慕沒有壞，只是讓你知道自己也想試。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "teacherFairObserver",
          "npcIdentity": "老師",
          "npcPersonality": "公平觀察型",
          "npcDisplayName": "teacherFairObserver"
        },
        "variantId": "teacherFairObserver",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_fair_observer",
        "reactionProfileId": "identity_teacher__pers_fair_observer"
      },
      {
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "你舉手派簿啦，我覺得你認得人名。"
          },
          {
            "speaker": "家朗",
            "text": "如果你唔舉，我可能舉㗎。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "你舉手派簿啦，我覺得你認得人名。 如果你唔舉，我可能舉㗎。",
        "playerChoices": [
          {
            "id": "w4_book_distribution_helper_classmateOutgoing_agree_when_peer_push",
            "text": "被他推一推後舉手",
            "playerLine": "咁我試吓啦。",
            "attitudeId": "peerEncouraged",
            "personalityDelta": {
              "outgoing": 1
            },
            "memoryAdd": [
              "w4_book_distribution_helper_classmateOutgoing_agree_when_peer_push"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗比你還興奮，小聲說：「得㗎得㗎。」"
            },
            "statusDelta": {
              "體力": -1,
              "社交": 2,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "peerEncouraged",
              "reason": "這個選項是為 派簿小助手 / classmateOutgoing 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_book_distribution_helper",
              "variantId": "classmateOutgoing",
              "mustMatchEventTitle": "派簿小助手"
            },
            "skillExpDelta": {
              "班務服務": 1
            },
            "playerLineType": "speech",
            "resultText": "家朗比你還興奮，小聲說：「得㗎得㗎。」"
          },
          {
            "id": "w4_book_distribution_helper_classmateOutgoing_say_you_join_too",
            "text": "叫他自己舉",
            "playerLine": "你咁想派，你舉啦。",
            "attitudeId": "invitePeer",
            "personalityDelta": {
              "outgoing": 1,
              "supportive": 1
            },
            "memoryAdd": [
              "w4_book_distribution_helper_classmateOutgoing_say_you_join_too"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗愣一下，真的把手舉起來。"
            },
            "statusDelta": {
              "快樂": 1,
              "體力": -1,
              "社交": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "invitePeer",
              "reason": "這個選項是為 派簿小助手 / classmateOutgoing 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_book_distribution_helper",
              "variantId": "classmateOutgoing",
              "mustMatchEventTitle": "派簿小助手"
            },
            "skillExpDelta": {
              "班務服務": 1
            },
            "playerLineType": "speech",
            "resultText": "家朗愣一下，真的把手舉起來。"
          },
          {
            "id": "w4_book_distribution_helper_classmateOutgoing_ask_if_names_known",
            "text": "說想先看一次",
            "playerLine": "我未識晒啲名，我想睇一次先。",
            "attitudeId": "seekReassurance",
            "personalityDelta": {
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w4_book_distribution_helper_classmateOutgoing_ask_if_names_known"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗點頭，但仍然忍不住看那疊簿。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "seekReassurance",
              "reason": "這個選項是為 派簿小助手 / classmateOutgoing 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_book_distribution_helper",
              "variantId": "classmateOutgoing",
              "mustMatchEventTitle": "派簿小助手"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家朗點頭，但仍然忍不住看那疊簿。"
          },
          {
            "id": "w4_book_distribution_helper_classmateOutgoing_say_not_ready_helper",
            "text": "提議一起派",
            "playerLine": "如果老師俾兩個人，我哋一齊派？",
            "attitudeId": "softBoundary",
            "personalityDelta": {
              "boundary": 1
            },
            "memoryAdd": [
              "w4_book_distribution_helper_classmateOutgoing_say_not_ready_helper"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你們同時看向老師，像等一個小任務開始。"
            },
            "statusDelta": {
              "體力": 1,
              "社交": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "softBoundary",
              "reason": "這個選項是為 派簿小助手 / classmateOutgoing 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_book_distribution_helper",
              "variantId": "classmateOutgoing",
              "mustMatchEventTitle": "派簿小助手"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "你們同時看向老師，像等一個小任務開始。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "classmateOutgoing",
          "npcIdentity": "同學",
          "npcPersonality": "外向邀請型",
          "npcDisplayName": "classmateOutgoing"
        },
        "variantId": "classmateOutgoing",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "reactionProfileId": "identity_same_age_peer__pers_outgoing_inviter"
      },
      {
        "openingDialogue": [
          {
            "speaker": "穎心",
            "text": "我有啲驚派錯簿。"
          },
          {
            "speaker": "穎心",
            "text": "啲名有啲似，我怕派咗俾錯人。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "我有啲驚派錯簿。 啲名有啲似，我怕派咗俾錯人。",
        "playerChoices": [
          {
            "id": "w4_book_distribution_helper_classmateQuiet_offer_pair_with_quiet",
            "text": "安慰她",
            "playerLine": "慢慢睇名就得，派錯都可以拎返。",
            "attitudeId": "supportQuietPeer",
            "personalityDelta": {
              "supportive": 2
            },
            "memoryAdd": [
              "w4_book_distribution_helper_classmateQuiet_offer_pair_with_quiet"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心點頭，但仍然把手放得很低。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "社交": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 3,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "supportQuietPeer",
              "reason": "這個選項是為 派簿小助手 / classmateQuiet 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_book_distribution_helper",
              "variantId": "classmateQuiet",
              "mustMatchEventTitle": "派簿小助手"
            },
            "skillExpDelta": {
              "班務服務": 2
            },
            "playerLineType": "speech",
            "resultText": "穎心點頭，但仍然把手放得很低。"
          },
          {
            "id": "w4_book_distribution_helper_classmateQuiet_say_mistake_ok",
            "text": "說可以一起",
            "playerLine": "如果可以兩個人，我幫你睇另一邊。",
            "attitudeId": "comfortPeer",
            "personalityDelta": {
              "gentle": 1,
              "supportive": 1
            },
            "memoryAdd": [
              "w4_book_distribution_helper_classmateQuiet_say_mistake_ok"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她看起來沒有那麼怕，像有人分擔一半。"
            },
            "statusDelta": {
              "體力": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "comfortPeer",
              "reason": "這個選項是為 派簿小助手 / classmateQuiet 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_book_distribution_helper",
              "variantId": "classmateQuiet",
              "mustMatchEventTitle": "派簿小助手"
            },
            "skillExpDelta": {
              "班務服務": 1
            },
            "playerLineType": "speech",
            "resultText": "她看起來沒有那麼怕，像有人分擔一半。"
          },
          {
            "id": "w4_book_distribution_helper_classmateQuiet_watch_teacher_process",
            "text": "叫她試試",
            "playerLine": "你可以試吓呀。",
            "attitudeId": "observeTogether",
            "personalityDelta": {
              "observer": 1
            },
            "memoryAdd": [
              "w4_book_distribution_helper_classmateQuiet_watch_teacher_process"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她有點緊張，但沒有立刻拒絕。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "observeTogether",
              "reason": "這個選項是為 派簿小助手 / classmateQuiet 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_book_distribution_helper",
              "variantId": "classmateQuiet",
              "mustMatchEventTitle": "派簿小助手"
            },
            "skillExpDelta": {
              "班務服務": 1
            },
            "playerLineType": "speech",
            "resultText": "她有點緊張，但沒有立刻拒絕。"
          },
          {
            "id": "w4_book_distribution_helper_classmateQuiet_dont_push_quiet",
            "text": "不勉強她",
            "playerLine": "唔想派都冇事。",
            "attitudeId": "respectBoundary",
            "personalityDelta": {
              "boundary": 1,
              "considerate": 1
            },
            "memoryAdd": [
              "w4_book_distribution_helper_classmateQuiet_dont_push_quiet"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她鬆了一口氣，像你明白她不是懶。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "respectBoundary",
              "reason": "這個選項是為 派簿小助手 / classmateQuiet 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_book_distribution_helper",
              "variantId": "classmateQuiet",
              "mustMatchEventTitle": "派簿小助手"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "她鬆了一口氣，像你明白她不是懶。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "classmateQuiet",
          "npcIdentity": "同學",
          "npcPersonality": "安靜觀察型",
          "npcDisplayName": "classmateQuiet"
        },
        "variantId": "classmateQuiet",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_quiet_observer",
        "reactionProfileId": "identity_same_age_peer__pers_quiet_observer"
      }
    ],
    "schemaVersion": "opening_event_pool_v5_1_balanced_event_specific_choices",
    "eventScheduling": {
      "baseWeight": 60,
      "weekRange": [
        4,
        4
      ],
      "conditions": [],
      "exclusiveGroup": null,
      "onceOnly": true,
      "cooldownWeeks": 999,
      "prerequisiteMemory": [],
      "sourceChannel": "classroom",
      "involvementRole": "direct_actor_or_supporter"
    },
    "eventChoiceDesignRule": "playerChoices must be authored for this exact event+variant; personalityId may alter tone and point interpretation but must not inject a generic personality choice set."
  },
  {
    "id": "w4_homework_collection_helper",
    "weekPool": "W4_result_and_class_duty",
    "title": "收功課小助手",
    "sceneType": "class_duty_moral_boundary",
    "coreSituation": "老師要收功課，有人忘記交，有人找不到。事件測試規矩、友情、邊界和責任，不是簡單道德分。",
    "followUpHooks": [
      "class_duty_identity",
      "w6_classmate_echo",
      "story_homework_collection"
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "pointDesign": {
      "version": "target_aware_integer_delta_v5_1_balanced",
      "mainStatusKeys": [
        "快樂",
        "理智值",
        "體力",
        "學業",
        "社交",
        "創意",
        "家庭關係",
        "自信"
      ],
      "skillKeys": [
        "繪畫",
        "鋼琴",
        "朗誦",
        "游泳",
        "足球",
        "編程",
        "閱讀",
        "班務服務"
      ],
      "note": "分數由玩家 attitudeId、舊 effects、事件題材，以及當前 NPC 身份 / 性格共同決定；同一個選項在不同 NPC 面前可以有不同結果。",
      "choiceTextRule": "choice.text is player-facing and must describe a concrete action or spoken line that answers this event dialogue; do not show abstract attitude labels.",
      "noCrossEventGenericChoiceRule": "The same choice.text should not be reused across unrelated event ids.",
      "statusBalanceRule": "每個 variant 通常只有 1–2 個選項會推進核心狀態；其餘選項偏向保留、錯過、休息、觀察或付出代價。statusDelta 是方向，不是每次點擊獎勵。",
      "skillSemantics": "skillExpDelta 是技能經驗值，不是技能等級。",
      "previewRule": "dialogueTriggerPreview is generated from openingDialogue and should not be hand-authored."
    },
    "fallbackChoices": [
      {
        "id": "w4_homework_collection_helper_teacherStrict_fallback_ask",
        "text": "問清楚這件事和自己現在要做甚麼。",
        "playerLine": "問清楚這件事和自己現在要做甚麼。",
        "attitudeId": "askForClarification",
        "personalityDelta": {
          "helpSeeking": 1
        },
        "memoryAdd": [
          "w4_homework_collection_helper_teacherStrict_fallback_ask"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你用提問避免誤會，這是只屬於當前事件的備用選項。"
        },
        "statusDelta": {
          "理智值": 1,
          "體力": -1,
          "自信": 1
        },
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "嚴格學業型",
          "attitudeReadAs": "askForClarification",
          "reason": "這個選項是為 收功課小助手 / teacherStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w4_homework_collection_helper",
          "variantId": "teacherStrict",
          "mustMatchEventTitle": "收功課小助手"
        },
        "skillExpDelta": {}
      },
      {
        "id": "w4_homework_collection_helper_teacherStrict_fallback_observe",
        "text": "先觀察這個情境，不立刻答應或拒絕。",
        "playerLine": "先觀察這個情境，不立刻答應或拒絕。",
        "attitudeId": "observeFirst",
        "personalityDelta": {
          "observer": 1
        },
        "memoryAdd": [
          "w4_homework_collection_helper_teacherStrict_fallback_observe"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你暫時保留行動，讓自己多一點時間。"
        },
        "statusDelta": {},
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "嚴格學業型",
          "attitudeReadAs": "observeFirst",
          "reason": "這個選項是為 收功課小助手 / teacherStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w4_homework_collection_helper",
          "variantId": "teacherStrict",
          "mustMatchEventTitle": "收功課小助手"
        },
        "skillExpDelta": {}
      }
    ],
    "variants": [
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "收功課唔係收得快就得，要對清楚名。"
          },
          {
            "speaker": "老師",
            "text": "冇交就要記低，唔可以靠估。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "收功課唔係收得快就得，要對清楚名。 冇交就要記低，唔可以靠估。",
        "playerChoices": [
          {
            "id": "w4_homework_collection_helper_teacherStrict_collect_by_name_list",
            "text": "照名單收",
            "playerLine": "我逐個名睇。",
            "attitudeId": "ruleService",
            "personalityDelta": {
              "organized": 2,
              "compliant": 1
            },
            "memoryAdd": [
              "w4_homework_collection_helper_teacherStrict_collect_by_name_list"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你收得慢，但老師知道你不是亂收。"
            },
            "statusDelta": {
              "理智值": 2,
              "體力": -1,
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "ruleService",
              "reason": "這個選項是為 收功課小助手 / teacherStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_homework_collection_helper",
              "variantId": "teacherStrict",
              "mustMatchEventTitle": "收功課小助手"
            },
            "skillExpDelta": {
              "班務服務": 2
            },
            "playerLineType": "speech",
            "resultText": "你收得慢，但老師知道你不是亂收。"
          },
          {
            "id": "w4_homework_collection_helper_teacherStrict_tell_missing_to_teacher",
            "text": "問忘記交的怎樣辦",
            "playerLine": "如果有人話未搵到呢？",
            "attitudeId": "honestReport",
            "personalityDelta": {
              "accountable": 2
            },
            "memoryAdd": [
              "w4_homework_collection_helper_teacherStrict_tell_missing_to_teacher"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說先記低，讓對方自己跟老師講。"
            },
            "statusDelta": {
              "理智值": -1,
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "honestReport",
              "reason": "這個選項是為 收功課小助手 / teacherStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_homework_collection_helper",
              "variantId": "teacherStrict",
              "mustMatchEventTitle": "收功課小助手"
            },
            "skillExpDelta": {
              "班務服務": 1
            },
            "playerLineType": "speech",
            "resultText": "老師說先記低，讓對方自己跟老師講。"
          },
          {
            "id": "w4_homework_collection_helper_teacherStrict_remind_before_report",
            "text": "幫同學找",
            "playerLine": "我等佢搵一陣得唔得？",
            "attitudeId": "balancedReminder",
            "personalityDelta": {
              "supportive": 1,
              "compliant": 1
            },
            "memoryAdd": [
              "w4_homework_collection_helper_teacherStrict_remind_before_report"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師容許一小段時間，但提醒不要拖全班。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "balancedReminder",
              "reason": "這個選項是為 收功課小助手 / teacherStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_homework_collection_helper",
              "variantId": "teacherStrict",
              "mustMatchEventTitle": "收功課小助手"
            },
            "skillExpDelta": {
              "班務服務": 2
            },
            "playerLineType": "speech",
            "resultText": "老師容許一小段時間，但提醒不要拖全班。"
          },
          {
            "id": "w4_homework_collection_helper_teacherStrict_cover_friend_missing",
            "text": "不舉手",
            "playerLine": "你沒有舉手。",
            "attitudeId": "coverFriend",
            "personalityDelta": {
              "loyal": 1,
              "avoidant": 1
            },
            "memoryAdd": [
              "w4_homework_collection_helper_teacherStrict_cover_friend_missing"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "這次壓力不在你身上，但你也沒有練習班務。"
            },
            "statusDelta": {
              "理智值": -2,
              "學業": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": -2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "coverFriend",
              "reason": "這個選項是為 收功課小助手 / teacherStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_homework_collection_helper",
              "variantId": "teacherStrict",
              "mustMatchEventTitle": "收功課小助手"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "這次壓力不在你身上，但你也沒有練習班務。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "teacherStrict",
          "npcIdentity": "老師",
          "npcPersonality": "嚴格學業型",
          "npcDisplayName": "teacherStrict"
        },
        "variantId": "teacherStrict",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_strict_academic",
        "reactionProfileId": "identity_teacher__pers_strict_academic"
      },
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "可以兩個人一齊收功課，互相提醒。"
          },
          {
            "speaker": "老師",
            "text": "第一次做唔使完美，最重要係唔好怕。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "可以兩個人一齊收功課，互相提醒。 第一次做唔使完美，最重要係唔好怕。",
        "playerChoices": [
          {
            "id": "w4_homework_collection_helper_teacherEncouraging_collect_with_partner",
            "text": "和同學一起收",
            "playerLine": "我哋一人一行得唔得？",
            "attitudeId": "cooperateService",
            "personalityDelta": {
              "supportive": 1,
              "organized": 1
            },
            "memoryAdd": [
              "w4_homework_collection_helper_teacherEncouraging_collect_with_partner"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你們分工後比較不亂。"
            },
            "statusDelta": {
              "理智值": 2,
              "體力": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "cooperateService",
              "reason": "這個選項是為 收功課小助手 / teacherEncouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_homework_collection_helper",
              "variantId": "teacherEncouraging",
              "mustMatchEventTitle": "收功課小助手"
            },
            "skillExpDelta": {
              "班務服務": 2
            },
            "playerLineType": "speech",
            "resultText": "你們分工後比較不亂。"
          },
          {
            "id": "w4_homework_collection_helper_teacherEncouraging_gentle_remind_missing",
            "text": "提醒朋友快點交",
            "playerLine": "你快啲搵，我就嚟收到你嗰行。",
            "attitudeId": "gentleReminder",
            "personalityDelta": {
              "supportive": 1
            },
            "memoryAdd": [
              "w4_homework_collection_helper_teacherEncouraging_gentle_remind_missing"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "朋友趕快翻書包，你沒有直接替他遮掩。"
            },
            "statusDelta": {
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "gentleReminder",
              "reason": "這個選項是為 收功課小助手 / teacherEncouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_homework_collection_helper",
              "variantId": "teacherEncouraging",
              "mustMatchEventTitle": "收功課小助手"
            },
            "skillExpDelta": {
              "班務服務": 2
            },
            "playerLineType": "speech",
            "resultText": "朋友趕快翻書包，你沒有直接替他遮掩。"
          },
          {
            "id": "w4_homework_collection_helper_teacherEncouraging_ask_teacher_how_handle",
            "text": "問老師再確認",
            "playerLine": "我收完要點算一次嗎？",
            "attitudeId": "askAuthority",
            "personalityDelta": {
              "helpSeeking": 1,
              "accountable": 1
            },
            "memoryAdd": [
              "w4_homework_collection_helper_teacherEncouraging_ask_teacher_how_handle"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說對，還教你先數本數。"
            },
            "statusDelta": {
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "askAuthority",
              "reason": "這個選項是為 收功課小助手 / teacherEncouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_homework_collection_helper",
              "variantId": "teacherEncouraging",
              "mustMatchEventTitle": "收功課小助手"
            },
            "skillExpDelta": {
              "班務服務": 1
            },
            "playerLineType": "speech",
            "resultText": "老師說對，還教你先數本數。"
          },
          {
            "id": "w4_homework_collection_helper_teacherEncouraging_avoid_collecting",
            "text": "先旁觀",
            "playerLine": "你看別人收功課。",
            "attitudeId": "avoidResponsibility",
            "personalityDelta": {
              "avoidant": 1
            },
            "memoryAdd": [
              "w4_homework_collection_helper_teacherEncouraging_avoid_collecting"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有上手，但知道收功課原來也有步驟。"
            },
            "statusDelta": {
              "自信": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "avoidResponsibility",
              "reason": "這個選項是為 收功課小助手 / teacherEncouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_homework_collection_helper",
              "variantId": "teacherEncouraging",
              "mustMatchEventTitle": "收功課小助手"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "你沒有上手，但知道收功課原來也有步驟。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "teacherEncouraging",
          "npcIdentity": "老師",
          "npcPersonality": "鼓勵型",
          "npcDisplayName": "teacherEncouraging"
        },
        "variantId": "teacherEncouraging",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_encouraging_teacher",
        "reactionProfileId": "identity_teacher__pers_encouraging_teacher"
      },
      {
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "你唔好漏咗我本，我已經交咗。"
          },
          {
            "speaker": "梓軒",
            "text": "我今朝好早就放咗喺度。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "你唔好漏咗我本，我已經交咗。 我今朝好早就放咗喺度。",
        "playerChoices": [
          {
            "id": "w4_homework_collection_helper_classmateCompetitive_confirm_his_homework",
            "text": "照名單確認",
            "playerLine": "我睇名單，睇到你先勾。",
            "attitudeId": "verifyPeer",
            "personalityDelta": {
              "organized": 1,
              "cautious": 1
            },
            "memoryAdd": [
              "w4_homework_collection_helper_classmateCompetitive_confirm_his_homework"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒有點不耐煩，但也不能說你錯。"
            },
            "statusDelta": {
              "理智值": 2,
              "體力": -1,
              "學業": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "respect",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "verifyPeer",
              "reason": "這個選項是為 收功課小助手 / classmateCompetitive 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_homework_collection_helper",
              "variantId": "classmateCompetitive",
              "mustMatchEventTitle": "收功課小助手"
            },
            "skillExpDelta": {
              "班務服務": 1
            },
            "playerLineType": "speech",
            "resultText": "梓軒有點不耐煩，但也不能說你錯。"
          },
          {
            "id": "w4_homework_collection_helper_classmateCompetitive_reply_not_rushing",
            "text": "叫他自己指出",
            "playerLine": "咁你指俾我睇邊本係你嘅。",
            "attitudeId": "assertProcess",
            "personalityDelta": {
              "boundary": 1,
              "selfAdvocacy": 1
            },
            "memoryAdd": [
              "w4_homework_collection_helper_classmateCompetitive_reply_not_rushing"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "他立刻指給你看，像要證明自己真的交了。"
            },
            "statusDelta": {
              "理智值": 1,
              "社交": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "assertProcess",
              "reason": "這個選項是為 收功課小助手 / classmateCompetitive 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_homework_collection_helper",
              "variantId": "classmateCompetitive",
              "mustMatchEventTitle": "收功課小助手"
            },
            "skillExpDelta": {
              "班務服務": 1
            },
            "playerLineType": "speech",
            "resultText": "他立刻指給你看，像要證明自己真的交了。"
          },
          {
            "id": "w4_homework_collection_helper_classmateCompetitive_ask_him_help_stack",
            "text": "不理他的催促",
            "playerLine": "我逐本收，唔好催我。",
            "attitudeId": "delegate",
            "personalityDelta": {
              "strategic": 1
            },
            "memoryAdd": [
              "w4_homework_collection_helper_classmateCompetitive_ask_him_help_stack"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒閉上嘴，但表情有點硬。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "respect",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "delegate",
              "reason": "這個選項是為 收功課小助手 / classmateCompetitive 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_homework_collection_helper",
              "variantId": "classmateCompetitive",
              "mustMatchEventTitle": "收功課小助手"
            },
            "skillExpDelta": {
              "班務服務": 2
            },
            "playerLineType": "speech",
            "resultText": "梓軒閉上嘴，但表情有點硬。"
          },
          {
            "id": "w4_homework_collection_helper_classmateCompetitive_snap_back",
            "text": "先收他的",
            "playerLine": "好，我先收你本。",
            "attitudeId": "snapBack",
            "personalityDelta": {
              "impulsive": 1
            },
            "memoryAdd": [
              "w4_homework_collection_helper_classmateCompetitive_snap_back"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "他鬆了一口氣，但你後面還要補回順序。"
            },
            "statusDelta": {
              "理智值": -2,
              "社交": -1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "respect",
                "amount": -1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "snapBack",
              "reason": "這個選項是為 收功課小助手 / classmateCompetitive 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_homework_collection_helper",
              "variantId": "classmateCompetitive",
              "mustMatchEventTitle": "收功課小助手"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "他鬆了一口氣，但你後面還要補回順序。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "classmateCompetitive",
          "npcIdentity": "同學",
          "npcPersonality": "競爭同學型",
          "npcDisplayName": "classmateCompetitive"
        },
        "variantId": "classmateCompetitive",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_competitive_peer",
        "reactionProfileId": "identity_same_age_peer__pers_competitive_peer"
      }
    ],
    "schemaVersion": "opening_event_pool_v5_1_balanced_event_specific_choices",
    "eventScheduling": {
      "baseWeight": 60,
      "weekRange": [
        4,
        4
      ],
      "conditions": [],
      "exclusiveGroup": null,
      "onceOnly": true,
      "cooldownWeeks": 999,
      "prerequisiteMemory": [],
      "sourceChannel": "classroom",
      "involvementRole": "direct_actor_or_supporter"
    },
    "eventChoiceDesignRule": "playerChoices must be authored for this exact event+variant; personalityId may alter tone and point interpretation but must not inject a generic personality choice set."
  },
  {
    "id": "w4_other_student_selected_observer",
    "weekPool": "W4_result_and_class_duty",
    "title": "同學被選中，你只是旁觀",
    "sceneType": "world_not_player_centered",
    "coreSituation": "老師選了另一位同學做班務或活動，玩家不是主角。事件讓世界不圍住玩家轉，也能開支援者或競爭感。",
    "followUpHooks": [
      "supporter_identity",
      "competition_feeling",
      "w6_teacher_observation"
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "pointDesign": {
      "version": "target_aware_integer_delta_v5_1_balanced",
      "mainStatusKeys": [
        "快樂",
        "理智值",
        "體力",
        "學業",
        "社交",
        "創意",
        "家庭關係",
        "自信"
      ],
      "skillKeys": [
        "繪畫",
        "鋼琴",
        "朗誦",
        "游泳",
        "足球",
        "編程",
        "閱讀",
        "班務服務"
      ],
      "note": "分數由玩家 attitudeId、舊 effects、事件題材，以及當前 NPC 身份 / 性格共同決定；同一個選項在不同 NPC 面前可以有不同結果。",
      "choiceTextRule": "choice.text is player-facing and must describe a concrete action or spoken line that answers this event dialogue; do not show abstract attitude labels.",
      "noCrossEventGenericChoiceRule": "The same choice.text should not be reused across unrelated event ids.",
      "statusBalanceRule": "每個 variant 通常只有 1–2 個選項會推進核心狀態；其餘選項偏向保留、錯過、休息、觀察或付出代價。statusDelta 是方向，不是每次點擊獎勵。",
      "skillSemantics": "skillExpDelta 是技能經驗值，不是技能等級。",
      "previewRule": "dialogueTriggerPreview is generated from openingDialogue and should not be hand-authored."
    },
    "fallbackChoices": [
      {
        "id": "w4_other_student_selected_observer_selectedQuietObserver_fallback_ask",
        "text": "問清楚這件事和自己現在要做甚麼。",
        "playerLine": "問清楚這件事和自己現在要做甚麼。",
        "attitudeId": "askForClarification",
        "personalityDelta": {
          "helpSeeking": 1
        },
        "memoryAdd": [
          "w4_other_student_selected_observer_selectedQuietObserver_fallback_ask"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你用提問避免誤會，這是只屬於當前事件的備用選項。"
        },
        "statusDelta": {
          "理智值": 1,
          "體力": -1,
          "自信": 1
        },
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "同學",
          "npcPersonality": "安靜觀察型",
          "attitudeReadAs": "askForClarification",
          "reason": "這個選項是為 同學被選中，你只是旁觀 / selectedQuietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w4_other_student_selected_observer",
          "variantId": "selectedQuietObserver",
          "mustMatchEventTitle": "同學被選中，你只是旁觀"
        },
        "skillExpDelta": {}
      },
      {
        "id": "w4_other_student_selected_observer_selectedQuietObserver_fallback_observe",
        "text": "先觀察這個情境，不立刻答應或拒絕。",
        "playerLine": "先觀察這個情境，不立刻答應或拒絕。",
        "attitudeId": "observeFirst",
        "personalityDelta": {
          "observer": 1
        },
        "memoryAdd": [
          "w4_other_student_selected_observer_selectedQuietObserver_fallback_observe"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你暫時保留行動，讓自己多一點時間。"
        },
        "statusDelta": {},
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "同學",
          "npcPersonality": "安靜觀察型",
          "attitudeReadAs": "observeFirst",
          "reason": "這個選項是為 同學被選中，你只是旁觀 / selectedQuietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w4_other_student_selected_observer",
          "variantId": "selectedQuietObserver",
          "mustMatchEventTitle": "同學被選中，你只是旁觀"
        },
        "skillExpDelta": {}
      }
    ],
    "variants": [
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "穎心，你上次做得幾細心，今日試吓做圖書角小助手。"
          },
          {
            "speaker": "穎心",
            "text": "我？……好。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "穎心，你上次做得幾細心，今日試吓做圖書角小助手。 我？……好。",
        "playerChoices": [
          {
            "id": "w4_other_student_selected_observer_selectedQuietObserver_quiet_cheer_selected",
            "text": "替她打氣",
            "playerLine": "你慢慢嚟，唔使驚。",
            "attitudeId": "supportPeer",
            "personalityDelta": {
              "supportive": 1,
              "gentle": 1
            },
            "memoryAdd": [
              "w4_other_student_selected_observer_selectedQuietObserver_quiet_cheer_selected"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心看了你一眼，點頭很輕，但有收到。"
            },
            "statusDelta": {
              "體力": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "supportPeer",
              "reason": "這個選項是為 同學被選中，你只是旁觀 / selectedQuietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_other_student_selected_observer",
              "variantId": "selectedQuietObserver",
              "mustMatchEventTitle": "同學被選中，你只是旁觀"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "穎心看了你一眼，點頭很輕，但有收到。"
          },
          {
            "id": "w4_other_student_selected_observer_selectedQuietObserver_offer_help_if_needed",
            "text": "心裡有點羨慕",
            "playerLine": "你看著她走出去，心裡有點想自己也被叫到。",
            "attitudeId": "offerSupport",
            "personalityDelta": {
              "supportive": 1
            },
            "memoryAdd": [
              "w4_other_student_selected_observer_selectedQuietObserver_offer_help_if_needed"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有做錯，只是發現自己也想被看見。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "offerSupport",
              "reason": "這個選項是為 同學被選中，你只是旁觀 / selectedQuietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_other_student_selected_observer",
              "variantId": "selectedQuietObserver",
              "mustMatchEventTitle": "同學被選中，你只是旁觀"
            },
            "skillExpDelta": {
              "班務服務": 1
            },
            "playerLineType": "action",
            "resultText": "你沒有做錯，只是發現自己也想被看見。"
          },
          {
            "id": "w4_other_student_selected_observer_selectedQuietObserver_feel_jealous_silent",
            "text": "問下次可否試",
            "playerLine": "老師，下次到我得唔得？",
            "attitudeId": "quietJealousy",
            "personalityDelta": {
              "observer": 1
            },
            "memoryAdd": [
              "w4_other_student_selected_observer_selectedQuietObserver_feel_jealous_silent"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說下次再看看，你把想試的話講了出來。"
            },
            "statusDelta": {
              "理智值": 1,
              "自信": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "quietJealousy",
              "reason": "這個選項是為 同學被選中，你只是旁觀 / selectedQuietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_other_student_selected_observer",
              "variantId": "selectedQuietObserver",
              "mustMatchEventTitle": "同學被選中，你只是旁觀"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師說下次再看看，你把想試的話講了出來。"
          },
          {
            "id": "w4_other_student_selected_observer_selectedQuietObserver_ask_teacher_next_time",
            "text": "不太在意",
            "playerLine": "你低頭繼續整理書本。",
            "attitudeId": "askOpportunity",
            "personalityDelta": {
              "initiative": 1
            },
            "memoryAdd": [
              "w4_other_student_selected_observer_selectedQuietObserver_ask_teacher_next_time"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "班務在你旁邊發生，但沒有拉住你。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "自信": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "askOpportunity",
              "reason": "這個選項是為 同學被選中，你只是旁觀 / selectedQuietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_other_student_selected_observer",
              "variantId": "selectedQuietObserver",
              "mustMatchEventTitle": "同學被選中，你只是旁觀"
            },
            "skillExpDelta": {
              "班務服務": 1
            },
            "playerLineType": "action",
            "resultText": "班務在你旁邊發生，但沒有拉住你。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "selectedQuietObserver",
          "npcIdentity": "同學",
          "npcPersonality": "安靜觀察型",
          "npcDisplayName": "selectedQuietObserver"
        },
        "variantId": "selectedQuietObserver",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_quiet_observer",
        "reactionProfileId": "identity_same_age_peer__pers_quiet_observer"
      },
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "梓軒，今日你幫手收練習紙。"
          },
          {
            "speaker": "梓軒",
            "text": "好。"
          },
          {
            "speaker": "旁邊同學小聲",
            "text": "佢又被叫，好似好叻。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "梓軒，今日你幫手收練習紙。 好。 佢又被叫，好似好叻。",
        "playerChoices": [
          {
            "id": "w4_other_student_selected_observer_selectedCompetitivePeer_acknowledge_his_skill",
            "text": "替他打氣",
            "playerLine": "你收慢啲就唔會漏。",
            "attitudeId": "fairRespect",
            "personalityDelta": {
              "fair": 1,
              "competitive": 1
            },
            "memoryAdd": [
              "w4_other_student_selected_observer_selectedCompetitivePeer_acknowledge_his_skill"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒看起來想說自己不會漏，但還是點了一下頭。"
            },
            "statusDelta": {
              "理智值": 1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "respect",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "fairRespect",
              "reason": "這個選項是為 同學被選中，你只是旁觀 / selectedCompetitivePeer 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_other_student_selected_observer",
              "variantId": "selectedCompetitivePeer",
              "mustMatchEventTitle": "同學被選中，你只是旁觀"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "梓軒看起來想說自己不會漏，但還是點了一下頭。"
          },
          {
            "id": "w4_other_student_selected_observer_selectedCompetitivePeer_compare_silently",
            "text": "有點羨慕",
            "playerLine": "你望住他，心裡想下次會不會到自己。",
            "attitudeId": "innerCompare",
            "personalityDelta": {
              "competitive": 1
            },
            "memoryAdd": [
              "w4_other_student_selected_observer_selectedCompetitivePeer_compare_silently"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有說出口，但競爭感悄悄出現。"
            },
            "statusDelta": {
              "理智值": -1,
              "自信": 1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "innerCompare",
              "reason": "這個選項是為 同學被選中，你只是旁觀 / selectedCompetitivePeer 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_other_student_selected_observer",
              "variantId": "selectedCompetitivePeer",
              "mustMatchEventTitle": "同學被選中，你只是旁觀"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "你沒有說出口，但競爭感悄悄出現。"
          },
          {
            "id": "w4_other_student_selected_observer_selectedCompetitivePeer_ask_how_chosen",
            "text": "問自己能不能試",
            "playerLine": "老師，下次我都想試。",
            "attitudeId": "curiousAsk",
            "personalityDelta": {
              "helpSeeking": 1,
              "competitive": 1
            },
            "memoryAdd": [
              "w4_other_student_selected_observer_selectedCompetitivePeer_ask_how_chosen"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師看了你一眼，像把你的意願記下來。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "curiousAsk",
              "reason": "這個選項是為 同學被選中，你只是旁觀 / selectedCompetitivePeer 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_other_student_selected_observer",
              "variantId": "selectedCompetitivePeer",
              "mustMatchEventTitle": "同學被選中，你只是旁觀"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師看了你一眼，像把你的意願記下來。"
          },
          {
            "id": "w4_other_student_selected_observer_selectedCompetitivePeer_not_care_selected",
            "text": "不想被叫",
            "playerLine": "你默默鬆了一口氣。",
            "attitudeId": "detached",
            "personalityDelta": {
              "boundary": 1
            },
            "memoryAdd": [
              "w4_other_student_selected_observer_selectedCompetitivePeer_not_care_selected"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "有人被選中，也代表你這次不用站到前面。"
            },
            "statusDelta": {
              "體力": 1,
              "社交": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "detached",
              "reason": "這個選項是為 同學被選中，你只是旁觀 / selectedCompetitivePeer 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_other_student_selected_observer",
              "variantId": "selectedCompetitivePeer",
              "mustMatchEventTitle": "同學被選中，你只是旁觀"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "有人被選中，也代表你這次不用站到前面。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "selectedCompetitivePeer",
          "npcIdentity": "同學",
          "npcPersonality": "競爭同學型",
          "npcDisplayName": "selectedCompetitivePeer"
        },
        "variantId": "selectedCompetitivePeer",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_competitive_peer",
        "reactionProfileId": "identity_same_age_peer__pers_competitive_peer"
      },
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "家朗，你今日幫手派簿。"
          },
          {
            "speaker": "家朗",
            "text": "好呀！"
          },
          {
            "speaker": "旁邊同學笑了一下",
            "text": "佢好快答應。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "家朗，你今日幫手派簿。 好呀！ 佢好快答應。",
        "playerChoices": [
          {
            "id": "w4_other_student_selected_observer_selectedOutgoingInvite_cheer_outgoing_peer",
            "text": "提醒他慢一點",
            "playerLine": "你唔好派到飛晒呀。",
            "attitudeId": "playfulSupport",
            "personalityDelta": {
              "outgoing": 1,
              "supportive": 1
            },
            "memoryAdd": [
              "w4_other_student_selected_observer_selectedOutgoingInvite_cheer_outgoing_peer"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗笑了，但真的把第一本拿慢一點。"
            },
            "statusDelta": {
              "快樂": 1,
              "體力": -1,
              "社交": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "playfulSupport",
              "reason": "這個選項是為 同學被選中，你只是旁觀 / selectedOutgoingInvite 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_other_student_selected_observer",
              "variantId": "selectedOutgoingInvite",
              "mustMatchEventTitle": "同學被選中，你只是旁觀"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家朗笑了，但真的把第一本拿慢一點。"
          },
          {
            "id": "w4_other_student_selected_observer_selectedOutgoingInvite_join_if_need",
            "text": "替他開心",
            "playerLine": "你去啦，你好似好想做。",
            "attitudeId": "offerSupport",
            "personalityDelta": {
              "supportive": 1
            },
            "memoryAdd": [
              "w4_other_student_selected_observer_selectedOutgoingInvite_join_if_need"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗回頭比了個很小的笑，像找到同伴支持。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "offerSupport",
              "reason": "這個選項是為 同學被選中，你只是旁觀 / selectedOutgoingInvite 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_other_student_selected_observer",
              "variantId": "selectedOutgoingInvite",
              "mustMatchEventTitle": "同學被選中，你只是旁觀"
            },
            "skillExpDelta": {
              "班務服務": 1
            },
            "playerLineType": "speech",
            "resultText": "家朗回頭比了個很小的笑，像找到同伴支持。"
          },
          {
            "id": "w4_other_student_selected_observer_selectedOutgoingInvite_wonder_next_turn",
            "text": "有點羨慕",
            "playerLine": "你看著他拿簿，心裡有點想試。",
            "attitudeId": "hopefulObserve",
            "personalityDelta": {
              "observer": 1
            },
            "memoryAdd": [
              "w4_other_student_selected_observer_selectedOutgoingInvite_wonder_next_turn"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有討厭他，只是也想有份。"
            },
            "statusDelta": {},
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "hopefulObserve",
              "reason": "這個選項是為 同學被選中，你只是旁觀 / selectedOutgoingInvite 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_other_student_selected_observer",
              "variantId": "selectedOutgoingInvite",
              "mustMatchEventTitle": "同學被選中，你只是旁觀"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "你沒有討厭他，只是也想有份。"
          },
          {
            "id": "w4_other_student_selected_observer_selectedOutgoingInvite_feel_left_out",
            "text": "不在意",
            "playerLine": "你繼續收拾桌面。",
            "attitudeId": "leftOut",
            "personalityDelta": {
              "shy": 1
            },
            "memoryAdd": [
              "w4_other_student_selected_observer_selectedOutgoingInvite_feel_left_out"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "這件事成為班房裡的一小段聲音，很快過去。"
            },
            "statusDelta": {
              "理智值": -1,
              "體力": 1,
              "自信": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "leftOut",
              "reason": "這個選項是為 同學被選中，你只是旁觀 / selectedOutgoingInvite 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w4_other_student_selected_observer",
              "variantId": "selectedOutgoingInvite",
              "mustMatchEventTitle": "同學被選中，你只是旁觀"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "這件事成為班房裡的一小段聲音，很快過去。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "selectedOutgoingInvite",
          "npcIdentity": "同學",
          "npcPersonality": "外向邀請型",
          "npcDisplayName": "selectedOutgoingInvite"
        },
        "variantId": "selectedOutgoingInvite",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "reactionProfileId": "identity_same_age_peer__pers_outgoing_inviter"
      }
    ],
    "schemaVersion": "opening_event_pool_v5_1_balanced_event_specific_choices",
    "eventScheduling": {
      "baseWeight": 60,
      "weekRange": [
        4,
        4
      ],
      "conditions": [],
      "exclusiveGroup": null,
      "onceOnly": true,
      "cooldownWeeks": 999,
      "prerequisiteMemory": [],
      "sourceChannel": "classroom",
      "involvementRole": "observer"
    },
    "eventChoiceDesignRule": "playerChoices must be authored for this exact event+variant; personalityId may alter tone and point interpretation but must not inject a generic personality choice set."
  },
  {
    "id": "w5_artwork_gets_noticed",
    "weekPool": "W5_interest_and_opportunity",
    "title": "視藝堂作品被注意",
    "sceneType": "art_interest_seed",
    "coreSituation": "玩家的作品被同學或老師看見，開 painting skill，不必直接接比賽。",
    "followUpHooks": [
      "painting_skill_open",
      "w5_school_art_competition_info",
      "story_artwork_noticed"
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "pointDesign": {
      "version": "target_aware_integer_delta_v5_1_balanced",
      "mainStatusKeys": [
        "快樂",
        "理智值",
        "體力",
        "學業",
        "社交",
        "創意",
        "家庭關係",
        "自信"
      ],
      "skillKeys": [
        "繪畫",
        "鋼琴",
        "朗誦",
        "游泳",
        "足球",
        "編程",
        "閱讀",
        "班務服務"
      ],
      "note": "分數由玩家 attitudeId、舊 effects、事件題材，以及當前 NPC 身份 / 性格共同決定；同一個選項在不同 NPC 面前可以有不同結果。",
      "choiceTextRule": "choice.text is player-facing and must describe a concrete action or spoken line that answers this event dialogue; do not show abstract attitude labels.",
      "noCrossEventGenericChoiceRule": "The same choice.text should not be reused across unrelated event ids.",
      "statusBalanceRule": "每個 variant 通常只有 1–2 個選項會推進核心狀態；其餘選項偏向保留、錯過、休息、觀察或付出代價。statusDelta 是方向，不是每次點擊獎勵。",
      "skillSemantics": "skillExpDelta 是技能經驗值，不是技能等級。",
      "previewRule": "dialogueTriggerPreview is generated from openingDialogue and should not be hand-authored."
    },
    "fallbackChoices": [
      {
        "id": "w5_artwork_gets_noticed_teacherActivityRecommender_fallback_ask",
        "text": "問清楚這件事和自己現在要做甚麼。",
        "playerLine": "問清楚這件事和自己現在要做甚麼。",
        "attitudeId": "askForClarification",
        "personalityDelta": {
          "helpSeeking": 1
        },
        "memoryAdd": [
          "w5_artwork_gets_noticed_teacherActivityRecommender_fallback_ask"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你用提問避免誤會，這是只屬於當前事件的備用選項。"
        },
        "statusDelta": {
          "理智值": 1,
          "體力": -1,
          "自信": 1
        },
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "活動推薦型",
          "attitudeReadAs": "askForClarification",
          "reason": "這個選項是為 視藝堂作品被注意 / teacherActivityRecommender 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w5_artwork_gets_noticed",
          "variantId": "teacherActivityRecommender",
          "mustMatchEventTitle": "視藝堂作品被注意"
        },
        "skillExpDelta": {}
      },
      {
        "id": "w5_artwork_gets_noticed_teacherActivityRecommender_fallback_observe",
        "text": "先觀察這個情境，不立刻答應或拒絕。",
        "playerLine": "先觀察這個情境，不立刻答應或拒絕。",
        "attitudeId": "observeFirst",
        "personalityDelta": {
          "observer": 1
        },
        "memoryAdd": [
          "w5_artwork_gets_noticed_teacherActivityRecommender_fallback_observe"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你暫時保留行動，讓自己多一點時間。"
        },
        "statusDelta": {},
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "活動推薦型",
          "attitudeReadAs": "observeFirst",
          "reason": "這個選項是為 視藝堂作品被注意 / teacherActivityRecommender 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w5_artwork_gets_noticed",
          "variantId": "teacherActivityRecommender",
          "mustMatchEventTitle": "視藝堂作品被注意"
        },
        "skillExpDelta": {}
      }
    ],
    "variants": [
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "你呢度用色幾特別。唔一定要畫得最似，重點係你有自己想法。"
          },
          {
            "speaker": "老師",
            "text": "你可唔可以講下呢塊顏色係咩？"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "你呢度用色幾特別。唔一定要畫得最似，重點係你有自己想法。 你可唔可以講下呢塊顏色係咩？",
        "playerChoices": [
          {
            "id": "w5_artwork_gets_noticed_teacherActivityRecommender_explain_colour_choice",
            "text": "解釋畫法",
            "playerLine": "我畫放學嗰陣，天色有少少橙。",
            "attitudeId": "explainCreative",
            "personalityDelta": {
              "creative": 1,
              "selfAdvocacy": 1
            },
            "memoryAdd": [
              "w5_artwork_gets_noticed_teacherActivityRecommender_explain_colour_choice"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師聽完點頭，像真的看見你想畫的時間。"
            },
            "statusDelta": {
              "體力": -1,
              "創意": 2,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "活動推薦型",
              "attitudeReadAs": "explainCreative",
              "reason": "這個選項是為 視藝堂作品被注意 / teacherActivityRecommender 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_artwork_gets_noticed",
              "variantId": "teacherActivityRecommender",
              "mustMatchEventTitle": "視藝堂作品被注意"
            },
            "skillExpDelta": {
              "繪畫": 2
            },
            "playerLineType": "speech",
            "resultText": "老師聽完點頭，像真的看見你想畫的時間。"
          },
          {
            "id": "w5_artwork_gets_noticed_teacherActivityRecommender_ask_which_part_good",
            "text": "說只是隨便畫",
            "playerLine": "我都係亂試下色。",
            "attitudeId": "askFeedback",
            "personalityDelta": {
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w5_artwork_gets_noticed_teacherActivityRecommender_ask_which_part_good"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說亂試也可以變成自己的方法。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "創意": 1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "活動推薦型",
              "attitudeReadAs": "askFeedback",
              "reason": "這個選項是為 視藝堂作品被注意 / teacherActivityRecommender 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_artwork_gets_noticed",
              "variantId": "teacherActivityRecommender",
              "mustMatchEventTitle": "視藝堂作品被注意"
            },
            "skillExpDelta": {
              "繪畫": 1
            },
            "playerLineType": "speech",
            "resultText": "老師說亂試也可以變成自己的方法。"
          },
          {
            "id": "w5_artwork_gets_noticed_teacherActivityRecommender_say_random_drawing",
            "text": "問哪裡好",
            "playerLine": "你覺得邊度最好？",
            "attitudeId": "downplay",
            "personalityDelta": {
              "shy": 1
            },
            "memoryAdd": [
              "w5_artwork_gets_noticed_teacherActivityRecommender_say_random_drawing"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師指了畫面一角，讓你第一次認真看自己的作品。"
            },
            "statusDelta": {
              "體力": 1,
              "自信": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "活動推薦型",
              "attitudeReadAs": "downplay",
              "reason": "這個選項是為 視藝堂作品被注意 / teacherActivityRecommender 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_artwork_gets_noticed",
              "variantId": "teacherActivityRecommender",
              "mustMatchEventTitle": "視藝堂作品被注意"
            },
            "skillExpDelta": {
              "繪畫": 1
            },
            "playerLineType": "speech",
            "resultText": "老師指了畫面一角，讓你第一次認真看自己的作品。"
          },
          {
            "id": "w5_artwork_gets_noticed_teacherActivityRecommender_hide_artwork",
            "text": "不好意思收起來",
            "playerLine": "我未畫完，唔好睇住先。",
            "attitudeId": "hideWork",
            "personalityDelta": {
              "boundary": 1,
              "shy": 1
            },
            "memoryAdd": [
              "w5_artwork_gets_noticed_teacherActivityRecommender_hide_artwork"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師沒有硬拿，只叫你畫完可以再給她看。"
            },
            "statusDelta": {
              "自信": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "活動推薦型",
              "attitudeReadAs": "hideWork",
              "reason": "這個選項是為 視藝堂作品被注意 / teacherActivityRecommender 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_artwork_gets_noticed",
              "variantId": "teacherActivityRecommender",
              "mustMatchEventTitle": "視藝堂作品被注意"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師沒有硬拿，只叫你畫完可以再給她看。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "teacherActivityRecommender",
          "npcIdentity": "老師",
          "npcPersonality": "活動推薦型",
          "npcDisplayName": "teacherActivityRecommender"
        },
        "variantId": "teacherActivityRecommender",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_activity_recommender",
        "reactionProfileId": "identity_teacher__pers_activity_recommender"
      },
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "線條可以再乾淨，但你有留意細節。"
          },
          {
            "speaker": "老師",
            "text": "視藝都要慢慢做，唔係塗滿就算完成。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "線條可以再乾淨，但你有留意細節。 視藝都要慢慢做，唔係塗滿就算完成。",
        "playerChoices": [
          {
            "id": "w5_artwork_gets_noticed_teacherStrict_accept_line_feedback",
            "text": "問怎樣改",
            "playerLine": "係邊條線要再乾淨啲？",
            "attitudeId": "acceptTechnique",
            "personalityDelta": {
              "accountable": 1
            },
            "memoryAdd": [
              "w5_artwork_gets_noticed_teacherStrict_accept_line_feedback"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師指著邊位，教你慢一點收筆。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "學業": 1,
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "acceptTechnique",
              "reason": "這個選項是為 視藝堂作品被注意 / teacherStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_artwork_gets_noticed",
              "variantId": "teacherStrict",
              "mustMatchEventTitle": "視藝堂作品被注意"
            },
            "skillExpDelta": {
              "繪畫": 2
            },
            "playerLineType": "speech",
            "resultText": "老師指著邊位，教你慢一點收筆。"
          },
          {
            "id": "w5_artwork_gets_noticed_teacherStrict_ask_how_clean_lines",
            "text": "繼續修改",
            "playerLine": "我再畫過呢度。",
            "attitudeId": "askTechnique",
            "personalityDelta": {
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w5_artwork_gets_noticed_teacherStrict_ask_how_clean_lines"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你把作品當成可以改善的東西，而不是被批評就收起。"
            },
            "statusDelta": {
              "體力": -1,
              "學業": 1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "askTechnique",
              "reason": "這個選項是為 視藝堂作品被注意 / teacherStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_artwork_gets_noticed",
              "variantId": "teacherStrict",
              "mustMatchEventTitle": "視藝堂作品被注意"
            },
            "skillExpDelta": {
              "繪畫": 2
            },
            "playerLineType": "speech",
            "resultText": "你把作品當成可以改善的東西，而不是被批評就收起。"
          },
          {
            "id": "w5_artwork_gets_noticed_teacherStrict_defend_detail_choice",
            "text": "說自己喜歡這樣",
            "playerLine": "我呢度亂少少，因為係樹葉。",
            "attitudeId": "selfAdvocate",
            "personalityDelta": {
              "selfAdvocacy": 1
            },
            "memoryAdd": [
              "w5_artwork_gets_noticed_teacherStrict_defend_detail_choice"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師停了一下，讓你說完自己的想法。"
            },
            "statusDelta": {
              "理智值": -1,
              "創意": 1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "selfAdvocate",
              "reason": "這個選項是為 視藝堂作品被注意 / teacherStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_artwork_gets_noticed",
              "variantId": "teacherStrict",
              "mustMatchEventTitle": "視藝堂作品被注意"
            },
            "skillExpDelta": {
              "繪畫": 1
            },
            "playerLineType": "speech",
            "resultText": "老師停了一下，讓你說完自己的想法。"
          },
          {
            "id": "w5_artwork_gets_noticed_teacherStrict_feel_discouraged",
            "text": "收起作品",
            "playerLine": "我遲啲再畫。",
            "attitudeId": "discouraged",
            "personalityDelta": {
              "sensitive": 1
            },
            "memoryAdd": [
              "w5_artwork_gets_noticed_teacherStrict_feel_discouraged"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你避開了被看見，也暫時避開了修改。"
            },
            "statusDelta": {
              "快樂": -1,
              "體力": 1,
              "自信": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": -1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "discouraged",
              "reason": "這個選項是為 視藝堂作品被注意 / teacherStrict 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_artwork_gets_noticed",
              "variantId": "teacherStrict",
              "mustMatchEventTitle": "視藝堂作品被注意"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "你避開了被看見，也暫時避開了修改。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "teacherStrict",
          "npcIdentity": "老師",
          "npcPersonality": "嚴格學業型",
          "npcDisplayName": "teacherStrict"
        },
        "variantId": "teacherStrict",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_strict_academic",
        "reactionProfileId": "identity_teacher__pers_strict_academic"
      },
      {
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "你畫嗰個係咪操場？好似喎！"
          },
          {
            "speaker": "家朗",
            "text": "你畫埋我得唔得？我可以企喺你隔籬。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "你畫嗰個係咪操場？好似喎！ 你畫埋我得唔得？我可以企喺你隔籬。",
        "playerChoices": [
          {
            "id": "w5_artwork_gets_noticed_classmateOutgoing_tell_playground_drawing",
            "text": "笑著回答",
            "playerLine": "係操場呀，但你唔好郁嚟郁去，我畫唔到。",
            "attitudeId": "shareArt",
            "personalityDelta": {
              "outgoing": 1,
              "creative": 1
            },
            "memoryAdd": [
              "w5_artwork_gets_noticed_classmateOutgoing_tell_playground_drawing"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗立刻假裝站定，雖然只維持了三秒。"
            },
            "statusDelta": {
              "快樂": 1,
              "體力": -1,
              "社交": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "shareArt",
              "reason": "這個選項是為 視藝堂作品被注意 / classmateOutgoing 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_artwork_gets_noticed",
              "variantId": "classmateOutgoing",
              "mustMatchEventTitle": "視藝堂作品被注意"
            },
            "skillExpDelta": {
              "繪畫": 1
            },
            "playerLineType": "speech",
            "resultText": "家朗立刻假裝站定，雖然只維持了三秒。"
          },
          {
            "id": "w5_artwork_gets_noticed_classmateOutgoing_ask_if_looks_like",
            "text": "問他覺得像不像",
            "playerLine": "邊度似操場？",
            "attitudeId": "askPeerFeedback",
            "personalityDelta": {
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w5_artwork_gets_noticed_classmateOutgoing_ask_if_looks_like"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "他指了你畫的欄杆，語氣很肯定。"
            },
            "statusDelta": {
              "理智值": -1,
              "社交": 1,
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "askPeerFeedback",
              "reason": "這個選項是為 視藝堂作品被注意 / classmateOutgoing 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_artwork_gets_noticed",
              "variantId": "classmateOutgoing",
              "mustMatchEventTitle": "視藝堂作品被注意"
            },
            "skillExpDelta": {
              "繪畫": 1
            },
            "playerLineType": "speech",
            "resultText": "他指了你畫的欄杆，語氣很肯定。"
          },
          {
            "id": "w5_artwork_gets_noticed_classmateOutgoing_joke_art_not_map",
            "text": "說還未畫完",
            "playerLine": "未得，等我畫完先俾你睇。",
            "attitudeId": "playfulShare",
            "personalityDelta": {
              "outgoing": 1
            },
            "memoryAdd": [
              "w5_artwork_gets_noticed_classmateOutgoing_joke_art_not_map"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗退開一點，但仍然想偷看。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "playfulShare",
              "reason": "這個選項是為 視藝堂作品被注意 / classmateOutgoing 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_artwork_gets_noticed",
              "variantId": "classmateOutgoing",
              "mustMatchEventTitle": "視藝堂作品被注意"
            },
            "skillExpDelta": {
              "繪畫": 1
            },
            "playerLineType": "speech",
            "resultText": "家朗退開一點，但仍然想偷看。"
          },
          {
            "id": "w5_artwork_gets_noticed_classmateOutgoing_cover_drawing_corner",
            "text": "不想被看",
            "playerLine": "你唔好望住我畫啦。",
            "attitudeId": "softBoundary",
            "personalityDelta": {
              "boundary": 1,
              "shy": 1
            },
            "memoryAdd": [
              "w5_artwork_gets_noticed_classmateOutgoing_cover_drawing_corner"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "他有點不好意思，轉去看自己的紙。"
            },
            "statusDelta": {
              "體力": 1,
              "自信": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "softBoundary",
              "reason": "這個選項是為 視藝堂作品被注意 / classmateOutgoing 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_artwork_gets_noticed",
              "variantId": "classmateOutgoing",
              "mustMatchEventTitle": "視藝堂作品被注意"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "他有點不好意思，轉去看自己的紙。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "classmateOutgoing",
          "npcIdentity": "同學",
          "npcPersonality": "外向邀請型",
          "npcDisplayName": "classmateOutgoing"
        },
        "variantId": "classmateOutgoing",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "reactionProfileId": "identity_same_age_peer__pers_outgoing_inviter"
      },
      {
        "openingDialogue": [
          {
            "speaker": "穎心",
            "text": "我覺得你畫個天色好舒服。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "我覺得你畫個天色好舒服。",
        "playerChoices": [
          {
            "id": "w5_artwork_gets_noticed_classmateQuietObserver_thank_sky_comment",
            "text": "問她意思",
            "playerLine": "咩叫好舒服嘅顏色？",
            "attitudeId": "gentleAccept",
            "personalityDelta": {
              "gentle": 1
            },
            "memoryAdd": [
              "w5_artwork_gets_noticed_classmateQuietObserver_thank_sky_comment"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心想了想，說就是看著不會覺得吵。"
            },
            "statusDelta": {
              "快樂": 1,
              "理智值": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "gentleAccept",
              "reason": "這個選項是為 視藝堂作品被注意 / classmateQuietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_artwork_gets_noticed",
              "variantId": "classmateQuietObserver",
              "mustMatchEventTitle": "視藝堂作品被注意"
            },
            "skillExpDelta": {
              "繪畫": 1
            },
            "playerLineType": "speech",
            "resultText": "穎心想了想，說就是看著不會覺得吵。"
          },
          {
            "id": "w5_artwork_gets_noticed_classmateQuietObserver_ask_what_colour_she_likes",
            "text": "講自己畫甚麼",
            "playerLine": "我畫小息後嗰陣。",
            "attitudeId": "quietArtTalk",
            "personalityDelta": {
              "helpSeeking": 1,
              "creative": 1
            },
            "memoryAdd": [
              "w5_artwork_gets_noticed_classmateQuietObserver_ask_what_colour_she_likes"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她點頭，像聽懂了你畫的不是物件，是感覺。"
            },
            "statusDelta": {
              "理智值": -1,
              "社交": 1,
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "quietArtTalk",
              "reason": "這個選項是為 視藝堂作品被注意 / classmateQuietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_artwork_gets_noticed",
              "variantId": "classmateQuietObserver",
              "mustMatchEventTitle": "視藝堂作品被注意"
            },
            "skillExpDelta": {
              "繪畫": 1
            },
            "playerLineType": "speech",
            "resultText": "她點頭，像聽懂了你畫的不是物件，是感覺。"
          },
          {
            "id": "w5_artwork_gets_noticed_classmateQuietObserver_show_one_detail",
            "text": "請她看另一部分",
            "playerLine": "咁呢邊你覺得點？",
            "attitudeId": "limitedShare",
            "personalityDelta": {
              "boundary": 1,
              "gentle": 1
            },
            "memoryAdd": [
              "w5_artwork_gets_noticed_classmateQuietObserver_show_one_detail"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她看得很慢，只說了一句很準的意見。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "limitedShare",
              "reason": "這個選項是為 視藝堂作品被注意 / classmateQuietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_artwork_gets_noticed",
              "variantId": "classmateQuietObserver",
              "mustMatchEventTitle": "視藝堂作品被注意"
            },
            "skillExpDelta": {
              "繪畫": 1
            },
            "playerLineType": "speech",
            "resultText": "她看得很慢，只說了一句很準的意見。"
          },
          {
            "id": "w5_artwork_gets_noticed_classmateQuietObserver_smile_no_explain",
            "text": "不好意思",
            "playerLine": "你咁講我有啲唔好意思。",
            "attitudeId": "quietBoundary",
            "personalityDelta": {
              "observer": 1,
              "boundary": 1
            },
            "memoryAdd": [
              "w5_artwork_gets_noticed_classmateQuietObserver_smile_no_explain"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心沒有笑你，只把視線移回自己的畫。"
            },
            "statusDelta": {},
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "quietBoundary",
              "reason": "這個選項是為 視藝堂作品被注意 / classmateQuietObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_artwork_gets_noticed",
              "variantId": "classmateQuietObserver",
              "mustMatchEventTitle": "視藝堂作品被注意"
            },
            "skillExpDelta": {
              "繪畫": 1
            },
            "playerLineType": "speech",
            "resultText": "穎心沒有笑你，只把視線移回自己的畫。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "classmateQuietObserver",
          "npcIdentity": "同學",
          "npcPersonality": "安靜觀察型",
          "npcDisplayName": "classmateQuietObserver"
        },
        "variantId": "classmateQuietObserver",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_quiet_observer",
        "reactionProfileId": "identity_same_age_peer__pers_quiet_observer"
      }
    ],
    "schemaVersion": "opening_event_pool_v5_1_balanced_event_specific_choices",
    "eventScheduling": {
      "baseWeight": 60,
      "weekRange": [
        5,
        5
      ],
      "conditions": [],
      "exclusiveGroup": null,
      "onceOnly": true,
      "cooldownWeeks": 999,
      "prerequisiteMemory": [],
      "sourceChannel": "visual_arts_class",
      "involvementRole": "direct_actor"
    },
    "eventChoiceDesignRule": "playerChoices must be authored for this exact event+variant; personalityId may alter tone and point interpretation but must not inject a generic personality choice set."
  },
  {
    "id": "w5_recitation_info_channels",
    "weekPool": "W5_interest_and_opportunity",
    "title": "朗誦資訊從不同渠道出現",
    "sceneType": "recitation_opportunity_seed",
    "coreSituation": "朗誦不一定由老師直接點名，可以從老師、同學或高年級學生渠道出現。",
    "followUpHooks": [
      "recitation_skill_open",
      "supporter_identity",
      "confidence_route"
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "pointDesign": {
      "version": "target_aware_integer_delta_v5_1_balanced",
      "mainStatusKeys": [
        "快樂",
        "理智值",
        "體力",
        "學業",
        "社交",
        "創意",
        "家庭關係",
        "自信"
      ],
      "skillKeys": [
        "繪畫",
        "鋼琴",
        "朗誦",
        "游泳",
        "足球",
        "編程",
        "閱讀",
        "班務服務"
      ],
      "note": "分數由玩家 attitudeId、舊 effects、事件題材，以及當前 NPC 身份 / 性格共同決定；同一個選項在不同 NPC 面前可以有不同結果。",
      "choiceTextRule": "choice.text is player-facing and must describe a concrete action or spoken line that answers this event dialogue; do not show abstract attitude labels.",
      "noCrossEventGenericChoiceRule": "The same choice.text should not be reused across unrelated event ids.",
      "statusBalanceRule": "每個 variant 通常只有 1–2 個選項會推進核心狀態；其餘選項偏向保留、錯過、休息、觀察或付出代價。statusDelta 是方向，不是每次點擊獎勵。",
      "skillSemantics": "skillExpDelta 是技能經驗值，不是技能等級。",
      "previewRule": "dialogueTriggerPreview is generated from openingDialogue and should not be hand-authored."
    },
    "fallbackChoices": [
      {
        "id": "w5_recitation_info_channels_teacherGeneralInfo_fallback_ask",
        "text": "問清楚這件事和自己現在要做甚麼。",
        "playerLine": "問清楚這件事和自己現在要做甚麼。",
        "attitudeId": "askForClarification",
        "personalityDelta": {
          "helpSeeking": 1
        },
        "memoryAdd": [
          "w5_recitation_info_channels_teacherGeneralInfo_fallback_ask"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你用提問避免誤會，這是只屬於當前事件的備用選項。"
        },
        "statusDelta": {
          "理智值": 1,
          "體力": -1,
          "自信": 1
        },
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "活動推薦型",
          "attitudeReadAs": "askForClarification",
          "reason": "這個選項是為 朗誦資訊從不同渠道出現 / teacherGeneralInfo 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w5_recitation_info_channels",
          "variantId": "teacherGeneralInfo",
          "mustMatchEventTitle": "朗誦資訊從不同渠道出現"
        },
        "skillExpDelta": {}
      },
      {
        "id": "w5_recitation_info_channels_teacherGeneralInfo_fallback_observe",
        "text": "先觀察這個情境，不立刻答應或拒絕。",
        "playerLine": "先觀察這個情境，不立刻答應或拒絕。",
        "attitudeId": "observeFirst",
        "personalityDelta": {
          "observer": 1
        },
        "memoryAdd": [
          "w5_recitation_info_channels_teacherGeneralInfo_fallback_observe"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你暫時保留行動，讓自己多一點時間。"
        },
        "statusDelta": {},
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "活動推薦型",
          "attitudeReadAs": "observeFirst",
          "reason": "這個選項是為 朗誦資訊從不同渠道出現 / teacherGeneralInfo 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w5_recitation_info_channels",
          "variantId": "teacherGeneralInfo",
          "mustMatchEventTitle": "朗誦資訊從不同渠道出現"
        },
        "skillExpDelta": {}
      }
    ],
    "variants": [
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "今年有朗誦活動，有興趣嘅同學可以試吓。"
          },
          {
            "speaker": "老師",
            "text": "第一次上台會緊張，但不代表你不適合。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "今年有朗誦活動，有興趣嘅同學可以試吓。 第一次上台會緊張，但不代表你不適合。",
        "playerChoices": [
          {
            "id": "w5_recitation_info_channels_teacherGeneralInfo_take_recitation_leaflet",
            "text": "說想試",
            "playerLine": "我知我要讀咩。",
            "attitudeId": "collectInfo",
            "personalityDelta": {
              "observer": 1
            },
            "memoryAdd": [
              "w5_recitation_info_channels_teacherGeneralInfo_take_recitation_leaflet"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師把報名紙放到你桌上，叫你先拿回去看看。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "活動推薦型",
              "attitudeReadAs": "collectInfo",
              "reason": "這個選項是為 朗誦資訊從不同渠道出現 / teacherGeneralInfo 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_recitation_info_channels",
              "variantId": "teacherGeneralInfo",
              "mustMatchEventTitle": "朗誦資訊從不同渠道出現"
            },
            "skillExpDelta": {
              "朗誦": 1
            },
            "playerLineType": "speech",
            "resultText": "老師把報名紙放到你桌上，叫你先拿回去看看。"
          },
          {
            "id": "w5_recitation_info_channels_teacherGeneralInfo_ask_practice_need",
            "text": "問會不會很可怕",
            "playerLine": "係咪要企喺好多人面前？",
            "attitudeId": "askActivityInfo",
            "personalityDelta": {
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w5_recitation_info_channels_teacherGeneralInfo_ask_practice_need"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說是，但會有時間練習。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "活動推薦型",
              "attitudeReadAs": "askActivityInfo",
              "reason": "這個選項是為 朗誦資訊從不同渠道出現 / teacherGeneralInfo 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_recitation_info_channels",
              "variantId": "teacherGeneralInfo",
              "mustMatchEventTitle": "朗誦資訊從不同渠道出現"
            },
            "skillExpDelta": {
              "朗誦": 1
            },
            "playerLineType": "speech",
            "resultText": "老師說是，但會有時間練習。"
          },
          {
            "id": "w5_recitation_info_channels_teacherGeneralInfo_support_classmate_recite",
            "text": "先聽著",
            "playerLine": "你沒有拿表，只聽老師講。",
            "attitudeId": "supportRoute",
            "personalityDelta": {
              "supportive": 1
            },
            "memoryAdd": [
              "w5_recitation_info_channels_teacherGeneralInfo_support_classmate_recite"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "這件事暫時不是目標，只是一個可能。"
            },
            "statusDelta": {
              "體力": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "活動推薦型",
              "attitudeReadAs": "supportRoute",
              "reason": "這個選項是為 朗誦資訊從不同渠道出現 / teacherGeneralInfo 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_recitation_info_channels",
              "variantId": "teacherGeneralInfo",
              "mustMatchEventTitle": "朗誦資訊從不同渠道出現"
            },
            "skillExpDelta": {
              "朗誦": 1
            },
            "playerLineType": "action",
            "resultText": "這件事暫時不是目標，只是一個可能。"
          },
          {
            "id": "w5_recitation_info_channels_teacherGeneralInfo_avoid_stage_info",
            "text": "覺得太驚",
            "playerLine": "我應該唔敢上台。",
            "attitudeId": "avoidStage",
            "personalityDelta": {
              "avoidant": 1,
              "shy": 1
            },
            "memoryAdd": [
              "w5_recitation_info_channels_teacherGeneralInfo_avoid_stage_info"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師沒有逼你，只說可以先聽別人練。"
            },
            "statusDelta": {
              "自信": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "活動推薦型",
              "attitudeReadAs": "avoidStage",
              "reason": "這個選項是為 朗誦資訊從不同渠道出現 / teacherGeneralInfo 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_recitation_info_channels",
              "variantId": "teacherGeneralInfo",
              "mustMatchEventTitle": "朗誦資訊從不同渠道出現"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師沒有逼你，只說可以先聽別人練。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "teacherGeneralInfo",
          "npcIdentity": "老師",
          "npcPersonality": "活動推薦型",
          "npcDisplayName": "teacherGeneralInfo"
        },
        "variantId": "teacherGeneralInfo",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_activity_recommender",
        "reactionProfileId": "identity_teacher__pers_activity_recommender"
      },
      {
        "conditionHint": "confidence >= medium",
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "你把聲幾清楚，想唔想試吓朗誦？"
          },
          {
            "speaker": "老師",
            "text": "唔係一定要即刻答應，你可以返去諗。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "你把聲幾清楚，想唔想試吓朗誦？ 唔係一定要即刻答應，你可以返去諗。",
        "playerChoices": [
          {
            "id": "w5_recitation_info_channels_teacherDirectIfConfident_try_read_once",
            "text": "想試但怕",
            "playerLine": "我想試，但我驚讀錯。",
            "attitudeId": "tryOnce",
            "personalityDelta": {
              "brave": 1
            },
            "memoryAdd": [
              "w5_recitation_info_channels_teacherDirectIfConfident_try_read_once"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說讀錯可以練，不是第一天就上台。"
            },
            "statusDelta": {
              "理智值": -1,
              "體力": -1,
              "自信": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "活動推薦型",
              "attitudeReadAs": "tryOnce",
              "reason": "這個選項是為 朗誦資訊從不同渠道出現 / teacherDirectIfConfident 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_recitation_info_channels",
              "variantId": "teacherDirectIfConfident",
              "mustMatchEventTitle": "朗誦資訊從不同渠道出現"
            },
            "skillExpDelta": {
              "朗誦": 2
            },
            "playerLineType": "speech",
            "resultText": "老師說讀錯可以練，不是第一天就上台。"
          },
          {
            "id": "w5_recitation_info_channels_teacherDirectIfConfident_ask_can_think_home",
            "text": "問要準備甚麼",
            "playerLine": "要背晒篇文嗎？",
            "attitudeId": "softBoundary",
            "personalityDelta": {
              "boundary": 1,
              "cautious": 1
            },
            "memoryAdd": [
              "w5_recitation_info_channels_teacherDirectIfConfident_ask_can_think_home"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師解釋要先選稿、再慢慢練。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "活動推薦型",
              "attitudeReadAs": "softBoundary",
              "reason": "這個選項是為 朗誦資訊從不同渠道出現 / teacherDirectIfConfident 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_recitation_info_channels",
              "variantId": "teacherDirectIfConfident",
              "mustMatchEventTitle": "朗誦資訊從不同渠道出現"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師解釋要先選稿、再慢慢練。"
          },
          {
            "id": "w5_recitation_info_channels_teacherDirectIfConfident_say_stage_scary_but_curious",
            "text": "回家先問",
            "playerLine": "我返屋企問先。",
            "attitudeId": "honestCurious",
            "personalityDelta": {
              "selfAware": 1,
              "curious": 1
            },
            "memoryAdd": [
              "w5_recitation_info_channels_teacherDirectIfConfident_say_stage_scary_but_curious"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師把資料給你，讓你不用馬上諗住。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "warmth",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "活動推薦型",
              "attitudeReadAs": "honestCurious",
              "reason": "這個選項是為 朗誦資訊從不同渠道出現 / teacherDirectIfConfident 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_recitation_info_channels",
              "variantId": "teacherDirectIfConfident",
              "mustMatchEventTitle": "朗誦資訊從不同渠道出現"
            },
            "skillExpDelta": {
              "朗誦": 1
            },
            "playerLineType": "speech",
            "resultText": "老師把資料給你，讓你不用馬上諗住。"
          },
          {
            "id": "w5_recitation_info_channels_teacherDirectIfConfident_decline_direct_invite",
            "text": "拒絕",
            "playerLine": "我而家唔想上台。",
            "attitudeId": "clearBoundary",
            "personalityDelta": {
              "boundary": 2
            },
            "memoryAdd": [
              "w5_recitation_info_channels_teacherDirectIfConfident_decline_direct_invite"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師點頭，沒有把你的拒絕當成沒膽量。"
            },
            "statusDelta": {},
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "活動推薦型",
              "attitudeReadAs": "clearBoundary",
              "reason": "這個選項是為 朗誦資訊從不同渠道出現 / teacherDirectIfConfident 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_recitation_info_channels",
              "variantId": "teacherDirectIfConfident",
              "mustMatchEventTitle": "朗誦資訊從不同渠道出現"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師點頭，沒有把你的拒絕當成沒膽量。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "teacherDirectIfConfident",
          "npcIdentity": "老師",
          "npcPersonality": "活動推薦型",
          "npcDisplayName": "teacherDirectIfConfident"
        },
        "variantId": "teacherDirectIfConfident",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_activity_recommender",
        "reactionProfileId": "identity_teacher__pers_activity_recommender"
      },
      {
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "我阿媽話朗誦要企喺台上，我有啲驚，但又想試。"
          },
          {
            "speaker": "家朗",
            "text": "如果你都一齊，我可能都冇咁驚。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "我阿媽話朗誦要企喺台上，我有啲驚，但又想試。 如果你都一齊，我可能都冇咁驚。",
        "playerChoices": [
          {
            "id": "w5_recitation_info_channels_classmateOutgoing_practice_with_scared_peer",
            "text": "說可以一起了解",
            "playerLine": "我哋先睇報名紙，唔係即刻上台。",
            "attitudeId": "peerPractice",
            "personalityDelta": {
              "supportive": 1,
              "outgoing": 1
            },
            "memoryAdd": [
              "w5_recitation_info_channels_classmateOutgoing_practice_with_scared_peer"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗立刻安心了一點，像只要不是一個人就可以。"
            },
            "statusDelta": {
              "體力": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 3,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "peerPractice",
              "reason": "這個選項是為 朗誦資訊從不同渠道出現 / classmateOutgoing 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_recitation_info_channels",
              "variantId": "classmateOutgoing",
              "mustMatchEventTitle": "朗誦資訊從不同渠道出現"
            },
            "skillExpDelta": {
              "朗誦": 2
            },
            "playerLineType": "speech",
            "resultText": "家朗立刻安心了一點，像只要不是一個人就可以。"
          },
          {
            "id": "w5_recitation_info_channels_classmateOutgoing_listen_to_peer_first",
            "text": "支持他",
            "playerLine": "你把聲咁大，可以試吓。",
            "attitudeId": "supportListen",
            "personalityDelta": {
              "supportive": 1
            },
            "memoryAdd": [
              "w5_recitation_info_channels_classmateOutgoing_listen_to_peer_first"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗笑了，但小聲說自己其實也會腳震。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "社交": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "supportListen",
              "reason": "這個選項是為 朗誦資訊從不同渠道出現 / classmateOutgoing 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_recitation_info_channels",
              "variantId": "classmateOutgoing",
              "mustMatchEventTitle": "朗誦資訊從不同渠道出現"
            },
            "skillExpDelta": {
              "朗誦": 1
            },
            "playerLineType": "speech",
            "resultText": "家朗笑了，但小聲說自己其實也會腳震。"
          },
          {
            "id": "w5_recitation_info_channels_classmateOutgoing_say_maybe_try_together",
            "text": "說自己不想上台",
            "playerLine": "我唔想上台，但我可以聽你練。",
            "attitudeId": "conditionalJoin",
            "personalityDelta": {
              "peerOriented": 1
            },
            "memoryAdd": [
              "w5_recitation_info_channels_classmateOutgoing_say_maybe_try_together"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗有點失望，但仍然覺得你有幫他。"
            },
            "statusDelta": {
              "理智值": -1,
              "社交": 1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "conditionalJoin",
              "reason": "這個選項是為 朗誦資訊從不同渠道出現 / classmateOutgoing 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_recitation_info_channels",
              "variantId": "classmateOutgoing",
              "mustMatchEventTitle": "朗誦資訊從不同渠道出現"
            },
            "skillExpDelta": {
              "朗誦": 1
            },
            "playerLineType": "speech",
            "resultText": "家朗有點失望，但仍然覺得你有幫他。"
          },
          {
            "id": "w5_recitation_info_channels_classmateOutgoing_dont_want_stage_but_cheer",
            "text": "一起害怕",
            "playerLine": "我諗到企上去都驚。",
            "attitudeId": "supportNotJoin",
            "personalityDelta": {
              "boundary": 1,
              "supportive": 1
            },
            "memoryAdd": [
              "w5_recitation_info_channels_classmateOutgoing_dont_want_stage_but_cheer"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你們兩個同時笑了一下，緊張變得沒那麼孤單。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "supportNotJoin",
              "reason": "這個選項是為 朗誦資訊從不同渠道出現 / classmateOutgoing 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_recitation_info_channels",
              "variantId": "classmateOutgoing",
              "mustMatchEventTitle": "朗誦資訊從不同渠道出現"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "你們兩個同時笑了一下，緊張變得沒那麼孤單。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "classmateOutgoing",
          "npcIdentity": "同學",
          "npcPersonality": "外向邀請型",
          "npcDisplayName": "classmateOutgoing"
        },
        "variantId": "classmateOutgoing",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "reactionProfileId": "identity_same_age_peer__pers_outgoing_inviter"
      },
      {
        "openingDialogue": [
          {
            "speaker": "芷悠",
            "text": "第一次上台會震，好正常，唔係得你一個會驚。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "第一次上台會震，好正常，唔係得你一個會驚。",
        "playerChoices": [
          {
            "id": "w5_recitation_info_channels_seniorFriendly_ask_senior_stage_feeling",
            "text": "問怎樣不震",
            "playerLine": "咁點先可以冇咁驚？",
            "attitudeId": "seekExperience",
            "personalityDelta": {
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w5_recitation_info_channels_seniorFriendly_ask_senior_stage_feeling"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "師姐教你先望牆，不一定要望所有人。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_senior_student",
                "dimension": "respect",
                "amount": 2,
                "legacyKey": "師兄姐印象"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "高年級學生",
              "npcPersonality": "溫和支持型",
              "attitudeReadAs": "seekExperience",
              "reason": "這個選項是為 朗誦資訊從不同渠道出現 / seniorFriendly 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_recitation_info_channels",
              "variantId": "seniorFriendly",
              "mustMatchEventTitle": "朗誦資訊從不同渠道出現"
            },
            "skillExpDelta": {
              "朗誦": 1
            },
            "playerLineType": "speech",
            "resultText": "師姐教你先望牆，不一定要望所有人。"
          },
          {
            "id": "w5_recitation_info_channels_seniorFriendly_take_tip_from_senior",
            "text": "說想試但怕",
            "playerLine": "我有少少想試，但我驚讀錯。",
            "attitudeId": "learnTip",
            "personalityDelta": {
              "helpSeeking": 1,
              "growthMindset": 1
            },
            "memoryAdd": [
              "w5_recitation_info_channels_seniorFriendly_take_tip_from_senior"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "他說讀錯不等於完蛋，很多人練習時都讀錯。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_senior_student",
                "dimension": "respect",
                "amount": 2,
                "legacyKey": "師兄姐印象"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "高年級學生",
              "npcPersonality": "溫和支持型",
              "attitudeReadAs": "learnTip",
              "reason": "這個選項是為 朗誦資訊從不同渠道出現 / seniorFriendly 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_recitation_info_channels",
              "variantId": "seniorFriendly",
              "mustMatchEventTitle": "朗誦資訊從不同渠道出現"
            },
            "skillExpDelta": {
              "朗誦": 1
            },
            "playerLineType": "speech",
            "resultText": "他說讀錯不等於完蛋，很多人練習時都讀錯。"
          },
          {
            "id": "w5_recitation_info_channels_seniorFriendly_say_support_friend",
            "text": "先聽著",
            "playerLine": "我聽吓先。",
            "attitudeId": "supportRoute",
            "personalityDelta": {
              "supportive": 1,
              "boundary": 1
            },
            "memoryAdd": [
              "w5_recitation_info_channels_seniorFriendly_say_support_friend"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有報名，但上台這件事變得比較像真的有人做得到。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_senior_student",
                "dimension": "respect",
                "amount": 1,
                "legacyKey": "師兄姐印象"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "高年級學生",
              "npcPersonality": "溫和支持型",
              "attitudeReadAs": "supportRoute",
              "reason": "這個選項是為 朗誦資訊從不同渠道出現 / seniorFriendly 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_recitation_info_channels",
              "variantId": "seniorFriendly",
              "mustMatchEventTitle": "朗誦資訊從不同渠道出現"
            },
            "skillExpDelta": {
              "朗誦": 1
            },
            "playerLineType": "speech",
            "resultText": "你沒有報名，但上台這件事變得比較像真的有人做得到。"
          },
          {
            "id": "w5_recitation_info_channels_seniorFriendly_avoid_senior_story",
            "text": "說自己不適合",
            "playerLine": "我應該唔啱。",
            "attitudeId": "avoidStage",
            "personalityDelta": {
              "avoidant": 1
            },
            "memoryAdd": [
              "w5_recitation_info_channels_seniorFriendly_avoid_senior_story"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "師姐沒有笑你，只說以後想試也可以。"
            },
            "statusDelta": {
              "自信": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "高年級學生",
              "npcPersonality": "溫和支持型",
              "attitudeReadAs": "avoidStage",
              "reason": "這個選項是為 朗誦資訊從不同渠道出現 / seniorFriendly 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_recitation_info_channels",
              "variantId": "seniorFriendly",
              "mustMatchEventTitle": "朗誦資訊從不同渠道出現"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "師姐沒有笑你，只說以後想試也可以。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "seniorFriendly",
          "npcIdentity": "高年級學生",
          "npcPersonality": "溫和支持型",
          "npcDisplayName": "seniorFriendly"
        },
        "variantId": "seniorFriendly",
        "variantType": "npc",
        "identityTypeId": "identity_senior_student",
        "personalityId": "pers_gentle_support",
        "reactionProfileId": "identity_senior_student__pers_gentle_support"
      }
    ],
    "schemaVersion": "opening_event_pool_v5_1_balanced_event_specific_choices",
    "eventScheduling": {
      "baseWeight": 60,
      "weekRange": [
        5,
        5
      ],
      "conditions": [],
      "exclusiveGroup": "w5_interest_opportunity_soft_cap",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "prerequisiteMemory": [],
      "sourceChannel": "classroom",
      "involvementRole": "direct_actor"
    },
    "eventChoiceDesignRule": "playerChoices must be authored for this exact event+variant; personalityId may alter tone and point interpretation but must not inject a generic personality choice set."
  },
  {
    "id": "w5_school_art_competition_info",
    "weekPool": "W5_interest_and_opportunity",
    "title": "校內畫畫比賽資訊",
    "sceneType": "art_competition_opportunity",
    "coreSituation": "畫畫比賽不一定屬於玩家；符合條件才加入 goal，否則可變成支援同學的 schedule。",
    "followUpHooks": [
      "painting_skill_open",
      "opportunity_goal_if_eligible",
      "supporter_identity"
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "pointDesign": {
      "version": "target_aware_integer_delta_v5_1_balanced",
      "mainStatusKeys": [
        "快樂",
        "理智值",
        "體力",
        "學業",
        "社交",
        "創意",
        "家庭關係",
        "自信"
      ],
      "skillKeys": [
        "繪畫",
        "鋼琴",
        "朗誦",
        "游泳",
        "足球",
        "編程",
        "閱讀",
        "班務服務"
      ],
      "note": "分數由玩家 attitudeId、舊 effects、事件題材，以及當前 NPC 身份 / 性格共同決定；同一個選項在不同 NPC 面前可以有不同結果。",
      "choiceTextRule": "choice.text is player-facing and must describe a concrete action or spoken line that answers this event dialogue; do not show abstract attitude labels.",
      "noCrossEventGenericChoiceRule": "The same choice.text should not be reused across unrelated event ids.",
      "statusBalanceRule": "每個 variant 通常只有 1–2 個選項會推進核心狀態；其餘選項偏向保留、錯過、休息、觀察或付出代價。statusDelta 是方向，不是每次點擊獎勵。",
      "skillSemantics": "skillExpDelta 是技能經驗值，不是技能等級。",
      "previewRule": "dialogueTriggerPreview is generated from openingDialogue and should not be hand-authored."
    },
    "fallbackChoices": [
      {
        "id": "w5_school_art_competition_info_teacherIfCreativeHigh_fallback_ask",
        "text": "問清楚這件事和自己現在要做甚麼。",
        "playerLine": "問清楚這件事和自己現在要做甚麼。",
        "attitudeId": "askForClarification",
        "personalityDelta": {
          "helpSeeking": 1
        },
        "memoryAdd": [
          "w5_school_art_competition_info_teacherIfCreativeHigh_fallback_ask"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你用提問避免誤會，這是只屬於當前事件的備用選項。"
        },
        "statusDelta": {
          "理智值": 1,
          "體力": -1,
          "自信": 1
        },
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "留意創意表現型",
          "attitudeReadAs": "askForClarification",
          "reason": "這個選項是為 校內畫畫比賽資訊 / teacherIfCreativeHigh 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w5_school_art_competition_info",
          "variantId": "teacherIfCreativeHigh",
          "mustMatchEventTitle": "校內畫畫比賽資訊"
        },
        "skillExpDelta": {}
      },
      {
        "id": "w5_school_art_competition_info_teacherIfCreativeHigh_fallback_observe",
        "text": "先觀察這個情境，不立刻答應或拒絕。",
        "playerLine": "先觀察這個情境，不立刻答應或拒絕。",
        "attitudeId": "observeFirst",
        "personalityDelta": {
          "observer": 1
        },
        "memoryAdd": [
          "w5_school_art_competition_info_teacherIfCreativeHigh_fallback_observe"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你暫時保留行動，讓自己多一點時間。"
        },
        "statusDelta": {},
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "留意創意表現型",
          "attitudeReadAs": "observeFirst",
          "reason": "這個選項是為 校內畫畫比賽資訊 / teacherIfCreativeHigh 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w5_school_art_competition_info",
          "variantId": "teacherIfCreativeHigh",
          "mustMatchEventTitle": "校內畫畫比賽資訊"
        },
        "skillExpDelta": {}
      }
    ],
    "variants": [
      {
        "conditionHint": "creativity >= medium && teacherType === activityRecommender",
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "如果你有興趣，可以留意校內畫畫比賽。"
          },
          {
            "speaker": "老師",
            "text": "主題係『我眼中的校園』，不一定要畫得最整齊，可以畫你真的記得的地方。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "如果你有興趣，可以留意校內畫畫比賽。 主題係『我眼中的校園』，不一定要畫得最整齊，可以畫你真的記得的地方。",
        "playerChoices": [
          {
            "id": "w5_school_art_competition_info_teacherIfCreativeHigh_ask_competition_rules",
            "text": "問小一可不可以",
            "playerLine": "老師，小一得唔得？",
            "attitudeId": "askRules",
            "personalityDelta": {
              "organized": 1,
              "creative": 1
            },
            "memoryAdd": [
              "w5_school_art_competition_info_teacherIfCreativeHigh_ask_competition_rules"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說可以，叫你先拿表格。"
            },
            "statusDelta": {
              "理智值": 2,
              "體力": -1,
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "活動推薦型",
              "attitudeReadAs": "askRules",
              "reason": "這個選項是為 校內畫畫比賽資訊 / teacherIfCreativeHigh 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_school_art_competition_info",
              "variantId": "teacherIfCreativeHigh",
              "mustMatchEventTitle": "校內畫畫比賽資訊"
            },
            "skillExpDelta": {
              "繪畫": 1
            },
            "playerLineType": "speech",
            "resultText": "老師說可以，叫你先拿表格。"
          },
          {
            "id": "w5_school_art_competition_info_teacherIfCreativeHigh_draft_school_corner",
            "text": "問可以畫甚麼",
            "playerLine": "我可唔可以畫走廊或者課室角落？",
            "attitudeId": "startDraft",
            "personalityDelta": {
              "creative": 2
            },
            "memoryAdd": [
              "w5_school_art_competition_info_teacherIfCreativeHigh_draft_school_corner"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說可以，只要是你眼中的校園。"
            },
            "statusDelta": {
              "體力": -1,
              "創意": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "活動推薦型",
              "attitudeReadAs": "startDraft",
              "reason": "這個選項是為 校內畫畫比賽資訊 / teacherIfCreativeHigh 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_school_art_competition_info",
              "variantId": "teacherIfCreativeHigh",
              "mustMatchEventTitle": "校內畫畫比賽資訊"
            },
            "skillExpDelta": {
              "繪畫": 2
            },
            "playerLineType": "speech",
            "resultText": "老師說可以，只要是你眼中的校園。"
          },
          {
            "id": "w5_school_art_competition_info_teacherIfCreativeHigh_say_need_think",
            "text": "說想先想一想",
            "playerLine": "我返屋企諗下畫咩。",
            "attitudeId": "softBoundary",
            "personalityDelta": {
              "boundary": 1
            },
            "memoryAdd": [
              "w5_school_art_competition_info_teacherIfCreativeHigh_say_need_think"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師叫你把想到的地方先記下來。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "活動推薦型",
              "attitudeReadAs": "softBoundary",
              "reason": "這個選項是為 校內畫畫比賽資訊 / teacherIfCreativeHigh 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_school_art_competition_info",
              "variantId": "teacherIfCreativeHigh",
              "mustMatchEventTitle": "校內畫畫比賽資訊"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師叫你把想到的地方先記下來。"
          },
          {
            "id": "w5_school_art_competition_info_teacherIfCreativeHigh_worry_not_best",
            "text": "不打算參加",
            "playerLine": "我想畫畫，但唔想比賽。",
            "attitudeId": "selfDoubt",
            "personalityDelta": {
              "avoidant": 1
            },
            "memoryAdd": [
              "w5_school_art_competition_info_teacherIfCreativeHigh_worry_not_best"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說不參加也可以繼續畫。"
            },
            "statusDelta": {
              "體力": 1,
              "自信": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "活動推薦型",
              "attitudeReadAs": "selfDoubt",
              "reason": "這個選項是為 校內畫畫比賽資訊 / teacherIfCreativeHigh 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_school_art_competition_info",
              "variantId": "teacherIfCreativeHigh",
              "mustMatchEventTitle": "校內畫畫比賽資訊"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師說不參加也可以繼續畫。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "teacherIfCreativeHigh",
          "npcIdentity": "老師",
          "npcPersonality": "活動推薦型",
          "npcDisplayName": "teacherIfCreativeHigh"
        },
        "variantId": "teacherIfCreativeHigh",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_activity_recommender",
        "reactionProfileId": "identity_teacher__pers_activity_recommender"
      },
      {
        "openingDialogue": [
          {
            "speaker": "旁白",
            "text": "走廊貼了一張海報：校內畫畫比賽，主題『我眼中的校園』。"
          },
          {
            "speaker": "旁白",
            "text": "海報角落畫著操場、課室和一棵很大的樹。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "走廊貼了一張海報：校內畫畫比賽，主題『我眼中的校園』。 海報角落畫著操場、課室和一棵很大的樹。",
        "playerChoices": [
          {
            "id": "w5_school_art_competition_info_posterOnly_read_poster_details",
            "text": "仔細看海報",
            "playerLine": "你靠近看截止日期和參加方法。",
            "attitudeId": "collectInfo",
            "personalityDelta": {
              "observer": 1
            },
            "memoryAdd": [
              "w5_school_art_competition_info_posterOnly_read_poster_details"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "比賽從牆上的紙變成一件可能發生的事。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "環境",
              "npcPersonality": "資訊/場景提示",
              "attitudeReadAs": "collectInfo",
              "reason": "這個選項是為 校內畫畫比賽資訊 / posterOnly 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_school_art_competition_info",
              "variantId": "posterOnly",
              "mustMatchEventTitle": "校內畫畫比賽資訊"
            },
            "skillExpDelta": {
              "繪畫": 1
            },
            "playerLineType": "action",
            "resultText": "比賽從牆上的紙變成一件可能發生的事。"
          },
          {
            "id": "w5_school_art_competition_info_posterOnly_imagine_school_picture",
            "text": "只看圖案",
            "playerLine": "你看著海報上的大樹，想自己會不會畫另一個地方。",
            "attitudeId": "imagineArt",
            "personalityDelta": {
              "creative": 2
            },
            "memoryAdd": [
              "w5_school_art_competition_info_posterOnly_imagine_school_picture"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你沒有報名，但腦裡有了畫面。"
            },
            "statusDelta": {
              "創意": 2
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "環境",
              "npcPersonality": "資訊/場景提示",
              "attitudeReadAs": "imagineArt",
              "reason": "這個選項是為 校內畫畫比賽資訊 / posterOnly 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_school_art_competition_info",
              "variantId": "posterOnly",
              "mustMatchEventTitle": "校內畫畫比賽資訊"
            },
            "skillExpDelta": {
              "繪畫": 1
            },
            "playerLineType": "action",
            "resultText": "你沒有報名，但腦裡有了畫面。"
          },
          {
            "id": "w5_school_art_competition_info_posterOnly_take_note_later",
            "text": "問同學看不看",
            "playerLine": "你有冇見到呢張海報？",
            "attitudeId": "recordOpportunity",
            "personalityDelta": {
              "organized": 1
            },
            "memoryAdd": [
              "w5_school_art_competition_info_posterOnly_take_note_later"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "同學抬頭看了一眼，開始討論主題。"
            },
            "statusDelta": {
              "理智值": 1,
              "學業": 1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "環境",
              "npcPersonality": "資訊/場景提示",
              "attitudeReadAs": "recordOpportunity",
              "reason": "這個選項是為 校內畫畫比賽資訊 / posterOnly 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_school_art_competition_info",
              "variantId": "posterOnly",
              "mustMatchEventTitle": "校內畫畫比賽資訊"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "同學抬頭看了一眼，開始討論主題。"
          },
          {
            "id": "w5_school_art_competition_info_posterOnly_walk_past_poster",
            "text": "走過去",
            "playerLine": "你看了一眼就走開。",
            "attitudeId": "ignoreOpportunity",
            "personalityDelta": {
              "avoidant": 1
            },
            "memoryAdd": [
              "w5_school_art_competition_info_posterOnly_walk_past_poster"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "海報仍在走廊，但今天沒有拉住你。"
            },
            "statusDelta": {
              "創意": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "環境",
              "npcPersonality": "資訊/場景提示",
              "attitudeReadAs": "ignoreOpportunity",
              "reason": "這個選項是為 校內畫畫比賽資訊 / posterOnly 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_school_art_competition_info",
              "variantId": "posterOnly",
              "mustMatchEventTitle": "校內畫畫比賽資訊"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "海報仍在走廊，但今天沒有拉住你。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "posterOnly",
          "npcIdentity": "環境",
          "npcPersonality": "資訊/場景提示",
          "npcDisplayName": "posterOnly"
        },
        "variantId": "posterOnly",
        "variantType": "npc",
        "identityTypeId": "identity_environment_notice",
        "personalityId": "pers_environment_notice",
        "reactionProfileId": "identity_environment_notice__pers_environment_notice"
      },
      {
        "openingDialogue": [
          {
            "speaker": "穎心",
            "text": "我想參加校內畫畫比賽，但唔知畫咩好。"
          },
          {
            "speaker": "穎心",
            "text": "如果畫圖書角，會唔會太普通？"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "我想參加校內畫畫比賽，但唔知畫咩好。 如果畫圖書角，會唔會太普通？",
        "playerChoices": [
          {
            "id": "w5_school_art_competition_info_classmateQuiet_help_choose_colours",
            "text": "說圖書角也可以",
            "playerLine": "普通都可以呀，只要係你記得嘅地方。",
            "attitudeId": "supportArt",
            "personalityDelta": {
              "supportive": 1,
              "creative": 1
            },
            "memoryAdd": [
              "w5_school_art_competition_info_classmateQuiet_help_choose_colours"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心看了你一眼，像被允許不用畫很熱鬧的地方。"
            },
            "statusDelta": {
              "體力": -1,
              "社交": 2,
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 3,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "supportArt",
              "reason": "這個選項是為 校內畫畫比賽資訊 / classmateQuiet 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_school_art_competition_info",
              "variantId": "classmateQuiet",
              "mustMatchEventTitle": "校內畫畫比賽資訊"
            },
            "skillExpDelta": {
              "繪畫": 1
            },
            "playerLineType": "speech",
            "resultText": "穎心看了你一眼，像被允許不用畫很熱鬧的地方。"
          },
          {
            "id": "w5_school_art_competition_info_classmateQuiet_ask_draw_together",
            "text": "幫她想顏色",
            "playerLine": "你可以用淺啲嘅藍同綠。",
            "attitudeId": "quietCoCreate",
            "personalityDelta": {
              "supportive": 1
            },
            "memoryAdd": [
              "w5_school_art_competition_info_classmateQuiet_ask_draw_together"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她把顏色筆排開，開始真的想像那幅畫。"
            },
            "statusDelta": {
              "體力": -1,
              "社交": 2,
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "quietCoCreate",
              "reason": "這個選項是為 校內畫畫比賽資訊 / classmateQuiet 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_school_art_competition_info",
              "variantId": "classmateQuiet",
              "mustMatchEventTitle": "校內畫畫比賽資訊"
            },
            "skillExpDelta": {
              "繪畫": 2
            },
            "playerLineType": "speech",
            "resultText": "她把顏色筆排開，開始真的想像那幅畫。"
          },
          {
            "id": "w5_school_art_competition_info_classmateQuiet_say_not_join_but_help",
            "text": "問她為甚麼想參加",
            "playerLine": "你點解想參加？",
            "attitudeId": "supportNotJoin",
            "personalityDelta": {
              "boundary": 1,
              "supportive": 1
            },
            "memoryAdd": [
              "w5_school_art_competition_info_classmateQuiet_say_not_join_but_help"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她說不出很大的理由，只說想把那個角落畫下來。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "supportNotJoin",
              "reason": "這個選項是為 校內畫畫比賽資訊 / classmateQuiet 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_school_art_competition_info",
              "variantId": "classmateQuiet",
              "mustMatchEventTitle": "校內畫畫比賽資訊"
            },
            "skillExpDelta": {
              "繪畫": 1
            },
            "playerLineType": "speech",
            "resultText": "她說不出很大的理由，只說想把那個角落畫下來。"
          },
          {
            "id": "w5_school_art_competition_info_classmateQuiet_avoid_colour_advice",
            "text": "說自己也未想好",
            "playerLine": "我都唔知畫咩。",
            "attitudeId": "avoidAdvice",
            "personalityDelta": {
              "avoidant": 1
            },
            "memoryAdd": [
              "w5_school_art_competition_info_classmateQuiet_avoid_colour_advice"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你們一起看著海報，兩個人都還在想。"
            },
            "statusDelta": {
              "體力": 1,
              "社交": -1,
              "自信": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "avoidAdvice",
              "reason": "這個選項是為 校內畫畫比賽資訊 / classmateQuiet 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_school_art_competition_info",
              "variantId": "classmateQuiet",
              "mustMatchEventTitle": "校內畫畫比賽資訊"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "你們一起看著海報，兩個人都還在想。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "classmateQuiet",
          "npcIdentity": "同學",
          "npcPersonality": "安靜觀察型",
          "npcDisplayName": "classmateQuiet"
        },
        "variantId": "classmateQuiet",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_quiet_observer",
        "reactionProfileId": "identity_same_age_peer__pers_quiet_observer"
      },
      {
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "我應該會參加校內畫畫比賽，睇下邊個畫得好。"
          },
          {
            "speaker": "梓軒",
            "text": "不過主題好麻煩，校園有咩好畫？"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "我應該會參加校內畫畫比賽，睇下邊個畫得好。 不過主題好麻煩，校園有咩好畫？",
        "playerChoices": [
          {
            "id": "w5_school_art_competition_info_classmateCompetitive_join_without_score_talk",
            "text": "不把比賽當純勝負",
            "playerLine": "我畫我記得嘅地方，唔係只係贏。",
            "attitudeId": "boundaryCompete",
            "personalityDelta": {
              "boundary": 1,
              "competitive": 1
            },
            "memoryAdd": [
              "w5_school_art_competition_info_classmateCompetitive_join_without_score_talk"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒皺眉，但似乎第一次想比賽也可以不只看名次。"
            },
            "statusDelta": {
              "理智值": 1,
              "社交": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "boundaryCompete",
              "reason": "這個選項是為 校內畫畫比賽資訊 / classmateCompetitive 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_school_art_competition_info",
              "variantId": "classmateCompetitive",
              "mustMatchEventTitle": "校內畫畫比賽資訊"
            },
            "skillExpDelta": {
              "繪畫": 1
            },
            "playerLineType": "speech",
            "resultText": "梓軒皺眉，但似乎第一次想比賽也可以不只看名次。"
          },
          {
            "id": "w5_school_art_competition_info_classmateCompetitive_ask_his_idea",
            "text": "問他想畫甚麼",
            "playerLine": "你想畫邊度？",
            "attitudeId": "strategicAsk",
            "personalityDelta": {
              "helpSeeking": 1,
              "creative": 1
            },
            "memoryAdd": [
              "w5_school_art_competition_info_classmateCompetitive_ask_his_idea"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "他本來想說操場，後來又說可能畫課室，因為比較容易看得出。"
            },
            "statusDelta": {
              "理智值": -1,
              "社交": 1,
              "創意": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "respect",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "strategicAsk",
              "reason": "這個選項是為 校內畫畫比賽資訊 / classmateCompetitive 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_school_art_competition_info",
              "variantId": "classmateCompetitive",
              "mustMatchEventTitle": "校內畫畫比賽資訊"
            },
            "skillExpDelta": {
              "繪畫": 1
            },
            "playerLineType": "speech",
            "resultText": "他本來想說操場，後來又說可能畫課室，因為比較容易看得出。"
          },
          {
            "id": "w5_school_art_competition_info_classmateCompetitive_accept_challenge_art",
            "text": "接住他的話",
            "playerLine": "咁到時睇吓啦。",
            "attitudeId": "friendlyChallenge",
            "personalityDelta": {
              "competitive": 2
            },
            "memoryAdd": [
              "w5_school_art_competition_info_classmateCompetitive_accept_challenge_art"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你們之間多了一點競爭感，但也多了一個共同話題。"
            },
            "statusDelta": {
              "理智值": -1,
              "創意": 1,
              "自信": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "respect",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "friendlyChallenge",
              "reason": "這個選項是為 校內畫畫比賽資訊 / classmateCompetitive 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_school_art_competition_info",
              "variantId": "classmateCompetitive",
              "mustMatchEventTitle": "校內畫畫比賽資訊"
            },
            "skillExpDelta": {
              "繪畫": 1
            },
            "playerLineType": "speech",
            "resultText": "你們之間多了一點競爭感，但也多了一個共同話題。"
          },
          {
            "id": "w5_school_art_competition_info_classmateCompetitive_say_poster_only",
            "text": "說不參加",
            "playerLine": "我唔參加，我睇你畫。",
            "attitudeId": "softDecline",
            "personalityDelta": {
              "boundary": 1
            },
            "memoryAdd": [
              "w5_school_art_competition_info_classmateCompetitive_say_poster_only"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒有點失望，因為少了一個可以比較的人。"
            },
            "statusDelta": {
              "體力": 1,
              "社交": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "softDecline",
              "reason": "這個選項是為 校內畫畫比賽資訊 / classmateCompetitive 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w5_school_art_competition_info",
              "variantId": "classmateCompetitive",
              "mustMatchEventTitle": "校內畫畫比賽資訊"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "梓軒有點失望，因為少了一個可以比較的人。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "classmateCompetitive",
          "npcIdentity": "同學",
          "npcPersonality": "競爭同學型",
          "npcDisplayName": "classmateCompetitive"
        },
        "variantId": "classmateCompetitive",
        "variantType": "npc",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_competitive_peer",
        "reactionProfileId": "identity_same_age_peer__pers_competitive_peer"
      }
    ],
    "schemaVersion": "opening_event_pool_v5_1_balanced_event_specific_choices",
    "eventScheduling": {
      "baseWeight": 60,
      "weekRange": [
        5,
        5
      ],
      "conditions": [],
      "exclusiveGroup": "w5_interest_opportunity_soft_cap",
      "onceOnly": true,
      "cooldownWeeks": 999,
      "prerequisiteMemory": [],
      "sourceChannel": "visual_arts_class",
      "involvementRole": "direct_actor"
    },
    "eventChoiceDesignRule": "playerChoices must be authored for this exact event+variant; personalityId may alter tone and point interpretation but must not inject a generic personality choice set."
  },
  {
    "id": "w6_teacher_six_week_observation",
    "weekPool": "W6_six_week_node",
    "title": "班主任六週觀察",
    "sceneType": "teacher_six_week_direction",
    "coreSituation": "老師根據前五週觀察講一件小事，不是正式評分，而是生成下六週方向。",
    "followUpHooks": [
      "next_six_week_direction_selector"
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "pointDesign": {
      "version": "target_aware_integer_delta_v5_1_balanced",
      "mainStatusKeys": [
        "快樂",
        "理智值",
        "體力",
        "學業",
        "社交",
        "創意",
        "家庭關係",
        "自信"
      ],
      "skillKeys": [
        "繪畫",
        "鋼琴",
        "朗誦",
        "游泳",
        "足球",
        "編程",
        "閱讀",
        "班務服務"
      ],
      "note": "分數由玩家 attitudeId、舊 effects、事件題材，以及當前 NPC 身份 / 性格共同決定；同一個選項在不同 NPC 面前可以有不同結果。",
      "choiceTextRule": "choice.text is player-facing and must describe a concrete action or spoken line that answers this event dialogue; do not show abstract attitude labels.",
      "noCrossEventGenericChoiceRule": "The same choice.text should not be reused across unrelated event ids.",
      "statusBalanceRule": "每個 variant 通常只有 1–2 個選項會推進核心狀態；其餘選項偏向保留、錯過、休息、觀察或付出代價。statusDelta 是方向，不是每次點擊獎勵。",
      "skillSemantics": "skillExpDelta 是技能經驗值，不是技能等級。",
      "previewRule": "dialogueTriggerPreview is generated from openingDialogue and should not be hand-authored."
    },
    "fallbackChoices": [
      {
        "id": "w6_teacher_six_week_observation_strictAcademic_fallback_ask",
        "text": "問清楚這件事和自己現在要做甚麼。",
        "playerLine": "問清楚這件事和自己現在要做甚麼。",
        "attitudeId": "askForClarification",
        "personalityDelta": {
          "helpSeeking": 1
        },
        "memoryAdd": [
          "w6_teacher_six_week_observation_strictAcademic_fallback_ask"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你用提問避免誤會，這是只屬於當前事件的備用選項。"
        },
        "statusDelta": {
          "理智值": 1,
          "體力": -1,
          "自信": 1
        },
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "嚴格學業型",
          "attitudeReadAs": "askForClarification",
          "reason": "這個選項是為 班主任六週觀察 / strictAcademic 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w6_teacher_six_week_observation",
          "variantId": "strictAcademic",
          "mustMatchEventTitle": "班主任六週觀察"
        },
        "skillExpDelta": {}
      },
      {
        "id": "w6_teacher_six_week_observation_strictAcademic_fallback_observe",
        "text": "先觀察這個情境，不立刻答應或拒絕。",
        "playerLine": "先觀察這個情境，不立刻答應或拒絕。",
        "attitudeId": "observeFirst",
        "personalityDelta": {
          "observer": 1
        },
        "memoryAdd": [
          "w6_teacher_six_week_observation_strictAcademic_fallback_observe"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你暫時保留行動，讓自己多一點時間。"
        },
        "statusDelta": {},
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "老師",
          "npcPersonality": "嚴格學業型",
          "attitudeReadAs": "observeFirst",
          "reason": "這個選項是為 班主任六週觀察 / strictAcademic 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w6_teacher_six_week_observation",
          "variantId": "strictAcademic",
          "mustMatchEventTitle": "班主任六週觀察"
        },
        "skillExpDelta": {}
      }
    ],
    "variants": [
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "頭幾週你功課大致交齊，呢點可以。"
          },
          {
            "speaker": "老師",
            "text": "但改正要快一點，唔好等到我再提。"
          }
        ],
        "directionHint": "correction_speed",
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "頭幾週你功課大致交齊，呢點可以。 但改正要快一點，唔好等到我再提。",
        "playerChoices": [
          {
            "id": "w6_teacher_six_week_observation_strictAcademic_ask_corrections_next",
            "text": "點頭接受",
            "playerLine": "我知道，下次改正快啲。",
            "attitudeId": "askImprovement",
            "personalityDelta": {
              "helpSeeking": 1,
              "accountable": 1
            },
            "memoryAdd": [
              "w6_teacher_six_week_observation_strictAcademic_ask_corrections_next"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師沒有多稱讚，但你知道她把你當成可以要求的人。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "學業": 1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "askImprovement",
              "reason": "這個選項是為 班主任六週觀察 / strictAcademic 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_teacher_six_week_observation",
              "variantId": "strictAcademic",
              "mustMatchEventTitle": "班主任六週觀察"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師沒有多稱讚，但你知道她把你當成可以要求的人。"
          },
          {
            "id": "w6_teacher_six_week_observation_strictAcademic_nod_accept_homework",
            "text": "問要改哪樣",
            "playerLine": "係字，定係改正呀？",
            "attitudeId": "acceptFeedback",
            "personalityDelta": {
              "compliant": 1
            },
            "memoryAdd": [
              "w6_teacher_six_week_observation_strictAcademic_nod_accept_homework"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師慢慢講給你聽，你終於知道先改哪一樣。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "acceptFeedback",
              "reason": "這個選項是為 班主任六週觀察 / strictAcademic 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_teacher_six_week_observation",
              "variantId": "strictAcademic",
              "mustMatchEventTitle": "班主任六週觀察"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師慢慢講給你聽，你終於知道先改哪一樣。"
          },
          {
            "id": "w6_teacher_six_week_observation_strictAcademic_explain_slow_correction",
            "text": "說自己有時忘記",
            "playerLine": "我有時放咗入書包就唔記得。",
            "attitudeId": "explainConstraint",
            "personalityDelta": {
              "selfAdvocacy": 1
            },
            "memoryAdd": [
              "w6_teacher_six_week_observation_strictAcademic_explain_slow_correction"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師叫你固定放改正的位置。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "explainConstraint",
              "reason": "這個選項是為 班主任六週觀察 / strictAcademic 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_teacher_six_week_observation",
              "variantId": "strictAcademic",
              "mustMatchEventTitle": "班主任六週觀察"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師叫你固定放改正的位置。"
          },
          {
            "id": "w6_teacher_six_week_observation_strictAcademic_feel_pressured_silent",
            "text": "不知怎樣回答",
            "playerLine": "嗯……",
            "attitudeId": "silentPressure",
            "personalityDelta": {
              "shy": 1
            },
            "memoryAdd": [
              "w6_teacher_six_week_observation_strictAcademic_feel_pressured_silent"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師看你一眼，沒有追問，但這次談話沒有展開。"
            },
            "statusDelta": {
              "理智值": -1,
              "體力": 1,
              "自信": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "嚴格學業型",
              "attitudeReadAs": "silentPressure",
              "reason": "這個選項是為 班主任六週觀察 / strictAcademic 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_teacher_six_week_observation",
              "variantId": "strictAcademic",
              "mustMatchEventTitle": "班主任六週觀察"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師看你一眼，沒有追問，但這次談話沒有展開。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "strictAcademic",
          "npcIdentity": "老師",
          "npcPersonality": "嚴格學業型",
          "npcDisplayName": "strictAcademic"
        },
        "variantId": "strictAcademic",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_strict_academic",
        "reactionProfileId": "identity_teacher__pers_strict_academic"
      },
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "你比第一週自然咗，至少而家識得問問題。"
          },
          {
            "speaker": "老師",
            "text": "唔係每次都要好大聲，願意開口已經係進步。"
          }
        ],
        "directionHint": "confidence_and_help_seeking",
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "你比第一週自然咗，至少而家識得問問題。 唔係每次都要好大聲，願意開口已經係進步。",
        "playerChoices": [
          {
            "id": "w6_teacher_six_week_observation_encouraging_say_more_natural_now",
            "text": "說自己仍會緊張",
            "playerLine": "我而家都會驚，但冇第一日咁驚。",
            "attitudeId": "shareGrowth",
            "personalityDelta": {
              "expressive": 1
            },
            "memoryAdd": [
              "w6_teacher_six_week_observation_encouraging_say_more_natural_now"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師笑著說這樣已經很好。"
            },
            "statusDelta": {
              "快樂": 1,
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "warmth",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "shareGrowth",
              "reason": "這個選項是為 班主任六週觀察 / encouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_teacher_six_week_observation",
              "variantId": "encouraging",
              "mustMatchEventTitle": "班主任六週觀察"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師笑著說這樣已經很好。"
          },
          {
            "id": "w6_teacher_six_week_observation_encouraging_ask_next_question_goal",
            "text": "問下一步",
            "playerLine": "咁我下星期可以試咩？",
            "attitudeId": "setGoal",
            "personalityDelta": {
              "growthMindset": 1
            },
            "memoryAdd": [
              "w6_teacher_six_week_observation_encouraging_ask_next_question_goal"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師建議你試著自己記一次功課。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "學業": 1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "setGoal",
              "reason": "這個選項是為 班主任六週觀察 / encouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_teacher_six_week_observation",
              "variantId": "encouraging",
              "mustMatchEventTitle": "班主任六週觀察"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師建議你試著自己記一次功課。"
          },
          {
            "id": "w6_teacher_six_week_observation_encouraging_thank_teacher",
            "text": "說喜歡某件事",
            "playerLine": "我鍾意視藝堂多啲。",
            "attitudeId": "gratitude",
            "personalityDelta": {
              "gentle": 1
            },
            "memoryAdd": [
              "w6_teacher_six_week_observation_encouraging_thank_teacher"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師把這件事記下來，像看到你慢慢有自己的方向。"
            },
            "statusDelta": {
              "快樂": 1,
              "理智值": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "warmth",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "gratitude",
              "reason": "這個選項是為 班主任六週觀察 / encouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_teacher_six_week_observation",
              "variantId": "encouraging",
              "mustMatchEventTitle": "班主任六週觀察"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師把這件事記下來，像看到你慢慢有自己的方向。"
          },
          {
            "id": "w6_teacher_six_week_observation_encouraging_dont_know_answer",
            "text": "只是點頭",
            "playerLine": "你點頭，手指捏著校服邊。",
            "attitudeId": "awkwardSmile",
            "personalityDelta": {
              "shy": 1
            },
            "memoryAdd": [
              "w6_teacher_six_week_observation_encouraging_dont_know_answer"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師知道你有聽，但你還未準備好講太多。"
            },
            "statusDelta": {
              "理智值": 1,
              "自信": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "warmth",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "鼓勵型",
              "attitudeReadAs": "awkwardSmile",
              "reason": "這個選項是為 班主任六週觀察 / encouraging 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_teacher_six_week_observation",
              "variantId": "encouraging",
              "mustMatchEventTitle": "班主任六週觀察"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "老師知道你有聽，但你還未準備好講太多。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "encouraging",
          "npcIdentity": "老師",
          "npcPersonality": "鼓勵型",
          "npcDisplayName": "encouraging"
        },
        "variantId": "encouraging",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_encouraging_teacher",
        "reactionProfileId": "identity_teacher__pers_encouraging_teacher"
      },
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "我見你有幾次會先觀察再做，呢個唔係壞事。"
          },
          {
            "speaker": "老師",
            "text": "但有時如果真的不明白，要早啲開口。"
          }
        ],
        "directionHint": "observer_to_action",
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "我見你有幾次會先觀察再做，呢個唔係壞事。 但有時如果真的不明白，要早啲開口。",
        "playerChoices": [
          {
            "id": "w6_teacher_six_week_observation_fairObserver_ask_when_speak_earlier",
            "text": "說想先看",
            "playerLine": "我驚做錯，想睇下人哋點做先。",
            "attitudeId": "clarifyTiming",
            "personalityDelta": {
              "observer": 1,
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w6_teacher_six_week_observation_fairObserver_ask_when_speak_earlier"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師點頭，提醒你看完也要試。"
            },
            "statusDelta": {
              "理智值": 2,
              "體力": -1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "公平觀察型",
              "attitudeReadAs": "clarifyTiming",
              "reason": "這個選項是為 班主任六週觀察 / fairObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_teacher_six_week_observation",
              "variantId": "fairObserver",
              "mustMatchEventTitle": "班主任六週觀察"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師點頭，提醒你看完也要試。"
          },
          {
            "id": "w6_teacher_six_week_observation_fairObserver_say_observe_first",
            "text": "問甚麼時候要開口",
            "playerLine": "咁幾時應該問？",
            "attitudeId": "selfExplain",
            "personalityDelta": {
              "selfAdvocacy": 1,
              "observer": 1
            },
            "memoryAdd": [
              "w6_teacher_six_week_observation_fairObserver_say_observe_first"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說，如果你已經等到心裡很慌，就可以問。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "公平觀察型",
              "attitudeReadAs": "selfExplain",
              "reason": "這個選項是為 班主任六週觀察 / fairObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_teacher_six_week_observation",
              "variantId": "fairObserver",
              "mustMatchEventTitle": "班主任六週觀察"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師說，如果你已經等到心裡很慌，就可以問。"
          },
          {
            "id": "w6_teacher_six_week_observation_fairObserver_choose_one_try_next",
            "text": "說自己不太會問",
            "playerLine": "我唔知點問。",
            "attitudeId": "setGoal",
            "personalityDelta": {
              "growthMindset": 1
            },
            "memoryAdd": [
              "w6_teacher_six_week_observation_fairObserver_choose_one_try_next"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師給你一句可以用的開頭：「老師，我唔明第一步。」"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "公平觀察型",
              "attitudeReadAs": "setGoal",
              "reason": "這個選項是為 班主任六週觀察 / fairObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_teacher_six_week_observation",
              "variantId": "fairObserver",
              "mustMatchEventTitle": "班主任六週觀察"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師給你一句可以用的開頭：「老師，我唔明第一步。」"
          },
          {
            "id": "w6_teacher_six_week_observation_fairObserver_only_nod_observe",
            "text": "不太知道怎樣答",
            "playerLine": "我都唔知。",
            "attitudeId": "quietAccept",
            "personalityDelta": {
              "observer": 1,
              "shy": 1
            },
            "memoryAdd": [
              "w6_teacher_six_week_observation_fairObserver_only_nod_observe"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師沒有逼你，只把這件事留到之後再看。"
            },
            "statusDelta": {},
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "公平觀察型",
              "attitudeReadAs": "quietAccept",
              "reason": "這個選項是為 班主任六週觀察 / fairObserver 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_teacher_six_week_observation",
              "variantId": "fairObserver",
              "mustMatchEventTitle": "班主任六週觀察"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師沒有逼你，只把這件事留到之後再看。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "fairObserver",
          "npcIdentity": "老師",
          "npcPersonality": "公平觀察型",
          "npcDisplayName": "fairObserver"
        },
        "variantId": "fairObserver",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_fair_observer",
        "reactionProfileId": "identity_teacher__pers_fair_observer"
      },
      {
        "openingDialogue": [
          {
            "speaker": "老師",
            "text": "你最近有幾日好似有啲攰，返屋企休息夠唔夠？"
          },
          {
            "speaker": "老師",
            "text": "學校要適應，身體都要慢慢跟上。"
          }
        ],
        "directionHint": "energy_and_care",
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "你最近有幾日好似有啲攰，返屋企休息夠唔夠？ 學校要適應，身體都要慢慢跟上。",
        "playerChoices": [
          {
            "id": "w6_teacher_six_week_observation_caring_admit_tired_days",
            "text": "說真的累",
            "playerLine": "我放學返屋企好眼瞓。",
            "attitudeId": "shareNeed",
            "personalityDelta": {
              "helpSeeking": 1,
              "selfAware": 1
            },
            "memoryAdd": [
              "w6_teacher_six_week_observation_caring_admit_tired_days"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師提醒你如果太累，可以跟屋企人一起調整時間。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "warmth",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "關顧型",
              "attitudeReadAs": "shareNeed",
              "reason": "這個選項是為 班主任六週觀察 / caring 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_teacher_six_week_observation",
              "variantId": "caring",
              "mustMatchEventTitle": "班主任六週觀察"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師提醒你如果太累，可以跟屋企人一起調整時間。"
          },
          {
            "id": "w6_teacher_six_week_observation_caring_say_sleep_ok_school_tired",
            "text": "說只是早起不習慣",
            "playerLine": "我未慣咁早起身。",
            "attitudeId": "explainFeeling",
            "personalityDelta": {
              "selfAware": 1
            },
            "memoryAdd": [
              "w6_teacher_six_week_observation_caring_say_sleep_ok_school_tired"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說開學頭幾週很多人都這樣。"
            },
            "statusDelta": {
              "理智值": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "warmth",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "關顧型",
              "attitudeReadAs": "explainFeeling",
              "reason": "這個選項是為 班主任六週觀察 / caring 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_teacher_six_week_observation",
              "variantId": "caring",
              "mustMatchEventTitle": "班主任六週觀察"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師說開學頭幾週很多人都這樣。"
          },
          {
            "id": "w6_teacher_six_week_observation_caring_ask_rest_strategy",
            "text": "問可否慢慢來",
            "playerLine": "我想可以慢慢。",
            "attitudeId": "askSupport",
            "personalityDelta": {
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w6_teacher_six_week_observation_caring_ask_rest_strategy"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師說可以，但不舒服或不明白要講。"
            },
            "statusDelta": {
              "理智值": 2,
              "體力": -1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_teacher",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "老師信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "關顧型",
              "attitudeReadAs": "askSupport",
              "reason": "這個選項是為 班主任六週觀察 / caring 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_teacher_six_week_observation",
              "variantId": "caring",
              "mustMatchEventTitle": "班主任六週觀察"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師說可以，但不舒服或不明白要講。"
          },
          {
            "id": "w6_teacher_six_week_observation_caring_deny_tired",
            "text": "不想講",
            "playerLine": "冇嘢。",
            "attitudeId": "hideNeed",
            "personalityDelta": {
              "avoidant": 1
            },
            "memoryAdd": [
              "w6_teacher_six_week_observation_caring_deny_tired"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "老師沒有追問，只說如果需要可以之後再講。"
            },
            "statusDelta": {
              "理智值": -1,
              "體力": 1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "老師",
              "npcPersonality": "關顧型",
              "attitudeReadAs": "hideNeed",
              "reason": "這個選項是為 班主任六週觀察 / caring 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_teacher_six_week_observation",
              "variantId": "caring",
              "mustMatchEventTitle": "班主任六週觀察"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "老師沒有追問，只說如果需要可以之後再講。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "caring",
          "npcIdentity": "老師",
          "npcPersonality": "關顧型",
          "npcDisplayName": "caring"
        },
        "variantId": "caring",
        "variantType": "npc",
        "identityTypeId": "identity_teacher",
        "personalityId": "pers_caring_teacher",
        "reactionProfileId": "identity_teacher__pers_caring_teacher"
      }
    ],
    "schemaVersion": "opening_event_pool_v5_1_balanced_event_specific_choices",
    "eventScheduling": {
      "baseWeight": 70,
      "weekRange": [
        6,
        6
      ],
      "conditions": [],
      "exclusiveGroup": null,
      "onceOnly": true,
      "cooldownWeeks": 999,
      "prerequisiteMemory": [],
      "sourceChannel": "classroom",
      "involvementRole": "direct_actor"
    },
    "eventChoiceDesignRule": "playerChoices must be authored for this exact event+variant; personalityId may alter tone and point interpretation but must not inject a generic personality choice set."
  },
  {
    "id": "w6_family_sees_six_week_state",
    "weekPool": "W6_six_week_node",
    "title": "家長看見六週狀態",
    "sceneType": "family_six_week_direction",
    "coreSituation": "家長根據手冊、功課、默書或老師一句話作反應，影響家庭信任、自主性和 forced schedule 機率。",
    "followUpHooks": [
      "family_trust_autonomy_update",
      "next_week_schedule_rules"
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "pointDesign": {
      "version": "target_aware_integer_delta_v5_1_balanced",
      "mainStatusKeys": [
        "快樂",
        "理智值",
        "體力",
        "學業",
        "社交",
        "創意",
        "家庭關係",
        "自信"
      ],
      "skillKeys": [
        "繪畫",
        "鋼琴",
        "朗誦",
        "游泳",
        "足球",
        "編程",
        "閱讀",
        "班務服務"
      ],
      "note": "分數由玩家 attitudeId、舊 effects、事件題材，以及當前 NPC 身份 / 性格共同決定；同一個選項在不同 NPC 面前可以有不同結果。",
      "choiceTextRule": "choice.text is player-facing and must describe a concrete action or spoken line that answers this event dialogue; do not show abstract attitude labels.",
      "noCrossEventGenericChoiceRule": "The same choice.text should not be reused across unrelated event ids.",
      "statusBalanceRule": "每個 variant 通常只有 1–2 個選項會推進核心狀態；其餘選項偏向保留、錯過、休息、觀察或付出代價。statusDelta 是方向，不是每次點擊獎勵。",
      "skillSemantics": "skillExpDelta 是技能經驗值，不是技能等級。",
      "previewRule": "dialogueTriggerPreview is generated from openingDialogue and should not be hand-authored."
    },
    "fallbackChoices": [
      {
        "id": "w6_family_sees_six_week_state_cautiousPlanner_fallback_ask",
        "text": "問清楚這件事和自己現在要做甚麼。",
        "playerLine": "問清楚這件事和自己現在要做甚麼。",
        "attitudeId": "askForClarification",
        "personalityDelta": {
          "helpSeeking": 1
        },
        "memoryAdd": [
          "w6_family_sees_six_week_state_cautiousPlanner_fallback_ask"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你用提問避免誤會，這是只屬於當前事件的備用選項。"
        },
        "statusDelta": {
          "理智值": 1,
          "體力": -1,
          "自信": 1
        },
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "家長/家庭長輩",
          "npcPersonality": "謹慎安排型",
          "attitudeReadAs": "askForClarification",
          "reason": "這個選項是為 家長看見六週狀態 / cautiousPlanner 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w6_family_sees_six_week_state",
          "variantId": "cautiousPlanner",
          "mustMatchEventTitle": "家長看見六週狀態"
        },
        "skillExpDelta": {}
      },
      {
        "id": "w6_family_sees_six_week_state_cautiousPlanner_fallback_observe",
        "text": "先觀察這個情境，不立刻答應或拒絕。",
        "playerLine": "先觀察這個情境，不立刻答應或拒絕。",
        "attitudeId": "observeFirst",
        "personalityDelta": {
          "observer": 1
        },
        "memoryAdd": [
          "w6_family_sees_six_week_state_cautiousPlanner_fallback_observe"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你暫時保留行動，讓自己多一點時間。"
        },
        "statusDelta": {},
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "家長/家庭長輩",
          "npcPersonality": "謹慎安排型",
          "attitudeReadAs": "observeFirst",
          "reason": "這個選項是為 家長看見六週狀態 / cautiousPlanner 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w6_family_sees_six_week_state",
          "variantId": "cautiousPlanner",
          "mustMatchEventTitle": "家長看見六週狀態"
        },
        "skillExpDelta": {}
      }
    ],
    "variants": [
      {
        "openingDialogue": [
          {
            "speaker": "家長",
            "text": "頭幾週差唔多適應喇，我哋可以諗下點樣溫書同執書包。"
          },
          {
            "speaker": "家長",
            "text": "唔係要你一下子適應晒，但要有方法。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "頭幾週差唔多適應喇，我哋可以諗下點樣溫書同執書包。 唔係要你一下子適應晒，但要有方法。",
        "playerChoices": [
          {
            "id": "w6_family_sees_six_week_state_cautiousPlanner_plan_next_six_weeks",
            "text": "講做得好的事",
            "playerLine": "我有記得交手冊。",
            "attitudeId": "familyPlan",
            "personalityDelta": {
              "organized": 2
            },
            "memoryAdd": [
              "w6_family_sees_six_week_state_cautiousPlanner_plan_next_six_weeks"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長點頭，像把這件事放進可繼續的習慣裡。"
            },
            "statusDelta": {
              "體力": -1,
              "學業": 2,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "謹慎安排型",
              "attitudeReadAs": "familyPlan",
              "reason": "這個選項是為 家長看見六週狀態 / cautiousPlanner 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_family_sees_six_week_state",
              "variantId": "cautiousPlanner",
              "mustMatchEventTitle": "家長看見六週狀態"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長點頭，像把這件事放進可繼續的習慣裡。"
          },
          {
            "id": "w6_family_sees_six_week_state_cautiousPlanner_ask_try_own_schedule",
            "text": "講覺得難的事",
            "playerLine": "我覺得默書好難。",
            "attitudeId": "askAutonomy",
            "personalityDelta": {
              "independent": 2
            },
            "memoryAdd": [
              "w6_family_sees_six_week_state_cautiousPlanner_ask_try_own_schedule"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長開始想怎樣把默書拆成幾天準備。"
            },
            "statusDelta": {},
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "謹慎安排型",
              "attitudeReadAs": "askAutonomy",
              "reason": "這個選項是為 家長看見六週狀態 / cautiousPlanner 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_family_sees_six_week_state",
              "variantId": "cautiousPlanner",
              "mustMatchEventTitle": "家長看見六週狀態"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長開始想怎樣把默書拆成幾天準備。"
          },
          {
            "id": "w6_family_sees_six_week_state_cautiousPlanner_show_handbook_status",
            "text": "問可否自己試",
            "playerLine": "下星期我自己記得唔得？",
            "attitudeId": "transparentShare",
            "personalityDelta": {
              "accountable": 1
            },
            "memoryAdd": [
              "w6_family_sees_six_week_state_cautiousPlanner_show_handbook_status"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長有點不放心，但願意試一小部分。"
            },
            "statusDelta": {
              "體力": -1,
              "學業": 1,
              "家庭關係": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "謹慎安排型",
              "attitudeReadAs": "transparentShare",
              "reason": "這個選項是為 家長看見六週狀態 / cautiousPlanner 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_family_sees_six_week_state",
              "variantId": "cautiousPlanner",
              "mustMatchEventTitle": "家長看見六週狀態"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長有點不放心，但願意試一小部分。"
          },
          {
            "id": "w6_family_sees_six_week_state_cautiousPlanner_avoid_planning_talk",
            "text": "只拿手冊",
            "playerLine": "你把手冊交給家長。",
            "attitudeId": "avoidPlanning",
            "personalityDelta": {
              "avoidant": 1
            },
            "memoryAdd": [
              "w6_family_sees_six_week_state_cautiousPlanner_avoid_planning_talk"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長看得到資料，但看不太到你的想法。"
            },
            "statusDelta": {
              "理智值": -1,
              "體力": 1,
              "家庭關係": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": -1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "謹慎安排型",
              "attitudeReadAs": "avoidPlanning",
              "reason": "這個選項是為 家長看見六週狀態 / cautiousPlanner 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_family_sees_six_week_state",
              "variantId": "cautiousPlanner",
              "mustMatchEventTitle": "家長看見六週狀態"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "家長看得到資料，但看不太到你的想法。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "cautiousPlanner",
          "npcIdentity": "家長/家庭長輩",
          "npcPersonality": "謹慎安排型",
          "npcDisplayName": "cautiousPlanner"
        },
        "variantId": "cautiousPlanner",
        "variantType": "npc",
        "identityTypeId": "identity_family_elder",
        "personalityId": "pers_cautious_planner",
        "reactionProfileId": "identity_family_elder__pers_cautious_planner"
      },
      {
        "openingDialogue": [
          {
            "speaker": "家長",
            "text": "呢六個星期，你最記得學校邊件事？"
          },
          {
            "speaker": "家長",
            "text": "唔一定係成績，可以係一個人、一個地方，或者一件好細嘅事。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "呢六個星期，你最記得學校邊件事？ 唔一定係成績，可以係一個人、一個地方，或者一件好細嘅事。",
        "playerChoices": [
          {
            "id": "w6_family_sees_six_week_state_gentleListener_share_best_memory",
            "text": "講一個同學",
            "playerLine": "我記得有個同學第一日同我講排隊。",
            "attitudeId": "shareMemory",
            "personalityDelta": {
              "expressive": 1
            },
            "memoryAdd": [
              "w6_family_sees_six_week_state_gentleListener_share_best_memory"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長聽著，像把那個同學也放進你的新生活裡。"
            },
            "statusDelta": {
              "體力": -1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "warmth",
                "amount": 2,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "溫和聆聽型",
              "attitudeReadAs": "shareMemory",
              "reason": "這個選項是為 家長看見六週狀態 / gentleListener 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_family_sees_six_week_state",
              "variantId": "gentleListener",
              "mustMatchEventTitle": "家長看見六週狀態"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長聽著，像把那個同學也放進你的新生活裡。"
          },
          {
            "id": "w6_family_sees_six_week_state_gentleListener_share_hard_thing",
            "text": "講一件困難",
            "playerLine": "我有時唔知點問老師。",
            "attitudeId": "shareDifficulty",
            "personalityDelta": {
              "selfAware": 1
            },
            "memoryAdd": [
              "w6_family_sees_six_week_state_gentleListener_share_hard_thing"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長沒有急著教，只先問你當時心裡怎樣想。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "家庭關係": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 2,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "溫和聆聽型",
              "attitudeReadAs": "shareDifficulty",
              "reason": "這個選項是為 家長看見六週狀態 / gentleListener 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_family_sees_six_week_state",
              "variantId": "gentleListener",
              "mustMatchEventTitle": "家長看見六週狀態"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長沒有急著教，只先問你當時心裡怎樣想。"
          },
          {
            "id": "w6_family_sees_six_week_state_gentleListener_ask_more_self_arrange",
            "text": "講一件開心事",
            "playerLine": "我畫畫嗰日有人話我畫得舒服。",
            "attitudeId": "askAutonomy",
            "personalityDelta": {
              "independent": 1
            },
            "memoryAdd": [
              "w6_family_sees_six_week_state_gentleListener_ask_more_self_arrange"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長笑了，說這句話值得記住。"
            },
            "statusDelta": {
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "溫和聆聽型",
              "attitudeReadAs": "askAutonomy",
              "reason": "這個選項是為 家長看見六週狀態 / gentleListener 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_family_sees_six_week_state",
              "variantId": "gentleListener",
              "mustMatchEventTitle": "家長看見六週狀態"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長笑了，說這句話值得記住。"
          },
          {
            "id": "w6_family_sees_six_week_state_gentleListener_only_give_handbook",
            "text": "不知道怎樣講",
            "playerLine": "太多嘢，我唔知講邊樣。",
            "attitudeId": "minimalShare",
            "personalityDelta": {
              "boundary": 1,
              "avoidant": 1
            },
            "memoryAdd": [
              "w6_family_sees_six_week_state_gentleListener_only_give_handbook"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長說可以今晚只講一樣，其他慢慢來。"
            },
            "statusDelta": {
              "體力": 1,
              "社交": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "溫和聆聽型",
              "attitudeReadAs": "minimalShare",
              "reason": "這個選項是為 家長看見六週狀態 / gentleListener 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_family_sees_six_week_state",
              "variantId": "gentleListener",
              "mustMatchEventTitle": "家長看見六週狀態"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長說可以今晚只講一樣，其他慢慢來。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "gentleListener",
          "npcIdentity": "家長/家庭長輩",
          "npcPersonality": "溫和聆聽型",
          "npcDisplayName": "gentleListener"
        },
        "variantId": "gentleListener",
        "variantType": "npc",
        "identityTypeId": "identity_family_elder",
        "personalityId": "pers_gentle_listener",
        "reactionProfileId": "identity_family_elder__pers_gentle_listener"
      },
      {
        "openingDialogue": [
          {
            "speaker": "家長",
            "text": "老師有冇話你表現好？之後家長日我都想聽到好評。"
          },
          {
            "speaker": "家長",
            "text": "你頭六週有冇乖，有冇俾老師記住？"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "老師有冇話你表現好？之後家長日我都想聽到好評。 你頭六週有冇乖，有冇俾老師記住？",
        "playerChoices": [
          {
            "id": "w6_family_sees_six_week_state_faceExpectation_mention_own_good_thing",
            "text": "講被老師肯定的小事",
            "playerLine": "老師話我有問問題。",
            "attitudeId": "selfWorth",
            "personalityDelta": {
              "selfAdvocacy": 1
            },
            "memoryAdd": [
              "w6_family_sees_six_week_state_faceExpectation_mention_own_good_thing"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長立刻聽見「老師話」，表情放鬆一點。"
            },
            "statusDelta": {
              "自信": 1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "面子期望型",
              "attitudeReadAs": "selfWorth",
              "reason": "這個選項是為 家長看見六週狀態 / faceExpectation 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_family_sees_six_week_state",
              "variantId": "faceExpectation",
              "mustMatchEventTitle": "家長看見六週狀態"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長立刻聽見「老師話」，表情放鬆一點。"
          },
          {
            "id": "w6_family_sees_six_week_state_faceExpectation_share_teacher_positive",
            "text": "講自己覺得難",
            "playerLine": "但我有時都好驚。",
            "attitudeId": "reportPraise",
            "personalityDelta": {
              "expressive": 1
            },
            "memoryAdd": [
              "w6_family_sees_six_week_state_faceExpectation_share_teacher_positive"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長一開始想說不要怕，後來停下來聽你講完。"
            },
            "statusDelta": {
              "快樂": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "面子期望型",
              "attitudeReadAs": "reportPraise",
              "reason": "這個選項是為 家長看見六週狀態 / faceExpectation 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_family_sees_six_week_state",
              "variantId": "faceExpectation",
              "mustMatchEventTitle": "家長看見六週狀態"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長一開始想說不要怕，後來停下來聽你講完。"
          },
          {
            "id": "w6_family_sees_six_week_state_faceExpectation_say_not_everything_praise",
            "text": "不想只講稱讚",
            "playerLine": "可唔可以唔好淨係問有冇讚？",
            "attitudeId": "challengeExpectation",
            "personalityDelta": {
              "boundary": 1,
              "selfAdvocacy": 1
            },
            "memoryAdd": [
              "w6_family_sees_six_week_state_faceExpectation_say_not_everything_praise"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長有點意外，像第一次聽見你的壓力。"
            },
            "statusDelta": {
              "理智值": 1,
              "家庭關係": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": -1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "面子期望型",
              "attitudeReadAs": "challengeExpectation",
              "reason": "這個選項是為 家長看見六週狀態 / faceExpectation 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_family_sees_six_week_state",
              "variantId": "faceExpectation",
              "mustMatchEventTitle": "家長看見六週狀態"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長有點意外，像第一次聽見你的壓力。"
          },
          {
            "id": "w6_family_sees_six_week_state_faceExpectation_hide_average_parts",
            "text": "只說還可以",
            "playerLine": "都可以。",
            "attitudeId": "selectiveShare",
            "personalityDelta": {
              "avoidant": 1
            },
            "memoryAdd": [
              "w6_family_sees_six_week_state_faceExpectation_hide_average_parts"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長聽不出太多，只能繼續猜你的學校生活。"
            },
            "statusDelta": {
              "理智值": -1,
              "家庭關係": 1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "面子期望型",
              "attitudeReadAs": "selectiveShare",
              "reason": "這個選項是為 家長看見六週狀態 / faceExpectation 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_family_sees_six_week_state",
              "variantId": "faceExpectation",
              "mustMatchEventTitle": "家長看見六週狀態"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長聽不出太多，只能繼續猜你的學校生活。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "faceExpectation",
          "npcIdentity": "家長/家庭長輩",
          "npcPersonality": "面子期望型",
          "npcDisplayName": "faceExpectation"
        },
        "variantId": "faceExpectation",
        "variantType": "npc",
        "identityTypeId": "identity_family_elder",
        "personalityId": "pers_face_expectation",
        "reactionProfileId": "identity_family_elder__pers_face_expectation"
      },
      {
        "openingDialogue": [
          {
            "speaker": "家長",
            "text": "有要簽嘅就放枱，其他你自己安排。"
          },
          {
            "speaker": "家長",
            "text": "如果真的唔識，就早啲講，唔好臨瞓先話。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "有要簽嘅就放枱，其他你自己安排。 如果真的唔識，就早啲講，唔好臨瞓先話。",
        "playerChoices": [
          {
            "id": "w6_family_sees_six_week_state_busyPractical_put_signed_items_table",
            "text": "拿出手冊",
            "playerLine": "呢度要簽。",
            "attitudeId": "practicalShare",
            "personalityDelta": {
              "organized": 1
            },
            "memoryAdd": [
              "w6_family_sees_six_week_state_busyPractical_put_signed_items_table"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長很快簽好，讓事情不要堆到最後一刻。"
            },
            "statusDelta": {
              "學業": 1,
              "家庭關係": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "忙碌務實型",
              "attitudeReadAs": "practicalShare",
              "reason": "這個選項是為 家長看見六週狀態 / busyPractical 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_family_sees_six_week_state",
              "variantId": "busyPractical",
              "mustMatchEventTitle": "家長看見六週狀態"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長很快簽好，讓事情不要堆到最後一刻。"
          },
          {
            "id": "w6_family_sees_six_week_state_busyPractical_brief_school_update",
            "text": "說想自己記",
            "playerLine": "我下星期想自己記。",
            "attitudeId": "conciseReport",
            "personalityDelta": {
              "practical": 1
            },
            "memoryAdd": [
              "w6_family_sees_six_week_state_busyPractical_brief_school_update"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長說可以，但漏了就要自己補救。"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": 1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "忙碌務實型",
              "attitudeReadAs": "conciseReport",
              "reason": "這個選項是為 家長看見六週狀態 / busyPractical 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_family_sees_six_week_state",
              "variantId": "busyPractical",
              "mustMatchEventTitle": "家長看見六週狀態"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長說可以，但漏了就要自己補救。"
          },
          {
            "id": "w6_family_sees_six_week_state_busyPractical_ask_self_manage_week",
            "text": "講一件難事",
            "playerLine": "我有時唔知書包點執。",
            "attitudeId": "askAutonomy",
            "personalityDelta": {
              "independent": 2
            },
            "memoryAdd": [
              "w6_family_sees_six_week_state_busyPractical_ask_self_manage_week"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長停下手上的事，教你最簡單的分格方法。"
            },
            "statusDelta": {
              "自信": 1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "忙碌務實型",
              "attitudeReadAs": "askAutonomy",
              "reason": "這個選項是為 家長看見六週狀態 / busyPractical 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_family_sees_six_week_state",
              "variantId": "busyPractical",
              "mustMatchEventTitle": "家長看見六週狀態"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長停下手上的事，教你最簡單的分格方法。"
          },
          {
            "id": "w6_family_sees_six_week_state_busyPractical_leave_everything_unsorted",
            "text": "不多說",
            "playerLine": "冇嘢要簽。",
            "attitudeId": "unclearHandoff",
            "personalityDelta": {
              "avoidant": 1
            },
            "memoryAdd": [
              "w6_family_sees_six_week_state_busyPractical_leave_everything_unsorted"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家長點頭，對話很快結束，你得到自由，也少了一點被看見。"
            },
            "statusDelta": {
              "體力": 1,
              "學業": -1,
              "家庭關係": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_family_elder",
                "dimension": "trust",
                "amount": -1,
                "legacyKey": "家庭信任"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "家長/家庭長輩",
              "npcPersonality": "忙碌務實型",
              "attitudeReadAs": "unclearHandoff",
              "reason": "這個選項是為 家長看見六週狀態 / busyPractical 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_family_sees_six_week_state",
              "variantId": "busyPractical",
              "mustMatchEventTitle": "家長看見六週狀態"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家長點頭，對話很快結束，你得到自由，也少了一點被看見。"
          }
        ],
        "npcPointProfile": {
          "variantKey": "busyPractical",
          "npcIdentity": "家長/家庭長輩",
          "npcPersonality": "忙碌務實型",
          "npcDisplayName": "busyPractical"
        },
        "variantId": "busyPractical",
        "variantType": "npc",
        "identityTypeId": "identity_family_elder",
        "personalityId": "pers_busy_practical",
        "reactionProfileId": "identity_family_elder__pers_busy_practical"
      }
    ],
    "schemaVersion": "opening_event_pool_v5_1_balanced_event_specific_choices",
    "eventScheduling": {
      "baseWeight": 70,
      "weekRange": [
        6,
        6
      ],
      "conditions": [],
      "exclusiveGroup": null,
      "onceOnly": true,
      "cooldownWeeks": 999,
      "prerequisiteMemory": [],
      "sourceChannel": "home",
      "involvementRole": "direct_actor"
    },
    "eventChoiceDesignRule": "playerChoices must be authored for this exact event+variant; personalityId may alter tone and point interpretation but must not inject a generic personality choice set."
  },
  {
    "id": "w6_classmate_event_echo",
    "weekPool": "W6_six_week_node",
    "title": "同學事件的回音",
    "sceneType": "relationship_followup_echo",
    "coreSituation": "如果前五週有和同學互動，這週產生具體回音；如果沒有相關記憶，就不出。玩家選項需依前事而變，不要 generic。",
    "noEligibleEchoText": "這週沒有明顯的同學回音，之前的互動還沒有累積到會被誰特別記住。",
    "followUpHooks": [
      "relationship_memory_strengthen",
      "life_fragment_candidate"
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "pointDesign": {
      "version": "target_aware_integer_delta_v5_1_balanced",
      "mainStatusKeys": [
        "快樂",
        "理智值",
        "體力",
        "學業",
        "社交",
        "創意",
        "家庭關係",
        "自信"
      ],
      "skillKeys": [
        "繪畫",
        "鋼琴",
        "朗誦",
        "游泳",
        "足球",
        "編程",
        "閱讀",
        "班務服務"
      ],
      "note": "分數由玩家 attitudeId、舊 effects、事件題材，以及當前 NPC 身份 / 性格共同決定；同一個選項在不同 NPC 面前可以有不同結果。",
      "choiceTextRule": "choice.text is player-facing and must describe a concrete action or spoken line that answers this event dialogue; do not show abstract attitude labels.",
      "noCrossEventGenericChoiceRule": "The same choice.text should not be reused across unrelated event ids.",
      "statusBalanceRule": "每個 variant 通常只有 1–2 個選項會推進核心狀態；其餘選項偏向保留、錯過、休息、觀察或付出代價。statusDelta 是方向，不是每次點擊獎勵。",
      "skillSemantics": "skillExpDelta 是技能經驗值，不是技能等級。",
      "previewRule": "dialogueTriggerPreview is generated from openingDialogue and should not be hand-authored."
    },
    "variants": [
      {
        "requiredMemoryAny": [
          "first_day_initiated_name_exchange",
          "first_recess_went_to_playground",
          "asked_peer_to_read_together"
        ],
        "openingDialogue": [
          {
            "speaker": "家朗",
            "text": "原來你都有留意嗰卡通！"
          },
          {
            "speaker": "家朗",
            "text": "下次可以嚟我屋企一齊睇。"
          }
        ],
        "playerChoices": [
          {
            "id": "w6_classmate_event_echo_fromSeatOrRecessOutgoing_agree_next_recess",
            "text": "答應下次一起",
            "playerLine": "好呀，不過你要記得等我。",
            "attitudeId": "warmAccept",
            "personalityDelta": {
              "outgoing": 1,
              "boundary": 1
            },
            "memoryAdd": [
              "w6_classmate_event_echo_fromSeatOrRecessOutgoing_agree_next_recess"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗很快答應，像把你放進他的「我哋」裡。"
            },
            "statusDelta": {
              "快樂": 1,
              "體力": -1,
              "社交": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 3,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "warmAccept",
              "reason": "這個選項是為 同學事件的回音 / fromSeatOrRecessOutgoing 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_classmate_event_echo",
              "variantId": "fromSeatOrRecessOutgoing",
              "mustMatchEventTitle": "同學事件的回音"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家朗很快答應，像把你放進他的「我哋」裡。"
          },
          {
            "id": "w6_classmate_event_echo_fromSeatOrRecessOutgoing_ask_what_he_noticed",
            "text": "說自己有時想留課室",
            "playerLine": "有時我想靜一陣，唔係唔想同你玩。",
            "attitudeId": "askEcho",
            "personalityDelta": {
              "helpSeeking": 1
            },
            "memoryAdd": [
              "w6_classmate_event_echo_fromSeatOrRecessOutgoing_ask_what_he_noticed"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗有點意外，但聽懂了你不是討厭他。"
            },
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "askEcho",
              "reason": "這個選項是為 同學事件的回音 / fromSeatOrRecessOutgoing 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_classmate_event_echo",
              "variantId": "fromSeatOrRecessOutgoing",
              "mustMatchEventTitle": "同學事件的回音"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家朗有點意外，但聽懂了你不是討厭他。"
          },
          {
            "id": "w6_classmate_event_echo_fromSeatOrRecessOutgoing_say_maybe_not_every_time",
            "text": "問他上次去了哪裡",
            "playerLine": "但你上次去操場做啲咩？",
            "attitudeId": "softBoundary",
            "personalityDelta": {
              "boundary": 2
            },
            "memoryAdd": [
              "w6_classmate_event_echo_fromSeatOrRecessOutgoing_say_maybe_not_every_time"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗立刻講起操場人很多，像把你沒去的部分補回來。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "softBoundary",
              "reason": "這個選項是為 同學事件的回音 / fromSeatOrRecessOutgoing 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_classmate_event_echo",
              "variantId": "fromSeatOrRecessOutgoing",
              "mustMatchEventTitle": "同學事件的回音"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "家朗立刻講起操場人很多，像把你沒去的部分補回來。"
          },
          {
            "id": "w6_classmate_event_echo_fromSeatOrRecessOutgoing_smile_no_promise",
            "text": "只是笑一笑",
            "playerLine": "你笑了一下，沒有立刻答應。",
            "attitudeId": "noncommittal",
            "personalityDelta": {
              "avoidant": 1
            },
            "memoryAdd": [
              "w6_classmate_event_echo_fromSeatOrRecessOutgoing_smile_no_promise"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "家朗沒有逼你，但還是很想下次再問。"
            },
            "statusDelta": {
              "體力": 1,
              "社交": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "外向邀請型",
              "attitudeReadAs": "noncommittal",
              "reason": "這個選項是為 同學事件的回音 / fromSeatOrRecessOutgoing 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_classmate_event_echo",
              "variantId": "fromSeatOrRecessOutgoing",
              "mustMatchEventTitle": "同學事件的回音"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "家朗沒有逼你，但還是很想下次再問。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "原來你都有留意嗰卡通！ 下次可以嚟我屋企一齊睇。",
        "npcPointProfile": {
          "variantKey": "fromSeatOrRecessOutgoing",
          "npcIdentity": "同學",
          "npcPersonality": "外向邀請型",
          "npcDisplayName": "fromSeatOrRecessOutgoing"
        },
        "variantId": "fromSeatOrRecessOutgoing",
        "variantType": "echo",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_outgoing_inviter",
        "reactionProfileId": "identity_same_age_peer__pers_outgoing_inviter"
      },
      {
        "requiredMemoryAny": [
          "lent_eraser_with_reminder",
          "asked_reason_before_lending_eraser"
        ],
        "openingDialogue": [
          {
            "speaker": "穎心",
            "text": "上次你借我擦膠……我放返喺你枱面。"
          },
          {
            "speaker": "穎心",
            "text": "我冇擦到好大力，應該冇爛。"
          }
        ],
        "playerChoices": [
          {
            "id": "w6_classmate_event_echo_fromEraserQuiet_thank_return_eraser",
            "text": "細聲說多謝",
            "playerLine": "多謝你還返俾我。",
            "attitudeId": "acknowledgeReturn",
            "personalityDelta": {
              "gentle": 1
            },
            "memoryAdd": [
              "w6_classmate_event_echo_fromEraserQuiet_thank_return_eraser"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "穎心點點頭，像完成了一件她一直記住的小事。"
            },
            "statusDelta": {},
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 3,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "acknowledgeReturn",
              "reason": "這個選項是為 同學事件的回音 / fromEraserQuiet 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_classmate_event_echo",
              "variantId": "fromEraserQuiet",
              "mustMatchEventTitle": "同學事件的回音"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "穎心點點頭，像完成了一件她一直記住的小事。"
          },
          {
            "id": "w6_classmate_event_echo_fromEraserQuiet_say_next_time_ask_too",
            "text": "說下次可以問",
            "playerLine": "下次你可以問我。",
            "attitudeId": "openDoor",
            "personalityDelta": {
              "supportive": 1,
              "gentle": 1
            },
            "memoryAdd": [
              "w6_classmate_event_echo_fromEraserQuiet_say_next_time_ask_too"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她看了你一下，很輕地說：「好。」"
            },
            "statusDelta": {
              "理智值": 1,
              "體力": -1,
              "社交": 2
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "openDoor",
              "reason": "這個選項是為 同學事件的回音 / fromEraserQuiet 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_classmate_event_echo",
              "variantId": "fromEraserQuiet",
              "mustMatchEventTitle": "同學事件的回音"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "她看了你一下，很輕地說：「好。」"
          },
          {
            "id": "w6_classmate_event_echo_fromEraserQuiet_check_if_used_ok",
            "text": "問有沒有擦乾淨",
            "playerLine": "你個字擦唔擦得乾淨？",
            "attitudeId": "gentleFollowup",
            "personalityDelta": {
              "considerate": 1
            },
            "memoryAdd": [
              "w6_classmate_event_echo_fromEraserQuiet_check_if_used_ok"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "她把簿角露出一點，讓你看那個已經改好的字。"
            },
            "statusDelta": {
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "gentleFollowup",
              "reason": "這個選項是為 同學事件的回音 / fromEraserQuiet 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_classmate_event_echo",
              "variantId": "fromEraserQuiet",
              "mustMatchEventTitle": "同學事件的回音"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "她把簿角露出一點，讓你看那個已經改好的字。"
          },
          {
            "id": "w6_classmate_event_echo_fromEraserQuiet_put_eraser_away",
            "text": "收好擦膠",
            "playerLine": "你把擦膠放回筆袋，只點頭。",
            "attitudeId": "quietBoundary",
            "personalityDelta": {
              "boundary": 1,
              "observer": 1
            },
            "memoryAdd": [
              "w6_classmate_event_echo_fromEraserQuiet_put_eraser_away"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "對話很短，但沒有冷掉。"
            },
            "statusDelta": {},
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "安靜觀察型",
              "attitudeReadAs": "quietBoundary",
              "reason": "這個選項是為 同學事件的回音 / fromEraserQuiet 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_classmate_event_echo",
              "variantId": "fromEraserQuiet",
              "mustMatchEventTitle": "同學事件的回音"
            },
            "skillExpDelta": {},
            "playerLineType": "action",
            "resultText": "對話很短，但沒有冷掉。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "上次你借我擦膠……我放返喺你枱面。 我冇擦到好大力，應該冇爛。",
        "npcPointProfile": {
          "variantKey": "fromEraserQuiet",
          "npcIdentity": "同學",
          "npcPersonality": "安靜觀察型",
          "npcDisplayName": "fromEraserQuiet"
        },
        "variantId": "fromEraserQuiet",
        "variantType": "echo",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_quiet_observer",
        "reactionProfileId": "identity_same_age_peer__pers_quiet_observer"
      },
      {
        "requiredMemoryAny": [
          "shared_fear_about_first_chinese_dictation",
          "self_practiced_english_spelling",
          "admitted_underprepared_after_first_test",
          "said_tried_best_after_test"
        ],
        "openingDialogue": [
          {
            "speaker": "梓軒",
            "text": "你今次幾多分？"
          },
          {
            "speaker": "梓軒",
            "text": "我唔係笑你，我係想知難唔難。"
          }
        ],
        "playerChoices": [
          {
            "id": "w6_classmate_event_echo_fromTestCompetitive_dont_share_score",
            "text": "不直接講分數",
            "playerLine": "我可以講邊啲字錯咗，但唔想講分數。",
            "attitudeId": "scoreBoundary",
            "personalityDelta": {
              "boundary": 2
            },
            "memoryAdd": [
              "w6_classmate_event_echo_fromTestCompetitive_dont_share_score"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒有點不習慣，但這次沒有逼你。"
            },
            "statusDelta": {
              "理智值": 1,
              "社交": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "scoreBoundary",
              "reason": "這個選項是為 同學事件的回音 / fromTestCompetitive 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_classmate_event_echo",
              "variantId": "fromTestCompetitive",
              "mustMatchEventTitle": "同學事件的回音"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "梓軒有點不習慣，但這次沒有逼你。"
          },
          {
            "id": "w6_classmate_event_echo_fromTestCompetitive_ask_hard_question",
            "text": "問他哪裡錯",
            "playerLine": "咁你錯邊個字？",
            "attitudeId": "studyCompare",
            "personalityDelta": {
              "strategic": 1
            },
            "memoryAdd": [
              "w6_classmate_event_echo_fromTestCompetitive_ask_hard_question"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "他本來想藏起來，最後還是指了其中一個。"
            },
            "statusDelta": {
              "理智值": -1,
              "學業": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "respect",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "studyCompare",
              "reason": "這個選項是為 同學事件的回音 / fromTestCompetitive 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_classmate_event_echo",
              "variantId": "fromTestCompetitive",
              "mustMatchEventTitle": "同學事件的回音"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "他本來想藏起來，最後還是指了其中一個。"
          },
          {
            "id": "w6_classmate_event_echo_fromTestCompetitive_share_score_lightly",
            "text": "說自己也覺得難",
            "playerLine": "我都覺得難，尤其係後面幾個詞。",
            "attitudeId": "calmShare",
            "personalityDelta": {
              "selfAware": 1
            },
            "memoryAdd": [
              "w6_classmate_event_echo_fromTestCompetitive_share_score_lightly"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "梓軒表情鬆了一點，像終於不是只有他緊張。"
            },
            "statusDelta": {
              "理智值": -1,
              "社交": 1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "calmShare",
              "reason": "這個選項是為 同學事件的回音 / fromTestCompetitive 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_classmate_event_echo",
              "variantId": "fromTestCompetitive",
              "mustMatchEventTitle": "同學事件的回音"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "梓軒表情鬆了一點，像終於不是只有他緊張。"
          },
          {
            "id": "w6_classmate_event_echo_fromTestCompetitive_compete_next_time",
            "text": "交換講分數",
            "playerLine": "我講咗，你都要講。",
            "attitudeId": "friendlyChallenge",
            "personalityDelta": {
              "competitive": 2
            },
            "memoryAdd": [
              "w6_classmate_event_echo_fromTestCompetitive_compete_next_time"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "你們像在比賽，但講完之後，反而沒那麼怕。"
            },
            "statusDelta": {
              "理智值": -2,
              "社交": 1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "respect",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "競爭同學型",
              "attitudeReadAs": "friendlyChallenge",
              "reason": "這個選項是為 同學事件的回音 / fromTestCompetitive 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_classmate_event_echo",
              "variantId": "fromTestCompetitive",
              "mustMatchEventTitle": "同學事件的回音"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "你們像在比賽，但講完之後，反而沒那麼怕。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "你今次幾多分？ 我唔係笑你，我係想知難唔難。",
        "npcPointProfile": {
          "variantKey": "fromTestCompetitive",
          "npcIdentity": "同學",
          "npcPersonality": "競爭同學型",
          "npcDisplayName": "fromTestCompetitive"
        },
        "variantId": "fromTestCompetitive",
        "variantType": "echo",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_competitive_peer",
        "reactionProfileId": "identity_same_age_peer__pers_competitive_peer"
      },
      {
        "requiredMemoryAny": [
          "first_recess_explored_corridor",
          "first_day_observed_classroom_before_socialising"
        ],
        "openingDialogue": [
          {
            "speaker": "柏宇",
            "text": "我發現走廊盡頭真係有啲嘢。"
          },
          {
            "speaker": "柏宇",
            "text": "唔係鬼呀，係有個好舊嘅告示牌，寫到一半甩咗。"
          }
        ],
        "playerChoices": [
          {
            "id": "w6_classmate_event_echo_fromCorridorCurious_ask_what_found",
            "text": "問寫甚麼",
            "playerLine": "寫咩呀？你睇到未？",
            "attitudeId": "curiousAsk",
            "personalityDelta": {
              "curious": 2
            },
            "memoryAdd": [
              "w6_classmate_event_echo_fromCorridorCurious_ask_what_found"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇立刻靠近一點，像終於等到你問。"
            },
            "statusDelta": {
              "快樂": 1,
              "理智值": -1,
              "體力": -1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 3,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "搞事好奇型",
              "attitudeReadAs": "curiousAsk",
              "reason": "這個選項是為 同學事件的回音 / fromCorridorCurious 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_classmate_event_echo",
              "variantId": "fromCorridorCurious",
              "mustMatchEventTitle": "同學事件的回音"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "柏宇立刻靠近一點，像終於等到你問。"
          },
          {
            "id": "w6_classmate_event_echo_fromCorridorCurious_say_after_teacher_knows",
            "text": "提醒不要亂走",
            "playerLine": "你唔好自己走太遠，會俾老師話。",
            "attitudeId": "boundedExplore",
            "personalityDelta": {
              "boundary": 1,
              "cautious": 1
            },
            "memoryAdd": [
              "w6_classmate_event_echo_fromCorridorCurious_say_after_teacher_knows"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇扁扁嘴，但也沒有說你錯。"
            },
            "statusDelta": {
              "理智值": 1,
              "社交": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "搞事好奇型",
              "attitudeReadAs": "boundedExplore",
              "reason": "這個選項是為 同學事件的回音 / fromCorridorCurious 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_classmate_event_echo",
              "variantId": "fromCorridorCurious",
              "mustMatchEventTitle": "同學事件的回音"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "柏宇扁扁嘴，但也沒有說你錯。"
          },
          {
            "id": "w6_classmate_event_echo_fromCorridorCurious_connect_to_old_cabinet",
            "text": "說下次一起看",
            "playerLine": "下次如果係小息，我陪你望一眼。",
            "attitudeId": "patternNotice",
            "personalityDelta": {
              "observer": 1,
              "curious": 1
            },
            "memoryAdd": [
              "w6_classmate_event_echo_fromCorridorCurious_connect_to_old_cabinet"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇眼睛亮起來，但你先講明只是望一眼。"
            },
            "statusDelta": {
              "理智值": 2,
              "體力": -1,
              "自信": 1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": 2,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "搞事好奇型",
              "attitudeReadAs": "patternNotice",
              "reason": "這個選項是為 同學事件的回音 / fromCorridorCurious 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_classmate_event_echo",
              "variantId": "fromCorridorCurious",
              "mustMatchEventTitle": "同學事件的回音"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "柏宇眼睛亮起來，但你先講明只是望一眼。"
          },
          {
            "id": "w6_classmate_event_echo_fromCorridorCurious_decline_corridor_mystery",
            "text": "不接探索",
            "playerLine": "我而家唔想知住。",
            "attitudeId": "clearBoundary",
            "personalityDelta": {
              "boundary": 1
            },
            "memoryAdd": [
              "w6_classmate_event_echo_fromCorridorCurious_decline_corridor_mystery"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "柏宇失望了一秒，又轉去找下一個願意聽的人。"
            },
            "statusDelta": {
              "體力": 1,
              "社交": -1
            },
            "relationshipDelta": [
              {
                "targetScope": "currentSpeaker",
                "targetIdentityTypeId": "identity_same_age_peer",
                "dimension": "closeness",
                "amount": -1,
                "legacyKey": "同學關係"
              }
            ],
            "npcPointInterpretation": {
              "npcIdentity": "同學",
              "npcPersonality": "搞事好奇型",
              "attitudeReadAs": "clearBoundary",
              "reason": "這個選項是為 同學事件的回音 / fromCorridorCurious 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_classmate_event_echo",
              "variantId": "fromCorridorCurious",
              "mustMatchEventTitle": "同學事件的回音"
            },
            "skillExpDelta": {},
            "playerLineType": "speech",
            "resultText": "柏宇失望了一秒，又轉去找下一個願意聽的人。"
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "dialogueTriggerPreview": "我發現走廊盡頭真係有啲嘢。 唔係鬼呀，係有個好舊嘅告示牌，寫到一半甩咗。",
        "npcPointProfile": {
          "variantKey": "fromCorridorCurious",
          "npcIdentity": "同學",
          "npcPersonality": "搞事好奇型",
          "npcDisplayName": "fromCorridorCurious"
        },
        "variantId": "fromCorridorCurious",
        "variantType": "echo",
        "identityTypeId": "identity_same_age_peer",
        "personalityId": "pers_curious_troublemaker",
        "reactionProfileId": "identity_same_age_peer__pers_curious_troublemaker"
      }
    ],
    "schemaVersion": "opening_event_pool_v5_1_balanced_event_specific_choices",
    "eventScheduling": {
      "baseWeight": 70,
      "weekRange": [
        6,
        6
      ],
      "conditions": [
        "skip_if_no_classmate_interaction_memory"
      ],
      "exclusiveGroup": null,
      "onceOnly": true,
      "cooldownWeeks": 999,
      "prerequisiteMemory": [
        "any:classmate_interaction_memory_from_w1_to_w5"
      ],
      "sourceChannel": "classroom",
      "involvementRole": "direct_actor"
    },
    "eventChoiceDesignRule": "playerChoices must be authored for this exact event+variant; personalityId may alter tone and point interpretation but must not inject a generic personality choice set.",
    "fallbackChoices": [
      {
        "id": "w6_classmate_event_echo_fromSeatOrRecessOutgoing_fallback_ask",
        "text": "問清楚這件事和自己現在要做甚麼。",
        "playerLine": "問清楚這件事和自己現在要做甚麼。",
        "attitudeId": "askForClarification",
        "personalityDelta": {
          "helpSeeking": 1
        },
        "memoryAdd": [
          "w6_classmate_event_echo_fromSeatOrRecessOutgoing_fallback_ask"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你用提問避免誤會，這是只屬於當前事件的備用選項。"
        },
        "statusDelta": {
          "理智值": 1,
          "體力": -1,
          "自信": 1
        },
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "同學",
          "npcPersonality": "外向邀請型",
          "attitudeReadAs": "askForClarification",
          "reason": "這個選項是為 同學事件的回音 / fromSeatOrRecessOutgoing 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w6_classmate_event_echo",
          "variantId": "fromSeatOrRecessOutgoing",
          "mustMatchEventTitle": "同學事件的回音"
        },
        "skillExpDelta": {}
      },
      {
        "id": "w6_classmate_event_echo_fromSeatOrRecessOutgoing_fallback_observe",
        "text": "先觀察這個情境，不立刻答應或拒絕。",
        "playerLine": "先觀察這個情境，不立刻答應或拒絕。",
        "attitudeId": "observeFirst",
        "personalityDelta": {
          "observer": 1
        },
        "memoryAdd": [
          "w6_classmate_event_echo_fromSeatOrRecessOutgoing_fallback_observe"
        ],
        "followUps": [],
        "resultDialogue": {
          "speaker": "旁白",
          "text": "你暫時保留行動，讓自己多一點時間。"
        },
        "statusDelta": {},
        "relationshipDelta": [],
        "npcPointInterpretation": {
          "npcIdentity": "同學",
          "npcPersonality": "外向邀請型",
          "attitudeReadAs": "observeFirst",
          "reason": "這個選項是為 同學事件的回音 / fromSeatOrRecessOutgoing 這個變體專門寫的，NPC 會按自己的身份和性格解讀玩家的具體行為。"
        },
        "choiceSource": "authored_event_specific",
        "contextLock": {
          "eventId": "w6_classmate_event_echo",
          "variantId": "fromSeatOrRecessOutgoing",
          "mustMatchEventTitle": "同學事件的回音"
        },
        "skillExpDelta": {}
      }
    ]
  },
  {
    "id": "w6_life_fragment_selector",
    "weekPool": "W6_six_week_node",
    "title": "六週人生片段候選事件",
    "sceneType": "storyScene_selector",
    "coreSituation": "這不是普通事件，只從已發生、有 authored storyScene 的事件中挑一條重播完整小場景。若無合適事件，顯示無回顧。",
    "followUpHooks": [
      "next_six_week_arc_start"
    ],
    "choiceMode": "event_specific_variant_choices_only",
    "pointDesign": {
      "version": "target_aware_integer_delta_v5_1_balanced",
      "mainStatusKeys": [
        "快樂",
        "理智值",
        "體力",
        "學業",
        "社交",
        "創意",
        "家庭關係",
        "自信"
      ],
      "skillKeys": [
        "繪畫",
        "鋼琴",
        "朗誦",
        "游泳",
        "足球",
        "編程",
        "閱讀",
        "班務服務"
      ],
      "note": "分數由玩家 attitudeId、舊 effects、事件題材，以及當前 NPC 身份 / 性格共同決定；同一個選項在不同 NPC 面前可以有不同結果。",
      "choiceTextRule": "choice.text is player-facing and must describe a concrete action or spoken line that answers this event dialogue; do not show abstract attitude labels.",
      "noCrossEventGenericChoiceRule": "The same choice.text should not be reused across unrelated event ids.",
      "statusBalanceRule": "每個 variant 通常只有 1–2 個選項會推進核心狀態；其餘選項偏向保留、錯過、休息、觀察或付出代價。statusDelta 是方向，不是每次點擊獎勵。",
      "skillSemantics": "skillExpDelta 是技能經驗值，不是技能等級。",
      "previewRule": "dialogueTriggerPreview is generated from openingDialogue and should not be hand-authored."
    },
    "variants": [
      {
        "variantId": "lifeFragmentSelector",
        "variantType": "selector",
        "identityTypeId": "identity_system_selector",
        "personalityId": "pers_system_selector",
        "reactionProfileId": "identity_system_selector__pers_system_selector",
        "selectorConfig": {
          "sourceEventCandidates": [
            {
              "memory": "first_day_initiated_name_exchange",
              "storySceneId": "story_seat_neighbor_first_day",
              "priority": 8
            },
            {
              "memory": "handbook_showed_immediately",
              "storySceneId": "story_handbook_first_signature",
              "priority": 5
            },
            {
              "memory": "forgot_handbook_signature_first_time",
              "storySceneId": "story_handbook_forgot_followup",
              "priority": 7
            },
            {
              "memory": "planned_copy_words_for_first_chinese_dictation",
              "storySceneId": "story_first_dictation_preparation",
              "priority": 7
            },
            {
              "memory": "admitted_underprepared_after_first_test",
              "storySceneId": "story_first_test_result",
              "priority": 9
            },
            {
              "memory": "volunteered_book_distribution",
              "storySceneId": "story_book_helper",
              "priority": 6
            },
            {
              "memory": "reminded_friend_to_finish_homework_without_covering",
              "storySceneId": "story_homework_collection_friend",
              "priority": 8
            },
            {
              "memory": "explained_own_artwork",
              "storySceneId": "story_artwork_noticed",
              "priority": 6
            },
            {
              "memory": "supported_peer_recitation_practice",
              "storySceneId": "story_recitation_support",
              "priority": 7
            }
          ],
          "selectionRule": "filter by occurred memory && authored storyScene exists; pick highest priority, tie-break by emotionalWeight then mostRecent",
          "fallbackDialogue": [
            {
              "speaker": "旁白",
              "text": "這 6 週沒有可回顧的人生片段。日子不是沒有發生過，只是還沒有一件事清楚到值得被你停下來重看。"
            }
          ]
        },
        "playerChoices": [
          {
            "id": "w6_life_fragment_selector_lifeFragmentSelector_replay_authored_scene",
            "text": "回顧那段小片段。",
            "playerLine": "你停下來，讓那一幕重新出現。",
            "playerLineType": "action",
            "attitudeId": "reviewMemory",
            "personalityDelta": {},
            "memoryAdd": [
              "w6_life_fragment_reviewed"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "畫面不是總結分數，而是一個具體瞬間：一個座位、一句提醒、一張被推回來的擦膠，或者一次很慢的點頭。"
            },
            "resultText": "畫面不是總結分數，而是一個具體瞬間：一個座位、一句提醒、一張被推回來的擦膠，或者一次很慢的點頭。",
            "statusDelta": {},
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "identity_system_selector",
              "npcPersonality": "pers_system_selector",
              "attitudeReadAs": "systemReplay",
              "reason": "這是 storyScene selector，不是普通資源事件；不應給可刷核心數值。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_life_fragment_selector",
              "variantId": "lifeFragmentSelector",
              "mustMatchEventTitle": "六週人生片段候選事件"
            },
            "systemFlags": {
              "requestStorySceneReplay": true,
              "replaySource": "authored_story_scene_candidate"
            },
            "skillExpDelta": {}
          },
          {
            "id": "w6_life_fragment_selector_lifeFragmentSelector_skip_replay",
            "text": "暫時不回顧。",
            "playerLine": "你把那段記憶先收起來。",
            "playerLineType": "action",
            "attitudeId": "skipReplay",
            "personalityDelta": {},
            "memoryAdd": [
              "w6_life_fragment_skipped"
            ],
            "followUps": [],
            "resultDialogue": {
              "speaker": "旁白",
              "text": "六週還是六週，只是你今日不想把它拿出來看。"
            },
            "resultText": "六週還是六週，只是你今日不想把它拿出來看。",
            "statusDelta": {
              "體力": -1
            },
            "relationshipDelta": [],
            "npcPointInterpretation": {
              "npcIdentity": "identity_system_selector",
              "npcPersonality": "pers_system_selector",
              "attitudeReadAs": "systemSkip",
              "reason": "跳過回顧只記錄系統旗標，不改核心資源。"
            },
            "choiceSource": "authored_event_specific",
            "contextLock": {
              "eventId": "w6_life_fragment_selector",
              "variantId": "lifeFragmentSelector",
              "mustMatchEventTitle": "六週人生片段候選事件"
            },
            "systemFlags": {
              "skipSelectedStorySceneReplay": true
            },
            "skillExpDelta": {}
          }
        ],
        "choiceMode": "eventSpecificChoices",
        "choiceAlignmentNote": "Choices are authored for this exact event + variant. personalityId affects wording, interpretation and point reaction only; it must not inject a cross-event generic choice bank.",
        "npcPointProfile": {
          "variantKey": "lifeFragmentSelector",
          "npcIdentity": "未知身份",
          "npcPersonality": "未知人格",
          "npcDisplayName": "lifeFragmentSelector"
        }
      }
    ],
    "schemaVersion": "opening_event_pool_v5_1_balanced_event_specific_choices",
    "eventScheduling": {
      "baseWeight": 70,
      "weekRange": [
        6,
        6
      ],
      "conditions": [
        "can_fallback_to_no_fragment_dialogue"
      ],
      "exclusiveGroup": null,
      "onceOnly": true,
      "cooldownWeeks": 999,
      "prerequisiteMemory": [
        "any:authored_story_scene_candidate_memory"
      ],
      "sourceChannel": "system_replay_selector",
      "involvementRole": "replay_selector"
    },
    "eventChoiceDesignRule": "playerChoices must be authored for this exact event+variant; personalityId may alter tone and point interpretation but must not inject a generic personality choice set.",
    "fallbackChoices": []
  }
];
