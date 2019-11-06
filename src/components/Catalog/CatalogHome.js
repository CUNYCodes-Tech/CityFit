import React, { Component } from 'react';
import './catalog.css';
import bicep from './exercise_imgs/bicep.jpg';
import legs from './exercise_imgs/legs.jpg';
import chest from './exercise_imgs/bench.jpg'
import back from './exercise_imgs/back.jpg'
import shoulders from './exercise_imgs/shoulders.jpg'



class CatalogHome extends Component {
  Arms = e =>{
    e.preventDefault();
    this.props.showArms();
  }
  Legs = e =>{
      e.preventDefault();
      this.props.showLegs();
  }
  Chest = e =>{
    e.preventDefault();
    this.props.showChest();
  }

  Back = e =>{
    e.preventDefault();
    this.props.showBack();
  }

  Shoulders = e =>{
    e.preventDefault();
    this.props.showShoulders();
  }
  
  
  render() {
    return (
    
    <div >
      <h1>Choose a Muscle Group</h1>
        <button
            onClick = {this.Arms}
            className="button"
          
      
        > 
        Arms
        </button>
      
        

        <button
           
            onClick = {this.Legs}
            className="button"
        > 
        Legs
        </button>

        <button
            onClick = {this.Chest}
            className="button"
        > 
        Chest
        </button>

        <button
            onClick = {this.Back}
            className="button"
        > 
        Back
        </button>

        <button
            onClick = {this.Shoulders}
            className="button"
        > 
        Shoulders
        </button>
        <br/>
        <img src ={bicep} alt="bicep"></img>
        <img src ={legs} alt="leg"></img>
        <img src ={chest} alt="bench"></img>
        <img src ={back} alt="bicep"></img>
        <img src ={shoulders} alt="bicep"></img>

        
    </div>
    

    
     );
  }
}
export default CatalogHome; 