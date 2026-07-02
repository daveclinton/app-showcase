import { BlogArticleCard, type BlogArticle } from "@/components/blog-article-card";

const posts: BlogArticle[] = [
  {
    title: "How AI-powered platforms are transforming modern SaaS experiences",
    category: "Insights",
    date: "OCT 21, 2026",
    image: "https://picsum.photos/seed/taiora-ai-platforms/1100/680",
    slug: "ai-powered-platforms-modern-saas",
  },
  {
    title: "Design systems that create smarter digital products",
    category: "News",
    date: "OCT 21, 2026",
    image: "https://picsum.photos/seed/taiora-design-systems/720/460",
    slug: "design-systems-smarter-products",
  },
  {
    title: "Minimal interfaces are shaping the future of SaaS",
    category: "Insights",
    date: "OCT 21, 2026",
    image: "https://picsum.photos/seed/taiora-minimal-interfaces/720/460",
    slug: "minimal-interfaces-future-saas",
  },
  {
    title: "Human-centered AI is redefining interactions",
    category: "News",
    date: "OCT 21, 2026",
    image: "https://picsum.photos/seed/taiora-human-centered-ai/720/500",
    slug: "human-centered-ai-interactions",
  },
  {
    title: "Creative technology trends every startup should watch",
    category: "News",
    date: "OCT 21, 2026",
    image: "https://picsum.photos/seed/taiora-creative-technology/720/500",
    slug: "creative-technology-trends",
  },
  {
    title: "Building immersive digital experiences with motion",
    category: "Insights",
    date: "OCT 21, 2026",
    image: "https://picsum.photos/seed/taiora-motion-experiences/720/500",
    slug: "immersive-digital-experiences-motion",
  },
  {
    title: "The rise of bold minimalism in modern web",
    category: "News",
    date: "OCT 21, 2026",
    image: "https://picsum.photos/seed/taiora-bold-minimalism/720/500",
    slug: "bold-minimalism-modern-web",
  },
];

export default function BlogPage() {
  const [featuredPost, ...remainingPosts] = posts;
  const secondaryPosts = remainingPosts.slice(0, 2);
  const gridPosts = remainingPosts.slice(2);

  return (
    <main className="bg-background text-foreground">
      <section className="border-b border-border px-6 pb-20 pt-32 md:px-10 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-normal text-balance text-foreground md:text-7xl">
            Stay updated with the latest on Tai Ora.
          </h1>
        </div>
      </section>
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-16">
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
        </div>
      </section>
    </main>
  );
}
