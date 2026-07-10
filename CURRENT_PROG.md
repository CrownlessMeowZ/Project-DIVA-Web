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
- **Audit Batch 1 (L1/L2/L4/L5/L12):** `settings_lang`, `footer_producers_src`, `nav_toggle` keys; orphan `gh_*`/`btn_*`/`lbl_official_*` keys removed; Home `chars_sub` strip removed; Producers footer i18n; Topbar hamburger aria-label i18n

## Current Task

_Batch 1 (audit L1, L2, L4, L5, L12) applied — awaiting user manual test approval before next batch._

## Completed (docs)

- Full code audit (Phase 1–3) saved to `audit_report.md` (read-only; no code changes applied)

## Known Bugs / Pending

- `content.js`: skin `producer`/`song`, character `alt`, concert metadata still inline
- Dead GH filter CSS — see audit report (M3)
- Topbar hamburger `nav_toggle` i18n — done in Batch 1
- Backend (Spring Boot) not implemented
- RAG chatbot not started