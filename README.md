# Lavely.io — Portfolio refresh

A modern, content-first engineering portfolio for Josh Lavely, replacing the historical React 16 / Create React App / Express application in this **feature branch**.

## Stack

- Next.js 16.4.3 App Router + React 19.3.1
- TypeScript 5.9.3 (known-compatible toolchain; later major versions need validation)
- CSS (no UI kit, animation library, tracking SDK or component runtime)
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

External websites are linked as portfolio projects. Their illustrated previews are **concept art, not screenshots** and no unverified metrics or outcomes are claimed.

A lockfile and production build are still required before merge if network/package-registry access is unavailable to the implementation environment. Run npm install and commit package-lock.json, then run npm ci and npm run check.
