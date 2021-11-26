const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    phone: Int
    zipCode: Int
    email: String
    password: String
    emailConfirmed: Boolean
    prefsSet: Boolean
    savedEvents: [SavedEvent]!
    eventPrefs: [EventPref]!
  }

  type savedEvent {
    _id: ID
    eventName: String
    venue: String
    zipCode: Int
    lat: Float
    lon: Int
    eventDate: String
    eventImage: String
  }

  type eventPrefs {
    _id: ID
    category: String
    subCategory: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(email: String!): User
    savedEvents(email: String): [SavedEvent]
    savedEvent(savedEventId: ID!): SavedEvent
    me: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, phone: Int!, zipCode: Int!, email: String!, password: String!): Auth
    accountReg(email: String!, emailConfirmed: Boolean!): User
    eventPrefSetup(email: String!): User
    login(email: String!, password: String!): Auth
    addEvent(eventName: String!, venue: String!, zipCode: Int!, lat: Float!, lon: Float!, eventDate: String!, eventImage: String!): savedEvent
    removeEvent(savedEventId: ID!): savedEvent
  }
`;

module.exports = typeDefs;
