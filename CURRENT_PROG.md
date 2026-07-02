# Project DIVA Web — Progress

## Completed Features

- Frontend: React 19 + Vite + React Router + react-i18next (en/vi) — **frontend cleanup complete**
- All pages localized; `content.js` descriptive fields use `*Key` pattern
- Home UI: scroll hint + characters link i18n
- Dead code removed: `HISTORY` array + `filterHistory` from `content.js`
- Video accessibility: localized `aria-label`, `<track kind="captions">`, fallback text
- One-time migration `scripts/` folder removed

## Current Task

_Ready for backend integration — awaiting user approval._

## Known Bugs / Pending

- `content.js`: `PLATFORMS`/`REGIONS` exports unused; skin `producer`/`song`, character `alt`, concert metadata still inline
- Producers footer attribution string not i18n
- Backend (Spring Boot) not implemented
- RAG chatbot not started