// js/storage.js
// 用 localStorage 實作儲存／讀取，唔負責遊戲邏輯

const SAVE_KEY = "hklife_save_v5";

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
    return JSON.parse(raw);
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
