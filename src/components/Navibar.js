import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
//importing components
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Market from "./Market";

const Navibar = () => {
  return (
    <>
      <div className="NavBarContainer">
        <nav>
          <NavLink className="link" to="/">
            Home
          </NavLink>
          <NavLink className="link" to="/About">
            About
          </NavLink>
          <NavLink className="link" to="/Contact">
            Contact
          </NavLink>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
          </Switch>
        </nav>
      </div>
    </>
  );
};

export default Navibar;
