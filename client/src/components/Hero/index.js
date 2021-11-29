import React from 'react';
import heroPhoto from '../../img/hero-pic.jpg'


const Hero = () => {
  return (
    <div className='hero'>
        <img src={heroPhoto} className='hero-img'></img>
        <div className="hero-text">WELCOME TO TOTAL TICKET.</div>
        <div className="hero-text2">ANY TICKET. ANY TIME. FOR THE BEST PRICE.</div>
    </div>
  );
};

export default Hero;