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
    <div>
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
          Golf
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <SportsBaseballIcon />
          MLB
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <SportsBasketballIcon />
          NBA
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <SportsBasketballIcon />
          NCAA - BB
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <SportsFootballIcon />
          NCAA - FB
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <SportsFootballIcon />
          NFL
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <SportsHockeyIcon />
          NHL
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <SportsSoccerIcon />
          Soccer
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <SportsTennisIcon />
          Tennis
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <SportsMmaIcon />
          Fighting
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <SportsMotorsportsIcon />
          Motorsports
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <SportsScoreIcon />
          Horse Racing
        </MenuItem>
      </StyledMenu>
    </div>
  );
}