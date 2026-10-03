# Performance

This document defines performance requirements for the Body Planet website.

The goal is a fast static site with minimal runtime overhead.

## Principles

Prefer:

- static content;
- small bundles;
- local assets;
- minimal dependencies;
- simple rendering;
- progressive enhancement where useful.

Do not add complexity without measurable benefit.

## JavaScript

Keep client-side JavaScript minimal.

Do not add libraries for functionality that can be handled cleanly with:

- React;
- browser APIs;
- CSS.

Avoid unnecessary runtime work on page load.

## Dependencies

Do not add dependencies without a clear need.

Before adding one, consider:

- bundle impact;
- maintenance cost;
- whether native functionality is sufficient.

Existing dependencies should remain limited to the approved stack unless requirements change.

## Code Splitting

Do not introduce code splitting purely for complexity.

Use it only if the application grows enough for it to provide measurable benefit.

For the initial static site, a simple bundle is acceptable.

## Images

Images are likely to be the largest performance cost.

Prefer:

- appropriately sized assets;
- modern formats where practical;
- compressed files;
- responsive image sizing.

Do not ship unnecessarily large source images to small screens.

## Image Loading

Content above the fold should load promptly.

Non-critical images may use lazy loading.

Do not lazy-load the primary hero image if it harms initial rendering.

Use explicit dimensions or aspect ratios to reduce layout shift.

## Fonts

Prefer:

- system fonts;
- locally hosted fonts;
- a small number of font files.

Avoid excessive font families, weights, and styles.

Font sourcing rules belong in `ASSETS.md` and `EXTERNAL_SERVICES.md`.

## Icons

Use `lucide-react` selectively.

Import only the icons required by the interface.

Do not add additional icon libraries without reason.

## CSS

Keep styles maintainable and avoid unnecessary duplication.

Prefer reusable design tokens and shared patterns.

Avoid excessive runtime-generated styling when static CSS is sufficient.

## Animation

Keep animations lightweight.

Prefer `transform` and `opacity` for visual transitions where appropriate.

Avoid animation patterns that cause unnecessary layout or paint work.

Respect `prefers-reduced-motion`.

## Third-Party Code

Avoid third-party scripts by default.

Third-party services are governed by `EXTERNAL_SERVICES.md`.

Do not load external scripts globally when only a link is required.

## Network Requests

Core page content should not depend on runtime network requests beyond loading the site itself and its assets.

Avoid API calls for static business information.

## Layout Stability

Reduce unexpected layout shifts.

Provide dimensions or predictable aspect ratios for:

- images;
- media;
- major visual containers.

Avoid injecting content above already-rendered content.

## Rendering

Keep component trees straightforward.

Do not introduce unnecessary memoization or optimization abstractions without evidence of a performance problem.

Avoid avoidable repeated calculations during rendering.

## Mobile Performance

Treat mobile devices and slower networks as primary performance targets.

Do not design performance assumptions around high-end desktop hardware.

## Build Output

Production builds must use:

```text
npm run build
```

Resolve build warnings that indicate genuine performance or correctness issues.

Do not ship development-only code to production.

## Source Maps

Source-map strategy may depend on deployment requirements.

Do not expose sensitive information through build artifacts.

## Core Web Vitals

Aim for strong Core Web Vitals.

Prioritize:

- fast Largest Contentful Paint;
- low Cumulative Layout Shift;
- responsive interactions.

Do not optimize for scores by removing useful functionality.

## Lighthouse

Lighthouse may be used as a diagnostic tool.

Treat its results as guidance rather than the sole definition of performance quality.

Investigate meaningful regressions before production.

## Production Checks

Before deployment, verify:

- production bundle size;
- image sizes;
- unused dependencies;
- lazy-loading behaviour;
- layout stability;
- mobile performance;
- third-party requests;
- font loading;
- production build success.

## Related Documents

- `ARCHITECTURE.md` — frontend structure.
- `DESIGN.md` — visual and motion decisions.
- `ASSETS.md` — image and font handling.
- `EXTERNAL_SERVICES.md` — third-party scripts and services.
- `ACCESSIBILITY.md` — reduced motion and usability.
- `AGENTS.md` — project-wide enforcement.

`AGENTS.md` should reference this file rather than duplicate its performance rules.