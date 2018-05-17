import {
  AUTHENTICATED_USER,
  UNAUTENTICATED_USER,
  AUTEHNTICATION_ERROR
} from "../actions/actionsTypes";


// TODO: Split into saperate reducers, move changes with state into functions
export default function authReducer(state = {}, action) {
  switch (action.type) {
    case AUTHENTICATED_USER:
      return { ...state, isAuthenticated: true };
    case UNAUTENTICATED_USER:
      return { ...state, isAuthenticated: false };
    case AUTEHNTICATION_ERROR:
      return { ...state, authorisationError: action.payload };
    default:
      return state
  }
  
}