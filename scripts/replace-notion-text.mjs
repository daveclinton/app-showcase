import fs from "node:fs";

const applyChanges = process.argv.includes("--apply");
const searchText = "Bunnings";
const replacementText = "Hardware store";
const notionVersion = "2022-06-28";

function readEnv() {
  return Object.fromEntries(
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
}

const env = readEnv();
const token = env.NOTION_TOKEN;
const databaseId = env.NOTION_DATABASE_ID;

if (!token || !databaseId) {
  throw new Error("Missing NOTION_TOKEN or NOTION_DATABASE_ID in .env.local");
}

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

function replaceInRichText(richText = []) {
  let changed = false;
  const next = richText.map((item) => {
    if (item.type !== "text" || !item.text?.content?.includes(searchText)) {
      return item;
    }

    changed = true;
    return {
      ...item,
      plain_text: item.plain_text?.replaceAll(searchText, replacementText),
      text: {
        ...item.text,
        content: item.text.content.replaceAll(searchText, replacementText),
      },
    };
  });

  return { changed, richText: next };
}

function propertyPatch(property) {
  if (!property) {
    return null;
  }

  if (property.type === "title") {
    const { changed, richText } = replaceInRichText(property.title);
    return changed ? { title: richText } : null;
  }

  if (property.type === "rich_text") {
    const { changed, richText } = replaceInRichText(property.rich_text);
    return changed ? { rich_text: richText } : null;
  }

  return null;
}

function blockPatch(block) {
  const value = block[block.type];
  if (!value?.rich_text) {
    return null;
  }

  const { changed, richText } = replaceInRichText(value.rich_text);
  if (!changed) {
    return null;
  }

  return {
    [block.type]: {
      rich_text: richText,
    },
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

async function getChildren(blockId) {
  const blocks = [];
  let startCursor;

  do {
    const query = new URLSearchParams({ page_size: "100" });
    if (startCursor) {
      query.set("start_cursor", startCursor);
    }

    const result = await notion(`/blocks/${blockId}/children?${query}`);
    blocks.push(...result.results);
    startCursor = result.has_more ? result.next_cursor : undefined;
  } while (startCursor);

  return blocks;
}

async function collectMatchingBlocks(parentId, matches) {
  const blocks = await getChildren(parentId);

  for (const block of blocks) {
    const patch = blockPatch(block);
    if (patch) {
      matches.push({ block, patch });
    }

    if (block.has_children) {
      await collectMatchingBlocks(block.id, matches);
    }
  }
}

function pageTitle(page) {
  const titleProperty = Object.values(page.properties || {}).find(
    (property) => property.type === "title",
  );
  return titleProperty?.title?.map((item) => item.plain_text || "").join("") || page.id;
}

async function main() {
  const pages = await getAllPages();
  const propertyMatches = [];
  const blockMatches = [];

  for (const page of pages) {
    for (const [name, property] of Object.entries(page.properties || {})) {
      const patch = propertyPatch(property);
      if (patch) {
        propertyMatches.push({ page, name, patch });
      }
    }

    await collectMatchingBlocks(page.id, blockMatches);
  }

  if (applyChanges) {
    for (const match of propertyMatches) {
      await notion(`/pages/${match.page.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          properties: {
            [match.name]: match.patch,
          },
        }),
      });
    }

    for (const match of blockMatches) {
      await notion(`/blocks/${match.block.id}`, {
        method: "PATCH",
        body: JSON.stringify(match.patch),
      });
    }
  }

  console.log(
    JSON.stringify(
      {
        mode: applyChanges ? "applied" : "dry-run",
        searchText,
        replacementText,
        propertyMatches: propertyMatches.map((match) => ({
          page: pageTitle(match.page),
          property: match.name,
        })),
        blockMatches: blockMatches.map((match) => ({
          blockId: match.block.id,
          type: match.block.type,
        })),
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
