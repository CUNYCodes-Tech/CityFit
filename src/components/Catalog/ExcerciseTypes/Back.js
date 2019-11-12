import React, { Component } from 'react'
import WorkTemp from './workout_template';
import invertedrows from '../exercise_imgs/Back/invertedrows.jpg';
import latpull from '../exercise_imgs/Back/latpull.gif';
//import row from '../exercise_imgs/Back/row.jpg';
import pullup from '../exercise_imgs/Back/pullup.jpg';
import swing from '../exercise_imgs/Back/swing.jpg';
import walk from '../exercise_imgs/Back/walk.jpg';
import dlift from '../exercise_imgs/Back/deadlift.jpg';

export default class Back extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

    render() {
        return (
            <WorkTemp prevProp={this.props.prevProp} workouts={this.state.workouts} workoutGroup='Back Exercise' />
        )
    }
}
