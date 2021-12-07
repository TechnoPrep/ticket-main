const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../../.env')})

export const dateRange =(timestamp) => {

  //create the UTC string into   
  const d = new Date(timestamp)
  // Check if app is in dev or prod, as Prod is hosted in UTC time zone so no need to add an additional day
  const dd = process.env.REACT_APP_TIME_ENV === 'dev' ? new Date(d.getTime() + 86400000) : d
  const curY = dd.getFullYear();
  const curM = ('0' + (dd.getMonth() + 1)).slice(-2)  // Months are zero based. Add leading 0.
  const curD = ('0' + dd.getDate()).slice(-2)

  //Format date into unixTime so that I can add a day in miliseconds
  const nextDay = new Date(dd.getTime() + 86400000) 
  const nextY = nextDay.getFullYear();
  const nextM = ('0' + (nextDay.getMonth() + 1)).slice(-2)
  const nextD = ('0' + nextDay.getDate()).slice(-2)

  let dateRange = {
    date: `${curY}-${curM}-${curD}`,
    nextDate: `${nextY}-${nextM}-${nextD}`
  }

  return dateRange

}

export const formatDate = (date) => {

  const d = new Date(date)

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  const day = days[d.getDay()]

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const month = months[d.getMonth()]

  let dateArr = date.split('-')

  const date_suffix = (d) => {
    var day10 = ~~(d % 100 / 10);
    var day1 = d % 10;
    if (day10 === 1) {
        return "th";
    } else if (day1 === 1) {
        return "st";
    } else if (day1 === 2) {
        return "nd";
    } else if (day1 === 3) {
        return "rd";
    } else {
        return "th";
    }
  }

  let year = d.getFullYear()
   

  return `${day} ${month} ${dateArr[2]}${date_suffix(dateArr[2])}, ${year}`
  

}

export const formatTime = (time) => {

    if(time === 'Event Time Not Listed'){
        return 
    }

    let timeArr = time.split(':')

    let hh = timeArr[0]
    let h = hh
    let ampm = 'AM'

    if (hh > 12) {
        h = hh - 12;
        ampm = 'PM';
    } else if (hh === 12) {
        h = 12;
        ampm = 'PM';
    } else if (hh == 0) {
        h = 12;
    }

    return `${h}:${timeArr[1]} ${ampm}`

}

export default { dateRange, formatDate, formatTime}