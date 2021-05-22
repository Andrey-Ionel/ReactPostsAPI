import fetcher from "../utils/fetcher"

const getPostsRequest = async () => {
  return await fetcher("/posts");
}

const getCommentsRequest = async () => {
  return await fetcher("/comments");
}


const patchFavoritePostsRequest = async (id, favorite) => {
  return await fetcher(`/posts/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      favorite,
    }),
  });
};

const createCommentRequest = async (body) => {
  return await fetcher("/comments", {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export { getPostsRequest, patchFavoritePostsRequest, createCommentRequest, getCommentsRequest };

