import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { LOCATION_PAGES, SERVICES, SERVICE_ORDER } from "@/lib/restoration-data";
import { EMERGENCY_PHONE_DISPLAY, SITE_NAME, absoluteUrl } from "@/lib/seo";

const HUMAN_SUPPORT_STEPS = [
  {
    icon: "fa-phone-volume",
    title: "Talk To A Real Person",
    body: "You get a live response team member who helps you slow things down and prioritize what matters first.",
  },
  {
    icon: "fa-triangle-exclamation",
    title: "Safety-First Guidance",
    body: "Before anything else, we walk through immediate safety concerns like active water, electricity, or contamination.",
  },
  {
    icon: "fa-truck-fast",
    title: "Rapid Dispatch",
    body: "A field team is routed fast so stabilization can begin before damage spreads further.",
  },
  {
    icon: "fa-clipboard-check",
    title: "Clear Next Steps",
    body: "You get a practical plan, documentation support, and ongoing updates until recovery is under control.",
  },
] as const;

const WHAT_PEOPLE_NEED = [
  "Someone to answer immediately and take control of the situation",
  "A clear explanation of what happens in the next few hours",
  "Confidence that damage is being contained quickly and properly",
  "Documentation that supports insurance and property decisions",
] as const;

export const metadata: Metadata = {
  title: "24/7 Emergency Restoration Services",
  description:
    "Get fast, human-centered emergency support for water, fire, mold, and hazmat incidents across Canada. Speak with a live team and find the right restoration service path now.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `${SITE_NAME} Emergency Restoration Services`,
    description:
      "Real emergency support across Canada for property owners and managers, with clear service pathways and 24/7 live dispatch.",
    type: "website",
    url: absoluteUrl("/services"),
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} Emergency Restoration Services`,
    description: "Choose the service you need and connect with 24/7 live emergency support.",
  },
  keywords: [
    "emergency restoration services",
    "24/7 restoration response",
    "water fire mold hazmat services",
    ...SERVICE_ORDER.map((serviceSlug) => SERVICES[serviceSlug].name.toLowerCase()),
  ],
};

export default function ServicesPage() {
  const totalLocations = LOCATION_PAGES.length;
  const canadaLocationCount = LOCATION_PAGES.filter((location) => location.countryName === "Canada").length;
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Emergency Restoration Services",
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
    <main className="iris-shell">
      <JsonLd data={listSchema} />

      <section className="iris-hero iris-section py-14">
        <div className="iris-container">
          <h1 className="iris-hero-title mt-5">
            Emergency Help, Without The Guesswork
            <span>Choose The Right Service Path</span>
          </h1>
          <p className="iris-hero-lead max-w-3xl">
            Property emergencies are stressful. This page is built to help you quickly choose the right response path,
            understand what happens next, and reach live support at {EMERGENCY_PHONE_DISPLAY} across Canada.
          </p>
          <p className="mt-4 max-w-3xl text-sm text-[#d6e6f0]">
            Inside this page you can review service pathways, first-response priorities, and post-call expectations so
            you can make a confident decision fast.
          </p>
          <div className="hidden sm:block">
            <div className="iris-actions">
              <a href={`tel:${EMERGENCY_PHONE_DISPLAY.replace(/[^0-9]/g, "")}`} className="iris-btn iris-btn-primary">
                Call {EMERGENCY_PHONE_DISPLAY}
              </a>
              <Link href="/services/water-damage" className="iris-btn iris-btn-secondary">
                Start With Water Damage
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="iris-section pt-10">
        <div className="iris-container space-y-8">
          <div className="iris-band rounded-2xl px-6 py-8">
            <div className="iris-section-head">
              <h2 className="iris-title text-2xl">Coverage Across Canada</h2>
              <p>We support listed Canadian service routes, with structured local pages designed for fast action in urgent situations.</p>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="iris-panel">
                <h3 className="text-base font-bold text-[#0d2d44]">Total Locations</h3>
                <p className="mt-2 text-sm text-[#5c6875]">
                  {totalLocations} city-level service routes currently available through this site.
                </p>
              </div>
              <div className="iris-panel">
                <h3 className="text-base font-bold text-[#0d2d44]">Canada</h3>
                <p className="mt-2 text-sm text-[#5c6875]">
                  {canadaLocationCount} locations supported across provinces and local service pages.
                </p>
              </div>
            </div>
          </div>

          <div className="iris-band-soft rounded-2xl px-6 py-8">
            <div className="iris-section-head">
              <h2 className="iris-title text-2xl">What This Site Offers</h2>
              <p>Each page is built to help users move from uncertainty to action with clear, practical guidance.</p>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <div className="iris-panel">
                <h3 className="text-base font-bold text-[#0d2d44]">Service Guidance</h3>
                <p className="mt-2 text-sm text-[#5c6875]">
                  Clear explanations of water, fire, mold, and hazmat response paths.
                </p>
              </div>
              <div className="iris-panel">
                <h3 className="text-base font-bold text-[#0d2d44]">Location Navigation</h3>
                <p className="mt-2 text-sm text-[#5c6875]">
                  Fast links to city-specific pages across Canadian locations.
                </p>
              </div>
              <div className="iris-panel">
                <h3 className="text-base font-bold text-[#0d2d44]">Emergency Steps</h3>
                <p className="mt-2 text-sm text-[#5c6875]">
                  Action-oriented first-response guidance to reduce avoidable secondary damage.
                </p>
              </div>
              <div className="iris-panel">
                <h3 className="text-base font-bold text-[#0d2d44]">Direct Support</h3>
                <p className="mt-2 text-sm text-[#5c6875]">
                  A direct 24/7 call path for live intake and immediate dispatch coordination.
                </p>
              </div>
            </div>
          </div>

          <div className="iris-block">
            <h2 className="iris-title text-2xl">What Most People Need In The First 10 Minutes</h2>
            <p className="iris-subtitle">
              During an active property incident, the priority is not technical jargon. It is clear direction, real
              support, and immediate action.
            </p>
          </div>
          <div className="iris-divider" />

          <div className="iris-band-soft rounded-2xl px-6 py-8">
            <ul className="grid gap-3 md:grid-cols-2">
              {WHAT_PEOPLE_NEED.map((item) => (
                <li key={item} className="iris-panel text-sm text-[#425264]">
                  <span className="font-semibold text-[#0d2d44]">•</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="iris-section-head">
            <h2 className="iris-title text-2xl">Choose Your Service Path</h2>
            <p>Select the incident type that best matches what you are dealing with right now.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICE_ORDER.map((serviceSlug) => {
              const service = SERVICES[serviceSlug];
              return (
                <Link key={service.slug} href={`/services/${service.slug}`} className="iris-card iris-card-pad">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ffd700] text-[#0d2d44] text-lg">
                    <i className="fa-solid fa-route" aria-hidden="true" />
                  </div>
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-[#1e4a63]">{service.navLabel}</p>
                  <h3 className="mt-2 text-2xl font-bold text-[#0d2d44]">{service.name}</h3>
                  <p className="mt-3 text-[#5c6875]">{service.shortDescription}</p>
                  <span className="iris-btn iris-btn-dark mt-5">Open {service.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="iris-band rounded-2xl px-6 py-8">
            <div className="iris-section-head">
              <h2 className="iris-title text-2xl">What Happens After You Call</h2>
              <p>The process is designed to reduce stress and create clarity from the start.</p>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {HUMAN_SUPPORT_STEPS.map((step) => (
                <div key={step.title} className="iris-panel">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ffd700] text-[#0d2d44] text-lg">
                    <i className={`fa-solid ${step.icon}`} aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-[#0d2d44]">{step.title}</h3>
                  <p className="mt-2 text-sm text-[#5c6875]">{step.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="iris-band-soft rounded-2xl px-6 py-8">
            <h2 className="iris-title text-2xl">If You Are Unsure Which Service To Pick</h2>
            <p className="iris-subtitle">
              That is normal. Just call and describe what happened. We will route you to the right response path and
              make sure the first actions are focused on safety, stabilization, and practical recovery.
            </p>
            <div className="iris-actions">
              <a href={`tel:${EMERGENCY_PHONE_DISPLAY.replace(/[^0-9]/g, "")}`} className="iris-btn iris-btn-primary">
                Speak To Emergency Support
              </a>
              <Link href="/" className="iris-btn iris-btn-dark">
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
