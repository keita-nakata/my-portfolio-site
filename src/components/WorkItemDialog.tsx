import React, { useState } from 'react';
import { Dialog, DialogContent, Typography, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import UrlBox from './UrlBox';
import githubLogo from '/img/common/github_2111432.png';
import publicLogo from '/img/common/globe.png';
import slideLogo from '/img/common/presentation.png';

interface WorkItemDialogProps {
    open: boolean;
    onClose: () => void;
    imageSrcList: string[];
    title: string;
    description: string[];
    technologies: string;
    githubUrl?: string;
    publicUrl?: string;
    slideUrl?: string;
}

const WorkItemDialog: React.FC<WorkItemDialogProps> = ({ open, onClose, imageSrcList, title, description, technologies, githubUrl="", publicUrl="", slideUrl="" }) => {
    const [selectedImage, setSelectedImage] = useState(imageSrcList[0]);
    const [naturalWidth, setNaturalWidth] = useState(0);
    const [naturalHeight, setNaturalHeight] = useState(0);


    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    };

    const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const { naturalWidth, naturalHeight } = event.currentTarget;
        setNaturalWidth(naturalWidth);
        setNaturalHeight(naturalHeight);
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
            <DialogContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* 左側の説明文 */}
                    <Box sx={{ width: '40%', padding: 2, display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Fredoka', fontWeight: 600 }}>
                            {title}
                        </Typography>
                        <Typography variant='body1'>
                            {description.map((text, index) => (
                                <Typography key={index} variant='body1' sx={{ marginBottom: 1 }}>
                                    {text}
                                </Typography>
                            ))}
                        </Typography>
                        <Typography variant='h5' sx={{ fontFamily: 'Fredoka', fontWeight: 600, marginTop: '30px' }}>
                            使用言語・ツール
                        </Typography>
                        <Typography variant='body1'>
                            {technologies}
                        </Typography>
                        <Box sx={{ justifyContent: 'flex-start', marginTop: '30px', display: 'flex', flexDirection: 'row', gap: '8px' }}>
                            {githubUrl && <UrlBox url={githubUrl} iconUrl={githubLogo} label='Github'/>}
                            {publicUrl && <UrlBox url={publicUrl} iconUrl={publicLogo} label='Web'/>}
                            {slideUrl && <UrlBox url={slideUrl} iconUrl={slideLogo} label='Slide'/>}
                        </Box>
                    </Box>

                    {/* 右側の写真部分 */}
                    <Box sx={{ width: '55%', padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        {/* 選択されている画像 */}
                        <Box sx={{ 
                            width: naturalWidth > naturalHeight ? '500px' : 'auto', 
                            height: naturalWidth > naturalHeight ? 'auto' : '500px',  
                            marginBottom: 2,
                        }}>
                            <img 
                                src={selectedImage} 
                                alt="Selected" 
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                                onLoad={handleImageLoad}
                            />
                        </Box>

                        {/* 写真一覧 */}
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {imageSrcList.map((image, index) => (
                                <Box key={index} sx={{ width: '50px', height: '50px', cursor: 'pointer' }}>
                                    <img
                                        src={image}
                                        alt={`sample-${index + 1}`}
                                        style={{ width: '100%', height: '100%', border: selectedImage === image ? '2px solid blue' : 'none', objectFit: 'cover' }}
                                        onClick={() => handleImageClick(image)}
                                    />
                                </Box>
                            ))}
                        </Box>
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
