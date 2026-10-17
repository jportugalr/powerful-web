# Port the `web/` prototype into Astro

## Objective

Make Astro serve the existing `web/` prototype faithfully across all its routes, preserving its approved content, visual hierarchy, typography, CSS/SVG graphics, hover and focus states, responsive behavior, and page-specific interactions.

## Problem and reason

The current Astro home (`src/pages/index.astro`) is the separate “Atlas del Pacífico” concept, while `web/` contains the user-approved multipage prototype. The prototype is the visual and interaction source of truth. The user chose to port all prototype pages now so navigation works across the full site.

## Authorized scope

- Port all nine prototype HTML routes: Inicio, Nosotros, Servicios, Sectores, Cómo trabajamos, Contacto, Privacidad, Términos, and 404.
- Build a shared Astro layout and reusable components where they represent actual shared structure; preserve source class names and CSS behavior where practical.
- Preserve the exact prototype copy and existing claim boundaries. Keep the demo contact behavior explicit: it does not send data.
- Preserve the `web/` prototype as an untouched reference; do not alter the master logo.
- Do not create or switch branches, push, open PRs, or deploy without explicit authorization.
- Do not add an admin panel, a contact backend, unsupported claims, or new visual effects that are absent from the prototype.

## Constraints and decisions

- Stack: Astro + TypeScript + Tailwind CSS + custom CSS; keep implementation compatible with current project dependencies and Docker Compose.
- Native `.astro` components are preferred for static/shared markup. Use small progressive-enhancement scripts only for interactions that exist in the prototype; no React hydration unless evidence shows it is needed.
- Preserve CSS hover, keyboard focus, reduced-motion, responsive breakpoints, logo handling, and Spanish-first content.
- TDD is disabled by the accepted project decision in `PRODUCT.md`; perform normal functional verification with the documented Docker runner.
- Runner: `docker compose exec -T dev npm run check` and `docker compose exec -T dev npm run build`.
- Delivery strategy: `exception-ok`, explicitly selected by the user on 2026-10-17. Keep work-unit commits on the current `main` branch with no PR chain; do not create or switch branches, push, or open PRs.
- Receipt-driven development: off (decided by default), verified with `gentle-ai review mode status` on 2026-10-17. Follow ordinary checks and delivery policy; do not run native review assessments.
- Route per task: delegated direct. Mapping trigger evidence: implementation spans the prototype’s 9 HTML pages, CSS, JavaScript, current Astro route, styles, scripts, content, dependencies, Compose, and site documentation. Writer trigger evidence: each implementation task touches multiple non-trivial Astro/CSS/TypeScript files. The read-only mapping worker reported the source/target differences before this file was created.
- Estimate: more than 400 authored changed lines across the feature; heuristic is advisory and does not force truncation or artificial splitting.

## Acceptance criteria

- Every route in the prototype resolves through Astro and carries its corresponding title, copy, metadata, navigation, and footer.
- The rendered pages visually and behaviorally match the prototype, including hover/focus behavior and the responsive mobile menu.
- Page-specific behavior is retained: navigation menu/year display, sector filters, and honest contact-draft behavior.
- Shared layout and components reduce duplication without changing appearance or content.
- Prototype-specific noindex behavior remains on previews until publication policy explicitly changes it.
- `npm run check` and `npm run build` pass in the documented Docker service; browser smoke covers all routes, keyboard/mobile navigation, page links, and narrow/desktop viewports.
- Existing user work in `web/` remains untouched; the approved master logo remains byte-identical.

## Tasks

- [x] **PWP-1 — Shared Astro shell and Inicio.** Added the shared layout, header/footer, faithful global CSS and navigation enhancement; ported the prototype home route and documented the design source of truth. Route: delegated direct. Verification: Docker `npm run check` (11 files, zero diagnostics) and `npm run build` pass; the build emits `/index.html`; browser comparison reported identical rendered text and 1280×720 captures, no horizontal overflow at 320 px, and working mobile menu/Escape behavior; `git diff --check` exits 0 (CRLF notices only).
- [x] **PWP-2 — Business pages.** Ported Nosotros, Servicios, Sectores, and Cómo trabajamos with shared Astro components and typed Spanish content, preserving the prototype routes and adding the progressive sector filter. Route: delegated direct. Verification: Docker `npm run check` (21 files, zero diagnostics) and `npm run build` pass with five generated pages; `git diff --check` is clean; browser smoke confirmed the four routes, title/H1, `noindex,nofollow`, mobile menu and no horizontal overflow at 360 px; sector filter hides to the selected card and restores all five cards with correct `aria-pressed` state.
- [x] **PWP-3 — Contact, legal, and error pages.** Ported Contacto, Privacidad, Condiciones, and 404; updated README, DESIGN, and Docker verification. Route: delegated direct after a delegated read-only mapping. Preserved the demo form's local prefill/validation/result, prevented the no-JavaScript native GET, and added Nginx custom 404 handling without changing status 404. Verification: Docker check (28 files, zero diagnostics), build (nine static routes), `nginx -t`, `bash -n scripts/verify-docker.sh`, `bash scripts/verify-docker.sh`, and `git diff --check` pass; all nine Nginx routes return 200; unknown path returns the POWERFUL 404 body with HTTP 404; logo hash matches in dev/prod; browser verified valid/invalid form behavior, no send/storage, mobile menu and focus return. With JavaScript disabled, Playwright verified the submit button is disabled and Enter causes no URL change, request, response, navigation, or query fields. Pending business validation: legal text remains an unapproved draft.

## Progress and recovery

- 2026-10-17: Read-only mapping completed by delegated worker. Confirmed the Astro home is visually distinct from `web/`; current scope covers all nine prototype routes.
- 2026-10-17: Local feature document created before the first source write. Engram tools are unavailable in this runtime, so the mirror `odd/port-web-prototype-to-astro/tasks` is pending; synchronize when available.
- 2026-10-17: User selected `exception-ok`: remain on current `main`, use local work-unit commits, and do not create a PR chain.
- 2026-10-17: Verified current branch is `main`, working tree has only the prior untracked task document and user-owned `web/` prototype; RDD is off by default.
- 2026-10-17: PWP-1 implementation completed by delegated writer. Home content is held in typed `src/content/es.ts`; repeated service cards use an Astro component; shared layout, header, footer, icon, and navigation enhancement are in place. `web/` and the master logo were left untouched. Parent reran Docker check/build and diff check successfully; commit identity is recorded below.
- 2026-10-17: PWP-1 closed on `main` in commit `287f449` (`feat(site): port prototype homepage to Astro`). No push or PR was created.
- 2026-10-17: PWP-2 implementation completed by delegated writer. Typed content extends `src/content/es.ts`; shared hero, CTA, process, sector-card, and service-row components support the four business pages. The sector filter is a small script loaded only by Sectores. Parent reran check/build and confirmed all four development endpoints return HTTP 200; browser interaction evidence is recorded above. `web/` remains unmodified; commit identity is recorded below.
- 2026-10-17: PWP-2 closed on `main` in commit `7c92edd` (`feat(site): port business pages from prototype`). No push or PR was created.
- 2026-10-17: PWP-3 mapping confirmed the contact form’s native GET fallback could expose fields without JavaScript and that Nginx served a generic 404 for unknown paths. The port disables native submission until its no-send handler is ready, verified in a no-JavaScript browser session, and uses the built Astro 404 page for unknown paths while preserving status 404. Engram mirror remains pending because no memory tools are available in this runtime.
- 2026-10-17: PWP-3 implementation and verification completed by delegated writer; parent independently reran check/build, Nginx config test, the Docker smoke, all production route status checks, favicon delivery, and diff check. Production `web` service was rebuilt after confirming its Compose project/config; no other containers were changed. Added the existing `/favicon.svg` link to the shared layout to avoid the browser's default missing `/favicon.ico` request. Engram mirror remains pending because no memory tools are available in this runtime.
- 2026-10-17: PWP-3 closed on `main` in commit `0865182` (`feat(site): port contact and legal pages`). All nine prototype routes are now implemented. No push, PR, or deployment was performed. The local production Nginx service was rebuilt and verified at `127.0.0.1:8088`.
- Complete: all work units are recorded in commits `287f449`, `7c92edd`, and `0865182`. Engram mirror `odd/port-web-prototype-to-astro/tasks` remains pending because memory tools are unavailable in this runtime.
