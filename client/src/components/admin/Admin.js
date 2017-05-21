import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Admin extends Component {
  render() {
    return (
      <div>
        Admin
        <div>
          <Link to="/admin/addfighter">Add New Fighter To A Faction List</Link>
          <br/>
          <Link to="/admin/addweapon">Add New Weapon</Link>
          <br/>
          <Link to="/admin/addfaction">Add New Faction</Link>
        </div>
      </div>
    );
  }
}

export default Admin;
