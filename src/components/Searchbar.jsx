import React, { useState } from "react";
// import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
// import "./Searchbar.css";

const Search=({setSearch}) => {
  const [term,setTerm]=useState('')
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(/^[a-zA-Z0-9].* /.test(term)|| /^[a-zA-Z0-9]+"".*/.test(term)){
      setSearch(term);
    }
  }
  return (
    
    <Navbar className="navbar-search" bg="light" expand="lg">
    
      <p id="Library">Library Search</p>
      <form className="d-flex" id="Search" onChange={handleSubmit}>
        <input
          placeholder="Search"
          type="text"
          value={term}
          className="Search"
          aria-label="Search"
          onChange={(event)=>setTerm(event.target.value)}
        ></input>
      </form>
    </Navbar>

  );
}

export default Search;
