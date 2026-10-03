# Design

This document defines the visual and interaction direction for the Body Planet website.

It governs presentation, not business facts or implementation details.

## Design Goals

The site should feel:

- modern;
- energetic;
- professional;
- clean;
- fitness-oriented;
- easy to scan;
- credible.

Avoid making the site feel:

- overly corporate;
- cluttered;
- template-heavy;
- childish;
- excessively aggressive.

## Visual Direction

Use a strong fitness-oriented visual identity with restrained styling.

Prioritize:

- large imagery;
- strong typography;
- clear hierarchy;
- generous spacing;
- high contrast;
- simple layouts.

The design should support Body Planet's existing identity rather than inventing a completely unrelated brand.

## Brand Colors

The Body Planet logo establishes the primary brand palette.

Use:

- Brand Green: `#71BF45`
- Charcoal: `#231F20`
- White: `#FFFFFF`

### Usage

Brand Green should act primarily as the accent color.

Suitable uses include:

- primary CTA backgrounds;
- highlighted text;
- active navigation states;
- small decorative elements;
- icon accents;
- section highlights.

Charcoal should be used for:

- primary text;
- dark backgrounds;
- navigation;
- strong visual contrast.

White should be used for:

- primary page backgrounds;
- text on dark surfaces;
- spacing and visual separation.

Do not overuse the green across large surfaces. It should remain visually distinctive.

Additional neutral shades may be introduced for:

- secondary text;
- borders;
- subtle backgrounds;
- disabled states.

These neutrals should support the existing green, charcoal, and white palette rather than compete with it.

## Typography

Use a small typography system.

Prefer:

- one primary font family;
- optionally one display/accent family if justified.

Typography should remain readable at all viewport sizes.

Avoid using excessive font weights or unrelated font families.

Font hosting rules belong in `ASSETS.md` and `EXTERNAL_SERVICES.md`.

## Layout

Use a consistent content width and spacing system.

Sections should have clear vertical separation.

Avoid arbitrary spacing values repeated throughout components.

Prefer reusable layout primitives where useful.

## Responsive Design

Design mobile-first.

Support at minimum:

- mobile;
- tablet;
- desktop.

Layouts should adapt rather than simply shrink.

Avoid horizontal scrolling caused by page content.

## Header

The header should provide:

- Body Planet identity;
- primary navigation;
- a clear contact CTA.

Desktop navigation may be horizontal.

Mobile navigation may collapse into a menu.

Keep navigation concise.

## Hero

The hero should immediately communicate:

- Body Planet;
- fitness/gym context;
- Latina Scalo;
- primary action.

Prefer strong photography and concise copy.

Avoid large blocks of text.

## Sections

Major sections should follow consistent structural patterns.

Typical section structure:

```text
Eyebrow / optional label
Heading
Supporting copy
Primary content
Optional CTA
```

Do not force every section to use every element.

## Cards

Reusable cards should be visually consistent.

Examples may include:

- course cards;
- feature cards;
- contact items.

Cards must remain generic components and should not contain page-specific copy internally.

## Buttons

Use a limited button hierarchy.

Recommended variants:

- primary;
- secondary;
- text/link.

Button styles should remain consistent across the site.

Avoid creating unique button styles for individual sections without reason.

## Images

Photography should be treated as a major part of the visual identity.

Prefer real Body Planet imagery over generic stock photography.

Use consistent:

- aspect ratios;
- cropping;
- border treatment;
- spacing.

Asset implementation rules belong in `ASSETS.md`.

## Gallery

The gallery should feel intentional rather than like an unstructured image dump.

Use a consistent grid or controlled masonry-style layout.

Do not sacrifice usability for decorative complexity.

## Course Presentation

Courses should be easy to scan.

Use reusable course components rather than individually designed layouts for each course.

Course grouping may be used where it improves navigation.

Content remains defined by `CONTENT.md`.

## Icons

Use `lucide-react` for interface icons where appropriate.

Icons should support comprehension, not act as decoration everywhere.

Do not mix unrelated icon libraries.

Icons should use consistent sizing and stroke treatment.

## Motion

Motion should be restrained.

Suitable uses include:

- subtle entrance transitions;
- hover feedback;
- menu transitions;
- image interactions.

Avoid:

- excessive scroll animation;
- constant motion;
- large parallax effects;
- animations that delay access to content.

Respect reduced-motion preferences.

## Interaction States

Interactive elements should define appropriate:

- hover;
- focus;
- active;
- disabled states where applicable.

Keyboard focus must remain clearly visible.

Accessibility requirements belong in `ACCESSIBILITY.md`.

## Borders and Effects

Use effects sparingly.

Avoid excessive:

- shadows;
- gradients;
- glassmorphism;
- glowing elements;
- decorative borders.

Effects should support hierarchy rather than dominate the interface.

## Consistency

Prefer reusable visual patterns over one-off styling.

If two interface elements perform the same role, they should generally share the same component or design pattern.

## Localization

Layouts must tolerate variable text length.

Do not design components around the exact length of current Italian strings.

User-facing text comes from the localization system defined in `ARCHITECTURE.md`.

## Content Density

Keep paragraphs concise.

Prefer visual hierarchy over large blocks of uninterrupted text.

Do not remove useful content purely to make sections visually minimal.

## Accessibility

Visual decisions must maintain:

- sufficient contrast;
- readable type sizes;
- visible focus states;
- usable touch targets;
- understandable hierarchy.

Detailed rules belong in `ACCESSIBILITY.md`.

## Related Documents

- `CONTENT.md` — factual content.
- `ARCHITECTURE.md` — components and implementation.
- `ASSETS.md` — images, fonts, and media.
- `ACCESSIBILITY.md` — accessibility requirements.
- `PERFORMANCE.md` — performance constraints.
- `AGENTS.md` — project-wide enforcement.

`AGENTS.md` should reference this file rather than duplicate its visual rules.