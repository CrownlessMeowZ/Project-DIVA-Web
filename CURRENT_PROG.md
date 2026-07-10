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
- **Audit Batch 2 (L3/L6/L7/L8/L9/L10/L11):** removed dead `game` field on EXTRA_CHARACTERS; flip-card keyboard a11y (Characters + SkinSpotlight); scroll `behavior: 'auto'`; try/catch on all localStorage writes; GameHistory uses `useApp()`; `resolveVideoRef` unexported; local favicon + `fonts.gstatic.com` preconnect

## Current Task

_Batch 2 (audit L3, L6, L7, L8, L9, L10, L11) applied — awaiting user manual test approval before next batch._

## Completed (docs)

- Full code audit (Phase 1–3) saved to `audit_report.md` (read-only; no code changes applied)

## Known Bugs / Pending

- `content.js`: skin `producer`/`song`, character `alt`, concert metadata still inline
- Dead GH filter CSS — see audit report (M3)
- GameHistory dual i18n access (`useTranslation` direct) — fixed in Batch 2 (now `useApp`)
- Backend (Spring Boot) not implemented
- RAG chatbot not started