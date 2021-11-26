import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Maps from "./Maps";
import axios from "axios";

const Market = () => {
  const { marketID } = useParams();
  const [market, setMarket] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMarket = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://wbs020-christmasmarket-backend.herokuapp.com/markets/${marketID}`
        );
        setMarket(data);
        setLoading(false);
      } catch (error) {
        return alert("Sorry, it is too early for Christmas");
        setLoading(false);
      }
    };
    getMarket();
  }, [marketID]);

  return (
    <div>
      {!loading && market ? (
        <div>
          <br />
          <h1>{market.title}</h1>
          <h1>{market.city}</h1>
          <h1>{market.country}</h1>
          <h1>{market.duration}</h1>
          <h5>{market.marketDescription}</h5>
          <div>
            {" "}
            <img src={market.imageUrl} />{" "}
          </div>

          <Maps lat={market.lat} lon={market.lon} />
        </div>
      ) : (
        <div className="bouncer">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Market;
//
