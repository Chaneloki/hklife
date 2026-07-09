// data/activeMessages.js
// NPC 主動訊息只讀 authored content。缺內容時只讓 engine dev warning，正式 UI 不生成 fallback。

import { p1p3ActiveMessages } from "./authored/activeMessagesP1P3.js";

export const ACTIVE_MESSAGE_THRESHOLDS = [25, 30, 35, 40, 45];

export const ACTIVE_MESSAGE_LIFE_STAGE_KEYS = [
  "p1_p3",
  "p4_p6",
  "s1_s3",
  "s4_s5",
  "s6",
  "university",
  "society",
  "early_drop_out_society",
  "special_future_do"
];

export const activeMessageSets = {
  p1_p3: {
    authoredOnly: true,
    reservedTypes: {
      same_age_peer: ["pers_outgoing_inviter", "pers_quiet_observer", "pers_competitive_peer", "pers_mischief_maker"],
      senior_student: [
        "pers_strict_prefect",
        "pers_friendly_senior",
        "pers_senior_aloof",
        "pers_senior_competitive_captain",
        "pers_senior_gentle_helper"
      ],
      family_parent: ["char_mom", "char_dad"],
      teacher: ["pers_strict_academic", "pers_encouraging_mentor", "pers_fair_observer", "pers_pastoral_care_teacher"],
      normal_friend: [],
      special_friend: []
    },
    messages: p1p3ActiveMessages
  },
  p4_p6: { authoredOnly: true, messages: [] },
  s1_s3: { authoredOnly: true, messages: [] },
  s4_s5: { authoredOnly: true, messages: [] },
  s6: { authoredOnly: true, messages: [] },
  university: { authoredOnly: true, messages: [] },
  society: { authoredOnly: true, messages: [] },
  early_drop_out_society: { authoredOnly: true, messages: [] },
  special_future_do: { authoredOnly: true, messages: [] }
};

export function getActiveMessageLifeStageSet(stageIdOrLifeStage) {
  const value = stageIdOrLifeStage || "";
  if (["stage_p1", "stage_p2", "stage_p3", "primary_lower"].includes(value)) return "p1_p3";
  if (["stage_p4", "stage_p5", "stage_p6", "primary_upper"].includes(value)) return "p4_p6";
  if (["stage_s1", "stage_s2", "stage_s3", "junior_secondary"].includes(value)) return "s1_s3";
  if (["stage_s4", "stage_s5", "senior_secondary"].includes(value)) return "s4_s5";
  if (["stage_s6"].includes(value)) return "s6";
  if (["university"].includes(value)) return "university";
  if (["society"].includes(value)) return "society";
  if (["early_drop_out_society"].includes(value)) return "early_drop_out_society";
  if (["special_future_do"].includes(value)) return "special_future_do";
  return "p1_p3";
}

function normalizePersonalityId(id) {
  return (id || "").replace(/^pers_/, "").replace(/_/g, "").toLowerCase();
}

function personalityMatches(message, character) {
  const candidates = [message.personalityId, ...(message.personalityAliases || [])].map(normalizePersonalityId);
  const characterIds = [character.personalityId, character.personalityKey].map(normalizePersonalityId);
  return candidates.some(id => characterIds.includes(id));
}

export function findAuthoredActiveMessage({ character, threshold, lifeStageSet, relationshipRouteType }) {
  const set = activeMessageSets[lifeStageSet];
  if (!set) return null;
  const messages = set.messages || [];
  const identity = character.generatedFromIdentityType || character.identityTypeId || character.identity;
  const exactCharacter = messages.find(m =>
    m.lifeStageSet === lifeStageSet &&
    m.characterId === character.id &&
    m.threshold === threshold
  );
  if (exactCharacter) return exactCharacter;

  const exactPersonality = messages.find(m =>
    m.lifeStageSet === lifeStageSet &&
    m.identity === identity &&
    personalityMatches(m, character) &&
    m.threshold === threshold &&
    (!m.relationshipRouteType || m.relationshipRouteType === relationshipRouteType)
  );
  if (exactPersonality) return exactPersonality;

  const rangedPersonality = messages.find(m =>
    m.lifeStageSet === lifeStageSet &&
    m.identity === identity &&
    personalityMatches(m, character) &&
    m.thresholdMin <= threshold &&
    m.thresholdMax >= threshold &&
    (!m.relationshipRouteType || m.relationshipRouteType === relationshipRouteType)
  );
  if (rangedPersonality) return rangedPersonality;

  return messages.find(m =>
    m.lifeStageSet === lifeStageSet &&
    m.identity === identity &&
    m.threshold === threshold &&
    !m.personalityId &&
    (!m.relationshipRouteType || m.relationshipRouteType === relationshipRouteType)
  ) || null;
}

export function validateActiveMessageContent() {
  const errors = [];
  ACTIVE_MESSAGE_LIFE_STAGE_KEYS.forEach(key => {
    if (!activeMessageSets[key]) errors.push(`Missing activeMessageSets.${key}`);
  });
  Object.entries(activeMessageSets).forEach(([setKey, set]) => {
    (set.messages || []).forEach(message => {
      if (message.lifeStageSet !== setKey) errors.push(`${message.id}: lifeStageSet mismatch`);
      if (!message.messageText) errors.push(`${message.id}: missing messageText`);
      if (!Array.isArray(message.choices) || message.choices.length < 2) errors.push(`${message.id}: needs at least 2 choices`);
      (message.choices || []).forEach(choice => {
        if (!choice.playerLine) errors.push(`${message.id}.${choice.id}: missing playerLine`);
        if (!choice.npcFollowUp) errors.push(`${message.id}.${choice.id}: missing npcFollowUp`);
        if (!choice.resultText) errors.push(`${message.id}.${choice.id}: missing resultText`);
        if (![-1, 0, 1].includes(choice.relationshipDelta)) errors.push(`${message.id}.${choice.id}: invalid relationshipDelta`);
      });
    });
  });
  return errors;
}
