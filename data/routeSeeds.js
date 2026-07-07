// data/routeSeeds.js
// 路線種子：小學至中三前只會安全、輕微咁累積，唔會即刻變成成人／高風險內容
// 呢啲數值淨係俾學期結算／未來階段睇「你依家傾向緊咩」，唔係評分高低
//
// route seed schema:
// { id, name, description, safeStageFlavor, icon }

export const routeSeeds = [
  {
    id: "academicSeed",
    name: "學業種子",
    description: "持續投入讀書同學業相關行動所累積嘅傾向。",
    safeStageFlavor: "小學階段：成績穩定、老師開始留意你。",
    icon: "📘"
  },
  {
    id: "friendshipSeed",
    name: "朋友種子",
    description: "同同學仔建立親近感同共同回憶所累積嘅傾向。",
    safeStageFlavor: "小學階段：識到玩得嚟嘅朋友，開始有自己嘅小圈子。",
    icon: "🤝"
  },
  {
    id: "creativeSeed",
    name: "創意種子",
    description: "投入興趣、創作、表達自己所累積嘅傾向。",
    safeStageFlavor: "小學階段：完成自己嘅小作品，開始有創作習慣。",
    icon: "🎨"
  },
  {
    id: "familySeed",
    name: "家庭種子",
    description: "同屋企人建立信任同互相依靠所累積嘅傾向。",
    safeStageFlavor: "小學階段：成為屋企人信賴嘅小幫手。",
    icon: "🏠"
  },
  {
    id: "explorationSeed",
    name: "探索種子",
    description: "周圍去、對唔同地區同新事物保持好奇心所累積嘅傾向。",
    safeStageFlavor: "小學階段：識咗好多街坊、認識香港唔同角落。",
    icon: "🧭"
  },
  {
    id: "streetSeed",
    name: "街坊／地下人脈種子",
    description: "同街坊、舊區小店、隱世高手建立關係所累積嘅傾向，純粹係人情味，唔涉及犯罪。",
    safeStageFlavor: "小學階段：識到深水埗嘅街坊同隱世高手，學到啲街頭智慧同修理技巧。",
    icon: "🔧"
  },
  {
    id: "performanceSeed",
    name: "表演／偶像種子",
    description: "喺人前表演、展示自己所累積嘅傾向。",
    safeStageFlavor: "小學階段：參加咗校內才藝表演，開始鍾意企喺台上嘅感覺。",
    icon: "🎤"
  },
  {
    id: "dreamSeed",
    name: "夢境／幻想種子",
    description: "休息、發呆、獨處所累積嘅內心世界傾向。",
    safeStageFlavor: "小學階段：發過幾個古怪又生動嘅夢，開始鍾意自己諗嘢。",
    icon: "💭"
  },
  {
    id: "sponsorSeed",
    name: "資源圈種子",
    description: "接觸到資源比較豐富嘅圈子（例如同學家庭、活動贊助）所累積嘅早期概念。成年前只代表見識同人脈，唔會出現任何包養或性暗示內容。",
    safeStageFlavor: "小學階段：見識過一啲資源豐富嘅活動同場合，開咗少少眼界。",
    icon: "💎"
  },
  {
    id: "riskSeed",
    name: "邊緣風險種子",
    description: "逃避責任、拒絕溝通所累積嘅傾向。中三前唔會演變成真正嘅高風險內容，只會引來身邊人嘅關心。",
    safeStageFlavor: "小學階段：偶爾走堂或者唔想見人，老師同屋企人會多咗關心你。",
    icon: "🌫️"
  }
];

export function getRouteSeedById(id) {
  return routeSeeds.find(r => r.id === id);
}

// 行動分類 → 路線種子嘅通用對應表，執行行動時自動 +1，唔使逐個 action 寫死邊個種子
export const actionCategorySeedMap = {
  學習: ["academicSeed"],
  朋友: ["friendshipSeed"],
  興趣: ["creativeSeed"],
  家庭: ["familySeed"],
  探索: ["explorationSeed"],
  休息: ["dreamSeed"],
  支線: ["explorationSeed"]
};

// 特定角色相關嘅行動額外累積嘅種子（比分類更精準，例如深水埗街坊路線）
export const characterRouteSeedMap = {
  char_mystery_neighbor: ["streetSeed"],
  char_cha_chaan_teng: ["streetSeed"]
};

