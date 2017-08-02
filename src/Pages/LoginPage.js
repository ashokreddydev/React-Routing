import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MainPage from './MainPage'
import './Login.css'


class LoginPage extends Component {
  render() {
    return (
     <MainPage>


      <div className="container">
            <div className="col-md-offset-5 col-md-3">
            <div className="form-login">
            <h4>Welcome back.</h4>
            <input type="text" id="userName" className="form-control input-sm chat-input" placeholder="username" />
            <br />
            <input type="text" id="userPassword" className="form-control input-sm chat-input" placeholder="password" />
            <br />
            <div className="wrapper">
            <span className="group-btn">     
                <a href="#" className="btn btn-primary btn-md">login <i className="fa fa-sign-in"></i></a>
            </span>
            </div>
            </div>
        
        </div>
</div>
      
      </MainPage>
    );
  }
}

export default LoginPage;
