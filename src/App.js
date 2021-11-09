import "./App.css";
import React, { useEffect, useState } from "react";
import Picture from "./components/Picture";
import Navibar from "./components/Navibar";
import MarketsList from "./components/MarketsList";
import Market from "./components/Market";
import { Switch, link, Route } from "react-router-dom";
import { client } from "./components/client";
import Footer from './components/Footer';

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

      <div className="navigation">
        <Navibar />
        <div className="headerDiv">
        <h3>Christmas Markets of Europe</h3>
      </div>       
      </div>      

      <Route exact path="/"> 
      <div className="picture">
        <Picture />
      </div>   
      <div>
        {loading ? (
          "🎄"
        ) : (
          <MarketsList markets={markets} />
        )}
      </div>
      </Route> 

      <Route path="/market/:marketID">
      <Market />
      </Route>

      <div >
        <Footer />
      </div>
      <div >
        <Footer />
      <div >
        <Footer />
      </div>
      <div >
        <Footer />
      </div>
    </div>
  );
};

export default App;
