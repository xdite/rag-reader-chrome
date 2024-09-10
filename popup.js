document.getElementById('sendUrl').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let currentUrl = tabs[0].url;
    let targetUrl = `http://localhost:8501/?youtube_url=${encodeURIComponent(currentUrl)}`;
    
    // 在新的獨立窗口中打開目標URL，設定寬度為1000像素
    chrome.windows.create({ 
      url: targetUrl, 
      type: 'popup',
      width: 1000,
      height: 800
    });
  });
});