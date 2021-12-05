import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      zipCode
      email
      savedEvents {
        _id
        eventId
        eventName
        venue
        city
        stateCode
        eventTime
        eventDate
        eventImage
        queryLink
        healthCheck
      }
    }
  }
`;

export const QUERY_SAVED_EVENTS = gql`
  query savedEvents {
    SavedEvent {
      _id
      eventId
      eventName
      venue
      city
      stateCode
      eventTime
      eventDate
      eventImage
      queryLink
      healthCheck
    }
  }
`;



