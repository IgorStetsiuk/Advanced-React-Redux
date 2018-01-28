import {combineReducers} from 'redux';
import {headerReducer} from "./shared/reducers/header.reducer";

export default combineReducers({
    authenticated:headerReducer
});
