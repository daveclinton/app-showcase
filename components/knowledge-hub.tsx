"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { BookOpenText } from "lucide-react";

import { BlogArticleCard } from "@/components/blog-article-card";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import type { BlogPost } from "@/lib/blog-posts";

export function KnowledgeHub({ posts }: { posts: BlogPost[] }) {
  const reduceMotion = useReducedMotion();
  const collections = useMemo(
    () =>
      Array.from(
        posts.reduce((groups, post) => {
          const collectionPosts = groups.get(post.collection) || [];
          collectionPosts.push(post);
          groups.set(post.collection, collectionPosts);
          return groups;
        }, new Map<string, BlogPost[]>()),
        ([name, collectionPosts]) => ({ name, posts: collectionPosts }),
      ),
    [posts],
  );
  const [activeCollection, setActiveCollection] = useState(
    collections[0]?.name || "",
  );
  const collection =
    collections.find(({ name }) => name === activeCollection) || collections[0];

  const tabs = useMemo(
    () =>
      collections.map(({ name }) => ({
        title: name,
        value: name,
      })),
    [collections],
  );

  if (!collection) {
    return (
      <p className="rounded-lg border border-border bg-surface p-8 text-muted-foreground">
        New stories will appear here when they are published.
      </p>
    );
  }

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
            onValueChange={setActiveCollection}
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
          <header className="mb-8 grid gap-4 border-b border-border pb-8 md:grid-cols-[auto_1fr] md:items-center">
            <div className="flex size-12 items-center justify-center rounded-full border border-primary/40 bg-surface text-primary">
              <BookOpenText aria-hidden="true" />
            </div>
            <div>
              <h2
                id="active-collection-title"
                className="text-3xl font-bold text-foreground"
              >
                {collection.name}
              </h2>
              <p className="mt-2 text-muted-foreground">
                {collection.posts.length}{" "}
                {collection.posts.length === 1 ? "story" : "stories"}
              </p>
            </div>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {collection.posts.map((post, index) => (
              <BlogArticleCard
                key={post.id}
                post={post}
                priority={index === 0}
              />
            ))}
          </div>
        </motion.section>
      </AnimatePresence>
    </div>
  );
}
