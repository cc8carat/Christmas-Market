import React from 'react';
import { NavLink, Switch, Route } from "react-router-dom";
//importing components
import About from "./About"
import Home from "./Home"
import Contact from "./Contact"

const Navibar = () => {

return(
<>
<div className='NavBarContainer'>
  <nav>
    
        <NavLink
          className="link"
          to="/Home">
          Home
        </NavLink>
        <NavLink
          className="link"
          to="/About">
          About
        </NavLink>
        <NavLink
          className="link"
          to="/Contact">
          Contact
        </NavLink>
        
 </nav>
 </div>
 <Switch>
      <Route path="/Home">
      <Home />
      </Route>
      <Route path="/About">
      <About />
      </Route>
      <Route path="/Contact">
      <Contact />
      </Route>
    </Switch>
</>
);
};

export default Navibar 