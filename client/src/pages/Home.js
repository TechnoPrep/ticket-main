import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { fetchEvents, fetchLocation, fetchVenues } from '../utils/apiQueries'

import Results from '../components/Results'

const Home = ({apitokens}) => {
  
  const [eventList, setEventList] = useState([]);
  
  const [queryState, setQueryState] = useState({
    eventName: '',
    zipCode: '',
    radius: '',
    lat: '',
    lon: '',
  });

  const [eventQuery, setEventQuery] = useState({
    venues: [],
    performers: []
  })

  // useEffect(() => {
  //   console.log('useEffect ran');
  // }, [])

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const lat = 39.7316982;
    const lon = -104.9431649;
    const radius = 50;
 
    fetchVenues(apitokens, lat, lon, radius)
        
    const results = await fetchEvents(apitokens)
    setEventList(results)
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setQueryState({
      ...queryState,
      [name]: value,
    });
  };

  return (
    <div className='home'>
    <div className='search-input'>
    <form onSubmit={handleFormSubmit}>
      <label 
        className='sample-search'
        htmlFor="eventName">
          Event / Performer Name
      </label>
     
      <input 
        className='m-2' 
        type="text" 
        name="eventName"
        value={queryState.eventName}
        onChange={handleChange}
        aria-label="Search for tickets"
        />

      <label 
        className='sample-search'
        htmlFor="zipCode">
          Zip Code
      </label>
     
      <input 
        className='m-2' 
        type="text" 
        name="zipCode"
        value={queryState.zipCode}
        onChange={handleChange}
        aria-label="Search for tickets"
        />

      <label 
        className='sample-search'
        htmlFor="Radius">
          Radius:
      </label>
     
      <select value={queryState.radius} onChange={handleChange}>
        <option name="10">10</option>
        <option name="25">25</option>
        <option name="50">50</option>
        <option name="100">100</option>
        <option name="200">200</option>
      </select>

      <button type="submit">Search</button>
        </form>
      </div>
      <div className="flex-row justify-center mb-3">
      <div className="col-12 col-md-10 mb-5">
        <Results 
          events={eventList}
          title={`My Searched Events events...`}
          showTitle={false}
        />
      </div>
    </div>
    </div>
  );
};

export default Home;
