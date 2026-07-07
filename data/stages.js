// data/stages.js
// 人生階段資料。第一版實作小一至小三，架構可延伸到中學、大學、成人
//
// stage schema:
// {
//   id, name, ageRange, grade,
//   turnCountToNextStage,     // 幾多回合之後可以進入下一階段
//   unlockLocations: [locationId],
//   unlockActions: [actionId],   // 留空表示唔額外解鎖，行動由 availableStages 控制
//   progressionRequirements: [condition]  // 可選，除咗回合數之外嘅升學條件
// }

export const stages = [
  {
    id: "stage_p1",
    name: "小一",
    ageRange: "6-7歲",
    grade: "小一",
    turnCountToNextStage: 6,
    unlockLocations: ["loc_mongkok", "loc_sspk", "loc_shatin", "loc_tuenmun"],
    unlockActions: [],
    progressionRequirements: []
  },
  {
    id: "stage_p2",
    name: "小二",
    ageRange: "7-8歲",
    grade: "小二",
    turnCountToNextStage: 6,
    unlockLocations: [],
    unlockActions: [],
    progressionRequirements: []
  },
  {
    id: "stage_p3",
    name: "小三",
    ageRange: "8-9歲",
    grade: "小三",
    turnCountToNextStage: 6,
    unlockLocations: ["loc_causeway"],
    unlockActions: [],
    progressionRequirements: []
  }
  // 未來可以繼續加：stage_p4 ~ stage_p6、stage_secondary、stage_uni、stage_work ...
];

export function getStageById(id) {
  return stages.find(s => s.id === id);
}

export function getNextStage(currentStageId) {
  const idx = stages.findIndex(s => s.id === currentStageId);
  if (idx === -1 || idx === stages.length - 1) return null;
  return stages[idx + 1];
}
