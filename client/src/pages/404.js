import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import PageNotFoundImg from '../img/404-image.jpg'

function PageNotFound() {

  return (
    <div className="container"> 
      <div className="pagenotfound-image">
        <img src={PageNotFoundImg} alt="Bill Murray Caddyshack Meme"/>
      </div>
    </div>
  );
}

export default PageNotFound;
