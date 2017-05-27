import axios from "axios";
import config from '../config'

export const client = axios.create({
  baseURL: config.base_url,
  headers: {
    'Authorization': "Bearer " + localStorage["token"],
  }
})
