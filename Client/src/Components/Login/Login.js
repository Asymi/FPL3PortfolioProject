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

      const options = {
          headers: { "Content-Type": "application/json"},
          method: 'POST',
          body: JSON.stringify(userData)
      }

      fetch('http://localhost:3000/auth/login', options )
      .then(resp => resp.json())
      .then(data => {if(data.user_id) {this.props.history.push('/dashboard')}})
      .catch(err => console.log(err))
  }

  render() {
      return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label for="username">username</label>
                <input type="text" name="username" onChange={this.handleInput} required></input><br/>
              <label for="password">password</label>
                <input type="password" name="password" onChange={this.handleInput} required></input><br/>
                <input type="submit"></input>
              </form>
          </div>
      )
  }
}

export default Login
