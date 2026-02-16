import Link from "next/link";
import { SERVICES, SERVICE_ORDER } from "@/lib/restoration-data";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#07131c] px-6 py-16 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <Link href="/" className="text-sm font-semibold text-[#fbbf24] hover:brightness-110">
            ← Back to Home
          </Link>
          <h1 className="mt-4 text-4xl font-black">PROOFRESPONSE Canadian Service Hubs</h1>
          <p className="mt-3 max-w-3xl text-slate-300">
            Dedicated water damage, fire damage, mold remediation, and hazmat cleanup services across Canada.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {SERVICE_ORDER.map((serviceSlug, idx) => {
            const service = SERVICES[serviceSlug];
            const tones = ["from-[#1e4a63]/35", "from-[#fbbf24]/35", "from-[#1e4a63]/25", "from-[#fbbf24]/25"];
            return (
              <article key={service.slug} className="relative overflow-hidden rounded-2xl border border-[#1e4a63] bg-[#0b1f2c] p-6">
                <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${tones[idx]} to-transparent blur-xl`} />
                <p className="relative text-xs uppercase tracking-[0.2em] text-[#fbbf24]">{service.navLabel}</p>
                <h2 className="relative mt-2 text-2xl font-bold text-white">{service.name}</h2>
                <p className="relative mt-3 text-slate-300">{service.shortDescription}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="relative mt-5 inline-flex rounded-md bg-[#fbbf24] px-4 py-2 text-sm font-semibold text-[#1e4a63] hover:brightness-105"
                >
                  Open {service.name} Hub
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
