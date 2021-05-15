import { useState } from 'react';
import { usePostsContext } from "../../PostsContext";
import { Link } from "react-router-dom";
import { getPostsRequest } from "../../api";

export function Filters() {
  const { getSortPostsRequest, setQuantityPosts, setPosts, getSearchPostsRequest } = usePostsContext();
  const [name, setName] = useState('');

  const onInputValueChange = (e) => {
    if (e.target.value.trim()) {
      getSearchPostsRequest(e.target.value);
    } else if (e.target.value === '') {
      getPostsRequest().then((newPosts) => setPosts(newPosts));
    }
    setName(e.target.value);
  }

  return (
    <div className="uk-margin-medium-bottom uk-flex">
      <form className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right">
        <span uk-search-icon="true"></span>
        <span
          className="uk-search-icon uk-search-icon-flip"
          uk-spinner="ratio: 0.6"
        ></span>
        <input
          value={name}
          onChange={onInputValueChange}
          className="uk-search-input"
          type="search"
          placeholder="Search..."
        />
      </form>
      <select className="uk-select uk-width-small uk-margin-auto-left" onChange={(e) => getSortPostsRequest(e.target.value)}>
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>
      <select className="uk-select uk-width-small uk-margin-left" onChange={(e) => setQuantityPosts(e.target.value)}>
        <option value="6">6</option>
        <option value="12">12</option>
        <option value="24">24</option>
      </select>
      <div className="uk-button-group uk-margin-left">
        <Link to="/" className="uk-button uk-button-default uk-active">
          <span uk-icon="icon:  grid"></span>
        </Link>
        <Link to="/Posts" className="uk-button uk-button-default uk-active">
          <span uk-icon="icon:  list"></span>
        </Link>
      </div>
    </div>
  )
}