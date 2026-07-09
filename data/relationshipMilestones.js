// data/relationshipMilestones.js
// 一次性 relationship milestone rewards。這些不是 active message，不提供三選一回覆。

export const RELATIONSHIP_MILESTONE_THRESHOLDS = [25, 35, 45];

function personalityMatches(character, ids) {
  const values = [character?.personalityId, character?.personalityKey].filter(Boolean);
  return ids.some(id => values.includes(id) || values.includes(id.replace(/^pers_/, "")));
}

function familyReward(character, threshold) {
  if (threshold === 25) {
    return {
      id: "family_25_money",
      title: "屋企給了你一點文具錢",
      body: character?.id === "char_dad"
        ? "爸爸見你書包拉鍊夾住一張通告角，沒有笑你亂，只是拿了一個文件袋給你，又放了少少文具錢。"
        : "家人發現你開始把通告和手冊處理得比較清楚，給了你一點文具錢。",
      effects: [{ type: "statChange", stat: "金錢", amount: 5 }]
    };
  }
  if (threshold === 35) {
    return {
      id: "family_35_money",
      title: "屋企願意支持你的小材料費",
      body: character?.id === "char_mom"
        ? "媽媽發現你開始會自己提起手冊簽名，沒有再一放學就追問你。她說下次買畫紙或筆可以先用這些錢。"
        : "家人開始相信你會自己提起學校小事，給了你一點材料費或活動零用。",
      effects: [{ type: "statChange", stat: "金錢", amount: 7 }]
    };
  }
  if (threshold === 45) {
    return {
      id: "family_45_money",
      title: "屋企開始放心讓你處理小學生活",
      body: "家人開始把小學生活看成你正在慢慢處理的事，而不是每件都要大人追在後面。",
      effects: [{ type: "statChange", stat: "金錢", amount: 10 }]
    };
  }
  return null;
}

function teacherReward(character, threshold) {
  const strict = personalityMatches(character, ["pers_strict_academic", "strict_academic"]);
  const encouraging = personalityMatches(character, ["pers_encouraging_mentor", "pers_encouraging_teacher", "encouraging_mentor"]);
  const fair = personalityMatches(character, ["pers_fair_observer", "fair_observer"]);
  const caring = personalityMatches(character, ["pers_pastoral_care_teacher", "pers_caring_teacher", "pers_activity_recommender", "pers_activity_connector", "pastoral_care_teacher"]);

  if (strict) {
    if (threshold === 25) return { id: "teacher_strict_25", title: "老師圈清楚你的錯字", body: "老師把你改正後的簿推回來，沒有多稱讚，只在錯字旁邊圈得清楚一點，叫你下次先看這幾個。", effects: [{ type: "statChange", stat: "學業", amount: 1 }] };
    if (threshold === 35) return { id: "teacher_strict_35", title: "老師給了你更清楚的練習方法", body: "老師把練習拆細，讓你先看最常錯的地方。", effects: [{ type: "statChange", stat: "學業", amount: 1 }, { type: "statChange", stat: "理智值", amount: 1 }] };
    if (threshold === 45) return { id: "teacher_strict_45", title: "老師多給你一張針對練習", body: "老師沒有加重語氣，只把你最需要補的部分列出來。", effects: [{ type: "statChange", stat: "學業", amount: 2 }] };
  }
  if (encouraging) {
    if (threshold === 25) return { id: "teacher_encouraging_25", title: "老師讓你慢慢重試", body: "老師看見你肯重新試一次，把那張練習紙留給你慢慢做，還說不用一次就全對。", effects: [{ type: "statChange", stat: "自信", amount: 1 }] };
    if (threshold === 35) return { id: "teacher_encouraging_35", title: "老師提醒你看見自己進步", body: "老師把你做對的一步圈出來，讓你知道自己不是完全不會。", effects: [{ type: "statChange", stat: "自信", amount: 1 }, { type: "statChange", stat: "學業", amount: 1 }] };
    if (threshold === 45) return { id: "teacher_encouraging_45", title: "老師讓你保留一份成功經驗", body: "老師把你完成得最好的部分留下來，提醒你下次可以照這個方法再試。", effects: [{ type: "statChange", stat: "自信", amount: 2 }] };
  }
  if (fair) {
    if (threshold === 25) return { id: "teacher_fair_25", title: "老師給你一個清楚標準", body: "老師沒有偏幫任何人，只把規則和標準講得更清楚。", effects: [{ type: "statChange", stat: "理智值", amount: 1 }] };
    if (threshold === 35) return { id: "teacher_fair_35", title: "老師幫你把問題分清楚", body: "老師把你卡住的地方和已經做對的地方分開，讓事情沒有那麼混亂。", effects: [{ type: "statChange", stat: "學業", amount: 1 }, { type: "statChange", stat: "理智值", amount: 1 }] };
    if (threshold === 45) return { id: "teacher_fair_45", title: "老師讓你知道自己可以靠方法改善", body: "老師公平地指出問題，也讓你看見下一步可以怎樣做。", effects: [{ type: "statChange", stat: "自信", amount: 1 }, { type: "statChange", stat: "學業", amount: 1 }] };
  }
  if (caring) {
    if (threshold === 25) return { id: "teacher_caring_25", title: "老師讓你先穩住心情", body: "老師沒有急著推你上前，只是先給你一個比較容易開始的位置。", effects: [{ type: "statChange", stat: "理智值", amount: 1 }] };
    if (threshold === 35) return { id: "teacher_caring_35", title: "老師讓你先試一小段", body: "老師沒有把你推上台，只是把朗誦稿放到你桌角，說可以先讀一段看看。", effects: [{ type: "statChange", stat: "自信", amount: 1 }, { type: "statChange", stat: "社交", amount: 1 }] };
    if (threshold === 45) return { id: "teacher_caring_45", title: "老師替你找了一個合適入口", body: "老師把活動拆成一個比較小的嘗試，讓你不用一下子面對全部人。", effects: [{ type: "statChange", stat: "自信", amount: 1 }, { type: "statChange", stat: "創意", amount: 1 }] };
  }
  return null;
}

function tutorReward(threshold) {
  if (threshold === 25) return { id: "tutor_25", title: "補習老師拆細了題目", body: "補習老師沒有再叫你一次做完整頁，而是圈出你最常錯的兩題，讓你先學會一種方法。", effects: [{ type: "statChange", stat: "學業", amount: 1 }, { type: "statChange", stat: "理智值", amount: 1 }] };
  if (threshold === 35) return { id: "tutor_35", title: "補習老師開始整理錯題類型", body: "補習老師把相似的錯題排在一起，讓你看見自己不是每題都重新迷路。", effects: [{ type: "statChange", stat: "學業", amount: 2 }] };
  if (threshold === 45) return { id: "tutor_45", title: "補習老師教你先圈關鍵字", body: "補習老師發現你不是不懂，而是每次看到長題目就慌，於是教你先圈關鍵字。", effects: [{ type: "statChange", stat: "學業", amount: 1 }, { type: "statChange", stat: "自信", amount: 1 }] };
  return null;
}

export function getRelationshipMilestoneReward(character, threshold) {
  const identity = character?.generatedFromIdentityType || character?.identityTypeId || character?.identity;
  if (identity === "family_elder" || identity === "family_peer") return familyReward(character, threshold);
  if (identity === "teacher") return teacherReward(character, threshold);
  if (identity === "tutor") return tutorReward(threshold);
  return null;
}
