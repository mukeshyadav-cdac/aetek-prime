import axios from 'axios'
import config from '../../config'
import {
  GET_CATEGORIES,
  RECEIVED_CATEGORIES,
  RECEIVED_CATEGORIES_FAIL,
  START_SAVE_CATEGORY,
  SAVE_CATEGORY_SUCCESS,
  SAVE_CATEGORY_FAIL,
  START_SAVE_WEAPON,
  SAVE_WEAPON_SUCCESS,
  SAVE_WEAPON_FAIL
} from '../types'

const ROOT_URL = config.base_url

export function getCategories() {
  return function (dispatch) {
    dispatch({type: GET_CATEGORIES});
    axios.get(`${ROOT_URL}/weapon/categories`)
      .then(response => {
        console.log(response.data)
        dispatch({type: RECEIVED_CATEGORIES, payload: response.data.categories});
      })
      .catch(function (error) {
        console.log(error);
        dispatch({type:  RECEIVED_CATEGORIES_FAIL});
      })
  }
}

export function addCategory(category) {
  return function (dispatch) {
    dispatch({type: START_SAVE_CATEGORY});
    axios.defaults.headers.common['Authorization']  = "Bearer " + localStorage["token"];
    axios.post(`${ROOT_URL}/weapon/addcategory`, category)
      .then(response => {
        console.log(response.data)
        dispatch({type: SAVE_CATEGORY_SUCCESS, payload: response.data});
      })
      .catch(error =>  {
        console.log(error);
        dispatch({type:  SAVE_CATEGORY_FAIL, payload: error.response.data});
      })
  }
}

export function addWeapon(weapon) {
  return function (dispatch) {
    dispatch({type: START_SAVE_WEAPON});
    axios.defaults.headers.common['Authorization']  = "Bearer " + localStorage["token"];
    axios.post(`${ROOT_URL}/weapon`, weapon)
      .then(response => {
        console.log(response.data)
        dispatch({type: SAVE_WEAPON_SUCCESS, payload: response.data});
      })
      .catch(error =>  {
        console.log(error);
        dispatch({type:  SAVE_WEAPON_FAIL, payload: error.response.data});
      })
  }
}
