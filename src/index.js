import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import './style/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import getMe from './actions/GetMe';
import connection from './tools/SpotifyConnection';

const target = document.querySelector('#root');

const hasConnection = connection.getConnection();

// Get auth and user data from spotify
if (hasConnection) {
  store.dispatch(getMe());
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App authenticated={hasConnection} />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
registerServiceWorker();
