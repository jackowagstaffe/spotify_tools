import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import getMe from './actions/GetMe';
import getAuth from './actions/GetAuth';

const target = document.querySelector('#root');

// Get auth from spotify
store.dispatch(getAuth());

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
registerServiceWorker();
