import { getArticleContent } from "@/utils/get-article-content";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Code } from "@/models/markdown/code";
import { H2 } from "@/models/markdown/heading2";
import { H3 } from "@/models/markdown/heading3";
import { Ul } from "@/models/markdown/unordered-list";
import { A } from "@/models/markdown/anchor";
import PageTitle from "@/components/page/PageTitle";
import RecentArticles from "@/components/article/RecentArticles";
import ProfileWidget from "@/components/common/ProfileWidget";
import { customMetadata } from "@/utils/metadata";
import { notion } from "@/utils/notion";
import { Article } from "@/models/article";

export const runtime = 'edge' // 'nodejs' (default) | 'edge'

type ArticlePageParams = {
    articleId: string
}

export async function generateMetadata({
    params
}
    : {
        params: {
            articleId: string
        }
    }) {
    const pageRes = await notion.pages.retrieve({ page_id: params.articleId });
    const article = Article.fromNotion(pageRes);
    return customMetadata(
        {
            title: `${article.title}`,
            description: article.description,
            keywords: article.tag
        }
    );
}

export const revalidate = 600; 

const ArticlePage = async ({
    params
}: {
    params: ArticlePageParams,
}
) => {
    const data = await getArticleContent({ articleId: params.articleId });
    return (
        <div>
            <div className="w-3/4 mx-auto xl:flex justify-between">
                <div className="mb-10 w-full xl:w-2/3">
                    <div className="flex justify-start gap-4 my-4">
                        <a href="/">
                            home
                        </a>
                        <p>
                            &#8811;
                        </p>
                        <a href={`/list/${data.article.category}/1`}>
                            {data.article.category}
                        </a>
                        <p>
                            &#8811;
                        </p>
                        <a href={`/article/${params.articleId}`} className="text-ellipsis whitespace-nowrap overflow-hidden">
                            {data.article.title}
                        </a>
                    </div>
                    <h1 className="text-3xl mt-4 mb-2">{data.article.title}</h1>
                    <div className="flex justify-between">
                        <p>{`作成日:${data.article.createdAt}`}</p>
                        <p>{data.article.updatedAt != '' ? `更新日:${data.article.updatedAt}` : ''}</p>
                    </div>
                    {
                        typeof data.article.imgUrl !== 'undefined'
                            ? <img src={data.article.imgUrl} alt="main image" className="object-cover h-40 md:h-80 w-full" />
                            : null
                    }
                    <div className="w-full md:w-1/2 mx-auto bg-light-gray border-2 border-mid-gray my-4">
                        <p className="text-center bg-mid-gray text-white text-xl py-2">
                            目次
                        </p>
                        <ReactMarkdown
                            allowedElements={["h2", "h3"]}
                            className='agenda'
                            components={{
                                h2: ({ node }) => {
                                    const text = typeof node !== "undefined" && node.children.length > 0 && "value" in node.children[0]
                                        ? node?.children[0]["value"]
                                        : "";
                                    return <h2>
                                        <a href={`#${text}`}>{`・${text}`}</a>
                                    </h2>
                                },
                                h3: ({ node }) => {
                                    const text = typeof node !== "undefined" && node.children.length > 0 && "value" in node.children[0]
                                        ? node?.children[0]["value"]
                                        : "";
                                    return <h3>
                                        <a href={`#${text}`}>{`・${text}`}</a>
                                    </h3>
                                },
                            }}
                        >
                            {data.body}
                        </ReactMarkdown>

                    </div>
                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} className='markdown' components={
                        {
                            h2: H2,
                            h3: H3,
                            ul: Ul,
                            code: Code,
                            a: A
                        }
                    }>
                        {data.body}
                    </ReactMarkdown>
                </div>
                <div className="w-full py-10 xl:pl-10 xl:w-1/3">
                    <ProfileWidget />
                </div>
            </div>
            <div className="my-10">
                <PageTitle title="最近の投稿" />
                <RecentArticles />
            </div>
        </div>
    );
}

export default ArticlePage;