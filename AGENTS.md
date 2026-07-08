<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know
DONT START THE DEV SERVER AT ANY TIME

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Site Theme And Article Typography

- Match this project's established visual theme: deep green background `#004c45`, card surface `#036057`, muted/popover surface `#025850`, gold primary `#d4af37`, sage accent `#91c9ad`, and mint muted text `#b4dac6`.
- For immersive page or major-section backgrounds, prefer the scoped radial background exported from `@/lib/page-background` (`#0e2e28` at top-center fading through `#071814` to `#020806`) instead of changing Tailwind config, shadcn CSS variables, or global body styles.
- Use the semantic tokens in `app/globals.css` for states instead of ad hoc colors: `surface`, `surface-hover`, `surface-active`, `surface-selected`, `primary-hover`, `primary-active`, `secondary-hover`, `secondary-active`, `link`, and `link-hover`.
- Article/blog pages should follow the shadcn/radix typography structure: semantic `article` content or an `.article-content` wrapper with normal `h1`, `h2`, `h3`, `h4`, `p`, `blockquote`, `ul`, `ol`, `table`, `code`, and `pre` elements. Do not recreate typography classes on every article component unless a layout needs a specific exception.
- Preserve the established article hierarchy: balanced extra-bold `h1`, bordered `h2`, semibold `h3/h4`, relaxed paragraphs, gold links, primary-bordered blockquotes, themed tables, and muted inline code/code blocks.
- Make interactive states explicit for full-site components, including hover, active/clicked, selected/current, open/expanded, disabled, focus-visible, and pressed states.
