import React from 'react';
import { Link } from 'react-router-dom';

const Results = ({
  events,
  title,
  showTitle = true,
}) => {
  if (events[0] === 'No Events were found') {
    return <h3> No events were found, please check another Performer or Change your search location </h3>;
  }

  return (
    <div>
    {showTitle && <h3>{title}</h3>}
     {events &&
        events.map((event) => (
          (<div key={event.id} className="card mb-3">
           <h4 className="card-header bg-primary text-light p-2 m-0">
             {event.name}
           </h4>
           <img src={event.img.url} alt={event.name}/>
           <div className="card-body bg-light p-2">
             <p>Location: {event.venue}</p>
             <p>Event Date: {event.date} @ {event.time}</p>
            {event.healthCheck ? (
               <p>Health Check Required</p>
              ) 
              :
              (
                <p>No Health Check Required</p>
              )
            }
           </div>
         </div>)
        ))}
    </div>
  );
};

export default Results;