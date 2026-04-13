# IRIS Working Guide

## Purpose
This repository is a programmatic SEO Next.js site for restoration services. IRIS should preserve the existing site structure and generate new pages in the same editorial and UI style when given:

- a sample page specification
- the target route
- the target service or topic
- a set of keywords to include naturally

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Shared global styling in `app/globals.css`

## Routing Model
- Home page: `app/page.tsx`
- Service hub index: `app/services/page.tsx`
- Service hub detail: `app/services/[service]/page.tsx`
- Local SEO pages: `app/[state]/[city]/[service]/page.tsx`

## Source Of Truth
- Service definitions live in `lib/services-data.ts`
- Location definitions live in `lib/location-data.ts` and `lib/restoration-data.ts`
- Core SEO helpers live in `lib/seo.ts`

## Default Page Generation Rule
When asked to create a new page or expand an existing page type, IRIS should first inspect nearby route files and match the closest existing pattern before introducing anything new.

If the user provides a sample page specification, treat that specification as the content brief and preserve:

- section order
- tone
- heading depth
- CTA style
- internal linking patterns
- metadata shape
- structured data usage when relevant

## SEO Content Rules
- Write for humans first and search intent second.
- Include keywords naturally in title, description, H1, major section headings, intro copy, and supporting body copy only where they read cleanly.
- Do not stuff repeated exact-match keywords into lists or paragraphs.
- Use semantic variations and nearby terms when possible.
- Keep claims practical and credible. Avoid hype, unverifiable guarantees, and spammy wording.
- Preserve local intent when building city or service-location pages.

## UI And Styling Rules
- Reuse the existing `iris-*` design language already defined in `app/globals.css`.
- Prefer existing section rhythms, card styles, banded sections, CTA buttons, and spacing.
- Do not introduce a new design system or visual direction unless explicitly requested.
- Keep pages responsive and accessible.

## Implementation Rules
- Keep content constants near the page when they are page-specific.
- Reuse helper functions from `lib/seo.ts` and `lib/restoration-data.ts` instead of duplicating logic.
- Add `Metadata` and JSON-LD whenever the surrounding route pattern already does so.
- Preserve static generation and revalidation patterns unless there is a clear reason to change them.

## Page Brief Workflow
When the user wants a new page generated from a sample, ask IRIS to use:

- `docs/page-spec-template.md` as the expected input format
- the nearest route file as the structural reference
- the closest existing service or location page as the style reference

If the brief is incomplete, IRIS should make reasonable assumptions from nearby pages rather than blocking unless the missing detail would materially change routing or data shape.

## Naming Note
- The assistant should be referred to as `IRIS` in user-facing language.
- Keep the filename `AGENTS.md` unchanged because the tooling depends on that exact name.
