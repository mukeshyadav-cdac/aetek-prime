import {
  ADD_CATEGORY,
  GET_CATEGORIES,
  RECEIVED_CATEGORIES,
  RECEIVED_CATEGORIES_FAIL,
  START_SAVE_CATEGORY,
  SAVE_CATEGORY_SUCCESS,
  SAVE_CATEGORY_FAIL,
  START_SAVE_WEAPON,
  SAVE_WEAPON_SUCCESS,
  SAVE_WEAPON_FAIL,
} from '../actions/types'

export default function(state = {}, action) {
  switch(action.type){
    case GET_CATEGORIES:
      return {...state, loading: true, error: false}
    case RECEIVED_CATEGORIES:
      return {...state, categories: action.payload, loading: false, error: false}
    case RECEIVED_CATEGORIES_FAIL:
      return {...state, error: action.payload, loading: false}
    case START_SAVE_CATEGORY:
      return {...state, loading: true, error: false}
    case SAVE_CATEGORY_SUCCESS:
      return {...state, categories: [...state.categories, action.payload], loading: false, error: false}
    case SAVE_CATEGORY_FAIL:
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}
