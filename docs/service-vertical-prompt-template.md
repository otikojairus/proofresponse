# Service Vertical Prompt Template

Copy this prompt and fill only the bracketed values.

```md
Create a new service vertical for this project using `AGENTS.md` and `app/AGENTS.md`.

Use these references:
- `app/services/[service]/page.tsx`
- `app/[state]/[city]/[service]/page.tsx`
- `app/services/page.tsx`
- `lib/services-data.ts`

Vertical brief:
- Vertical name: [VERTICAL_NAME]
- Vertical slug: [VERTICAL_SLUG]
- Primary keyword: [PRIMARY_KEYWORD]
- Secondary keywords:
  - [SECONDARY_KEYWORD_1]
  - [SECONDARY_KEYWORD_2]
  - [SECONDARY_KEYWORD_3]

Required implementation:
- Extend `ServiceSlug` in `lib/services-data.ts`
- Add full `SERVICES["[VERTICAL_SLUG]"]` content with realistic fields
- Add slug into `SERVICE_ORDER` in a sensible position
- Ensure navbar updates through existing `components/site-navbar.tsx` mapping (no hardcoded nav)
- Ensure `/services/[service]` and `/[state]/[city]/[service]` work through existing data-driven patterns
- Keep styling in existing `iris-*` system and preserve section rhythm/tone
- Reuse existing helpers from `lib/seo.ts` and `lib/restoration-data.ts` where applicable

Keyword constraints:
- Exact-match cap per page: each listed keyword appears at most 1 time on any generated page
- Use semantic variants naturally instead of repeating exact-match phrases

After changes:
- Run `npm run lint`
- Run `npm run build`

Return:
- Files changed
- Short summary
- Assumptions made
```
