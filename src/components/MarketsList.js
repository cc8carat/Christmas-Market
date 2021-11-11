import { Link } from "react-router-dom";

const MarketsList = ({ markets }) => {
  return (
    <div className="marketListContainer">
      {markets.map(
        ({ fields: { title, city, country, picture }, sys: { id } }) => {
          return (
            <Link to={`/market/${id}`} className="marketListItem" key={id}>
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
            </Link>
          );
        }
      )}
    </div>
  );
};

export default MarketsList;
