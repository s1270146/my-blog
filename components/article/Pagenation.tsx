import Link from "next/link";
import React from "react";

const PagenationItem = ({
    children,
    canClick,
    nextPage,
    category
}: {
    children: React.ReactNode,
    canClick: boolean,
    nextPage: number,
    category: string
}) => {
    const commonClass = "h-16 flex items-center justify-center";
    const pageNationItemClass = " text-blak";
    const disabledClass = " text-mid-gray"
    return (
        <Link className={canClick ? 'flex-1' : 'flex-1 pointer-events-none'} href={`/list/${category}/${nextPage}`} >
            <div className={canClick ? commonClass + pageNationItemClass : commonClass + disabledClass}>
                {
                    nextPage != -1 ? children : <p>&hellip;</p>
                }
            </div>
        </Link>
    );
}

type PagenationProps = {
    countPage: number,
    category: string,
    currentPage: number
}

const Pagenation = ({
    countPage,
    category,
    currentPage
}: PagenationProps) => {
    const pages = (c: number, n: number): number[] => {
        const maxPage = 5
        const arr: number[] = [];
        if (n <= maxPage) {
            for (let index = 0; index < n; index++) {
                arr.push(index + 1);
            }
            return arr;
        }
        if (c < maxPage) {
            for (let index = 0; index < maxPage; index++) {
                arr.push(index + 1);

            }
            arr.push(-1);
            arr.push(n);
            return arr;
        }
        if (c > (n - maxPage + 1)) {
            arr.push(1);
            arr.push(-1);
            for (let index = maxPage - 1; index >= 0; index--) {
                arr.push(n - index);
            }
            return arr;
        }
        return [1, -1, c - 1, c, c + 1, -1, n];
    }
    const arr: number[] = pages(currentPage, countPage);
    return (
        <div className="flex">
            <PagenationItem canClick={currentPage > 1} category={category} nextPage={currentPage - 1}>
                &#8810;
            </PagenationItem>
            {
                arr.map(value =>
                    <div className="flex-1" key={"pagenationItem" + value.toString()}>
                        <PagenationItem canClick={currentPage != value && value != -1} category={category} nextPage={value}>
                            {value}
                        </PagenationItem>
                    </div>
                )
            }
            <PagenationItem canClick={currentPage < countPage} category={category} nextPage={currentPage + 1}>
                &#8811;
            </PagenationItem>
        </div>
    );
}

export default Pagenation