import React from "react";
import { Typography, Box } from "@mui/material";

// 資格情報のリストを生成する関数
const CertificationList: React.FC = () => {
    const certifications = [
        "基本情報技術者, " + 
        "TOEIC Listening & Reading 805, " +
        "英検2級, " + 
        "調理師免許, " + 
        "普通自動車第一種運転免許",
    ];

    return (
        <>
            {certifications.map((certification, index) => (
                <Box key={index} sx={{ marginBottom: '10px' }}>
                    <Typography variant="h6" sx={{ fontFamily: 'Fredoka', fontWeight: 500 }}>
                        {certification}
                    </Typography>
                </Box>
            ))}
        </>
    );
};

const Certification: React.FC = () => {
    return (
        <Box sx={{
            margin: "50px 100px 50px 100px",
            padding: 0,
        }}>
            <Typography variant="h4" sx={{ fontFamily: 'Fredoka', fontWeight: 500, marginBottom: '30px' }}>
                CERTIFICATION
            </Typography>
            {/* CertificationListを呼び出し */}
            <Box sx={{ marginLeft: '30px' }}>
                <CertificationList />
            </Box>
        </Box>
    );
};

export default Certification;
