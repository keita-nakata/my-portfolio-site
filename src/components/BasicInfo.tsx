import React from 'react';
import { Typography, Box } from '@mui/material';
import faceImage from '/img/profile/face.jpeg';

const BasicInfo: React.FC = () => {
    const name = "中田 啓太";
    const origin = "三重県出身";
    const belonging = "三重大学工学部 卒業 → 電気通信大学 情報理工学研究科 情報学専攻 博士前期課程2年 | 橋山研究室所属";
    const research = `卒業研究ではゼブラフィッシュ遊泳動画からその個体の年齢推定をする深層学習モデルの開発に取り組んだ。
    現在は映像でのスポーツ観戦において、視聴者個人の特性に応じた情報を提供してより良い視聴体験を生み出すことを目標とした研究を行っている。`;

    // 自分の思いや価値観を書く
    const myPhilosophy = ""

    return (
        <Box sx={{
            margin: "100px 130px 50px 130px",
            padding: 0,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <Box>
                <img src={faceImage} alt="Profile" style={{ width: 200, height: 200, borderRadius: 100, marginRight: 80 }} />
            </Box>
            <Box>
                <Typography variant="h4" sx={{ fontFamily: 'EB Garamond', fontWeight: 600, letterSpacing: "0.1em", marginBottom: 3 }}>{name}</Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Fredoka', fontWeight: 500, marginBottom: 0 }}>{origin}</Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Fredoka', fontWeight: 500, marginBottom: 2}}>{belonging}</Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Fredoka', fontWeight: 500, }}>{research}</Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Fredoka', fontWeight: 500, }}>{myPhilosophy}</Typography>
            </Box>
        </Box>
    );
};

export default BasicInfo;