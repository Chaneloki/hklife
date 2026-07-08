// data/opportunities.js
// 比賽／機會系統：玩家唔會一開始見晒所有比賽，要達到條件先由 NPC／地區話俾玩家知
//
// competition schema:
// {
//   id, name, type, description,
//   sourceCharacters: [characterId],     // 邊啲人可以話俾你知
//   sourceLocations: [locationId],       // 或者响邊個地區可以聽到
//   availableStages: [stageId],
//   infoTriggerConditions: [condition],  // 幾時先會收到呢個比賽嘅資訊
//   entryRequirements: [condition],      // 想報名要符合咩
//   preparationRequirements: { category, count },  // 要做幾多次相關行動先算「準備充足」
//   deadlineWeeks,                       // 由加入嗰刻計，幾多週後截止
//   relatedResources: [statName],
//   relatedHobbies: [hobbyId],
//   routeSeedRewards: [{ seedId, amount }],
//   relationshipRewards: [{ characterId, dimension, amount }],
//   successRewards: [effect],
//   partialRewards: [effect],
//   failResult: string,
//   canIgnore: true,
//   reviewText: { success, partial, miss }
// }

export const competitions = [
  {
    id: "comp_school_art",
    name: "校內畫畫比賽",
    type: "藝術",
    description: "每年一度嘅校內畫畫比賽，題目通常同校園生活有關。",
    sourceCharacters: ["char_teacher"],
    sourceLocations: ["loc_causeway"],
    availableStages: ["stage_p1", "stage_p2", "stage_p3"],
    infoTriggerConditions: [{ type: "statAtLeast", stat: "創意", amount: 45 }],
    entryRequirements: [{ type: "statAtLeast", stat: "創意", amount: 45 }],
    preparationRequirements: { category: "興趣", count: 3 },
    deadlineWeeks: 6,
    relatedResources: ["創意", "自信"],
    relatedHobbies: ["hobby_drawing"],
    routeSeedRewards: [{ seedId: "creativeSeed", amount: 3 }],
    relationshipRewards: [{ characterId: "char_teacher", dimension: "respect", amount: 3 }],
    successRewards: [{ type: "statChange", stat: "自信", amount: 6 }],
    partialRewards: [{ type: "statChange", stat: "自信", amount: 2 }],
    failResult: "冇入圍，但你都試過準備一次比賽，經驗都幾寶貴。",
    canIgnore: true,
    reviewText: {
      success: "你嘅作品攞咗獎，好有成功感！",
      partial: "你有交作品，但未入圍，都算完成咗一次嘗試。",
      miss: "你冇完成準備，錯過咗呢次比賽，唔緊要，下次可以再嚟。"
    }
  },
  {
    id: "comp_piano_recital",
    name: "鋼琴匯演",
    type: "音樂",
    description: "興趣班一年一度嘅匯演，屋企人通常都會嚟睇。",
    sourceCharacters: ["char_mom"],
    sourceLocations: ["loc_causeway"],
    availableStages: ["stage_p1", "stage_p2", "stage_p3"],
    infoTriggerConditions: [{ type: "hasFlag", flag: "flag_hobby_hobby_piano_joined" }],
    entryRequirements: [{ type: "statAtLeast", stat: "創意", amount: 40 }],
    preparationRequirements: { category: "興趣", count: 4 },
    deadlineWeeks: 8,
    relatedResources: ["創意", "自信"],
    relatedHobbies: ["hobby_piano", "hobby_dance"],
    routeSeedRewards: [{ seedId: "performanceSeed", amount: 3 }],
    relationshipRewards: [{ characterId: "char_mom", dimension: "trust", amount: 3 }],
    successRewards: [{ type: "statChange", stat: "自信", amount: 5 }],
    partialRewards: [{ type: "statChange", stat: "自信", amount: 2 }],
    failResult: "冇準備好，但屋企人都有嚟睇，都算一次經歷。",
    canIgnore: true,
    reviewText: {
      success: "你喺台上表演得好好，屋企人好感動。",
      partial: "你有上台，但唔算好熟練，都okay。",
      miss: "你冇準備好，決定唔上台，屋企人都尊重你嘅決定。"
    }
  },
  {
    id: "comp_football_tournament",
    name: "校際足球邀請賽",
    type: "體育",
    description: "同其他學校嘅足球隊比賽，需要團隊合作。",
    sourceCharacters: ["char_classmate"],
    sourceLocations: ["loc_shatin"],
    availableStages: ["stage_p1", "stage_p2", "stage_p3"],
    infoTriggerConditions: [{ type: "hasFlag", flag: "flag_hobby_hobby_football_joined" }],
    entryRequirements: [{ type: "statAtLeast", stat: "體力", amount: 50 }],
    preparationRequirements: { category: "興趣", count: 4 },
    deadlineWeeks: 8,
    relatedResources: ["體力", "社交"],
    relatedHobbies: ["hobby_football"],
    routeSeedRewards: [{ seedId: "friendshipSeed", amount: 3 }],
    relationshipRewards: [{ characterId: "char_classmate", dimension: "closeness", amount: 4 }],
    successRewards: [{ type: "statChange", stat: "自信", amount: 5 }, { type: "statChange", stat: "社交", amount: 3 }],
    partialRewards: [{ type: "statChange", stat: "社交", amount: 2 }],
    failResult: "隊伍冇入到決賽，但大家都盡咗力。",
    canIgnore: true,
    reviewText: {
      success: "你哋隊贏咗比賽，同隊友嘅感情更加好。",
      partial: "你哋出咗場，雖然冇贏，但都建立咗團隊默契。",
      miss: "你決定冇落場，隊友都理解你嘅選擇。"
    }
  },
  {
    id: "comp_math_challenge",
    name: "數學小挑戰",
    type: "學術",
    description: "校內嘅數學題目挑戰賽，唔一定要好叻，最緊要肯試。",
    sourceCharacters: ["char_tutor", "char_teacher"],
    sourceLocations: ["loc_mongkok"],
    availableStages: ["stage_p1", "stage_p2", "stage_p3"],
    infoTriggerConditions: [{ type: "statAtLeast", stat: "學業", amount: 55 }],
    entryRequirements: [{ type: "statAtLeast", stat: "學業", amount: 55 }],
    preparationRequirements: { category: "學習", count: 3 },
    deadlineWeeks: 6,
    relatedResources: ["學業"],
    relatedHobbies: ["hobby_coding", "hobby_chess"],
    routeSeedRewards: [{ seedId: "academicSeed", amount: 3 }],
    relationshipRewards: [{ characterId: "char_teacher", dimension: "respect", amount: 3 }],
    successRewards: [{ type: "statChange", stat: "學業", amount: 4 }],
    partialRewards: [{ type: "statChange", stat: "自信", amount: 2 }],
    failResult: "唔係壞事，可能你會發現自己其實唔太鍾意競賽形式。",
    canIgnore: true,
    reviewText: {
      success: "你解得幾好，老師都稱讚你嘅邏輯思維。",
      partial: "你有參加，表現普通，但都攞到經驗。",
      miss: "你冇準備好，決定唔參加，老師都鼓勵你下次再試。"
    }
  },
  {
    id: "comp_recitation",
    name: "朗誦比賽",
    type: "表演",
    description: "校際朗誦比賽，考驗表達同台風。",
    sourceCharacters: ["char_teacher"],
    sourceLocations: ["loc_shatin"],
    availableStages: ["stage_p1", "stage_p2", "stage_p3"],
    infoTriggerConditions: [{ type: "statAtLeast", stat: "自信", amount: 45 }],
    entryRequirements: [{ type: "statAtLeast", stat: "自信", amount: 45 }],
    preparationRequirements: { category: "興趣", count: 3 },
    deadlineWeeks: 6,
    relatedResources: ["自信", "社交"],
    relatedHobbies: ["hobby_drama"],
    routeSeedRewards: [{ seedId: "performanceSeed", amount: 3 }],
    relationshipRewards: [{ characterId: "char_teacher", dimension: "respect", amount: 2 }],
    successRewards: [{ type: "statChange", stat: "自信", amount: 5 }],
    partialRewards: [{ type: "statChange", stat: "自信", amount: 2 }],
    failResult: "冇入圍，但企過台已經係一種成長。",
    canIgnore: true,
    reviewText: {
      success: "你朗誦得好有感情，攞到獎項。",
      partial: "你有上台，雖然唔算特別出眾，都完成咗。",
      miss: "你決定唔參加，都冇問題，機會下次再嚟。"
    }
  },
  {
    id: "comp_science_fair",
    name: "常識科學小project展覽",
    type: "學術",
    description: "展示自己整嘅小手作或者小實驗，睇下有咩新發現。",
    sourceCharacters: ["char_mystery_neighbor", "char_teacher"],
    sourceLocations: ["loc_sspk"],
    availableStages: ["stage_p2", "stage_p3"],
    infoTriggerConditions: [{ type: "locationVisitedAtLeast", locationId: "loc_sspk", amount: 2 }],
    entryRequirements: [{ type: "statAtLeast", stat: "創意", amount: 40 }],
    preparationRequirements: { category: "探索", count: 3 },
    deadlineWeeks: 8,
    relatedResources: ["創意", "學業"],
    relatedHobbies: ["hobby_coding"],
    routeSeedRewards: [{ seedId: "explorationSeed", amount: 2 }, { seedId: "streetSeed", amount: 2 }],
    relationshipRewards: [{ characterId: "char_mystery_neighbor", dimension: "respect", amount: 3 }],
    successRewards: [{ type: "statChange", stat: "創意", amount: 5 }],
    partialRewards: [{ type: "statChange", stat: "創意", amount: 2 }],
    failResult: "個小手作未做完，但過程都學到嘢。",
    canIgnore: true,
    reviewText: {
      success: "你嘅小手作好受歡迎，神秘街坊高手都讚你有天分。",
      partial: "你有展示自己嘅嘢，雖然未算完美。",
      miss: "你決定唔參加，繼續慢慢研究自己嘅興趣。"
    }
  }
];

export function getCompetitionById(id) {
  return competitions.find(c => c.id === id);
}
