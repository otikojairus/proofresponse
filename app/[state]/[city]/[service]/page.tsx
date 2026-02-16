import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { LOCATION_PAGES, SERVICES, SERVICE_ORDER, getLocation, getServiceBySlug } from "@/lib/restoration-data";
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
      title: "Page Not Found",
    };
  }

  const primaryKeyword = serviceLocationKeyword(service.name, location.cityName);
  const secondaryKeyword = service.name;
  const canonicalPath = `/${location.stateSlug}/${location.citySlug}/${service.slug}`;
  const title = `${primaryKeyword} | 24/7 Emergency Response`;
  const description = `${primaryKeyword} for homes and businesses in ${location.cityName}, ${location.stateName}. Call ${EMERGENCY_PHONE_DISPLAY} for immediate dispatch.`;

  return {
    title,
    description,
    keywords: [
      primaryKeyword,
      secondaryKeyword,
      `${secondaryKeyword} ${location.stateName}`,
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
    <main className="min-h-screen bg-[#07131c] text-slate-100">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

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
              {secondaryKeyword}
            </Link>
            <span>/</span>
            <span>{location.cityName}</span>
          </div>

          <p className="mt-6 inline-flex rounded-full border border-[#fbbf24]/40 bg-[#fbbf24]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#fbbf24]">
            Primary Keyword: {primaryKeyword}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">{primaryKeyword}</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300">
            Secondary keyword: <strong>{secondaryKeyword}</strong>. Call {EMERGENCY_PHONE_DISPLAY} to start emergency
            intake in {location.cityName}, {location.stateName}.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={phoneHref} className="rounded-md bg-[#fbbf24] px-5 py-3 text-sm font-semibold text-[#1e4a63] hover:brightness-105">
              Call {EMERGENCY_PHONE_DISPLAY}
            </a>
            <Link href="/services" className="rounded-md border border-[#1e4a63] px-5 py-3 text-sm font-semibold text-slate-100 hover:border-[#fbbf24] hover:text-[#fbbf24]">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[1.5fr_1fr]">
        <article className="space-y-8">
          <div className="rounded-2xl border border-[#1e4a63] bg-gradient-to-b from-[#0b1f2c] to-[#081824] p-7">
            <h2 className="text-2xl font-bold text-white">Quick Answer</h2>
            <p className="mt-4 text-slate-300">
              <strong>{primaryKeyword}</strong> means rapid mitigation to limit property loss, followed by documented
              cleanup and stabilization. Immediate phone intake improves dispatch speed and reduces secondary damage risk.
            </p>
          </div>

          <div className="rounded-2xl border border-[#1e4a63] bg-gradient-to-b from-[#0b1f2c] to-[#081824] p-7">
            <h2 className="text-2xl font-bold text-white">Definition: What Is {secondaryKeyword}?</h2>
            <p className="mt-4 text-slate-300">
              {secondaryKeyword} is the structured response to property damage events, including assessment,
              containment, cleanup, drying or decontamination, and restoration planning. In {location.cityName}, this
              process is adapted to local property conditions and urgency level.
            </p>
          </div>

          <div className="rounded-2xl border border-[#1e4a63] bg-gradient-to-b from-[#0b1f2c] to-[#081824] p-7">
            <h2 className="text-2xl font-bold text-white">Process in {location.cityName}</h2>
            <ol className="mt-4 space-y-3">
              {service.processSteps.map((step, idx) => (
                <li key={step} className="rounded-lg border border-[#1e4a63] bg-[#081824] p-4 text-slate-200">
                  <span className="mr-2 font-semibold text-[#fbbf24]">{idx + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-[#1e4a63] bg-gradient-to-b from-[#0b1f2c] to-[#081824] p-7">
            <h2 className="text-2xl font-bold text-white">Trust Signals</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li className="rounded-lg border border-[#1e4a63] bg-[#081824] p-4">
                Scope documentation includes photos, condition notes, and step-by-step work records.
              </li>
              <li className="rounded-lg border border-[#1e4a63] bg-[#081824] p-4">
                Communication stays direct from intake through stabilization and next-step planning.
              </li>
              <li className="rounded-lg border border-[#1e4a63] bg-[#081824] p-4">
                Insurance-facing summaries are prepared to support clear claim workflows.
              </li>
            </ul>
          </div>
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
                      {serviceLocationKeyword(item.name, location.cityName)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#1e4a63] bg-[#0b1f2c] p-6">
            <h3 className="text-lg font-bold text-white">Nearby Internal Links</h3>
            <p className="mt-2 text-sm text-slate-300">Same-service city pages in {location.stateName}.</p>
            <ul className="mt-4 space-y-2 text-sm">
              {LOCATION_PAGES.filter((candidate) => candidate.stateSlug === location.stateSlug)
                .filter((candidate) => candidate.citySlug !== location.citySlug)
                .slice(0, 6)
                .map((candidate) => (
                  <li key={candidate.citySlug}>
                    <Link href={`/${candidate.stateSlug}/${candidate.citySlug}/${service.slug}`} className="text-[#fbbf24] hover:brightness-110">
                      {serviceLocationKeyword(service.name, candidate.cityName)}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#1e4a63] bg-[#0b1f2c] p-6">
            <h3 className="text-lg font-bold text-white">Call Priority</h3>
            <p className="mt-2 text-sm text-slate-300">Primary intent on this page is immediate phone contact.</p>
            <a href={phoneHref} className="mt-4 inline-flex rounded-md bg-[#fbbf24] px-4 py-2 text-sm font-semibold text-[#1e4a63] hover:brightness-105">
              Call {EMERGENCY_PHONE_DISPLAY}
            </a>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl border border-[#1e4a63] bg-[#0b1f2c] p-7">
          <h2 className="text-2xl font-bold text-white">{primaryKeyword} FAQs</h2>
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
