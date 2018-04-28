import {
  FETCH_USERS
} from "../actions/actionsTypes";


function fetchUserData(state, payload) {
  return [...state, ...payload]
}


export default function userReducer(state = [], action) {
  switch (action.type) {
    case  FETCH_USERS :
      return fetchUserData(state, action.payload);
    default :
      return state;
  }
  
}