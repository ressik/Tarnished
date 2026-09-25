TARNISHED — INSTALLABLE WEB APP

Ready-to-upload static PWA. No build command, server, database, or paid domain needed.

EASIEST UPLOAD: CLOUDFLARE PAGES
1. Sign in or create a free Cloudflare account.
2. Open Workers & Pages, create a Pages application, and choose the Direct Upload / drag-and-drop option.
3. Upload Tarnished-PWA.zip (or the extracted folder contents). index.html must be at the upload root.
4. Choose a project name and deploy. Open the provided HTTPS pages.dev address.
Cloudflare's current instructions: https://developers.cloudflare.com/pages/get-started/direct-upload/
Direct Upload projects cannot be converted to Git integration in place; create a Git-integrated project from the start if you prefer automatic updates from GitHub.

ALTERNATIVE: GITHUB PAGES
1. Create a public repository such as tarnished.
2. Extract this archive and upload its files at the repository root (including .nojekyll).
3. In Settings > Pages, choose Deploy from a branch, main, and / (root).
4. Open the HTTPS Pages URL after deployment finishes.
Documentation: https://docs.github.com/en/pages/quickstart
The manifest and service worker use relative paths, so /tarnished/ project hosting works.

INSTALL ON ANDROID
Open the deployed URL in Chrome. Wait for the app to say Ready offline.
Tap Install Tarnished if it appears, or Chrome menu > Add to home screen > Install.
The installed app is named Tarnished. After its initial online load, checklists and embedded photos work offline. Wiki links still need internet.
This ZIP is not an APK. Downloading the ZIP or opening index.html directly does not install a PWA.

BRING YOUR PROGRESS
In your old HTML tracker, choose Export backup. In the hosted Tarnished app, choose Import backup and select that JSON file. Saves from local files or other domains do not automatically move. The existing backup format and local-storage key are preserved. Export regularly; clearing browser/site data removes progress. There is no automatic cross-device sync.

UPDATES
Upload the full new PWA package to the same site. If Update app appears, tap it to activate the cached update. Keep the same URL to retain local saves. Source edits must also change VERSION in sw.js so the cached shell updates.

FILES
index.html: complete editable tracker source, dataset, photos, and license notices
manifest.webmanifest: app identity and installation metadata
sw.js: versioned offline cache and update support
icon-192.png / icon-512.png: app icons
.nojekyll: GitHub Pages static hosting marker
_headers: optional Cloudflare cache/MIME headers

LICENSES AND SOURCES
Application and adapted Roundtable Guides checklist: GPL-3.0-or-later; full license and credits are embedded in Help & sources in index.html. Game artwork remains copyright FromSoftware / Bandai Namco. This is an unofficial fan tracker.

VALIDATION
Application interactions and PWA file/cache logic were checked in the execution environment. Android installation and real-browser offline behavior still require a check on the deployed HTTPS site.
