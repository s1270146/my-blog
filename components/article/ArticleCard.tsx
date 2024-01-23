import { Article } from "@/models/article";
import Link from "next/link";

type ArticleCardProps = {
    article: Article
}

const ArticleCard = (props: ArticleCardProps) => {
    return (
        <div className="w-60 h-72 bg-light-gray text-center relative">
            <div className="w-full h-40 bg-red-300"></div>
            <div className="flex">
                <div>{props.article.createdAt}</div>
                <div>{props.article.category}</div>
            </div>
            <div>{props.article.title}</div>
            <div className="absolute bottom-0 bg-black">
                <div className="flex justify-center">
                    <Link href="/">
                        <div className="w-28 bg-blue-200">READ MORE</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ArticleCard;
