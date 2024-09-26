import React from "react";
import { Typography, Box } from "@mui/material";
import HobbyItem from "./HobbyItem";

const HobbyList: React.FC = () => {

    // ここで1つ1つの項目を設定
    const hobbies = [
      { imageUrl: 'images/baseball.jpeg', description: 'This is hobby 1', scale: 0.7 },
      { imageUrl: 'images/fishing.jpg', description: 'This is hobby 2', scale: 0.5 },
      { imageUrl: 'images/running_1.jpeg', description: 'This is hobby 3', scale: 0.6 },
    ];
  
    return (
      <Box>
        {hobbies.map((hobby, index) => (
          <HobbyItem
            key={index}
            imageUrl={hobby.imageUrl}
            description={hobby.description}
            reverse={index % 2 !== 0}
            scale={hobby.scale}  // 個別に倍率を指定
          />
        ))}
      </Box>
    );
  };

const Hobby: React.FC = () => {
    return (
        <Box sx={{
        margin: "100px 100px 0 100px",
        padding: 0,
        }}>
        <Typography variant="h5" sx={{ fontFamily: 'Fredoka', fontWeight: 500, marginBottom: '50px' }}>HOBBY</Typography>
        <Box>
            <Box>
                <HobbyList />
            </Box>
        </Box>
        </Box>
    );
};



export default Hobby;
