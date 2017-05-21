import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/admin/faction';

class Factions extends Component {

  componentDidMount() {
    this.props.getFactions();
  }

  render() {
    return (
      <div>
        <h1>Factions</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Special Rules</th>
              <th>Minimum</th>
              <th>Maximum</th>
              <th>Specialists</th>
              <th>Total Point</th>
            </tr>
          </thead>
          <tbody>
            { this.props.factions && this.props.factions.map((faction, i) => {
              return(
                <tr key={i}>
                  <td>{faction.name}</td>
                  <td>{faction.special_rules}</td>
                  <td>{faction.minimum_team_size}</td>
                  <td>{faction.maximum_team_size}</td>
                  <td>{faction.number_of_specialists}</td>
                  <td>{faction.total_point}</td>
                </tr>
              )
            }) }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    factions: state.faction.factions
  }
}

export default connect(mapStateToProps, actions)(Factions)

