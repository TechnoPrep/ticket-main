import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const timeoutLength = 100000;

export default function TestMenu() {
  
  const [menuHover, setMenuHover] = React.useState({
    anchorEl: null,
    open: false,
    mouseOverButton: false,
    mouseOverMenu: false,
  });

  const handleClick = (event) => {
    setMenuHover({ open: true, anchorEl: event.currentTarget });
  };

  const handleClose = () => {
    setMenuHover({ mouseOverButton: false, mouseOverMenu: false });
  };

  const enterButton = () => {
    setMenuHover({ mouseOverButton: true });
  }

  const leaveButton = () => {
    // Set a timeout so that the menu doesn't close before the user has time to
    // move their mouse over it
    setTimeout(() => {
      setMenuHover({ mouseOverButton: false });
    }, timeoutLength);
  }

  const enterMenu = () => {
    setMenuHover({ mouseOverMenu: true });
  }

  const leaveMenu = () => {
     setTimeout(() => {
      setMenuHover({ mouseOverMenu: false });
     }, timeoutLength);
  }

  const open = menuHover.mouseOverButton || menuHover.mouseOverMenu;

  return (
    <div>
      <Button
        aria-owns={menuHover.open ? 'simple-menu' : null}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseEnter={enterButton}
        onMouseLeave={leaveButton}
      >
        Open Menu
      </Button>
      <Menu
        classes={{}}
        id="simple-menu"
        anchorEl={menuHover.anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          onMouseEnter: enterMenu,
          onMouseLeave: leaveMenu,
        }}

      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}