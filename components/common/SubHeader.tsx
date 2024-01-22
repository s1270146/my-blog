import { jacquesFrancois } from "@/utils/font";
import Link from "next/link";

const SubHeader = () => {
    const textButtonClassName: string = jacquesFrancois.className + " text-white text-3xl";
    return (
        <div className="w-full flex justify-center items-center gap-4 bg-mid-gray py-1 sticky top-0">
            <div className={textButtonClassName}>Article</div>
            <div className={textButtonClassName}>Work</div>
            <div className={textButtonClassName}>Daily</div>
            <div className={textButtonClassName}>Research</div>
            <Link href="./profile">
                <div className={textButtonClassName}>Profile</div>
            </Link>
        </div>
    );
}

export default SubHeader;