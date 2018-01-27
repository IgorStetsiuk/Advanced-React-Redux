import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import state from './app.reducer'
import App from './app.component';
import Resources from './components/resources/resources'

let store = createStore(state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <Router>

            <div>
                <Route key="home" exact path="/" component={App}/>
                <Route key="src" exact path="/resources" component={Resources}/>
            </div>

        </Router>
    </Provider>,
    document.getElementById('app'));
