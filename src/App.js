import React, {Component} from 'react';
//import {UserForm} from './components/Registration/UserForm';
import LoginHandler  from './components/Login/LoginHandler';

import './App.css';

class App extends Component{ 
  //It Call Login
  render() {
    return (
      <div className="App">
        <LoginHandler/>
      </div>
  );
  }
}

export default App;
