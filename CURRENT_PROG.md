# Project DIVA Web — Progress

## Completed Features

- Frontend: React 19 + Vite + React Router + react-i18next (en/vi)
- **Diva Room Accent Sync:** `useDivaAccent` hook, localStorage `diva-accent`, `--page-accent` CSS variable, Characters flip triggers accent
- **DIVA History Scroller:** `useScrollReveal` + `.version-timeline--reveal` on Version & Gameplay
- **PV Director Mode:** `usePvDirector` + `PvDirectorControls` — camera presets (wide/close/dynamic) on gameplay videos
- **Technical Zone HUD:** `useTechnicalZone` + `TechZoneBar` on Version & Gameplay and Skin & Song videos
- **Magical Mirai Penlight Sync:** `useCanvasParticles` burst mode + `penlightColor` on CONCERTS, click concert items to trigger burst
- `useParticles` refactored as wrapper around `useCanvasParticles` (ambient mode for Home)
- Dead code removed: `PLATFORMS` / `REGIONS` from `content.js`
- Home UI: scroll hint + characters link i18n; video accessibility (aria-label, captions track)
- App.jsx `isHome` prop correct

## Current Task

_None — awaiting user approval for next task._

## Completed (docs)

- Full code audit (Phase 1–3) saved to `audit_report.md` (read-only; no code changes applied)

## Known Bugs / Pending

- `settings_lang` missing in en/vi locales (Settings shows raw key) — see audit L1
- `content.js`: skin `producer`/`song`, character `alt`, concert metadata still inline
- Producers footer attribution string not i18n
- Orphan locale keys (`gh_*`, etc.) and dead GH filter CSS — see audit report
- Backend (Spring Boot) not implemented
- RAG chatbot not started