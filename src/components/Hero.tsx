import React from 'react';
import { Typography, Box } from '@mui/material';

const Hero: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h2">Welcome to My Portfolio</Typography>
      <Typography variant="h6">I am a passionate developer...</Typography>
    </Box>
  );
};

export default Hero;
