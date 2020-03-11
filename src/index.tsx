import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {makeLocalServer} from './api/localApi';

// string comparison since every ENV variable is string
if (process.env.REACT_APP_IS_MIRAGE === 'TRUE') {
  // uses MirageJS to create local backend that intercepts outcoming requests
  makeLocalServer();
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
