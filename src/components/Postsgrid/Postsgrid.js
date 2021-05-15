import { Pagination } from "../Pagination/Pagination"
import { usePostsContext } from "../../PostsContext";
import { PostscardPostsgrid } from "../Postsgrid/PostscardPostsgrid/PostscardPostsgrid";
import { Filters } from "../Filters/Filters"
import { LMButton } from "../LMButton/LMButton"
import { Navigation } from "../Navigation/Navigation"

export function Postsgrid() {
  const { currentPosts } = usePostsContext();
  return (
    <main className="uk-main">
      <Navigation />
      <div className="uk-section">
        <div className="uk-container">
          <Filters />
          <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
            {
              currentPosts?.map((post) => (
                <PostscardPostsgrid key={post.id}
                  title={post.title}
                  id={post.id}
                  body={post.body}
                />
              ))
            }
          </div>
          <LMButton />
          <Pagination />
        </div>
      </div>
    </main>
  );
}