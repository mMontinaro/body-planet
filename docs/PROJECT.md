# Project

This document defines the scope, goals, and boundaries of the Body Planet website project.

## Project Type

The initial project is a static React website built with Vite and TypeScript.

It is intended as a modern replacement/demo for the existing Body Planet web presence.

## Primary Goal

Create a clear, modern, fast website that helps visitors:

- understand what Body Planet offers;
- discover available courses;
- find opening hours;
- locate the gym;
- contact Body Planet;

## Audience

Primary users include:

- prospective members;
- existing members;
- people looking for a gym in Latina Scalo;
- people interested in specific fitness or martial arts courses.

## Initial Scope

The first version should include:

- header/navigation;
- hero section;
- gym overview;
- course presentation;
- course schedule area;
- gallery;
- reviews/social proof;
- contact/location information;
- footer/legal links.

Exact factual content comes from `CONTENT.md`.

## Static-Site Boundary

The initial project does not require:

- backend services;
- databases;
- authentication;
- member accounts;
- payment processing;
- booking logic;
- newsletter functionality;
- contact-form processing;
- CMS integration.

Do not add these without an explicit scope change.

## Existing External Systems

Existing Body Planet systems may continue to handle:

- course booking;
- membership management;
- subscription renewal;
- payments;
- member notifications.

The website should link to external systems rather than unnecessarily reproduce them.

See `EXTERNAL_SERVICES.md`.

## Demo Goals

The demo should demonstrate:

- improved information hierarchy;
- responsive design;
- reusable components;
- clear calls to action;
- stronger presentation of courses;
- modern visual quality;
- good accessibility;
- strong performance.

The demo should remain functional without a backend.

## Production Readiness

The demo may later become the production site.

Code should therefore avoid intentionally disposable architecture where a simple production-quality implementation is equally practical.

However, do not over-engineer speculative future requirements.

## Content Accuracy

Do not invent business facts to make the demo appear more complete.

Unknown information should remain absent or clearly unresolved.

`CONTENT.md` is authoritative for verified business content.

## Language

The initial site is Italian only.

User-facing strings must follow the localization/content rules defined in `ARCHITECTURE.md`.

Multi-language support is not currently in scope.

## Reusability

The project should favor reusable components and repeatable UI patterns.

Do not create separate one-off implementations for identical interface roles without reason.

Technical rules belong in `ARCHITECTURE.md`.

## Design

The site should follow the visual direction defined in `DESIGN.md`.

Brand decisions should support Body Planet rather than invent an unrelated identity.

## Privacy

The initial implementation should minimize data collection and third-party tracking.

Privacy requirements are defined in `PRIVACY.md`.

## SEO

The project should support basic technical and local-business SEO.

SEO requirements are defined in `SEO.md`.

Marketing campaigns and broader local-marketing strategy are outside the current project scope.

## Accessibility

Accessibility is a baseline requirement.

Detailed requirements are defined in `ACCESSIBILITY.md`.

## Performance

The site should remain lightweight and fast, particularly on mobile devices.

Detailed requirements are defined in `PERFORMANCE.md`.

## Assets

Real Body Planet media should be preferred where available and permitted.

Asset rules are defined in `ASSETS.md`.

## Out of Scope

Unless explicitly added later, the project does not include:

- custom booking software;
- custom membership software;
- e-commerce;
- online payment infrastructure;
- user dashboards;
- mobile application development;
- CMS administration;
- email marketing;
- advertising campaigns;
- advanced analytics;
- social-media management;
- local-marketing services.

## Future Expansion

Future requirements may include:

- updated structured course schedules;
- integrations with existing gym systems;
- analytics;
- contact forms;
- newsletter functionality;
- additional pages;
- multiple languages;
- CMS functionality.

Future possibilities should not influence the initial architecture unless they provide immediate value.

## Decision Principle

When choosing between a simple solution that satisfies the current project and a more complex solution designed for hypothetical future needs, prefer the simpler solution.

## Success Criteria

The initial project is successful when:

- visitors can understand the business quickly;
- important information is easy to find;
- contact actions are obvious;
- the site works well on mobile;
- content is accurate;
- components are reusable;
- the production build succeeds;
- accessibility and performance standards are respected.

## Related Documents

- `CONTENT.md` — verified business content.
- `DESIGN.md` — visual direction.
- `ARCHITECTURE.md` — technical structure.
- `PRIVACY.md` — privacy constraints.
- `EXTERNAL_SERVICES.md` — external integrations.
- `SEO.md` — SEO requirements.
- `ACCESSIBILITY.md` — accessibility requirements.
- `PERFORMANCE.md` — performance requirements.
- `ASSETS.md` — asset handling.
- `AGENTS.md` — project-wide orchestration.

`AGENTS.md` should reference this file rather than duplicate project scope.