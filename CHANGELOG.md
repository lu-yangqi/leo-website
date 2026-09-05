# Changelog

All notable changes to this project are documented in this file.

## [8.1.3] - 2026-09-05

### Changed

- Increased the configurable `HERO_TIMELINE.finalPortraitScale` from 0.34 to an initial 0.48, then to 0.58 for a user-requested larger preview. The latest tuning increases centered width and height by about 20.8% without changing timing, static sizes, or the controller.
- Added a full-opacity center hold from reference progress 0.48–0.60, followed by a smooth portrait fade over 0.60–0.80.
- Shifted signature opacity to 0.80–1.00 and ink reveal to 0.88–1.312, so the portrait is fully gone before the signature appears. Preserved signature reveal duration, lead-in, and final hold.
- Set `HERO_SCROLL_SCALE` and the matching desktop CSS height factor to 1.332, reserving space for the refined sequence without rewriting the controller or CSS-variable animation system.
- After further scrolling feedback, set the cinematic CSS `--hero-scroll-distance-ratio` to 0.9: shorten the complete track from 213.12svh to 191.808svh. All stage distances decrease by 10%; normalized proportions, the 0.58 center scale, controller, sticky scene height, and static modes stay unchanged.
- Updated package/lockfile versions to 8.1.3. Portrait/signature components, assets, static fallback, routes, SEO, i18n, and content models remain unchanged; no dependencies added.

### Verified

- Production build, standalone TypeScript, whitespace checks, and 19 motion/portrait tests pass, including center hold, non-overlapping portrait/signature states, unchanged stage proportions, and equivalent forward/reverse controller output over 90% of the previous distance.
- Local production checks pass for all eight content pages, metadata, representative article highlighting, 404 handling, sitemap, robots, assets, optimized portrait, and updated track CSS.

### Pending Acceptance and Deployment

- The 0.58 center scale and new timing await full-screen/windowed desktop, mobile, reduced-motion, no-JavaScript, and real reverse-scroll visual acceptance. No browser playback or performance measurements were performed.
- The larger-portrait Version 8.1.3 baseline was subsequently committed as `9a41f90`. The latest 90%-distance tuning remains uncommitted and has not been pushed or publicly verified by this task.

## [8.1.2] - 2026-09-05

### Changed

- Replaced `PortraitPlaceholder` with an isolated `LeoPortrait` component using the supplied `public/images/hero/leo-portrait.jpg`, without altering the photo.
- Added Next.js optimized image sources, first-screen preload, responsive sizes, and centered object-fit cropping inside the existing reserved 3:4 frame.
- Added English/Chinese portrait alt descriptions through the existing language context; replaced missing-asset guidance with a localized invitation to continue to the content.
- Removed placeholder artwork/styles and updated package/lockfile versions to 8.1.2. Preserved the Hero controller, signature component/reveal, timing, track length, static fallback, routes, SEO, and data architecture; no dependencies or image configuration added.

### Verified

- Production build, standalone TypeScript, whitespace checks, and 16 motion/portrait tests pass.
- Confirmed controller/timing/signature files are unchanged from `ddf6b45`; the portrait is already 3:4 and retains its original bytes.
- Local production HTML includes the preloaded image, optimized srcset/sizes, descriptive alt text, and no-JavaScript layout. JPEG and optimized WebP requests pass, including 384px and 640px variants.
- Eight content routes, canonical/social metadata, representative article highlighting, invalid-slug 404, sitemap, robots, identity endpoints, signature, and contact destinations pass local HTTP checks.

### Pending Acceptance and Deployment

- Actual browser portrait framing, scroll playback, mobile/reduced-motion/no-JavaScript appearance, interactions, and runtime layout stability still need acceptance.
- Version 8.1.2 was subsequently committed as `56a6e85`, confirmed at the start of Version 8.1.3 work. Public verification remains unconfirmed.

## [8.1.1] - 2026-09-05

### Changed

- Replaced `SignaturePlaceholder` with an isolated, accessible `LeoSignature` component using the supplied `public/signatures/leo-signature-traced.svg` without modifying the asset.
- Rendered the filled SVG outline as currentColor ink through an alpha mask, with a left-to-right partial reveal driven by the existing `--signature-draw` variable.
- Slowed the signature reveal after feedback: first extended its interval from 62%–88% through 62%–96% to 62%–98%; then increased its drawing distance by another 20% (57.6svh → 69.12svh). Extended the desktop scroll track to 171.52svh and normalized intervals so portrait/crossfade positions, the signature start, and its 3.2svh final hold remain unchanged.
- Reserved the original signature aspect ratio; kept the complete signature visible in static mobile, reduced-motion, and no-JavaScript modes.
- Updated English/Chinese signature labels and the remaining portrait-placeholder notice.
- Updated package and lockfile versions to 8.1.1; no dependency, controller, route, SEO, or content-model changes. Signature timing and desktop track length were tuned after feedback.

### Verified

- Production build, standalone TypeScript, whitespace checks, and 14 timeline/controller/signature tests pass.
- Confirmed the original SVG bytes and Version 8.1 controller are unchanged; inspected the SVG silhouette independently of the webpage. Updated motion tests verify exactly 20% more drawing distance, preserved earlier-stage positions, and the unchanged complete-signature hold before scene exit.
- Local production checks pass for eight content routes, invalid-slug 404, metadata, representative article highlighting, sitemap, robots, identity endpoints, generated signature CSS, and the exact SVG response bytes/content type.

### Pending Acceptance and Deployment

- Real browser mask rendering, partial-reveal playback, mobile/reduced-motion/no-JavaScript appearance, interactions, and runtime performance remain unverified.
- Version 8.1.1 was subsequently committed as `ddf6b45`, confirmed at the start of Version 8.1.2 work. Public verification remains unconfirmed. The portrait was a placeholder in this version and is integrated in Version 8.1.2; true pen-stroke-order animation remains deferred.

## [8.1.0] - 2026-09-05

### Added

- Sticky, reversible Hero sequence: portrait placeholder → scaled center focus → signature placeholder → homepage content.
- Separate cinematic controller, server-rendered scene, replaceable portrait/signature components, and pure timing functions.
- Reserved SVG stroke-drawing phase using currentColor and CSS variables; no final photo or signature asset required.
- Bilingual skip-intro, placeholder labels, scroll instructions, and static-mode guidance.
- Nine zero-new-dependency motion tests, available through `npm run test:hero`.

### Changed

- Replaced the decorative Hero LY panel with the cinematic scene; retained LY Navbar/icon branding and the preferred Version 7.2 background and palette.
- Moved existing Projects/About actions, interests, and contact links immediately after the cinematic track so interactive controls never fade out.
- Limited cinematic behavior to motion-enabled desktop viewports of at least 900×700; kept static layouts for narrow/short screens and reduced motion.
- Updated package and lockfile versions to 8.1.0 without changing dependency versions, routes, SEO, bilingual architecture, or content data.

### Fixed

- Corrected the no-JavaScript fallback found during source review so signature content and the SVG guide remain visible in the static layout.

### Verified

- Production build, standalone TypeScript, whitespace checks, and nine timeline/controller tests pass.
- Local HTTP regression checks pass for all eight content routes, invalid-slug 404, canonical/social metadata, Markdown/highlighting, sitemap, robots, identity endpoints, and static assets.

### Pending Acceptance and Deployment

- Real browser playback, responsive appearance, reduced-motion/no-JavaScript rendering, keyboard and bilingual/contact interaction, and runtime performance still need acceptance. Simulated controller tests do not replace those checks.
- Version 8.1 was subsequently committed as `5f59740`, confirmed at the start of Version 8.1.1 work. Public/browser verification remains unconfirmed. Personal assets were deferred in this version; signature integration follows in Version 8.1.1.

## [8.0.0] - 2026-09-05

### Added

- Decorative geometric `LY` Hero mark with a short, once-only SVG entrance motion.
- Lightweight IntersectionObserver reveal enhancement, reduced-motion handling, and an optional native CSS reading-progress line.
- Translated skip-to-content and back-to-top links, plus bilingual Hero framing text.

### Changed

- Introduced an editorial visual system with expressive system-font typography, fine rules, and consistent surfaces; restored the Version 7.2 navy background, cool-slate/white text, and cyan palette after user feedback.
- Redesigned the homepage Hero and six numbered content sections while preserving factual profile, project, learning, Blog, and contact content.
- Reduced the Hero monogram and bounded its panel after user feedback; removed full-height stretching while preserving the caption, mobile layout, and existing motion.
- Updated navigation, footer, cards, and inner-page presentation; preserved existing routes, shared-route language architecture, Markdown rendering, syntax highlighting, and SEO behavior.
- Updated package and lockfile versions to 8.0.0 without adding dependencies.

### Verified

- Production build, standalone TypeScript validation, and whitespace checks pass.
- Local production responses pass checks for eight content routes, invalid-slug 404, canonical/social metadata, Blog markup, sitemap, robots, icons, and referenced static assets.
- Server-rendered content is not hidden by reveal-state attributes; motion source includes reduced-motion and route-cleanup handling.

### Pending Acceptance and Deployment

- Browser automation was denied by the permission check. Desktop/mobile visual review, real language/copy interactions, keyboard and reduced-motion checks, and runtime performance measurements remain manual acceptance work.
- Version 8.0 was subsequently committed as `f567204`, confirmed at the start of Version 8.1 work. Public/browser verification remains unconfirmed; the existing GitHub `main` → Vercel workflow is unchanged.

## [7.2.0] - 2026-08-23

### Added

- Custom `LY` SVG favicon and main site icon using the native Next.js metadata-file convention.
- Matching 180×180 Apple touch icon generated with the built-in `ImageResponse` API.
- Shared 1200×630 Open Graph image with Leo Yangqi's factual student identity and technical interests.
- Large-image Open Graph and Twitter metadata for Home, inner pages, and Blog articles.

### Changed

- Extended the centralized Version 7.1 metadata architecture with one reusable production share-image definition.
- Updated the package version to 7.2.0 without adding dependencies or changing the visible website UI.

### Verified

- Confirmed the production build generates the icon, Apple icon, and share-image routes without affecting existing pages, sitemap, or robots routes.
- Confirmed Home, About, and a representative Blog article expose valid production-origin image metadata while preserving their own titles, descriptions, canonical URLs, and Open Graph types.
- Visually checked the generated 1200×630 share image and 180×180 Apple icon.

### Pending Deployment

- Production verification of the new Version 7.2 icon and share-image assets after the commit reaches GitHub `main` and Vercel deploys it.

## [7.1.0] - 2026-08-22

### Added

- Central production site configuration for the Vercel origin, site name, default title, and factual description.
- Canonical metadata for Home, About, Projects, Blog, and all Markdown Blog articles.
- Dynamic `sitemap.xml` containing the four core routes and every article returned by the existing Blog loader.
- Public `robots.txt` policy with production sitemap discovery.
- Basic Open Graph and Twitter text metadata, with article metadata sourced from Markdown frontmatter.

### Changed

- Standardized public-page metadata with the native Next.js Metadata API and a shared title template.
- Updated the package version to 7.1.0 without adding dependencies or changing visible application behavior.

### Verified

- Confirmed the production build generates all existing routes plus `/sitemap.xml` and `/robots.txt`.
- Confirmed representative titles, descriptions, canonical URLs, Open Graph URLs, article metadata, sitemap entries, and crawler rules through a local production server.

### Deployed

- Confirmed the public production `sitemap.xml` lists the core routes and all four Blog articles.
- Confirmed the public production `robots.txt` allows crawling and advertises the production sitemap.

## [7.0.0] - 2026-08-22

### Added

- Documented the minimal GitHub → Vercel import and deployment handoff.
- Documented the required post-deployment route, bilingual, contact, responsive, and 404 checks.

### Verified

- Confirmed the existing Next.js project builds successfully without deployment-specific application changes.
- Confirmed that no environment variables, extra dependencies, `vercel.json`, custom output directory, or custom build command are required.
- Confirmed that the GitHub `main` branch was reachable and synchronized before the local readiness documentation changes.

### Deployed

- Published the first production deployment through Vercel at `https://leo-website-lilac.vercel.app`.
- Verified Home, About, Projects, Blog, a representative article, bilingual switching, contact destinations, 404 behavior, and responsive homepage layout on the production domain.

### Changed

- Marked the documentation release as Version 7.0.0 without changing application code or adding dependencies.

## [6.2.0] - 2026-08-22

### Added

- English / Chinese language switch in the shared Navbar with persistent browser storage.
- Typed centralized UI translations and reusable localization helpers.
- Reviewed bilingual presentation fields for profile, education, interests, skills, learning, projects, and contact UI.
- Localized Home, About, Projects, Navbar, Footer, shared CTAs, page metadata, and generic Blog interface text.
- Validated `lang: en | zh` frontmatter for content-driven Markdown articles.
- Article and card language attributes for preserving each post's original writing language.

### Changed

- Kept profile and project facts in single typed records while localizing only presentation text.
- Updated project cards to localize content and preserve full About-page transparency and responsibility details.
- Updated language-aware page titles, descriptions, date formatting, copy feedback, and accessibility labels.
- Updated the package version to 6.2.0 without adding dependencies.

### Fixed

- Prevented streamed App Router metadata from reverting the selected client language.
- Preserved the ZJU Gmail compose link and localized one-click copy feedback through the bilingual refactor.

## [6.1.1] - 2026-08-22

### Changed

- Restored the confirmed Zhejiang University email as a secondary public contact after GitHub and personal email.
- Reused the existing Gmail web-compose and accessible one-click copy behavior for the university address.
- Updated the package version to 6.1.1.

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
