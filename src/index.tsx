import './polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { initializeAxios } from './functions/initializeAxios';
import { favicon } from './constants';

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <Favicon url={favicon} />
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

(() => {
  initializeAxios();
  render();
})();
