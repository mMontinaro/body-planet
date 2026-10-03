# Privacy

This document defines the privacy constraints for the Body Planet website.

It is an engineering reference, not the public Privacy Policy or Cookie Policy.

## Scope

The initial website is a static marketing site.

It should not require:

- user accounts;
- authentication;
- a backend database;
- contact forms;
- newsletter signup;
- payments;
- analytics;
- advertising trackers.

The site should avoid collecting personal data unless a future feature explicitly requires it.

## Cookies

The initial implementation should not intentionally set:

- analytics cookies;
- advertising cookies;
- profiling cookies;
- marketing cookies.

Do not introduce cookies without a concrete requirement.

If cookies are added later, review:

- purpose;
- duration;
- consent requirements;
- required legal disclosures.

## Browser Storage

Do not use:

- `localStorage`;
- `sessionStorage`;
- IndexedDB;
- fingerprinting;
- persistent client identifiers;

unless required by a specific feature.

Temporary UI state should remain in React state where possible.

## Personal Data

The initial site should not directly collect personal information.

Do not request:

- health information;
- payment information;
- passwords;
- identity documents;
- date of birth;
- membership details;
- other sensitive information.

Any future feature that collects personal data must define:

- what is collected;
- why it is collected;
- where it is sent;
- where it is stored;
- retention requirements;
- who has access.

## Forms

A contact form is not part of the initial scope.

Do not add non-functional forms for visual purposes.

If a form is introduced later, its data flow and privacy requirements must be defined before implementation.

## Tracking

The initial site should not contain analytics, advertising, profiling, or behavioural tracking.

Third-party services and integrations are governed by:

```text
EXTERNAL_SERVICES.md
```

## Media

Only use images, videos, logos, and other media that Body Planet owns, provides, or is permitted to publish.

Before production, confirm permission for identifiable-person imagery.

## Legal Documents

Do not generate legal text and present it as approved legal documentation.

The production site may require:

- Privacy Policy;
- Cookie Policy;
- other applicable legal notices.

These must reflect the behaviour of the deployed site.

This document does not replace them.

## Consent

Do not implement a cookie or consent banner unless the technologies used by the final site require one.

If consent becomes necessary, technologies requiring prior consent must not load before valid consent is obtained where applicable.

## Production Review

Before production deployment, review:

- cookies;
- browser storage;
- personal-data collection;
- forms;
- tracking;
- third-party integrations;
- hosting behaviour;
- deployed legal documentation.

## Rule of Least Collection

When multiple implementations provide the same functionality, prefer the one that:

1. collects less data;
2. loads fewer third parties;
3. stores less information;
4. requires less consent complexity;
5. is easier to audit.

## Related Documents

Business facts belong in:

```text
CONTENT.md
```

Third-party integrations belong in:

```text
EXTERNAL_SERVICES.md
```

Technical implementation belongs in:

```text
ARCHITECTURE.md
```

Cross-project enforcement belongs in:

```text
AGENTS.md
```

`AGENTS.md` should reference this document rather than duplicate its rules.