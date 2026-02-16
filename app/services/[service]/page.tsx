import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LOCATION_PAGES, getServiceBySlug, SERVICE_ORDER } from "@/lib/restoration-data";

type PageProps = {
  params: Promise<{ service: string }>;
};

function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

export async function generateStaticParams() {
  return SERVICE_ORDER.map((service) => ({ service }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return {
      title: "Service Not Found | restoxpertrestoration",
    };
  }

  const title = `${service.name} Service Areas | restoxpertrestoration`;
  const description = `Emergency ${service.name.toLowerCase()} coverage across major Canadian cities.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${getSiteUrl()}/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServiceHubPage({ params }: PageProps) {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#07131c] px-6 py-16 text-slate-100">
      <div className="mx-auto max-w-7xl">
        <Link href="/services" className="text-sm font-semibold text-[#fbbf24] hover:brightness-110">
          ← Back to Services
        </Link>

        <section className="relative mt-6 overflow-hidden rounded-2xl border border-[#1e4a63] bg-gradient-to-br from-[#0d2432] via-[#143246] to-[#0d2432] p-8">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#fbbf24]/20 blur-3xl" />
          <div className="absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-[#1e4a63]/30 blur-3xl" />
          <p className="relative text-xs uppercase tracking-[0.2em] text-[#fbbf24]">{service.navLabel} Focus</p>
          <h1 className="relative mt-3 text-4xl font-black text-white">{service.name}</h1>
          <p className="relative mt-4 max-w-3xl text-slate-300">{service.shortDescription}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Live Canadian City Pages</h2>
          <p className="mt-2 text-slate-300">Find local emergency response coverage by city.</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {LOCATION_PAGES.map((location) => (
              <Link
                key={`${location.stateSlug}-${location.citySlug}`}
                href={`/${location.stateSlug}/${location.citySlug}/${service.slug}`}
                className="rounded-xl border border-[#1e4a63] bg-gradient-to-b from-[#0b1f2c] to-[#081824] p-5 transition hover:-translate-y-0.5 hover:border-[#fbbf24]"
              >
                <h3 className="text-lg font-bold text-white">{location.cityName}</h3>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
