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

export default function NFL() {
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
            NFL
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
              Arizona Cardinals
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Atlanta Falcons
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Baltimore Ravens
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Buffalo Bills
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Carolina Panthers
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Chicago Bears
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Cincinnati Bengals
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Cleveland Browns
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Dallas Cowboys
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Denver Broncos
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Detroit Lions
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Green Bay Packers
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Houston Texans
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Indianapolis Colts
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Jacksonville Jaguars
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Kansas City Chiefs
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Las Vegas Raiders
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Los Angeles Chargers
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Los Angeles Rams
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Miami Dolphins
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Minnesota Vikings
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              New England Patriots
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              New Orleans Saints
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              New York Giants
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              New York Jets
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Philadelphia Eagles
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Pittsburgh Steelers
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              San Francisco 49ers
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Seattle Seahawks
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Tampa Bay Buccaneers
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Tennessee Titans
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Washington Football Team
            </MenuItem>
          </StyledMenu>
    </div>
  );
}
