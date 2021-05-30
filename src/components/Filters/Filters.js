import { useState, useEffect } from "react";
import { usePostsContext } from "../../PostsContext";
import { NavLink } from "react-router-dom";
import { useDebounce } from "../../Hooks/UseDebounce";
import React from "react";

function Filters() {
  const { getSortPostsRequest, setQuantityPosts,
    getSearchPostsRequest, setIsSearching, isSearching,
    postsQuantityPage, orderValue, setOrderValue } = usePostsContext();
  const [name, setName] = useState("");
  const [, setSearchResults] = useState([]);

  const debouncedValue = useDebounce(name, 500);

  useEffect(() => {
    if (debouncedValue) {
      setIsSearching(true);
      getSearchPostsRequest(debouncedValue)
        .then((results) => {
          setIsSearching(false);
          setSearchResults(results)
        })
    } else if (isSearching === true) {
      setearchResults([]);
      getSortPostsRequest(orderValue);
      setIsSearching(false);
    }
  },
    [debouncedValue]
  )

  const onPostsOrderChange = (e) => {
    getSortPostsRequest(e.target.value);
    setOrderValue(e.target.value);
  }

  const isActive = location.pathname;

  const onKeyPressDefault = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
    }
  }
  return (
    <div className="uk-margin-medium-bottom uk-flex">
      <form
        className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right">
        <span uk-search-icon="true"></span>
        {isSearching && <span
          className="uk-search-icon uk-search-icon-flip"
          uk-spinner="ratio: 0.6"
        ></span>}
        <input
          value={name}
          onKeyPress={onKeyPressDefault}
          onChange={(e) => { setIsSearching(true); setName(e.target.value); }}
          className="uk-search-input"
          type="search"
          placeholder="Search..."
        />
      </form>
      <select value={orderValue}
        className="uk-select uk-width-small uk-margin-auto-left"
        onChange={onPostsOrderChange}>
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>
      <select value={postsQuantityPage}
        className="uk-select uk-width-small uk-margin-left"
        onChange={(e) => setQuantityPosts(e.target.value)}>
        <option value="6">6</option>
        <option value="12">12</option>
        <option value="24">24</option>
      </select>
      <div className="uk-button-group uk-margin-left">
        <NavLink to="/"
          activeClassName={isActive === "/" ? "uk-active" : ""}
          className="uk-button uk-button-default" >
          <span uk-icon="icon:  grid"></span>
        </NavLink>
        <NavLink to="/Postsgrid"
          activeClassName={isActive === "/Postsgrid" ? "uk-active" : ""}
          className="uk-button uk-button-default" >
          <span uk-icon="icon:  list"></span>
        </NavLink>
      </div>
    </div >
  )
}

export default React.memo(Filters);