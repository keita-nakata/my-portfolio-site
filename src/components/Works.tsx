import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import WorkItem from './WorkItem';
import WorkItemDialog from './WorkItemDialog';

interface Work {
    title: string;
    imageSrc: string;
    description: string;
    technologies: string;
    githubUrl: string;
    imageList: string[];
}

const Works: React.FC = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedWork, setSelectedWork] = useState<Work | null>(null);

    const works: Work[] = [
        {
            title: "Work 1",
            imageSrc: "images/baseball.jpeg",
            description: "Description of Work 1",
            technologies: "Tech Stack for Work 1",
            githubUrl: "https://github.com/work1",
            imageList: ["images/running_1.jpeg", "images/running_2.jpeg", "images/running_3.jpeg"],
        },
        {
            title: "Work 2",
            imageSrc: "images/running_1.jpeg",
            description: "Description of Work 2",
            technologies: "Tech Stack for Work 2",
            githubUrl: "https://github.com/work2",
            imageList: ["images/running_2.jpeg", "images/running_3.jpeg"],
        },
        // 他の作品を追加
    ];

    const handleOpenDialog = (work: Work) => {
        setSelectedWork(work);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedWork(null); // ダイアログが閉じられたときにリセット
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Typography
                variant="h4"
                sx={{
                    fontFamily: 'Fredoka',
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    marginTop: '50px',
                    textAlign: 'center',
                }}>
                WORKS
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginTop: '30px',
                    gap: 2,
                }}>
                {works.map((work, index) => (
                    <WorkItem
                        key={index}
                        imageSrc={work.imageSrc}
                        title={work.title}
                        onClick={() => handleOpenDialog(work)}
                    />
                ))}
            </Box>

            {selectedWork && (
                <WorkItemDialog
                    open={openDialog}
                    onClose={handleCloseDialog}
                    imageSrcList={selectedWork.imageList}
                    title={selectedWork.title}
                    description={selectedWork.description}
                    technologies={selectedWork.technologies}
                    githubUrl={selectedWork.githubUrl}
                />
            )}
        </Box>
    );
};

export default Works;
