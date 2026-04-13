# IRIS Page Generation Workflow

## What To Give IRIS
Provide:

1. A completed brief based on `docs/page-spec-template.md`
2. The file or route to use as the visual and structural reference
3. Any keywords that should be included naturally

For full vertical creation (new service slug + navbar + service/local route support), use:
- `docs/service-vertical-spec-template.md`
- `docs/service-vertical-prompt-template.md`

## Recommended Prompt Pattern
Use a prompt like this:

```md
Create a new page for this project using the repo instructions in `AGENTS.md` and `app/AGENTS.md`.

Use this page as the structural reference:
- `app/[state]/[city]/[service]/page.tsx`

Use this brief:
- Route type: local-service-page
- Target route: /ontario/toronto/water-damage
- Primary topic: Water Damage Restoration
- Primary keyword: water damage restoration toronto
- Secondary keywords:
  - emergency water removal toronto
  - flood cleanup toronto
  - basement flooding cleanup toronto
- Tone: calm, credible, urgent, non-spammy

Match the existing site style and include the keywords naturally.
```

## What IRIS Should Do
- Inspect the nearest existing route file first
- Reuse the current metadata, schema, section, and styling patterns
- Keep copy aligned with the existing emergency-restoration voice
- Avoid keyword stuffing

## Best Practice
If you have a page with a particularly strong format, point IRIS at that exact file or route in addition to the brief. The closer the reference, the more consistent the generated page will be.
