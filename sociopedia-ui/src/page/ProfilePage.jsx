// src/components/ProfilePage.js

import React from 'react';
import { Box, Avatar, Typography, Grid, Paper, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const ProfilePage = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Avatar
              alt="Profile Picture"
              src="/path/to/profile-pic.jpg"
              sx={{ width: 150, height: 150, margin: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4">John Doe</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              johndoe@example.com
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            </Typography>
            <Button
              variant="contained"
              startIcon={<EditIcon />}
              sx={{ marginTop: 2 }}
            >
              Edit Profile
            </Button>
            <Box sx={{ marginTop: 4 }}>
              <Typography variant="h6">Hobbies</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Reading" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Traveling" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Cooking" />
                </ListItem>
              </List>
            </Box>
            <Box sx={{ marginTop: 4 }}>
              <Typography variant="h6">Connect with me</Typography>
              <IconButton href="https://facebook.com" target="_blank">
                <FacebookIcon />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank">
                <TwitterIcon />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ProfilePage;
