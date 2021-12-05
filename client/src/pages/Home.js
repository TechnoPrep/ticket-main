import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { fetchEvents, fetchLocation } from '../utils/apiQueries'
import { QUERY_ME, QUERY_SAVED_EVENTS } from '../utils/queries';
import Results from '../components/Results'

const Home = ({apitokens}) => {
  
  const [eventList, setEventList] = useState([]);

  const [userEvents, setSavedEvents] = useState([]);
  
  const [queryState, setQueryState] = useState({
    searchTerm: '',
    zipCode: '',
    radius: '10',
    lat: '',
    lon: '',
  });

  const { err, loading, data } = useQuery(QUERY_ME);
  const { savedEvents } = data?.me || {};
  
  const eventIdArr = savedEvents ? savedEvents.map(saved => (saved.eventId)) : []

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
    <div className=''>
      <div className='search-box'>
        <h2 className='search-header'>Enter an Event or band name to get started!</h2>
        <form className='search-form' onSubmit={handleFormSubmit}>
          <div className="flex-row space-between">
            <label 
              className='search-label'
              htmlFor="eventName">
                Event / Performer Name
            </label>
          
            <input 
              className='form-input' 
              type="text"
              name="searchTerm"
              value={queryState.searchTerm}
              onChange={handleChange}
              aria-label="Search for tickets"
              />
          </div>
          <div className="flex-row space-between">
            <label 
              className='search-label'
              htmlFor="zipCode">
                Zip Code
            </label>
          
            <input 
              className='form-input' 
              type="text" 
              name="zipCode"
              value={queryState.zipCode}
              onChange={handleChange}
              aria-label="Search for tickets"
              />
          </div>
          <div className="flex-row space-between">
          <label 
            className='search-label'
            htmlFor="Radius">
              Radius:
          </label>
        
          <select name="radius" value={queryState.radius} onChange={handleChange} className='form-input'>
            <option className="radius" value="10">10</option>
            <option className="radius" value="25">25</option>
            <option className="radius" value="50">50</option>
            <option className="radius" value="100">100</option>
            <option className="radius" value="200">200</option>
          </select>
          </div>
          <div className="search-btn flex-row space-between">
            <button className='submit-btn' type="submit">Search</button>
          </div>
            </form>
        </div>
        <div className="flex-row justify-center mb-3">
          {eventList.length > 0 ? (
            <div className="col-12 col-md-10 mb-5">
              <Results 
                savedEvents={eventIdArr}
                events={eventList}
                title={`My Searched Events events...`}
                showTitle={false}
              />
              </div>
            ) 
            :
            (
              <div className="col-12 col-md-10 mb-5">
                <h3></h3>
              </div>
            )
          }
      </div>
    </div>
  );
};

export default Home;
