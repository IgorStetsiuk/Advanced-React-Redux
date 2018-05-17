import axios from 'axios';
import {
  AUTHENTICATED_USER,
  UNAUTENTICATED_USER,
  AUTEHNTICATION_ERROR
} from "./actionsTypes";


const ROOT_URL = 'http://localhost:3090';


// TODO: Rewrite to promises or asynh/await
export function signinUser({ email, password, history }) {
  return dispatch => {
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(({ data }) => {
          dispatch({ type: AUTHENTICATED_USER });
          
          localStorage.setItem('jwt', JSON.stringify(data.jwt));
          
          // TODO: Redirect user here to another page
          // TODO; Rewrite current solution to another, research about how to navigate through history in react route v4
          history.push('/profile')
        }
      )
      .catch(() => {
        dispatch(authError('Bad Login Info'));
        dispatch({ type: UNAUTENTICATED_USER })
      })
  }
}


// TODO: Rewrite to promises or asynh/await
export function singupUser(payload) {
  return dispatch => {
    axios.post(`${ROOT_URL}/signup`, payload)
      .then(({ data }) => {
          dispatch({ type: AUTHENTICATED_USER });
          
          localStorage.setItem('jwt', JSON.stringify(data.token))
          // TODO: Redirect user here to another page
        }
      )
      .catch(() => {
        dispatch(authError('Bad Login Info'));
      })
  }
}

export function authError(error) {
  return {
    type: AUTEHNTICATION_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.removeItem('jwt');
  return {
    type: UNAUTENTICATED_USER
  }
}


