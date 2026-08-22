# Changelog

All notable changes to this project are documented in this file.

## [6.1.0] - 2026-08-22

### Added

- Homepage About and Research Interests previews sourced from centralized profile data.
- Homepage Selected Projects with shared featured-project selection.
- Single-Cycle RISC-V CPU entry in the central project data source.
- Homepage Currently Learning, Learning Milestone, and Next Up sections.
- Homepage Latest Notes list derived from the existing sorted blog loader.
- Homepage CTAs for About, Projects, Blog, article details, and primary contact actions.
- Project period, result, transparency, availability, and responsibility fields.

### Changed

- Upgraded the homepage from a Hero-focused introduction into a content-driven personal portal.
- Refactored About selected work to consume the same project data as Home and Projects.
- Extended ProjectCard with compact presentation and configurable semantic heading levels.
- Updated the Projects page to display both the personal website and RISC-V CPU course project.
- Updated the homepage metadata and package version to 6.1.0.

## [6.0.0] - 2026-08-22

### Added

- Complete About page with authentic identity, bio, and education content.
- Research Interests and Technical Interests with clear experience-level wording.
- Structured Skills, Currently Learning, and Learning Background sections.
- Transparent Selected Work summaries for the personal website and RISC-V CPU course project.
- Compact Contact section with GitHub, Gmail web compose, and email copying.
- Centralized typed profile data in `data/profile.ts`.
- Reusable `ContactLinks` component shared by the Home and About pages.

### Changed

- Replaced the About placeholder with a responsive, semantic personal profile.
- Updated Home, Projects, Blog, and root metadata wording to match the current student profile accurately.
- Corrected the CS231n article to describe the course as planned and not started.
- Removed the university email identifier from public contact links for privacy.
- Replaced the historical V0.1/V0.2 task README with a current project overview.
- Updated the package version to 6.0.0.

## [5.2.0] - 2026-08-22

### Added

- Blog post tags on index cards and article headers.
- Syntax highlighting for fenced code blocks with the full lowlight language registry.
- Back to Blog navigation on article detail pages.
- Short Python and Bash examples for validating technical code rendering.
- `rehype-highlight` and `lowlight` dependencies for Markdown code highlighting and explicit language registration.

### Changed

- Extended blog metadata validation and parsing to convert comma-separated tags into `string[]` values.
- Improved Markdown heading, paragraph, list, link, inline-code, code-block, blockquote, horizontal-rule, and table styles.
- Refined article metadata presentation and responsive tag wrapping.
- Updated the package version to 5.2.0.

## [5.1.0] - 2026-08-22

### Added

- Dynamic `/blog/[slug]` article route with statically generated paths.
- Full blog post retrieval by slug, including Markdown body content.
- Markdown rendering for headings, paragraphs, lists, emphasis, links, inline code, code blocks, and blockquotes.
- Dynamic article metadata and invalid-slug 404 handling.
- Brief placeholder bodies for the four existing posts.
- `react-markdown` dependency for safe, maintainable CommonMark rendering.

### Changed

- BlogCard titles and “Read article” actions now link to article pages.
- Updated the package version to 5.1.0.

## [5.0.0] - 2026-08-21

### Added

- Markdown blog content directory with four initial metadata-only posts.
- Server-side blog loader for reading files, validating metadata, generating slugs, and sorting posts.
- Reusable BlogCard component for titles, descriptions, categories, and dates.

### Changed

- Replaced the Blog placeholder with a data-driven responsive blog index.
- Updated the package version to 5.0.0.

## [4.0.0] - 2026-08-21

### Added

- Typed project data structure in `data/projects.ts`.
- Reusable ProjectCard component for project metadata, technology tags, and optional links.
- First project entry for Leo Personal Website.
- GitHub link to the current website repository.

### Changed

- Replaced the Projects placeholder with a data-driven responsive showcase grid.
- Updated the package version to 4.0.0.

## [0.3.1] - 2026-08-21

### Added

- Route-aware active navigation state using `usePathname()`.
- Accessible `aria-current="page"` state for the active navigation link.

### Changed

- Refined default, hover, active, and keyboard focus styles for navigation links.
- Aligned Navbar and Footer content widths with the homepage and inner pages.
- Standardized Projects, Blog, and About page titles, descriptions, spacing, and placeholder content areas.
- Updated the package version to 0.3.1.

## [0.3.0] - 2026-08-21

### Added

- Reusable responsive Navbar and Footer components.
- Projects, Blog, and About routes.
- Shared site layout across all pages.
- Route-specific page metadata.
- Project status and issue tracking documents.

### Changed

- Updated the package version to 0.3.0.
- Adjusted the homepage hero to fit the shared layout.

## [0.2.0] - 2026-08-20

### Added

- Responsive personal homepage hero.
- Personal introduction and technical interest tags.
- GitHub and Gmail web-compose links.
- Copy buttons for personal and university email addresses.

## [0.1.0] - 2026-08-20

### Added

- Initial Next.js project with TypeScript and Tailwind CSS.
- Basic personal homepage.
