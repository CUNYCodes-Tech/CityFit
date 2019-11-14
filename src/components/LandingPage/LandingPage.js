import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import './landingPage.css';


export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }
    render() {
        return (
            <div>
               <Jumbotron fluid>
                    <h1 id='jumbotext1'>Anything Is Possible</h1>
                    <h1 id='jumbotext2'>Dream Big</h1>
                </Jumbotron>
                <div className='landingSection'>
                    <h1>Section 1</h1>
                    <h3>
                        Exercise Catalog Introduction
                    </h3>
                </div>
                <div className='landingSection'>
                    <h1>Section 2</h1>
                    <h3>
                        Fitness News Through RSS Feed
                    </h3> 
                </div>
                <div className='landingSection'>
                    <h1>Section 3</h1>
                    <h3>
                        Randomly Generated Forum Post
                    </h3> 
                </div>
            </div>
        )
    }
}
