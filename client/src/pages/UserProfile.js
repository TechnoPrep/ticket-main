import React from 'react';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';

import Results from '../components/Results';

import { QUERY_ME } from '../utils/queries';


const UserProfile = () => {

  const { err, loading, data } = useQuery(QUERY_ME);

  const user = data?.me || {};

  const eventIdArr = user.savedEvents ? user.savedEvents.map(saved => (saved.eventId)) : []

  const eventList = user.savedEvents

  if (loading) {
    return <div>Loading...</div>;
  }

  //If user is not logged in, redirect to login page
  if (!user.email) {
    window.location.assign('/login')
  }

  

  return (
    <div>
      <div className="flex-row justify-center mb-3">
      <h2 className='saved-events-text'>{Auth.getProfile().data.firstName}'s Saved Events</h2>
        <div className="col-12 col-md-10 mb-5">
          <Results 
            savedEvents={eventIdArr}
            events={eventList}
            title={`My Searched Events events...`}
            showTitle={false}
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
