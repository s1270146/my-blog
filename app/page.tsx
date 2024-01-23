import RecentArticles from "@/components/article/RecentArticles";
import PageTitle from "@/components/page/PageTitle";

const Home = () => {
  return (
    <div className="overflow-y-auto">
      <PageTitle title="最近の投稿"/>
      <RecentArticles/>
      <PageTitle title="Blog"/>
      <RecentArticles category="blog"/>
      <PageTitle title="Work"/>
      <RecentArticles category="work"/>
      <PageTitle title="Daily"/>
      <RecentArticles category="daily"/>
      <PageTitle title="Research"/>
      <RecentArticles category="research"/>
      <div className="h-10"></div>
    </div>
  )
}

export default Home;