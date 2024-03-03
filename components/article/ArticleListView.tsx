import { Article } from "@/models/article";
import ArticleListItem from "./ArticleListItem";
import Pagenation from "./Pagenation";
import { getArticleList } from "@/utils/get-article-list";
import ConstructText from "../common/ConstructText";
import PageTitle from "../page/PageTitle";

type ArticleListViewProps = {
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
    const filteredArticles: Article[] = [];
    for (let i = props.currentPage * 7 - 7; i < props.currentPage * 7; i++) {
        const article = articles[i];
        if(typeof article === "undefined")break;
        filteredArticles.push(articles[i]);
    }
    return (
        <div className="w-full mx-auto xl:px-10 mb-10">
            <PageTitle title={props.category.toUpperCase()}/>
            {
                filteredArticles.length > 0 ?
                filteredArticles.map((article, index) =>
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