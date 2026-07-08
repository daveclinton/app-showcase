import Image from "next/image";

import { KnowledgeHub } from "@/components/knowledge-hub";
import { getPublishedBlogPosts } from "@/lib/blog-posts";
import { radialPageBackground } from "@/lib/page-background";

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts();

  return (
    <main className="min-h-dvh text-foreground" style={radialPageBackground}>
      <section className="border-b border-border px-6 pb-16 pt-32 md:px-10 md:pb-20 md:pt-40">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[auto_1fr] md:items-center">
          <Image
            src="/logo.png"
            alt="Tai Ora"
            width={112}
            height={112}
            className="size-24 rounded-full shadow-[0_0_28px_rgba(145,201,173,0.2)] md:size-28"
            priority
          />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
              Stories, ideas and insight
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-none text-balance md:text-7xl">
              The Tai Ora Knowledge Hub
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-foreground/85 md:text-xl">
              Explore the story behind Tai Ora, personal reflections from our
              founder, and deeper perspectives on the technology we are
              building.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <KnowledgeHub posts={posts} />
        </div>
      </section>
    </main>
  );
}
