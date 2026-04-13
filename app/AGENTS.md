# App Page Generation Guide

## Goal
Build pages that feel like they belong beside the existing service hubs and local SEO pages in this app.

## Visual System
- Use the existing `iris-shell`, `iris-section`, `iris-container`, `iris-hero`, `iris-card`, `iris-band`, `iris-band-soft`, `iris-title`, `iris-subtitle`, and `iris-btn` patterns.
- Preserve the current brand palette and gradient-heavy hero treatment already defined in `app/globals.css`.
- Reuse Font Awesome icons only when the surrounding page pattern already uses them.

## Content Style
- Professional, calm, urgent when appropriate, and easy to scan.
- Short paragraphs.
- Direct headings.
- Clear next-step language.
- Localized copy should mention the city or service area naturally, not mechanically.

## Page Structure
For SEO landing pages, prefer this general shape unless the user brief says otherwise:

1. Metadata and canonical setup
2. JSON-LD for breadcrumbs plus relevant service or organization schema
3. Hero section with a direct H1, supporting copy, and CTA
4. Trust, process, coverage, or scenario cards
5. Educational sections that expand on search intent
6. FAQ or preparation content when useful
7. Strong closing CTA

## Keyword Usage
- Use the primary keyword in the title, description, H1, and one early section heading when it reads naturally.
- Spread secondary keywords across sub-sections, bullets, and FAQs without forcing exact-match repetition.
- Prefer natural phrasing such as service + city, emergency intent, and scenario-based wording.
- Avoid blocks that read like spun SEO copy.

## Route-Specific Guidance
- `app/[state]/[city]/[service]/page.tsx` is the main reference for local programmatic SEO pages.
- `app/services/[service]/page.tsx` is the reference for service hub pages.
- `app/page.tsx` is the reference for broader brand-level sections and high-level CTA language.

## When Adding New Pages
- Match nearby file naming and route conventions.
- Keep copy constants grouped and clearly named.
- Prefer reusable helper functions for keyword generation and URLs.
- Include internal links to relevant service and location routes where helpful.
- If creating a new repeatable page family, document the expected brief shape in `docs/page-spec-template.md` instead of relying on unstated assumptions.

## Naming Note
- In prompts, guides, and examples, refer to the assistant as `IRIS`.
