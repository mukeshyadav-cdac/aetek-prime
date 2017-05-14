import axios from 'axios'
import { browserHistory } from 'react-router'
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER
} from '../types'

const ROOT_URL = "http://localhost:8001/api"

export function signinUser({email, password}){
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, { email, password} )
      .then(response => {
        dispatch({type: AUTH_USER})
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/')
      })
      .catch(() => {
        dispatch(authError('bad login info'))
      })
  }
}

export function signupUser({email, password, first, last}){
  return function(dispatch){
    axios.post(`${ROOT_URL}/signup`, {email, password, first, last})
      .then(response => {
        dispatch({ type: AUTH_USER});
        localStorage.setItem('token', response.data.token)
        browserHistory.push('/')
      })
      .catch(error => dispatch(authError(error.response.data.error)))
  }
}

export function signoutUser(){
  localStorage.removeItem('token')

  return { type: UNAUTH_USER}
}

export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
