import React from 'react';
import { Box, Typography } from '@mui/material';

interface HobbyItemProps {
    imageUrl: string;
    description: string;
    reverse: boolean;
    scale?: number;
}

const HobbyItem: React.FC<HobbyItemProps> = ({ imageUrl, description, reverse, scale = 1 }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: reverse ? 'row-reverse' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '20px 0',
        }}>
            <Box
                component="img"
                src={imageUrl}
                alt="Hobby"
                sx={{ width: `${50 * scale}%`, height: 'auto', marginLeft: reverse ? 0 : 6, marginRight: reverse ? 6 : 0 }}
            />
            <Box
                flex="1"
                p={8}
                textAlign={reverse ? 'right' : 'left'}
            >
                <Typography variant="body1">{description}</Typography>
            </Box>
        </Box>
    );
};

export default HobbyItem;