import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { fetchEvents, fetchLocation } from '../utils/apiQueries'
import { QUERY_ME } from '../utils/queries';
import { ADD_SAVED_EVENT, REMOVE_SAVED_EVENT } from '../utils/mutations'
import Results from '../components/Results'
import decode from 'jwt-decode'

const Home = ({apitokens, heroImage}) => {
  
  //State to manage the API Query return
  const [eventList, setEventList] = useState([]);

  // Manages the state of the values in the form
  const [queryState, setQueryState] = useState({
    searchTerm: '',
    zipCode: '',
    radius: '10',
    lat: '',
    lon: ''
  });

  // If this page is loaded, set the Banner Image back to default
  useEffect(() => {

    heroImage()
    
 
   }, [])

  //  Query that pulls data of user based off context
  const { loading, data } = useQuery(QUERY_ME);

  // Mutation to handle adding events to the users SavedEvents, after it is ran, re-run the ME query to pull newly saved values
  const [addEvent, {error, results}] = useMutation(ADD_SAVED_EVENT, {
    refetchQueries: [
      QUERY_ME,
      'me'
    ]
  });

  // Mutation to handle removing events from the users SavedEvents, after it is ran, re-run the ME query to pull newly saved values
  const [rmEvent] = useMutation(REMOVE_SAVED_EVENT, {
    refetchQueries: [
      QUERY_ME,
      'me'
    ]
  });

  // set to either data pulled from QUERY_ME or to an empty object
  const user = data?.me || {};

  // Set through the user and exact the eventId's and save to an array, if no saved events, set ot empty array
  const eventIdArr = user.savedEvents ? user.savedEvents.map(saved => (saved.eventId)) : []

  // Handle submit on the Search Form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if(queryState.zipCode !== ''){
      // const {geometry: {location: {lat, lng}}} = await fetchLocation(apitokens, queryState.zipCode);
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

  // Accept the token from the Results component, decode it to extract the data needed to save to the Database
  const saveEvent = async (token) => { 

    const { 
      eventId,
      performer,
      venue,
      city,
      stateCode,
      eventDate,
      eventTime,
      eventImage,
      healthCheck
    } = await decode(token)
      
      try {
        const mutationResponse = await addEvent({
          variables: {
            eventId: eventId,
            eventName: performer,
            venue: venue,
            city: city,
            stateCode: stateCode,
            eventDate: eventDate,
            eventTime: eventTime,
            eventImage: eventImage.url,
            queryLink: token,
            healthCheck: healthCheck
          }
        })

      } catch (error) {
        console.error(error)
      }
    
  }

  // Remove the event based off its eventId
  const removeEvent = async (eventId) => {

    try {

      const mutationResponse = await rmEvent({
        variables: {
          eventId: eventId
        }
      })
      
    } catch (error) {
      console.error(error)
    }
  }

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
              Radius (in miles)
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
                saveToEvents={saveEvent}
                removeFromEvents={removeEvent}
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
