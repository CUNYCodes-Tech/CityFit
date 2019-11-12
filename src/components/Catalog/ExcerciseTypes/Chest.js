import React, { Component } from 'react'
import WorkTemp from './workout_template';
import press from '../exercise_imgs/Chest/benchpress.jpg';
import cfly from '../exercise_imgs/Chest/cablefly.jpg';
import inclinepress from '../exercise_imgs/Chest/inclinepress.jpg';
import pullover from '../exercise_imgs/Chest/pullover.jpg';
import pushup from '../exercise_imgs/Chest/pushup.jpg';
import tricepdip from '../exercise_imgs/Chest/tricepdip.jpg';

export default class Chest extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
    render() {
        return (
            <WorkTemp prevProp={this.props.prevProp} workouts={this.state.workouts} workoutGroup='Chest Exercise' />
        )
    }
}
