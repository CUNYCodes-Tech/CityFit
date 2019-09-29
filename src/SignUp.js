import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/userProfile");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <form onSubmit={handleSignUp}>
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Your Information" />
          <TextField
            name="email"
            hintText="Enter Your Email"
            floatingLabelText="Email"
            
          />
          <br />
          <TextField
            name="password"
            type="password"
            hintText="Enter Your Password"
            floatingLabelText="Password"
            
          />
          <br />
          <RaisedButton
            label="Sign Up"
            primary={true}
            style={styles.button}
            type="submit"
          />
        </React.Fragment>
      </MuiThemeProvider>
    </form>

  );
};

const styles = {
  button: {
      margin: 15
  }

}

export default withRouter(SignUp);
