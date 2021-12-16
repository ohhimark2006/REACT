import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux';

import {createStore, compose} from 'redux';

import ContactReducer from './redux/ContactReducer';
 
const store = createStore(ContactReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

 