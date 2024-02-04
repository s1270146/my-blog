import { Article } from "@/models/article";

type ArticleListItemProps = {
    article: Article
}

const ArticleListItem = (props: ArticleListItemProps) => {
    return (
        <div className="w-full mb-2 h-24 flex ">
            <div className="w-1/3 bg-red-300"></div>
            <div className="w-2/3 bg-light-gray p-2">
                <div className="flex justify-between text-sm">
                    <p>{props.article.createdAt.toString()}</p>
                    <p>{props.article.category}</p>
                </div>
                <p className="break-word text-md md:text-lg">
                    {props.article.title}
                </p>

            </div>
        </div>
    );
}

export default ArticleListItem;