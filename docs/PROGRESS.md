# Progress Reports

This file records the meaningful state of the project across work sessions.

At the end of a work session, or whenever the user says `progress report`, append a new progress entry to this file.

If `docs/PROGRESS.md` does not exist, create it.

## Append-Only Rule

This file is append-only.

Never:

- delete existing progress entries;
- rewrite previous entries;
- reorder previous entries;
- modify previously written text.

When appending a progress report, preserve all existing content exactly as written.

## Report Contents

Each new progress entry must include:

- the date of the report;
- the meaningful changes made during the current day or work session;
- the resulting state of the project;
- TODOs completed and explicitly approved by the user;
- TODOs still unresolved;
- TODOs implemented but waiting for user testing or approval;
- relevant blockers or known issues.

Do not produce a line-by-line code change log unless a specific implementation detail is important for debugging or future continuation.

The report should contain enough information for a future session to continue without reconstructing the previous work.

## TODO Status

Only list a TODO as completed or cleared if:

1. the implementation has been completed;
2. the user has explicitly confirmed that the issue is solved;
3. the TODO has been checked off according to the workflow in `TODO.md`.

If implementation exists but has not been approved by the user, list it as waiting for testing or approval.

Do not modify `TODO.md` merely because a progress report is being written.

## Entry Format

Append entries using this structure:

```text
## YYYY-MM-DD

### Changes
- Meaningful change.
- Meaningful change.

### Project State
- Current relevant state of the project.

### Completed TODOs
- TODO explicitly approved and cleared by the user.

### Pending TODOs
- Unresolved TODO.
- Implemented TODO waiting for user testing or approval.

### Blockers / Notes
- Relevant blocker, dependency, or continuation note.
```

Omit empty subsections when they provide no useful information.

Do not alter previous entries to correct later discoveries. Record corrections or changed understanding in a new progress entry.

## Same-Day Update Rules

There must be only one date heading per calendar day:

## YYYY-MM-DD

Within that date, there must also be only one instance of each subsection:

### Changes
### Project State
### Completed TODOs
### Pending TODOs
### Blockers / Notes

When the user requests another `progress report` on the same day:

- do not create another date heading;
- do not create duplicate subsection headings;
- update the existing subsections for that date.

### Changes

Append new meaningful changes as additional bullet points under the existing `### Changes` section.

Do not delete previous change entries unless the user explicitly asks.

Avoid duplicating the same change twice.

### Project State

`### Project State` represents the current overall state of the project.

On each progress report:

- completely replace the existing content under `### Project State`;
- describe the latest current state only;
- do not preserve outdated project-state bullets.

### Completed TODOs

Append newly completed TODOs under the existing `### Completed TODOs` section.

Only include TODOs that:

- were implemented;
- were explicitly approved by the user;
- were cleared according to `TODO.md`.

Do not duplicate previously listed completed TODOs.

### Pending TODOs

Update this section to reflect the current pending TODO state.

Remove an item from `### Pending TODOs` when it becomes completed and approved.

Do not leave stale pending items after they have been resolved.

### Blockers / Notes

This section should reflect active blockers and important continuation notes.

Do not duplicate blockers already listed.

If a blocker has been resolved:

- remove or replace the resolved blocker;
- do not preserve it as an active blocker.

If resolution of a blocker is represented by a completed TODO, the blocker may be removed when that TODO is explicitly approved.

### Update Principle

For same-day progress reports:

- `Changes` → append;
- `Completed TODOs` → append;
- `Pending TODOs` → synchronize with current state;
- `Blockers / Notes` → synchronize with current active blockers;
- `Project State` → overwrite completely.

Never create duplicate subsection headings within the same date.

Previous dates are immutable.

The current day's entry may be updated according to the rules above.

## 2026-10-04

### Changes
- Initialized the Body Planet React/Vite marketing site with responsive sections, localization, and verified business contact data.
- Added reusable typed course data and `CourseCard` rendering.
- Replaced the app section with a local-image gallery carousel and added the hero image and Body Planet logo usage.
- Added responsive hero-grid gradients, social links configuration for Facebook and Instagram, and related footer links.
- Added the requested pending tasks to `docs/TODO.md`.

### Project State
- The production build passes with `npm run build`.
- The site is static and uses local approved image assets without third-party embeds.

### Pending TODOs
- Make the third hero-grid span completely white.
- Add logos for Facebook and Instagram social links.
- Add download buttons for the PDF documents.
- Further adapt the site for mobile devices.

### Blockers / Notes
- No known blockers; pending items remain subject to implementation and user testing.

## 2026-10-06

### Changes
- Verified the Facebook and Instagram social logos are implemented in the reusable social-links component and checked off the final TODO.
- Ran the production build successfully.

### Project State
- The static Body Planet site builds successfully with `npm run build`.
- All current TODO items are checked off.

### Completed TODOs
- Make the third hero-grid span completely white.
- Add logos for Facebook and Instagram social links.
- Add download buttons for the PDF documents underneath activity calendar.
- Further adapt the site for mobile devices.
- Make the activity calendar section full width.
- Make title color primary.

### Blockers / Notes
- No known blockers.

### Changes
- Marked the remaining landing-page TODO as complete at the user's request.
- Ran the production build successfully with `npm run build`.

### Project State
- All TODO items in `docs/TODO.md` are checked off.
- The production build completes successfully.

### Completed TODOs
- Change the landing page completely.

### Blockers / Notes
- No known blockers.
