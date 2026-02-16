import Link from "next/link";
import { LOCATION_PAGES, SERVICES, SERVICE_ORDER, getStates, type ServiceSlug } from "@/lib/restoration-data";

const primaryService = SERVICES["water-damage"];

export default function Home() {
  const states = getStates();

  return (
    <div className="min-h-screen overflow-x-clip bg-[#07131c] text-slate-100">
      <main>
        <section className="relative overflow-hidden border-b border-[#1e4a63]">
          <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#1e4a63]/30 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-[#fbbf24]/25 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-[#fbbf24]/40 bg-[#fbbf24]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#fbbf24]">
                Water Damage Is Primary Focus
              </p>
              <h1 className="max-w-full break-words text-3xl font-black leading-tight sm:text-6xl">
                restoxpertrestoration
                <span className="block bg-gradient-to-r from-[#9dc8e6] to-[#fbbf24] bg-clip-text text-transparent">
                  For Canadian Cities
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-slate-300">
                24/7 response for {primaryService.name.toLowerCase()}, plus fire damage, mold remediation, and hazmat
                cleanup across major Canadian markets.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {SERVICE_ORDER.map((serviceSlug) => {
                  const service = SERVICES[serviceSlug];
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="rounded-md border border-[#1e4a63] bg-[#0d2432] px-4 py-2 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-[#fbbf24] hover:text-[#fbbf24]"
                    >
                      {service.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="relative rounded-2xl border border-[#1e4a63] bg-gradient-to-b from-[#0d2432] to-[#081824] p-6 shadow-2xl shadow-black/50">
              <h2 className="text-xl font-bold text-[#fbbf24]">Cities We Serve</h2>
              <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-slate-300 sm:grid-cols-2">
                {LOCATION_PAGES.map((location) => (
                  <li key={`${location.stateSlug}-${location.citySlug}`}>
                    <Link
                      href={`/${location.stateSlug}/${location.citySlug}/water-damage`}
                      className="block w-full rounded-md border border-[#1e4a63] bg-[#0b1f2c] px-3 py-2 transition hover:border-[#fbbf24] hover:text-white"
                    >
                      {location.cityName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-extrabold text-white">Service Hubs</h2>
              <p className="mt-2 text-slate-300">Visual hub pages for each restoration category.</p>
            </div>
            <Link
              href="/services"
              className="rounded-md border border-[#fbbf24]/50 px-4 py-2 text-sm font-semibold text-[#fbbf24] hover:bg-[#fbbf24]/10"
            >
              View All Services
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {SERVICE_ORDER.map((serviceSlug, idx) => {
              const service = SERVICES[serviceSlug as ServiceSlug];
              const accents = [
                "from-[#1e4a63]/35",
                "from-[#fbbf24]/35",
                "from-[#1e4a63]/25",
                "from-[#fbbf24]/25",
              ];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group relative overflow-hidden rounded-xl border border-[#1e4a63] bg-[#0b1f2c] p-5 transition hover:-translate-y-1 hover:border-[#fbbf24]"
                >
                  <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${accents[idx]} to-transparent blur-xl`} />
                  <p className="text-xs uppercase tracking-[0.2em] text-[#fbbf24]">{service.navLabel}</p>
                  <h3 className="mt-2 text-xl font-bold text-white">{service.name}</h3>
                  <p className="mt-3 text-sm text-slate-300">{service.shortDescription}</p>
                  <span className="mt-5 inline-flex text-sm font-semibold text-[#fbbf24] hover:brightness-110">
                    Explore hub
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="border-y border-[#1e4a63] bg-[#0b1f2c]/45">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="text-3xl font-extrabold text-white">Canadian Location Index</h2>
            <p className="mt-2 text-slate-300">Province and city coverage across Canada.</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {states.map((state) => {
                const stateCities = LOCATION_PAGES.filter((location) => location.stateSlug === state.slug);
                return (
                  <div key={state.slug} className="rounded-xl border border-[#1e4a63] bg-[#0b1f2c] p-5">
                    <h3 className="text-xl font-bold text-[#fbbf24]">{state.name}</h3>
                    <ul className="mt-4 space-y-2">
                      {stateCities.map((city) => (
                        <li key={city.citySlug}>
                          <Link className="text-sm text-slate-300 transition hover:text-white" href={`/${state.slug}/${city.citySlug}/water-damage`}>
                            {city.cityName}, Canada
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
