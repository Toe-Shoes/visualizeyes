import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';

import styles from './scss/application.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

module.hot.accept(['./App.jsx', './scss/application.scss'], () => {
  const NextApp = require('./App.jsx').default;
  render(
    <Provider store={store}>
      <NextApp />
    </Provider>, 
  document.getElementById('root'));
});
