const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    zipCode: String
    email: String
    password: String
    emailConfirmed: Boolean
    savedEvents: [SavedEvent]!
  }

  type SavedEvent {
    _id: ID
    userId: ID!
    eventId: String!
    eventName: String!
    venue: String!
    city: String!
    stateCode: String!
    eventDate: String!
    eventTime: String!
    eventImage: String!
    queryLink: String!
    healthCheck: Boolean!
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
    addUser(firstName: String!, lastName: String!, zipCode: String!, email: String!, password: String!): Auth!
    accountReg(token: String!) : RegAuth
    forgotPass(email: String!): User
    resetPass(token: String!, password: String!) : RegAuth
    login(email: String!, password: String!): Auth
    addEvent(eventId: String! eventName: String!, venue: String!, city: String!, stateCode: String!, eventDate: String!, eventTime: String!, eventImage: String!, queryLink: String!, healthCheck: Boolean!): SavedEvent
    removeEvent(savedEventId: ID!): SavedEvent
  }
`;

module.exports = typeDefs;
