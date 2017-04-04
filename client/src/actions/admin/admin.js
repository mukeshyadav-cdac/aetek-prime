import axios from 'axios'
import { browserHistory } from 'react-router'
import { 
  ADD_FIGHTER
} from '../types'

const ROOT_URL = "http://localhost:8001/api"

export function addFighter(fighter) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/fighter`, fighter)
      .then(response => {
        console.log(response.data)
      })
  }
}