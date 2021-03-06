import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
// import store from './store';
import history from './history';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Router history={history}>
      <App />
    </Router>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('app')
);
