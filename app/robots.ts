import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.diversojob.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/page",
        "/forgot-password",
        "/update-password",
        "/auth/error",
        "/auth/confirm",
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
