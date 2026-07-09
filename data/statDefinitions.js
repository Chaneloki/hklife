// data/statDefinitions.js
// 屬性／技能／關係維度嘅「單一定義來源」——俾 LLM prompt 用（等 AI 準確理解每個 key 代表咩），
// 亦都可以俾 UI tooltip 用。呢度淨係文字描述，唔會影響任何數值計算。

// 12 個核心屬性（state.stats），對應 js/state.js:50-63
export const statDescriptions = {
  快樂: "當下情緒好唔好、開唔開心。",
  壓力: "即時負荷，短期內感受到嘅逼迫感（同「理智值」分開：呢個係即時嘅，理智值係長期抗壓緩衝）。",
  體力: "身體精神狀態，會影響玩家做費體力行動嘅表現。",
  自信: "對自己嘅能力、外表、價值嘅信心程度。",
  學業: "學術能力／知識水平，主要反映喺成績表科目分數。",
  創意: "創意思考、藝術感知能力。",
  社交: "同人相處、表達自己、融入群體嘅能力。",
  紀律: "自律程度、守規矩、完成承諾嘅能力。",
  金錢: "手頭資源／零用錢多寡。",
  家庭關係: "同家人相處嘅整體關係質素。",
  人脈: "認識嘅人同社交網絡廣度。",
  理智值: "長期抗壓緩衝／心理韌性，同「壓力」（即時負荷）分開。"
};

// 8 個技能（state.skillExp），對應 data/hobbies.js
export const skillDescriptions = {
  繪畫: "視覺藝術／畫畫技巧同經驗。",
  鋼琴: "鋼琴演奏技巧同經驗。",
  朗誦: "朗誦、口語表達、演講技巧同經驗。",
  游泳: "游泳技巧同體能經驗。",
  足球: "足球運動技巧同經驗。",
  編程: "程式設計／科創邏輯思維經驗。",
  閱讀: "閱讀理解同知識吸收經驗。",
  班務服務: "參與班務、服務同事嘅經驗。"
};

// 5 個關係維度（state.relationships[charId]），對應 js/engine.js 嘅 RELATIONSHIP_DIMENSIONS
export const relationshipDimensionDescriptions = {
  closeness: "親近度：同呢個角色有幾親密、幾熟。",
  trust: "信任度：呢個角色有幾信得過玩家。",
  respect: "尊重度：呢個角色有幾睇得起／尊重玩家。",
  dependency: "依賴度：呢個角色有幾依賴玩家。",
  misunderstanding: "誤會值：同呢個角色之間有幾深嘅誤會／隔閡（越高代表關係越差）。"
};

export function formatStatDefinitionLines(keys, dictionary) {
  return keys
    .filter(key => dictionary[key])
    .map(key => `${key}：${dictionary[key]}`);
}
