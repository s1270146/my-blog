import { Article } from "@/models/article";
import ArticleListItem from "./ArticleListItem";
import Pagenation from "./Pagenation";
import { getArticleList } from "@/utils/get-article-list";
import ConstructText from "../common/ConstructText";

type ArticleListViewProps = {
    articles: Article[],
    currentPage: number,
    category: string
}

const ArticleListView = async (props: ArticleListViewProps) => {
    const pageRes = await getArticleList({ category: props.category });
    const articles: Article[] = [];
    for (const article of pageRes.results) {
        articles.push(Article.fromNotion(article));
    }
    const countPage = articles.length % 7 == 0 ? Math.floor(articles.length / 7) : Math.floor(articles.length / 7) + 1;
    const pageNationClass = countPage < 2 ? "hidden" : "";
    return (
        <div className="w-full max-w-md mt-4 mb-10">
            {
                articles.length > 0 ?
                articles.map((article, index) =>
                    <div key={"article" + index}>
                        <ArticleListItem article={article}/>
                    </div>
                )
                : <ConstructText/>
            }
            <div className={pageNationClass}>
                <Pagenation category={props.category} countPage={countPage} currentPage={props.currentPage} />
            </div>
        </div>
    );
}

export default ArticleListView;