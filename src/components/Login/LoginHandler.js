import React, { Component } from 'react'
import UserForm from '../Registration/UserForm';
import LoginScreen from './LoginScreen';

export class LoginHandler extends Component {
    state = {
        step : 1
    }

    login = () => {
        this.setState({
            step: 2
        });
    }
    register = () => {
        this.setState({
            step: 3
        });
    }
    render() {
        const {step} = this.state;
        switch (step) {
            case 1:
                return (
                 <LoginScreen
                   login={this.login}
                   register={this.register}
                />   
                )
            case 2:
                return (
                    <h1>User Is Logged In</h1>
                       
                )
            case 3: 
                return (
                    <UserForm/>
                    )
            default: 
        }
    }   
}

export default LoginHandler
