import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions/admin/admin'

import './AddFighter.css'

class AddFighter extends Component {

  handleFormSubmit(values) {
    this.props.addFighter(values)
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
            <label htmlFor="faction">Role: </label>
            <Field className="form-control" name="role" component="select">
              <option></option>
              <option value="leader">Leader</option>
              <option value="trooper">Trooper</option>
              <option value="recruit">Recruit</option>
              <option value="specialist">Specialist</option>
              <option value="specops">Spec Ops</option>
            </Field>
          </div>

          <div className="form-group">
            <label htmlFor="cost">Cost: </label>
            <Field className="form-control" name="cost" component="input" type="number" />
          </div>

          <div className="form-group">
            <label htmlFor="faction">Faction: </label>
            <Field className="form-control" name="faction" component="select">
              <option></option>
              <option value="Skitarii">Skitarii</option>
              <option value="Necrons">Necrons</option>
            </Field>
          </div>

          <div className='row'>
            <div className="col-xs-4">
              <label htmlFor="m">m: </label>
              <Field className="form-control" name="m" component="input" type="number" />
            </div>

            <div className="col-xs-4">
              <label htmlFor="ws">ws: </label>
              <Field className="form-control" name="ws" component="input" type="number" />
            </div>

            <div className="col-xs-4">
              <label htmlFor="bs">bs: </label>
              <Field className="form-control" name="bs" component="input" type="number" />
            </div>


          </div>

          <div className='row'>
            <div className="col-xs-4">
              <label htmlFor="s">s: </label>
              <Field className="form-control" name="s" component="input" type="number" />
            </div>

            <div className="col-xs-4">
              <label htmlFor="t">t: </label>
              <Field className="form-control" name="t" component="input" type="number" />
            </div>

            <div className="col-xs-4">
              <label htmlFor="w">w: </label>
              <Field className="form-control" name="w" component="input" type="number" />
            </div>


          </div>

          <div className='row'>
            <div className="col-xs-4">
              <label htmlFor="i">i: </label>
              <Field className="form-control" name="i" component="input" type="number" />
            </div>

            <div className="col-xs-4">
              <label htmlFor="a">a: </label>
              <Field className="form-control" name="a" component="input" type="number" />
            </div>

            <div className="col-xs-4">
              <label htmlFor="ld">ld: </label>
              <Field className="form-control" name="ld" component="input" type="number" />
            </div>


          </div>
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

AddFighter = reduxForm({
  form: 'addfighter'
})(AddFighter)


export default connect(null, actions)(AddFighter)
