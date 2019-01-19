import { createStore } from 'redux';

import reducer from './reducer';

const devTools = [];
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  devTools.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(reducer, ...devTools);

export default store;
