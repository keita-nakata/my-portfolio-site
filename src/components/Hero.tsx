import React from 'react';
import { Typography, Box } from '@mui/material';

const Hero: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0'}}>
      <Typography variant="h2">けいたのポートフォリオ</Typography>
      <Typography variant="h6">to be a software engineer</Typography>
    </Box>
  );
};

export default Hero;
