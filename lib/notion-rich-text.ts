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

function escapeMarkdown(value: string) {
  return value.replace(/([\\`*_{}[\]()#+\-.!|>])/g, "\\$1");
}

function applyAnnotations(value: string, item: NotionRichText) {
  let result = escapeMarkdown(value);

  if (item.annotations?.code) {
    result = `\`${result.replace(/`/g, "\\`")}\``;
  }

  if (item.annotations?.bold) {
    result = `**${result}**`;
  }

  if (item.annotations?.italic) {
    result = `_${result}_`;
  }

  if (item.annotations?.strikethrough) {
    result = `~~${result}~~`;
  }

  if (item.href) {
    result = `[${result}](${item.href})`;
  }

  return result;
}

export function richTextToMarkdown(text: NotionRichText[] = []) {
  return text.map((item) => applyAnnotations(item.plain_text || "", item)).join("");
}

export function plainRichText(text: NotionRichText[] = []) {
  return text.map((item) => item.plain_text || "").join("").trim();
}

export type { NotionRichText };
