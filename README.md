# S.T.O.P. (DarkPause Pro) 🚀

> **Strategic Timing & Overlay Protocol**
> 一款基於 Chrome Manifest V3 規範開發的商業級生產力工具，旨在透過強制的黑屏介入與 Lua 腳本擴展，協助用戶重建專注力。

---

## 📌 核心功能 (Core Features)

* **精準介入系統**：自定義運行間隔與休息時間，支援毫秒級流暢倒計時渲染[cite: 4, 6]。
* **Lua 擴展引擎**：內嵌 Fengari 虛擬機，允許開發者透過 Lua 腳本自定義黑屏行為與 UI 樣式[cite: 4, 6]。
* **多媒體提醒**：支援用戶上傳自定義 MP3，透過 Offscreen Document 實現穩定音效播放[cite: 5, 6]。
* **多國語言支援 (i18n)**：預置繁體中文、英文、日文與韓文介面[cite: 1, 4, 6]。
* **無障礙設計 (A11y)**：整合 Focus Trap 與 ARIA 動態標籤，確保身心障礙用戶使用無礙[cite: 4]。

---

## 🛠️ 技術架構 (Architecture)

本計畫採用高度模組化設計，確保系統的穩定性與可維護性[cite: 3, 4]：

*   **`src/background/`**：核心計時引擎與狀態管理器，處理跨分頁同步邏輯[cite: 2, 4]。
*   **`src/content/`**：使用 Shadow DOM 隔離技術，在不污染原網頁 CSS 的情況下注入黑屏層[cite: 4, 6]。
*   **`src/Lua/`**：隔離的腳本運行沙盒，提供 JS-Bridge 供 Lua 調用[cite: 4, 6]。
*   **`src/audio/`**：基於 IndexedDB 的大型音訊檔案存儲系統[cite: 5, 6]。
*   **`_locales/`**：符合 Chrome 規範的多語系配置資料夾[cite: 1, 4]。

---

## 🚀 安裝與開發 (Installation)

1. 下載本專案並解壓縮。
2. 開啟 Chrome 瀏覽器，進入 `chrome://extensions/`。
3. 開啟右上角的「開發者模式」。
4. 點擊「載入解壓縮擴展程式」，並選擇 `DarkPause_Final` 資料夾[cite: 4, 6]。

---

## 🎨 視覺美學 (Aesthetics)

* **風格**：Hacker Mode / Dark Mode。
* **元素**：Glitchcore 視覺提醒、Monospace 終端字體、透明背景 PNG 圖示[cite: 5, 6]。

---

## 📜 授權 (License)

由 **Zeta369 Studio** 開發，保留所有權利。支援開源社群擴展。

---

> **"It's time to S.T.O.P. and focus."** 🛑
