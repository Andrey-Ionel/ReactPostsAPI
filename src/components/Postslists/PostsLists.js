import { usePostsContext } from "../../PostsContext";
import PostscardPostsLists from "../Postslists/PostscardPostsLists/PostscardPostsLists";
import { Pagination } from "../Pagination/Pagination";
import { Filters } from "../Filters/Filters";
import { LMButton } from "../LMButton/LMButton";
import { Navigation } from "../Navigation/Navigation";

export function Postslists() {
  const { currentPosts, toggleFavorite } = usePostsContext();
  return (
    <main className="uk-main">
      <Navigation />
      <div className="uk-section">
        <div className="uk-container">
          <Filters />
          <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m">
            {
              currentPosts?.map((post) => {
                return <PostscardPostsLists key={post.id}
                  title={post.title}
                  id={post.id}
                  body={post.body}
                  toggleFavorite={toggleFavorite}
                  favorite={post.favorite}
                />
              })
            }
          </div>
          <LMButton />
          <Pagination />
        </div>
      </div >
    </main >
  )
}
