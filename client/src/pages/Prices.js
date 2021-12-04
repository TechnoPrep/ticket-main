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


const Prices = ({apitokens}) => {

  const {token} = useParams();
   
  const decoded = decode(token)
  
  let {performer, date, dateUTC, venue, tmVenueId} = decoded;


  const [eventList, setEventList] = useState([]);


  useEffect(() => {

    const fetchResults = async () => {
        const events = await fetchPricing(apitokens, performer, date, dateUTC, venue, tmVenueId)
        setEventList(events)
        console.log(events);
    }

    fetchResults();
}, [])

  return (
    <div className='home'>
      <div className='search-input'>
        </div>
        <div className="flex-row justify-center mb-3">
           {eventList &&
             eventList.map((event) => (
               (
                 <Card key={event.name} sx={{ display: 'flex' }} className='results-card'>
              <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                     <CardContent sx={{ flex: '1 0 auto' }}>
                       <Typography component="div" variant="h4">
                         {event.vendor}
                         {}
                       </Typography>
                     </CardContent>
                   </Box>
                   <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                     <CardContent sx={{ flex: '1 0 auto' }}>
                       <Typography component="div" variant="h4">
                         ${event.minPrice}
                         {}
                       </Typography>
                     </CardContent>
                   </Box>
                   <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{ flex: '1 0 auto' }}>

                <Button href={event.url} target="_blank" variant="contained" size='small'><span className='find-ticket-text'>Buy Tickets</span></Button>
                </CardContent>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <IconButton aria-label="favorite" size='large'>
                </IconButton>

                </CardContent>
              </Box>
                 
                   
                 </Card>
              )
             ))} 
      </div>
    </div>
  );
};

export default Prices;
