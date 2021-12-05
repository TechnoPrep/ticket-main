import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $zipCode: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, zipCode: $zipCode, email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ACCOUNT_REG = gql`
  mutation accountReg($token: String!) {
    accountReg(token: $token) {
      token
    }
  }
`;

export const FORGOTPW = gql`
  mutation forgotPass($email: String!) {
    forgotPass(email: $email) {
      email
    }
  }
`;

export const RESETPW = gql`
  mutation resetPass($token: String!, $password: String!) {
    resetPass(token: $token, password: $password) {
      token
    }
  }
`;

export const ADD_SAVED_EVENT = gql`
  mutation addEvent($userId: ID, $eventId: String! $eventName: String!, $venue: String!, $city: String!, $stateCode: String!, $eventTime: String!, $eventDate: String!, $eventImage: String!, $queryLink: String, $healthCheck: Boolean) {
    addEvent(userId: $userId, eventId: $eventId eventName: $eventName, venue: $venue, city: $city, stateCode: $stateCode, eventTime: $eventTime, eventDate: $eventDate, eventImage: $eventImage, queryLink: $queryLink, healthCheck: $healthCheck) {
      userId
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