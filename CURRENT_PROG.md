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
- **Audit Batch 3 (M1/M2/M3/M4/M5/M8) — LOCKED:** `useScrollReveal` pending-queue fix; Routes no remount key; dead GH filter v1 CSS + `body:not(#introduce)` removed; shared `NAV_LINKS` + `PV_PRESETS`; `body.home-page` class via React (removed `id="introduce"`)

## Current Task

_Planning Batch 4 (High Risk: H1/H2/H3) — awaiting user strategy decision._

## Completed (docs)

- Full code audit (Phase 1–3) saved to `audit_report.md` (read-only; no code changes applied)

## Batch 3 — Manual Test Checklist (final)

| # | Scenario | Expected |
|---|----------|----------|
| 1 | `/version-gameplay` timeline scroll reveal (M1) | Mỗi year item fade-in một lần khi scroll vào viewport |
| 2a | Game History filter persist sau Back (M2) | Filter đã chọn (vd. PSP) vẫn đúng — nhờ `localStorage` |
| 2b | Video giữ vị trí phát sau Back (M2) | **False Positive / Out of Scope** — Expected chuẩn: **video reset về 0** do `<VersionAndGameplay>` unmount khi đổi route |
| 3 | Home full-bleed + inner page padding (M3/M8) | Home hero không double padding; inner pages không chui dưới topbar |
| 4 | Topbar + Home quick bar routes (M4) | Mọi link navigate đúng, active state đúng |
| 5 | PV Director presets (M5) | Wide/Close/Dynamic đổi frame; `aria-pressed` đúng |
| 6 | Series History filters (M3) | Filter tabs + result count hoạt động sau khi dọn CSS cũ |

## Backlog (deferred)

- **M2-followup — Video playback position restore:** UX feature (không phải bug M2). Khi cần: cache `currentTime` per video qua `sessionStorage` (keyed `pathname + videoId`), restore on `loadedmetadata`. Scope: `VersionAndGameplay`, `SkinAndSong`.
- `content.js`: skin `producer`/`song`, character `alt`, concert metadata still inline (partial — see M6 / H1)
- Backend (Spring Boot) not implemented — see H2
- RAG chatbot not started

## Known Bugs / Pending

- Remaining Medium audit items not yet applied: **M6** (content i18n partial), **M7** (Settings a11y dialog)
- Backend (Spring Boot) not implemented
- RAG chatbot not started