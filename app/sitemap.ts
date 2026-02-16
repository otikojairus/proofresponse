import type { MetadataRoute } from "next";
import { LOCATION_PAGES, SERVICE_ORDER } from "@/lib/restoration-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const baseRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const serviceHubs: MetadataRoute.Sitemap = SERVICE_ORDER.map((service) => ({
    url: `${siteUrl}/services/${service}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: service === "water-damage" ? 0.95 : 0.8,
  }));

  const locationPages: MetadataRoute.Sitemap = LOCATION_PAGES.flatMap((location) =>
    SERVICE_ORDER.map((service) => ({
      url: `${siteUrl}/${location.stateSlug}/${location.citySlug}/${service}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: service === "water-damage" ? 0.9 : 0.75,
    })),
  );

  return [...baseRoutes, ...serviceHubs, ...locationPages];
}
