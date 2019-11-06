import React, { Component } from 'react'
//import Button from '@material-ui/core/Button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ListItemText } from '@material-ui/core';
import arnold from '../exercise_imgs/Shoulder/arnold.jpg';
import fraise from '../exercise_imgs/Shoulder/frontraise.jpg';
import inclinerow from '../exercise_imgs/Shoulder/inclinerow.jpg';
import lraise from '../exercise_imgs/Shoulder/lateralraise.jpg';
import opress from '../exercise_imgs/Shoulder/overheadpress.jpg';
import pushpress from '../exercise_imgs/Shoulder/pushpress.jpg';
import uprightrow from '../exercise_imgs/Shoulder/uprightrow.jpg';



export class Shoulders extends Component {
    backToCatalog = e =>{
        e.preventDefault();
        this.props.backToCatalog();
      }
    render() {
        return (
            <MuiThemeProvider>
            <h1>Shoulder Excercises</h1>
            <ListItemText primary = "Upright Row"/>
            <img src ={uprightrow} alt="shoulder"></img>

            <ListItemText primary = "Front Raise"/>
            <img src ={fraise} alt="shoulder"></img>
            
            <ListItemText primary = "Barbell Push Press"/>
            <img src ={pushpress} alt="shoulder"></img>

            <ListItemText primary = "Dumbbell Incline Row"/>
            <img src ={inclinerow} alt="shoulder"></img>

            <ListItemText primary = "Seated Overhead Dumbbell Press"/>
            <img src ={opress} alt="shoulder"></img>

            <ListItemText primary = "Arnold Press"/>
            <img src ={arnold} alt="shoulder"></img>

            <ListItemText primary = "Dumbbell Lateral Raise"/>
            <img src ={lraise} alt="shoulder"></img>

            <br/>

            <button
        variant ='contained'
        color = 'primary'
        onClick = {this.backToCatalog}
        > 
         Return to Catalog
        </button>
            
        </MuiThemeProvider>
        )
    }
}

export default Shoulders
