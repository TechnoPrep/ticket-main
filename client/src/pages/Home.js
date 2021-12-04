import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { fetchEvents, fetchLocation } from '../utils/apiQueries'

import Results from '../components/Results'

const Home = ({apitokens}) => {
  
  const [eventList, setEventList] = useState([]);
  
  const [queryState, setQueryState] = useState({
    searchTerm: '',
    zipCode: '',
    radius: '10',
    lat: '',
    lon: '',
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if(queryState.zipCode !== ''){
      const {geometry: {location: {lat, lng}}} = await fetchLocation(apitokens, queryState.zipCode);
      const results = await fetchEvents(apitokens, queryState.searchTerm, lat, lng, queryState.radius );
      setEventList(results);
    } else {
      const results = await fetchEvents(apitokens, queryState.searchTerm);
      setEventList(results);
    }


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
        name="searchTerm"
        value={queryState.searchTerm}
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
     
      <select name="radius" value={queryState.radius} onChange={handleChange}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="200">200</option>
      </select>

      <button type="submit">Search</button>
        </form>
      </div>
      <div className="flex-row justify-center mb-3">
        {eventList.length > 0 ? (
          <div className="col-12 col-md-10 mb-5">
            <Results 
              events={eventList}
              title={`My Searched Events events...`}
              showTitle={false}
            />
            </div>
          ) 
          :
          (
            <div className="col-12 col-md-10 mb-5">
              <h3> Please Search for an Event! </h3>
            </div>
          )
        }
    </div>
    </div>
  );
};

export default Home;
