import { BlogArticleCard } from "@/components/blog-article-card";
import { getPublishedBlogPosts } from "@/lib/blog-posts";

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts();
  const [featuredPost, ...remainingPosts] = posts;
  const secondaryPosts = remainingPosts.slice(0, 2);
  const gridPosts = remainingPosts.slice(2);

  return (
    <main className="bg-background text-foreground">
      <section className="border-b border-border px-6 pb-20 pt-32 md:px-10 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-normal text-balance text-foreground md:text-7xl">
            Truth in beauty. Wellness with purpose.
          </h1>
        </div>
      </section>
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-16">
          {featuredPost ? (
            <>
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.9fr)_minmax(22rem,1fr)_minmax(22rem,1fr)] lg:items-start">
                <div className="lg:row-span-2">
                  <BlogArticleCard post={featuredPost} priority variant="featured" />
                </div>

                {secondaryPosts.map((post) => (
                  <BlogArticleCard key={post.slug} post={post} />
                ))}
              </div>

              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {gridPosts.map((post) => (
                  <BlogArticleCard key={post.slug} post={post} />
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-md border border-border bg-surface p-8">
              <h2 className="text-2xl font-bold text-foreground">No published posts yet</h2>
              <p className="mt-3 text-foreground/90">
                Add posts to Notion and mark them as published to show them here.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
