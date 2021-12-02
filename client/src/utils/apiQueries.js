export const fetchEvents = async (apitokens) => {
  const data = await fetch("https://api.stubhub.com/sellers/search/events/v3", {
    method: "GET",
    mode: 'cors',
    headers: {
      "Authorization": `Bearer ${apitokens.stubhub}`,
      "Accept": "application/json",
      "Access-Control-Allow-Origin":"*",
      "Access-Control-Allow-Credential": "true"
    }
  })
  const json = await data.json()

  const { events } = json

  return events
}

export const fetchVenues = async (apitokens, lat, lon, radius) => {

  console.log(apitokens.stubhub);

  //https://api.stubhub.com/partners/search/venues/v3/?point=${lat}%2C${lon}&radius=${radius}&unit=mi&rows=500&sort=eventCount%20desc&fieldList=id%2Cname

  const data = await fetch("https://api.stubhub.com/partners/search/venues/v3", {
    method: "GET",
    mode: 'cors',
    headers: {
      "Authorization": `Bearer ${apitokens.stubhub}`,
      "Accept": "application/json",
      "Access-Control-Allow-Origin":"*",
      "Access-Control-Allow-Credential": "true"
    }
  })

  console.log(data);

  const json = await data.json()

  console.log(json);

  // const queryVenue = await json.map((venue) => (
  //   venue.eventCount > 0
  // ));

  // console.log(queryVenue);

  // return json
}

export const fetchLocation = async (apitokens, zipCode) => {
  const data = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=${apitokens.googleapi}`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
    }
  })
  const json = await data.json()

  const { geometry } = json

  return geometry
}

export default { fetchEvents, fetchLocation, fetchVenues }