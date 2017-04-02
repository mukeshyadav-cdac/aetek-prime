import React, { Component } from 'react';

import './KillTeam.css'
import '../../../node_modules/rpg-awesome/css/rpg-awesome.min.css'

class KillTeam extends Component {

  renderModel() {
    return [ 
      <tr key="1">
        <td className="shrink" data-label="Leader"><i className="ra ra-aura"></i></td>
        <td data-label="Name">Colvus</td>
        <td data-label="Equipment">Bolt Pistol, Grandes, Telekinetic Scope</td>
        <td data-label="Stats">{this.renderStats1()}</td>
        <td data-label="Stats">{this.renderStats2()}</td>
      </tr>,
      <tr key="2">
        <td className="shrink" data-label="Trooper"><i className="ra ra-double-team"></i></td>
        <td data-label="Name">Guyhomie</td>
        <td data-label="Equipment">Bolt Pistol, Grandes, Power Armor</td>
        <td data-label="Stats">{this.renderStats1()}</td>
        <td data-label="Stats">{this.renderStats2()}</td>
      </tr>,
      <tr key="3">
        <td className="shrink" data-label="Trooper"><i className="ra ra-double-team"></i></td>
        <td data-label="Name">Bud</td>
        <td data-label="Equipment">Power Sword, Grandes, Things</td>
        <td data-label="Stats">{this.renderStats1()}</td>
        <td data-label="Stats">{this.renderStats2()}</td>
      </tr>,
      <tr key="4">
        <td className="shrink" data-label="Specialist"><i className="ra ra-aware"></i></td>
        <td data-label="Name">Roger</td>
        <td data-label="Equipment">Two Big Ass Swords</td>
        <td data-label="Stats">{this.renderStats1()}</td>
        <td data-label="Stats">{this.renderStats2()}</td>
      </tr>,
      <tr key="5">
        <td className="shrink" data-label="Recruit"><i className="ra ra-player"></i></td>
        <td data-label="Name">Roger</td>
        <td data-label="Equipment">Two Big Ass Swords</td>
        <td data-label="Stats">{this.renderStats1()}</td>
        <td data-label="Stats">{this.renderStats2()}</td>
      </tr>,
      <tr key="6">
        <td className="shrink" data-label="Spec Ops"><i className="ra ra-player-teleport"></i></td>
        <td data-label="Name">TuffSTuff</td>
        <td data-label="Equipment">Lunch Box, Cheese</td>
        <td data-label="Stats">{this.renderStats1()}</td>
        <td data-label="Stats">{this.renderStats2()}</td>
      </tr>
    ]
  }

  renderStats1() {
    return [
      <span key="m"><span>M:</span><span className="stat-value">4 &nbsp;</span></span>,
      <span key="ws"><span>WS:</span><span className="stat-value">4 &nbsp;</span></span>,
      <span key="bs"><span>BS:</span><span className="stat-value">4 &nbsp;</span></span>,
      <span key="s"><span>S:</span><span className="stat-value">4 &nbsp;</span></span>,
      <span key="t"><span>T:</span><span className="stat-value">4 &nbsp;</span></span>
    ]
  }

  renderStats2() {
    return [
      <span key="w"><span>W:</span><span className="stat-value">4 &nbsp;</span></span>,
      <span key="i"><span>I:</span><span className="stat-value">4 &nbsp;</span></span>,
      <span key="a"><span>A:</span><span className="stat-value">4 &nbsp;</span></span>,
      <span key="ld"><span>LD:</span><span className="stat-value">4 &nbsp;</span></span>
    ]
  }

  renderTable() {
    return (
      <table>
      <thead>
    <tr>
      <th scope="col" className="shrink"></th>
      <th scope="col">Name</th>
      <th scope="col">Equipment</th>
      <th scope="col">Stats</th>
      <th scope="col">Stats</th>
    </tr>
  </thead>
  <tbody>
    {this.renderModel()}
  </tbody>
</table>
    )
  }

  renderLegend() {
    return (
      <div>
        <p className="legend">
          Leader<i className="ra ra-aura"></i>&nbsp;&nbsp;
          Trooper<i className="ra ra-double-team"></i>&nbsp;&nbsp;
          Specialist<i className="ra ra-aware"></i>&nbsp;&nbsp;
          Recruit<i className="ra ra-player"></i>&nbsp;&nbsp;
          Spec Ops<i className="ra ra-player-teleport"></i>&nbsp;&nbsp;
        </p>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderTable()}
      </div>
    );
  }
}

export default KillTeam;