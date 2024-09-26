import React from 'react';
import { Typography, Box } from '@mui/material';
import SkillBar from './SkillBar';

const SkillSet: React.FC = () => {
    const description = "説明文説明文"
    const Languages = () => {
        return {
            data: [
                { name: 'Python', value: 3 },
                { name: 'Python', value: 3 },
                { name: 'Python', value: 3 },
                { name: 'Python', value: 3 },
                { name: 'Python', value: 3 },
            ],
            title: "言語"
        };
    };
    const FrameworkDB = () => {
        return {
            data: [
                { name: 'React', value: 3 },
                { name: 'Vue.js', value: 1 },
                { name: 'MySQL', value: 1 },
            ],
            title: "フレームワーク/データベース"
        };
    };


    return (
        <Box sx={{
            margin: "100px 100px",
            padding: 0,
        }}>
            <Typography variant="h5" sx={{ fontFamily: 'Fredoka', fontWeight: 500, }}>SKILL SET</Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Fredoka', fontWeight: 500, }}>{description}</Typography>
            <div>
                <SkillBar data={Languages().data} title={Languages().title} />
                <SkillBar data={FrameworkDB().data} title={FrameworkDB().title} backgroundColor='rgba(0, 0, 255, 0.1)' />
            </div>
        </Box>
    );
}

export default SkillSet;