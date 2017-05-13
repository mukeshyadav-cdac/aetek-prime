import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Header extends Component {

  renderAdminLinks() {
    if(this.props.admin) {
      return [
        <li className='nav-item' data-toggle="collapse" data-target="#navbar" key="admin">
            <Link className='nav-link' to="/admin" >Admin</Link>
          </li>
      ]
    }
  }

  renderLinks(){
    if(this.props.authenticated){
      return [
          <li className='nav-item' data-toggle="collapse" data-target="#navbar" key="signout">
            <Link className='nav-link' to="/signout" >Sign Out</Link>
          </li>,
          <li className='nav-item' data-toggle="collapse" data-target="#navbar" key="dashboard">
            <Link className='nav-link' to="/dashboard" >Dashboard</Link>
          </li>,
          <li className='nav-item' data-toggle="collapse" data-target="#navbar" key="map">
            <Link className='nav-link' to="/map" >Map</Link>
          </li>
      ]
    } else {
      return [

          <li className='nav-item' data-toggle="collapse" data-target="#navbar" key="signin">
            <Link className='nav-link' to="/signin" >Sign In</Link>
          </li>,
          <li className='nav-item' data-toggle="collapse" data-target="#navbar" key="register">
            <Link className='nav-link' to="/register" >Register</Link>
          </li>
      ]
    }
  }

  render(){
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">Aetek Prime</Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              {this.renderAdminLinks()}
              {this.renderLinks()}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state){
  return {authenticated: state.auth.authenticated, admin: state.auth.admin}
}

export default connect(mapStateToProps)(Header)
