import React from 'react';
import { Typography, Box } from '@mui/material';
import BasicInfo from './BasicInfo';
import SkillSet from './SkillSet';
import Hobby from './Hobby';
import Certification from './Certification';

const Profile: React.FC = () => {
  return (
    <Box sx={{ 
      marginTop: "30px",
      marginBottom: "50px",
      paddingBottom: "100px",
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      backgroundColor: '#f0f0f0',
    }}>
      <Typography variant="h4" sx={{ fontFamily: 'Fredoka', fontWeight: 500, letterSpacing: "0.1em", marginTop: '50px', textAlign: 'center' }}>ABOUT ME</Typography>
      <BasicInfo />
      <SkillSet />
      <Hobby />
      <Certification />
    </Box>
  );
};

export default Profile;
