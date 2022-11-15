import React from "react";
import "./Saved-Content.css";
const Post = ({ post }) => {
  return (
    <div className="saved">
      <div className="saved-note">
        <a href="">{post.title}</a>
        <div className="TagFrame">
          <p>Tags : </p>
          <p className="Tags">{post.id}</p>
        </div>
        <p>{post.body}</p>
      </div>
    </div>
  );
};
export default Post;

// <div className="note">
//   <h1>{props.title}</h1>
//   <div className="TagFrame">
//     <p>{props.tags}</p>
//     <p className="Tags">{props.Tags}</p>
//   </div>
//   <p>{props.content}</p>
// </div>
