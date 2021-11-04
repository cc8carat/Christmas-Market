import React, { useState } from "react";

const MarketsList = ({ markets, whatever }) => {
  return (
    <div className="marketListContainer">
      {markets.map(
        ({ fields: { title, city, country, picture }, sys: { id } }) => {
          return (
            <div key={id} className="marketListItem" onClick={whatever}>
              <div className="thumbnail">
                <img src={picture[0].fields.file.url} />
              </div>
              <div className="textContainer">
                <h2>{title}</h2>
                <div className="cityTag">
                  <h4>{city}</h4>
                  <h5>{country}</h5>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default MarketsList;
