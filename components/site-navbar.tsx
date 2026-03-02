"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SERVICES, SERVICE_ORDER } from "@/lib/restoration-data";
import { EMERGENCY_PHONE_DISPLAY, SITE_NAME } from "@/lib/seo";

const phoneHref = `tel:${EMERGENCY_PHONE_DISPLAY.replace(/[^0-9]/g, "")}`;

export function SiteNavbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-[#ffd700]/30 bg-white/95 shadow-[0_8px_26px_rgba(13,45,68,0.1)] backdrop-blur-xl">
        <div className="iris-container flex min-h-[82px] items-center gap-4 py-3">
          <Link href="/" onClick={() => setIsDrawerOpen(false)} className="shrink-0">
            <p className="text-sm font-black tracking-[0.12em] text-[#0d2d44] sm:text-base">{SITE_NAME}</p>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {SERVICE_ORDER.map((serviceSlug) => {
              const service = SERVICES[serviceSlug];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="rounded-lg border border-transparent px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-slate-700 transition hover:border-[#0d2d44]/12 hover:bg-[#0d2d44]/5 hover:text-[#0d2d44]"
                >
                  {service.navLabel}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto hidden items-center gap-2 sm:flex">
            <a href={phoneHref} className="iris-btn iris-btn-primary">
              Call 24/7
            </a>
            <Link href="/services" className="iris-btn iris-btn-dark">
              Service Hubs
            </Link>
          </div>

          <button
            type="button"
            aria-expanded={isDrawerOpen}
            aria-label="Open navigation menu"
            onClick={() => setIsDrawerOpen((open) => !open)}
            className="ml-auto inline-flex items-center justify-center p-1 text-2xl text-[#0d2d44] lg:hidden"
          >
            <i className="fa-solid fa-bars" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-[visibility] duration-300 ${isDrawerOpen ? "visible" : "invisible"}`}
        role={isDrawerOpen ? "dialog" : undefined}
        aria-modal={isDrawerOpen}
        aria-hidden={!isDrawerOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setIsDrawerOpen(false)}
          className={`absolute inset-0 bg-black/55 transition-opacity duration-300 ${isDrawerOpen ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[86%] max-w-sm overflow-y-auto border-l border-[#dbe2ea] bg-white p-6 transition-transform duration-300 ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0d2d44]">Services</p>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsDrawerOpen(false)}
              className="inline-flex items-center justify-center p-1 text-xl text-slate-500"
            >
              <i className="fa-solid fa-xmark" aria-hidden="true" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-2">
            {SERVICE_ORDER.map((serviceSlug) => {
              const service = SERVICES[serviceSlug];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={() => setIsDrawerOpen(false)}
                  className="rounded-xl border border-[#dbe2ea] bg-gradient-to-b from-[#f8fbff] to-white px-4 py-3 text-sm font-semibold text-[#102030]"
                >
                  {service.name}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 grid gap-2">
            <a href={phoneHref} className="iris-btn iris-btn-primary">
              Call {EMERGENCY_PHONE_DISPLAY}
            </a>
            <Link href="/services" onClick={() => setIsDrawerOpen(false)} className="iris-btn iris-btn-dark">
              View Service Hubs
            </Link>
          </div>
        </div>
      </div>

      <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 sm:hidden">
        <a href={phoneHref} className="iris-btn iris-btn-primary shadow-lg">
          Call Now
        </a>
        <Link href="/services" aria-label="Open services page" className="iris-btn iris-btn-dark shadow-lg">
          SERVICES
        </Link>
      </div>
    </>
  );
}
