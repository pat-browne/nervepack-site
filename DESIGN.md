# nervepack.app — design

The marketing + docs site for **nervepack** ("A modpack for AI cognition.").
Built to the nervepack brand (see `pat-browne/nervepack` → `brand/`), not Pat's
warm-light house style.

## Brand & type

- **Type system** (two fonts, self-hosted via `@fontsource`):
  - **Baloo 2** — display: wordmark, headings.
  - **Public Sans** — body / UI.
  - **JetBrains Mono** — code, the install command.
- **Palette / 60-30-10:** cream `#faf7f1` dominant · charcoal `#16293a` secondary
  (body text + one dark band) · amber `#f2a91b` **scarce accent** — only on CTAs,
  links, active nav, the "AI" in the tagline, and node glints.
- **Signature:** the harness emblem. On load its amber nodes do a short staggered
  glow (≤800ms, `transform`/`opacity` only, disabled under `prefers-reduced-motion`).
- **Layout:** asymmetric hero (emblem offset, not centered); one charcoal band
  mid-page using the gold-on-dark logo treatment; section dividers carry a faint
  circuit-line motif echoing the emblem branches.

## Information architecture

- **Landing (one scroll):** Hero → What it is → The four tiers
  (`np-core/kb/env/flow`, varied emphasis) → How it works (lifecycle injection +
  knowledge-layer authority stack, on the charcoal band) → Get started
  (install + "works with Claude Code and any agentic host") → Footer.
- **Docs (`/docs`):** generated from nervepack's canonical markdown, never
  hand-copied — Getting Started, Features, Architecture.

## Docs integration — always up to date

The docs are **not** authored here; they are synced from the nervepack repo so they
can't drift from the code:

- `scripts/sync-docs.mjs` reads the canonical docs (`docs/GETTING-STARTED.md`,
  `docs/FEATURES.md`, `docs/ARCHITECTURE.md`) from `NERVEPACK_DOCS_SRC` (a nervepack
  checkout; default `~/Code/nervepack` for local dev) and writes them into
  `src/content/docs/` (an Astro content collection). It strips the leading H1, maps
  cross-doc links to site routes, and renders `[[wikilinks]]` as inline code.
- Runs on `predev` + `prebuild`, so every `npm run build`/`dev` re-pulls. The
  generated files are **gitignored** — they can never go stale in the repo.
- Production freshness: `.github/workflows/deploy.yml` checks out `pat-browne/nervepack`
  and rebuilds on push, on a daily schedule, and on a `repository_dispatch`
  (`nervepack-docs-updated`). To make nervepack trigger it instantly, add a tiny
  dispatch workflow on the nervepack side (push → `repository_dispatch` to this repo,
  needs a PAT secret) — deploy-time step.

## Tech & deploy

- **Astro** static. Components: `Hero`, `Tiers`, `HowItWorks`, `GetStarted`,
  `Footer`; the emblem is an inline Astro component (currentColor + animatable nodes).
- **GitHub Pages + Route53** on the apex `nervepack.app` (CNAME + DNS) — wired as a
  final, human-confirmed step.

## Accessibility

AA-contrast tokens (verified in nervepack `brand/`), `:focus-visible`, body measure
≤ ~80ch, line-height ≥ 1.5, one body size, safe at 390px, motion gated on
`prefers-reduced-motion`.
