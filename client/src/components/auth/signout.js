import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions/auth/authentication'

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser()
  }

  render() {
    return <div>Logged Out</div>
  }
}

export default connect(null, actions)(Signout)
