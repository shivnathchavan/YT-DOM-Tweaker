const cleanerFunctions = {
  firstSectionToggle: hide => {
    const el = document.querySelectorAll('#sections ytd-guide-section-renderer')[0];
    if (el) el.style.display = hide ? 'none' : '';
  },
  homeItemToggle: hide => {
    const el = document.querySelectorAll('#sections ytd-guide-section-renderer')[0]?.querySelectorAll('ytd-guide-entry-renderer')[0];
    if (el) el.style.display = hide ? 'none' : '';
  },
  shortsItemToggle: hide => {
  // Hide the Shorts sidebar entry
  const sidebarEl = document.querySelectorAll('#sections ytd-guide-section-renderer')[0]
    ?.querySelectorAll('ytd-guide-entry-renderer')[1];
  if (sidebarEl) sidebarEl.style.display = hide ? 'none' : '';

  // Additionally hide Shorts rows on the homepage
  const richSections = document.querySelectorAll('ytd-two-column-browse-results-renderer')[0]
    ?.querySelectorAll('ytd-rich-section-renderer');

  if (richSections) {
    richSections.forEach(section => {
      const isShorts = section.querySelector('ytd-rich-shelf-renderer');
      const shelfTitle = section.querySelector('ytd-rich-shelf-renderer h2')?.textContent || '';

      if (isShorts && shelfTitle.toLowerCase().includes('shorts')) {
        section.style.display = hide ? 'none' : '';
      }
    });
  }
}
,
  subscriptionsItemToggle: hide => {
    const el = document.querySelectorAll('#sections ytd-guide-section-renderer')[0]?.querySelectorAll('ytd-guide-entry-renderer')[2];
    if (el) el.style.display = hide ? 'none' : '';
  },
  youItemToggle: hide => {
    const el = document.querySelectorAll('#sections ytd-guide-section-renderer')[0]?.querySelectorAll('ytd-guide-entry-renderer')[3];
    if (el) el.style.display = hide ? 'none' : '';
  },
  historyItemToggle: hide => {
    const el = document.querySelectorAll('#sections ytd-guide-section-renderer')[0]?.querySelectorAll('ytd-guide-entry-renderer')[4];
    if (el) el.style.display = hide ? 'none' : '';
  },
  playlistItemToggle: hide => {
    const el = document.querySelectorAll('#sections ytd-guide-section-renderer')[0]?.querySelectorAll('ytd-guide-entry-renderer')[5];
    if (el) el.style.display = hide ? 'none' : '';
  },
  yourVideosItemToggle: hide => {
    const el = document.querySelectorAll('#sections ytd-guide-section-renderer')[0]?.querySelectorAll('ytd-guide-entry-renderer')[6];
    if (el) el.style.display = hide ? 'none' : '';
  },
  watchLaterItemToggle: hide => {
    const el = document.querySelectorAll('#sections ytd-guide-section-renderer')[0]?.querySelectorAll('ytd-guide-entry-renderer')[7];
    if (el) el.style.display = hide ? 'none' : '';
  },
  likedVideosItemToggle: hide => {
    const el = document.querySelectorAll('#sections ytd-guide-section-renderer')[0]?.querySelectorAll('ytd-guide-entry-renderer')[8];
    if (el) el.style.display = hide ? 'none' : '';
  },
  thirdSectionToggle: hide => {
    const el = document.querySelectorAll('#sections ytd-guide-section-renderer')[1];
    if (el) el.style.display = hide ? 'none' : '';
  },
  exploreToggle: hide => {
    const el = document.querySelectorAll('#sections ytd-guide-section-renderer')[2];
    if (el) el.style.display = hide ? 'none' : '';
  },
  trendingToggle: hide => {
    const el = document.querySelectorAll('#sections ytd-guide-section-renderer')[2]?.querySelectorAll('ytd-guide-entry-renderer')[0];
    if (el) el.style.display = hide ? 'none' : '';
  },
  shoppingToggle: hide => {
    const el = document.querySelectorAll('#sections ytd-guide-section-renderer')[2]?.querySelectorAll('ytd-guide-entry-renderer')[1];
    if (el) el.style.display = hide ? 'none' : '';
  },
  musicToggle: hide => {
    const el = document.querySelectorAll('#sections ytd-guide-section-renderer')[2]?.querySelectorAll('ytd-guide-entry-renderer')[2];
    if (el) el.style.display = hide ? 'none' : '';
  },
  moviesToggle: hide => {
    const el = document.querySelectorAll('#sections ytd-guide-section-renderer')[2]?.querySelectorAll('ytd-guide-entry-renderer')[3];
    if (el) el.style.display = hide ? 'none' : '';
  },
  liveToggle: hide => {
    const el = document.querySelectorAll('#sections ytd-guide-section-renderer')[2]?.querySelectorAll('ytd-guide-entry-renderer')[4];
    if (el) el.style.display = hide ? 'none' : '';
  },
  gamingToggle: hide => {
    const el = document.querySelectorAll('#sections ytd-guide-section-renderer')[2]?.querySelectorAll('ytd-guide-entry-renderer')[5];
    if (el) el.style.display = hide ? 'none' : '';
  },
  newsToggle: hide => {
    const el = document.querySelectorAll('#sections ytd-guide-section-renderer')[2]?.querySelectorAll('ytd-guide-entry-renderer')[6];
    if (el) el.style.display = hide ? 'none' : '';
  },
  sportsToggle: hide => {
    const el = document.querySelectorAll('#sections ytd-guide-section-renderer')[2]?.querySelectorAll('ytd-guide-entry-renderer')[7];
    if (el) el.style.display = hide ? 'none' : '';
  },
  coursesToggle: hide => {
    const el = document.querySelectorAll('#sections ytd-guide-section-renderer')[2]?.querySelectorAll('ytd-guide-entry-renderer')[8];
    if (el) el.style.display = hide ? 'none' : '';
  },
  fashionToggle: hide => {
    const el = document.querySelectorAll('#sections ytd-guide-section-renderer')[2]?.querySelectorAll('ytd-guide-entry-renderer')[9];
    if (el) el.style.display = hide ? 'none' : '';
  },
  podcastsToggle: hide => {
    const el = document.querySelectorAll('#sections ytd-guide-section-renderer')[2]?.querySelectorAll('ytd-guide-entry-renderer')[10];
    if (el) el.style.display = hide ? 'none' : '';
  },
  moreYTToggle: hide => {
    document.querySelectorAll('ytd-guide-section-renderer').forEach(section => {
      const title = section.querySelector('#guide-section-title');
      if (title?.textContent.trim() === 'More from YouTube') {
        section.style.display = hide ? 'none' : '';
      }
    });
  },
  fifthSectionToggle: hide => {
    const el = document.querySelectorAll('#sections ytd-guide-section-renderer')[4];
    if (el) el.style.display = hide ? 'none' : '';
  },
  footerToggle: hide => {
    const el = document.getElementById('footer');
    if (el) el.style.display = hide ? 'none' : '';
  },
  mastheadButtonsToggle: hide => {
    const el = document.querySelector('#buttons.ytd-masthead');
    if (el) el.style.display = hide ? 'none' : '';
  },
  createButtonsToggle: hide => {
    const el = document.querySelectorAll('#buttons.ytd-masthead')[0]?.querySelectorAll('ytd-button-renderer')[0];
    if (el) el.style.display = hide ? 'none' : '';
  },
  notiButtonsToggle: hide => {
    const el = document.querySelectorAll('#buttons.ytd-masthead')[0]?.querySelectorAll('ytd-notification-topbar-button-renderer')[0];
    if (el) el.style.display = hide ? 'none' : '';
  },
  menuButtonsToggle: hide => {
    const el = document.querySelectorAll('#buttons.ytd-masthead')[0]?.querySelectorAll('ytd-topbar-menu-button-renderer')[0];
    if (el) el.style.display = hide ? 'none' : '';
  }
};

function clickShowMoreIfExists() {
  const showMore = document.querySelector('#expander-item');
  if (showMore && showMore.offsetParent !== null) {
    showMore.click();
  }
}

function applySettings(settings) {
  clickShowMoreIfExists(); // ✅ Ensure Show More is clicked before applying settings
  for (const [key, fn] of Object.entries(cleanerFunctions)) {
    fn(settings[key]);
  }
}

function waitForYouTubeToLoad(callback) {
  const interval = setInterval(() => {
    if (document.querySelector('#sections')) {
      clearInterval(interval);
      callback();
    }
  }, 500);
}

waitForYouTubeToLoad(() => {
  chrome.storage.local.get(Object.keys(cleanerFunctions), applySettings);

  const observer = new MutationObserver(() => {
    chrome.storage.local.get(Object.keys(cleanerFunctions), applySettings);
  });
  observer.observe(document.body, { childList: true, subtree: true });
});

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === 'updateVisibility') {
    chrome.storage.local.get(Object.keys(cleanerFunctions), applySettings);
  }
});
