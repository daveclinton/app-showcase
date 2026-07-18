"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { BlogPost } from "@/lib/blog-posts";

type BlogArticleCardProps = {
  post: BlogPost;
  priority?: boolean;
};

export function BlogArticleCard({
  post,
  priority = false,
}: BlogArticleCardProps) {
  const reduceMotion = useReducedMotion();

  const card = (
    <Card className="group/card h-full overflow-hidden border-border bg-surface py-0 transition-[background-color,border-color,transform,box-shadow] hover:-translate-y-1 hover:border-primary/65 hover:bg-surface-hover hover:shadow-xl">
      <div className="relative aspect-[1.7/1] overflow-hidden bg-surface-active">
        <Image
          src={post.image}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover/card:scale-[1.03]"
          unoptimized={post.image.startsWith("http")}
        />
        <Badge className="absolute left-4 top-4">
          {post.part !== null ? `Part ${post.part}` : post.collection}
        </Badge>
      </div>

      <CardHeader>
        <CardTitle className="text-xl leading-7">{post.title}</CardTitle>
        <CardDescription className="line-clamp-3 leading-6">
          {post.subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
        <Clock aria-hidden="true" />
        <span>{post.readTime}</span>
        <span aria-hidden="true">•</span>
        <time dateTime={post.dateTime}>{post.date}</time>
      </CardContent>
      <CardFooter className="mt-auto pb-6">
        <span className="inline-flex items-center gap-2 font-semibold text-link transition-colors group-hover/card:text-link-hover">
          Read story
          <ArrowRight aria-hidden="true" />
        </span>
      </CardFooter>
    </Card>
  );

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="block h-full rounded-lg no-underline focus-visible:ring-[3px] focus-visible:ring-ring/50"
      >
        {card}
      </Link>
    </motion.div>
  );
}
