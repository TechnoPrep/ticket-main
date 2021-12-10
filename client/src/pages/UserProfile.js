import React, {useState, useEffect} from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';

import Results from '../components/Results';

import { QUERY_ME } from '../utils/queries';
import { REMOVE_SAVED_EVENT } from '../utils/mutations'

const UserProfile = ({heroImage}) => {

  // Pull data of the logged in user passed through from context
  const { err, loading, data } = useQuery(QUERY_ME);

  // Handle the removal of an event, and run the QUERY_ME query on callback
  const [rmEvent] = useMutation(REMOVE_SAVED_EVENT, {
    refetchQueries: [
      QUERY_ME,
      'me'
    ]
  });

  // set to either data pulled from QUERY_ME or to an empty object
  const userQuery = data?.me || {};

  // Set through the user and exact the eventId's and save to an array, if no saved events, set ot empty array
  const eventIdArr = userQuery.savedEvents ? userQuery.savedEvents.map(saved => (saved.eventId)) : []

  // Set to the array of savedEvents from user Query
  const eventList = userQuery.savedEvents

  // If no context is passed through, no email is present, sent to login page
  if(!userQuery.email){
    window.location.assign('/')
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

  // If this page is loaded, set the Banner Image back to default
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
