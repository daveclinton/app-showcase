import { mdxComponent, mdxSelfClosingComponent } from "@/lib/notion-to-mdx";
import { plainRichText, richTextToMarkdown } from "@/lib/notion-rich-text";

type NotionBlock = {
  id: string;
  type: string;
  has_children?: boolean;
  [key: string]: unknown;
};

type NotionFetch = <T>(pathName: string, init?: RequestInit) => Promise<T>;

function indentMarkdown(markdown: string) {
  return markdown
    .split("\n")
    .map((line) => (line ? `  ${line}` : line))
    .join("\n");
}

function blockUrl(value: Record<string, unknown>) {
  const external = value.external as { url?: string } | undefined;
  const file = value.file as { url?: string } | undefined;
  return external?.url || file?.url || (typeof value.url === "string" ? value.url : "");
}

function calloutIcon(value: Record<string, unknown>) {
  const icon = value.icon as { type?: string; emoji?: string } | undefined;
  return icon?.type === "emoji" && icon.emoji ? icon.emoji : "💡";
}

function calloutColor(value: Record<string, unknown>) {
  const color = typeof value.color === "string" ? value.color : "default";
  return color.replace(/_background$/, "");
}

async function getBlockChildren(notionFetch: NotionFetch, blockId: string) {
  const blocks: NotionBlock[] = [];
  let startCursor: string | undefined;

  do {
    const data = await notionFetch<{
      results: NotionBlock[];
      has_more: boolean;
      next_cursor?: string;
    }>(
      `/blocks/${blockId}/children?page_size=100${
        startCursor ? `&start_cursor=${startCursor}` : ""
      }`,
    );

    blocks.push(...data.results);
    startCursor = data.next_cursor || undefined;

    if (!data.has_more) {
      break;
    }
  } while (startCursor);

  return blocks;
}

async function blocksToMarkdown(
  notionFetch: NotionFetch,
  blocks: NotionBlock[],
): Promise<string> {
  const markdown = await Promise.all(
    blocks.map((block) => blockToMarkdown(notionFetch, block)),
  );
  return markdown.filter(Boolean).join("\n\n");
}

async function tableToMarkdown(
  notionFetch: NotionFetch,
  block: NotionBlock,
  value: Record<string, unknown>,
): Promise<string> {
  if (!block.has_children) {
    return "";
  }

  const rows = await getBlockChildren(notionFetch, block.id);
  const parsedRows = rows
    .filter((row) => row.type === "table_row")
    .map((row) => {
      const cells = (row.table_row as { cells?: unknown[] })?.cells || [];
      return cells.map((cell) =>
        richTextToMarkdown(cell as Parameters<typeof richTextToMarkdown>[0])
          .replace(/\|/g, "\\|")
          .replace(/\n/g, " "),
      );
    })
    .filter((row) => row.length);

  if (!parsedRows.length) {
    return "";
  }

  const width = parsedRows[0].length;
  const normalizedRows = parsedRows.map((row) => {
    const next = [...row];
    while (next.length < width) {
      next.push("");
    }
    return next.slice(0, width);
  });

  const hasHeader = value.has_column_header === true;
  const header = hasHeader ? normalizedRows[0] : normalizedRows[0].map(() => "");
  const bodyRows = hasHeader ? normalizedRows.slice(1) : normalizedRows;

  return [
    `| ${header.join(" | ")} |`,
    `| ${header.map(() => "---").join(" | ")} |`,
    ...bodyRows.map((row) => `| ${row.join(" | ")} |`),
  ].join("\n");
}

async function blockToMarkdown(notionFetch: NotionFetch, block: NotionBlock): Promise<string> {
  const value = (block[block.type] as Record<string, unknown>) || {};
  const children = block.has_children
    ? indentMarkdown(
        (await blocksToMarkdown(notionFetch, await getBlockChildren(notionFetch, block.id))).trim(),
      )
    : "";

  switch (block.type) {
    case "paragraph":
      return [
        richTextToMarkdown(value.rich_text as Parameters<typeof richTextToMarkdown>[0]),
        children,
      ]
        .filter(Boolean)
        .join("\n\n");
    case "heading_1":
      return `# ${richTextToMarkdown(value.rich_text as Parameters<typeof richTextToMarkdown>[0])}`;
    case "heading_2":
      return `## ${richTextToMarkdown(value.rich_text as Parameters<typeof richTextToMarkdown>[0])}`;
    case "heading_3":
      return `### ${richTextToMarkdown(value.rich_text as Parameters<typeof richTextToMarkdown>[0])}`;
    case "bulleted_list_item":
      return [
        `- ${richTextToMarkdown(value.rich_text as Parameters<typeof richTextToMarkdown>[0])}`,
        children,
      ]
        .filter(Boolean)
        .join("\n");
    case "numbered_list_item":
      return [
        `1. ${richTextToMarkdown(value.rich_text as Parameters<typeof richTextToMarkdown>[0])}`,
        children,
      ]
        .filter(Boolean)
        .join("\n");
    case "to_do":
      return [
        `- [${value.checked ? "x" : " "}] ${richTextToMarkdown(
          value.rich_text as Parameters<typeof richTextToMarkdown>[0],
        )}`,
        children,
      ]
        .filter(Boolean)
        .join("\n");
    case "toggle":
      return mdxComponent(
        "Toggle",
        {
          title: richTextToMarkdown(value.rich_text as Parameters<typeof richTextToMarkdown>[0]),
        },
        children,
      );
    case "quote": {
      const quoteText = richTextToMarkdown(
        value.rich_text as Parameters<typeof richTextToMarkdown>[0],
      );
      const quoted = quoteText
        .split("\n")
        .map((line) => `> ${line}`)
        .join("\n");
      return [quoted, children].filter(Boolean).join("\n\n");
    }
    case "callout":
      return mdxComponent(
        "Callout",
        {
          icon: calloutIcon(value),
          color: calloutColor(value),
        },
        [
          richTextToMarkdown(value.rich_text as Parameters<typeof richTextToMarkdown>[0]),
          children,
        ]
          .filter(Boolean)
          .join("\n\n"),
      );
    case "code": {
      const language = String(value.language || "").toLowerCase();
      const code = plainRichText(value.rich_text as Parameters<typeof plainRichText>[0]);
      return `\`\`\`${language}\n${code}\n\`\`\``;
    }
    case "image": {
      const source = blockUrl(value);
      const caption = plainRichText(value.caption as Parameters<typeof plainRichText>[0]);
      return source ? `![${caption || "Blog image"}](${source})` : "";
    }
    case "video": {
      const source = blockUrl(value);
      const caption = plainRichText(value.caption as Parameters<typeof plainRichText>[0]);
      return source ? mdxSelfClosingComponent("Video", { src: source, caption }) : "";
    }
    case "file":
    case "pdf": {
      const source = blockUrl(value);
      const name =
        (typeof value.name === "string" && value.name) ||
        plainRichText(value.caption as Parameters<typeof plainRichText>[0]) ||
        "Download file";
      return source ? mdxSelfClosingComponent("FileLink", { href: source, title: name }) : "";
    }
    case "bookmark":
    case "embed":
    case "link_preview": {
      const url = typeof value.url === "string" ? value.url : "";
      return url ? mdxSelfClosingComponent("Bookmark", { url }) : "";
    }
    case "divider":
      return "---";
    case "table":
      return tableToMarkdown(notionFetch, block, value);
    case "synced_block":
    case "child_page":
      return children;
    default:
      return children;
  }
}

export async function notionBlocksToMarkdown(notionFetch: NotionFetch, blockId: string) {
  const blocks = await getBlockChildren(notionFetch, blockId);
  return blocksToMarkdown(notionFetch, blocks);
}
