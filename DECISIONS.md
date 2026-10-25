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
