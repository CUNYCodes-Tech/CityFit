import React, { Component } from 'react'
//import Button from '@material-ui/core/Button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ListItemText } from '@material-ui/core';
import craise from '../exercise_imgs/Legs/calfraise.jpg';
import dlift from '../exercise_imgs/Legs/deadlift.jpg';
import gham from '../exercise_imgs/Legs/gluteham.jpg';
import jsquat from '../exercise_imgs/Legs/jumpsquat.jpg';
import lunge from '../exercise_imgs/Legs/lunge.jpg';
import squat from '../exercise_imgs/Legs/squat.jpg';
import sup from '../exercise_imgs/Legs/stepup.jpg';

export class Legs extends Component {
    backToCatalog = e =>{
        e.preventDefault();
        this.props.backToCatalog();
      }
    render() {
        return (
            <MuiThemeProvider>
                <h1>Legs Excercises</h1>
                <ListItemText primary = "Barbell Squat"/>
                <img src ={squat} alt="legs"></img>

                <ListItemText primary = "Squat Jumps"/>
                <img src ={jsquat} alt="legs"></img>

                <ListItemText primary = "Walking Lunges"/>
                <img src ={lunge} alt="legs"></img>

                <ListItemText primary = "Glute-Ham Raise"/>
                <img src ={gham} alt="legs"></img>

                <ListItemText primary = "DeadLifts"/>
                <img src ={dlift} alt="legs"></img>

                <ListItemText primary = "Step Ups"/>
                <img src ={sup} alt="legs"></img>

                <ListItemText primary = "Calf Raise"/>
                <img src ={craise} alt="legs"></img>

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

export default Legs

