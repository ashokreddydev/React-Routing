import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class MenuBar extends Component {
    render() {
        return (
            <div  >

                
              
<nav className="navbar navbar-default" role="navigation">

  <div className="navbar-header">
    <a className="navbar-brand" href="#">Brand</a>
  </div>

 
  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul className="nav navbar-nav">
      <li><NavLink to="/" >Register</NavLink></li>
      <li><NavLink to="/LoginPage">Login</NavLink></li>
  
    </ul>
    <div className="col-sm-3 col-md-3">
          </div>

  </div>
</nav>
            </div>
        );
    }
}
export default MenuBar;