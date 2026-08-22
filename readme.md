# Leo Personal Website

A personal technical website for Leo Yangqi, an undergraduate student in
Artificial Intelligence at Zhejiang University.

The site presents an honest, maintainable record of current interests,
learning, projects, and technical writing. Its public identity is student-led:
exploring, learning, and building without overstating professional or research
experience.

## Current Version

Version 7.1.0 includes:

- A verified public Vercel deployment at
  [leo-website-lilac.vercel.app](https://leo-website-lilac.vercel.app)
- Centralized production metadata, canonical URLs, sitemap discovery, and a public crawler policy
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

## SEO Foundation

- Canonical and basic social metadata use the centralized production origin.
- [`sitemap.xml`](https://leo-website-lilac.vercel.app/sitemap.xml) includes core routes and Markdown Blog articles automatically.
- [`robots.txt`](https://leo-website-lilac.vercel.app/robots.txt) allows public crawling and advertises the sitemap.

English static HTML remains the canonical search representation. Chinese is a
user-selectable shared-route presentation; no locale routes or fake
`hreflang` entries are generated.

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
