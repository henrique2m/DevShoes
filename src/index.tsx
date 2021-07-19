import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './pages/LandingPage';
import GlobalStyles from './GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <LandingPage/>
  </React.StrictMode>,
  document.getElementById('root')
);