import React, { Component } from 'react'
import WorkTemp from './workout_template';
import arnold from '../exercise_imgs/Shoulder/arnold.jpg';
import fraise from '../exercise_imgs/Shoulder/frontraise.jpg';
import inclinerow from '../exercise_imgs/Shoulder/inclinerow.jpg';
import lraise from '../exercise_imgs/Shoulder/lateralraise.jpg';
import opress from '../exercise_imgs/Shoulder/overheadpress.jpg';
import pushpress from '../exercise_imgs/Shoulder/pushpress.jpg';
import uprightrow from '../exercise_imgs/Shoulder/uprightrow.jpg';



export default class Shoulders extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
    
    render() {
        return (
            <WorkTemp prevProp={this.props.prevProp} workouts={this.state.workouts} workoutGroup='Shoulder Exercise' />  
        )
    }
}
