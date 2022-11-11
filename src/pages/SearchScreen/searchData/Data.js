import React from "react";
import { Link } from "react-router-dom";
const Data = ({ data }) => {
  return (
    <div>
      <Link to={data.title}>{data.title}</Link>
      <p>{data.snippet}</p>
    </div>
  );
};

export default Data;

