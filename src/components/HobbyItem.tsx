import React from 'react';
import { Box, Typography } from '@mui/material';

interface HobbyItemProps {
    imageUrl: string;
    title: string;
    description: string[];
    reverse: boolean;
    scale?: number;
}

const HobbyItem: React.FC<HobbyItemProps> = ({ imageUrl, title, description, reverse, scale = 1 }) => {
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
                textAlign="left"
            >
                <Typography variant="h5" sx={{ fontFamily: 'Fredoka', fontWeight: 500, marginBottom: 2 }}>{title}</Typography>
                {description.map((text, index) => (
                    <Typography key={index} variant="body1" sx={{ fontFamily: 'sans-serif', fontWeight: 500, marginBottom: 1 }}>{text}</Typography>
                ))}
            </Box>
        </Box>
    );
};

export default HobbyItem;