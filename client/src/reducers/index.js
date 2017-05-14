import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

// reducers
import authReducer from './auth_reducer'
import weaponReducer from './weapon'

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  weapon: weaponReducer
});

export default rootReducer;
