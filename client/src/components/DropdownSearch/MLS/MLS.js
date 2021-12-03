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

export default function MLS() {
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
            MLS
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
            Atlanta United
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Austin FC
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Charlotte FC
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Chicago Fire FC
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            FC Cincinnati
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Colorado Rapids
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Columbus Crew
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            D.C. United
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            FC Dallas
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Houston Dynamo FC
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Sporting Kansas City
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            LA Galaxy
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Los Angeles FC
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Inter Miami CF
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Minnesota United
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            CF Montréal
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Nashville SC
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            New England Revolution
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            New York Red Bulls
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            New York City FC
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Orlando City
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Philadelphia Union
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Portland Timbers
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Real Salt Lake
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            San Jose Earthquakes
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Seattle Sounders FC
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Toronto FC
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            Vancouver Whitecaps FC
            </MenuItem>
          </StyledMenu>
    </div>
  );
}
