import React from 'react';
import { Typography, Box } from '@mui/material';
import SkillBar from './SkillBar';

const SkillSet: React.FC = () => {
    const description = `自分の技術スタックです。
    卒業研究は基本的にPythonを用いて行っていたため、Pythonが最も慣れています。
    また、このWebページの開発やインターンでのプロダクト開発でReactを使用した経験があります。`;
    const Languages = () => {
        return {
            data: [
                { name: 'Python', value: 3 },
                { name: 'C/C++', value: 2 },
                { name: 'PHP', value: 1 },
                { name: 'C#', value: 1 },
                { name: 'JS/TS/GAS', value: 1 },
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

    const Others = () => {
        return {
            data: [
                { name: 'PyTorch/OpenCV', value: 2 },
                { name: 'AWS', value: 1 },
                { name: 'Unity', value: 1 },
                { name: 'Raspberry Pi', value: 1 },
            ],
            title: "その他"
        };
    };

    return (
        <Box sx={{
            margin: "100px 100px 0 100px",
            padding: 0,
        }}>
            <Typography variant="h5" sx={{ fontFamily: 'Fredoka', fontWeight: 500, }}>SKILL SET</Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Fredoka', fontWeight: 500, }}>{description}</Typography>
            <div>
                <SkillBar data={Languages().data} title={Languages().title} />
                <SkillBar data={FrameworkDB().data} title={FrameworkDB().title} backgroundColor='rgba(0, 0, 255, 0.1)' />
                <SkillBar data={Others().data} title={Others().title} backgroundColor='rgba(0, 255, 0, 0.1)' />
            </div>
        </Box>
    );
}

export default SkillSet;