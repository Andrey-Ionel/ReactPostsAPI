import FavoriteAlbums from "../Favorite/FavoriteAlbums";
import { usePostsContext } from "../../PostsContext";
import React from "react";

function NavigationAlbums() {
  const { posts, toggleFavoriteAlbums } = usePostsContext();
  const favoriteAlbums = posts.filter((album) => {
    if (album.favoriteAlbum === true) {
      return album.favoriteAlbum;
    }
  })

  return (
    <nav className="uk-navbar uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className={location.pathname === "/"
            || location.pathname === "/Postsgrid"
            ? "uk-active" : ""}>
            <a href="/">Posts</a>
          </li>
          <li className={location.pathname === "/Albums"
            ? "uk-active" : ""}>
            <a href="/Albums">Albums</a>
          </li>
        </ul>
      </div>
      <div className="uk-navbar-right">
        <div className="uk-navbar-item">
          <button
            className={favoriteAlbums.length
              ? "uk-button favorite-active" : "uk-button"}
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
                    favoriteAlbums.map((album) => (
                      <FavoriteAlbums
                        key={album.id}
                        title={album.title}
                        id={album.id}
                        toggleFavoriteAlbums={toggleFavoriteAlbums}
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

export default React.memo(NavigationAlbums);