# Project Status

Last updated: 2026-08-21

## Current Version

Version 4.0 — Initial project showcase system (package version 4.0.0).

## Technology Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS

## Available Routes

| Route | Status | Purpose |
| --- | --- | --- |
| `/` | Complete | Personal homepage and contact links |
| `/projects` | Complete | Data-driven project showcase |
| `/blog` | Placeholder | Future technical notes and articles |
| `/about` | Placeholder | Personal background, skills, and research experience |

## Completed Features

- Responsive personal homepage
- GitHub and browser-based Gmail contact links
- One-click email address copying
- Shared responsive navigation bar
- Accessible active-route navigation state
- Distinct navigation default, hover, active, and keyboard focus states
- Shared footer
- Projects, Blog, and About routes
- Consistent placeholder page structure and alignment
- Route-specific metadata
- Typed project data separated from presentation
- Reusable responsive ProjectCard component
- First project entry with category, description, technology tags, and GitHub link

## Current Limitations

- The project showcase currently contains one project.
- Project detail pages, filtering, and category views are not implemented.
- The first project has no live demo because the website is not deployed yet.
- Blog content and Markdown support are not implemented.
- About page details are incomplete.

## Validation

- `npm run build` passes for Version 4.0 with all four routes statically generated.
- Navbar navigation works across Home, Projects, Blog, and About, with exactly one correct active link on each route.
- Active links expose `aria-current="page"` for assistive technology.
- Shared Navbar and Footer render on every tested page.
- The Projects page renders one ProjectCard from `data/projects.ts` with the expected repository link and six technology tags.
- No browser console warnings or errors were found on the Projects page.
- The ProjectCard and GitHub link remain visible without horizontal overflow at 1280px and 390px viewport widths.
- Navigation remains visible without horizontal overflow at a 390px viewport; document width matches the viewport width.

## Next Planned Work

- Add more real projects and categories
- Add optional live demo links when deployments are available
- Add project detail pages in a future version
- Markdown-based blog system
- Research notes and CTF writeups
- Expanded About and resume content

## Maintenance Rule

Update this document whenever a feature, route, dependency, limitation, or project milestone changes.
