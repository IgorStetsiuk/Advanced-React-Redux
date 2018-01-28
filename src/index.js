import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux';


import state from './app.reducer'
import App from './app.component';
import {Resources} from "./components/resources/resources";
import {requireAuth} from "./components/requireAuth(HOC)/requireAuth";

let store = createStore(state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route key="home" exact path="/" component={App}/>
                <Route key="src" path="/resources" component={requireAuth(Resources)}/>
            </Switch>

        </Router>
    </Provider>,
    document.getElementById('app'));
