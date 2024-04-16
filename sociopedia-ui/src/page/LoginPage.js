import { Box } from "@mui/material";
import { useEffect } from "react";

const LoginPage =  () => {

  useEffect(() => {
    document.title = 'Login';
  }, []);

  return (<Box fontSize='26px' textAlign={'center'}>
     Login 
  </Box>)
}

export default LoginPage;