"use client"

import { useState } from "react";
import Link from "next/link";
import { jacquesFrancois } from "@/utils/font";
import { CATEGORIES } from "@/constants/category";

const PageSelect = ()=>{
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleMenuOpen = () => {
        setIsOpen(!isOpen);
    };

    const listClass: string = "text-center text-2xl text-white mb-10 tracking-[0.5rem] " + jacquesFrancois.className;

    return (
        <div className="">
            <div className="flex justify-end">
                <button className="z-100 space-y-2 my-2 h-6" onClick={handleMenuOpen}>
                    <span
                    className={
                        isOpen
                        ? "block w-8 h-0.5 bg-white translate-y-2.5 rotate-45 duration-300"
                        : "block w-8 h-0.5 bg-white duration-300"
                    }
                    />
                    <span
                    className={
                        isOpen ? "block opacity-0 duration-300" : "block w-8 h-0.5 bg-white duration-300"
                    }
                    />
                    <span
                    className={
                        isOpen
                        ? "block w-8 h-0.5 bg-white -rotate-45 duration-300"
                        : "block w-8 h-0.5 bg-white duration-300"
                    }
                    />
                </button>
            </div>
            <div className= {isOpen ? "h-120 bg-mid-gray transition duration-700" : "hidden"}>
                <ul className="w-full">
                    <li className={listClass}>
                        <Link href="/" onClick={handleMenuOpen}>
                            Home
                        </Link>
                    </li>
                    {
                        CATEGORIES.map((category)=> <li className={listClass} key={`page select ${category.name}`}>
                            <Link href={category.path} onClick={handleMenuOpen}>{category.pascalName}</Link>
                        </li>)
                    }
                    <li className={listClass} onClick={handleMenuOpen}>
                        <Link href="/profile">
                            Profile
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default PageSelect;