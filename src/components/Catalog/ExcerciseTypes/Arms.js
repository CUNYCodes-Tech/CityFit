import React, { Component } from 'react';
import WorkTemp from './workout_template';
import bicepcurls from '../exercise_imgs/Arms/bicepcurls.jpg';
import pullup from '../exercise_imgs/Arms/pullup.jpg';
import pushup from '../exercise_imgs/Arms/pushup.jpg';
import reversecurl from '../exercise_imgs/Arms/reversecurl.jpg';
import tricepextenstion from '../exercise_imgs/Arms/tricepextenstion.jpg';
import tricepkickback from '../exercise_imgs/Arms/tricepkickback.jpg';
import tricepdip from '../exercise_imgs/Arms/tricepdip.jpg';
import '../catalog.css'

export default class Arms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workouts: {
                bicep_curls: {
                    img: bicepcurls,
                    desc: ''
                },
                push_ups: {
                    img: pushup,
                    desc: ''     
                },
                pull_ups: {
                    img: pullup,
                    desc: ''     
                },
                tricep_dips: {
                    img: tricepdip,
                    desc: ''
                },
                dumbbell_kickback: {
                    img: tricepkickback,
                    desc: ''     
                },
                reverse_curl: {
                    img: reversecurl,
                    desc: ''     
                },
                tricep_extenstion: {
                    img: tricepextenstion,
                    desc: ''     
                },
            }
        }
    }

    render() {
        console.log('arms ', this.props)
        return (
            <WorkTemp prevProp={this.props.prevProp} workouts={this.state.workouts} workoutGroup='Arms Exercise' />
        )
    }
}
