import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';

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
          <h2>Please Enter An Email and A Password</h2>
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
          <Button
            color='primary'
            variant='contained'
            style={styles.button}
            type="submit"
          >
            Sign Up
          </Button>
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
