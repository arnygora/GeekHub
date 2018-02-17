import React, { Component } from 'react';

class AuthorizationPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }
    loginFunc(login, pass) {
        fetch('/api/user', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify({login: login, pass: pass})
        })
            .then(res => {
                return res.json()
            })
            .then(res => {
                console.log(res);
                localStorage.setItem('check', true);
                this.setState({
                    loading: false,
                    check: res.check,
                })
            });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('user- ', this.state.username, 'pass- ', this.state.password);
        localStorage.setItem("user", JSON.stringify(this.state.username));
        this.loginFunc(this.state.username, this.state.password);
    };
    handleChange = (e) => {
        let name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
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
                               <input name='username' value={this.state.username} onChange={this.handleChange} type="text" placeholder="Username" required />
                           </span>
                            <span className="fas fa-lock fa-2x">
                               <input name='password' value={this.state.password} onChange={this.handleChange} type="password" placeholder="Password" maxLength="12" required />
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