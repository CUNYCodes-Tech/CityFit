import React, { Component } from 'react'
import WorkTemp from './workout_template';
import craise from '../exercise_imgs/Legs/calfraise.jpg';
import dlift from '../exercise_imgs/Legs/deadlift.jpg';
import gham from '../exercise_imgs/Legs/gluteham.jpg';
import jsquat from '../exercise_imgs/Legs/jumpsquat.jpg';
import lunge from '../exercise_imgs/Legs/lunge.jpg';
import squat from '../exercise_imgs/Legs/squat.jpg';
import sup from '../exercise_imgs/Legs/stepup.jpg';

export default class Legs extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
    
    render() {
        return (
            <WorkTemp prevProp={this.props.prevProp} workouts={this.state.workouts} workoutGroup='Leg Exercise' />  
        )
    }
}
