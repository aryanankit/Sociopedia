import { Box } from "@mui/material";
import { useEffect } from "react";

const LoginPage =  () => {

  useEffect(() => {
    document.title = 'Login';
  }, []);

  return (<Box 
    fontSize='32px' 
    fontWeight={'600'} 
    textAlign={'center'}>
     Login 
  </Box>)
}

export default LoginPage;