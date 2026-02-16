import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SERVICES, SERVICE_ORDER } from "@/lib/restoration-data";
import { EMERGENCY_PHONE_DISPLAY, SITE_NAME, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Emergency Restoration Service Hubs",
  description:
    "Browse service hubs for emergency water damage restoration, fire damage restoration, mold remediation, and hazmat cleanup across Canadian cities.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `${SITE_NAME} Service Hubs`,
    description:
      "Structured service pages with definitions, process steps, local internal links, and direct emergency call actions.",
    type: "website",
    url: absoluteUrl("/services"),
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} Service Hubs`,
    description: "Open a service hub, pick a city page, and call for emergency dispatch.",
  },
  keywords: [
    "emergency restoration services canada",
    ...SERVICE_ORDER.map((serviceSlug) => SERVICES[serviceSlug].name.toLowerCase()),
  ],
};

export default function ServicesPage() {
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Restoration Service Hubs",
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
    <main className="min-h-screen bg-[#07131c] px-6 py-16 text-slate-100">
      <JsonLd data={listSchema} />
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <Link href="/" className="text-sm font-semibold text-[#fbbf24] hover:brightness-110">
            ← Back to Home
          </Link>
          <h1 className="mt-4 text-4xl font-black">{SITE_NAME} Canadian Service Hubs</h1>
          <p className="mt-3 max-w-3xl text-slate-300">
            Pick a service, select your location page, and call {EMERGENCY_PHONE_DISPLAY} for immediate help.
          </p>
        </div>

        <section className="mb-8 rounded-2xl border border-[#1e4a63] bg-[#0b1f2c] p-6">
          <h2 className="text-2xl font-bold text-white">Quick Answer</h2>
          <p className="mt-3 text-slate-300">
            <strong>Best page structure for emergency intent:</strong> service hub first, then city page with a clear call
            action. Each route in this site supports extractable definitions, process steps, and FAQs.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          {SERVICE_ORDER.map((serviceSlug, idx) => {
            const service = SERVICES[serviceSlug];
            const tones = ["from-[#1e4a63]/35", "from-[#fbbf24]/35", "from-[#1e4a63]/25", "from-[#fbbf24]/25"];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="relative overflow-hidden rounded-2xl border border-[#1e4a63] bg-[#0b1f2c] p-6 transition hover:-translate-y-1 hover:border-[#fbbf24]"
              >
                <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${tones[idx]} to-transparent blur-xl`} />
                <p className="relative text-xs uppercase tracking-[0.2em] text-[#fbbf24]">{service.navLabel}</p>
                <h2 className="relative mt-2 text-2xl font-bold text-white">{service.name}</h2>
                <p className="relative mt-3 text-slate-300">{service.shortDescription}</p>
                <span className="relative mt-5 inline-flex rounded-md bg-[#fbbf24] px-4 py-2 text-sm font-semibold text-[#1e4a63] hover:brightness-105">
                  Open {service.name} Hub
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
