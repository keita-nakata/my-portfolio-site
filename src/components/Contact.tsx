import React from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';

const Contact: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h4">Contact Me</Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', width: '300px', marginTop: 2 }}>
        <TextField label="Name" variant="outlined" sx={{ marginBottom: 2 }} />
        <TextField label="Email" variant="outlined" sx={{ marginBottom: 2 }} />
        <TextField label="Message" multiline rows={4} variant="outlined" sx={{ marginBottom: 2 }} />
        <Button variant="contained" color="primary">Send</Button>
      </Box>
    </Box>
  );
};

export default Contact;
