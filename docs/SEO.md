# SEO

This document defines SEO requirements for the Body Planet website.

Business facts and approved copy belong in `CONTENT.md`.

## Goals

The site should help search engines understand:

- the business name;
- the business type;
- the location;
- available services;
- contact information;
- opening hours.

SEO must not introduce unsupported business claims.

## Primary Search Context

Relevant factual terms include:

- Body Planet;
- Latina Scalo;
- Latina;
- palestra;
- centro fitness;
- sala pesi;
- corsi fitness;
- Pilates;
- indoor cycling;
- karate;
- kickboxing;
- Jeet Kune Do.

Use these naturally.

Do not keyword-stuff content.

## Page Title

The page must have a descriptive `<title>`.

Initial draft:

```text
Body Planet | Palestra e Centro Fitness a Latina Scalo
```

Final wording should remain consistent with verified business information.

## Meta Description

The page should include a concise meta description.

Initial draft:

```text
Scopri Body Planet a Latina Scalo: palestra, corsi fitness, indoor cycling, Pilates e arti marziali. Consulta gli orari e contattaci.
```

Do not exceed normal search-result description lengths unnecessarily.

## Heading Structure

Use semantic heading hierarchy.

Expected structure:

```text
h1 — primary page identity
h2 — major sections
h3 — subsections or individual course groups
```

Use only one primary `h1`.

Do not choose heading levels based on visual size.

## Semantic HTML

Prefer semantic elements where appropriate:

- `header`;
- `nav`;
- `main`;
- `section`;
- `article`;
- `footer`;
- `address`.

Do not replace meaningful semantic elements with generic `div` elements without reason.

## URLs

The initial site may be a single-page static website.

Use stable fragment identifiers for major sections where useful.

Example:

```text
/#corsi
/#orari
/#contatti
```

Avoid unnecessary routing for content that belongs on the same page.

## Canonical URL

Production should define a canonical URL once the final domain is known.

Do not hard-code a temporary demo URL as canonical.

## Open Graph Metadata

Production should include:

- `og:title`;
- `og:description`;
- `og:type`;
- `og:url`;
- `og:image`.

Use approved Body Planet imagery.

## Social Metadata

Add Twitter/X card metadata only if useful.

Do not invent social handles.

## Local SEO

The site should clearly expose:

- business name;
- address;
- telephone number;
- opening hours;
- service area/location.

These values must match `CONTENT.md`.

Keep business information consistent across the site.

## Structured Data

Production should include appropriate schema.org structured data.

Prefer a suitable local business or sports/fitness-related type when accurately applicable.

Structured data may include verified:

- name;
- address;
- telephone;
- URL;
- opening hours;
- image;
- location.

Do not add unverified ratings, prices, reviews, or social profiles.

## Images

Meaningful images should have appropriate alternative text.

Decorative images should not be used for keyword stuffing.

Image filenames should be descriptive where practical.

Image SEO rules must remain consistent with `ACCESSIBILITY.md` and `ASSETS.md`.

## Performance

SEO implementation should not introduce unnecessary scripts or heavy dependencies.

Performance-specific rules belong in `PERFORMANCE.md`.

## Mobile

The website must be fully usable and readable on mobile devices.

Avoid SEO-specific desktop-only content.

## Indexability

Production should allow indexing unless explicitly configured otherwise.

Demo or staging deployments may intentionally prevent indexing.

Do not accidentally ship staging `noindex` rules to production.

## robots.txt

Production should provide an appropriate `robots.txt`.

Do not block normal public content without reason.

## Sitemap

Production should provide a sitemap if the final site structure benefits from one.

For a single-page site, keep sitemap configuration simple.

## Content Rules

Do not create SEO copy that invents:

- awards;
- rankings;
- reviews;
- certifications;
- prices;
- years of experience;
- member counts;
- facility size;
- medical claims;
- superiority claims.

SEO wording must remain grounded in verified content.

## Localization

User-facing SEO strings should follow the project's localization rules.

Italian metadata text should be sourced consistently with the localization architecture defined in `ARCHITECTURE.md`.

## External Listings

Google Business Profile and other external listings may support local SEO.

Account ownership and listing-management processes belong in `EXTERNAL_SERVICES.md` or a future dedicated marketing document.

## Production Checklist

Before launch, verify:

- title;
- meta description;
- canonical URL;
- Open Graph tags;
- favicon;
- structured data;
- heading hierarchy;
- indexability;
- `robots.txt`;
- sitemap;
- image alt text;
- business information consistency;
- mobile rendering;
- page performance.

## Related Documents

- `CONTENT.md` — verified facts and copy.
- `ARCHITECTURE.md` — metadata implementation and localization.
- `ACCESSIBILITY.md` — semantic and accessible content.
- `PERFORMANCE.md` — loading and performance requirements.
- `ASSETS.md` — images and media.
- `EXTERNAL_SERVICES.md` — Google and other external platforms.
- `AGENTS.md` — cross-project enforcement.

`AGENTS.md` should reference this file rather than duplicate its SEO rules.