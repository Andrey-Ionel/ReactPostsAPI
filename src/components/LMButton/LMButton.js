import { usePostsContext } from "../../PostsContext";

export function LMButton() {
  const { addMorePosts, postsQuantityPage, posts } = usePostsContext();
  return (
    <div className="uk-margin">
      <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" onClick={() => addMorePosts(postsQuantityPage)}>
        Load more{" "}
        {posts < 1 && <div
          className="uk-margin-small-left"
          uk-spinner="ratio: 0.6"
        >
        </div>}
      </button>
    </div>
  )
}