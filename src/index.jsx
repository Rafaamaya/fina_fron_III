import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './screens/App';
import './index.css';
import DarkModeContextProvider from './context/DarkModeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App/>
    </DarkModeContextProvider>
  </React.StrictMode>
);


