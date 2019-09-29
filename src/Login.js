import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
          <AppBar title="Enter Login Information" />
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
            label="Login"
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

export default withRouter(Login);
