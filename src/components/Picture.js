import React, {useState, useEffect} from 'react';

const Picture = () => {

    return (
    <div className="main-div"> 
      <div className="backSide">
        <img src="./pictures/XmasTree.jpg" alt="picture of a christmas tree" />
       
      </div>
      <div className="frontSide">
       <img src="./pictures/XmasTree2" alt="picture of a christmas tree" />
      </div>
    </div>

    );
}

export default Picture;