import React from 'react';
import heroPhoto from '../../img/hero-pic.jpg';
import videoBg from '../../img/video-bg.mp4'
import { formatDate, formatTime } from '../../utils/timestampConverter'
import Media from 'react-media';

const Hero = ({heroImage: { url, performer, eventDate, eventTime, venue }, displayHero}) => {

  return (
    <>
    {displayHero ? ((typeof url !== 'string' ) ? (
      <div className='hero'>
          <video autoPlay muted loop className='video-bg'>
            <source src={videoBg} type="video/mp4"></source>
          </video>
          <Media query="(min-width: 1115px)">
            {matches => {
              return matches ? 
              <div className="hero-text-box">
                <p className='hero-text'>WELCOME TO TOTAL TICKET</p>
                <p className='hero-text'>ANY TICKET - ANY TIME</p>
                <p className='hero-text'>FOR THE BEST PRICE</p>
              </div>
              :
              <div></div>
            }}
          
          </Media>
      </div>
      ) : (
        <div>
        <Media query="(min-width: 1511px)">
          {matches => {
            return matches ?
            <div className='banner'>
            <img src={url} className="banner-img" />
            <h1 className='banner-text'>{performer.toUpperCase()}</h1>
            <div className='banner-details'>
            <h3 className='banner-title'><span className='banner-title-one'>{venue}</span> <span className='banner-title-two'>{formatDate(eventDate)}</span> <span className='banner-title-three'>{formatTime(eventTime)}</span></h3>
            </div>
          </div>
          :
          <div className='banner'>
            <img src={url} className="banner-img" />
            <h1 className='banner-text-small'>{performer.toUpperCase()}</h1>
            <div className='banner-details-small'>
            <h3 className='banner-title-small'><span className='banner-title-one'>{venue}</span> <span className='banner-title-two'>{formatDate(eventDate)}</span> <span className='banner-title-three'>{formatTime(eventTime)}</span></h3>
            </div>
          </div>
          }}
          
      </Media>
      </div>
      )) : (
        <div></div>
      )
    }
    </>
  );
};

export default Hero;