import { Article } from "@/models/article";
import ArticleCard from "@/components/article/ArticleCard";
import { getRecentArticle } from "@/utils/get-recent-article";

type RecentArticlesProps = {
    category?: string
}

const RecentArticles = async (props: RecentArticlesProps) => {
    const pageRes = await getRecentArticle({category: props.category});
    const articles: Article[] = [];
    for (const article of pageRes.results) {
        articles.push(Article.fromNotion(article));
    }
    return (
        <div className="flex justify-center gap-4">
            {articles.map(
                (article, index) =>
                    <div key={"article" + String(index)}>
                        <ArticleCard article={article} />
                    </div>
            )}
        </div>
    );
}

export default RecentArticles;