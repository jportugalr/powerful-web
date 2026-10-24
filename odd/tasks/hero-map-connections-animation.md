# Hero map connection animation

## Objective

Add a brief, non-blocking entrance animation to the POWERFUL home hero: Peru glows first, then the existing global connections arrive toward it.

## Problem and rationale

The client wants the hero illustration to draw attention. The current map is a single flattened PNG, so its routes cannot animate independently. A separate SVG exists, but it changes the approved composition. Preserve the published art and use a coordinated overlay to make the requested sequence visible while the page content remains readable.

## Authorized scope

The user explicitly approved implementing this hero animation. It runs when either localized home page loads. No publication, push, PR, or deployment is authorized.

## Scope and constraints

- Animate only the hero map on the Spanish and English home pages, which share `HomeContent.astro`.
- Keep the published `peru-global-connections.png` and its composition unchanged; use animation layers over it.
- Show the map content immediately; glow Peru, then animate the existing connections toward Peru over about 2–3 seconds. Play once per page load.
- Keep heading, actions, and navigation available throughout.
- Respect `prefers-reduced-motion`; show the complete static PNG without entrance motion.
- Do not replace the map with `peru-continents-network.svg`, whose composition differs. Do not change logo assets or unrelated working-tree files.

## Acceptance criteria

- The hero map visibly brightens at Peru first, followed by connection highlights arriving one by one; final appearance aligns with the current map.
- The animation runs on `/` and `/en/`, and does not introduce horizontal overflow at mobile widths.
- The page text and actions remain visible throughout; the animation does not delay page interaction.
- With reduced motion enabled, the original PNG remains fully visible and all entrance animation is suppressed.
- Existing source PNG and logo assets remain byte-for-byte unchanged.
- `npm run check` and `npm run build` pass; visually inspect desktop, mobile, and reduced-motion states.

## Checks and delivery

- TDD: off for the home page, per `PRODUCT.md:36`; no test script is configured.
- Functional runner: `npm run check` (`astro check`) and `npm run build` (`astro build`), from `package.json`.
- RDD mode: off (effective default), confirmed by `gentle-ai review mode status`; delivery is `disabled/unmanaged`.
- Forecast: about 160 authored changed lines, generated files excluded.
- Delivery strategy: `ask-on-risk` (default). Keep the current `main` branch; no push, PR, or deployment.

## Tasks

- [x] **HMA-01 — Animate the existing hero map with a Peru-first connection sequence.** Preserve the source artwork, both locale routes, reduced-motion behavior, and responsive layout.

## Route and progress

- **HMA-01 route: delegated direct.** The mapping trigger fired because the decision required 4+ files and asset provenance; a read-only mapping agent inspected design/product requirements, shared hero markup and styles, locale pages, and map source assets. The writer trigger fires because implementation spans the hero component and animation styles/overlay. Preparation and writing will be delegated together.
- **Resolved intent:** This new hero animation runs on home-page load; earlier query-selectable logo previews remain separate. The user-approved sequence applies to the existing map composition, not the alternate SVG artwork.
- **Current evidence:** `HomeContent.astro` renders `peru-global-connections.png`; its original source matches byte-for-byte and is 1448×1086 RGBA, with no layered source identified. `peru-continents-network.svg` has four animatable connections but uses a different composition. Spanish and English home pages share the component. `DESIGN.md` requires visible page content, non-blocking motion, and reduced-motion support.
- **Verification:** `npm run check` passed with 0 errors, warnings, or hints; `npm run build` passed and generated 15 pages. Both commands ran with the project-local WSL Node 24 runtime. Playwright confirmed `/` and `/en/` render eight connection paths; at 390×844 the document width is 375 px, with no horizontal overflow. With reduced motion enabled, the SVG overlay is `display:none`, the image entrance animation is `none`, and the image is loaded. Desktop screenshots captured the Peru glow before any route appears and a route arriving toward Peru. `git diff --check` passed. The published and source PNG SHA-256 hashes match (`1c6238425b6032be13c91fcc81f52664122159e300d6409147fa3dd9a065eee0`).
- **Work-unit commit:** Pending.
- **Next step:** Commit HMA-01 on the current branch, then record the commit identity in this file and its Engram mirror. No push, PR, or deployment.
