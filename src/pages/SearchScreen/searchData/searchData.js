import React from "react";
import Data from "./Data";
const SearchData = ({ googleData,searchTerm }) => {
  return (
    <div>
      {/* <p className="small text-dark">
        All
        {googleData?.searchInformation.formattedTotalResults} these results
        found in {googleData?.searchInformation.formattedSearchTime}
      </p> */}
      {googleData?.items.map((data,id) => (
        <Data data={data} key={id} searchTerm={searchTerm}/>
      ))}
    </div>
  );
};
export default SearchData;

{
  /* <div className="note">
        <a href="">{post.title}</a>
        <div className="TagFrame">
          <p>Tags : </p>
          <p className="Tags">{post.id}</p>
        </div>
        <p>{post.body}</p>
      </div> */
}
