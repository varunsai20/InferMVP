import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./Saved-Nav.css";
function SavedNav() {
  return (
    <Navbar className="navbar-saved" bg="light" expand="lg">
      <p id="Articles">Saved Articles & Research Papers</p>
    </Navbar>
  );
}

export default SavedNav;
