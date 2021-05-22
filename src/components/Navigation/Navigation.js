import Favorite from "./Favorite/Favorite";
import { usePostsContext } from "../../PostsContext";

export function Navigation() {
  const { posts, toggleFavorite } = usePostsContext();
  const favoritePosts = posts.filter((post) => {
    if (post.favorite === true) {
      return post.favorite;
    }
  })

  return (
    <nav className="uk-navbar uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className={location.pathname === "/Postsgrid" ? "uk-active" : ""}>
            <a href="Postsgrid">Posts</a>
          </li>
          <li className={location.pathname === "/Albums" ? "uk-active" : ""}>
            <a href="Albums">Albums</a>
          </li>
        </ul>
      </div>
      <div className="uk-navbar-right">
        <div className="uk-navbar-item">
          <button
            className={favoritePosts.length ? "uk-button favorite-active" : "uk-button"}
            type="button"
            uk-icon="icon: heart; ratio: 2"
          ></button>
          <div className="uk-width-large" uk-dropdown="mode: click">
            <div
              className="uk-dropdown-grid uk-child-width-1-1@m"
              uk-grid="true"
            >
              <div>
                <table className="uk-table uk-table-divider uk-table-justify">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th className="uk-text-right">Delete</th>
                    </tr>
                  </thead>
                  {
                    favoritePosts.map((post) => (
                      <Favorite
                        key={post.id}
                        title={post.title}
                        id={post.id}
                        toggleFavorite={toggleFavorite}
                      />
                    ))
                  }
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}