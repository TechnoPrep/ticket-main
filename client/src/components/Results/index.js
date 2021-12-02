import React from 'react';
import { Link } from 'react-router-dom';

const Results = ({
  events,
  title,
  showTitle = true,
}) => {
  if (!events.length) {
    return <h3>No events Yet</h3>;
  }

  return (
    <div>
    <h3>I am losing it</h3>
    {showTitle && <h3>{title}</h3>}
     {events &&
        events.map((event) => (
          (<div key={event.id} className="card mb-3">
           <h4 className="card-header bg-primary text-light p-2 m-0">
             Event Name{event.name}
           </h4>
           <div className="card-body bg-light p-2">
             <p>Desc: {event.description}</p>
             <p>Location: {event.venue.name}</p>
             <p>Event Date: {event.eventDateUTC}</p>
             <p>Event Type: {event.categoriesCollection.categories[0].name}</p>
           </div>
         </div>)
        ))}
    </div>
  );
};

export default Results;