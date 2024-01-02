import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './components/theme/theme-provider.tsx';
import { Toaster } from './components/ui/sonner.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
