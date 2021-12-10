
// Format String to use in SeatGeek API Call
export const stringCleanup = (string) => {

  const removeSpecialChars = string.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')

  const spaceTrim = removeSpecialChars.replace(' ', '-').replace(/\s/g, '')

  const removeNonASCII = spaceTrim.replace('ì', 'i')

  return removeNonASCII.toLowerCase()

}

export default { stringCleanup }