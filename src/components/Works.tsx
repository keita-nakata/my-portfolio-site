import React from 'react';
import { Typography, Box } from '@mui/material';
import WorkItem from './WorkItem';

const Works: React.FC = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Typography
                variant="h4"
                sx={{
                    fontFamily: 'Fredoka',
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    marginTop: '50px',
                    textAlign: 'center'
                }}>
                WORKS
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginTop: '30px',
                    gap: 2, // アイテム間のスペース
                }}>
                <WorkItem imageSrc="images/baseball.jpeg" title="Work 1" />
                <WorkItem imageSrc="images/baseball.jpeg" title="Work 2" />
                <WorkItem imageSrc="images/baseball.jpeg" title="Work 3" />
                <WorkItem imageSrc="images/baseball.jpeg" title="Work 4" />
            </Box>
        </Box>
    );
};

export default Works;
