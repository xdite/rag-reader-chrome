document.getElementById('sendUrl').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let currentUrl = tabs[0].url;
    let targetUrl = `http://localhost:8501/?youtube_url=${encodeURIComponent(currentUrl)}`;
    
    // 在新標籤頁中打開目標URL
    chrome.tabs.create({ url: targetUrl });
  });
});