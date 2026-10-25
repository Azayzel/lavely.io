# PLAN — Lavely.io Portfolio

Original goal: Reposition Lavely.io around Josh Lavely's engineering career and recent live web projects: KinVite, KennaSits, and Veerdonk Furniture. User subsequently requested a new feature branch on the current GitHub repository and updating React and dependencies to the latest practical, compatible versions.

## Scope

1. Create feat/portfolio-refresh-2026 from master; do not mutate master.
2. Move from React 16/CRA/Express to a clean current React + Next.js + TypeScript application.
3. Build an intentional homepage with project case studies, open-source work, writing, background and contact.
4. Preserve real project links; avoid invented case study performance claims or fake screenshots.
5. Add accessible responsive CSS, SEO, sitemap, robots and CI checks.
6. Validate dependency installation, types, lint and production build; complete release checks before production cutover.

## Definition of done

A reviewable feature branch contains the rewritten source and documentation, checks can pass on a connected CI runner, and hosting/redirect changes are reviewed separately.
