export function PostscardPostsLists({ body, title }) {
  return (
    <div>
      <div
        className="uk-card uk-card-default uk-margin-medium-bottom uk-child-width-1-2@s uk-grid-collapse uk-margin"
        uk-grid="true"
      >
        <div className="uk-card-media-left uk-cover-container">
          <img src="https://picsum.photos/600/400" alt="" uk-cover="true" />
          <canvas width="600" height="400"></canvas>
        </div>
        <div>
          <div className="uk-card-body">
            <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
              {title} <a href="/" className="uk-icon-link" uk-icon="heart"></a>
            </h3>
            <p>
              {body}
            </p>
            <a href="Post" className="uk-button uk-button-text">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
