import { NavLink, Switch, Route } from "react-router-dom";
//importing components
import Home from "./Home";
import Stars from "./Stars";
const Navibar = () => {
  return (
    <>
      <div className="NavBarContainer">
        <nav>
          <div>
            <Stars />
          </div>

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
          </Switch>
        </nav>
      </div>
    </>
  );
};

export default Navibar;
