import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { client } from "./client";
import Maps from "./Maps";

const Market = () => {
  const { marketID } = useParams();
  const [market, setMarket] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMarket = async () => {
      try {
        setLoading(true);
        const result = await client.getEntry(marketID);
        setMarket(result);
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
          <h1>{market.fields.title}</h1>
          <h1>{market.fields.city}</h1>
          <h1>{market.fields.country}</h1>
          <h1>{market.fields.date}</h1>
          <h5>{market.fields.marketDescription}</h5>
          <div>
            {" "}
            <img src={market.fields.picture[0].fields.file.url} />{" "}
          </div>
 
          <Maps
            lat={market.fields.location.lat}
            lon={market.fields.location.lon}
          />
        </div>
      ) : (
        <div className='bouncer'>
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
