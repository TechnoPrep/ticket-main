/**
 * Validates the Email matches proper email formatting with RegEx
 * @param {STRING} email 
 * @returns {BOOLEAN}
 */
 export const isEmail = async (email) => {

  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(!email.match(mailFormat)) {
    return false;
  } else {
    return true;
  }

}

/**
 * Validates the Password field and length and Confirm Password fields match
 * @param {STRING} zipCode 
 * @returns {BOOLEAN}
 */
export const isZipCode = async (zipCode) => {

  let zipCodeFormat = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

  if(!zipCode.match(zipCodeFormat)) {
    return false;
  } else {
    return true;
  }

}

/**
 * Validates the Password field and length and Confirm Password fields match
 * @param {STRING} value 
 * @returns {BOOLEAN}
 */
export const isNotEmpty = async (value) => {

  if(value === '') {
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
 export const passMatch = async (pass, confirmPass) => {

  if(pass !== confirmPass) {
    return false;
  } else {
    return true;
  }
}


/**
 * Validates the Password field and length and Confirm Password fields match
 * @param {STRING} pass 
 * @returns {BOOLEAN}
 */
export const passLen = async (pass) => {

  if(pass.length < 8){
    return false;
  } else {
    return true;
  }
}

export default { isEmail, isNotEmpty, isZipCode, passMatch, passLen }