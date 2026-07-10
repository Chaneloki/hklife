// data/openingEvents.js
// Loader for the authored opening event pools.
// This module does not author any content — it only re-exports and indexes what was authored.
// Do not add event/variant/choice text here; edit the authored file instead.

import {
  hkLifeSimulatorOpeningEventDialogueBalanced as authoredOpeningEvents,
  hkLifeMainStatusKeys,
  hkLifeSkillKeys,
  hkLifeOpeningEventBalancedDesignNote
} from "./authored/openingEventPool_w1_w6_v5_1.js";
import { hkLifeSimulatorOpeningEventDialogueW7W12 } from "./authored/openingEventPool_w7_w12_v3_playable.js";
import {
  hkLifeSimulatorOpeningEventDialogueS2W1W6,
  sameAgeNeighborPool,
  selectedNeighborRule
} from "./authored/openingEventPool_s2_w1_w6_v0_5.js";
import { applySeniorStudentContinuity } from "./seniorStudentContinuity.js";

const openingEvents = applySeniorStudentContinuity([
  ...authoredOpeningEvents,
  ...hkLifeSimulatorOpeningEventDialogueW7W12,
  ...hkLifeSimulatorOpeningEventDialogueS2W1W6
]);

export {
  openingEvents,
  hkLifeSimulatorOpeningEventDialogueW7W12,
  hkLifeSimulatorOpeningEventDialogueS2W1W6,
  sameAgeNeighborPool,
  selectedNeighborRule,
  hkLifeMainStatusKeys,
  hkLifeSkillKeys,
  hkLifeOpeningEventBalancedDesignNote
};

export function getOpeningEventById(eventId) {
  return openingEvents.find(e => e.id === eventId) || null;
}

export function getOpeningEventVariant(eventId, variantId) {
  const event = getOpeningEventById(eventId);
  if (!event) return null;
  return (event.variants || []).find(v => v.variantId === variantId) || null;
}

// playerChoices 屬於某個 variant；fallbackChoices 屬於事件本身（跨 variant 通用嘅緊急備用選項）
export function getOpeningChoice(eventId, variantId, choiceId) {
  const variant = getOpeningEventVariant(eventId, variantId);
  const fromVariant = variant ? (variant.playerChoices || []).find(c => c.id === choiceId) : null;
  if (fromVariant) return { choice: fromVariant, isFallback: false };
  const event = getOpeningEventById(eventId);
  const fromFallback = event ? (event.fallbackChoices || []).find(c => c.id === choiceId) : null;
  if (fromFallback) return { choice: fromFallback, isFallback: true };
  return { choice: null, isFallback: false };
}
