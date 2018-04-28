import React, { Component } from 'react';
import './UserList.css';

export class UserList extends Component {
  
  componentWillMount() {
    this.props.fetchUsers();
  }
  
  renderUser(user, index) {
    return (
      <div key={index} className="card card-block">
        <h3 className="card-title">{user.name}</h3>
        <p className="card-text">Company May</p>
        <button className="btn btn-primary">Click</button>
      </div>
    )
  }
  
  render() {
    const { users } = this.props;
    return (
      <ul className="user-list">
        {users.map(this.renderUser)}
      </ul>
    )
  }
}