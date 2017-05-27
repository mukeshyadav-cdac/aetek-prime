import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/admin/faction';
import FactionForm from './FactionForm.js';
import './Factions.css'

class AddFaction extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    if(id){
      this.props.getFaction(id)
    } else {
      this.props.newFaction();
    }
  }

  handleFormSubmit(values) {
    if(!values._id) {
      this.props.addFaction(values)
    } else {
      this.props.updateFaction(values)
    }
  }

  render() {
    return (
      <div>
        <FactionForm faction={this.props.faction} onSubmit={this.handleFormSubmit.bind(this)} />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    faction: state.factionStore.faction,
    errorMessage: state.factionStore.error
  }
}

export default connect(mapStateToProps, actions)(AddFaction)

