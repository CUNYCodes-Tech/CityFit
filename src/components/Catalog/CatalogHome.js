import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import bicep from './exercise_imgs/bicep.jpg';
import legs from './exercise_imgs/legs.jpg';
import chest from './exercise_imgs/bench.jpg'
import back from './exercise_imgs/back.jpg'
import shoulders from './exercise_imgs/shoulders.jpg'
import './catalog.css';



class CatalogHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catagories: ['arms', 'legs', 'chest', 'back', 'shoulders']
    }
  }
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
      <>
        <h1 style={{marginTop: '3%'}}>Explore a Muscle Group</h1>
        <div id='cataCont'>
          {this.state.catagories.map((name, i) => {
            let disName = name.charAt(0).toUpperCase() + name.slice(1)
            return (
              <Card style={{ width: '20rem' }} key={name + i} className='cata'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{disName}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary" onClick={() => this.props.history.push(`/catalog/${name}`)}>Explore</Button>
                </Card.Body>
              </Card>
            )
          })}
            {/* <button
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
            <img src ={shoulders} alt="bicep"></img> */}

        </div>
      </>
    

    
     );
  }
}
export default CatalogHome; 