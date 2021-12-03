import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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
    marginLeft: theme.spacing(22),
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

export default function NHL() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='dropdown-btn'>
        <button
            className='dropdown-item-btn'
            id="dropdown-btn"
            aria-controls="sports-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            disableElevation
            onClick={handleClick}
            // endIcon={<KeyboardArrowDownIcon />}
          >
            NHL
          </button>
          <StyledMenu
            id="golf-menu"
            MenuListProps={{
              'aria-labelledby': 'golf-btn',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              Anaheim Ducks
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Arizona Coyotes
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Boston Bruins
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Buffalo Sabres
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Calgary Flames
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Carolina Hurricanes
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Chicago Blackhawks
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Colorado Avalanche
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Columbus Blue Jackets
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Dallas Stars
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Detroit Red Wings
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Edmonton Oilers
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Florida Panthers
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Los Angeles Kings
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Minnesota Wild
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Montreal Canadiens
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Nashville Predators
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              New Jersey Devils
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              New York Islanders
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              New York Rangers
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Ottawa Senators
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Philadelphia Flyers
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Pittsburgh Penguins
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              San Jose Sharks
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Seattle Kraken
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              St. Louis Blues
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Tampa Bay Lightning
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Toronto Maple Leafs
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Vancouver Canucks
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Vegas Golden Knights
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Washington Capitals
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Winnipeg Jets
            </MenuItem>
          </StyledMenu>
    </div>
  );
}