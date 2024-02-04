import ArticleListView from "@/components/article/ArticleListView";
import { redirect } from "next/navigation";

type ArticleListPageParams = {
    articleId: string,
    pageId: string
}

const ArticleListPage = ({ params }: { params: ArticleListPageParams }) => {
    const articleIds = [
        "blog",
        "research",
        "daily",
        "work"
    ];
    const currentPage: number = parseInt(params.pageId, 10);
    if (!(articleIds.some(value => value === params.articleId) || !Number.isInteger(currentPage))) {
        redirect("/")
    }
    return (
        <div className="w-3/4 mx-auto flex justify-center">
            <ArticleListView articles={[]} category={params.articleId} currentPage={currentPage}/>
        </div>
    );
}

export default ArticleListPage;