import React from "react";
// import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as IoIcons from "react-icons/io";
import "./Searchbar.css";

function Search() {
  return (
    // <div class="navbar">
    <Navbar bg="light" expand="lg">
      {/* <Container fluid> */}
      {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
      {/* <Navbar.Collapse id="navbarScroll"> */}
      <p id="Library">Library Search</p>
      <Form className="d-flex" id="Search">
        <Form.Control
          type="search"
          placeholder="Search"
          className="Search"
          aria-label="Search"
        />
      </Form>
      {/* </Navbar.Collapse> */}
      {/* </Container> */}
    </Navbar>
    // </div>
  );
}

export default Search;
