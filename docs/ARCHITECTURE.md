# Architecture

This document defines the technical structure of the Body Planet frontend.

Business content belongs in `CONTENT.md`.

## Stack

Use:

- React 18;
- TypeScript;
- Vite;
- `lucide-react`.

The initial site is static.

Do not add dependencies without a concrete need.

## Application Type

The initial version is a single-page marketing website.

Do not add:

- backend services;
- authentication;
- databases;
- global state libraries;
- React Router;

unless future requirements justify them.

## Source Structure

Preferred structure:

```text id="6ljfbl"
src/
├── components/
├── sections/
├── data/
├── locales/
├── assets/
├── styles/
├── App.tsx
└── main.tsx
```

Add folders only when they have a clear responsibility.

## Components

Components should be reusable where practical.

Prefer generic components such as:

```text id="pu3icb"
Button
SectionHeading
CourseCard
ContactItem
IconLink
Container
```

Avoid creating page-specific components when a generic component can represent the same UI pattern.

## Sections

Page-level composition belongs in `sections/`.

Examples:

```text id="h7x0fi"
Hero
Gym
Courses
Schedule
AppPromo
Gallery
Reviews
Contact
```

Sections may compose reusable components.

## Component Responsibilities

A component should primarily handle one responsibility.

Avoid components that combine:

- unrelated UI;
- large amounts of data;
- business configuration;
- duplicated layout logic.

Split components when doing so improves reuse or clarity.

## Props

Reusable components should receive variable content through props.

Example:

```tsx id="20zu8u"
<CourseCard
  title={t("courses.crossTraining.title")}
  description={t("courses.crossTraining.description")}
/>
```

Do not embed Body Planet-specific copy inside generic components.

## Localization

All user-facing text must be stored in:

```text id="9gqaju"
src/locales/it.json
```

If the file does not exist, create it.

Do not hard-code user-facing strings in `.tsx` or `.ts` files.

Use stable semantic keys.

Example:

```text id="1mbzwk"
hero.title
hero.subtitle
nav.courses
contact.whatsapp
courses.crossTraining.title
```

Do not use translated sentences themselves as keys.

## Strings Not Requiring Localization

Technical strings may remain in code.

Examples:

- CSS class names;
- IDs;
- route fragments;
- enum values;
- internal keys;
- file paths;
- technical constants.

URLs and service configuration should normally live outside locale files.

## Business Data

Structured non-translatable data should live under `src/data/` or an equivalent configuration location.

Examples:

- external URLs;
- course IDs;
- image references;
- section IDs.

User-visible labels associated with that data still belong in `it.json`.

## External Links

Centralize external destinations where practical.

Do not repeat URLs throughout components.

External-service constraints are defined in `EXTERNAL_SERVICES.md`.

## Styling

Use a centralized styling approach.

Do not scatter arbitrary design values throughout components.

Colors, spacing, typography, and other visual tokens must follow `DESIGN.md`.

## Assets

Store local project assets under `src/assets/` or the appropriate public asset directory.

Do not duplicate the same asset across multiple folders.

Asset rules belong in `ASSETS.md`.

## State

Use local React state for simple UI interactions.

Examples:

- mobile navigation;
- gallery state;
- expandable sections.

Do not introduce global state management without a real cross-application state requirement.

## Data Fetching

The initial static site should not require runtime API requests for core content.

Prefer local content and configuration.

Do not make the basic page dependent on third-party service availability.

## Error Handling

Interactive components should fail safely.

External links or optional content should not break page rendering when unavailable.

## TypeScript

Use TypeScript for application code.

Prefer explicit reusable types for:

- component props;
- structured data;
- configuration objects.

Avoid `any` unless there is a justified exceptional case.

## Imports

Keep imports predictable and organized.

Avoid circular dependencies.

Do not create unnecessary barrel files purely to reduce import length.

## Accessibility

Architecture must support semantic and keyboard-accessible components.

Detailed rules belong in `ACCESSIBILITY.md`.

## Performance

Do not introduce architecture that unnecessarily increases bundle size or runtime work.

Performance rules belong in `PERFORMANCE.md`.

## Related Documents

- `CONTENT.md` — business facts.
- `DESIGN.md` — visual system.
- `PRIVACY.md` — privacy constraints.
- `EXTERNAL_SERVICES.md` — integrations.
- `ACCESSIBILITY.md` — accessibility.
- `PERFORMANCE.md` — performance.
- `ASSETS.md` — assets.
- `AGENTS.md` — project-wide enforcement.

`AGENTS.md` should reference this file rather than duplicate these architecture rules.