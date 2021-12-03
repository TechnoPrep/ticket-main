import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Results = ({
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
            <Card sx={{ display: 'flex' }} className='results-card'>
              <CardMedia
                component="img"
                sx={{ width: 300, height: 200 }}
                image={event.img.url}
                alt={event.name}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h4">
                    {event.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {event.venue}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {event.city}, {event.stateCode}
                  </Typography>
                  <Typography className='result-date' component="div" variant="h5">
                    {event.date}
                  </Typography>
                  <Typography variant="h5" color="text.secondary" component="div">
                    {event.time}
                  </Typography>
                </CardContent>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column'}}>
              {event.healthCheck ? (
                      <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" className='health-check'>
                          <LocalHospitalIcon/> Health care check required
                        </Typography>
                      </CardContent>
                      ) 
                      :
                      (
                      <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" className='health-check'>
                        No Health care check required
                        </Typography>
                      </CardContent>
                      )
                      
                    }
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Link to={`/tickets/`}>Find Tickets</Link> 
                </CardContent>
              </Box>
                {/* <div key={event.id} className="card mb-3">
                  <h4 className="card-header bg-primary text-light p-2 m-0">
                    {event.name}
                  </h4>
                  <Link to={`/tickets/`}>Find Tickets</Link> 
                  <img src={event.img.url} alt={event.name}/>
                  <div className="card-body bg-light p-2">
                    <p>Location: {event.venue}</p>
                    <p>Event Date: {event.date} @ {event.time}</p>
                    {event.healthCheck ? (
                      <p>Health Check Required</p>
                      ) 
                      :
                      (
                        <p>No Health Check Required</p>
                      )
                    }
                  </div>
                </div> */}
            </Card>
         )
        ))}
    </div>
  );
};

export default Results;