import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const url: string =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://mk-record.com";
  return [
    {
      url: url,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: url + "/profile",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: url + "/list/blog/1",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: url + "/list/work/1",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: url + "/list/dialy/1",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: url + "/list/research/1",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
