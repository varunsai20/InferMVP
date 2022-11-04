import React from "react";
import "../src/Styles.css";
import Navbar from "./components/Navbar";
import {Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login"

// PAGES
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Saved from "./pages/Saved/Saved";
import Settings from "./pages/Settings/Settings";

export default function App() {
  return (
    <div className="App">
      {/* <Login /> */}
        <Switch>   
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
    </div>
  );
}
