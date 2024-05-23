import * as React from 'react';
import { useEffect } from "react";
import { Box } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { MdOutlineMenu } from "react-icons/md";

const DashboardPage = () => {

  useEffect(() => {
    document.title ='Dashboard';
  }, [])

  return (<Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color='red'>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label=" open drawer"
          // sx={{ mr: 2 }}
        >
          <MdOutlineMenu />
        </IconButton>
        <Typography
          variant="h6 "  
          noWrap  
          component="div "
          sx={{ flexGrow: 2, display: { xs: 'none', sm: 'block' } }}
        >
          Dashboard Page 
        </Typography>
        
      </Toolbar>
    </AppBar>
  </Box>);
}

export default DashboardPage;