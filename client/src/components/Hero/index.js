import React from 'react';
import heroPhoto from '../../img/hero-pic.jpg';
import videoBg from '../../img/video-bg.mp4'


const Hero = () => {
  return (
    <div className='hero'>
        <video autoPlay muted loop className='video-bg'>
          <source src={videoBg} type="video/mp4"></source>
        </video>
        <div className="hero-text-box">
          <p className='hero-text'>WELCOME TO TOTAL TICKET. </p>
          <p className='hero-text'>ANY TICKET - ANY TIME</p>
          <p className='hero-text'>FOR THE BEST PRICE</p>
        </div>
    </div>
  );
};

export default Hero;