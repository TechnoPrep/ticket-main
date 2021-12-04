import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import EventList from '../components/EventList';

import { QUERY_ME, QUERY_SAVED_EVENTS } from '../utils/queries';

import Auth from '../utils/auth';

const UserProfile = () => {

  const { err, loading, data } = useQuery(QUERY_ME);

  const user = data?.me || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user.email) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
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
