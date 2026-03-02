import Link from "next/link";
import { SERVICE_ORDER, SERVICES } from "@/lib/restoration-data";
import { EMERGENCY_PHONE_DISPLAY, SITE_NAME } from "@/lib/seo";

const phoneHref = `tel:${EMERGENCY_PHONE_DISPLAY.replace(/[^0-9]/g, "")}`;

export function SiteFooter() {
  return (
    <footer className="iris-footer">
      <div className="iris-container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="iris-footer-title">{SITE_NAME}</p>
            <p className="mt-4 text-sm text-slate-300">
              24/7 emergency restoration dispatch and mitigation planning for homes and commercial sites.
            </p>
            <a href={phoneHref} className="iris-btn iris-btn-primary mt-5">
              Call {EMERGENCY_PHONE_DISPLAY}
            </a>
          </div>

          <div>
            <h3 className="iris-footer-title">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICE_ORDER.map((serviceSlug) => {
                const service = SERVICES[serviceSlug];
                return (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="iris-footer-link">
                      {service.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="iris-footer-title">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="iris-footer-link">Home</Link>
              </li>
              <li>
                <Link href="/services" className="iris-footer-link">Service Hubs</Link>
              </li>
              <li>
                <a href={phoneHref} className="iris-footer-link">Emergency Dispatch</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="iris-footer-title">Emergency Contact</h3>
            <p className="mt-4 text-sm text-slate-300">Need immediate stabilization support?</p>
            <a href={phoneHref} className="iris-footer-link mt-2 block text-lg font-bold text-[#ffd700]">
              {EMERGENCY_PHONE_DISPLAY}
            </a>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400">24/7 intake line</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-5 text-sm text-slate-400">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
