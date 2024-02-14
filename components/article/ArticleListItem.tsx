import { Article } from "@/models/article";
import Link from "next/link";

type ArticleListItemProps = {
    article: Article
}

const ArticleListItem = (props: ArticleListItemProps) => {
    return (
        <Link href={`/article/${props.article.id}`}>
            <div className="w-full mb-4 xl:mb-8 h-24 flex border">
                <div className="w-1/3 bg-mid-gray border">
                    {
                        typeof props.article.imgUrl !== "undefined"
                            ? <img className="w-full h-24 object-cover" src={props.article.imgUrl} alt=''></img>
                            : <div className=""><p className="text-center">No Image</p></div>
                    }
                </div>
                <div className="w-2/3 bg-light-gray p-2">
                    <div className="flex justify-between text-sm">
                        <p>{props.article.createdAt.toString()}</p>
                        <p>{props.article.category}</p>
                    </div>
                    <p className="text-ellipsis whitespace-nowrap overflow-hidden break-word text-md md:text-lg">
                        {props.article.title}
                    </p>
                    <p className="text-xs h-8 text-mid-gray mt-1 text-ellipsis overflow-hidden">
                        {props.article.description}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default ArticleListItem;