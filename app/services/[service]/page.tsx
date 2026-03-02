import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { LOCATION_PAGES, getServiceBySlug, SERVICE_ORDER } from "@/lib/restoration-data";
import {
  EMERGENCY_PHONE_DISPLAY,
  EMERGENCY_PHONE_E164,
  SITE_NAME,
  absoluteUrl,
  serviceLocationKeyword,
} from "@/lib/seo";

const SERVICE_AREA_SCHEMA_LIMIT = 120;
const SERVICE_LOCATION_PAGE_SIZE = 300;

const COVERAGE_CARDS = [
  {
    icon: "fa-bolt",
    title: "24/7 Dispatch",
    body: "Always-on intake with rapid triage and technician routing.",
  },
  {
    icon: "fa-house",
    title: "Home + Commercial",
    body: "Response models for residential, office, retail, and mixed-use properties.",
  },
  {
    icon: "fa-file-lines",
    title: "Claim-Ready Docs",
    body: "Photo logs, scope notes, and milestone updates for insurance workflows.",
  },
  {
    icon: "fa-location-dot",
    title: "Localized Pages",
    body: "City-based service routes that align with local emergency search intent.",
  },
] as const;

const WATER_DECISION_FACTORS = [
  {
    icon: "fa-bolt",
    title: "Fast scheduling and confirmation",
    body: "Quick dispatch supports recovery timelines and limits avoidable secondary damage.",
  },
  {
    icon: "fa-clipboard-list",
    title: "Clear emergency water removal scope",
    body: "Defined scope helps property owners understand exactly what happens first and why.",
  },
  {
    icon: "fa-shield-halved",
    title: "Qualified response coordination",
    body: "Experienced crews and appropriate equipment improve stabilization outcomes.",
  },
  {
    icon: "fa-file-lines",
    title: "Professional reporting for stakeholders",
    body: "Structured notes and photo records support communication and insurance workflows.",
  },
  {
    icon: "fa-eye",
    title: "Transparent risk visibility",
    body: "Early assessment clarifies immediate hazards and practical next steps.",
  },
  {
    icon: "fa-building",
    title: "Minimal operational disruption",
    body: "Workflows are designed to reduce impact for occupied homes and active businesses.",
  },
  {
    icon: "fa-droplet",
    title: "Drying and moisture tracking",
    body: "Documented drying progress helps guide decisions throughout mitigation.",
  },
  {
    icon: "fa-handshake",
    title: "Communication consistency",
    body: "Owners and managers get clear updates from intake through scope closeout.",
  },
  {
    icon: "fa-money-bill-wave",
    title: "Cost clarity by real damage scope",
    body: "Budget expectations improve when scope is tied to visible and measured conditions.",
  },
  {
    icon: "fa-arrows-rotate",
    title: "Recovery-path coordination",
    body: "After mitigation, planning transitions smoothly into repair and restoration phases.",
  },
] as const;

const WATER_AUDIENCE_CARDS = [
  {
    icon: "fa-building",
    title: "Commercial & Managed Properties",
    points: [
      "Office, retail, and mixed-use facilities",
      "Property managers and maintenance teams",
      "Multi-unit assets with tenant impact",
    ],
  },
  {
    icon: "fa-house",
    title: "Residential & Multi-Family Homes",
    points: [
      "Basement flooding and burst pipe incidents",
      "Appliance leak and overflow events",
      "Storm-related interior water intrusion",
    ],
  },
  {
    icon: "fa-industry",
    title: "Industrial & Specialized Sites",
    points: [
      "Warehouses and operational facilities",
      "Properties with equipment-sensitive zones",
      "Sites needing documented compliance workflows",
    ],
  },
] as const;

const WATER_COORDINATION_CARDS = [
  {
    icon: "fa-calendar-check",
    title: "Dispatch & On-Site Stabilization",
    points: [
      "Rapid intake and priority dispatch",
      "Safety-focused containment and extraction",
      "Immediate mitigation scope alignment",
    ],
  },
  {
    icon: "fa-file-pen",
    title: "Reporting & Documentation",
    points: [
      "Photo logs and affected-area notes",
      "Moisture tracking and process updates",
      "Records suitable for stakeholders and insurers",
    ],
  },
  {
    icon: "fa-screwdriver-wrench",
    title: "Follow-Up Recovery Support",
    points: [
      "Drying completion and scope closeout",
      "Repair-path coordination if required",
      "Guidance to reduce recurrence risk",
    ],
  },
] as const;

const WATER_PREP_STEPS = [
  "Shut off active water sources where safe and possible.",
  "Move valuables and electronics away from wet zones.",
  "Document visible damage with photos before cleanup activity.",
  "Share access constraints, occupancy details, and known source information.",
] as const;

type PageProps = {
  params: Promise<{ service: string }>;
  searchParams: Promise<{ page?: string }>;
};

export async function generateStaticParams() {
  return SERVICE_ORDER.map((service) => ({ service }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const title = `${service.name} Service Areas Across Canada`;
  const description = `${service.name} coverage across Canadian cities. Open a local page and call ${EMERGENCY_PHONE_DISPLAY} for emergency response.`;
  const canonicalPath = `/services/${service.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    keywords: [
      service.name,
      service.seo.focusKeyphrase,
      ...LOCATION_PAGES.slice(0, 8).map((location) => serviceLocationKeyword(service.name, location.cityName)),
    ],
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: absoluteUrl(canonicalPath),
      type: "website",
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ServiceHubPage({ params, searchParams }: PageProps) {
  const { service: serviceSlug } = await params;
  const { page } = await searchParams;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  const parsedPage = Number.parseInt(page ?? "1", 10);
  const currentPage = Number.isFinite(parsedPage) && parsedPage > 0 ? parsedPage : 1;
  const totalPages = Math.max(1, Math.ceil(LOCATION_PAGES.length / SERVICE_LOCATION_PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * SERVICE_LOCATION_PAGE_SIZE;
  const paginatedLocations = LOCATION_PAGES.slice(startIndex, startIndex + SERVICE_LOCATION_PAGE_SIZE);

  const canonicalPath = `/services/${service.slug}`;
  const isWaterDamage = service.slug === "water-damage";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: absoluteUrl("/services"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: absoluteUrl(canonicalPath),
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.shortDescription,
    areaServed: LOCATION_PAGES.slice(0, SERVICE_AREA_SCHEMA_LIMIT).map((location) => ({
      "@type": "City",
      name: location.cityName,
    })),
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      telephone: EMERGENCY_PHONE_E164,
      url: absoluteUrl("/"),
    },
    url: absoluteUrl(canonicalPath),
  };

  return (
    <main className="iris-shell">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />

      <section className="iris-hero iris-section py-14">
        <div className="iris-container">
          <p className="iris-hero-kicker mt-6">{service.navLabel} Focus</p>
          <h1 className="iris-hero-title">
            {service.name}
            <span>Canada Coverage</span>
          </h1>
          <p className="iris-hero-lead max-w-3xl">
            {service.shortDescription} This page includes first-24-hour priorities, scenario-specific guidance,
            process expectations, and service + location routes for fast local navigation.
          </p>
          <p className="mt-4 max-w-3xl text-sm text-[#d6e6f0]">
            Use this hub when you need to understand response flow quickly, compare practical service coverage, and
            move directly to a city-level page for immediate dispatch.
          </p>
          <div className="iris-actions">
            <a href={`tel:${EMERGENCY_PHONE_DISPLAY.replace(/[^0-9]/g, "")}`} className="iris-btn iris-btn-primary">
              Call {EMERGENCY_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="iris-section pt-10">
        <div className="iris-container space-y-8">
          <div className="iris-block">
            <h2 className="iris-title text-2xl">Definition</h2>
            <p className="iris-subtitle">
              <strong>{service.name}</strong> is the emergency process of stabilizing damaged property, reducing
              immediate risk, and preparing for full recovery with documentation.
            </p>
          </div>
          <div className="iris-divider" />

          <div className="iris-band-soft rounded-2xl px-6 py-8">
            <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <h2 className="iris-title text-2xl">What Happens In The First 24 Hours</h2>
                <p className="iris-subtitle">
                  Immediate intake, hazard control, and rapid on-site stabilization are prioritized first. Teams then
                  transition into technical mitigation steps such as containment, removal, drying, decontamination, and
                  recovery planning. This sequence keeps losses from compounding and supports clearer insurance workflows.
                </p>
              </div>
              <div className="iris-panel">
                <h3 className="text-base font-bold text-[#0d2d44]">First-Window Priorities</h3>
                <ul className="mt-3 space-y-2 text-sm text-[#5c6875]">
                  <li>• Rapid hazard triage and source control</li>
                  <li>• Immediate extraction and containment setup</li>
                  <li>• Moisture mapping for hidden spread zones</li>
                  <li>• Clear communication and documentation start</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {COVERAGE_CARDS.map((card) => (
                <div key={card.title} className="iris-card iris-card-pad">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ffd700] text-[#0d2d44] text-lg">
                    <i className={`fa-solid ${card.icon}`} aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-[#0d2d44]">{card.title}</h3>
                  <p className="mt-1 text-sm text-[#5c6875]">{card.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="iris-band-soft rounded-2xl px-6 py-8">
            <h2 className="iris-title text-2xl">Property Types And Incident Scenarios</h2>
            <p className="iris-subtitle">
              Service delivery is adapted for homes, condos, offices, retail spaces, warehouses, institutional
              facilities, and mixed-use assets. Scope planning accounts for building occupancy, access constraints,
              mechanical systems, affected materials, and urgency level.
            </p>
          </div>

          {isWaterDamage ? (
            <div className="iris-band rounded-2xl px-6 py-8">
              <h2 className="iris-title text-2xl">Emergency Water Damage & Flood Mitigation</h2>
              <p className="iris-subtitle">
                Water incidents escalate quickly. A proper response starts with emergency water removal and controlled
                water extraction, then moves into structural drying, sanitization, and restoration planning. Whether
                the source is storm intrusion, a failed appliance line, or a burst pipe, fast flood cleanup reduces
                secondary damage and shortens recovery timelines.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="iris-panel">
                  <h3 className="text-lg font-bold text-[#0d2d44]">When To Call 24/7</h3>
                  <p className="mt-2 text-sm text-[#5c6875]">
                    Active leaks, standing water, wet drywall, ceiling staining, flooring lift, or musty odor after a
                    leak all indicate immediate action is needed. These are common triggers for 24 hour water damage
                    service requests.
                  </p>
                </div>
                <div className="iris-panel">
                  <h3 className="text-lg font-bold text-[#0d2d44]">Common Emergency Scenarios</h3>
                  <p className="mt-2 text-sm text-[#5c6875]">
                    Basement flooding cleanup, storm water damage repair, and burst pipe water cleanup are the most
                    frequent high-urgency calls. Each scenario needs different containment and drying tactics.
                  </p>
                </div>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div className="iris-panel">
                  <h3 className="text-base font-bold text-[#0d2d44]">Typical Cost Driver: Scope</h3>
                  <p className="mt-2 text-sm text-[#5c6875]">
                    Smaller isolated losses can begin around $1,200-$6,000, while broader flood restoration projects
                    may range from $4,000-$30,000+ depending on material impact and contamination level.
                  </p>
                </div>
                <div className="iris-panel">
                  <h3 className="text-base font-bold text-[#0d2d44]">Typical Cost Driver: Area</h3>
                  <p className="mt-2 text-sm text-[#5c6875]">
                    Basement and multi-room events often increase drying duration and demolition scope, commonly
                    pushing project ranges into $2,000-$15,000+ or higher for severe incidents.
                  </p>
                </div>
                <div className="iris-panel">
                  <h3 className="text-base font-bold text-[#0d2d44]">Typical Cost Driver: Urgency</h3>
                  <p className="mt-2 text-sm text-[#5c6875]">
                    Delays increase moisture spread, microbial growth risk, and material loss. Early mitigation is
                    usually the most cost-efficient decision in flood cleanup and restoration.
                  </p>
                </div>
              </div>
            </div>
          ) : null}

          {isWaterDamage ? (
            <div className="iris-block">
              <div className="iris-section-head">
                <h2 className="iris-title text-2xl">The 10 Factors Property Owners Care About Most</h2>
                <p>Ordered by importance during water emergencies.</p>
              </div>
              <div className="iris-factors-list">
                {WATER_DECISION_FACTORS.map((factor, index) => (
                  <div key={factor.title} className="iris-factor-item">
                    <div className="iris-factor-icon">
                      <i className={`fa-solid ${factor.icon}`} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="iris-factor-title">
                        {index + 1}. {factor.title}
                      </p>
                      <p className="iris-factor-body">{factor.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {isWaterDamage ? (
            <div className="iris-band-soft rounded-2xl px-6 py-8">
              <div className="iris-section-head">
                <h2 className="iris-title text-2xl">Who Needs Water Damage Restoration</h2>
                <p>Any property where water exposure can affect safety, operations, or asset value.</p>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {WATER_AUDIENCE_CARDS.map((card) => (
                  <div key={card.title} className="iris-panel">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ffd700] text-[#0d2d44] text-lg">
                      <i className={`fa-solid ${card.icon}`} aria-hidden="true" />
                    </div>
                    <h3 className="mt-3 text-base font-bold text-[#0d2d44]">{card.title}</h3>
                    <ul className="mt-2 space-y-1 text-sm text-[#5c6875]">
                      {card.points.map((point) => (
                        <li key={point}>• {point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {isWaterDamage ? (
            <div className="iris-band rounded-2xl px-6 py-8">
              <div className="iris-section-head">
                <h2 className="iris-title text-2xl">What We Coordinate</h2>
                <p>Full-cycle support from emergency mitigation through documented handoff.</p>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {WATER_COORDINATION_CARDS.map((card) => (
                  <div key={card.title} className="iris-card iris-card-pad">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ffd700] text-[#0d2d44] text-lg">
                      <i className={`fa-solid ${card.icon}`} aria-hidden="true" />
                    </div>
                    <h3 className="mt-3 text-base font-bold text-[#0d2d44]">{card.title}</h3>
                    <ul className="mt-2 space-y-1 text-sm text-[#5c6875]">
                      {card.points.map((point) => (
                        <li key={point}>• {point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {isWaterDamage ? (
            <div className="iris-band-soft rounded-2xl px-6 py-8">
              <div className="iris-section-head">
                <h2 className="iris-title text-2xl">How To Prepare For Emergency Water Response</h2>
                <p>Sharing the right details upfront improves response speed and scope accuracy.</p>
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {WATER_PREP_STEPS.map((step, index) => (
                  <div key={step} className="iris-card iris-card-pad">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1e4a63]">Step {index + 1}</p>
                    <p className="mt-2 text-sm font-medium text-[#243443]">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div>
            <h2 className="iris-title text-2xl">Service + Location Pages</h2>
            <p className="iris-subtitle">
              Browse all local pages by location.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
              {paginatedLocations.map((location) => (
                <li key={`${location.stateSlug}-${location.citySlug}`} className="border-b border-[#d8e2ea] pb-2">
                  <Link
                    href={`/${location.stateSlug}/${location.citySlug}/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0d2d44] hover:text-[#1e4a63]"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#ffd700] text-[#0d2d44]">
                      <i className="fa-solid fa-link text-[0.65rem]" aria-hidden="true" />
                    </span>
                    <span>{location.cityName}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-[#5c6875]">
              <p>
                Showing {startIndex + 1}-{startIndex + paginatedLocations.length} of {LOCATION_PAGES.length} locations.
              </p>
              <div className="flex items-center gap-2">
                {safePage > 1 ? (
                  <Link
                    href={safePage - 1 === 1 ? `/services/${service.slug}` : `/services/${service.slug}?page=${safePage - 1}`}
                    className="iris-btn iris-btn-dark"
                  >
                    Previous
                  </Link>
                ) : null}
                <span>
                  Page {safePage} of {totalPages}
                </span>
                {safePage < totalPages ? (
                  <Link href={`/services/${service.slug}?page=${safePage + 1}`} className="iris-btn iris-btn-dark">
                    Next
                  </Link>
                ) : null}
              </div>
            </div>
          </div>

          <div className="iris-band rounded-2xl px-6 py-8">
            <h2 className="iris-title text-2xl">Process Overview</h2>
            <ol className="mt-4 space-y-3">
              {service.processSteps.map((step, idx) => (
                <li key={step} className="iris-panel text-[#243443]">
                  <span className="mr-2 font-semibold text-[#0d2d44]">{idx + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="iris-section iris-final-cta">
        <div className="iris-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="iris-title">Request A Fast Quote</h2>
            <p className="mt-4 text-lg text-slate-200">
              If you need rapid coordination with clear reporting and reliable scheduling, request a fast quote now.
            </p>
            <div className="iris-actions mt-8 justify-center">
              <a href={`tel:${EMERGENCY_PHONE_DISPLAY.replace(/[^0-9]/g, "")}`} className="iris-btn iris-btn-primary">
                Get Fast Quote
              </a>
              <a href={`tel:${EMERGENCY_PHONE_DISPLAY.replace(/[^0-9]/g, "")}`} className="iris-btn iris-btn-secondary">
                Call A Coordinator
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-300">
              Important: Residential and commercial properties. Emergency mitigation and restoration coordination support.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
