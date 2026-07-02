import { notionBlocksToMarkdown } from "@/lib/notion-blocks";

type NotionRichText = {
  plain_text?: string;
  href?: string | null;
  annotations?: {
    bold?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    code?: boolean;
  };
};

type NotionProperty = {
  type?: string;
  title?: NotionRichText[];
  rich_text?: NotionRichText[];
  checkbox?: boolean;
  date?: { start?: string | null } | null;
  select?: { name?: string } | null;
  multi_select?: { name?: string }[];
  url?: string | null;
  files?: Array<{
    type?: "external" | "file";
    name?: string;
    external?: { url?: string };
    file?: { url?: string };
  }>;
};

type NotionPage = {
  id: string;
  cover?: {
    type?: "external" | "file";
    external?: { url?: string };
    file?: { url?: string };
  } | null;
  properties?: Record<string, NotionProperty>;
};

export type BlogPost = {
  id: string;
  title: string;
  subtitle: string;
  category: "News" | "Insights";
  date: string;
  dateTime: string;
  image: string;
  slug: string;
  content: string;
  published: boolean;
};

const notionApiVersion = "2022-06-28";
const notionToken = process.env.NOTION_TOKEN;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

function getNotionConfig() {
  if (!notionToken || !notionDatabaseId) {
    throw new Error("Missing NOTION_TOKEN or NOTION_DATABASE_ID");
  }

  return {
    token: notionToken,
    databaseId: notionDatabaseId,
  };
}

async function notionFetch<T>(pathName: string, init: RequestInit = {}): Promise<T> {
  const { token } = getNotionConfig();
  const response = await fetch(`https://api.notion.com/v1${pathName}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": notionApiVersion,
      "Content-Type": "application/json",
      ...init.headers,
    },
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Notion API request failed: ${response.status} ${body}`);
  }

  return response.json() as Promise<T>;
}

function getProperty(properties: Record<string, NotionProperty> | undefined, names: string[]) {
  if (!properties) {
    return undefined;
  }

  const normalized = new Map(
    Object.entries(properties).map(([key, value]) => [key.toLowerCase(), value]),
  );

  for (const name of names) {
    const direct = properties[name];
    if (direct) {
      return direct;
    }

    const caseInsensitive = normalized.get(name.toLowerCase());
    if (caseInsensitive) {
      return caseInsensitive;
    }
  }

  return undefined;
}

function plainText(value?: NotionRichText[]) {
  return value?.map((item) => item.plain_text || "").join("").trim() || "";
}

function propertyText(property?: NotionProperty) {
  if (!property) {
    return "";
  }

  if (property.type === "title") {
    return plainText(property.title);
  }

  if (property.type === "rich_text") {
    return plainText(property.rich_text);
  }

  if (property.type === "select") {
    return property.select?.name || "";
  }

  if (property.type === "url") {
    return property.url || "";
  }

  return plainText(property.title) || plainText(property.rich_text) || property.url || "";
}

function propertyBoolean(property?: NotionProperty) {
  if (!property) {
    return false;
  }

  if (property.type === "checkbox") {
    return property.checkbox === true;
  }

  const text = propertyText(property).toLowerCase();
  return ["true", "yes", "published", "live"].includes(text);
}

function propertyDate(property?: NotionProperty) {
  return property?.date?.start || propertyText(property);
}

function coverUrl(page: NotionPage) {
  if (page.cover?.type === "external") {
    return page.cover.external?.url;
  }

  if (page.cover?.type === "file") {
    return page.cover.file?.url;
  }

  const image = getProperty(page.properties, ["Image", "Cover", "Hero"]);
  const firstFile = image?.files?.[0];

  if (firstFile?.type === "external") {
    return firstFile.external?.url;
  }

  if (firstFile?.type === "file") {
    return firstFile.file?.url;
  }

  return propertyText(image) || undefined;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatDate(date: string) {
  if (!date) {
    return "";
  }

  const targetDate = new Date(date.includes("T") ? date : `${date}T00:00:00`);

  return targetDate
    .toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    .toUpperCase();
}

function pageToPost(page: NotionPage, content = ""): BlogPost {
  const properties = page.properties || {};
  const title = propertyText(getProperty(properties, ["Title", "Name", "Page"]));
  const slug = propertyText(getProperty(properties, ["Slug"])) || slugify(title);
  const subtitle = propertyText(getProperty(properties, ["Summary", "Description", "Excerpt"]));
  const dateTime =
    propertyDate(getProperty(properties, ["Published At", "PublishedAt", "Date"])) ||
    new Date().toISOString();
  const publishedProperty = getProperty(properties, ["Published", "Live", "Status"]);
  const published = publishedProperty ? propertyBoolean(publishedProperty) : true;
  const categoryText = propertyText(getProperty(properties, ["Category", "Type"]));

  return {
    id: page.id,
    title,
    subtitle,
    category: categoryText.toLowerCase() === "news" ? "News" : "Insights",
    date: formatDate(dateTime),
    dateTime,
    image: coverUrl(page) || "https://picsum.photos/seed/taiora-notion-post/1100/680",
    slug,
    content,
    published,
  };
}

async function getNotionBlogPosts() {
  const { databaseId } = getNotionConfig();
  const pages: NotionPage[] = [];
  let startCursor: string | undefined;

  do {
    const data = await notionFetch<{
      results: NotionPage[];
      has_more: boolean;
      next_cursor?: string;
    }>(`/databases/${databaseId}/query`, {
      method: "POST",
      body: JSON.stringify({
        page_size: 100,
        start_cursor: startCursor,
      }),
    });

    pages.push(...data.results);
    startCursor = data.next_cursor || undefined;

    if (!data.has_more) {
      break;
    }
  } while (startCursor);

  return pages.map((page) => pageToPost(page)).filter((post) => post.title && post.slug);
}

async function getNotionBlogPostBySlug(slug: string) {
  const posts = await getNotionBlogPosts();
  const post = posts.find((candidate) => candidate.slug === slug);

  if (!post) {
    return null;
  }

  return {
    ...post,
    content: await notionBlocksToMarkdown(notionFetch, post.id),
  };
}

export async function getBlogPosts() {
  return getNotionBlogPosts();
}

export async function getPublishedBlogPosts() {
  const posts = await getBlogPosts();
  return posts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());
}

export async function getBlogPostBySlug(slug: string) {
  return getNotionBlogPostBySlug(slug);
}
