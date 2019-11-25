import React, { Component } from 'react';
import WorkTemp from './workout_template';
import bicepcurls from '../exercise_imgs/Arms/bicepcurls.jpg';
import pullup from '../exercise_imgs/Arms/pullup.jpg';
import pushup from '../exercise_imgs/Arms/pushup.jpg';
import reversecurl from '../exercise_imgs/Arms/reversecurl.jpg';
import tricepextenstion from '../exercise_imgs/Arms/tricepextenstion.jpg';
import tricepkickback from '../exercise_imgs/Arms/tricepkickback.jpg';
import tricepdip from '../exercise_imgs/Arms/tricepdip.jpg';
import { Modal } from '@material-ui/core';
import '../../../App.css';
import firebase from '../../../base';
import '../catalog.css'

export default class Arms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            exerciseData : {},
            Exercise_Name: 'None',
            workouts: {
                bicep_curls: {
                    img: bicepcurlsUrl,
                    desc: ''
                },
                push_ups: {
                    img: pushupUrl,
                    desc: ''     
                },
                pull_ups: {
                    img: pullupUrl,
                    desc: ''     
                },
                tricep_dips: {
                    img: tricepdipUrl,
                    desc: ''
                },
                dumbbell_kickback: {
                    img: tricepkickbackUrl,
                    desc: ''     
                },
                reverse_curl: {
                    img: reversecurlURl,
                    desc: ''     
                },
                tricep_extension: {
                    img: tricepextenstionUrl,
                    desc: ''     
                },
                one_arm: {
                    img: onearmUrl,
                    desc: ''     
                },
                dumbbell_punch: {
                    img: punchUrl,
                    desc: ''     
                }
                
            }
        }
    }

    getExInfo = (name) => {
        //console.log(name)
        const ExData = firebase.database().ref('Exercises/Arms/' + name );
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
                    <WorkTemp prevProp={this.props.prevProp} workouts={this.state.workouts} workoutGroup='Arms Exercise' getExInfo={this.getExInfo} />

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

