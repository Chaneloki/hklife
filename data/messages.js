// data/messages.js
// 舊版：呢度逐條寫死成班固定角色（媽媽、陳老師、李明……）嘅完整訊息內容。
// 新版：訊息內容改由 messageTemplates.js（通用場景模板）同 academicEvents.js（P1–P3 學術事件目錄）提供，
// 呢度淨係喺模組載入嗰陣將佢哋展開做 engine.js 睇得明嘅 message 物件。
// engine.js 完全唔使改：`messages` 陣列同 `getMessageById()` 嘅形狀、行為同舊版一樣。
//
// message schema 詳見 messageBuilder.js／messageTemplates.js／academicEvents.js 頭部註解。

import { messageTemplates } from "./messageTemplates.js";
import { academicEvents } from "./academicEvents.js";
import { buildMessageFromTemplate, buildMessageFromEvent } from "./messageBuilder.js";

// 保險過濾：就算作者一時唔覺意將 disabled／isSample 資料留咗喺 authored 陣列度，都唔會俾佢哋入到正式遊戲
const liveTemplates = messageTemplates.filter(t => t.enabled !== false && !t.isSample);
const liveEvents = academicEvents.filter(e => e.enabled !== false && !e.isSample);

export const messages = [
  ...liveTemplates.map(buildMessageFromTemplate),
  ...liveEvents.map(buildMessageFromEvent)
];

export function getMessageById(id) {
  return messages.find(m => m.id === id);
}
