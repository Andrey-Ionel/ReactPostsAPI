import fetcher from "../utils/fetcher";

const getPostsRequest = async () => {
  return await fetcher("/posts");
}

const getCommentsRequest = async () => {
  return await fetcher("/comments");
}


const patchFavoritePostsRequest = async (id, favoritePost) => {
  return await fetcher(`/posts/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      favoritePost,
    }),
  });
};

const patchFavoriteAlbumsRequest = async (id, favoriteAlbum) => {
  return await fetcher(`/posts/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      favoriteAlbum,
    }),
  });
};

const createCommentRequest = async (body) => {
  return await fetcher("/comments", {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export { getPostsRequest, patchFavoritePostsRequest, patchFavoriteAlbumsRequest, createCommentRequest, getCommentsRequest };

