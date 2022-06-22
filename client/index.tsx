import React from 'react';
import { createRoot } from 'react-dom/client';
import { UIRouter, pushStateLocationPlugin } from '@uirouter/react';
import { ReactNotifications } from 'react-notifications-component';

import App from './src/App';

import states from './config/states';
import config from './config/router';

import 'react-notifications-component/dist/theme.css';
import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <UIRouter
    plugins={[pushStateLocationPlugin]}
    config={config}
    states={states}
  >
    <ReactNotifications />
    <App />
  </UIRouter>,
);
