import PropTypes from "prop-types";
import "./Favorite.css";

function Favorite({ title, id, toggleFavorite }) {
  return (
    <tbody>
      <tr>
        <td>{title}</td>
        <td className="uk-text-right">
          <button
            className="uk-button"
            type="button"
            uk-icon="icon: close;"
            onClick={() => toggleFavorite(id)}
          ></button>
        </td>
      </tr>
    </tbody>
  )
}

Favorite.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  toggleFavorite: PropTypes.func
}

export default Favorite;