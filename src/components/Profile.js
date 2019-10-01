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
                <img src='https://unsplash.com/photos/Csi89ZJF13c' alt='User Profile Image' />
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
