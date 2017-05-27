import {
  START_FACTION_SAVE,
  SAVE_FACTION_SUCCESS,
  SAVE_FACTION_FAIL,
  START_FACTIONS_GET,
  GET_FACTIONS_SUCCESS,
  SAVE_FACTIONS_FAIL,
  START_FACTION_GET,
  GET_FACTION_SUCCESS,
  GET_FACTION_FAIL,
  NEW_FACTION,
  START_FACTION_UPDATE,
  UPDATE_FACTION_SUCCESS,
  UPDATE_FACTION_FAIL,
} from '../actions/types'

const defaultState = {
  faction: {name:{}}
}

export default function(state = defaultState, action) {
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
      return {...state, loading: false, error: false, factions: action.payload, faction: {}}
    case SAVE_FACTIONS_FAIL:
      return {...state, loading: false, error: action.payload}
    case START_FACTION_GET:
      return {...state, loading: true, error: false, faction: {}}
    case GET_FACTION_SUCCESS:
      return {...state, loading: false, error: false, faction: action.payload, factions: []}
    case GET_FACTION_FAIL:
      return {...state, loading: false, error: action.payload, faction: {}}
    case NEW_FACTION:
      return {...state, faction: {name: ''}}
    case START_FACTION_UPDATE:
      return {...state, loading: true, error: false}
    case UPDATE_FACTION_SUCCESS:
      return {...state, loading: false, error: false}
    case UPDATE_FACTION_FAIL:
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}
