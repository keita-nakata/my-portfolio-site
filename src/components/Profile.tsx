import React from 'react';
import { Typography, Box } from '@mui/material';
import BasicInfo from './BasicInfo';
import SkillSet from './SkillSet';

const Profile: React.FC = () => {
  return (
    <Box sx={{ 
      marginTop: "30px",
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      backgroundColor: '#f0f0f0',
      // justifyContent: 'center', 
      // alignItems: 'center' 
    }}>
      <BasicInfo />
      <SkillSet />
    </Box>
  );
};

export default Profile;
