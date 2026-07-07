// data/personalityTendencies.js
// 玩家人格傾向：長期用相似態度會慢慢形成傾向，但唔會永久鎖死，玩家可以透過 willingnessToChange 改變
//
// tendency schema: { id, name, description, attitudeIds }
// attitudeIds：邊啲 attitude 屬於呢個傾向（用嚟由 attitudeHistory 計分）

export const personalityTendencies = [
  {
    id: "outgoing",
    name: "外向回應",
    description: "常熱情接受、主動聊天、搵朋友玩。",
    attitudeIds: ["acceptWarmly", "jokeAround"]
  },
  {
    id: "boundary",
    name: "邊界感",
    description: "常禮貌拒絕、直接講清楚自己嘅安排。",
    attitudeIds: ["refusePolitely", "honestTired"]
  },
  {
    id: "compliant",
    name: "順從傾向",
    description: "常跟隨大人或老師嘅安排。",
    attitudeIds: ["followAdult", "acceptReluctantly"]
  },
  {
    id: "assertive",
    name: "自我主張",
    description: "常堅持自己安排、直接講真話。",
    attitudeIds: ["insistSelf", "refuseDirectly"]
  },
  {
    id: "avoidant",
    name: "逃避傾向",
    description: "常拖延、轉移話題、沉默、避免衝突。",
    attitudeIds: ["delayReply", "changeTopic", "staySilent", "avoidConflict"]
  },
  {
    id: "observer",
    name: "觀察者傾向",
    description: "常先觀察，少即刻承諾。",
    attitudeIds: ["observeFirst"]
  },
  {
    id: "adventurous",
    name: "冒險傾向",
    description: "常試新活動、去陌生地區。",
    attitudeIds: ["takeRisk"]
  },
  {
    id: "helpSeeking",
    name: "求助傾向",
    description: "常向屋企人、老師、朋友求助。",
    attitudeIds: ["askForHelp"]
  }
];

export function getTendencyById(id) {
  return personalityTendencies.find(t => t.id === id);
}

// 邊個 tendency 「睇重」呢個 attitude（一個 attitude 可以屬於多過一個 tendency 嘅情境，但主要對應一個）
export function getTendencyForAttitude(attitudeId) {
  return personalityTendencies.find(t => t.attitudeIds.includes(attitudeId));
}
