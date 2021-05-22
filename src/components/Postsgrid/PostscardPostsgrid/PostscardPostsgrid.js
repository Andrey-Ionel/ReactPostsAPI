import PropTypes from "prop-types";
import "./PostscardPostsgrid.css";
import { NavLink } from "react-router-dom";

function PostscardPostsgrid({ body, title, id, toggleFavorite, favorite }) {
  const onClickFavorite = (e) => {
    e.preventDefault();
    toggleFavorite(id);
  }
  return (
    <div>
      <div className="uk-card uk-card-default uk-margin-medium-bottom">
        <div className="uk-card-header">
          <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
            {title}
            <a href="/" className={favorite === true ? "uk-icon-link favorite-active" : "uk-icon-link"} uk-icon="heart" onClick={onClickFavorite}></a>
          </h3>
        </div>
        <div className="uk-card-body">
          <p>
            {body}
          </p>
        </div>
        <div className="uk-card-footer">
          <NavLink to={{ pathname: "/Post/" + id, postTitle: title, postBody: body }} className="uk-button uk-button-text" >
            Read more
          </NavLink>
        </div>
      </div>
    </div>
  )
}

PostscardPostsgrid.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  favorite: PropTypes.bool,
  toggleFavorite: PropTypes.func
}

export default PostscardPostsgrid;