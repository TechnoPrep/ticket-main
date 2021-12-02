import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

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

export default function NCAABB() {
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
            className='ncaabb-btn'
            id="dropdown-btn"
            aria-controls="sports-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            disableElevation
            onClick={handleClick}
            // endIcon={<KeyboardArrowDownIcon />}
          >
            NCAA-BB
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
            <MenuItem className='ncaa-header' onClick={handleClose} disableRipple>
              March Madness
            </MenuItem>
            <Divider />
            <MenuItem className='ncaa-header' onClick={handleClose} disableRipple>
              ACC
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Boston College
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Clemson
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Duke
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Florida State
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Georgia Tech
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Louisville
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Miami (FL)
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            North Carolina
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            NC State
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Pittsburgh
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Syracuse
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Virginia
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Virginia Tech
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Wake Forest
            </MenuItem>
            <Divider />
            <MenuItem className='ncaa-header' onClick={handleClose} disableRipple>
              Big Ten
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Illinois
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Indiana
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Iowa
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Maryland
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Michigan
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Michigan State	
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Minnesota
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Nebraska
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Northwestern
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Ohio State
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Penn State
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Purdue
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Rutgers
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Wisconsin
            </MenuItem>
            <Divider />
            <MenuItem className='ncaa-header' onClick={handleClose} disableRipple>
            Big 12
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Baylor
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Iowa State
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Kansas
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Kansas State
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Oklahoma
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Oklahoma State
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            TCU
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Texas
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Texas Tech
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            West Virginia
            </MenuItem>
            <Divider />
            <MenuItem className='ncaa-header' onClick={handleClose} disableRipple>
            PAC-12
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Arizona
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Arizona State
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            California
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            UCLA
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Colorado
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Oregon
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Oregon State
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            USC
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Stanford
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Utah
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Washington
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Washington State
            </MenuItem>
            <Divider />
            <MenuItem className='ncaa-header' onClick={handleClose} disableRipple>
            SEC
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Alabama
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Arkansas
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Auburn
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Florida
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Georgia
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Kentucky
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            LSU
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Ole Miss
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Mississippi State
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Missouri
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            South Carolina
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Tennessee
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Texas A&M
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Vanderbilt
            </MenuItem>
          </StyledMenu>
    </div>
  );
}
