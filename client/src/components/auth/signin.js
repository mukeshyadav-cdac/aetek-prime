import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions/auth/authentication'


class SignIn extends Component {

   handleFormSubmit(values) {
    this.props.signinUser(values)
  }

  renderAlert(){
    if (this.props.errorMessage){
      return (
        <div className='alert alert-danger'>
          <strong> Oops! </strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render () {
    const { handleSubmit } = this.props;
    // this form is unvalidated and unsanitized. I decided to spend time on other parts of code
    // before doing validation. I'll be happy to send in validated examples
    return (
    <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      
      <div className="form-group">
        <label htmlFor="email">Email: </label>
        <Field className="form-control" name="email" component="input" type="text" />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password: </label>
        <Field className="form-control" name="password" component="input" type="password" />
      </div>
      {this.renderAlert()}
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    )
  }
}

function mapStateToProps(state){
  return {errorMessage: state.auth.error}
}

// new version of reduxForm requires separate connect statements. RIP
SignIn = reduxForm({
  form: 'signin'
})(SignIn)

export default connect(mapStateToProps, actions)(SignIn)