# AGENTS.md

This file defines the global operating rules for AI-assisted work on the Body Planet project.

It should remain concise and defer detailed rules to the relevant project documents.

For each and every response say 

## Response Rule

Every response must begin with exactly:

Typeshit

It must appear exactly once.

After `Typeshit`, keep the response as short as possible.

Prefer:
- one sentence;
- no summaries;
- no repeated explanations;
- no restating completed work;
- only essential errors, blockers, questions, or results.

Use more than one sentence only when necessary to complete the task correctly.

## Project Context

This is a static Body Planet marketing website built with:

- React 18;
- TypeScript;
- Vite;
- `lucide-react`.

The initial site is Italian-only and should remain lightweight, reusable, accessible, and suitable for eventual production use.

## Required Reading

Before making changes, read the documents relevant to the task.

Primary references:

- `docs/PROJECT.md`
- `docs/CONTENT.md`
- `docs/DESIGN.md`
- `docs/ARCHITECTURE.md`
- `docs/ACCESSIBILITY.md`
- `docs/PERFORMANCE.md`
- `docs/ASSETS.md`
- `docs/PRIVACY.md`
- `docs/EXTERNAL_SERVICES.md`
- `docs/SEO.md`
- `docs/TODO.md`
- `docs/PROGRESS.md`

Do not duplicate their detailed rules here.

## Authority

When rules overlap, use this order:

1. explicit user instruction;
2. `AGENTS.md`;
3. the document responsible for that concern;
4. existing implementation.

If implementation conflicts with project documentation, follow the documentation unless the user explicitly changes the requirement.

## Scope

Do not introduce functionality outside the scope defined in `docs/PROJECT.md`.

Do not add speculative infrastructure for hypothetical future needs.

Prefer the simplest implementation that satisfies the current requirements.

## Content

`docs/CONTENT.md` is authoritative for verified business information.

Do not invent:

- business facts;
- prices;
- schedules;
- reviews;
- instructors;
- certifications;
- statistics;
- social accounts;
- legal claims;
- marketing claims presented as facts.

If required information is unknown, leave it unresolved rather than fabricating it.

## User-Facing Strings

All user-facing text must be stored in:

```text
src/locales/it.json
```

If it does not exist, create it.

Do not hard-code user-facing copy in `.tsx` or `.ts` files.

Use stable semantic keys.

Technical strings that are not user-facing may remain in code.

## Components

Favor reusable components and repeatable patterns.

Do not create one-off components when an existing generic component can reasonably support the same responsibility.

Reusable components should receive variable content through props or structured data.

Do not embed Body Planet-specific copy inside generic components.

Detailed rules are defined in `docs/ARCHITECTURE.md`.

## Design

Follow `docs/DESIGN.md`.

Do not invent a new visual language that conflicts with established project direction.

Use centralized design values rather than scattering arbitrary colors, spacing, typography, or effects throughout components.

## Accessibility

Accessibility is mandatory.

Follow `docs/ACCESSIBILITY.md`.

Prefer semantic HTML and native browser behavior over custom implementations.

Do not remove accessibility features for visual convenience.

## Performance

Follow `docs/PERFORMANCE.md`.

Avoid unnecessary:

- dependencies;
- runtime scripts;
- large assets;
- API requests;
- rendering complexity.

Do not optimize prematurely when it adds unnecessary complexity.

## Assets

Follow `docs/ASSETS.md`.

Prefer approved local assets.

Do not duplicate, hotlink, distort, or invent production assets without reason.

## Privacy

Follow `docs/PRIVACY.md`.

The initial site should avoid unnecessary data collection, storage, tracking, and consent complexity.

Do not introduce data-processing features without an explicit requirement.

## External Services

Follow `docs/EXTERNAL_SERVICES.md`.

Prefer external links over embedded third-party services where practical.

Do not add third-party scripts, APIs, trackers, or integrations without a concrete requirement.

## SEO

Follow `docs/SEO.md`.

SEO must remain grounded in verified content.

Do not create unsupported claims for search visibility.

## Dependencies

Do not install a package unless there is a clear technical need.

Before adding one, check whether the requirement can be handled cleanly using:

- React;
- TypeScript;
- browser APIs;
- CSS;
- existing dependencies.

## Existing Code

Inspect the existing implementation before changing it.

Do not rewrite unrelated working code without reason.

Preserve established patterns when they remain consistent with project documentation.

## TypeScript

Use TypeScript for application code.

Prefer explicit types for reusable structures and component props.

Avoid `any` unless there is a justified exceptional case.

## TODO Workflow

`docs/TODO.md` defines the TODO approval workflow.

Do not check off, remove, or modify a TODO merely because implementation work is complete.

A TODO may only be marked complete after explicit user approval.

If the user explicitly requests a TODO change, that request grants permission for that change.

## Progress Reports

`docs/PROGRESS.md` is append-only.

When the user says:

```text
progress report
```

append a new progress entry according to the rules in `docs/PROGRESS.md`.

Never alter previous progress entries.

## Validation

Do not run `npm run build` after every change.

Run `npm run build` only when the user explicitly says:

`progress report`

At that point:

1. run the production build;
2. report any errors or warnings that require attention;
3. include the build result in the progress report.

Do not run the build automatically for routine edits unless the user explicitly requests it.

## Documentation Changes

Keep each project document focused on its assigned concern.

Do not expand a document indefinitely.

If a topic becomes too large or develops an independent responsibility, create a dedicated `.md` file and reference it from the relevant documents.

Avoid duplicating the same authoritative rule across multiple files.

## Change Discipline

When modifying the project:

1. inspect the relevant files;
2. read the governing documentation;
3. make the smallest coherent change;
4. preserve unrelated working behavior;
5. validate the result;
6. leave TODO status unchanged unless explicitly approved;
7. update progress only when requested or at the agreed end-of-session point.

## Final Principle

Prefer:

- verified facts over invented completeness;
- reusable patterns over duplication;
- simple architecture over speculative complexity;
- accessible native behavior over custom behavior;
- local/static solutions over unnecessary external dependencies;
- clear project boundaries over feature creep.