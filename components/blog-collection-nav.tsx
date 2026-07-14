"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import type { PlannedArticle } from "@/lib/knowledge-hub";

type BlogCollectionNavProps = {
  articles: PlannedArticle[];
  currentSlug: string;
  availableSlugs: string[];
  /** Compact mobile list vs richer desktop sidebar list */
  variant?: "compact" | "sidebar";
  className?: string;
};

export function BlogCollectionNav({
  articles,
  currentSlug,
  availableSlugs,
  variant = "compact",
  className,
}: BlogCollectionNavProps) {
  const isSidebar = variant === "sidebar";
  // Desktop sidebar: expanded by default. Mobile: collapsed by default.
  const [open, setOpen] = useState(isSidebar);
  const available = new Set(availableSlugs);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className={cn("group", className)}
    >
      <CollapsibleTrigger
        className={cn(
          "flex w-full items-center justify-between gap-3 rounded-md text-left outline-none transition-colors",
          "hover:bg-surface-hover active:bg-surface-active",
          "focus-visible:ring-[3px] focus-visible:ring-ring/50",
          "[&[data-state=open]>svg]:rotate-180",
          isSidebar ? "px-0 py-1" : "px-1 py-1",
        )}
      >
        <span
          className={cn(
            isSidebar
              ? "text-sm font-bold uppercase tracking-[0.18em] text-primary"
              : "text-lg font-semibold",
          )}
        >
          In this collection
        </span>
        <ChevronDown
          aria-hidden="true"
          className="size-5 shrink-0 text-muted-foreground transition-transform duration-200"
        />
      </CollapsibleTrigger>

      <CollapsibleContent
        className={cn(
          "overflow-hidden",
          "data-[state=closed]:hidden",
        )}
      >
        <ol
          className={cn(
            "flex flex-col",
            isSidebar ? "mt-4 gap-2" : "mt-4 gap-3",
          )}
        >
          {articles.map((article) => {
            const isAvailable = available.has(article.slug);
            const current = article.slug === currentSlug;

            return (
              <li key={article.slug}>
                {isAvailable ? (
                  <Link
                    href={`/blog/${article.slug}`}
                    aria-current={current ? "page" : undefined}
                    className={cn(
                      "block rounded-md border border-transparent no-underline transition-colors hover:bg-surface-hover",
                      "aria-[current=page]:border-primary/40 aria-[current=page]:bg-surface-selected aria-[current=page]:text-link",
                      isSidebar
                        ? "px-3 py-3 text-sm leading-5"
                        : "px-3 py-2 text-sm",
                    )}
                  >
                    {isSidebar ? (
                      <>
                        <span className="block text-xs font-semibold text-muted-foreground">
                          {article.part ? `Part ${article.part}` : "Story"}
                        </span>
                        <span className="mt-1 block font-semibold">
                          {article.title}
                        </span>
                      </>
                    ) : (
                      <>
                        {article.part ? `Part ${article.part}: ` : ""}
                        {article.title}
                      </>
                    )}
                  </Link>
                ) : (
                  <span
                    className={cn(
                      "block text-muted-foreground",
                      isSidebar
                        ? "px-3 py-3 text-sm leading-5"
                        : "px-3 py-2 text-sm",
                    )}
                  >
                    {isSidebar ? (
                      <>
                        <span className="block text-xs font-semibold">
                          {article.part ? `Part ${article.part}` : "Story"}
                        </span>
                        <span className="mt-1 block">{article.title}</span>
                        <span className="mt-1 block text-xs">Coming soon</span>
                      </>
                    ) : (
                      <>
                        {article.part ? `Part ${article.part}: ` : ""}
                        {article.title} — Coming soon
                      </>
                    )}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </CollapsibleContent>
    </Collapsible>
  );
}
