// data/schedule.js
// 學期／週曆資料：定義每個人生階段點樣切分做學期，每學期有幾多週
// term schema:
// { id, name, stageId, year, order, totalWeeks, nextTermId }

export const terms = [
  {
    id: "term_p1_s1",
    name: "小一 · 上學期",
    stageId: "stage_p1",
    year: 1,
    order: 1,
    totalWeeks: 12,
    nextTermId: "term_p1_s2"
  },
  // 以下學期留返做資料架構延伸，暫時未有完整週內容
  {
    id: "term_p1_s2",
    name: "小一 · 下學期",
    stageId: "stage_p1",
    year: 1,
    order: 2,
    totalWeeks: 12,
    nextTermId: "term_p2_s1"
  },
  {
    id: "term_p2_s1",
    name: "小二 · 上學期",
    stageId: "stage_p2",
    year: 2,
    order: 1,
    totalWeeks: 12,
    nextTermId: "term_p2_s2"
  },
  {
    id: "term_p2_s2",
    name: "小二 · 下學期",
    stageId: "stage_p2",
    year: 2,
    order: 2,
    totalWeeks: 12,
    nextTermId: "term_p3_s1"
  },
  {
    id: "term_p3_s1",
    name: "小三 · 上學期",
    stageId: "stage_p3",
    year: 3,
    order: 1,
    totalWeeks: 12,
    nextTermId: "term_p3_s2"
  },
  {
    id: "term_p3_s2",
    name: "小三 · 下學期",
    stageId: "stage_p3",
    year: 3,
    order: 2,
    totalWeeks: 12,
    nextTermId: null
  }
];

export function getTermById(id) {
  return terms.find(t => t.id === id);
}

export function getNextTerm(currentTermId) {
  const term = getTermById(currentTermId);
  if (!term || !term.nextTermId) return null;
  return getTermById(term.nextTermId);
}
