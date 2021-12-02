import React, { useState, useEffect } from 'react';

const Results = (props) => {
  
  const [eventList, setEventList] = useState([]);

  const [latLong, setLatLong] = useState();

  const [searchLocation, setSearchLocation] = useState({
    zipCode: '',
    radius: '',
    state: '',
  });

  useEffect(() => {

    const getEvents = async () => {
   
      const response = await fetch("https://api.stubhub.com/sellers/search/events/v3", {
        method: "GET",
        mode: 'cors',
        headers: {
          "Authorization": `Bearer ${props.apitokens.stubhub}`,
          "Accept": "application/json",
          'Access-Control-Allow-Origin':'http://localhost:3000',
          "Access-Control-Allow-Credential": "true"
        }
      })
  
      const data = await response.json()

      const { events } = data

      console.log(events);

      setEventList(events);
    }

    getEvents();

  }, [])
  
  return (
    <div>
    {<h3>Search Results</h3>}
     {eventList.map((event) => (
         <div key={event.id} className="card mb-3">
           <h4 className="card-header bg-primary text-light p-2 m-0">
             {event.name}
           </h4>
           <div className="card-body bg-light p-2">
             <p>Desc: {event.description}</p>
             <p>Location: {event.venue.name}</p>
             <p>Event Date: {event.eventDateUTC}</p>
             <p>Event Type: {event.categoriesCollection.categories[0].name}</p>
           </div>
         </div>
       ))}
   </div>
  );
};

export default Results;
