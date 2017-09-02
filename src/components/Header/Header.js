import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} className="header-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    );
  }
}

export default Header;
