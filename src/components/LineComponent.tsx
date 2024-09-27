import React from "react";
import { Box } from "@mui/material";

const LineComponent: React.FC = () => {
  return (
    <Box sx={{ 
        borderBottom: '2px solid #ccc', // 線の色と太さ
        mx: 10, // 左右の余白
      }} />
  );
};

export default LineComponent;