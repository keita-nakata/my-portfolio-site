import React from 'react';
import { Typography, Box, Link } from '@mui/material';

interface UrlBoxProps {
    url: string;
    iconUrl: string;
    label: string;
}

const UrlBox: React.FC<UrlBoxProps> = ({ url, iconUrl, label }) => {
    return (
        <Link href={url} target="_blank" rel="noopener noreferrer" underline="none">
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 'auto', // 横幅を小さく調整
                    padding: '8px 20px',
                    borderRadius: 5,
                    border: '1px solid #ccc',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    '&:hover': {
                        backgroundColor: '#f0f0f0',
                    }
                }}
            >
                {/* 左側のアイコン */}
                <Box sx={{ marginRight: 1 }}>
                    <img src={iconUrl} alt="icon" style={{ width: 30, height: 30 }} />
                </Box>

                {/* 右側の説明文 */}
                <Box>
                    <Typography variant="body1" color="textPrimary">
                        {label}
                    </Typography>
                </Box>
            </Box>
        </Link>
    );
};

export default UrlBox;