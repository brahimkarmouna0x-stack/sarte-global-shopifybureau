import type { MetadataRoute } from "next";

import { SITE } from "@/constants";

const SITE_URL = SITE.url;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Disallow all low-value, private, and duplicate paths per SEO best practices.
        // Preserving crawl budget for indexable, high-value pages only.
        disallow: [
          "/api/",
          "/admin/",
          "/account/",
          "/preview/",
          "/_next/static/",
          "/search",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
