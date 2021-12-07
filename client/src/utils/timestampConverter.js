// export const nextDate =(timestamp) => {
//     var d = new Date(timestamp * 1), // Convert the passed timestamp to milliseconds
//         yyyy = d.getFullYear(),
//         mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
//         dd = ('0' + d.getDate()).slice(-2)      // Add leading 0.

//     // ie: 03-24-2022, 3:00 PM
//     time =  mm + '-' + dd + '-' +  yyyy + ', ' + h + ':' + min + ' ' + ampm;
//     return time;
// }

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

export default {formatDate, formatTime}