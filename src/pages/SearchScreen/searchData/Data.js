import React from "react";
import { Link } from "react-router-dom";
const Data = ({ data ,searchTerm}) => {
  return (
    <div className="SearcContent">
      <div className="note">
        <a href="{data.htmlFormattedUrl}">{data.title}</a>
        <div className="TagFrame">
          <p>Tags : </p>
          <p className="Tags">{searchTerm}</p>
        </div>
        <p>{data.snippet}</p>
      </div>
    </div>
  );
};

export default Data;

//  <div className="saved">
//       <div className="note">
//         <a href="">{post.title}</a>
//         <div className="TagFrame">
//           <p>Tags : </p>
//           <p className="Tags">{post.id}</p>
//         </div>
//         <p>{post.body}</p>
//       </div>
//     </div>
