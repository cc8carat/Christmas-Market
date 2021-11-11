import React from "react";
import { Map, Marker } from "pigeon-maps";

const Maps = ({ lat, lon }) => {
  return (
    <>
      <div className="marketListContainer">
      <Map height={300} defaultCenter={[lat, lon]} defaultZoom={11}>
        <Marker width={50} anchor={[lat, lon]} />
      </Map>
      </div>
    </>
  );
};

export default Maps;
