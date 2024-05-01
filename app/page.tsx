import RecentArticles from "@/components/article/RecentArticles";
import PageTitle from "@/components/page/PageTitle";
import { customMetadata } from "@/utils/metadata";
import { Metadata } from "next";
import { CATEGORIES } from "@/constants/category";

export const revalidate = parseInt(process.env.NEXT_PUBLIC_REVALIDATE_TIME ?? "0");

export const runtime = 'edge' // 'nodejs' (default) | 'edge'

export const metadata: Metadata = customMetadata({
  title: 'MK勉強記'
});

const Home = () => {
  return (
    <div className="overflow-y-hidden">
      <PageTitle title="最近の投稿"/>
      <RecentArticles/>
      {
        CATEGORIES.map((value)=> <div key={`recent article ${value.name}`}>
          <PageTitle title={value.name.toUpperCase()}/>
          <RecentArticles category={value.name}/>
        </div>)
      }
      <div className="h-10"></div>
    </div>
  )
}

export default Home;