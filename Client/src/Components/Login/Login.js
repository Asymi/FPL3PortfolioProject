import React, { Component } from 'react';
import registerUser from '../../Actions/registerUser';
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
            return resp})
        .then(data => {
            if(data.user_id){
                this.props.history.push('/dashboard')
            }
        })
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

const mDTP = dispatch => ({
    setUserId: (userid) => dispatch(registerUser(userid))
})

export default connect(null, mDTP)(Login)
