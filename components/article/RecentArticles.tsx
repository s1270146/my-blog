import { Article } from "@/models/article";
import ArticleCard from "@/components/article/ArticleCard";
import { getRecentArticle } from "@/utils/get-recent-article";
import ConstructText from "@/components/common/ConstructText";

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
        <div className="flex justify-center mb-4">
            <div className="w-3/4 md:flex justify-start gap-4">
                {
                    articles.length == 0
                    ? <ConstructText/>
                    :
                    articles.map(
                        (article, index) =>
                            <div className="w-full md:w-[33%] min-w-[25%]" key={"article" + String(index)}>
                                <ArticleCard article={article} />
                            </div>
                    )
                }
            </div>
        </div>
    );
}

export default RecentArticles;