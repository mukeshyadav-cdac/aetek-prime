import axios from 'axios'
import config from '../../config'
import {
  START_FACTION_SAVE,
  SAVE_FACTION_SUCCESS,
  SAVE_FACTION_FAIL,
  START_FACTIONS_GET,
  GET_FACTIONS_SUCCESS,
  GET_FACTIONS_FAIL
} from '../types'

const ROOT_URL = config.base_url

export function addFaction(faction) {
  return function (dispatch) {
    dispatch({type: START_FACTION_SAVE});
    axios.defaults.headers.common['Authorization']  = "Bearer " + localStorage["token"];
    axios.post(`${ROOT_URL}/faction`, faction)
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

export function getFactions(faction) {
  return function (dispatch) {
    dispatch({type: START_FACTIONS_GET});
    axios.defaults.headers.common['Authorization']  = "Bearer " + localStorage["token"];
    axios.get(`${ROOT_URL}/factions`)
      .then(response => {
        dispatch({type: GET_FACTIONS_SUCCESS, payload: response.data.factions});
      })
      .catch(error =>  {
        console.log(error);
        dispatch({type:  GET_FACTIONS_FAIL, payload: error.response.data});
      })
  }
}
