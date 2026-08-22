# Project Status

Last updated: 2026-08-22

## Current Version

Version 5.1 — Readable Markdown blog system (package version 5.1.0).

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
| `/blog` | Complete | Markdown-driven blog index |
| `/blog/[slug]` | Complete | Statically generated Markdown article pages |
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
- Markdown blog content directory with four initial post metadata files
- Server-side blog metadata loader with validation, slug generation, and sorting
- Reusable responsive BlogCard component
- Data-driven Blog page with category and semantic publication dates
- BlogCard links to readable article routes
- Blog post retrieval by slug with invalid-slug handling
- Markdown body rendering with responsive article typography
- Static generation for all known blog slugs
- Dynamic article metadata based on Markdown frontmatter

## Current Limitations

- The project showcase currently contains one project.
- Project detail pages, filtering, and category views are not implemented.
- The first project has no live demo because the website is not deployed yet.
- The metadata parser intentionally supports only simple single-line frontmatter fields.
- Search, tags, syntax highlighting, table of contents, and previous/next article navigation are not implemented.
- About page details are incomplete.

## Validation

- `npm run build` passes for Version 5.1 with the four known blog article routes listed as SSG output.
- Navbar navigation works across Home, Projects, Blog, and About, with exactly one correct active link on each route.
- Active links expose `aria-current="page"` for assistive technology.
- Shared Navbar and Footer render on every tested page.
- The Projects page renders one ProjectCard from `data/projects.ts` with the expected repository link and six technology tags.
- No browser console warnings or errors were found on the Projects page.
- The ProjectCard and GitHub link remain visible without horizontal overflow at 1280px and 390px viewport widths.
- The Blog page loads four Markdown metadata files and renders four BlogCard components with the expected titles, categories, descriptions, and dates.
- All four BlogCard components remain visible without horizontal overflow at 1280px and 390px viewport widths.
- No browser console warnings or errors were found on the Blog page.
- All four BlogCard article links open their corresponding `/blog/[slug]` pages.
- Every article renders its title, description, category, date, Markdown headings, and body content with the Blog navigation active.
- Invalid blog slugs produce the Next.js 404 page through `notFound()`.
- Article content remains readable at approximately 688px on desktop and 327px on mobile, with no page or code-block overflow.
- Navigation remains visible without horizontal overflow at a 390px viewport; document width matches the viewport width.

## Next Planned Work

- Add more real projects and categories
- Add optional live demo links when deployments are available
- Add project detail pages in a future version
- Version 5.2 article reading experience improvements
- Add syntax highlighting, tags, article navigation, and improved typography where appropriate
- Research notes and CTF writeups
- Expanded About and resume content

## Maintenance Rule

Update this document whenever a feature, route, dependency, limitation, or project milestone changes.
