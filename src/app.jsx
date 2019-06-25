import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import './style.css'
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';
import {store} from './store';
import {history} from './reducers';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Main />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
