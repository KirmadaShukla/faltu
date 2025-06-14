import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context/AppContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

.text-gray-400 {
  font-size: 12px;
  color: rgb(171, 95, 95);
  background-color: rgb(238, 129, 129);
  margin: 10px;
}