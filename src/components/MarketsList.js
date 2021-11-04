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
              <h2>{title}</h2>
              <p>{city}</p>
              <p>{country}</p>
            </div>
          );
        }
      )}
    </div>
  );
};

export default MarketsList;
