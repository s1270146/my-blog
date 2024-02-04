import { Article } from "@/models/article";
import Link from "next/link";

type ArticleCardProps = {
    article: Article
}

const ArticleCard = (props: ArticleCardProps) => {
    return (
        <div className="h-60 md:h-80 bg-light-gray relative md:mb-0 mb-4">
            <div className="w-full h-[7.5rem] md:h-40 bg-red-300"></div>
            <div>
                <div className="flex justify-between mx-1">
                    <div className="text-mid-gray">{props.article.createdAt}</div>
                    <div>{props.article.category}</div>
                </div>
                <div className="w-full text-center lg:text-2xl text-xl">{props.article.title}</div>
                <div className="absolute bottom-0 w-full">
                        <div className="w-28 text-center mx-auto mb-2 h-6 md:h-10 bg-white md:leading-10 border border-black">
                            <Link href="/">
                                READ MORE
                            </Link>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleCard;
