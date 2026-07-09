// data/seniorStudentContinuity.js
// Normalize senior_student authored variants so W1/W5 use the same persistent personas.

const FRIENDLY_ID = "senior_friendly_girl_zhiyau";
const STRICT_ID = "senior_strict_prefect_junlong";

function currentSpeakerDelta(dimension, amount) {
  return [{
    targetScope: "currentSpeaker",
    targetIdentityTypeId: "identity_senior_student",
    dimension,
    amount,
    legacyKey: "高年級學生關係"
  }];
}

function seniorChoice({ id, text, playerLine, playerLineType, resultText, statusDelta, relationshipDelta, memoryAdd, unlockCharacter }) {
  return {
    id,
    text,
    playerLine,
    playerLineType: playerLineType || "speech",
    attitudeId: "seniorStudentInteraction",
    personalityDelta: {},
    memoryAdd,
    unlockCharacter,
    followUps: [],
    resultDialogue: { speaker: "旁白", text: resultText },
    resultText,
    statusDelta,
    relationshipDelta,
    npcPointInterpretation: {
      npcIdentity: "高年級學生",
      npcPersonality: "senior_student",
      attitudeReadAs: "event_specific",
      reason: "這個選項專屬高年級學生變體，relationshipDelta targetScope=currentSpeaker 會指向該 senior persona。"
    },
    choiceSource: "authored_event_specific",
    skillExpDelta: {}
  };
}

function patchW1Dismissal(event) {
  if (!event || event.id !== "w1_dismissal_line_confusion") return;
  event.eventScheduling = {
    ...(event.eventScheduling || {}),
    weekRange: [1, 1],
    sourceChannel: "seniorStudentHelp",
    involvementRole: "mainParticipant"
  };

  const friendly = {
    npcIdHint: FRIENDLY_ID,
    npcNameFallback: "芷悠",
    displayNameUnknown: "高年級女生",
    displayNameKnown: "芷悠",
    openingDialogue: [
      { speaker: "芷悠", text: "你睇手冊封面，有班別㗎。我幫你睇吓？" },
      { speaker: "芷悠", text: "我以前小一都試過排錯隊，唔係大件事。" }
    ],
    choiceMode: "eventSpecificChoices",
    dialogueTriggerPreview: "你睇手冊封面，有班別㗎。我幫你睇吓？ 我以前小一都試過排錯隊，唔係大件事。",
    playerChoices: [
      seniorChoice({
        id: "w1_senior_friendly_helped_with_handbook",
        text: "把手冊遞給他",
        playerLine: "我搵唔到1A條隊。",
        resultText: "師兄／師姐幫你指了方向，還叫你跟住前面兩個同班同學。",
        statusDelta: { 理智值: 1 },
        relationshipDelta: currentSpeakerDelta("trust", 2),
        memoryAdd: ["w1_senior_friendly_helped_with_handbook"],
        unlockCharacter: FRIENDLY_ID
      }),
      seniorChoice({
        id: "w1_senior_friendly_taught_class_sign",
        text: "問他怎樣記",
        playerLine: "你點知排邊條㗎？",
        resultText: "他教你看班牌和老師的位置，像把一個小秘密告訴你。",
        statusDelta: { 理智值: 1, 自信: 1 },
        relationshipDelta: currentSpeakerDelta("trust", 2),
        memoryAdd: ["w1_senior_friendly_taught_class_sign"],
        unlockCharacter: FRIENDLY_ID
      }),
      seniorChoice({
        id: "w1_senior_friendly_confirmed_direction",
        text: "自己先指一指",
        playerLine: "係咪嗰邊呀？",
        resultText: "你沒有完全靠別人，也沒有自己亂撞。",
        statusDelta: { 自信: 1 },
        relationshipDelta: currentSpeakerDelta("trust", 1),
        memoryAdd: ["w1_senior_friendly_confirmed_direction"],
        unlockCharacter: FRIENDLY_ID
      }),
      seniorChoice({
        id: "w1_senior_friendly_followed_direction",
        text: "跟住他指的方向走",
        playerLine: "你點頭，抱緊書包走到隊伍尾。",
        playerLineType: "action",
        resultText: "你終於站進隊裡，放學走廊沒有剛才那麼可怕。",
        statusDelta: { 理智值: 2 },
        relationshipDelta: currentSpeakerDelta("trust", 1),
        memoryAdd: ["w1_senior_friendly_followed_direction"],
        unlockCharacter: FRIENDLY_ID
      })
    ],
    npcPointProfile: {
      variantKey: "friendlySeniorGirl",
      npcIdentity: "高年級學生",
      npcPersonality: "友善高年級學生",
      npcDisplayName: "高年級女生"
    },
    variantId: "friendlySeniorGirl",
    variantType: "npc",
    identityTypeId: "identity_senior_student",
    personalityId: "pers_friendly_senior",
    reactionProfileId: "identity_senior_student__pers_friendly_senior"
  };

  const strict = {
    npcIdHint: STRICT_ID,
    npcNameFallback: "俊朗",
    displayNameUnknown: "風紀男生",
    displayNameKnown: "俊朗",
    openingDialogue: [
      { speaker: "俊朗", text: "排隊要快，後面仲有人。" },
      { speaker: "俊朗", text: "你唔知就問，唔好企喺路中間。" }
    ],
    choiceMode: "eventSpecificChoices",
    dialogueTriggerPreview: "排隊要快，後面仲有人。 你唔知就問，唔好企喺路中間。",
    playerChoices: [
      seniorChoice({
        id: "w1_strict_prefect_asked_direction",
        text: "直接問位置",
        playerLine: "我係1A，應該去邊？",
        resultText: "風紀指得很快，你要小跑兩步才跟上他的指示。",
        statusDelta: { 理智值: -1, 自信: 1 },
        relationshipDelta: currentSpeakerDelta("trust", 1),
        memoryAdd: ["w1_strict_prefect_asked_direction"],
        unlockCharacter: STRICT_ID
      }),
      seniorChoice({
        id: "w1_strict_prefect_stepped_aside",
        text: "先讓路",
        playerLine: "你退到牆邊，讓後面的人先過。",
        playerLineType: "action",
        resultText: "風紀沒有再催你，但你仍然有點緊張。",
        statusDelta: { 理智值: 1 },
        relationshipDelta: [],
        memoryAdd: ["w1_strict_prefect_stepped_aside"],
        unlockCharacter: STRICT_ID
      }),
      seniorChoice({
        id: "w1_strict_prefect_followed_classmate",
        text: "找同班同學",
        playerLine: "你看見一個同班同學，趕快跟到他後面。",
        playerLineType: "action",
        resultText: "你跟上了隊伍，但心裡記住下次要早點看班牌。",
        statusDelta: { 理智值: 1, 社交: 1 },
        relationshipDelta: [],
        memoryAdd: ["w1_strict_prefect_followed_classmate"],
        unlockCharacter: STRICT_ID
      }),
      seniorChoice({
        id: "w1_strict_prefect_check_handbook",
        text: "小聲說不懂",
        playerLine: "我唔知呀……",
        resultText: "風紀皺了一下眉，但還是叫你看手冊封面。",
        statusDelta: { 理智值: -1 },
        relationshipDelta: currentSpeakerDelta("trust", 1),
        memoryAdd: ["w1_strict_prefect_check_handbook"],
        unlockCharacter: STRICT_ID
      })
    ],
    npcPointProfile: {
      variantKey: "strictPrefectBoy",
      npcIdentity: "高年級學生",
      npcPersonality: "嚴格風紀男生",
      npcDisplayName: "風紀男生"
    },
    variantId: "strictPrefectBoy",
    variantType: "npc",
    identityTypeId: "identity_senior_student",
    personalityId: "pers_strict_prefect",
    reactionProfileId: "identity_senior_student__pers_strict_prefect"
  };

  event.variants = [
    ...(event.variants || []).filter(v => !["seniorFriendly", "seniorPrefectStrict", "friendlySeniorGirl", "strictPrefectBoy"].includes(v.variantId)),
    friendly,
    strict
  ];
}

function patchW5FriendlySenior(event) {
  if (!event || event.id !== "w5_recitation_info_channels") return;
  event.eventScheduling = {
    ...(event.eventScheduling || {}),
    weekRange: [5, 5]
  };
  const variant = (event.variants || []).find(v => v.variantId === "seniorFriendly");
  if (!variant) return;
  variant.npcIdHint = FRIENDLY_ID;
  variant.npcNameFallback = "芷悠";
  variant.displayNameUnknown = "高年級女生";
  variant.displayNameKnown = "芷悠";
  variant.identityTypeId = "identity_senior_student";
  variant.personalityId = "pers_friendly_senior";
  variant.reactionProfileId = "identity_senior_student__pers_friendly_senior";
  variant.openingDialogue = [
    { speaker: "芷悠", text: "第一次上台會震，好正常，唔係得你一個會驚。" }
  ];
  variant.npcPointProfile = {
    ...(variant.npcPointProfile || {}),
    npcDisplayName: "高年級女生",
    npcPersonality: "友善高年級學生"
  };
  (variant.playerChoices || []).forEach(choice => {
    choice.relationshipDelta = (choice.relationshipDelta || []).map(delta => ({
      ...delta,
      targetScope: delta.targetScope || "currentSpeaker",
      targetIdentityTypeId: "identity_senior_student"
    }));
  });
  event.variants = [
    variant,
    ...(event.variants || []).filter(v => v !== variant)
  ];
}

export function applySeniorStudentContinuity(openingEvents) {
  openingEvents.forEach(event => {
    patchW1Dismissal(event);
    patchW5FriendlySenior(event);
  });
  return openingEvents;
}
