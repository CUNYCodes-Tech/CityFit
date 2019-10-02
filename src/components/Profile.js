import React, { Component } from 'react';
import firebase from '../base';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        this.getUserInfo()
    }

    getUserInfo = () => {
        var user = firebase.auth().currentUser;
        if (user) {
            // User is signed in.
            const userData = firebase.database().ref('UserProfile/' + user.uid);
            userData.on('value', (snapshot) => {
                let data = snapshot.val()
                this.setState({
                    user: {...data}
                })

            })
        } else {
            // No user is signed in.
            // handled by privateRoute
        }
    }

    render() {
        let user = this.state.user
        console.log('state, ', this.state.user)
        return (
            <div>
                <img src='https://images.unsplash.com/photo-1569839078801-94107e43e884?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
                alt = 'User Profile' width='400' height='300'/>
                <h3>Name: { user.firstName } { user.lastName }</h3>
                <h3>Gender: { user.gender }</h3>
                <h3>Height: { user.height }</h3>
                <h3>Weight: { user.weight }</h3>
                <h3>Body Type: { user.bodyType }</h3>
                <h3>Fitness Goal: { user.fitnessGoal }</h3>
                <h3>Borough: { user.borough }</h3>
            </div>
        )
    }
}
