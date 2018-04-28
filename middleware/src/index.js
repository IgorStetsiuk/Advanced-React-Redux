import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import asynch from './midlleware/async';
import logger from './midlleware/logger';

import state from './app.reducer'
import App from './app.component';
import './index.css';

const middlewares = applyMiddleware(logger, asynch);
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(state, devTools, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route key="home" exact path="/" component={App}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app')
);
