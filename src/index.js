import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import riot from 'riot';
import 'riot-hot-reload';
import 'Tags/riot-test.tag';

import styles from 'Styles/main.scss'

render(
  <App />,
  document.querySelector('main')
);

riot.mount('*');