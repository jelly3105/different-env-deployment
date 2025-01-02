import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Version1 from './versions/version1';
import './index.css';
import Version2 from './versions/version2';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Version1 />
    <Version2 />
  </React.StrictMode>
);
