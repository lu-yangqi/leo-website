# Leo Personal Website

A personal technical website for Leo Yangqi, an undergraduate student in
Artificial Intelligence at Zhejiang University.

The site presents an honest, maintainable record of current interests,
learning, projects, and technical writing. Its public identity is student-led:
exploring, learning, and building without overstating professional or research
experience.

## Current Version

Version 6.2.0 includes:

- A persistent English / Chinese language switch for the core website
- Centralized typed interface translations and bilingual profile content
- A content-driven homepage with profile, project, learning, and latest-note previews
- A data-driven two-project showcase
- A Markdown blog with tags and syntax-highlighted code blocks
- A complete About page with education, interests, skills, learning status,
  selected work, and contact information
- Centralized typed profile and project data without duplicated factual records

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

The project is ready for the standard GitHub → Vercel workflow and does not
require `vercel.json`, environment variables, or a custom build command.

1. Commit and push the ready branch to the GitHub repository.
2. In Vercel, choose **Add New → Project** and continue with GitHub.
3. Authorize access to `lu-yangqi/leo-website` if Vercel requests it.
4. Import the repository and keep the detected Next.js defaults:
   - Framework Preset: Next.js
   - Root Directory: repository root
   - Build Command: `npm run build` / Next.js default
   - Output Directory: Next.js default
   - Environment Variables: none currently required
5. Deploy, then verify `/`, `/about`, `/projects`, `/blog`, a blog article,
   bilingual switching, contact actions, and mobile layout on the real URL.

Version 7.0 is not considered complete until a real Vercel deployment exists
and its production URL has passed these checks.

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
