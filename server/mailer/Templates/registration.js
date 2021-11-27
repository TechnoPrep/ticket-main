const registration = (url, email) => {

  return `
  <a href="${url}">${url}</a>
  <br>
  <p> This email verification is for 
    <a href="mailto:${email}">
      ${email}
    </a>
      If this is not correct, please ignore this email.
  </p>
  `
}

module.exports =  registration;