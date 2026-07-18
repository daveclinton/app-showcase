"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { BlogArticleCard } from "@/components/blog-article-card";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import type { BlogPost } from "@/lib/blog-posts";

type KnowledgeHubProps = {
  posts: BlogPost[];
  collectionNames: string[];
};

export function KnowledgeHub({ posts, collectionNames }: KnowledgeHubProps) {
  const reduceMotion = useReducedMotion();
  const collections = useMemo(
    () => {
      const groups = new Map<string, BlogPost[]>(
        collectionNames.map((name) => [name, []]),
      );

      for (const post of posts) {
        const collectionPosts = groups.get(post.collection) || [];
        collectionPosts.push(post);
        groups.set(post.collection, collectionPosts);
      }

      return Array.from(
        groups,
        ([name, collectionPosts]) => ({ name, posts: collectionPosts }),
      );
    },
    [collectionNames, posts],
  );
  const [activeCollection, setActiveCollection] = useState(
    collections[0]?.name || "",
  );
  const collection =
    collections.find(({ name }) => name === activeCollection) || collections[0];
  const useCollectionSelect = collections.length > 5;

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
          {useCollectionSelect ? (
            <NativeSelect
              aria-label="Choose a Knowledge Hub collection"
              value={activeCollection}
              onChange={(event) => setActiveCollection(event.target.value)}
              className="w-full"
            >
              {collections.map(({ name }) => (
                <NativeSelectOption key={name} value={name}>
                  {name}
                </NativeSelectOption>
              ))}
            </NativeSelect>
          ) : (
            <AnimatedTabs
              tabs={tabs}
              value={activeCollection}
              onValueChange={setActiveCollection}
              containerClassName="justify-start gap-1 sm:justify-center"
              tabClassName="min-h-11 flex-1 whitespace-normal px-3 py-2.5 text-center sm:flex-none sm:px-5"
              activeTabClassName="bg-primary"
            />
          )}
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <motion.section
          key={collection.name}
          aria-label={`${collection.name} stories`}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          {collection.posts.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {collection.posts.map((post, index) => (
                <BlogArticleCard
                  key={post.id}
                  post={post}
                  priority={index === 0 && post.published}
                />
              ))}
            </div>
          ) : (
            <Card className="border-border bg-surface">
              <CardHeader>
                <CardTitle>Stories coming soon</CardTitle>
                <CardDescription>
                  New stories for {collection.name} are being prepared.
                </CardDescription>
              </CardHeader>
            </Card>
          )}
        </motion.section>
      </AnimatePresence>
    </div>
  );
}
