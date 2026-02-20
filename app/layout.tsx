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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W9M6SLS7');`,
          }}
        />
      </head>
      <body className={`${jost.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W9M6SLS7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SiteNavbar />
        {children}
        <a className="sr-only" href={`tel:${EMERGENCY_PHONE_DISPLAY.replace(/[^0-9]/g, "")}`}>
          Call {EMERGENCY_PHONE_DISPLAY}
        </a>
      </body>
    </html>
  );
}
