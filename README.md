# PROOFRESPONSE Programmatic SEO (Canada)

## Route model
- Global home: `/`
- Service hubs: `/services`, `/services/[service]`
- Local pSEO pages: `/[state]/[city]/[service]`

Examples:
- `/ontario/toronto/water-damage`
- `/quebec/montreal/fire-damage`

## Host-based city routing
This app now supports city hostnames via `proxy.ts`.

Behavior on a mapped city host:
- `/` rewrites to `/{state}/{city}/water-damage`
- `/water-damage` rewrites to `/{state}/{city}/water-damage`
- `/fire-damage` rewrites to `/{state}/{city}/fire-damage`
- `/mold-remediation` rewrites to `/{state}/{city}/mold-remediation`
- `/hazmat-cleanup` rewrites to `/{state}/{city}/hazmat-cleanup`

City host mappings are defined per location in `lib/restoration-data.ts` under `cityHosts`.

## Local development with city hosts
Add test hosts to `/etc/hosts`:

```txt
127.0.0.1 toronto.localhost
127.0.0.1 ottawa.localhost
127.0.0.1 vancouver.localhost
```

Run dev server:

```bash
npm run dev
```

Then open:
- `http://toronto.localhost:3000/`
- `http://ottawa.localhost:3000/fire-damage`

## Production DNS pattern (city -> unique IP)
For each city:
1. Create/assign a droplet with its own public IP.
2. Point city hostname `A` record to that IP.
3. Deploy this same app build.
4. Keep city host in that location's `cityHosts` list.

Example:
- `toronto.yourdomain.com -> 203.0.113.10`
- `ottawa.yourdomain.com -> 203.0.113.11`

## Commands
- `npm run lint`
- `npm run build`
- `npm run start`
