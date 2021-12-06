import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { fetchPricing } from '../utils/apiQueries'
import decode from 'jwt-decode';
import { useParams } from 'react-router-dom';
// import { results } from '../utils/apiQueries'
import seatGeekLogo from '../img/seatgeek-logo.png';
import stubHubLogo from '../img/stubhub-logo.png';
import ticketmasterLogo from '../img/Ticketmaster-Logo.png'


const Prices = ({apitokens, heroImage}) => {

  const {token} = useParams();
   
  const decoded = decode(token)
  
  let {performer, eventDate, dateUTC, venue, tmVenueId, banner:{url}} = decoded;

  const [eventList, setEventList] = useState([]);


  useEffect(() => {

    const fetchResults = async () => {
        const events = await fetchPricing(apitokens, performer, eventDate, dateUTC, venue, tmVenueId)
        setEventList(events)
    }

    heroImage(url, performer)

    fetchResults();
}, [])

  return (
    <>
    <div className='home'>
        <div className="flex-row justify-center mb-3">
           {eventList &&
             eventList.map((event) => (
               (
                <Card key={event.id} sx={{ display: 'flex', flexDirection: 'column' }} className='price-card'>
                  <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <CardMedia
                        component="img"
                        sx={{ width: 350, height: 200 }}
                        image={ticketmasterLogo}
                        alt={event.eventName}
                      />
                    </CardContent>
                    <Typography variant="h5" color="text.secondary" component="div">
                     actual vendor: {event.vendor}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h4" className='price'>
                        ${event.minPrice}
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                    <CardContent sx={{ flex: '1 0 auto' }} className='buy-ticket-btn'>
                      <Button href={event.url} target="_blank" variant="contained" size='small'><span className='buy-ticket-text'>Buy Tickets</span></Button>
                    </CardContent>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <IconButton aria-label="favorite" size='large'></IconButton>
                    </CardContent>
                  </Box>
                </Card>
              )
             ))} 
      </div>
    </div>
    </>
  );
};

export default Prices;
