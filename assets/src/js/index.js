import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { DevTools } from 'components';
import App from './containers/app';
import Store from './store';

const documentRoot = document.getElementById('root');
render(
  <Provider store={Store}>
    <div>
      <DevTools />
      <App />
    </div>
  </Provider>,
  documentRoot);
