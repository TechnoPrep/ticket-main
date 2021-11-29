const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    phone: String
    zipCode: String
    email: String
    password: String
    emailConfirmed: Boolean
    prefsSet: Boolean
    savedEvents: [SavedEvent]!
    eventPrefs: [EventPref]!
  }

  type SavedEvent {
    _id: ID
    eventName: String
    venue: String
    zipCode: Int
    lat: Float
    lon: Int
    eventDate: String
    eventImage: String
  }

  type EventPref {
    _id: ID
    category: String
    subCategory: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type RegAuth {
    token: ID
  }

  type Query {
    user(email: String!): User
    savedEvents(email: String): [SavedEvent]
    savedEvent(savedEventId: ID!): SavedEvent
    me: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, phone: String!, zipCode: String!, email: String!, password: String!): Auth!
    accountReg(token: String!) : RegAuth
    eventPrefSetup(email: String!): User
    login(email: String!, password: String!): Auth
    addEvent(eventName: String!, venue: String!, zipCode: Int!, lat: Float!, lon: Float!, eventDate: String!, eventImage: String!): SavedEvent
    removeEvent(savedEventId: ID!): SavedEvent
  }
`;

module.exports = typeDefs;
