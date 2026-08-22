# Project Status

Last updated: 2026-08-22

## Current Version

Version 5.2 — Enhanced technical article reading experience (package version 5.2.0).

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
- Syntax highlighting for fenced code blocks, including the planned technical languages
- Comma-separated blog tags parsed into typed string arrays
- Responsive tag presentation on BlogCard and article headers
- Improved scoped Markdown typography and accessible article-link focus styles
- Horizontally scrollable code blocks that preserve indentation and page width
- Clear Back to Blog navigation on every article detail page

## Current Limitations

- The project showcase currently contains one project.
- Project detail pages, filtering, and category views are not implemented.
- The first project has no live demo because the website is not deployed yet.
- The metadata parser intentionally supports only simple single-line frontmatter fields.
- Tag and category filtering are not implemented; displayed tags are intentionally non-interactive.
- Search, table of contents, and previous/next article navigation are not implemented.
- About page details are incomplete.

## Validation

- `npm run build` passes for Version 5.2 with the four known blog article routes listed as SSG output.
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
- All four BlogCards display their expected tag sets without changing article sorting.
- All four article pages display category, title, description, date, tags, Markdown body, and Back to Blog navigation.
- Python, Bash, PowerShell, Assembly, and the other registered highlight.js languages are available through the Markdown highlighter.
- The Python, Bash, and text test blocks preserve their declared language classes; Python and Bash produce highlighted tokens.
- Back to Blog returns to `/blog`, Blog stays active on article routes, and the invalid-slug 404 regression still passes.
- At 1280px, the article and code blocks have no page-level horizontal overflow; narrow-screen safety is preserved by wrapping tags and titles while code blocks scroll internally.

## Next Planned Work

- Add more real projects and categories
- Add optional live demo links when deployments are available
- Add project detail pages in a future version
- Add real article content incrementally
- Consider table of contents, previous/next navigation, and tag filtering only when content volume justifies them
- Research notes and CTF writeups
- Expanded About and resume content

## Maintenance Rule

Update this document whenever a feature, route, dependency, limitation, or project milestone changes.
