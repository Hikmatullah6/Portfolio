# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from `code/portfolio/`:

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
npm run start    # Start production server
```

## Architecture

Single-page portfolio website using Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS 4.

**Data layer**: All site content lives in `data/siteData.tsx`. Key exports:
- `techCategories` — array of `{ label, items[] }` groups powering the TechStack accordion
- `experiences` — array of `{ date, title, company, stack[], description, details[] }` for Work Experience
- `projects` — array of project cards

**Page structure**: `app/page.tsx` is a `'use client'` component that composes section components in order: Navbar → Hero → TechStack → WorkExperience → Projects → Contact → Footer. It uses a `mounted` state to avoid hydration mismatches.

**Components**: Each section in `components/` is self-contained. SVG icon components (social links) live in `components/icons/`. Interactive sections (`TechStack`, `WorkExperience`) use `useState` for accordion/toggle state and carry `'use client'` directives.

**Styling**: Dark theme (`bg-[#0a0a0a]`) with Tailwind utility classes. No separate CSS modules — styles are inline via Tailwind. Global styles only in `app/globals.css`.

**Assets**: Tech icons (SVG) in `public/icons/`, project screenshots in `public/projects/`. New icons can be sourced from `cdn.simpleicons.org/{name}`.

**Path alias**: `@/*` maps to the project root (e.g., `@/components/Hero`, `@/data/siteData`).
