import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'
import { AUTH_USER, ADMIN_USER } from './actions/types'
import decode from 'jwt-decode'
import './index.scss'


// Components

// Admin
import Admin from './components/admin/Admin'
import AddFighter from './components/admin/AddFighter'

import AddWeapon from './components/admin/AddWeapon'
import ShowFaction from './components/admin/ShowFaction'
import AddFaction from './components/admin/AddFaction'
import Factions from './components/admin/Factions'

// Common
import App from './components/common/App'
import Welcome from './components/common/Welcome'
import Header from './components/common/Header'

// Campaign
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
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={App}/>
          <Route path='/signin' component={SignIn} />
          <Route path='/signout' component={SignOut} />
          <Route path='/register' component={SignUp} />
          <Route path='/map' component={Map} />
          <Route path='/dashboard' component={RequireAuth(Dashboard)} />
          <Route exact path='/admin' component={RequireAdmin(Admin)} />

          <Route exact path='/admin/factions' component={RequireAdmin(Factions)} />
          <Route exact path='/admin/factions/:id' component={RequireAdmin(ShowFaction)} />
          <Route exact path='/admin/factions/:id/edit' component={RequireAdmin(AddFaction)} />
          <Route  path='/admin/addFaction' component={RequireAdmin(AddFaction)} />
          <Route  path='/admin/addfighter' component={RequireAdmin(AddFighter)} />
          <Route  path='/admin/addWeapon' component={RequireAdmin(AddWeapon)} />
          <Router path='*' component={Welcome} />
        </div>
      </Router>
  </Provider>
  , document.querySelector('#root'))
