import "./App.css";
import React, { useEffect, useState } from "react";
import Picture from "./components/Picture";
import Navibar from "./components/Navibar";
import MarketsList from "./components/MarketsList";
import { Route } from "react-router-dom";
import Footer from "./components/Footer";
import Market from "./components/Market";
import Contact from "./components/Contact";
import About from "./components/About";
import MapMain from "./components/MapMain";
import Stars from "./components/Stars";
import axios from "axios";
const App = () => {
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMarkets = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://wbs020-christmasmarket-backend.herokuapp.com/markets"
        );
        setMarkets(data);
        setLoading(false);
      } catch (error) {
        return alert("Sorry, it is too early for Christmas");
      }
    };
    getMarkets();
  }, []);

  return (
    <div className="appMainDiv">
      <div className="navigation">
        <Navibar />
        <div className="landingHeaderDiv">
          <h3>Christmas Markets of Europe</h3>
        </div>
      </div>

      <Route exact path="/">
        <div className="picture">
          <Picture />
        </div>

        <div>
          {loading ? (
            <div className="bouncer">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <MarketsList markets={markets} />
          )}
        </div>
      </Route>

      <Route path="/markets/:marketID">
        <Market />
      </Route>

      <Route exact path="/">
        <MapMain markets={markets} />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route>
      <div className="footerMainDiv">
        <Footer />
      </div>
    </div>
  );
};

export default App;
