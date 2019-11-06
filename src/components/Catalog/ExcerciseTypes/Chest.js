import React, { Component } from 'react'
//import Button from '@material-ui/core/Button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ListItemText } from '@material-ui/core';
import press from '../exercise_imgs/Chest/benchpress.jpg';
import cfly from '../exercise_imgs/Chest/cablefly.jpg';
import inclinepress from '../exercise_imgs/Chest/inclinepress.jpg';
import pullover from '../exercise_imgs/Chest/pullover.jpg';
import pushup from '../exercise_imgs/Chest/pushup.jpg';
import tricepdip from '../exercise_imgs/Chest/tricepdip.jpg';





export class Chest extends Component {
    backToCatalog = e =>{
        e.preventDefault();
        this.props.backToCatalog();
      }
    render() {
        return (
            <MuiThemeProvider>
            <h1>Chest Excercises</h1>

            <ListItemText primary = "Push Ups"/>
            <img src ={pushup} alt="chest"></img>

            <ListItemText primary = "Barbell Bench Press"/>
            <img src ={press} alt="chest"></img>

            <ListItemText primary = "Pullover"/>
            <img src ={pullover} alt="chest"></img>

            <ListItemText primary = "Dips"/>
            <img src ={tricepdip} alt="chest"></img>

            <ListItemText primary = "Cable Fly"/>
            <img src ={cfly} alt="chest"></img>

            <ListItemText primary = "Incline Dumbbell Press"/>
            <img src ={inclinepress} alt="chest"></img>

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

export default Chest
