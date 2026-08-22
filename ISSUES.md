# Issues Log

Last updated: 2026-08-22

This document records development problems, decisions, and unresolved limitations.

## Resolved

### Email links depended on a desktop mail client

- **Observed:** `mailto:` links attempted to launch Outlook or another system mail application and could fail when no default client was configured.
- **Resolution:** Replaced `mailto:` links with Gmail web-compose URLs and added separate copy buttons for both email addresses.
- **Status:** Resolved in Version 0.2.

### Native Next.js SWC binary was incomplete

- **Observed:** An interrupted dependency installation produced an invalid Windows SWC binary, forcing a WebAssembly fallback.
- **Resolution:** Verified the official package, replaced the truncated binary, and restored the default Turbopack commands.
- **Status:** Resolved in Version 0.1.

### Navigation has no active-route indicator

- **Observed:** All navigation links have the same resting style, so the current page is not highlighted.
- **Impact:** Navigation works correctly, but users receive less visual orientation on inner pages.
- **Resolution:** Added route detection with `usePathname()`, a distinct active style, and `aria-current="page"` for the active link.
- **Status:** Resolved in Version 0.3.1.

### Blog supports metadata only

- **Observed:** Version 5.0 listed Markdown metadata, but there were no detail routes or Markdown body rendering.
- **Impact:** Visitors could see article cards but could not open or read full posts.
- **Resolution:** Added statically generated `/blog/[slug]` routes, post retrieval by slug, Markdown body rendering, BlogCard links, and invalid-slug 404 handling.
- **Status:** Resolved in Version 5.1.

### Article reading features remain intentionally limited

- **Observed:** Version 5.1 rendered standard Markdown but had no syntax highlighting or tags, and its article metadata and typography were basic.
- **Impact:** Technical posts were readable but code and article context were harder to scan.
- **Resolution:** Added fenced-code syntax highlighting, typed tags, improved Markdown typography and metadata presentation, and Back to Blog navigation.
- **Status:** Resolved in Version 5.2.

### About page details are incomplete

- **Observed:** The About route contained only a short identity placeholder and promised future education, skills, and research-experience content.
- **Impact:** Visitors could not understand the current academic background, interests, learning status, or authentic project responsibilities.
- **Resolution:** Replaced the placeholder with a data-driven profile covering education, carefully scoped research and technical interests, established skills, current learning, structured course status, selected work, and primary contacts. Unsupported experience sections were omitted.
- **Status:** Resolved in Version 6.0.

## Open

### Project showcase has limited content

- **Observed:** The showcase currently contains only the Leo Personal Website project, and no live demo link is available because the website is not deployed.
- **Impact:** The reusable framework works, but it does not yet demonstrate multiple-project layouts or optional demo links.
- **Planned resolution:** Add real AI, computer vision, LLM, security, and research projects as they become ready; add demo links after deployment.
- **Status:** Open, non-blocking.

### Advanced blog discovery and navigation are not implemented

- **Observed:** Tags are displayed but are not interactive; search, filtering, table of contents, and previous/next article navigation are not implemented. Frontmatter remains intentionally limited to simple single-line fields.
- **Impact:** The core reading experience is complete, but discovery will become less convenient if the number or length of articles grows substantially.
- **Planned resolution:** Add these features only when real content volume justifies the added complexity; keep the current Git-based static architecture.
- **Status:** Open, non-blocking by design for Version 5.2.

### Profile content is English-first

- **Observed:** Version 6.0 includes the Chinese name and school name, but the profile content and navigation do not yet have full Chinese translations or a language switch.
- **Impact:** The profile is usable in English, but the planned bilingual experience is incomplete.
- **Planned resolution:** Design a maintainable English/Chinese content and language-switch architecture in a future version without duplicating profile facts.
- **Status:** Open, non-blocking by design for Version 6.0.

No blocking issues are currently known.

## Maintenance Rule

Add new issues when they are discovered. Record the cause, impact, resolution, and status when known.
