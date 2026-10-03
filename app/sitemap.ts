import { MetadataRoute } from "next";

const BASE = "https://mohamed-elshafey.vercel.app";
const UPDATED = new Date("2026-10-03");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: UPDATED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE}/about`,
      lastModified: UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/experience`,
      lastModified: UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/projects`,
      lastModified: UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/education`,
      lastModified: UPDATED,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE}/contact`,
      lastModified: UPDATED,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
