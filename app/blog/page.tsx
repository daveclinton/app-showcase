import type { Metadata } from "next";

import {
  BlogEditorialIndex,
  type BlogSearchParams,
} from "@/components/blog-editorial-index";
import { getBlogCollectionNames, getBlogPosts } from "@/lib/blog-posts";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Knowledge Hub",
  description:
    "Explore the story behind Tai Ora, personal reflections from our founder, and deeper perspectives on the technology we are building.",
  path: "/blog",
  keywords: [
    "Tai Ora blog",
    "Knowledge Hub",
    "wellbeing stories",
    "ethical AI",
    "VeeVu",
    "iGlo",
  ],
});

type BlogPageProps = {
  searchParams: Promise<BlogSearchParams>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = await searchParams;
  const [posts, collectionNames] = await Promise.all([
    getBlogPosts(),
    getBlogCollectionNames(),
  ]);

  return (
    <BlogEditorialIndex
      posts={posts}
      collectionNames={collectionNames}
      searchParams={resolvedSearchParams}
    />
  );
}
