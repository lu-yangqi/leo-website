# Leo Personal Website

A personal technical website for Leo Yangqi, an undergraduate student in
Artificial Intelligence at Zhejiang University.

The site presents an honest, maintainable record of current interests,
learning, projects, and technical writing. Its public identity is student-led:
exploring, learning, and building without overstating professional or research
experience.

## Current Version

Version 8.1.0 includes:

- A scroll-linked cinematic Hero with replaceable portrait and signature placeholders
- An editorial visual system retaining the Version 7.2 navy background, cool-slate text, cyan accents, expressive typography, and functional `LY` branding
- Responsive page styling, lightweight entrance and scroll-reveal effects, and reduced-motion support
- A verified public Vercel deployment at
  [leo-website-lilac.vercel.app](https://leo-website-lilac.vercel.app)
- Centralized production metadata, canonical URLs, sitemap discovery, and a public crawler policy
- A custom `LY` site icon, Apple touch icon, and shared Open Graph preview image
- A persistent English / Chinese language switch for the core website
- Centralized typed interface translations and bilingual profile content
- A content-driven homepage with profile, project, learning, and latest-note previews
- A data-driven two-project showcase
- A Markdown blog with tags and syntax-highlighted code blocks
- A complete About page with education, interests, skills, learning status,
  selected work, and contact information
- Centralized typed profile and project data without duplicated factual records

## Live Website

Production: [leo-website-lilac.vercel.app](https://leo-website-lilac.vercel.app)

The site is hosted on Vercel. Deployments are triggered from the GitHub
`main` branch through Vercel's standard Next.js integration.

Version 8.1 is implemented locally and has passed build, TypeScript, nine motion
tests, and local production-response checks. Browser visual/interaction acceptance
and public deployment verification remain pending; the live URL above is not
evidence that Version 8.1 has been deployed.

## SEO Foundation

- Canonical and basic social metadata use the centralized production origin.
- [`sitemap.xml`](https://leo-website-lilac.vercel.app/sitemap.xml) includes core routes and Markdown Blog articles automatically.
- [`robots.txt`](https://leo-website-lilac.vercel.app/robots.txt) allows public crawling and advertises the sitemap.

English static HTML remains the canonical search representation. Chinese is a
user-selectable shared-route presentation; no locale routes or fake
`hreflang` entries are generated.

## Site Identity

The browser icon, Apple touch icon, and 1200×630 sharing preview use a simple
`LY` mark and the same factual AI student identity as the website metadata.
Static pages and Blog articles reuse the shared image while keeping their own
titles, descriptions, canonical URLs, and article language.

## Visual System and Motion

The homepage opening follows: **portrait placeholder → shrink and center →
signature placeholder → content**. Scroll upward to reverse the sequence, or
use “Skip intro” to reach the existing actions and content immediately.

The cinematic scene runs at viewport sizes of at least **900×700 CSS pixels**
when `prefers-reduced-motion` permits motion. Narrow/short screens and reduced
motion use a static layout. Without JavaScript, the full static introduction and
placeholders remain available. No wheel/touch input is intercepted.

The implementation uses sticky positioning, CSS variables, and one scheduled
animation frame per scroll/resize update, with no continuous React state updates,
new dependencies, downloaded fonts, or WebGL. Existing numbered sections, card
hover effects, inner-page entrances, and scroll reveals are retained.

Replace `components/hero/PortraitPlaceholder.tsx` for the final 3:4 portrait and
`components/hero/SignaturePlaceholder.tsx` for the final SVG. The parent wrappers
own movement and opacity; `components/hero/motion.ts` owns timing. The signature
slot inherits `currentColor` and exposes `--signature-draw` for the future path
drawing phase. The current guide is not a finished Leo signature.

Actual desktop/mobile playback, language/contact interactions, keyboard access,
reduced-motion/no-JavaScript rendering, and runtime performance still need browser
acceptance. See `PROJECT_STATUS.md` for verified results and remaining checks.

## Technology Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Markdown content stored in the repository

## Local Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Create a production build with:

```bash
npm run build
```

Run the standalone TypeScript check with:

```bash
npx tsc --noEmit --incremental false
```

Test the cinematic timeline and controller without additional dependencies:

```bash
npm run test:hero
```

## Deployment

Pushes to `main` use the standard GitHub → Vercel workflow. The project does
not require `vercel.json`, environment variables, a custom build command, or a
custom output directory.

Version 7.0 was deployed through the zero-config GitHub → Vercel workflow and
the production URL passed the core route, bilingual, contact, article, 404,
and responsive homepage checks on 2026-08-22.

## Content Structure

```text
app/             Routes and page presentation
components/      Reusable interface components
data/            Typed project and profile data
content/blog/    Markdown blog posts
docs/            Version requirements and planning documents
```

Personal profile facts are maintained in `data/profile.ts`; shared interface
translations live in `data/i18n.ts`. Blog posts remain a simple Git-based
workflow: edit Markdown, review locally, commit, and push. Each article keeps
its original writing language and does not require a translated pair.

## Project Documentation

- `PROJECT_STATUS.md` records the current implementation and limitations.
- `CHANGELOG.md` records completed version changes.
- `ISSUES.md` records resolved problems and remaining non-blocking limitations.
