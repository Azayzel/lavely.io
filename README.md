# Lavely.io — Portfolio refresh

A modern, content-first engineering portfolio for Josh Lavely, replacing the historical React 16 / Create React App / Express application in this **feature branch**.

## Stack

- Next.js 16.4.3 App Router + React 19.3.1
- TypeScript 6.0.2 and ESLint 10.13.0 (supported stable toolchain; TypeScript 7 adoption requires separate compatibility validation)
- CSS plus Motion and private Motion+ UI for restrained interaction and typing animations; no UI kit or tracking SDK.
- App Router metadata, static case-study routes, sitemap, robots.txt and structured data

## Local development

Requires Node.js 22.12+.

    npm install
    npm run dev

Navigate to http://localhost:3000.

Validation:

    npm run check

## Where to edit content

- src/data/projects.ts — project cards and case study pages
- src/app/page.tsx — homepage, writing, open-source entries and copy
- src/app/globals.css — visual design and responsive layouts
- src/app/layout.tsx — global SEO metadata and Person schema

## Deployment

The new branch is deliberately independent of the live lavely.io deployment. Verify the hosting project's Git repository, build command, environment variables and DNS before changing production. Next.js can deploy on Vercel or another compatible Next.js host.

## Important migration notes

The previous repository contains a separate legacy Express/GraphQL/Redux/blog-admin stack. Those components are not carried forward into the new portfolio because the scope is now an informational site; technical writing links to blog.lavely.io. Do not deploy if those endpoints are still used: audit traffic, integrations, URLs and redirects first.

External websites are linked as portfolio projects. Their portfolio previews use **real mobile website screenshots provided by the site owner** and no unverified metrics or outcomes are claimed.

CI verified npm install, TypeScript, ESLint, and production build on 2026-10-25 (see GitHub Actions run 40242943006). A committed package-lock.json is still needed for reproducible builds: run npm install and commit the lockfile, then switch verification to npm ci.

## Motion UI / Motion+

Motion for React drives lightweight card hover and hero motion; Motion+ powers a premium Typewriter in the hero eyebrow. Visitors who prefer reduced motion see static text and no animated transformations.

The private registry uses a committed `.npmrc` with a **variable placeholder only**:

```ini
@motionplus:registry=https://api.motion.dev/npm/
//api.motion.dev/npm/:_authToken=${MOTION_TOKEN}
```

Export `MOTION_TOKEN` in the environment before **all** npm commands, including `npm run dev` / `npm run build`. Never put a literal registry token in source, lockfiles, Git history, or screenshots.

In GitHub, configure an Actions repository secret named `MOTION_TOKEN` (Settings → Secrets and variables → Actions). Add it separately as a sensitive build-time environment variable to the deployment provider (if the host builds from source). CI will explicitly fail with a setup message until the Actions secret exists. After the secret is configured, run `npm install`, commit the generated `package-lock.json`, and switch CI to `npm ci`.

The standalone HTML screenshot preview is a visual companion, not the actual Motion+ runtime; test animations in a deployed Next.js preview after the token is configured.
