import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
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
            })
        }) 
        
    }
        
  showModal = (e) => {
    e.preventDefault();
    this.getExInfo(e.target.id)
    this.setState({ 
        ...this.state,
        open: true});
  };

  hideModal = (e) => {
    e.preventDefault();
    this.setState({ 
        ...this.state,
        open: false });
  };


    backToCatalog = e =>{
        e.preventDefault();
        this.props.backToCatalog();
    }

    render() {
        console.log('arms ', this.props)
        let exercisedata = this.state.exerciseData
        return (
            <>
                <h1 style={{marginTop: '3%'}}>Arm Excercises</h1>
                <div className='centerFlex'>
                    {
                        Object.keys(this.state.workouts).map((name, i) => {
                            let dispName = name.split('_')
                            //let path = this.props.prevProp.location.pathname + '/' + name
                            dispName.map((val, i) => {
                                dispName[i] = dispName[i].charAt(0).toUpperCase() + dispName[i].slice(1)
                            })

                            dispName = dispName.join(' ')

                            return (
                                <Card style={{ width: '18rem', margin: '15px' }} key={name + i}>
                                    <Card.Img variant="top" src={this.state.workouts[name].img} style={{ height: '15rem' }}/>
                                    <Card.Body>
                                        <Card.Title>{dispName}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary" id={name} type="button" onClick={this.showModal}>Show More</Button>
                                        {/* <Button variant="primary" onClick={() => this.props.prevProp.history.push(path)}>Show More</Button> */}
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                    <Modal open={this.state.open}
                        onClose={this.hideModal}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        <div>
                            <iframe title="Exercise Details" width="560" height="315" src={exercisedata.video} frameBorder="0" allowFullScreen></iframe>
                            <h3>{exercisedata.description}</h3>
                        </div>
                    </Modal>
                </div>

                <button
                    variant ='contained'
                    color = 'primary'
                    onClick = {this.backToCatalog}
                > 
                    Return to Catalog
                </button>
                </>
            <WorkTemp prevProp={this.props.prevProp} workouts={this.state.workouts} workoutGroup='Arms Exercise' />
        )
    }
}
