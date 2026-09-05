# Leo Personal Website

A personal technical website for Leo Yangqi, an undergraduate student in
Artificial Intelligence at Zhejiang University.

The site presents an honest, maintainable record of current interests,
learning, projects, and technical writing. Its public identity is student-led:
exploring, learning, and building without overstating professional or research
experience.

## Current Version

Version 8.1.3 includes:

- A scroll-linked cinematic Hero with the supplied portrait, optimized image loading, and the Leo SVG signature progressively revealed by the existing motion controller
- A larger 0.58-scale centered portrait hold, followed by a smooth fade-out before the signature takes over
- A 10% shorter Hero scroll track with the same stage proportions and motion sequence
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

Version 8.1.3's latest scroll-distance tuning is implemented locally and has passed build, TypeScript, 19 motion/portrait
tests, and local production-response and image-optimization checks. Browser visual/interaction acceptance
and public deployment verification remain pending; the live URL above is not
evidence that Version 8.1.3 has been deployed.

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

The homepage opening follows: **portrait → shrink and center → hold →
portrait fade-out → Leo signature reveal → content**. Scroll upward to reverse the sequence, or
use “Skip intro” to reach the existing actions and content immediately.

The cinematic scene runs at viewport sizes of at least **900×700 CSS pixels**
when `prefers-reduced-motion` permits motion. Narrow/short screens and reduced
motion use a static layout with the complete signature. Without JavaScript, the
full static introduction, portrait, and signature remain available.
No wheel/touch input is intercepted.

The implementation uses sticky positioning, CSS variables, and one scheduled
animation frame per scroll/resize update, with no continuous React state updates,
new dependencies, downloaded fonts, or WebGL. Existing numbered sections, card
hover effects, inner-page entrances, and scroll reveals are retained.

The original handwriting asset is `public/signatures/leo-signature-traced.svg`.
`components/hero/LeoSignature.tsx` presents it through a currentColor alpha mask,
reserving the original aspect ratio without modifying its paths. The existing
`--signature-draw` progress clips the ink from left to right; this is a spatial
reveal, not pen-stroke-order animation. Parent wrappers still own movement and
opacity. `HERO_TIMELINE.finalPortraitScale` in `components/hero/motion.ts` sets
the center scale to `0.58` (a visual tuning candidate increased from `0.48`).
The latest pacing adjustment sets `--hero-scroll-distance-ratio: 0.9` in the
cinematic CSS, reducing the whole track from 213.12svh to 191.808svh without
changing the normalized timeline, portrait size, controller, or static modes.
The portrait holds fully visible for 17.28svh of scroll, then fades at center over
28.8svh; only afterward does the signature appear. Its 62.208svh ink reveal,
opacity lead-in, and final hold retain their relative proportions: every stage
needs 10% less scrolling. See `PROJECT_STATUS.md` for exact timing values.

The portrait asset is `public/images/hero/leo-portrait.jpg` (1440×1920).
`components/hero/LeoPortrait.tsx` uses Next.js Image with preloading and responsive
sizes inside the unchanged 3:4 frame. Centered `object-fit: cover` supports future
replacement photos without changing the motion wrapper. Its alt description uses
the existing English/Chinese language context. No image filters or new effects
are applied, and the original JPG remains unchanged.

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
public/          Static assets, including the portrait JPG and Leo signature SVG
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
