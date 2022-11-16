import React from "react";
import "./Saved-Content.css";
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md"
const Post = ({ post }) => {
  return (
    <div className="saved">
      <div className="saved-note">
      <div className="note-header">
        <a href="">{post.title}</a>
        <div className="add-delete">
        <a href="" className="add-delete-saved" id="add-note-saved"><FaIcons.FaRegStickyNote /><span className="add-note-span">Add a note</span></a>
        <a href="" className="add-delete-saved" id="delete-note"><MdIcons.MdDeleteForever/><span className="delete-note-span"/>Remove</a>
        </div>
        </div>
      <div className="TagFrame-Saved">
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
