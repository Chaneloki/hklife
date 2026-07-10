// data/reviewStories.js
// Loader for authored "六週人生片段回顧" review-story content.
// This module does not author any story text — it only re-exports and matches what was authored.

import {
  WEEK1_REVIEW_STORY_AUTHORING_RULES,
  openingWeek1AllReviewStoryGroups
} from "./authored/reviewStories_w1_v0_3.js";
import {
  WEEK9_REVIEW_STORY_AUTHORING_RULES,
  openingWeek9ReviewStoryGroups
} from "./authored/reviewStories_w9_v0_1.js";
import {
  S2_W1_REVIEW_STORY_AUTHORING_RULES,
  openingS2W1ReviewStoryGroups
} from "./authored/reviewStories_s2_w1_v0_2.js";

const reviewStoryGroups = [
  ...openingWeek1AllReviewStoryGroups,
  ...openingWeek9ReviewStoryGroups,
  ...openingS2W1ReviewStoryGroups
];

export {
  WEEK1_REVIEW_STORY_AUTHORING_RULES,
  WEEK9_REVIEW_STORY_AUTHORING_RULES,
  S2_W1_REVIEW_STORY_AUTHORING_RULES,
  reviewStoryGroups
};

export function getReviewStoryGroups(eventId) {
  return reviewStoryGroups.filter(g => g.eventId === eventId);
}
