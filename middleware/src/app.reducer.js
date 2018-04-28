import { combineReducers } from 'redux';
import userReducer from './shared/reducers/user.reducer';


const rootReducer = combineReducers({
  users: userReducer
});

export default rootReducer;