const { AuthenticationError } = require("apollo-server-express");
const { User, SavedEvent } = require("../models");
const { signToken, isTokenExpired } = require("../utils/auth");
const  Mailer = require("../mailer/sendEmail");
const { jwt, JsonWebTokenError } = require("jsonwebtoken");
const { _ }  =require('lodash');

const decode = require('jwt-decode');
const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../.env')})

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

      console.log(args);

      const email = args.email

      const existing = await User.findOne({ email })

      console.log(existing);

      if(existing){
        console.log('I exist already');
        throw new AuthenticationError("An account already exists with this Email. Please reset your password or try another email!");
      }

      console.log(existing);
      
      const user = await User.create(
        { ...args }
      );

      console.log(user);

      const token = signToken(user, process.env.REG_RESET_EXP)

      const url = `${process.env.SITE_URL}/confirmation/${token}`;
      
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
    forgotPass: async (parent, { email }) => {

      const user = await User.findOne({ email: email })

      // No user was found, return null
      if(!user){ return }

      const token = signToken(user, process.env.REG_RESET_EXP)

      console.log(token);

      const url = `${process.env.SITE_URL}/reset/${token}`;
      
      Mailer("reset", user.email, url, user.firstName)

      return user;
    },
    resetPass: async (parent, { token, password }) =>{

      console.log('Function is being ran');

      try{

        const expiredToken = isTokenExpired(token)

        if(expiredToken) {
          throw new AuthenticationError('Your Password reset token has expired, please request a new token via the "Reset Password" link!')
        }

        const decoded = decode(token)

        const id = decoded.data._id

        const user = await User.findById(id, function(err, u){
          if (err) {
            throw new AuthenticationError('There as an issue with updating your password, please try again later or request another reset link')
          };
          u.password = password;
          u.save()
          
        })

        // return (token, user)
        return {token}

      } catch (err){
        console.log(err);
      }
    },
    // Auth Process for User Account
    login: async (parent, { email, password, firstName }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      if(!user.emailConfirmed){
        
        const token = signToken(user, process.env.REG_RESET_EXP)

        const url = `${process.env.SITE_URL}/confirmation/${token}`;
        
        Mailer("confirm", user.email, url, user.firstName)

        throw new AuthenticationError("Please confirm your email to login, another confirmation code has been sent!");
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
      { eventName, eventId, venue, city, stateCode, eventDate, eventTime, eventImage, queryLink, healthCheck },
      context
    ) => {
      if (context.user) {

        const userId = context.user._id

        const existing = await SavedEvent({
          eventId: eventId,
          userId: userId
        })

        if(!existing){

          const event = await SavedEvent.create({
            userId,
            eventId,
            eventName,
            venue,
            city,
            stateCode,
            eventDate,
            eventTime,
            eventImage,
            queryLink,
            healthCheck
          });

          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { savedEvents: event._id } }
          );

          return event;
        }

        throw new AuthenticationError("Event Is already Saved to user");

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
};

module.exports = resolvers;
