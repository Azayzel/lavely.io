# TODO — Release checklist

- [ ] Run npm install on a machine with npm-registry access; commit package-lock.json.
- [ ] Run npm ci, npm run check, then npm audit and address findings.
- [ ] Verify current Next.js 16 + TypeScript compiler compatibility and ESLint configuration on CI.
- [ ] Inspect every live project domain and replace conceptual previews with approved screenshots if desired.
- [ ] Confirm KennaSits positioning and approved copy with the business owner.
- [ ] Verify whether historical /login, /register, /admin, /privacy and article URLs have live traffic; add redirects/replacements before launch.
- [ ] Set up a staging deployment for the feature branch and test mobile/tablet/desktop plus reduced motion and keyboard navigation.
- [ ] Confirm actual production site's Git deployment source (legacy repository may not match current deployed site).
- [ ] Review metadata, Open Graph/social imagery, consent/privacy and analytics needs.
- [ ] After approval: create pull request, merge, and migrate hosting / redirects with a rollback plan.
