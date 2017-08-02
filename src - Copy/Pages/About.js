import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
      <NavLink to="/">App</NavLink>
      </div>
    );
  }
}

export default About;
