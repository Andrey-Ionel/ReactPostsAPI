import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export function PostscardPosts({ title, body, id }) {
  return (

    <div>
      <NavLink to={{ pathname: "/Post/" + id, postTitle: title, postBody: body }}
        className="uk-card uk-card-default uk-margin-medium-bottom uk-child-width-1-2@s uk-grid-collapse uk-margin"
        uk-grid="true"
      >
        <div className="uk-card-media-left uk-cover-container">
          <img
            src="https://picsum.photos/600/400"
            alt=""
            uk-cover="true"
          />
          <canvas width="600" height="400"></canvas>
        </div>
        <div>
          <div className="uk-card-body">
            <h3 className="uk-card-title">{title}</h3>
            <p>
              {body}
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  )
}

PostscardPosts.propTypes = {
  body: PropTypes.string,
  title: PropTypes.string,
}

export default PostscardPosts;