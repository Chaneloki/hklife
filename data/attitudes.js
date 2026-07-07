// data/attitudes.js
// 態度標籤：對話／事件選項用 attitudeTag 表達「呢個選項係咩取向」，唔用 good/bad
// 每個態度都冇絕對好壞，只係代表唔同人格、時間安排、價值觀

export const attitudes = [
  { id: "acceptWarmly", label: "熱情接受", tendencyId: "outgoing", description: "爽快答應，投入落去。" },
  { id: "acceptReluctantly", label: "勉強答應", tendencyId: "compliant", description: "唔係好想，但都應承咗。" },
  { id: "refusePolitely", label: "禮貌拒絕", tendencyId: "boundary", description: "客氣咁講唔得閒／唔想。" },
  { id: "refuseDirectly", label: "直接拒絕", tendencyId: "assertive", description: "直接講唔得，唔拐彎抹角。" },
  { id: "honestTired", label: "誠實說累", tendencyId: "boundary", description: "老實講出自己嘅狀態。" },
  { id: "jokeAround", label: "開玩笑帶過", tendencyId: "outgoing", description: "用玩笑化解，唔正面回應。" },
  { id: "observeFirst", label: "先觀察", tendencyId: "observer", description: "唔急住表態，睇多陣先。" },
  { id: "askForHelp", label: "求助", tendencyId: "helpSeeking", description: "講出嚟，搵人幫手。" },
  { id: "changeTopic", label: "轉移話題", tendencyId: "avoidant", description: "唔正面回應，扯去第樣嘢。" },
  { id: "staySilent", label: "沉默", tendencyId: "avoidant", description: "咩都唔講，留返俾自己諗。" },
  { id: "delayReply", label: "遲點再說", tendencyId: "avoidant", description: "唔即刻決定，拖後少少。" },
  { id: "followAdult", label: "順從大人安排", tendencyId: "compliant", description: "跟大人話點做就點做。" },
  { id: "insistSelf", label: "堅持自己安排", tendencyId: "assertive", description: "照自己諗法嚟，唔跟大隊。" },
  { id: "takeRisk", label: "冒險試試", tendencyId: "adventurous", description: "唔知會點，但都想試下。" },
  { id: "avoidConflict", label: "避免衝突", tendencyId: "avoidant", description: "求其求個和氣，唔想搞大件事。" }
];

export function getAttitudeById(id) {
  return attitudes.find(a => a.id === id);
}
