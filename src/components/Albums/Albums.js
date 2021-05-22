import { Pagination } from "../Pagination/Pagination"
import { usePostsContext } from "../../PostsContext";
import AlbumsCard from "../Albums/AlbumsCard/AlbumsCard";
import { LMButton } from "../LMButton/LMButton";
import { Navigation } from "../Navigation/Navigation";

export function Albums() {
  const { currentPosts, toggleFavorite } = usePostsContext();
  return (
    <main className="uk-main">
      <Navigation />
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
            {
              currentPosts?.map((post) => (
                <AlbumsCard key={post.id}
                  id={post.id}
                  body={post.body}
                  toggleFavorite={toggleFavorite}
                  favorite={post.favorite}
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
