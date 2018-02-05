import React, { Component } from 'react';

class AuthorizationPage extends Component {
    render() {
        return (
           <div className="wrapper">
               <div className="registerForm">
                   <div className="header">
                       <div className="logo"></div>
                       <div className="loginLinks">
                           <a href="">Register</a>
                           <a href="">Login</a>
                       </div>
                   </div>
                   <div className="wrapForm">
                       <form method="get" action="/">
                           <p>Welcome <span className="colorWord">back!</span></p>
                           <span className="far fa-user fa-2x"><input data-user type="text" placeholder="Username" /></span>
                           <span className="fas fa-lock fa-2x"><input data-pass type="password" maxLength="12" placeholder="Password" /></span>
                           <button type="submit">Enter</button>
                       </form>
                   </div>
               </div>
           </div>
        );
    }
}

export default AuthorizationPage;