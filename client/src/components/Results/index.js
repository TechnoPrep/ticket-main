import * as React from 'react';

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import HealthCheckEdit from '../../img/health-check.svg'
import NoHealthCheck from '../../img/no-health-check.svg'
import jwtDecode from 'jwt-decode';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import { formatDate, formatTime } from '../../utils/timestampConverter'
import { getThemeProps } from '@mui/system';
import { ADD_SAVED_EVENT } from '../../utils/mutations'
import { useMutation } from '@apollo/client'
import { savedEvents } from '../../utils/queries'

const Results = ({
  events,
  title,
  showTitle = true,
}) => {

//   const [searchedEvent, setSearchedEvent] = useState([]);
//   // create state for holding our search field data
//   const [searchInput, setSearchInput] = useState('');

//   // create state to hold saved bookId values
//   const [savedEvents, setSavedEvents] = useState(getSavedEvents());

// const [savedEvent] = useMutation(ADD_SAVED_EVENT);

  if (events[0] === 'No Events were found') {
    return <h3> No events were found, please check another Performer or Change your search location </h3>;
  }
  return (
    <div>
    {showTitle && <h3>{title}</h3>}
     {events &&
        events.map((event) => (
          (
            <Card key={event.id} sx={{ display: 'flex' }} className='results-card'>
              <CardMedia
                component="img"
                sx={{ width: 300, height: 'fill' }}
                image={event.img.url}
                alt={event.name}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h4" sx={{ width: 300, height: 'fill' }}>
                    {event.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {event.venue}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {event.city}, {event.stateCode}
                  </Typography>
                  <Typography className='result-date' component="div" variant="h5">
                    {formatDate(event.date)}
                  </Typography>
                  <Typography variant="h5" color="text.secondary" component="div">
                    {formatTime(event.time)}
                  </Typography>
                </CardContent>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column'}}>
              {event.healthCheck ? (
                      <CardMedia
                      component="img"
                      sx={{ width: 250, height: 200 }}
                      image={HealthCheckEdit}
                      alt={event.name}
                    />
                      ) 
                      :
                      (
                        <CardMedia
                        component="img"
                        sx={{ width: 250, height: 200 }}
                        image={NoHealthCheck}
                        alt={event.name}
                      />
                      )
                    }
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{ flex: '1 0 auto' }}>

                <Button variant="contained" size='small'><Link to={`/prices/${event.queryLink}`}><span className='find-ticket-text'>Find Tickets</span></Link></Button>
                </CardContent>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <IconButton aria-label="favorite" size='large'>
                  <FavoriteBorderIcon />
                </IconButton>

                </CardContent>
              </Box>
            </Card>
         )
        ))}
    </div>
  );
};

export default Results;