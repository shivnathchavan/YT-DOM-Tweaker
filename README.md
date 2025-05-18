# 🎯 UI Cleaner Extension for YouTube & Instagram

This Chrome extension allows you to **customize, hide, and simplify** sections of YouTube and Instagram for a cleaner, distraction-free experience.  
Ideal for users who want to focus on content and remove clutter from the interface.

---

## 🚀 Features

- 🎥 **YouTube UI Customization**:
  - Hide sidebar sections: Home, Shorts, Subscriptions, Explore, History, etc.
  - Remove unwanted suggestions and distractions.
  - Keep only the elements you need.

- 📸 **Instagram UI Customization**:
  - Hide buttons: Home, Search, Explore, Reels, Messages, Notifications, etc.
  - Remove “Suggested for You” and “About” sections.
  - Optional compact layout and maximized story view.

- 🌓 **Dark Mode**: Toggle between light and dark themes.

- 💾 **Persistent Settings**: All customizations are saved using Chrome's local storage and restored automatically.

- ⚡ **Lightweight and Fast**: Instant toggle response without slowing down your browser.

---

## 🛠 Installation Guide (Chrome)

Follow these steps to manually install the extension in Google Chrome:

### ✅ Step 1: Download or Clone the Project

You can either:

- Clone the project using Git:

  ```bash
  git clone https://github.com/your-username/ui-cleaner-extension.git
``
### ✅ Step 2: Open the Chrome Extensions Page
Launch Google Chrome.

In the address bar, enter:

arduino
Copy
Edit
chrome://extensions/
Or use the menu:
⋮ → More Tools → Extensions

### ✅ Step 3: Enable Developer Mode
In the top-right corner of the Extensions page, toggle the Developer mode switch ON.

### ✅ Step 4: Load the Extension
```Click the "Load unpacked" button.```

Select the folder containing the extension files (the one with manifest.json).

### ✅ Step 5: Use the Extension
Click the extension icon in the Chrome toolbar.

Use the toggle switches to hide or show UI sections on YouTube and Instagram.

```Refresh the page to apply the changes.```

### 🔁 Updating the Extension After Code Changes
If you make changes to files such as popup.js, content.js, or manifest.json:

```Open chrome://extensions/.```

Click the Reload button under the extension.

This re-applies your changes without needing to reinstall the extension.

### 📁 Project Folder Structure
bash
Copy
Edit
```📁 ui-cleaner-extension/
├── manifest.json              # Extension config (permissions, files)
├── popup.html                 # UI for extension popup
├── popup.js                   # JS logic for toggles and communication
├── content.js                 # Content script for YouTube
├── styles.css                 # Styles for popup.html
└── icon.png
```
### 🔐 Permissions Used
activeTab – Access and modify the currently active tab

storage – Save and restore user toggle settings

scripting – Dynamically inject content scripts

tabs – Identify and communicate with active tabs

All data stays in your browser — nothing is sent or collected externally.

📬 Support
For questions, suggestions, or bug reports, open an issue or pull request in the GitHub repository.

🧽 Customize your online experience. Hide the noise. Focus on what matters.

---
