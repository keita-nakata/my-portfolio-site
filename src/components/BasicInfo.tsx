import React from 'react';
import { Typography, Box } from '@mui/material';

const BasicInfo: React.FC = () => {
    const belonging = "電気通信大学 情報理工学研究科 情報学専攻 1年";
    const research = "卒業研究では深層学習を用いた動画像分類に取り組む。"

    // 自分の思いや価値観を書く
    const myPhilosophy = "一旦適当に。私は、人々の生活をより豊かにするために、技術を駆使して社会課題に取り組むことが重要だと考えています。そのためにどーたらこーたら"

    return (
        <Box sx={{
            margin: "100px 100px",
            padding: 0,
        }}>
            <Typography variant="body1" sx={{ fontFamily: 'Fredoka', fontWeight: 500, }}>{belonging}</Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Fredoka', fontWeight: 500, }}>{research}</Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Fredoka', fontWeight: 500, }}>{myPhilosophy}</Typography>
        </Box>
    );
};

export default BasicInfo;