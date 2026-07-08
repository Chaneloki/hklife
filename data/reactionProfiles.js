// data/reactionProfiles.js
// 反應檔案：唔再將「呢個 NPC 鍾意咩態度」寫死喺 characterId 度（見舊版 npcReactionRules.js），
// 而係將反應邏輯抽做獨立嘅 reactionProfile，由每個 identityPersonality 帶一個 reactionProfileId 過去。
// 咁樣同一個 message choice，唔同 personality 嘅 NPC 就會有唔同反應，唔使逐條 message 改。
//
// reactionProfile schema:
// {
//   id, label,
//   attitudeModifiers: { attitudeId: number }           // 呢個態度整體嘅正／負傾向（俾 UI／未來擴展用）
//   relationshipEffectsByAttitude: { attitudeId: { dimension: amount } }  // 額外關係變化（疊加喺 base 之上）
//   stressResponseByAttitude: { attitudeId: number }    // 呢個態度會令玩家額外 +/- 幾多壓力
//   trustResponseByAttitude: { attitudeId: number }
//   misunderstandingResponseByAttitude: { attitudeId: number }
//   choiceUnlockBias: [attitudeId]                      // 呢個 profile 會令邊啲態度感覺更「自然」
//   followUpBias: number                                // 幾大機會觸發後續（0～1）
//   routeSeedBias: { seedId: number }                   // 對邊啲 routeSeed 有額外偏好
//
//   （向下相容欄位，俾 applyNpcReactionRules() 直接用，唔使改 engine.js）
//   npcLikesAttitudes, npcDislikesAttitudes, npcRespectsBoundaries, npcSensitiveToSilence,
//   npcValuesHonesty, npcValuesCuriosity, npcValuesReliability
// }

export const reactionProfiles = [
  {
    id: "reaction_warm_honesty",
    label: "溫暖重誠實",
    attitudeModifiers: { honestTired: 2, askForHelp: 2, refusePolitely: 1, staySilent: -2 },
    relationshipEffectsByAttitude: { honestTired: { trust: 2 }, askForHelp: { closeness: 1 } },
    stressResponseByAttitude: { honestTired: -1, staySilent: 1 },
    trustResponseByAttitude: { honestTired: 2, askForHelp: 1, staySilent: -2 },
    misunderstandingResponseByAttitude: { staySilent: 2, changeTopic: 2 },
    choiceUnlockBias: ["honestTired", "askForHelp"],
    followUpBias: 0.4,
    routeSeedBias: { dreamSeed: 1 },
    npcLikesAttitudes: ["honestTired", "askForHelp"],
    npcDislikesAttitudes: ["staySilent", "changeTopic"],
    npcRespectsBoundaries: true,
    npcSensitiveToSilence: true,
    npcValuesHonesty: true,
    npcValuesCuriosity: false,
    npcValuesReliability: true
  },
  {
    id: "reaction_strict_result",
    label: "嚴格重結果",
    attitudeModifiers: { followAdult: 2, insistSelf: 1, delayReply: -2, changeTopic: -2 },
    relationshipEffectsByAttitude: { followAdult: { respect: 1 }, insistSelf: { respect: 1 } },
    stressResponseByAttitude: { followAdult: 0, delayReply: 1 },
    trustResponseByAttitude: { followAdult: 2, delayReply: -2, changeTopic: -2 },
    misunderstandingResponseByAttitude: { delayReply: 1 },
    choiceUnlockBias: ["followAdult", "insistSelf"],
    followUpBias: 0.5,
    routeSeedBias: { academicSeed: 1 },
    npcLikesAttitudes: ["followAdult", "insistSelf", "honestTired"],
    npcDislikesAttitudes: ["delayReply", "changeTopic"],
    npcRespectsBoundaries: true,
    npcSensitiveToSilence: false,
    npcValuesHonesty: true,
    npcValuesCuriosity: false,
    npcValuesReliability: true
  },
  {
    id: "reaction_peer_fun",
    label: "同伴熱情型",
    attitudeModifiers: { acceptWarmly: 2, jokeAround: 2, refusePolitely: 0, staySilent: -1 },
    relationshipEffectsByAttitude: { acceptWarmly: { closeness: 2 }, jokeAround: { closeness: 1 } },
    stressResponseByAttitude: { acceptWarmly: -1 },
    trustResponseByAttitude: { acceptWarmly: 1 },
    misunderstandingResponseByAttitude: { staySilent: 2, changeTopic: 1 },
    choiceUnlockBias: ["acceptWarmly", "jokeAround"],
    followUpBias: 0.5,
    routeSeedBias: { friendshipSeed: 1 },
    npcLikesAttitudes: ["acceptWarmly", "jokeAround"],
    npcDislikesAttitudes: ["staySilent", "changeTopic"],
    npcRespectsBoundaries: false,
    npcSensitiveToSilence: true,
    npcValuesHonesty: false,
    npcValuesCuriosity: false,
    npcValuesReliability: false
  },
  {
    id: "reaction_peer_competitive",
    label: "同伴競爭型",
    attitudeModifiers: { insistSelf: 2, takeRisk: 2, acceptReluctantly: -1 },
    relationshipEffectsByAttitude: { insistSelf: { respect: 2 }, takeRisk: { respect: 1 } },
    stressResponseByAttitude: { takeRisk: 1 },
    trustResponseByAttitude: { insistSelf: 1 },
    misunderstandingResponseByAttitude: { acceptReluctantly: 1 },
    choiceUnlockBias: ["insistSelf", "takeRisk"],
    followUpBias: 0.5,
    routeSeedBias: { academicSeed: 1 },
    npcLikesAttitudes: ["insistSelf", "takeRisk", "refuseDirectly"],
    npcDislikesAttitudes: ["acceptReluctantly"],
    npcRespectsBoundaries: true,
    npcSensitiveToSilence: false,
    npcValuesHonesty: false,
    npcValuesCuriosity: false,
    npcValuesReliability: false
  },
  {
    id: "reaction_curiosity_based",
    label: "好奇探索型",
    attitudeModifiers: { observeFirst: 2, askForHelp: 1, takeRisk: 2, acceptReluctantly: -1 },
    relationshipEffectsByAttitude: { observeFirst: { respect: 1 }, takeRisk: { trust: 1 } },
    stressResponseByAttitude: {},
    trustResponseByAttitude: { observeFirst: 1, takeRisk: 1 },
    misunderstandingResponseByAttitude: {},
    choiceUnlockBias: ["observeFirst", "takeRisk"],
    followUpBias: 0.45,
    routeSeedBias: { explorationSeed: 1, streetSeed: 1 },
    npcLikesAttitudes: ["observeFirst", "askForHelp", "takeRisk"],
    npcDislikesAttitudes: ["acceptReluctantly"],
    npcRespectsBoundaries: true,
    npcSensitiveToSilence: false,
    npcValuesHonesty: false,
    npcValuesCuriosity: true,
    npcValuesReliability: false
  },
  {
    id: "reaction_boundary_respect",
    label: "尊重界線型",
    attitudeModifiers: { refusePolitely: 2, honestTired: 1, avoidConflict: 1 },
    relationshipEffectsByAttitude: { refusePolitely: { respect: 2 }, honestTired: { trust: 1 } },
    stressResponseByAttitude: { refusePolitely: -1 },
    trustResponseByAttitude: { refusePolitely: 1, honestTired: 1 },
    misunderstandingResponseByAttitude: {},
    choiceUnlockBias: ["refusePolitely", "honestTired"],
    followUpBias: 0.3,
    routeSeedBias: {},
    npcLikesAttitudes: ["refusePolitely", "honestTired", "insistSelf"],
    npcDislikesAttitudes: [],
    npcRespectsBoundaries: true,
    npcSensitiveToSilence: false,
    npcValuesHonesty: true,
    npcValuesCuriosity: false,
    npcValuesReliability: true
  },
  {
    id: "reaction_face_sensitive",
    label: "面子敏感型",
    attitudeModifiers: { refuseDirectly: -2, staySilent: -1, acceptWarmly: 1 },
    relationshipEffectsByAttitude: { refuseDirectly: { misunderstanding: 2 } },
    stressResponseByAttitude: { refuseDirectly: 1 },
    trustResponseByAttitude: { refuseDirectly: -1 },
    misunderstandingResponseByAttitude: { refuseDirectly: 2, staySilent: 2, avoidConflict: -1 },
    choiceUnlockBias: ["acceptWarmly", "followAdult"],
    followUpBias: 0.55,
    routeSeedBias: {},
    npcLikesAttitudes: ["acceptWarmly", "followAdult"],
    npcDislikesAttitudes: ["refuseDirectly", "staySilent"],
    npcRespectsBoundaries: false,
    npcSensitiveToSilence: true,
    npcValuesHonesty: false,
    npcValuesCuriosity: false,
    npcValuesReliability: true
  },
  {
    id: "reaction_practical_busy",
    label: "務實忙碌型",
    attitudeModifiers: { acceptWarmly: 1, delayReply: -1, jokeAround: -1 },
    relationshipEffectsByAttitude: { acceptWarmly: { trust: 1 } },
    stressResponseByAttitude: {},
    trustResponseByAttitude: { acceptWarmly: 1, delayReply: -1 },
    misunderstandingResponseByAttitude: {},
    choiceUnlockBias: ["acceptWarmly", "followAdult"],
    followUpBias: 0.25,
    routeSeedBias: {},
    npcLikesAttitudes: ["acceptWarmly", "followAdult"],
    npcDislikesAttitudes: ["delayReply"],
    npcRespectsBoundaries: true,
    npcSensitiveToSilence: false,
    npcValuesHonesty: false,
    npcValuesCuriosity: false,
    npcValuesReliability: true
  },
  {
    id: "reaction_encouraging_mentor",
    label: "鼓勵導師型",
    attitudeModifiers: { takeRisk: 2, honestTired: 1, acceptReluctantly: 0 },
    relationshipEffectsByAttitude: { takeRisk: { respect: 1 }, honestTired: { trust: 2 } },
    stressResponseByAttitude: { honestTired: -1 },
    trustResponseByAttitude: { honestTired: 2, takeRisk: 1 },
    misunderstandingResponseByAttitude: {},
    choiceUnlockBias: ["takeRisk", "honestTired"],
    followUpBias: 0.5,
    routeSeedBias: { creativeSeed: 1 },
    npcLikesAttitudes: ["takeRisk", "honestTired", "askForHelp"],
    npcDislikesAttitudes: [],
    npcRespectsBoundaries: true,
    npcSensitiveToSilence: false,
    npcValuesHonesty: true,
    npcValuesCuriosity: true,
    npcValuesReliability: false
  },
  {
    id: "reaction_pastoral_care",
    label: "關顧型",
    attitudeModifiers: { honestTired: 2, askForHelp: 2, staySilent: -1 },
    relationshipEffectsByAttitude: { honestTired: { trust: 2, closeness: 1 }, askForHelp: { trust: 1 } },
    stressResponseByAttitude: { honestTired: -2, askForHelp: -1 },
    trustResponseByAttitude: { honestTired: 2, askForHelp: 2 },
    misunderstandingResponseByAttitude: { staySilent: 1 },
    choiceUnlockBias: ["honestTired", "askForHelp"],
    followUpBias: 0.45,
    routeSeedBias: {},
    npcLikesAttitudes: ["honestTired", "askForHelp"],
    npcDislikesAttitudes: ["staySilent"],
    npcRespectsBoundaries: true,
    npcSensitiveToSilence: true,
    npcValuesHonesty: true,
    npcValuesCuriosity: false,
    npcValuesReliability: false
  }
];

export function getReactionProfileById(id) {
  return reactionProfiles.find(r => r.id === id);
}
