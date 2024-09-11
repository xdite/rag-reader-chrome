# YouTube RAG Reader Chrome 擴展程序

這是一個 Chrome 擴展程序，允許用戶將 YouTube 視頻鏈接發送到本地運行的 RAG Reader 應用程序。

## 功能

- 在 YouTube 頁面上添加右鍵菜單選項，可以直接將視頻鏈接發送到 RAG Reader
- 通過擴展程序彈出窗口，可以發送當前標籤頁的 YouTube URL 到 RAG Reader
- 在屏幕右側打開 RAG Reader 應用程序，不影響當前瀏覽

## 安裝

1. 克隆或下載此倉庫到本地
2. 打開 Chrome 瀏覽器，進入 `chrome://extensions/`
3. 開啟右上角的 "開發者模式"
4. 點擊 "載入未封裝項目"，選擇包含此擴展程序的文件夾

## 使用方法

1. 在 YouTube 視頻頁面上，右鍵點擊視頻鏈接，選擇 "Send to RAG READER"
2. 或者點擊擴展程序圖標，在彈出窗口中點擊 "發送URL" 按鈕

擴展程序會在屏幕右側打開一個新窗口，顯示 RAG Reader 應用程序，並自動將視頻 URL 傳遞給它。

## 注意事項

- 確保 RAG Reader 應用程序在本地 `http://localhost:8501` 運行
- 此擴展程序僅支持 YouTube 視頻鏈接

## 開發

主要文件：
- `popup.html` 和 `popup.js`: 控制擴展程序彈出窗口的行為
- `background.js`: 處理右鍵菜單和後台邏輯

如需修改擴展程序行為，請編輯相應的 JavaScript 文件。

