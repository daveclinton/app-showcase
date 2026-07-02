import { getBlogPost, blogPosts } from "@/lib/blog-posts";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-background text-foreground">
      <article className="px-6 pb-20 pt-32 md:px-10 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-normal text-mauri-mint">
            <span>{post.category}</span>
            <span aria-hidden="true">/</span>
            <time dateTime={post.dateTime}>{post.date}</time>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-normal text-balance text-foreground md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg font-medium leading-8 text-muted-foreground md:text-xl">
            {post.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl border border-border bg-surface">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.image} alt="" className="aspect-[1.8/1] w-full object-cover" />
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-base font-medium leading-8 text-muted-foreground md:text-lg">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
