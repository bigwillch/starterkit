import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import styles from 'Styles/main.scss'

render(
  <App />,
  document.querySelector('main')
);