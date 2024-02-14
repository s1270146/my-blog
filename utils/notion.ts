import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

export const notion = new Client({
  auth: process.env.NOTION_KEY,
});

export const n2m = new NotionToMarkdown({notionClient: notion});