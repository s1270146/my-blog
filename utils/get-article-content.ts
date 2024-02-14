import { Article } from "@/models/article";
import { n2m, notion } from "@/utils/notion";
import { cache } from "react";

type getArticleContent = {
  articleId: string;
};

export const getArticleContent = cache(async (props: getArticleContent) => {
  const pageRes = await notion.pages.retrieve({page_id: props.articleId});
  const article = Article.fromNotion(pageRes);
  const mdblocks = await n2m.pageToMarkdown(props.articleId);
  const mdString = n2m.toMarkdownString(mdblocks);
  return {
    article: article,
    body: mdString.parent
  };
});
