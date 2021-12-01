const { AuthenticationError } = require("apollo-server-express");
const { User, SavedEvent, EventPref } = require("../models");
const { signToken } = require("../utils/auth");
const  Mailer = require("../mailer/sendEmail");
const { jwt, JsonWebTokenError } = require("jsonwebtoken");
const { _ }  =require('lodash');

const decode = require('jwt-decode');
const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../.env')})
const api_keytm = process.env.API_KEY1;

const api_keysg = process.env.API_KEY2;
const resolvers = {
  Query: {
    // Get User Saved Events
    user: async (parent, { email }) => {
      return User.findOne({ email }).populate('savedEvents');
    },
    me: async (parent, args, context) => {
      if (context.user) {

        return User.findOne({ email: context.user.email }).populate("savedEvents");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    savedEvents: async (parent, {userId}) => {

      return SavedEvent.find({userId: userId}).sort({ createdAt: -1 });
    },
    savedEvent: async (parent, { savedEventId }) => {
      return SavedEvent.findOne({ _id: savedEventId });
    },
  },

  Mutation: {
    // Create User Account
    addUser: async (parent, args) => {

      const email = args.email

      const existing = await User.findOne({ email })

      if(existing){
        throw new AuthenticationError("An account already exists with this Email. Please reset your password or try another email!");
      }
      
      const user = await User.create(
        { ...args }
      );

      const token = signToken(user, '1d')

      const url = `http://localhost:3000/confirmation/${token}`;
      
      Mailer("confirm", args.email, url, args.firstName)

      return { token, user };
    },

    // Set emailConfied equal to true, completed during email registration
    accountReg: async (parent, { token }) =>{

      try{

        const decoded = decode(token)

        const id = decoded.data._id

        const user = await User.findOneAndUpdate({_id: id}, {emailConfirmed: true})
 
        // return (token, user)
        return (token)

      } catch (err){
        console.log(err);
      }
    },

    // Set prefsSet to true after initial login survey
    eventPrefSetup: async (parent, { email }, context) =>{
      if (context.user) {
        const user = await User.findOne({ email });

        if(!user){
          throw new AuthenticationError("No user found with this email address");
        }

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { prefsSet: true }
        );

        return user;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // Auth Process for User Account
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      if(!user.emailConfirmed){
        throw new AuthenticationError("Please confirm your email to login");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    // Add Saved Event
    addEvent: async (
      parent,
      { eventName, venue, zipCode, lat, lon, eventDate, eventImage },
      context
    ) => {
      if (context.user) {
        const event = await SavedEvent.create({
          eventName,
          venue,
          zipCode,
          lat,
          lon,
          eventDate,
          eventImage,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedEvents: event._id } }
        );

        return event;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    
    // Remove Saved Event
    removeEvent: async (parent, { savedEventId }, context) => {
      if (context.user) {
        const event = await SavedEvent.findOneAndDelete({
          _id: savedEventId
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedEvents: event._id } }
        );

        return event;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  
    
  },
  // apiNormalized: () => ({}),
  searchApi: async (_, { query }) => {
    // check if in cache
    if (cache[query]) {
      // cache hit
      // returning data from the cache
      return cache[query];
    }

    const ticketmaster = fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${query}&apikey=${api_keytm}`);
    const seatGeek = fetch(`https://api.seatgeek.com/2/events?performers.slug=${query}?client_id=${api_keysg}`);

    const [ticketmasterData, seatGeekData] = await Promise.all([ticketmaster, seatGeek]);

    const normalizedticketmasterData = ticketmasterData.recipes.map(x => ({
     //discover what ticketmaster is spitting out for perfomer venue etc
      performer: x.performer,
      venue: x.venue
    }));

    const normalizedseatGeekData = seatGeekData.recipes.map(x => ({
      //discover what seat geek is spitting out for perfomer venue etc
      performer: x.performer,
      venue: x.venue
    }));

    const totallyNormalized = [...normalizedticketmasterData, ...normalizedseatGeekData];

  
    cache[query] = totallyNormalized;
    dateStore[query] = new Date();

    return totallyNormalized;
  }
};

module.exports = resolvers;
