import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsGolfIcon from '@mui/icons-material/SportsGolf';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Golf from './Golf/Golf';
import MLB from './MLB/MLB';
import NBA from './NBA/NBA';
import NCAABB from './NCAABB/NCAABB';
import NCAAFB from './NCAAFB/NCAAFB';
import NFL from './NFL/NFL'
import NHL from './NHL/NHL'
import MLS from './MLS/MLS';
import Tennis from './Tennis/Tennis';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function DropdownSearch() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='dropdown'>
      <div className='sports-dropdown'>
            <Button
              id="sports-button"
              aria-controls="sports-menu"
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              // endIcon={<KeyboardArrowDownIcon />}
            >
              Sports
            </Button>
            <StyledMenu
              id="sports-menu"
              MenuListProps={{
                'aria-labelledby': 'sports-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem disableRipple>
                <SportsGolfIcon />
                <Golf />
                <KeyboardArrowRightIcon />
              </MenuItem>
              <MenuItem disableRipple>
                <SportsBaseballIcon />
                <MLB />
                <KeyboardArrowRightIcon />
              </MenuItem>
              <MenuItem disableRipple>
                <SportsSoccerIcon />
                <MLS />
                <KeyboardArrowRightIcon />
              </MenuItem>
              <MenuItem disableRipple>
                <SportsBasketballIcon />
                <NBA />
                <KeyboardArrowRightIcon />
              </MenuItem>
              <MenuItem disableRipple>
                <SportsBasketballIcon />
                <NCAABB />
                <KeyboardArrowRightIcon />
              </MenuItem>
              <MenuItem disableRipple>
                <SportsFootballIcon />
                <NCAAFB />
                <KeyboardArrowRightIcon />
              </MenuItem>
              <MenuItem disableRipple>
                <SportsFootballIcon />
                <NFL />
                <KeyboardArrowRightIcon />
              </MenuItem>
              <MenuItem disableRipple>
                <SportsHockeyIcon />
                <NHL />
                <KeyboardArrowRightIcon />
              </MenuItem>
              <MenuItem disableRipple>
                <SportsTennisIcon />
                <Tennis />
                <KeyboardArrowRightIcon />
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <SportsMmaIcon />
                <span className='dropdown-title'>Fighting</span>
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <SportsMotorsportsIcon />
                <span className='dropdown-title'>Motorsports</span>
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <SportsScoreIcon />
                <span className='dropdown-title'>Horse Racing</span>
              </MenuItem>
            </StyledMenu>
      </div>
    </div>
  );
}