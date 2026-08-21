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

## Open

### Navigation has no active-route indicator

- **Observed:** All navigation links have the same resting style, so the current page is not highlighted.
- **Impact:** Navigation works correctly, but users receive less visual orientation on inner pages.
- **Planned resolution:** Add an accessible active state when the navigation design is refined.
- **Status:** Open, non-blocking.

No blocking issues are currently known.

## Maintenance Rule

Add new issues when they are discovered. Record the cause, impact, resolution, and status when known.
