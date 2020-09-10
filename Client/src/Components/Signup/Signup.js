import React, { Component } from 'react'

export class Signup extends Component {
  state = {
    user: {}
  }

  handleInput = e => {
    let user = this.state.user;
    user[e.target.name] = e.target.value;
    this.setState({user})
  }

  handleSubmit = e => {
    e.preventDefault();
    const userData ={
      username: this.state.user.username,
      password: this.state.user.password
    }

    const options = {
      headers: {"Content-Type": "application/json"},
      method: "POST",
      body: JSON.stringify(userData)
    }

    fetch('http://localhost:3000/auth/signup', options)
    .then(resp => resp.json())
    .then(resp => {
      if(resp.status === 201) {this.props.history.push('/login')}
    })
    .catch(err => alert('Invalid Input'))
  }
    render() {
        return (
          <div>
            <h1>Sign Up</h1>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="username">Username</label>
                <input type="text" name="username" onChange={this.handleInput} required></input><br/>
              <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={this.handleInput} required></input><br/>
                <input type="submit" value="Sign Up"></input>
              </form>
              <ul>
                <li>Password must contain at least 6 characters</li>
              </ul>
          </div>
        )
    }
}

export default Signup
