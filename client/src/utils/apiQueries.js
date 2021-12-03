export const fetchEvents = async (apitokens, searchTerm, lat = 0, lon = 0, radius = 0 ) => {

  const criteria = lat === 0 && lon === 0 ? '' : `latlong=${lat}%2C${lon}&radius=${radius}&`

  const data = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${criteria}keyword=${searchTerm}&size=100&sort=date,asc&apikey=${apitokens.ticketmaster}`, {
    method: "GET",
    headers: {
    }
  })

  const json = await data.json()

  const {_embedded } = await json

  if(_embedded !== undefined){
  const results = await _embedded.events.map((event) => ({
    id: event.id,
    date: event.dates.start.localDate,
    time: event.dates.start.localTime,
    name: event.classifications[0].segment.name === 'Sports' ? event.name : event._embedded.attractions[0].name,
    img: event.images.find((e) => {
      if(e.ratio === "16_9" && e.width === 640){
        return e
      }
    }),
    venue: event._embedded.venues[0].name,
    healthCheck: 'ticketing' in event,
  }))
 
  //Remove Duplicates, TicketMasters API returns 1 entry for different ticket types.
  const trimResults = results.filter((v,i,a)=>a.findIndex(t=>(t.name===v.name && t.date === v.date))===i)

  return trimResults

 } else {
  //  If nothing is found, return a single element array to check on the Results comp.
   return ['No Events were found']
 }

}

export const fetchLocation = async (apitokens, zipCode) => {
  const data = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=${apitokens.googleapi}`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
    }
  })
  const json = await data.json()

  const { results } = json

  return results[0]
}

export default { fetchEvents, fetchLocation }