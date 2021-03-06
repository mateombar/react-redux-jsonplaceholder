import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers/index';

import App from './components/App';
import './styles/index.css';
import './styles/icons.css';

const store = createStore(
  reducers, //All Reducers
  {}, //Initial State
  applyMiddleware(reduxThunk)
);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

