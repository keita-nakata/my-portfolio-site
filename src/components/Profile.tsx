import React from 'react';
import { Typography, Box } from '@mui/material';

const Profile: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h4">About Me</Typography>
      <Typography paragraph>
        I am a web developer with a passion for creating modern web applications...
      </Typography>
    </Box>
  );
};

export default Profile;
