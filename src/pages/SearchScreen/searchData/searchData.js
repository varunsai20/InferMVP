import React from "react";
import Data from "./Data";
const SearchData = ({ googleData,searchTerm }) => {
  return (
    <div>
      {googleData?.items.map((data,id) => (
        <Data data={data} key={id} searchTerm={searchTerm}/>
      ))}
    </div>
  );
};
export default SearchData;


