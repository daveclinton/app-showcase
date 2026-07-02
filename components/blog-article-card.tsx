"use client";

import type { BlogPost } from "@/lib/blog-posts";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

type BlogArticleCardProps = {
  post: BlogPost;
  priority?: boolean;
  variant?: "featured" | "default";
};

function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }

  const truncated = text.slice(0, maxLength).trimEnd();
  const lastSpace = truncated.lastIndexOf(" ");

  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength)}...`;
}

export function BlogArticleCard({ post }: BlogArticleCardProps) {
  const title = truncateText(post.title, 58);
  const subtitle = truncateText(post.subtitle, 68);

  return (
    <div className="flex h-full items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="h-full w-full"
      >
        <Link
          href={`/blog/${post.slug}`}
          className="group block cursor-pointer rounded-2xl no-underline focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
        <Card className="relative h-full w-full cursor-pointer gap-0 overflow-hidden border border-border bg-surface p-0 text-foreground ring-0 [--card-spacing:0px]">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.18 }}
            className="absolute top-3 right-3 z-10 rounded-md bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-md"
          >
            {post.category}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt=""
              height={220}
              width={500}
              className="aspect-[1.75/1] w-full object-cover"
            />
          </motion.div>

          <CardContent className="flex min-h-64 flex-1 flex-col p-6 pt-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="min-h-21 overflow-hidden text-lg font-semibold leading-7 text-foreground [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]"
                title={post.title}
              >
                {title}
              </motion.h2>

              <motion.time
                dateTime={post.dateTime}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.42 }}
                className="mt-2 block text-xs font-bold uppercase tracking-normal text-foreground/85"
              >
                {post.date}
              </motion.time>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.45 }}
                className="mt-2 min-h-12 overflow-hidden text-sm font-medium leading-6 text-foreground/90 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]"
                title={post.subtitle}
              >
                {subtitle}
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-auto flex justify-end pt-5"
            >
              <span className="inline-flex items-center gap-2 text-sm font-bold text-link transition-colors group-hover:text-link-hover group-active:text-mauri-mint">
                Read more
                <ArrowRight aria-hidden="true" />
              </span>
            </motion.div>
          </CardContent>
        </Card>
        </Link>
      </motion.div>
    </div>
  );
}
