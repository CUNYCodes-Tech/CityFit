import React, { Component } from 'react';
import firebase from '../../base';
import './profile.css';

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

        return (
            <div>
                <img src='https://images.unsplash.com/photo-1569839078801-94107e43e884?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
                alt = 'User Profile' width='350' height='250'/>

                <h3 className='mainText'>{ user.firstName } { user.lastName } </h3>
                <h5 className='subText'>{ user.borough }</h5>

                <h3 className='mainText'>Some General Information About Me</h3>
                <h5 className='subText'>I am a { user.gender }</h5>  
                <h5 className='subText'>I am { user.height } tall</h5>
                <h5 className='subText'>I weigh { user.weight }lbs</h5>
                <h5 className='subText'>I consider myself to be { user.bodyType }</h5>
                <h5 className='subText'>My Goal is to { user.fitnessGoal }</h5>
            </div>
        )
    }
}
