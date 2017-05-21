import {
  START_FACTION_SAVE,
  SAVE_FACTION_SUCCESS,
  SAVE_FACTION_FAIL,
  START_FACTIONS_GET,
  GET_FACTIONS_SUCCESS,
  SAVE_FACTIONS_FAIL
} from '../actions/types'

export default function(state = {}, action) {
  switch(action.type){
    case START_FACTION_SAVE:
      return {...state, loading: true, error: false}
    case SAVE_FACTION_SUCCESS:
      return {...state, loading: false, error: false}
    case SAVE_FACTION_FAIL:
      return {...state, loading: false, error: action.payload}
    case START_FACTIONS_GET:
      return {...state, loading: true, error: false}
    case GET_FACTIONS_SUCCESS:
      return {...state, loading: false, error: false, factions: action.payload}
    case SAVE_FACTIONS_FAIL:
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}
