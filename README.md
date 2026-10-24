# Dan — a little forward

A clean, responsive personal dashboard for steady routines and practical progress in personal development and AI/technology. Plain HTML, CSS and JavaScript; no framework, build step, account, API key, or runtime dependencies.

## Run locally

Install Node.js 20 or later, then:

```sh
git clone https://github.com/doublebllered/dan.git
cd dan
npm start
```

Open **http://localhost:3000**. No `npm install` is needed. Set `PORT=3001 npm start` to use a different port. Run from an HTTP server rather than opening `index.html` directly, because the app uses JavaScript modules.

## What works

- **Today:** add, edit, delete, and check off daily routines. Check-ins reset each calendar day; previous days remain in progress history.
- **Weekly goals:** create, edit, complete, and remove goals, with Monday-based weeks. Previous goals remain visible; edit their week to carry them forward.
- **90-day direction:** edit your direction, start date, three phases, and their milestones. Check off milestones as you go. Time elapsed and actual completed milestones are shown separately.
- **Progress:** a seven-day routine chart, weekly goal totals, focus-session logging, and JSON backup export/import.
- Starter data begins on first use with zero completed work. Suggested learning and growth time is 8–12 hours per week; this is a guide, not a requirement.

## Saving and privacy

Data is saved automatically in `localStorage` under `dan-dashboard-v1`, on this browser and origin only. Nothing is sent to GitHub or a server. Different devices, browsers, ports, and deployed URLs have separate data. Export a backup from Progress before clearing browser data or changing devices, then import it at the new location. Import replaces existing data after confirmation. Private browsing may discard data. Storage failures are displayed in the app; unreadable data is not silently overwritten.

This is a single-browser first version: there is no login, cloud sync, or multi-tab conflict resolution. Prefer one active tab. Weekly goals start fresh each Monday. The app uses your browser’s local date/time. Deleting a routine removes its current-day check-in but preserves older history.

## Validate

```sh
npm test
```

Built-in Node tests cover starter state, Monday week boundaries, 90-day date arithmetic, daily check-ins, and backup validation. Browser smoke-test checklist: add/edit/delete a routine and goal; check items and reload; edit a phase; log a focus session; export/import a backup; check phone-width layout and keyboard navigation.

## Extend

- `index.html`: accessible app shell, navigation, editing dialog.
- `styles.css`: responsive visual system.
- `model.js`: starter data, date logic, state validation.
- `app.js`: views, forms, browser persistence, backups.
- `server.js`: small local-only static server.
- `tests/model.test.js`: dependency-free model tests.

For static hosting, publish `index.html`, `styles.css`, `app.js`, and `model.js` together. Relative asset paths and hash navigation also work under a repository subpath such as `/dan/`. No hosting is provisioned by this repository. Add a storage adapter and authentication if cross-device sync is needed; keep private user data out of committed source files.
