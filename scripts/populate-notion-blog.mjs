import fs from "node:fs";

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

if (!token || !databaseId) {
  throw new Error("Missing NOTION_TOKEN or NOTION_DATABASE_ID in .env.local");
}

const notionVersion = "2022-06-28";

const posts = [
  {
    title: "Tai Ora Is Launching: A More Honest Path to Beauty and Wellness",
    summary:
      "Discover products, track what truly works for you, and make better decisions without hype.",
    category: "News",
    publishedAt: "2026-07-02",
    image: "https://picsum.photos/seed/taiora-launching-honest-wellness/1100/680",
    slug: "tai-ora-is-launching",
    content: [
      "Tai Ora is launching with a simple belief: beauty and wellness should be easier to understand, more personal, and more honest.",
      "The platform brings together product discovery, VeeVu previews, iGlo tracking, creator content, and brand tools so people can learn from real usage instead of relying only on claims.",
      "For shoppers, Tai Ora helps reveal product details, suitability, ingredients, benefits, and authentic reviews. For creators, it creates a path to share original product journeys. For brands, it opens a more ethical way to connect with people who are looking for products that fit their needs.",
      "This is the start of a public home for the Tai Ora community: one built around truth in beauty and wellness with purpose.",
    ],
  },
  {
    title: "A Message From Our Founder",
    summary:
      "Why we built Tai Ora to bring more truth, trust, and transparency into beauty and wellness.",
    category: "News",
    publishedAt: "2026-07-02",
    image: "https://picsum.photos/seed/taiora-founder-message/720/460",
    slug: "message-from-our-founder",
    content: [
      "Tai Ora was created because choosing beauty and wellness products should not feel like guesswork.",
      "Too often, people are asked to trust polished claims without enough context about ingredients, real routines, personal needs, or long-term results. We wanted to build a platform that respects lived experience and gives people better signals before they decide what to use.",
      "That means supporting private-by-default tracking, authentic creator stories, transparent product previews, and brand participation that is grounded in trust rather than hype.",
      "Our goal is not to tell everyone what to buy. It is to help each person discover what works for them with more clarity, confidence, and balance.",
    ],
  },
  {
    title: "Why Your Beauty Journey Should Be Personal, Not Generic",
    summary:
      "Your skin, routines, preferences, and lived experience matter more than one-size-fits-all advice.",
    category: "Insights",
    publishedAt: "2026-07-02",
    image: "https://picsum.photos/seed/taiora-personal-beauty-journey/720/460",
    slug: "beauty-journey-personal-not-generic",
    content: [
      "No two people experience beauty and wellness products in exactly the same way. Skin type, hair type, sensitivities, goals, habits, and context all shape what works.",
      "Tai Ora is built around that reality. The app asks about personal preferences and wellness goals so discovery can become more useful over time.",
      "Instead of treating product choice as a generic ranking, Tai Ora helps people connect product information with their own journey, including suitability signals, reviews, and progress tracking.",
      "Personalization should make people feel more informed, not more pressured. That is the standard Tai Ora is building toward.",
    ],
  },
  {
    title: "What Is iGlo? Tracking Your Real Product Journey Over Time",
    summary:
      "Log your glow, compare before and after moments, and understand how products actually work for you.",
    category: "Insights",
    publishedAt: "2026-07-02",
    image: "https://picsum.photos/seed/taiora-iglo-glow-log/720/500",
    slug: "what-is-iglo",
    content: [
      "iGlo is Tai Ora's way of helping people track their real experience with a product or routine over time.",
      "Users can log their glow journey, add images, follow their progress, and keep everything private by default. If they choose, creators can make approved iGlos public or available for licensing.",
      "The point is simple: real product stories become more useful when they are grounded in time, context, and visible progress.",
      "iGlo gives shoppers and creators a structured way to move beyond first impressions and show what happened across the journey.",
    ],
  },
  {
    title: "Meet VeeVu: Quick Product Previews Built for Better Discovery",
    summary: "A faster way to understand products before you decide to buy.",
    category: "Insights",
    publishedAt: "2026-07-02",
    image: "https://picsum.photos/seed/taiora-veevu-product-preview/720/500",
    slug: "meet-veevu-product-previews",
    content: [
      "VeeVu is designed to make product discovery quicker and clearer.",
      "A VeeVu gives shoppers a short product preview with useful context, helping them understand what a product is, what it offers, and whether they want to learn more.",
      "Tai Ora does not sell or fulfil products directly. When a shopper decides to purchase, they are redirected to the brand's own website, with referral transparency built into the experience.",
      "For brands and creators, VeeVu creates a more visual way to introduce products without relying only on static product pages.",
    ],
  },
  {
    title: "Scan to Reveal the Truth: How Barcode Search Helps Smarter Shopping",
    summary: "Search, scan, and compare products with less guesswork.",
    category: "Insights",
    publishedAt: "2026-07-02",
    image: "https://picsum.photos/seed/taiora-barcode-search/720/500",
    slug: "barcode-search-smarter-shopping",
    content: [
      "Product discovery often starts in the aisle, at home, or in a moment when someone wants a quick answer.",
      "Tai Ora's scan and search experience is built for that moment. Shoppers can scan a barcode or search for a product to see available details such as ingredients, benefits, how to use information, reviews, and product content.",
      "The goal is not to overwhelm people with data. It is to make the right information easier to reach when a decision is being made.",
      "Smarter shopping starts when people can connect product claims with context they can actually use.",
    ],
  },
  {
    title: "Built for Shoppers, Creators, and Ethical Brands",
    summary:
      "Tai Ora connects people who want better products with creators and brands committed to authenticity.",
    category: "News",
    publishedAt: "2026-07-02",
    image: "https://picsum.photos/seed/taiora-shoppers-creators-brands/720/500",
    slug: "built-for-shoppers-creators-ethical-brands",
    content: [
      "Tai Ora is not only a product discovery app. It is an ecosystem for shoppers, creators, and brands.",
      "Shoppers can discover and track products. Creators can share original, authentic product experiences and build licensing opportunities. Brands can manage products, review content, and connect with audiences in a more transparent way.",
      "The platform is intentionally built around ethical participation: original creator content, authentic usage, cultural respect, reviewed brand profiles, and clear licensing workflows.",
      "When each side of the ecosystem has better tools, beauty and wellness discovery can become more useful for everyone.",
    ],
  },
];

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

  const body = await response.json().catch(async () => ({ raw: await response.text() }));

  if (!response.ok) {
    throw new Error(`${response.status} ${body.code || ""} ${body.message || body.raw || ""}`);
  }

  return body;
}

function richText(text) {
  return [{ type: "text", text: { content: text } }];
}

function pageProperties(titleProperty, post) {
  return {
    [titleProperty]: {
      title: richText(post.title),
    },
    Slug: {
      rich_text: richText(post.slug),
    },
    Summary: {
      rich_text: richText(post.summary),
    },
    Category: {
      select: { name: post.category },
    },
    "Published At": {
      date: { start: post.publishedAt },
    },
    Published: {
      checkbox: true,
    },
    Image: {
      url: post.image,
    },
  };
}

function paragraphBlock(text) {
  return {
    object: "block",
    type: "paragraph",
    paragraph: {
      rich_text: richText(text),
    },
  };
}

async function ensureSchema(database) {
  const titleProperty =
    Object.entries(database.properties).find(([, property]) => property.type === "title")?.[0] ||
    "Name";

  const existing = database.properties;
  const properties = {};

  if (!existing.Slug) properties.Slug = { rich_text: {} };
  if (!existing.Summary) properties.Summary = { rich_text: {} };
  if (!existing.Category) {
    properties.Category = {
      select: {
        options: [
          { name: "News", color: "green" },
          { name: "Insights", color: "yellow" },
        ],
      },
    };
  }
  if (!existing["Published At"]) properties["Published At"] = { date: {} };
  if (!existing.Published) properties.Published = { checkbox: {} };
  if (!existing.Image) properties.Image = { url: {} };

  if (Object.keys(properties).length) {
    await notion(`/databases/${databaseId}`, {
      method: "PATCH",
      body: JSON.stringify({ properties }),
    });
  }

  return titleProperty;
}

async function findPostBySlug(slug) {
  const result = await notion(`/databases/${databaseId}/query`, {
    method: "POST",
    body: JSON.stringify({
      page_size: 1,
      filter: {
        property: "Slug",
        rich_text: { equals: slug },
      },
    }),
  });

  return result.results?.[0] || null;
}

async function populate() {
  const database = await notion(`/databases/${databaseId}`);
  const titleProperty = await ensureSchema(database);

  const created = [];
  const updated = [];

  for (const post of posts) {
    const existing = await findPostBySlug(post.slug);
    const properties = pageProperties(titleProperty, post);

    if (existing) {
      await notion(`/pages/${existing.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          cover: {
            type: "external",
            external: { url: post.image },
          },
          properties,
        }),
      });
      updated.push(post.slug);
      continue;
    }

    await notion("/pages", {
      method: "POST",
      body: JSON.stringify({
        parent: { database_id: databaseId },
        cover: {
          type: "external",
          external: { url: post.image },
        },
        properties,
        children: post.content.map(paragraphBlock),
      }),
    });
    created.push(post.slug);
  }

  console.log(
    JSON.stringify(
      {
        database: database.title?.map((item) => item.plain_text).join("") || "(untitled)",
        created,
        updated,
      },
      null,
      2,
    ),
  );
}

populate().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
