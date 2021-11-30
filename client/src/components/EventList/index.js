import React from 'react';
import { Link } from 'react-router-dom';
import { convertTimestamp } from '../../utils/timestampConverter'

const EventList = ({
  events,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!events.length) {
    return <h3>No events Yet</h3>;
  }

  return (
    <div>
     {showTitle && <h3>{title}</h3>}
      {events &&
        events.map((event) => (
          <div key={event._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {event.eventName}
            </h4>
            <div className="card-body bg-light p-2">
              <p>Location: {event.venue}</p>
              <p>Event Date: {convertTimestamp(event.eventDate)}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default EventList;