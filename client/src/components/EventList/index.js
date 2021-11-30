import React from 'react';
import { Link } from 'react-router-dom';

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
     {/* {showTitle && <h3>{title}</h3>}
      {events &&
        events.map((event) => (
          <div key={event._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${event.eventAuthor}`}
                >
                  {event.eventAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    saved this event on {event.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You saved this event on {event.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{event.eventText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/events/${event._id}`}
            >
              Join the discussion on this event.
            </Link>
          </div>
        ))} */}
    </div>
  );
};

export default EventList;