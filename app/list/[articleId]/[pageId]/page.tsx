import ArticleListView from "@/components/article/ArticleListView";
import ProfileWidget from "@/components/common/ProfileWidget";
import { customMetadata } from "@/utils/metadata";
import { redirect } from "next/navigation";

export const runtime = 'edge' // 'nodejs' (default) | 'edge'

export const revalidate = parseInt(process.env.NEXT_PUBLIC_REVALIDATE_TIME ?? "0");

type ArticleListPageParams = {
    articleId: string,
    pageId: string
}

export function generateMetadata({
    params
}
    : {
        params: {
            articleId: string
        }
    }) {
    return customMetadata(
        {
            title: `MK:${params.articleId}`
        }
    );
}

const ArticleListPage = ({ params }: { params: ArticleListPageParams }) => {
    const articleIds = [
        "blog",
        "research",
        "dialy",
        "work"
    ];
    const currentPage: number = parseInt(params.pageId, 10);
    if (!(articleIds.some(value => value === params.articleId) || !Number.isInteger(currentPage))) {
        redirect("/")
    }
    return (
        <div className="w-3/4 mx-auto xl:flex justify-between">
            <div className="xl:w-2/3">
                <div className="flex justify-start gap-4 mt-4">
                    <a href="/">
                        home
                    </a>
                    <p>
                        &#8811;
                    </p>
                    <a href={`/list/${params.articleId}/1`}>
                        {params.articleId}
                    </a>
                </div>
                <ArticleListView category={params.articleId} currentPage={currentPage} />
            </div>
            <div className="w-full py-10 xl:w-1/3">
                <ProfileWidget />
            </div>
        </div>
    );
}

export default ArticleListPage;