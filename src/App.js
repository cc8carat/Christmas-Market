import "./App.css";
import React, { useEffect, useState } from "react";
import Picture from "./components/Picture";
import Navibar from "./components/Navibar";
import MarketsList from "./components/MarketsList";
import Market from "./components/Market";
import { Switch, link, Route } from "react-router-dom";
import { client } from "./components/client";

const App = () => {
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    const getMarkets = async () => {
      try {
        setLoading(true);
        const result = await client.getEntries();
        setMarkets(result.items);
        setLoading(false);
      } catch (error) {
        return alert("Sorry, it is too early for Christmas");
      }
    };
    getMarkets();
  }, []);

  return (
    <div className="App appMainDiv">
      <div className="headerDiv">
        <h1>This is a journey through the Europe's Christmas markets</h1>
      </div>
      <div className="navigation">
        <Navibar />
      </div>
      <div className="picture">
        <Picture />
      </div>
    <Route exact path="/"> 
      <div>
        {loading ? (
          "🎄"
        ) : (
          <MarketsList markets={markets} />
        )}
      </div>
      </Route> 

    </div>
  );
};

export default App;
