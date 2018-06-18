import React from 'react';
import { hydra } from 'react-dom';
import App from './app';

hydra(
  <App/>,
  document.querySelector('#root')
);
