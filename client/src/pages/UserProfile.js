import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import EventList from '../components/EventList';

import { QUERY_ME, QUERY_SAVED_EVENTS } from '../utils/queries';

import Auth from '../utils/auth';

const UserProfile = () => {

  const { err, loading, data } = useQuery(QUERY_ME);

  const user = data?.me || {};

  console.log(user);

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
        <div className="col-12 col-md-10 mb-5">
          <EventList
            events={user.savedEvents}
            title={`${user.firstName}'s events...`}
            showTitle={false}
            showUsername={false}
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
