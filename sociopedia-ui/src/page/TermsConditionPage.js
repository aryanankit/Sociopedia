import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemText } from '@mui/material';

const terms = [
  "Your use of the site is at your sole risk. The site is provided on an 'as is' and 'as available' basis.",
  "You must be at least 13 years of age to use this site.",
  "You are responsible for maintaining the confidentiality of your account and password.",
  "We may terminate or suspend your account immediately, without prior notice or liability, for any reason.",
  "All content included on the site, such as text, graphics, logos, images, and software, is the property of the site owner.",
];

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Terms and Conditions
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern [business name]'s relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.
        </Typography>
        <Typography variant="h6" gutterBottom>
          General Terms
        </Typography>
        <List>
          {terms.map((term, index) => (
            <ListItem key={index}>
              <ListItemText primary={term} />
            </ListItem>
          ))}
        </List>
        <Typography variant="h6" gutterBottom>
          Governing Law
        </Typography>
        <Typography variant="body1" paragraph>
          These terms and conditions are governed by and construed in accordance with the laws of [Country/State] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Changes to Terms
        </Typography>
        <Typography variant="body1" paragraph>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </Typography>
        <Box mt={4}>
          <Typography variant="body2" color="textSecondary" align="center">
            © 2024 Your Company. All rights reserved.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default TermsAndConditions;
