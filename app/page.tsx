import RecentArticles from "@/components/article/RecentArticles";
import PageTitle from "@/components/page/PageTitle";
import { customMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const revalidate = 600;
export const runtime = 'edge' // 'nodejs' (default) | 'edge'

export const metadata: Metadata = customMetadata({
  title: 'MK勉強記'
});

const Home = () => {
  return (
    <div className="overflow-y-hidden">
      <PageTitle title="最近の投稿"/>
      <RecentArticles/>
      <PageTitle title="BLOG"/>
      <RecentArticles category="blog"/>
      <PageTitle title="WORK"/>
      <RecentArticles category="work"/>
      <PageTitle title="DIALY"/>
      <RecentArticles category="dialy"/>
      <PageTitle title="RESEARCH"/>
      <RecentArticles category="research"/>
      <div className="h-10"></div>
    </div>
  )
}

export default Home;