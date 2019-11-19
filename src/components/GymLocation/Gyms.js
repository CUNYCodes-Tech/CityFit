import React, { Component } from 'react'
import axios from 'axios';

export default class Gyms extends Component {
    findGym = () => {
        let locationSearched = "New York City"

        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?`, {
                headers: {
                    Authorization: 'Bearer ' + process.env.REACT_APP_YELP_API_KEY
                },
                params: {
                    location: locationSearched,
                    term: 'Gyms',
                }
            })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        
        return (
            <div>
                <button onClick={this.findGym}>Find</button>
            </div>
        )
    }
}
