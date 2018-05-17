import { combineReducers } from 'redux';
import authReducer from './shared/reducers/auth.reduser';


const rootReducer = combineReducers({
  user: authReducer
});

export default rootReducer;