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