// data/npcReactionRules.js
// NPC 反應規則：同一個態度，唔同 NPC 會有唔同反應，唔使逐個 message 寫死
//
// rule schema:
// {
//   characterId,
//   npcLikesAttitudes: [attitudeId],      // 呢啲態度會攞到額外正面反應
//   npcDislikesAttitudes: [attitudeId],   // 呢啲態度會攞到額外負面反應
//   npcRespectsBoundaries: bool,          // 尊重界線 → 拒絕類態度唔會扣咁多，甚至加尊重
//   npcSensitiveToSilence: bool,          // 對沉默／逃避類態度特別敏感（誤會值上升快啲）
//   npcValuesHonesty: bool,               // 重視誠實 → honestTired 會有額外正面反應
//   npcValuesCuriosity: bool,             // 重視好奇心 → observeFirst / takeRisk 有額外正面反應
//   npcValuesReliability: bool            // 重視可靠 → acceptWarmly / followAdult 有額外正面反應，逃避類扣多啲
// }

export const npcReactionRules = [
  {
    characterId: "char_mom",
    npcLikesAttitudes: ["honestTired", "askForHelp"],
    npcDislikesAttitudes: ["staySilent", "changeTopic"],
    npcRespectsBoundaries: true,
    npcSensitiveToSilence: true,
    npcValuesHonesty: true,
    npcValuesCuriosity: false,
    npcValuesReliability: true
  },
  {
    characterId: "char_dad",
    npcLikesAttitudes: ["insistSelf", "staySilent"],
    npcDislikesAttitudes: [],
    npcRespectsBoundaries: true,
    npcSensitiveToSilence: false,
    npcValuesHonesty: false,
    npcValuesCuriosity: false,
    npcValuesReliability: true
  },
  {
    characterId: "char_classmate",
    npcLikesAttitudes: ["acceptWarmly", "jokeAround"],
    npcDislikesAttitudes: ["staySilent", "changeTopic"],
    npcRespectsBoundaries: false,
    npcSensitiveToSilence: true,
    npcValuesHonesty: false,
    npcValuesCuriosity: false,
    npcValuesReliability: false
  },
  {
    characterId: "char_teacher",
    npcLikesAttitudes: ["honestTired", "askForHelp", "insistSelf"],
    npcDislikesAttitudes: ["avoidConflict"],
    npcRespectsBoundaries: true,
    npcSensitiveToSilence: false,
    npcValuesHonesty: true,
    npcValuesCuriosity: false,
    npcValuesReliability: true
  },
  {
    characterId: "char_tutor",
    npcLikesAttitudes: ["acceptWarmly", "followAdult"],
    npcDislikesAttitudes: ["refuseDirectly"],
    npcRespectsBoundaries: false,
    npcSensitiveToSilence: false,
    npcValuesHonesty: false,
    npcValuesCuriosity: false,
    npcValuesReliability: true
  },
  {
    characterId: "char_cha_chaan_teng",
    npcLikesAttitudes: ["acceptWarmly", "jokeAround"],
    npcDislikesAttitudes: [],
    npcRespectsBoundaries: true,
    npcSensitiveToSilence: false,
    npcValuesHonesty: false,
    npcValuesCuriosity: false,
    npcValuesReliability: false
  },
  {
    characterId: "char_mystery_neighbor",
    npcLikesAttitudes: ["observeFirst", "askForHelp", "takeRisk"],
    npcDislikesAttitudes: ["acceptReluctantly"],
    npcRespectsBoundaries: true,
    npcSensitiveToSilence: false,
    npcValuesHonesty: false,
    npcValuesCuriosity: true,
    npcValuesReliability: false
  },
  {
    characterId: "char_best_friend",
    npcLikesAttitudes: ["honestTired", "askForHelp"],
    npcDislikesAttitudes: ["staySilent", "delayReply"],
    npcRespectsBoundaries: true,
    npcSensitiveToSilence: true,
    npcValuesHonesty: true,
    npcValuesCuriosity: false,
    npcValuesReliability: false
  }
];

export function getNpcReactionRule(characterId) {
  return npcReactionRules.find(r => r.characterId === characterId);
}
