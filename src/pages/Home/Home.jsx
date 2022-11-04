import React from "react";
import Search from "../../components/Searchbar";
import HomePage from "./HomePage";
import Navbar from "../../components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <Search />
      <HomePage />
    </>
  );
}
