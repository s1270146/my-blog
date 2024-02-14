import { notion } from "@/utils/notion";
import { cache } from "react";

type RichText = {
  plain_text: string
}

type Paragraph = {
  paragraph: {
    rich_text: RichText[]
  }
}

export const getProfile = cache(async ({
  isSmall
}: {
  isSmall: boolean
}): Promise<string[]> => {
  const profilePage = isSmall ? process.env.SMALL_PROFILE_PAGE_ID as string : process.env.PROFILE_PAGE_ID as string;
  const pageRes = await notion.blocks.children.list({ block_id: profilePage });
  const profileParagraph: string[] = [];
  for (const block of pageRes.results) {
    const paragraph = block as Paragraph;
    if (typeof paragraph.paragraph !== 'undefined') {
      if (typeof paragraph.paragraph.rich_text !== 'undefined') {
        if (typeof paragraph.paragraph.rich_text[0] !== 'undefined') {
          const plain_text = paragraph.paragraph.rich_text[0].plain_text ?? "";
          profileParagraph.push(plain_text);
        }
      }
    }


  }

  return profileParagraph;
});
