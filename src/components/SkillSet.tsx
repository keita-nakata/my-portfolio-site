import React from 'react';
import { Typography, Box } from '@mui/material';
import SkillBar from './SkillBar';

const SkillSet: React.FC = () => {
    // 説明文あとで追加できたら
    const description = [""];
    
    const Languages = () => {
        return {
            data: [
                { name: 'Python', value: 2 },
                { name: 'JS/TS/GAS', value: 2 },
                { name: 'C/C++', value: 2 },
                { name: 'PHP/Ruby/C#', value: 1 },
            ],
            title: "言語"
        };
    };
    const FrameworkDB = () => {
        return {
            data: [
                { name: 'React', value: 2 },
                { name: 'MySQL', value: 2 },
                { name: 'PostgreSQL', value: 1 },
            ],
            title: "フレームワーク/データベース"
        };
    };

    const Others = () => {
        return {
            data: [
                { name: 'MUI', value: 2 },
                { name: 'PyTorch/OpenCV', value: 2 },
                { name: 'AWS', value: 1 },
                { name: 'Supabase', value: 1 },
                { name: 'Raspberry Pi', value: 1 },
            ],
            title: "その他"
        };
    };

    return (
        <Box sx={{
            margin: "50px 100px 50px 100px",
            padding: 0,
        }}>
            <Typography variant="h4" sx={{ fontFamily: 'Fredoka', fontWeight: 500, marginBottom: "30px" }}>SKILL SET</Typography>
            <Box sx={{ marginLeft: "25px" }}>
                {description.map((desc, index) => (
                    <Typography key={index} variant="body1" sx={{ fontFamily: 'Fredoka', fontWeight: 500 }}>{desc}</Typography>
                ))}
            </Box>
            <div>
                <SkillBar data={Languages().data} title={Languages().title} />
                <SkillBar data={FrameworkDB().data} title={FrameworkDB().title} backgroundColor='rgba(0, 0, 255, 0.1)' />
                <SkillBar data={Others().data} title={Others().title} backgroundColor='rgba(0, 255, 0, 0.1)' />
            </div>
        </Box>
    );
}

export default SkillSet;