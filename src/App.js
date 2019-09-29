import React, {Component} from 'react';
//import {UserForm} from './components/Registration/UserForm';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from './Auth';
import './App.css';
import LoginHandler  from './components/Login/LoginHandler';
import LoginScreen from './components/Login/LoginScreen';
import UserForm from './components/Registration/UserForm';

class App extends Component{ 
  //It Call Login
  render() {
    return (
      <AuthProvider>
        <Router>
          <div className="App">
            <Route exact path = "/" Component={LoginHandler} />
            <Route exact path = "/login" Component={LoginScreen} />
            <Route exact path = "/signup" Component={UserForm} />
          </div>
        </Router>
      </AuthProvider>
  );
  }
}

export default App;
