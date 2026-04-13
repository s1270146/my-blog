import React from "react";

type HeadingBlock = {
  type: "heading";
  level: 1 | 2 | 3;
  text: string;
  id: string;
};

type ParagraphBlock = {
  type: "paragraph";
  lines: string[];
};

type ListBlock = {
  type: "list";
  ordered: boolean;
  items: string[];
};

type CodeBlock = {
  type: "code";
  language?: string;
  content: string;
};

type Block = HeadingBlock | ParagraphBlock | ListBlock | CodeBlock;

const slugifyHeading = (text: string) =>
  text.trim().toLowerCase().replace(/\s+/g, "-");

const renderInline = (text: string): React.ReactNode[] => {
  const parts = text.split(/(`[^`]+`|\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={index} className="rounded bg-light-gray px-1 py-0.5 text-sm">
          {part.slice(1, -1)}
        </code>
      );
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={index}
          href={linkMatch[2]}
          className="text-blue-700 underline"
          target="_blank"
          rel="noreferrer"
        >
          {linkMatch[1]}
        </a>
      );
    }

    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
};

const parseMarkdown = (markdown: string): Block[] => {
  const lines = markdown.split("\n");
  const blocks: Block[] = [];
  let paragraph: string[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;
  let code: { language?: string; lines: string[] } | null = null;

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      blocks.push({ type: "paragraph", lines: paragraph });
      paragraph = [];
    }
  };

  const flushList = () => {
    if (list) {
      blocks.push({ type: "list", ordered: list.ordered, items: list.items });
      list = null;
    }
  };

  const flushCode = () => {
    if (code) {
      blocks.push({
        type: "code",
        language: code.language,
        content: code.lines.join("\n"),
      });
      code = null;
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.replace(/\r$/, "");

    const fenceStart = line.match(/^```(.*)$/);
    if (fenceStart) {
      flushParagraph();
      flushList();
      if (code) {
        flushCode();
      } else {
        code = { language: fenceStart[1].trim() || undefined, lines: [] };
      }
      continue;
    }

    if (code) {
      code.lines.push(line);
      continue;
    }

    if (line.trim() === "") {
      flushParagraph();
      flushList();
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.*)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const text = heading[2].trim();
      blocks.push({
        type: "heading",
        level: heading[1].length as 1 | 2 | 3,
        text,
        id: slugifyHeading(text),
      });
      continue;
    }

    const orderedItem = line.match(/^\d+\.\s+(.*)$/);
    if (orderedItem) {
      flushParagraph();
      if (!list || !list.ordered) {
        flushList();
        list = { ordered: true, items: [] };
      }
      list.items.push(orderedItem[1]);
      continue;
    }

    const unorderedItem = line.match(/^[-*]\s+(.*)$/);
    if (unorderedItem) {
      flushParagraph();
      if (!list || list.ordered) {
        flushList();
        list = { ordered: false, items: [] };
      }
      list.items.push(unorderedItem[1]);
      continue;
    }

    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  flushCode();

  return blocks;
};

export const SimpleMarkdown = ({ markdown }: { markdown: string }) => {
  const blocks = parseMarkdown(markdown);

  return (
    <div className="markdown">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          if (block.level === 1) {
            return (
              <h1 key={index} id={block.id} className="text-2xl font-bold mt-8 mb-4">
                {block.text}
              </h1>
            );
          }

          if (block.level === 2) {
            return (
              <h2 key={index} id={block.id}>
                {block.text}
              </h2>
            );
          }

          return (
            <h3 key={index} id={block.id}>
              {block.text}
            </h3>
          );
        }

        if (block.type === "list") {
          const ListTag = block.ordered ? "ol" : "ul";
          return (
            <div key={index} className="mb-4 mt-4">
              <ListTag className={block.ordered ? "list-decimal ml-8" : "list-disc list-outside ml-8"}>
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="my-1">
                    {renderInline(item)}
                  </li>
                ))}
              </ListTag>
            </div>
          );
        }

        if (block.type === "code") {
          return (
            <pre
              key={index}
              className="my-4 overflow-x-auto rounded bg-mid-gray p-4 text-sm leading-6 text-white"
            >
              <code>{block.content}</code>
            </pre>
          );
        }

        return (
          <p key={index} className="my-2 max-sm:text-xs leading-7">
            {renderInline(block.lines.join(" "))}
          </p>
        );
      })}
    </div>
  );
};

export const SimpleMarkdownToc = ({ markdown }: { markdown: string }) => {
  const headings = parseMarkdown(markdown).filter(
    (block): block is HeadingBlock => block.type === "heading" && block.level >= 2
  );

  if (headings.length === 0) {
    return <p className="px-4 py-3 text-sm text-mid-gray">目次はありません。</p>;
  }

  return (
    <div className="agenda px-4 py-3">
      {headings.map((heading, index) => (
        <div key={`${heading.id}-${index}`} className={heading.level === 3 ? "ml-4" : ""}>
          <a href={`#${heading.id}`}>{`・${heading.text}`}</a>
        </div>
      ))}
    </div>
  );
};
