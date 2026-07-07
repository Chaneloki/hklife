// data/endings.js
// 階段性「成長傾向」總結，唔係遊戲終點，而係每個學習階段完結時嘅回顧
//
// ending schema:
// {
//   id, name, description,
//   conditions: [condition]   // 符合最多條件嘅傾向會被選為主要傾向
// }

export const growthTendencies = [
  {
    id: "ending_academic_star",
    name: "小小學霸路線",
    description: "你將學業放喺首位，成為老師眼中嘅乖學生。",
    conditions: [{ type: "statAtLeast", stat: "學業", amount: 65 }]
  },
  {
    id: "ending_social_star",
    name: "社交明星路線",
    description: "你識到好多朋友，個個都鍾意同你玩。",
    conditions: [{ type: "statAtLeast", stat: "社交", amount: 65 }]
  },
  {
    id: "ending_creative_inventor",
    name: "創意發明路線",
    description: "你嘅腦袋裝滿天馬行空嘅想法，成為班上嘅小發明家。",
    conditions: [{ type: "statAtLeast", stat: "創意", amount: 65 }]
  },
  {
    id: "ending_family_helper",
    name: "家庭好幫手路線",
    description: "你成為屋企人最信賴嘅小幫手，家庭關係非常親密。",
    conditions: [{ type: "statAtLeast", stat: "家庭關係", amount: 70 }]
  },
  {
    id: "ending_happy_childhood",
    name: "快樂童年路線",
    description: "你未必最叻，但係你嘅童年充滿笑聲，快快樂樂咁過每一日。",
    conditions: [{ type: "statAtLeast", stat: "快樂", amount: 70 }]
  }
];

// 揀出最切合目前數值嘅成長傾向（回合結束或階段結束時使用）
export function resolveGrowthTendency(stats) {
  let best = null;
  let bestScore = -Infinity;
  for (const tendency of growthTendencies) {
    const statName = tendency.conditions[0]?.stat;
    const score = stats[statName] ?? 0;
    if (score > bestScore) {
      bestScore = score;
      best = tendency;
    }
  }
  return best;
}
