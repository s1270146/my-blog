import RecentArticles from "@/components/article/RecentArticles";
import PageTitle from "@/components/page/PageTitle";

const Home = () => {
  return (
    <div className="overflow-y-hidden">
      <PageTitle title="最近の投稿"/>
      <RecentArticles/>
      <PageTitle title="BLOG"/>
      <RecentArticles category="blog"/>
      <PageTitle title="WORK"/>
      <RecentArticles category="work"/>
      <PageTitle title="DAILY"/>
      <RecentArticles category="daily"/>
      <PageTitle title="RESEARCH"/>
      <RecentArticles category="research"/>
      <div className="h-10"></div>
    </div>
  )
}

export default Home;