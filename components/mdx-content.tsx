import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { highlight } from "sugar-high";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

function Code({ children, ...props }: ComponentProps<"code">) {
  if (typeof children !== "string") {
    return <code {...props}>{children}</code>;
  }

  return <code dangerouslySetInnerHTML={{ __html: highlight(children) }} {...props} />;
}

function CustomLink({ href = "", children, ...props }: ComponentProps<"a">) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

function Callout({
  icon = "💡",
  children,
}: {
  icon?: string;
  color?: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-6 flex gap-4 rounded-md border border-border bg-surface p-5 text-foreground">
      <span aria-hidden="true" className="shrink-0 text-xl">
        {icon}
      </span>
      <div className="article-content min-w-0 flex-1">{children}</div>
    </aside>
  );
}

function Toggle({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details className="my-6 rounded-md border border-border bg-surface p-5">
      <summary className="font-semibold text-foreground">{title}</summary>
      <div className="article-content mt-4">{children}</div>
    </details>
  );
}

function Bookmark({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="my-6 block rounded-md border border-border bg-surface p-5 font-medium text-link no-underline transition-colors hover:bg-surface-hover hover:text-link-hover"
    >
      {url}
    </a>
  );
}

function FileLink({ href, title }: { href: string; title: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="my-6 block rounded-md border border-border bg-surface p-5 font-medium text-link no-underline transition-colors hover:bg-surface-hover hover:text-link-hover"
    >
      {title}
    </a>
  );
}

function Video({ src, caption }: { src: string; caption?: string }) {
  return (
    <figure className="my-6">
      <video className="w-full rounded-md border border-border" src={src} controls />
      {caption ? <figcaption className="mt-2 text-sm text-foreground/75">{caption}</figcaption> : null}
    </figure>
  );
}

const components = {
  a: CustomLink,
  code: Code,
  Callout,
  Toggle,
  Bookmark,
  FileLink,
  Video,
};

export function MdxContent({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      }}
    />
  );
}
