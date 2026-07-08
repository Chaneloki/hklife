// js/storage.js
// 用 localStorage 實作儲存／讀取，唔負責遊戲邏輯

import { DATA_VERSION } from "./state.js";

// content_reset_v1：內容層清空同舊存檔格式唔兼容，所以 bump key，
// 令舊嘅 localStorage 存檔自動變成搵唔到（唔會被硬讀入嚟，避免舊 characterId／eventId／messageId 搵唔返資料）
const SAVE_KEY = "hklife_save_v7_content_reset";

export function saveGame(state) {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    return true;
  } catch (e) {
    console.error("儲存失敗：", e);
    return false;
  }
}

export function loadGame() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed.dataVersion !== DATA_VERSION) {
      console.warn("存檔資料版本已過時，唔會載入，請開始新人生。");
      return null;
    }
    return parsed;
  } catch (e) {
    console.error("讀取失敗：", e);
    return null;
  }
}

export function hasSavedGame() {
  return localStorage.getItem(SAVE_KEY) !== null;
}

export function resetGame() {
  localStorage.removeItem(SAVE_KEY);
}

// 檢查有冇「舊版本」存檔（key 唔同、資料版本已經被淘汰），俾開始畫面提示玩家，唔會嘗試硬讀
export function hasStaleOldSave() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith("hklife_save_") && key !== SAVE_KEY) return true;
  }
  return false;
}
