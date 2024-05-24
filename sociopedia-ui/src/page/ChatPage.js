import { Box } from "@mui/material";
import React from "react";
import './chatbox.css'

const ChatPage = () => {
  return (<Box 
    style={{ 
      position: 'relative' , 
      backgroundColor : 'blue', 
      left : '0', 
      bottom: '0', 
      width: '10%', 
      height: '100%' }}
  >
    Chat Here !
  </Box>)
}

export default ChatPage;