import { Box } from "@mui/material";
import { useEffect } from "react";

const LoginPage =  () => {

  useEffect(() => {
    document.title = 'Login';
  }, []);

  return (<Box
    element='span'
  >
     Login 
  </Box>)
}

export default LoginPage;