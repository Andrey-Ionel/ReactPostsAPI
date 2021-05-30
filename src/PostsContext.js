import { useState, createContext, useEffect, useContext } from "react";
import { getPostsRequest, patchFavoritePostsRequest, patchFavoriteAlbumsRequest } from "./api";
import fetcher from "./utils/fetcher";
import { Result } from 'antd';

const PostsContext = createContext(null);

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsQuantityPage, setPostsQuantityPage] = useState(6);
  const [orderValue, setOrderValue] = useState("asc");
  const [isSearching, setIsSearching] = useState(false);
  const [errorFetch, setErrorFetch] = useState(null);
  const [pageListView, setPageListView] = useState(true);
  const [pageGridView, setPageGridView] = useState(false);

  const indexOfLastPost = currentPage * postsQuantityPage;
  const indexOfFirstPost = indexOfLastPost - postsQuantityPage;
  const totalPosts = Math.ceil(posts.length / postsQuantityPage);

  const currentPageCards = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    getPostsRequest().then((newPosts) => setPosts(newPosts),
      (error) => setErrorFetch(error));
  }, []);

  useEffect((value) => {
    if (value !== value) {
      getSortPostsRequest(value);
    }
  }, []);

  useEffect((favorite) => {
    if (favorite !== favorite) {
      patchFavoritePostsRequest(id);
    }
  }, []);

  const getSearchPostsRequest = async (value) => {
    await fetcher(`/posts?title_like=${value}`)
      .then((newPosts) => {
        setPosts(newPosts);
        setIsSearching(false);
      });
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

  const toggleFavoritePosts = (id) => {
    const favoritePostToggle = posts?.map((post) => {
      if (post.id === id && post.favoritePost === undefined) {
        post.favoritePost = true;
        patchFavoritePostsRequest(id, post.favoritePost);
      } else if (post.id === id && post.favoritePost === false) {
        post.favoritePost = true;
        patchFavoritePostsRequest(id, post.favoritePost);
      } else if (post.id === id && post.favoritePost === true) {
        post.favoritePost = false;
        patchFavoritePostsRequest(id, post.favoritePost);
      }
      return post;
    })
    setPosts(favoritePostToggle);
  }

  const toggleFavoriteAlbums = (id) => {
    const favoriteAlbumsToggle = posts?.map((album) => {
      if (album.id === id && album.favoriteAlbum === undefined) {
        album.favoriteAlbum = true;
        patchFavoriteAlbumsRequest(id, album.favoriteAlbum);
      } else if (album.id === id && album.favoriteAlbum === false) {
        album.favoriteAlbum = true;
        patchFavoriteAlbumsRequest(id, album.favoriteAlbum);
      } else if (album.id === id && album.favoriteAlbum === true) {
        album.favoriteAlbum = false;
        patchFavoriteAlbumsRequest(id, album.favoriteAlbum);
      }
      return album;
    })
    setPosts(favoriteAlbumsToggle);
  }

  const value = {
    posts,
    currentPageCards,
    postsQuantityPage,
    totalPosts,
    paginate,
    currentPage,
    getSortPostsRequest,
    getSearchPostsRequest,
    setQuantityPosts,
    setPosts,
    addMorePosts,
    toggleFavoritePosts,
    toggleFavoriteAlbums,
    isSearching,
    setIsSearching,
    orderValue,
    setOrderValue,
    pageListView,
    setPageListView,
    pageGridView,
    setPageGridView
  }
  if (errorFetch) {
    return <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
    />
  } else {
    return (
      <PostsContext.Provider value={value}>
        {children}
      </PostsContext.Provider>
    );
  }
};

const usePostsContext = () => useContext(PostsContext);
export { PostsContext, PostsProvider, usePostsContext };