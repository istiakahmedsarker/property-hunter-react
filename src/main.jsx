import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import AuthProvider from './Providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './Providers/ThemeContext';
// for redux
// import { Provider } from 'react-redux';
// import store from '../lib/store';
// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 60000, // 1 minute cache time for all queries
      staleTime: 30000, // 30 seconds stale time for all queries
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);