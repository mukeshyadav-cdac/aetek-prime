import {
  AUTH_USER,
  ADMIN_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from '../actions/types'

export default function(state = {}, action) {
  switch(action.type){
    case AUTH_USER:
      return { ...state, authenticated: true }
    case UNAUTH_USER:
      return {...state, authenticated: false, admin: false}
    case ADMIN_USER:
      return {...state, admin: true}
    case AUTH_ERROR:
      return {...state, error: action.payload}
    case FETCH_MESSAGE:
      return {...state, message: action.payload}
    default:
      return state
  }
}
