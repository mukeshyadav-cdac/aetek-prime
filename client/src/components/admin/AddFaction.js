import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../../actions/admin/faction';


class AddFaction extends Component {

  handleFormSubmit(values) {
    this.props.addFaction(values)
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

  renderForm() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <Field className="form-control" name="name" component="input" type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="special_rules">Special Rules: </label>
            <Field className="form-control" name="special_rules" component="input" type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="minimum_team_size">Minimum Size: </label>
            <Field className="form-control" name="minimum_team_size" component="input" type="number" />
          </div>

          <div className="form-group">
            <label htmlFor="maximum_team_size">Maximum Size: </label>
            <Field className="form-control" name="maximum_team_size" component="input" type="number" />
          </div>

          <div className="form-group">
            <label htmlFor="number_of_specialists">No Of Specialists: </label>
            <Field className="form-control" name="number_of_specialists" component="input" type="number" />
          </div>

          <div className="form-group">
            <label htmlFor="total_point">Total Point </label>
            <Field className="form-control" name="total_point" component="input" type="number" />
          </div>

          {this.renderAlert()}
          <div className="form-group"><br />
            <button type="submit" className="btn btn-primary form-control">Submit</button>
          </div>

        </form>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderForm()}
      </div>
    );
  }
}

AddFaction = reduxForm({
  form: 'addfaction'
})(AddFaction)

const mapStateToProps = state => {
  return {
    errorMessage: state.faction.error
  }
}

export default connect(mapStateToProps, actions)(AddFaction)

