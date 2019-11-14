import React, { Component } from 'react'
import WorkTemp from './workout_template';
import press from '../exercise_imgs/Chest/benchpress.jpg';
import cfly from '../exercise_imgs/Chest/cablefly.jpg';
import inclinepress from '../exercise_imgs/Chest/inclinepress.jpg';
import pullover from '../exercise_imgs/Chest/pullover.jpg';
import pushup from '../exercise_imgs/Chest/pushup.jpg';
import tricepdip from '../exercise_imgs/Chest/tricepdip.jpg';
import { Modal } from '@material-ui/core';
import firebase from '../../../base';
import '../catalog.css';

export default class Chest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            exerciseData : {},
            Exercise_Name: 'None',
            workouts: {
                push_ups: {
                    img: pushup,
                    desc: ''
                },
                barbell_bench_press: {
                    img: press,
                    desc: ''
                },
                pullover: {
                    img: pullover,
                    desc: ''
                },
                dips: {
                    img: tricepdip,
                    desc: ''
                },
                cable_fly: {
                    img: cfly,
                    desc: ''
                },
                incline_dumbbell_press: {
                    img: inclinepress,
                    desc: ''
                },
            }
        }
    }

    getExInfo = (name) => {
        //console.log(name)
        const ExData = firebase.database().ref('Exercises/Chest/' + name );
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
                <WorkTemp prevProp={this.props.prevProp} workouts={this.state.workouts} workoutGroup='Chest Exercise' getExInfo={this.getExInfo} />

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
