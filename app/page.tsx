import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { LOCATION_PAGES, SERVICES, SERVICE_ORDER, getStates, type ServiceSlug } from "@/lib/restoration-data";
import {
  EMERGENCY_PHONE_DISPLAY,
  EMERGENCY_PHONE_E164,
  SITE_NAME,
  absoluteUrl,
  serviceLocationKeyword,
} from "@/lib/seo";

const primaryService = SERVICES["water-damage"];
const featuredLocations = LOCATION_PAGES.slice(0, 8);

export const metadata: Metadata = {
  title: "Emergency Restoration Services Across Canada",
  description:
    "Call now for 24/7 emergency restoration services across Canadian cities. Fast dispatch for water damage, fire damage, mold remediation, and hazmat cleanup.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_NAME} | Emergency Restoration Services Across Canada`,
    description:
      "Emergency-first restoration with direct phone intake, documented scopes, and city-specific service pages.",
    url: absoluteUrl("/"),
    type: "website",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Emergency Restoration Services Across Canada`,
    description: "Call now for 24/7 dispatch across Canadian cities.",
  },
  keywords: [
    "emergency restoration canada",
    ...featuredLocations.map((location) => serviceLocationKeyword(primaryService.name, location.cityName)),
  ],
};

export default function Home() {
  const states = getStates();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: absoluteUrl("/"),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: EMERGENCY_PHONE_E164,
        contactType: "emergency customer service",
        areaServed: "CA",
        availableLanguage: ["en"],
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: absoluteUrl("/"),
    potentialAction: {
      "@type": "SearchAction",
      target: `${absoluteUrl("/")}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Emergency Restoration Service Hubs",
    itemListElement: SERVICE_ORDER.map((serviceSlug, index) => {
      const service = SERVICES[serviceSlug];
      return {
        "@type": "ListItem",
        position: index + 1,
        name: service.name,
        url: absoluteUrl(`/services/${service.slug}`),
      };
    }),
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-[#07131c] text-slate-100">
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={serviceListSchema} />

      <main>
        <section className="relative overflow-hidden border-b border-[#1e4a63]">
          <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#1e4a63]/30 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-[#fbbf24]/25 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-[#fbbf24]/40 bg-[#fbbf24]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#fbbf24]">
                Emergency Intake 24/7
              </p>
              <h1 className="max-w-full break-words text-3xl font-black leading-tight sm:text-6xl">
                {SITE_NAME}
                <span className="block bg-gradient-to-r from-[#9dc8e6] to-[#fbbf24] bg-clip-text text-transparent">
                  Service + Location SEO Network
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-slate-300">
                Call {EMERGENCY_PHONE_DISPLAY} for immediate dispatch. We publish structured city pages such as
                {" "}
                <strong>{serviceLocationKeyword(primaryService.name, "Ottawa")}</strong>
                {" "}
                so users and AI systems can quickly extract the right local service intent.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${EMERGENCY_PHONE_DISPLAY.replace(/[^0-9]/g, "")}`}
                  className="rounded-md bg-[#fbbf24] px-4 py-2 text-sm font-semibold text-[#1e4a63] transition hover:brightness-105"
                >
                  Call {EMERGENCY_PHONE_DISPLAY}
                </a>
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
              <h2 className="text-xl font-bold text-[#fbbf24]">Extractable City Keywords</h2>
              <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-slate-300 sm:grid-cols-2">
                {LOCATION_PAGES.slice(0, 10).map((location) => (
                  <li key={`${location.stateSlug}-${location.citySlug}`}>
                    <Link
                      href={`/${location.stateSlug}/${location.citySlug}/water-damage`}
                      className="block w-full rounded-md border border-[#1e4a63] bg-[#0b1f2c] px-3 py-2 transition hover:border-[#fbbf24] hover:text-white"
                    >
                      {serviceLocationKeyword(primaryService.name, location.cityName)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-2xl border border-[#1e4a63] bg-[#0b1f2c] p-6">
            <h2 className="text-2xl font-bold text-white">Quick Answer For AI Search</h2>
            <p className="mt-3 text-slate-300">
              <strong>What should a property owner do first after damage?</strong> Call immediately, isolate hazards,
              and start professional mitigation before secondary damage grows. This site is structured by
              <strong> service + location</strong> so search engines and AI assistants can surface actionable local pages.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-extrabold text-white">Service Hubs</h2>
              <p className="mt-2 text-slate-300">Structured service pages with process steps, definitions, and FAQs.</p>
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
            <p className="mt-2 text-slate-300">Province and city clusters for high-intent emergency searchers.</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {states.map((state) => {
                const stateCities = LOCATION_PAGES.filter((location) => location.stateSlug === state.slug);
                return (
                  <div key={state.slug} className="rounded-xl border border-[#1e4a63] bg-[#0b1f2c] p-5">
                    <h3 className="text-xl font-bold text-[#fbbf24]">{state.name}</h3>
                    <ul className="mt-4 space-y-2">
                      {stateCities.map((city) => (
                        <li key={city.citySlug}>
                          <Link
                            className="text-sm text-slate-300 transition hover:text-white"
                            href={`/${state.slug}/${city.citySlug}/water-damage`}
                          >
                            {serviceLocationKeyword(primaryService.name, city.cityName)}
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
