import fetcher from "../utils/fetcher"

const getPostsRequest = async () => {
  return await fetcher("/posts");
}

export { getPostsRequest };

