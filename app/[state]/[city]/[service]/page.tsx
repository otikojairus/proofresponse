import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { getLocation, getServiceBySlug } from "@/lib/restoration-data";
import {
  EMERGENCY_PHONE_DISPLAY,
  EMERGENCY_PHONE_E164,
  SITE_NAME,
  absoluteUrl,
  serviceLocationKeyword,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{ state: string; city: string; service: string }>;
};

export const revalidate = 86400;
const WATER_DAMAGE_KEYWORDS = [
  { phrase: "water damage restoration", range: "$3,000-$25,000+" },
  { phrase: "emergency water removal", range: "$1,500-$7,500" },
  { phrase: "flood cleanup", range: "$2,500-$20,000+" },
  { phrase: "basement flooding cleanup", range: "$2,000-$15,000+" },
  { phrase: "emergency flood restoration", range: "$4,000-$30,000+" },
  { phrase: "water extraction", range: "$1,200-$6,000" },
  { phrase: "flooded basement help", range: "$1,500-$12,000" },
  { phrase: "storm water damage repair", range: "$3,000-$25,000+" },
  { phrase: "burst pipe water cleanup", range: "$2,000-$15,000+" },
  { phrase: "24 hour water damage service", range: "$2,000-$18,000+" },
] as const;
const TRUST_CARDS = [
  {
    icon: "fa-camera",
    title: "Documented Scope",
    body: "Photo evidence, moisture readings, and work logs are captured throughout mitigation.",
  },
  {
    icon: "fa-phone",
    title: "Direct Communication",
    body: "Clear updates from intake through stabilization and next-step planning.",
  },
  {
    icon: "fa-file-invoice",
    title: "Insurance Alignment",
    body: "Structured summaries help keep claim workflows clear and consistent.",
  },
] as const;
const LOCAL_RESPONSE_CARDS = [
  {
    icon: "fa-clock",
    title: "Rapid Intake",
    body: "Emergency triage starts immediately with clear priorities based on safety and property impact.",
  },
  {
    icon: "fa-shield-halved",
    title: "Stabilization First",
    body: "Containment and loss-limiting actions are prioritized to reduce escalation and secondary damage.",
  },
  {
    icon: "fa-file-lines",
    title: "Documented Workflow",
    body: "Scope notes, photo records, and milestone updates keep communication clear throughout mitigation.",
  },
] as const;
const WATER_LOCAL_FACTORS = [
  {
    icon: "fa-bolt",
    title: "Fast scheduling and dispatch",
    body: "Time-sensitive response helps limit material loss and shortens recovery timelines.",
  },
  {
    icon: "fa-clipboard-list",
    title: "Clear extraction scope",
    body: "Defined priorities make emergency water removal and water extraction more efficient.",
  },
  {
    icon: "fa-droplet",
    title: "Drying and moisture tracking",
    body: "Measured drying progress helps teams make better technical decisions day by day.",
  },
  {
    icon: "fa-building",
    title: "Operational impact control",
    body: "Plans are adapted to occupied homes, rentals, and active commercial properties.",
  },
  {
    icon: "fa-file-pen",
    title: "Insurance-ready documentation",
    body: "Structured records support claim communication and next-step approvals.",
  },
  {
    icon: "fa-arrows-rotate",
    title: "Smooth handoff to repairs",
    body: "Mitigation closeout transitions into practical restoration planning without delays.",
  },
] as const;
const WATER_SCENARIO_CARDS = [
  {
    icon: "fa-house-flood-water",
    title: "Basement Flooding Cleanup",
    body: "Standing water, soaked finishes, and hidden moisture pockets require fast extraction and drying plans.",
  },
  {
    icon: "fa-cloud-showers-heavy",
    title: "Storm Water Damage Repair",
    body: "Weather-driven intrusion often affects multiple surfaces and demands quick containment.",
  },
  {
    icon: "fa-faucet-drip",
    title: "Burst Pipe Water Cleanup",
    body: "Pressurized leaks can spread rapidly through walls and ceilings without immediate intervention.",
  },
] as const;
const WATER_COORDINATION_CARDS = [
  {
    icon: "fa-calendar-check",
    title: "Dispatch + Site Stabilization",
    points: [
      "Emergency intake and technician routing",
      "Hazard review and containment steps",
      "Initial extraction and mitigation sequencing",
    ],
  },
  {
    icon: "fa-file-circle-check",
    title: "Reporting + Communication",
    points: [
      "Photo documentation and daily notes",
      "Moisture readings and progress updates",
      "Records suitable for stakeholders and insurance",
    ],
  },
  {
    icon: "fa-screwdriver-wrench",
    title: "Recovery + Next Steps",
    points: [
      "Drying completion and scope closeout",
      "Recommended repair-path planning",
      "Practical guidance to reduce recurrence risk",
    ],
  },
] as const;
const WATER_PREP_STEPS = [
  "Share where water is entering and which areas were affected first.",
  "Move valuables, electronics, and sensitive items away from wet zones if safe.",
  "Take photos of visible damage before cleanup activity starts.",
  "Provide access details, occupancy constraints, and any known shutoff status.",
] as const;
type WaterKeywordSection = {
  id: string;
  icon: string;
  title: string;
  keyword: string;
  intro: string;
  highlights: string[];
  steps: string[];
  reasons: string[];
  cta: string;
};

function buildWaterKeywordSections(cityName: string): WaterKeywordSection[] {
  return [
    {
      id: "water-damage-restoration",
      icon: "fa-house-flood-water",
      title: `Professional Water Damage Restoration in ${cityName}`,
      keyword: `water damage restoration ${cityName}`,
      intro:
        "When water damage hits, response speed determines how much of the structure and contents can be saved. This service covers full-cycle mitigation, sanitization, and reconstruction planning.",
      highlights: [
        "Limits structural weakening in drywall, framing, and subfloors through immediate stabilization.",
        "Reduces mold risk by controlling moisture within the first 24-48 hour window.",
        "Protects salvageable contents with documented handling and cleaning.",
        "Supports faster insurance workflows through clear scope and photo-backed records.",
      ],
      steps: [
        "24/7 emergency contact and on-site moisture-based inspection.",
        "High-volume extraction using truck-mounted pumps and vacuums.",
        "Detailed scope development and insurer-facing documentation.",
        "Drying and dehumidification to industry moisture targets.",
        "Cleaning, deodorizing, and restoration handoff for rebuilds.",
      ],
      reasons: [
        "Local crews familiar with typical property layouts and recurring water risks.",
        "Certified technicians and calibrated drying documentation.",
        "One accountable team from emergency intake through closeout.",
      ],
      cta: `For expert water damage restoration in ${cityName}, call ${SITE_NAME} at ${EMERGENCY_PHONE_DISPLAY}.`,
    },
    {
      id: "emergency-water-removal",
      icon: "fa-pump-soap",
      title: `Emergency Water Removal in ${cityName}`,
      keyword: `emergency water removal ${cityName}`,
      intro:
        "Emergency water removal is the first operational priority after a leak, overflow, or sudden flood. Fast extraction directly lowers secondary damage and total recovery scope.",
      highlights: [
        "Prevents rapid saturation of floors, walls, and insulation cavities.",
        "Stops standing-water conditions that accelerate microbial growth.",
        "Improves salvageability of furniture, electronics, and finishes.",
        "Cuts restoration costs by reducing demolition and rebuild depth.",
      ],
      steps: [
        "Immediate dispatch to active-loss locations.",
        "Source and hazard check: water category, shutoff, and safety controls.",
        "Bulk extraction with high-capacity pump and vacuum systems.",
        "Targeted extraction under flooring edges, padding, and baseboard zones.",
        "Pre-drying prep for structural dehumidification.",
      ],
      reasons: [
        "High-powered equipment far beyond rental-grade extraction tools.",
        "Teams trained to locate hidden moisture migration paths.",
        "Clear communication from first call through transition to drying.",
      ],
      cta: `Need immediate emergency water removal in ${cityName}? ${SITE_NAME} is available 24/7 at ${EMERGENCY_PHONE_DISPLAY}.`,
    },
    {
      id: "flood-cleanup",
      icon: "fa-water",
      title: `Flood Cleanup in ${cityName}`,
      keyword: `flood cleanup ${cityName}`,
      intro:
        "Flood cleanup requires a biohazard-aware process, not surface-level cleanup. Category 3 floodwater can carry contaminants that require controlled removal, disinfection, and material disposal.",
      highlights: [
        "Addresses sewage, bacteria, and contaminant exposure risk.",
        "Removes sludge, silt, and residues that cause odor and corrosion.",
        "Disposes unsalvageable porous materials using compliant procedures.",
        "Restores sanitary conditions before rebuild activity starts.",
      ],
      steps: [
        "Emergency flood response and site safety triage.",
        "Heavy-duty pumping with debris and sediment removal.",
        "Controlled demolition of contaminated porous materials.",
        "EPA-aligned cleaning, sanitizing, and deodorization.",
        "Structural drying and final safety verification.",
      ],
      reasons: [
        "Teams equipped for contaminated-water environments.",
        "End-to-end process management from extraction to sanitized closeout.",
        "Documentation suitable for property owners and claim stakeholders.",
      ],
      cta: `For professional flood cleanup in ${cityName}, contact ${SITE_NAME} now at ${EMERGENCY_PHONE_DISPLAY}.`,
    },
    {
      id: "basement-flooding-cleanup",
      icon: "fa-down-long",
      title: `Basement Flooding Cleanup in ${cityName}`,
      keyword: `basement flooding cleanup ${cityName}`,
      intro:
        "Basement floods are high-risk due to below-grade humidity, restricted airflow, and hidden moisture behind finishes. Cleanup must be aggressive, measured, and mold-preventive.",
      highlights: [
        "Handles hydrostatic intrusion and groundwater-related seepage paths.",
        "Targets moisture trapped in slab interfaces and wall assemblies.",
        "Reduces persistent basement humidity and future odor issues.",
        "Prioritizes mold prevention in poorly ventilated environments.",
      ],
      steps: [
        "Rapid source control and below-grade risk assessment.",
        "Submersible pumping and wet extraction for pooled water.",
        "Debris removal and sanitation prep.",
        "LGR dehumidification and directional airflow planning.",
        "Post-dry inspection with recommendations for prevention upgrades.",
      ],
      reasons: [
        "Specialized basement drying tools and below-grade mitigation workflows.",
        "Strong mold-prevention focus during cleanup and closeout.",
        "Fast turnaround for finished and unfinished basement configurations.",
      ],
      cta: `For expert basement flooding cleanup in ${cityName}, call ${SITE_NAME} at ${EMERGENCY_PHONE_DISPLAY}.`,
    },
    {
      id: "emergency-flood-restoration",
      icon: "fa-house-circle-check",
      title: `Emergency Flood Restoration in ${cityName}`,
      keyword: `emergency flood restoration ${cityName}`,
      intro:
        "Emergency flood restoration connects mitigation and reconstruction into one managed path. Instead of juggling vendors, owners get a single coordinated recovery workflow.",
      highlights: [
        "Combines extraction, drying, and reconstruction planning under one scope.",
        "Reduces schedule gaps between mitigation and repairs.",
        "Improves accountability with one team managing milestones.",
        "Keeps communication centralized for owners and insurers.",
      ],
      steps: [
        "Immediate emergency mitigation and property securing.",
        "Comprehensive moisture and material damage assessment.",
        "Content handling, inventory support, and salvage coordination.",
        "Drying, sanitization, and odor control.",
        "Repair/reconstruction mobilization and final handoff.",
      ],
      reasons: [
        "One-company workflow from first dispatch to final restoration.",
        "Fewer delays and fewer handoff errors across project phases.",
        "Consistent quality controls across mitigation and rebuild stages.",
      ],
      cta: `Need full emergency flood restoration in ${cityName}? Reach ${SITE_NAME} 24/7 at ${EMERGENCY_PHONE_DISPLAY}.`,
    },
    {
      id: "water-extraction",
      icon: "fa-syringe",
      title: `Water Extraction in ${cityName}`,
      keyword: `water extraction ${cityName}`,
      intro:
        "Professional water extraction removes standing water quickly and deeply. This is the technical foundation for every successful drying and mitigation outcome.",
      highlights: [
        "Rapidly reduces pressure load from accumulated standing water.",
        "Pulls moisture from carpet, padding, and hard-surface interfaces.",
        "Limits lateral and upward capillary spread through porous materials.",
        "Improves drying efficiency and lowers overall project duration.",
      ],
      steps: [
        "Rapid deployment with extraction-ready equipment.",
        "Bulk removal with submersible pumps where needed.",
        "Deep extraction using truck-mounted vacuum systems.",
        "Specialty tooling for edges, corners, and floor seams.",
        "Moisture verification for post-extraction planning.",
      ],
      reasons: [
        "Industrial extraction power beyond portable consumer units.",
        "Technicians trained to find hidden water pockets quickly.",
        "Extraction protocols designed to accelerate downstream drying.",
      ],
      cta: `For fast, high-capacity water extraction in ${cityName}, call ${SITE_NAME} at ${EMERGENCY_PHONE_DISPLAY}.`,
    },
    {
      id: "flooded-basement-help",
      icon: "fa-life-ring",
      title: `Flooded Basement Help in ${cityName}`,
      keyword: `flooded basement help ${cityName}`,
      intro:
        "Flooded basement emergencies require immediate, practical support. The priority is safety first, then rapid pumping, salvage triage, and controlled drying.",
      highlights: [
        "Fast action prevents water migration into main living areas.",
        "Early safety checks reduce electrical and environmental hazards.",
        "Structured salvage triage helps protect high-value contents.",
        "Professional drying reduces long-term mold and odor exposure.",
      ],
      steps: [
        "Emergency call intake with safety-first instructions.",
        "Arrival hazard checks before active mitigation work.",
        "High-capacity pumping and exposure of affected surfaces.",
        "Salvage guidance for contents and material triage.",
        "Drying and cleanup setup for full basement recovery.",
      ],
      reasons: [
        "Local response teams with basement-loss experience.",
        "Clear communication during high-stress emergency conditions.",
        "Equipment and staffing built for small and large basement events.",
      ],
      cta: `If you need immediate flooded basement help in ${cityName}, call ${SITE_NAME} now at ${EMERGENCY_PHONE_DISPLAY}.`,
    },
    {
      id: "storm-water-damage-repair",
      icon: "fa-cloud-bolt",
      title: `Storm Water Damage Repair in ${cityName}`,
      keyword: `storm water damage repair ${cityName}`,
      intro:
        "Storm losses often combine exterior breach damage with interior water saturation. Repair requires both emergency property securing and full interior mitigation.",
      highlights: [
        "Handles roofing/siding breach points and interior wet materials together.",
        "Prevents additional rain entry through immediate tarping/board-up actions.",
        "Controls hidden migration in roof decks and wall cavities.",
        "Supports full recovery from weather event to finished repairs.",
      ],
      steps: [
        "24/7 post-storm emergency mobilization.",
        "Immediate roof tarp and opening security work.",
        "Interior extraction, demolition, and structural drying.",
        "Exterior/interior repairs including finishes and weather sealing.",
        "Final walkthrough and quality closeout.",
      ],
      reasons: [
        "Storm-specific response planning for complex dual-damage events.",
        "Single coordination point for emergency and repair phases.",
        "Claim-ready documentation across mitigation and reconstruction.",
      ],
      cta: `For complete storm water damage repair in ${cityName}, contact ${SITE_NAME} at ${EMERGENCY_PHONE_DISPLAY}.`,
    },
    {
      id: "burst-pipe-water-cleanup",
      icon: "fa-faucet",
      title: `Burst Pipe Water Cleanup in ${cityName}`,
      keyword: `burst pipe water cleanup ${cityName}`,
      intro:
        "Burst pipes can release high volumes in minutes and spread loss across multiple rooms or levels. Cleanup must be immediate, controlled, and source-focused.",
      highlights: [
        "Stops ongoing pressurized water spread and rapid saturation.",
        "Improves salvage odds for finishes and contents through fast extraction.",
        "Targets hidden flow paths in walls, ceilings, and utility chases.",
        "Transitions quickly from cleanup into coordinated repair.",
      ],
      steps: [
        "Emergency call with shutoff guidance where possible.",
        "Rapid extraction across all active and migrated wet zones.",
        "Pipe-damage assessment and repair coordination.",
        "Targeted demolition and controlled drying of affected assemblies.",
        "Rebuild and finish restoration after moisture clearance.",
      ],
      reasons: [
        "High-urgency protocols designed specifically for active burst events.",
        "Seamless coordination between water mitigation and repair teams.",
        "Proven workflows for freeze-break and corrosion-related failures.",
      ],
      cta: `For urgent burst pipe water cleanup in ${cityName}, call ${SITE_NAME} immediately at ${EMERGENCY_PHONE_DISPLAY}.`,
    },
    {
      id: "24-hour-water-damage-service",
      icon: "fa-phone-volume",
      title: `24 Hour Water Damage Service in ${cityName}`,
      keyword: `24 hour water damage service ${cityName}`,
      intro:
        "Water emergencies do not follow business hours. True 24/7 service means live intake, active dispatch, and real mitigation starts at any hour.",
      highlights: [
        "Avoids overnight delays that increase structural and microbial risk.",
        "Reduces spread from small incidents before they escalate by morning.",
        "Provides real-time dispatch and on-call crew mobilization.",
        "Supports continuous recovery handoff from night response to daytime work.",
      ],
      steps: [
        "Live emergency call answered by trained dispatch personnel.",
        "Immediate routing of nearest available response crew.",
        "Rapid arrival with extraction and stabilization equipment.",
        "Night-hour mitigation: extraction, containment, and drying setup.",
        "Seamless continuation into daytime restoration operations.",
      ],
      reasons: [
        "True around-the-clock response capability, not just message intake.",
        "Local teams positioned for fast arrival across the service area.",
        "Consistent process quality regardless of time of day.",
      ],
      cta: `For true 24 hour water damage service in ${cityName}, call ${SITE_NAME} anytime at ${EMERGENCY_PHONE_DISPLAY}.`,
    },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state, city, service: serviceSlug } = await params;
  const location = getLocation(state, city);
  const service = getServiceBySlug(serviceSlug);

  if (!location || !service) {
    return {
      title: "Page Not Found",
    };
  }

  const primaryKeyword = serviceLocationKeyword(service.name, location.cityName);
  const secondaryKeyword = service.name;
  const canonicalPath = `/${location.stateSlug}/${location.citySlug}/${service.slug}`;
  const title = `${primaryKeyword} | 24/7 Emergency Response`;
  const description = `${primaryKeyword} for homes and businesses in ${location.cityName}, ${location.stateName}. Call ${EMERGENCY_PHONE_DISPLAY} for immediate dispatch.`;
  const isWaterDamage = service.slug === "water-damage";
  const waterKeywordVariants = isWaterDamage
    ? WATER_DAMAGE_KEYWORDS.map(({ phrase }) => `${phrase} ${location.cityName}`)
    : [];

  return {
    title,
    description,
    keywords: [
      primaryKeyword,
      secondaryKeyword,
      `${secondaryKeyword} ${location.stateName}`,
      ...waterKeywordVariants,
      ...service.seo.relatedTerms,
    ],
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${primaryKeyword} | ${SITE_NAME}`,
      description,
      url: absoluteUrl(canonicalPath),
      type: "article",
      siteName: SITE_NAME,
      locale: "en_CA",
    },
    twitter: {
      card: "summary_large_image",
      title: `${primaryKeyword} | ${SITE_NAME}`,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export default async function LocalServicePage({ params }: PageProps) {
  const { state, city, service: serviceSlug } = await params;
  const location = getLocation(state, city);
  const service = getServiceBySlug(serviceSlug);

  if (!location || !service) {
    notFound();
  }

  const primaryKeyword = serviceLocationKeyword(service.name, location.cityName);
  const secondaryKeyword = service.name;
  const canonicalPath = `/${location.stateSlug}/${location.citySlug}/${service.slug}`;
  const phoneHref = `tel:${EMERGENCY_PHONE_DISPLAY.replace(/[^0-9]/g, "")}`;
  const isWaterDamage = service.slug === "water-damage";
  const waterKeywordSections = isWaterDamage ? buildWaterKeywordSections(location.cityName) : [];

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
        name: secondaryKeyword,
        item: absoluteUrl(`/services/${service.slug}`),
      },
      {
        "@type": "ListItem",
        position: 4,
        name: primaryKeyword,
        item: absoluteUrl(canonicalPath),
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: primaryKeyword,
    serviceType: secondaryKeyword,
    description: `${secondaryKeyword} in ${location.cityName}, ${location.stateName}. ${service.shortDescription}`,
    areaServed: {
      "@type": "City",
      name: location.cityName,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: location.stateName,
      },
    },
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      telephone: EMERGENCY_PHONE_E164,
      url: absoluteUrl("/"),
    },
    url: absoluteUrl(canonicalPath),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${SITE_NAME} ${location.cityName}`,
    telephone: EMERGENCY_PHONE_E164,
    areaServed: [location.cityName, location.stateName],
    url: absoluteUrl(canonicalPath),
    image: absoluteUrl("/next.svg"),
    priceRange: "$$",
    availableService: {
      "@type": "Service",
      name: secondaryKeyword,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: `${faq.q} (${location.cityName})`,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <main className="iris-shell">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      <section className="iris-hero iris-section py-14">
        <div className="iris-container">
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#d7e4ee]">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href={`/services/${service.slug}`} className="hover:text-white">
              {secondaryKeyword}
            </Link>
            <span>/</span>
            <span>{location.cityName}</span>
          </div>

          <h1 className="iris-hero-title mt-4">{primaryKeyword}</h1>
          <p className="iris-hero-lead max-w-3xl">
            If your home or business needs immediate {secondaryKeyword.toLowerCase()} in {location.cityName}, call{" "}
            {EMERGENCY_PHONE_DISPLAY} for live emergency intake and rapid dispatch.
          </p>
          <p className="mt-4 max-w-3xl text-sm text-[#d6e6f0]">
            This local page covers response steps, first-24-hour priorities, scenario-specific guidance, and practical
            decision support for property owners and managers in {location.cityName}.
          </p>

          <div className="iris-actions">
            <a href={phoneHref} className="iris-btn iris-btn-primary">
              Call {EMERGENCY_PHONE_DISPLAY}
            </a>
            <Link href="/services" className="iris-btn iris-btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="iris-section pt-10">
        <div className="iris-container">
          <article className="space-y-7">
            <div className="iris-block">
              <h2 className="iris-title text-2xl">Quick Answer</h2>
              <p className="iris-subtitle">
                <strong>{primaryKeyword}</strong> means rapid mitigation to limit property loss, followed by documented
                cleanup and stabilization.
              </p>
            </div>
            <div className="iris-divider" />

            <div className="iris-band-soft rounded-2xl px-6 py-8">
              <h2 className="iris-title text-2xl">Definition: What Is {secondaryKeyword}?</h2>
              <p className="iris-subtitle">
                {secondaryKeyword} is a structured response including assessment, containment, cleanup, drying or
                decontamination, and restoration planning adapted for {location.cityName} properties.
              </p>
            </div>

            <div className="iris-band rounded-2xl px-6 py-8">
              <div className="iris-section-head">
                <h2 className="iris-title text-2xl">How Response Is Managed In {location.cityName}</h2>
                <p>A structured emergency workflow that balances urgency, safety, and documentation quality.</p>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {LOCAL_RESPONSE_CARDS.map((card) => (
                  <div key={card.title} className="iris-panel">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ffd700] text-[#0d2d44] text-lg">
                      <i className={`fa-solid ${card.icon}`} aria-hidden="true" />
                    </div>
                    <h3 className="mt-3 text-base font-bold text-[#0d2d44]">{card.title}</h3>
                    <p className="mt-1 text-sm text-[#5c6875]">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="iris-band rounded-2xl px-6 py-8">
              <h2 className="iris-title text-2xl">Process in {location.cityName}</h2>
              <ol className="mt-4 space-y-3">
                {service.processSteps.map((step, idx) => (
                  <li key={step} className="iris-panel text-[#243443]">
                    <span className="mr-2 font-semibold text-[#0d2d44]">{idx + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="iris-card iris-card-pad">
              <h2 className="iris-title text-2xl">Trust Signals</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {TRUST_CARDS.map((card) => (
                  <div key={card.title} className="iris-panel">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ffd700] text-[#0d2d44] text-lg">
                      <i className={`fa-solid ${card.icon}`} aria-hidden="true" />
                    </div>
                    <h3 className="mt-3 text-base font-bold text-[#0d2d44]">{card.title}</h3>
                    <p className="mt-1 text-sm text-[#5c6875]">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="iris-band-soft rounded-2xl px-6 py-8">
              <h2 className="iris-title text-2xl">What Happens In The First 24 Hours</h2>
              <p className="iris-subtitle">
                Initial call intake confirms safety concerns, access details, and urgency level. The early response
                window focuses on hazard control, containment, loss-limiting work, and documentation so recovery can
                move forward with fewer delays.
              </p>
            </div>

            {isWaterDamage ? (
              <div className="iris-band-soft rounded-2xl px-6 py-8">
                <div className="iris-section-head">
                  <h2 className="iris-title text-2xl">Common Water Emergency Scenarios In {location.cityName}</h2>
                  <p>High-frequency incidents that usually require urgent stabilization and moisture control.</p>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {WATER_SCENARIO_CARDS.map((card) => (
                    <div key={card.title} className="iris-panel">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ffd700] text-[#0d2d44] text-lg">
                        <i className={`fa-solid ${card.icon}`} aria-hidden="true" />
                      </div>
                      <h3 className="mt-3 text-base font-bold text-[#0d2d44]">{card.title}</h3>
                      <p className="mt-1 text-sm text-[#5c6875]">{card.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {isWaterDamage ? (
              <div className="iris-block">
                <div className="iris-section-head">
                  <h2 className="iris-title text-2xl">Top Priorities During Water Mitigation</h2>
                  <p>What property owners and managers usually care about most in early response.</p>
                </div>
                <div className="iris-factors-list">
                  {WATER_LOCAL_FACTORS.map((factor, index) => (
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
              <div className="iris-band rounded-2xl px-6 py-8">
                <div className="iris-section-head">
                  <h2 className="iris-title text-2xl">What We Coordinate On Water-Damage Calls</h2>
                  <p>From first dispatch to mitigation closeout and recovery handoff.</p>
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
                  <p>Sharing these details early improves dispatch speed and scope accuracy.</p>
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

            {isWaterDamage ? (
              <div className="iris-band rounded-2xl px-6 py-8">
                <h2 className="iris-title text-2xl">Emergency Water Damage & Flood Mitigation In {location.cityName}</h2>
                <p className="iris-subtitle">
                  Common emergency requests include
                  {" "}
                  <strong>water damage restoration {location.cityName}</strong>,
                  {" "}
                  <strong>emergency water removal {location.cityName}</strong>,
                  {" "}
                  <strong>flood cleanup {location.cityName}</strong>, and
                  {" "}
                  <strong>basement flooding cleanup {location.cityName}</strong>. This page also addresses intents like
                  {" "}
                  <strong>burst pipe water cleanup {location.cityName}</strong> and
                  {" "}
                  <strong>24 hour water damage service {location.cityName}</strong>.
                </p>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {WATER_DAMAGE_KEYWORDS.map((item) => (
                    <div key={item.phrase} className="iris-panel">
                      <p className="font-semibold text-[#0d2d44]">
                        {item.phrase} {location.cityName}
                      </p>
                      <p className="mt-1 text-sm text-[#5c6875]">Typical project range: {item.range}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {isWaterDamage ? (
              <div className="iris-band-soft rounded-2xl px-6 py-8">
                <div className="iris-section-head">
                  <h2 className="iris-title text-2xl">Detailed Service Modules For {location.cityName}</h2>
                  <p>Use these sections to find the exact help you need based on your current water emergency.</p>
                </div>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {waterKeywordSections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="iris-panel transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#ffd700] text-[#0d2d44]">
                          <i className={`fa-solid ${section.icon}`} aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-bold text-[#0d2d44]">{section.title}</span>
                          <span className="mt-1 block text-sm text-[#5c6875]">Step-by-step response guidance</span>
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ) : null}

            {isWaterDamage
              ? waterKeywordSections.map((section, sectionIndex) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className={`${sectionIndex % 2 === 0 ? "iris-band" : "iris-band-soft"} scroll-mt-32 rounded-2xl px-6 py-8`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h2 className="iris-title text-2xl">{section.title}</h2>
                      <span className="iris-chip">Emergency Support</span>
                    </div>
                    <p className="iris-subtitle mt-3">{section.intro}</p>

                    <div className="mt-5 grid gap-4 lg:grid-cols-2">
                      <div className="iris-panel">
                        <h3 className="text-base font-bold text-[#0d2d44]">Why This Service Matters</h3>
                        <ul className="mt-3 space-y-2 text-sm text-[#5c6875]">
                          {section.highlights.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="iris-panel">
                        <h3 className="text-base font-bold text-[#0d2d44]">Our Process</h3>
                        <ol className="mt-3 space-y-2 text-sm text-[#5c6875]">
                          {section.steps.map((step, idx) => (
                            <li key={step}>
                              <span className="font-semibold text-[#0d2d44]">{idx + 1}.</span> {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>

                    <div className="mt-4 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
                      <div className="iris-panel">
                        <h3 className="text-base font-bold text-[#0d2d44]">Why {SITE_NAME} In {location.cityName}</h3>
                        <ul className="mt-3 space-y-2 text-sm text-[#5c6875]">
                          {section.reasons.map((reason) => (
                            <li key={reason}>• {reason}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="iris-panel">
                        <h3 className="text-base font-bold text-[#0d2d44]">Ready To Start?</h3>
                        <p className="mt-2 text-sm text-[#5c6875]">{section.cta}</p>
                        <a href={phoneHref} className="iris-btn iris-btn-primary mt-4">
                          Call {EMERGENCY_PHONE_DISPLAY}
                        </a>
                      </div>
                    </div>
                  </section>
                ))
              : null}
          </article>
        </div>
      </section>

      <section className="iris-section pt-0">
        <div className="iris-container">
          <div className="iris-card iris-card-pad">
            <h2 className="iris-title text-2xl">{primaryKeyword} FAQs</h2>
            <div className="mt-6 space-y-4">
              {service.faqs.map((faq) => (
                <details key={faq.q} className="iris-panel">
                  <summary className="cursor-pointer font-semibold text-[#0d2d44]">{faq.q}</summary>
                  <p className="mt-3 text-sm text-[#5c6875]">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
