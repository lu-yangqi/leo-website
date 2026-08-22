# Project Status

Last updated: 2026-08-22

## Current Version

Version 6.0 — Authentic, data-driven personal profile (package version 6.0.0).

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
| `/about` | Complete | Authentic profile, education, interests, skills, learning, work, and contact |

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
- Complete responsive About page with public, formal, and Chinese names
- Education details for the Zhejiang University Artificial Intelligence undergraduate program
- Research Interests clearly framed as possible future directions
- Separate technical interests and introductory cybersecurity learning context
- Structured established skills separated from technologies currently being learned
- Completed Andrew Ng Machine Learning Specialization and Planned CS231n statuses
- Transparent selected-work summaries for the personal website and RISC-V CPU course project
- Centralized typed profile data in `data/profile.ts`
- Reusable Gmail web-compose and email-copy contact component shared by Home and About
- Privacy-focused primary contact set limited to GitHub and personal email
- Factual Home, Projects, Blog, and CS231n public wording aligned with the current student profile

## Current Limitations

- The project showcase currently contains one project.
- Project detail pages, filtering, and category views are not implemented.
- The first project has no live demo because the website is not deployed yet.
- The metadata parser intentionally supports only simple single-line frontmatter fields.
- Tag and category filtering are not implemented; displayed tags are intentionally non-interactive.
- Search, table of contents, and previous/next article navigation are not implemented.
- The About page is currently English-first; a full bilingual content architecture is not implemented.

## Validation

- `npm run build` passes for Version 6.0, including the static About page and all four blog article routes as SSG output.
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
- The About page renders the expected identity, education period, research and technical interests, skills, learning states, selected work, and primary contacts.
- Content regression checks found no claims of CS229 study, active/completed CS231n study, formal research, internships, professional experience, or advanced PyTorch expertise.
- Andrew Ng Machine Learning Specialization is marked Completed; Stanford CS231n is explicitly marked Planned and not started.
- GitHub and Gmail web-compose targets are correct, email copying displays confirmation, and the university-email identifier is no longer exposed publicly.
- At 1280px and an approximately 390px test frame, the About page has no horizontal overflow; navigation, names, tags, cards, and contact controls stay within the viewport.
- Home, Projects, Blog, and representative blog-detail routes retain correct active navigation, footers, and overflow behavior after Version 6.0.

## Next Planned Work

- Add more real projects and categories
- Add optional live demo links when deployments are available
- Add project detail pages in a future version
- Add real article content incrementally
- Consider table of contents, previous/next navigation, and tag filtering only when content volume justifies them
- Research notes and CTF writeups
- Version 6.1 homepage integration with selected profile, learning, project, and blog previews
- Version 6.2 bilingual content foundation
- Version 7 deployment, discoverability, and production metadata

## Maintenance Rule

Update this document whenever a feature, route, dependency, limitation, or project milestone changes.
