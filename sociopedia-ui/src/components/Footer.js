import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2, backgroundColor: 'background.paper' }}>
      <Typography variant="body2" color="text.secondary" align="center">
        © 2024 Your Company Name. All rights reserved.
        <Link href="#" underline="none" color="text.primary">
          Terms & Conditions
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
