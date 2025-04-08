// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './themes/theme';
import { inject } from '@vercel/analytics';

inject(); // Vercel Analyticsの初期化

// ThemeProviderでラップしてテーマを提供
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* グローバルリセットやベースラインのためのCssBaseline */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
