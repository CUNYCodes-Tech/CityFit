import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import UserForm from './components/Registration/UserForm';
import Profile from './components/Profile/Profile';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './Login';
import SignUp from './SignUp';
import PrivateRoute from './PrivateRoute';
import Catalog from './components/Catalog/CatalogHome';
import Workouts from './components/Catalog/CatalogNavigator';
import GymLocation from './components/GymLocation/GymNavigator';
import Arms from './components/Catalog/ExcerciseTypes/Arms';
import Forum from './components/Forum/Forum';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <PrivateRoute exact path='/userform' component={UserForm} />
                    <PrivateRoute exact path='/profile' component={Profile} />
                    <Route exact path='/' component={LandingPage} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={SignUp} />
                    <Route exact path='/catalog' component={Catalog} />
                    <Route path='/catalog/:category' component={Workouts} />
                    {/* <Route path='/catalog/:category/:workout' component={Arms} />  */}
                    <Route exact path='/gym_location' component={GymLocation} />
                    <Route exact path='/forum' component={Forum}/> 
                </div>
            </Router>
        )
    }
}
