# Leo Personal Website

A personal technical website for Leo Yangqi, an undergraduate student in
Artificial Intelligence at Zhejiang University.

The site presents an honest, maintainable record of current interests,
learning, projects, and technical writing. Its public identity is student-led:
exploring, learning, and building without overstating professional or research
experience.

## Current Version

Version 8.0.0 includes:

- An editorial visual system retaining the Version 7.2 navy background, cool-slate text, cyan accents, expressive typography, and a geometric `LY` Hero
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

Version 8.0 is implemented locally and has passed build, TypeScript, and local
production-response checks. Its browser-based visual/interaction acceptance
and public deployment verification are still pending; the live URL above is
not evidence that Version 8.0 has been deployed.

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

Version 8.0 combines editorial typography, numbered homepage sections, a
technical SVG monogram, and consistent navigation, cards, and inner-page styles.
The design uses installed system fonts, CSS transitions, and a small
IntersectionObserver enhancement, with no new dependencies or font downloads.
Content remains available without JavaScript; reduced-motion preferences disable
animation and smooth scrolling. A keyboard skip link leads to the main content.

Signature design, portrait storytelling, and advanced scroll choreography remain
future explorations. Responsive rendering, bilingual switching, email copying,
keyboard navigation, reduced-motion behavior, and runtime performance still need
manual browser acceptance for this redesign.

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
