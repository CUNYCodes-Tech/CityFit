import React, { Component } from 'react'
//import Button from '@material-ui/core/Button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ListItemText } from '@material-ui/core';
import invertedrows from '../exercise_imgs/Back/invertedrows.jpg';
import latpull from '../exercise_imgs/Back/latpull.gif';
//import row from '../exercise_imgs/Back/row.jpg';
import pullup from '../exercise_imgs/Back/pullup.jpg';
import swing from '../exercise_imgs/Back/swing.jpg';
import walk from '../exercise_imgs/Back/walk.jpg';
import dlift from '../exercise_imgs/Back/deadlift.jpg';





export class Back extends Component {
    backToCatalog = e =>{
        e.preventDefault();
        this.props.backToCatalog();
      }
    render() {
        return (
            <MuiThemeProvider>
                <h1>Back Excercises</h1>

                <ListItemText primary = "Barbell DeadLift"/>
                <img src ={dlift} alt="back"></img>

                <ListItemText primary = "KettleBell Swings"/>
                <img src ={swing} alt="back"></img>

                <ListItemText primary = "Pull-Ups"/>
                <img src ={pullup} alt="back"></img>

                <ListItemText primary = "Inverted Row"/>
                <img src ={invertedrows} alt="back"></img>

                <ListItemText primary = "Lat Pull-Downs"/>
                <img src ={latpull} alt="back"></img>

                <ListItemText primary = "Farmers Walk"/>
                <img src ={walk} alt="back"></img>

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

export default Back
