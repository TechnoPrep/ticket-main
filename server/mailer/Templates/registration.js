const registration = (token, email) => {

  return `
  <a href="http://locatlhost:3000/signup/token/${token}">http://locatlhost:3000/signup/token/${token}</a>
  <br>
  <p> This email verification is for 
    <a href="mailto:${email}">
      ${email}
    </a>
      If this is not correct, please ignore this email.
  </p>
  `
}

export default registration;