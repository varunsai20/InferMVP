import React from "react";
import "./Saved-Content.css";
function SavedContent(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <div className="TagFrame">
        <p>{props.tags}</p>
        <p className="Tags">{props.Tags}</p>
      </div>
      <p>{props.content}</p>
    </div>
  );
}

export default SavedContent;
