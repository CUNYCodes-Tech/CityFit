import React, { Component } from 'react';
import { AuthProvider } from './Auth';
import Routes from './Routes';
// import Nav from './CustomNav';
import Login from './Login';
import firebase from './base';
import { Modal } from '@material-ui/core';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       open: false,
       loggedIn: false
    }
  }

  componentDidMount() {
    this.handleLoggingIn()
  }

  handleOpenModal = () => {
    this.setState({
        ...this.state,
        open: !this.state.open
    })
  }

  handleLoggingIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({
          ...this.state,
          open: false,
          loggedIn: true,
        })
      }
    })
  }

  handleSignOut = () => {
    firebase.auth().signOut();
    this.setState({
      ...this.state,
      loggedIn: false,
    })
  }

  render() {
    // No longer using CustomNav.js, moved the nav to app
    return (
      <AuthProvider>
        <Navbar bg='light' expand='lg' fixed="top">
          <Navbar.Brand href='/'>CityFit</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='mr-auto'>
                  <Nav.Link href='/'>Home</Nav.Link>
                  <Nav.Link href='/profile'>Profile</Nav.Link>
                  <Nav.Link href='/catalog'>Catalog</Nav.Link>
                  <Nav.Link href='/GymLocation'>Gym Locations</Nav.Link>
              </Nav>
              <Nav>
              {
                this.state.loggedIn ? 
                  <Nav.Link href='#' onClick={this.handleSignOut}>Sign Out</Nav.Link> 
                  : 
                  (
                    <>
                      <Nav.Link href='#' onClick={this.handleOpenModal}>Login</Nav.Link>
                      <Nav.Link href='/signup'>Sign Up</Nav.Link>
                    </>
                  )
              }
              </Nav>
          </Navbar.Collapse>  
        </Navbar>

        <Modal 
          open={this.state.open}
          onClose={this.handleOpenModal}
          onSubmit={this.handleLoggingIn}
          aria-labelledby='login-modal'
          aria-describedby='login-modal'
          id='loginModal'
        >
          <div>
            <Login handleModal={this.handleOpenModal} />
          </div>
        </Modal>

        <Routes />
      </AuthProvider>
    );
  }
}

export default App;
