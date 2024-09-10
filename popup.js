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

document.getElementById('sendUrl').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let currentUrl = tabs[0].url;
    let targetUrl = `http://localhost:8501/?youtube_url=${encodeURIComponent(currentUrl)}`;
    openWindowOnRight(targetUrl);
  });
});