// data/stageRules.js
// 階段規則：小一至中三前，玩家一定係普通學生，唔可以真正輟學、入獄、加入黑社會、
// 成為成人贊助關係或者正式出道做成人偶像。呢啲淨係可以做「路線種子」，留返之後階段先開放。
//
// 呢個 prototype 目前內容只做到小一至小三（stage_p1~p3），mandatoryStudentUntil 同
// dropoutAllowedAfterStage 用 "S3"（中三）標記，係俾未來擴展用嘅資料骨架。

export const stageRules = {
  mandatoryStudentUntil: "S3",
  dropoutAllowedAfterStage: "S3",

  // 呢啲路線淨係成年（或者中三後特定條件）先可以正式開啟，之前只會係種子
  adultOnlyRoutes: ["sponsorRoute", "riskRoute"],

  // 呢啲種子中三前只可以以安全、輕微形式出現，唔可以觸發真正嘅高風險內容
  restrictedRouteSeedsBeforeS3: ["streetSeed", "riskSeed", "sponsorSeed"],

  // 內容呈現原則，俾資料作者（同 engine 嘅提示文字）跟
  safePresentationRules: [
    "唔教玩家犯罪方法，街坊／地下人脈種子淨係人情味同市井智慧",
    "sponsorSeed 成年前唔可以出現包養或者性暗示內容，只代表見識同人脈",
    "riskSeed 中三前只會引來身邊人關心，唔會真正入獄或者輟學",
    "所有路線種子都係中性描述，唔用「好／壞」評分語氣"
  ]
};

export function isRouteSeedRestricted(seedId, stageId) {
  // 目前遊戲內容淨係去到小三，全部都算「S3 之前」，所以受限種子一律用安全形式顯示
  return stageRules.restrictedRouteSeedsBeforeS3.includes(seedId);
}
