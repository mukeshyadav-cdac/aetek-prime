import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

// reducers
import authReducer from './auth_reducer'
import weaponReducer from './weapon'
import factionReducer from './faction'

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  weapon: weaponReducer,
  factionStore: factionReducer
});

export default rootReducer;
