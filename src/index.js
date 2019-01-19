/**
 * NPM import
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
/**
 * Local import
 */
// Composant
import App from 'src/components/App';
// store
import store from 'src/store';

/**
 * Code
 */
const rootComponent = (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

render(rootComponent, document.getElementById('root'));
