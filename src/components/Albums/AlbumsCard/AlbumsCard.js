export function AlbumsCard({ body }) {
  return (

    <div>
      <div className="uk-card uk-card-default uk-margin-medium-bottom uk-light">
        <img
          src="https://picsum.photos/600/400"
          alt=""
          uk-cover="true"
        />
        <canvas width="600" height="400"></canvas>
        <div className="uk-overlay-primary uk-position-cover"></div>
        <div className="uk-overlay uk-overlay-primary uk-position-bottom">
          <p>
            {body}
          </p>
        </div>

        <div className="uk-position-top-right uk-overlay">
          <a href="" uk-icon="icon: heart; ratio: 2"></a>
        </div>
      </div>
    </div>
  )
}