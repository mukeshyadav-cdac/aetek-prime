import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../../actions/admin/weapon';

import './AddWeapon.css'

function validate(values) {
  const errors = {};
  if (!values.ancestors || values.ancestors.trim() === '') {
    errors.ancestors = 'Select a Category';
  }

  return errors;
}



class AddWeapon extends Component {

  handleFormSubmit(values) {
    this.props.addWeapon(values)
  }

  addCategory() {
    this.props.addCategory({name: this.input.value})
  }

  componentDidMount() {
    this.props.getCategories();
  }

  renderSelect(field) {
    return(
      <div className={`form-group ${field.meta.error ? 'has-error' : ''}`}>
        <select {...field.input} className="form-control">
          {field.children}
        </select>
        {field.meta.error && <div>* {field.meta.error}</div>}
      </div>
    )
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

          <div className='row'>
            <div className="col-xs-6">
              <div className="form-group">
                <label htmlFor="ancestors">Category: </label>
                <Field className="form-control" name="ancestors" component={this.renderSelect}>
                  <option></option>
                  { this.props.categories && this.props.categories.map((category, i) => {
                    return(
                      <option key={i} value={category._id}>{category.name}</option>
                    )
                  }) }
                </Field>
              </div>
            </div>

            <div className="col-xs-3">
              <div className="form-group">
                <label htmlFor="category"> Add New Category: </label>
                <input type="text" ref={(input) => this.input = input } name="category" className="form-control"/>
              </div>
            </div>
            <div className="col-xs-3">
              <div className="form-group">
                <input type="button" value="Add Category" className="btn btn-primary" onClick={this.addCategory.bind(this)}/>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="cost">Cost: </label>
            <Field className="form-control" name="cost" component="input" type="number" />
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

AddWeapon = reduxForm({
  form: 'addweapon',
  validate
})(AddWeapon)

const mapStateToProps = state => {
  return {
    categories: state.weapon.categories,
    errorMessage: state.weapon.error
  }
}

export default connect(mapStateToProps, actions)(AddWeapon)
