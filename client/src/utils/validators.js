/**
 * Validates the Email matches proper email formatting with RegEx
 * @param {STRING} email 
 * @returns {BOOLEAN}
 */
 export const Email = async (email) => {

  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(!email.match(mailFormat)) {
    alert('Please Enter a valid Email!')
    return false;
  } else {
    return true;
  }

}

/**
 * Validates the Password field and length and Confirm Password fields match
 * @param {STRING} pass 
 * @param {STRING} confirmPass 
 * @returns {BOOLEAN}
 */
 export const Pass = async (pass, confirmPass) => {

  if(pass === ''){
    alert('Please enter a password')
    return false;
  } else if(pass.length < 8){
    alert('Password must be 8 or more characters')

    return false;
  } else if(pass !== confirmPass) {
    alert('Passwords Do Not Match')
    return false;

  } else {
    return true;
  }

}

export default { Email, Pass}