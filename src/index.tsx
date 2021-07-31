import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './GlobalStyles';

import 'react-toastify/dist/ReactToastify.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
