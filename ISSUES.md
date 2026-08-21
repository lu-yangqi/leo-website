# Issues Log

Last updated: 2026-08-21

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

## Open

### Project showcase has limited content

- **Observed:** The showcase currently contains only the Leo Personal Website project, and no live demo link is available because the website is not deployed.
- **Impact:** The reusable framework works, but it does not yet demonstrate multiple-project layouts or optional demo links.
- **Planned resolution:** Add real AI, computer vision, LLM, security, and research projects as they become ready; add demo links after deployment.
- **Status:** Open, non-blocking.

### Blog supports metadata only

- **Observed:** The blog loader reads the four required single-line frontmatter fields, but there are no detail routes or Markdown body rendering.
- **Impact:** Posts can be listed as cards, but visitors cannot open or read full articles yet. Complex YAML frontmatter is also intentionally unsupported.
- **Planned resolution:** Add blog detail routes and a suitable Markdown rendering pipeline in a future version, expanding metadata parsing only when required.
- **Status:** Open, non-blocking by design for Version 5.0.

No blocking issues are currently known.

## Maintenance Rule

Add new issues when they are discovered. Record the cause, impact, resolution, and status when known.
