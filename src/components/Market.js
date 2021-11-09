import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { client } from "./client";

const Market = ({ title, city, country, picture }) => {
  const { marketID } = useParams();
  const [market, setMarket] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMarket = async () => {
      try {
        setLoading(true);
        const result = await client.getEntry(marketID);
        setMarket(result);
        console.log(market);
        setLoading(false);
      } catch (error) {
        return alert("Sorry, it is too early for Christmas");
        setLoading(false);
      }
    };
    getMarket();
  }, [marketID]);

  return (
    <div >
      {!loading && market ? (
        <div>
          <br />
          <br />
          <br />
          <h1>{market.fields.title}</h1>
          <h1>{market.fields.city}</h1>
          <h1>{market.fields.country}</h1>
          <h1>{market.fields.date}</h1>
          <h5>{market.fields.description.content[0].content[0].value}</h5>
          <div> <img src={market.fields.picture[0].fields.file.url} /> </div>
          </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Market;
