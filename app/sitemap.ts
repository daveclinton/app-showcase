import type { MetadataRoute } from "next";

import { getPublishedBlogPosts } from "@/lib/blog-posts";
import { absoluteUrl } from "@/lib/site";

const publicRoutes = [
  "",
  "/about",
  "/brand",
  "/contact",
  "/creators",
  "/how-it-works",
  "/iwi-funders",
  "/partner",
  "/privacy-policy",
  "/terms-of-use",
  "/blog",
  "/business-card",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPublishedBlogPosts();
  const routeEntries: MetadataRoute.Sitemap = publicRoutes.map((pathname) => ({
    url: absoluteUrl(pathname || "/"),
    changeFrequency: pathname === "/blog" ? "weekly" : "monthly",
    priority: pathname === "" ? 1 : pathname === "/blog" ? 0.9 : 0.7,
  }));

  return [
    ...routeEntries,
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.dateTime,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [post.image],
    })),
  ];
}
