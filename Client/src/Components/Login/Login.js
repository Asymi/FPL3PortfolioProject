import React, { Component } from 'react';

export class Login extends Component {
    state = {
        user: {}
    };
    
    
    handleInput = e => {
        let user = this.state.user;
        user[e.target.name] = e.target.value;
        this.setState({user});
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            username: this.state.user.username,
            password: this.state.user.password
        }

        fetch('http://localhost:3000/auth/login', {
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'no-cors',
            method: 'POST',
            body: JSON.stringify(userData)
        })
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                  <input type="text" name="username" onChange={this.handleInput}></input>
                  <input type="text" name="password" onChange={this.handleInput}></input>
                  <input type="submit"></input>
                </form>  
            </div>
        )
    }
}

export default Login
