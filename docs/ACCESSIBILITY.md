# Accessibility

This document defines accessibility requirements for the Body Planet website.

It applies to all components, sections, content, and interactions.

## Goal

The site should be usable with:

- keyboard navigation;
- screen readers;
- zoomed text;
- reduced motion;
- high contrast needs;
- touch input.

Accessibility should be treated as a default implementation requirement, not a later patch.

## Semantic HTML

Use semantic elements where appropriate.

Prefer:

- `header`;
- `nav`;
- `main`;
- `section`;
- `article`;
- `footer`;
- `address`;
- `button`;
- `a`.

Do not use generic elements for interactive controls.

## Headings

Maintain a logical heading hierarchy.

Use one primary `h1`.

Do not skip heading levels without reason.

Do not choose heading levels based only on visual size.

## Keyboard Navigation

All interactive elements must be keyboard accessible.

Users must be able to:

- reach controls with `Tab`;
- activate controls with expected keys;
- navigate menus;
- close dialogs or menus where applicable.

Do not create keyboard traps.

## Focus

Interactive elements must have a visible focus state.

Do not remove browser focus outlines unless replaced with an equally visible alternative.

Focus order should follow the visual and logical reading order.

## Links

Use links for navigation.

Use buttons for actions.

Link text should communicate destination or purpose.

Avoid vague text such as:

```text id="mm4g1f"
Click here
```

when a meaningful label can be used.

## Buttons

Buttons must have accessible names.

Icon-only buttons require an accessible label.

Visible button text should come from `src/locales/it.json`.

## Images

Meaningful images require useful alternative text.

Decorative images should use empty alternative text when appropriate.

Do not duplicate nearby visible text unnecessarily in image alt text.

Alt text should describe purpose, not keyword-stuff SEO terms.

## Icons

Decorative icons should be hidden from assistive technology where appropriate.

Icons that communicate meaning without visible text require an accessible label.

Do not rely on icons alone when their meaning may be ambiguous.

## Color

Do not rely on color alone to communicate:

- status;
- selection;
- errors;
- actions;
- meaning.

Text and important interface elements must maintain sufficient contrast.

Specific palette decisions belong in `DESIGN.md`.

## Text

Body text should remain readable without requiring browser zoom.

Avoid extremely small text.

Do not prevent users from zooming the page.

Layouts should remain usable when text size increases.

## Touch Targets

Interactive controls should have sufficiently large touch targets.

Avoid placing small clickable elements too close together.

Mobile usability should be considered during component design.

## Forms

The initial site does not require forms.

If forms are introduced later:

- inputs must have labels;
- required fields must be identifiable;
- errors must be understandable;
- instructions must not rely only on color;
- validation feedback must be accessible.

## Navigation

The primary navigation must remain understandable and operable across viewport sizes.

If a mobile menu is used:

- its trigger must have an accessible name;
- expanded state must be exposed where appropriate;
- keyboard interaction must work;
- focus behaviour must remain predictable.

## Motion

Respect the user's reduced-motion preference.

Avoid essential information being communicated only through animation.

Animations should not block access to content.

Motion direction is further defined in `DESIGN.md`.

## Content Order

DOM order should match the intended reading order.

Do not use CSS positioning to create a visual order that conflicts with semantic reading order.

## Hidden Content

Do not hide important information from assistive technology solely for visual convenience.

Use appropriate visually-hidden techniques when text is required for accessibility but should not be visually displayed.

## ARIA

Prefer native semantic HTML over ARIA.

Use ARIA only when native HTML does not provide the required semantics.

Do not add redundant or incorrect ARIA attributes.

## Language

The document language must be declared as Italian.

Example:

```html id="wkm8sv"
<html lang="it">
```

## External Links

External links should remain understandable from their visible label.

Do not force every external link to announce "opens in a new tab" unless doing so improves clarity.

## Testing

Before production, test at minimum:

- keyboard-only navigation;
- visible focus states;
- heading hierarchy;
- image alt text;
- color contrast;
- mobile navigation;
- zoomed text;
- reduced motion.

Automated tools may assist testing but do not replace manual checks.

## Related Documents

- `DESIGN.md` — visual hierarchy, motion, contrast direction.
- `ARCHITECTURE.md` — component structure.
- `CONTENT.md` — user-facing content.
- `SEO.md` — semantic structure and image metadata.
- `PERFORMANCE.md` — implementation constraints.
- `AGENTS.md` — project-wide enforcement.

`AGENTS.md` should reference this file rather than duplicate its accessibility rules.