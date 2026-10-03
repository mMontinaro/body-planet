# Assets

This document defines how images, fonts, icons, and other static media are handled.

## Principles

Prefer assets that are:

- locally hosted;
- optimized;
- reusable;
- clearly named;
- easy to replace;
- approved for use.

Avoid unnecessary duplication.

## Asset Locations

Use:

```text
src/assets/
```

for imported application assets.

Use `public/` only when an asset must be served directly without bundling.

Do not place assets randomly across component folders.

## Folder Structure

A suitable structure may be:

```text
src/assets/
├── images/
├── logos/
├── icons/
└── fonts/
```

Create additional folders only when needed.

## File Naming

Use predictable lowercase filenames.

Prefer:

```text
body-planet-logo.svg
hero-gym.webp
course-kickboxing.webp
```

Avoid:

```text
IMG_4837.JPG
final-final-logo2.png
image1.png
```

## Images

Prefer modern formats where practical.

Use:

- WebP;
- AVIF where appropriate;
- SVG for suitable vector artwork.

Retain PNG or JPEG when they are the better source format.

## Image Optimization

Do not ship unnecessarily large source files.

Images should be:

- compressed;
- sized appropriately;
- cropped intentionally;
- prepared for their actual display context.

Performance requirements are defined in `PERFORMANCE.md`.

## Responsive Images

Use responsive image techniques when they provide meaningful savings.

Do not force mobile devices to download oversized desktop imagery unnecessarily.

## Aspect Ratios

Use predictable aspect ratios for repeated UI patterns.

Examples include:

- course cards;
- gallery thumbnails;
- hero media.

Avoid inconsistent image dimensions that cause unstable layouts.

## Hero Media

The hero image is a high-priority asset.

Choose an image that:

- represents the real facility;
- works with text overlays if required;
- crops well across screen sizes;
- is optimized for initial loading.

Do not lazy-load the primary hero image when it negatively affects page rendering.

## Gallery

Gallery assets should use consistent processing.

Avoid mixing:

- very low-resolution files;
- heavily compressed files;
- unrelated stock photography;
- inconsistent visual treatments.

## Logos

Prefer an official vector logo when available.

Do not redraw, distort, recolor, or recreate the Body Planet logo without deliberate approval.

Maintain its aspect ratio.

## Temporary Assets

Temporary demo assets must be clearly distinguishable from approved production assets.

Do not treat temporary or scraped imagery as permanent source material.

Before production, replace temporary assets where required.

## Rights and Permissions

Only use assets that Body Planet:

- owns;
- provides;
- licenses;
- or has permission to publish.

Identifiable-person imagery should be confirmed for production use.

Privacy requirements are defined in `PRIVACY.md`.

## Alt Text

Alt text is user-facing content.

Meaningful alt text belongs in:

```text
src/locales/it.json
```

Do not derive alt text automatically from filenames.

Accessibility rules are defined in `ACCESSIBILITY.md`.

## Icons

Use `lucide-react` for interface icons.

Do not store duplicate SVG versions of Lucide icons unless there is a concrete reason.

Custom brand icons may be stored locally.

## Fonts

Prefer:

- locally hosted fonts;
- system fonts.

Store local font files under the appropriate asset directory.

Avoid loading unused weights or styles.

## Font Formats

Prefer modern web font formats such as:

```text
.woff2
```

Do not ship unnecessary source font formats to browsers.

## Font Licensing

Confirm that locally hosted fonts are licensed for web use.

Do not copy commercial font files into the project without permission.

## External Assets

Avoid hotlinking production assets from third-party websites.

External asset providers are governed by `EXTERNAL_SERVICES.md`.

## Content Separation

Asset paths and metadata may live in structured data or configuration.

User-facing labels, captions, and alt text belong in `src/locales/it.json`.

Do not embed business copy inside asset configuration.

## Replacement

Assets should be easy to replace without modifying unrelated components.

Prefer centralized imports or structured data over repeating asset paths throughout the application.

## Build Hygiene

Do not keep unused production assets in the repository without reason.

Remove:

- obsolete images;
- duplicate files;
- unused fonts;
- abandoned temporary exports.

## Related Documents

- `DESIGN.md` — visual treatment.
- `PERFORMANCE.md` — optimization and loading.
- `ACCESSIBILITY.md` — alt text and media accessibility.
- `PRIVACY.md` — media permissions.
- `EXTERNAL_SERVICES.md` — externally hosted resources.
- `ARCHITECTURE.md` — project structure.
- `AGENTS.md` — project-wide enforcement.

`AGENTS.md` should reference this file rather than duplicate its asset rules.