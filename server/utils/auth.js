const jwt = require('jsonwebtoken');
require('dotenv').config({path: "../.env"});

const secret = process.env.AUTH_SECRET || "ueCdII03DYmmRl7dC78R";
const expiration = process.env.AUTH_EXP || "2h";

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
  signToken: function ({ email, lastName, _id }) {
    const payload = { email, lastName, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
