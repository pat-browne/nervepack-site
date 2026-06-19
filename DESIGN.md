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
- **Docs (`/docs`):** v1 = Getting Started, Concepts, Architecture overview — each
  its own page, linking to the GitHub repo for depth.

## Tech & deploy

- **Astro** static. Components: `Hero`, `Tiers`, `HowItWorks`, `GetStarted`,
  `Footer`; the emblem is an inline Astro component (currentColor + animatable nodes).
- **GitHub Pages + Route53** on the apex `nervepack.app` (CNAME + DNS) — wired as a
  final, human-confirmed step.

## Accessibility

AA-contrast tokens (verified in nervepack `brand/`), `:focus-visible`, body measure
≤ ~80ch, line-height ≥ 1.5, one body size, safe at 390px, motion gated on
`prefers-reduced-motion`.
