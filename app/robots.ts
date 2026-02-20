import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: [
          "/cgi-bin",
          "/wp-",
          "/?s=",
          "*&s=",
          "/author/",
          "*?attachment_id=",
          "*/feed",
          "*/rss",
          "*/embed",
        ],
        allow: [
          "/wp-content/uploads/",
          "/wp-content/themes/",
          "/*/*.js",
          "/*/*.css",
          "/wp-*.png",
          "/wp-*.jpg",
          "/wp-*.jpeg",
          "/wp-*.gif",
          "/wp-*.svg",
          "/wp-*.pdf",
        ],
      },
      { userAgent: "facebookexternalhit", allow: "/" },
      { userAgent: "Twitterbot", allow: "/" },
      { userAgent: "LinkedInBot", allow: "/" },
      { userAgent: "WhatsApp", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
  };
}
