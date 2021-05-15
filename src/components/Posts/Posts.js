import { Pagination } from "../Pagination/Pagination"
import { usePostsContext } from "../../PostsContext";
import { PostscardPosts } from "../Posts/PostscardPosts/PostscardPosts";
import { Filters } from "../Filters/Filters"

export function Posts() {
  const { currentPosts } = usePostsContext();
  return (
    <main className="uk-main">
      <div className="uk-section">
        <div className="uk-container">
          <Filters />
          <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m">
            {
              currentPosts?.map((post) => (
                <PostscardPosts key={post.id}
                  title={post.title}
                  id={post.id}
                  body={post.body}
                />
              ))
            }
          </div>
          <Pagination />
        </div>
      </div>
    </main>
  );
}
