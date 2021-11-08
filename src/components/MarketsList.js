import React, { useState } from "react";
import {Link} from 'react-router-dom';

const MarketsList = ({ markets}) => {
  return (
    <div className="marketListContainer">
      {markets.map(
        ({ fields: { title, city, country, picture }, sys: { id } }) => {
          return (
            <div key={id} id={id} className="marketListItem" >
              <div className="thumbnail">
                <img src={picture[0].fields.file.url} alt={title} />
              </div>
              <div className="textContainer">
                <Link to={`/market/${id}`}>
                <h2>{title}</h2>
                </Link>
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
