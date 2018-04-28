import axios from 'axios';
import { FETCH_USERS } from "./actionsTypes";


export function fetchUsers(payload) {
  
  const request = axios.get('https://jsonplaceholder.typicode.com/users');
  
  return {
    type: FETCH_USERS,
    payload: request
  }
}