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
  const available = post.published;

  const card = (
    <Card
      data-available={available}
      className="group/card h-full overflow-hidden border-border bg-surface py-0 transition-[background-color,border-color,transform,box-shadow] data-[available=true]:hover:-translate-y-1 data-[available=true]:hover:border-primary/65 data-[available=true]:hover:bg-surface-hover data-[available=true]:hover:shadow-xl"
    >
      <div className="relative aspect-[1.7/1] overflow-hidden bg-surface-active">
        {available ? (
          <Image
            src={post.image}
            alt=""
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover/card:scale-[1.03]"
            unoptimized={post.image.startsWith("http")}
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(212,175,55,0.22),transparent_25%),linear-gradient(145deg,#036057,#071814)]" />
        )}
        <Badge className="absolute left-4 top-4">
          {post.part !== null ? `Part ${post.part}` : "Story"}
        </Badge>
      </div>

      <CardHeader>
        <CardTitle className="text-xl leading-7">{post.title}</CardTitle>
        <CardDescription className="line-clamp-3 leading-6">
          {post.subtitle ||
            "This story is being prepared for the Tai Ora Knowledge Hub."}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
        {available ? (
          <>
            <Clock aria-hidden="true" />
            <span>{post.readTime}</span>
            <span aria-hidden="true">•</span>
            <time dateTime={post.dateTime}>{post.date}</time>
          </>
        ) : (
          <span>Coming soon</span>
        )}
      </CardContent>
      <CardFooter className="mt-auto pb-6">
        <span className="inline-flex items-center gap-2 font-semibold text-link transition-colors group-hover/card:text-link-hover">
          {available ? "Read story" : "Coming soon"}
          {available ? <ArrowRight aria-hidden="true" /> : null}
        </span>
      </CardFooter>
    </Card>
  );

  if (!available) {
    return (
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {card}
      </motion.div>
    );
  }

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
