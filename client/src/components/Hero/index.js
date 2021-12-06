import React from 'react';
import heroPhoto from '../../img/hero-pic.jpg';
import videoBg from '../../img/video-bg.mp4'


const Hero = ({heroImage: { url, performer, eventDate, eventTime, venue }}) => {
  return (
    <>
    { (typeof url !== 'string' ) ? (
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
      ) : (
      <div className='banner'>
        <img src={url} className="banner-img" />
        <h1 className='banner-text'>{performer.toUpperCase()}</h1>
        <div className='banner-details'>
        <h3 className='banner-title'>{venue} {eventDate} {eventTime}</h3>
        </div>
      </div>
      )
    }
    </>
  );
};

export default Hero;