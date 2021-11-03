
import './App.css';
import Picture from './components/Picture'
import Navibar from './components/Navibar'
import { Switch, link, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App appMainDiv">
      <div className="headerDiv">
         <h1>This is a journey through the Europe's Christmas markets</h1>
       </div>
       <div className="navigation">  
                  <Navibar /> 
       </div>
       <div className="picture">
            <Picture />
        </div>
    </div>
  );
}

export default App;
