import React from 'react';
import ReactDOM from 'react-dom/client'; // import from 'react-dom/client' for React 18
import { BrowserRouter } from "react-router-dom"; // fix to react-router-dom
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // create a root

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
