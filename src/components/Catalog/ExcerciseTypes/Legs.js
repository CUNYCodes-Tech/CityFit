import React, { Component } from 'react'
import WorkTemp from './workout_template';
import craise from '../exercise_imgs/Legs/calfraise.jpg';
import dlift from '../exercise_imgs/Legs/deadlift.jpg';
import gham from '../exercise_imgs/Legs/gluteham.jpg';
import jsquat from '../exercise_imgs/Legs/jumpsquat.jpg';
import lunge from '../exercise_imgs/Legs/lunge.jpg';
import squat from '../exercise_imgs/Legs/squat.jpg';
import sup from '../exercise_imgs/Legs/stepup.jpg';
import { Modal } from '@material-ui/core';
import firebase from '../../../base';
import '../catalog.css';

export default class Legs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            exerciseData : {},
            Exercise_Name: 'None',
            workouts: {
                barbell_squat: {
                    img: squat,
                    desc: ''
                },
                squat_jumps: {
                    img: jsquat,
                    desc: ''
                },
                walking_lunges: {
                    img: lunge,
                    desc: ''
                },
                glute_ham_raise: {
                    img: gham,
                    desc: ''
                },
                deadlifts: {
                    img: dlift,
                    desc: ''
                },
                step_ups: {
                    img: sup,
                    desc: ''
                },
                calf_raise: {
                    img: craise,
                    desc: ''
                },
            }
        }
    }
    
    getExInfo = (name) => {
        //console.log(name)
        const ExData = firebase.database().ref('Exercises/Legs/' + name );
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
                <WorkTemp prevProp={this.props.prevProp} workouts={this.state.workouts} workoutGroup='Leg Exercise' getExInfo={this.getExInfo} />  

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
            </>
        )
    }
}
