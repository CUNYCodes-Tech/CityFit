import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



export class LoginScreen extends Component {
    loginUser = e => {
        e.preventDefault();
        this.props.login();
        
    }
    registerUser = e => {
        e.preventDefault();
        this.props.register();

        
    }
    
   
    render() {
        return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter Login Information"/>
                <TextField 
                  hintText= "Enter Your Email"
                  floatingLabelText="Email"
                  
                 
                />
            <br/>
            <TextField 
                  hintText= "Enter Your Password"
                  floatingLabelText="Password"
                  
                  
                />
            <br/>
            <RaisedButton
                    label="Login"
                    primary={true}
                    style={styles.button}
                    onClick={this.loginUser}
                />
            <RaisedButton
                    label="Register"
                    primary={true}
                    style={styles.button}
                    onClick={this.registerUser}
            />
             </React.Fragment>
        </MuiThemeProvider>
            

            
           );
           
    }
}

const styles = {
    button: {
        margin: 15
    }

}

export default LoginScreen
