import React, { Component } from 'react';
import registerUser from '../../Actions/registerUser';
import { getHabits } from '../../Actions/actions';
import { connect } from 'react-redux';

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

        fetch('http://localhost:3000/auth/login', options)
        .then(resp => resp.json())
        .then(resp => {
            this.props.setUserId(resp.user_id)
            this.props.fetchHabits(resp.user_id)
            return resp})
        .then(data => {
            if(data.user_id){
                this.props.history.push('/dashboard')
            }
        })
        .catch(err => alert('Invalid Login'))
    }

    render() {
        return (
            <div>
              <h1>Log In</h1>
              <form onSubmit={this.handleSubmit}>

                <label for="username">Username</label>
                  <input type="text" name="username" onChange={this.handleInput}></input><br/>
                <label for="username">Password</label>
                  <input type="password" name="password" onChange={this.handleInput}></input><br/>

                  <input type="submit"></input>
                </form>
            </div>
        )
    }
}

const mDTP = dispatch => ({
    setUserId: (userid) => dispatch(registerUser(userid)),
    fetchHabits: (userid) => dispatch(getHabits(userid))
})

export default connect(null, mDTP)(Login)
