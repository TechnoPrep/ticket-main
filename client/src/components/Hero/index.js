import React from 'react';
import heroPhoto from '../../img/hero-pic.jpg';
import videoBg from '../../img/video-bg.mp4'
import { formatDate, formatTime } from '../../utils/timestampConverter'
import Media from 'react-media';

const Hero = ({heroImage: { url, performer, eventDate, eventTime, venue }, displayHero}) => {

  console.log(displayHero);

  return (
    <>
    {displayHero ? ((typeof url !== 'string' ) ? (
      <div className='hero'>
          <video autoPlay muted loop className='video-bg'>
            <source src={videoBg} type="video/mp4"></source>
          </video>
          <Media query="(min-width: 1016px)">
            {matches => {
              return matches ? 
              <div className="hero-text-box">
                <p className='hero-text'>WELCOME TO TOTAL TICKET.</p>
                <p className='hero-text'>ANY TICKET - ANY TIME</p>
                <p className='hero-text'>FOR THE BEST PRICE</p>
              </div>
              :
              <div></div>
            }}
          
          </Media>
      </div>
      ) : (
      <div className='banner'>
        <img src={url} className="banner-img" />
        <h1 className='banner-text'>{performer.toUpperCase()}</h1>
        <div className='banner-details'>
        <h3 className='banner-title'>{venue} || {formatDate(eventDate)} || {formatTime(eventTime)}</h3>
        </div>
      </div>
      )) : (
        <div></div>
      )
    }
    </>
  );
};

export default Hero;