import React from "react";
import { usePostsContext } from "../../PostsContext";
import PostscardPostsgrid from "../../components/PostscardPostsgrid/PostscardPostsgrid";
import { Result } from 'antd';
import { FrownTwoTone } from '@ant-design/icons';

export function PostsgridView() {
  const { currentPageCards, toggleFavoritePosts } = usePostsContext();
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
      {currentPageCards.length > 0 ?
        currentPageCards?.map((post) => (
          <PostscardPostsgrid key={post.id}
            title={post.title}
            id={post.id}
            body={post.body}
            toggleFavoritePosts={toggleFavoritePosts}
            favoritePost={post.favoritePost}
          />
        ))
        : <div className="uk-align-center">
          <Result
            icon={<FrownTwoTone />}
            title="Sorry, posts not found."
          />
        </div>
      }
    </div>
  )
}