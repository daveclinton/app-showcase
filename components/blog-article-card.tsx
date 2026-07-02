"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export type BlogArticle = {
  title: string;
  category: "News" | "Insights";
  date: string;
  image: string;
  slug: string;
};

type BlogArticleCardProps = {
  post: BlogArticle;
  priority?: boolean;
  variant?: "featured" | "default";
};

export function BlogArticleCard({ post }: BlogArticleCardProps) {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full"
      >
        <Card className="w-full gap-0 overflow-hidden border border-border bg-surface p-0 text-foreground ring-0 [--card-spacing:0px]">
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

          <CardContent className="flex min-h-48 flex-col p-6 pt-5">
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
                className="text-lg font-semibold text-foreground"
              >
                {post.title}
              </motion.h2>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.45 }}
                className="mt-2 text-sm font-medium text-muted-foreground"
              >
                Nullam lobortis sodales dolor vitae viverra.
                <br />
                Cras lacinia bibendum metus vel rhoncus.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-auto flex justify-end pt-5"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-link no-underline transition-colors hover:text-link-hover focus-visible:ring-[3px] focus-visible:ring-ring/50 active:text-mauri-mint"
              >
                Read more
                <ArrowRight aria-hidden="true" />
              </Link>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
