import React from 'react';
import { Box, Typography } from '@mui/material';

interface WorkItemProps {
    imageSrc: string;
    title: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ imageSrc, title }) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" m={2} sx={{
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'white',
        }}>
            <Box margin={1}>
                <img src={imageSrc} alt={title} style={{ width: '400px', height: '300px', objectFit: 'cover' }} />
                <Typography variant="h6" mt={1} sx={{ textAlign: 'center' }}>
                    {title}
                </Typography>
            </Box>
        </Box>
    );
};

export default WorkItem;
