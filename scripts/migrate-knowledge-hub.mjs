import fs from "node:fs";

const applyChanges = process.argv.includes("--apply");
const env = Object.fromEntries(
  fs
    .readFileSync(".env.local", "utf8")
    .split(/\n/)
    .filter(Boolean)
    .filter((line) => !line.trim().startsWith("#"))
    .map((line) => {
      const index = line.indexOf("=");
      return [line.slice(0, index), line.slice(index + 1)];
    }),
);

const token = env.NOTION_TOKEN;
const databaseId = env.NOTION_DATABASE_ID;
const notionVersion = "2022-06-28";

if (!token || !databaseId) {
  throw new Error("Missing NOTION_TOKEN or NOTION_DATABASE_ID in .env.local");
}

const firstArticle = {
  title: "Why We Built VeeVu",
  slug: "why-we-built-veevu",
  summary:
    "How one overwhelming product decision in a hardware store aisle became the first step toward Tai Ora.",
  collection: "Building Tai Ora",
  part: 1,
  author: "From the Founder",
  readTime: "6 min read",
  publishedAt: "2025-05-18",
  image: "https://www.taiora.ai/og-image.png",
  content: [
    "When people ask me where the idea for VeeVu came from, they often assume it started with technology.",
    "It didn't.",
    "It started in the lawnmower aisle at a hardware store.",
    "I was looking for a new lawnmower and found myself standing in front of about ten different options. Every box made similar promises, but I had no idea which one was actually right for me. There wasn't anyone available to ask, and there wasn't enough information in front of me to make a confident decision.",
    "So I did what most of us do.",
    "I pulled out my phone and started researching.",
    "I searched websites, read reviews, compared features and tried to work out which lawnmower would best suit my needs. What I thought would take a few minutes turned into about 45 minutes of standing in the same aisle, scrolling through page after page of information.",
    "Instead of feeling more confident, I felt even more overwhelmed.",
    "Then something caught my attention.",
    "I looked up and noticed other people throughout the store, standing in different aisles, also looking down at their phones.",
    "I remember wondering...",
    "I wonder if they're doing exactly what I'm doing?",
    "Trying to work out which product is right for them.",
    "That moment stayed with me.",
    "It made me realise this probably wasn't just my experience. It was likely happening every day, in stores all over the world. People were standing in aisles, searching different websites, reading conflicting reviews and trying to piece together enough information to make a decision they felt comfortable with.",
    "Whether it's a lawnmower, skincare, haircare or a wellness product, the feeling is often the same. There are so many choices, information is everywhere, and before you know it, you've spent far more time researching than you ever wanted to in the first place.",
    "Our time is valuable.",
    "People are working full-time, raising families, caring for loved ones, running businesses or simply trying to get through a busy week. Others don't always know where to start or what information they can trust. Buying one product shouldn't feel like a whole research project.",
    "I kept asking myself one simple question.",
    "Surely there has to be a better way.",
    "What if you could simply scan a product and quickly access clear, useful information in one place? Not information designed to convince you to buy something, but information that helps you understand what the product is, what it does and whether you want to learn more.",
    "That question became the beginning of VeeVu.",
    "I didn't want something that told people what to buy.",
    "I wanted something that helped people feel more informed, so they could make the decision that was right for them.",
    "Looking back now, I realise VeeVu wasn't the destination.",
    "It was the first step.",
    "As I explored that original idea, more questions started popping into my head. What happens after someone buys a product? How do they know if it actually worked for them? How can people learn from real experiences over time? Could technology help make those decisions a little easier without taking them away from people?",
    "That's really where Tai Ora started to take shape.",
    "What began as one simple idea in a hardware store aisle slowly grew into something much bigger than product discovery.",
    "And it all started with a lawnmower.",
  ],
};

async function notion(path, init = {}) {
  const response = await fetch(`https://api.notion.com/v1${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": notionVersion,
      "Content-Type": "application/json",
      ...init.headers,
    },
  });
  const body = await response
    .json()
    .catch(async () => ({ raw: await response.text() }));

  if (!response.ok) {
    throw new Error(
      `${response.status} ${body.code || ""} ${body.message || body.raw || ""}`,
    );
  }

  return body;
}

function richText(text) {
  return [{ type: "text", text: { content: text } }];
}

function articleProperties(titleProperty) {
  return {
    [titleProperty]: { title: richText(firstArticle.title) },
    Slug: { rich_text: richText(firstArticle.slug) },
    Summary: { rich_text: richText(firstArticle.summary) },
    Collection: { select: { name: firstArticle.collection } },
    Part: { number: firstArticle.part },
    Author: { rich_text: richText(firstArticle.author) },
    "Read Time": { rich_text: richText(firstArticle.readTime) },
    "Published At": { date: { start: firstArticle.publishedAt } },
    Published: { checkbox: true },
    Image: { url: firstArticle.image },
  };
}

async function getAllPages() {
  const pages = [];
  let startCursor;

  do {
    const result = await notion(`/databases/${databaseId}/query`, {
      method: "POST",
      body: JSON.stringify({
        page_size: 100,
        start_cursor: startCursor,
      }),
    });
    pages.push(...result.results);
    startCursor = result.has_more ? result.next_cursor : undefined;
  } while (startCursor);

  return pages;
}

async function migrate() {
  const database = await notion(`/databases/${databaseId}`);
  const titleProperty =
    Object.entries(database.properties).find(
      ([, property]) => property.type === "title",
    )?.[0] || "Name";
  const pages = await getAllPages();

  if (!applyChanges) {
    console.log(
      JSON.stringify(
        {
          mode: "dry-run",
          database:
            database.title?.map((item) => item.plain_text).join("") ||
            "(untitled)",
          pagesToArchive: pages.length,
          articleToCreate: firstArticle.slug,
          message: "Run with --apply to perform this recoverable migration.",
        },
        null,
        2,
      ),
    );
    return;
  }

  await notion(`/databases/${databaseId}`, {
    method: "PATCH",
    body: JSON.stringify({
      properties: {
        Slug: { rich_text: {} },
        Summary: { rich_text: {} },
        Collection: {
          select: {
            options: [
              { name: "Building Tai Ora", color: "green" },
              { name: "From the Founder", color: "yellow" },
              { name: "Behind the Technology", color: "blue" },
            ],
          },
        },
        Part: { number: { format: "number" } },
        Author: { rich_text: {} },
        "Read Time": { rich_text: {} },
        "Published At": { date: {} },
        Published: { checkbox: {} },
        Image: { url: {} },
      },
    }),
  });

  for (const page of pages) {
    await notion(`/pages/${page.id}`, {
      method: "PATCH",
      body: JSON.stringify({ archived: true }),
    });
  }

  const created = await notion("/pages", {
    method: "POST",
    body: JSON.stringify({
      parent: { database_id: databaseId },
      cover: {
        type: "external",
        external: { url: firstArticle.image },
      },
      properties: articleProperties(titleProperty),
      children: firstArticle.content.map((paragraph) => ({
        object: "block",
        type: "paragraph",
        paragraph: { rich_text: richText(paragraph) },
      })),
    }),
  });

  console.log(
    JSON.stringify(
      {
        mode: "applied",
        archived: pages.length,
        created: firstArticle.slug,
        pageId: created.id,
      },
      null,
      2,
    ),
  );
}

migrate().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
