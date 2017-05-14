import React, { Component } from 'react';
import { Link } from 'react-router';

class Admin extends Component {
  render() {
    return (
      <div>
        Admin
        <div>
          <Link to="/admin/addfighter">Add new fighter to a faction list</Link>
          <br/>
          <Link to="/admin/addweapon">Add new weapon</Link>
        </div>
      </div>
    );
  }
}

export default Admin;
