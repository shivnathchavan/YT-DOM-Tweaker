const toggles = [
  "firstSectionToggle",
  "homeItemToggle",
  "shortsItemToggle",
  "subscriptionsItemToggle",
  "youItemToggle",
  "historyItemToggle",
  "playlistItemToggle",
  "yourVideosItemToggle",
  "watchLaterItemToggle",
  "likedVideosItemToggle",
  "thirdSectionToggle",
  "exploreToggle",
  "trendingToggle",
  "shoppingToggle",
  "musicToggle",
  "moviesToggle",
  "liveToggle",
  "gamingToggle",
  "newsToggle",
  "sportsToggle",
  "coursesToggle",
  "fashionToggle",
  "podcastsToggle",
  "moreYTToggle",
  "fifthSectionToggle",
  "mastheadButtonsToggle",
  "createButtonsToggle",
  "notiButtonsToggle",
  "menuButtonsToggle",
  "footerToggle"
];

const homeChildren = document.getElementById("homeChildren");
const exploreChildren = document.getElementById("exploreChildren");
const buttonChildren = document.getElementById("buttonChildren");

function toggleHomeChildren(visible) {
  homeChildren.style.display = visible ? 'block' : 'none';
}
function toggleExploreChildren(visible) {
  exploreChildren.style.display = visible ? 'block' : 'none';
}
function toggleButtonChildren(visible) {
  buttonChildren.style.display = visible ? 'block' : 'none';
}

chrome.storage.local.get(toggles, (settings) => {
  toggles.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.checked = settings[id] !== undefined ? settings[id] : true;
  });

  // Show/hide nested sections in the popup UI
  toggleHomeChildren(!document.getElementById("firstSectionToggle").checked);
  toggleExploreChildren(!document.getElementById("exploreToggle").checked);
  toggleButtonChildren(!document.getElementById("mastheadButtonsToggle").checked);

  // ✅ Apply all visibility settings immediately when popup loads
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "updateVisibility" });
  });
});

toggles.forEach(id => {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener("change", () => {
    chrome.storage.local.set({ [id]: el.checked }, () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "updateVisibility" });
      });
    });

    // Handle nested group visibility
    if (id === "firstSectionToggle") toggleHomeChildren(!el.checked);
    if (id === "exploreToggle") toggleExploreChildren(!el.checked);
    if (id === "mastheadButtonsToggle") toggleButtonChildren(!el.checked);
  });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'toggleMusic') {
    // do something
    sendResponse({ success: true });
  }
});
