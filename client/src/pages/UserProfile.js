import React, {useState, useEffect} from 'react';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';

import Results from '../components/Results';

import { QUERY_ME } from '../utils/queries';


const UserProfile = ({heroImage}) => {

  const { err, loading, data } = useQuery(QUERY_ME);

  const userQuery = data?.me || {};

  console.log(userQuery);

  const eventIdArr = userQuery.savedEvents ? userQuery.savedEvents.map(saved => (saved.eventId)) : []

  const eventList = userQuery.savedEvents

  if(!userQuery.email){
    window.location.assign('/')
  }

  useEffect(() => {

  heroImage()

 }, [])

  return (
    <div>
      <div className="flex-row justify-center mb-3">
      <h2 className='saved-events-text'>{Auth.getProfile().data.firstName}'s Saved Events</h2>
        <div className="col-12 col-md-10 mb-5">
          <Results 
            // savedEvents={user.existingEvents}
            // events={user.eventList}
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
