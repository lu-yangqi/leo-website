# V8.0 --- Visual Redesign & Motion

## Task

Upgrade the website visual system and interaction experience while
preserving the existing application architecture, routes, content model,
bilingual system, and SEO foundation.

## Main Goal

Create a distinctive personal website identity for Leo Yangqi:

-   Personal
-   Editorial
-   Technical
-   Kinetic
-   Maintainable

The redesign should move beyond a generic portfolio style and establish
a recognizable visual language inspired by modern personal-brand
websites.

## Design Direction

### Core Concept

Editorial × Kinetic × Technical

Key ideas:

-   Strong typography
-   Cinematic transitions
-   Personal identity system
-   Smooth scroll-based interaction
-   Clear AI / Computer Science atmosphere

### Visual Identity

Planned:

-   Leo signature system
-   LY monogram refinement
-   Unified color system
-   Typography hierarchy
-   Motion language

Signature design is a separate exploration phase and should not block
the initial V8.0 implementation.

## Requirements

### Visual System

-   New global visual language
-   Updated background treatment
-   Improved typography hierarchy
-   Consistent component styling

### Homepage

-   Hero redesign
-   More distinctive first-screen experience
-   Improved storytelling flow
-   Scroll-based interaction foundation

### Motion

-   Smooth entrance animations
-   Scroll reveal effects
-   Hover interactions
-   Performance-friendly animations

### Constraints

Preserve:

-   Existing routes
    -   /
    -   /about
    -   /projects
    -   /blog
    -   /blog/\[slug\]
-   Markdown blog architecture
-   Bilingual shared-route system
-   SEO metadata system
-   Existing accessibility behavior

Avoid:

-   Architecture rewrite
-   Unnecessary dependencies
-   Heavy animation frameworks without clear benefit

## Validation

Before completion:

``` bash
npm run build
```

``` bash
npx tsc --noEmit --incremental false
```

Check:

-   Responsive layouts
-   Existing routes
-   Blog rendering
-   Language switching
-   SEO output
-   Performance

## Documentation Update

After implementation update:

-   README.md
-   PROJECT_STATUS.md
-   CHANGELOG.md
-   ISSUES.md (only if new issues or decisions appear)

## Definition of Done

V8.0 is complete when:

-   A unified visual system is implemented
-   Homepage has a redesigned experience
-   Motion improves interaction quality
-   Existing functionality remains stable
-   Production build passes
-   Documentation reflects the completed state

## Future Exploration

Possible future improvements:

-   Advanced signature animation
-   Portrait-based hero storytelling
-   More complex scroll choreography
-   Additional project storytelling sections
