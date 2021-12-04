const jwt = require('jsonwebtoken');
const decode = require('jwt-decode');

const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../.env')})

const secret = process.env.AUTH_SECRET
const expiration = process.env.AUTH_EXP

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ email, firstName, _id }, exp = expiration) {
    const payload = { email, firstName, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: exp });
  },

  isTokenExpired: function (token) {
    // Decode the token to get its expiration time that was set by the server
    const decoded = decode(token);
    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    if (decoded.exp < Date.now() / 1000) {
      return true;
    }
    // If token hasn't passed its expiration time, return `false`
    return false;
  }
};
