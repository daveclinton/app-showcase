import { MdxContent } from "@/components/mdx-content";
import { getBlogPostBySlug, getPublishedBlogPosts } from "@/lib/blog-posts";
import { radialPageBackground } from "@/lib/page-background";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.subtitle,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.subtitle,
      type: "article",
      publishedTime: post.dateTime,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: `${post.title} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.subtitle,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-dvh text-foreground" style={radialPageBackground}>
      <article className="px-6 pb-20 pt-32 md:px-10 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex text-sm font-semibold text-link no-underline transition-colors hover:text-link-hover focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            Back to blog
          </Link>

          <header className="border-b border-border pb-8 text-center">
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3 text-xs font-bold uppercase tracking-normal text-foreground/85">
              <span className="rounded-md bg-surface px-3 py-1 text-foreground">
                {post.category}
              </span>
              <span aria-hidden="true" className="text-foreground/65">
                •
              </span>
              <time dateTime={post.dateTime}>{post.date}</time>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-normal text-balance text-foreground md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-xl leading-9 text-foreground/95">
              {post.subtitle}
            </p>
          </header>

          <figure className="mt-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt=""
              className="block aspect-[1.8/1] w-full rounded-md border border-border object-cover"
            />
          </figure>

          <div className="article-content mt-12 [&_img]:mx-auto [&_img]:w-full">
            <MdxContent source={post.content} />
          </div>
        </div>
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = await getPublishedBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
