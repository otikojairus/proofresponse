import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { LOCATION_PAGES, SERVICES, SERVICE_ORDER, type ServiceSlug } from "@/lib/restoration-data";
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
  title: "24/7 Emergency Restoration Support Across Canada",
  description:
    "Get immediate help for water, fire, mold, and hazmat incidents across Canada. Speak with a live team, understand next steps, and start recovery quickly.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_NAME} | 24/7 Emergency Restoration Support`,
    description:
      "Human-centered emergency response across Canada for property owners and managers, with fast dispatch and clear next steps.",
    url: absoluteUrl("/"),
    type: "website",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | 24/7 Emergency Restoration Support`,
    description: "Call now for live emergency support and rapid response.",
  },
  keywords: [
    "emergency restoration canada",
    ...featuredLocations.map((location) => serviceLocationKeyword(primaryService.name, location.cityName)),
  ],
};

export default function Home() {
  const canadaLocationCount = LOCATION_PAGES.filter((location) => location.countryName === "Canada").length;
  const totalLocationCount = LOCATION_PAGES.length;

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
            areaServed: ["CA"],
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
    <div className="iris-shell">
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={serviceListSchema} />

      <main>
        <section className="iris-hero iris-section">
          <div className="iris-container grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div>
              <p className="iris-hero-kicker">Emergency Restoration Support</p>
              <h1 className="iris-hero-title">
                Real Help In High-Stress Moments
                <span>Clear Service Paths Across Canada</span>
              </h1>
              <p className="iris-hero-lead">
                When damage happens, the first priority is safety and rapid stabilization. Call {EMERGENCY_PHONE_DISPLAY}{" "}
                to speak with a live response team member and get immediate next-step guidance.
              </p>
              <p className="mt-4 max-w-3xl text-sm text-[#d6e6f0]">
                This page helps you choose the right service, understand what happens after your call, and move to a
                location page when you are ready for local dispatch in Canada.
              </p>
              <div className="iris-actions">
                <div className="hidden sm:block">
                  <a href={`tel:${EMERGENCY_PHONE_DISPLAY.replace(/[^0-9]/g, "")}`} className="iris-btn iris-btn-primary">
                    Call {EMERGENCY_PHONE_DISPLAY}
                  </a>
                </div>
                <div className="hidden sm:block">
                  <Link href="/services" className="iris-btn iris-btn-secondary">
                    Explore Service Hubs
                  </Link>
                </div>
              </div>
            </div>

            <div className="iris-card iris-card-pad bg-white/95">
              <h2 className="text-xl font-bold text-[#0d2d44]">What You Can Do Right Now</h2>
              <ul className="mt-4 space-y-2 text-sm text-[#425264]">
                <li>• Call for immediate safety and response guidance.</li>
                <li>• Tell us what happened and which areas are affected.</li>
                <li>• Get routed to the right mitigation team quickly.</li>
                <li>• Receive a practical plan for stabilization and recovery.</li>
              </ul>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {SERVICE_ORDER.slice(0, 2).map((serviceSlug) => {
                  const service = SERVICES[serviceSlug];
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block rounded-xl border border-[#dbe2ea] bg-[#f8fbff] px-3 py-2 text-sm font-semibold text-[#163147] transition hover:border-[#1e4a63] hover:bg-white"
                      style={{ color: "#163147" }}
                    >
                      {service.name}
                    </Link>
                  );
                })}
                <Link
                  href="/services"
                  className="block rounded-xl border border-[#dbe2ea] bg-[#f8fbff] px-3 py-2 text-sm font-semibold text-[#163147] transition hover:border-[#1e4a63] hover:bg-white"
                  style={{ color: "#163147" }}
                >
                  View All Services
                </Link>
                <a
                  href={`tel:${EMERGENCY_PHONE_DISPLAY.replace(/[^0-9]/g, "")}`}
                  className="block rounded-xl border border-[#dbe2ea] bg-[#f8fbff] px-3 py-2 text-sm font-semibold text-[#163147] transition hover:border-[#1e4a63] hover:bg-white"
                  style={{ color: "#163147" }}
                >
                  Call 24/7
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="iris-section">
          <div className="iris-container">
            <div className="iris-band rounded-2xl px-6 py-8">
              <div className="iris-section-head">
                <h2 className="iris-title text-2xl">Canadian Location Coverage</h2>
                <p>This site currently supports listed Canadian locations only, with direct routing into local emergency pages.</p>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="iris-panel">
                  <h3 className="text-base font-bold text-[#0d2d44]">Total Locations</h3>
                  <p className="mt-2 text-sm text-[#5c6875]">{totalLocationCount} serviceable local routes.</p>
                </div>
                <div className="iris-panel">
                  <h3 className="text-base font-bold text-[#0d2d44]">Canada</h3>
                  <p className="mt-2 text-sm text-[#5c6875]">{canadaLocationCount} locations in Canadian provinces.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="iris-section pt-0">
          <div className="iris-container">
            <div className="iris-band-soft rounded-2xl px-6 py-8">
              <h2 className="iris-title text-2xl">When To Call Immediately</h2>
              <p className="iris-subtitle">
                If any of these are happening now, immediate response can prevent a much larger and more expensive loss.
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div className="iris-panel">
                  <h3 className="text-base font-bold text-[#0d2d44]">Active Water Or Flooding</h3>
                  <p className="mt-2 text-sm text-[#5c6875]">Leaks, pooling, ceiling drips, or basement flooding.</p>
                </div>
                <div className="iris-panel">
                  <h3 className="text-base font-bold text-[#0d2d44]">Fire, Smoke, Or Soot</h3>
                  <p className="mt-2 text-sm text-[#5c6875]">Visible residue, strong smoke odor, or structural damage.</p>
                </div>
                <div className="iris-panel">
                  <h3 className="text-base font-bold text-[#0d2d44]">Suspected Mold Spread</h3>
                  <p className="mt-2 text-sm text-[#5c6875]">Persistent odor, visible growth, or recent water event.</p>
                </div>
                <div className="iris-panel">
                  <h3 className="text-base font-bold text-[#0d2d44]">Hazardous Contamination</h3>
                  <p className="mt-2 text-sm text-[#5c6875]">Biohazard, chemical exposure, or unsafe occupancy concerns.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="iris-section pt-0">
          <div className="iris-container">
            <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="iris-title">Choose A Service Path</h2>
                <p className="iris-subtitle">Start with the service that matches your immediate situation.</p>
              </div>
              <Link href="/services" className="iris-btn iris-btn-dark">
                View All Services
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {SERVICE_ORDER.map((serviceSlug, idx) => {
                const service = SERVICES[serviceSlug as ServiceSlug];
                const gradientByIndex = [
                  "from-[#0d2d44]/10",
                  "from-[#ffd700]/18",
                  "from-[#00b4d8]/16",
                  "from-[#1e4a63]/12",
                ];

                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="iris-card relative overflow-hidden p-5"
                  >
                    <div
                      className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${gradientByIndex[idx]} to-transparent blur-xl`}
                    />
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1e4a63]">{service.navLabel}</p>
                    <h3 className="mt-2 text-xl font-bold text-[#0d2d44]">{service.name}</h3>
                    <p className="mt-3 text-sm text-[#5c6875]">{service.shortDescription}</p>
                    <span className="mt-5 inline-flex text-sm font-semibold text-[#0d2d44]">Open service page</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="iris-section">
          <div className="iris-container">
            <div className="iris-band rounded-2xl px-6 py-8">
              <div className="iris-section-head">
                <h2 className="iris-title text-2xl">What Happens After You Call</h2>
                <p>A simple, clear process designed to reduce stress and accelerate stabilization.</p>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div className="iris-panel">
                  <h3 className="text-base font-bold text-[#0d2d44]">1. Live Intake</h3>
                  <p className="mt-2 text-sm text-[#5c6875]">A real person gathers details and confirms priority risks.</p>
                </div>
                <div className="iris-panel">
                  <h3 className="text-base font-bold text-[#0d2d44]">2. Rapid Dispatch</h3>
                  <p className="mt-2 text-sm text-[#5c6875]">Nearest available crew is routed with the right equipment.</p>
                </div>
                <div className="iris-panel">
                  <h3 className="text-base font-bold text-[#0d2d44]">3. On-Site Stabilization</h3>
                  <p className="mt-2 text-sm text-[#5c6875]">Containment, extraction, and immediate mitigation begin.</p>
                </div>
                <div className="iris-panel">
                  <h3 className="text-base font-bold text-[#0d2d44]">4. Clear Next Steps</h3>
                  <p className="mt-2 text-sm text-[#5c6875]">You receive practical guidance, updates, and documentation support.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="iris-section pt-0">
          <div className="iris-container">
            <div className="iris-band-soft rounded-2xl px-6 py-8">
              <div className="iris-section-head">
                <h2 className="iris-title text-2xl">What This Site Is Designed To Provide</h2>
                <p>A practical emergency navigation system for homeowners, managers, and operators.</p>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div className="iris-panel">
                  <h3 className="text-base font-bold text-[#0d2d44]">Service Clarity</h3>
                  <p className="mt-2 text-sm text-[#5c6875]">Clear differences between water, fire, mold, and hazmat response tracks.</p>
                </div>
                <div className="iris-panel">
                  <h3 className="text-base font-bold text-[#0d2d44]">Local Routing</h3>
                  <p className="mt-2 text-sm text-[#5c6875]">Fast access to city-specific pages across Canadian locations.</p>
                </div>
                <div className="iris-panel">
                  <h3 className="text-base font-bold text-[#0d2d44]">Decision Support</h3>
                  <p className="mt-2 text-sm text-[#5c6875]">Step-by-step content for first actions, expectations, and recovery planning.</p>
                </div>
                <div className="iris-panel">
                  <h3 className="text-base font-bold text-[#0d2d44]">Immediate Contact</h3>
                  <p className="mt-2 text-sm text-[#5c6875]">A direct 24/7 call route for live intake and dispatch support.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="iris-section iris-section-muted">
          <div className="iris-container">
            <h2 className="iris-title">Find Help By Location</h2>
            <p className="iris-subtitle">Browse all {totalLocationCount} active Canadian location pages directly from the homepage.</p>
            <div className="mt-8 grid gap-x-6 gap-y-2 md:grid-cols-3 xl:grid-cols-6">
              {LOCATION_PAGES.map((location) => (
                <Link
                  key={`${location.stateSlug}-${location.citySlug}`}
                  className="text-sm text-[#0d2d44] transition hover:text-[#1e4a63] hover:underline"
                  href={`/${location.stateSlug}/${location.citySlug}/water-damage`}
                >
                  {location.cityName}, {location.stateName}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="iris-section pt-0">
          <div className="iris-container">
            <div className="iris-band-soft rounded-2xl px-6 py-8 text-center">
              <h2 className="iris-title text-2xl">Need Help Deciding?</h2>
              <p className="iris-subtitle mx-auto max-w-3xl">
                If you are not sure which service fits your situation, call now and describe what happened. We will
                guide you to the right response path and begin support immediately.
              </p>
              <div className="iris-actions justify-center">
                <a href={`tel:${EMERGENCY_PHONE_DISPLAY.replace(/[^0-9]/g, "")}`} className="iris-btn iris-btn-primary">
                  Call {EMERGENCY_PHONE_DISPLAY}
                </a>
                <Link href="/services" className="iris-btn iris-btn-secondary">
                  Browse Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
