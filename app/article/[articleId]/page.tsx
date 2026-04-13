import { getArticleContent } from "@/utils/get-article-content";
import PageTitle from "@/components/page/PageTitle";
import RecentArticles from "@/components/article/RecentArticles";
import ProfileWidget from "@/components/common/ProfileWidget";
import { SimpleMarkdown, SimpleMarkdownToc } from "@/components/article/SimpleMarkdown";
import { customMetadata } from "@/utils/metadata";
import { notion } from "@/utils/notion";
import { Article } from "@/models/article";
import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";
import defaultPhoto from '@/public/default.png';

export const runtime = 'edge'

type ArticlePageParams = {
    articleId: string
}

export async function generateMetadata({
    params
}
    : {
        params: Promise<ArticlePageParams>
    }) {
    const { articleId } = await params;
    const pageRes = await notion.pages.retrieve({ page_id: articleId });
    const article = Article.fromNotion(pageRes);
    return customMetadata(
        {
            title: `${article.title}`,
            description: article.description,
            keywords: article.tag,
            imagePath: article.imgUrl,
        }
    );
}

const ArticlePage = async ({
    params
}: {
    params: Promise<ArticlePageParams>,
}
) => {
    const { articleId } = await params;
    const data = await getArticleContent({ articleId });
    return (
        <div>
            <div className="sm:w-3/4 w-11/12 mx-auto xl:flex justify-between">
                <div className="mb-10 w-full xl:w-2/3 p-4 bg-light-gray mt-2">
                    <Breadcrumb
                        paths={[
                            {
                                path: `/list/${data.article.category}/1`,
                                name: data.article.category
                            },
                            {
                                path: `/article/${articleId}`,
                                name: data.article.title
                            }
                        ]}
                    />
                    <h1 className="sm:text-3xl text-xl mt-4 mb-2">{data.article.title}</h1>
                    <div className="flex justify-between">
                        <p>{`作成日:${data.article.createdAt}`}</p>
                        <p>{data.article.updatedAt != '' ? `更新日:${data.article.updatedAt}` : ''}</p>
                    </div>
                    {
                        typeof data.article.imgUrl !== 'undefined'
                            ? <img src={data.article.imgUrl} alt="main image" className="object-cover h-40 md:h-80 w-full" />
                            : <Image src={defaultPhoto} alt="default photo" className="object-cover h-40 md:h-80 w-full" />
                    }
                    <div className="w-full md:w-1/2 mx-auto bg-light-gray border-2 border-mid-gray my-4">
                        <p className="text-center bg-mid-gray text-white sm:text-xl text-md py-2">
                            目次
                        </p>
                        <SimpleMarkdownToc markdown={data.body} />
                    </div>
                    <SimpleMarkdown markdown={data.body} />
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
