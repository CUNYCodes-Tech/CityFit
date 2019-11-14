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
import { Modal } from '@material-ui/core';
import '../../../App.css';
import firebase from '../../../base';

export default class Arms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            exerciseData : {},
            Exercise_Name: 'None',
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
        
    // showModal = (e) => {
    //     e.preventDefault();
    //     this.getExInfo(e.target.id)
    //     this.setState({ 
    //         ...this.state,
    //         open: true});
    // };

    // hideModal = (e) => {
    //     e.preventDefault();
    //     this.setState({ 
    //         ...this.state,
    //         open: false });
    // };

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
                    >
                        <div>
                            <iframe title="Exercise Details" width="560" height="315" src={exercisedata.video} frameBorder="0" allowFullScreen></iframe>
                            <h3>{exercisedata.description}</h3>
                        </div>
                    </Modal>
                </div>
            </> 
        )
    }
}

