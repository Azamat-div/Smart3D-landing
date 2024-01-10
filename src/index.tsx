import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MainContext from './context';
import './styles/index.scss';

ReactDOM.render(
  <MainContext>
    <App />
  </MainContext>,
  document.getElementById('root'),
);
