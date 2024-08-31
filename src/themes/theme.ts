// src/themes/theme.ts
import { createTheme } from '@mui/material/styles';

// カスタムテーマの作成
const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#6c757d',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
