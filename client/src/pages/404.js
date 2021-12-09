import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import PageNotFoundImg from '../img/404-Image.png'

function PageNotFound({displayHero}) {

  useEffect(() => [
    displayHero(false)
  ], [])

  return (
    <div className="container"> 
    <br/>
    <div className="pagenotefound">
      <h3 className="pagenotfound-text">PAGE NOT FOUND</h3>
      <br/>
    </div>
      <div className="pagenotfound-image">
        <img src={PageNotFoundImg} alt="Bill Murray Caddyshack Meme"/>
      </div>!
      <h3 className="pagenotfound-text">But you found this page, so you got that going for you.</h3>
      <h3 className="pagenotfound-text">Which is nice...</h3>
    </div>
  );
}

export default PageNotFound;
