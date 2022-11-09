import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./Profile-Nav.css";
function ProfileNav() {
  return (
    <Navbar className="navbar-profile" bg="light" expand="lg">
      <p id="Profile">Profile</p>
    </Navbar>
  );
}

export default ProfileNav;
