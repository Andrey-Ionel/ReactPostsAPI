export function PostscardPostsgrid({ body, title }) {
  return (
    <div>
      <div className="uk-card uk-card-default uk-margin-medium-bottom">
        <div className="uk-card-header">
          <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
            {title}
            <a href="/" className="uk-icon-link" uk-icon="heart"></a>
          </h3>
        </div>
        <div className="uk-card-body">
          <p>
            {body}
          </p>
        </div>
        <div className="uk-card-footer">
          <a href="Post" className="uk-button uk-button-text">
            Read more
                  </a>
        </div>
      </div>
    </div>
  )
}