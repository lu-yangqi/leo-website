# Issues Log

Last updated: 2026-09-05

This document records development problems, decisions, and unresolved limitations.

## Resolved

### Hero portrait remained a placeholder

- **Observed:** Version 8.1.1 had the supplied Leo signature but still displayed placeholder artwork and missing-portrait guidance.
- **Resolution:** Integrated the supplied 1440×1920 JPG through Next.js Image in the existing 3:4 motion frame, added bilingual alt text, and removed obsolete placeholder artwork and wording.
- **Status:** Implemented in Version 8.1.2; local image optimization, server output, and component tests pass. Browser visual/interaction acceptance remains open separately.

### Desktop no-JavaScript cinematic fallback hid the signature

- **Observed:** Source review of the initial Version 8.1 implementation found that the no-JavaScript override removed only the long track, leaving the signature's desktop opacity at zero.
- **Resolution:** Restore static scene positioning, grid layout, full placeholder visibility, and the SVG guide when JavaScript is disabled.
- **Status:** Corrected in Version 8.1 source; actual no-JavaScript browser rendering remains part of pending visual acceptance.

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

### University email was omitted from profile contacts

- **Observed:** Version 6.0 conservatively removed the university email from public contact actions.
- **Impact:** Visitors could use the personal email but did not have the requested university contact option.
- **Resolution:** Restored the confirmed ZJU email as a secondary contact after explicit publication preference, using Gmail web compose and the shared accessible copy interaction.
- **Status:** Resolved in Version 6.1.1.

### Profile content was English-first

- **Observed:** Version 6.1 included the Chinese name and school name, but core profile content and navigation had no complete Chinese presentation or language switch.
- **Impact:** The website was usable internationally in English but lacked the planned Chinese experience.
- **Resolution:** Added a typed centralized English / Chinese translation layer, bilingual profile and project presentation fields, and a persistent language switch for Navbar, Footer, Home, About, Projects, and shared interface text without duplicating factual entities.
- **Status:** Resolved in Version 6.2.

### Streamed metadata could revert to English

- **Observed:** With the shared-route client language state, Next.js could stream page metadata after hydration and overwrite a Chinese title or description with the English server default.
- **Impact:** Visible content and document language could be Chinese while metadata remained English.
- **Resolution:** Added a scoped head observer that keeps every streamed title and description node aligned with the active language while retaining English static metadata as the default.
- **Status:** Resolved in Version 6.2.

### First Vercel deployment required account authorization

- **Observed:** The initial Vercel new-project page required account login and GitHub authorization before repository import.
- **Impact:** Production deployment and URL verification could not continue without user interaction.
- **Resolution:** The repository was authorized and deployed through the standard GitHub → Vercel workflow. The production site is available at `https://leo-website-lilac.vercel.app` and passed the Version 7.0 production checks.
- **Status:** Resolved in Version 7.0.

### Version 7.0 specification file was initially empty

- **Observed:** `docs/v7.0.md` was initially saved as a zero-byte file, so only the deployment constraints from the task request were available.
- **Impact:** The first deployment audit could not compare the repository against the complete file-based acceptance criteria.
- **Resolution:** Restored the intended specification, re-audited the repository and production deployment, and synchronized the Version 7.0 documentation.
- **Status:** Resolved in Version 7.0.

## Intentional Decisions

### Version 8.1.4 shares one cinematic sequence across responsive modes

- **Cause:** Both `CINEMATIC_MEDIA` and the CSS motion block required >=900x700, so compact windows and mobile devices could only show a static Hero.
- **Resolution:** Eligibility now depends on motion preference, while CSS `--hero-mode` selects wide, compact, or mobile presentation. All modes use the original normalized timeline and 0.58 center scale; no duplicate Hero or mobile timer is introduced.
- **Geometry:** Keep wide composition and its 0.9 track ratio unchanged. Use compact/mobile ratios of 0.75/0.65 and svh-safe minimum scene sizes. Text remains above the mobile portrait. Short windows allow natural opening scroll before locking, then center both identities in the visible body below the measured header.
- **Lifecycle:** The existing controller measures both axes, observes header/intro-copy reflow, refreshes geometry on resize, and removes stale geometry/opacity values on reduced motion or teardown. Wide mode explicitly restores zero vertical translation and the approved 88px sticky offset.
- **Status:** Implemented; 33 simulated/source tests cover all modes, reduced motion, resize, forward/reverse playback, and no-JS fallback. The user approved the previous wide result; new responsive framing and real-device browser behavior remain pending acceptance.

### Version 8.1.3 preserves portrait identity before handing over to the signature

- **Feedback:** Visual testing reported that the centered portrait was too small and faded before it established a recognizable identity.
- **Adjustment:** Set the existing configurable center scale initially to 0.48, then increase it to 0.58 for a user-requested larger preview. Hold at full opacity from reference progress 0.48–0.60, fade at center from 0.60–0.80, and start signature opacity only after the portrait has fully disappeared. This size-only follow-up leaves timing and static sizes unchanged; no lateral repositioning or simultaneous animated visibility is introduced.
- **Diagnosis:** The source and locally served bundle consumed `finalPortraitScale = 0.48` correctly; no conflicting scale override was found. Scaling is relative to the viewport-constrained portrait frame, not the screen. The exact cause of the user's perceived unchanged size was not established; the viewing environment was unconfirmed.
- **Pacing:** The initial refinement shifted the signature later while retaining its existing drawing distance. After the user reported excessive scrolling, shorten the whole desktop track to 90% through the cinematic CSS `--hero-scroll-distance-ratio: 0.9`. Total distance becomes 191.808svh; the portrait hold is 17.28svh, fade is 28.8svh, signature draw is 62.208svh, and final hold is 2.88svh. Keep normalization at 1.332, stage proportions, the 0.58 center scale, sticky scene height, and controller unchanged. Actual elapsed time still depends on the user's scrolling speed.
- **Scope:** Static mobile/reduced-motion/no-JavaScript layouts continue to show both identity assets as before. Routes, SEO, i18n, and content models are untouched.
- **Status:** Implemented and covered by timeline/controller tests. The user subsequently approved the wide desktop result, including 0.58 scale and 90%-distance pacing, before Version 8.1.4.

### Version 8.1.2 adds the portrait without changing motion

- Preserve the supplied JPG unchanged at `public/images/hero/leo-portrait.jpg`. It already matches the frame's 3:4 ratio; use centered object-fit cropping rather than editing the source or adding effects.
- Use the existing Next.js Image optimizer, preload, and responsive sizes. Keep the reserved aspect-ratio anchor and all parent motion wrappers; image loading does not start, reset, or alter the timeline.
- Use the existing language context only to localize image alt text. Replace the static missing-asset notice while preserving the static layout and all controller, signature, reduced-motion, and no-JavaScript behavior.
- No new dependencies, remote image host, or image configuration are required. The actual browser crop/scroll experience and runtime CLS remain acceptance checks, not claims implied by a successful build.

### Version 8.1.1 preserves the supplied filled-outline signature

- Use the actual supplied filename, `public/signatures/leo-signature-traced.svg`, unchanged; do not redraw the handwriting or convert its outline into invented pen strokes.
- The SVG's black fill supplies alpha, while CSS paints inherited currentColor ink for the existing dark palette. Reserve its original aspect ratio to avoid stretching or layout shifts when the asset loads.
- Use the existing `--signature-draw` progress for a left-to-right clip, including partial states after the opacity fade. Keep the Version 8.1 controller and static fallback architecture unchanged.
- Initial feedback extended the drawing interval to 62%–98%, leaving little room before scene exit. For the subsequent request for another 20%, increase drawing distance from 57.6svh to 69.12svh and total desktop track distance from 160svh to 171.52svh. Normalize the existing intervals to preserve portrait/crossfade scroll positions, the signature start, and the 3.2svh final hold rather than allowing the draw to end beyond the track. Playback remains scroll-linked, not a fixed-duration timer.
- This is a spatial reveal, not stroke-order handwriting animation. Mobile/reduced-motion/no-JavaScript modes expose the complete signature; real browser rendering still needs acceptance.

### Version 8.1 builds the cinematic sequence before personal assets

- Keep a clearly labeled, replaceable 3:4 portrait and SVG-compatible signature slot; do not invent a photograph or final personal signature.
- Use a sticky desktop scene and reversible CSS-variable timeline. requestAnimationFrame is event-coalesced, not a continuous loop; no React state is updated during scrolling.
- Reserve the desktop track before hydration and provide a no-JavaScript static override. Narrow/short screens and reduced-motion preferences receive a static scene without scroll pinning.
- Preserve original profile facts, homepage content, bilingual state, SEO, LY Navbar/icons, and the user-selected Version 7.2 palette. This was the placeholder foundation; the supplied signature is integrated in Version 8.1.1.

### Version 7.2 colors are retained within the Version 8.0 layout

- **Feedback:** The Version 7.2 background and text colors are preferred over the initial Version 8.0 charcoal/mint palette.
- **Adjustment:** Restore the `#050816` canvas, both original radial gradients, `#e2e8f0` body text, white headings, original selection colors, and default Tailwind slate/cyan colors from commit `9d685d9`. Align the new sticky header and panels with that palette.
- **Scope:** Keep the current layout, font families and sizes, reduced Hero monogram, and motion implementation. Browser visual/interaction acceptance remains open.

### Hero monogram stays secondary to the personal introduction

- **Feedback:** The initial right-hand `LY` mark was too large.
- **Adjustment:** Bound the desktop panel to 360px, center it vertically instead of stretching to match the Hero copy, and reduce the centered SVG to 72% width with a 240px cap. Preserve the existing 100px mobile graphic column, caption, and motion behavior.
- **Status:** Historical Version 8.0 refinement; Version 8.1 replaces this decorative Hero panel with the requested portrait/signature sequence. Functional LY Navbar/icons remain.

### Version 8.0 motion is a lightweight progressive enhancement

- CSS handles entrances, short once-only monogram motion, and hover states; IntersectionObserver handles below-the-fold reveals without a scroll-event loop.
- Server-rendered content remains visible without JavaScript. Reduced-motion preferences disable animation/smooth scrolling and reset pending reveals; keyboard focus reveals pending content.
- The reading-progress line uses native CSS scroll timelines only where supported. No animation framework or remote font was added.
- Signature animation, portrait storytelling, and complex scroll choreography remain separate future work, not requirements for the initial redesign.

### Blog posts keep their original writing language

- Each Markdown article declares `lang: en` or `lang: zh`.
- Article titles, descriptions, categories, tags, and bodies are not automatically translated and do not require paired copies.
- Only generic Blog interface text and date formatting follow the selected website language.

## Open

### Version 8.x browser acceptance is pending

- **Observed:** The browser permission check denied a local test tab during Version 8.0 validation. The user later reported no noticeable motion. Renewed local-browser permission was requested during Version 8.1 but has not been granted; browser automation was not retried.
- **Impact:** Version 8.1.4 build, TypeScript, 33 simulated/source tests, and local HTTP/image-optimization checks pass. The user approved the preceding wide desktop result, but new compact/mobile framing, orientation, browser toolbar/zoom behavior, repeated resize playback, SVG-mask rendering, overflow, bilingual/contact interactions, keyboard access, reduced-motion/no-JavaScript behavior, and runtime performance remain unverified in a browser.
- **Planned resolution:** Review full-screen and windowed desktop plus mobile widths (including 320px and 390px), confirm portrait recognition and a clear center hold, inspect forward/reverse fade-to-signature transitions, switch languages and reload/navigate, copy both addresses, use keyboard navigation, enable reduced motion, disable JavaScript, and check browser console/performance. After approval and deployment, repeat core checks on the public URL.
- **Status:** Open; Version 8.1.4 responsive visual/interaction acceptance and public verification remain pending. Do not infer these from simulated geometry tests or the prior wide-desktop approval.

### Pen-stroke-order signature animation is deferred

- **Observed:** Both the portrait and signature are integrated as of Version 8.1.2. The signature asset is still a filled trace, not ordered pen-stroke paths, so its progressive reveal remains a spatial wipe.
- **Planned resolution:** Only pursue true pen-stroke choreography in a separate task with suitable stroke data; do not regenerate the approved handwriting.
- **Status:** Open, non-blocking for the requested Version 8.1.2 portrait integration.

### Project showcase has limited content

- **Observed:** The showcase now contains the deployed Leo Personal Website and Single-Cycle RISC-V CPU, but project variety remains limited. The CPU source is intentionally local and unpublished.
- **Impact:** The shared multi-project layout is verified, but there are no project detail pages and only one project currently has a public repository.
- **Planned resolution:** Add further real projects only as they become ready for public presentation; add detail pages or demo links when supporting content and deployments exist.
- **Status:** Open, non-blocking.

### Advanced blog discovery and navigation are not implemented

- **Observed:** Tags are displayed but are not interactive; search, filtering, table of contents, and previous/next article navigation are not implemented. Frontmatter remains intentionally limited to simple single-line fields.
- **Impact:** The core reading experience is complete, but discovery will become less convenient if the number or length of articles grows substantially.
- **Planned resolution:** Add these features only when real content volume justifies the added complexity; keep the current Git-based static architecture.
- **Status:** Open, non-blocking by design for Version 5.2.

### Locale-specific static SEO is not implemented

- **Observed:** Version 7.1 provides centralized canonical URLs, general metadata, sitemap discovery, and crawler policy, while the shared-route architecture still serves English static HTML and restores a persisted Chinese selection after hydration.
- **Impact:** A hard refresh may show a brief English state before Chinese is restored, and search engines still do not receive dedicated Chinese URLs, static Chinese HTML, or `hreflang` links.
- **Planned resolution:** Evaluate locale routes or another server-readable locale strategy only if Chinese search discoverability justifies a separate architecture milestone.
- **Status:** Open, non-blocking by design after Version 7.1.

No production-build blockers are currently known. Version 8.1.4 responsive visual/interaction
acceptance remains open and must not be inferred from older-version checks.

## Maintenance Rule

Add new issues when they are discovered. Record the cause, impact, resolution, and status when known.
