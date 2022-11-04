import React from "react";
import SettingsNav from "./SettingsNav";
import SettingsData from "./SettingsData";
import Navbar from "../../components/Navbar";

export default function Profile() {
  return (
    <>
    <Navbar/>
      <SettingsNav />
      <SettingsData />
    </>
  );
}
