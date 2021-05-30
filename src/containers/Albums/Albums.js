import { Pagination } from "../../components/Pagination/Pagination";
import { usePostsContext } from "../../PostsContext";
import AlbumsCard from "../../components/AlbumsCard/AlbumsCard";
import { LMButton } from "../../components/LMButton/LMButton";
import Navigation from "../../components/Navigation/Navigation";
import { Result } from 'antd';
import { FrownTwoTone } from '@ant-design/icons';

export function Albums() {
  const { currentPageCards, toggleFavoriteAlbums } = usePostsContext();
  return (
    <main className="uk-main">
      <Navigation />
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
            {currentPageCards.length > 0 ?
              currentPageCards?.map((album) => (
                <AlbumsCard key={album.id}
                  id={album.id}
                  title={album.title}
                  toggleFavoriteAlbums={toggleFavoriteAlbums}
                  favoriteAlbum={album.favoriteAlbum}
                />
              ))
              : <div className="uk-align-center">
                <Result
                  icon={<FrownTwoTone />}
                  title="Sorry, albums not found."
                />
              </div>}
          </div>
          <LMButton />
          <Pagination />
        </div>
      </div>
    </main>
  );
}
