import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function(ComposedComponent) {
  class isAdmin extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.admin) {
        this.context.router.push('/')
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.admin) {
        this.context.router.push('/')
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { admin: state.auth.admin }
  }

  return connect(mapStateToProps)(isAdmin)
}