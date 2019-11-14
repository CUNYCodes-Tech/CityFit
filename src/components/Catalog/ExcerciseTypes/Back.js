import React, { Component } from 'react'
import WorkTemp from './workout_template';
import invertedrows from '../exercise_imgs/Back/invertedrows.jpg';
import latpull from '../exercise_imgs/Back/latpull.gif';
//import row from '../exercise_imgs/Back/row.jpg';
import pullup from '../exercise_imgs/Back/pullup.jpg';
import swing from '../exercise_imgs/Back/swing.jpg';
import walk from '../exercise_imgs/Back/walk.jpg';
import dlift from '../exercise_imgs/Back/deadlift.jpg';
import { Modal } from '@material-ui/core';
import firebase from '../../../base';
import '../catalog.css';

export default class Back extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            exerciseData : {},
            Exercise_Name: 'None',
            workouts: {
                barbell_deadlift: {
                    img: dlift,
                    desc: ''
                },
                kettlebell_swing: {
                    img: swing,
                    desc: ''
                },
                pull_ups: {
                    img: pullup,
                    desc: ''
                },
                inverted_row: {
                    img: invertedrows,
                    desc: ''
                },
                lat_pulldowns: {
                    img: latpull,
                    desc: ''
                },
                farmers_walk: {
                    img: walk,
                    desc: ''
                }
            }
        }
    }

    getExInfo = (name) => {
        //console.log(name)
        const ExData = firebase.database().ref('Exercises/Back/' + name );
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
                <WorkTemp prevProp={this.props.prevProp} workouts={this.state.workouts} workoutGroup='Back Exercise' getExInfo={this.getExInfo} />

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
