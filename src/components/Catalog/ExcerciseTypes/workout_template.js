import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class WorkTemp extends Component {
    render() {
        console.log(this.props.prevProp.location.pathname)
        return (
            <>
                <h1 style={{marginTop: '3%'}}>{this.props.workoutGroup}</h1>
                <div className='centerFlex'>
                    {
                        Object.keys(this.props.workouts).map((name, i) => {
                            let dispName = name.split('_')
                            
                            dispName.map((val, i) => {
                                dispName[i] = dispName[i].charAt(0).toUpperCase() + dispName[i].slice(1)
                                return true
                            })

                            dispName = dispName.join(' ')

                            return (
                                <Card style={{ width: '18rem', margin: '15px' }} key={name + i}>
                                    <Card.Img variant="top" src={this.props.workouts[name].img} style={{ height: '15rem' }}/>
                                    <Card.Body>
                                        <Card.Title>{dispName}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => this.props.getExInfo(name)}>Show More</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </div>

                <button
                    variant ='contained'
                    color = 'primary'
                    onClick = {() => this.props.prevProp.history.goBack()}
                > 
                    Return to Catalog
                </button>
                
            </>
        )
    }
}