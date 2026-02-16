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

type PageProps = {
  params: Promise<{ service: string }>;
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

export default async function ServiceHubPage({ params }: PageProps) {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  const canonicalPath = `/services/${service.slug}`;

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
    areaServed: LOCATION_PAGES.map((location) => ({
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
    <main className="min-h-screen bg-[#07131c] px-6 py-16 text-slate-100">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />

      <div className="mx-auto max-w-7xl">
        <Link href="/services" className="text-sm font-semibold text-[#fbbf24] hover:brightness-110">
          ← Back to Services
        </Link>

        <section className="relative mt-6 overflow-hidden rounded-2xl border border-[#1e4a63] bg-gradient-to-br from-[#0d2432] via-[#143246] to-[#0d2432] p-8">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#fbbf24]/20 blur-3xl" />
          <div className="absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-[#1e4a63]/30 blur-3xl" />
          <p className="relative text-xs uppercase tracking-[0.2em] text-[#fbbf24]">{service.navLabel} Focus</p>
          <h1 className="relative mt-3 text-4xl font-black text-white">{service.name} Canada</h1>
          <p className="relative mt-4 max-w-3xl text-slate-300">{service.shortDescription}</p>
          <div className="relative mt-6">
            <a
              href={`tel:${EMERGENCY_PHONE_DISPLAY.replace(/[^0-9]/g, "")}`}
              className="inline-flex rounded-md bg-[#fbbf24] px-4 py-2 text-sm font-semibold text-[#1e4a63] hover:brightness-105"
            >
              Call {EMERGENCY_PHONE_DISPLAY}
            </a>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-[#1e4a63] bg-[#0b1f2c] p-6">
          <h2 className="text-2xl font-bold text-white">Definition</h2>
          <p className="mt-3 text-slate-300">
            <strong>{service.name}</strong> is the emergency process of stabilizing a damaged property, mitigating
            immediate risk, and preparing for full recovery. For local intent, choose a city page and call directly.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Service + Location Pages</h2>
          <p className="mt-2 text-slate-300">
            High-intent local pages are structured as <strong>{service.name} + City</strong>.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {LOCATION_PAGES.map((location) => (
              <Link
                key={`${location.stateSlug}-${location.citySlug}`}
                href={`/${location.stateSlug}/${location.citySlug}/${service.slug}`}
                className="rounded-xl border border-[#1e4a63] bg-gradient-to-b from-[#0b1f2c] to-[#081824] p-5 transition hover:-translate-y-0.5 hover:border-[#fbbf24]"
              >
                <h3 className="text-lg font-bold text-white">{serviceLocationKeyword(service.name, location.cityName)}</h3>
                <p className="mt-2 text-sm text-slate-300">{location.regionName}, {location.stateName}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-[#1e4a63] bg-[#0b1f2c] p-6">
          <h2 className="text-2xl font-bold text-white">Process Overview</h2>
          <ol className="mt-4 space-y-3">
            {service.processSteps.map((step, idx) => (
              <li key={step} className="rounded-lg border border-[#1e4a63] bg-[#081824] p-4 text-slate-200">
                <span className="mr-2 font-semibold text-[#fbbf24]">{idx + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
