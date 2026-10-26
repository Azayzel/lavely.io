# DECISIONS

- **Keep production untouched.** All changes land on feat/portfolio-refresh-2026 until reviewed.
- **Use Next.js App Router 16.4.3 with React 19.3.1.** Current stable versions verified on 2026-10-25.
- **TypeScript 6.0.2 rather than untested TypeScript 7.** Compatibility takes priority over literal newest major. ESLint 10.13.0 and current React/Node types are used. Reevaluate TypeScript 7 after framework compatibility testing.
- **Minimal dependencies.** No Redux, Express, GraphQL, CRA, state library, analytics SDK or UI kit: the portfolio requires none of them.
- **Portfolio-first content.** Three recent websites are the primary proof; open-source and writing follow.
- **Static metadata + case studies.** Search-friendly server-rendered pages without a CMS at launch.
- **No performance claims.** Don't invent conversions, traffic numbers, customer outcomes or production feature status.
- **Privacy-preserving contact.** Mailto link rather than an unconfigured form collecting visitor data.
- **Legacy backend removed from the target tree.** Its history remains in master; verify active consumers before merge.

- **Authentic imagery.** The three portfolio previews show original screenshots supplied by the site owner, optimized to WebP and displayed inside responsive mobile-device frames. No reconstructed brand artwork.

- **Private paid motion dependency.** Add `motion-plus` aliased to `@motionplus/core@^2.12.0`, and regular `motion` for animations; use the official Motion scoped registry.
- **Never commit credentials.** `.npmrc` contains the `${MOTION_TOKEN}` placeholder; CI and deployment must inject a secret at install time.
- **Progressive accessibility.** Typewriter in the small hero label; mild card hover and hero diagram movement; reduced-motion preference disables effects.
- **Validation gate.** Dependency installation / CI requires the paid registry secret; this branch must not merge unless a clean, token-enabled build is confirmed.
