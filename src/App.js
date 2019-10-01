import React, { Component } from 'react';
//import {UserForm} from './components/Registration/UserForm';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from './Auth';
import './App.css';
import Home from "./Home";
import UserForm from "./components/Registration/UserForm";
import Profile from './components/Profile';
import Login from "./Login";
import SignUp from "./SignUp";
import PrivateRoute from "./PrivateRoute";
import { privateDecrypt } from 'crypto';

class App extends Component {
  //It Call Login
  render() {
    return (
      <AuthProvider>
        <Router>
          <div className="App">
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/userform" component={UserForm} />
            <PrivateRoute exact path='/profile' component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </div>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
