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

export default function NBA() {
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
            NBA
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
              Atlanta Hawks
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Boston Celtics
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Brooklyn Nets
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Charlotte Hornets
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Chicago Bulls
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Cleveland Cavaliers
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Dallas Mavericks
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Denver Nuggets
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Detroit Pistons
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Golden State Warriors
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Houston Rockets
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Indiana Pacers
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Los Angeles Clippers
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Los Angeles Lakers
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Memphis Grizzlies
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Miami Heat
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Milwaukee Bucks
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Minnesota Timberwolves
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              New Orleans Pelicans
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              New York Knicks
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Oklahoma City Thunder
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Orlando Magic
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Philadelphia 76ers
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Portland Trailblazers
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Sacramento Kings
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              San Antonio Spurs
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Toronto Raptors
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Utah Jazz
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Washington Wizards
            </MenuItem>
          </StyledMenu>
    </div>
  );
}
