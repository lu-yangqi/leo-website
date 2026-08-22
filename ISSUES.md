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

## Open

### Project showcase has limited content

- **Observed:** The showcase currently contains only the Leo Personal Website project, and no live demo link is available because the website is not deployed.
- **Impact:** The reusable framework works, but it does not yet demonstrate multiple-project layouts or optional demo links.
- **Planned resolution:** Add real AI, computer vision, LLM, security, and research projects as they become ready; add demo links after deployment.
- **Status:** Open, non-blocking.

### Article reading features remain intentionally limited

- **Observed:** Articles render standard Markdown, but syntax highlighting, tags, table of contents, search, and previous/next navigation are not implemented. Frontmatter remains limited to the four required single-line fields.
- **Impact:** Articles are readable, but the experience is intentionally basic and complex YAML metadata is unsupported.
- **Planned resolution:** Improve reading features incrementally in Version 5.2 and later, expanding metadata parsing only when required.
- **Status:** Open, non-blocking by design for Version 5.1.

No blocking issues are currently known.

## Maintenance Rule

Add new issues when they are discovered. Record the cause, impact, resolution, and status when known.
