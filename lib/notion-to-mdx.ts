function escapeMdxAttribute(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n");
}

export function mdxSelfClosingComponent(
  name: string,
  props: Record<string, string | number | boolean | undefined>,
) {
  const attributes = Object.entries(props)
    .filter(([, value]) => value !== undefined && value !== "")
    .map(([key, value]) => {
      if (typeof value === "boolean") {
        return value ? key : `${key}={false}`;
      }

      if (typeof value === "number") {
        return `${key}={${value}}`;
      }

      return `${key}="${escapeMdxAttribute(String(value))}"`;
    })
    .join(" ");

  return `<${name}${attributes ? ` ${attributes}` : ""} />`;
}

export function mdxComponent(
  name: string,
  props: Record<string, string | number | boolean | undefined>,
  children: string,
) {
  const attributes = Object.entries(props)
    .filter(([, value]) => value !== undefined && value !== "")
    .map(([key, value]) => {
      if (typeof value === "boolean") {
        return value ? key : `${key}={false}`;
      }

      if (typeof value === "number") {
        return `${key}={${value}}`;
      }

      return `${key}="${escapeMdxAttribute(String(value))}"`;
    })
    .join(" ");

  return `<${name}${attributes ? ` ${attributes}` : ""}>\n${children}\n</${name}>`;
}

export { escapeMdxAttribute };
