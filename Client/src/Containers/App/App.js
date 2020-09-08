import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../../Components/Login/Login';
import Signup from '../../Components/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={ LandingPage } />
        <Route exact path='/dashboard' component={ Dashboard } />
        <Route path="/signup" component={ Signup }/>
        <Route path="/login" component={ Login }/>
      </Switch>
    </div>
  );
}

export default App;
