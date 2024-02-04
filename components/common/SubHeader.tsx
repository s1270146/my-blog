import { jacquesFrancois } from "@/utils/font";
import Link from "next/link";
import PageSelect from "@/components/common/PageSelect";

const SubHeader = () => {
    const textButtonClassName: string = jacquesFrancois.className + " text-white text-xl";
    const pageName: {[key: string]: string} = {
        Blog: "/list/blog/1",
        Work: "/list/work/1",
        Daily: "/list/daily/1",
        Research: "/list/research/1",
        Profile: "/profile"
    };
    return (
        <div className="w-full flex justify-center bg-mid-gray py-1 sticky top-0 fixed z-50">
            <div className="hidden md:flex md:w-3/4 justify-end items-center gap-4">
                {
                    Object.keys(pageName).map(value=>
                        <Link key={"page"+value} href={pageName[value]}>
                            <div className={textButtonClassName}>
                                {value}
                            </div>
                        </Link>
                    )
                }
            </div>
            <div className="md:hidden w-3/4">
                <PageSelect/>
            </div>
        </div>
    );
}

export default SubHeader;