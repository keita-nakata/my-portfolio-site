import React from "react";
import { Typography, Box } from "@mui/material";
import HobbyItem from "./HobbyItem";
import { hobbies } from "../data/hobbyData";

const HobbyList: React.FC = () => {
  return (
    <Box>
      {hobbies.map((hobby, index) => (
        <HobbyItem
          key={index}
          imageUrl={hobby.imageUrl}
          title={hobby.title}
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
      margin: "50px 100px 50px 100px",
      padding: 0,
    }}>
      <Typography variant="h4" sx={{ fontFamily: 'Fredoka', fontWeight: 500, marginBottom: '50px' }}>HOBBY</Typography>
      <Box>
        <Box>
          <HobbyList />
        </Box>
      </Box>
    </Box>
  );
};



export default Hobby;
