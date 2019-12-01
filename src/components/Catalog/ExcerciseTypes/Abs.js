import React, { Component } from 'react';
import WorkTemp from './workout_template';
import { Modal } from '@material-ui/core';
import '../../../App.css';
import firebase from '../../../base';
import '../catalog.css'

export default class Abs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            exerciseData : {},
            Exercise_Name: 'None',
            workouts: {
                ab_wheel: {
                    img: wheelUrl,
                    desc: ''
                },
                flutter_kick: {
                    img: ropeUrl,
                    desc: ''
                },
                leg_raise: {
                    img: kickboxingURL,
                    desc: ''     
                },
                plank: {
                    img: plankUrl,
                    desc: ''
                },
                side_jackknife: {
                    img: jackUrl,
                    desc: ''     
                },
                sit_ups: {
                    img: situpUrl,
                    desc: ''
                },
               
            }
        }
    }

    getExInfo = (name) => {
        //console.log(name)
        const ExData = firebase.database().ref('Exercises/Abs/' + name );
        ExData.on('value', (snapshot) => {
            let data = snapshot.val()
            this.setState({
                exerciseData: {...data}
            }, this.handleModal())
        })
    }

    handleModal() {
        this.setState({
            ...this.state,
            open: !this.state.open
        })
    }

    render() {
        let exercisedata = this.state.exerciseData
        return (
            <>
                <div className='centerFlex'>
                    <WorkTemp prevProp={this.props.prevProp} workouts={this.state.workouts} workoutGroup='Ab Exercises' getExInfo={this.getExInfo} />

                    <Modal 
                        open={this.state.open}
                        onClose={() => this.handleModal()}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        className='modalContainer'
                    >
                        <div className='modalContent'>
                            <iframe title="Exercise Details" width="560" height="315" src={exercisedata.video} frameBorder="0" allowFullScreen></iframe>
                            <p>{exercisedata.description}</p>
                        </div>
                    </Modal>
                </div>
            </> 
        )
    }
}
