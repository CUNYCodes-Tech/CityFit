import React, { Component } from 'react';
import '../catalog.css'
//import Button from '@material-ui/core/Button';
import { ListItemText } from '@material-ui/core';
import bicepcurls from '../exercise_imgs/Arms/bicepcurls.jpg';
import pullup from '../exercise_imgs/Arms/pullup.jpg';
import pushup from '../exercise_imgs/Arms/pushup.jpg';
import reversecurl from '../exercise_imgs/Arms/reversecurl.jpg';
import tricepextenstion from '../exercise_imgs/Arms/tricepextenstion.jpg';
import tricepkickback from '../exercise_imgs/Arms/tricepkickback.jpg';
import tricepdip from '../exercise_imgs/Arms/tricepdip.jpg';

export default class Arms extends Component {
    backToCatalog = e =>{
        e.preventDefault();
        this.props.backToCatalog();
      }

    render() {
        return (
            <>
                <h1>Arm Excercises</h1>

                <ListItemText primary = "Bicep Curls"/>
                <img src ={bicepcurls} alt="bicep"></img>

                <ListItemText primary = "Push-Ups"/>
                <img src ={pushup} alt="bicep"></img>

                <ListItemText primary = "Pull-Ups"/>
                <img src ={pullup} alt="bicep"></img>

                <ListItemText primary = "Tricep Dips"/>
                <img src ={tricepdip} alt="bicep"></img>

                <ListItemText primary = "Dumbbell Kickback"/>
                <img src ={tricepkickback} alt="bicep"></img>

                <ListItemText primary = "Reverse Curls"/>
                <img src ={reversecurl} alt="bicep"></img>

                <ListItemText primary = "Tricep Extenstions"/>
                <img src ={tricepextenstion} alt="bicep"></img>
                <br/>

                <button
            variant ='contained'
            color = 'primary'
            onClick = {this.backToCatalog}
            > 
             Return to Catalog
            </button>
                
            </>
            

        )
    }
}
