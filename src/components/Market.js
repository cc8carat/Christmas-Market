import React  from 'react'
import { useParams } from 'react-router';
import { useEffect , useState} from 'react';
import { client } from './client';

const Market = ({ title, city, country, picture}) => {
 const {marketID}= useParams();   
 const [market, setMarket] = useState()
 const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getMarket = async () => {
      try {
        setLoading(true)
        const result = await client.getEntry(marketID);
        setMarket(result); 
        setLoading(false)
    } catch (error) {
        return alert("Sorry, it is too early for Christmas");
        setLoading(false)
      }
    };
    getMarket();
  }, [marketID]);

    return (
        <div>

       { !loading && market ? market.fields.title: 'Loading...' }
        </div>
    )
}

export default Market;






// import react from "react";

// const Market = ({})=>{
//     return (
//         <li key={markets.id}>
//             <div>
//             <h5>{markets.title.id} </h5>
//             <img src={picture[0].fields.file.url} />
//             <p>{article.id}</p>
//             </div>
//         </li>
//     )
// }