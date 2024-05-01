import { Article } from "@/models/article";
import Image from "next/image";
import Link from "next/link";
import defaultPhoto from '@/public/default.png';

type ArticleCardProps = {
    article: Article
}

const ArticleCard = (props: ArticleCardProps) => {
    return (
        <div className="h-60 md:h-80 bg-light-gray relative md:mb-0 mb-4 border">
            <Link href={"/article/"+props.article.id}>
                <div className="w-full h-[7.5rem] md:h-40 bg-mid-gray">
                    {
                        typeof props.article.imgUrl !== "undefined"
                        ? <img className="w-full h-[7.5rem] md:h-40 object-cover" src={props.article.imgUrl} alt='catch image'></img>
                        : <Image src={defaultPhoto} alt="default photo" className="w-full h-[7.5rem] md:h-40 object-cover" />
                    }
                </div>
                <div>
                    <div className="flex justify-between mx-1">
                        <p className="text-mid-gray">{props.article.createdAt}</p>
                        <p className="text-mid-gray">{props.article.category.toUpperCase()}</p>
                    </div>
                    <p className="text-ellipsis overflow-hidden w-full h-24 md:h-32 text-center lg:text-2xl text-xl">{props.article.title}</p>
                </div>
            </Link>
        </div>
    );
}

export default ArticleCard;
