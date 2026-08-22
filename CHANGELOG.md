# Changelog

All notable changes to this project are documented in this file.

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
