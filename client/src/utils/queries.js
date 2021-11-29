import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      firstName
      lastName
      zipCode
      email
      savedEvents {
        _id
        eventName
        venue
        zipCode
        lat
        lon
        eventDate
        eventImage
      }
      eventPrefs{
        _id
        category
        subCategory
      }
    }
  }
`;

export const QUERY_SAVED_EVENTS = gql`
  query savedEvents {
    SavedEvent {
      _id
      eventName
      venue
      zipCode
      lat
      lon
      eventDate
      eventImage
    }
  }
`;

export const QUERY_SINGLE_SAVED_EVENT = gql`
  query getSingleSavedEvent($savedEventId: ID!) {
    SavedEvent(savedEventId: $savedEventId) {
      _id
      eventName
      venue
      zipCode
      lat
      lon
      eventDate
      eventImage
    }
  }
`;


