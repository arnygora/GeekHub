import React, { Component } from 'react';

class AuthorizationPage extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.textInput);
    };
    render() {
        return (
           <div className="wrapper">
               <div className="registerForm">
                   <div className="header">
                       <div className="logo"></div>
                       <div className="loginLinks">
                           <a href="#0">Register</a>
                           <a href="#0">Login</a>
                       </div>
                   </div>
                   <div className="wrapForm">
                       <form onSubmit={this.handleSubmit}>
                           <p>Welcome <span className="colorWord">back!</span></p>
                           <span className="far fa-user fa-2x">
                               <input data-user type="text" placeholder="Username" ref={(input) => this.textInput = input}/>
                           </span>
                           <span className="fas fa-lock fa-2x">
                               <input data-pass type="password" maxLength="12" placeholder="Password" />
                           </span>
                           <button >Enter</button>
                       </form>
                   </div>
               </div>
           </div>
        );
    }
}

export default AuthorizationPage;