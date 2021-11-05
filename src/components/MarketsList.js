import React, { useState } from "react";

const MarketsList = ({ markets, onclick }) => {
  return (
    <div className="marketListContainer">
      {markets.map(
        ({ fields: { title, city, country, picture }, sys: { id } }) => {
          return (
            <div key={id} id={id} className="marketListItem" onClick={onclick}>
              <div className="thumbnail">
                <img src={picture[0].fields.file.url} alt={title} />
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
