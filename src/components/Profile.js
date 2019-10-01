import React, { Component } from 'react'

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
        // call api to retrieve user info
    }

    render() {
        let user = this.state.user
        return (
            <div>
                <img src='https://images.unsplash.com/photo-1569839078801-94107e43e884?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
                alt = 'User Profile' width='400' height='300'/>
                <h3>Name {/* user.firstName + user.lastName */}</h3>
                <h3>Gender {/* user.gender */}</h3>
                <h3>Height {/* user.height */}</h3>
                <h3>Weight {/* user.weight */}</h3>
                <h3>Body Type {/* user.bodyType */}</h3>
                <h3>Fitness Goal {/* user.fitnessGoal */}</h3>
                <h3>Borough {/* user.borough*/}</h3>
            </div>
        )
    }
}
