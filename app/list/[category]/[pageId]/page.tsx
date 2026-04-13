import ArticleListView from "@/components/article/ArticleListView";
import ProfileWidget from "@/components/common/ProfileWidget";
import { customMetadata } from "@/utils/metadata";
import { redirect } from "next/navigation";
import { CATEGORIES } from "@/constants/category";
import Breadcrumb from "@/components/common/Breadcrumb";

export const runtime = 'edge' // 'nodejs' (default) | 'edge'

// export const revalidate = parseInt(process.env.NEXT_PUBLIC_REVALIDATE_TIME ?? "0");

type ArticleListPageParams = {
    category: string,
    pageId: string
}

export function generateMetadata({
    params
}
    : {
        params: Promise<Pick<ArticleListPageParams, "category">>
    }) {
    return params.then(({ category }) => customMetadata(
        {
            title: `MK:${category.toUpperCase()}`
        }
    ));
}

const ArticleListPage = async ({ params }: { params: Promise<ArticleListPageParams> }) => {
    const { category, pageId } = await params;
    const currentPage: number = parseInt(pageId, 10);
    const isValidCategory = CATEGORIES.some(value => value.name === category);
    const isValidPage = Number.isInteger(currentPage) && currentPage > 0;

    if (!isValidCategory || !isValidPage) {
        redirect("/")
    }
    return (
        <div className="sm:w-3/4 w-11/12 mx-auto xl:flex justify-between">
            <div className="xl:w-2/3">
                <Breadcrumb
                    paths={[
                        {
                            path: `/list/${category}/1`,
                            name: category
                        }
                    ]}
                />
                <ArticleListView category={category} currentPage={currentPage} />
            </div>
            <div className="w-full py-10 xl:w-1/3">
                <ProfileWidget />
            </div>
        </div>
    );
}

export default ArticleListPage;
