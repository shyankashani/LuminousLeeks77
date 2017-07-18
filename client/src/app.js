import React from 'react';
import ReactDOM from 'react-dom';

import Customer from './containers/Customer.jsx';
import Host from './containers/Host.jsx';

import customerStore from './customerStore.js';
import hostStore from './hostStore.js';

import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Customer />
  </Provider>,
  document.getElementById('root')
);
