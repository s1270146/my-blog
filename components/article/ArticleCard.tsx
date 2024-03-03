import { Article } from "@/models/article";
import Link from "next/link";

type ArticleCardProps = {
    article: Article
}

const ArticleCard = (props: ArticleCardProps) => {
    return (
        <div className="h-60 md:h-80 bg-light-gray relative md:mb-0 mb-4 border">
            <div className="w-full h-[7.5rem] md:h-40 bg-mid-gray">
                {
                    typeof props.article.imgUrl !== "undefined"
                    ? <img className="w-full h-[7.5rem] md:h-40 object-cover" src={props.article.imgUrl} alt=''></img>
                    : <div className=""><p className="text-center text-3xl">No Image</p></div>
                }
            </div>
            <div>
                <div className="flex justify-between mx-1">
                    <div className="text-mid-gray">{props.article.createdAt}</div>
                    <div>{props.article.category}</div>
                </div>
                <p className="text-ellipsis overflow-hidden w-full h-14 lg:h-20 text-center lg:text-2xl text-xl">{props.article.title}</p>
                <div className="absolute bottom-0 w-full">
                        <div className="w-28 text-center mx-auto mb-2 h-6 md:h-10 bg-white md:leading-10 border border-black">
                            <Link href={"/article/"+props.article.id}>
                                READ MORE
                            </Link>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleCard;
