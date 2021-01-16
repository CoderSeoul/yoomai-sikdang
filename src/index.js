import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from "./lib/routes/history";
import store from "store";
import { GlobalStyle } from './grobalStyle';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <GlobalStyle />
      <Route render={({ location }) => <App location={location} />} />
    </Router>
  </Provider>,
  document.getElementById('root')
);