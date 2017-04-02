import React, { Component } from 'react';

import KillTeam from './KillTeam'
import './Dashboard.css'

class Dashboard extends Component {

  renderPrometheumCache() {
    return (
      <div className="pull-right">
        <i className="ra ra-radioactive ra-4x"></i>
        <span className="cache-number">12</span>
      </div>
    )
  }

  renderDashboardInfo() {
    return (
      <div className="pull-left">
        <i className="ra ra-radioactive ra-4x"></i>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderPrometheumCache()}
        <KillTeam />
      </div>
    );
  }
}

export default Dashboard;