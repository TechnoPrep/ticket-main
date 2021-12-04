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
  }

  type SavedEvent {
    _id: ID
    eventName: String
    venue: String
    zipCode: Int
    lat: String
    lon: String
    eventDate: String
    eventImage: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type RegAuth {
    token: ID
  }

  type Query {
    me: User
    user(email: String!): User
    savedEvents(userId: ID!): [SavedEvent]
    savedEvent(savedEventId: ID!): SavedEvent
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, phone: String!, zipCode: String!, email: String!, password: String!): Auth!
    accountReg(token: String!) : RegAuth
    forgotPass(email: String!): User
    resetPass(token: String!, password: String!) : RegAuth
    eventPrefSetup(email: String!): User
    login(email: String!, password: String!): Auth
    addEvent(eventName: String!, venue: String!, zipCode: Int!, lat: Float!, lon: Float!, eventDate: String!, eventImage: String!): SavedEvent
    removeEvent(savedEventId: ID!): SavedEvent
  }
`;

module.exports = typeDefs;
