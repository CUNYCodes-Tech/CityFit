import React, { useCallback, useContext } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={handleLogin}>
      <MuiThemeProvider>
        <React.Fragment>
          <h2>Enter Your Login Credentials</h2>
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
            style={styles.button}
            type="submit"
            variant='contained'
          >
            Login
          </Button>
        </React.Fragment>
        <Button
          color='primary'
          style={styles.button}
          type="submit"
          variant='contained'
        >
          <Link to='/signup' style={{textDecoration: 'none', color: 'white'}}>Sign Up</Link>
        </Button>
      </MuiThemeProvider>
    </form>
  );
};

const styles = {
  button: {
      margin: 15
  }

}

export default withRouter(Login);
