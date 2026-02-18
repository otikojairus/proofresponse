"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SERVICES, SERVICE_ORDER } from "@/lib/restoration-data";

const phoneDisplay = "(888) 480-7473";
const phoneHref = "tel:8884807473";

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
      <header className="sticky top-0 z-40 border-b border-[#fbbf24]/30 bg-[#07131c]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-3" onClick={() => setIsDrawerOpen(false)}>
            <div>
              <p className="text-base font-extrabold tracking-wide text-[#fbbf24] sm:text-lg">RESTOXPERTRESTORATION</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {SERVICE_ORDER.map((serviceSlug) => {
              const service = SERVICES[serviceSlug];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-slate-200 transition hover:bg-[#1e4a63]/30 hover:text-[#fbbf24]"
                >
                  {service.navLabel}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <a
              href={phoneHref}
              className="rounded-md bg-[#fbbf24] px-4 py-2 text-sm font-semibold text-[#1e4a63] transition hover:brightness-105"
            >
              Call 24/7
            </a>
          </div>

          <button
            type="button"
            aria-expanded={isDrawerOpen}
            aria-label="Open navigation menu"
            onClick={() => setIsDrawerOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-100 md:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-5 flex-col gap-1.5">
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
            </div>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 md:hidden transition-[visibility] duration-300 ${
          isDrawerOpen ? "visible" : "invisible"
        }`}
        role={isDrawerOpen ? "dialog" : undefined}
        aria-modal={isDrawerOpen}
        aria-hidden={!isDrawerOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            isDrawerOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsDrawerOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm border-l border-[#1e4a63] bg-[#081824] p-6 transition-transform duration-300 ease-out ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.2em] text-[#fbbf24]">Services</p>
            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              className="rounded-md px-2 py-1 text-sm text-slate-300"
            >
              X
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
                  className="rounded-md border border-[#1e4a63] bg-[#0b1f2c] px-4 py-3 text-base font-semibold text-slate-100"
                >
                  {service.name}
                </Link>
              );
            })}
          </nav>
          <a
            href={phoneHref}
            className="mt-6 block rounded-md bg-[#fbbf24] px-4 py-3 text-center text-base font-semibold text-[#1e4a63]"
          >
            Call {phoneDisplay}
          </a>
        </div>
      </div>

      <a
        href={phoneHref}
        className="fixed bottom-3 left-1/2 z-40 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 rounded-xl bg-[#fbbf24] px-5 py-3 text-center text-sm font-extrabold tracking-wide text-[#1e4a63] shadow-xl shadow-black/40 md:hidden"
      >
        Call Now: {phoneDisplay}
      </a>
      <a
        href={phoneHref}
        className="fixed bottom-6 right-6 z-40 hidden rounded-xl bg-[#fbbf24] px-6 py-3 text-sm font-extrabold tracking-wide text-[#1e4a63] shadow-xl shadow-black/40 transition hover:brightness-105 md:inline-flex"
      >
        Call Now: {phoneDisplay}
      </a>
    </>
  );
}
