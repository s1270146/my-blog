import { jacquesFrancois } from "@/utils/font";
import Link from "next/link";
import PageSelect from "@/components/common/PageSelect";
import { CATEGORIES } from "@/constants/category";

const SubHeader = () => {
    const textButtonClassName: string = jacquesFrancois.className + " text-white text-xl";
    return (
        <div className="w-full flex justify-center bg-mid-gray py-1 sticky top-0 fixed z-50">
            <div className="hidden md:flex md:w-3/4 justify-end items-center gap-4">
                {
                    CATEGORIES.map(value=>
                        <Link key={"page"+value} href={value.path}>
                            <div className={textButtonClassName}>
                                {value.pascalName}
                            </div>
                        </Link>
                    )
                }
                <Link href="/profile">
                    <div className={textButtonClassName}>
                        Profile
                    </div>
                </Link>
            </div>
            <div className="md:hidden sm:w-3/4 w-11/12">
                <PageSelect/>
            </div>
        </div>
    );
}

export default SubHeader;