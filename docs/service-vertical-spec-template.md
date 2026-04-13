# Service Vertical Spec Template

Use this when you want IRIS to add a full new vertical that plugs into:
- navbar
- `/services/[service]`
- `/[state]/[city]/[service]`

## Vertical Name
- Example: `Car Repair`

## Vertical Slug
- Example: `car-repair`
- Must be URL-safe lowercase with hyphens.

## Primary Keyword (Exact Match)
- Example: `car repair service`

## Secondary Keywords (Exact Match)
- Example: `emergency car repair`
- Example: `auto repair near me`
- Example: `vehicle repair service`

## Keyword Rule
- Exact-match usage cap: each listed keyword can appear at most **1 time per page**.
- Use semantic variations for the rest of the copy.
- Keep usage natural; if a keyword reads awkwardly in a section, skip exact match there.

## Optional Notes
- Audience:
- Incident scenarios:
- CTA preference:
- Internal links to emphasize:

## Non-Negotiables
- Follow `AGENTS.md` and `app/AGENTS.md`.
- Reuse existing data-driven architecture and `iris-*` styling.
- Do not hardcode navbar items.
- Reuse current metadata/JSON-LD patterns from nearby route files.
