const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../../.env')})

const reset = (url, email) => {

  return `
  <a href="${url}">Reset Password</a>
  <br>
  <p> This is a password reset email for 
    <a href="mailto:${email}">${email}</a>
      If this password reset was not initiated by you, please visis 
      <a href="${process.env.SITE_URL}">
      ${process.env.SITE_URL}</a> and reset your password. 
  </p>
  <p> This link is valid for 24 hours forom the time issued</p>
  `
}

module.exports = reset;