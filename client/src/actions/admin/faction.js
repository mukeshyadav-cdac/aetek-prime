import { client } from '../client';
import {
  START_FACTION_SAVE,
  SAVE_FACTION_SUCCESS,
  SAVE_FACTION_FAIL,
  START_FACTIONS_GET,
  GET_FACTIONS_SUCCESS,
  GET_FACTIONS_FAIL,
  START_FACTION_GET,
  GET_FACTION_SUCCESS,
  GET_FACTION_FAIL,
  NEW_FACTION,
  START_FACTION_UPDATE,
  UPDATE_FACTION_SUCCESS,
  UPDATE_FACTION_FAIL,
} from '../types'

export function addFaction(faction) {
  return function (dispatch) {
    dispatch({type: START_FACTION_SAVE});
    client.post('/factions', faction)
      .then(response => {
        console.log(response.data)
        dispatch({type: SAVE_FACTION_SUCCESS, payload: response.data});
      })
      .catch(error =>  {
        console.log(error);
        dispatch({type:  SAVE_FACTION_FAIL, payload: error.response.data});
      })
  }
}

export function updateFaction(faction) {
  return function (dispatch) {
    dispatch({type: START_FACTION_UPDATE});
    client.put(`/factions/${faction._id}/update`, faction)
      .then(response => {
        console.log(response.data)
        dispatch({type: UPDATE_FACTION_SUCCESS, payload: response.data});
      })
      .catch(error =>  {
        console.log(error);
        dispatch({type: UPDATE_FACTION_FAIL, payload: error.response.data});
      })
  }
}

export function getFactions(faction) {
  return function (dispatch) {
    dispatch({type: START_FACTIONS_GET});
    client.get('/factions')
      .then(response => {
        dispatch({type: GET_FACTIONS_SUCCESS, payload: response.data.factions});
      })
      .catch(error =>  {
        console.log(error);
        dispatch({type:  GET_FACTIONS_FAIL, payload: error.response.data});
      })
  }
}


export function getFaction(_id) {
  return function(dispatch) {
    dispatch({ type: START_FACTION_GET});
    client.get(`/factions/${_id}`)
      .then(response => {
        dispatch({type: GET_FACTION_SUCCESS, payload: response.data});
      })
      .catch(error => {
        console.log(error);
        dispatch({type: GET_FACTION_FAIL, payload: error.response.data});
      })
  }
}

export function newFaction() {
  return function(dispatch) {
    dispatch({ type: NEW_FACTION });
  }
}
