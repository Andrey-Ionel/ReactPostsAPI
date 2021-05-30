import { Pagination } from "../../components/Pagination/Pagination";
import Filters from "../../components/Filters/Filters";
import { LMButton } from "../../components/LMButton/LMButton";
import Navigation from "../../components/Navigation/Navigation";
import { PostslistsView } from "../../components/PostslistsView/PostslistsView";
import { PostsgridView } from "../../components/PostsgridView/PostsgridView";
import { usePostsContext } from "../../PostsContext";

export function Posts() {
  const { pageListView } = usePostsContext();
  return (
    <main className="uk-main">
      <Navigation />
      <div className="uk-section">
        <div className="uk-container">
          <Filters />
          {pageListView ?
            <PostslistsView /> :
            <PostsgridView />}
          <LMButton />
          <Pagination />
        </div>
      </div >
    </main >
  )
}
