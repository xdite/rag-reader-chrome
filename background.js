chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "sendToRagReader",
    title: "Send to RAG READER",
    contexts: ["link"],
    targetUrlPatterns: ["*://www.youtube.com/*", "*://youtu.be/*"]
  });
});

function openWindowOnRight(url) {
  chrome.windows.getCurrent({}, (currentWindow) => {
    const width = 1000;
    const height = 800;
    const top = currentWindow.top;
    let left = currentWindow.left + currentWindow.width;

    // 檢查是否超出屏幕右邊界
    chrome.system.display.getInfo((displays) => {
      const display = displays[0];  // 假設使用主顯示器
      if (left + width > display.bounds.width) {
        left = display.bounds.width - width;
      }

      chrome.windows.create({ 
        url: url, 
        type: 'popup',
        width: width,
        height: height,
        top: top,
        left: left
      });
    });
  });
}

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "sendToRagReader") {
    let videoUrl = info.linkUrl || tab.url;
    let targetUrl = `http://localhost:8501/?youtube_url=${encodeURIComponent(videoUrl)}`;
    openWindowOnRight(targetUrl);
  }
});