import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const sitemapPath = process.env.NEXT_PUBLIC_SITE_URL + "/sitemap.xml";
    return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: sitemapPath,
  };
}
