// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './сomponents/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter basename='/goit-react-hw-05-movies'>
    {/* // <BrowserRouter> */}
    <App />
  </BrowserRouter>,
  /* // </React.StrictMode>, */
);
