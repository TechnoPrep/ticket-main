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

export default function MLB() {
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
            MLB
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
              Arizona Diamondbacks
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Atlanta Braves
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Baltimore Orioles
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Boston Red Sox
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Chicago Cubs
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Chicago White Sox
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Cincinnati Reds
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Cleveland Indians
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Colorado Rockies
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Detroit Tigers
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Houston Astros
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Kansas City Royals
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Los Angeles Angels
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Los Angeles Dodgers
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Miami Marlins
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Milwaukee Brewers
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Minnesota Twins
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              New York Mets
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              New York Yankees
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Oakland Athletics
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Philadelphia Phillies
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Pittsburgh Pirates
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              San Diego Giants
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              San Francisco Giants
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Seattle Mariners
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Tampa Bay Rays
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Texas Rangers
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Toronto Blue Jays
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Washington Nationals
            </MenuItem>
          </StyledMenu>
    </div>
  );
}

