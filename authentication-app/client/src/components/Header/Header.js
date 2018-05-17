import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
  
  renderLinks() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      return (
        <li className="nav-item">
          <Link to="/signout">Sign out</Link>
        </li>);
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ]
    }
  }
  
  render() {
    return (
      <header>
        <Link to="/" className="navbar-brand">Redux Auth</Link>
        <ul className="nav">
          {this.renderLinks()}
        </ul>
      </header>
    )
  }
}