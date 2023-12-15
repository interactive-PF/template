import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';
import '@/reset.css';
import '@/normalize.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* <ReactQueryDevtools initialIsOpen /> */}
  </React.StrictMode>
);
