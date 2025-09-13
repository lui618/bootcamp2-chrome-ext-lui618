const highlightBtn = document.getElementById('highlight');
const removeBtn = document.getElementById('remove');
const statusEl = document.getElementById('status');

highlightBtn.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: () => {
        document.querySelectorAll('a').forEach(a => {
          a.style.outline = '2px solid #ec0089';
        });
      }
    });
    statusEl.textContent = 'Links destacados!';
  });
});

removeBtn.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: () => {
        document.querySelectorAll('a').forEach(a => {
          a.style.outline = '';
        });
      }
    });
    statusEl.textContent = 'Destaque removido!';
  });
});
