import { jacquesFrancoisShadow } from "@/utils/font";
import Link from "next/link";

const Header = () => {
    return (
        <header className="pt-12 flex justify-center bg-light-gray top-0">
            <Link href="/">
                <p className={`${jacquesFrancoisShadow.className} inline-block  text-5xl`}>MKは勉強したい</p>
            </Link>
        </header>
    )
}

export default Header;