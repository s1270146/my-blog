import { jacquesFrancoisShadow } from "@/utils/font";
import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-light-gray top-0 flex justify-center">
            <div className="md:w-3/4 pt-12">
                <Link href="/">
                    <p className={`${jacquesFrancoisShadow.className} inline-block text-3xl md:text-5xl`}>MK勉強記</p>
                </Link>
            </div>
        </header>
    )
}

export default Header;