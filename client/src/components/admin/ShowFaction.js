import React, { Component } from 'react';
import  { connect } from 'react-redux';
import * as actions from '../../actions/admin/faction';

class ShowFaction extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getFaction(id)
  }

  render() {
    return (
      <div>
      {this.props.faction &&
        <div>
          <p>Name: {this.props.faction.name}</p>
          <p>Special Rules: {this.props.faction.special_rules}</p>
          <p>Available Fighters Name: {this.props.faction.available_fighters}</p>
          <p>Minimum Team Size: {this.props.faction.minimum_team_size}</p>
          <p>Maximum Team Size: {this.props.faction.maximum_team_size}</p>
          <p>Total Point: {this.props.faction.total_point}</p>
        </div>
      }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    faction: state.factionStore.faction,
    errorMessage: state.factionStore.error
  }
}

export default connect(mapStateToProps, actions)(ShowFaction);
