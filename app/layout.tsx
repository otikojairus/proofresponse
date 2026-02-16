import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { SiteNavbar } from "@/components/site-navbar";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "restoxpertrestoration",
    template: "%s | restoxpertrestoration",
  },
  description:
    "Emergency water damage, fire damage, mold remediation, and hazmat cleanup services across Canada.",
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
      </body>
    </html>
  );
}
