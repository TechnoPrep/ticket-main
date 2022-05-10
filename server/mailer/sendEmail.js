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
      host: "mail.privateemail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NAMECHEAP_MAIL_USER,
        pass: process.env.NAMECHEAP_MAIL_PASS
      },
      dkim: {
        domainName: "total-ticket.com",
        keySelector: "default",
        privateKey: process.env.NAMECHEAP_DKIM_PRVT_KEY
      }
    });

    let type = ""

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

    // Determine which message template to use
    const messageHTML = (event === 'confirm') ? 
      EmailTemplate(firstName, Registration(url, email)) 
        :
      EmailTemplate(firstName, Reset(url, email))

      // Pass all the data from above to the mailer
    await transporter.sendMail({
      //from: `"Total Ticket" <notifications@total-ticket.com>`, // sender address
      from: `Total Ticket ${process.env.NAMECHEAP_MAIL_USER}`,
      to: `${email}`, // list of receivers
      subject: `${type}`, // Subject line
      text: `${url}`, // plain text body
      html: `${messageHTML}`
    });

  return;
}

module.exports = Mailer;
