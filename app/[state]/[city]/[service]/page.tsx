import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LOCATION_PAGES, SERVICES, SERVICE_ORDER, getLocation, getServiceBySlug } from "@/lib/restoration-data";

type PageProps = {
  params: Promise<{ state: string; city: string; service: string }>;
};

function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

export async function generateStaticParams() {
  return LOCATION_PAGES.flatMap((location) =>
    SERVICE_ORDER.map((service) => ({
      state: location.stateSlug,
      city: location.citySlug,
      service,
    })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state, city, service: serviceSlug } = await params;
  const location = getLocation(state, city);
  const service = getServiceBySlug(serviceSlug);

  if (!location || !service) {
    return {
      title: "Page Not Found | PROOFRESPONSE",
    };
  }

  const title = `${service.name} in ${location.cityName}, ${location.stateName}, Canada | 24/7 Response`;
  const description = `${service.name} in ${location.cityName}, ${location.stateName}, Canada. ${service.shortDescription}`;
  const canonicalPath = `/${location.stateSlug}/${location.citySlug}/${service.slug}`;

  return {
    title,
    description,
    keywords: [
      `${service.seo.focusKeyphrase} ${location.cityName}`,
      `${location.cityName} ${service.name.toLowerCase()}`,
      `${location.stateName} Canada emergency restoration`,
      ...service.seo.relatedTerms,
    ],
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: `${getSiteUrl()}${canonicalPath}`,
      type: "article",
      siteName: "PROOFRESPONSE Restoration",
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

  return (
    <main className="min-h-screen bg-[#07131c] text-slate-100">
      <section className="relative overflow-hidden border-b border-[#fbbf24]/25 bg-gradient-to-br from-[#0d2432] via-[#143246] to-[#0d2432]">
        <div className="absolute -left-20 top-8 h-60 w-60 rounded-full bg-[#1e4a63]/30 blur-3xl" />
        <div className="absolute -right-20 top-24 h-64 w-64 rounded-full bg-[#fbbf24]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-slate-300">
            <Link href="/" className="text-[#fbbf24] hover:brightness-110">
              Home
            </Link>
            <span>/</span>
            <Link href={`/services/${service.slug}`} className="text-[#fbbf24] hover:brightness-110">
              {service.name}
            </Link>
            <span>/</span>
            <span>{location.cityName}</span>
          </div>

          <p className="mt-6 inline-flex rounded-full border border-[#fbbf24]/40 bg-[#fbbf24]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#fbbf24]">
            {service.slug === "water-damage" ? "Primary Focus" : "Secondary Focus"}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
            {service.name} in {location.cityName}, {location.stateName}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300">{service.heroSecondary}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`tel:${service.emergencyLine.replace(/[^0-9]/g, "")}`} className="rounded-md bg-[#fbbf24] px-5 py-3 text-sm font-semibold text-[#1e4a63] hover:brightness-105">
              Call {service.emergencyLine}
            </a>
            <Link href="/services" className="rounded-md border border-[#1e4a63] px-5 py-3 text-sm font-semibold text-slate-100 hover:border-[#fbbf24] hover:text-[#fbbf24]">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[1.5fr_1fr]">
        <article className="rounded-2xl border border-[#1e4a63] bg-gradient-to-b from-[#0b1f2c] to-[#081824] p-7">
          <h2 className="text-2xl font-bold text-white">
            Local Response in {location.regionName}, {location.countryName}
          </h2>
          <p className="mt-4 text-slate-300">
            Our {service.name.toLowerCase()} team supports residential and commercial properties across {location.cityName}
            and nearby markets in {location.stateName}. Dispatch is prioritized for emergency scenarios with clear
            communication from intake to stabilization.
          </p>
          <p className="mt-4 text-slate-300">
            Water events remain our primary operational focus, with rapid response teams ready for urgent mitigation and
            recovery.
          </p>

          <h3 className="mt-8 text-xl font-bold text-[#fbbf24]">Process</h3>
          <ol className="mt-4 space-y-3">
            {service.processSteps.map((step, idx) => (
              <li key={step} className="rounded-lg border border-[#1e4a63] bg-[#081824] p-4 text-slate-200">
                <span className="mr-2 font-semibold text-[#fbbf24]">{idx + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </article>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-[#1e4a63] bg-[#0b1f2c] p-6">
            <h3 className="text-lg font-bold text-white">Service Mix</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {SERVICE_ORDER.map((serviceKey) => {
                const item = SERVICES[serviceKey];
                const isCurrent = item.slug === service.slug;
                return (
                  <li key={item.slug}>
                    <Link
                      href={`/${location.stateSlug}/${location.citySlug}/${item.slug}`}
                      className={`inline-flex ${isCurrent ? "text-[#fbbf24]" : "text-slate-300 hover:text-white"}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#1e4a63] bg-[#0b1f2c] p-6">
            <h3 className="text-lg font-bold text-white">Nearby Internal Links</h3>
            <p className="mt-2 text-sm text-slate-300">Interlink nearby city pages to strengthen topical clusters.</p>
            <ul className="mt-4 space-y-2 text-sm">
              {LOCATION_PAGES.filter((candidate) => candidate.stateSlug === location.stateSlug)
                .filter((candidate) => candidate.citySlug !== location.citySlug)
                .slice(0, 4)
                .map((candidate) => (
                  <li key={candidate.citySlug}>
                    <Link href={`/${candidate.stateSlug}/${candidate.citySlug}/${service.slug}`} className="text-[#fbbf24] hover:brightness-110">
                      {service.navLabel} in {candidate.cityName}, {candidate.stateName}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl border border-[#1e4a63] bg-[#0b1f2c] p-7">
          <h2 className="text-2xl font-bold text-white">{service.name} FAQs</h2>
          <div className="mt-6 space-y-4">
            {service.faqs.map((faq) => (
              <details key={faq.q} className="rounded-lg border border-[#1e4a63] bg-[#081824] p-4">
                <summary className="cursor-pointer font-semibold text-[#fbbf24]">{faq.q}</summary>
                <p className="mt-3 text-sm text-slate-300">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
