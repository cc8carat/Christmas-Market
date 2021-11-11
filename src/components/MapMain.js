import { Link } from "react-router-dom";
import { Map, Marker } from "pigeon-maps";

const MapMain = ({ markets }) => {
  return (
    <div className="marketListContainer">
      <Map height={500} defaultCenter={[48.400002, 9.983333]} defaultZoom={11}>
        {markets.map(
          ({
            fields: {
              location: { lat, lon },
            },
          }) => {
            return <Marker width={50} anchor={[lat, lon]} />;
          }
        )}
      </Map>
    </div>
  );
};

export default MapMain;
