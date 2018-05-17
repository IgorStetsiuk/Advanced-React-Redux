import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { AUTHENTICATED_USER } from "./shared/actions/actionsTypes";
import thunk from 'redux-thunk';

import reducer from './app.reducer'

import App from './app.component';
import { SinginFormContainer } from './components/SinginForm';
import { SignoutContainer } from "./components/Signout";
import { SignupContainer } from "./components/Signup/";
import RequireAuthentication from './shared/components/RequireAuth/RequireAuth';
import { Profile } from "./components/Profile/Profile";
import './index.css';

// TODO: Find out about another extension for redux | Status: done

// TODO: Move store configuration to separate file configureStore.js e.g.
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const JwtToken = localStorage.getItem('jwt');

if (JwtToken) {
  store.dispatch({ type: AUTHENTICATED_USER })
}

// TODO: Move routes into separate file
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route key="home" path="/" component={App}/>
        <Route key="singin" exact path="/signin" component={SinginFormContainer}/>
        <Route key="signout" exact path="/signout" component={SignoutContainer}/>
        <Route key="signup" exact path="/signup" component={SignupContainer}/>
        <Route key="profile" exact path="/profile" component={RequireAuthentication(Profile)}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
