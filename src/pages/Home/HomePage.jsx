import React from "react";
import * as FiIcons from "react-icons/fi";
import Search from "../../components/Searchbar";
export default function HomePage() {
  return (
    <>
      <div className="">
        <img><FiIcons.FiSearch></img>
      </div>
      <div className="home">
        <h1>Home</h1>
      </div>
    </>
  );
}
