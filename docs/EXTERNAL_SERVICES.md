# External Services

This document governs third-party services used by the Body Planet website.

Privacy principles are defined in `PRIVACY.md`.

## Default Rule

Prefer ordinary external links over embedded third-party services.

Do not add a third-party dependency unless it provides necessary functionality.

## Approved Initial Services

The static demo may link to:

- WhatsApp;
- Google Maps;
- Google Reviews;
- Google Play;
- Apple App Store;
- verified social-media profiles.

These should normally be standard outbound links.

## WhatsApp

WhatsApp may be used as a primary contact destination.

Use the verified Body Planet telephone number from `CONTENT.md`.

Do not:

- load WhatsApp scripts;
- embed WhatsApp widgets;
- implement WhatsApp APIs;
- store messages on the website.

## Google Maps

For the initial site, use an external directions link.

Do not embed Google Maps by default.

An embed may only be introduced after reviewing its:

- privacy impact;
- cookie behaviour;
- consent requirements;
- performance cost.

## Google Reviews

The site may link users to:

- read Body Planet reviews;
- leave a Google review.

Prefer external Google links over review widgets.

Do not fabricate or automatically scrape review content.

## Google Play and App Store

The site may link to the official Body Planet mobile application.

Store links must be verified before production.

Do not replicate app functionality unless explicitly added to project scope.

## Social Media

Only link accounts confirmed to belong to Body Planet.

Do not guess social URLs from usernames or business names.

Prefer ordinary links over embedded feeds or social widgets.

## Analytics

No analytics service is approved for the initial site.

Do not add analytics without an explicit project decision.

If analytics are approved later, document the chosen provider separately if its rules require significant detail.

## Advertising

Do not add:

- advertising pixels;
- conversion trackers;
- retargeting scripts;
- behavioural advertising services.

Advertising integrations require explicit approval before implementation.

## Third-Party Embeds

Avoid third-party embeds by default.

Examples include:

- maps;
- videos;
- social feeds;
- review widgets;
- booking widgets.

Before adding an embed, determine whether a normal external link provides sufficient functionality.

## External Fonts

Prefer locally hosted fonts or system fonts.

If an external font provider is proposed, review it before implementation.

Font choice and asset handling belong in `DESIGN.md` and `ASSETS.md`.

## External Media

Do not hotlink production images or videos from unrelated websites.

Prefer locally hosted approved assets.

## Booking and Membership Systems

Existing Body Planet booking, membership, and payment functionality remains external.

Do not implement integrations with these systems without verified technical documentation and explicit project scope.

## Secrets and Credentials

Never place third-party:

- API keys;
- access tokens;
- passwords;
- private credentials;

inside frontend source code or locale files.

Public identifiers should only be included when required and safe for client-side exposure.

## Adding a New Service

Before introducing a third-party service, document:

- its purpose;
- why it is necessary;
- what data it receives;
- whether it sets cookies or identifiers;
- whether it loads automatically;
- whether consent may be required;
- whether a simpler alternative exists.

If these requirements become too detailed for this file, create a dedicated service document instead of expanding this file beyond its limit.

## Related Documents

- `CONTENT.md` — verified business information and external destinations.
- `PRIVACY.md` — privacy and data-collection constraints.
- `ARCHITECTURE.md` — technical integration patterns.
- `ASSETS.md` — locally hosted media and fonts.
- `AGENTS.md` — cross-project enforcement.

`AGENTS.md` should reference this file rather than duplicate its service-specific rules.