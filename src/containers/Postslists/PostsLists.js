import { usePostsContext } from "../../PostsContext";
import PostscardPostsLists from "../../components/PostscardPostsLists/PostscardPostsLists";
import { Pagination } from "../../components/Pagination/Pagination";
import Filters from "../../components/Filters/Filters";
import { LMButton } from "../../components/LMButton/LMButton";
import NavigationPosts from "../../components/Navigation/NavigationPosts";
import { Result } from 'antd';
import { FrownTwoTone } from '@ant-design/icons';

export function Postslists() {
  const { currentPageCards, toggleFavoritePosts } = usePostsContext();
  return (
    <main className="uk-main">
      <NavigationPosts />
      <div className="uk-section">
        <div className="uk-container">
          <Filters />
          <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m">
            {currentPageCards.length > 0 ?
              currentPageCards?.map((post) => {
                return <PostscardPostsLists key={post.id}
                  title={post.title}
                  id={post.id}
                  body={post.body}
                  toggleFavoritePosts={toggleFavoritePosts}
                  favoritePost={post.favoritePost}
                />
              })
              : <div className="uk-align-center">
                <Result
                  icon={<FrownTwoTone />}
                  title="Sorry, posts not found."
                />
              </div>
            }
          </div>
          <LMButton />
          <Pagination />
        </div>
      </div >
    </main >
  )
}
