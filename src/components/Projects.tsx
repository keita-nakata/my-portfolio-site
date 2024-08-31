import React from 'react';
import { Typography, Box, Card, CardContent, Grid } from '@mui/material';

const Projects: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h4">My Projects</Typography>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {/* 複数のプロジェクトをカードとして表示 */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Project 1</Typography>
              <Typography variant="body2">Description of project 1...</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Project 2</Typography>
              <Typography variant="body2">Description of project 2...</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
