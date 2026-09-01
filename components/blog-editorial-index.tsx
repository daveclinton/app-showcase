import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import type { BlogPost } from "@/lib/blog-posts";
import { radialPageBackground } from "@/lib/page-background";
import { cn } from "@/lib/utils";

export type BlogSearchParams = {
  category?: string | string[];
  page?: string | string[];
};

type BlogEditorialIndexProps = {
  posts: BlogPost[];
  collectionNames: string[];
  searchParams: BlogSearchParams;
};

type CategoryLink = {
  label: string;
  collection: string;
  count: number;
};

const POSTS_PER_PAGE = 10;

export function BlogEditorialIndex({
  posts,
  collectionNames,
  searchParams,
}: BlogEditorialIndexProps) {
  const publishedPosts = sortByLatest(posts.filter((post) => post.published));
  const collectionList = getCollectionList(collectionNames, publishedPosts);
  const requestedCategory = getSearchValue(searchParams.category);
  const activeCollection = collectionList.includes(requestedCategory || "")
    ? requestedCategory || ""
    : "";
  const filteredPosts = activeCollection
    ? publishedPosts.filter((post) => post.collection === activeCollection)
    : publishedPosts;
  const pageCount = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const currentPage = clampPage(
    getRequestedPage(getSearchValue(searchParams.page)),
    pageCount,
  );
  const visiblePosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );
  const categories = buildCategoryLinks(collectionList, publishedPosts);

  return (
    <main
      className="min-h-dvh overflow-x-clip text-foreground"
      style={radialPageBackground}
    >
      <section className="px-4 pb-14 pt-28 min-[380px]:px-6 sm:px-10 md:pb-24 md:pt-36">
        <div className="mx-auto grid max-w-[1244px] gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-[60px]">
          <BlogRail
            categories={categories}
            activeCollection={activeCollection}
          />

          <div className="min-w-0">
            {visiblePosts.length ? (
              <div className="grid w-full max-w-[964px] min-w-0 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-x-[60px]">
                {visiblePosts.map((post, index) => (
                  <BlogEditorialCard
                    key={post.id}
                    post={post}
                    priority={currentPage === 1 && index < 2}
                  />
                ))}
              </div>
            ) : (
              <div className="w-full max-w-[964px] rounded-lg border border-border bg-surface p-6 sm:p-8">
                <h2 className="text-2xl font-semibold">Stories coming soon</h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
                  New Knowledge Hub stories will appear here when they are
                  published.
                </p>
              </div>
            )}

            <BlogPagination
              activeCollection={activeCollection}
              currentPage={currentPage}
              pageCount={pageCount}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function BlogRail({
  categories,
  activeCollection,
}: {
  categories: CategoryLink[];
  activeCollection: string;
}) {
  return (
    <aside className="min-w-0 lg:sticky lg:top-32 lg:self-start lg:border-r lg:border-border lg:pr-5">
      <div>
        <Link
          href="/blog"
          className="block min-w-0 text-foreground no-underline hover:text-link-hover lg:flex lg:items-center lg:gap-3"
        >
          <Image
            src="/logo.png"
            alt=""
            width={64}
            height={64}
            className="hidden size-14 rounded-full shadow-[0_0_22px_rgba(145,201,173,0.2)] lg:block"
            priority
          />
          <span className="hidden text-2xl font-extrabold leading-tight text-primary lg:block">
            Knowledge Hub
          </span>
          <span className="block max-w-full lg:hidden">
            <span className="block break-words text-[44px] font-extrabold leading-[0.95] text-primary min-[360px]:text-[52px] sm:text-[64px]">
              Knowledge
            </span>
            <span className="mt-2 block break-words font-serif text-[42px] italic leading-[0.95] text-foreground min-[360px]:text-[48px] sm:text-[60px]">
              Hub
            </span>
          </span>
        </Link>

        <p className="mt-6 max-w-[680px] break-words text-lg leading-7 text-muted-foreground min-[360px]:text-xl min-[360px]:leading-8 sm:text-2xl sm:leading-9 lg:mt-5 lg:max-w-[200px] lg:text-sm lg:leading-6">
          Stories on cultural wellbeing, ethical technology and the people
          building Tai Ora.
        </p>

        <span
          className="mt-8 block h-px w-full bg-border lg:mt-6 lg:w-16"
          aria-hidden="true"
        />

        <nav
          aria-label="Blog categories"
          className="-mx-4 mt-5 overflow-hidden px-4 min-[380px]:-mx-6 min-[380px]:px-6 sm:-mx-10 sm:px-10 lg:mx-0 lg:overflow-visible lg:px-0"
        >
          <ul className="flex w-full max-w-full gap-7 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] min-[360px]:gap-8 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => {
              const active = category.collection === activeCollection;

              return (
                <li key={category.label} className="shrink-0 lg:shrink">
                  <Link
                    href={buildBlogHref(category.collection, 1)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex min-h-9 items-center justify-between gap-3 whitespace-nowrap py-1 text-lg font-semibold no-underline transition focus-visible:ring-[3px] focus-visible:ring-ring/50 active:translate-y-px min-[360px]:text-xl lg:-ml-3 lg:w-[calc(100%+0.75rem)] lg:rounded-md lg:px-3 lg:py-2 lg:text-sm",
                      active
                        ? "text-primary lg:bg-surface-selected"
                        : "text-muted-foreground hover:text-link-hover lg:hover:bg-surface-hover",
                    )}
                  >
                    <span>{category.label}</span>
                    <span className="hidden text-xs text-current/70 lg:inline">
                      {category.count}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

function BlogEditorialCard({
  post,
  priority,
}: {
  post: BlogPost;
  priority: boolean;
}) {
  const subtitle =
    post.subtitle || "A new story from the Tai Ora Knowledge Hub.";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block h-full w-full max-w-full rounded-md text-foreground no-underline focus-visible:ring-[3px] focus-visible:ring-ring/50"
    >
      <div className="flex h-full min-h-0 w-full max-w-none flex-col md:min-h-[455px] md:max-w-[452.16px]">
        <div className="relative aspect-[452.16/237.38] overflow-hidden rounded-[6px] border border-border bg-surface-active">
          <Image
            src={post.image}
            alt=""
            fill
            priority={priority}
            sizes="(min-width: 1280px) 452px, (min-width: 768px) calc((100vw - 7rem) / 2), calc(100vw - 2rem)"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            unoptimized={post.image.startsWith("http")}
          />
        </div>

        <div className="mt-2 flex flex-1 flex-col">
          <p className="min-h-5 text-sm font-semibold leading-5 tracking-normal text-muted-foreground md:min-h-4 md:text-[12px] md:leading-4">
            {post.collection}
          </p>
          <h2 className="mt-1 text-[28px] font-semibold leading-9 tracking-normal text-foreground transition-colors group-hover:text-link-hover md:text-[22px] md:leading-7">
            {post.title}
          </h2>
          <p className="mt-2 line-clamp-3 text-lg leading-7 text-muted-foreground md:text-base md:leading-6">
            {subtitle}
          </p>

          <div className="mt-auto min-h-[46px] pt-4 md:pt-[10px]">
            <div className="min-w-0">
              <p className="truncate text-base font-semibold text-foreground md:text-sm">
                {post.author}
              </p>
              <p className="truncate text-sm leading-5 tracking-normal text-muted-foreground md:text-[12px] md:leading-4">
                {post.readTime} · {post.date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function BlogPagination({
  activeCollection,
  currentPage,
  pageCount,
}: {
  activeCollection: string;
  currentPage: number;
  pageCount: number;
}) {
  if (pageCount <= 1) {
    return null;
  }

  const pages = getVisiblePages(currentPage, pageCount);
  const canGoNext = currentPage < pageCount;

  return (
    <nav
      aria-label="Blog pagination"
      className="mt-14 flex w-full max-w-[964px] justify-center overflow-x-auto pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <ul className="flex min-w-max items-center gap-1">
        {pages.map((page) => {
          const active = page === currentPage;

          return (
            <li key={page}>
              <Link
                href={buildBlogHref(activeCollection, page)}
                aria-label={`Page ${page}`}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex h-9 min-w-8 items-center justify-center rounded-md border px-2 text-sm font-semibold no-underline transition focus-visible:ring-[3px] focus-visible:ring-ring/50 active:translate-y-px",
                  active
                    ? "border-primary/50 bg-surface-selected text-primary"
                    : "border-transparent text-muted-foreground hover:border-border hover:bg-surface-hover hover:text-link-hover",
                )}
              >
                {page}
              </Link>
            </li>
          );
        })}
        <li>
          {canGoNext ? (
            <Link
              href={buildBlogHref(activeCollection, currentPage + 1)}
              aria-label="Next page"
              className="inline-flex h-9 min-w-8 items-center justify-center rounded-md border border-transparent px-2 text-sm font-semibold text-muted-foreground no-underline transition hover:border-border hover:bg-surface-hover hover:text-link-hover focus-visible:ring-[3px] focus-visible:ring-ring/50 active:translate-y-px"
            >
              <ChevronRight aria-hidden="true" className="size-4" />
            </Link>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex h-9 min-w-8 items-center justify-center rounded-md border border-transparent px-2 text-sm font-semibold text-muted-foreground/40"
            >
              <ChevronRight aria-hidden="true" className="size-4" />
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
}

function getSearchValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function getRequestedPage(value: string | undefined) {
  const page = Number.parseInt(value || "", 10);

  return Number.isFinite(page) && page > 0 ? page : 1;
}

function clampPage(page: number, pageCount: number) {
  return Math.min(Math.max(page, 1), pageCount);
}

function sortByLatest(posts: BlogPost[]) {
  return [...posts].sort(
    (a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime(),
  );
}

function getCollectionList(collectionNames: string[], posts: BlogPost[]) {
  const names = new Set<string>();

  for (const name of collectionNames) {
    if (name.trim()) {
      names.add(name);
    }
  }

  for (const post of posts) {
    if (post.collection.trim()) {
      names.add(post.collection);
    }
  }

  return Array.from(names);
}

function buildCategoryLinks(
  collectionList: string[],
  posts: BlogPost[],
): CategoryLink[] {
  return [
    {
      label: "Latest",
      collection: "",
      count: posts.length,
    },
    ...collectionList.map((collection) => ({
      label: collection,
      collection,
      count: posts.filter((post) => post.collection === collection).length,
    })),
  ];
}

function buildBlogHref(collection: string, page: number) {
  const params = new URLSearchParams();

  if (collection) {
    params.set("category", collection);
  }

  if (page > 1) {
    params.set("page", String(page));
  }

  const query = params.toString();

  return query ? `/blog?${query}` : "/blog";
}

function getVisiblePages(currentPage: number, pageCount: number) {
  const visibleCount = Math.min(5, pageCount);
  let start = 1;

  if (pageCount > visibleCount) {
    start = Math.min(
      Math.max(currentPage - Math.floor(visibleCount / 2), 1),
      pageCount - visibleCount + 1,
    );
  }

  return Array.from({ length: visibleCount }, (_, index) => start + index);
}
