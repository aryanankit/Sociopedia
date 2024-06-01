import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography, List, ListItem, ListItemText, Paper, Grid } from '@mui/material';

const Messenger = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'You' }]);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Messenger
      </Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <List sx={{ maxHeight: '60vh', overflow: 'auto' }}>
          {messages.map((msg, index) => (
            <ListItem key={index}>
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText primary={msg.sender} />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText primary={msg.text} />
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      </Paper>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Type your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </Box>
    </Container>
  );
};

export default Messenger;
