# TODO — Release checklist

- [ ] Run npm install on a machine with npm-registry access; commit package-lock.json.
- [x] GitHub Actions: npm install, TypeScript, lint, and production build passed (run 40242943006, 2026-10-25).
- [ ] Commit package-lock.json and switch CI installation to npm ci; run npm audit and address findings.
- [x] Verified Next.js 16.4.3, React 19.3.1, TypeScript 6.0.2 and ESLint 10.13.0 on CI.
- [x] Replace conceptual previews with supplied real website screenshots (KinVite, KennaSits, Veerdonk Furniture).
- [ ] Review screenshots for currency before production release.
- [ ] Confirm KennaSits positioning and approved copy with the business owner.
- [ ] Verify whether historical /login, /register, /admin, /privacy and article URLs have live traffic; add redirects/replacements before launch.
- [ ] Set up a staging deployment for the feature branch and test mobile/tablet/desktop plus reduced motion and keyboard navigation.
- [ ] Confirm actual production site's Git deployment source (legacy repository may not match current deployed site).
- [ ] Review metadata, Open Graph/social imagery, consent/privacy and analytics needs.
- [ ] After approval: create pull request, merge, and migrate hosting / redirects with a rollback plan.
