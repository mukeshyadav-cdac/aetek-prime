import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

// reducers
import authReducer from './auth_reducer'

const rootReducer = combineReducers({
  form,
  auth: authReducer
});

export default rootReducer;
