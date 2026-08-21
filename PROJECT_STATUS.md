# Project Status

Last updated: 2026-08-21

## Current Version

Version 0.3.0 — Basic multi-page website framework.

## Technology Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS

## Available Routes

| Route | Status | Purpose |
| --- | --- | --- |
| `/` | Complete | Personal homepage and contact links |
| `/projects` | Placeholder | Future project showcase |
| `/blog` | Placeholder | Future technical notes and articles |
| `/about` | Placeholder | Personal background, skills, and research experience |

## Completed Features

- Responsive personal homepage
- GitHub and browser-based Gmail contact links
- One-click email address copying
- Shared responsive navigation bar
- Shared footer
- Projects, Blog, and About routes
- Route-specific metadata

## Current Limitations

- Project content is placeholder-only.
- Blog content and Markdown support are not implemented.
- About page details are incomplete.
- Navigation does not yet indicate the active route.

## Validation

- `npm run build` passes with all four routes statically generated.
- Navbar navigation works across Home, Projects, Blog, and About.
- Shared Navbar and Footer render on every tested page.
- No browser console warnings or errors were found.
- Navigation remains visible without horizontal overflow at a 390px viewport.

## Next Planned Work

- Project showcase cards
- Markdown-based blog system
- Research notes and CTF writeups
- Expanded About and resume content

## Maintenance Rule

Update this document whenever a feature, route, dependency, limitation, or project milestone changes.
