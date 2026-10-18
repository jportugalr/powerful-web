# POWERFUL brand icons from Anexo Cromático V0.5

## Objective

Replace the hand-drawn “P” favicon with the user-approved isolated POWERFUL emblem from Anexo Cromático V0.5, and publish appropriate derived browser and device icon sizes.

## Problem and rationale

The Astro site currently presents a typographic P as its favicon, which is not the POWERFUL logo. The existing brand guide and SEO notes leave the isolated favicon emblem unapproved. The user explicitly approved the V0.5 color emblem on 2026-10-18, resolving that decision. Keep editorial sector and map imagery as content, and preserve the standalone untracked `web/` prototype.

## Authorized scope and constraints

- Update the Astro favicon/icon assets and their declarations in the shared layout.
- Update tracked site guidance in `README.md` and/or `DESIGN.md` to record the approved V0.5 emblem and derived icon usage.
- Use `emblema_powerful_color_claro.svg/png` from `Powerful/POWERFUL_Anexo_Cromatico_V0.5/`; the V0.5 annex designates it for light backgrounds, matching this site's `color-scheme: light`.
- Do not alter the untracked `web/` prototype, existing unrelated untracked files, editorial images, deployment state, or remote systems.
- `Powerful/` is gitignored and the tracked `README.md:63` says the source dossier is preserved untouched; treat its `05`/`06` documents as historical source evidence and keep their files unchanged.
- Work on the current `main` branch; do not stage unrelated files.

## TDD and verification

- TDD: off, per explicit project decision in `README.md:59`.
- Runner: project scripts `npm run check` and `npm run build` (`package.json:9-13`).
- Applicable checks: Astro check/build, verify generated icon files and layout references, and inspect the favicon in a browser if feasible. Do not add a test framework for static asset wiring.
- Receipt-driven review: disabled/unmanaged (effective off by default), confirmed with `gentle-ai review mode status`; do not start a review.

## Forecast and delivery

- Forecast: approximately 100 authored changed lines, excluding generated raster icon files; below the ~400-line delivery budget.
- Delivery strategy: `ask-on-risk` (default). No chain strategy needed at this forecast.
- Route: delegated direct. Mapping trigger fired because existing brand, layout, and page references span four or more files; writer trigger fires because the implementation updates multiple non-trivial source/documentation files.

## Tasks

- [ ] **T-001 — Apply the approved V0.5 emblem to Astro browser/device icons and align the tracked site guidance.** Acceptance: favicon is sourced from the approved light-background emblem; declared derived icons resolve in the built output; tracked guidance records the user's approval while the ignored source dossier stays unchanged; editorial imagery and unrelated untracked work are untouched. Run the applicable checks above, record evidence, and close with one Conventional Commit on the current branch.

## Progress, evidence, and next step

- Exploration confirmed `public/favicon.svg` is a hand-drawn P; `SiteLayout.astro` declares it. Header already uses the approved wordmark; footer and sector/map images have distinct valid roles.
- User approval received for the isolated V0.5 color emblem and its icon derivatives.
- Feature document created before source edits. Engram mirror is pending because no Engram memory tools/resources or `engram` CLI are available in this runtime; local progress remains authoritative until it can be synchronized.
- Source boundary confirmed: `Powerful/` is gitignored and must remain untouched; the V0.5 light-background variant is the appropriate logo for this light theme. Use tracked `README.md`/`DESIGN.md` for the approval record.
- Implementation complete: `public/favicon.svg` is byte-identical to `emblema_powerful_color_claro.svg` (SHA256 `71a1ba94a3d77d95d9929b42ae1a0a715996b98b07da2a89c94b9f6abff1d8bf`). Added PNG icons at 16, 32, 48, and 180 px; `SiteLayout.astro` declares all five icon sources. `README.md` and `DESIGN.md` record approval and derivation details. The tracked source diff is 73 additions and 6 removals; generated PNG files are excluded from the authored-line forecast.
- Verification observed from the delegated writer: `npm run check` passed (30 files, no errors/warnings/hints); `npm run build` passed (9 pages); preview returned HTTP 200 with the expected MIME type for the SVG and each PNG; desktop Chrome showed the V0.5 emblem. `git diff --check` passed with only a README CRLF normalization warning.
- Verification limitation: a parent-side retry through PowerShell/WSL could not start because WSL has no Linux Node and resolves `npm` to Windows npm, whose child CMD rejects the UNC working directory. The delegated successful check/build evidence remains the applicable run. Playwright CLI was unavailable because WSL lacks Chromium; visual inspection used desktop Chrome instead.
- Implementation and checks are complete; work-unit commit is pending. Next: stage only T-001 files on the current branch, commit, record that commit identity here, and then close the task. Engram synchronization remains pending until a memory service is available.
