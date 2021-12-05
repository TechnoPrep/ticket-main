import * as React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

import HealthCheckEdit from '../../img/health-check.svg'
import NoHealthCheck from '../../img/no-health-check.svg'

import { formatDate, formatTime } from '../../utils/timestampConverter'


const Results = ({
  savedEvents,
  events,
  title,
  showTitle = true,
}) => {
  if (events[0] === 'No Events were found') {
    return <h3> No events were found, please check another Performer or Change your search location </h3>;
  }

  return (
    <div>
    {showTitle && <h3>{title}</h3>}
     {events &&
        events.map((event) => (
          (
            <Card key={event.eventId} sx={{ display: 'flex' }} className='results-card'>
              <CardMedia
                component="img"
                sx={{ width: 300, height: 'fill' }}
                // checks if eventImage is a string or an object, since using the same card on UserProfile and Searching
                image={ typeof event.eventImage === 'string' ? event.eventImage : event.eventImage.url }
                alt={event.eventName}
              />
              {console.log(event)}
              <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h4" sx={{ width: 300, height: 'fill' }}>
                    {event.eventName}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {event.venue}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {event.city}, {event.stateCode}
                  </Typography>
                  <Typography className='result-date' component="div" variant="h5">
                    {formatDate(event.eventDate)}
                  </Typography>
                  <Typography variant="h5" color="text.secondary" component="div">
                    {formatTime(event.eventTime)}
                  </Typography>
                </CardContent>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column'}}>
              {event.healthCheck ? (
                      <CardMedia
                      component="img"
                      sx={{ width: 250, height: 200 }}
                      image={HealthCheckEdit}
                      alt={event.eventName}
                    />
                      ) 
                      :
                      (
                        <CardMedia
                        component="img"
                        sx={{ width: 250, height: 200 }}
                        image={NoHealthCheck}
                        alt={event.eventName}
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
                { savedEvents.includes(event.eventId) ? <FavoriteIcon style={{ color: "red" }}/> : <FavoriteBorderIcon  /> }
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