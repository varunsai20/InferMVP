import React from "react";
import ProfileNav from "./ProfileNav";
import ProfileData from "./ProfileData";
import Navbar from "../../components/Navbar";
export default function Profile() {
  return (
    <>
      <Navbar />
      <ProfileNav />
      <ProfileData />
    </>
  );
}
