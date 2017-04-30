import React from 'react';
import { render } from 'react-snapshot';

import AppRouter from './config/AppRouter';

import './assets/stylesheets/main.css';

render(
  <AppRouter />,
  document.getElementById('root'),
);
