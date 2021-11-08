import React, {useState, useEffect} from 'react';
//importing images
import XmasTree from '../pictures/XmasTree.jpg'
import XmasTree2 from '../pictures/XmasTree2.jpg'


const Picture = () => {

  const [isActive, setActive] = useState(true);

  const toggleClass = () => {
    setActive(!isActive);
  };

    return (
  <div className="pictireContainer">
  <section>
    <div 
    className={isActive ? 'toggleCard': 'main-div'}
    onClick={toggleClass}> 
       <div className="frontSide">
         <img src={XmasTree} alt="picture 1" />
       </div>
       <div className="backSide">
         
                  <img src={XmasTree2} alt="picture of a christmas tree" />
                </div>
    </div>
    </section>
    </div>
    )
}

export default Picture;