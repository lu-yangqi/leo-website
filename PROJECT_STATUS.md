# Project Status

Last updated: 2026-09-05

## Current Version

Version 8.0.0 — Editorial visual redesign and lightweight motion implemented; production build and local response checks pass.

Version 8.0 remains local. Browser visual/interaction acceptance and verification
after a GitHub `main` → Vercel deployment are pending. No Version 8.0 commit,
push, or public deployment was performed in this task.

Production URL: [https://leo-website-lilac.vercel.app](https://leo-website-lilac.vercel.app)

Hosting: Vercel. Deployment source: the GitHub `main` branch using Vercel's
standard Next.js integration.

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
| `/sitemap.xml` | Complete | Dynamic public-page and Markdown article discovery |
| `/robots.txt` | Complete | Public crawler policy and sitemap location |

## Completed Features

- Editorial layout with the restored Version 7.2 midnight-navy dual-gradient background, white/cool-slate text, cyan accents, serif/sans-serif typography, fine rules, and shared layout widths
- Redesigned two-column homepage Hero with a decorative geometric `LY` mark, authentic profile identity, and prominent Projects/About links
- Refined the Hero after size feedback: a compact, vertically centered identity panel (maximum 360px) and centered monogram (72% width, capped at 240px), retaining the existing 100px mobile graphic column
- Six numbered homepage sections with distinct profile, research, project, learning, note, and contact presentations
- Consistent Navbar, Footer, About, Projects, Blog index, and article presentation without changing their content models
- Lightweight CSS entrance and hover effects, once-only SVG motion, and IntersectionObserver scroll reveals
- Progressive CSS reading-progress line in supporting browsers; native scrolling retained
- Reduced-motion support, visible server-rendered content without JavaScript, reveal cleanup on route changes, and a translated keyboard skip link
- Public HTTPS production deployment through the zero-config GitHub → Vercel workflow
- Central production origin and factual site identity in `lib/site.ts`
- Native Next.js `metadataBase`, title template, descriptions, canonical URLs, Open Graph, and Twitter text metadata
- Dynamic sitemap generated from fixed public routes and the existing Markdown Blog loader
- Public crawler policy that allows indexing and advertises the production sitemap
- Article canonical and social metadata derived from each post's existing Markdown frontmatter
- Custom `LY` SVG browser favicon and main site icon using the Next.js metadata-file convention
- Matching 180×180 Apple touch icon generated with the built-in `ImageResponse` API
- Shared 1200×630 Open Graph image with factual student identity and technical-interest text
- Large-card Open Graph and Twitter image metadata shared by Home, inner pages, and Blog articles
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
- Consistent inner-page structure and alignment
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

- Version 8.0 desktop/mobile visual quality, real bilingual/contact interactions, keyboard navigation, reduced-motion behavior, and runtime performance still require manual browser acceptance; browser automation permission was declined in this session.
- Version 8.0 has not been committed, pushed, or verified on the public deployment in this task.
- Advanced signature animation, portrait storytelling, and complex scroll choreography remain deferred; native scroll-progress enhancement is omitted in unsupported browsers.
- The project showcase currently contains two projects, so overall variety remains limited.
- Project detail pages, filtering, and category views are not implemented.
- The personal website is publicly deployed, but the RISC-V CPU source remains local and has no live demo.
- The metadata parser intentionally supports only simple single-line frontmatter fields.
- Tag and category filtering are not implemented; displayed tags are intentionally non-interactive.
- Search, table of contents, and previous/next article navigation are not implemented.
- Shared routes serve English static HTML and restore a persisted Chinese choice after hydration; dedicated locale URLs, `hreflang`, and Chinese static HTML remain deferred to a future multilingual SEO architecture decision.
- All current blog articles are English-language samples; the validated Chinese article path is ready but has no published Chinese sample yet.

## Validation

### Version 8.0 — 2026-09-05

- Baseline and updated `npm run build` pass with all 15 generated pages/metadata outputs, including four Blog articles.
- `npx tsc --noEmit --incremental false` and `git diff --check` pass.
- Local production HTTP checks return 200 for Home, About, Projects, Blog, and all four Blog articles; an unknown article slug returns 404.
- Each content route retains one main landmark, one H1, the correct active navigation state, a title/description, its production canonical URL, and shared social-image metadata.
- The representative article retains original English language, Markdown markup, syntax highlighting, and article metadata.
- Home retains all six preview/contact sections, the confirmed GitHub and both email addresses, accessible copy-feedback markup, and the skip-link target.
- Sitemap contains the expected eight public content URLs; robots policy, all three identity-image endpoints, and 14 referenced static assets respond successfully.
- Server HTML has no hidden reveal-state attributes. Source review confirms reduced-motion handling and unchanged language persistence, content loaders, contact callbacks, and SEO generators; this is not a substitute for browser interaction testing.
- No dependencies, downloaded fonts, continuous JavaScript animation loops, or architecture changes were introduced. Runtime frame rate, layout shifts, and Lighthouse scores were not measured.
- Browser tab creation was denied by the permission check. No Version 8.0 screenshots, mobile overflow checks, live language/copy clicks, or production visual checks were performed; these remain acceptance work.

### Earlier-version verification (historical, not a Version 8.0 browser retest)

- The Version 7.2 production build generates `/icon.svg`, `/apple-icon`, and `/opengraph-image` alongside every existing route.
- Local production responses return the custom SVG icon, Apple PNG, and Open Graph PNG with correct content types and no 404 errors.
- Home, About, and `/blog/personal-website-codex` each expose one production-origin `og:image`, one `twitter:image`, and `summary_large_image` card metadata.
- The representative article retains its frontmatter title, description, canonical URL, and `article` Open Graph type while using the shared image.
- The rendered 1200×630 share image and 180×180 Apple icon were visually inspected for accurate text, hierarchy, contrast, and legibility.
- No page component, stylesheet, bilingual state, profile data, project data, or Blog content was changed in Version 7.2.
- The deployed Version 7.1 `sitemap.xml` and `robots.txt` were confirmed publicly available on 2026-08-23 before Version 7.2 work began.
- The Version 7.1 production build generates `/sitemap.xml` and `/robots.txt` alongside all existing public routes and four statically generated Blog articles.
- Local production-server checks confirm correct titles, descriptions, canonical URLs, Open Graph URLs, and types for Home, About, Projects, Blog, and `/blog/personal-website-codex`.
- The generated sitemap contains Home, About, Projects, Blog, and every article returned by `getBlogPosts()`; article `lastModified` values come from existing frontmatter dates.
- The generated robots policy allows `/` for all crawlers and references `https://leo-website-lilac.vercel.app/sitemap.xml`.
- TypeScript validation and `git diff --check` pass without adding dependencies.
- The public Vercel deployment at `https://leo-website-lilac.vercel.app` is reachable over HTTPS and serves the expected production homepage.
- Production checks passed for `/`, `/about`, `/projects`, `/blog`, `/blog/personal-website-codex`, and an unknown blog slug returning the 404 page.
- Production language switching updates content, metadata, `aria-pressed`, `<html lang>`, contact labels, and persists Chinese across core pages.
- Production About content preserves the education period, completed Andrew Ng specialization, planned/not-started CS231n status, early PyTorch wording, future-direction framing, and project transparency.
- Production Projects renders both project cards; the website repository link is valid in the UI and the CPU card has no fabricated repository or demo link.
- Production Blog renders four original-language article cards; the representative article preserves English article language while localizing interface text and retains Markdown, tags, and syntax highlighting.
- The production homepage has no horizontal overflow at 1280px or 390px; the mobile Navbar, language control, and sections remain inside the viewport.
- GitHub, personal Gmail compose, and ZJU Gmail compose destinations are present on the production site.
- The Version 7.0 readiness audit confirmed that the project uses the supported zero-config Next.js deployment path, has no required environment variables, and does not need `vercel.json`.
- GitHub remote `origin` points to `https://github.com/lu-yangqi/leo-website.git`; local `main` matched `origin/main` before the deployment-readiness documentation changes.
- `npm run build` passes on 2026-08-22 with Next.js 16.3.1 and generates all five public route groups plus four statically generated blog article paths.
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
- Manually review Version 8.0 at desktop and mobile widths in English and Chinese, including navigation/reload persistence, both email-copy actions, keyboard access, reduced motion, and performance.
- After acceptance, commit and push Version 8.0 through the existing GitHub `main` → Vercel workflow; recheck routes, metadata, icons, sharing image, and responsive interactions on the production URL.
- Consider Search Console submission manually as a separate external step.

## Maintenance Rule

Update this document whenever a feature, route, dependency, limitation, or project milestone changes.
