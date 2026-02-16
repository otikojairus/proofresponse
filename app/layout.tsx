import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { SiteNavbar } from "@/components/site-navbar";
import {
  EMERGENCY_PHONE_DISPLAY,
  SITE_NAME,
  absoluteUrl,
  getSiteUrl,
} from "@/lib/seo";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${SITE_NAME} | Emergency Restoration Services`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "24/7 emergency water damage restoration, fire damage restoration, mold remediation, and hazmat cleanup across Canadian cities.",
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: `${SITE_NAME} | Emergency Restoration Services`,
    description:
      "Emergency-first restoration services with fast dispatch, documented process steps, and direct call support.",
    url: absoluteUrl("/"),
    siteName: SITE_NAME,
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Emergency Restoration Services`,
    description:
      "Call for immediate dispatch for water damage, fire damage, mold remediation, and hazmat cleanup.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} antialiased`}>
        <SiteNavbar />
        {children}
        <a className="sr-only" href={`tel:${EMERGENCY_PHONE_DISPLAY.replace(/[^0-9]/g, "")}`}>
          Call {EMERGENCY_PHONE_DISPLAY}
        </a>
      </body>
    </html>
  );
}
