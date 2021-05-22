import { useState } from "react";
import { usePostsContext } from "../../PostsContext";
import { NavLink } from "react-router-dom";

export function Filters() {
  const { getSortPostsRequest, setQuantityPosts, getSearchPostsRequest } = usePostsContext();
  const [name, setName] = useState("");
  const [orderValue, setOrderValue] = useState("asc");

  const onInputValueChange = (e) => {
    e.preventDefault();
    if (e.target.value.trim()) {
      getSearchPostsRequest(e.target.value);
    } else if (e.target.value === "") {
      getSortPostsRequest(orderValue);
    }
    setName(e.target.value);
  }

  const onPostsOrderChange = (e) => {
    getSortPostsRequest(e.target.value);
    setOrderValue(e.target.value);
  }

  const isActive = location.pathname;
  return (
    <div className="uk-margin-medium-bottom uk-flex">
      <form className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right">
        <span uk-search-icon="true"></span>
        {name.trim() && <span
          className="uk-search-icon uk-search-icon-flip"
          uk-spinner="ratio: 0.6"
        ></span>}
        <input
          value={name}
          onChange={onInputValueChange}
          className="uk-search-input"
          type="search"
          placeholder="Search..."
        />
      </form>
      <select className="uk-select uk-width-small uk-margin-auto-left" onChange={onPostsOrderChange}>
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>
      <select className="uk-select uk-width-small uk-margin-left" onChange={(e) => setQuantityPosts(e.target.value)}>
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
        <NavLink to="/Posts"
          activeClassName={isActive === "/Posts" ? "uk-active" : ""}
          className="uk-button uk-button-default" >
          <span uk-icon="icon:  list"></span>
        </NavLink>
      </div>
    </div >
  )
}