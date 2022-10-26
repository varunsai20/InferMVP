import React from "react";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile";
import Saved from "./pages/Saved/Saved";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/saved" component={Saved} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </Router>
    </div>
  );
}
