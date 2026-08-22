# Project Status

Last updated: 2026-08-22

## Current Version

Version 6.2.0 — Maintainable English / Chinese foundation for the core website (package version 6.2.0).

## Technology Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS

## Available Routes

| Route | Status | Purpose |
| --- | --- | --- |
| `/` | Complete | Content-driven portal to profile, projects, learning, notes, and contact |
| `/projects` | Complete | Data-driven project showcase |
| `/blog` | Complete | Markdown-driven blog index |
| `/blog/[slug]` | Complete | Statically generated Markdown article pages |
| `/about` | Complete | Authentic profile, education, interests, skills, learning, work, and contact |

## Completed Features

- English-default `EN | 中文` language switch in the shared Navbar
- Persistent language selection across core-page navigation and reloads using browser storage
- Typed centralized interface translations in `data/i18n.ts`
- Localized Navbar, Footer, Home, About, Projects, shared CTAs, contact labels, copy feedback, and core-page metadata
- Bilingual profile and project presentation fields backed by one factual record per profile item or project
- Synchronized document language using `lang="en"` and `lang="zh-CN"`
- Accessible native language buttons with a group label and explicit `aria-pressed` state
- Original-language blog policy with validated `lang: en | zh` frontmatter
- Localized blog interface, date formatting, article navigation, and tag accessibility text without translating article content
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
- Ordered public contact set with GitHub, personal email, and secondary ZJU email
- Factual Home, Projects, Blog, and CS231n public wording aligned with the current student profile
- Expanded homepage with Hero, About, Research Interests, Selected Projects, Currently Learning, Latest Notes, and Contact sections
- Homepage aggregation of profile facts from `data/profile.ts`, projects from `data/projects.ts`, and sorted posts from `lib/blog.ts`
- Compact About and research-interest previews with clear links to the complete profile
- Featured-project selection shared by Home, Projects, and About
- Second central project entry for the confirmed Single-Cycle RISC-V CPU course project
- Learning milestone and Next Up presentation for the completed Andrew Ng specialization and planned CS231n study
- Latest three Markdown posts derived from the existing blog loader and linked to article routes
- Shared project period, result, transparency, availability, and responsibility data without About-page duplication

## Current Limitations

- The project showcase currently contains two projects, so overall variety remains limited.
- Project detail pages, filtering, and category views are not implemented.
- Neither project has a live demo because the website is not deployed and the CPU source remains local.
- The metadata parser intentionally supports only simple single-line frontmatter fields.
- Tag and category filtering are not implemented; displayed tags are intentionally non-interactive.
- Search, table of contents, and previous/next article navigation are not implemented.
- Shared routes serve English static HTML and restore a persisted Chinese choice after hydration; dedicated locale URLs, `hreflang`, and Chinese static HTML are deferred to production SEO work.
- All current blog articles are English-language samples; the validated Chinese article path is ready but has no published Chinese sample yet.

## Validation

- `npm run build` passes for Version 6.2 and generates Home, About, Projects, Blog, and all four blog-detail routes successfully.
- English-to-Chinese and Chinese-to-English switching updates core content, Navbar, Footer, contact UI, page title, description, and `<html lang>` without external translation requests.
- The selected language remains consistent across Home, About, Projects, and Blog navigation and is restored after a full reload.
- English and Chinese states expose the correct `aria-pressed` value; Navbar active links continue to expose `aria-current="page"`.
- Home, About, Projects, Blog, and a representative article have no page-level horizontal overflow at 1280px or 390px; the language control stays inside the viewport.
- The confirmed GitHub, personal Gmail, and ZJU email destinations remain present; ZJU email copying produces localized accessible success feedback.
- Profile regression checks preserve the completed Andrew Ng specialization, planned/not-started CS231n status, early PyTorch wording, and future-direction framing for research interests.
- Project regression checks preserve the website repository, Codex transparency, CPU test result, local-only CPU source, no hardware-board claim, and absence of fake CPU links.
- Blog titles, descriptions, tags, and Markdown bodies remain in their stored article language; Markdown rendering, syntax highlighting, Back to Blog, static generation, and invalid-slug 404 behavior remain intact.
- Navbar navigation works across Home, Projects, Blog, and About, with exactly one correct active link on each route.
- Active links expose `aria-current="page"` for assistive technology.
- Shared Navbar and Footer render on every tested page.
- The Projects page renders two ProjectCards from `data/projects.ts`; the website retains its repository link and the CPU has no repository or demo link.
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
- GitHub and both Gmail web-compose targets are correct; personal and ZJU email copying display accessible confirmation.
- At 1280px and an approximately 390px test frame, the About page has no horizontal overflow; navigation, names, tags, cards, and contact controls stay within the viewport.
- Home, Projects, Blog, and representative blog-detail routes retain correct active navigation, footers, and overflow behavior after Version 6.1.
- The homepage displays two profile-derived About paragraphs, two research interests, two featured projects, three current learning areas, two learning-status cards, and the latest three sorted blog posts.
- Homepage CTAs target `/about`, `/projects`, `/blog`, and actual `/blog/[slug]` routes; contact actions continue to use the shared accessible component.
- The RISC-V CPU result, Codex-assisted implementation, local-only source, and no-hardware-deployment status appear on the Projects and About pages without fake links.
- At 1280px and an approximately 390px test frame, the expanded homepage has no horizontal overflow; project, research, learning, and note cards remain within the viewport and stack correctly.
- About, Blog, representative article pages, syntax highlighting, tags, Back to Blog, active navigation, and invalid-slug 404 handling pass regression testing for Version 6.1.

## Next Planned Work

- Add more real projects and categories
- Add optional live demo links when deployments are available
- Add project detail pages in a future version
- Add real article content incrementally
- Consider table of contents, previous/next navigation, and tag filtering only when content volume justifies them
- Research notes and CTF writeups
- Version 7 deployment, discoverability, and production metadata

## Maintenance Rule

Update this document whenever a feature, route, dependency, limitation, or project milestone changes.
