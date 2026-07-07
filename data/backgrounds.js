// data/backgrounds.js
// 開局背景資料：家庭、地區傾向、性格、天賦、興趣
// 每個背景都有優勢也有壓力，沒有絕對「好」或「壞」的背景

export const familyBackgrounds = [
  {
    id: "family_shop",
    name: "屋企開小店",
    description: "屋企喺樓下開咗間小店，忙碌但溫暖，你由細到大都喺舖頭幫手。",
    startingStats: { 金錢: 55, 家庭關係: 75, 紀律: 60, 快樂: 65 },
    tags: ["家庭經營", "責任感高", "週末要幫手"]
  },
  {
    id: "family_middle",
    name: "普通中產家庭",
    description: "父母都係打工仔，生活穩定，但對你嘅期望都幾高。",
    startingStats: { 金錢: 65, 家庭關係: 60, 學業: 55, 壓力: 45 },
    tags: ["資源穩定", "期望較高"]
  },
  {
    id: "family_public_housing",
    name: "公屋家庭",
    description: "住喺公屋邨，街坊關係好，鄰里之間互相照應。",
    startingStats: { 金錢: 40, 家庭關係: 70, 社交: 60, 快樂: 60 },
    tags: ["社區人情味", "資源有限", "支援網絡強"]
  },
  {
    id: "family_single_parent",
    name: "單親家庭",
    description: "同媽媽兩個人相依為命，你好早就學識照顧自己。",
    startingStats: { 金錢: 45, 家庭關係: 65, 紀律: 65, 自信: 55 },
    tags: ["獨立", "家庭關係緊密", "資源有限"]
  }
];

export const regionBackgrounds = [
  {
    id: "region_nt",
    name: "新界成長",
    description: "喺新界大屋邨長大，生活空間比較舒服，但出市區要搭好耐車。",
    startingStats: { 體力: 60, 快樂: 60 },
    tags: ["生活空間大", "通勤概念早"]
  },
  {
    id: "region_hkisland",
    name: "港島成長",
    description: "喺港島長大，身邊活動同誘惑都好多，眼界開得早。",
    startingStats: { 社交: 60, 金錢: 50, 壓力: 40 },
    tags: ["活動機會多", "消費誘惑多"]
  },
  {
    id: "region_kowloon",
    name: "九龍老區成長",
    description: "喺九龍舊區長大，街坊鋪頭多，充滿香港市井味道。",
    startingStats: { 社交: 55, 創意: 55, 家庭關係: 55 },
    tags: ["市井氣息", "街坊文化"]
  }
];

export const personalities = [
  {
    id: "personality_diligent",
    name: "勤力型",
    description: "做嘢認真，鍾意跟足計劃嚟。",
    startingStats: { 紀律: 65, 學業: 55 },
    tags: ["自律"]
  },
  {
    id: "personality_playful",
    name: "貪玩型",
    description: "鍾意玩，對世界充滿好奇心。",
    startingStats: { 快樂: 65, 社交: 55 },
    tags: ["外向"]
  },
  {
    id: "personality_sensitive",
    name: "敏感細心型",
    description: "留意到好多細節，容易受人情緒影響。",
    startingStats: { 創意: 60, 壓力: 45 },
    tags: ["細心"]
  },
  {
    id: "personality_steady",
    name: "淡定型",
    description: "遇事唔緊張，情緒比較穩定。",
    startingStats: { 壓力: 30, 自信: 55 },
    tags: ["情緒穩定"]
  }
];

export const talents = [
  {
    id: "talent_academic",
    name: "讀書天賦",
    description: "對讀書、記憶、邏輯特別有天分。",
    startingStats: { 學業: 65 },
    tags: ["學術"]
  },
  {
    id: "talent_sports",
    name: "運動天賦",
    description: "體能同協調能力特別好。",
    startingStats: { 體力: 65, 自信: 55 },
    tags: ["體育"]
  },
  {
    id: "talent_art",
    name: "藝術天賦",
    description: "對畫畫、音樂、創作特別敏感。",
    startingStats: { 創意: 65 },
    tags: ["藝術"]
  },
  {
    id: "talent_social",
    name: "人緣天賦",
    description: "天生識得同人相處，好易識到朋友。",
    startingStats: { 社交: 65 },
    tags: ["社交"]
  }
];

export const interests = [
  {
    id: "interest_reading",
    name: "睇書",
    description: "鍾意躲埋一角睇書。",
    startingStats: { 創意: 50, 學業: 50 },
    tags: ["靜態興趣"]
  },
  {
    id: "interest_ball_games",
    name: "球類運動",
    description: "鍾意踢波、打波。",
    startingStats: { 體力: 55, 社交: 50 },
    tags: ["動態興趣"]
  },
  {
    id: "interest_music",
    name: "音樂",
    description: "鍾意唱歌、聽歌、玩樂器。",
    startingStats: { 創意: 55, 快樂: 50 },
    tags: ["藝術興趣"]
  },
  {
    id: "interest_gaming",
    name: "電子遊戲",
    description: "鍾意打機，對電子產品好有興趣。",
    startingStats: { 創意: 50, 快樂: 55 },
    tags: ["科技興趣"]
  }
];

export function getAllBackgroundCategories() {
  return {
    family: familyBackgrounds,
    region: regionBackgrounds,
    personality: personalities,
    talent: talents,
    interest: interests
  };
}

export function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
