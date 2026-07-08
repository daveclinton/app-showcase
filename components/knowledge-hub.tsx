"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { BlogArticleCard } from "@/components/blog-article-card";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import type { BlogPost } from "@/lib/blog-posts";
import {
  BLOG_COLLECTIONS,
  collectionDefinitions,
  type BlogCollection,
} from "@/lib/knowledge-hub";

export function KnowledgeHub({ posts }: { posts: BlogPost[] }) {
  const reduceMotion = useReducedMotion();
  const [activeCollection, setActiveCollection] =
    useState<BlogCollection>("Building Tai Ora");
  const collection =
    collectionDefinitions.find(
      (definition) => definition.name === activeCollection,
    ) || collectionDefinitions[0];
  const postsBySlug = useMemo(
    () => new Map(posts.map((post) => [post.slug, post])),
    [posts],
  );

  const tabs = useMemo(
    () =>
      BLOG_COLLECTIONS.map((name) => ({
        title: name,
        value: name,
      })),
    [],
  );

  return (
    <div className="flex flex-col gap-10">
      <div className="sticky top-4 z-40 -mx-1 px-1">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="rounded-full border border-border/80 bg-background/90 p-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.22)] backdrop-blur-xl"
        >
          <AnimatedTabs
            tabs={tabs}
            value={activeCollection}
            onValueChange={(value) => {
              setActiveCollection(value as BlogCollection);
            }}
            containerClassName="justify-start gap-1 sm:justify-center"
            tabClassName="min-h-11 flex-1 whitespace-normal px-3 py-2.5 text-center sm:flex-none sm:px-5"
            activeTabClassName="bg-primary"
          />
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <motion.section
          key={collection.name}
          aria-labelledby="active-collection-title"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <header className="mb-8 grid gap-4 border-b border-border pb-8 md:grid-cols-[auto_1fr] md:items-start">
            <div className="flex size-12 items-center justify-center rounded-full border border-primary/40 bg-surface text-primary">
              <collection.icon aria-hidden="true" />
            </div>
            <div>
              <h2
                id="active-collection-title"
                className="text-3xl font-bold text-foreground"
              >
                {collection.name}
              </h2>
              <p className="mt-2 max-w-3xl text-lg leading-8 text-foreground/85">
                {collection.purpose}
              </p>
              <p className="mt-2 max-w-3xl leading-7 text-muted-foreground">
                {collection.description}
              </p>
            </div>
          </header>

          {collection.articles.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {collection.articles.map((article, index) => {
                const post = postsBySlug.get(article.slug);

                return (
                  <BlogArticleCard
                    key={article.slug}
                    post={post}
                    title={article.title}
                    part={article.part}
                    comingSoon={article.comingSoon || !post}
                    priority={index === 0}
                  />
                );
              })}
            </div>
          ) : (
            <div className="rounded-lg border border-border bg-surface p-8">
              <h3 className="text-xl font-semibold text-foreground">
                Technical articles are in development
              </h3>
              <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
                Architecture, privacy, ethical AI and product engineering
                stories will be added here over time.
              </p>
            </div>
          )}
        </motion.section>
      </AnimatePresence>
    </div>
  );
}
