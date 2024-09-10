chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "sendToRagReader",
    title: "Send to RAG READER",
    contexts: ["link"],
    targetUrlPatterns: ["*://www.youtube.com/*", "*://youtu.be/*"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "sendToRagReader") {
    let videoUrl = info.linkUrl || tab.url;
    let targetUrl = `http://localhost:8501/?youtube_url=${encodeURIComponent(videoUrl)}`;
    chrome.tabs.create({ url: targetUrl });
  }
});