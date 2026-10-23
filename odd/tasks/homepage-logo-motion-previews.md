# Home page logo motion previews

## Objective

Compare two brief, non-blocking brand motion treatments on the POWERFUL home page: a reveal of the registered wordmark and a subtle halo around the emblem.

## Problem and rationale

The client wants the logo to attract attention. A full-screen loading intro would hide the page while it plays, so the experiment keeps the hero content visible and lets the user preview each treatment independently.

## Authorized scope

The user approved trying both treatments. Scope is a local, query-selectable preview on the home page; the default site appearance stays unchanged. This does not authorize deployment or publication.

## Scope and constraints

- Add `?brand-motion=wordmark` and `?brand-motion=emblem-glow` previews, one at a time.
- Keep the home heading and contact actions visible during both effects.
- Preserve all approved logo assets and master files byte-for-byte; use CSS presentation only.
- Keep the default site static and respect `prefers-reduced-motion`.
- Keep each query preview visibly animated while its URL remains open, so a reviewer can inspect it after the initial load.
- Do not change other pages or unrelated working-tree changes.

## Acceptance criteria

- Each query value activates only its matching preview on both `/` and `/en/` home pages, and the effect remains observable after the page loads.
- With no recognized query value, the page renders as before.
- The wordmark reveal and emblem halo do not block reading, navigation, or contact actions.
- Reduced-motion preference suppresses the non-essential motion and leaves the brand visible.
- Master and source logo assets remain untouched.
- `npm run check` and `npm run build` pass; inspect both variants in a browser at desktop and mobile widths.

## Checks and delivery

- TDD: off for the home page, per `PRODUCT.md:36`; no test script is configured.
- Functional runner: `npm run check` (`astro check`) and `npm run build` (`astro build`), from `package.json`.
- RDD mode: off (effective default), confirmed by `gentle-ai review mode status`; delivery is `disabled/unmanaged`.
- Forecast: about 70 authored changed lines, excluding generated files.
- Delivery strategy: `ask-on-risk` (default); no push, PR, or deployment is authorized.
- Current branch: retain the existing branch.

## Tasks

- [x] **HLM-01 — Add and compare both home page logo motion previews.** The wordmark reveal now transitions into a repeating emphasis pulse, and the emblem halo repeats while its query preview is open. The default remains static; reduced-motion suppresses both.

## Route and progress

- **HLM-01 route: delegated direct.** Mapping trigger fired because understanding required `DESIGN.md`, `PRODUCT.md`, `SiteLayout.astro`, `SiteHeader.astro`, `HomeContent.astro`, `global.css`, and `package.json` (4+ files); mapping completed read-only. Writer trigger fires because implementation spans the header component and shared styles. The preview mechanism is constrained to existing approved assets and a home-only query parameter.
- **Current evidence:** The existing home hero renders its text and actions in initial HTML. Header wordmark is one integrated registered PNG; no separate emblem layer exists there. `DESIGN.md` permits brief non-blocking motion and requires reduced-motion support, and `PRODUCT.md` requires preserving the master logo.
- **Resolution:** The header originally compared paths as exact strings; the canonical English home is `/en/`, while the runtime pathname can be `/en`. Extracted the existing trailing-slash/`.html` normalization pattern into `src/i18n/routes.ts` and used it to identify the localized home by locale.
- **Verification:** `npm run check` passed (44 Astro files, no errors/warnings/hints); `npm run build` passed (15 routes). Playwright confirmed both variants activate on `/` and `/en/`, never activate on `/sectores.html`, and remain off without a query. The wordmark's emphasis pulse and emblem halo report infinite iterations; the h1 stays visible. With reduced motion enabled, both animations are `none` and the logo remains visible. Visually reviewed desktop at 1440 px and responsive layout at 390 px, with no horizontal overflow. `git diff --check` passed. No image or master asset was modified.
- **Work-unit commit:** `62fe03a` (`feat: add homepage brand motion previews`) on the existing `main` branch.
- **Accepted change:** Keep the preview animations repeating at a restrained pace so they are visible whenever the preview URL is open. This applies only to query previews; the regular site remains static.
- **Follow-up work-unit commit:** To be recorded in this file and its Engram mirror immediately after commit.
- **Next step:** Share the two local preview URLs for client comparison. No publication or deployment is authorized.
