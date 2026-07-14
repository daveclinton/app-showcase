import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  Mail,
  UserRound,
} from "lucide-react";

import { BlogCollectionNav } from "@/components/blog-collection-nav";
import { MdxContent } from "@/components/mdx-content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  getBlogPostBySlug,
  getPublishedBlogPosts,
} from "@/lib/blog-posts";
import { getCollectionDefinition } from "@/lib/knowledge-hub";
import { createPageMetadata } from "@/lib/page-metadata";
import { absoluteUrl } from "@/lib/site";
import { socialLinks } from "@/lib/social-links";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article not found",
      robots: { index: false, follow: false },
    };
  }

  // Viewport screenshot (if generated) → article cover → designed /og card.
  const coverImage =
    post.image && !post.image.includes("/og?") ? post.image : undefined;

  return createPageMetadata({
    title: post.title,
    description: post.subtitle,
    path: `/blog/${post.slug}`,
    image: coverImage,
    imageAlt: `${post.title} — ${post.collection}`,
    ogLabel: post.author,
    type: "article",
    publishedTime: post.dateTime,
    authors: [post.author],
    keywords: [
      post.title,
      post.collection,
      "Tai Ora",
      post.author,
      "Knowledge Hub",
    ],
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const [post, publishedPosts] = await Promise.all([
    getBlogPostBySlug(slug),
    getPublishedBlogPosts(),
  ]);

  if (!post || !post.published) {
    notFound();
  }

  const collection = getCollectionDefinition(post.collection);
  const availableSlugs = publishedPosts.map((entry) => entry.slug);
  const canonicalUrl = absoluteUrl(`/blog/${post.slug}`);
  // SVGs/illustrations need contain + padding; photos should fill the frame.
  const isIllustrationCover = (() => {
    try {
      const path = post.image.startsWith("http")
        ? new URL(post.image).pathname
        : post.image;
      return /\.svg$/i.test(path);
    } catch {
      return /\.svg(?:$|\?)/i.test(post.image);
    }
  })();

  return (
    <main className="min-h-dvh bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-8 md:px-10 md:pb-28 md:pt-12">
        <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-link no-underline transition-colors hover:text-link-hover active:text-mauri-mint focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Go back home
          </Link>
          <span className="text-muted-foreground/50" aria-hidden="true">
            /
          </span>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-link no-underline transition-colors hover:text-link-hover active:text-mauri-mint focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            Knowledge Hub
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start xl:gap-14">
          <div className="min-w-0">
            <header>
              <Badge variant="secondary">
                {post.collection}
                {post.part ? ` — Part ${post.part}` : ""}
              </Badge>
              <h1 className="mx-auto mt-5 max-w-4xl text-center text-pretty text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl">
                {post.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-foreground/85 md:text-xl">
                {post.subtitle}
              </p>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays aria-hidden="true" />
                  <time dateTime={post.dateTime}>{post.date}</time>
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock aria-hidden="true" />
                  {post.readTime}
                </span>
                <span className="inline-flex items-center gap-2">
                  <UserRound aria-hidden="true" />
                  {post.author}
                </span>
              </div>
            </header>

            {isIllustrationCover ? (
              <figure className="mt-9 overflow-hidden rounded-lg border border-border bg-surface p-4 sm:p-6">
                <Image
                  src={post.image}
                  alt={`${post.title} cover`}
                  width={1200}
                  height={700}
                  priority
                  sizes="(min-width: 1280px) 850px, (min-width: 1024px) 65vw, 100vw"
                  className="mx-auto block max-h-[min(24rem,50vh)] max-w-full object-contain"
                  style={{ width: "auto", height: "auto" }}
                  unoptimized={post.image.startsWith("http")}
                />
              </figure>
            ) : (
              <figure className="relative mt-9 aspect-[16/9] overflow-hidden rounded-lg border border-border bg-surface">
                <Image
                  src={post.image}
                  alt={`${post.title} cover`}
                  fill
                  priority
                  sizes="(min-width: 1280px) 850px, (min-width: 1024px) 65vw, 100vw"
                  className="object-cover"
                  unoptimized={post.image.startsWith("http")}
                />
              </figure>
            )}

            {collection ? (
              <section className="mt-8 rounded-lg border border-border bg-surface p-5 lg:hidden">
                <BlogCollectionNav
                  articles={collection.articles}
                  currentSlug={post.slug}
                  availableSlugs={availableSlugs}
                  variant="compact"
                />
              </section>
            ) : null}

            <article className="article-content mt-10">
              <MdxContent source={post.content} />
            </article>

            <Separator className="my-10" />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-semibold text-foreground">Share this story</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on Facebook"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface transition hover:border-primary hover:bg-surface-hover active:bg-surface-active focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  <Image src="/facebook.svg" alt="" width={18} height={18} className="size-[18px] invert" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on LinkedIn"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface transition hover:border-primary hover:bg-surface-hover active:bg-surface-active focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  <Image src="/linkedin-logo-svgrepo-com.svg" alt="" width={18} height={18} className="size-[18px] invert" />
                </a>
                <a
                  href={`https://x.com/intent/post?url=${encodeURIComponent(canonicalUrl)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on X"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface transition hover:border-primary hover:bg-surface-hover active:bg-surface-active focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  <Image src="/x.svg" alt="" width={18} height={18} className="size-[18px] invert" />
                </a>
              </div>
            </div>
          </div>

          <aside className="hidden flex-col gap-6 lg:sticky lg:top-28 lg:flex">
            {collection ? (
              <section className="rounded-lg border border-border bg-surface p-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  The Tai Ora story
                </p>
                <h2 className="mt-3 text-xl font-bold">{collection.name}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {collection.description}
                </p>
                <div className="mt-5 border-t border-border pt-4">
                  <BlogCollectionNav
                    articles={collection.articles}
                    currentSlug={post.slug}
                    availableSlugs={availableSlugs}
                    variant="sidebar"
                  />
                </div>
              </section>
            ) : null}

            <section className="rounded-lg border border-primary/30 bg-surface p-5">
              <Mail className="text-primary" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-bold">Stay in the loop</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Get new stories, updates and behind-the-scenes insight from the
                Tai Ora journey.
              </p>
              <Button asChild className="mt-5 w-full">
                <Link href="/contact">Contact Tai Ora</Link>
              </Button>
              <p className="mt-3 text-xs text-muted-foreground">
                Privacy-first. No spam.
              </p>
            </section>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-link no-underline transition-colors hover:text-link-hover focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              Follow Tai Ora on LinkedIn
            </a>
          </aside>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = await getPublishedBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
