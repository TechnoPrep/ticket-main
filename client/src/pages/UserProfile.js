import React, {useState, useEffect} from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';

import Results from '../components/Results';

import { QUERY_ME } from '../utils/queries';
import { REMOVE_SAVED_EVENT } from '../utils/mutations'

const UserProfile = ({heroImage}) => {

  const { err, loading, data } = useQuery(QUERY_ME);

  const [rmEvent] = useMutation(REMOVE_SAVED_EVENT, {
    refetchQueries: [
      QUERY_ME,
      'me'
    ]
  });

  const userQuery = data?.me || {};

  const eventIdArr = userQuery.savedEvents ? userQuery.savedEvents.map(saved => (saved.eventId)) : []

  const eventList = userQuery.savedEvents

  if(!userQuery.email){
    window.location.assign('/')
  }

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

  useEffect(() => {

  heroImage()

 }, [])

  return (
    <div>
      <div className="flex-row justify-center mb-3">
      <h2 className='saved-events-text'>{Auth.getProfile().data.firstName}'s Saved Events</h2>
        <div className="col-12 col-md-10 mb-5">
          <Results 
            removeFromEvents={removeEvent}
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
