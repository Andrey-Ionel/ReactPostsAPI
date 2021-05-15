import { usePostsContext } from "../../PostsContext";

export function Pagination() {
  const { totalPosts, paginate, currentPage } = usePostsContext();
  const pageNumbers = []
  for (let i = 1; i <= totalPosts; i++) {
    pageNumbers.push(i);
  }
  return (
    <ul
      className="uk-pagination uk-flex-center uk-flex-middle"
      uk-margin="true"
    >
      <li>
        <a href="#">
          <span uk-pagination-previous="true"></span>
        </a>
      </li>
      {pageNumbers.map((number) => (
        <li key={number} onClick={() => paginate(number)} className={(number === currentPage) ? "uk-active" : ""}>
          {(number === currentPage) ? <span >{number}</span> : <a href="#">{number}</a>}
        </li>
      ))
      }
      {/* <li className="uk-disabled"><span>...</span></li> */}
      <li>
        <a href="#">
          <span uk-pagination-next="true"></span>
        </a>
      </li>
    </ul >
  )
}