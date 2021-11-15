import { Link } from "react-router-dom";
import { Map, Marker } from "pigeon-maps";

const MapMain = ({ markets }) => {
  return (
    <div className="mapContainer">
       
      
      <Map height={500} defaultCenter={[52.531677, 13.381777]} defaultZoom={11}>
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
