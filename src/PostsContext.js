import { useState, createContext, useEffect, useContext } from 'react';
import { getPostsRequest } from "./api";
import fetcher from "./utils/fetcher";

const PostsContext = createContext(null);

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsQuantityPage, setPostsQuantityPage] = useState(6);

  const indexOfLastPost = currentPage * postsQuantityPage;
  const indexOfFirstPost = indexOfLastPost - postsQuantityPage;
  const totalPosts = Math.ceil(posts.length / postsQuantityPage);

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    getPostsRequest().then((newPosts) => setPosts(newPosts));
  }, []);

  useEffect((value) => {
    if (value !== value) {
      getSearchPostsRequest(value);
    }
  }, []);

  useEffect((value) => {
    if (value !== value) {
      getSortPostsRequest(value);
    }
  }, []);

  const getSearchPostsRequest = async (value) => {
    return await fetcher(`/posts?title_like=${value}`)
      .then((newPosts) => setPosts(newPosts));
  }

  const getSortPostsRequest = async (value) => {
    return await fetcher(`/posts?_sort=id&_order=${value}`)
      .then((newPosts) => setPosts(newPosts));
  }

  const setQuantityPosts = (value) => {
    setPostsQuantityPage(value);
  }

  const addMorePosts = (value) => {
    const addPosts = (parseInt(value) + 6);
    setPostsQuantityPage(addPosts);
  }

  const value = {
    currentPosts,
    postsQuantityPage,
    totalPosts,
    paginate,
    currentPage,
    getSortPostsRequest,
    getSearchPostsRequest,
    setQuantityPosts,
    setPosts,
    addMorePosts,
  }

  return (
    <PostsContext.Provider value={value}>
      {children}
    </PostsContext.Provider>
  );

};

const usePostsContext = () => useContext(PostsContext);
export { PostsContext, PostsProvider, usePostsContext }