import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'
import { AUTH_USER, ADMIN_USER } from './actions/types'
import decode from 'jwt-decode'
import './index.css'


// Components 

// Common
import App from './components/common/App'
import Welcome from './components/common/Welcome'

// Campaign
import Admin from './components/campaign/Admin'
import Dashboard from './components/campaign/Dashboard'
import Map from './components/campaign/Map'

// Auth
import RequireAdmin from './components/auth/require_admin'
import RequireAuth from './components/auth/require_auth'
import SignIn from './components/auth/signin'
import SignOut from './components/auth/signout'
import SignUp from './components/auth/signup'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const token = localStorage.getItem('token')

// checks for JWT and logs user in automatically
if (token) {
  var role = decode(token).role
  if( role === 'admin' ) { store.dispatch({ type: ADMIN_USER }) }
  store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Welcome} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signout' component={SignOut} />
        <Route path='/register' component={SignUp} />
        <Route path='/map' component={Map} />
        <Route path='/dashboard' component={RequireAuth(Dashboard)} />
        <Route path='/admin' component={RequireAdmin(Admin)} />
        <Router path='*' component={Welcome} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#root'))