import React, { useState } from 'react';
import { Dialog, DialogContent, Typography, Box, IconButton, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface WorkItemDialogProps {
    open: boolean;
    onClose: () => void;
    imageSrcList: string[];
    title: string;
    description: string;
    technologies: string;
    githubUrl: string;
}

const images = [
    "images/sample1.jpeg",
    "images/sample2.jpeg",
    "images/sample3.jpeg",
];

const WorkItemDialog: React.FC<WorkItemDialogProps> = ({ open, onClose, imageSrcList, title, description, technologies, githubUrl }) => {
    const [selectedImage, setSelectedImage] = useState(imageSrcList[0]);

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* 左側の説明文 */}
                    <Box sx={{ width: '40%', padding: 2 }}>
                        <Typography variant="h5" gutterBottom>
                            {title}
                        </Typography>
                        <Typography variant='body1'>
                            {description}
                        </Typography>
                        <Typography variant='h5'>
                            使用技術
                        </Typography>
                        <Typography variant='body1'>
                            {technologies}
                        </Typography>
                        <Typography variant='h5'>
                            {githubUrl}
                        </Typography>
                    </Box>

                    {/* 右側の写真部分 */}
                    <Box sx={{ width: '55%', padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {/* 選択されている画像 */}
                        <Box sx={{ width: '100%', height: '300px', marginBottom: 2 }}>
                            <img src={selectedImage} alt="Selected" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Box>

                        {/* 写真一覧 */}
                        <Grid container spacing={1}>
                            {imageSrcList.map((image, index) => (
                                <Grid item xs={4} key={index}>
                                    <img
                                        src={image}
                                        alt={`sample-${index + 1}`}
                                        style={{ width: '100%', cursor: 'pointer', border: selectedImage === image ? '2px solid blue' : 'none' }}
                                        onClick={() => handleImageClick(image)}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>

                {/* 閉じるボタン */}
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogContent>
        </Dialog>
    );
};

export default WorkItemDialog;
