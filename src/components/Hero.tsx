import React from 'react';
import { Typography, Box } from '@mui/material';

const Hero: React.FC = () => {
  return (
    <Box sx={{ 
      margin: 0, 
      padding: 0, 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#f0f0f0',
    }}>
      <Typography variant="h4" sx={{ fontFamily: 'Fredoka', fontWeight: 500, letterSpacing: "0.1em" }}>KEITA NAKATA</Typography>
      <Typography variant="subtitle1" sx={{ fontFamily: 'Fredoka', letterSpacing: "0.1em" }}>SOFTWARE ENGINEER</Typography>
    </Box>
  );
};

export default Hero;
