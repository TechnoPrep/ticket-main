const nodemailer = require('nodemailer');
const EmailTemplate = require("./Templates/EmailTemplate")
const Registration = require("./Templates/registration")
const Reset = require("./Templates/reset")
const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../.env')})


/**
 * This function takes in the Object created in the exportRemindr.js
 * Iterates of over the Array of Objects or single object and sends mail appropriately.
 * @param {OBJECT} emailObject 
 * @returns Sending Mail to recipents in Object
 */
const Mailer = async (event, email, url, firstName) => {

    // create reusable transporter object using a Gmail Account setup with OAuth2
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
      },
    });

    let type = ''

    switch (event) {
      case "confirm":
        type = "Account Confirmation Email"
        break;
      case "reset":
        type = "Password Reset Email"
        break;
      default:
        break;
    }

    const messageHTML = (event === 'confirm') ? 
      EmailTemplate(firstName, Registration(url, email)) 
        :
      EmailTemplate(firstName, Reset(url, email))

    await transporter.sendMail({
      from: `"Totally Tickets" <remindr.notification@gmail.com>`, // sender address
      to: `${email}`, // list of receivers
      subject: `${type}`, // Subject line
      text: `${url}`, // plain text body
      html: `${messageHTML}`
    });

  return;
}

module.exports = Mailer;
