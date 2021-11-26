const nodemailer = require('nodemailer');
const EmailTemplate = require("../Templates/EmailTemplate")
const Registration = require("../Templates/registration")
require('dotenv').config({path: path.join(__dirname, '../.env')})


/**
 * This function takes in the Object created in the exportRemindr.js
 * Iterates of over the Array of Objects or single object and sends mail appropriately.
 * @param {OBJECT} emailObject 
 * @returns Sending Mail to recipents in Object
 */
const Mailer = async (event, emailObject) => {


  // Checks if any Data was exported, if array is empty, end
  if(emailObject[0] === undefined){
    return;

  } else {  

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

    switch (event) {
      case "verify":
        let type = "Account Verification Email"
        break;
      case "reset":
        let type = "Password Reset Email"
        break;
      default:
        break;
    }
    
    //Iterate over the Object to construct the email.
    for (let i = 0; i < emailObject.length; i++) {

    const token = emailObject[i].login.token;
    const toEmail = emailObject[i].login.user.email;
    const firstName = emailObject[i].firstName;

    const messageHTML = EmailTemplate(firstName,messageContent)

    let info = await transporter.sendMail({
      from: `"Voltron App" <remindr.notification@gmail.com>`, // sender address
      to: `${toEmail}`, // list of receivers
      subject: `${type}`, // Subject line
      text: "Subject Text", // plain text body
      html: `${messageHTML}`
    });
    }
  }

  return;

}

export default Mailer;
