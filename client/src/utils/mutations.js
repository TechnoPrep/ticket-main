import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $phone: String!, $zipCode: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, phone: $phone, zipCode: $zipCode, email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ACCOUNT_REG = gql`
  mutation accountReg($email: String!) {
    accountReg(email: $email) {
      user {
        _id
        emailConfirmed
      }
    }
  }
`;

export const EVENT_PREF_SETUP = gql`
  mutation eventPrefSetup($email: String!) {
    eventPrefSetup(email: $email) {
      user {
        _id
        prefsSet
      }
    }
  }
`;

export const ADD_SAVED_EVENT = gql`
  mutation addSavedEvent($eventName: String!, $venue: String!, $zipCode: Int!, $lat: Float!, $lon: Float!, $eventDate: String!, $eventImage: String!) {
    addSavedEvent(eventName: $eventName, venue: $venue, zipCode: $zipCode, lat: $lat, lon: $lon, eventDate: $eventDate, eventImage: $eventImage) {
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
