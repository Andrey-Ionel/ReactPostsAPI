import "./Post.css";
import { Navigation } from "../Navigation/Navigation";
import { Redirect } from "react-router-dom";
import Comments from "./Comments/Comments";
import { useState, useEffect } from "react";
import { createCommentRequest, getCommentsRequest } from "../../api";

export function Post(props) {
  const [comments, setComments] = useState([]);

  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [commentTitle, setCommentTitle] = useState("");

  const onAddAuthor = (e) => (setAuthor(e.target.value));

  const onAddEmail = (e) => (setEmail(e.target.value));

  const onAddComment = (e) => (setCommentTitle(e.target.value));

  const onClickDataSend = (e) => {
    e.preventDefault()
    addNewComment({
      id: Date.now(),
      author: author,
      email: email,
      commentTitle: commentTitle
    })
    setAuthor("");
    setEmail("");
    setCommentTitle("");
  }

  useEffect(() => {
    getCommentsRequest().then((newComments) => setComments(newComments));
  }, []);

  useEffect(() => {
    if (comments.comment !== comments.comment) {
      createCommentRequest(comment);
    }
  }, []);

  const addNewComment = async (comment) => {
    if (comment.commentTitle.trim() && comment.email.trim() && comment.author.trim()) {
      const newComment = await createCommentRequest(comment);
      setComments([...comments, newComment]);
    }
  }

  const onKeyPressDefault = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
    }
  }
  return (
    <main className="uk-main">
      <Navigation />
      <div className="uk-section">
        <div className="uk-container">
          <h1 className="uk-heading-bullet uk-margin-medium-bottom">
            <span>{props.location.postTitle === undefined ? <Redirect to="/" /> : props.location.postTitle}
            </span>
            <a className="uk-text-small" href="#"> Author
            </a>
          </h1>
          <div className="uk-article uk-dropcap uk-margin-large-bottom">
            <p>
              {props.location.postBody === undefined ? <Redirect to="/" /> : props.location.postBody}.
            </p>
          </div>
          <hr />
          <h3 className="uk-margin-remove-top">Comments:</h3>
          {comments?.map((comment) => (
            <Comments
              key={comment.id}
              id={comment.id}
              author={comment.author}
              email={comment.email}
              commentTitle={comment.commentTitle}
            />
          ))}
          <hr />
          <form action="#" className="uk-comment-form uk-margin-medium-top">
            <fieldset className="uk-fieldset">
              <legend className="uk-legend">Add Comment</legend>
              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="text"
                  placeholder="Name"
                  required
                  value={author}
                  onChange={onAddAuthor}
                  onKeyPress={onKeyPressDefault}
                />
              </div>
              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={onAddEmail}
                  onKeyPress={onKeyPressDefault}
                />
              </div>
              <div className="uk-margin">
                <textarea
                  className="uk-textarea"
                  rows="5"
                  placeholder="Comment"
                  required
                  value={commentTitle}
                  onChange={onAddComment}
                ></textarea>
              </div>
              <div className="uk-margin">
                <button className="uk-button uk-button-primary" type="submit"
                  onClick={onClickDataSend}>
                  Post Comment
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </main>
  );
}
