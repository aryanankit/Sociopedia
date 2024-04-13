import { useEffect } from "react";
import { Box } from "@mui/material";

const LandingPage = () => {
  
  useEffect(() => {
    document.title = 'Sociopedia';
  },[])

  return ( <Box 
    fontSize='22px'
    bgcolor='primary.main' 
    margin= '20px' 
    color='white' 
    p='10px'
    sx={{'&:hover':  { backgroundColor : 'primary.light'}}}
  >
    Landing Page
  </Box>)
}

export default LandingPage;