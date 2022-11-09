import React from "react";
// import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as IoIcons from "react-icons/io";
import "./Searchbar.css";

function Search() {
  return (
    
    <Navbar className="navbar-search" bg="light" expand="lg">
      {/* <Container fluid> */}
      {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
      {/* <Navbar.Collapse id="navbarScroll"> */}
      <p id="Library">Library Search</p>
      <Form className="d-flex" id="Search">
        <Form.Control
          placeholder="Search"
          type="search"
          className="Search"
          aria-label="Search"
        />
        {/* <svg
          className="search-NAV"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_23_940)">
            <path
              d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875V15.875Z"
              fill="#A7A7A7"
            />
          </g>
          <defs>
            <clipPath id="clip0_23_940">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg> */}
      </Form>
      {/* </Navbar.Collapse> */}
      {/* </Container> */}
    </Navbar>
    // </div>
  );
}

export default Search;
