// data/npcReactionRules.js
// 舊版：逐個 characterId 寫死佢鍾意/唔鍾意咩態度。
// 新版：唔再睇 characterId，而係搵返呢個角色生成時攞到嘅 reactionProfileId（嚟自佢嘅 personality），
// 再喺 reactionProfiles.js 度攞返對應嘅反應規則。呢樣令 engine.js 嘅 applyNpcReactionRules() 完全唔使改，
// 因為呢度攞到嘅物件形狀（npcLikesAttitudes、npcRespectsBoundaries……）同舊版一樣。

import { state } from "../js/state.js";
import { getCharacterById } from "./characters.js";
import { getReactionProfileById } from "./reactionProfiles.js";

export function getNpcReactionRule(characterId, s = state) {
  const character = getCharacterById(characterId, s);
  if (!character || !character.reactionProfileId) return null;
  return getReactionProfileById(character.reactionProfileId) || null;
}
