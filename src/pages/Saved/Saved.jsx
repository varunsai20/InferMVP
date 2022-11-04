import React from "react";

import SavedNav from "./Saved-Nav";
import { getPosts } from "./axios";
import { useState, useEffect } from "react";
import ListPage from "./ListPage";
import Navbar from "../../components/Navbar";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [savedPosts, setSearchResults] = useState([]);

  useEffect(() => {
    getPosts().then((json) => {
      setPosts(json);
      setSearchResults(json);
    });
  }, []);
  return (
    <>
    <Navbar/>
      <SavedNav />
      <div className="SavedContent-Display">
        <ListPage savedPosts={savedPosts} />
      </div>
    </>
  );
}
