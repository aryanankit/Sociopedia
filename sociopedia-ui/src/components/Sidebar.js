import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
});

const StyledList = styled(List)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

function Sidebar({ children }) {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigationItems = [
    // Add your navigation items here
    { text: 'Home', icon: <MenuIcon /> },
    { text: 'About Us', icon: <MenuIcon /> },
    { text: 'Contact', icon: <MenuIcon /> },
  ];

  return (
    <>
      <IconButton onClick={handleDrawerOpen} sx={{ color: 'white' }}>
        <MenuIcon />
      </IconButton>
      <StyledDrawer
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
      >
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
        <StyledList>
          {navigationItems.map((item) => (
            <ListItem button key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </StyledList>
      </StyledDrawer>
      {children}
    </>
  );
}

export default Sidebar;
