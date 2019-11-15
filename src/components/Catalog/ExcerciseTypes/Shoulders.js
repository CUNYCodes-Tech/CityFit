import React, { Component } from 'react'
import WorkTemp from './workout_template';
import arnold from '../exercise_imgs/Shoulder/arnold.jpg';
import fraise from '../exercise_imgs/Shoulder/frontraise.jpg';
import inclinerow from '../exercise_imgs/Shoulder/inclinerow.jpg';
import lraise from '../exercise_imgs/Shoulder/lateralraise.jpg';
import opress from '../exercise_imgs/Shoulder/overheadpress.jpg';
import pushpress from '../exercise_imgs/Shoulder/pushpress.jpg';
import uprightrow from '../exercise_imgs/Shoulder/uprightrow.jpg';
import { Modal } from '@material-ui/core';
import firebase from '../../../base';
import '../catalog.css';


export default class Shoulders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            exerciseData : {},
            Exercise_Name: 'None',
            workouts: {
                upright_row: {
                    img: uprightrow,
                    desc: ''
                },
                front_raise: {
                    img: fraise,
                    desc: ''
                },
                barbell_push_press: {
                    img: pushpress,
                    desc: ''
                },
                dumbbell_incline_row: {
                    img: inclinerow,
                    desc: ''
                },
                seated_overhead_dumbbell_press: {
                    img: opress,
                    desc: ''
                },
                arnold_press: {
                    img: arnold,
                    desc: ''
                },
                dumbbell_lateral_raise: {
                    img: lraise,
                    desc: ''
                },
            }
        }
    }
    
    getExInfo = (name) => {
        //console.log(name)
        const ExData = firebase.database().ref('Exercises/Shoulders/' + name );
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
                <WorkTemp prevProp={this.props.prevProp} workouts={this.state.workouts} workoutGroup='Shoulder Exercise' getExInfo={this.getExInfo} />  

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
