# Hero map connection animation

## Objective

Add a brief, non-blocking entrance animation to the POWERFUL home hero: Peru glows first, then the exact connection lines already visible in the map light up one by one.

## Problem and rationale

The client wants the hero illustration to draw attention. The current map is a single flattened PNG, so its routes cannot animate independently. A separate SVG and the first overlay used paths that differed visibly from the approved raster. Preserve the published art and derive aligned route highlights from its existing line pixels while the page content remains readable.

## Authorized scope

The user explicitly approved implementing and refining this hero animation. The latest request specifies that the existing route lines should glow in place, with each of eight trips taking about 0.5 seconds. It runs when either localized home page loads. No publication, push, PR, or deployment is authorized.

## Scope and constraints

- Animate only the hero map on the Spanish and English home pages, which share `HomeContent.astro`.
- Keep the published `peru-global-connections.png` and its composition unchanged; use animation layers over it.
- Show the map content immediately; glow Peru, then illuminate the eight existing connection routes in sequence, about 0.5 seconds per route. Play once per page load; return to the original static appearance when complete.
- Preserve the original PNG byte-for-byte. Any route masks must be derived from its existing line pixels and aligned to the same responsive image rectangle.
- Keep heading, actions, and navigation available throughout.
- Respect `prefers-reduced-motion`; show the complete static PNG without entrance motion.
- Do not replace the map with `peru-continents-network.svg`, whose composition differs. Do not change logo assets or unrelated working-tree files.

## Acceptance criteria

- The hero map visibly brightens at Peru first, followed by highlights that track only the existing raster routes, one trip at a time for about 0.5 seconds each; no displaced replacement paths appear.
- The animation runs on `/` and `/en/`, and does not introduce horizontal overflow at mobile widths.
- The page text and actions remain visible throughout; the animation does not delay page interaction.
- With reduced motion enabled, the original PNG remains fully visible and all entrance animation is suppressed.
- Existing source PNG and logo assets remain byte-for-byte unchanged.
- `npm run check` and `npm run build` pass; visually inspect desktop, mobile, and reduced-motion states.

## Checks and delivery

- TDD: off for the home page, per `PRODUCT.md:36`; no test script is configured.
- Functional runner: `npm run check` (`astro check`) and `npm run build` (`astro build`), from `package.json`.
- RDD mode: off (effective default), confirmed by `gentle-ai review mode status`; delivery is `disabled/unmanaged`.
- Forecast: HMA-01 completed at 182 authored changed lines; HMA-02 forecast at about 130 more, excluding generated masks.
- Delivery strategy: `ask-on-risk` with `stacked-to-main` selected by the user after the authored-line threshold was exceeded. Keep the current `main` branch; no push, PR, or deployment.

## Tasks

- [x] **HMA-01 — Add the initial Peru-first hero map sequence.** Preserve the source artwork, both locale routes, reduced-motion behavior, and responsive layout. (Commit `7d1486d`.)
- [ ] **HMA-02 — Align each route highlight to the existing image lines and extend each trip to about 0.5 seconds.** Preserve the source PNG, sequence Peru first, and retain both locales, reduced motion, and responsive layout. Reopened as a refinement after the user observed that the initial vector traces looked detached from the image. Implementation and checks are complete; the local work-unit commit is pending.

## Route and progress

- **HMA-01 route: delegated direct.** The mapping trigger fired because the decision required 4+ files and asset provenance; a read-only mapping agent inspected design/product requirements, shared hero markup and styles, locale pages, and map source assets. The writer trigger fires because implementation spans the hero component and animation styles/overlay. Preparation and writing will be delegated together.
- **HMA-02 route: delegated direct.** The mapping trigger fired because accurate alignment required comparing the published PNG, source artwork/metadata, current SVG paths, and animation CSS. A read-only mapping agent found that the current paths cover only about 24.6% of warm route pixels within 2 px; no layered source or matching vector exists. The user specified line-accurate highlights and about 0.5 seconds per trip, resolving the route-by-route presentation. The writer trigger applies because the update spans the hero component plus route-mask generation and animation styles.
- **Resolved intent:** This new hero animation runs on home-page load; earlier query-selectable logo previews remain separate. The user-approved sequence applies to the existing map composition, not the alternate SVG artwork.
- **Current evidence:** `HomeContent.astro` renders `peru-global-connections.png`; the published image remains byte-for-byte unchanged (1448×1086 RGBA; SHA-256 `1c6238425b6032be13c91fcc81f52664122159e300d6409147fa3dd9a065eee0`). Spanish and English home pages share the component. The new sprite is derived only from the image's existing amber route pixels; the generator separates eight route masks, and the overlay shares the image's responsive rectangle. Peru glows for 820 ms first, followed by eight sequential 500 ms route highlights; the static map remains after the 4.82-second sequence. `DESIGN.md` requires visible page content, non-blocking motion, and reduced-motion support.
- **Verification:** `npm run check` passed with 0 errors, warnings, or hints; `npm run build` passed and generated 15 pages, both using project-local WSL Node 24. Playwright confirmed `/` and `/en/` render eight route layers, the overlay and map rectangles match at 1280 px, and at a 390 px viewport the document width remains 390 px with the map image loaded. With reduced motion enabled, both overlay layers are `display:none`, the image animation is `none`, and the image remains loaded. `git diff --check` passed. Regenerating the sprite produced the same SHA-256 (`3ce91181b77c80180f729ee715027595c30ac2707e6392bfcd85db1c0ad13ac0`); the published and built source-map hashes both remain `1c6238425b6032be13c91fcc81f52664122159e300d6409147fa3dd9a065eee0`. Impeccable's source scan reported only existing `global.css` warnings at lines 6 and 132. Its full-page scan could not run because the scanner found no local Chrome/Chromium installation.
- **Work-unit commit:** HMA-01 is `7d1486d2f78345bc45b17cedcd98281e6b660e77` (`feat(home): animate Peru connections on load`) on `main`. HMA-02 is verified and pending commit.
- **Forecast and delivery:** HMA-01 committed 182 authored lines. HMA-02 landed at about 405 authored changed lines (component, styles, generator, and feature document; generated PNG excluded), putting the feature at about 587 total. The user selected `stacked-to-main`; commit locally on the existing `main` branch.
- **Next step:** Create the HMA-02 Conventional Commit on `main`, then record its commit identity in this file and the Engram mirror. No push, PR, or deployment is authorized.
