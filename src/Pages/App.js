import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
         <NavLink to="/homePage">About</NavLink>
      
      </div>
    );
  }
}

export default App;
