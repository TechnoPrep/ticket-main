import jwt from 'jsonwebtoken';

import { stringCleanup } from './replace'

export const fetchEvents = async (apitokens, searchTerm, lat = 0, lon = 0, radius = 0 ) => {

  const locData = lat === 0 && lon === 0 ? '' : `latlong=${lat}%2C${lon}&radius=${radius}&`

  console.log(`https://app.ticketmaster.com/discovery/v2/events.json?${locData}keyword=${searchTerm}&countryCode=US&size=100&sort=date,asc&apikey=${apitokens.ticketmaster}`);

  const data = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${locData}keyword=${searchTerm}&countryCode=US&size=100&sort=date,asc&apikey=${apitokens.ticketmaster}`, {
    method: "GET",
    headers: {
    }
  })

  const json = await data.json()

  if('_embedded' in json && 'events' in json._embedded){
    const results = await json._embedded.events.map((event) => ({
      id: event.id,
      date: event.dates.start.localDate,
      dateUTC: 'dateTime' in event.dates.start ? event.dates.start.dateTime : event.dates.start.localDate + 'T00:00:00Z',
      time: 'localTime' in event.dates.start ? event.dates.start.localTime : false,
      name: event.classifications[0].segment.name === 'Sports' ? event.name : ('attractions' in event._embedded ? event._embedded.attractions[0].name : event.name),
      performer: 'attractions' in event._embedded ? event._embedded.attractions[0].name : event.name,
      city: event._embedded.venues[0].city.name,
      stateCode: event._embedded.venues[0].state.stateCode,
      img: event.images.find((e) => {
        if(e.ratio === "16_9" && e.width === 640){
          return e
        }
      }),
      banner: event.images.find((e) => {
        if(e.ratio === "16_9" && e.width === 2048){
          return e
        }
      }),
      venueId: event._embedded.venues[0].id,
      venue: event._embedded.venues[0].name,
      healthCheck: 'ticketing' in event,
      queryLink: jwt.sign({
        performer: 'attractions' in event._embedded ? event._embedded.attractions[0].name : event.name, 
        date: event.dates.start.localDate, 
        dateUTC: 'dateTime' in event.dates.start ? event.dates.start.dateTime : event.dates.start.localDate + 'T00:00:00Z',
        venue: event._embedded.venues[0].name,
        tmVenueId: event._embedded.venues[0].id
      }, process.env.REACT_APP_JWT_SECRET)
    }))
 
  //Remove Duplicates, TicketMasters API returns 1 entry for different ticket types.
  const dedup = results.filter((v,i,a)=>a.findIndex(t=>(t.name===v.name && t.date === v.date))===i)

  console.log(dedup);

  return dedup

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


export const fetchPricing = async (apitokens, performer, date, dateUTC, venue, tmVenueId) => {

  const stubHub = fetch(`https://api.stubHub.com/sellers/search/events/v3?name=${performer}&date=${date}&venue=${venue}&parking=false`, {
    method: "GET",
    mode: 'cors',
    headers: {
      "Authorization": `Bearer ${apitokens.stubhub}`,
      "Accept": "application/json",
      'Access-Control-Allow-Origin':'*',
      "Access-Control-Allow-Credential": "true"
     }
  });

  const ticketmMaster = fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${performer}&venueId=${tmVenueId}&startDateTime=${dateUTC}&size=25&apikey=${apitokens.ticketmaster}`,{
    method: "GET",
    headers: {

    }
  })
  
  const slug = stringCleanup(performer)

  console.log(`https://api.seatgeek.com/2/events?performers.slug=${slug}&datetime_utc=${dateUTC}&q=${venue}&client_id=${apitokens.seatgeek}`);

  const seatGeek = fetch(`https://api.seatgeek.com/2/events?performers.slug=${slug}&datetime_utc=${dateUTC}&q=${venue}&client_id=${apitokens.seatgeek}`);

  const [stubHubData, seatGeekData, ticketMaster] = await Promise.all([stubHub, seatGeek, ticketmMaster]);
  const [shJson, sgJson, tmJson] = await Promise.all([stubHubData.json(), seatGeekData.json(), ticketMaster.json()])
  
  const normalizedStubHubData = shJson.events.map(event => ({
   //discover what stubhub is spitting out for perfomer venue etc
   id: event.id,
   name: event.name,
   city: event.venue.city,
   stateCode: event.venue.state,
   url: `https://www.stubhub.com/${event.webURI}`,
   minPrice: 'minListPrice' in event.ticketInfo ? event.ticketInfo.minListPrice : false,
   maxPrice: 'maxListPrice' in event.ticketInfo ? event.ticketInfo.maxListPrice : false,
   vendor: 'StubHub',
  }));

  const normalizedseatGeekData = sgJson.events.map(event => ({
    //discover what seat geek is spitting out for perfomer venue etc
    id: event.id,
    name: event.performers[0].name,
    city: event.venue.city,
    stateCode: event.venue.state,
    url: event.url,
    minPrice: 'lowest_price' in event.stats && event.stats.lowest_price !== null ? event.stats.lowest_price : false,
    maxPrice: 'median_price' in event.stats && event.stats.median_price !== null ? event.stats.median_price : false,
    vendor: 'SeatGeek'
  }));

  const normalizedTicketmMaster = tmJson._embedded.events.map(event => ({
    //discover what ticketmaster is spitting out for perfomer venue etc
    id: event.id,
    name: event.name,
    city: event._embedded.venues[0].city.name,
    stateCode: event._embedded.venues[0].state.stateCode,
    url: event.url,
    minPrice: 'priceRanges' in event ? event.priceRanges[0].min : false,
    maxPrice: 'priceRanges' in event ? event.priceRanges[0].max : false,
    vendor: 'Ticket Master'
   }));

  const totallyNormalized = [...normalizedStubHubData, ...normalizedseatGeekData, ...normalizedTicketmMaster];

  return totallyNormalized;
}

export default { fetchEvents, fetchLocation, fetchPricing }